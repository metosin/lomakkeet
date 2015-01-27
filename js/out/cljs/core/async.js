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
if(typeof cljs.core.async.t31760 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31760 = (function (f,fn_handler,meta31761){
this.f = f;
this.fn_handler = fn_handler;
this.meta31761 = meta31761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31762){
var self__ = this;
var _31762__$1 = this;
return self__.meta31761;
});

cljs.core.async.t31760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31762,meta31761__$1){
var self__ = this;
var _31762__$1 = this;
return (new cljs.core.async.t31760(self__.f,self__.fn_handler,meta31761__$1));
});

cljs.core.async.t31760.cljs$lang$type = true;

cljs.core.async.t31760.cljs$lang$ctorStr = "cljs.core.async/t31760";

cljs.core.async.t31760.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31760");
});

cljs.core.async.__GT_t31760 = (function __GT_t31760(f__$1,fn_handler__$1,meta31761){
return (new cljs.core.async.t31760(f__$1,fn_handler__$1,meta31761));
});

}

return (new cljs.core.async.t31760(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var G__31764 = buff;
if(G__31764){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__31764.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31764.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31764);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31764);
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
var val_31781 = (function (){var G__31778 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31778) : cljs.core.deref.call(null,G__31778));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31779_31782 = val_31781;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31779_31782) : fn1.call(null,G__31779_31782));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31781,ret){
return (function (){
var G__31780 = val_31781;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31780) : fn1.call(null,G__31780));
});})(val_31781,ret))
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
var G__31791 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31791) : cljs.core.deref.call(null,G__31791));
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
var ret = (function (){var G__31792 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31792) : cljs.core.deref.call(null,G__31792));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31793_31795 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31793_31795) : fn1.call(null,G__31793_31795));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__31794 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31794) : fn1.call(null,G__31794));
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
var n__5138__auto___31796 = n;
var x_31797 = (0);
while(true){
if((x_31797 < n__5138__auto___31796)){
(a[x_31797] = (0));

var G__31798 = (x_31797 + (1));
x_31797 = G__31798;
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

var G__31799 = (i + (1));
i = G__31799;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__31807 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31807) : cljs.core.atom.call(null,G__31807));
})();
if(typeof cljs.core.async.t31808 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31808 = (function (flag,alt_flag,meta31809){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31809 = meta31809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31808.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31811 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31811) : cljs.core.deref.call(null,G__31811));
});})(flag))
;

cljs.core.async.t31808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31812_31814 = self__.flag;
var G__31813_31815 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31812_31814,G__31813_31815) : cljs.core.reset_BANG_.call(null,G__31812_31814,G__31813_31815));

return true;
});})(flag))
;

cljs.core.async.t31808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31810){
var self__ = this;
var _31810__$1 = this;
return self__.meta31809;
});})(flag))
;

cljs.core.async.t31808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31810,meta31809__$1){
var self__ = this;
var _31810__$1 = this;
return (new cljs.core.async.t31808(self__.flag,self__.alt_flag,meta31809__$1));
});})(flag))
;

cljs.core.async.t31808.cljs$lang$type = true;

cljs.core.async.t31808.cljs$lang$ctorStr = "cljs.core.async/t31808";

cljs.core.async.t31808.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31808");
});})(flag))
;

cljs.core.async.__GT_t31808 = ((function (flag){
return (function __GT_t31808(flag__$1,alt_flag__$1,meta31809){
return (new cljs.core.async.t31808(flag__$1,alt_flag__$1,meta31809));
});})(flag))
;

}

return (new cljs.core.async.t31808(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31819 = (function (cb,flag,alt_handler,meta31820){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31820 = meta31820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31821){
var self__ = this;
var _31821__$1 = this;
return self__.meta31820;
});

cljs.core.async.t31819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31821,meta31820__$1){
var self__ = this;
var _31821__$1 = this;
return (new cljs.core.async.t31819(self__.cb,self__.flag,self__.alt_handler,meta31820__$1));
});

cljs.core.async.t31819.cljs$lang$type = true;

cljs.core.async.t31819.cljs$lang$ctorStr = "cljs.core.async/t31819";

cljs.core.async.t31819.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31819");
});

cljs.core.async.__GT_t31819 = (function __GT_t31819(cb__$1,flag__$1,alt_handler__$1,meta31820){
return (new cljs.core.async.t31819(cb__$1,flag__$1,alt_handler__$1,meta31820));
});

}

