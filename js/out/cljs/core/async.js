// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t31077 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31077 = (function (f,fn_handler,meta31078){
this.f = f;
this.fn_handler = fn_handler;
this.meta31078 = meta31078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31077.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31079){
var self__ = this;
var _31079__$1 = this;
return self__.meta31078;
});

cljs.core.async.t31077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31079,meta31078__$1){
var self__ = this;
var _31079__$1 = this;
return (new cljs.core.async.t31077(self__.f,self__.fn_handler,meta31078__$1));
});

cljs.core.async.t31077.cljs$lang$type = true;

cljs.core.async.t31077.cljs$lang$ctorStr = "cljs.core.async/t31077";

cljs.core.async.t31077.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31077");
});

cljs.core.async.__GT_t31077 = (function __GT_t31077(f__$1,fn_handler__$1,meta31078){
return (new cljs.core.async.t31077(f__$1,fn_handler__$1,meta31078));
});

}

return (new cljs.core.async.t31077(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31081 = buff;
if(G__31081){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__31081.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31081.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31081);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31081);
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
var val_31098 = (function (){var G__31095 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31095) : cljs.core.deref.call(null,G__31095));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31096_31099 = val_31098;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31096_31099) : fn1.call(null,G__31096_31099));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31098,ret){
return (function (){
var G__31097 = val_31098;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31097) : fn1.call(null,G__31097));
});})(val_31098,ret))
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
var G__31108 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31108) : cljs.core.deref.call(null,G__31108));
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
var ret = (function (){var G__31109 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31109) : cljs.core.deref.call(null,G__31109));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31110_31112 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31110_31112) : fn1.call(null,G__31110_31112));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__31111 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31111) : fn1.call(null,G__31111));
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
var n__4702__auto___31113 = n;
var x_31114 = (0);
while(true){
if((x_31114 < n__4702__auto___31113)){
(a[x_31114] = (0));

var G__31115 = (x_31114 + (1));
x_31114 = G__31115;
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

var G__31116 = (i + (1));
i = G__31116;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__31124 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31124) : cljs.core.atom.call(null,G__31124));
})();
if(typeof cljs.core.async.t31125 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31125 = (function (flag,alt_flag,meta31126){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31126 = meta31126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31125.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31128 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31128) : cljs.core.deref.call(null,G__31128));
});})(flag))
;

cljs.core.async.t31125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31129_31131 = self__.flag;
var G__31130_31132 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31129_31131,G__31130_31132) : cljs.core.reset_BANG_.call(null,G__31129_31131,G__31130_31132));

return true;
});})(flag))
;

cljs.core.async.t31125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31127){
var self__ = this;
var _31127__$1 = this;
return self__.meta31126;
});})(flag))
;

cljs.core.async.t31125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31127,meta31126__$1){
var self__ = this;
var _31127__$1 = this;
return (new cljs.core.async.t31125(self__.flag,self__.alt_flag,meta31126__$1));
});})(flag))
;

cljs.core.async.t31125.cljs$lang$type = true;

cljs.core.async.t31125.cljs$lang$ctorStr = "cljs.core.async/t31125";

cljs.core.async.t31125.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31125");
});})(flag))
;

cljs.core.async.__GT_t31125 = ((function (flag){
return (function __GT_t31125(flag__$1,alt_flag__$1,meta31126){
return (new cljs.core.async.t31125(flag__$1,alt_flag__$1,meta31126));
});})(flag))
;

}

return (new cljs.core.async.t31125(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31136 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31136 = (function (cb,flag,alt_handler,meta31137){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31137 = meta31137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31138){
var self__ = this;
var _31138__$1 = this;
return self__.meta31137;
});

cljs.core.async.t31136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31138,meta31137__$1){
var self__ = this;
var _31138__$1 = this;
return (new cljs.core.async.t31136(self__.cb,self__.flag,self__.alt_handler,meta31137__$1));
});

cljs.core.async.t31136.cljs$lang$type = true;

cljs.core.async.t31136.cljs$lang$ctorStr = "cljs.core.async/t31136";

cljs.core.async.t31136.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31136");
});

cljs.core.async.__GT_t31136 = (function __GT_t31136(cb__$1,flag__$1,alt_handler__$1,meta31137){
return (new cljs.core.async.t31136(cb__$1,flag__$1,alt_handler__$1,meta31137));
});

}

