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
if(typeof cljs.core.async.t30599 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30599 = (function (f,fn_handler,meta30600){
this.f = f;
this.fn_handler = fn_handler;
this.meta30600 = meta30600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30601){
var self__ = this;
var _30601__$1 = this;
return self__.meta30600;
});

cljs.core.async.t30599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30601,meta30600__$1){
var self__ = this;
var _30601__$1 = this;
return (new cljs.core.async.t30599(self__.f,self__.fn_handler,meta30600__$1));
});

cljs.core.async.t30599.cljs$lang$type = true;

cljs.core.async.t30599.cljs$lang$ctorStr = "cljs.core.async/t30599";

cljs.core.async.t30599.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t30599");
});

cljs.core.async.__GT_t30599 = (function __GT_t30599(f__$1,fn_handler__$1,meta30600){
return (new cljs.core.async.t30599(f__$1,fn_handler__$1,meta30600));
});

}

return (new cljs.core.async.t30599(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var G__30603 = buff;
if(G__30603){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__30603.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30603.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__30603);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__30603);
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
var val_30620 = (function (){var G__30617 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30617) : cljs.core.deref.call(null,G__30617));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__30618_30621 = val_30620;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__30618_30621) : fn1.call(null,G__30618_30621));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30620,ret){
return (function (){
var G__30619 = val_30620;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__30619) : fn1.call(null,G__30619));
});})(val_30620,ret))
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
var G__30630 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30630) : cljs.core.deref.call(null,G__30630));
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
var ret = (function (){var G__30631 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30631) : cljs.core.deref.call(null,G__30631));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__30632_30634 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__30632_30634) : fn1.call(null,G__30632_30634));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__30633 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__30633) : fn1.call(null,G__30633));
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
var n__4645__auto___30635 = n;
var x_30636 = (0);
while(true){
if((x_30636 < n__4645__auto___30635)){
(a[x_30636] = (0));

var G__30637 = (x_30636 + (1));
x_30636 = G__30637;
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

var G__30638 = (i + (1));
i = G__30638;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__30646 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30646) : cljs.core.atom.call(null,G__30646));
})();
if(typeof cljs.core.async.t30647 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30647 = (function (flag,alt_flag,meta30648){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30647.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30650 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30650) : cljs.core.deref.call(null,G__30650));
});})(flag))
;

cljs.core.async.t30647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30651_30653 = self__.flag;
var G__30652_30654 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30651_30653,G__30652_30654) : cljs.core.reset_BANG_.call(null,G__30651_30653,G__30652_30654));

return true;
});})(flag))
;

cljs.core.async.t30647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30649){
var self__ = this;
var _30649__$1 = this;
return self__.meta30648;
});})(flag))
;

cljs.core.async.t30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30649,meta30648__$1){
var self__ = this;
var _30649__$1 = this;
return (new cljs.core.async.t30647(self__.flag,self__.alt_flag,meta30648__$1));
});})(flag))
;

cljs.core.async.t30647.cljs$lang$type = true;

cljs.core.async.t30647.cljs$lang$ctorStr = "cljs.core.async/t30647";

cljs.core.async.t30647.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t30647");
});})(flag))
;

cljs.core.async.__GT_t30647 = ((function (flag){
return (function __GT_t30647(flag__$1,alt_flag__$1,meta30648){
return (new cljs.core.async.t30647(flag__$1,alt_flag__$1,meta30648));
});})(flag))
;

}

return (new cljs.core.async.t30647(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30658 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30658 = (function (cb,flag,alt_handler,meta30659){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30659 = meta30659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30658.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t30658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t30658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30660){
var self__ = this;
var _30660__$1 = this;
return self__.meta30659;
});

cljs.core.async.t30658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30660,meta30659__$1){
var self__ = this;
var _30660__$1 = this;
return (new cljs.core.async.t30658(self__.cb,self__.flag,self__.alt_handler,meta30659__$1));
});

cljs.core.async.t30658.cljs$lang$type = true;

cljs.core.async.t30658.cljs$lang$ctorStr = "cljs.core.async/t30658";

cljs.core.async.t30658.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t30658");
});

cljs.core.async.__GT_t30658 = (function __GT_t30658(cb__$1,flag__$1,alt_handler__$1,meta30659){
return (new cljs.core.async.t30658(cb__$1,flag__$1,alt_handler__$1,meta30659));
});

}