return (new cljs.core.async.t31819(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31829 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31829) : port.call(null,G__31829));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31830 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31830) : port.call(null,G__31830));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31822_SHARP_){
var G__31831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31822_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31831) : fret.call(null,G__31831));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31823_SHARP_){
var G__31832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31823_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31832) : fret.call(null,G__31832));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31833 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31833) : cljs.core.deref.call(null,G__31833));
})(),(function (){var or__4251__auto__ = wport;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31834 = (i + (1));
i = G__31834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4251__auto__ = ret;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__4239__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4239__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4239__auto__;
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
var alts_BANG___delegate = function (ports,p__31835){
var map__31837 = p__31835;
var map__31837__$1 = ((cljs.core.seq_QMARK_(map__31837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31837):map__31837);
var opts = map__31837__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31835 = null;
if (arguments.length > 1) {
var G__31838__i = 0, G__31838__a = new Array(arguments.length -  1);
while (G__31838__i < G__31838__a.length) {G__31838__a[G__31838__i] = arguments[G__31838__i + 1]; ++G__31838__i;}
  p__31835 = new cljs.core.IndexedSeq(G__31838__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31835);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31839){
var ports = cljs.core.first(arglist__31839);
var p__31835 = cljs.core.rest(arglist__31839);
return alts_BANG___delegate(ports,p__31835);
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
var c__16627__auto___31937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___31937){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___31937){
return (function (state_31913){
var state_val_31914 = (state_31913[(1)]);
if((state_val_31914 === (7))){
var inst_31909 = (state_31913[(2)]);
var state_31913__$1 = state_31913;
var statearr_31915_31938 = state_31913__$1;
(statearr_31915_31938[(2)] = inst_31909);

(statearr_31915_31938[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (1))){
var state_31913__$1 = state_31913;
var statearr_31916_31939 = state_31913__$1;
(statearr_31916_31939[(2)] = null);

(statearr_31916_31939[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (4))){
var inst_31892 = (state_31913[(7)]);
var inst_31892__$1 = (state_31913[(2)]);
var inst_31893 = (inst_31892__$1 == null);
var state_31913__$1 = (function (){var statearr_31917 = state_31913;
(statearr_31917[(7)] = inst_31892__$1);

return statearr_31917;
})();
if(cljs.core.truth_(inst_31893)){
var statearr_31918_31940 = state_31913__$1;
(statearr_31918_31940[(1)] = (5));

} else {
var statearr_31919_31941 = state_31913__$1;
(statearr_31919_31941[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (13))){
var state_31913__$1 = state_31913;
var statearr_31920_31942 = state_31913__$1;
(statearr_31920_31942[(2)] = null);

(statearr_31920_31942[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (6))){
var inst_31892 = (state_31913[(7)]);
var state_31913__$1 = state_31913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31913__$1,(11),to,inst_31892);
} else {
if((state_val_31914 === (3))){
var inst_31911 = (state_31913[(2)]);
var state_31913__$1 = state_31913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31913__$1,inst_31911);
} else {
if((state_val_31914 === (12))){
var state_31913__$1 = state_31913;
var statearr_31921_31943 = state_31913__$1;
(statearr_31921_31943[(2)] = null);

(statearr_31921_31943[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (2))){
var state_31913__$1 = state_31913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31913__$1,(4),from);
} else {
if((state_val_31914 === (11))){
var inst_31902 = (state_31913[(2)]);
var state_31913__$1 = state_31913;
if(cljs.core.truth_(inst_31902)){
var statearr_31922_31944 = state_31913__$1;
(statearr_31922_31944[(1)] = (12));

} else {
var statearr_31923_31945 = state_31913__$1;
(statearr_31923_31945[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (9))){
var state_31913__$1 = state_31913;
var statearr_31924_31946 = state_31913__$1;
(statearr_31924_31946[(2)] = null);

(statearr_31924_31946[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (5))){
var state_31913__$1 = state_31913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31925_31947 = state_31913__$1;
(statearr_31925_31947[(1)] = (8));

} else {
var statearr_31926_31948 = state_31913__$1;
(statearr_31926_31948[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (14))){
var inst_31907 = (state_31913[(2)]);
var state_31913__$1 = state_31913;
var statearr_31927_31949 = state_31913__$1;
(statearr_31927_31949[(2)] = inst_31907);

(statearr_31927_31949[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (10))){
var inst_31899 = (state_31913[(2)]);
var state_31913__$1 = state_31913;
var statearr_31928_31950 = state_31913__$1;
(statearr_31928_31950[(2)] = inst_31899);

(statearr_31928_31950[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31914 === (8))){
var inst_31896 = cljs.core.async.close_BANG_(to);
var state_31913__$1 = state_31913;
var statearr_31929_31951 = state_31913__$1;
(statearr_31929_31951[(2)] = inst_31896);

(statearr_31929_31951[(1)] = (10));


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
});})(c__16627__auto___31937))
;
return ((function (switch__16547__auto__,c__16627__auto___31937){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_31933 = [null,null,null,null,null,null,null,null];
(statearr_31933[(0)] = state_machine__16548__auto__);

(statearr_31933[(1)] = (1));

return statearr_31933;
});
var state_machine__16548__auto____1 = (function (state_31913){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_31913);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e31934){if((e31934 instanceof Object)){
var ex__16551__auto__ = e31934;
var statearr_31935_31952 = state_31913;
(statearr_31935_31952[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31913);

return cljs.core.constant$keyword$99;
} else {
throw e31934;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__31953 = state_31913;
state_31913 = G__31953;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_31913){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_31913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___31937))
})();
var state__16629__auto__ = (function (){var statearr_31936 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_31936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___31937);

return statearr_31936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___31937))
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
return (function (p__32139){
var vec__32140 = p__32139;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32140,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32140,(1),null);
var job = vec__32140;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16627__auto___32324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32324,res,vec__32140,v,p,job,jobs,results){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32324,res,vec__32140,v,p,job,jobs,results){
return (function (state_32145){
var state_val_32146 = (state_32145[(1)]);
if((state_val_32146 === (2))){
var inst_32142 = (state_32145[(2)]);
var inst_32143 = cljs.core.async.close_BANG_(res);
var state_32145__$1 = (function (){var statearr_32147 = state_32145;
(statearr_32147[(7)] = inst_32142);

return statearr_32147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32145__$1,inst_32143);
} else {
if((state_val_32146 === (1))){
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32145__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16627__auto___32324,res,vec__32140,v,p,job,jobs,results))
;
return ((function (switch__16547__auto__,c__16627__auto___32324,res,vec__32140,v,p,job,jobs,results){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32151 = [null,null,null,null,null,null,null,null];
(statearr_32151[(0)] = state_machine__16548__auto__);

(statearr_32151[(1)] = (1));

return statearr_32151;
});
var state_machine__16548__auto____1 = (function (state_32145){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32145);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32152){if((e32152 instanceof Object)){
var ex__16551__auto__ = e32152;
var statearr_32153_32325 = state_32145;
(statearr_32153_32325[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32145);

return cljs.core.constant$keyword$99;
} else {
throw e32152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32326 = state_32145;
state_32145 = G__32326;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32145){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32324,res,vec__32140,v,p,job,jobs,results))
})();
var state__16629__auto__ = (function (){var statearr_32154 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32324);

return statearr_32154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32324,res,vec__32140,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32155){
var vec__32156 = p__32155;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32156,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32156,(1),null);
var job = vec__32156;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__32157_32327 = v;
var G__32158_32328 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__32157_32327,G__32158_32328) : xf.call(null,G__32157_32327,G__32158_32328));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5138__auto___32329 = n;
var __32330 = (0);
while(true){
if((__32330 < n__5138__auto___32329)){
var G__32159_32331 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32159_32331) {
case "async":
var c__16627__auto___32333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32330,c__16627__auto___32333,G__32159_32331,n__5138__auto___32329,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (__32330,c__16627__auto___32333,G__32159_32331,n__5138__auto___32329,jobs,results,process,async){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (7))){
var inst_32168 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32174_32334 = state_32172__$1;
(statearr_32174_32334[(2)] = inst_32168);

(statearr_32174_32334[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32173 === (6))){
var state_32172__$1 = state_32172;
var statearr_32175_32335 = state_32172__$1;
(statearr_32175_32335[(2)] = null);

(statearr_32175_32335[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32173 === (5))){
var state_32172__$1 = state_32172;
var statearr_32176_32336 = state_32172__$1;
(statearr_32176_32336[(2)] = null);

(statearr_32176_32336[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32173 === (4))){
var inst_32162 = (state_32172[(2)]);
var inst_32163 = async(inst_32162);
var state_32172__$1 = state_32172;
if(cljs.core.truth_(inst_32163)){
var statearr_32177_32337 = state_32172__$1;
(statearr_32177_32337[(1)] = (5));

} else {
var statearr_32178_32338 = state_32172__$1;
(statearr_32178_32338[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32173 === (3))){
var inst_32170 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32172__$1,inst_32170);
} else {
if((state_val_32173 === (2))){
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32172__$1,(4),jobs);
} else {
if((state_val_32173 === (1))){
var state_32172__$1 = state_32172;
var statearr_32179_32339 = state_32172__$1;
(statearr_32179_32339[(2)] = null);

(statearr_32179_32339[(1)] = (2));


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
});})(__32330,c__16627__auto___32333,G__32159_32331,n__5138__auto___32329,jobs,results,process,async))
;
return ((function (__32330,switch__16547__auto__,c__16627__auto___32333,G__32159_32331,n__5138__auto___32329,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32183 = [null,null,null,null,null,null,null];
(statearr_32183[(0)] = state_machine__16548__auto__);

(statearr_32183[(1)] = (1));

return statearr_32183;
});
var state_machine__16548__auto____1 = (function (state_32172){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32172);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32184){if((e32184 instanceof Object)){
var ex__16551__auto__ = e32184;
var statearr_32185_32340 = state_32172;
(statearr_32185_32340[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32172);

return cljs.core.constant$keyword$99;
} else {
throw e32184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32341 = state_32172;
state_32172 = G__32341;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(__32330,switch__16547__auto__,c__16627__auto___32333,G__32159_32331,n__5138__auto___32329,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32186 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32333);

return statearr_32186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(__32330,c__16627__auto___32333,G__32159_32331,n__5138__auto___32329,jobs,results,process,async))
);


break;
case "compute":
var c__16627__auto___32342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32330,c__16627__auto___32342,G__32159_32331,n__5138__auto___32329,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (__32330,c__16627__auto___32342,G__32159_32331,n__5138__auto___32329,jobs,results,process,async){
return (function (state_32199){
var state_val_32200 = (state_32199[(1)]);
if((state_val_32200 === (7))){
var inst_32195 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32201_32343 = state_32199__$1;
(statearr_32201_32343[(2)] = inst_32195);

(statearr_32201_32343[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32200 === (6))){
var state_32199__$1 = state_32199;
var statearr_32202_32344 = state_32199__$1;
(statearr_32202_32344[(2)] = null);

(statearr_32202_32344[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32200 === (5))){
var state_32199__$1 = state_32199;
var statearr_32203_32345 = state_32199__$1;
(statearr_32203_32345[(2)] = null);

(statearr_32203_32345[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32200 === (4))){
var inst_32189 = (state_32199[(2)]);
var inst_32190 = process(inst_32189);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32190)){
var statearr_32204_32346 = state_32199__$1;
(statearr_32204_32346[(1)] = (5));

} else {
var statearr_32205_32347 = state_32199__$1;
(statearr_32205_32347[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32200 === (3))){
var inst_32197 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32199__$1,inst_32197);
} else {
if((state_val_32200 === (2))){
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32199__$1,(4),jobs);
} else {
if((state_val_32200 === (1))){
var state_32199__$1 = state_32199;
var statearr_32206_32348 = state_32199__$1;
(statearr_32206_32348[(2)] = null);

(statearr_32206_32348[(1)] = (2));


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
});})(__32330,c__16627__auto___32342,G__32159_32331,n__5138__auto___32329,jobs,results,process,async))
;
return ((function (__32330,switch__16547__auto__,c__16627__auto___32342,G__32159_32331,n__5138__auto___32329,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32210 = [null,null,null,null,null,null,null];
(statearr_32210[(0)] = state_machine__16548__auto__);

(statearr_32210[(1)] = (1));

return statearr_32210;
});
var state_machine__16548__auto____1 = (function (state_32199){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32199);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32211){if((e32211 instanceof Object)){
var ex__16551__auto__ = e32211;
var statearr_32212_32349 = state_32199;
(statearr_32212_32349[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32199);

return cljs.core.constant$keyword$99;
} else {
throw e32211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32350 = state_32199;
state_32199 = G__32350;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32199){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(__32330,switch__16547__auto__,c__16627__auto___32342,G__32159_32331,n__5138__auto___32329,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32213 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32342);

return statearr_32213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(__32330,c__16627__auto___32342,G__32159_32331,n__5138__auto___32329,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32351 = (__32330 + (1));
__32330 = G__32351;
continue;
} else {
}
break;
}

var c__16627__auto___32352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32352,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32352,jobs,results,process,async){
return (function (state_32235){
var state_val_32236 = (state_32235[(1)]);
if((state_val_32236 === (9))){
var inst_32228 = (state_32235[(2)]);
var state_32235__$1 = (function (){var statearr_32237 = state_32235;
(statearr_32237[(7)] = inst_32228);

return statearr_32237;
})();
var statearr_32238_32353 = state_32235__$1;
(statearr_32238_32353[(2)] = null);

(statearr_32238_32353[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32236 === (8))){
var inst_32221 = (state_32235[(8)]);
var inst_32226 = (state_32235[(2)]);
var state_32235__$1 = (function (){var statearr_32239 = state_32235;
(statearr_32239[(9)] = inst_32226);

return statearr_32239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32235__$1,(9),results,inst_32221);
} else {
if((state_val_32236 === (7))){
var inst_32231 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32240_32354 = state_32235__$1;
(statearr_32240_32354[(2)] = inst_32231);

(statearr_32240_32354[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32236 === (6))){
var inst_32216 = (state_32235[(10)]);
var inst_32221 = (state_32235[(8)]);
var inst_32221__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32223 = [inst_32216,inst_32221__$1];
var inst_32224 = (new cljs.core.PersistentVector(null,2,(5),inst_32222,inst_32223,null));
var state_32235__$1 = (function (){var statearr_32241 = state_32235;
(statearr_32241[(8)] = inst_32221__$1);

return statearr_32241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32235__$1,(8),jobs,inst_32224);
} else {
if((state_val_32236 === (5))){
var inst_32219 = cljs.core.async.close_BANG_(jobs);
var state_32235__$1 = state_32235;
var statearr_32242_32355 = state_32235__$1;
(statearr_32242_32355[(2)] = inst_32219);

(statearr_32242_32355[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32236 === (4))){
var inst_32216 = (state_32235[(10)]);
var inst_32216__$1 = (state_32235[(2)]);
var inst_32217 = (inst_32216__$1 == null);
var state_32235__$1 = (function (){var statearr_32243 = state_32235;
(statearr_32243[(10)] = inst_32216__$1);

return statearr_32243;
})();
if(cljs.core.truth_(inst_32217)){
var statearr_32244_32356 = state_32235__$1;
(statearr_32244_32356[(1)] = (5));

} else {
var statearr_32245_32357 = state_32235__$1;
(statearr_32245_32357[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32236 === (3))){
var inst_32233 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32235__$1,inst_32233);
} else {
if((state_val_32236 === (2))){
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32235__$1,(4),from);
} else {
if((state_val_32236 === (1))){
var state_32235__$1 = state_32235;
var statearr_32246_32358 = state_32235__$1;
(statearr_32246_32358[(2)] = null);

(statearr_32246_32358[(1)] = (2));


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
});})(c__16627__auto___32352,jobs,results,process,async))
;
return ((function (switch__16547__auto__,c__16627__auto___32352,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32250[(0)] = state_machine__16548__auto__);

(statearr_32250[(1)] = (1));

return statearr_32250;
});
var state_machine__16548__auto____1 = (function (state_32235){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32235);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32251){if((e32251 instanceof Object)){
var ex__16551__auto__ = e32251;
var statearr_32252_32359 = state_32235;
(statearr_32252_32359[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32235);

return cljs.core.constant$keyword$99;
} else {
throw e32251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32360 = state_32235;
state_32235 = G__32360;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32235){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32352,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32253 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32352);

return statearr_32253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32352,jobs,results,process,async))
);


var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__,jobs,results,process,async){
return (function (state_32291){
var state_val_32292 = (state_32291[(1)]);
if((state_val_32292 === (7))){
var inst_32287 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32293_32361 = state_32291__$1;
(statearr_32293_32361[(2)] = inst_32287);

(statearr_32293_32361[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (20))){
var state_32291__$1 = state_32291;
var statearr_32294_32362 = state_32291__$1;
(statearr_32294_32362[(2)] = null);

(statearr_32294_32362[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (1))){
var state_32291__$1 = state_32291;
var statearr_32295_32363 = state_32291__$1;
(statearr_32295_32363[(2)] = null);

(statearr_32295_32363[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (4))){
var inst_32256 = (state_32291[(7)]);
var inst_32256__$1 = (state_32291[(2)]);
var inst_32257 = (inst_32256__$1 == null);
var state_32291__$1 = (function (){var statearr_32296 = state_32291;
(statearr_32296[(7)] = inst_32256__$1);

return statearr_32296;
})();
if(cljs.core.truth_(inst_32257)){
var statearr_32297_32364 = state_32291__$1;
(statearr_32297_32364[(1)] = (5));

} else {
var statearr_32298_32365 = state_32291__$1;
(statearr_32298_32365[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (15))){
var inst_32269 = (state_32291[(8)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32291__$1,(18),to,inst_32269);
} else {
if((state_val_32292 === (21))){
var inst_32282 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32299_32366 = state_32291__$1;
(statearr_32299_32366[(2)] = inst_32282);

(statearr_32299_32366[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (13))){
var inst_32284 = (state_32291[(2)]);
var state_32291__$1 = (function (){var statearr_32300 = state_32291;
(statearr_32300[(9)] = inst_32284);

return statearr_32300;
})();
var statearr_32301_32367 = state_32291__$1;
(statearr_32301_32367[(2)] = null);

(statearr_32301_32367[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (6))){
var inst_32256 = (state_32291[(7)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32291__$1,(11),inst_32256);
} else {
if((state_val_32292 === (17))){
var inst_32277 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
if(cljs.core.truth_(inst_32277)){
var statearr_32302_32368 = state_32291__$1;
(statearr_32302_32368[(1)] = (19));

} else {
var statearr_32303_32369 = state_32291__$1;
(statearr_32303_32369[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (3))){
var inst_32289 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32291__$1,inst_32289);
} else {
if((state_val_32292 === (12))){
var inst_32266 = (state_32291[(10)]);
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32291__$1,(14),inst_32266);
} else {
if((state_val_32292 === (2))){
var state_32291__$1 = state_32291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32291__$1,(4),results);
} else {
if((state_val_32292 === (19))){
var state_32291__$1 = state_32291;
var statearr_32304_32370 = state_32291__$1;
(statearr_32304_32370[(2)] = null);

(statearr_32304_32370[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (11))){
var inst_32266 = (state_32291[(2)]);
var state_32291__$1 = (function (){var statearr_32305 = state_32291;
(statearr_32305[(10)] = inst_32266);

return statearr_32305;
})();
var statearr_32306_32371 = state_32291__$1;
(statearr_32306_32371[(2)] = null);

(statearr_32306_32371[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (9))){
var state_32291__$1 = state_32291;
var statearr_32307_32372 = state_32291__$1;
(statearr_32307_32372[(2)] = null);

(statearr_32307_32372[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (5))){
var state_32291__$1 = state_32291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32308_32373 = state_32291__$1;
(statearr_32308_32373[(1)] = (8));

} else {
var statearr_32309_32374 = state_32291__$1;
(statearr_32309_32374[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (14))){
var inst_32269 = (state_32291[(8)]);
var inst_32271 = (state_32291[(11)]);
var inst_32269__$1 = (state_32291[(2)]);
var inst_32270 = (inst_32269__$1 == null);
var inst_32271__$1 = cljs.core.not(inst_32270);
var state_32291__$1 = (function (){var statearr_32310 = state_32291;
(statearr_32310[(8)] = inst_32269__$1);

(statearr_32310[(11)] = inst_32271__$1);

return statearr_32310;
})();
if(inst_32271__$1){
var statearr_32311_32375 = state_32291__$1;
(statearr_32311_32375[(1)] = (15));

} else {
var statearr_32312_32376 = state_32291__$1;
(statearr_32312_32376[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (16))){
var inst_32271 = (state_32291[(11)]);
var state_32291__$1 = state_32291;
var statearr_32313_32377 = state_32291__$1;
(statearr_32313_32377[(2)] = inst_32271);

(statearr_32313_32377[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (10))){
var inst_32263 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32314_32378 = state_32291__$1;
(statearr_32314_32378[(2)] = inst_32263);

(statearr_32314_32378[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (18))){
var inst_32274 = (state_32291[(2)]);
var state_32291__$1 = state_32291;
var statearr_32315_32379 = state_32291__$1;
(statearr_32315_32379[(2)] = inst_32274);

(statearr_32315_32379[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32292 === (8))){
var inst_32260 = cljs.core.async.close_BANG_(to);
var state_32291__$1 = state_32291;
var statearr_32316_32380 = state_32291__$1;
(statearr_32316_32380[(2)] = inst_32260);

(statearr_32316_32380[(1)] = (10));


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
});})(c__16627__auto__,jobs,results,process,async))
;
return ((function (switch__16547__auto__,c__16627__auto__,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32320[(0)] = state_machine__16548__auto__);

(statearr_32320[(1)] = (1));

return statearr_32320;
});
var state_machine__16548__auto____1 = (function (state_32291){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32291);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32321){if((e32321 instanceof Object)){
var ex__16551__auto__ = e32321;
var statearr_32322_32381 = state_32291;
(statearr_32322_32381[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32291);

return cljs.core.constant$keyword$99;
} else {
throw e32321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32382 = state_32291;
state_32291 = G__32382;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32291){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32323 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__,jobs,results,process,async))
);

return c__16627__auto__;
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
var c__16627__auto___32505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32505,tc,fc){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32505,tc,fc){
return (function (state_32479){
var state_val_32480 = (state_32479[(1)]);
if((state_val_32480 === (7))){
var inst_32475 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
var statearr_32481_32506 = state_32479__$1;
(statearr_32481_32506[(2)] = inst_32475);

(statearr_32481_32506[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (1))){
var state_32479__$1 = state_32479;
var statearr_32482_32507 = state_32479__$1;
(statearr_32482_32507[(2)] = null);

(statearr_32482_32507[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (4))){
var inst_32456 = (state_32479[(7)]);
var inst_32456__$1 = (state_32479[(2)]);
var inst_32457 = (inst_32456__$1 == null);
var state_32479__$1 = (function (){var statearr_32483 = state_32479;
(statearr_32483[(7)] = inst_32456__$1);

return statearr_32483;
})();
if(cljs.core.truth_(inst_32457)){
var statearr_32484_32508 = state_32479__$1;
(statearr_32484_32508[(1)] = (5));

} else {
var statearr_32485_32509 = state_32479__$1;
(statearr_32485_32509[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (13))){
var state_32479__$1 = state_32479;
var statearr_32486_32510 = state_32479__$1;
(statearr_32486_32510[(2)] = null);

(statearr_32486_32510[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (6))){
var inst_32456 = (state_32479[(7)]);
var inst_32462 = (function (){var G__32487 = inst_32456;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32487) : p.call(null,G__32487));
})();
var state_32479__$1 = state_32479;
if(cljs.core.truth_(inst_32462)){
var statearr_32488_32511 = state_32479__$1;
(statearr_32488_32511[(1)] = (9));

} else {
var statearr_32489_32512 = state_32479__$1;
(statearr_32489_32512[(1)] = (10));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (3))){
var inst_32477 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32479__$1,inst_32477);
} else {
if((state_val_32480 === (12))){
var state_32479__$1 = state_32479;
var statearr_32490_32513 = state_32479__$1;
(statearr_32490_32513[(2)] = null);

(statearr_32490_32513[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (2))){
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32479__$1,(4),ch);
} else {
if((state_val_32480 === (11))){
var inst_32456 = (state_32479[(7)]);
var inst_32466 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32479__$1,(8),inst_32466,inst_32456);
} else {
if((state_val_32480 === (9))){
var state_32479__$1 = state_32479;
var statearr_32491_32514 = state_32479__$1;
(statearr_32491_32514[(2)] = tc);

(statearr_32491_32514[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (5))){
var inst_32459 = cljs.core.async.close_BANG_(tc);
var inst_32460 = cljs.core.async.close_BANG_(fc);
var state_32479__$1 = (function (){var statearr_32492 = state_32479;
(statearr_32492[(8)] = inst_32459);

return statearr_32492;
})();
var statearr_32493_32515 = state_32479__$1;
(statearr_32493_32515[(2)] = inst_32460);

(statearr_32493_32515[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (14))){
var inst_32473 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
var statearr_32494_32516 = state_32479__$1;
(statearr_32494_32516[(2)] = inst_32473);

(statearr_32494_32516[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (10))){
var state_32479__$1 = state_32479;
var statearr_32495_32517 = state_32479__$1;
(statearr_32495_32517[(2)] = fc);

(statearr_32495_32517[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32480 === (8))){
var inst_32468 = (state_32479[(2)]);
var state_32479__$1 = state_32479;
if(cljs.core.truth_(inst_32468)){
var statearr_32496_32518 = state_32479__$1;
(statearr_32496_32518[(1)] = (12));

} else {
var statearr_32497_32519 = state_32479__$1;
(statearr_32497_32519[(1)] = (13));

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
});})(c__16627__auto___32505,tc,fc))
;
return ((function (switch__16547__auto__,c__16627__auto___32505,tc,fc){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32501 = [null,null,null,null,null,null,null,null,null];
(statearr_32501[(0)] = state_machine__16548__auto__);

(statearr_32501[(1)] = (1));

return statearr_32501;
});
var state_machine__16548__auto____1 = (function (state_32479){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32479);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32502){if((e32502 instanceof Object)){
var ex__16551__auto__ = e32502;
var statearr_32503_32520 = state_32479;
(statearr_32503_32520[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32479);

return cljs.core.constant$keyword$99;
} else {
throw e32502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32521 = state_32479;
state_32479 = G__32521;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32479){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32505,tc,fc))
})();
var state__16629__auto__ = (function (){var statearr_32504 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32505);

return statearr_32504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32505,tc,fc))
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
var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__){
return (function (state_32570){
var state_val_32571 = (state_32570[(1)]);
if((state_val_32571 === (7))){
var inst_32566 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
var statearr_32572_32590 = state_32570__$1;
(statearr_32572_32590[(2)] = inst_32566);

(statearr_32572_32590[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32571 === (6))){
var inst_32559 = (state_32570[(7)]);
var inst_32556 = (state_32570[(8)]);
var inst_32563 = (function (){var G__32573 = inst_32556;
var G__32574 = inst_32559;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32573,G__32574) : f.call(null,G__32573,G__32574));
})();
var inst_32556__$1 = inst_32563;
var state_32570__$1 = (function (){var statearr_32575 = state_32570;
(statearr_32575[(8)] = inst_32556__$1);

return statearr_32575;
})();
var statearr_32576_32591 = state_32570__$1;
(statearr_32576_32591[(2)] = null);

(statearr_32576_32591[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32571 === (5))){
var inst_32556 = (state_32570[(8)]);
var state_32570__$1 = state_32570;
var statearr_32577_32592 = state_32570__$1;
(statearr_32577_32592[(2)] = inst_32556);

(statearr_32577_32592[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32571 === (4))){
var inst_32559 = (state_32570[(7)]);
var inst_32559__$1 = (state_32570[(2)]);
var inst_32560 = (inst_32559__$1 == null);
var state_32570__$1 = (function (){var statearr_32578 = state_32570;
(statearr_32578[(7)] = inst_32559__$1);

return statearr_32578;
})();
if(cljs.core.truth_(inst_32560)){
var statearr_32579_32593 = state_32570__$1;
(statearr_32579_32593[(1)] = (5));

} else {
var statearr_32580_32594 = state_32570__$1;
(statearr_32580_32594[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32571 === (3))){
var inst_32568 = (state_32570[(2)]);
var state_32570__$1 = state_32570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32570__$1,inst_32568);
} else {
if((state_val_32571 === (2))){
var state_32570__$1 = state_32570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32570__$1,(4),ch);
} else {
if((state_val_32571 === (1))){
var inst_32556 = init;
var state_32570__$1 = (function (){var statearr_32581 = state_32570;
(statearr_32581[(8)] = inst_32556);

return statearr_32581;
})();
var statearr_32582_32595 = state_32570__$1;
(statearr_32582_32595[(2)] = null);

(statearr_32582_32595[(1)] = (2));


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
});})(c__16627__auto__))
;
return ((function (switch__16547__auto__,c__16627__auto__){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32586 = [null,null,null,null,null,null,null,null,null];
(statearr_32586[(0)] = state_machine__16548__auto__);

(statearr_32586[(1)] = (1));

return statearr_32586;
});
var state_machine__16548__auto____1 = (function (state_32570){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32570);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32587){if((e32587 instanceof Object)){
var ex__16551__auto__ = e32587;
var statearr_32588_32596 = state_32570;
(statearr_32588_32596[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32570);

return cljs.core.constant$keyword$99;
} else {
throw e32587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32597 = state_32570;
state_32570 = G__32597;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32570){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_32589 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__))
);

return c__16627__auto__;
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
var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__){
return (function (state_32674){
var state_val_32675 = (state_32674[(1)]);
if((state_val_32675 === (7))){
var inst_32656 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32676_32699 = state_32674__$1;
(statearr_32676_32699[(2)] = inst_32656);

(statearr_32676_32699[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (1))){
var inst_32650 = cljs.core.seq(coll);
var inst_32651 = inst_32650;
var state_32674__$1 = (function (){var statearr_32677 = state_32674;
(statearr_32677[(7)] = inst_32651);

return statearr_32677;
})();
var statearr_32678_32700 = state_32674__$1;
(statearr_32678_32700[(2)] = null);

(statearr_32678_32700[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (4))){
var inst_32651 = (state_32674[(7)]);
var inst_32654 = cljs.core.first(inst_32651);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32674__$1,(7),ch,inst_32654);
} else {
if((state_val_32675 === (13))){
var inst_32668 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32679_32701 = state_32674__$1;
(statearr_32679_32701[(2)] = inst_32668);

(statearr_32679_32701[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (6))){
var inst_32659 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
if(cljs.core.truth_(inst_32659)){
var statearr_32680_32702 = state_32674__$1;
(statearr_32680_32702[(1)] = (8));

} else {
var statearr_32681_32703 = state_32674__$1;
(statearr_32681_32703[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (3))){
var inst_32672 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32674__$1,inst_32672);
} else {
if((state_val_32675 === (12))){
var state_32674__$1 = state_32674;
var statearr_32682_32704 = state_32674__$1;
(statearr_32682_32704[(2)] = null);

(statearr_32682_32704[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (2))){
var inst_32651 = (state_32674[(7)]);
var state_32674__$1 = state_32674;
if(cljs.core.truth_(inst_32651)){
var statearr_32683_32705 = state_32674__$1;
(statearr_32683_32705[(1)] = (4));

} else {
var statearr_32684_32706 = state_32674__$1;
(statearr_32684_32706[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (11))){
var inst_32665 = cljs.core.async.close_BANG_(ch);
var state_32674__$1 = state_32674;
var statearr_32685_32707 = state_32674__$1;
(statearr_32685_32707[(2)] = inst_32665);

(statearr_32685_32707[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (9))){
var state_32674__$1 = state_32674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32686_32708 = state_32674__$1;
(statearr_32686_32708[(1)] = (11));

} else {
var statearr_32687_32709 = state_32674__$1;
(statearr_32687_32709[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (5))){
var inst_32651 = (state_32674[(7)]);
var state_32674__$1 = state_32674;
var statearr_32688_32710 = state_32674__$1;
(statearr_32688_32710[(2)] = inst_32651);

(statearr_32688_32710[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (10))){
var inst_32670 = (state_32674[(2)]);
var state_32674__$1 = state_32674;
var statearr_32689_32711 = state_32674__$1;
(statearr_32689_32711[(2)] = inst_32670);

(statearr_32689_32711[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32675 === (8))){
var inst_32651 = (state_32674[(7)]);
var inst_32661 = cljs.core.next(inst_32651);
var inst_32651__$1 = inst_32661;
var state_32674__$1 = (function (){var statearr_32690 = state_32674;
(statearr_32690[(7)] = inst_32651__$1);

return statearr_32690;
})();
var statearr_32691_32712 = state_32674__$1;
(statearr_32691_32712[(2)] = null);

(statearr_32691_32712[(1)] = (2));


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
});})(c__16627__auto__))
;
return ((function (switch__16547__auto__,c__16627__auto__){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32695 = [null,null,null,null,null,null,null,null];
(statearr_32695[(0)] = state_machine__16548__auto__);

(statearr_32695[(1)] = (1));

return statearr_32695;
});
var state_machine__16548__auto____1 = (function (state_32674){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32674);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32696){if((e32696 instanceof Object)){
var ex__16551__auto__ = e32696;
var statearr_32697_32713 = state_32674;
(statearr_32697_32713[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32674);

return cljs.core.constant$keyword$99;
} else {
throw e32696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32714 = state_32674;
state_32674 = G__32714;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32674){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_32698 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__))
);

return c__16627__auto__;
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

cljs.core.async.Mux = (function (){var obj32716 = {};
return obj32716;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__4239__auto__ = _;
if(and__4239__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4895__auto__ = (((_ == null))?null:_);
return (function (){var or__4251__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32720 = x__4895__auto__;
return goog.typeOf(G__32720);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32722 = {};
return obj32722;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32726 = x__4895__auto__;
return goog.typeOf(G__32726);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32730 = x__4895__auto__;
return goog.typeOf(G__32730);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32734 = x__4895__auto__;
return goog.typeOf(G__32734);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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
var cs = (function (){var G__32964 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32964) : cljs.core.atom.call(null,G__32964));
})();
var m = (function (){
if(typeof cljs.core.async.t32965 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32965 = (function (cs,ch,mult,meta32966){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32966 = meta32966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32965.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32965.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32965.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32965.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32968_33193 = self__.cs;
var G__32969_33194 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32968_33193,G__32969_33194) : cljs.core.reset_BANG_.call(null,G__32968_33193,G__32969_33194));

return null;
});})(cs))
;

cljs.core.async.t32965.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32967){
var self__ = this;
var _32967__$1 = this;
return self__.meta32966;
});})(cs))
;

cljs.core.async.t32965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32967,meta32966__$1){
var self__ = this;
var _32967__$1 = this;
return (new cljs.core.async.t32965(self__.cs,self__.ch,self__.mult,meta32966__$1));
});})(cs))
;

cljs.core.async.t32965.cljs$lang$type = true;

cljs.core.async.t32965.cljs$lang$ctorStr = "cljs.core.async/t32965";

cljs.core.async.t32965.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t32965");
});})(cs))
;

cljs.core.async.__GT_t32965 = ((function (cs){
return (function __GT_t32965(cs__$1,ch__$1,mult__$1,meta32966){
return (new cljs.core.async.t32965(cs__$1,ch__$1,mult__$1,meta32966));
});})(cs))
;

}

return (new cljs.core.async.t32965(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__32970 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32970) : cljs.core.atom.call(null,G__32970));
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
var c__16627__auto___33195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33195,cs,m,dchan,dctr,done){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33195,cs,m,dchan,dctr,done){
return (function (state_33101){
var state_val_33102 = (state_33101[(1)]);
if((state_val_33102 === (7))){
var inst_33097 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33103_33196 = state_33101__$1;
(statearr_33103_33196[(2)] = inst_33097);

(statearr_33103_33196[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (20))){
var inst_33002 = (state_33101[(7)]);
var inst_33012 = cljs.core.first(inst_33002);
var inst_33013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33012,(0),null);
var inst_33014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33012,(1),null);
var state_33101__$1 = (function (){var statearr_33104 = state_33101;
(statearr_33104[(8)] = inst_33013);

return statearr_33104;
})();
if(cljs.core.truth_(inst_33014)){
var statearr_33105_33197 = state_33101__$1;
(statearr_33105_33197[(1)] = (22));

} else {
var statearr_33106_33198 = state_33101__$1;
(statearr_33106_33198[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (27))){
var inst_33042 = (state_33101[(9)]);
var inst_32973 = (state_33101[(10)]);
var inst_33049 = (state_33101[(11)]);
var inst_33044 = (state_33101[(12)]);
var inst_33049__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33042,inst_33044);
var inst_33050 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33049__$1,inst_32973,done);
var state_33101__$1 = (function (){var statearr_33107 = state_33101;
(statearr_33107[(11)] = inst_33049__$1);

return statearr_33107;
})();
if(cljs.core.truth_(inst_33050)){
var statearr_33108_33199 = state_33101__$1;
(statearr_33108_33199[(1)] = (30));

} else {
var statearr_33109_33200 = state_33101__$1;
(statearr_33109_33200[(1)] = (31));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (1))){
var state_33101__$1 = state_33101;
var statearr_33110_33201 = state_33101__$1;
(statearr_33110_33201[(2)] = null);

(statearr_33110_33201[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (24))){
var inst_33002 = (state_33101[(7)]);
var inst_33019 = (state_33101[(2)]);
var inst_33020 = cljs.core.next(inst_33002);
var inst_32982 = inst_33020;
var inst_32983 = null;
var inst_32984 = (0);
var inst_32985 = (0);
var state_33101__$1 = (function (){var statearr_33111 = state_33101;
(statearr_33111[(13)] = inst_32982);

(statearr_33111[(14)] = inst_33019);

(statearr_33111[(15)] = inst_32984);

(statearr_33111[(16)] = inst_32985);

(statearr_33111[(17)] = inst_32983);

return statearr_33111;
})();
var statearr_33112_33202 = state_33101__$1;
(statearr_33112_33202[(2)] = null);

(statearr_33112_33202[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (39))){
var state_33101__$1 = state_33101;
var statearr_33116_33203 = state_33101__$1;
(statearr_33116_33203[(2)] = null);

(statearr_33116_33203[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (4))){
var inst_32973 = (state_33101[(10)]);
var inst_32973__$1 = (state_33101[(2)]);
var inst_32974 = (inst_32973__$1 == null);
var state_33101__$1 = (function (){var statearr_33117 = state_33101;
(statearr_33117[(10)] = inst_32973__$1);

return statearr_33117;
})();
if(cljs.core.truth_(inst_32974)){
var statearr_33118_33204 = state_33101__$1;
(statearr_33118_33204[(1)] = (5));

} else {
var statearr_33119_33205 = state_33101__$1;
(statearr_33119_33205[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (15))){
var inst_32982 = (state_33101[(13)]);
var inst_32984 = (state_33101[(15)]);
var inst_32985 = (state_33101[(16)]);
var inst_32983 = (state_33101[(17)]);
var inst_32998 = (state_33101[(2)]);
var inst_32999 = (inst_32985 + (1));
var tmp33113 = inst_32982;
var tmp33114 = inst_32984;
var tmp33115 = inst_32983;
var inst_32982__$1 = tmp33113;
var inst_32983__$1 = tmp33115;
var inst_32984__$1 = tmp33114;
var inst_32985__$1 = inst_32999;
var state_33101__$1 = (function (){var statearr_33120 = state_33101;
(statearr_33120[(13)] = inst_32982__$1);

(statearr_33120[(15)] = inst_32984__$1);

(statearr_33120[(16)] = inst_32985__$1);

(statearr_33120[(18)] = inst_32998);

(statearr_33120[(17)] = inst_32983__$1);

return statearr_33120;
})();
var statearr_33121_33206 = state_33101__$1;
(statearr_33121_33206[(2)] = null);

(statearr_33121_33206[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (21))){
var inst_33023 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33125_33207 = state_33101__$1;
(statearr_33125_33207[(2)] = inst_33023);

(statearr_33125_33207[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (31))){
var inst_33049 = (state_33101[(11)]);
var inst_33053 = done(null);
var inst_33054 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33049);
var state_33101__$1 = (function (){var statearr_33126 = state_33101;
(statearr_33126[(19)] = inst_33053);

return statearr_33126;
})();
var statearr_33127_33208 = state_33101__$1;
(statearr_33127_33208[(2)] = inst_33054);

(statearr_33127_33208[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (32))){
var inst_33042 = (state_33101[(9)]);
var inst_33041 = (state_33101[(20)]);
var inst_33044 = (state_33101[(12)]);
var inst_33043 = (state_33101[(21)]);
var inst_33056 = (state_33101[(2)]);
var inst_33057 = (inst_33044 + (1));
var tmp33122 = inst_33042;
var tmp33123 = inst_33041;
var tmp33124 = inst_33043;
var inst_33041__$1 = tmp33123;
var inst_33042__$1 = tmp33122;
var inst_33043__$1 = tmp33124;
var inst_33044__$1 = inst_33057;
var state_33101__$1 = (function (){var statearr_33128 = state_33101;
(statearr_33128[(9)] = inst_33042__$1);

(statearr_33128[(20)] = inst_33041__$1);

(statearr_33128[(22)] = inst_33056);

(statearr_33128[(12)] = inst_33044__$1);

(statearr_33128[(21)] = inst_33043__$1);

return statearr_33128;
})();
var statearr_33129_33209 = state_33101__$1;
(statearr_33129_33209[(2)] = null);

(statearr_33129_33209[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (40))){
var inst_33069 = (state_33101[(23)]);
var inst_33073 = done(null);
var inst_33074 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33069);
var state_33101__$1 = (function (){var statearr_33130 = state_33101;
(statearr_33130[(24)] = inst_33073);

return statearr_33130;
})();
var statearr_33131_33210 = state_33101__$1;
(statearr_33131_33210[(2)] = inst_33074);

(statearr_33131_33210[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (33))){
var inst_33060 = (state_33101[(25)]);
var inst_33062 = cljs.core.chunked_seq_QMARK_(inst_33060);
var state_33101__$1 = state_33101;
if(inst_33062){
var statearr_33132_33211 = state_33101__$1;
(statearr_33132_33211[(1)] = (36));

} else {
var statearr_33133_33212 = state_33101__$1;
(statearr_33133_33212[(1)] = (37));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (13))){
var inst_32992 = (state_33101[(26)]);
var inst_32995 = cljs.core.async.close_BANG_(inst_32992);
var state_33101__$1 = state_33101;
var statearr_33134_33213 = state_33101__$1;
(statearr_33134_33213[(2)] = inst_32995);

(statearr_33134_33213[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (22))){
var inst_33013 = (state_33101[(8)]);
var inst_33016 = cljs.core.async.close_BANG_(inst_33013);
var state_33101__$1 = state_33101;
var statearr_33135_33214 = state_33101__$1;
(statearr_33135_33214[(2)] = inst_33016);

(statearr_33135_33214[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (36))){
var inst_33060 = (state_33101[(25)]);
var inst_33064 = cljs.core.chunk_first(inst_33060);
var inst_33065 = cljs.core.chunk_rest(inst_33060);
var inst_33066 = cljs.core.count(inst_33064);
var inst_33041 = inst_33065;
var inst_33042 = inst_33064;
var inst_33043 = inst_33066;
var inst_33044 = (0);
var state_33101__$1 = (function (){var statearr_33136 = state_33101;
(statearr_33136[(9)] = inst_33042);

(statearr_33136[(20)] = inst_33041);

(statearr_33136[(12)] = inst_33044);

(statearr_33136[(21)] = inst_33043);

return statearr_33136;
})();
var statearr_33137_33215 = state_33101__$1;
(statearr_33137_33215[(2)] = null);

(statearr_33137_33215[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (41))){
var inst_33060 = (state_33101[(25)]);
var inst_33076 = (state_33101[(2)]);
var inst_33077 = cljs.core.next(inst_33060);
var inst_33041 = inst_33077;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33101__$1 = (function (){var statearr_33138 = state_33101;
(statearr_33138[(9)] = inst_33042);

(statearr_33138[(20)] = inst_33041);

(statearr_33138[(27)] = inst_33076);

(statearr_33138[(12)] = inst_33044);

(statearr_33138[(21)] = inst_33043);

return statearr_33138;
})();
var statearr_33139_33216 = state_33101__$1;
(statearr_33139_33216[(2)] = null);

(statearr_33139_33216[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (43))){
var state_33101__$1 = state_33101;
var statearr_33140_33217 = state_33101__$1;
(statearr_33140_33217[(2)] = null);

(statearr_33140_33217[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (29))){
var inst_33085 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33141_33218 = state_33101__$1;
(statearr_33141_33218[(2)] = inst_33085);

(statearr_33141_33218[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (44))){
var inst_33094 = (state_33101[(2)]);
var state_33101__$1 = (function (){var statearr_33142 = state_33101;
(statearr_33142[(28)] = inst_33094);

return statearr_33142;
})();
var statearr_33143_33219 = state_33101__$1;
(statearr_33143_33219[(2)] = null);

(statearr_33143_33219[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (6))){
var inst_33033 = (state_33101[(29)]);
var inst_33032 = (function (){var G__33144 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33144) : cljs.core.deref.call(null,G__33144));
})();
var inst_33033__$1 = cljs.core.keys(inst_33032);
var inst_33034 = cljs.core.count(inst_33033__$1);
var inst_33035 = (function (){var G__33145 = dctr;
var G__33146 = inst_33034;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33145,G__33146) : cljs.core.reset_BANG_.call(null,G__33145,G__33146));
})();
var inst_33040 = cljs.core.seq(inst_33033__$1);
var inst_33041 = inst_33040;
var inst_33042 = null;
var inst_33043 = (0);
var inst_33044 = (0);
var state_33101__$1 = (function (){var statearr_33147 = state_33101;
(statearr_33147[(9)] = inst_33042);

(statearr_33147[(30)] = inst_33035);

(statearr_33147[(29)] = inst_33033__$1);

(statearr_33147[(20)] = inst_33041);

(statearr_33147[(12)] = inst_33044);

(statearr_33147[(21)] = inst_33043);

return statearr_33147;
})();
var statearr_33148_33220 = state_33101__$1;
(statearr_33148_33220[(2)] = null);

(statearr_33148_33220[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (28))){
var inst_33041 = (state_33101[(20)]);
var inst_33060 = (state_33101[(25)]);
var inst_33060__$1 = cljs.core.seq(inst_33041);
var state_33101__$1 = (function (){var statearr_33149 = state_33101;
(statearr_33149[(25)] = inst_33060__$1);

return statearr_33149;
})();
if(inst_33060__$1){
var statearr_33150_33221 = state_33101__$1;
(statearr_33150_33221[(1)] = (33));

} else {
var statearr_33151_33222 = state_33101__$1;
(statearr_33151_33222[(1)] = (34));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (25))){
var inst_33044 = (state_33101[(12)]);
var inst_33043 = (state_33101[(21)]);
var inst_33046 = (inst_33044 < inst_33043);
var inst_33047 = inst_33046;
var state_33101__$1 = state_33101;
if(cljs.core.truth_(inst_33047)){
var statearr_33152_33223 = state_33101__$1;
(statearr_33152_33223[(1)] = (27));

} else {
var statearr_33153_33224 = state_33101__$1;
(statearr_33153_33224[(1)] = (28));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (34))){
var state_33101__$1 = state_33101;
var statearr_33154_33225 = state_33101__$1;
(statearr_33154_33225[(2)] = null);

(statearr_33154_33225[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (17))){
var state_33101__$1 = state_33101;
var statearr_33155_33226 = state_33101__$1;
(statearr_33155_33226[(2)] = null);

(statearr_33155_33226[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (3))){
var inst_33099 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33101__$1,inst_33099);
} else {
if((state_val_33102 === (12))){
var inst_33028 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33156_33227 = state_33101__$1;
(statearr_33156_33227[(2)] = inst_33028);

(statearr_33156_33227[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (2))){
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33101__$1,(4),ch);
} else {
if((state_val_33102 === (23))){
var state_33101__$1 = state_33101;
var statearr_33157_33228 = state_33101__$1;
(statearr_33157_33228[(2)] = null);

(statearr_33157_33228[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (35))){
var inst_33083 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33158_33229 = state_33101__$1;
(statearr_33158_33229[(2)] = inst_33083);

(statearr_33158_33229[(1)] = (29));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (19))){
var inst_33002 = (state_33101[(7)]);
var inst_33006 = cljs.core.chunk_first(inst_33002);
var inst_33007 = cljs.core.chunk_rest(inst_33002);
var inst_33008 = cljs.core.count(inst_33006);
var inst_32982 = inst_33007;
var inst_32983 = inst_33006;
var inst_32984 = inst_33008;
var inst_32985 = (0);
var state_33101__$1 = (function (){var statearr_33159 = state_33101;
(statearr_33159[(13)] = inst_32982);

(statearr_33159[(15)] = inst_32984);

(statearr_33159[(16)] = inst_32985);

(statearr_33159[(17)] = inst_32983);

return statearr_33159;
})();
var statearr_33160_33230 = state_33101__$1;
(statearr_33160_33230[(2)] = null);

(statearr_33160_33230[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (11))){
var inst_32982 = (state_33101[(13)]);
var inst_33002 = (state_33101[(7)]);
var inst_33002__$1 = cljs.core.seq(inst_32982);
var state_33101__$1 = (function (){var statearr_33161 = state_33101;
(statearr_33161[(7)] = inst_33002__$1);

return statearr_33161;
})();
if(inst_33002__$1){
var statearr_33162_33231 = state_33101__$1;
(statearr_33162_33231[(1)] = (16));

} else {
var statearr_33163_33232 = state_33101__$1;
(statearr_33163_33232[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (9))){
var inst_33030 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33164_33233 = state_33101__$1;
(statearr_33164_33233[(2)] = inst_33030);

(statearr_33164_33233[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (5))){
var inst_32980 = (function (){var G__33165 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33165) : cljs.core.deref.call(null,G__33165));
})();
var inst_32981 = cljs.core.seq(inst_32980);
var inst_32982 = inst_32981;
var inst_32983 = null;
var inst_32984 = (0);
var inst_32985 = (0);
var state_33101__$1 = (function (){var statearr_33166 = state_33101;
(statearr_33166[(13)] = inst_32982);

(statearr_33166[(15)] = inst_32984);

(statearr_33166[(16)] = inst_32985);

(statearr_33166[(17)] = inst_32983);

return statearr_33166;
})();
var statearr_33167_33234 = state_33101__$1;
(statearr_33167_33234[(2)] = null);

(statearr_33167_33234[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (14))){
var state_33101__$1 = state_33101;
var statearr_33168_33235 = state_33101__$1;
(statearr_33168_33235[(2)] = null);

(statearr_33168_33235[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (45))){
var inst_33091 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33169_33236 = state_33101__$1;
(statearr_33169_33236[(2)] = inst_33091);

(statearr_33169_33236[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (26))){
var inst_33033 = (state_33101[(29)]);
var inst_33087 = (state_33101[(2)]);
var inst_33088 = cljs.core.seq(inst_33033);
var state_33101__$1 = (function (){var statearr_33170 = state_33101;
(statearr_33170[(31)] = inst_33087);

return statearr_33170;
})();
if(inst_33088){
var statearr_33171_33237 = state_33101__$1;
(statearr_33171_33237[(1)] = (42));

} else {
var statearr_33172_33238 = state_33101__$1;
(statearr_33172_33238[(1)] = (43));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (16))){
var inst_33002 = (state_33101[(7)]);
var inst_33004 = cljs.core.chunked_seq_QMARK_(inst_33002);
var state_33101__$1 = state_33101;
if(inst_33004){
var statearr_33173_33239 = state_33101__$1;
(statearr_33173_33239[(1)] = (19));

} else {
var statearr_33174_33240 = state_33101__$1;
(statearr_33174_33240[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (38))){
var inst_33080 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33175_33241 = state_33101__$1;
(statearr_33175_33241[(2)] = inst_33080);

(statearr_33175_33241[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (30))){
var state_33101__$1 = state_33101;
var statearr_33176_33242 = state_33101__$1;
(statearr_33176_33242[(2)] = null);

(statearr_33176_33242[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (10))){
var inst_32985 = (state_33101[(16)]);
var inst_32983 = (state_33101[(17)]);
var inst_32991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32983,inst_32985);
var inst_32992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32991,(0),null);
var inst_32993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32991,(1),null);
var state_33101__$1 = (function (){var statearr_33177 = state_33101;
(statearr_33177[(26)] = inst_32992);

return statearr_33177;
})();
if(cljs.core.truth_(inst_32993)){
var statearr_33178_33243 = state_33101__$1;
(statearr_33178_33243[(1)] = (13));

} else {
var statearr_33179_33244 = state_33101__$1;
(statearr_33179_33244[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (18))){
var inst_33026 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33180_33245 = state_33101__$1;
(statearr_33180_33245[(2)] = inst_33026);

(statearr_33180_33245[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (42))){
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33101__$1,(45),dchan);
} else {
if((state_val_33102 === (37))){
var inst_32973 = (state_33101[(10)]);
var inst_33060 = (state_33101[(25)]);
var inst_33069 = (state_33101[(23)]);
var inst_33069__$1 = cljs.core.first(inst_33060);
var inst_33070 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33069__$1,inst_32973,done);
var state_33101__$1 = (function (){var statearr_33181 = state_33101;
(statearr_33181[(23)] = inst_33069__$1);

return statearr_33181;
})();
if(cljs.core.truth_(inst_33070)){
var statearr_33182_33246 = state_33101__$1;
(statearr_33182_33246[(1)] = (39));

} else {
var statearr_33183_33247 = state_33101__$1;
(statearr_33183_33247[(1)] = (40));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33102 === (8))){
var inst_32984 = (state_33101[(15)]);
var inst_32985 = (state_33101[(16)]);
var inst_32987 = (inst_32985 < inst_32984);
var inst_32988 = inst_32987;
var state_33101__$1 = state_33101;
if(cljs.core.truth_(inst_32988)){
var statearr_33184_33248 = state_33101__$1;
(statearr_33184_33248[(1)] = (10));

} else {
var statearr_33185_33249 = state_33101__$1;
(statearr_33185_33249[(1)] = (11));

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
});})(c__16627__auto___33195,cs,m,dchan,dctr,done))
;
return ((function (switch__16547__auto__,c__16627__auto___33195,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33189[(0)] = state_machine__16548__auto__);

(statearr_33189[(1)] = (1));

return statearr_33189;
});
var state_machine__16548__auto____1 = (function (state_33101){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33101);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33190){if((e33190 instanceof Object)){
var ex__16551__auto__ = e33190;
var statearr_33191_33250 = state_33101;
(statearr_33191_33250[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33101);

return cljs.core.constant$keyword$99;
} else {
throw e33190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33251 = state_33101;
state_33101 = G__33251;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33101){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33195,cs,m,dchan,dctr,done))
})();
var state__16629__auto__ = (function (){var statearr_33192 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33195);

return statearr_33192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33195,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj33256 = {};
return obj33256;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__33260 = x__4895__auto__;
return goog.typeOf(G__33260);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__33264 = x__4895__auto__;
return goog.typeOf(G__33264);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__33268 = x__4895__auto__;
return goog.typeOf(G__33268);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__33272 = x__4895__auto__;
return goog.typeOf(G__33272);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__4239__auto__ = m;
if(and__4239__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4895__auto__ = (((m == null))?null:m);
return (function (){var or__4251__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__33276 = x__4895__auto__;
return goog.typeOf(G__33276);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33277){
var map__33283 = p__33277;
var map__33283__$1 = ((cljs.core.seq_QMARK_(map__33283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33283):map__33283);
var opts = map__33283__$1;
var statearr_33284_33288 = state;
(statearr_33284_33288[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__33283,map__33283__$1,opts){
return (function (val){
var statearr_33285_33289 = state;
(statearr_33285_33289[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33283,map__33283__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33286_33290 = state;
(statearr_33286_33290[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__33287 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33287) : cljs.core.deref.call(null,G__33287));
})());


return cljs.core.constant$keyword$99;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33277 = null;
if (arguments.length > 3) {
var G__33291__i = 0, G__33291__a = new Array(arguments.length -  3);
while (G__33291__i < G__33291__a.length) {G__33291__a[G__33291__i] = arguments[G__33291__i + 3]; ++G__33291__i;}
  p__33277 = new cljs.core.IndexedSeq(G__33291__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33277);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33292){
var state = cljs.core.first(arglist__33292);
arglist__33292 = cljs.core.next(arglist__33292);
var cont_block = cljs.core.first(arglist__33292);
arglist__33292 = cljs.core.next(arglist__33292);
var ports = cljs.core.first(arglist__33292);
var p__33277 = cljs.core.rest(arglist__33292);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33277);
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
var cs = (function (){var G__33426 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33426) : cljs.core.atom.call(null,G__33426));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$110);
var solo_mode = (function (){var G__33427 = cljs.core.constant$keyword$109;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33427) : cljs.core.atom.call(null,G__33427));
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
if(cljs.core.truth_((function (){var G__33428 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__33428) : attr.call(null,G__33428));
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
var chs = (function (){var G__33429 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33429) : cljs.core.deref.call(null,G__33429));
})();
var mode = (function (){var G__33430 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33430) : cljs.core.deref.call(null,G__33430));
})();
var solos = pick(cljs.core.constant$keyword$110,chs);
var pauses = pick(cljs.core.constant$keyword$108,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$111,solos,cljs.core.constant$keyword$112,pick(cljs.core.constant$keyword$109,chs),cljs.core.constant$keyword$113,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$108)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t33431 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33431 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33432){
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
this.meta33432 = meta33432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33431.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33434_33559 = self__.cs;
var G__33435_33560 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33434_33559,G__33435_33560) : cljs.core.reset_BANG_.call(null,G__33434_33559,G__33435_33560));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33436 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__33436) : self__.solo_modes.call(null,G__33436));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__33437_33561 = self__.solo_mode;
var G__33438_33562 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33437_33561,G__33438_33562) : cljs.core.reset_BANG_.call(null,G__33437_33561,G__33438_33562));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33433){
var self__ = this;
var _33433__$1 = this;
return self__.meta33432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33433,meta33432__$1){
var self__ = this;
var _33433__$1 = this;
return (new cljs.core.async.t33431(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33431.cljs$lang$type = true;

cljs.core.async.t33431.cljs$lang$ctorStr = "cljs.core.async/t33431";

cljs.core.async.t33431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t33431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33431(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33432){
return (new cljs.core.async.t33431(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33431(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16627__auto___33563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33510){
var state_val_33511 = (state_33510[(1)]);
if((state_val_33511 === (7))){
var inst_33452 = (state_33510[(7)]);
var inst_33457 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33452);
var state_33510__$1 = state_33510;
var statearr_33512_33564 = state_33510__$1;
(statearr_33512_33564[(2)] = inst_33457);

(statearr_33512_33564[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (20))){
var inst_33467 = (state_33510[(8)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33510__$1,(23),out,inst_33467);
} else {
if((state_val_33511 === (1))){
var inst_33442 = (state_33510[(9)]);
var inst_33442__$1 = calc_state();
var inst_33443 = cljs.core.seq_QMARK_(inst_33442__$1);
var state_33510__$1 = (function (){var statearr_33513 = state_33510;
(statearr_33513[(9)] = inst_33442__$1);

return statearr_33513;
})();
if(inst_33443){
var statearr_33514_33565 = state_33510__$1;
(statearr_33514_33565[(1)] = (2));

} else {
var statearr_33515_33566 = state_33510__$1;
(statearr_33515_33566[(1)] = (3));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (24))){
var inst_33460 = (state_33510[(10)]);
var inst_33452 = inst_33460;
var state_33510__$1 = (function (){var statearr_33516 = state_33510;
(statearr_33516[(7)] = inst_33452);

return statearr_33516;
})();
var statearr_33517_33567 = state_33510__$1;
(statearr_33517_33567[(2)] = null);

(statearr_33517_33567[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (4))){
var inst_33442 = (state_33510[(9)]);
var inst_33448 = (state_33510[(2)]);
var inst_33449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33448,cljs.core.constant$keyword$113);
var inst_33450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33448,cljs.core.constant$keyword$112);
var inst_33451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33448,cljs.core.constant$keyword$111);
var inst_33452 = inst_33442;
var state_33510__$1 = (function (){var statearr_33518 = state_33510;
(statearr_33518[(11)] = inst_33451);

(statearr_33518[(12)] = inst_33449);

(statearr_33518[(13)] = inst_33450);

(statearr_33518[(7)] = inst_33452);

return statearr_33518;
})();
var statearr_33519_33568 = state_33510__$1;
(statearr_33519_33568[(2)] = null);

(statearr_33519_33568[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (15))){
var state_33510__$1 = state_33510;
var statearr_33520_33569 = state_33510__$1;
(statearr_33520_33569[(2)] = null);

(statearr_33520_33569[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (21))){
var inst_33460 = (state_33510[(10)]);
var inst_33452 = inst_33460;
var state_33510__$1 = (function (){var statearr_33521 = state_33510;
(statearr_33521[(7)] = inst_33452);

return statearr_33521;
})();
var statearr_33522_33570 = state_33510__$1;
(statearr_33522_33570[(2)] = null);

(statearr_33522_33570[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (13))){
var inst_33506 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33523_33571 = state_33510__$1;
(statearr_33523_33571[(2)] = inst_33506);

(statearr_33523_33571[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (22))){
var inst_33504 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33524_33572 = state_33510__$1;
(statearr_33524_33572[(2)] = inst_33504);

(statearr_33524_33572[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (6))){
var inst_33508 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33510__$1,inst_33508);
} else {
if((state_val_33511 === (25))){
var state_33510__$1 = state_33510;
var statearr_33525_33573 = state_33510__$1;
(statearr_33525_33573[(2)] = null);

(statearr_33525_33573[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (17))){
var inst_33483 = (state_33510[(14)]);
var state_33510__$1 = state_33510;
var statearr_33526_33574 = state_33510__$1;
(statearr_33526_33574[(2)] = inst_33483);

(statearr_33526_33574[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (3))){
var inst_33442 = (state_33510[(9)]);
var state_33510__$1 = state_33510;
var statearr_33527_33575 = state_33510__$1;
(statearr_33527_33575[(2)] = inst_33442);

(statearr_33527_33575[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (12))){
var inst_33468 = (state_33510[(15)]);
var inst_33463 = (state_33510[(16)]);
var inst_33483 = (state_33510[(14)]);
var inst_33483__$1 = (function (){var G__33528 = inst_33468;
return (inst_33463.cljs$core$IFn$_invoke$arity$1 ? inst_33463.cljs$core$IFn$_invoke$arity$1(G__33528) : inst_33463.call(null,G__33528));
})();
var state_33510__$1 = (function (){var statearr_33529 = state_33510;
(statearr_33529[(14)] = inst_33483__$1);

return statearr_33529;
})();
if(cljs.core.truth_(inst_33483__$1)){
var statearr_33530_33576 = state_33510__$1;
(statearr_33530_33576[(1)] = (17));

} else {
var statearr_33531_33577 = state_33510__$1;
(statearr_33531_33577[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (2))){
var inst_33442 = (state_33510[(9)]);
var inst_33445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33442);
var state_33510__$1 = state_33510;
var statearr_33532_33578 = state_33510__$1;
(statearr_33532_33578[(2)] = inst_33445);

(statearr_33532_33578[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (23))){
var inst_33495 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33495)){
var statearr_33533_33579 = state_33510__$1;
(statearr_33533_33579[(1)] = (24));

} else {
var statearr_33534_33580 = state_33510__$1;
(statearr_33534_33580[(1)] = (25));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (19))){
var inst_33492 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33492)){
var statearr_33535_33581 = state_33510__$1;
(statearr_33535_33581[(1)] = (20));

} else {
var statearr_33536_33582 = state_33510__$1;
(statearr_33536_33582[(1)] = (21));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (11))){
var inst_33467 = (state_33510[(8)]);
var inst_33473 = (inst_33467 == null);
var state_33510__$1 = state_33510;
if(cljs.core.truth_(inst_33473)){
var statearr_33537_33583 = state_33510__$1;
(statearr_33537_33583[(1)] = (14));

} else {
var statearr_33538_33584 = state_33510__$1;
(statearr_33538_33584[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (9))){
var inst_33460 = (state_33510[(10)]);
var inst_33460__$1 = (state_33510[(2)]);
var inst_33461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,cljs.core.constant$keyword$113);
var inst_33462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,cljs.core.constant$keyword$112);
var inst_33463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,cljs.core.constant$keyword$111);
var state_33510__$1 = (function (){var statearr_33539 = state_33510;
(statearr_33539[(16)] = inst_33463);

(statearr_33539[(10)] = inst_33460__$1);

(statearr_33539[(17)] = inst_33462);

return statearr_33539;
})();
return cljs.core.async.ioc_alts_BANG_(state_33510__$1,(10),inst_33461);
} else {
if((state_val_33511 === (5))){
var inst_33452 = (state_33510[(7)]);
var inst_33455 = cljs.core.seq_QMARK_(inst_33452);
var state_33510__$1 = state_33510;
if(inst_33455){
var statearr_33540_33585 = state_33510__$1;
(statearr_33540_33585[(1)] = (7));

} else {
var statearr_33541_33586 = state_33510__$1;
(statearr_33541_33586[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (14))){
var inst_33468 = (state_33510[(15)]);
var inst_33475 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33468);
var state_33510__$1 = state_33510;
var statearr_33542_33587 = state_33510__$1;
(statearr_33542_33587[(2)] = inst_33475);

(statearr_33542_33587[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (26))){
var inst_33500 = (state_33510[(2)]);
var state_33510__$1 = state_33510;
var statearr_33543_33588 = state_33510__$1;
(statearr_33543_33588[(2)] = inst_33500);

(statearr_33543_33588[(1)] = (22));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (16))){
var inst_33478 = (state_33510[(2)]);
var inst_33479 = calc_state();
var inst_33452 = inst_33479;
var state_33510__$1 = (function (){var statearr_33544 = state_33510;
(statearr_33544[(18)] = inst_33478);

(statearr_33544[(7)] = inst_33452);

return statearr_33544;
})();
var statearr_33545_33589 = state_33510__$1;
(statearr_33545_33589[(2)] = null);

(statearr_33545_33589[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (10))){
var inst_33468 = (state_33510[(15)]);
var inst_33467 = (state_33510[(8)]);
var inst_33466 = (state_33510[(2)]);
var inst_33467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33466,(0),null);
var inst_33468__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33466,(1),null);
var inst_33469 = (inst_33467__$1 == null);
var inst_33470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33468__$1,change);
var inst_33471 = (inst_33469) || (inst_33470);
var state_33510__$1 = (function (){var statearr_33546 = state_33510;
(statearr_33546[(15)] = inst_33468__$1);

(statearr_33546[(8)] = inst_33467__$1);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33471)){
var statearr_33547_33590 = state_33510__$1;
(statearr_33547_33590[(1)] = (11));

} else {
var statearr_33548_33591 = state_33510__$1;
(statearr_33548_33591[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (18))){
var inst_33468 = (state_33510[(15)]);
var inst_33463 = (state_33510[(16)]);
var inst_33462 = (state_33510[(17)]);
var inst_33487 = cljs.core.empty_QMARK_(inst_33463);
var inst_33488 = (function (){var G__33549 = inst_33468;
return (inst_33462.cljs$core$IFn$_invoke$arity$1 ? inst_33462.cljs$core$IFn$_invoke$arity$1(G__33549) : inst_33462.call(null,G__33549));
})();
var inst_33489 = cljs.core.not(inst_33488);
var inst_33490 = (inst_33487) && (inst_33489);
var state_33510__$1 = state_33510;
var statearr_33550_33592 = state_33510__$1;
(statearr_33550_33592[(2)] = inst_33490);

(statearr_33550_33592[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33511 === (8))){
var inst_33452 = (state_33510[(7)]);
var state_33510__$1 = state_33510;
var statearr_33551_33593 = state_33510__$1;
(statearr_33551_33593[(2)] = inst_33452);

(statearr_33551_33593[(1)] = (9));


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
});})(c__16627__auto___33563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16547__auto__,c__16627__auto___33563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33555[(0)] = state_machine__16548__auto__);

(statearr_33555[(1)] = (1));

return statearr_33555;
});
var state_machine__16548__auto____1 = (function (state_33510){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33510);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33556){if((e33556 instanceof Object)){
var ex__16551__auto__ = e33556;
var statearr_33557_33594 = state_33510;
(statearr_33557_33594[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33510);

return cljs.core.constant$keyword$99;
} else {
throw e33556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33595 = state_33510;
state_33510 = G__33595;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33510){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16629__auto__ = (function (){var statearr_33558 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33563);

return statearr_33558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj33597 = {};
return obj33597;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4895__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33601 = x__4895__auto__;
return goog.typeOf(G__33601);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4895__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33605 = x__4895__auto__;
return goog.typeOf(G__33605);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4895__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33611 = x__4895__auto__;
return goog.typeOf(G__33611);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4239__auto__ = p;
if(and__4239__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4895__auto__ = (((p == null))?null:p);
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33613 = x__4895__auto__;
return goog.typeOf(G__33613);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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
var mults = (function (){var G__33752 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33752) : cljs.core.atom.call(null,G__33752));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33754 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33754) : cljs.core.deref.call(null,G__33754));
})(),topic);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4251__auto__,mults){
return (function (p1__33614_SHARP_){
if(cljs.core.truth_((function (){var G__33755 = topic;
return (p1__33614_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33614_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33755) : p1__33614_SHARP_.call(null,G__33755));
})())){
return p1__33614_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33614_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33756 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33756) : buf_fn.call(null,G__33756));
})())));
}
});})(or__4251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33757 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33757 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33758){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33758 = meta33758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33757.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__33760 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33760) : self__.ensure_mult.call(null,G__33760));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33761 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33761) : cljs.core.deref.call(null,G__33761));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33762 = self__.mults;
var G__33763 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33762,G__33763) : cljs.core.reset_BANG_.call(null,G__33762,G__33763));
});})(mults,ensure_mult))
;

cljs.core.async.t33757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33757.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33759){
var self__ = this;
var _33759__$1 = this;
return self__.meta33758;
});})(mults,ensure_mult))
;

cljs.core.async.t33757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33759,meta33758__$1){
var self__ = this;
var _33759__$1 = this;
return (new cljs.core.async.t33757(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33758__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33757.cljs$lang$type = true;

cljs.core.async.t33757.cljs$lang$ctorStr = "cljs.core.async/t33757";

cljs.core.async.t33757.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t33757");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33757 = ((function (mults,ensure_mult){
return (function __GT_t33757(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33758){
return (new cljs.core.async.t33757(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33758));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33757(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16627__auto___33886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33886,mults,ensure_mult,p){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33886,mults,ensure_mult,p){
return (function (state_33835){
var state_val_33836 = (state_33835[(1)]);
if((state_val_33836 === (7))){
var inst_33831 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33837_33887 = state_33835__$1;
(statearr_33837_33887[(2)] = inst_33831);

(statearr_33837_33887[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (20))){
var state_33835__$1 = state_33835;
var statearr_33838_33888 = state_33835__$1;
(statearr_33838_33888[(2)] = null);

(statearr_33838_33888[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (1))){
var state_33835__$1 = state_33835;
var statearr_33839_33889 = state_33835__$1;
(statearr_33839_33889[(2)] = null);

(statearr_33839_33889[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (24))){
var inst_33814 = (state_33835[(7)]);
var inst_33823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33814);
var state_33835__$1 = state_33835;
var statearr_33840_33890 = state_33835__$1;
(statearr_33840_33890[(2)] = inst_33823);

(statearr_33840_33890[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (4))){
var inst_33766 = (state_33835[(8)]);
var inst_33766__$1 = (state_33835[(2)]);
var inst_33767 = (inst_33766__$1 == null);
var state_33835__$1 = (function (){var statearr_33841 = state_33835;
(statearr_33841[(8)] = inst_33766__$1);

return statearr_33841;
})();
if(cljs.core.truth_(inst_33767)){
var statearr_33842_33891 = state_33835__$1;
(statearr_33842_33891[(1)] = (5));

} else {
var statearr_33843_33892 = state_33835__$1;
(statearr_33843_33892[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (15))){
var inst_33808 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33844_33893 = state_33835__$1;
(statearr_33844_33893[(2)] = inst_33808);

(statearr_33844_33893[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (21))){
var inst_33828 = (state_33835[(2)]);
var state_33835__$1 = (function (){var statearr_33845 = state_33835;
(statearr_33845[(9)] = inst_33828);

return statearr_33845;
})();
var statearr_33846_33894 = state_33835__$1;
(statearr_33846_33894[(2)] = null);

(statearr_33846_33894[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (13))){
var inst_33790 = (state_33835[(10)]);
var inst_33792 = cljs.core.chunked_seq_QMARK_(inst_33790);
var state_33835__$1 = state_33835;
if(inst_33792){
var statearr_33847_33895 = state_33835__$1;
(statearr_33847_33895[(1)] = (16));

} else {
var statearr_33848_33896 = state_33835__$1;
(statearr_33848_33896[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (22))){
var inst_33820 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
if(cljs.core.truth_(inst_33820)){
var statearr_33849_33897 = state_33835__$1;
(statearr_33849_33897[(1)] = (23));

} else {
var statearr_33850_33898 = state_33835__$1;
(statearr_33850_33898[(1)] = (24));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (6))){
var inst_33816 = (state_33835[(11)]);
var inst_33766 = (state_33835[(8)]);
var inst_33814 = (state_33835[(7)]);
var inst_33814__$1 = (function (){var G__33851 = inst_33766;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33851) : topic_fn.call(null,G__33851));
})();
var inst_33815 = (function (){var G__33852 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33852) : cljs.core.deref.call(null,G__33852));
})();
var inst_33816__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33815,inst_33814__$1);
var state_33835__$1 = (function (){var statearr_33853 = state_33835;
(statearr_33853[(11)] = inst_33816__$1);

(statearr_33853[(7)] = inst_33814__$1);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33816__$1)){
var statearr_33854_33899 = state_33835__$1;
(statearr_33854_33899[(1)] = (19));

} else {
var statearr_33855_33900 = state_33835__$1;
(statearr_33855_33900[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (25))){
var inst_33825 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33856_33901 = state_33835__$1;
(statearr_33856_33901[(2)] = inst_33825);

(statearr_33856_33901[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (17))){
var inst_33790 = (state_33835[(10)]);
var inst_33799 = cljs.core.first(inst_33790);
var inst_33800 = cljs.core.async.muxch_STAR_(inst_33799);
var inst_33801 = cljs.core.async.close_BANG_(inst_33800);
var inst_33802 = cljs.core.next(inst_33790);
var inst_33776 = inst_33802;
var inst_33777 = null;
var inst_33778 = (0);
var inst_33779 = (0);
var state_33835__$1 = (function (){var statearr_33857 = state_33835;
(statearr_33857[(12)] = inst_33779);

(statearr_33857[(13)] = inst_33778);

(statearr_33857[(14)] = inst_33801);

(statearr_33857[(15)] = inst_33777);

(statearr_33857[(16)] = inst_33776);

return statearr_33857;
})();
var statearr_33858_33902 = state_33835__$1;
(statearr_33858_33902[(2)] = null);

(statearr_33858_33902[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (3))){
var inst_33833 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33835__$1,inst_33833);
} else {
if((state_val_33836 === (12))){
var inst_33810 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33859_33903 = state_33835__$1;
(statearr_33859_33903[(2)] = inst_33810);

(statearr_33859_33903[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (2))){
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33835__$1,(4),ch);
} else {
if((state_val_33836 === (23))){
var state_33835__$1 = state_33835;
var statearr_33860_33904 = state_33835__$1;
(statearr_33860_33904[(2)] = null);

(statearr_33860_33904[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (19))){
var inst_33816 = (state_33835[(11)]);
var inst_33766 = (state_33835[(8)]);
var inst_33818 = cljs.core.async.muxch_STAR_(inst_33816);
var state_33835__$1 = state_33835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33835__$1,(22),inst_33818,inst_33766);
} else {
if((state_val_33836 === (11))){
var inst_33790 = (state_33835[(10)]);
var inst_33776 = (state_33835[(16)]);
var inst_33790__$1 = cljs.core.seq(inst_33776);
var state_33835__$1 = (function (){var statearr_33861 = state_33835;
(statearr_33861[(10)] = inst_33790__$1);

return statearr_33861;
})();
if(inst_33790__$1){
var statearr_33862_33905 = state_33835__$1;
(statearr_33862_33905[(1)] = (13));

} else {
var statearr_33863_33906 = state_33835__$1;
(statearr_33863_33906[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (9))){
var inst_33812 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33864_33907 = state_33835__$1;
(statearr_33864_33907[(2)] = inst_33812);

(statearr_33864_33907[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (5))){
var inst_33773 = (function (){var G__33865 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33865) : cljs.core.deref.call(null,G__33865));
})();
var inst_33774 = cljs.core.vals(inst_33773);
var inst_33775 = cljs.core.seq(inst_33774);
var inst_33776 = inst_33775;
var inst_33777 = null;
var inst_33778 = (0);
var inst_33779 = (0);
var state_33835__$1 = (function (){var statearr_33866 = state_33835;
(statearr_33866[(12)] = inst_33779);

(statearr_33866[(13)] = inst_33778);

(statearr_33866[(15)] = inst_33777);

(statearr_33866[(16)] = inst_33776);

return statearr_33866;
})();
var statearr_33867_33908 = state_33835__$1;
(statearr_33867_33908[(2)] = null);

(statearr_33867_33908[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (14))){
var state_33835__$1 = state_33835;
var statearr_33871_33909 = state_33835__$1;
(statearr_33871_33909[(2)] = null);

(statearr_33871_33909[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (16))){
var inst_33790 = (state_33835[(10)]);
var inst_33794 = cljs.core.chunk_first(inst_33790);
var inst_33795 = cljs.core.chunk_rest(inst_33790);
var inst_33796 = cljs.core.count(inst_33794);
var inst_33776 = inst_33795;
var inst_33777 = inst_33794;
var inst_33778 = inst_33796;
var inst_33779 = (0);
var state_33835__$1 = (function (){var statearr_33872 = state_33835;
(statearr_33872[(12)] = inst_33779);

(statearr_33872[(13)] = inst_33778);

(statearr_33872[(15)] = inst_33777);

(statearr_33872[(16)] = inst_33776);

return statearr_33872;
})();
var statearr_33873_33910 = state_33835__$1;
(statearr_33873_33910[(2)] = null);

(statearr_33873_33910[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (10))){
var inst_33779 = (state_33835[(12)]);
var inst_33778 = (state_33835[(13)]);
var inst_33777 = (state_33835[(15)]);
var inst_33776 = (state_33835[(16)]);
var inst_33784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33777,inst_33779);
var inst_33785 = cljs.core.async.muxch_STAR_(inst_33784);
var inst_33786 = cljs.core.async.close_BANG_(inst_33785);
var inst_33787 = (inst_33779 + (1));
var tmp33868 = inst_33778;
var tmp33869 = inst_33777;
var tmp33870 = inst_33776;
var inst_33776__$1 = tmp33870;
var inst_33777__$1 = tmp33869;
var inst_33778__$1 = tmp33868;
var inst_33779__$1 = inst_33787;
var state_33835__$1 = (function (){var statearr_33874 = state_33835;
(statearr_33874[(12)] = inst_33779__$1);

(statearr_33874[(17)] = inst_33786);

(statearr_33874[(13)] = inst_33778__$1);

(statearr_33874[(15)] = inst_33777__$1);

(statearr_33874[(16)] = inst_33776__$1);

return statearr_33874;
})();
var statearr_33875_33911 = state_33835__$1;
(statearr_33875_33911[(2)] = null);

(statearr_33875_33911[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (18))){
var inst_33805 = (state_33835[(2)]);
var state_33835__$1 = state_33835;
var statearr_33876_33912 = state_33835__$1;
(statearr_33876_33912[(2)] = inst_33805);

(statearr_33876_33912[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33836 === (8))){
var inst_33779 = (state_33835[(12)]);
var inst_33778 = (state_33835[(13)]);
var inst_33781 = (inst_33779 < inst_33778);
var inst_33782 = inst_33781;
var state_33835__$1 = state_33835;
if(cljs.core.truth_(inst_33782)){
var statearr_33877_33913 = state_33835__$1;
(statearr_33877_33913[(1)] = (10));

} else {
var statearr_33878_33914 = state_33835__$1;
(statearr_33878_33914[(1)] = (11));

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
});})(c__16627__auto___33886,mults,ensure_mult,p))
;
return ((function (switch__16547__auto__,c__16627__auto___33886,mults,ensure_mult,p){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33882[(0)] = state_machine__16548__auto__);

(statearr_33882[(1)] = (1));

return statearr_33882;
});
var state_machine__16548__auto____1 = (function (state_33835){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33835);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33883){if((e33883 instanceof Object)){
var ex__16551__auto__ = e33883;
var statearr_33884_33915 = state_33835;
(statearr_33884_33915[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33835);

return cljs.core.constant$keyword$99;
} else {
throw e33883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33916 = state_33835;
state_33835 = G__33916;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33835){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33886,mults,ensure_mult,p))
})();
var state__16629__auto__ = (function (){var statearr_33885 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33886);

return statearr_33885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33886,mults,ensure_mult,p))
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
var dctr = (function (){var G__33997 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33997) : cljs.core.atom.call(null,G__33997));
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
var c__16627__auto___34070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34070,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34070,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34036){
var state_val_34037 = (state_34036[(1)]);
if((state_val_34037 === (7))){
var state_34036__$1 = state_34036;
var statearr_34038_34071 = state_34036__$1;
(statearr_34038_34071[(2)] = null);

(statearr_34038_34071[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (1))){
var state_34036__$1 = state_34036;
var statearr_34039_34072 = state_34036__$1;
(statearr_34039_34072[(2)] = null);

(statearr_34039_34072[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (4))){
var inst_34000 = (state_34036[(7)]);
var inst_34002 = (inst_34000 < cnt);
var state_34036__$1 = state_34036;
if(cljs.core.truth_(inst_34002)){
var statearr_34040_34073 = state_34036__$1;
(statearr_34040_34073[(1)] = (6));

} else {
var statearr_34041_34074 = state_34036__$1;
(statearr_34041_34074[(1)] = (7));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (15))){
var inst_34032 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34042_34075 = state_34036__$1;
(statearr_34042_34075[(2)] = inst_34032);

(statearr_34042_34075[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (13))){
var inst_34025 = cljs.core.async.close_BANG_(out);
var state_34036__$1 = state_34036;
var statearr_34043_34076 = state_34036__$1;
(statearr_34043_34076[(2)] = inst_34025);

(statearr_34043_34076[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (6))){
var state_34036__$1 = state_34036;
var statearr_34044_34077 = state_34036__$1;
(statearr_34044_34077[(2)] = null);

(statearr_34044_34077[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (3))){
var inst_34034 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34036__$1,inst_34034);
} else {
if((state_val_34037 === (12))){
var inst_34022 = (state_34036[(8)]);
var inst_34022__$1 = (state_34036[(2)]);
var inst_34023 = cljs.core.some(cljs.core.nil_QMARK_,inst_34022__$1);
var state_34036__$1 = (function (){var statearr_34045 = state_34036;
(statearr_34045[(8)] = inst_34022__$1);

return statearr_34045;
})();
if(cljs.core.truth_(inst_34023)){
var statearr_34046_34078 = state_34036__$1;
(statearr_34046_34078[(1)] = (13));

} else {
var statearr_34047_34079 = state_34036__$1;
(statearr_34047_34079[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (2))){
var inst_33999 = (function (){var G__34048 = dctr;
var G__34049 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34048,G__34049) : cljs.core.reset_BANG_.call(null,G__34048,G__34049));
})();
var inst_34000 = (0);
var state_34036__$1 = (function (){var statearr_34050 = state_34036;
(statearr_34050[(7)] = inst_34000);

(statearr_34050[(9)] = inst_33999);

return statearr_34050;
})();
var statearr_34051_34080 = state_34036__$1;
(statearr_34051_34080[(2)] = null);

(statearr_34051_34080[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (11))){
var inst_34000 = (state_34036[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34036,(10),Object,null,(9));
var inst_34009 = (function (){var G__34052 = inst_34000;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__34052) : chs__$1.call(null,G__34052));
})();
var inst_34010 = (function (){var G__34053 = inst_34000;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__34053) : done.call(null,G__34053));
})();
var inst_34011 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34009,inst_34010);
var state_34036__$1 = state_34036;
var statearr_34054_34081 = state_34036__$1;
(statearr_34054_34081[(2)] = inst_34011);


cljs.core.async.impl.ioc_helpers.process_exception(state_34036__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (9))){
var inst_34000 = (state_34036[(7)]);
var inst_34013 = (state_34036[(2)]);
var inst_34014 = (inst_34000 + (1));
var inst_34000__$1 = inst_34014;
var state_34036__$1 = (function (){var statearr_34055 = state_34036;
(statearr_34055[(7)] = inst_34000__$1);

(statearr_34055[(10)] = inst_34013);

return statearr_34055;
})();
var statearr_34056_34082 = state_34036__$1;
(statearr_34056_34082[(2)] = null);

(statearr_34056_34082[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (5))){
var inst_34020 = (state_34036[(2)]);
var state_34036__$1 = (function (){var statearr_34057 = state_34036;
(statearr_34057[(11)] = inst_34020);

return statearr_34057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34036__$1,(12),dchan);
} else {
if((state_val_34037 === (14))){
var inst_34022 = (state_34036[(8)]);
var inst_34027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34022);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34036__$1,(16),out,inst_34027);
} else {
if((state_val_34037 === (16))){
var inst_34029 = (state_34036[(2)]);
var state_34036__$1 = (function (){var statearr_34058 = state_34036;
(statearr_34058[(12)] = inst_34029);

return statearr_34058;
})();
var statearr_34059_34083 = state_34036__$1;
(statearr_34059_34083[(2)] = null);

(statearr_34059_34083[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (10))){
var inst_34004 = (state_34036[(2)]);
var inst_34005 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34036__$1 = (function (){var statearr_34060 = state_34036;
(statearr_34060[(13)] = inst_34004);

return statearr_34060;
})();
var statearr_34061_34084 = state_34036__$1;
(statearr_34061_34084[(2)] = inst_34005);


cljs.core.async.impl.ioc_helpers.process_exception(state_34036__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_34037 === (8))){
var inst_34018 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34062_34085 = state_34036__$1;
(statearr_34062_34085[(2)] = inst_34018);

(statearr_34062_34085[(1)] = (5));


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
});})(c__16627__auto___34070,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16547__auto__,c__16627__auto___34070,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34066[(0)] = state_machine__16548__auto__);

(statearr_34066[(1)] = (1));

return statearr_34066;
});
var state_machine__16548__auto____1 = (function (state_34036){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34036);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34067){if((e34067 instanceof Object)){
var ex__16551__auto__ = e34067;
var statearr_34068_34086 = state_34036;
(statearr_34068_34086[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34036);

return cljs.core.constant$keyword$99;
} else {
throw e34067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34087 = state_34036;
state_34036 = G__34087;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34036){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34070,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16629__auto__ = (function (){var statearr_34069 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34070);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34070,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16627__auto___34197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34197,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34197,out){
return (function (state_34173){
var state_val_34174 = (state_34173[(1)]);
if((state_val_34174 === (7))){
var inst_34152 = (state_34173[(7)]);
var inst_34153 = (state_34173[(8)]);
var inst_34152__$1 = (state_34173[(2)]);
var inst_34153__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34152__$1,(0),null);
var inst_34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34152__$1,(1),null);
var inst_34155 = (inst_34153__$1 == null);
var state_34173__$1 = (function (){var statearr_34175 = state_34173;
(statearr_34175[(7)] = inst_34152__$1);

(statearr_34175[(9)] = inst_34154);

(statearr_34175[(8)] = inst_34153__$1);

return statearr_34175;
})();
if(cljs.core.truth_(inst_34155)){
var statearr_34176_34198 = state_34173__$1;
(statearr_34176_34198[(1)] = (8));

} else {
var statearr_34177_34199 = state_34173__$1;
(statearr_34177_34199[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (1))){
var inst_34144 = cljs.core.vec(chs);
var inst_34145 = inst_34144;
var state_34173__$1 = (function (){var statearr_34178 = state_34173;
(statearr_34178[(10)] = inst_34145);

return statearr_34178;
})();
var statearr_34179_34200 = state_34173__$1;
(statearr_34179_34200[(2)] = null);

(statearr_34179_34200[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (4))){
var inst_34145 = (state_34173[(10)]);
var state_34173__$1 = state_34173;
return cljs.core.async.ioc_alts_BANG_(state_34173__$1,(7),inst_34145);
} else {
if((state_val_34174 === (6))){
var inst_34169 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
var statearr_34180_34201 = state_34173__$1;
(statearr_34180_34201[(2)] = inst_34169);

(statearr_34180_34201[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (3))){
var inst_34171 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34173__$1,inst_34171);
} else {
if((state_val_34174 === (2))){
var inst_34145 = (state_34173[(10)]);
var inst_34147 = cljs.core.count(inst_34145);
var inst_34148 = (inst_34147 > (0));
var state_34173__$1 = state_34173;
if(cljs.core.truth_(inst_34148)){
var statearr_34182_34202 = state_34173__$1;
(statearr_34182_34202[(1)] = (4));

} else {
var statearr_34183_34203 = state_34173__$1;
(statearr_34183_34203[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (11))){
var inst_34145 = (state_34173[(10)]);
var inst_34162 = (state_34173[(2)]);
var tmp34181 = inst_34145;
var inst_34145__$1 = tmp34181;
var state_34173__$1 = (function (){var statearr_34184 = state_34173;
(statearr_34184[(10)] = inst_34145__$1);

(statearr_34184[(11)] = inst_34162);

return statearr_34184;
})();
var statearr_34185_34204 = state_34173__$1;
(statearr_34185_34204[(2)] = null);

(statearr_34185_34204[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (9))){
var inst_34153 = (state_34173[(8)]);
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34173__$1,(11),out,inst_34153);
} else {
if((state_val_34174 === (5))){
var inst_34167 = cljs.core.async.close_BANG_(out);
var state_34173__$1 = state_34173;
var statearr_34186_34205 = state_34173__$1;
(statearr_34186_34205[(2)] = inst_34167);

(statearr_34186_34205[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (10))){
var inst_34165 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
var statearr_34187_34206 = state_34173__$1;
(statearr_34187_34206[(2)] = inst_34165);

(statearr_34187_34206[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34174 === (8))){
var inst_34145 = (state_34173[(10)]);
var inst_34152 = (state_34173[(7)]);
var inst_34154 = (state_34173[(9)]);
var inst_34153 = (state_34173[(8)]);
var inst_34157 = (function (){var c = inst_34154;
var v = inst_34153;
var vec__34150 = inst_34152;
var cs = inst_34145;
return ((function (c,v,vec__34150,cs,inst_34145,inst_34152,inst_34154,inst_34153,state_val_34174,c__16627__auto___34197,out){
return (function (p1__34088_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34088_SHARP_);
});
;})(c,v,vec__34150,cs,inst_34145,inst_34152,inst_34154,inst_34153,state_val_34174,c__16627__auto___34197,out))
})();
var inst_34158 = cljs.core.filterv(inst_34157,inst_34145);
var inst_34145__$1 = inst_34158;
var state_34173__$1 = (function (){var statearr_34188 = state_34173;
(statearr_34188[(10)] = inst_34145__$1);

return statearr_34188;
})();
var statearr_34189_34207 = state_34173__$1;
(statearr_34189_34207[(2)] = null);

(statearr_34189_34207[(1)] = (2));


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
});})(c__16627__auto___34197,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34197,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34193[(0)] = state_machine__16548__auto__);

(statearr_34193[(1)] = (1));

return statearr_34193;
});
var state_machine__16548__auto____1 = (function (state_34173){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34173);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34194){if((e34194 instanceof Object)){
var ex__16551__auto__ = e34194;
var statearr_34195_34208 = state_34173;
(statearr_34195_34208[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34173);

return cljs.core.constant$keyword$99;
} else {
throw e34194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34209 = state_34173;
state_34173 = G__34209;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34173){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34197,out))
})();
var state__16629__auto__ = (function (){var statearr_34196 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34197);

return statearr_34196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34197,out))
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
var c__16627__auto___34305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34305,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34305,out){
return (function (state_34282){
var state_val_34283 = (state_34282[(1)]);
if((state_val_34283 === (7))){
var inst_34264 = (state_34282[(7)]);
var inst_34264__$1 = (state_34282[(2)]);
var inst_34265 = (inst_34264__$1 == null);
var inst_34266 = cljs.core.not(inst_34265);
var state_34282__$1 = (function (){var statearr_34284 = state_34282;
(statearr_34284[(7)] = inst_34264__$1);

return statearr_34284;
})();
if(inst_34266){
var statearr_34285_34306 = state_34282__$1;
(statearr_34285_34306[(1)] = (8));

} else {
var statearr_34286_34307 = state_34282__$1;
(statearr_34286_34307[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (1))){
var inst_34259 = (0);
var state_34282__$1 = (function (){var statearr_34287 = state_34282;
(statearr_34287[(8)] = inst_34259);

return statearr_34287;
})();
var statearr_34288_34308 = state_34282__$1;
(statearr_34288_34308[(2)] = null);

(statearr_34288_34308[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (4))){
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34282__$1,(7),ch);
} else {
if((state_val_34283 === (6))){
var inst_34277 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34289_34309 = state_34282__$1;
(statearr_34289_34309[(2)] = inst_34277);

(statearr_34289_34309[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (3))){
var inst_34279 = (state_34282[(2)]);
var inst_34280 = cljs.core.async.close_BANG_(out);
var state_34282__$1 = (function (){var statearr_34290 = state_34282;
(statearr_34290[(9)] = inst_34279);

return statearr_34290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34282__$1,inst_34280);
} else {
if((state_val_34283 === (2))){
var inst_34259 = (state_34282[(8)]);
var inst_34261 = (inst_34259 < n);
var state_34282__$1 = state_34282;
if(cljs.core.truth_(inst_34261)){
var statearr_34291_34310 = state_34282__$1;
(statearr_34291_34310[(1)] = (4));

} else {
var statearr_34292_34311 = state_34282__$1;
(statearr_34292_34311[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (11))){
var inst_34259 = (state_34282[(8)]);
var inst_34269 = (state_34282[(2)]);
var inst_34270 = (inst_34259 + (1));
var inst_34259__$1 = inst_34270;
var state_34282__$1 = (function (){var statearr_34293 = state_34282;
(statearr_34293[(8)] = inst_34259__$1);

(statearr_34293[(10)] = inst_34269);

return statearr_34293;
})();
var statearr_34294_34312 = state_34282__$1;
(statearr_34294_34312[(2)] = null);

(statearr_34294_34312[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (9))){
var state_34282__$1 = state_34282;
var statearr_34295_34313 = state_34282__$1;
(statearr_34295_34313[(2)] = null);

(statearr_34295_34313[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (5))){
var state_34282__$1 = state_34282;
var statearr_34296_34314 = state_34282__$1;
(statearr_34296_34314[(2)] = null);

(statearr_34296_34314[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (10))){
var inst_34274 = (state_34282[(2)]);
var state_34282__$1 = state_34282;
var statearr_34297_34315 = state_34282__$1;
(statearr_34297_34315[(2)] = inst_34274);

(statearr_34297_34315[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34283 === (8))){
var inst_34264 = (state_34282[(7)]);
var state_34282__$1 = state_34282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34282__$1,(11),out,inst_34264);
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
});})(c__16627__auto___34305,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34305,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34301 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34301[(0)] = state_machine__16548__auto__);

(statearr_34301[(1)] = (1));

return statearr_34301;
});
var state_machine__16548__auto____1 = (function (state_34282){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34282);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34302){if((e34302 instanceof Object)){
var ex__16551__auto__ = e34302;
var statearr_34303_34316 = state_34282;
(statearr_34303_34316[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34282);

return cljs.core.constant$keyword$99;
} else {
throw e34302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34317 = state_34282;
state_34282 = G__34317;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34282){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34305,out))
})();
var state__16629__auto__ = (function (){var statearr_34304 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34305);

return statearr_34304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34305,out))
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
if(typeof cljs.core.async.t34330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34330 = (function (ch,f,map_LT_,meta34331){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34331 = meta34331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t34333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34333 = (function (fn1,_,meta34331,map_LT_,f,ch,meta34334){
this.fn1 = fn1;
this._ = _;
this.meta34331 = meta34331;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34334 = meta34334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t34333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34318_SHARP_){
var G__34336 = (((p1__34318_SHARP_ == null))?null:(function (){var G__34337 = p1__34318_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34337) : self__.f.call(null,G__34337));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34336) : f1.call(null,G__34336));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34335){
var self__ = this;
var _34335__$1 = this;
return self__.meta34334;
});})(___$1))
;

cljs.core.async.t34333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34335,meta34334__$1){
var self__ = this;
var _34335__$1 = this;
return (new cljs.core.async.t34333(self__.fn1,self__._,self__.meta34331,self__.map_LT_,self__.f,self__.ch,meta34334__$1));
});})(___$1))
;

cljs.core.async.t34333.cljs$lang$type = true;

cljs.core.async.t34333.cljs$lang$ctorStr = "cljs.core.async/t34333";

cljs.core.async.t34333.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34333");
});})(___$1))
;

cljs.core.async.__GT_t34333 = ((function (___$1){
return (function __GT_t34333(fn1__$1,___$2,meta34331__$1,map_LT___$1,f__$1,ch__$1,meta34334){
return (new cljs.core.async.t34333(fn1__$1,___$2,meta34331__$1,map_LT___$1,f__$1,ch__$1,meta34334));
});})(___$1))
;

}

return (new cljs.core.async.t34333(fn1,___$1,self__.meta34331,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__4239__auto__ = ret;
if(cljs.core.truth_(and__4239__auto__)){
return !(((function (){var G__34338 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34338) : cljs.core.deref.call(null,G__34338));
})() == null));
} else {
return and__4239__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34339 = (function (){var G__34340 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34340) : cljs.core.deref.call(null,G__34340));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34339) : self__.f.call(null,G__34339));
})());
} else {
return ret;
}
});

cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t34330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34332){
var self__ = this;
var _34332__$1 = this;
return self__.meta34331;
});

cljs.core.async.t34330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34332,meta34331__$1){
var self__ = this;
var _34332__$1 = this;
return (new cljs.core.async.t34330(self__.ch,self__.f,self__.map_LT_,meta34331__$1));
});

cljs.core.async.t34330.cljs$lang$type = true;

cljs.core.async.t34330.cljs$lang$ctorStr = "cljs.core.async/t34330";

cljs.core.async.t34330.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34330");
});

cljs.core.async.__GT_t34330 = (function __GT_t34330(ch__$1,f__$1,map_LT___$1,meta34331){
return (new cljs.core.async.t34330(ch__$1,f__$1,map_LT___$1,meta34331));
});

}

return (new cljs.core.async.t34330(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34345 = (function (ch,f,map_GT_,meta34346){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34346 = meta34346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__34348 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34348) : self__.f.call(null,G__34348));
})(),fn1);
});

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34347){
var self__ = this;
var _34347__$1 = this;
return self__.meta34346;
});

cljs.core.async.t34345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34347,meta34346__$1){
var self__ = this;
var _34347__$1 = this;
return (new cljs.core.async.t34345(self__.ch,self__.f,self__.map_GT_,meta34346__$1));
});

cljs.core.async.t34345.cljs$lang$type = true;

cljs.core.async.t34345.cljs$lang$ctorStr = "cljs.core.async/t34345";

cljs.core.async.t34345.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34345");
});

cljs.core.async.__GT_t34345 = (function __GT_t34345(ch__$1,f__$1,map_GT___$1,meta34346){
return (new cljs.core.async.t34345(ch__$1,f__$1,map_GT___$1,meta34346));
});

}

return (new cljs.core.async.t34345(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34353 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34353 = (function (ch,p,filter_GT_,meta34354){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34354 = meta34354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__34356 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__34356) : self__.p.call(null,G__34356));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t34353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34355){
var self__ = this;
var _34355__$1 = this;
return self__.meta34354;
});

cljs.core.async.t34353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34355,meta34354__$1){
var self__ = this;
var _34355__$1 = this;
return (new cljs.core.async.t34353(self__.ch,self__.p,self__.filter_GT_,meta34354__$1));
});

cljs.core.async.t34353.cljs$lang$type = true;

cljs.core.async.t34353.cljs$lang$ctorStr = "cljs.core.async/t34353";

cljs.core.async.t34353.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34353");
});

cljs.core.async.__GT_t34353 = (function __GT_t34353(ch__$1,p__$1,filter_GT___$1,meta34354){
return (new cljs.core.async.t34353(ch__$1,p__$1,filter_GT___$1,meta34354));
});

}

return (new cljs.core.async.t34353(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16627__auto___34444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34444,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34444,out){
return (function (state_34422){
var state_val_34423 = (state_34422[(1)]);
if((state_val_34423 === (7))){
var inst_34418 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34424_34445 = state_34422__$1;
(statearr_34424_34445[(2)] = inst_34418);

(statearr_34424_34445[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (1))){
var state_34422__$1 = state_34422;
var statearr_34425_34446 = state_34422__$1;
(statearr_34425_34446[(2)] = null);

(statearr_34425_34446[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (4))){
var inst_34404 = (state_34422[(7)]);
var inst_34404__$1 = (state_34422[(2)]);
var inst_34405 = (inst_34404__$1 == null);
var state_34422__$1 = (function (){var statearr_34426 = state_34422;
(statearr_34426[(7)] = inst_34404__$1);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34405)){
var statearr_34427_34447 = state_34422__$1;
(statearr_34427_34447[(1)] = (5));

} else {
var statearr_34428_34448 = state_34422__$1;
(statearr_34428_34448[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (6))){
var inst_34404 = (state_34422[(7)]);
var inst_34409 = (function (){var G__34429 = inst_34404;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__34429) : p.call(null,G__34429));
})();
var state_34422__$1 = state_34422;
if(cljs.core.truth_(inst_34409)){
var statearr_34430_34449 = state_34422__$1;
(statearr_34430_34449[(1)] = (8));

} else {
var statearr_34431_34450 = state_34422__$1;
(statearr_34431_34450[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (3))){
var inst_34420 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34422__$1,inst_34420);
} else {
if((state_val_34423 === (2))){
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34422__$1,(4),ch);
} else {
if((state_val_34423 === (11))){
var inst_34412 = (state_34422[(2)]);
var state_34422__$1 = state_34422;
var statearr_34432_34451 = state_34422__$1;
(statearr_34432_34451[(2)] = inst_34412);

(statearr_34432_34451[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (9))){
var state_34422__$1 = state_34422;
var statearr_34433_34452 = state_34422__$1;
(statearr_34433_34452[(2)] = null);

(statearr_34433_34452[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (5))){
var inst_34407 = cljs.core.async.close_BANG_(out);
var state_34422__$1 = state_34422;
var statearr_34434_34453 = state_34422__$1;
(statearr_34434_34453[(2)] = inst_34407);

(statearr_34434_34453[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (10))){
var inst_34415 = (state_34422[(2)]);
var state_34422__$1 = (function (){var statearr_34435 = state_34422;
(statearr_34435[(8)] = inst_34415);

return statearr_34435;
})();
var statearr_34436_34454 = state_34422__$1;
(statearr_34436_34454[(2)] = null);

(statearr_34436_34454[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34423 === (8))){
var inst_34404 = (state_34422[(7)]);
var state_34422__$1 = state_34422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34422__$1,(11),out,inst_34404);
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
});})(c__16627__auto___34444,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34444,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = state_machine__16548__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var state_machine__16548__auto____1 = (function (state_34422){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34422);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__16551__auto__ = e34441;
var statearr_34442_34455 = state_34422;
(statearr_34442_34455[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34422);

return cljs.core.constant$keyword$99;
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34456 = state_34422;
state_34422 = G__34456;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34422){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34444,out))
})();
var state__16629__auto__ = (function (){var statearr_34443 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34444);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34444,out))
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
var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__){
return (function (state_34626){
var state_val_34627 = (state_34626[(1)]);
if((state_val_34627 === (7))){
var inst_34622 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34628_34670 = state_34626__$1;
(statearr_34628_34670[(2)] = inst_34622);

(statearr_34628_34670[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (20))){
var inst_34592 = (state_34626[(7)]);
var inst_34603 = (state_34626[(2)]);
var inst_34604 = cljs.core.next(inst_34592);
var inst_34578 = inst_34604;
var inst_34579 = null;
var inst_34580 = (0);
var inst_34581 = (0);
var state_34626__$1 = (function (){var statearr_34629 = state_34626;
(statearr_34629[(8)] = inst_34579);

(statearr_34629[(9)] = inst_34603);

(statearr_34629[(10)] = inst_34581);

(statearr_34629[(11)] = inst_34578);

(statearr_34629[(12)] = inst_34580);

return statearr_34629;
})();
var statearr_34630_34671 = state_34626__$1;
(statearr_34630_34671[(2)] = null);

(statearr_34630_34671[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (1))){
var state_34626__$1 = state_34626;
var statearr_34631_34672 = state_34626__$1;
(statearr_34631_34672[(2)] = null);

(statearr_34631_34672[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (4))){
var inst_34567 = (state_34626[(13)]);
var inst_34567__$1 = (state_34626[(2)]);
var inst_34568 = (inst_34567__$1 == null);
var state_34626__$1 = (function (){var statearr_34632 = state_34626;
(statearr_34632[(13)] = inst_34567__$1);

return statearr_34632;
})();
if(cljs.core.truth_(inst_34568)){
var statearr_34633_34673 = state_34626__$1;
(statearr_34633_34673[(1)] = (5));

} else {
var statearr_34634_34674 = state_34626__$1;
(statearr_34634_34674[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (15))){
var state_34626__$1 = state_34626;
var statearr_34638_34675 = state_34626__$1;
(statearr_34638_34675[(2)] = null);

(statearr_34638_34675[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (21))){
var state_34626__$1 = state_34626;
var statearr_34639_34676 = state_34626__$1;
(statearr_34639_34676[(2)] = null);

(statearr_34639_34676[(1)] = (23));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (13))){
var inst_34579 = (state_34626[(8)]);
var inst_34581 = (state_34626[(10)]);
var inst_34578 = (state_34626[(11)]);
var inst_34580 = (state_34626[(12)]);
var inst_34588 = (state_34626[(2)]);
var inst_34589 = (inst_34581 + (1));
var tmp34635 = inst_34579;
var tmp34636 = inst_34578;
var tmp34637 = inst_34580;
var inst_34578__$1 = tmp34636;
var inst_34579__$1 = tmp34635;
var inst_34580__$1 = tmp34637;
var inst_34581__$1 = inst_34589;
var state_34626__$1 = (function (){var statearr_34640 = state_34626;
(statearr_34640[(14)] = inst_34588);

(statearr_34640[(8)] = inst_34579__$1);

(statearr_34640[(10)] = inst_34581__$1);

(statearr_34640[(11)] = inst_34578__$1);

(statearr_34640[(12)] = inst_34580__$1);

return statearr_34640;
})();
var statearr_34641_34677 = state_34626__$1;
(statearr_34641_34677[(2)] = null);

(statearr_34641_34677[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (22))){
var state_34626__$1 = state_34626;
var statearr_34642_34678 = state_34626__$1;
(statearr_34642_34678[(2)] = null);

(statearr_34642_34678[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (6))){
var inst_34567 = (state_34626[(13)]);
var inst_34576 = (function (){var G__34643 = inst_34567;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34643) : f.call(null,G__34643));
})();
var inst_34577 = cljs.core.seq(inst_34576);
var inst_34578 = inst_34577;
var inst_34579 = null;
var inst_34580 = (0);
var inst_34581 = (0);
var state_34626__$1 = (function (){var statearr_34644 = state_34626;
(statearr_34644[(8)] = inst_34579);

(statearr_34644[(10)] = inst_34581);

(statearr_34644[(11)] = inst_34578);

(statearr_34644[(12)] = inst_34580);

return statearr_34644;
})();
var statearr_34645_34679 = state_34626__$1;
(statearr_34645_34679[(2)] = null);

(statearr_34645_34679[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (17))){
var inst_34592 = (state_34626[(7)]);
var inst_34596 = cljs.core.chunk_first(inst_34592);
var inst_34597 = cljs.core.chunk_rest(inst_34592);
var inst_34598 = cljs.core.count(inst_34596);
var inst_34578 = inst_34597;
var inst_34579 = inst_34596;
var inst_34580 = inst_34598;
var inst_34581 = (0);
var state_34626__$1 = (function (){var statearr_34646 = state_34626;
(statearr_34646[(8)] = inst_34579);

(statearr_34646[(10)] = inst_34581);

(statearr_34646[(11)] = inst_34578);

(statearr_34646[(12)] = inst_34580);

return statearr_34646;
})();
var statearr_34647_34680 = state_34626__$1;
(statearr_34647_34680[(2)] = null);

(statearr_34647_34680[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (3))){
var inst_34624 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34626__$1,inst_34624);
} else {
if((state_val_34627 === (12))){
var inst_34612 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34648_34681 = state_34626__$1;
(statearr_34648_34681[(2)] = inst_34612);

(statearr_34648_34681[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (2))){
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34626__$1,(4),in$);
} else {
if((state_val_34627 === (23))){
var inst_34620 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34649_34682 = state_34626__$1;
(statearr_34649_34682[(2)] = inst_34620);

(statearr_34649_34682[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (19))){
var inst_34607 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34650_34683 = state_34626__$1;
(statearr_34650_34683[(2)] = inst_34607);

(statearr_34650_34683[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (11))){
var inst_34578 = (state_34626[(11)]);
var inst_34592 = (state_34626[(7)]);
var inst_34592__$1 = cljs.core.seq(inst_34578);
var state_34626__$1 = (function (){var statearr_34651 = state_34626;
(statearr_34651[(7)] = inst_34592__$1);

return statearr_34651;
})();
if(inst_34592__$1){
var statearr_34652_34684 = state_34626__$1;
(statearr_34652_34684[(1)] = (14));

} else {
var statearr_34653_34685 = state_34626__$1;
(statearr_34653_34685[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (9))){
var inst_34614 = (state_34626[(2)]);
var inst_34615 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34626__$1 = (function (){var statearr_34654 = state_34626;
(statearr_34654[(15)] = inst_34614);

return statearr_34654;
})();
if(cljs.core.truth_(inst_34615)){
var statearr_34655_34686 = state_34626__$1;
(statearr_34655_34686[(1)] = (21));

} else {
var statearr_34656_34687 = state_34626__$1;
(statearr_34656_34687[(1)] = (22));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (5))){
var inst_34570 = cljs.core.async.close_BANG_(out);
var state_34626__$1 = state_34626;
var statearr_34657_34688 = state_34626__$1;
(statearr_34657_34688[(2)] = inst_34570);

(statearr_34657_34688[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (14))){
var inst_34592 = (state_34626[(7)]);
var inst_34594 = cljs.core.chunked_seq_QMARK_(inst_34592);
var state_34626__$1 = state_34626;
if(inst_34594){
var statearr_34658_34689 = state_34626__$1;
(statearr_34658_34689[(1)] = (17));

} else {
var statearr_34659_34690 = state_34626__$1;
(statearr_34659_34690[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (16))){
var inst_34610 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34660_34691 = state_34626__$1;
(statearr_34660_34691[(2)] = inst_34610);

(statearr_34660_34691[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34627 === (10))){
var inst_34579 = (state_34626[(8)]);
var inst_34581 = (state_34626[(10)]);
var inst_34586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34579,inst_34581);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34626__$1,(13),out,inst_34586);
} else {
if((state_val_34627 === (18))){
var inst_34592 = (state_34626[(7)]);
var inst_34601 = cljs.core.first(inst_34592);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34626__$1,(20),out,inst_34601);
} else {
if((state_val_34627 === (8))){
var inst_34581 = (state_34626[(10)]);
var inst_34580 = (state_34626[(12)]);
var inst_34583 = (inst_34581 < inst_34580);
var inst_34584 = inst_34583;
var state_34626__$1 = state_34626;
if(cljs.core.truth_(inst_34584)){
var statearr_34661_34692 = state_34626__$1;
(statearr_34661_34692[(1)] = (10));

} else {
var statearr_34662_34693 = state_34626__$1;
(statearr_34662_34693[(1)] = (11));

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
});})(c__16627__auto__))
;
return ((function (switch__16547__auto__,c__16627__auto__){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34666[(0)] = state_machine__16548__auto__);

(statearr_34666[(1)] = (1));

return statearr_34666;
});
var state_machine__16548__auto____1 = (function (state_34626){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34626);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34667){if((e34667 instanceof Object)){
var ex__16551__auto__ = e34667;
var statearr_34668_34694 = state_34626;
(statearr_34668_34694[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34626);

return cljs.core.constant$keyword$99;
} else {
throw e34667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34695 = state_34626;
state_34626 = G__34695;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34626){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_34669 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_34669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto__))
);

return c__16627__auto__;
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
var c__16627__auto___34800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34800,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34800,out){
return (function (state_34775){
var state_val_34776 = (state_34775[(1)]);
if((state_val_34776 === (7))){
var inst_34770 = (state_34775[(2)]);
var state_34775__$1 = state_34775;
var statearr_34777_34801 = state_34775__$1;
(statearr_34777_34801[(2)] = inst_34770);

(statearr_34777_34801[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (1))){
var inst_34752 = null;
var state_34775__$1 = (function (){var statearr_34778 = state_34775;
(statearr_34778[(7)] = inst_34752);

return statearr_34778;
})();
var statearr_34779_34802 = state_34775__$1;
(statearr_34779_34802[(2)] = null);

(statearr_34779_34802[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (4))){
var inst_34755 = (state_34775[(8)]);
var inst_34755__$1 = (state_34775[(2)]);
var inst_34756 = (inst_34755__$1 == null);
var inst_34757 = cljs.core.not(inst_34756);
var state_34775__$1 = (function (){var statearr_34780 = state_34775;
(statearr_34780[(8)] = inst_34755__$1);

return statearr_34780;
})();
if(inst_34757){
var statearr_34781_34803 = state_34775__$1;
(statearr_34781_34803[(1)] = (5));

} else {
var statearr_34782_34804 = state_34775__$1;
(statearr_34782_34804[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (6))){
var state_34775__$1 = state_34775;
var statearr_34783_34805 = state_34775__$1;
(statearr_34783_34805[(2)] = null);

(statearr_34783_34805[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (3))){
var inst_34772 = (state_34775[(2)]);
var inst_34773 = cljs.core.async.close_BANG_(out);
var state_34775__$1 = (function (){var statearr_34784 = state_34775;
(statearr_34784[(9)] = inst_34772);

return statearr_34784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34775__$1,inst_34773);
} else {
if((state_val_34776 === (2))){
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34775__$1,(4),ch);
} else {
if((state_val_34776 === (11))){
var inst_34755 = (state_34775[(8)]);
var inst_34764 = (state_34775[(2)]);
var inst_34752 = inst_34755;
var state_34775__$1 = (function (){var statearr_34785 = state_34775;
(statearr_34785[(10)] = inst_34764);

(statearr_34785[(7)] = inst_34752);

return statearr_34785;
})();
var statearr_34786_34806 = state_34775__$1;
(statearr_34786_34806[(2)] = null);

(statearr_34786_34806[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (9))){
var inst_34755 = (state_34775[(8)]);
var state_34775__$1 = state_34775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34775__$1,(11),out,inst_34755);
} else {
if((state_val_34776 === (5))){
var inst_34752 = (state_34775[(7)]);
var inst_34755 = (state_34775[(8)]);
var inst_34759 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34755,inst_34752);
var state_34775__$1 = state_34775;
if(inst_34759){
var statearr_34788_34807 = state_34775__$1;
(statearr_34788_34807[(1)] = (8));

} else {
var statearr_34789_34808 = state_34775__$1;
(statearr_34789_34808[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (10))){
var inst_34767 = (state_34775[(2)]);
var state_34775__$1 = state_34775;
var statearr_34790_34809 = state_34775__$1;
(statearr_34790_34809[(2)] = inst_34767);

(statearr_34790_34809[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34776 === (8))){
var inst_34752 = (state_34775[(7)]);
var tmp34787 = inst_34752;
var inst_34752__$1 = tmp34787;
var state_34775__$1 = (function (){var statearr_34791 = state_34775;
(statearr_34791[(7)] = inst_34752__$1);

return statearr_34791;
})();
var statearr_34792_34810 = state_34775__$1;
(statearr_34792_34810[(2)] = null);

(statearr_34792_34810[(1)] = (2));


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
});})(c__16627__auto___34800,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34800,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34796[(0)] = state_machine__16548__auto__);

(statearr_34796[(1)] = (1));

return statearr_34796;
});
var state_machine__16548__auto____1 = (function (state_34775){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34775);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34797){if((e34797 instanceof Object)){
var ex__16551__auto__ = e34797;
var statearr_34798_34811 = state_34775;
(statearr_34798_34811[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34775);

return cljs.core.constant$keyword$99;
} else {
throw e34797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34812 = state_34775;
state_34775 = G__34812;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34775){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34800,out))
})();
var state__16629__auto__ = (function (){var statearr_34799 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34800);

return statearr_34799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34800,out))
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
var c__16627__auto___34950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34950,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34950,out){
return (function (state_34920){
var state_val_34921 = (state_34920[(1)]);
if((state_val_34921 === (7))){
var inst_34916 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34922_34951 = state_34920__$1;
(statearr_34922_34951[(2)] = inst_34916);

(statearr_34922_34951[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (1))){
var inst_34883 = (new Array(n));
var inst_34884 = inst_34883;
var inst_34885 = (0);
var state_34920__$1 = (function (){var statearr_34923 = state_34920;
(statearr_34923[(7)] = inst_34885);

(statearr_34923[(8)] = inst_34884);

return statearr_34923;
})();
var statearr_34924_34952 = state_34920__$1;
(statearr_34924_34952[(2)] = null);

(statearr_34924_34952[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (4))){
var inst_34888 = (state_34920[(9)]);
var inst_34888__$1 = (state_34920[(2)]);
var inst_34889 = (inst_34888__$1 == null);
var inst_34890 = cljs.core.not(inst_34889);
var state_34920__$1 = (function (){var statearr_34925 = state_34920;
(statearr_34925[(9)] = inst_34888__$1);

return statearr_34925;
})();
if(inst_34890){
var statearr_34926_34953 = state_34920__$1;
(statearr_34926_34953[(1)] = (5));

} else {
var statearr_34927_34954 = state_34920__$1;
(statearr_34927_34954[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (15))){
var inst_34910 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34928_34955 = state_34920__$1;
(statearr_34928_34955[(2)] = inst_34910);

(statearr_34928_34955[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (13))){
var state_34920__$1 = state_34920;
var statearr_34929_34956 = state_34920__$1;
(statearr_34929_34956[(2)] = null);

(statearr_34929_34956[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (6))){
var inst_34885 = (state_34920[(7)]);
var inst_34906 = (inst_34885 > (0));
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34906)){
var statearr_34930_34957 = state_34920__$1;
(statearr_34930_34957[(1)] = (12));

} else {
var statearr_34931_34958 = state_34920__$1;
(statearr_34931_34958[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (3))){
var inst_34918 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34920__$1,inst_34918);
} else {
if((state_val_34921 === (12))){
var inst_34884 = (state_34920[(8)]);
var inst_34908 = cljs.core.vec(inst_34884);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34920__$1,(15),out,inst_34908);
} else {
if((state_val_34921 === (2))){
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34920__$1,(4),ch);
} else {
if((state_val_34921 === (11))){
var inst_34900 = (state_34920[(2)]);
var inst_34901 = (new Array(n));
var inst_34884 = inst_34901;
var inst_34885 = (0);
var state_34920__$1 = (function (){var statearr_34932 = state_34920;
(statearr_34932[(7)] = inst_34885);

(statearr_34932[(10)] = inst_34900);

(statearr_34932[(8)] = inst_34884);

return statearr_34932;
})();
var statearr_34933_34959 = state_34920__$1;
(statearr_34933_34959[(2)] = null);

(statearr_34933_34959[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (9))){
var inst_34884 = (state_34920[(8)]);
var inst_34898 = cljs.core.vec(inst_34884);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34920__$1,(11),out,inst_34898);
} else {
if((state_val_34921 === (5))){
var inst_34885 = (state_34920[(7)]);
var inst_34893 = (state_34920[(11)]);
var inst_34888 = (state_34920[(9)]);
var inst_34884 = (state_34920[(8)]);
var inst_34892 = (inst_34884[inst_34885] = inst_34888);
var inst_34893__$1 = (inst_34885 + (1));
var inst_34894 = (inst_34893__$1 < n);
var state_34920__$1 = (function (){var statearr_34934 = state_34920;
(statearr_34934[(12)] = inst_34892);

(statearr_34934[(11)] = inst_34893__$1);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34894)){
var statearr_34935_34960 = state_34920__$1;
(statearr_34935_34960[(1)] = (8));

} else {
var statearr_34936_34961 = state_34920__$1;
(statearr_34936_34961[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (14))){
var inst_34913 = (state_34920[(2)]);
var inst_34914 = cljs.core.async.close_BANG_(out);
var state_34920__$1 = (function (){var statearr_34938 = state_34920;
(statearr_34938[(13)] = inst_34913);

return statearr_34938;
})();
var statearr_34939_34962 = state_34920__$1;
(statearr_34939_34962[(2)] = inst_34914);

(statearr_34939_34962[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (10))){
var inst_34904 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34940_34963 = state_34920__$1;
(statearr_34940_34963[(2)] = inst_34904);

(statearr_34940_34963[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34921 === (8))){
var inst_34893 = (state_34920[(11)]);
var inst_34884 = (state_34920[(8)]);
var tmp34937 = inst_34884;
var inst_34884__$1 = tmp34937;
var inst_34885 = inst_34893;
var state_34920__$1 = (function (){var statearr_34941 = state_34920;
(statearr_34941[(7)] = inst_34885);

(statearr_34941[(8)] = inst_34884__$1);

return statearr_34941;
})();
var statearr_34942_34964 = state_34920__$1;
(statearr_34942_34964[(2)] = null);

(statearr_34942_34964[(1)] = (2));


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
});})(c__16627__auto___34950,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34950,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34946[(0)] = state_machine__16548__auto__);

(statearr_34946[(1)] = (1));

return statearr_34946;
});
var state_machine__16548__auto____1 = (function (state_34920){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34920);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34947){if((e34947 instanceof Object)){
var ex__16551__auto__ = e34947;
var statearr_34948_34965 = state_34920;
(statearr_34948_34965[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34920);

return cljs.core.constant$keyword$99;
} else {
throw e34947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34966 = state_34920;
state_34920 = G__34966;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34920){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34950,out))
})();
var state__16629__auto__ = (function (){var statearr_34949 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34950);

return statearr_34949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34950,out))
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
var c__16627__auto___35114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___35114,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___35114,out){
return (function (state_35083){
var state_val_35084 = (state_35083[(1)]);
if((state_val_35084 === (7))){
var inst_35079 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35085_35115 = state_35083__$1;
(statearr_35085_35115[(2)] = inst_35079);

(statearr_35085_35115[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (1))){
var inst_35042 = [];
var inst_35043 = inst_35042;
var inst_35044 = cljs.core.constant$keyword$114;
var state_35083__$1 = (function (){var statearr_35086 = state_35083;
(statearr_35086[(7)] = inst_35044);

(statearr_35086[(8)] = inst_35043);

return statearr_35086;
})();
var statearr_35087_35116 = state_35083__$1;
(statearr_35087_35116[(2)] = null);

(statearr_35087_35116[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (4))){
var inst_35047 = (state_35083[(9)]);
var inst_35047__$1 = (state_35083[(2)]);
var inst_35048 = (inst_35047__$1 == null);
var inst_35049 = cljs.core.not(inst_35048);
var state_35083__$1 = (function (){var statearr_35088 = state_35083;
(statearr_35088[(9)] = inst_35047__$1);

return statearr_35088;
})();
if(inst_35049){
var statearr_35089_35117 = state_35083__$1;
(statearr_35089_35117[(1)] = (5));

} else {
var statearr_35090_35118 = state_35083__$1;
(statearr_35090_35118[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (15))){
var inst_35073 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35091_35119 = state_35083__$1;
(statearr_35091_35119[(2)] = inst_35073);

(statearr_35091_35119[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (13))){
var state_35083__$1 = state_35083;
var statearr_35092_35120 = state_35083__$1;
(statearr_35092_35120[(2)] = null);

(statearr_35092_35120[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (6))){
var inst_35043 = (state_35083[(8)]);
var inst_35068 = inst_35043.length;
var inst_35069 = (inst_35068 > (0));
var state_35083__$1 = state_35083;
if(cljs.core.truth_(inst_35069)){
var statearr_35093_35121 = state_35083__$1;
(statearr_35093_35121[(1)] = (12));

} else {
var statearr_35094_35122 = state_35083__$1;
(statearr_35094_35122[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (3))){
var inst_35081 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35083__$1,inst_35081);
} else {
if((state_val_35084 === (12))){
var inst_35043 = (state_35083[(8)]);
var inst_35071 = cljs.core.vec(inst_35043);
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35083__$1,(15),out,inst_35071);
} else {
if((state_val_35084 === (2))){
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35083__$1,(4),ch);
} else {
if((state_val_35084 === (11))){
var inst_35047 = (state_35083[(9)]);
var inst_35051 = (state_35083[(10)]);
var inst_35061 = (state_35083[(2)]);
var inst_35062 = [];
var inst_35063 = inst_35062.push(inst_35047);
var inst_35043 = inst_35062;
var inst_35044 = inst_35051;
var state_35083__$1 = (function (){var statearr_35095 = state_35083;
(statearr_35095[(11)] = inst_35063);

(statearr_35095[(12)] = inst_35061);

(statearr_35095[(7)] = inst_35044);

(statearr_35095[(8)] = inst_35043);

return statearr_35095;
})();
var statearr_35096_35123 = state_35083__$1;
(statearr_35096_35123[(2)] = null);

(statearr_35096_35123[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (9))){
var inst_35043 = (state_35083[(8)]);
var inst_35059 = cljs.core.vec(inst_35043);
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35083__$1,(11),out,inst_35059);
} else {
if((state_val_35084 === (5))){
var inst_35047 = (state_35083[(9)]);
var inst_35044 = (state_35083[(7)]);
var inst_35051 = (state_35083[(10)]);
var inst_35051__$1 = (function (){var G__35097 = inst_35047;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35097) : f.call(null,G__35097));
})();
var inst_35052 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35051__$1,inst_35044);
var inst_35053 = cljs.core.keyword_identical_QMARK_(inst_35044,cljs.core.constant$keyword$114);
var inst_35054 = (inst_35052) || (inst_35053);
var state_35083__$1 = (function (){var statearr_35098 = state_35083;
(statearr_35098[(10)] = inst_35051__$1);

return statearr_35098;
})();
if(cljs.core.truth_(inst_35054)){
var statearr_35099_35124 = state_35083__$1;
(statearr_35099_35124[(1)] = (8));

} else {
var statearr_35100_35125 = state_35083__$1;
(statearr_35100_35125[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (14))){
var inst_35076 = (state_35083[(2)]);
var inst_35077 = cljs.core.async.close_BANG_(out);
var state_35083__$1 = (function (){var statearr_35102 = state_35083;
(statearr_35102[(13)] = inst_35076);

return statearr_35102;
})();
var statearr_35103_35126 = state_35083__$1;
(statearr_35103_35126[(2)] = inst_35077);

(statearr_35103_35126[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (10))){
var inst_35066 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35104_35127 = state_35083__$1;
(statearr_35104_35127[(2)] = inst_35066);

(statearr_35104_35127[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35084 === (8))){
var inst_35047 = (state_35083[(9)]);
var inst_35051 = (state_35083[(10)]);
var inst_35043 = (state_35083[(8)]);
var inst_35056 = inst_35043.push(inst_35047);
var tmp35101 = inst_35043;
var inst_35043__$1 = tmp35101;
var inst_35044 = inst_35051;
var state_35083__$1 = (function (){var statearr_35105 = state_35083;
(statearr_35105[(7)] = inst_35044);

(statearr_35105[(14)] = inst_35056);

(statearr_35105[(8)] = inst_35043__$1);

return statearr_35105;
})();
var statearr_35106_35128 = state_35083__$1;
(statearr_35106_35128[(2)] = null);

(statearr_35106_35128[(1)] = (2));


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
});})(c__16627__auto___35114,out))
;
return ((function (switch__16547__auto__,c__16627__auto___35114,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_35110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35110[(0)] = state_machine__16548__auto__);

(statearr_35110[(1)] = (1));

return statearr_35110;
});
var state_machine__16548__auto____1 = (function (state_35083){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_35083);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e35111){if((e35111 instanceof Object)){
var ex__16551__auto__ = e35111;
var statearr_35112_35129 = state_35083;
(statearr_35112_35129[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35083);

return cljs.core.constant$keyword$99;
} else {
throw e35111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__35130 = state_35083;
state_35083 = G__35130;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_35083){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_35083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___35114,out))
})();
var state__16629__auto__ = (function (){var statearr_35113 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_35113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___35114);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___35114,out))
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