return (new cljs.core.async.t31136(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31146 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31146) : port.call(null,G__31146));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31147 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31147) : port.call(null,G__31147));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31139_SHARP_){
var G__31148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31139_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31148) : fret.call(null,G__31148));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31140_SHARP_){
var G__31149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31140_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31149) : fret.call(null,G__31149));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31150 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31150) : cljs.core.deref.call(null,G__31150));
})(),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31151 = (i + (1));
i = G__31151;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3815__auto__ = ret;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3803__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3803__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3803__auto__;
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
var alts_BANG___delegate = function (ports,p__31152){
var map__31154 = p__31152;
var map__31154__$1 = ((cljs.core.seq_QMARK_(map__31154))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31154):map__31154);
var opts = map__31154__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31152 = null;
if (arguments.length > 1) {
var G__31155__i = 0, G__31155__a = new Array(arguments.length -  1);
while (G__31155__i < G__31155__a.length) {G__31155__a[G__31155__i] = arguments[G__31155__i + 1]; ++G__31155__i;}
  p__31152 = new cljs.core.IndexedSeq(G__31155__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31152);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31156){
var ports = cljs.core.first(arglist__31156);
var p__31152 = cljs.core.rest(arglist__31156);
return alts_BANG___delegate(ports,p__31152);
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
var c__16216__auto___31254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31254){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31254){
return (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (7))){
var inst_31226 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31232_31255 = state_31230__$1;
(statearr_31232_31255[(2)] = inst_31226);

(statearr_31232_31255[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (1))){
var state_31230__$1 = state_31230;
var statearr_31233_31256 = state_31230__$1;
(statearr_31233_31256[(2)] = null);

(statearr_31233_31256[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (4))){
var inst_31209 = (state_31230[(7)]);
var inst_31209__$1 = (state_31230[(2)]);
var inst_31210 = (inst_31209__$1 == null);
var state_31230__$1 = (function (){var statearr_31234 = state_31230;
(statearr_31234[(7)] = inst_31209__$1);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31210)){
var statearr_31235_31257 = state_31230__$1;
(statearr_31235_31257[(1)] = (5));

} else {
var statearr_31236_31258 = state_31230__$1;
(statearr_31236_31258[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (13))){
var state_31230__$1 = state_31230;
var statearr_31237_31259 = state_31230__$1;
(statearr_31237_31259[(2)] = null);

(statearr_31237_31259[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (6))){
var inst_31209 = (state_31230[(7)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31230__$1,(11),to,inst_31209);
} else {
if((state_val_31231 === (3))){
var inst_31228 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31230__$1,inst_31228);
} else {
if((state_val_31231 === (12))){
var state_31230__$1 = state_31230;
var statearr_31238_31260 = state_31230__$1;
(statearr_31238_31260[(2)] = null);

(statearr_31238_31260[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (2))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31230__$1,(4),from);
} else {
if((state_val_31231 === (11))){
var inst_31219 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31219)){
var statearr_31239_31261 = state_31230__$1;
(statearr_31239_31261[(1)] = (12));

} else {
var statearr_31240_31262 = state_31230__$1;
(statearr_31240_31262[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (9))){
var state_31230__$1 = state_31230;
var statearr_31241_31263 = state_31230__$1;
(statearr_31241_31263[(2)] = null);

(statearr_31241_31263[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (5))){
var state_31230__$1 = state_31230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31242_31264 = state_31230__$1;
(statearr_31242_31264[(1)] = (8));

} else {
var statearr_31243_31265 = state_31230__$1;
(statearr_31243_31265[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (14))){
var inst_31224 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31244_31266 = state_31230__$1;
(statearr_31244_31266[(2)] = inst_31224);

(statearr_31244_31266[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (10))){
var inst_31216 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31245_31267 = state_31230__$1;
(statearr_31245_31267[(2)] = inst_31216);

(statearr_31245_31267[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31231 === (8))){
var inst_31213 = cljs.core.async.close_BANG_(to);
var state_31230__$1 = state_31230;
var statearr_31246_31268 = state_31230__$1;
(statearr_31246_31268[(2)] = inst_31213);

(statearr_31246_31268[(1)] = (10));


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
});})(c__16216__auto___31254))
;
return ((function (switch__16136__auto__,c__16216__auto___31254){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31250 = [null,null,null,null,null,null,null,null];
(statearr_31250[(0)] = state_machine__16137__auto__);

(statearr_31250[(1)] = (1));

return statearr_31250;
});
var state_machine__16137__auto____1 = (function (state_31230){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31230);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31251){if((e31251 instanceof Object)){
var ex__16140__auto__ = e31251;
var statearr_31252_31269 = state_31230;
(statearr_31252_31269[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31230);

return cljs.core.constant$keyword$97;
} else {
throw e31251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31270 = state_31230;
state_31230 = G__31270;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31254))
})();
var state__16218__auto__ = (function (){var statearr_31253 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31254);

return statearr_31253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31254))
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
return (function (p__31456){
var vec__31457 = p__31456;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31457,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31457,(1),null);
var job = vec__31457;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16216__auto___31641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31641,res,vec__31457,v,p,job,jobs,results){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31641,res,vec__31457,v,p,job,jobs,results){
return (function (state_31462){
var state_val_31463 = (state_31462[(1)]);
if((state_val_31463 === (2))){
var inst_31459 = (state_31462[(2)]);
var inst_31460 = cljs.core.async.close_BANG_(res);
var state_31462__$1 = (function (){var statearr_31464 = state_31462;
(statearr_31464[(7)] = inst_31459);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31462__$1,inst_31460);
} else {
if((state_val_31463 === (1))){
var state_31462__$1 = state_31462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31462__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16216__auto___31641,res,vec__31457,v,p,job,jobs,results))
;
return ((function (switch__16136__auto__,c__16216__auto___31641,res,vec__31457,v,p,job,jobs,results){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = state_machine__16137__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var state_machine__16137__auto____1 = (function (state_31462){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31462);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31469){if((e31469 instanceof Object)){
var ex__16140__auto__ = e31469;
var statearr_31470_31642 = state_31462;
(statearr_31470_31642[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31462);

return cljs.core.constant$keyword$97;
} else {
throw e31469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31643 = state_31462;
state_31462 = G__31643;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31462){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31641,res,vec__31457,v,p,job,jobs,results))
})();
var state__16218__auto__ = (function (){var statearr_31471 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31641);

return statearr_31471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31641,res,vec__31457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31472){
var vec__31473 = p__31472;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31473,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31473,(1),null);
var job = vec__31473;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__31474_31644 = v;
var G__31475_31645 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__31474_31644,G__31475_31645) : xf.call(null,G__31474_31644,G__31475_31645));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4702__auto___31646 = n;
var __31647 = (0);
while(true){
if((__31647 < n__4702__auto___31646)){
var G__31476_31648 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31476_31648) {
case "async":
var c__16216__auto___31650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31647,c__16216__auto___31650,G__31476_31648,n__4702__auto___31646,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (__31647,c__16216__auto___31650,G__31476_31648,n__4702__auto___31646,jobs,results,process,async){
return (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (7))){
var inst_31485 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31491_31651 = state_31489__$1;
(statearr_31491_31651[(2)] = inst_31485);

(statearr_31491_31651[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31490 === (6))){
var state_31489__$1 = state_31489;
var statearr_31492_31652 = state_31489__$1;
(statearr_31492_31652[(2)] = null);

(statearr_31492_31652[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31490 === (5))){
var state_31489__$1 = state_31489;
var statearr_31493_31653 = state_31489__$1;
(statearr_31493_31653[(2)] = null);

(statearr_31493_31653[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31490 === (4))){
var inst_31479 = (state_31489[(2)]);
var inst_31480 = async(inst_31479);
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31480)){
var statearr_31494_31654 = state_31489__$1;
(statearr_31494_31654[(1)] = (5));

} else {
var statearr_31495_31655 = state_31489__$1;
(statearr_31495_31655[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31490 === (3))){
var inst_31487 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31489__$1,inst_31487);
} else {
if((state_val_31490 === (2))){
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31489__$1,(4),jobs);
} else {
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31496_31656 = state_31489__$1;
(statearr_31496_31656[(2)] = null);

(statearr_31496_31656[(1)] = (2));


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
});})(__31647,c__16216__auto___31650,G__31476_31648,n__4702__auto___31646,jobs,results,process,async))
;
return ((function (__31647,switch__16136__auto__,c__16216__auto___31650,G__31476_31648,n__4702__auto___31646,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31500 = [null,null,null,null,null,null,null];
(statearr_31500[(0)] = state_machine__16137__auto__);

(statearr_31500[(1)] = (1));

return statearr_31500;
});
var state_machine__16137__auto____1 = (function (state_31489){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31489);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31501){if((e31501 instanceof Object)){
var ex__16140__auto__ = e31501;
var statearr_31502_31657 = state_31489;
(statearr_31502_31657[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31489);

return cljs.core.constant$keyword$97;
} else {
throw e31501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31658 = state_31489;
state_31489 = G__31658;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(__31647,switch__16136__auto__,c__16216__auto___31650,G__31476_31648,n__4702__auto___31646,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31503 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31650);

return statearr_31503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(__31647,c__16216__auto___31650,G__31476_31648,n__4702__auto___31646,jobs,results,process,async))
);


break;
case "compute":
var c__16216__auto___31659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31647,c__16216__auto___31659,G__31476_31648,n__4702__auto___31646,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (__31647,c__16216__auto___31659,G__31476_31648,n__4702__auto___31646,jobs,results,process,async){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31518_31660 = state_31516__$1;
(statearr_31518_31660[(2)] = inst_31512);

(statearr_31518_31660[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (6))){
var state_31516__$1 = state_31516;
var statearr_31519_31661 = state_31516__$1;
(statearr_31519_31661[(2)] = null);

(statearr_31519_31661[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (5))){
var state_31516__$1 = state_31516;
var statearr_31520_31662 = state_31516__$1;
(statearr_31520_31662[(2)] = null);

(statearr_31520_31662[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (4))){
var inst_31506 = (state_31516[(2)]);
var inst_31507 = process(inst_31506);
var state_31516__$1 = state_31516;
if(cljs.core.truth_(inst_31507)){
var statearr_31521_31663 = state_31516__$1;
(statearr_31521_31663[(1)] = (5));

} else {
var statearr_31522_31664 = state_31516__$1;
(statearr_31522_31664[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31516__$1,(4),jobs);
} else {
if((state_val_31517 === (1))){
var state_31516__$1 = state_31516;
var statearr_31523_31665 = state_31516__$1;
(statearr_31523_31665[(2)] = null);

(statearr_31523_31665[(1)] = (2));


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
});})(__31647,c__16216__auto___31659,G__31476_31648,n__4702__auto___31646,jobs,results,process,async))
;
return ((function (__31647,switch__16136__auto__,c__16216__auto___31659,G__31476_31648,n__4702__auto___31646,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null];
(statearr_31527[(0)] = state_machine__16137__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var state_machine__16137__auto____1 = (function (state_31516){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31516);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31528){if((e31528 instanceof Object)){
var ex__16140__auto__ = e31528;
var statearr_31529_31666 = state_31516;
(statearr_31529_31666[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31516);

return cljs.core.constant$keyword$97;
} else {
throw e31528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31667 = state_31516;
state_31516 = G__31667;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(__31647,switch__16136__auto__,c__16216__auto___31659,G__31476_31648,n__4702__auto___31646,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31530 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31659);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(__31647,c__16216__auto___31659,G__31476_31648,n__4702__auto___31646,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31668 = (__31647 + (1));
__31647 = G__31668;
continue;
} else {
}
break;
}

var c__16216__auto___31669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31669,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31669,jobs,results,process,async){
return (function (state_31552){
var state_val_31553 = (state_31552[(1)]);
if((state_val_31553 === (9))){
var inst_31545 = (state_31552[(2)]);
var state_31552__$1 = (function (){var statearr_31554 = state_31552;
(statearr_31554[(7)] = inst_31545);

return statearr_31554;
})();
var statearr_31555_31670 = state_31552__$1;
(statearr_31555_31670[(2)] = null);

(statearr_31555_31670[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31553 === (8))){
var inst_31538 = (state_31552[(8)]);
var inst_31543 = (state_31552[(2)]);
var state_31552__$1 = (function (){var statearr_31556 = state_31552;
(statearr_31556[(9)] = inst_31543);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31552__$1,(9),results,inst_31538);
} else {
if((state_val_31553 === (7))){
var inst_31548 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
var statearr_31557_31671 = state_31552__$1;
(statearr_31557_31671[(2)] = inst_31548);

(statearr_31557_31671[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31553 === (6))){
var inst_31533 = (state_31552[(10)]);
var inst_31538 = (state_31552[(8)]);
var inst_31538__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31540 = [inst_31533,inst_31538__$1];
var inst_31541 = (new cljs.core.PersistentVector(null,2,(5),inst_31539,inst_31540,null));
var state_31552__$1 = (function (){var statearr_31558 = state_31552;
(statearr_31558[(8)] = inst_31538__$1);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31552__$1,(8),jobs,inst_31541);
} else {
if((state_val_31553 === (5))){
var inst_31536 = cljs.core.async.close_BANG_(jobs);
var state_31552__$1 = state_31552;
var statearr_31559_31672 = state_31552__$1;
(statearr_31559_31672[(2)] = inst_31536);

(statearr_31559_31672[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31553 === (4))){
var inst_31533 = (state_31552[(10)]);
var inst_31533__$1 = (state_31552[(2)]);
var inst_31534 = (inst_31533__$1 == null);
var state_31552__$1 = (function (){var statearr_31560 = state_31552;
(statearr_31560[(10)] = inst_31533__$1);

return statearr_31560;
})();
if(cljs.core.truth_(inst_31534)){
var statearr_31561_31673 = state_31552__$1;
(statearr_31561_31673[(1)] = (5));

} else {
var statearr_31562_31674 = state_31552__$1;
(statearr_31562_31674[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31553 === (3))){
var inst_31550 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31552__$1,inst_31550);
} else {
if((state_val_31553 === (2))){
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31552__$1,(4),from);
} else {
if((state_val_31553 === (1))){
var state_31552__$1 = state_31552;
var statearr_31563_31675 = state_31552__$1;
(statearr_31563_31675[(2)] = null);

(statearr_31563_31675[(1)] = (2));


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
});})(c__16216__auto___31669,jobs,results,process,async))
;
return ((function (switch__16136__auto__,c__16216__auto___31669,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31567[(0)] = state_machine__16137__auto__);

(statearr_31567[(1)] = (1));

return statearr_31567;
});
var state_machine__16137__auto____1 = (function (state_31552){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31552);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31568){if((e31568 instanceof Object)){
var ex__16140__auto__ = e31568;
var statearr_31569_31676 = state_31552;
(statearr_31569_31676[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31552);

return cljs.core.constant$keyword$97;
} else {
throw e31568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31677 = state_31552;
state_31552 = G__31677;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31552){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31669,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31570 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31669);

return statearr_31570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31669,jobs,results,process,async))
);


var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__,jobs,results,process,async){
return (function (state_31608){
var state_val_31609 = (state_31608[(1)]);
if((state_val_31609 === (7))){
var inst_31604 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31610_31678 = state_31608__$1;
(statearr_31610_31678[(2)] = inst_31604);

(statearr_31610_31678[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (20))){
var state_31608__$1 = state_31608;
var statearr_31611_31679 = state_31608__$1;
(statearr_31611_31679[(2)] = null);

(statearr_31611_31679[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (1))){
var state_31608__$1 = state_31608;
var statearr_31612_31680 = state_31608__$1;
(statearr_31612_31680[(2)] = null);

(statearr_31612_31680[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (4))){
var inst_31573 = (state_31608[(7)]);
var inst_31573__$1 = (state_31608[(2)]);
var inst_31574 = (inst_31573__$1 == null);
var state_31608__$1 = (function (){var statearr_31613 = state_31608;
(statearr_31613[(7)] = inst_31573__$1);

return statearr_31613;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31614_31681 = state_31608__$1;
(statearr_31614_31681[(1)] = (5));

} else {
var statearr_31615_31682 = state_31608__$1;
(statearr_31615_31682[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (15))){
var inst_31586 = (state_31608[(8)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31608__$1,(18),to,inst_31586);
} else {
if((state_val_31609 === (21))){
var inst_31599 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31616_31683 = state_31608__$1;
(statearr_31616_31683[(2)] = inst_31599);

(statearr_31616_31683[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (13))){
var inst_31601 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31617 = state_31608;
(statearr_31617[(9)] = inst_31601);

return statearr_31617;
})();
var statearr_31618_31684 = state_31608__$1;
(statearr_31618_31684[(2)] = null);

(statearr_31618_31684[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (6))){
var inst_31573 = (state_31608[(7)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31608__$1,(11),inst_31573);
} else {
if((state_val_31609 === (17))){
var inst_31594 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31594)){
var statearr_31619_31685 = state_31608__$1;
(statearr_31619_31685[(1)] = (19));

} else {
var statearr_31620_31686 = state_31608__$1;
(statearr_31620_31686[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (3))){
var inst_31606 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31608__$1,inst_31606);
} else {
if((state_val_31609 === (12))){
var inst_31583 = (state_31608[(10)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31608__$1,(14),inst_31583);
} else {
if((state_val_31609 === (2))){
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31608__$1,(4),results);
} else {
if((state_val_31609 === (19))){
var state_31608__$1 = state_31608;
var statearr_31621_31687 = state_31608__$1;
(statearr_31621_31687[(2)] = null);

(statearr_31621_31687[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (11))){
var inst_31583 = (state_31608[(2)]);
var state_31608__$1 = (function (){var statearr_31622 = state_31608;
(statearr_31622[(10)] = inst_31583);

return statearr_31622;
})();
var statearr_31623_31688 = state_31608__$1;
(statearr_31623_31688[(2)] = null);

(statearr_31623_31688[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (9))){
var state_31608__$1 = state_31608;
var statearr_31624_31689 = state_31608__$1;
(statearr_31624_31689[(2)] = null);

(statearr_31624_31689[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (5))){
var state_31608__$1 = state_31608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31625_31690 = state_31608__$1;
(statearr_31625_31690[(1)] = (8));

} else {
var statearr_31626_31691 = state_31608__$1;
(statearr_31626_31691[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (14))){
var inst_31586 = (state_31608[(8)]);
var inst_31588 = (state_31608[(11)]);
var inst_31586__$1 = (state_31608[(2)]);
var inst_31587 = (inst_31586__$1 == null);
var inst_31588__$1 = cljs.core.not(inst_31587);
var state_31608__$1 = (function (){var statearr_31627 = state_31608;
(statearr_31627[(8)] = inst_31586__$1);

(statearr_31627[(11)] = inst_31588__$1);

return statearr_31627;
})();
if(inst_31588__$1){
var statearr_31628_31692 = state_31608__$1;
(statearr_31628_31692[(1)] = (15));

} else {
var statearr_31629_31693 = state_31608__$1;
(statearr_31629_31693[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (16))){
var inst_31588 = (state_31608[(11)]);
var state_31608__$1 = state_31608;
var statearr_31630_31694 = state_31608__$1;
(statearr_31630_31694[(2)] = inst_31588);

(statearr_31630_31694[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (10))){
var inst_31580 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31631_31695 = state_31608__$1;
(statearr_31631_31695[(2)] = inst_31580);

(statearr_31631_31695[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (18))){
var inst_31591 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31632_31696 = state_31608__$1;
(statearr_31632_31696[(2)] = inst_31591);

(statearr_31632_31696[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31609 === (8))){
var inst_31577 = cljs.core.async.close_BANG_(to);
var state_31608__$1 = state_31608;
var statearr_31633_31697 = state_31608__$1;
(statearr_31633_31697[(2)] = inst_31577);

(statearr_31633_31697[(1)] = (10));


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
});})(c__16216__auto__,jobs,results,process,async))
;
return ((function (switch__16136__auto__,c__16216__auto__,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31637[(0)] = state_machine__16137__auto__);

(statearr_31637[(1)] = (1));

return statearr_31637;
});
var state_machine__16137__auto____1 = (function (state_31608){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31608);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31638){if((e31638 instanceof Object)){
var ex__16140__auto__ = e31638;
var statearr_31639_31698 = state_31608;
(statearr_31639_31698[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31608);

return cljs.core.constant$keyword$97;
} else {
throw e31638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31699 = state_31608;
state_31608 = G__31699;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31640 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__,jobs,results,process,async))
);

return c__16216__auto__;
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
var c__16216__auto___31822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31822,tc,fc){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31822,tc,fc){
return (function (state_31796){
var state_val_31797 = (state_31796[(1)]);
if((state_val_31797 === (7))){
var inst_31792 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31798_31823 = state_31796__$1;
(statearr_31798_31823[(2)] = inst_31792);

(statearr_31798_31823[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (1))){
var state_31796__$1 = state_31796;
var statearr_31799_31824 = state_31796__$1;
(statearr_31799_31824[(2)] = null);

(statearr_31799_31824[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (4))){
var inst_31773 = (state_31796[(7)]);
var inst_31773__$1 = (state_31796[(2)]);
var inst_31774 = (inst_31773__$1 == null);
var state_31796__$1 = (function (){var statearr_31800 = state_31796;
(statearr_31800[(7)] = inst_31773__$1);

return statearr_31800;
})();
if(cljs.core.truth_(inst_31774)){
var statearr_31801_31825 = state_31796__$1;
(statearr_31801_31825[(1)] = (5));

} else {
var statearr_31802_31826 = state_31796__$1;
(statearr_31802_31826[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (13))){
var state_31796__$1 = state_31796;
var statearr_31803_31827 = state_31796__$1;
(statearr_31803_31827[(2)] = null);

(statearr_31803_31827[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (6))){
var inst_31773 = (state_31796[(7)]);
var inst_31779 = (function (){var G__31804 = inst_31773;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31804) : p.call(null,G__31804));
})();
var state_31796__$1 = state_31796;
if(cljs.core.truth_(inst_31779)){
var statearr_31805_31828 = state_31796__$1;
(statearr_31805_31828[(1)] = (9));

} else {
var statearr_31806_31829 = state_31796__$1;
(statearr_31806_31829[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (3))){
var inst_31794 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31796__$1,inst_31794);
} else {
if((state_val_31797 === (12))){
var state_31796__$1 = state_31796;
var statearr_31807_31830 = state_31796__$1;
(statearr_31807_31830[(2)] = null);

(statearr_31807_31830[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (2))){
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31796__$1,(4),ch);
} else {
if((state_val_31797 === (11))){
var inst_31773 = (state_31796[(7)]);
var inst_31783 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31796__$1,(8),inst_31783,inst_31773);
} else {
if((state_val_31797 === (9))){
var state_31796__$1 = state_31796;
var statearr_31808_31831 = state_31796__$1;
(statearr_31808_31831[(2)] = tc);

(statearr_31808_31831[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (5))){
var inst_31776 = cljs.core.async.close_BANG_(tc);
var inst_31777 = cljs.core.async.close_BANG_(fc);
var state_31796__$1 = (function (){var statearr_31809 = state_31796;
(statearr_31809[(8)] = inst_31776);

return statearr_31809;
})();
var statearr_31810_31832 = state_31796__$1;
(statearr_31810_31832[(2)] = inst_31777);

(statearr_31810_31832[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (14))){
var inst_31790 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31811_31833 = state_31796__$1;
(statearr_31811_31833[(2)] = inst_31790);

(statearr_31811_31833[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (10))){
var state_31796__$1 = state_31796;
var statearr_31812_31834 = state_31796__$1;
(statearr_31812_31834[(2)] = fc);

(statearr_31812_31834[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31797 === (8))){
var inst_31785 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
if(cljs.core.truth_(inst_31785)){
var statearr_31813_31835 = state_31796__$1;
(statearr_31813_31835[(1)] = (12));

} else {
var statearr_31814_31836 = state_31796__$1;
(statearr_31814_31836[(1)] = (13));

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
});})(c__16216__auto___31822,tc,fc))
;
return ((function (switch__16136__auto__,c__16216__auto___31822,tc,fc){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31818 = [null,null,null,null,null,null,null,null,null];
(statearr_31818[(0)] = state_machine__16137__auto__);

(statearr_31818[(1)] = (1));

return statearr_31818;
});
var state_machine__16137__auto____1 = (function (state_31796){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31796);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31819){if((e31819 instanceof Object)){
var ex__16140__auto__ = e31819;
var statearr_31820_31837 = state_31796;
(statearr_31820_31837[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31796);

return cljs.core.constant$keyword$97;
} else {
throw e31819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31838 = state_31796;
state_31796 = G__31838;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31796){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31822,tc,fc))
})();
var state__16218__auto__ = (function (){var statearr_31821 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31822);

return statearr_31821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31822,tc,fc))
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
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__){
return (function (state_31887){
var state_val_31888 = (state_31887[(1)]);
if((state_val_31888 === (7))){
var inst_31883 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
var statearr_31889_31907 = state_31887__$1;
(statearr_31889_31907[(2)] = inst_31883);

(statearr_31889_31907[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31888 === (6))){
var inst_31873 = (state_31887[(7)]);
var inst_31876 = (state_31887[(8)]);
var inst_31880 = (function (){var G__31890 = inst_31873;
var G__31891 = inst_31876;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31890,G__31891) : f.call(null,G__31890,G__31891));
})();
var inst_31873__$1 = inst_31880;
var state_31887__$1 = (function (){var statearr_31892 = state_31887;
(statearr_31892[(7)] = inst_31873__$1);

return statearr_31892;
})();
var statearr_31893_31908 = state_31887__$1;
(statearr_31893_31908[(2)] = null);

(statearr_31893_31908[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31888 === (5))){
var inst_31873 = (state_31887[(7)]);
var state_31887__$1 = state_31887;
var statearr_31894_31909 = state_31887__$1;
(statearr_31894_31909[(2)] = inst_31873);

(statearr_31894_31909[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31888 === (4))){
var inst_31876 = (state_31887[(8)]);
var inst_31876__$1 = (state_31887[(2)]);
var inst_31877 = (inst_31876__$1 == null);
var state_31887__$1 = (function (){var statearr_31895 = state_31887;
(statearr_31895[(8)] = inst_31876__$1);

return statearr_31895;
})();
if(cljs.core.truth_(inst_31877)){
var statearr_31896_31910 = state_31887__$1;
(statearr_31896_31910[(1)] = (5));

} else {
var statearr_31897_31911 = state_31887__$1;
(statearr_31897_31911[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31888 === (3))){
var inst_31885 = (state_31887[(2)]);
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31887__$1,inst_31885);
} else {
if((state_val_31888 === (2))){
var state_31887__$1 = state_31887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31887__$1,(4),ch);
} else {
if((state_val_31888 === (1))){
var inst_31873 = init;
var state_31887__$1 = (function (){var statearr_31898 = state_31887;
(statearr_31898[(7)] = inst_31873);

return statearr_31898;
})();
var statearr_31899_31912 = state_31887__$1;
(statearr_31899_31912[(2)] = null);

(statearr_31899_31912[(1)] = (2));


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
});})(c__16216__auto__))
;
return ((function (switch__16136__auto__,c__16216__auto__){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31903 = [null,null,null,null,null,null,null,null,null];
(statearr_31903[(0)] = state_machine__16137__auto__);

(statearr_31903[(1)] = (1));

return statearr_31903;
});
var state_machine__16137__auto____1 = (function (state_31887){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31887);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31904){if((e31904 instanceof Object)){
var ex__16140__auto__ = e31904;
var statearr_31905_31913 = state_31887;
(statearr_31905_31913[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31887);

return cljs.core.constant$keyword$97;
} else {
throw e31904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31914 = state_31887;
state_31887 = G__31914;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31887){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_31906 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_31906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__))
);

return c__16216__auto__;
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
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__){
return (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31973 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31993_32016 = state_31991__$1;
(statearr_31993_32016[(2)] = inst_31973);

(statearr_31993_32016[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (1))){
var inst_31967 = cljs.core.seq(coll);
var inst_31968 = inst_31967;
var state_31991__$1 = (function (){var statearr_31994 = state_31991;
(statearr_31994[(7)] = inst_31968);

return statearr_31994;
})();
var statearr_31995_32017 = state_31991__$1;
(statearr_31995_32017[(2)] = null);

(statearr_31995_32017[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (4))){
var inst_31968 = (state_31991[(7)]);
var inst_31971 = cljs.core.first(inst_31968);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31991__$1,(7),ch,inst_31971);
} else {
if((state_val_31992 === (13))){
var inst_31985 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31996_32018 = state_31991__$1;
(statearr_31996_32018[(2)] = inst_31985);

(statearr_31996_32018[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (6))){
var inst_31976 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31976)){
var statearr_31997_32019 = state_31991__$1;
(statearr_31997_32019[(1)] = (8));

} else {
var statearr_31998_32020 = state_31991__$1;
(statearr_31998_32020[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (3))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (12))){
var state_31991__$1 = state_31991;
var statearr_31999_32021 = state_31991__$1;
(statearr_31999_32021[(2)] = null);

(statearr_31999_32021[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (2))){
var inst_31968 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31968)){
var statearr_32000_32022 = state_31991__$1;
(statearr_32000_32022[(1)] = (4));

} else {
var statearr_32001_32023 = state_31991__$1;
(statearr_32001_32023[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (11))){
var inst_31982 = cljs.core.async.close_BANG_(ch);
var state_31991__$1 = state_31991;
var statearr_32002_32024 = state_31991__$1;
(statearr_32002_32024[(2)] = inst_31982);

(statearr_32002_32024[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (9))){
var state_31991__$1 = state_31991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32003_32025 = state_31991__$1;
(statearr_32003_32025[(1)] = (11));

} else {
var statearr_32004_32026 = state_31991__$1;
(statearr_32004_32026[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (5))){
var inst_31968 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
var statearr_32005_32027 = state_31991__$1;
(statearr_32005_32027[(2)] = inst_31968);

(statearr_32005_32027[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (10))){
var inst_31987 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32006_32028 = state_31991__$1;
(statearr_32006_32028[(2)] = inst_31987);

(statearr_32006_32028[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31992 === (8))){
var inst_31968 = (state_31991[(7)]);
var inst_31978 = cljs.core.next(inst_31968);
var inst_31968__$1 = inst_31978;
var state_31991__$1 = (function (){var statearr_32007 = state_31991;
(statearr_32007[(7)] = inst_31968__$1);

return statearr_32007;
})();
var statearr_32008_32029 = state_31991__$1;
(statearr_32008_32029[(2)] = null);

(statearr_32008_32029[(1)] = (2));


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
});})(c__16216__auto__))
;
return ((function (switch__16136__auto__,c__16216__auto__){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_32012 = [null,null,null,null,null,null,null,null];
(statearr_32012[(0)] = state_machine__16137__auto__);

(statearr_32012[(1)] = (1));

return statearr_32012;
});
var state_machine__16137__auto____1 = (function (state_31991){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e32013){if((e32013 instanceof Object)){
var ex__16140__auto__ = e32013;
var statearr_32014_32030 = state_31991;
(statearr_32014_32030[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31991);

return cljs.core.constant$keyword$97;
} else {
throw e32013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__32031 = state_31991;
state_31991 = G__32031;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_32015 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_32015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_32015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__))
);

return c__16216__auto__;
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

cljs.core.async.Mux = (function (){var obj32033 = {};
return obj32033;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3803__auto__ = _;
if(and__3803__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4459__auto__ = (((_ == null))?null:_);
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32037 = x__4459__auto__;
return goog.typeOf(G__32037);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32039 = {};
return obj32039;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32043 = x__4459__auto__;
return goog.typeOf(G__32043);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32047 = x__4459__auto__;
return goog.typeOf(G__32047);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32051 = x__4459__auto__;
return goog.typeOf(G__32051);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var cs = (function (){var G__32281 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32281) : cljs.core.atom.call(null,G__32281));
})();
var m = (function (){
if(typeof cljs.core.async.t32282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32282 = (function (cs,ch,mult,meta32283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32283 = meta32283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32282.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32285_32510 = self__.cs;
var G__32286_32511 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32285_32510,G__32286_32511) : cljs.core.reset_BANG_.call(null,G__32285_32510,G__32286_32511));

return null;
});})(cs))
;

cljs.core.async.t32282.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32284){
var self__ = this;
var _32284__$1 = this;
return self__.meta32283;
});})(cs))
;

cljs.core.async.t32282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32284,meta32283__$1){
var self__ = this;
var _32284__$1 = this;
return (new cljs.core.async.t32282(self__.cs,self__.ch,self__.mult,meta32283__$1));
});})(cs))
;

cljs.core.async.t32282.cljs$lang$type = true;

cljs.core.async.t32282.cljs$lang$ctorStr = "cljs.core.async/t32282";

cljs.core.async.t32282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t32282");
});})(cs))
;

cljs.core.async.__GT_t32282 = ((function (cs){
return (function __GT_t32282(cs__$1,ch__$1,mult__$1,meta32283){
return (new cljs.core.async.t32282(cs__$1,ch__$1,mult__$1,meta32283));
});})(cs))
;

}

return (new cljs.core.async.t32282(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__32287 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32287) : cljs.core.atom.call(null,G__32287));
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
var c__16216__auto___32512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___32512,cs,m,dchan,dctr,done){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___32512,cs,m,dchan,dctr,done){
return (function (state_32418){
var state_val_32419 = (state_32418[(1)]);
if((state_val_32419 === (7))){
var inst_32414 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32420_32513 = state_32418__$1;
(statearr_32420_32513[(2)] = inst_32414);

(statearr_32420_32513[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (20))){
var inst_32319 = (state_32418[(7)]);
var inst_32329 = cljs.core.first(inst_32319);
var inst_32330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32329,(0),null);
var inst_32331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32329,(1),null);
var state_32418__$1 = (function (){var statearr_32421 = state_32418;
(statearr_32421[(8)] = inst_32330);

return statearr_32421;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32422_32514 = state_32418__$1;
(statearr_32422_32514[(1)] = (22));

} else {
var statearr_32423_32515 = state_32418__$1;
(statearr_32423_32515[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (27))){
var inst_32361 = (state_32418[(9)]);
var inst_32290 = (state_32418[(10)]);
var inst_32366 = (state_32418[(11)]);
var inst_32359 = (state_32418[(12)]);
var inst_32366__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32359,inst_32361);
var inst_32367 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32366__$1,inst_32290,done);
var state_32418__$1 = (function (){var statearr_32424 = state_32418;
(statearr_32424[(11)] = inst_32366__$1);

return statearr_32424;
})();
if(cljs.core.truth_(inst_32367)){
var statearr_32425_32516 = state_32418__$1;
(statearr_32425_32516[(1)] = (30));

} else {
var statearr_32426_32517 = state_32418__$1;
(statearr_32426_32517[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (1))){
var state_32418__$1 = state_32418;
var statearr_32427_32518 = state_32418__$1;
(statearr_32427_32518[(2)] = null);

(statearr_32427_32518[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (24))){
var inst_32319 = (state_32418[(7)]);
var inst_32336 = (state_32418[(2)]);
var inst_32337 = cljs.core.next(inst_32319);
var inst_32299 = inst_32337;
var inst_32300 = null;
var inst_32301 = (0);
var inst_32302 = (0);
var state_32418__$1 = (function (){var statearr_32428 = state_32418;
(statearr_32428[(13)] = inst_32300);

(statearr_32428[(14)] = inst_32299);

(statearr_32428[(15)] = inst_32336);

(statearr_32428[(16)] = inst_32301);

(statearr_32428[(17)] = inst_32302);

return statearr_32428;
})();
var statearr_32429_32519 = state_32418__$1;
(statearr_32429_32519[(2)] = null);

(statearr_32429_32519[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (39))){
var state_32418__$1 = state_32418;
var statearr_32433_32520 = state_32418__$1;
(statearr_32433_32520[(2)] = null);

(statearr_32433_32520[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (4))){
var inst_32290 = (state_32418[(10)]);
var inst_32290__$1 = (state_32418[(2)]);
var inst_32291 = (inst_32290__$1 == null);
var state_32418__$1 = (function (){var statearr_32434 = state_32418;
(statearr_32434[(10)] = inst_32290__$1);

return statearr_32434;
})();
if(cljs.core.truth_(inst_32291)){
var statearr_32435_32521 = state_32418__$1;
(statearr_32435_32521[(1)] = (5));

} else {
var statearr_32436_32522 = state_32418__$1;
(statearr_32436_32522[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (15))){
var inst_32300 = (state_32418[(13)]);
var inst_32299 = (state_32418[(14)]);
var inst_32301 = (state_32418[(16)]);
var inst_32302 = (state_32418[(17)]);
var inst_32315 = (state_32418[(2)]);
var inst_32316 = (inst_32302 + (1));
var tmp32430 = inst_32300;
var tmp32431 = inst_32299;
var tmp32432 = inst_32301;
var inst_32299__$1 = tmp32431;
var inst_32300__$1 = tmp32430;
var inst_32301__$1 = tmp32432;
var inst_32302__$1 = inst_32316;
var state_32418__$1 = (function (){var statearr_32437 = state_32418;
(statearr_32437[(13)] = inst_32300__$1);

(statearr_32437[(14)] = inst_32299__$1);

(statearr_32437[(18)] = inst_32315);

(statearr_32437[(16)] = inst_32301__$1);

(statearr_32437[(17)] = inst_32302__$1);

return statearr_32437;
})();
var statearr_32438_32523 = state_32418__$1;
(statearr_32438_32523[(2)] = null);

(statearr_32438_32523[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (21))){
var inst_32340 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32442_32524 = state_32418__$1;
(statearr_32442_32524[(2)] = inst_32340);

(statearr_32442_32524[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (31))){
var inst_32366 = (state_32418[(11)]);
var inst_32370 = done(null);
var inst_32371 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32366);
var state_32418__$1 = (function (){var statearr_32443 = state_32418;
(statearr_32443[(19)] = inst_32370);

return statearr_32443;
})();
var statearr_32444_32525 = state_32418__$1;
(statearr_32444_32525[(2)] = inst_32371);

(statearr_32444_32525[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (32))){
var inst_32358 = (state_32418[(20)]);
var inst_32360 = (state_32418[(21)]);
var inst_32361 = (state_32418[(9)]);
var inst_32359 = (state_32418[(12)]);
var inst_32373 = (state_32418[(2)]);
var inst_32374 = (inst_32361 + (1));
var tmp32439 = inst_32358;
var tmp32440 = inst_32360;
var tmp32441 = inst_32359;
var inst_32358__$1 = tmp32439;
var inst_32359__$1 = tmp32441;
var inst_32360__$1 = tmp32440;
var inst_32361__$1 = inst_32374;
var state_32418__$1 = (function (){var statearr_32445 = state_32418;
(statearr_32445[(22)] = inst_32373);

(statearr_32445[(20)] = inst_32358__$1);

(statearr_32445[(21)] = inst_32360__$1);

(statearr_32445[(9)] = inst_32361__$1);

(statearr_32445[(12)] = inst_32359__$1);

return statearr_32445;
})();
var statearr_32446_32526 = state_32418__$1;
(statearr_32446_32526[(2)] = null);

(statearr_32446_32526[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (40))){
var inst_32386 = (state_32418[(23)]);
var inst_32390 = done(null);
var inst_32391 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32386);
var state_32418__$1 = (function (){var statearr_32447 = state_32418;
(statearr_32447[(24)] = inst_32390);

return statearr_32447;
})();
var statearr_32448_32527 = state_32418__$1;
(statearr_32448_32527[(2)] = inst_32391);

(statearr_32448_32527[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (33))){
var inst_32377 = (state_32418[(25)]);
var inst_32379 = cljs.core.chunked_seq_QMARK_(inst_32377);
var state_32418__$1 = state_32418;
if(inst_32379){
var statearr_32449_32528 = state_32418__$1;
(statearr_32449_32528[(1)] = (36));

} else {
var statearr_32450_32529 = state_32418__$1;
(statearr_32450_32529[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (13))){
var inst_32309 = (state_32418[(26)]);
var inst_32312 = cljs.core.async.close_BANG_(inst_32309);
var state_32418__$1 = state_32418;
var statearr_32451_32530 = state_32418__$1;
(statearr_32451_32530[(2)] = inst_32312);

(statearr_32451_32530[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (22))){
var inst_32330 = (state_32418[(8)]);
var inst_32333 = cljs.core.async.close_BANG_(inst_32330);
var state_32418__$1 = state_32418;
var statearr_32452_32531 = state_32418__$1;
(statearr_32452_32531[(2)] = inst_32333);

(statearr_32452_32531[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (36))){
var inst_32377 = (state_32418[(25)]);
var inst_32381 = cljs.core.chunk_first(inst_32377);
var inst_32382 = cljs.core.chunk_rest(inst_32377);
var inst_32383 = cljs.core.count(inst_32381);
var inst_32358 = inst_32382;
var inst_32359 = inst_32381;
var inst_32360 = inst_32383;
var inst_32361 = (0);
var state_32418__$1 = (function (){var statearr_32453 = state_32418;
(statearr_32453[(20)] = inst_32358);

(statearr_32453[(21)] = inst_32360);

(statearr_32453[(9)] = inst_32361);

(statearr_32453[(12)] = inst_32359);

return statearr_32453;
})();
var statearr_32454_32532 = state_32418__$1;
(statearr_32454_32532[(2)] = null);

(statearr_32454_32532[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (41))){
var inst_32377 = (state_32418[(25)]);
var inst_32393 = (state_32418[(2)]);
var inst_32394 = cljs.core.next(inst_32377);
var inst_32358 = inst_32394;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32418__$1 = (function (){var statearr_32455 = state_32418;
(statearr_32455[(20)] = inst_32358);

(statearr_32455[(27)] = inst_32393);

(statearr_32455[(21)] = inst_32360);

(statearr_32455[(9)] = inst_32361);

(statearr_32455[(12)] = inst_32359);

return statearr_32455;
})();
var statearr_32456_32533 = state_32418__$1;
(statearr_32456_32533[(2)] = null);

(statearr_32456_32533[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (43))){
var state_32418__$1 = state_32418;
var statearr_32457_32534 = state_32418__$1;
(statearr_32457_32534[(2)] = null);

(statearr_32457_32534[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (29))){
var inst_32402 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32458_32535 = state_32418__$1;
(statearr_32458_32535[(2)] = inst_32402);

(statearr_32458_32535[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (44))){
var inst_32411 = (state_32418[(2)]);
var state_32418__$1 = (function (){var statearr_32459 = state_32418;
(statearr_32459[(28)] = inst_32411);

return statearr_32459;
})();
var statearr_32460_32536 = state_32418__$1;
(statearr_32460_32536[(2)] = null);

(statearr_32460_32536[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (6))){
var inst_32350 = (state_32418[(29)]);
var inst_32349 = (function (){var G__32461 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32461) : cljs.core.deref.call(null,G__32461));
})();
var inst_32350__$1 = cljs.core.keys(inst_32349);
var inst_32351 = cljs.core.count(inst_32350__$1);
var inst_32352 = (function (){var G__32462 = dctr;
var G__32463 = inst_32351;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32462,G__32463) : cljs.core.reset_BANG_.call(null,G__32462,G__32463));
})();
var inst_32357 = cljs.core.seq(inst_32350__$1);
var inst_32358 = inst_32357;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32418__$1 = (function (){var statearr_32464 = state_32418;
(statearr_32464[(29)] = inst_32350__$1);

(statearr_32464[(20)] = inst_32358);

(statearr_32464[(30)] = inst_32352);

(statearr_32464[(21)] = inst_32360);

(statearr_32464[(9)] = inst_32361);

(statearr_32464[(12)] = inst_32359);

return statearr_32464;
})();
var statearr_32465_32537 = state_32418__$1;
(statearr_32465_32537[(2)] = null);

(statearr_32465_32537[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (28))){
var inst_32358 = (state_32418[(20)]);
var inst_32377 = (state_32418[(25)]);
var inst_32377__$1 = cljs.core.seq(inst_32358);
var state_32418__$1 = (function (){var statearr_32466 = state_32418;
(statearr_32466[(25)] = inst_32377__$1);

return statearr_32466;
})();
if(inst_32377__$1){
var statearr_32467_32538 = state_32418__$1;
(statearr_32467_32538[(1)] = (33));

} else {
var statearr_32468_32539 = state_32418__$1;
(statearr_32468_32539[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (25))){
var inst_32360 = (state_32418[(21)]);
var inst_32361 = (state_32418[(9)]);
var inst_32363 = (inst_32361 < inst_32360);
var inst_32364 = inst_32363;
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32364)){
var statearr_32469_32540 = state_32418__$1;
(statearr_32469_32540[(1)] = (27));

} else {
var statearr_32470_32541 = state_32418__$1;
(statearr_32470_32541[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (34))){
var state_32418__$1 = state_32418;
var statearr_32471_32542 = state_32418__$1;
(statearr_32471_32542[(2)] = null);

(statearr_32471_32542[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (17))){
var state_32418__$1 = state_32418;
var statearr_32472_32543 = state_32418__$1;
(statearr_32472_32543[(2)] = null);

(statearr_32472_32543[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (3))){
var inst_32416 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32418__$1,inst_32416);
} else {
if((state_val_32419 === (12))){
var inst_32345 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32473_32544 = state_32418__$1;
(statearr_32473_32544[(2)] = inst_32345);

(statearr_32473_32544[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (2))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32418__$1,(4),ch);
} else {
if((state_val_32419 === (23))){
var state_32418__$1 = state_32418;
var statearr_32474_32545 = state_32418__$1;
(statearr_32474_32545[(2)] = null);

(statearr_32474_32545[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (35))){
var inst_32400 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32475_32546 = state_32418__$1;
(statearr_32475_32546[(2)] = inst_32400);

(statearr_32475_32546[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (19))){
var inst_32319 = (state_32418[(7)]);
var inst_32323 = cljs.core.chunk_first(inst_32319);
var inst_32324 = cljs.core.chunk_rest(inst_32319);
var inst_32325 = cljs.core.count(inst_32323);
var inst_32299 = inst_32324;
var inst_32300 = inst_32323;
var inst_32301 = inst_32325;
var inst_32302 = (0);
var state_32418__$1 = (function (){var statearr_32476 = state_32418;
(statearr_32476[(13)] = inst_32300);

(statearr_32476[(14)] = inst_32299);

(statearr_32476[(16)] = inst_32301);

(statearr_32476[(17)] = inst_32302);

return statearr_32476;
})();
var statearr_32477_32547 = state_32418__$1;
(statearr_32477_32547[(2)] = null);

(statearr_32477_32547[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (11))){
var inst_32319 = (state_32418[(7)]);
var inst_32299 = (state_32418[(14)]);
var inst_32319__$1 = cljs.core.seq(inst_32299);
var state_32418__$1 = (function (){var statearr_32478 = state_32418;
(statearr_32478[(7)] = inst_32319__$1);

return statearr_32478;
})();
if(inst_32319__$1){
var statearr_32479_32548 = state_32418__$1;
(statearr_32479_32548[(1)] = (16));

} else {
var statearr_32480_32549 = state_32418__$1;
(statearr_32480_32549[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (9))){
var inst_32347 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32481_32550 = state_32418__$1;
(statearr_32481_32550[(2)] = inst_32347);

(statearr_32481_32550[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (5))){
var inst_32297 = (function (){var G__32482 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32482) : cljs.core.deref.call(null,G__32482));
})();
var inst_32298 = cljs.core.seq(inst_32297);
var inst_32299 = inst_32298;
var inst_32300 = null;
var inst_32301 = (0);
var inst_32302 = (0);
var state_32418__$1 = (function (){var statearr_32483 = state_32418;
(statearr_32483[(13)] = inst_32300);

(statearr_32483[(14)] = inst_32299);

(statearr_32483[(16)] = inst_32301);

(statearr_32483[(17)] = inst_32302);

return statearr_32483;
})();
var statearr_32484_32551 = state_32418__$1;
(statearr_32484_32551[(2)] = null);

(statearr_32484_32551[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (14))){
var state_32418__$1 = state_32418;
var statearr_32485_32552 = state_32418__$1;
(statearr_32485_32552[(2)] = null);

(statearr_32485_32552[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (45))){
var inst_32408 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32486_32553 = state_32418__$1;
(statearr_32486_32553[(2)] = inst_32408);

(statearr_32486_32553[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (26))){
var inst_32350 = (state_32418[(29)]);
var inst_32404 = (state_32418[(2)]);
var inst_32405 = cljs.core.seq(inst_32350);
var state_32418__$1 = (function (){var statearr_32487 = state_32418;
(statearr_32487[(31)] = inst_32404);

return statearr_32487;
})();
if(inst_32405){
var statearr_32488_32554 = state_32418__$1;
(statearr_32488_32554[(1)] = (42));

} else {
var statearr_32489_32555 = state_32418__$1;
(statearr_32489_32555[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (16))){
var inst_32319 = (state_32418[(7)]);
var inst_32321 = cljs.core.chunked_seq_QMARK_(inst_32319);
var state_32418__$1 = state_32418;
if(inst_32321){
var statearr_32490_32556 = state_32418__$1;
(statearr_32490_32556[(1)] = (19));

} else {
var statearr_32491_32557 = state_32418__$1;
(statearr_32491_32557[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (38))){
var inst_32397 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32492_32558 = state_32418__$1;
(statearr_32492_32558[(2)] = inst_32397);

(statearr_32492_32558[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (30))){
var state_32418__$1 = state_32418;
var statearr_32493_32559 = state_32418__$1;
(statearr_32493_32559[(2)] = null);

(statearr_32493_32559[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (10))){
var inst_32300 = (state_32418[(13)]);
var inst_32302 = (state_32418[(17)]);
var inst_32308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32300,inst_32302);
var inst_32309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32308,(0),null);
var inst_32310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32308,(1),null);
var state_32418__$1 = (function (){var statearr_32494 = state_32418;
(statearr_32494[(26)] = inst_32309);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32310)){
var statearr_32495_32560 = state_32418__$1;
(statearr_32495_32560[(1)] = (13));

} else {
var statearr_32496_32561 = state_32418__$1;
(statearr_32496_32561[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (18))){
var inst_32343 = (state_32418[(2)]);
var state_32418__$1 = state_32418;
var statearr_32497_32562 = state_32418__$1;
(statearr_32497_32562[(2)] = inst_32343);

(statearr_32497_32562[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (42))){
var state_32418__$1 = state_32418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32418__$1,(45),dchan);
} else {
if((state_val_32419 === (37))){
var inst_32386 = (state_32418[(23)]);
var inst_32377 = (state_32418[(25)]);
var inst_32290 = (state_32418[(10)]);
var inst_32386__$1 = cljs.core.first(inst_32377);
var inst_32387 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32386__$1,inst_32290,done);
var state_32418__$1 = (function (){var statearr_32498 = state_32418;
(statearr_32498[(23)] = inst_32386__$1);

return statearr_32498;
})();
if(cljs.core.truth_(inst_32387)){
var statearr_32499_32563 = state_32418__$1;
(statearr_32499_32563[(1)] = (39));

} else {
var statearr_32500_32564 = state_32418__$1;
(statearr_32500_32564[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32419 === (8))){
var inst_32301 = (state_32418[(16)]);
var inst_32302 = (state_32418[(17)]);
var inst_32304 = (inst_32302 < inst_32301);
var inst_32305 = inst_32304;
var state_32418__$1 = state_32418;
if(cljs.core.truth_(inst_32305)){
var statearr_32501_32565 = state_32418__$1;
(statearr_32501_32565[(1)] = (10));

} else {
var statearr_32502_32566 = state_32418__$1;
(statearr_32502_32566[(1)] = (11));

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
});})(c__16216__auto___32512,cs,m,dchan,dctr,done))
;
return ((function (switch__16136__auto__,c__16216__auto___32512,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_32506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32506[(0)] = state_machine__16137__auto__);

(statearr_32506[(1)] = (1));

return statearr_32506;
});
var state_machine__16137__auto____1 = (function (state_32418){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_32418);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e32507){if((e32507 instanceof Object)){
var ex__16140__auto__ = e32507;
var statearr_32508_32567 = state_32418;
(statearr_32508_32567[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32418);

return cljs.core.constant$keyword$97;
} else {
throw e32507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__32568 = state_32418;
state_32418 = G__32568;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_32418){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_32418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___32512,cs,m,dchan,dctr,done))
})();
var state__16218__auto__ = (function (){var statearr_32509 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_32509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___32512);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___32512,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32573 = {};
return obj32573;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__32577 = x__4459__auto__;
return goog.typeOf(G__32577);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__32581 = x__4459__auto__;
return goog.typeOf(G__32581);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__32585 = x__4459__auto__;
return goog.typeOf(G__32585);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__32589 = x__4459__auto__;
return goog.typeOf(G__32589);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3803__auto__ = m;
if(and__3803__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4459__auto__ = (((m == null))?null:m);
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__32593 = x__4459__auto__;
return goog.typeOf(G__32593);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32594){
var map__32600 = p__32594;
var map__32600__$1 = ((cljs.core.seq_QMARK_(map__32600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32600):map__32600);
var opts = map__32600__$1;
var statearr_32601_32605 = state;
(statearr_32601_32605[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__32600,map__32600__$1,opts){
return (function (val){
var statearr_32602_32606 = state;
(statearr_32602_32606[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32600,map__32600__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32603_32607 = state;
(statearr_32603_32607[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32604 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32604) : cljs.core.deref.call(null,G__32604));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32594 = null;
if (arguments.length > 3) {
var G__32608__i = 0, G__32608__a = new Array(arguments.length -  3);
while (G__32608__i < G__32608__a.length) {G__32608__a[G__32608__i] = arguments[G__32608__i + 3]; ++G__32608__i;}
  p__32594 = new cljs.core.IndexedSeq(G__32608__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32594);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32609){
var state = cljs.core.first(arglist__32609);
arglist__32609 = cljs.core.next(arglist__32609);
var cont_block = cljs.core.first(arglist__32609);
arglist__32609 = cljs.core.next(arglist__32609);
var ports = cljs.core.first(arglist__32609);
var p__32594 = cljs.core.rest(arglist__32609);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32594);
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
var cs = (function (){var G__32743 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32743) : cljs.core.atom.call(null,G__32743));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__32744 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32744) : cljs.core.atom.call(null,G__32744));
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
if(cljs.core.truth_((function (){var G__32745 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__32745) : attr.call(null,G__32745));
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
var chs = (function (){var G__32746 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32746) : cljs.core.deref.call(null,G__32746));
})();
var mode = (function (){var G__32747 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32747) : cljs.core.deref.call(null,G__32747));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32748 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32749){
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
this.meta32749 = meta32749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32748.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32748.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32751_32876 = self__.cs;
var G__32752_32877 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32751_32876,G__32752_32877) : cljs.core.reset_BANG_.call(null,G__32751_32876,G__32752_32877));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__32753 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__32753) : self__.solo_modes.call(null,G__32753));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__32754_32878 = self__.solo_mode;
var G__32755_32879 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32754_32878,G__32755_32879) : cljs.core.reset_BANG_.call(null,G__32754_32878,G__32755_32879));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32750){
var self__ = this;
var _32750__$1 = this;
return self__.meta32749;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32750,meta32749__$1){
var self__ = this;
var _32750__$1 = this;
return (new cljs.core.async.t32748(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32749__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32748.cljs$lang$type = true;

cljs.core.async.t32748.cljs$lang$ctorStr = "cljs.core.async/t32748";

cljs.core.async.t32748.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t32748");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32748 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32748(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32749){
return (new cljs.core.async.t32748(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32749));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32748(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16216__auto___32880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___32880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___32880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32827){
var state_val_32828 = (state_32827[(1)]);
if((state_val_32828 === (7))){
var inst_32769 = (state_32827[(7)]);
var inst_32774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32769);
var state_32827__$1 = state_32827;
var statearr_32829_32881 = state_32827__$1;
(statearr_32829_32881[(2)] = inst_32774);

(statearr_32829_32881[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (20))){
var inst_32784 = (state_32827[(8)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32827__$1,(23),out,inst_32784);
} else {
if((state_val_32828 === (1))){
var inst_32759 = (state_32827[(9)]);
var inst_32759__$1 = calc_state();
var inst_32760 = cljs.core.seq_QMARK_(inst_32759__$1);
var state_32827__$1 = (function (){var statearr_32830 = state_32827;
(statearr_32830[(9)] = inst_32759__$1);

return statearr_32830;
})();
if(inst_32760){
var statearr_32831_32882 = state_32827__$1;
(statearr_32831_32882[(1)] = (2));

} else {
var statearr_32832_32883 = state_32827__$1;
(statearr_32832_32883[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (24))){
var inst_32777 = (state_32827[(10)]);
var inst_32769 = inst_32777;
var state_32827__$1 = (function (){var statearr_32833 = state_32827;
(statearr_32833[(7)] = inst_32769);

return statearr_32833;
})();
var statearr_32834_32884 = state_32827__$1;
(statearr_32834_32884[(2)] = null);

(statearr_32834_32884[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (4))){
var inst_32759 = (state_32827[(9)]);
var inst_32765 = (state_32827[(2)]);
var inst_32766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32765,cljs.core.constant$keyword$111);
var inst_32767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32765,cljs.core.constant$keyword$110);
var inst_32768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32765,cljs.core.constant$keyword$109);
var inst_32769 = inst_32759;
var state_32827__$1 = (function (){var statearr_32835 = state_32827;
(statearr_32835[(11)] = inst_32767);

(statearr_32835[(12)] = inst_32766);

(statearr_32835[(7)] = inst_32769);

(statearr_32835[(13)] = inst_32768);

return statearr_32835;
})();
var statearr_32836_32885 = state_32827__$1;
(statearr_32836_32885[(2)] = null);

(statearr_32836_32885[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (15))){
var state_32827__$1 = state_32827;
var statearr_32837_32886 = state_32827__$1;
(statearr_32837_32886[(2)] = null);

(statearr_32837_32886[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (21))){
var inst_32777 = (state_32827[(10)]);
var inst_32769 = inst_32777;
var state_32827__$1 = (function (){var statearr_32838 = state_32827;
(statearr_32838[(7)] = inst_32769);

return statearr_32838;
})();
var statearr_32839_32887 = state_32827__$1;
(statearr_32839_32887[(2)] = null);

(statearr_32839_32887[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (13))){
var inst_32823 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32840_32888 = state_32827__$1;
(statearr_32840_32888[(2)] = inst_32823);

(statearr_32840_32888[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (22))){
var inst_32821 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32841_32889 = state_32827__$1;
(statearr_32841_32889[(2)] = inst_32821);

(statearr_32841_32889[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (6))){
var inst_32825 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32827__$1,inst_32825);
} else {
if((state_val_32828 === (25))){
var state_32827__$1 = state_32827;
var statearr_32842_32890 = state_32827__$1;
(statearr_32842_32890[(2)] = null);

(statearr_32842_32890[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (17))){
var inst_32800 = (state_32827[(14)]);
var state_32827__$1 = state_32827;
var statearr_32843_32891 = state_32827__$1;
(statearr_32843_32891[(2)] = inst_32800);

(statearr_32843_32891[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (3))){
var inst_32759 = (state_32827[(9)]);
var state_32827__$1 = state_32827;
var statearr_32844_32892 = state_32827__$1;
(statearr_32844_32892[(2)] = inst_32759);

(statearr_32844_32892[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (12))){
var inst_32780 = (state_32827[(15)]);
var inst_32785 = (state_32827[(16)]);
var inst_32800 = (state_32827[(14)]);
var inst_32800__$1 = (function (){var G__32845 = inst_32785;
return (inst_32780.cljs$core$IFn$_invoke$arity$1 ? inst_32780.cljs$core$IFn$_invoke$arity$1(G__32845) : inst_32780.call(null,G__32845));
})();
var state_32827__$1 = (function (){var statearr_32846 = state_32827;
(statearr_32846[(14)] = inst_32800__$1);

return statearr_32846;
})();
if(cljs.core.truth_(inst_32800__$1)){
var statearr_32847_32893 = state_32827__$1;
(statearr_32847_32893[(1)] = (17));

} else {
var statearr_32848_32894 = state_32827__$1;
(statearr_32848_32894[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (2))){
var inst_32759 = (state_32827[(9)]);
var inst_32762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32759);
var state_32827__$1 = state_32827;
var statearr_32849_32895 = state_32827__$1;
(statearr_32849_32895[(2)] = inst_32762);

(statearr_32849_32895[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (23))){
var inst_32812 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
if(cljs.core.truth_(inst_32812)){
var statearr_32850_32896 = state_32827__$1;
(statearr_32850_32896[(1)] = (24));

} else {
var statearr_32851_32897 = state_32827__$1;
(statearr_32851_32897[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (19))){
var inst_32809 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
if(cljs.core.truth_(inst_32809)){
var statearr_32852_32898 = state_32827__$1;
(statearr_32852_32898[(1)] = (20));

} else {
var statearr_32853_32899 = state_32827__$1;
(statearr_32853_32899[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (11))){
var inst_32784 = (state_32827[(8)]);
var inst_32790 = (inst_32784 == null);
var state_32827__$1 = state_32827;
if(cljs.core.truth_(inst_32790)){
var statearr_32854_32900 = state_32827__$1;
(statearr_32854_32900[(1)] = (14));

} else {
var statearr_32855_32901 = state_32827__$1;
(statearr_32855_32901[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (9))){
var inst_32777 = (state_32827[(10)]);
var inst_32777__$1 = (state_32827[(2)]);
var inst_32778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32777__$1,cljs.core.constant$keyword$111);
var inst_32779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32777__$1,cljs.core.constant$keyword$110);
var inst_32780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32777__$1,cljs.core.constant$keyword$109);
var state_32827__$1 = (function (){var statearr_32856 = state_32827;
(statearr_32856[(10)] = inst_32777__$1);

(statearr_32856[(15)] = inst_32780);

(statearr_32856[(17)] = inst_32779);

return statearr_32856;
})();
return cljs.core.async.ioc_alts_BANG_(state_32827__$1,(10),inst_32778);
} else {
if((state_val_32828 === (5))){
var inst_32769 = (state_32827[(7)]);
var inst_32772 = cljs.core.seq_QMARK_(inst_32769);
var state_32827__$1 = state_32827;
if(inst_32772){
var statearr_32857_32902 = state_32827__$1;
(statearr_32857_32902[(1)] = (7));

} else {
var statearr_32858_32903 = state_32827__$1;
(statearr_32858_32903[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (14))){
var inst_32785 = (state_32827[(16)]);
var inst_32792 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32785);
var state_32827__$1 = state_32827;
var statearr_32859_32904 = state_32827__$1;
(statearr_32859_32904[(2)] = inst_32792);

(statearr_32859_32904[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (26))){
var inst_32817 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32860_32905 = state_32827__$1;
(statearr_32860_32905[(2)] = inst_32817);

(statearr_32860_32905[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (16))){
var inst_32795 = (state_32827[(2)]);
var inst_32796 = calc_state();
var inst_32769 = inst_32796;
var state_32827__$1 = (function (){var statearr_32861 = state_32827;
(statearr_32861[(7)] = inst_32769);

(statearr_32861[(18)] = inst_32795);

return statearr_32861;
})();
var statearr_32862_32906 = state_32827__$1;
(statearr_32862_32906[(2)] = null);

(statearr_32862_32906[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (10))){
var inst_32785 = (state_32827[(16)]);
var inst_32784 = (state_32827[(8)]);
var inst_32783 = (state_32827[(2)]);
var inst_32784__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32783,(0),null);
var inst_32785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32783,(1),null);
var inst_32786 = (inst_32784__$1 == null);
var inst_32787 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32785__$1,change);
var inst_32788 = (inst_32786) || (inst_32787);
var state_32827__$1 = (function (){var statearr_32863 = state_32827;
(statearr_32863[(16)] = inst_32785__$1);

(statearr_32863[(8)] = inst_32784__$1);

return statearr_32863;
})();
if(cljs.core.truth_(inst_32788)){
var statearr_32864_32907 = state_32827__$1;
(statearr_32864_32907[(1)] = (11));

} else {
var statearr_32865_32908 = state_32827__$1;
(statearr_32865_32908[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (18))){
var inst_32780 = (state_32827[(15)]);
var inst_32785 = (state_32827[(16)]);
var inst_32779 = (state_32827[(17)]);
var inst_32804 = cljs.core.empty_QMARK_(inst_32780);
var inst_32805 = (function (){var G__32866 = inst_32785;
return (inst_32779.cljs$core$IFn$_invoke$arity$1 ? inst_32779.cljs$core$IFn$_invoke$arity$1(G__32866) : inst_32779.call(null,G__32866));
})();
var inst_32806 = cljs.core.not(inst_32805);
var inst_32807 = (inst_32804) && (inst_32806);
var state_32827__$1 = state_32827;
var statearr_32867_32909 = state_32827__$1;
(statearr_32867_32909[(2)] = inst_32807);

(statearr_32867_32909[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32828 === (8))){
var inst_32769 = (state_32827[(7)]);
var state_32827__$1 = state_32827;
var statearr_32868_32910 = state_32827__$1;
(statearr_32868_32910[(2)] = inst_32769);

(statearr_32868_32910[(1)] = (9));


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
});})(c__16216__auto___32880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16136__auto__,c__16216__auto___32880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_32872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32872[(0)] = state_machine__16137__auto__);

(statearr_32872[(1)] = (1));

return statearr_32872;
});
var state_machine__16137__auto____1 = (function (state_32827){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_32827);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e32873){if((e32873 instanceof Object)){
var ex__16140__auto__ = e32873;
var statearr_32874_32911 = state_32827;
(statearr_32874_32911[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32827);

return cljs.core.constant$keyword$97;
} else {
throw e32873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__32912 = state_32827;
state_32827 = G__32912;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___32880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16218__auto__ = (function (){var statearr_32875 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_32875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___32880);

return statearr_32875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___32880,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32914 = {};
return obj32914;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__32918 = x__4459__auto__;
return goog.typeOf(G__32918);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__32922 = x__4459__auto__;
return goog.typeOf(G__32922);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__32928 = x__4459__auto__;
return goog.typeOf(G__32928);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3803__auto__ = p;
if(and__3803__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4459__auto__ = (((p == null))?null:p);
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__32930 = x__4459__auto__;
return goog.typeOf(G__32930);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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
var mults = (function (){var G__33069 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33069) : cljs.core.atom.call(null,G__33069));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33071 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33071) : cljs.core.deref.call(null,G__33071));
})(),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3815__auto__,mults){
return (function (p1__32931_SHARP_){
if(cljs.core.truth_((function (){var G__33072 = topic;
return (p1__32931_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32931_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33072) : p1__32931_SHARP_.call(null,G__33072));
})())){
return p1__32931_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32931_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33073 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33073) : buf_fn.call(null,G__33073));
})())));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33074 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33074 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33075){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33075 = meta33075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33074.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33074.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__33077 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33077) : self__.ensure_mult.call(null,G__33077));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33074.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33078 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33078) : cljs.core.deref.call(null,G__33078));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33079 = self__.mults;
var G__33080 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33079,G__33080) : cljs.core.reset_BANG_.call(null,G__33079,G__33080));
});})(mults,ensure_mult))
;

cljs.core.async.t33074.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33074.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33076){
var self__ = this;
var _33076__$1 = this;
return self__.meta33075;
});})(mults,ensure_mult))
;

cljs.core.async.t33074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33076,meta33075__$1){
var self__ = this;
var _33076__$1 = this;
return (new cljs.core.async.t33074(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33075__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33074.cljs$lang$type = true;

cljs.core.async.t33074.cljs$lang$ctorStr = "cljs.core.async/t33074";

cljs.core.async.t33074.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33074");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33074 = ((function (mults,ensure_mult){
return (function __GT_t33074(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33075){
return (new cljs.core.async.t33074(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33075));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33074(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16216__auto___33203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33203,mults,ensure_mult,p){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33203,mults,ensure_mult,p){
return (function (state_33152){
var state_val_33153 = (state_33152[(1)]);
if((state_val_33153 === (7))){
var inst_33148 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33154_33204 = state_33152__$1;
(statearr_33154_33204[(2)] = inst_33148);

(statearr_33154_33204[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (20))){
var state_33152__$1 = state_33152;
var statearr_33155_33205 = state_33152__$1;
(statearr_33155_33205[(2)] = null);

(statearr_33155_33205[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (1))){
var state_33152__$1 = state_33152;
var statearr_33156_33206 = state_33152__$1;
(statearr_33156_33206[(2)] = null);

(statearr_33156_33206[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (24))){
var inst_33131 = (state_33152[(7)]);
var inst_33140 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33131);
var state_33152__$1 = state_33152;
var statearr_33157_33207 = state_33152__$1;
(statearr_33157_33207[(2)] = inst_33140);

(statearr_33157_33207[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (4))){
var inst_33083 = (state_33152[(8)]);
var inst_33083__$1 = (state_33152[(2)]);
var inst_33084 = (inst_33083__$1 == null);
var state_33152__$1 = (function (){var statearr_33158 = state_33152;
(statearr_33158[(8)] = inst_33083__$1);

return statearr_33158;
})();
if(cljs.core.truth_(inst_33084)){
var statearr_33159_33208 = state_33152__$1;
(statearr_33159_33208[(1)] = (5));

} else {
var statearr_33160_33209 = state_33152__$1;
(statearr_33160_33209[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (15))){
var inst_33125 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33161_33210 = state_33152__$1;
(statearr_33161_33210[(2)] = inst_33125);

(statearr_33161_33210[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (21))){
var inst_33145 = (state_33152[(2)]);
var state_33152__$1 = (function (){var statearr_33162 = state_33152;
(statearr_33162[(9)] = inst_33145);

return statearr_33162;
})();
var statearr_33163_33211 = state_33152__$1;
(statearr_33163_33211[(2)] = null);

(statearr_33163_33211[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (13))){
var inst_33107 = (state_33152[(10)]);
var inst_33109 = cljs.core.chunked_seq_QMARK_(inst_33107);
var state_33152__$1 = state_33152;
if(inst_33109){
var statearr_33164_33212 = state_33152__$1;
(statearr_33164_33212[(1)] = (16));

} else {
var statearr_33165_33213 = state_33152__$1;
(statearr_33165_33213[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (22))){
var inst_33137 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
if(cljs.core.truth_(inst_33137)){
var statearr_33166_33214 = state_33152__$1;
(statearr_33166_33214[(1)] = (23));

} else {
var statearr_33167_33215 = state_33152__$1;
(statearr_33167_33215[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (6))){
var inst_33083 = (state_33152[(8)]);
var inst_33133 = (state_33152[(11)]);
var inst_33131 = (state_33152[(7)]);
var inst_33131__$1 = (function (){var G__33168 = inst_33083;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33168) : topic_fn.call(null,G__33168));
})();
var inst_33132 = (function (){var G__33169 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33169) : cljs.core.deref.call(null,G__33169));
})();
var inst_33133__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33132,inst_33131__$1);
var state_33152__$1 = (function (){var statearr_33170 = state_33152;
(statearr_33170[(11)] = inst_33133__$1);

(statearr_33170[(7)] = inst_33131__$1);

return statearr_33170;
})();
if(cljs.core.truth_(inst_33133__$1)){
var statearr_33171_33216 = state_33152__$1;
(statearr_33171_33216[(1)] = (19));

} else {
var statearr_33172_33217 = state_33152__$1;
(statearr_33172_33217[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (25))){
var inst_33142 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33173_33218 = state_33152__$1;
(statearr_33173_33218[(2)] = inst_33142);

(statearr_33173_33218[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (17))){
var inst_33107 = (state_33152[(10)]);
var inst_33116 = cljs.core.first(inst_33107);
var inst_33117 = cljs.core.async.muxch_STAR_(inst_33116);
var inst_33118 = cljs.core.async.close_BANG_(inst_33117);
var inst_33119 = cljs.core.next(inst_33107);
var inst_33093 = inst_33119;
var inst_33094 = null;
var inst_33095 = (0);
var inst_33096 = (0);
var state_33152__$1 = (function (){var statearr_33174 = state_33152;
(statearr_33174[(12)] = inst_33095);

(statearr_33174[(13)] = inst_33093);

(statearr_33174[(14)] = inst_33096);

(statearr_33174[(15)] = inst_33094);

(statearr_33174[(16)] = inst_33118);

return statearr_33174;
})();
var statearr_33175_33219 = state_33152__$1;
(statearr_33175_33219[(2)] = null);

(statearr_33175_33219[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (3))){
var inst_33150 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33152__$1,inst_33150);
} else {
if((state_val_33153 === (12))){
var inst_33127 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33176_33220 = state_33152__$1;
(statearr_33176_33220[(2)] = inst_33127);

(statearr_33176_33220[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (2))){
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33152__$1,(4),ch);
} else {
if((state_val_33153 === (23))){
var state_33152__$1 = state_33152;
var statearr_33177_33221 = state_33152__$1;
(statearr_33177_33221[(2)] = null);

(statearr_33177_33221[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (19))){
var inst_33083 = (state_33152[(8)]);
var inst_33133 = (state_33152[(11)]);
var inst_33135 = cljs.core.async.muxch_STAR_(inst_33133);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33152__$1,(22),inst_33135,inst_33083);
} else {
if((state_val_33153 === (11))){
var inst_33107 = (state_33152[(10)]);
var inst_33093 = (state_33152[(13)]);
var inst_33107__$1 = cljs.core.seq(inst_33093);
var state_33152__$1 = (function (){var statearr_33178 = state_33152;
(statearr_33178[(10)] = inst_33107__$1);

return statearr_33178;
})();
if(inst_33107__$1){
var statearr_33179_33222 = state_33152__$1;
(statearr_33179_33222[(1)] = (13));

} else {
var statearr_33180_33223 = state_33152__$1;
(statearr_33180_33223[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (9))){
var inst_33129 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33181_33224 = state_33152__$1;
(statearr_33181_33224[(2)] = inst_33129);

(statearr_33181_33224[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (5))){
var inst_33090 = (function (){var G__33182 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33182) : cljs.core.deref.call(null,G__33182));
})();
var inst_33091 = cljs.core.vals(inst_33090);
var inst_33092 = cljs.core.seq(inst_33091);
var inst_33093 = inst_33092;
var inst_33094 = null;
var inst_33095 = (0);
var inst_33096 = (0);
var state_33152__$1 = (function (){var statearr_33183 = state_33152;
(statearr_33183[(12)] = inst_33095);

(statearr_33183[(13)] = inst_33093);

(statearr_33183[(14)] = inst_33096);

(statearr_33183[(15)] = inst_33094);

return statearr_33183;
})();
var statearr_33184_33225 = state_33152__$1;
(statearr_33184_33225[(2)] = null);

(statearr_33184_33225[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (14))){
var state_33152__$1 = state_33152;
var statearr_33188_33226 = state_33152__$1;
(statearr_33188_33226[(2)] = null);

(statearr_33188_33226[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (16))){
var inst_33107 = (state_33152[(10)]);
var inst_33111 = cljs.core.chunk_first(inst_33107);
var inst_33112 = cljs.core.chunk_rest(inst_33107);
var inst_33113 = cljs.core.count(inst_33111);
var inst_33093 = inst_33112;
var inst_33094 = inst_33111;
var inst_33095 = inst_33113;
var inst_33096 = (0);
var state_33152__$1 = (function (){var statearr_33189 = state_33152;
(statearr_33189[(12)] = inst_33095);

(statearr_33189[(13)] = inst_33093);

(statearr_33189[(14)] = inst_33096);

(statearr_33189[(15)] = inst_33094);

return statearr_33189;
})();
var statearr_33190_33227 = state_33152__$1;
(statearr_33190_33227[(2)] = null);

(statearr_33190_33227[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (10))){
var inst_33095 = (state_33152[(12)]);
var inst_33093 = (state_33152[(13)]);
var inst_33096 = (state_33152[(14)]);
var inst_33094 = (state_33152[(15)]);
var inst_33101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33094,inst_33096);
var inst_33102 = cljs.core.async.muxch_STAR_(inst_33101);
var inst_33103 = cljs.core.async.close_BANG_(inst_33102);
var inst_33104 = (inst_33096 + (1));
var tmp33185 = inst_33095;
var tmp33186 = inst_33093;
var tmp33187 = inst_33094;
var inst_33093__$1 = tmp33186;
var inst_33094__$1 = tmp33187;
var inst_33095__$1 = tmp33185;
var inst_33096__$1 = inst_33104;
var state_33152__$1 = (function (){var statearr_33191 = state_33152;
(statearr_33191[(12)] = inst_33095__$1);

(statearr_33191[(13)] = inst_33093__$1);

(statearr_33191[(17)] = inst_33103);

(statearr_33191[(14)] = inst_33096__$1);

(statearr_33191[(15)] = inst_33094__$1);

return statearr_33191;
})();
var statearr_33192_33228 = state_33152__$1;
(statearr_33192_33228[(2)] = null);

(statearr_33192_33228[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (18))){
var inst_33122 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33193_33229 = state_33152__$1;
(statearr_33193_33229[(2)] = inst_33122);

(statearr_33193_33229[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33153 === (8))){
var inst_33095 = (state_33152[(12)]);
var inst_33096 = (state_33152[(14)]);
var inst_33098 = (inst_33096 < inst_33095);
var inst_33099 = inst_33098;
var state_33152__$1 = state_33152;
if(cljs.core.truth_(inst_33099)){
var statearr_33194_33230 = state_33152__$1;
(statearr_33194_33230[(1)] = (10));

} else {
var statearr_33195_33231 = state_33152__$1;
(statearr_33195_33231[(1)] = (11));

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
});})(c__16216__auto___33203,mults,ensure_mult,p))
;
return ((function (switch__16136__auto__,c__16216__auto___33203,mults,ensure_mult,p){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33199[(0)] = state_machine__16137__auto__);

(statearr_33199[(1)] = (1));

return statearr_33199;
});
var state_machine__16137__auto____1 = (function (state_33152){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33152);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33200){if((e33200 instanceof Object)){
var ex__16140__auto__ = e33200;
var statearr_33201_33232 = state_33152;
(statearr_33201_33232[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33152);

return cljs.core.constant$keyword$97;
} else {
throw e33200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33233 = state_33152;
state_33152 = G__33233;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33152){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33203,mults,ensure_mult,p))
})();
var state__16218__auto__ = (function (){var statearr_33202 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33203);

return statearr_33202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33203,mults,ensure_mult,p))
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
var dctr = (function (){var G__33314 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33314) : cljs.core.atom.call(null,G__33314));
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
var c__16216__auto___33387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33353){
var state_val_33354 = (state_33353[(1)]);
if((state_val_33354 === (7))){
var state_33353__$1 = state_33353;
var statearr_33355_33388 = state_33353__$1;
(statearr_33355_33388[(2)] = null);

(statearr_33355_33388[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (1))){
var state_33353__$1 = state_33353;
var statearr_33356_33389 = state_33353__$1;
(statearr_33356_33389[(2)] = null);

(statearr_33356_33389[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (4))){
var inst_33317 = (state_33353[(7)]);
var inst_33319 = (inst_33317 < cnt);
var state_33353__$1 = state_33353;
if(cljs.core.truth_(inst_33319)){
var statearr_33357_33390 = state_33353__$1;
(statearr_33357_33390[(1)] = (6));

} else {
var statearr_33358_33391 = state_33353__$1;
(statearr_33358_33391[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (15))){
var inst_33349 = (state_33353[(2)]);
var state_33353__$1 = state_33353;
var statearr_33359_33392 = state_33353__$1;
(statearr_33359_33392[(2)] = inst_33349);

(statearr_33359_33392[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (13))){
var inst_33342 = cljs.core.async.close_BANG_(out);
var state_33353__$1 = state_33353;
var statearr_33360_33393 = state_33353__$1;
(statearr_33360_33393[(2)] = inst_33342);

(statearr_33360_33393[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (6))){
var state_33353__$1 = state_33353;
var statearr_33361_33394 = state_33353__$1;
(statearr_33361_33394[(2)] = null);

(statearr_33361_33394[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (3))){
var inst_33351 = (state_33353[(2)]);
var state_33353__$1 = state_33353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33353__$1,inst_33351);
} else {
if((state_val_33354 === (12))){
var inst_33339 = (state_33353[(8)]);
var inst_33339__$1 = (state_33353[(2)]);
var inst_33340 = cljs.core.some(cljs.core.nil_QMARK_,inst_33339__$1);
var state_33353__$1 = (function (){var statearr_33362 = state_33353;
(statearr_33362[(8)] = inst_33339__$1);

return statearr_33362;
})();
if(cljs.core.truth_(inst_33340)){
var statearr_33363_33395 = state_33353__$1;
(statearr_33363_33395[(1)] = (13));

} else {
var statearr_33364_33396 = state_33353__$1;
(statearr_33364_33396[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (2))){
var inst_33316 = (function (){var G__33365 = dctr;
var G__33366 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33365,G__33366) : cljs.core.reset_BANG_.call(null,G__33365,G__33366));
})();
var inst_33317 = (0);
var state_33353__$1 = (function (){var statearr_33367 = state_33353;
(statearr_33367[(7)] = inst_33317);

(statearr_33367[(9)] = inst_33316);

return statearr_33367;
})();
var statearr_33368_33397 = state_33353__$1;
(statearr_33368_33397[(2)] = null);

(statearr_33368_33397[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (11))){
var inst_33317 = (state_33353[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33353,(10),Object,null,(9));
var inst_33326 = (function (){var G__33369 = inst_33317;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33369) : chs__$1.call(null,G__33369));
})();
var inst_33327 = (function (){var G__33370 = inst_33317;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33370) : done.call(null,G__33370));
})();
var inst_33328 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33326,inst_33327);
var state_33353__$1 = state_33353;
var statearr_33371_33398 = state_33353__$1;
(statearr_33371_33398[(2)] = inst_33328);


cljs.core.async.impl.ioc_helpers.process_exception(state_33353__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (9))){
var inst_33317 = (state_33353[(7)]);
var inst_33330 = (state_33353[(2)]);
var inst_33331 = (inst_33317 + (1));
var inst_33317__$1 = inst_33331;
var state_33353__$1 = (function (){var statearr_33372 = state_33353;
(statearr_33372[(7)] = inst_33317__$1);

(statearr_33372[(10)] = inst_33330);

return statearr_33372;
})();
var statearr_33373_33399 = state_33353__$1;
(statearr_33373_33399[(2)] = null);

(statearr_33373_33399[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (5))){
var inst_33337 = (state_33353[(2)]);
var state_33353__$1 = (function (){var statearr_33374 = state_33353;
(statearr_33374[(11)] = inst_33337);

return statearr_33374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33353__$1,(12),dchan);
} else {
if((state_val_33354 === (14))){
var inst_33339 = (state_33353[(8)]);
var inst_33344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33339);
var state_33353__$1 = state_33353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33353__$1,(16),out,inst_33344);
} else {
if((state_val_33354 === (16))){
var inst_33346 = (state_33353[(2)]);
var state_33353__$1 = (function (){var statearr_33375 = state_33353;
(statearr_33375[(12)] = inst_33346);

return statearr_33375;
})();
var statearr_33376_33400 = state_33353__$1;
(statearr_33376_33400[(2)] = null);

(statearr_33376_33400[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (10))){
var inst_33321 = (state_33353[(2)]);
var inst_33322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33353__$1 = (function (){var statearr_33377 = state_33353;
(statearr_33377[(13)] = inst_33321);

return statearr_33377;
})();
var statearr_33378_33401 = state_33353__$1;
(statearr_33378_33401[(2)] = inst_33322);


cljs.core.async.impl.ioc_helpers.process_exception(state_33353__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_33354 === (8))){
var inst_33335 = (state_33353[(2)]);
var state_33353__$1 = state_33353;
var statearr_33379_33402 = state_33353__$1;
(statearr_33379_33402[(2)] = inst_33335);

(statearr_33379_33402[(1)] = (5));


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
});})(c__16216__auto___33387,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16136__auto__,c__16216__auto___33387,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33383[(0)] = state_machine__16137__auto__);

(statearr_33383[(1)] = (1));

return statearr_33383;
});
var state_machine__16137__auto____1 = (function (state_33353){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33353);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33384){if((e33384 instanceof Object)){
var ex__16140__auto__ = e33384;
var statearr_33385_33403 = state_33353;
(statearr_33385_33403[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33353);

return cljs.core.constant$keyword$97;
} else {
throw e33384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33404 = state_33353;
state_33353 = G__33404;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33353){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33387,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16218__auto__ = (function (){var statearr_33386 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33387);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33387,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16216__auto___33514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33514,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33514,out){
return (function (state_33490){
var state_val_33491 = (state_33490[(1)]);
if((state_val_33491 === (7))){
var inst_33469 = (state_33490[(7)]);
var inst_33470 = (state_33490[(8)]);
var inst_33469__$1 = (state_33490[(2)]);
var inst_33470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33469__$1,(0),null);
var inst_33471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33469__$1,(1),null);
var inst_33472 = (inst_33470__$1 == null);
var state_33490__$1 = (function (){var statearr_33492 = state_33490;
(statearr_33492[(7)] = inst_33469__$1);

(statearr_33492[(9)] = inst_33471);

(statearr_33492[(8)] = inst_33470__$1);

return statearr_33492;
})();
if(cljs.core.truth_(inst_33472)){
var statearr_33493_33515 = state_33490__$1;
(statearr_33493_33515[(1)] = (8));

} else {
var statearr_33494_33516 = state_33490__$1;
(statearr_33494_33516[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (1))){
var inst_33461 = cljs.core.vec(chs);
var inst_33462 = inst_33461;
var state_33490__$1 = (function (){var statearr_33495 = state_33490;
(statearr_33495[(10)] = inst_33462);

return statearr_33495;
})();
var statearr_33496_33517 = state_33490__$1;
(statearr_33496_33517[(2)] = null);

(statearr_33496_33517[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (4))){
var inst_33462 = (state_33490[(10)]);
var state_33490__$1 = state_33490;
return cljs.core.async.ioc_alts_BANG_(state_33490__$1,(7),inst_33462);
} else {
if((state_val_33491 === (6))){
var inst_33486 = (state_33490[(2)]);
var state_33490__$1 = state_33490;
var statearr_33497_33518 = state_33490__$1;
(statearr_33497_33518[(2)] = inst_33486);

(statearr_33497_33518[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (3))){
var inst_33488 = (state_33490[(2)]);
var state_33490__$1 = state_33490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33490__$1,inst_33488);
} else {
if((state_val_33491 === (2))){
var inst_33462 = (state_33490[(10)]);
var inst_33464 = cljs.core.count(inst_33462);
var inst_33465 = (inst_33464 > (0));
var state_33490__$1 = state_33490;
if(cljs.core.truth_(inst_33465)){
var statearr_33499_33519 = state_33490__$1;
(statearr_33499_33519[(1)] = (4));

} else {
var statearr_33500_33520 = state_33490__$1;
(statearr_33500_33520[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (11))){
var inst_33462 = (state_33490[(10)]);
var inst_33479 = (state_33490[(2)]);
var tmp33498 = inst_33462;
var inst_33462__$1 = tmp33498;
var state_33490__$1 = (function (){var statearr_33501 = state_33490;
(statearr_33501[(11)] = inst_33479);

(statearr_33501[(10)] = inst_33462__$1);

return statearr_33501;
})();
var statearr_33502_33521 = state_33490__$1;
(statearr_33502_33521[(2)] = null);

(statearr_33502_33521[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (9))){
var inst_33470 = (state_33490[(8)]);
var state_33490__$1 = state_33490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33490__$1,(11),out,inst_33470);
} else {
if((state_val_33491 === (5))){
var inst_33484 = cljs.core.async.close_BANG_(out);
var state_33490__$1 = state_33490;
var statearr_33503_33522 = state_33490__$1;
(statearr_33503_33522[(2)] = inst_33484);

(statearr_33503_33522[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (10))){
var inst_33482 = (state_33490[(2)]);
var state_33490__$1 = state_33490;
var statearr_33504_33523 = state_33490__$1;
(statearr_33504_33523[(2)] = inst_33482);

(statearr_33504_33523[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33491 === (8))){
var inst_33469 = (state_33490[(7)]);
var inst_33471 = (state_33490[(9)]);
var inst_33470 = (state_33490[(8)]);
var inst_33462 = (state_33490[(10)]);
var inst_33474 = (function (){var c = inst_33471;
var v = inst_33470;
var vec__33467 = inst_33469;
var cs = inst_33462;
return ((function (c,v,vec__33467,cs,inst_33469,inst_33471,inst_33470,inst_33462,state_val_33491,c__16216__auto___33514,out){
return (function (p1__33405_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33405_SHARP_);
});
;})(c,v,vec__33467,cs,inst_33469,inst_33471,inst_33470,inst_33462,state_val_33491,c__16216__auto___33514,out))
})();
var inst_33475 = cljs.core.filterv(inst_33474,inst_33462);
var inst_33462__$1 = inst_33475;
var state_33490__$1 = (function (){var statearr_33505 = state_33490;
(statearr_33505[(10)] = inst_33462__$1);

return statearr_33505;
})();
var statearr_33506_33524 = state_33490__$1;
(statearr_33506_33524[(2)] = null);

(statearr_33506_33524[(1)] = (2));


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
});})(c__16216__auto___33514,out))
;
return ((function (switch__16136__auto__,c__16216__auto___33514,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33510[(0)] = state_machine__16137__auto__);

(statearr_33510[(1)] = (1));

return statearr_33510;
});
var state_machine__16137__auto____1 = (function (state_33490){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33490);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33511){if((e33511 instanceof Object)){
var ex__16140__auto__ = e33511;
var statearr_33512_33525 = state_33490;
(statearr_33512_33525[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33490);

return cljs.core.constant$keyword$97;
} else {
throw e33511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33526 = state_33490;
state_33490 = G__33526;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33490){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33514,out))
})();
var state__16218__auto__ = (function (){var statearr_33513 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33514);

return statearr_33513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33514,out))
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
var c__16216__auto___33622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33622,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33622,out){
return (function (state_33599){
var state_val_33600 = (state_33599[(1)]);
if((state_val_33600 === (7))){
var inst_33581 = (state_33599[(7)]);
var inst_33581__$1 = (state_33599[(2)]);
var inst_33582 = (inst_33581__$1 == null);
var inst_33583 = cljs.core.not(inst_33582);
var state_33599__$1 = (function (){var statearr_33601 = state_33599;
(statearr_33601[(7)] = inst_33581__$1);

return statearr_33601;
})();
if(inst_33583){
var statearr_33602_33623 = state_33599__$1;
(statearr_33602_33623[(1)] = (8));

} else {
var statearr_33603_33624 = state_33599__$1;
(statearr_33603_33624[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (1))){
var inst_33576 = (0);
var state_33599__$1 = (function (){var statearr_33604 = state_33599;
(statearr_33604[(8)] = inst_33576);

return statearr_33604;
})();
var statearr_33605_33625 = state_33599__$1;
(statearr_33605_33625[(2)] = null);

(statearr_33605_33625[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (4))){
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33599__$1,(7),ch);
} else {
if((state_val_33600 === (6))){
var inst_33594 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33606_33626 = state_33599__$1;
(statearr_33606_33626[(2)] = inst_33594);

(statearr_33606_33626[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (3))){
var inst_33596 = (state_33599[(2)]);
var inst_33597 = cljs.core.async.close_BANG_(out);
var state_33599__$1 = (function (){var statearr_33607 = state_33599;
(statearr_33607[(9)] = inst_33596);

return statearr_33607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33599__$1,inst_33597);
} else {
if((state_val_33600 === (2))){
var inst_33576 = (state_33599[(8)]);
var inst_33578 = (inst_33576 < n);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33578)){
var statearr_33608_33627 = state_33599__$1;
(statearr_33608_33627[(1)] = (4));

} else {
var statearr_33609_33628 = state_33599__$1;
(statearr_33609_33628[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (11))){
var inst_33576 = (state_33599[(8)]);
var inst_33586 = (state_33599[(2)]);
var inst_33587 = (inst_33576 + (1));
var inst_33576__$1 = inst_33587;
var state_33599__$1 = (function (){var statearr_33610 = state_33599;
(statearr_33610[(8)] = inst_33576__$1);

(statearr_33610[(10)] = inst_33586);

return statearr_33610;
})();
var statearr_33611_33629 = state_33599__$1;
(statearr_33611_33629[(2)] = null);

(statearr_33611_33629[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (9))){
var state_33599__$1 = state_33599;
var statearr_33612_33630 = state_33599__$1;
(statearr_33612_33630[(2)] = null);

(statearr_33612_33630[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (5))){
var state_33599__$1 = state_33599;
var statearr_33613_33631 = state_33599__$1;
(statearr_33613_33631[(2)] = null);

(statearr_33613_33631[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (10))){
var inst_33591 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33614_33632 = state_33599__$1;
(statearr_33614_33632[(2)] = inst_33591);

(statearr_33614_33632[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33600 === (8))){
var inst_33581 = (state_33599[(7)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33599__$1,(11),out,inst_33581);
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
});})(c__16216__auto___33622,out))
;
return ((function (switch__16136__auto__,c__16216__auto___33622,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33618[(0)] = state_machine__16137__auto__);

(statearr_33618[(1)] = (1));

return statearr_33618;
});
var state_machine__16137__auto____1 = (function (state_33599){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33599);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33619){if((e33619 instanceof Object)){
var ex__16140__auto__ = e33619;
var statearr_33620_33633 = state_33599;
(statearr_33620_33633[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33599);

return cljs.core.constant$keyword$97;
} else {
throw e33619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33634 = state_33599;
state_33599 = G__33634;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33622,out))
})();
var state__16218__auto__ = (function (){var statearr_33621 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33622);

return statearr_33621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33622,out))
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
if(typeof cljs.core.async.t33647 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33647 = (function (ch,f,map_LT_,meta33648){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33648 = meta33648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t33650 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33650 = (function (fn1,_,meta33648,map_LT_,f,ch,meta33651){
this.fn1 = fn1;
this._ = _;
this.meta33648 = meta33648;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33651 = meta33651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33650.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t33650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33635_SHARP_){
var G__33653 = (((p1__33635_SHARP_ == null))?null:(function (){var G__33654 = p1__33635_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33654) : self__.f.call(null,G__33654));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33653) : f1.call(null,G__33653));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33652){
var self__ = this;
var _33652__$1 = this;
return self__.meta33651;
});})(___$1))
;

cljs.core.async.t33650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33652,meta33651__$1){
var self__ = this;
var _33652__$1 = this;
return (new cljs.core.async.t33650(self__.fn1,self__._,self__.meta33648,self__.map_LT_,self__.f,self__.ch,meta33651__$1));
});})(___$1))
;

cljs.core.async.t33650.cljs$lang$type = true;

cljs.core.async.t33650.cljs$lang$ctorStr = "cljs.core.async/t33650";

cljs.core.async.t33650.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33650");
});})(___$1))
;

cljs.core.async.__GT_t33650 = ((function (___$1){
return (function __GT_t33650(fn1__$1,___$2,meta33648__$1,map_LT___$1,f__$1,ch__$1,meta33651){
return (new cljs.core.async.t33650(fn1__$1,___$2,meta33648__$1,map_LT___$1,f__$1,ch__$1,meta33651));
});})(___$1))
;

}

return (new cljs.core.async.t33650(fn1,___$1,self__.meta33648,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !(((function (){var G__33655 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33655) : cljs.core.deref.call(null,G__33655));
})() == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33656 = (function (){var G__33657 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33657) : cljs.core.deref.call(null,G__33657));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33656) : self__.f.call(null,G__33656));
})());
} else {
return ret;
}
});

cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33647.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33649){
var self__ = this;
var _33649__$1 = this;
return self__.meta33648;
});

cljs.core.async.t33647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33649,meta33648__$1){
var self__ = this;
var _33649__$1 = this;
return (new cljs.core.async.t33647(self__.ch,self__.f,self__.map_LT_,meta33648__$1));
});

cljs.core.async.t33647.cljs$lang$type = true;

cljs.core.async.t33647.cljs$lang$ctorStr = "cljs.core.async/t33647";

cljs.core.async.t33647.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33647");
});

cljs.core.async.__GT_t33647 = (function __GT_t33647(ch__$1,f__$1,map_LT___$1,meta33648){
return (new cljs.core.async.t33647(ch__$1,f__$1,map_LT___$1,meta33648));
});

}

return (new cljs.core.async.t33647(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33662 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33662 = (function (ch,f,map_GT_,meta33663){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33663 = meta33663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33662.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__33665 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33665) : self__.f.call(null,G__33665));
})(),fn1);
});

cljs.core.async.t33662.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33662.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33664){
var self__ = this;
var _33664__$1 = this;
return self__.meta33663;
});

cljs.core.async.t33662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33664,meta33663__$1){
var self__ = this;
var _33664__$1 = this;
return (new cljs.core.async.t33662(self__.ch,self__.f,self__.map_GT_,meta33663__$1));
});

cljs.core.async.t33662.cljs$lang$type = true;

cljs.core.async.t33662.cljs$lang$ctorStr = "cljs.core.async/t33662";

cljs.core.async.t33662.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33662");
});

cljs.core.async.__GT_t33662 = (function __GT_t33662(ch__$1,f__$1,map_GT___$1,meta33663){
return (new cljs.core.async.t33662(ch__$1,f__$1,map_GT___$1,meta33663));
});

}

return (new cljs.core.async.t33662(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33670 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33670 = (function (ch,p,filter_GT_,meta33671){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33671 = meta33671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33673 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__33673) : self__.p.call(null,G__33673));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33672){
var self__ = this;
var _33672__$1 = this;
return self__.meta33671;
});

cljs.core.async.t33670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33672,meta33671__$1){
var self__ = this;
var _33672__$1 = this;
return (new cljs.core.async.t33670(self__.ch,self__.p,self__.filter_GT_,meta33671__$1));
});

cljs.core.async.t33670.cljs$lang$type = true;

cljs.core.async.t33670.cljs$lang$ctorStr = "cljs.core.async/t33670";

cljs.core.async.t33670.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33670");
});

cljs.core.async.__GT_t33670 = (function __GT_t33670(ch__$1,p__$1,filter_GT___$1,meta33671){
return (new cljs.core.async.t33670(ch__$1,p__$1,filter_GT___$1,meta33671));
});

}

return (new cljs.core.async.t33670(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16216__auto___33761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33761,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33761,out){
return (function (state_33739){
var state_val_33740 = (state_33739[(1)]);
if((state_val_33740 === (7))){
var inst_33735 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33741_33762 = state_33739__$1;
(statearr_33741_33762[(2)] = inst_33735);

(statearr_33741_33762[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (1))){
var state_33739__$1 = state_33739;
var statearr_33742_33763 = state_33739__$1;
(statearr_33742_33763[(2)] = null);

(statearr_33742_33763[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (4))){
var inst_33721 = (state_33739[(7)]);
var inst_33721__$1 = (state_33739[(2)]);
var inst_33722 = (inst_33721__$1 == null);
var state_33739__$1 = (function (){var statearr_33743 = state_33739;
(statearr_33743[(7)] = inst_33721__$1);

return statearr_33743;
})();
if(cljs.core.truth_(inst_33722)){
var statearr_33744_33764 = state_33739__$1;
(statearr_33744_33764[(1)] = (5));

} else {
var statearr_33745_33765 = state_33739__$1;
(statearr_33745_33765[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (6))){
var inst_33721 = (state_33739[(7)]);
var inst_33726 = (function (){var G__33746 = inst_33721;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__33746) : p.call(null,G__33746));
})();
var state_33739__$1 = state_33739;
if(cljs.core.truth_(inst_33726)){
var statearr_33747_33766 = state_33739__$1;
(statearr_33747_33766[(1)] = (8));

} else {
var statearr_33748_33767 = state_33739__$1;
(statearr_33748_33767[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (3))){
var inst_33737 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33739__$1,inst_33737);
} else {
if((state_val_33740 === (2))){
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33739__$1,(4),ch);
} else {
if((state_val_33740 === (11))){
var inst_33729 = (state_33739[(2)]);
var state_33739__$1 = state_33739;
var statearr_33749_33768 = state_33739__$1;
(statearr_33749_33768[(2)] = inst_33729);

(statearr_33749_33768[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (9))){
var state_33739__$1 = state_33739;
var statearr_33750_33769 = state_33739__$1;
(statearr_33750_33769[(2)] = null);

(statearr_33750_33769[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (5))){
var inst_33724 = cljs.core.async.close_BANG_(out);
var state_33739__$1 = state_33739;
var statearr_33751_33770 = state_33739__$1;
(statearr_33751_33770[(2)] = inst_33724);

(statearr_33751_33770[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (10))){
var inst_33732 = (state_33739[(2)]);
var state_33739__$1 = (function (){var statearr_33752 = state_33739;
(statearr_33752[(8)] = inst_33732);

return statearr_33752;
})();
var statearr_33753_33771 = state_33739__$1;
(statearr_33753_33771[(2)] = null);

(statearr_33753_33771[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33740 === (8))){
var inst_33721 = (state_33739[(7)]);
var state_33739__$1 = state_33739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33739__$1,(11),out,inst_33721);
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
});})(c__16216__auto___33761,out))
;
return ((function (switch__16136__auto__,c__16216__auto___33761,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33757 = [null,null,null,null,null,null,null,null,null];
(statearr_33757[(0)] = state_machine__16137__auto__);

(statearr_33757[(1)] = (1));

return statearr_33757;
});
var state_machine__16137__auto____1 = (function (state_33739){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33739);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33758){if((e33758 instanceof Object)){
var ex__16140__auto__ = e33758;
var statearr_33759_33772 = state_33739;
(statearr_33759_33772[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33739);

return cljs.core.constant$keyword$97;
} else {
throw e33758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33773 = state_33739;
state_33739 = G__33773;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33739){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33761,out))
})();
var state__16218__auto__ = (function (){var statearr_33760 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33761);

return statearr_33760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33761,out))
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
var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__){
return (function (state_33943){
var state_val_33944 = (state_33943[(1)]);
if((state_val_33944 === (7))){
var inst_33939 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33945_33987 = state_33943__$1;
(statearr_33945_33987[(2)] = inst_33939);

(statearr_33945_33987[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (20))){
var inst_33909 = (state_33943[(7)]);
var inst_33920 = (state_33943[(2)]);
var inst_33921 = cljs.core.next(inst_33909);
var inst_33895 = inst_33921;
var inst_33896 = null;
var inst_33897 = (0);
var inst_33898 = (0);
var state_33943__$1 = (function (){var statearr_33946 = state_33943;
(statearr_33946[(8)] = inst_33898);

(statearr_33946[(9)] = inst_33920);

(statearr_33946[(10)] = inst_33897);

(statearr_33946[(11)] = inst_33895);

(statearr_33946[(12)] = inst_33896);

return statearr_33946;
})();
var statearr_33947_33988 = state_33943__$1;
(statearr_33947_33988[(2)] = null);

(statearr_33947_33988[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (1))){
var state_33943__$1 = state_33943;
var statearr_33948_33989 = state_33943__$1;
(statearr_33948_33989[(2)] = null);

(statearr_33948_33989[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (4))){
var inst_33884 = (state_33943[(13)]);
var inst_33884__$1 = (state_33943[(2)]);
var inst_33885 = (inst_33884__$1 == null);
var state_33943__$1 = (function (){var statearr_33949 = state_33943;
(statearr_33949[(13)] = inst_33884__$1);

return statearr_33949;
})();
if(cljs.core.truth_(inst_33885)){
var statearr_33950_33990 = state_33943__$1;
(statearr_33950_33990[(1)] = (5));

} else {
var statearr_33951_33991 = state_33943__$1;
(statearr_33951_33991[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (15))){
var state_33943__$1 = state_33943;
var statearr_33955_33992 = state_33943__$1;
(statearr_33955_33992[(2)] = null);

(statearr_33955_33992[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (21))){
var state_33943__$1 = state_33943;
var statearr_33956_33993 = state_33943__$1;
(statearr_33956_33993[(2)] = null);

(statearr_33956_33993[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (13))){
var inst_33898 = (state_33943[(8)]);
var inst_33897 = (state_33943[(10)]);
var inst_33895 = (state_33943[(11)]);
var inst_33896 = (state_33943[(12)]);
var inst_33905 = (state_33943[(2)]);
var inst_33906 = (inst_33898 + (1));
var tmp33952 = inst_33897;
var tmp33953 = inst_33895;
var tmp33954 = inst_33896;
var inst_33895__$1 = tmp33953;
var inst_33896__$1 = tmp33954;
var inst_33897__$1 = tmp33952;
var inst_33898__$1 = inst_33906;
var state_33943__$1 = (function (){var statearr_33957 = state_33943;
(statearr_33957[(8)] = inst_33898__$1);

(statearr_33957[(10)] = inst_33897__$1);

(statearr_33957[(14)] = inst_33905);

(statearr_33957[(11)] = inst_33895__$1);

(statearr_33957[(12)] = inst_33896__$1);

return statearr_33957;
})();
var statearr_33958_33994 = state_33943__$1;
(statearr_33958_33994[(2)] = null);

(statearr_33958_33994[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (22))){
var state_33943__$1 = state_33943;
var statearr_33959_33995 = state_33943__$1;
(statearr_33959_33995[(2)] = null);

(statearr_33959_33995[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (6))){
var inst_33884 = (state_33943[(13)]);
var inst_33893 = (function (){var G__33960 = inst_33884;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33960) : f.call(null,G__33960));
})();
var inst_33894 = cljs.core.seq(inst_33893);
var inst_33895 = inst_33894;
var inst_33896 = null;
var inst_33897 = (0);
var inst_33898 = (0);
var state_33943__$1 = (function (){var statearr_33961 = state_33943;
(statearr_33961[(8)] = inst_33898);

(statearr_33961[(10)] = inst_33897);

(statearr_33961[(11)] = inst_33895);

(statearr_33961[(12)] = inst_33896);

return statearr_33961;
})();
var statearr_33962_33996 = state_33943__$1;
(statearr_33962_33996[(2)] = null);

(statearr_33962_33996[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (17))){
var inst_33909 = (state_33943[(7)]);
var inst_33913 = cljs.core.chunk_first(inst_33909);
var inst_33914 = cljs.core.chunk_rest(inst_33909);
var inst_33915 = cljs.core.count(inst_33913);
var inst_33895 = inst_33914;
var inst_33896 = inst_33913;
var inst_33897 = inst_33915;
var inst_33898 = (0);
var state_33943__$1 = (function (){var statearr_33963 = state_33943;
(statearr_33963[(8)] = inst_33898);

(statearr_33963[(10)] = inst_33897);

(statearr_33963[(11)] = inst_33895);

(statearr_33963[(12)] = inst_33896);

return statearr_33963;
})();
var statearr_33964_33997 = state_33943__$1;
(statearr_33964_33997[(2)] = null);

(statearr_33964_33997[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (3))){
var inst_33941 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33943__$1,inst_33941);
} else {
if((state_val_33944 === (12))){
var inst_33929 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33965_33998 = state_33943__$1;
(statearr_33965_33998[(2)] = inst_33929);

(statearr_33965_33998[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (2))){
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33943__$1,(4),in$);
} else {
if((state_val_33944 === (23))){
var inst_33937 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33966_33999 = state_33943__$1;
(statearr_33966_33999[(2)] = inst_33937);

(statearr_33966_33999[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (19))){
var inst_33924 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33967_34000 = state_33943__$1;
(statearr_33967_34000[(2)] = inst_33924);

(statearr_33967_34000[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (11))){
var inst_33909 = (state_33943[(7)]);
var inst_33895 = (state_33943[(11)]);
var inst_33909__$1 = cljs.core.seq(inst_33895);
var state_33943__$1 = (function (){var statearr_33968 = state_33943;
(statearr_33968[(7)] = inst_33909__$1);

return statearr_33968;
})();
if(inst_33909__$1){
var statearr_33969_34001 = state_33943__$1;
(statearr_33969_34001[(1)] = (14));

} else {
var statearr_33970_34002 = state_33943__$1;
(statearr_33970_34002[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (9))){
var inst_33931 = (state_33943[(2)]);
var inst_33932 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33943__$1 = (function (){var statearr_33971 = state_33943;
(statearr_33971[(15)] = inst_33931);

return statearr_33971;
})();
if(cljs.core.truth_(inst_33932)){
var statearr_33972_34003 = state_33943__$1;
(statearr_33972_34003[(1)] = (21));

} else {
var statearr_33973_34004 = state_33943__$1;
(statearr_33973_34004[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (5))){
var inst_33887 = cljs.core.async.close_BANG_(out);
var state_33943__$1 = state_33943;
var statearr_33974_34005 = state_33943__$1;
(statearr_33974_34005[(2)] = inst_33887);

(statearr_33974_34005[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (14))){
var inst_33909 = (state_33943[(7)]);
var inst_33911 = cljs.core.chunked_seq_QMARK_(inst_33909);
var state_33943__$1 = state_33943;
if(inst_33911){
var statearr_33975_34006 = state_33943__$1;
(statearr_33975_34006[(1)] = (17));

} else {
var statearr_33976_34007 = state_33943__$1;
(statearr_33976_34007[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (16))){
var inst_33927 = (state_33943[(2)]);
var state_33943__$1 = state_33943;
var statearr_33977_34008 = state_33943__$1;
(statearr_33977_34008[(2)] = inst_33927);

(statearr_33977_34008[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33944 === (10))){
var inst_33898 = (state_33943[(8)]);
var inst_33896 = (state_33943[(12)]);
var inst_33903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33896,inst_33898);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33943__$1,(13),out,inst_33903);
} else {
if((state_val_33944 === (18))){
var inst_33909 = (state_33943[(7)]);
var inst_33918 = cljs.core.first(inst_33909);
var state_33943__$1 = state_33943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33943__$1,(20),out,inst_33918);
} else {
if((state_val_33944 === (8))){
var inst_33898 = (state_33943[(8)]);
var inst_33897 = (state_33943[(10)]);
var inst_33900 = (inst_33898 < inst_33897);
var inst_33901 = inst_33900;
var state_33943__$1 = state_33943;
if(cljs.core.truth_(inst_33901)){
var statearr_33978_34009 = state_33943__$1;
(statearr_33978_34009[(1)] = (10));

} else {
var statearr_33979_34010 = state_33943__$1;
(statearr_33979_34010[(1)] = (11));

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
});})(c__16216__auto__))
;
return ((function (switch__16136__auto__,c__16216__auto__){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33983[(0)] = state_machine__16137__auto__);

(statearr_33983[(1)] = (1));

return statearr_33983;
});
var state_machine__16137__auto____1 = (function (state_33943){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33943);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33984){if((e33984 instanceof Object)){
var ex__16140__auto__ = e33984;
var statearr_33985_34011 = state_33943;
(statearr_33985_34011[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33943);

return cljs.core.constant$keyword$97;
} else {
throw e33984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34012 = state_33943;
state_33943 = G__34012;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33943){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_33986 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_33986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto__))
);

return c__16216__auto__;
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
var c__16216__auto___34117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___34117,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___34117,out){
return (function (state_34092){
var state_val_34093 = (state_34092[(1)]);
if((state_val_34093 === (7))){
var inst_34087 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34094_34118 = state_34092__$1;
(statearr_34094_34118[(2)] = inst_34087);

(statearr_34094_34118[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (1))){
var inst_34069 = null;
var state_34092__$1 = (function (){var statearr_34095 = state_34092;
(statearr_34095[(7)] = inst_34069);

return statearr_34095;
})();
var statearr_34096_34119 = state_34092__$1;
(statearr_34096_34119[(2)] = null);

(statearr_34096_34119[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (4))){
var inst_34072 = (state_34092[(8)]);
var inst_34072__$1 = (state_34092[(2)]);
var inst_34073 = (inst_34072__$1 == null);
var inst_34074 = cljs.core.not(inst_34073);
var state_34092__$1 = (function (){var statearr_34097 = state_34092;
(statearr_34097[(8)] = inst_34072__$1);

return statearr_34097;
})();
if(inst_34074){
var statearr_34098_34120 = state_34092__$1;
(statearr_34098_34120[(1)] = (5));

} else {
var statearr_34099_34121 = state_34092__$1;
(statearr_34099_34121[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (6))){
var state_34092__$1 = state_34092;
var statearr_34100_34122 = state_34092__$1;
(statearr_34100_34122[(2)] = null);

(statearr_34100_34122[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (3))){
var inst_34089 = (state_34092[(2)]);
var inst_34090 = cljs.core.async.close_BANG_(out);
var state_34092__$1 = (function (){var statearr_34101 = state_34092;
(statearr_34101[(9)] = inst_34089);

return statearr_34101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34092__$1,inst_34090);
} else {
if((state_val_34093 === (2))){
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34092__$1,(4),ch);
} else {
if((state_val_34093 === (11))){
var inst_34072 = (state_34092[(8)]);
var inst_34081 = (state_34092[(2)]);
var inst_34069 = inst_34072;
var state_34092__$1 = (function (){var statearr_34102 = state_34092;
(statearr_34102[(10)] = inst_34081);

(statearr_34102[(7)] = inst_34069);

return statearr_34102;
})();
var statearr_34103_34123 = state_34092__$1;
(statearr_34103_34123[(2)] = null);

(statearr_34103_34123[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (9))){
var inst_34072 = (state_34092[(8)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34092__$1,(11),out,inst_34072);
} else {
if((state_val_34093 === (5))){
var inst_34069 = (state_34092[(7)]);
var inst_34072 = (state_34092[(8)]);
var inst_34076 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34072,inst_34069);
var state_34092__$1 = state_34092;
if(inst_34076){
var statearr_34105_34124 = state_34092__$1;
(statearr_34105_34124[(1)] = (8));

} else {
var statearr_34106_34125 = state_34092__$1;
(statearr_34106_34125[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (10))){
var inst_34084 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34107_34126 = state_34092__$1;
(statearr_34107_34126[(2)] = inst_34084);

(statearr_34107_34126[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34093 === (8))){
var inst_34069 = (state_34092[(7)]);
var tmp34104 = inst_34069;
var inst_34069__$1 = tmp34104;
var state_34092__$1 = (function (){var statearr_34108 = state_34092;
(statearr_34108[(7)] = inst_34069__$1);

return statearr_34108;
})();
var statearr_34109_34127 = state_34092__$1;
(statearr_34109_34127[(2)] = null);

(statearr_34109_34127[(1)] = (2));


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
});})(c__16216__auto___34117,out))
;
return ((function (switch__16136__auto__,c__16216__auto___34117,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_34113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34113[(0)] = state_machine__16137__auto__);

(statearr_34113[(1)] = (1));

return statearr_34113;
});
var state_machine__16137__auto____1 = (function (state_34092){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_34092);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e34114){if((e34114 instanceof Object)){
var ex__16140__auto__ = e34114;
var statearr_34115_34128 = state_34092;
(statearr_34115_34128[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34092);

return cljs.core.constant$keyword$97;
} else {
throw e34114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34129 = state_34092;
state_34092 = G__34129;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_34092){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_34092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___34117,out))
})();
var state__16218__auto__ = (function (){var statearr_34116 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_34116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___34117);

return statearr_34116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___34117,out))
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
var c__16216__auto___34267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___34267,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___34267,out){
return (function (state_34237){
var state_val_34238 = (state_34237[(1)]);
if((state_val_34238 === (7))){
var inst_34233 = (state_34237[(2)]);
var state_34237__$1 = state_34237;
var statearr_34239_34268 = state_34237__$1;
(statearr_34239_34268[(2)] = inst_34233);

(statearr_34239_34268[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (1))){
var inst_34200 = (new Array(n));
var inst_34201 = inst_34200;
var inst_34202 = (0);
var state_34237__$1 = (function (){var statearr_34240 = state_34237;
(statearr_34240[(7)] = inst_34202);

(statearr_34240[(8)] = inst_34201);

return statearr_34240;
})();
var statearr_34241_34269 = state_34237__$1;
(statearr_34241_34269[(2)] = null);

(statearr_34241_34269[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (4))){
var inst_34205 = (state_34237[(9)]);
var inst_34205__$1 = (state_34237[(2)]);
var inst_34206 = (inst_34205__$1 == null);
var inst_34207 = cljs.core.not(inst_34206);
var state_34237__$1 = (function (){var statearr_34242 = state_34237;
(statearr_34242[(9)] = inst_34205__$1);

return statearr_34242;
})();
if(inst_34207){
var statearr_34243_34270 = state_34237__$1;
(statearr_34243_34270[(1)] = (5));

} else {
var statearr_34244_34271 = state_34237__$1;
(statearr_34244_34271[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (15))){
var inst_34227 = (state_34237[(2)]);
var state_34237__$1 = state_34237;
var statearr_34245_34272 = state_34237__$1;
(statearr_34245_34272[(2)] = inst_34227);

(statearr_34245_34272[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (13))){
var state_34237__$1 = state_34237;
var statearr_34246_34273 = state_34237__$1;
(statearr_34246_34273[(2)] = null);

(statearr_34246_34273[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (6))){
var inst_34202 = (state_34237[(7)]);
var inst_34223 = (inst_34202 > (0));
var state_34237__$1 = state_34237;
if(cljs.core.truth_(inst_34223)){
var statearr_34247_34274 = state_34237__$1;
(statearr_34247_34274[(1)] = (12));

} else {
var statearr_34248_34275 = state_34237__$1;
(statearr_34248_34275[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (3))){
var inst_34235 = (state_34237[(2)]);
var state_34237__$1 = state_34237;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34237__$1,inst_34235);
} else {
if((state_val_34238 === (12))){
var inst_34201 = (state_34237[(8)]);
var inst_34225 = cljs.core.vec(inst_34201);
var state_34237__$1 = state_34237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34237__$1,(15),out,inst_34225);
} else {
if((state_val_34238 === (2))){
var state_34237__$1 = state_34237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34237__$1,(4),ch);
} else {
if((state_val_34238 === (11))){
var inst_34217 = (state_34237[(2)]);
var inst_34218 = (new Array(n));
var inst_34201 = inst_34218;
var inst_34202 = (0);
var state_34237__$1 = (function (){var statearr_34249 = state_34237;
(statearr_34249[(7)] = inst_34202);

(statearr_34249[(8)] = inst_34201);

(statearr_34249[(10)] = inst_34217);

return statearr_34249;
})();
var statearr_34250_34276 = state_34237__$1;
(statearr_34250_34276[(2)] = null);

(statearr_34250_34276[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (9))){
var inst_34201 = (state_34237[(8)]);
var inst_34215 = cljs.core.vec(inst_34201);
var state_34237__$1 = state_34237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34237__$1,(11),out,inst_34215);
} else {
if((state_val_34238 === (5))){
var inst_34210 = (state_34237[(11)]);
var inst_34202 = (state_34237[(7)]);
var inst_34205 = (state_34237[(9)]);
var inst_34201 = (state_34237[(8)]);
var inst_34209 = (inst_34201[inst_34202] = inst_34205);
var inst_34210__$1 = (inst_34202 + (1));
var inst_34211 = (inst_34210__$1 < n);
var state_34237__$1 = (function (){var statearr_34251 = state_34237;
(statearr_34251[(11)] = inst_34210__$1);

(statearr_34251[(12)] = inst_34209);

return statearr_34251;
})();
if(cljs.core.truth_(inst_34211)){
var statearr_34252_34277 = state_34237__$1;
(statearr_34252_34277[(1)] = (8));

} else {
var statearr_34253_34278 = state_34237__$1;
(statearr_34253_34278[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (14))){
var inst_34230 = (state_34237[(2)]);
var inst_34231 = cljs.core.async.close_BANG_(out);
var state_34237__$1 = (function (){var statearr_34255 = state_34237;
(statearr_34255[(13)] = inst_34230);

return statearr_34255;
})();
var statearr_34256_34279 = state_34237__$1;
(statearr_34256_34279[(2)] = inst_34231);

(statearr_34256_34279[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (10))){
var inst_34221 = (state_34237[(2)]);
var state_34237__$1 = state_34237;
var statearr_34257_34280 = state_34237__$1;
(statearr_34257_34280[(2)] = inst_34221);

(statearr_34257_34280[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34238 === (8))){
var inst_34210 = (state_34237[(11)]);
var inst_34201 = (state_34237[(8)]);
var tmp34254 = inst_34201;
var inst_34201__$1 = tmp34254;
var inst_34202 = inst_34210;
var state_34237__$1 = (function (){var statearr_34258 = state_34237;
(statearr_34258[(7)] = inst_34202);

(statearr_34258[(8)] = inst_34201__$1);

return statearr_34258;
})();
var statearr_34259_34281 = state_34237__$1;
(statearr_34259_34281[(2)] = null);

(statearr_34259_34281[(1)] = (2));


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
});})(c__16216__auto___34267,out))
;
return ((function (switch__16136__auto__,c__16216__auto___34267,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_34263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34263[(0)] = state_machine__16137__auto__);

(statearr_34263[(1)] = (1));

return statearr_34263;
});
var state_machine__16137__auto____1 = (function (state_34237){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_34237);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e34264){if((e34264 instanceof Object)){
var ex__16140__auto__ = e34264;
var statearr_34265_34282 = state_34237;
(statearr_34265_34282[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34237);

return cljs.core.constant$keyword$97;
} else {
throw e34264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34283 = state_34237;
state_34237 = G__34283;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_34237){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_34237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___34267,out))
})();
var state__16218__auto__ = (function (){var statearr_34266 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_34266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___34267);

return statearr_34266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___34267,out))
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
var c__16216__auto___34431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___34431,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___34431,out){
return (function (state_34400){
var state_val_34401 = (state_34400[(1)]);
if((state_val_34401 === (7))){
var inst_34396 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34402_34432 = state_34400__$1;
(statearr_34402_34432[(2)] = inst_34396);

(statearr_34402_34432[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (1))){
var inst_34359 = [];
var inst_34360 = inst_34359;
var inst_34361 = cljs.core.constant$keyword$112;
var state_34400__$1 = (function (){var statearr_34403 = state_34400;
(statearr_34403[(7)] = inst_34360);

(statearr_34403[(8)] = inst_34361);

return statearr_34403;
})();
var statearr_34404_34433 = state_34400__$1;
(statearr_34404_34433[(2)] = null);

(statearr_34404_34433[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (4))){
var inst_34364 = (state_34400[(9)]);
var inst_34364__$1 = (state_34400[(2)]);
var inst_34365 = (inst_34364__$1 == null);
var inst_34366 = cljs.core.not(inst_34365);
var state_34400__$1 = (function (){var statearr_34405 = state_34400;
(statearr_34405[(9)] = inst_34364__$1);

return statearr_34405;
})();
if(inst_34366){
var statearr_34406_34434 = state_34400__$1;
(statearr_34406_34434[(1)] = (5));

} else {
var statearr_34407_34435 = state_34400__$1;
(statearr_34407_34435[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (15))){
var inst_34390 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34408_34436 = state_34400__$1;
(statearr_34408_34436[(2)] = inst_34390);

(statearr_34408_34436[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (13))){
var state_34400__$1 = state_34400;
var statearr_34409_34437 = state_34400__$1;
(statearr_34409_34437[(2)] = null);

(statearr_34409_34437[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (6))){
var inst_34360 = (state_34400[(7)]);
var inst_34385 = inst_34360.length;
var inst_34386 = (inst_34385 > (0));
var state_34400__$1 = state_34400;
if(cljs.core.truth_(inst_34386)){
var statearr_34410_34438 = state_34400__$1;
(statearr_34410_34438[(1)] = (12));

} else {
var statearr_34411_34439 = state_34400__$1;
(statearr_34411_34439[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (3))){
var inst_34398 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34400__$1,inst_34398);
} else {
if((state_val_34401 === (12))){
var inst_34360 = (state_34400[(7)]);
var inst_34388 = cljs.core.vec(inst_34360);
var state_34400__$1 = state_34400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34400__$1,(15),out,inst_34388);
} else {
if((state_val_34401 === (2))){
var state_34400__$1 = state_34400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34400__$1,(4),ch);
} else {
if((state_val_34401 === (11))){
var inst_34364 = (state_34400[(9)]);
var inst_34368 = (state_34400[(10)]);
var inst_34378 = (state_34400[(2)]);
var inst_34379 = [];
var inst_34380 = inst_34379.push(inst_34364);
var inst_34360 = inst_34379;
var inst_34361 = inst_34368;
var state_34400__$1 = (function (){var statearr_34412 = state_34400;
(statearr_34412[(11)] = inst_34380);

(statearr_34412[(7)] = inst_34360);

(statearr_34412[(8)] = inst_34361);

(statearr_34412[(12)] = inst_34378);

return statearr_34412;
})();
var statearr_34413_34440 = state_34400__$1;
(statearr_34413_34440[(2)] = null);

(statearr_34413_34440[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (9))){
var inst_34360 = (state_34400[(7)]);
var inst_34376 = cljs.core.vec(inst_34360);
var state_34400__$1 = state_34400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34400__$1,(11),out,inst_34376);
} else {
if((state_val_34401 === (5))){
var inst_34364 = (state_34400[(9)]);
var inst_34361 = (state_34400[(8)]);
var inst_34368 = (state_34400[(10)]);
var inst_34368__$1 = (function (){var G__34414 = inst_34364;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34414) : f.call(null,G__34414));
})();
var inst_34369 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34368__$1,inst_34361);
var inst_34370 = cljs.core.keyword_identical_QMARK_(inst_34361,cljs.core.constant$keyword$112);
var inst_34371 = (inst_34369) || (inst_34370);
var state_34400__$1 = (function (){var statearr_34415 = state_34400;
(statearr_34415[(10)] = inst_34368__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34371)){
var statearr_34416_34441 = state_34400__$1;
(statearr_34416_34441[(1)] = (8));

} else {
var statearr_34417_34442 = state_34400__$1;
(statearr_34417_34442[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (14))){
var inst_34393 = (state_34400[(2)]);
var inst_34394 = cljs.core.async.close_BANG_(out);
var state_34400__$1 = (function (){var statearr_34419 = state_34400;
(statearr_34419[(13)] = inst_34393);

return statearr_34419;
})();
var statearr_34420_34443 = state_34400__$1;
(statearr_34420_34443[(2)] = inst_34394);

(statearr_34420_34443[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (10))){
var inst_34383 = (state_34400[(2)]);
var state_34400__$1 = state_34400;
var statearr_34421_34444 = state_34400__$1;
(statearr_34421_34444[(2)] = inst_34383);

(statearr_34421_34444[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34401 === (8))){
var inst_34364 = (state_34400[(9)]);
var inst_34360 = (state_34400[(7)]);
var inst_34368 = (state_34400[(10)]);
var inst_34373 = inst_34360.push(inst_34364);
var tmp34418 = inst_34360;
var inst_34360__$1 = tmp34418;
var inst_34361 = inst_34368;
var state_34400__$1 = (function (){var statearr_34422 = state_34400;
(statearr_34422[(7)] = inst_34360__$1);

(statearr_34422[(8)] = inst_34361);

(statearr_34422[(14)] = inst_34373);

return statearr_34422;
})();
var statearr_34423_34445 = state_34400__$1;
(statearr_34423_34445[(2)] = null);

(statearr_34423_34445[(1)] = (2));


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
});})(c__16216__auto___34431,out))
;
return ((function (switch__16136__auto__,c__16216__auto___34431,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_34427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34427[(0)] = state_machine__16137__auto__);

(statearr_34427[(1)] = (1));

return statearr_34427;
});
var state_machine__16137__auto____1 = (function (state_34400){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_34400);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e34428){if((e34428 instanceof Object)){
var ex__16140__auto__ = e34428;
var statearr_34429_34446 = state_34400;
(statearr_34429_34446[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34400);

return cljs.core.constant$keyword$97;
} else {
throw e34428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34447 = state_34400;
state_34400 = G__34447;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_34400){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_34400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___34431,out))
})();
var state__16218__auto__ = (function (){var statearr_34430 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_34430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___34431);

return statearr_34430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___34431,out))
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