return (new cljs.core.async.t30658(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__30668 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__30668) : port.call(null,G__30668));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__30669 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__30669) : port.call(null,G__30669));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30661_SHARP_){
var G__30670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30661_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30670) : fret.call(null,G__30670));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30662_SHARP_){
var G__30671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30662_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30671) : fret.call(null,G__30671));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30672 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30672) : cljs.core.deref.call(null,G__30672));
})(),(function (){var or__3758__auto__ = wport;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30673 = (i + (1));
i = G__30673;
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
var alts_BANG___delegate = function (ports,p__30674){
var map__30676 = p__30674;
var map__30676__$1 = ((cljs.core.seq_QMARK_(map__30676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30676):map__30676);
var opts = map__30676__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30674 = null;
if (arguments.length > 1) {
var G__30677__i = 0, G__30677__a = new Array(arguments.length -  1);
while (G__30677__i < G__30677__a.length) {G__30677__a[G__30677__i] = arguments[G__30677__i + 1]; ++G__30677__i;}
  p__30674 = new cljs.core.IndexedSeq(G__30677__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30674);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30678){
var ports = cljs.core.first(arglist__30678);
var p__30674 = cljs.core.rest(arglist__30678);
return alts_BANG___delegate(ports,p__30674);
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
var c__16134__auto___30776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___30776){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___30776){
return (function (state_30752){
var state_val_30753 = (state_30752[(1)]);
if((state_val_30753 === (7))){
var inst_30748 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30754_30777 = state_30752__$1;
(statearr_30754_30777[(2)] = inst_30748);

(statearr_30754_30777[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (1))){
var state_30752__$1 = state_30752;
var statearr_30755_30778 = state_30752__$1;
(statearr_30755_30778[(2)] = null);

(statearr_30755_30778[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (4))){
var inst_30731 = (state_30752[(7)]);
var inst_30731__$1 = (state_30752[(2)]);
var inst_30732 = (inst_30731__$1 == null);
var state_30752__$1 = (function (){var statearr_30756 = state_30752;
(statearr_30756[(7)] = inst_30731__$1);

return statearr_30756;
})();
if(cljs.core.truth_(inst_30732)){
var statearr_30757_30779 = state_30752__$1;
(statearr_30757_30779[(1)] = (5));

} else {
var statearr_30758_30780 = state_30752__$1;
(statearr_30758_30780[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (13))){
var state_30752__$1 = state_30752;
var statearr_30759_30781 = state_30752__$1;
(statearr_30759_30781[(2)] = null);

(statearr_30759_30781[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (6))){
var inst_30731 = (state_30752[(7)]);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30752__$1,(11),to,inst_30731);
} else {
if((state_val_30753 === (3))){
var inst_30750 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30752__$1,inst_30750);
} else {
if((state_val_30753 === (12))){
var state_30752__$1 = state_30752;
var statearr_30760_30782 = state_30752__$1;
(statearr_30760_30782[(2)] = null);

(statearr_30760_30782[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (2))){
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30752__$1,(4),from);
} else {
if((state_val_30753 === (11))){
var inst_30741 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
if(cljs.core.truth_(inst_30741)){
var statearr_30761_30783 = state_30752__$1;
(statearr_30761_30783[(1)] = (12));

} else {
var statearr_30762_30784 = state_30752__$1;
(statearr_30762_30784[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (9))){
var state_30752__$1 = state_30752;
var statearr_30763_30785 = state_30752__$1;
(statearr_30763_30785[(2)] = null);

(statearr_30763_30785[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (5))){
var state_30752__$1 = state_30752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30764_30786 = state_30752__$1;
(statearr_30764_30786[(1)] = (8));

} else {
var statearr_30765_30787 = state_30752__$1;
(statearr_30765_30787[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (14))){
var inst_30746 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30766_30788 = state_30752__$1;
(statearr_30766_30788[(2)] = inst_30746);

(statearr_30766_30788[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (10))){
var inst_30738 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30767_30789 = state_30752__$1;
(statearr_30767_30789[(2)] = inst_30738);

(statearr_30767_30789[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_30753 === (8))){
var inst_30735 = cljs.core.async.close_BANG_(to);
var state_30752__$1 = state_30752;
var statearr_30768_30790 = state_30752__$1;
(statearr_30768_30790[(2)] = inst_30735);

(statearr_30768_30790[(1)] = (10));


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
});})(c__16134__auto___30776))
;
return ((function (switch__16054__auto__,c__16134__auto___30776){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_30772 = [null,null,null,null,null,null,null,null];
(statearr_30772[(0)] = state_machine__16055__auto__);

(statearr_30772[(1)] = (1));

return statearr_30772;
});
var state_machine__16055__auto____1 = (function (state_30752){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_30752);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e30773){if((e30773 instanceof Object)){
var ex__16058__auto__ = e30773;
var statearr_30774_30791 = state_30752;
(statearr_30774_30791[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30752);

return cljs.core.constant$keyword$99;
} else {
throw e30773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__30792 = state_30752;
state_30752 = G__30792;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_30752){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_30752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___30776))
})();
var state__16136__auto__ = (function (){var statearr_30775 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_30775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___30776);

return statearr_30775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___30776))
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
return (function (p__30978){
var vec__30979 = p__30978;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(1),null);
var job = vec__30979;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16134__auto___31163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___31163,res,vec__30979,v,p,job,jobs,results){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___31163,res,vec__30979,v,p,job,jobs,results){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (2))){
var inst_30981 = (state_30984[(2)]);
var inst_30982 = cljs.core.async.close_BANG_(res);
var state_30984__$1 = (function (){var statearr_30986 = state_30984;
(statearr_30986[(7)] = inst_30981);

return statearr_30986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30984__$1,inst_30982);
} else {
if((state_val_30985 === (1))){
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30984__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16134__auto___31163,res,vec__30979,v,p,job,jobs,results))
;
return ((function (switch__16054__auto__,c__16134__auto___31163,res,vec__30979,v,p,job,jobs,results){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_30990 = [null,null,null,null,null,null,null,null];
(statearr_30990[(0)] = state_machine__16055__auto__);

(statearr_30990[(1)] = (1));

return statearr_30990;
});
var state_machine__16055__auto____1 = (function (state_30984){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_30984);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e30991){if((e30991 instanceof Object)){
var ex__16058__auto__ = e30991;
var statearr_30992_31164 = state_30984;
(statearr_30992_31164[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30984);

return cljs.core.constant$keyword$99;
} else {
throw e30991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31165 = state_30984;
state_30984 = G__31165;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___31163,res,vec__30979,v,p,job,jobs,results))
})();
var state__16136__auto__ = (function (){var statearr_30993 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_30993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31163);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___31163,res,vec__30979,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30994){
var vec__30995 = p__30994;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30995,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30995,(1),null);
var job = vec__30995;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__30996_31166 = v;
var G__30997_31167 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__30996_31166,G__30997_31167) : xf.call(null,G__30996_31166,G__30997_31167));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4645__auto___31168 = n;
var __31169 = (0);
while(true){
if((__31169 < n__4645__auto___31168)){
var G__30998_31170 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30998_31170) {
case "async":
var c__16134__auto___31172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31169,c__16134__auto___31172,G__30998_31170,n__4645__auto___31168,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (__31169,c__16134__auto___31172,G__30998_31170,n__4645__auto___31168,jobs,results,process,async){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (7))){
var inst_31007 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31013_31173 = state_31011__$1;
(statearr_31013_31173[(2)] = inst_31007);

(statearr_31013_31173[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31012 === (6))){
var state_31011__$1 = state_31011;
var statearr_31014_31174 = state_31011__$1;
(statearr_31014_31174[(2)] = null);

(statearr_31014_31174[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31012 === (5))){
var state_31011__$1 = state_31011;
var statearr_31015_31175 = state_31011__$1;
(statearr_31015_31175[(2)] = null);

(statearr_31015_31175[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31012 === (4))){
var inst_31001 = (state_31011[(2)]);
var inst_31002 = async(inst_31001);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_31002)){
var statearr_31016_31176 = state_31011__$1;
(statearr_31016_31176[(1)] = (5));

} else {
var statearr_31017_31177 = state_31011__$1;
(statearr_31017_31177[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31012 === (3))){
var inst_31009 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (2))){
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31011__$1,(4),jobs);
} else {
if((state_val_31012 === (1))){
var state_31011__$1 = state_31011;
var statearr_31018_31178 = state_31011__$1;
(statearr_31018_31178[(2)] = null);

(statearr_31018_31178[(1)] = (2));


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
});})(__31169,c__16134__auto___31172,G__30998_31170,n__4645__auto___31168,jobs,results,process,async))
;
return ((function (__31169,switch__16054__auto__,c__16134__auto___31172,G__30998_31170,n__4645__auto___31168,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31022 = [null,null,null,null,null,null,null];
(statearr_31022[(0)] = state_machine__16055__auto__);

(statearr_31022[(1)] = (1));

return statearr_31022;
});
var state_machine__16055__auto____1 = (function (state_31011){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31011);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object)){
var ex__16058__auto__ = e31023;
var statearr_31024_31179 = state_31011;
(statearr_31024_31179[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31011);

return cljs.core.constant$keyword$99;
} else {
throw e31023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31180 = state_31011;
state_31011 = G__31180;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(__31169,switch__16054__auto__,c__16134__auto___31172,G__30998_31170,n__4645__auto___31168,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31025 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31172);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(__31169,c__16134__auto___31172,G__30998_31170,n__4645__auto___31168,jobs,results,process,async))
);


break;
case "compute":
var c__16134__auto___31181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31169,c__16134__auto___31181,G__30998_31170,n__4645__auto___31168,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (__31169,c__16134__auto___31181,G__30998_31170,n__4645__auto___31168,jobs,results,process,async){
return (function (state_31038){
var state_val_31039 = (state_31038[(1)]);
if((state_val_31039 === (7))){
var inst_31034 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
var statearr_31040_31182 = state_31038__$1;
(statearr_31040_31182[(2)] = inst_31034);

(statearr_31040_31182[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31039 === (6))){
var state_31038__$1 = state_31038;
var statearr_31041_31183 = state_31038__$1;
(statearr_31041_31183[(2)] = null);

(statearr_31041_31183[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31039 === (5))){
var state_31038__$1 = state_31038;
var statearr_31042_31184 = state_31038__$1;
(statearr_31042_31184[(2)] = null);

(statearr_31042_31184[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31039 === (4))){
var inst_31028 = (state_31038[(2)]);
var inst_31029 = process(inst_31028);
var state_31038__$1 = state_31038;
if(cljs.core.truth_(inst_31029)){
var statearr_31043_31185 = state_31038__$1;
(statearr_31043_31185[(1)] = (5));

} else {
var statearr_31044_31186 = state_31038__$1;
(statearr_31044_31186[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31039 === (3))){
var inst_31036 = (state_31038[(2)]);
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31038__$1,inst_31036);
} else {
if((state_val_31039 === (2))){
var state_31038__$1 = state_31038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31038__$1,(4),jobs);
} else {
if((state_val_31039 === (1))){
var state_31038__$1 = state_31038;
var statearr_31045_31187 = state_31038__$1;
(statearr_31045_31187[(2)] = null);

(statearr_31045_31187[(1)] = (2));


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
});})(__31169,c__16134__auto___31181,G__30998_31170,n__4645__auto___31168,jobs,results,process,async))
;
return ((function (__31169,switch__16054__auto__,c__16134__auto___31181,G__30998_31170,n__4645__auto___31168,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31049 = [null,null,null,null,null,null,null];
(statearr_31049[(0)] = state_machine__16055__auto__);

(statearr_31049[(1)] = (1));

return statearr_31049;
});
var state_machine__16055__auto____1 = (function (state_31038){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31038);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31050){if((e31050 instanceof Object)){
var ex__16058__auto__ = e31050;
var statearr_31051_31188 = state_31038;
(statearr_31051_31188[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31038);

return cljs.core.constant$keyword$99;
} else {
throw e31050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31189 = state_31038;
state_31038 = G__31189;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31038){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(__31169,switch__16054__auto__,c__16134__auto___31181,G__30998_31170,n__4645__auto___31168,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31052 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31181);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(__31169,c__16134__auto___31181,G__30998_31170,n__4645__auto___31168,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31190 = (__31169 + (1));
__31169 = G__31190;
continue;
} else {
}
break;
}

var c__16134__auto___31191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___31191,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___31191,jobs,results,process,async){
return (function (state_31074){
var state_val_31075 = (state_31074[(1)]);
if((state_val_31075 === (9))){
var inst_31067 = (state_31074[(2)]);
var state_31074__$1 = (function (){var statearr_31076 = state_31074;
(statearr_31076[(7)] = inst_31067);

return statearr_31076;
})();
var statearr_31077_31192 = state_31074__$1;
(statearr_31077_31192[(2)] = null);

(statearr_31077_31192[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31075 === (8))){
var inst_31060 = (state_31074[(8)]);
var inst_31065 = (state_31074[(2)]);
var state_31074__$1 = (function (){var statearr_31078 = state_31074;
(statearr_31078[(9)] = inst_31065);

return statearr_31078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31074__$1,(9),results,inst_31060);
} else {
if((state_val_31075 === (7))){
var inst_31070 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31079_31193 = state_31074__$1;
(statearr_31079_31193[(2)] = inst_31070);

(statearr_31079_31193[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31075 === (6))){
var inst_31060 = (state_31074[(8)]);
var inst_31055 = (state_31074[(10)]);
var inst_31060__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31062 = [inst_31055,inst_31060__$1];
var inst_31063 = (new cljs.core.PersistentVector(null,2,(5),inst_31061,inst_31062,null));
var state_31074__$1 = (function (){var statearr_31080 = state_31074;
(statearr_31080[(8)] = inst_31060__$1);

return statearr_31080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31074__$1,(8),jobs,inst_31063);
} else {
if((state_val_31075 === (5))){
var inst_31058 = cljs.core.async.close_BANG_(jobs);
var state_31074__$1 = state_31074;
var statearr_31081_31194 = state_31074__$1;
(statearr_31081_31194[(2)] = inst_31058);

(statearr_31081_31194[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31075 === (4))){
var inst_31055 = (state_31074[(10)]);
var inst_31055__$1 = (state_31074[(2)]);
var inst_31056 = (inst_31055__$1 == null);
var state_31074__$1 = (function (){var statearr_31082 = state_31074;
(statearr_31082[(10)] = inst_31055__$1);

return statearr_31082;
})();
if(cljs.core.truth_(inst_31056)){
var statearr_31083_31195 = state_31074__$1;
(statearr_31083_31195[(1)] = (5));

} else {
var statearr_31084_31196 = state_31074__$1;
(statearr_31084_31196[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31075 === (3))){
var inst_31072 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31074__$1,inst_31072);
} else {
if((state_val_31075 === (2))){
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31074__$1,(4),from);
} else {
if((state_val_31075 === (1))){
var state_31074__$1 = state_31074;
var statearr_31085_31197 = state_31074__$1;
(statearr_31085_31197[(2)] = null);

(statearr_31085_31197[(1)] = (2));


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
});})(c__16134__auto___31191,jobs,results,process,async))
;
return ((function (switch__16054__auto__,c__16134__auto___31191,jobs,results,process,async){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31089[(0)] = state_machine__16055__auto__);

(statearr_31089[(1)] = (1));

return statearr_31089;
});
var state_machine__16055__auto____1 = (function (state_31074){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31074);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31090){if((e31090 instanceof Object)){
var ex__16058__auto__ = e31090;
var statearr_31091_31198 = state_31074;
(statearr_31091_31198[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31074);

return cljs.core.constant$keyword$99;
} else {
throw e31090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31199 = state_31074;
state_31074 = G__31199;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31074){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___31191,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31092 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31191);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___31191,jobs,results,process,async))
);


var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__,jobs,results,process,async){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__,jobs,results,process,async){
return (function (state_31130){
var state_val_31131 = (state_31130[(1)]);
if((state_val_31131 === (7))){
var inst_31126 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31132_31200 = state_31130__$1;
(statearr_31132_31200[(2)] = inst_31126);

(statearr_31132_31200[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (20))){
var state_31130__$1 = state_31130;
var statearr_31133_31201 = state_31130__$1;
(statearr_31133_31201[(2)] = null);

(statearr_31133_31201[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (1))){
var state_31130__$1 = state_31130;
var statearr_31134_31202 = state_31130__$1;
(statearr_31134_31202[(2)] = null);

(statearr_31134_31202[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (4))){
var inst_31095 = (state_31130[(7)]);
var inst_31095__$1 = (state_31130[(2)]);
var inst_31096 = (inst_31095__$1 == null);
var state_31130__$1 = (function (){var statearr_31135 = state_31130;
(statearr_31135[(7)] = inst_31095__$1);

return statearr_31135;
})();
if(cljs.core.truth_(inst_31096)){
var statearr_31136_31203 = state_31130__$1;
(statearr_31136_31203[(1)] = (5));

} else {
var statearr_31137_31204 = state_31130__$1;
(statearr_31137_31204[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (15))){
var inst_31108 = (state_31130[(8)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31130__$1,(18),to,inst_31108);
} else {
if((state_val_31131 === (21))){
var inst_31121 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31138_31205 = state_31130__$1;
(statearr_31138_31205[(2)] = inst_31121);

(statearr_31138_31205[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (13))){
var inst_31123 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31139 = state_31130;
(statearr_31139[(9)] = inst_31123);

return statearr_31139;
})();
var statearr_31140_31206 = state_31130__$1;
(statearr_31140_31206[(2)] = null);

(statearr_31140_31206[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (6))){
var inst_31095 = (state_31130[(7)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31130__$1,(11),inst_31095);
} else {
if((state_val_31131 === (17))){
var inst_31116 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
if(cljs.core.truth_(inst_31116)){
var statearr_31141_31207 = state_31130__$1;
(statearr_31141_31207[(1)] = (19));

} else {
var statearr_31142_31208 = state_31130__$1;
(statearr_31142_31208[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (3))){
var inst_31128 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31130__$1,inst_31128);
} else {
if((state_val_31131 === (12))){
var inst_31105 = (state_31130[(10)]);
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31130__$1,(14),inst_31105);
} else {
if((state_val_31131 === (2))){
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31130__$1,(4),results);
} else {
if((state_val_31131 === (19))){
var state_31130__$1 = state_31130;
var statearr_31143_31209 = state_31130__$1;
(statearr_31143_31209[(2)] = null);

(statearr_31143_31209[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (11))){
var inst_31105 = (state_31130[(2)]);
var state_31130__$1 = (function (){var statearr_31144 = state_31130;
(statearr_31144[(10)] = inst_31105);

return statearr_31144;
})();
var statearr_31145_31210 = state_31130__$1;
(statearr_31145_31210[(2)] = null);

(statearr_31145_31210[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (9))){
var state_31130__$1 = state_31130;
var statearr_31146_31211 = state_31130__$1;
(statearr_31146_31211[(2)] = null);

(statearr_31146_31211[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (5))){
var state_31130__$1 = state_31130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31147_31212 = state_31130__$1;
(statearr_31147_31212[(1)] = (8));

} else {
var statearr_31148_31213 = state_31130__$1;
(statearr_31148_31213[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (14))){
var inst_31110 = (state_31130[(11)]);
var inst_31108 = (state_31130[(8)]);
var inst_31108__$1 = (state_31130[(2)]);
var inst_31109 = (inst_31108__$1 == null);
var inst_31110__$1 = cljs.core.not(inst_31109);
var state_31130__$1 = (function (){var statearr_31149 = state_31130;
(statearr_31149[(11)] = inst_31110__$1);

(statearr_31149[(8)] = inst_31108__$1);

return statearr_31149;
})();
if(inst_31110__$1){
var statearr_31150_31214 = state_31130__$1;
(statearr_31150_31214[(1)] = (15));

} else {
var statearr_31151_31215 = state_31130__$1;
(statearr_31151_31215[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (16))){
var inst_31110 = (state_31130[(11)]);
var state_31130__$1 = state_31130;
var statearr_31152_31216 = state_31130__$1;
(statearr_31152_31216[(2)] = inst_31110);

(statearr_31152_31216[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (10))){
var inst_31102 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31153_31217 = state_31130__$1;
(statearr_31153_31217[(2)] = inst_31102);

(statearr_31153_31217[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (18))){
var inst_31113 = (state_31130[(2)]);
var state_31130__$1 = state_31130;
var statearr_31154_31218 = state_31130__$1;
(statearr_31154_31218[(2)] = inst_31113);

(statearr_31154_31218[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31131 === (8))){
var inst_31099 = cljs.core.async.close_BANG_(to);
var state_31130__$1 = state_31130;
var statearr_31155_31219 = state_31130__$1;
(statearr_31155_31219[(2)] = inst_31099);

(statearr_31155_31219[(1)] = (10));


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
var statearr_31159 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = state_machine__16055__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var state_machine__16055__auto____1 = (function (state_31130){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31130);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__16058__auto__ = e31160;
var statearr_31161_31220 = state_31130;
(statearr_31161_31220[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31130);

return cljs.core.constant$keyword$99;
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31221 = state_31130;
state_31130 = G__31221;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31130){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__,jobs,results,process,async))
})();
var state__16136__auto__ = (function (){var statearr_31162 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_31162;
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
var c__16134__auto___31344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___31344,tc,fc){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___31344,tc,fc){
return (function (state_31318){
var state_val_31319 = (state_31318[(1)]);
if((state_val_31319 === (7))){
var inst_31314 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31320_31345 = state_31318__$1;
(statearr_31320_31345[(2)] = inst_31314);

(statearr_31320_31345[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (1))){
var state_31318__$1 = state_31318;
var statearr_31321_31346 = state_31318__$1;
(statearr_31321_31346[(2)] = null);

(statearr_31321_31346[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (4))){
var inst_31295 = (state_31318[(7)]);
var inst_31295__$1 = (state_31318[(2)]);
var inst_31296 = (inst_31295__$1 == null);
var state_31318__$1 = (function (){var statearr_31322 = state_31318;
(statearr_31322[(7)] = inst_31295__$1);

return statearr_31322;
})();
if(cljs.core.truth_(inst_31296)){
var statearr_31323_31347 = state_31318__$1;
(statearr_31323_31347[(1)] = (5));

} else {
var statearr_31324_31348 = state_31318__$1;
(statearr_31324_31348[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (13))){
var state_31318__$1 = state_31318;
var statearr_31325_31349 = state_31318__$1;
(statearr_31325_31349[(2)] = null);

(statearr_31325_31349[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (6))){
var inst_31295 = (state_31318[(7)]);
var inst_31301 = (function (){var G__31326 = inst_31295;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31326) : p.call(null,G__31326));
})();
var state_31318__$1 = state_31318;
if(cljs.core.truth_(inst_31301)){
var statearr_31327_31350 = state_31318__$1;
(statearr_31327_31350[(1)] = (9));

} else {
var statearr_31328_31351 = state_31318__$1;
(statearr_31328_31351[(1)] = (10));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (3))){
var inst_31316 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31318__$1,inst_31316);
} else {
if((state_val_31319 === (12))){
var state_31318__$1 = state_31318;
var statearr_31329_31352 = state_31318__$1;
(statearr_31329_31352[(2)] = null);

(statearr_31329_31352[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (2))){
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31318__$1,(4),ch);
} else {
if((state_val_31319 === (11))){
var inst_31295 = (state_31318[(7)]);
var inst_31305 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31318__$1,(8),inst_31305,inst_31295);
} else {
if((state_val_31319 === (9))){
var state_31318__$1 = state_31318;
var statearr_31330_31353 = state_31318__$1;
(statearr_31330_31353[(2)] = tc);

(statearr_31330_31353[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (5))){
var inst_31298 = cljs.core.async.close_BANG_(tc);
var inst_31299 = cljs.core.async.close_BANG_(fc);
var state_31318__$1 = (function (){var statearr_31331 = state_31318;
(statearr_31331[(8)] = inst_31298);

return statearr_31331;
})();
var statearr_31332_31354 = state_31318__$1;
(statearr_31332_31354[(2)] = inst_31299);

(statearr_31332_31354[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (14))){
var inst_31312 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31333_31355 = state_31318__$1;
(statearr_31333_31355[(2)] = inst_31312);

(statearr_31333_31355[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (10))){
var state_31318__$1 = state_31318;
var statearr_31334_31356 = state_31318__$1;
(statearr_31334_31356[(2)] = fc);

(statearr_31334_31356[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31319 === (8))){
var inst_31307 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
if(cljs.core.truth_(inst_31307)){
var statearr_31335_31357 = state_31318__$1;
(statearr_31335_31357[(1)] = (12));

} else {
var statearr_31336_31358 = state_31318__$1;
(statearr_31336_31358[(1)] = (13));

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
});})(c__16134__auto___31344,tc,fc))
;
return ((function (switch__16054__auto__,c__16134__auto___31344,tc,fc){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_31340 = [null,null,null,null,null,null,null,null,null];
(statearr_31340[(0)] = state_machine__16055__auto__);

(statearr_31340[(1)] = (1));

return statearr_31340;
});
var state_machine__16055__auto____1 = (function (state_31318){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31318);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31341){if((e31341 instanceof Object)){
var ex__16058__auto__ = e31341;
var statearr_31342_31359 = state_31318;
(statearr_31342_31359[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31318);

return cljs.core.constant$keyword$99;
} else {
throw e31341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31360 = state_31318;
state_31318 = G__31360;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31318){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___31344,tc,fc))
})();
var state__16136__auto__ = (function (){var statearr_31343 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___31344);

return statearr_31343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___31344,tc,fc))
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
return (function (state_31409){
var state_val_31410 = (state_31409[(1)]);
if((state_val_31410 === (7))){
var inst_31405 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
var statearr_31411_31429 = state_31409__$1;
(statearr_31411_31429[(2)] = inst_31405);

(statearr_31411_31429[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31410 === (6))){
var inst_31398 = (state_31409[(7)]);
var inst_31395 = (state_31409[(8)]);
var inst_31402 = (function (){var G__31412 = inst_31395;
var G__31413 = inst_31398;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31412,G__31413) : f.call(null,G__31412,G__31413));
})();
var inst_31395__$1 = inst_31402;
var state_31409__$1 = (function (){var statearr_31414 = state_31409;
(statearr_31414[(8)] = inst_31395__$1);

return statearr_31414;
})();
var statearr_31415_31430 = state_31409__$1;
(statearr_31415_31430[(2)] = null);

(statearr_31415_31430[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31410 === (5))){
var inst_31395 = (state_31409[(8)]);
var state_31409__$1 = state_31409;
var statearr_31416_31431 = state_31409__$1;
(statearr_31416_31431[(2)] = inst_31395);

(statearr_31416_31431[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31410 === (4))){
var inst_31398 = (state_31409[(7)]);
var inst_31398__$1 = (state_31409[(2)]);
var inst_31399 = (inst_31398__$1 == null);
var state_31409__$1 = (function (){var statearr_31417 = state_31409;
(statearr_31417[(7)] = inst_31398__$1);

return statearr_31417;
})();
if(cljs.core.truth_(inst_31399)){
var statearr_31418_31432 = state_31409__$1;
(statearr_31418_31432[(1)] = (5));

} else {
var statearr_31419_31433 = state_31409__$1;
(statearr_31419_31433[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31410 === (3))){
var inst_31407 = (state_31409[(2)]);
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31409__$1,inst_31407);
} else {
if((state_val_31410 === (2))){
var state_31409__$1 = state_31409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31409__$1,(4),ch);
} else {
if((state_val_31410 === (1))){
var inst_31395 = init;
var state_31409__$1 = (function (){var statearr_31420 = state_31409;
(statearr_31420[(8)] = inst_31395);

return statearr_31420;
})();
var statearr_31421_31434 = state_31409__$1;
(statearr_31421_31434[(2)] = null);

(statearr_31421_31434[(1)] = (2));


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
var statearr_31425 = [null,null,null,null,null,null,null,null,null];
(statearr_31425[(0)] = state_machine__16055__auto__);

(statearr_31425[(1)] = (1));

return statearr_31425;
});
var state_machine__16055__auto____1 = (function (state_31409){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31409);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31426){if((e31426 instanceof Object)){
var ex__16058__auto__ = e31426;
var statearr_31427_31435 = state_31409;
(statearr_31427_31435[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31409);

return cljs.core.constant$keyword$99;
} else {
throw e31426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31436 = state_31409;
state_31409 = G__31436;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31409){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__))
})();
var state__16136__auto__ = (function (){var statearr_31428 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_31428;
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
return (function (state_31513){
var state_val_31514 = (state_31513[(1)]);
if((state_val_31514 === (7))){
var inst_31495 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31515_31538 = state_31513__$1;
(statearr_31515_31538[(2)] = inst_31495);

(statearr_31515_31538[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (1))){
var inst_31489 = cljs.core.seq(coll);
var inst_31490 = inst_31489;
var state_31513__$1 = (function (){var statearr_31516 = state_31513;
(statearr_31516[(7)] = inst_31490);

return statearr_31516;
})();
var statearr_31517_31539 = state_31513__$1;
(statearr_31517_31539[(2)] = null);

(statearr_31517_31539[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (4))){
var inst_31490 = (state_31513[(7)]);
var inst_31493 = cljs.core.first(inst_31490);
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31513__$1,(7),ch,inst_31493);
} else {
if((state_val_31514 === (13))){
var inst_31507 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31518_31540 = state_31513__$1;
(statearr_31518_31540[(2)] = inst_31507);

(statearr_31518_31540[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (6))){
var inst_31498 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31498)){
var statearr_31519_31541 = state_31513__$1;
(statearr_31519_31541[(1)] = (8));

} else {
var statearr_31520_31542 = state_31513__$1;
(statearr_31520_31542[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (3))){
var inst_31511 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31513__$1,inst_31511);
} else {
if((state_val_31514 === (12))){
var state_31513__$1 = state_31513;
var statearr_31521_31543 = state_31513__$1;
(statearr_31521_31543[(2)] = null);

(statearr_31521_31543[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (2))){
var inst_31490 = (state_31513[(7)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31490)){
var statearr_31522_31544 = state_31513__$1;
(statearr_31522_31544[(1)] = (4));

} else {
var statearr_31523_31545 = state_31513__$1;
(statearr_31523_31545[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (11))){
var inst_31504 = cljs.core.async.close_BANG_(ch);
var state_31513__$1 = state_31513;
var statearr_31524_31546 = state_31513__$1;
(statearr_31524_31546[(2)] = inst_31504);

(statearr_31524_31546[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (9))){
var state_31513__$1 = state_31513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31525_31547 = state_31513__$1;
(statearr_31525_31547[(1)] = (11));

} else {
var statearr_31526_31548 = state_31513__$1;
(statearr_31526_31548[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (5))){
var inst_31490 = (state_31513[(7)]);
var state_31513__$1 = state_31513;
var statearr_31527_31549 = state_31513__$1;
(statearr_31527_31549[(2)] = inst_31490);

(statearr_31527_31549[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (10))){
var inst_31509 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31528_31550 = state_31513__$1;
(statearr_31528_31550[(2)] = inst_31509);

(statearr_31528_31550[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31514 === (8))){
var inst_31490 = (state_31513[(7)]);
var inst_31500 = cljs.core.next(inst_31490);
var inst_31490__$1 = inst_31500;
var state_31513__$1 = (function (){var statearr_31529 = state_31513;
(statearr_31529[(7)] = inst_31490__$1);

return statearr_31529;
})();
var statearr_31530_31551 = state_31513__$1;
(statearr_31530_31551[(2)] = null);

(statearr_31530_31551[(1)] = (2));


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
var statearr_31534 = [null,null,null,null,null,null,null,null];
(statearr_31534[(0)] = state_machine__16055__auto__);

(statearr_31534[(1)] = (1));

return statearr_31534;
});
var state_machine__16055__auto____1 = (function (state_31513){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31513);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e31535){if((e31535 instanceof Object)){
var ex__16058__auto__ = e31535;
var statearr_31536_31552 = state_31513;
(statearr_31536_31552[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31513);

return cljs.core.constant$keyword$99;
} else {
throw e31535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__31553 = state_31513;
state_31513 = G__31553;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31513){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__))
})();
var state__16136__auto__ = (function (){var statearr_31537 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_31537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_31537;
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

cljs.core.async.Mux = (function (){var obj31555 = {};
return obj31555;
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
return (function (){var or__3758__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__31559 = x__4402__auto__;
return goog.typeOf(G__31559);
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


cljs.core.async.Mult = (function (){var obj31561 = {};
return obj31561;
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
return (function (){var or__3758__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__31565 = x__4402__auto__;
return goog.typeOf(G__31565);
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
return (function (){var or__3758__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__31569 = x__4402__auto__;
return goog.typeOf(G__31569);
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
return (function (){var or__3758__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__31573 = x__4402__auto__;
return goog.typeOf(G__31573);
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
var cs = (function (){var G__31803 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31803) : cljs.core.atom.call(null,G__31803));
})();
var m = (function (){
if(typeof cljs.core.async.t31804 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31804 = (function (cs,ch,mult,meta31805){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31804.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31804.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31804.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31804.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31807_32032 = self__.cs;
var G__31808_32033 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31807_32032,G__31808_32033) : cljs.core.reset_BANG_.call(null,G__31807_32032,G__31808_32033));

return null;
});})(cs))
;

cljs.core.async.t31804.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31806){
var self__ = this;
var _31806__$1 = this;
return self__.meta31805;
});})(cs))
;

cljs.core.async.t31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31806,meta31805__$1){
var self__ = this;
var _31806__$1 = this;
return (new cljs.core.async.t31804(self__.cs,self__.ch,self__.mult,meta31805__$1));
});})(cs))
;

cljs.core.async.t31804.cljs$lang$type = true;

cljs.core.async.t31804.cljs$lang$ctorStr = "cljs.core.async/t31804";

cljs.core.async.t31804.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t31804");
});})(cs))
;

cljs.core.async.__GT_t31804 = ((function (cs){
return (function __GT_t31804(cs__$1,ch__$1,mult__$1,meta31805){
return (new cljs.core.async.t31804(cs__$1,ch__$1,mult__$1,meta31805));
});})(cs))
;

}

return (new cljs.core.async.t31804(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__31809 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31809) : cljs.core.atom.call(null,G__31809));
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
var c__16134__auto___32034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___32034,cs,m,dchan,dctr,done){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___32034,cs,m,dchan,dctr,done){
return (function (state_31940){
var state_val_31941 = (state_31940[(1)]);
if((state_val_31941 === (7))){
var inst_31936 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31942_32035 = state_31940__$1;
(statearr_31942_32035[(2)] = inst_31936);

(statearr_31942_32035[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (20))){
var inst_31841 = (state_31940[(7)]);
var inst_31851 = cljs.core.first(inst_31841);
var inst_31852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31851,(0),null);
var inst_31853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31851,(1),null);
var state_31940__$1 = (function (){var statearr_31943 = state_31940;
(statearr_31943[(8)] = inst_31852);

return statearr_31943;
})();
if(cljs.core.truth_(inst_31853)){
var statearr_31944_32036 = state_31940__$1;
(statearr_31944_32036[(1)] = (22));

} else {
var statearr_31945_32037 = state_31940__$1;
(statearr_31945_32037[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (27))){
var inst_31888 = (state_31940[(9)]);
var inst_31883 = (state_31940[(10)]);
var inst_31881 = (state_31940[(11)]);
var inst_31812 = (state_31940[(12)]);
var inst_31888__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31881,inst_31883);
var inst_31889 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31888__$1,inst_31812,done);
var state_31940__$1 = (function (){var statearr_31946 = state_31940;
(statearr_31946[(9)] = inst_31888__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31889)){
var statearr_31947_32038 = state_31940__$1;
(statearr_31947_32038[(1)] = (30));

} else {
var statearr_31948_32039 = state_31940__$1;
(statearr_31948_32039[(1)] = (31));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (1))){
var state_31940__$1 = state_31940;
var statearr_31949_32040 = state_31940__$1;
(statearr_31949_32040[(2)] = null);

(statearr_31949_32040[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (24))){
var inst_31841 = (state_31940[(7)]);
var inst_31858 = (state_31940[(2)]);
var inst_31859 = cljs.core.next(inst_31841);
var inst_31821 = inst_31859;
var inst_31822 = null;
var inst_31823 = (0);
var inst_31824 = (0);
var state_31940__$1 = (function (){var statearr_31950 = state_31940;
(statearr_31950[(13)] = inst_31823);

(statearr_31950[(14)] = inst_31822);

(statearr_31950[(15)] = inst_31824);

(statearr_31950[(16)] = inst_31858);

(statearr_31950[(17)] = inst_31821);

return statearr_31950;
})();
var statearr_31951_32041 = state_31940__$1;
(statearr_31951_32041[(2)] = null);

(statearr_31951_32041[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (39))){
var state_31940__$1 = state_31940;
var statearr_31955_32042 = state_31940__$1;
(statearr_31955_32042[(2)] = null);

(statearr_31955_32042[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (4))){
var inst_31812 = (state_31940[(12)]);
var inst_31812__$1 = (state_31940[(2)]);
var inst_31813 = (inst_31812__$1 == null);
var state_31940__$1 = (function (){var statearr_31956 = state_31940;
(statearr_31956[(12)] = inst_31812__$1);

return statearr_31956;
})();
if(cljs.core.truth_(inst_31813)){
var statearr_31957_32043 = state_31940__$1;
(statearr_31957_32043[(1)] = (5));

} else {
var statearr_31958_32044 = state_31940__$1;
(statearr_31958_32044[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (15))){
var inst_31823 = (state_31940[(13)]);
var inst_31822 = (state_31940[(14)]);
var inst_31824 = (state_31940[(15)]);
var inst_31821 = (state_31940[(17)]);
var inst_31837 = (state_31940[(2)]);
var inst_31838 = (inst_31824 + (1));
var tmp31952 = inst_31823;
var tmp31953 = inst_31822;
var tmp31954 = inst_31821;
var inst_31821__$1 = tmp31954;
var inst_31822__$1 = tmp31953;
var inst_31823__$1 = tmp31952;
var inst_31824__$1 = inst_31838;
var state_31940__$1 = (function (){var statearr_31959 = state_31940;
(statearr_31959[(13)] = inst_31823__$1);

(statearr_31959[(14)] = inst_31822__$1);

(statearr_31959[(15)] = inst_31824__$1);

(statearr_31959[(18)] = inst_31837);

(statearr_31959[(17)] = inst_31821__$1);

return statearr_31959;
})();
var statearr_31960_32045 = state_31940__$1;
(statearr_31960_32045[(2)] = null);

(statearr_31960_32045[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (21))){
var inst_31862 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31964_32046 = state_31940__$1;
(statearr_31964_32046[(2)] = inst_31862);

(statearr_31964_32046[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (31))){
var inst_31888 = (state_31940[(9)]);
var inst_31892 = done(null);
var inst_31893 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31888);
var state_31940__$1 = (function (){var statearr_31965 = state_31940;
(statearr_31965[(19)] = inst_31892);

return statearr_31965;
})();
var statearr_31966_32047 = state_31940__$1;
(statearr_31966_32047[(2)] = inst_31893);

(statearr_31966_32047[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (32))){
var inst_31883 = (state_31940[(10)]);
var inst_31880 = (state_31940[(20)]);
var inst_31881 = (state_31940[(11)]);
var inst_31882 = (state_31940[(21)]);
var inst_31895 = (state_31940[(2)]);
var inst_31896 = (inst_31883 + (1));
var tmp31961 = inst_31880;
var tmp31962 = inst_31881;
var tmp31963 = inst_31882;
var inst_31880__$1 = tmp31961;
var inst_31881__$1 = tmp31962;
var inst_31882__$1 = tmp31963;
var inst_31883__$1 = inst_31896;
var state_31940__$1 = (function (){var statearr_31967 = state_31940;
(statearr_31967[(10)] = inst_31883__$1);

(statearr_31967[(20)] = inst_31880__$1);

(statearr_31967[(11)] = inst_31881__$1);

(statearr_31967[(21)] = inst_31882__$1);

(statearr_31967[(22)] = inst_31895);

return statearr_31967;
})();
var statearr_31968_32048 = state_31940__$1;
(statearr_31968_32048[(2)] = null);

(statearr_31968_32048[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (40))){
var inst_31908 = (state_31940[(23)]);
var inst_31912 = done(null);
var inst_31913 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31908);
var state_31940__$1 = (function (){var statearr_31969 = state_31940;
(statearr_31969[(24)] = inst_31912);

return statearr_31969;
})();
var statearr_31970_32049 = state_31940__$1;
(statearr_31970_32049[(2)] = inst_31913);

(statearr_31970_32049[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (33))){
var inst_31899 = (state_31940[(25)]);
var inst_31901 = cljs.core.chunked_seq_QMARK_(inst_31899);
var state_31940__$1 = state_31940;
if(inst_31901){
var statearr_31971_32050 = state_31940__$1;
(statearr_31971_32050[(1)] = (36));

} else {
var statearr_31972_32051 = state_31940__$1;
(statearr_31972_32051[(1)] = (37));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (13))){
var inst_31831 = (state_31940[(26)]);
var inst_31834 = cljs.core.async.close_BANG_(inst_31831);
var state_31940__$1 = state_31940;
var statearr_31973_32052 = state_31940__$1;
(statearr_31973_32052[(2)] = inst_31834);

(statearr_31973_32052[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (22))){
var inst_31852 = (state_31940[(8)]);
var inst_31855 = cljs.core.async.close_BANG_(inst_31852);
var state_31940__$1 = state_31940;
var statearr_31974_32053 = state_31940__$1;
(statearr_31974_32053[(2)] = inst_31855);

(statearr_31974_32053[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (36))){
var inst_31899 = (state_31940[(25)]);
var inst_31903 = cljs.core.chunk_first(inst_31899);
var inst_31904 = cljs.core.chunk_rest(inst_31899);
var inst_31905 = cljs.core.count(inst_31903);
var inst_31880 = inst_31904;
var inst_31881 = inst_31903;
var inst_31882 = inst_31905;
var inst_31883 = (0);
var state_31940__$1 = (function (){var statearr_31975 = state_31940;
(statearr_31975[(10)] = inst_31883);

(statearr_31975[(20)] = inst_31880);

(statearr_31975[(11)] = inst_31881);

(statearr_31975[(21)] = inst_31882);

return statearr_31975;
})();
var statearr_31976_32054 = state_31940__$1;
(statearr_31976_32054[(2)] = null);

(statearr_31976_32054[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (41))){
var inst_31899 = (state_31940[(25)]);
var inst_31915 = (state_31940[(2)]);
var inst_31916 = cljs.core.next(inst_31899);
var inst_31880 = inst_31916;
var inst_31881 = null;
var inst_31882 = (0);
var inst_31883 = (0);
var state_31940__$1 = (function (){var statearr_31977 = state_31940;
(statearr_31977[(10)] = inst_31883);

(statearr_31977[(20)] = inst_31880);

(statearr_31977[(11)] = inst_31881);

(statearr_31977[(21)] = inst_31882);

(statearr_31977[(27)] = inst_31915);

return statearr_31977;
})();
var statearr_31978_32055 = state_31940__$1;
(statearr_31978_32055[(2)] = null);

(statearr_31978_32055[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (43))){
var state_31940__$1 = state_31940;
var statearr_31979_32056 = state_31940__$1;
(statearr_31979_32056[(2)] = null);

(statearr_31979_32056[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (29))){
var inst_31924 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31980_32057 = state_31940__$1;
(statearr_31980_32057[(2)] = inst_31924);

(statearr_31980_32057[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (44))){
var inst_31933 = (state_31940[(2)]);
var state_31940__$1 = (function (){var statearr_31981 = state_31940;
(statearr_31981[(28)] = inst_31933);

return statearr_31981;
})();
var statearr_31982_32058 = state_31940__$1;
(statearr_31982_32058[(2)] = null);

(statearr_31982_32058[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (6))){
var inst_31872 = (state_31940[(29)]);
var inst_31871 = (function (){var G__31983 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31983) : cljs.core.deref.call(null,G__31983));
})();
var inst_31872__$1 = cljs.core.keys(inst_31871);
var inst_31873 = cljs.core.count(inst_31872__$1);
var inst_31874 = (function (){var G__31984 = dctr;
var G__31985 = inst_31873;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31984,G__31985) : cljs.core.reset_BANG_.call(null,G__31984,G__31985));
})();
var inst_31879 = cljs.core.seq(inst_31872__$1);
var inst_31880 = inst_31879;
var inst_31881 = null;
var inst_31882 = (0);
var inst_31883 = (0);
var state_31940__$1 = (function (){var statearr_31986 = state_31940;
(statearr_31986[(10)] = inst_31883);

(statearr_31986[(20)] = inst_31880);

(statearr_31986[(11)] = inst_31881);

(statearr_31986[(29)] = inst_31872__$1);

(statearr_31986[(30)] = inst_31874);

(statearr_31986[(21)] = inst_31882);

return statearr_31986;
})();
var statearr_31987_32059 = state_31940__$1;
(statearr_31987_32059[(2)] = null);

(statearr_31987_32059[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (28))){
var inst_31880 = (state_31940[(20)]);
var inst_31899 = (state_31940[(25)]);
var inst_31899__$1 = cljs.core.seq(inst_31880);
var state_31940__$1 = (function (){var statearr_31988 = state_31940;
(statearr_31988[(25)] = inst_31899__$1);

return statearr_31988;
})();
if(inst_31899__$1){
var statearr_31989_32060 = state_31940__$1;
(statearr_31989_32060[(1)] = (33));

} else {
var statearr_31990_32061 = state_31940__$1;
(statearr_31990_32061[(1)] = (34));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (25))){
var inst_31883 = (state_31940[(10)]);
var inst_31882 = (state_31940[(21)]);
var inst_31885 = (inst_31883 < inst_31882);
var inst_31886 = inst_31885;
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31886)){
var statearr_31991_32062 = state_31940__$1;
(statearr_31991_32062[(1)] = (27));

} else {
var statearr_31992_32063 = state_31940__$1;
(statearr_31992_32063[(1)] = (28));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (34))){
var state_31940__$1 = state_31940;
var statearr_31993_32064 = state_31940__$1;
(statearr_31993_32064[(2)] = null);

(statearr_31993_32064[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (17))){
var state_31940__$1 = state_31940;
var statearr_31994_32065 = state_31940__$1;
(statearr_31994_32065[(2)] = null);

(statearr_31994_32065[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (3))){
var inst_31938 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31940__$1,inst_31938);
} else {
if((state_val_31941 === (12))){
var inst_31867 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31995_32066 = state_31940__$1;
(statearr_31995_32066[(2)] = inst_31867);

(statearr_31995_32066[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (2))){
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31940__$1,(4),ch);
} else {
if((state_val_31941 === (23))){
var state_31940__$1 = state_31940;
var statearr_31996_32067 = state_31940__$1;
(statearr_31996_32067[(2)] = null);

(statearr_31996_32067[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (35))){
var inst_31922 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_31997_32068 = state_31940__$1;
(statearr_31997_32068[(2)] = inst_31922);

(statearr_31997_32068[(1)] = (29));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (19))){
var inst_31841 = (state_31940[(7)]);
var inst_31845 = cljs.core.chunk_first(inst_31841);
var inst_31846 = cljs.core.chunk_rest(inst_31841);
var inst_31847 = cljs.core.count(inst_31845);
var inst_31821 = inst_31846;
var inst_31822 = inst_31845;
var inst_31823 = inst_31847;
var inst_31824 = (0);
var state_31940__$1 = (function (){var statearr_31998 = state_31940;
(statearr_31998[(13)] = inst_31823);

(statearr_31998[(14)] = inst_31822);

(statearr_31998[(15)] = inst_31824);

(statearr_31998[(17)] = inst_31821);

return statearr_31998;
})();
var statearr_31999_32069 = state_31940__$1;
(statearr_31999_32069[(2)] = null);

(statearr_31999_32069[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (11))){
var inst_31841 = (state_31940[(7)]);
var inst_31821 = (state_31940[(17)]);
var inst_31841__$1 = cljs.core.seq(inst_31821);
var state_31940__$1 = (function (){var statearr_32000 = state_31940;
(statearr_32000[(7)] = inst_31841__$1);

return statearr_32000;
})();
if(inst_31841__$1){
var statearr_32001_32070 = state_31940__$1;
(statearr_32001_32070[(1)] = (16));

} else {
var statearr_32002_32071 = state_31940__$1;
(statearr_32002_32071[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (9))){
var inst_31869 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_32003_32072 = state_31940__$1;
(statearr_32003_32072[(2)] = inst_31869);

(statearr_32003_32072[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (5))){
var inst_31819 = (function (){var G__32004 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32004) : cljs.core.deref.call(null,G__32004));
})();
var inst_31820 = cljs.core.seq(inst_31819);
var inst_31821 = inst_31820;
var inst_31822 = null;
var inst_31823 = (0);
var inst_31824 = (0);
var state_31940__$1 = (function (){var statearr_32005 = state_31940;
(statearr_32005[(13)] = inst_31823);

(statearr_32005[(14)] = inst_31822);

(statearr_32005[(15)] = inst_31824);

(statearr_32005[(17)] = inst_31821);

return statearr_32005;
})();
var statearr_32006_32073 = state_31940__$1;
(statearr_32006_32073[(2)] = null);

(statearr_32006_32073[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (14))){
var state_31940__$1 = state_31940;
var statearr_32007_32074 = state_31940__$1;
(statearr_32007_32074[(2)] = null);

(statearr_32007_32074[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (45))){
var inst_31930 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_32008_32075 = state_31940__$1;
(statearr_32008_32075[(2)] = inst_31930);

(statearr_32008_32075[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (26))){
var inst_31872 = (state_31940[(29)]);
var inst_31926 = (state_31940[(2)]);
var inst_31927 = cljs.core.seq(inst_31872);
var state_31940__$1 = (function (){var statearr_32009 = state_31940;
(statearr_32009[(31)] = inst_31926);

return statearr_32009;
})();
if(inst_31927){
var statearr_32010_32076 = state_31940__$1;
(statearr_32010_32076[(1)] = (42));

} else {
var statearr_32011_32077 = state_31940__$1;
(statearr_32011_32077[(1)] = (43));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (16))){
var inst_31841 = (state_31940[(7)]);
var inst_31843 = cljs.core.chunked_seq_QMARK_(inst_31841);
var state_31940__$1 = state_31940;
if(inst_31843){
var statearr_32012_32078 = state_31940__$1;
(statearr_32012_32078[(1)] = (19));

} else {
var statearr_32013_32079 = state_31940__$1;
(statearr_32013_32079[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (38))){
var inst_31919 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_32014_32080 = state_31940__$1;
(statearr_32014_32080[(2)] = inst_31919);

(statearr_32014_32080[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (30))){
var state_31940__$1 = state_31940;
var statearr_32015_32081 = state_31940__$1;
(statearr_32015_32081[(2)] = null);

(statearr_32015_32081[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (10))){
var inst_31822 = (state_31940[(14)]);
var inst_31824 = (state_31940[(15)]);
var inst_31830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31822,inst_31824);
var inst_31831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31830,(0),null);
var inst_31832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31830,(1),null);
var state_31940__$1 = (function (){var statearr_32016 = state_31940;
(statearr_32016[(26)] = inst_31831);

return statearr_32016;
})();
if(cljs.core.truth_(inst_31832)){
var statearr_32017_32082 = state_31940__$1;
(statearr_32017_32082[(1)] = (13));

} else {
var statearr_32018_32083 = state_31940__$1;
(statearr_32018_32083[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (18))){
var inst_31865 = (state_31940[(2)]);
var state_31940__$1 = state_31940;
var statearr_32019_32084 = state_31940__$1;
(statearr_32019_32084[(2)] = inst_31865);

(statearr_32019_32084[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (42))){
var state_31940__$1 = state_31940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31940__$1,(45),dchan);
} else {
if((state_val_31941 === (37))){
var inst_31899 = (state_31940[(25)]);
var inst_31812 = (state_31940[(12)]);
var inst_31908 = (state_31940[(23)]);
var inst_31908__$1 = cljs.core.first(inst_31899);
var inst_31909 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31908__$1,inst_31812,done);
var state_31940__$1 = (function (){var statearr_32020 = state_31940;
(statearr_32020[(23)] = inst_31908__$1);

return statearr_32020;
})();
if(cljs.core.truth_(inst_31909)){
var statearr_32021_32085 = state_31940__$1;
(statearr_32021_32085[(1)] = (39));

} else {
var statearr_32022_32086 = state_31940__$1;
(statearr_32022_32086[(1)] = (40));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31941 === (8))){
var inst_31823 = (state_31940[(13)]);
var inst_31824 = (state_31940[(15)]);
var inst_31826 = (inst_31824 < inst_31823);
var inst_31827 = inst_31826;
var state_31940__$1 = state_31940;
if(cljs.core.truth_(inst_31827)){
var statearr_32023_32087 = state_31940__$1;
(statearr_32023_32087[(1)] = (10));

} else {
var statearr_32024_32088 = state_31940__$1;
(statearr_32024_32088[(1)] = (11));

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
});})(c__16134__auto___32034,cs,m,dchan,dctr,done))
;
return ((function (switch__16054__auto__,c__16134__auto___32034,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32028[(0)] = state_machine__16055__auto__);

(statearr_32028[(1)] = (1));

return statearr_32028;
});
var state_machine__16055__auto____1 = (function (state_31940){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_31940);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32029){if((e32029 instanceof Object)){
var ex__16058__auto__ = e32029;
var statearr_32030_32089 = state_31940;
(statearr_32030_32089[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31940);

return cljs.core.constant$keyword$99;
} else {
throw e32029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32090 = state_31940;
state_31940 = G__32090;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_31940){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_31940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___32034,cs,m,dchan,dctr,done))
})();
var state__16136__auto__ = (function (){var statearr_32031 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___32034);

return statearr_32031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___32034,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32095 = {};
return obj32095;
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
return (function (){var or__3758__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__32099 = x__4402__auto__;
return goog.typeOf(G__32099);
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
return (function (){var or__3758__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__32103 = x__4402__auto__;
return goog.typeOf(G__32103);
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
return (function (){var or__3758__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__32107 = x__4402__auto__;
return goog.typeOf(G__32107);
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
return (function (){var or__3758__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__32111 = x__4402__auto__;
return goog.typeOf(G__32111);
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
return (function (){var or__3758__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__32115 = x__4402__auto__;
return goog.typeOf(G__32115);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32116){
var map__32122 = p__32116;
var map__32122__$1 = ((cljs.core.seq_QMARK_(map__32122))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32122):map__32122);
var opts = map__32122__$1;
var statearr_32123_32127 = state;
(statearr_32123_32127[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__32122,map__32122__$1,opts){
return (function (val){
var statearr_32124_32128 = state;
(statearr_32124_32128[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32122,map__32122__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32125_32129 = state;
(statearr_32125_32129[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32126 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32126) : cljs.core.deref.call(null,G__32126));
})());


return cljs.core.constant$keyword$99;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32116 = null;
if (arguments.length > 3) {
var G__32130__i = 0, G__32130__a = new Array(arguments.length -  3);
while (G__32130__i < G__32130__a.length) {G__32130__a[G__32130__i] = arguments[G__32130__i + 3]; ++G__32130__i;}
  p__32116 = new cljs.core.IndexedSeq(G__32130__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32116);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32131){
var state = cljs.core.first(arglist__32131);
arglist__32131 = cljs.core.next(arglist__32131);
var cont_block = cljs.core.first(arglist__32131);
arglist__32131 = cljs.core.next(arglist__32131);
var ports = cljs.core.first(arglist__32131);
var p__32116 = cljs.core.rest(arglist__32131);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32116);
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
var cs = (function (){var G__32265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32265) : cljs.core.atom.call(null,G__32265));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$110);
var solo_mode = (function (){var G__32266 = cljs.core.constant$keyword$109;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32266) : cljs.core.atom.call(null,G__32266));
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
if(cljs.core.truth_((function (){var G__32267 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__32267) : attr.call(null,G__32267));
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
var chs = (function (){var G__32268 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32268) : cljs.core.deref.call(null,G__32268));
})();
var mode = (function (){var G__32269 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32269) : cljs.core.deref.call(null,G__32269));
})();
var solos = pick(cljs.core.constant$keyword$110,chs);
var pauses = pick(cljs.core.constant$keyword$108,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$111,solos,cljs.core.constant$keyword$112,pick(cljs.core.constant$keyword$109,chs),cljs.core.constant$keyword$113,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$108)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32270 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32271){
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
this.meta32271 = meta32271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32270.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32270.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32273_32398 = self__.cs;
var G__32274_32399 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32273_32398,G__32274_32399) : cljs.core.reset_BANG_.call(null,G__32273_32398,G__32274_32399));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__32275 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__32275) : self__.solo_modes.call(null,G__32275));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__32276_32400 = self__.solo_mode;
var G__32277_32401 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32276_32400,G__32277_32401) : cljs.core.reset_BANG_.call(null,G__32276_32400,G__32277_32401));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32272){
var self__ = this;
var _32272__$1 = this;
return self__.meta32271;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32272,meta32271__$1){
var self__ = this;
var _32272__$1 = this;
return (new cljs.core.async.t32270(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32271__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32270.cljs$lang$type = true;

cljs.core.async.t32270.cljs$lang$ctorStr = "cljs.core.async/t32270";

cljs.core.async.t32270.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t32270");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32270 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32270(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32271){
return (new cljs.core.async.t32270(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32271));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32270(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16134__auto___32402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___32402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___32402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32349){
var state_val_32350 = (state_32349[(1)]);
if((state_val_32350 === (7))){
var inst_32291 = (state_32349[(7)]);
var inst_32296 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32291);
var state_32349__$1 = state_32349;
var statearr_32351_32403 = state_32349__$1;
(statearr_32351_32403[(2)] = inst_32296);

(statearr_32351_32403[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (20))){
var inst_32306 = (state_32349[(8)]);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32349__$1,(23),out,inst_32306);
} else {
if((state_val_32350 === (1))){
var inst_32281 = (state_32349[(9)]);
var inst_32281__$1 = calc_state();
var inst_32282 = cljs.core.seq_QMARK_(inst_32281__$1);
var state_32349__$1 = (function (){var statearr_32352 = state_32349;
(statearr_32352[(9)] = inst_32281__$1);

return statearr_32352;
})();
if(inst_32282){
var statearr_32353_32404 = state_32349__$1;
(statearr_32353_32404[(1)] = (2));

} else {
var statearr_32354_32405 = state_32349__$1;
(statearr_32354_32405[(1)] = (3));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (24))){
var inst_32299 = (state_32349[(10)]);
var inst_32291 = inst_32299;
var state_32349__$1 = (function (){var statearr_32355 = state_32349;
(statearr_32355[(7)] = inst_32291);

return statearr_32355;
})();
var statearr_32356_32406 = state_32349__$1;
(statearr_32356_32406[(2)] = null);

(statearr_32356_32406[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (4))){
var inst_32281 = (state_32349[(9)]);
var inst_32287 = (state_32349[(2)]);
var inst_32288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32287,cljs.core.constant$keyword$113);
var inst_32289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32287,cljs.core.constant$keyword$112);
var inst_32290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32287,cljs.core.constant$keyword$111);
var inst_32291 = inst_32281;
var state_32349__$1 = (function (){var statearr_32357 = state_32349;
(statearr_32357[(7)] = inst_32291);

(statearr_32357[(11)] = inst_32289);

(statearr_32357[(12)] = inst_32290);

(statearr_32357[(13)] = inst_32288);

return statearr_32357;
})();
var statearr_32358_32407 = state_32349__$1;
(statearr_32358_32407[(2)] = null);

(statearr_32358_32407[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (15))){
var state_32349__$1 = state_32349;
var statearr_32359_32408 = state_32349__$1;
(statearr_32359_32408[(2)] = null);

(statearr_32359_32408[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (21))){
var inst_32299 = (state_32349[(10)]);
var inst_32291 = inst_32299;
var state_32349__$1 = (function (){var statearr_32360 = state_32349;
(statearr_32360[(7)] = inst_32291);

return statearr_32360;
})();
var statearr_32361_32409 = state_32349__$1;
(statearr_32361_32409[(2)] = null);

(statearr_32361_32409[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (13))){
var inst_32345 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32362_32410 = state_32349__$1;
(statearr_32362_32410[(2)] = inst_32345);

(statearr_32362_32410[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (22))){
var inst_32343 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32363_32411 = state_32349__$1;
(statearr_32363_32411[(2)] = inst_32343);

(statearr_32363_32411[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (6))){
var inst_32347 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32349__$1,inst_32347);
} else {
if((state_val_32350 === (25))){
var state_32349__$1 = state_32349;
var statearr_32364_32412 = state_32349__$1;
(statearr_32364_32412[(2)] = null);

(statearr_32364_32412[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (17))){
var inst_32322 = (state_32349[(14)]);
var state_32349__$1 = state_32349;
var statearr_32365_32413 = state_32349__$1;
(statearr_32365_32413[(2)] = inst_32322);

(statearr_32365_32413[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (3))){
var inst_32281 = (state_32349[(9)]);
var state_32349__$1 = state_32349;
var statearr_32366_32414 = state_32349__$1;
(statearr_32366_32414[(2)] = inst_32281);

(statearr_32366_32414[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (12))){
var inst_32307 = (state_32349[(15)]);
var inst_32302 = (state_32349[(16)]);
var inst_32322 = (state_32349[(14)]);
var inst_32322__$1 = (function (){var G__32367 = inst_32307;
return (inst_32302.cljs$core$IFn$_invoke$arity$1 ? inst_32302.cljs$core$IFn$_invoke$arity$1(G__32367) : inst_32302.call(null,G__32367));
})();
var state_32349__$1 = (function (){var statearr_32368 = state_32349;
(statearr_32368[(14)] = inst_32322__$1);

return statearr_32368;
})();
if(cljs.core.truth_(inst_32322__$1)){
var statearr_32369_32415 = state_32349__$1;
(statearr_32369_32415[(1)] = (17));

} else {
var statearr_32370_32416 = state_32349__$1;
(statearr_32370_32416[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (2))){
var inst_32281 = (state_32349[(9)]);
var inst_32284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32281);
var state_32349__$1 = state_32349;
var statearr_32371_32417 = state_32349__$1;
(statearr_32371_32417[(2)] = inst_32284);

(statearr_32371_32417[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (23))){
var inst_32334 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
if(cljs.core.truth_(inst_32334)){
var statearr_32372_32418 = state_32349__$1;
(statearr_32372_32418[(1)] = (24));

} else {
var statearr_32373_32419 = state_32349__$1;
(statearr_32373_32419[(1)] = (25));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (19))){
var inst_32331 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
if(cljs.core.truth_(inst_32331)){
var statearr_32374_32420 = state_32349__$1;
(statearr_32374_32420[(1)] = (20));

} else {
var statearr_32375_32421 = state_32349__$1;
(statearr_32375_32421[(1)] = (21));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (11))){
var inst_32306 = (state_32349[(8)]);
var inst_32312 = (inst_32306 == null);
var state_32349__$1 = state_32349;
if(cljs.core.truth_(inst_32312)){
var statearr_32376_32422 = state_32349__$1;
(statearr_32376_32422[(1)] = (14));

} else {
var statearr_32377_32423 = state_32349__$1;
(statearr_32377_32423[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (9))){
var inst_32299 = (state_32349[(10)]);
var inst_32299__$1 = (state_32349[(2)]);
var inst_32300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32299__$1,cljs.core.constant$keyword$113);
var inst_32301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32299__$1,cljs.core.constant$keyword$112);
var inst_32302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32299__$1,cljs.core.constant$keyword$111);
var state_32349__$1 = (function (){var statearr_32378 = state_32349;
(statearr_32378[(10)] = inst_32299__$1);

(statearr_32378[(17)] = inst_32301);

(statearr_32378[(16)] = inst_32302);

return statearr_32378;
})();
return cljs.core.async.ioc_alts_BANG_(state_32349__$1,(10),inst_32300);
} else {
if((state_val_32350 === (5))){
var inst_32291 = (state_32349[(7)]);
var inst_32294 = cljs.core.seq_QMARK_(inst_32291);
var state_32349__$1 = state_32349;
if(inst_32294){
var statearr_32379_32424 = state_32349__$1;
(statearr_32379_32424[(1)] = (7));

} else {
var statearr_32380_32425 = state_32349__$1;
(statearr_32380_32425[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (14))){
var inst_32307 = (state_32349[(15)]);
var inst_32314 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32307);
var state_32349__$1 = state_32349;
var statearr_32381_32426 = state_32349__$1;
(statearr_32381_32426[(2)] = inst_32314);

(statearr_32381_32426[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (26))){
var inst_32339 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32382_32427 = state_32349__$1;
(statearr_32382_32427[(2)] = inst_32339);

(statearr_32382_32427[(1)] = (22));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (16))){
var inst_32317 = (state_32349[(2)]);
var inst_32318 = calc_state();
var inst_32291 = inst_32318;
var state_32349__$1 = (function (){var statearr_32383 = state_32349;
(statearr_32383[(18)] = inst_32317);

(statearr_32383[(7)] = inst_32291);

return statearr_32383;
})();
var statearr_32384_32428 = state_32349__$1;
(statearr_32384_32428[(2)] = null);

(statearr_32384_32428[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (10))){
var inst_32306 = (state_32349[(8)]);
var inst_32307 = (state_32349[(15)]);
var inst_32305 = (state_32349[(2)]);
var inst_32306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32305,(0),null);
var inst_32307__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32305,(1),null);
var inst_32308 = (inst_32306__$1 == null);
var inst_32309 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32307__$1,change);
var inst_32310 = (inst_32308) || (inst_32309);
var state_32349__$1 = (function (){var statearr_32385 = state_32349;
(statearr_32385[(8)] = inst_32306__$1);

(statearr_32385[(15)] = inst_32307__$1);

return statearr_32385;
})();
if(cljs.core.truth_(inst_32310)){
var statearr_32386_32429 = state_32349__$1;
(statearr_32386_32429[(1)] = (11));

} else {
var statearr_32387_32430 = state_32349__$1;
(statearr_32387_32430[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (18))){
var inst_32307 = (state_32349[(15)]);
var inst_32301 = (state_32349[(17)]);
var inst_32302 = (state_32349[(16)]);
var inst_32326 = cljs.core.empty_QMARK_(inst_32302);
var inst_32327 = (function (){var G__32388 = inst_32307;
return (inst_32301.cljs$core$IFn$_invoke$arity$1 ? inst_32301.cljs$core$IFn$_invoke$arity$1(G__32388) : inst_32301.call(null,G__32388));
})();
var inst_32328 = cljs.core.not(inst_32327);
var inst_32329 = (inst_32326) && (inst_32328);
var state_32349__$1 = state_32349;
var statearr_32389_32431 = state_32349__$1;
(statearr_32389_32431[(2)] = inst_32329);

(statearr_32389_32431[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32350 === (8))){
var inst_32291 = (state_32349[(7)]);
var state_32349__$1 = state_32349;
var statearr_32390_32432 = state_32349__$1;
(statearr_32390_32432[(2)] = inst_32291);

(statearr_32390_32432[(1)] = (9));


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
});})(c__16134__auto___32402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16054__auto__,c__16134__auto___32402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32394[(0)] = state_machine__16055__auto__);

(statearr_32394[(1)] = (1));

return statearr_32394;
});
var state_machine__16055__auto____1 = (function (state_32349){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32349);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32395){if((e32395 instanceof Object)){
var ex__16058__auto__ = e32395;
var statearr_32396_32433 = state_32349;
(statearr_32396_32433[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32349);

return cljs.core.constant$keyword$99;
} else {
throw e32395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32434 = state_32349;
state_32349 = G__32434;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32349){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___32402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16136__auto__ = (function (){var statearr_32397 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___32402);

return statearr_32397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___32402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32436 = {};
return obj32436;
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
return (function (){var or__3758__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__32440 = x__4402__auto__;
return goog.typeOf(G__32440);
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
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__32444 = x__4402__auto__;
return goog.typeOf(G__32444);
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
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__32450 = x__4402__auto__;
return goog.typeOf(G__32450);
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
return (function (){var or__3758__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__32452 = x__4402__auto__;
return goog.typeOf(G__32452);
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
var mults = (function (){var G__32591 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32591) : cljs.core.atom.call(null,G__32591));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3758__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__32593 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32593) : cljs.core.deref.call(null,G__32593));
})(),topic);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3758__auto__,mults){
return (function (p1__32453_SHARP_){
if(cljs.core.truth_((function (){var G__32594 = topic;
return (p1__32453_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32453_SHARP_.cljs$core$IFn$_invoke$arity$1(G__32594) : p1__32453_SHARP_.call(null,G__32594));
})())){
return p1__32453_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32453_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__32595 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__32595) : buf_fn.call(null,G__32595));
})())));
}
});})(or__3758__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32596 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32596 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32597){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32597 = meta32597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32596.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32596.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__32599 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__32599) : self__.ensure_mult.call(null,G__32599));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32596.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__32600 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32600) : cljs.core.deref.call(null,G__32600));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32596.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32601 = self__.mults;
var G__32602 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32601,G__32602) : cljs.core.reset_BANG_.call(null,G__32601,G__32602));
});})(mults,ensure_mult))
;

cljs.core.async.t32596.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32596.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32598){
var self__ = this;
var _32598__$1 = this;
return self__.meta32597;
});})(mults,ensure_mult))
;

cljs.core.async.t32596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32598,meta32597__$1){
var self__ = this;
var _32598__$1 = this;
return (new cljs.core.async.t32596(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32597__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32596.cljs$lang$type = true;

cljs.core.async.t32596.cljs$lang$ctorStr = "cljs.core.async/t32596";

cljs.core.async.t32596.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t32596");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32596 = ((function (mults,ensure_mult){
return (function __GT_t32596(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32597){
return (new cljs.core.async.t32596(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32597));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32596(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16134__auto___32725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___32725,mults,ensure_mult,p){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___32725,mults,ensure_mult,p){
return (function (state_32674){
var state_val_32675 = (state_32674[(1)]);
if((state_val_32675 === (7))){
var inst_32670 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32676_32726 = state_32674__$1;
(statearr_32676_32726[(2)] = inst_32670);

(statearr_32676_32726[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (20))){
var state_32674__$1 = state_32674;
var statearr_32677_32727 = state_32674__$1;
(statearr_32677_32727[(2)] = null);

(statearr_32677_32727[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (1))){
var state_32674__$1 = state_32674;
var statearr_32678_32728 = state_32674__$1;
(statearr_32678_32728[(2)] = null);

(statearr_32678_32728[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (24))){
var inst_32653 = (state_32674[(7)]);
var inst_32662 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32653);
var state_32674__$1 = state_32674;
var statearr_32679_32729 = state_32674__$1;
(statearr_32679_32729[(2)] = inst_32662);

(statearr_32679_32729[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (4))){
var inst_32605 = (state_32674[(8)]);
var inst_32605__$1 = (state_32674[(2)]);
var inst_32606 = (inst_32605__$1 == null);
var state_32674__$1 = (function (){var statearr_32680 = state_32674;
(statearr_32680[(8)] = inst_32605__$1);

return statearr_32680;
})();
if(cljs.core.truth_(inst_32606)){
var statearr_32681_32730 = state_32674__$1;
(statearr_32681_32730[(1)] = (5));

} else {
var statearr_32682_32731 = state_32674__$1;
(statearr_32682_32731[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (15))){
var inst_32647 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32683_32732 = state_32674__$1;
(statearr_32683_32732[(2)] = inst_32647);

(statearr_32683_32732[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (21))){
var inst_32667 = (state_32674[(2)]);
var state_32674__$1 = (function (){var statearr_32684 = state_32674;
(statearr_32684[(9)] = inst_32667);

return statearr_32684;
})();
var statearr_32685_32733 = state_32674__$1;
(statearr_32685_32733[(2)] = null);

(statearr_32685_32733[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (13))){
var inst_32629 = (state_32674[(10)]);
var inst_32631 = cljs.core.chunked_seq_QMARK_(inst_32629);
var state_32674__$1 = state_32674;
if(inst_32631){
var statearr_32686_32734 = state_32674__$1;
(statearr_32686_32734[(1)] = (16));

} else {
var statearr_32687_32735 = state_32674__$1;
(statearr_32687_32735[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (22))){
var inst_32659 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
if(cljs.core.truth_(inst_32659)){
var statearr_32688_32736 = state_32674__$1;
(statearr_32688_32736[(1)] = (23));

} else {
var statearr_32689_32737 = state_32674__$1;
(statearr_32689_32737[(1)] = (24));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (6))){
var inst_32655 = (state_32674[(11)]);
var inst_32605 = (state_32674[(8)]);
var inst_32653 = (state_32674[(7)]);
var inst_32653__$1 = (function (){var G__32690 = inst_32605;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__32690) : topic_fn.call(null,G__32690));
})();
var inst_32654 = (function (){var G__32691 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32691) : cljs.core.deref.call(null,G__32691));
})();
var inst_32655__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32654,inst_32653__$1);
var state_32674__$1 = (function (){var statearr_32692 = state_32674;
(statearr_32692[(11)] = inst_32655__$1);

(statearr_32692[(7)] = inst_32653__$1);

return statearr_32692;
})();
if(cljs.core.truth_(inst_32655__$1)){
var statearr_32693_32738 = state_32674__$1;
(statearr_32693_32738[(1)] = (19));

} else {
var statearr_32694_32739 = state_32674__$1;
(statearr_32694_32739[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (25))){
var inst_32664 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32695_32740 = state_32674__$1;
(statearr_32695_32740[(2)] = inst_32664);

(statearr_32695_32740[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (17))){
var inst_32629 = (state_32674[(10)]);
var inst_32638 = cljs.core.first(inst_32629);
var inst_32639 = cljs.core.async.muxch_STAR_(inst_32638);
var inst_32640 = cljs.core.async.close_BANG_(inst_32639);
var inst_32641 = cljs.core.next(inst_32629);
var inst_32615 = inst_32641;
var inst_32616 = null;
var inst_32617 = (0);
var inst_32618 = (0);
var state_32674__$1 = (function (){var statearr_32696 = state_32674;
(statearr_32696[(12)] = inst_32616);

(statearr_32696[(13)] = inst_32615);

(statearr_32696[(14)] = inst_32618);

(statearr_32696[(15)] = inst_32617);

(statearr_32696[(16)] = inst_32640);

return statearr_32696;
})();
var statearr_32697_32741 = state_32674__$1;
(statearr_32697_32741[(2)] = null);

(statearr_32697_32741[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (3))){
var inst_32672 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32674__$1,inst_32672);
} else {
if((state_val_32675 === (12))){
var inst_32649 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32698_32742 = state_32674__$1;
(statearr_32698_32742[(2)] = inst_32649);

(statearr_32698_32742[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (2))){
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32674__$1,(4),ch);
} else {
if((state_val_32675 === (23))){
var state_32674__$1 = state_32674;
var statearr_32699_32743 = state_32674__$1;
(statearr_32699_32743[(2)] = null);

(statearr_32699_32743[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (19))){
var inst_32655 = (state_32674[(11)]);
var inst_32605 = (state_32674[(8)]);
var inst_32657 = cljs.core.async.muxch_STAR_(inst_32655);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32674__$1,(22),inst_32657,inst_32605);
} else {
if((state_val_32675 === (11))){
var inst_32615 = (state_32674[(13)]);
var inst_32629 = (state_32674[(10)]);
var inst_32629__$1 = cljs.core.seq(inst_32615);
var state_32674__$1 = (function (){var statearr_32700 = state_32674;
(statearr_32700[(10)] = inst_32629__$1);

return statearr_32700;
})();
if(inst_32629__$1){
var statearr_32701_32744 = state_32674__$1;
(statearr_32701_32744[(1)] = (13));

} else {
var statearr_32702_32745 = state_32674__$1;
(statearr_32702_32745[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (9))){
var inst_32651 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32703_32746 = state_32674__$1;
(statearr_32703_32746[(2)] = inst_32651);

(statearr_32703_32746[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (5))){
var inst_32612 = (function (){var G__32704 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32704) : cljs.core.deref.call(null,G__32704));
})();
var inst_32613 = cljs.core.vals(inst_32612);
var inst_32614 = cljs.core.seq(inst_32613);
var inst_32615 = inst_32614;
var inst_32616 = null;
var inst_32617 = (0);
var inst_32618 = (0);
var state_32674__$1 = (function (){var statearr_32705 = state_32674;
(statearr_32705[(12)] = inst_32616);

(statearr_32705[(13)] = inst_32615);

(statearr_32705[(14)] = inst_32618);

(statearr_32705[(15)] = inst_32617);

return statearr_32705;
})();
var statearr_32706_32747 = state_32674__$1;
(statearr_32706_32747[(2)] = null);

(statearr_32706_32747[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (14))){
var state_32674__$1 = state_32674;
var statearr_32710_32748 = state_32674__$1;
(statearr_32710_32748[(2)] = null);

(statearr_32710_32748[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (16))){
var inst_32629 = (state_32674[(10)]);
var inst_32633 = cljs.core.chunk_first(inst_32629);
var inst_32634 = cljs.core.chunk_rest(inst_32629);
var inst_32635 = cljs.core.count(inst_32633);
var inst_32615 = inst_32634;
var inst_32616 = inst_32633;
var inst_32617 = inst_32635;
var inst_32618 = (0);
var state_32674__$1 = (function (){var statearr_32711 = state_32674;
(statearr_32711[(12)] = inst_32616);

(statearr_32711[(13)] = inst_32615);

(statearr_32711[(14)] = inst_32618);

(statearr_32711[(15)] = inst_32617);

return statearr_32711;
})();
var statearr_32712_32749 = state_32674__$1;
(statearr_32712_32749[(2)] = null);

(statearr_32712_32749[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (10))){
var inst_32616 = (state_32674[(12)]);
var inst_32615 = (state_32674[(13)]);
var inst_32618 = (state_32674[(14)]);
var inst_32617 = (state_32674[(15)]);
var inst_32623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32616,inst_32618);
var inst_32624 = cljs.core.async.muxch_STAR_(inst_32623);
var inst_32625 = cljs.core.async.close_BANG_(inst_32624);
var inst_32626 = (inst_32618 + (1));
var tmp32707 = inst_32616;
var tmp32708 = inst_32615;
var tmp32709 = inst_32617;
var inst_32615__$1 = tmp32708;
var inst_32616__$1 = tmp32707;
var inst_32617__$1 = tmp32709;
var inst_32618__$1 = inst_32626;
var state_32674__$1 = (function (){var statearr_32713 = state_32674;
(statearr_32713[(12)] = inst_32616__$1);

(statearr_32713[(13)] = inst_32615__$1);

(statearr_32713[(17)] = inst_32625);

(statearr_32713[(14)] = inst_32618__$1);

(statearr_32713[(15)] = inst_32617__$1);

return statearr_32713;
})();
var statearr_32714_32750 = state_32674__$1;
(statearr_32714_32750[(2)] = null);

(statearr_32714_32750[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (18))){
var inst_32644 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32715_32751 = state_32674__$1;
(statearr_32715_32751[(2)] = inst_32644);

(statearr_32715_32751[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (8))){
var inst_32618 = (state_32674[(14)]);
var inst_32617 = (state_32674[(15)]);
var inst_32620 = (inst_32618 < inst_32617);
var inst_32621 = inst_32620;
var state_32674__$1 = state_32674;
if(cljs.core.truth_(inst_32621)){
var statearr_32716_32752 = state_32674__$1;
(statearr_32716_32752[(1)] = (10));

} else {
var statearr_32717_32753 = state_32674__$1;
(statearr_32717_32753[(1)] = (11));

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
});})(c__16134__auto___32725,mults,ensure_mult,p))
;
return ((function (switch__16054__auto__,c__16134__auto___32725,mults,ensure_mult,p){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32721[(0)] = state_machine__16055__auto__);

(statearr_32721[(1)] = (1));

return statearr_32721;
});
var state_machine__16055__auto____1 = (function (state_32674){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32674);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32722){if((e32722 instanceof Object)){
var ex__16058__auto__ = e32722;
var statearr_32723_32754 = state_32674;
(statearr_32723_32754[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32674);

return cljs.core.constant$keyword$99;
} else {
throw e32722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32755 = state_32674;
state_32674 = G__32755;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32674){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___32725,mults,ensure_mult,p))
})();
var state__16136__auto__ = (function (){var statearr_32724 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___32725);

return statearr_32724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___32725,mults,ensure_mult,p))
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
var dctr = (function (){var G__32836 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32836) : cljs.core.atom.call(null,G__32836));
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
var c__16134__auto___32909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___32909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___32909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var state_32875__$1 = state_32875;
var statearr_32877_32910 = state_32875__$1;
(statearr_32877_32910[(2)] = null);

(statearr_32877_32910[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (1))){
var state_32875__$1 = state_32875;
var statearr_32878_32911 = state_32875__$1;
(statearr_32878_32911[(2)] = null);

(statearr_32878_32911[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (4))){
var inst_32839 = (state_32875[(7)]);
var inst_32841 = (inst_32839 < cnt);
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32841)){
var statearr_32879_32912 = state_32875__$1;
(statearr_32879_32912[(1)] = (6));

} else {
var statearr_32880_32913 = state_32875__$1;
(statearr_32880_32913[(1)] = (7));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (15))){
var inst_32871 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32881_32914 = state_32875__$1;
(statearr_32881_32914[(2)] = inst_32871);

(statearr_32881_32914[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (13))){
var inst_32864 = cljs.core.async.close_BANG_(out);
var state_32875__$1 = state_32875;
var statearr_32882_32915 = state_32875__$1;
(statearr_32882_32915[(2)] = inst_32864);

(statearr_32882_32915[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (6))){
var state_32875__$1 = state_32875;
var statearr_32883_32916 = state_32875__$1;
(statearr_32883_32916[(2)] = null);

(statearr_32883_32916[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (3))){
var inst_32873 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (12))){
var inst_32861 = (state_32875[(8)]);
var inst_32861__$1 = (state_32875[(2)]);
var inst_32862 = cljs.core.some(cljs.core.nil_QMARK_,inst_32861__$1);
var state_32875__$1 = (function (){var statearr_32884 = state_32875;
(statearr_32884[(8)] = inst_32861__$1);

return statearr_32884;
})();
if(cljs.core.truth_(inst_32862)){
var statearr_32885_32917 = state_32875__$1;
(statearr_32885_32917[(1)] = (13));

} else {
var statearr_32886_32918 = state_32875__$1;
(statearr_32886_32918[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (2))){
var inst_32838 = (function (){var G__32887 = dctr;
var G__32888 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32887,G__32888) : cljs.core.reset_BANG_.call(null,G__32887,G__32888));
})();
var inst_32839 = (0);
var state_32875__$1 = (function (){var statearr_32889 = state_32875;
(statearr_32889[(9)] = inst_32838);

(statearr_32889[(7)] = inst_32839);

return statearr_32889;
})();
var statearr_32890_32919 = state_32875__$1;
(statearr_32890_32919[(2)] = null);

(statearr_32890_32919[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (11))){
var inst_32839 = (state_32875[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32875,(10),Object,null,(9));
var inst_32848 = (function (){var G__32891 = inst_32839;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__32891) : chs__$1.call(null,G__32891));
})();
var inst_32849 = (function (){var G__32892 = inst_32839;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32892) : done.call(null,G__32892));
})();
var inst_32850 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32848,inst_32849);
var state_32875__$1 = state_32875;
var statearr_32893_32920 = state_32875__$1;
(statearr_32893_32920[(2)] = inst_32850);


cljs.core.async.impl.ioc_helpers.process_exception(state_32875__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (9))){
var inst_32839 = (state_32875[(7)]);
var inst_32852 = (state_32875[(2)]);
var inst_32853 = (inst_32839 + (1));
var inst_32839__$1 = inst_32853;
var state_32875__$1 = (function (){var statearr_32894 = state_32875;
(statearr_32894[(10)] = inst_32852);

(statearr_32894[(7)] = inst_32839__$1);

return statearr_32894;
})();
var statearr_32895_32921 = state_32875__$1;
(statearr_32895_32921[(2)] = null);

(statearr_32895_32921[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (5))){
var inst_32859 = (state_32875[(2)]);
var state_32875__$1 = (function (){var statearr_32896 = state_32875;
(statearr_32896[(11)] = inst_32859);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32875__$1,(12),dchan);
} else {
if((state_val_32876 === (14))){
var inst_32861 = (state_32875[(8)]);
var inst_32866 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32861);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32875__$1,(16),out,inst_32866);
} else {
if((state_val_32876 === (16))){
var inst_32868 = (state_32875[(2)]);
var state_32875__$1 = (function (){var statearr_32897 = state_32875;
(statearr_32897[(12)] = inst_32868);

return statearr_32897;
})();
var statearr_32898_32922 = state_32875__$1;
(statearr_32898_32922[(2)] = null);

(statearr_32898_32922[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (10))){
var inst_32843 = (state_32875[(2)]);
var inst_32844 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32875__$1 = (function (){var statearr_32899 = state_32875;
(statearr_32899[(13)] = inst_32843);

return statearr_32899;
})();
var statearr_32900_32923 = state_32875__$1;
(statearr_32900_32923[(2)] = inst_32844);


cljs.core.async.impl.ioc_helpers.process_exception(state_32875__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_32876 === (8))){
var inst_32857 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32901_32924 = state_32875__$1;
(statearr_32901_32924[(2)] = inst_32857);

(statearr_32901_32924[(1)] = (5));


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
});})(c__16134__auto___32909,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16054__auto__,c__16134__auto___32909,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_32905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32905[(0)] = state_machine__16055__auto__);

(statearr_32905[(1)] = (1));

return statearr_32905;
});
var state_machine__16055__auto____1 = (function (state_32875){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_32875);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e32906){if((e32906 instanceof Object)){
var ex__16058__auto__ = e32906;
var statearr_32907_32925 = state_32875;
(statearr_32907_32925[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32875);

return cljs.core.constant$keyword$99;
} else {
throw e32906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__32926 = state_32875;
state_32875 = G__32926;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___32909,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16136__auto__ = (function (){var statearr_32908 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_32908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___32909);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___32909,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16134__auto___33036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33036,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33036,out){
return (function (state_33012){
var state_val_33013 = (state_33012[(1)]);
if((state_val_33013 === (7))){
var inst_32991 = (state_33012[(7)]);
var inst_32992 = (state_33012[(8)]);
var inst_32991__$1 = (state_33012[(2)]);
var inst_32992__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32991__$1,(0),null);
var inst_32993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32991__$1,(1),null);
var inst_32994 = (inst_32992__$1 == null);
var state_33012__$1 = (function (){var statearr_33014 = state_33012;
(statearr_33014[(9)] = inst_32993);

(statearr_33014[(7)] = inst_32991__$1);

(statearr_33014[(8)] = inst_32992__$1);

return statearr_33014;
})();
if(cljs.core.truth_(inst_32994)){
var statearr_33015_33037 = state_33012__$1;
(statearr_33015_33037[(1)] = (8));

} else {
var statearr_33016_33038 = state_33012__$1;
(statearr_33016_33038[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (1))){
var inst_32983 = cljs.core.vec(chs);
var inst_32984 = inst_32983;
var state_33012__$1 = (function (){var statearr_33017 = state_33012;
(statearr_33017[(10)] = inst_32984);

return statearr_33017;
})();
var statearr_33018_33039 = state_33012__$1;
(statearr_33018_33039[(2)] = null);

(statearr_33018_33039[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (4))){
var inst_32984 = (state_33012[(10)]);
var state_33012__$1 = state_33012;
return cljs.core.async.ioc_alts_BANG_(state_33012__$1,(7),inst_32984);
} else {
if((state_val_33013 === (6))){
var inst_33008 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33019_33040 = state_33012__$1;
(statearr_33019_33040[(2)] = inst_33008);

(statearr_33019_33040[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (3))){
var inst_33010 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33012__$1,inst_33010);
} else {
if((state_val_33013 === (2))){
var inst_32984 = (state_33012[(10)]);
var inst_32986 = cljs.core.count(inst_32984);
var inst_32987 = (inst_32986 > (0));
var state_33012__$1 = state_33012;
if(cljs.core.truth_(inst_32987)){
var statearr_33021_33041 = state_33012__$1;
(statearr_33021_33041[(1)] = (4));

} else {
var statearr_33022_33042 = state_33012__$1;
(statearr_33022_33042[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (11))){
var inst_32984 = (state_33012[(10)]);
var inst_33001 = (state_33012[(2)]);
var tmp33020 = inst_32984;
var inst_32984__$1 = tmp33020;
var state_33012__$1 = (function (){var statearr_33023 = state_33012;
(statearr_33023[(10)] = inst_32984__$1);

(statearr_33023[(11)] = inst_33001);

return statearr_33023;
})();
var statearr_33024_33043 = state_33012__$1;
(statearr_33024_33043[(2)] = null);

(statearr_33024_33043[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (9))){
var inst_32992 = (state_33012[(8)]);
var state_33012__$1 = state_33012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33012__$1,(11),out,inst_32992);
} else {
if((state_val_33013 === (5))){
var inst_33006 = cljs.core.async.close_BANG_(out);
var state_33012__$1 = state_33012;
var statearr_33025_33044 = state_33012__$1;
(statearr_33025_33044[(2)] = inst_33006);

(statearr_33025_33044[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (10))){
var inst_33004 = (state_33012[(2)]);
var state_33012__$1 = state_33012;
var statearr_33026_33045 = state_33012__$1;
(statearr_33026_33045[(2)] = inst_33004);

(statearr_33026_33045[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33013 === (8))){
var inst_32993 = (state_33012[(9)]);
var inst_32991 = (state_33012[(7)]);
var inst_32984 = (state_33012[(10)]);
var inst_32992 = (state_33012[(8)]);
var inst_32996 = (function (){var c = inst_32993;
var v = inst_32992;
var vec__32989 = inst_32991;
var cs = inst_32984;
return ((function (c,v,vec__32989,cs,inst_32993,inst_32991,inst_32984,inst_32992,state_val_33013,c__16134__auto___33036,out){
return (function (p1__32927_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32927_SHARP_);
});
;})(c,v,vec__32989,cs,inst_32993,inst_32991,inst_32984,inst_32992,state_val_33013,c__16134__auto___33036,out))
})();
var inst_32997 = cljs.core.filterv(inst_32996,inst_32984);
var inst_32984__$1 = inst_32997;
var state_33012__$1 = (function (){var statearr_33027 = state_33012;
(statearr_33027[(10)] = inst_32984__$1);

return statearr_33027;
})();
var statearr_33028_33046 = state_33012__$1;
(statearr_33028_33046[(2)] = null);

(statearr_33028_33046[(1)] = (2));


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
});})(c__16134__auto___33036,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33036,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33032[(0)] = state_machine__16055__auto__);

(statearr_33032[(1)] = (1));

return statearr_33032;
});
var state_machine__16055__auto____1 = (function (state_33012){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33012);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33033){if((e33033 instanceof Object)){
var ex__16058__auto__ = e33033;
var statearr_33034_33047 = state_33012;
(statearr_33034_33047[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33012);

return cljs.core.constant$keyword$99;
} else {
throw e33033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33048 = state_33012;
state_33012 = G__33048;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33012){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33036,out))
})();
var state__16136__auto__ = (function (){var statearr_33035 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33036);

return statearr_33035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33036,out))
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
var c__16134__auto___33144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33144,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33144,out){
return (function (state_33121){
var state_val_33122 = (state_33121[(1)]);
if((state_val_33122 === (7))){
var inst_33103 = (state_33121[(7)]);
var inst_33103__$1 = (state_33121[(2)]);
var inst_33104 = (inst_33103__$1 == null);
var inst_33105 = cljs.core.not(inst_33104);
var state_33121__$1 = (function (){var statearr_33123 = state_33121;
(statearr_33123[(7)] = inst_33103__$1);

return statearr_33123;
})();
if(inst_33105){
var statearr_33124_33145 = state_33121__$1;
(statearr_33124_33145[(1)] = (8));

} else {
var statearr_33125_33146 = state_33121__$1;
(statearr_33125_33146[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (1))){
var inst_33098 = (0);
var state_33121__$1 = (function (){var statearr_33126 = state_33121;
(statearr_33126[(8)] = inst_33098);

return statearr_33126;
})();
var statearr_33127_33147 = state_33121__$1;
(statearr_33127_33147[(2)] = null);

(statearr_33127_33147[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (4))){
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33121__$1,(7),ch);
} else {
if((state_val_33122 === (6))){
var inst_33116 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
var statearr_33128_33148 = state_33121__$1;
(statearr_33128_33148[(2)] = inst_33116);

(statearr_33128_33148[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (3))){
var inst_33118 = (state_33121[(2)]);
var inst_33119 = cljs.core.async.close_BANG_(out);
var state_33121__$1 = (function (){var statearr_33129 = state_33121;
(statearr_33129[(9)] = inst_33118);

return statearr_33129;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33121__$1,inst_33119);
} else {
if((state_val_33122 === (2))){
var inst_33098 = (state_33121[(8)]);
var inst_33100 = (inst_33098 < n);
var state_33121__$1 = state_33121;
if(cljs.core.truth_(inst_33100)){
var statearr_33130_33149 = state_33121__$1;
(statearr_33130_33149[(1)] = (4));

} else {
var statearr_33131_33150 = state_33121__$1;
(statearr_33131_33150[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (11))){
var inst_33098 = (state_33121[(8)]);
var inst_33108 = (state_33121[(2)]);
var inst_33109 = (inst_33098 + (1));
var inst_33098__$1 = inst_33109;
var state_33121__$1 = (function (){var statearr_33132 = state_33121;
(statearr_33132[(10)] = inst_33108);

(statearr_33132[(8)] = inst_33098__$1);

return statearr_33132;
})();
var statearr_33133_33151 = state_33121__$1;
(statearr_33133_33151[(2)] = null);

(statearr_33133_33151[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (9))){
var state_33121__$1 = state_33121;
var statearr_33134_33152 = state_33121__$1;
(statearr_33134_33152[(2)] = null);

(statearr_33134_33152[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (5))){
var state_33121__$1 = state_33121;
var statearr_33135_33153 = state_33121__$1;
(statearr_33135_33153[(2)] = null);

(statearr_33135_33153[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (10))){
var inst_33113 = (state_33121[(2)]);
var state_33121__$1 = state_33121;
var statearr_33136_33154 = state_33121__$1;
(statearr_33136_33154[(2)] = inst_33113);

(statearr_33136_33154[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33122 === (8))){
var inst_33103 = (state_33121[(7)]);
var state_33121__$1 = state_33121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33121__$1,(11),out,inst_33103);
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
});})(c__16134__auto___33144,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33144,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33140[(0)] = state_machine__16055__auto__);

(statearr_33140[(1)] = (1));

return statearr_33140;
});
var state_machine__16055__auto____1 = (function (state_33121){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33121);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33141){if((e33141 instanceof Object)){
var ex__16058__auto__ = e33141;
var statearr_33142_33155 = state_33121;
(statearr_33142_33155[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33121);

return cljs.core.constant$keyword$99;
} else {
throw e33141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33156 = state_33121;
state_33121 = G__33156;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33121){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33144,out))
})();
var state__16136__auto__ = (function (){var statearr_33143 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33144);

return statearr_33143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33144,out))
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
if(typeof cljs.core.async.t33169 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33169 = (function (ch,f,map_LT_,meta33170){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33170 = meta33170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t33172 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33172 = (function (fn1,_,meta33170,map_LT_,f,ch,meta33173){
this.fn1 = fn1;
this._ = _;
this.meta33170 = meta33170;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33173 = meta33173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33172.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t33172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33157_SHARP_){
var G__33175 = (((p1__33157_SHARP_ == null))?null:(function (){var G__33176 = p1__33157_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33176) : self__.f.call(null,G__33176));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33175) : f1.call(null,G__33175));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33174){
var self__ = this;
var _33174__$1 = this;
return self__.meta33173;
});})(___$1))
;

cljs.core.async.t33172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33174,meta33173__$1){
var self__ = this;
var _33174__$1 = this;
return (new cljs.core.async.t33172(self__.fn1,self__._,self__.meta33170,self__.map_LT_,self__.f,self__.ch,meta33173__$1));
});})(___$1))
;

cljs.core.async.t33172.cljs$lang$type = true;

cljs.core.async.t33172.cljs$lang$ctorStr = "cljs.core.async/t33172";

cljs.core.async.t33172.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33172");
});})(___$1))
;

cljs.core.async.__GT_t33172 = ((function (___$1){
return (function __GT_t33172(fn1__$1,___$2,meta33170__$1,map_LT___$1,f__$1,ch__$1,meta33173){
return (new cljs.core.async.t33172(fn1__$1,___$2,meta33170__$1,map_LT___$1,f__$1,ch__$1,meta33173));
});})(___$1))
;

}

return (new cljs.core.async.t33172(fn1,___$1,self__.meta33170,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3746__auto__ = ret;
if(cljs.core.truth_(and__3746__auto__)){
return !(((function (){var G__33177 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33177) : cljs.core.deref.call(null,G__33177));
})() == null));
} else {
return and__3746__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33178 = (function (){var G__33179 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33179) : cljs.core.deref.call(null,G__33179));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33178) : self__.f.call(null,G__33178));
})());
} else {
return ret;
}
});

cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33171){
var self__ = this;
var _33171__$1 = this;
return self__.meta33170;
});

cljs.core.async.t33169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33171,meta33170__$1){
var self__ = this;
var _33171__$1 = this;
return (new cljs.core.async.t33169(self__.ch,self__.f,self__.map_LT_,meta33170__$1));
});

cljs.core.async.t33169.cljs$lang$type = true;

cljs.core.async.t33169.cljs$lang$ctorStr = "cljs.core.async/t33169";

cljs.core.async.t33169.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33169");
});

cljs.core.async.__GT_t33169 = (function __GT_t33169(ch__$1,f__$1,map_LT___$1,meta33170){
return (new cljs.core.async.t33169(ch__$1,f__$1,map_LT___$1,meta33170));
});

}

return (new cljs.core.async.t33169(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33184 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33184 = (function (ch,f,map_GT_,meta33185){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33185 = meta33185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__33187 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33187) : self__.f.call(null,G__33187));
})(),fn1);
});

cljs.core.async.t33184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33184.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33186){
var self__ = this;
var _33186__$1 = this;
return self__.meta33185;
});

cljs.core.async.t33184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33186,meta33185__$1){
var self__ = this;
var _33186__$1 = this;
return (new cljs.core.async.t33184(self__.ch,self__.f,self__.map_GT_,meta33185__$1));
});

cljs.core.async.t33184.cljs$lang$type = true;

cljs.core.async.t33184.cljs$lang$ctorStr = "cljs.core.async/t33184";

cljs.core.async.t33184.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33184");
});

cljs.core.async.__GT_t33184 = (function __GT_t33184(ch__$1,f__$1,map_GT___$1,meta33185){
return (new cljs.core.async.t33184(ch__$1,f__$1,map_GT___$1,meta33185));
});

}

return (new cljs.core.async.t33184(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33192 = (function (ch,p,filter_GT_,meta33193){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33195 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__33195) : self__.p.call(null,G__33195));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33194){
var self__ = this;
var _33194__$1 = this;
return self__.meta33193;
});

cljs.core.async.t33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33194,meta33193__$1){
var self__ = this;
var _33194__$1 = this;
return (new cljs.core.async.t33192(self__.ch,self__.p,self__.filter_GT_,meta33193__$1));
});

cljs.core.async.t33192.cljs$lang$type = true;

cljs.core.async.t33192.cljs$lang$ctorStr = "cljs.core.async/t33192";

cljs.core.async.t33192.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"cljs.core.async/t33192");
});

cljs.core.async.__GT_t33192 = (function __GT_t33192(ch__$1,p__$1,filter_GT___$1,meta33193){
return (new cljs.core.async.t33192(ch__$1,p__$1,filter_GT___$1,meta33193));
});

}

return (new cljs.core.async.t33192(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16134__auto___33283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33283,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33283,out){
return (function (state_33261){
var state_val_33262 = (state_33261[(1)]);
if((state_val_33262 === (7))){
var inst_33257 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
var statearr_33263_33284 = state_33261__$1;
(statearr_33263_33284[(2)] = inst_33257);

(statearr_33263_33284[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (1))){
var state_33261__$1 = state_33261;
var statearr_33264_33285 = state_33261__$1;
(statearr_33264_33285[(2)] = null);

(statearr_33264_33285[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (4))){
var inst_33243 = (state_33261[(7)]);
var inst_33243__$1 = (state_33261[(2)]);
var inst_33244 = (inst_33243__$1 == null);
var state_33261__$1 = (function (){var statearr_33265 = state_33261;
(statearr_33265[(7)] = inst_33243__$1);

return statearr_33265;
})();
if(cljs.core.truth_(inst_33244)){
var statearr_33266_33286 = state_33261__$1;
(statearr_33266_33286[(1)] = (5));

} else {
var statearr_33267_33287 = state_33261__$1;
(statearr_33267_33287[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (6))){
var inst_33243 = (state_33261[(7)]);
var inst_33248 = (function (){var G__33268 = inst_33243;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__33268) : p.call(null,G__33268));
})();
var state_33261__$1 = state_33261;
if(cljs.core.truth_(inst_33248)){
var statearr_33269_33288 = state_33261__$1;
(statearr_33269_33288[(1)] = (8));

} else {
var statearr_33270_33289 = state_33261__$1;
(statearr_33270_33289[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (3))){
var inst_33259 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33261__$1,inst_33259);
} else {
if((state_val_33262 === (2))){
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33261__$1,(4),ch);
} else {
if((state_val_33262 === (11))){
var inst_33251 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
var statearr_33271_33290 = state_33261__$1;
(statearr_33271_33290[(2)] = inst_33251);

(statearr_33271_33290[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (9))){
var state_33261__$1 = state_33261;
var statearr_33272_33291 = state_33261__$1;
(statearr_33272_33291[(2)] = null);

(statearr_33272_33291[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (5))){
var inst_33246 = cljs.core.async.close_BANG_(out);
var state_33261__$1 = state_33261;
var statearr_33273_33292 = state_33261__$1;
(statearr_33273_33292[(2)] = inst_33246);

(statearr_33273_33292[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (10))){
var inst_33254 = (state_33261[(2)]);
var state_33261__$1 = (function (){var statearr_33274 = state_33261;
(statearr_33274[(8)] = inst_33254);

return statearr_33274;
})();
var statearr_33275_33293 = state_33261__$1;
(statearr_33275_33293[(2)] = null);

(statearr_33275_33293[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33262 === (8))){
var inst_33243 = (state_33261[(7)]);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33261__$1,(11),out,inst_33243);
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
});})(c__16134__auto___33283,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33283,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33279 = [null,null,null,null,null,null,null,null,null];
(statearr_33279[(0)] = state_machine__16055__auto__);

(statearr_33279[(1)] = (1));

return statearr_33279;
});
var state_machine__16055__auto____1 = (function (state_33261){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33261);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33280){if((e33280 instanceof Object)){
var ex__16058__auto__ = e33280;
var statearr_33281_33294 = state_33261;
(statearr_33281_33294[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33261);

return cljs.core.constant$keyword$99;
} else {
throw e33280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33295 = state_33261;
state_33261 = G__33295;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33261){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33283,out))
})();
var state__16136__auto__ = (function (){var statearr_33282 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33283);

return statearr_33282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33283,out))
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
return (function (state_33465){
var state_val_33466 = (state_33465[(1)]);
if((state_val_33466 === (7))){
var inst_33461 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33467_33509 = state_33465__$1;
(statearr_33467_33509[(2)] = inst_33461);

(statearr_33467_33509[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (20))){
var inst_33431 = (state_33465[(7)]);
var inst_33442 = (state_33465[(2)]);
var inst_33443 = cljs.core.next(inst_33431);
var inst_33417 = inst_33443;
var inst_33418 = null;
var inst_33419 = (0);
var inst_33420 = (0);
var state_33465__$1 = (function (){var statearr_33468 = state_33465;
(statearr_33468[(8)] = inst_33442);

(statearr_33468[(9)] = inst_33420);

(statearr_33468[(10)] = inst_33418);

(statearr_33468[(11)] = inst_33419);

(statearr_33468[(12)] = inst_33417);

return statearr_33468;
})();
var statearr_33469_33510 = state_33465__$1;
(statearr_33469_33510[(2)] = null);

(statearr_33469_33510[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (1))){
var state_33465__$1 = state_33465;
var statearr_33470_33511 = state_33465__$1;
(statearr_33470_33511[(2)] = null);

(statearr_33470_33511[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (4))){
var inst_33406 = (state_33465[(13)]);
var inst_33406__$1 = (state_33465[(2)]);
var inst_33407 = (inst_33406__$1 == null);
var state_33465__$1 = (function (){var statearr_33471 = state_33465;
(statearr_33471[(13)] = inst_33406__$1);

return statearr_33471;
})();
if(cljs.core.truth_(inst_33407)){
var statearr_33472_33512 = state_33465__$1;
(statearr_33472_33512[(1)] = (5));

} else {
var statearr_33473_33513 = state_33465__$1;
(statearr_33473_33513[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (15))){
var state_33465__$1 = state_33465;
var statearr_33477_33514 = state_33465__$1;
(statearr_33477_33514[(2)] = null);

(statearr_33477_33514[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (21))){
var state_33465__$1 = state_33465;
var statearr_33478_33515 = state_33465__$1;
(statearr_33478_33515[(2)] = null);

(statearr_33478_33515[(1)] = (23));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (13))){
var inst_33420 = (state_33465[(9)]);
var inst_33418 = (state_33465[(10)]);
var inst_33419 = (state_33465[(11)]);
var inst_33417 = (state_33465[(12)]);
var inst_33427 = (state_33465[(2)]);
var inst_33428 = (inst_33420 + (1));
var tmp33474 = inst_33418;
var tmp33475 = inst_33419;
var tmp33476 = inst_33417;
var inst_33417__$1 = tmp33476;
var inst_33418__$1 = tmp33474;
var inst_33419__$1 = tmp33475;
var inst_33420__$1 = inst_33428;
var state_33465__$1 = (function (){var statearr_33479 = state_33465;
(statearr_33479[(14)] = inst_33427);

(statearr_33479[(9)] = inst_33420__$1);

(statearr_33479[(10)] = inst_33418__$1);

(statearr_33479[(11)] = inst_33419__$1);

(statearr_33479[(12)] = inst_33417__$1);

return statearr_33479;
})();
var statearr_33480_33516 = state_33465__$1;
(statearr_33480_33516[(2)] = null);

(statearr_33480_33516[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (22))){
var state_33465__$1 = state_33465;
var statearr_33481_33517 = state_33465__$1;
(statearr_33481_33517[(2)] = null);

(statearr_33481_33517[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (6))){
var inst_33406 = (state_33465[(13)]);
var inst_33415 = (function (){var G__33482 = inst_33406;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33482) : f.call(null,G__33482));
})();
var inst_33416 = cljs.core.seq(inst_33415);
var inst_33417 = inst_33416;
var inst_33418 = null;
var inst_33419 = (0);
var inst_33420 = (0);
var state_33465__$1 = (function (){var statearr_33483 = state_33465;
(statearr_33483[(9)] = inst_33420);

(statearr_33483[(10)] = inst_33418);

(statearr_33483[(11)] = inst_33419);

(statearr_33483[(12)] = inst_33417);

return statearr_33483;
})();
var statearr_33484_33518 = state_33465__$1;
(statearr_33484_33518[(2)] = null);

(statearr_33484_33518[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (17))){
var inst_33431 = (state_33465[(7)]);
var inst_33435 = cljs.core.chunk_first(inst_33431);
var inst_33436 = cljs.core.chunk_rest(inst_33431);
var inst_33437 = cljs.core.count(inst_33435);
var inst_33417 = inst_33436;
var inst_33418 = inst_33435;
var inst_33419 = inst_33437;
var inst_33420 = (0);
var state_33465__$1 = (function (){var statearr_33485 = state_33465;
(statearr_33485[(9)] = inst_33420);

(statearr_33485[(10)] = inst_33418);

(statearr_33485[(11)] = inst_33419);

(statearr_33485[(12)] = inst_33417);

return statearr_33485;
})();
var statearr_33486_33519 = state_33465__$1;
(statearr_33486_33519[(2)] = null);

(statearr_33486_33519[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (3))){
var inst_33463 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33465__$1,inst_33463);
} else {
if((state_val_33466 === (12))){
var inst_33451 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33487_33520 = state_33465__$1;
(statearr_33487_33520[(2)] = inst_33451);

(statearr_33487_33520[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (2))){
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33465__$1,(4),in$);
} else {
if((state_val_33466 === (23))){
var inst_33459 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33488_33521 = state_33465__$1;
(statearr_33488_33521[(2)] = inst_33459);

(statearr_33488_33521[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (19))){
var inst_33446 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33489_33522 = state_33465__$1;
(statearr_33489_33522[(2)] = inst_33446);

(statearr_33489_33522[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (11))){
var inst_33417 = (state_33465[(12)]);
var inst_33431 = (state_33465[(7)]);
var inst_33431__$1 = cljs.core.seq(inst_33417);
var state_33465__$1 = (function (){var statearr_33490 = state_33465;
(statearr_33490[(7)] = inst_33431__$1);

return statearr_33490;
})();
if(inst_33431__$1){
var statearr_33491_33523 = state_33465__$1;
(statearr_33491_33523[(1)] = (14));

} else {
var statearr_33492_33524 = state_33465__$1;
(statearr_33492_33524[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (9))){
var inst_33453 = (state_33465[(2)]);
var inst_33454 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33465__$1 = (function (){var statearr_33493 = state_33465;
(statearr_33493[(15)] = inst_33453);

return statearr_33493;
})();
if(cljs.core.truth_(inst_33454)){
var statearr_33494_33525 = state_33465__$1;
(statearr_33494_33525[(1)] = (21));

} else {
var statearr_33495_33526 = state_33465__$1;
(statearr_33495_33526[(1)] = (22));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (5))){
var inst_33409 = cljs.core.async.close_BANG_(out);
var state_33465__$1 = state_33465;
var statearr_33496_33527 = state_33465__$1;
(statearr_33496_33527[(2)] = inst_33409);

(statearr_33496_33527[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (14))){
var inst_33431 = (state_33465[(7)]);
var inst_33433 = cljs.core.chunked_seq_QMARK_(inst_33431);
var state_33465__$1 = state_33465;
if(inst_33433){
var statearr_33497_33528 = state_33465__$1;
(statearr_33497_33528[(1)] = (17));

} else {
var statearr_33498_33529 = state_33465__$1;
(statearr_33498_33529[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (16))){
var inst_33449 = (state_33465[(2)]);
var state_33465__$1 = state_33465;
var statearr_33499_33530 = state_33465__$1;
(statearr_33499_33530[(2)] = inst_33449);

(statearr_33499_33530[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33466 === (10))){
var inst_33420 = (state_33465[(9)]);
var inst_33418 = (state_33465[(10)]);
var inst_33425 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33418,inst_33420);
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33465__$1,(13),out,inst_33425);
} else {
if((state_val_33466 === (18))){
var inst_33431 = (state_33465[(7)]);
var inst_33440 = cljs.core.first(inst_33431);
var state_33465__$1 = state_33465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33465__$1,(20),out,inst_33440);
} else {
if((state_val_33466 === (8))){
var inst_33420 = (state_33465[(9)]);
var inst_33419 = (state_33465[(11)]);
var inst_33422 = (inst_33420 < inst_33419);
var inst_33423 = inst_33422;
var state_33465__$1 = state_33465;
if(cljs.core.truth_(inst_33423)){
var statearr_33500_33531 = state_33465__$1;
(statearr_33500_33531[(1)] = (10));

} else {
var statearr_33501_33532 = state_33465__$1;
(statearr_33501_33532[(1)] = (11));

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
var statearr_33505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33505[(0)] = state_machine__16055__auto__);

(statearr_33505[(1)] = (1));

return statearr_33505;
});
var state_machine__16055__auto____1 = (function (state_33465){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33465);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33506){if((e33506 instanceof Object)){
var ex__16058__auto__ = e33506;
var statearr_33507_33533 = state_33465;
(statearr_33507_33533[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33465);

return cljs.core.constant$keyword$99;
} else {
throw e33506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33534 = state_33465;
state_33465 = G__33534;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33465){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__))
})();
var state__16136__auto__ = (function (){var statearr_33508 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_33508;
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
var c__16134__auto___33639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33639,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33639,out){
return (function (state_33614){
var state_val_33615 = (state_33614[(1)]);
if((state_val_33615 === (7))){
var inst_33609 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33616_33640 = state_33614__$1;
(statearr_33616_33640[(2)] = inst_33609);

(statearr_33616_33640[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (1))){
var inst_33591 = null;
var state_33614__$1 = (function (){var statearr_33617 = state_33614;
(statearr_33617[(7)] = inst_33591);

return statearr_33617;
})();
var statearr_33618_33641 = state_33614__$1;
(statearr_33618_33641[(2)] = null);

(statearr_33618_33641[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (4))){
var inst_33594 = (state_33614[(8)]);
var inst_33594__$1 = (state_33614[(2)]);
var inst_33595 = (inst_33594__$1 == null);
var inst_33596 = cljs.core.not(inst_33595);
var state_33614__$1 = (function (){var statearr_33619 = state_33614;
(statearr_33619[(8)] = inst_33594__$1);

return statearr_33619;
})();
if(inst_33596){
var statearr_33620_33642 = state_33614__$1;
(statearr_33620_33642[(1)] = (5));

} else {
var statearr_33621_33643 = state_33614__$1;
(statearr_33621_33643[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (6))){
var state_33614__$1 = state_33614;
var statearr_33622_33644 = state_33614__$1;
(statearr_33622_33644[(2)] = null);

(statearr_33622_33644[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (3))){
var inst_33611 = (state_33614[(2)]);
var inst_33612 = cljs.core.async.close_BANG_(out);
var state_33614__$1 = (function (){var statearr_33623 = state_33614;
(statearr_33623[(9)] = inst_33611);

return statearr_33623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33614__$1,inst_33612);
} else {
if((state_val_33615 === (2))){
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33614__$1,(4),ch);
} else {
if((state_val_33615 === (11))){
var inst_33594 = (state_33614[(8)]);
var inst_33603 = (state_33614[(2)]);
var inst_33591 = inst_33594;
var state_33614__$1 = (function (){var statearr_33624 = state_33614;
(statearr_33624[(10)] = inst_33603);

(statearr_33624[(7)] = inst_33591);

return statearr_33624;
})();
var statearr_33625_33645 = state_33614__$1;
(statearr_33625_33645[(2)] = null);

(statearr_33625_33645[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (9))){
var inst_33594 = (state_33614[(8)]);
var state_33614__$1 = state_33614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33614__$1,(11),out,inst_33594);
} else {
if((state_val_33615 === (5))){
var inst_33594 = (state_33614[(8)]);
var inst_33591 = (state_33614[(7)]);
var inst_33598 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33594,inst_33591);
var state_33614__$1 = state_33614;
if(inst_33598){
var statearr_33627_33646 = state_33614__$1;
(statearr_33627_33646[(1)] = (8));

} else {
var statearr_33628_33647 = state_33614__$1;
(statearr_33628_33647[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (10))){
var inst_33606 = (state_33614[(2)]);
var state_33614__$1 = state_33614;
var statearr_33629_33648 = state_33614__$1;
(statearr_33629_33648[(2)] = inst_33606);

(statearr_33629_33648[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33615 === (8))){
var inst_33591 = (state_33614[(7)]);
var tmp33626 = inst_33591;
var inst_33591__$1 = tmp33626;
var state_33614__$1 = (function (){var statearr_33630 = state_33614;
(statearr_33630[(7)] = inst_33591__$1);

return statearr_33630;
})();
var statearr_33631_33649 = state_33614__$1;
(statearr_33631_33649[(2)] = null);

(statearr_33631_33649[(1)] = (2));


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
});})(c__16134__auto___33639,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33639,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33635[(0)] = state_machine__16055__auto__);

(statearr_33635[(1)] = (1));

return statearr_33635;
});
var state_machine__16055__auto____1 = (function (state_33614){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33614);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33636){if((e33636 instanceof Object)){
var ex__16058__auto__ = e33636;
var statearr_33637_33650 = state_33614;
(statearr_33637_33650[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33614);

return cljs.core.constant$keyword$99;
} else {
throw e33636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33651 = state_33614;
state_33614 = G__33651;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33614){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33639,out))
})();
var state__16136__auto__ = (function (){var statearr_33638 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33639);

return statearr_33638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33639,out))
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
var c__16134__auto___33789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33789,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33789,out){
return (function (state_33759){
var state_val_33760 = (state_33759[(1)]);
if((state_val_33760 === (7))){
var inst_33755 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33761_33790 = state_33759__$1;
(statearr_33761_33790[(2)] = inst_33755);

(statearr_33761_33790[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (1))){
var inst_33722 = (new Array(n));
var inst_33723 = inst_33722;
var inst_33724 = (0);
var state_33759__$1 = (function (){var statearr_33762 = state_33759;
(statearr_33762[(7)] = inst_33723);

(statearr_33762[(8)] = inst_33724);

return statearr_33762;
})();
var statearr_33763_33791 = state_33759__$1;
(statearr_33763_33791[(2)] = null);

(statearr_33763_33791[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (4))){
var inst_33727 = (state_33759[(9)]);
var inst_33727__$1 = (state_33759[(2)]);
var inst_33728 = (inst_33727__$1 == null);
var inst_33729 = cljs.core.not(inst_33728);
var state_33759__$1 = (function (){var statearr_33764 = state_33759;
(statearr_33764[(9)] = inst_33727__$1);

return statearr_33764;
})();
if(inst_33729){
var statearr_33765_33792 = state_33759__$1;
(statearr_33765_33792[(1)] = (5));

} else {
var statearr_33766_33793 = state_33759__$1;
(statearr_33766_33793[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (15))){
var inst_33749 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33767_33794 = state_33759__$1;
(statearr_33767_33794[(2)] = inst_33749);

(statearr_33767_33794[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (13))){
var state_33759__$1 = state_33759;
var statearr_33768_33795 = state_33759__$1;
(statearr_33768_33795[(2)] = null);

(statearr_33768_33795[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (6))){
var inst_33724 = (state_33759[(8)]);
var inst_33745 = (inst_33724 > (0));
var state_33759__$1 = state_33759;
if(cljs.core.truth_(inst_33745)){
var statearr_33769_33796 = state_33759__$1;
(statearr_33769_33796[(1)] = (12));

} else {
var statearr_33770_33797 = state_33759__$1;
(statearr_33770_33797[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (3))){
var inst_33757 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33759__$1,inst_33757);
} else {
if((state_val_33760 === (12))){
var inst_33723 = (state_33759[(7)]);
var inst_33747 = cljs.core.vec(inst_33723);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33759__$1,(15),out,inst_33747);
} else {
if((state_val_33760 === (2))){
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33759__$1,(4),ch);
} else {
if((state_val_33760 === (11))){
var inst_33739 = (state_33759[(2)]);
var inst_33740 = (new Array(n));
var inst_33723 = inst_33740;
var inst_33724 = (0);
var state_33759__$1 = (function (){var statearr_33771 = state_33759;
(statearr_33771[(7)] = inst_33723);

(statearr_33771[(8)] = inst_33724);

(statearr_33771[(10)] = inst_33739);

return statearr_33771;
})();
var statearr_33772_33798 = state_33759__$1;
(statearr_33772_33798[(2)] = null);

(statearr_33772_33798[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (9))){
var inst_33723 = (state_33759[(7)]);
var inst_33737 = cljs.core.vec(inst_33723);
var state_33759__$1 = state_33759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33759__$1,(11),out,inst_33737);
} else {
if((state_val_33760 === (5))){
var inst_33723 = (state_33759[(7)]);
var inst_33727 = (state_33759[(9)]);
var inst_33724 = (state_33759[(8)]);
var inst_33732 = (state_33759[(11)]);
var inst_33731 = (inst_33723[inst_33724] = inst_33727);
var inst_33732__$1 = (inst_33724 + (1));
var inst_33733 = (inst_33732__$1 < n);
var state_33759__$1 = (function (){var statearr_33773 = state_33759;
(statearr_33773[(12)] = inst_33731);

(statearr_33773[(11)] = inst_33732__$1);

return statearr_33773;
})();
if(cljs.core.truth_(inst_33733)){
var statearr_33774_33799 = state_33759__$1;
(statearr_33774_33799[(1)] = (8));

} else {
var statearr_33775_33800 = state_33759__$1;
(statearr_33775_33800[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (14))){
var inst_33752 = (state_33759[(2)]);
var inst_33753 = cljs.core.async.close_BANG_(out);
var state_33759__$1 = (function (){var statearr_33777 = state_33759;
(statearr_33777[(13)] = inst_33752);

return statearr_33777;
})();
var statearr_33778_33801 = state_33759__$1;
(statearr_33778_33801[(2)] = inst_33753);

(statearr_33778_33801[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (10))){
var inst_33743 = (state_33759[(2)]);
var state_33759__$1 = state_33759;
var statearr_33779_33802 = state_33759__$1;
(statearr_33779_33802[(2)] = inst_33743);

(statearr_33779_33802[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33760 === (8))){
var inst_33723 = (state_33759[(7)]);
var inst_33732 = (state_33759[(11)]);
var tmp33776 = inst_33723;
var inst_33723__$1 = tmp33776;
var inst_33724 = inst_33732;
var state_33759__$1 = (function (){var statearr_33780 = state_33759;
(statearr_33780[(7)] = inst_33723__$1);

(statearr_33780[(8)] = inst_33724);

return statearr_33780;
})();
var statearr_33781_33803 = state_33759__$1;
(statearr_33781_33803[(2)] = null);

(statearr_33781_33803[(1)] = (2));


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
});})(c__16134__auto___33789,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33789,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33785[(0)] = state_machine__16055__auto__);

(statearr_33785[(1)] = (1));

return statearr_33785;
});
var state_machine__16055__auto____1 = (function (state_33759){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33759);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33786){if((e33786 instanceof Object)){
var ex__16058__auto__ = e33786;
var statearr_33787_33804 = state_33759;
(statearr_33787_33804[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33759);

return cljs.core.constant$keyword$99;
} else {
throw e33786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33805 = state_33759;
state_33759 = G__33805;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33759){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33789,out))
})();
var state__16136__auto__ = (function (){var statearr_33788 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33789);

return statearr_33788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33789,out))
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
var c__16134__auto___33953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto___33953,out){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto___33953,out){
return (function (state_33922){
var state_val_33923 = (state_33922[(1)]);
if((state_val_33923 === (7))){
var inst_33918 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33924_33954 = state_33922__$1;
(statearr_33924_33954[(2)] = inst_33918);

(statearr_33924_33954[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (1))){
var inst_33881 = [];
var inst_33882 = inst_33881;
var inst_33883 = cljs.core.constant$keyword$114;
var state_33922__$1 = (function (){var statearr_33925 = state_33922;
(statearr_33925[(7)] = inst_33883);

(statearr_33925[(8)] = inst_33882);

return statearr_33925;
})();
var statearr_33926_33955 = state_33922__$1;
(statearr_33926_33955[(2)] = null);

(statearr_33926_33955[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (4))){
var inst_33886 = (state_33922[(9)]);
var inst_33886__$1 = (state_33922[(2)]);
var inst_33887 = (inst_33886__$1 == null);
var inst_33888 = cljs.core.not(inst_33887);
var state_33922__$1 = (function (){var statearr_33927 = state_33922;
(statearr_33927[(9)] = inst_33886__$1);

return statearr_33927;
})();
if(inst_33888){
var statearr_33928_33956 = state_33922__$1;
(statearr_33928_33956[(1)] = (5));

} else {
var statearr_33929_33957 = state_33922__$1;
(statearr_33929_33957[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (15))){
var inst_33912 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33930_33958 = state_33922__$1;
(statearr_33930_33958[(2)] = inst_33912);

(statearr_33930_33958[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (13))){
var state_33922__$1 = state_33922;
var statearr_33931_33959 = state_33922__$1;
(statearr_33931_33959[(2)] = null);

(statearr_33931_33959[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (6))){
var inst_33882 = (state_33922[(8)]);
var inst_33907 = inst_33882.length;
var inst_33908 = (inst_33907 > (0));
var state_33922__$1 = state_33922;
if(cljs.core.truth_(inst_33908)){
var statearr_33932_33960 = state_33922__$1;
(statearr_33932_33960[(1)] = (12));

} else {
var statearr_33933_33961 = state_33922__$1;
(statearr_33933_33961[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (3))){
var inst_33920 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33922__$1,inst_33920);
} else {
if((state_val_33923 === (12))){
var inst_33882 = (state_33922[(8)]);
var inst_33910 = cljs.core.vec(inst_33882);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33922__$1,(15),out,inst_33910);
} else {
if((state_val_33923 === (2))){
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33922__$1,(4),ch);
} else {
if((state_val_33923 === (11))){
var inst_33890 = (state_33922[(10)]);
var inst_33886 = (state_33922[(9)]);
var inst_33900 = (state_33922[(2)]);
var inst_33901 = [];
var inst_33902 = inst_33901.push(inst_33886);
var inst_33882 = inst_33901;
var inst_33883 = inst_33890;
var state_33922__$1 = (function (){var statearr_33934 = state_33922;
(statearr_33934[(7)] = inst_33883);

(statearr_33934[(8)] = inst_33882);

(statearr_33934[(11)] = inst_33902);

(statearr_33934[(12)] = inst_33900);

return statearr_33934;
})();
var statearr_33935_33962 = state_33922__$1;
(statearr_33935_33962[(2)] = null);

(statearr_33935_33962[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (9))){
var inst_33882 = (state_33922[(8)]);
var inst_33898 = cljs.core.vec(inst_33882);
var state_33922__$1 = state_33922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33922__$1,(11),out,inst_33898);
} else {
if((state_val_33923 === (5))){
var inst_33883 = (state_33922[(7)]);
var inst_33890 = (state_33922[(10)]);
var inst_33886 = (state_33922[(9)]);
var inst_33890__$1 = (function (){var G__33936 = inst_33886;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33936) : f.call(null,G__33936));
})();
var inst_33891 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33890__$1,inst_33883);
var inst_33892 = cljs.core.keyword_identical_QMARK_(inst_33883,cljs.core.constant$keyword$114);
var inst_33893 = (inst_33891) || (inst_33892);
var state_33922__$1 = (function (){var statearr_33937 = state_33922;
(statearr_33937[(10)] = inst_33890__$1);

return statearr_33937;
})();
if(cljs.core.truth_(inst_33893)){
var statearr_33938_33963 = state_33922__$1;
(statearr_33938_33963[(1)] = (8));

} else {
var statearr_33939_33964 = state_33922__$1;
(statearr_33939_33964[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (14))){
var inst_33915 = (state_33922[(2)]);
var inst_33916 = cljs.core.async.close_BANG_(out);
var state_33922__$1 = (function (){var statearr_33941 = state_33922;
(statearr_33941[(13)] = inst_33915);

return statearr_33941;
})();
var statearr_33942_33965 = state_33922__$1;
(statearr_33942_33965[(2)] = inst_33916);

(statearr_33942_33965[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (10))){
var inst_33905 = (state_33922[(2)]);
var state_33922__$1 = state_33922;
var statearr_33943_33966 = state_33922__$1;
(statearr_33943_33966[(2)] = inst_33905);

(statearr_33943_33966[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33923 === (8))){
var inst_33890 = (state_33922[(10)]);
var inst_33882 = (state_33922[(8)]);
var inst_33886 = (state_33922[(9)]);
var inst_33895 = inst_33882.push(inst_33886);
var tmp33940 = inst_33882;
var inst_33882__$1 = tmp33940;
var inst_33883 = inst_33890;
var state_33922__$1 = (function (){var statearr_33944 = state_33922;
(statearr_33944[(7)] = inst_33883);

(statearr_33944[(8)] = inst_33882__$1);

(statearr_33944[(14)] = inst_33895);

return statearr_33944;
})();
var statearr_33945_33967 = state_33922__$1;
(statearr_33945_33967[(2)] = null);

(statearr_33945_33967[(1)] = (2));


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
});})(c__16134__auto___33953,out))
;
return ((function (switch__16054__auto__,c__16134__auto___33953,out){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_33949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33949[(0)] = state_machine__16055__auto__);

(statearr_33949[(1)] = (1));

return statearr_33949;
});
var state_machine__16055__auto____1 = (function (state_33922){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_33922);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e33950){if((e33950 instanceof Object)){
var ex__16058__auto__ = e33950;
var statearr_33951_33968 = state_33922;
(statearr_33951_33968[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33922);

return cljs.core.constant$keyword$99;
} else {
throw e33950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__33969 = state_33922;
state_33922 = G__33969;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_33922){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_33922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto___33953,out))
})();
var state__16136__auto__ = (function (){var statearr_33952 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_33952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto___33953);

return statearr_33952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto___33953,out))
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
