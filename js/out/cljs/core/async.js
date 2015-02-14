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
if(typeof cljs.core.async.t31061 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31061 = (function (f,fn_handler,meta31062){
this.f = f;
this.fn_handler = fn_handler;
this.meta31062 = meta31062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31061.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31063){
var self__ = this;
var _31063__$1 = this;
return self__.meta31062;
});

cljs.core.async.t31061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31063,meta31062__$1){
var self__ = this;
var _31063__$1 = this;
return (new cljs.core.async.t31061(self__.f,self__.fn_handler,meta31062__$1));
});

cljs.core.async.t31061.cljs$lang$type = true;

cljs.core.async.t31061.cljs$lang$ctorStr = "cljs.core.async/t31061";

cljs.core.async.t31061.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31061");
});

cljs.core.async.__GT_t31061 = (function __GT_t31061(f__$1,fn_handler__$1,meta31062){
return (new cljs.core.async.t31061(f__$1,fn_handler__$1,meta31062));
});

}

return (new cljs.core.async.t31061(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31065 = buff;
if(G__31065){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__31065.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31065.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31065);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31065);
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
var val_31082 = (function (){var G__31079 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31079) : cljs.core.deref.call(null,G__31079));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31080_31083 = val_31082;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31080_31083) : fn1.call(null,G__31080_31083));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31082,ret){
return (function (){
var G__31081 = val_31082;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31081) : fn1.call(null,G__31081));
});})(val_31082,ret))
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
var G__31092 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31092) : cljs.core.deref.call(null,G__31092));
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
var ret = (function (){var G__31093 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31093) : cljs.core.deref.call(null,G__31093));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31094_31096 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31094_31096) : fn1.call(null,G__31094_31096));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__31095 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31095) : fn1.call(null,G__31095));
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
var n__4702__auto___31097 = n;
var x_31098 = (0);
while(true){
if((x_31098 < n__4702__auto___31097)){
(a[x_31098] = (0));

var G__31099 = (x_31098 + (1));
x_31098 = G__31099;
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

var G__31100 = (i + (1));
i = G__31100;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__31108 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31108) : cljs.core.atom.call(null,G__31108));
})();
if(typeof cljs.core.async.t31109 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31109 = (function (flag,alt_flag,meta31110){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31110 = meta31110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31109.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31112 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31112) : cljs.core.deref.call(null,G__31112));
});})(flag))
;

cljs.core.async.t31109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31113_31115 = self__.flag;
var G__31114_31116 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31113_31115,G__31114_31116) : cljs.core.reset_BANG_.call(null,G__31113_31115,G__31114_31116));

return true;
});})(flag))
;

cljs.core.async.t31109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31111){
var self__ = this;
var _31111__$1 = this;
return self__.meta31110;
});})(flag))
;

cljs.core.async.t31109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31111,meta31110__$1){
var self__ = this;
var _31111__$1 = this;
return (new cljs.core.async.t31109(self__.flag,self__.alt_flag,meta31110__$1));
});})(flag))
;

cljs.core.async.t31109.cljs$lang$type = true;

cljs.core.async.t31109.cljs$lang$ctorStr = "cljs.core.async/t31109";

cljs.core.async.t31109.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31109");
});})(flag))
;

cljs.core.async.__GT_t31109 = ((function (flag){
return (function __GT_t31109(flag__$1,alt_flag__$1,meta31110){
return (new cljs.core.async.t31109(flag__$1,alt_flag__$1,meta31110));
});})(flag))
;

}

return (new cljs.core.async.t31109(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31120 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31120 = (function (cb,flag,alt_handler,meta31121){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31121 = meta31121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31120.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31122){
var self__ = this;
var _31122__$1 = this;
return self__.meta31121;
});

cljs.core.async.t31120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31122,meta31121__$1){
var self__ = this;
var _31122__$1 = this;
return (new cljs.core.async.t31120(self__.cb,self__.flag,self__.alt_handler,meta31121__$1));
});

cljs.core.async.t31120.cljs$lang$type = true;

cljs.core.async.t31120.cljs$lang$ctorStr = "cljs.core.async/t31120";

cljs.core.async.t31120.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t31120");
});

cljs.core.async.__GT_t31120 = (function __GT_t31120(cb__$1,flag__$1,alt_handler__$1,meta31121){
return (new cljs.core.async.t31120(cb__$1,flag__$1,alt_handler__$1,meta31121));
});

}

return (new cljs.core.async.t31120(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31130 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31130) : port.call(null,G__31130));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31131 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31131) : port.call(null,G__31131));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31123_SHARP_){
var G__31132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31123_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31132) : fret.call(null,G__31132));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31124_SHARP_){
var G__31133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31124_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31133) : fret.call(null,G__31133));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31134 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31134) : cljs.core.deref.call(null,G__31134));
})(),(function (){var or__3815__auto__ = wport;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31135 = (i + (1));
i = G__31135;
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
var alts_BANG___delegate = function (ports,p__31136){
var map__31138 = p__31136;
var map__31138__$1 = ((cljs.core.seq_QMARK_(map__31138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31138):map__31138);
var opts = map__31138__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31136 = null;
if (arguments.length > 1) {
var G__31139__i = 0, G__31139__a = new Array(arguments.length -  1);
while (G__31139__i < G__31139__a.length) {G__31139__a[G__31139__i] = arguments[G__31139__i + 1]; ++G__31139__i;}
  p__31136 = new cljs.core.IndexedSeq(G__31139__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31136);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31140){
var ports = cljs.core.first(arglist__31140);
var p__31136 = cljs.core.rest(arglist__31140);
return alts_BANG___delegate(ports,p__31136);
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
var c__16216__auto___31238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31238){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31238){
return (function (state_31214){
var state_val_31215 = (state_31214[(1)]);
if((state_val_31215 === (7))){
var inst_31210 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31216_31239 = state_31214__$1;
(statearr_31216_31239[(2)] = inst_31210);

(statearr_31216_31239[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (1))){
var state_31214__$1 = state_31214;
var statearr_31217_31240 = state_31214__$1;
(statearr_31217_31240[(2)] = null);

(statearr_31217_31240[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (4))){
var inst_31193 = (state_31214[(7)]);
var inst_31193__$1 = (state_31214[(2)]);
var inst_31194 = (inst_31193__$1 == null);
var state_31214__$1 = (function (){var statearr_31218 = state_31214;
(statearr_31218[(7)] = inst_31193__$1);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31194)){
var statearr_31219_31241 = state_31214__$1;
(statearr_31219_31241[(1)] = (5));

} else {
var statearr_31220_31242 = state_31214__$1;
(statearr_31220_31242[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (13))){
var state_31214__$1 = state_31214;
var statearr_31221_31243 = state_31214__$1;
(statearr_31221_31243[(2)] = null);

(statearr_31221_31243[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (6))){
var inst_31193 = (state_31214[(7)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31214__$1,(11),to,inst_31193);
} else {
if((state_val_31215 === (3))){
var inst_31212 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31214__$1,inst_31212);
} else {
if((state_val_31215 === (12))){
var state_31214__$1 = state_31214;
var statearr_31222_31244 = state_31214__$1;
(statearr_31222_31244[(2)] = null);

(statearr_31222_31244[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (2))){
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31214__$1,(4),from);
} else {
if((state_val_31215 === (11))){
var inst_31203 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
if(cljs.core.truth_(inst_31203)){
var statearr_31223_31245 = state_31214__$1;
(statearr_31223_31245[(1)] = (12));

} else {
var statearr_31224_31246 = state_31214__$1;
(statearr_31224_31246[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (9))){
var state_31214__$1 = state_31214;
var statearr_31225_31247 = state_31214__$1;
(statearr_31225_31247[(2)] = null);

(statearr_31225_31247[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (5))){
var state_31214__$1 = state_31214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31226_31248 = state_31214__$1;
(statearr_31226_31248[(1)] = (8));

} else {
var statearr_31227_31249 = state_31214__$1;
(statearr_31227_31249[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (14))){
var inst_31208 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31228_31250 = state_31214__$1;
(statearr_31228_31250[(2)] = inst_31208);

(statearr_31228_31250[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (10))){
var inst_31200 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31229_31251 = state_31214__$1;
(statearr_31229_31251[(2)] = inst_31200);

(statearr_31229_31251[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31215 === (8))){
var inst_31197 = cljs.core.async.close_BANG_(to);
var state_31214__$1 = state_31214;
var statearr_31230_31252 = state_31214__$1;
(statearr_31230_31252[(2)] = inst_31197);

(statearr_31230_31252[(1)] = (10));


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
});})(c__16216__auto___31238))
;
return ((function (switch__16136__auto__,c__16216__auto___31238){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31234 = [null,null,null,null,null,null,null,null];
(statearr_31234[(0)] = state_machine__16137__auto__);

(statearr_31234[(1)] = (1));

return statearr_31234;
});
var state_machine__16137__auto____1 = (function (state_31214){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31214);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31235){if((e31235 instanceof Object)){
var ex__16140__auto__ = e31235;
var statearr_31236_31253 = state_31214;
(statearr_31236_31253[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31214);

return cljs.core.constant$keyword$97;
} else {
throw e31235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31254 = state_31214;
state_31214 = G__31254;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31238))
})();
var state__16218__auto__ = (function (){var statearr_31237 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31238);

return statearr_31237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31238))
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
return (function (p__31440){
var vec__31441 = p__31440;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31441,(1),null);
var job = vec__31441;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16216__auto___31625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31625,res,vec__31441,v,p,job,jobs,results){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31625,res,vec__31441,v,p,job,jobs,results){
return (function (state_31446){
var state_val_31447 = (state_31446[(1)]);
if((state_val_31447 === (2))){
var inst_31443 = (state_31446[(2)]);
var inst_31444 = cljs.core.async.close_BANG_(res);
var state_31446__$1 = (function (){var statearr_31448 = state_31446;
(statearr_31448[(7)] = inst_31443);

return statearr_31448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31446__$1,inst_31444);
} else {
if((state_val_31447 === (1))){
var state_31446__$1 = state_31446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31446__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16216__auto___31625,res,vec__31441,v,p,job,jobs,results))
;
return ((function (switch__16136__auto__,c__16216__auto___31625,res,vec__31441,v,p,job,jobs,results){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31452 = [null,null,null,null,null,null,null,null];
(statearr_31452[(0)] = state_machine__16137__auto__);

(statearr_31452[(1)] = (1));

return statearr_31452;
});
var state_machine__16137__auto____1 = (function (state_31446){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31446);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31453){if((e31453 instanceof Object)){
var ex__16140__auto__ = e31453;
var statearr_31454_31626 = state_31446;
(statearr_31454_31626[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31446);

return cljs.core.constant$keyword$97;
} else {
throw e31453;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31627 = state_31446;
state_31446 = G__31627;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31446){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31625,res,vec__31441,v,p,job,jobs,results))
})();
var state__16218__auto__ = (function (){var statearr_31455 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31625);

return statearr_31455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31625,res,vec__31441,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31456){
var vec__31457 = p__31456;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31457,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31457,(1),null);
var job = vec__31457;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__31458_31628 = v;
var G__31459_31629 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__31458_31628,G__31459_31629) : xf.call(null,G__31458_31628,G__31459_31629));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4702__auto___31630 = n;
var __31631 = (0);
while(true){
if((__31631 < n__4702__auto___31630)){
var G__31460_31632 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31460_31632) {
case "async":
var c__16216__auto___31634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31631,c__16216__auto___31634,G__31460_31632,n__4702__auto___31630,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (__31631,c__16216__auto___31634,G__31460_31632,n__4702__auto___31630,jobs,results,process,async){
return (function (state_31473){
var state_val_31474 = (state_31473[(1)]);
if((state_val_31474 === (7))){
var inst_31469 = (state_31473[(2)]);
var state_31473__$1 = state_31473;
var statearr_31475_31635 = state_31473__$1;
(statearr_31475_31635[(2)] = inst_31469);

(statearr_31475_31635[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31474 === (6))){
var state_31473__$1 = state_31473;
var statearr_31476_31636 = state_31473__$1;
(statearr_31476_31636[(2)] = null);

(statearr_31476_31636[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31474 === (5))){
var state_31473__$1 = state_31473;
var statearr_31477_31637 = state_31473__$1;
(statearr_31477_31637[(2)] = null);

(statearr_31477_31637[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31474 === (4))){
var inst_31463 = (state_31473[(2)]);
var inst_31464 = async(inst_31463);
var state_31473__$1 = state_31473;
if(cljs.core.truth_(inst_31464)){
var statearr_31478_31638 = state_31473__$1;
(statearr_31478_31638[(1)] = (5));

} else {
var statearr_31479_31639 = state_31473__$1;
(statearr_31479_31639[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31474 === (3))){
var inst_31471 = (state_31473[(2)]);
var state_31473__$1 = state_31473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31473__$1,inst_31471);
} else {
if((state_val_31474 === (2))){
var state_31473__$1 = state_31473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31473__$1,(4),jobs);
} else {
if((state_val_31474 === (1))){
var state_31473__$1 = state_31473;
var statearr_31480_31640 = state_31473__$1;
(statearr_31480_31640[(2)] = null);

(statearr_31480_31640[(1)] = (2));


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
});})(__31631,c__16216__auto___31634,G__31460_31632,n__4702__auto___31630,jobs,results,process,async))
;
return ((function (__31631,switch__16136__auto__,c__16216__auto___31634,G__31460_31632,n__4702__auto___31630,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null];
(statearr_31484[(0)] = state_machine__16137__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var state_machine__16137__auto____1 = (function (state_31473){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31473);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31485){if((e31485 instanceof Object)){
var ex__16140__auto__ = e31485;
var statearr_31486_31641 = state_31473;
(statearr_31486_31641[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31473);

return cljs.core.constant$keyword$97;
} else {
throw e31485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31642 = state_31473;
state_31473 = G__31642;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31473){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(__31631,switch__16136__auto__,c__16216__auto___31634,G__31460_31632,n__4702__auto___31630,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31487 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31634);

return statearr_31487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(__31631,c__16216__auto___31634,G__31460_31632,n__4702__auto___31630,jobs,results,process,async))
);


break;
case "compute":
var c__16216__auto___31643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31631,c__16216__auto___31643,G__31460_31632,n__4702__auto___31630,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (__31631,c__16216__auto___31643,G__31460_31632,n__4702__auto___31630,jobs,results,process,async){
return (function (state_31500){
var state_val_31501 = (state_31500[(1)]);
if((state_val_31501 === (7))){
var inst_31496 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
var statearr_31502_31644 = state_31500__$1;
(statearr_31502_31644[(2)] = inst_31496);

(statearr_31502_31644[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31501 === (6))){
var state_31500__$1 = state_31500;
var statearr_31503_31645 = state_31500__$1;
(statearr_31503_31645[(2)] = null);

(statearr_31503_31645[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31501 === (5))){
var state_31500__$1 = state_31500;
var statearr_31504_31646 = state_31500__$1;
(statearr_31504_31646[(2)] = null);

(statearr_31504_31646[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31501 === (4))){
var inst_31490 = (state_31500[(2)]);
var inst_31491 = process(inst_31490);
var state_31500__$1 = state_31500;
if(cljs.core.truth_(inst_31491)){
var statearr_31505_31647 = state_31500__$1;
(statearr_31505_31647[(1)] = (5));

} else {
var statearr_31506_31648 = state_31500__$1;
(statearr_31506_31648[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31501 === (3))){
var inst_31498 = (state_31500[(2)]);
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31500__$1,inst_31498);
} else {
if((state_val_31501 === (2))){
var state_31500__$1 = state_31500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31500__$1,(4),jobs);
} else {
if((state_val_31501 === (1))){
var state_31500__$1 = state_31500;
var statearr_31507_31649 = state_31500__$1;
(statearr_31507_31649[(2)] = null);

(statearr_31507_31649[(1)] = (2));


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
});})(__31631,c__16216__auto___31643,G__31460_31632,n__4702__auto___31630,jobs,results,process,async))
;
return ((function (__31631,switch__16136__auto__,c__16216__auto___31643,G__31460_31632,n__4702__auto___31630,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31511 = [null,null,null,null,null,null,null];
(statearr_31511[(0)] = state_machine__16137__auto__);

(statearr_31511[(1)] = (1));

return statearr_31511;
});
var state_machine__16137__auto____1 = (function (state_31500){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31500);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31512){if((e31512 instanceof Object)){
var ex__16140__auto__ = e31512;
var statearr_31513_31650 = state_31500;
(statearr_31513_31650[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31500);

return cljs.core.constant$keyword$97;
} else {
throw e31512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31651 = state_31500;
state_31500 = G__31651;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31500){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(__31631,switch__16136__auto__,c__16216__auto___31643,G__31460_31632,n__4702__auto___31630,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31514 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31643);

return statearr_31514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(__31631,c__16216__auto___31643,G__31460_31632,n__4702__auto___31630,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31652 = (__31631 + (1));
__31631 = G__31652;
continue;
} else {
}
break;
}

var c__16216__auto___31653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31653,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31653,jobs,results,process,async){
return (function (state_31536){
var state_val_31537 = (state_31536[(1)]);
if((state_val_31537 === (9))){
var inst_31529 = (state_31536[(2)]);
var state_31536__$1 = (function (){var statearr_31538 = state_31536;
(statearr_31538[(7)] = inst_31529);

return statearr_31538;
})();
var statearr_31539_31654 = state_31536__$1;
(statearr_31539_31654[(2)] = null);

(statearr_31539_31654[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31537 === (8))){
var inst_31522 = (state_31536[(8)]);
var inst_31527 = (state_31536[(2)]);
var state_31536__$1 = (function (){var statearr_31540 = state_31536;
(statearr_31540[(9)] = inst_31527);

return statearr_31540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31536__$1,(9),results,inst_31522);
} else {
if((state_val_31537 === (7))){
var inst_31532 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
var statearr_31541_31655 = state_31536__$1;
(statearr_31541_31655[(2)] = inst_31532);

(statearr_31541_31655[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31537 === (6))){
var inst_31522 = (state_31536[(8)]);
var inst_31517 = (state_31536[(10)]);
var inst_31522__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31524 = [inst_31517,inst_31522__$1];
var inst_31525 = (new cljs.core.PersistentVector(null,2,(5),inst_31523,inst_31524,null));
var state_31536__$1 = (function (){var statearr_31542 = state_31536;
(statearr_31542[(8)] = inst_31522__$1);

return statearr_31542;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31536__$1,(8),jobs,inst_31525);
} else {
if((state_val_31537 === (5))){
var inst_31520 = cljs.core.async.close_BANG_(jobs);
var state_31536__$1 = state_31536;
var statearr_31543_31656 = state_31536__$1;
(statearr_31543_31656[(2)] = inst_31520);

(statearr_31543_31656[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31537 === (4))){
var inst_31517 = (state_31536[(10)]);
var inst_31517__$1 = (state_31536[(2)]);
var inst_31518 = (inst_31517__$1 == null);
var state_31536__$1 = (function (){var statearr_31544 = state_31536;
(statearr_31544[(10)] = inst_31517__$1);

return statearr_31544;
})();
if(cljs.core.truth_(inst_31518)){
var statearr_31545_31657 = state_31536__$1;
(statearr_31545_31657[(1)] = (5));

} else {
var statearr_31546_31658 = state_31536__$1;
(statearr_31546_31658[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31537 === (3))){
var inst_31534 = (state_31536[(2)]);
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31536__$1,inst_31534);
} else {
if((state_val_31537 === (2))){
var state_31536__$1 = state_31536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31536__$1,(4),from);
} else {
if((state_val_31537 === (1))){
var state_31536__$1 = state_31536;
var statearr_31547_31659 = state_31536__$1;
(statearr_31547_31659[(2)] = null);

(statearr_31547_31659[(1)] = (2));


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
});})(c__16216__auto___31653,jobs,results,process,async))
;
return ((function (switch__16136__auto__,c__16216__auto___31653,jobs,results,process,async){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31551[(0)] = state_machine__16137__auto__);

(statearr_31551[(1)] = (1));

return statearr_31551;
});
var state_machine__16137__auto____1 = (function (state_31536){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31536);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31552){if((e31552 instanceof Object)){
var ex__16140__auto__ = e31552;
var statearr_31553_31660 = state_31536;
(statearr_31553_31660[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31536);

return cljs.core.constant$keyword$97;
} else {
throw e31552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31661 = state_31536;
state_31536 = G__31661;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31536){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31653,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31554 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31653);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31653,jobs,results,process,async))
);


var c__16216__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto__,jobs,results,process,async){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto__,jobs,results,process,async){
return (function (state_31592){
var state_val_31593 = (state_31592[(1)]);
if((state_val_31593 === (7))){
var inst_31588 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31594_31662 = state_31592__$1;
(statearr_31594_31662[(2)] = inst_31588);

(statearr_31594_31662[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (20))){
var state_31592__$1 = state_31592;
var statearr_31595_31663 = state_31592__$1;
(statearr_31595_31663[(2)] = null);

(statearr_31595_31663[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (1))){
var state_31592__$1 = state_31592;
var statearr_31596_31664 = state_31592__$1;
(statearr_31596_31664[(2)] = null);

(statearr_31596_31664[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (4))){
var inst_31557 = (state_31592[(7)]);
var inst_31557__$1 = (state_31592[(2)]);
var inst_31558 = (inst_31557__$1 == null);
var state_31592__$1 = (function (){var statearr_31597 = state_31592;
(statearr_31597[(7)] = inst_31557__$1);

return statearr_31597;
})();
if(cljs.core.truth_(inst_31558)){
var statearr_31598_31665 = state_31592__$1;
(statearr_31598_31665[(1)] = (5));

} else {
var statearr_31599_31666 = state_31592__$1;
(statearr_31599_31666[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (15))){
var inst_31570 = (state_31592[(8)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31592__$1,(18),to,inst_31570);
} else {
if((state_val_31593 === (21))){
var inst_31583 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31600_31667 = state_31592__$1;
(statearr_31600_31667[(2)] = inst_31583);

(statearr_31600_31667[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (13))){
var inst_31585 = (state_31592[(2)]);
var state_31592__$1 = (function (){var statearr_31601 = state_31592;
(statearr_31601[(9)] = inst_31585);

return statearr_31601;
})();
var statearr_31602_31668 = state_31592__$1;
(statearr_31602_31668[(2)] = null);

(statearr_31602_31668[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (6))){
var inst_31557 = (state_31592[(7)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31592__$1,(11),inst_31557);
} else {
if((state_val_31593 === (17))){
var inst_31578 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
if(cljs.core.truth_(inst_31578)){
var statearr_31603_31669 = state_31592__$1;
(statearr_31603_31669[(1)] = (19));

} else {
var statearr_31604_31670 = state_31592__$1;
(statearr_31604_31670[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (3))){
var inst_31590 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31592__$1,inst_31590);
} else {
if((state_val_31593 === (12))){
var inst_31567 = (state_31592[(10)]);
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31592__$1,(14),inst_31567);
} else {
if((state_val_31593 === (2))){
var state_31592__$1 = state_31592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31592__$1,(4),results);
} else {
if((state_val_31593 === (19))){
var state_31592__$1 = state_31592;
var statearr_31605_31671 = state_31592__$1;
(statearr_31605_31671[(2)] = null);

(statearr_31605_31671[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (11))){
var inst_31567 = (state_31592[(2)]);
var state_31592__$1 = (function (){var statearr_31606 = state_31592;
(statearr_31606[(10)] = inst_31567);

return statearr_31606;
})();
var statearr_31607_31672 = state_31592__$1;
(statearr_31607_31672[(2)] = null);

(statearr_31607_31672[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (9))){
var state_31592__$1 = state_31592;
var statearr_31608_31673 = state_31592__$1;
(statearr_31608_31673[(2)] = null);

(statearr_31608_31673[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (5))){
var state_31592__$1 = state_31592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31609_31674 = state_31592__$1;
(statearr_31609_31674[(1)] = (8));

} else {
var statearr_31610_31675 = state_31592__$1;
(statearr_31610_31675[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (14))){
var inst_31572 = (state_31592[(11)]);
var inst_31570 = (state_31592[(8)]);
var inst_31570__$1 = (state_31592[(2)]);
var inst_31571 = (inst_31570__$1 == null);
var inst_31572__$1 = cljs.core.not(inst_31571);
var state_31592__$1 = (function (){var statearr_31611 = state_31592;
(statearr_31611[(11)] = inst_31572__$1);

(statearr_31611[(8)] = inst_31570__$1);

return statearr_31611;
})();
if(inst_31572__$1){
var statearr_31612_31676 = state_31592__$1;
(statearr_31612_31676[(1)] = (15));

} else {
var statearr_31613_31677 = state_31592__$1;
(statearr_31613_31677[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (16))){
var inst_31572 = (state_31592[(11)]);
var state_31592__$1 = state_31592;
var statearr_31614_31678 = state_31592__$1;
(statearr_31614_31678[(2)] = inst_31572);

(statearr_31614_31678[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (10))){
var inst_31564 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31615_31679 = state_31592__$1;
(statearr_31615_31679[(2)] = inst_31564);

(statearr_31615_31679[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (18))){
var inst_31575 = (state_31592[(2)]);
var state_31592__$1 = state_31592;
var statearr_31616_31680 = state_31592__$1;
(statearr_31616_31680[(2)] = inst_31575);

(statearr_31616_31680[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31593 === (8))){
var inst_31561 = cljs.core.async.close_BANG_(to);
var state_31592__$1 = state_31592;
var statearr_31617_31681 = state_31592__$1;
(statearr_31617_31681[(2)] = inst_31561);

(statearr_31617_31681[(1)] = (10));


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
var statearr_31621 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31621[(0)] = state_machine__16137__auto__);

(statearr_31621[(1)] = (1));

return statearr_31621;
});
var state_machine__16137__auto____1 = (function (state_31592){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31592);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31622){if((e31622 instanceof Object)){
var ex__16140__auto__ = e31622;
var statearr_31623_31682 = state_31592;
(statearr_31623_31682[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31592);

return cljs.core.constant$keyword$97;
} else {
throw e31622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31683 = state_31592;
state_31592 = G__31683;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31592){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__,jobs,results,process,async))
})();
var state__16218__auto__ = (function (){var statearr_31624 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_31624;
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
var c__16216__auto___31806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___31806,tc,fc){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___31806,tc,fc){
return (function (state_31780){
var state_val_31781 = (state_31780[(1)]);
if((state_val_31781 === (7))){
var inst_31776 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31782_31807 = state_31780__$1;
(statearr_31782_31807[(2)] = inst_31776);

(statearr_31782_31807[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (1))){
var state_31780__$1 = state_31780;
var statearr_31783_31808 = state_31780__$1;
(statearr_31783_31808[(2)] = null);

(statearr_31783_31808[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (4))){
var inst_31757 = (state_31780[(7)]);
var inst_31757__$1 = (state_31780[(2)]);
var inst_31758 = (inst_31757__$1 == null);
var state_31780__$1 = (function (){var statearr_31784 = state_31780;
(statearr_31784[(7)] = inst_31757__$1);

return statearr_31784;
})();
if(cljs.core.truth_(inst_31758)){
var statearr_31785_31809 = state_31780__$1;
(statearr_31785_31809[(1)] = (5));

} else {
var statearr_31786_31810 = state_31780__$1;
(statearr_31786_31810[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (13))){
var state_31780__$1 = state_31780;
var statearr_31787_31811 = state_31780__$1;
(statearr_31787_31811[(2)] = null);

(statearr_31787_31811[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (6))){
var inst_31757 = (state_31780[(7)]);
var inst_31763 = (function (){var G__31788 = inst_31757;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__31788) : p.call(null,G__31788));
})();
var state_31780__$1 = state_31780;
if(cljs.core.truth_(inst_31763)){
var statearr_31789_31812 = state_31780__$1;
(statearr_31789_31812[(1)] = (9));

} else {
var statearr_31790_31813 = state_31780__$1;
(statearr_31790_31813[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (3))){
var inst_31778 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31780__$1,inst_31778);
} else {
if((state_val_31781 === (12))){
var state_31780__$1 = state_31780;
var statearr_31791_31814 = state_31780__$1;
(statearr_31791_31814[(2)] = null);

(statearr_31791_31814[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (2))){
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31780__$1,(4),ch);
} else {
if((state_val_31781 === (11))){
var inst_31757 = (state_31780[(7)]);
var inst_31767 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31780__$1,(8),inst_31767,inst_31757);
} else {
if((state_val_31781 === (9))){
var state_31780__$1 = state_31780;
var statearr_31792_31815 = state_31780__$1;
(statearr_31792_31815[(2)] = tc);

(statearr_31792_31815[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (5))){
var inst_31760 = cljs.core.async.close_BANG_(tc);
var inst_31761 = cljs.core.async.close_BANG_(fc);
var state_31780__$1 = (function (){var statearr_31793 = state_31780;
(statearr_31793[(8)] = inst_31760);

return statearr_31793;
})();
var statearr_31794_31816 = state_31780__$1;
(statearr_31794_31816[(2)] = inst_31761);

(statearr_31794_31816[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (14))){
var inst_31774 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31795_31817 = state_31780__$1;
(statearr_31795_31817[(2)] = inst_31774);

(statearr_31795_31817[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (10))){
var state_31780__$1 = state_31780;
var statearr_31796_31818 = state_31780__$1;
(statearr_31796_31818[(2)] = fc);

(statearr_31796_31818[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31781 === (8))){
var inst_31769 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
if(cljs.core.truth_(inst_31769)){
var statearr_31797_31819 = state_31780__$1;
(statearr_31797_31819[(1)] = (12));

} else {
var statearr_31798_31820 = state_31780__$1;
(statearr_31798_31820[(1)] = (13));

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
});})(c__16216__auto___31806,tc,fc))
;
return ((function (switch__16136__auto__,c__16216__auto___31806,tc,fc){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_31802 = [null,null,null,null,null,null,null,null,null];
(statearr_31802[(0)] = state_machine__16137__auto__);

(statearr_31802[(1)] = (1));

return statearr_31802;
});
var state_machine__16137__auto____1 = (function (state_31780){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31780);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31803){if((e31803 instanceof Object)){
var ex__16140__auto__ = e31803;
var statearr_31804_31821 = state_31780;
(statearr_31804_31821[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31780);

return cljs.core.constant$keyword$97;
} else {
throw e31803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31822 = state_31780;
state_31780 = G__31822;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31780){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___31806,tc,fc))
})();
var state__16218__auto__ = (function (){var statearr_31805 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___31806);

return statearr_31805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___31806,tc,fc))
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
return (function (state_31871){
var state_val_31872 = (state_31871[(1)]);
if((state_val_31872 === (7))){
var inst_31867 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
var statearr_31873_31891 = state_31871__$1;
(statearr_31873_31891[(2)] = inst_31867);

(statearr_31873_31891[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31872 === (6))){
var inst_31857 = (state_31871[(7)]);
var inst_31860 = (state_31871[(8)]);
var inst_31864 = (function (){var G__31874 = inst_31857;
var G__31875 = inst_31860;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31874,G__31875) : f.call(null,G__31874,G__31875));
})();
var inst_31857__$1 = inst_31864;
var state_31871__$1 = (function (){var statearr_31876 = state_31871;
(statearr_31876[(7)] = inst_31857__$1);

return statearr_31876;
})();
var statearr_31877_31892 = state_31871__$1;
(statearr_31877_31892[(2)] = null);

(statearr_31877_31892[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31872 === (5))){
var inst_31857 = (state_31871[(7)]);
var state_31871__$1 = state_31871;
var statearr_31878_31893 = state_31871__$1;
(statearr_31878_31893[(2)] = inst_31857);

(statearr_31878_31893[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31872 === (4))){
var inst_31860 = (state_31871[(8)]);
var inst_31860__$1 = (state_31871[(2)]);
var inst_31861 = (inst_31860__$1 == null);
var state_31871__$1 = (function (){var statearr_31879 = state_31871;
(statearr_31879[(8)] = inst_31860__$1);

return statearr_31879;
})();
if(cljs.core.truth_(inst_31861)){
var statearr_31880_31894 = state_31871__$1;
(statearr_31880_31894[(1)] = (5));

} else {
var statearr_31881_31895 = state_31871__$1;
(statearr_31881_31895[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31872 === (3))){
var inst_31869 = (state_31871[(2)]);
var state_31871__$1 = state_31871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31871__$1,inst_31869);
} else {
if((state_val_31872 === (2))){
var state_31871__$1 = state_31871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31871__$1,(4),ch);
} else {
if((state_val_31872 === (1))){
var inst_31857 = init;
var state_31871__$1 = (function (){var statearr_31882 = state_31871;
(statearr_31882[(7)] = inst_31857);

return statearr_31882;
})();
var statearr_31883_31896 = state_31871__$1;
(statearr_31883_31896[(2)] = null);

(statearr_31883_31896[(1)] = (2));


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
var statearr_31887 = [null,null,null,null,null,null,null,null,null];
(statearr_31887[(0)] = state_machine__16137__auto__);

(statearr_31887[(1)] = (1));

return statearr_31887;
});
var state_machine__16137__auto____1 = (function (state_31871){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31871);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31888){if((e31888 instanceof Object)){
var ex__16140__auto__ = e31888;
var statearr_31889_31897 = state_31871;
(statearr_31889_31897[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31871);

return cljs.core.constant$keyword$97;
} else {
throw e31888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__31898 = state_31871;
state_31871 = G__31898;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31871){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_31890 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_31890;
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
return (function (state_31975){
var state_val_31976 = (state_31975[(1)]);
if((state_val_31976 === (7))){
var inst_31957 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
var statearr_31977_32000 = state_31975__$1;
(statearr_31977_32000[(2)] = inst_31957);

(statearr_31977_32000[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (1))){
var inst_31951 = cljs.core.seq(coll);
var inst_31952 = inst_31951;
var state_31975__$1 = (function (){var statearr_31978 = state_31975;
(statearr_31978[(7)] = inst_31952);

return statearr_31978;
})();
var statearr_31979_32001 = state_31975__$1;
(statearr_31979_32001[(2)] = null);

(statearr_31979_32001[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (4))){
var inst_31952 = (state_31975[(7)]);
var inst_31955 = cljs.core.first(inst_31952);
var state_31975__$1 = state_31975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31975__$1,(7),ch,inst_31955);
} else {
if((state_val_31976 === (13))){
var inst_31969 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
var statearr_31980_32002 = state_31975__$1;
(statearr_31980_32002[(2)] = inst_31969);

(statearr_31980_32002[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (6))){
var inst_31960 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
if(cljs.core.truth_(inst_31960)){
var statearr_31981_32003 = state_31975__$1;
(statearr_31981_32003[(1)] = (8));

} else {
var statearr_31982_32004 = state_31975__$1;
(statearr_31982_32004[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (3))){
var inst_31973 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31975__$1,inst_31973);
} else {
if((state_val_31976 === (12))){
var state_31975__$1 = state_31975;
var statearr_31983_32005 = state_31975__$1;
(statearr_31983_32005[(2)] = null);

(statearr_31983_32005[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (2))){
var inst_31952 = (state_31975[(7)]);
var state_31975__$1 = state_31975;
if(cljs.core.truth_(inst_31952)){
var statearr_31984_32006 = state_31975__$1;
(statearr_31984_32006[(1)] = (4));

} else {
var statearr_31985_32007 = state_31975__$1;
(statearr_31985_32007[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (11))){
var inst_31966 = cljs.core.async.close_BANG_(ch);
var state_31975__$1 = state_31975;
var statearr_31986_32008 = state_31975__$1;
(statearr_31986_32008[(2)] = inst_31966);

(statearr_31986_32008[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (9))){
var state_31975__$1 = state_31975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31987_32009 = state_31975__$1;
(statearr_31987_32009[(1)] = (11));

} else {
var statearr_31988_32010 = state_31975__$1;
(statearr_31988_32010[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (5))){
var inst_31952 = (state_31975[(7)]);
var state_31975__$1 = state_31975;
var statearr_31989_32011 = state_31975__$1;
(statearr_31989_32011[(2)] = inst_31952);

(statearr_31989_32011[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (10))){
var inst_31971 = (state_31975[(2)]);
var state_31975__$1 = state_31975;
var statearr_31990_32012 = state_31975__$1;
(statearr_31990_32012[(2)] = inst_31971);

(statearr_31990_32012[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31976 === (8))){
var inst_31952 = (state_31975[(7)]);
var inst_31962 = cljs.core.next(inst_31952);
var inst_31952__$1 = inst_31962;
var state_31975__$1 = (function (){var statearr_31991 = state_31975;
(statearr_31991[(7)] = inst_31952__$1);

return statearr_31991;
})();
var statearr_31992_32013 = state_31975__$1;
(statearr_31992_32013[(2)] = null);

(statearr_31992_32013[(1)] = (2));


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
var statearr_31996 = [null,null,null,null,null,null,null,null];
(statearr_31996[(0)] = state_machine__16137__auto__);

(statearr_31996[(1)] = (1));

return statearr_31996;
});
var state_machine__16137__auto____1 = (function (state_31975){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_31975);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e31997){if((e31997 instanceof Object)){
var ex__16140__auto__ = e31997;
var statearr_31998_32014 = state_31975;
(statearr_31998_32014[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31975);

return cljs.core.constant$keyword$97;
} else {
throw e31997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__32015 = state_31975;
state_31975 = G__32015;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_31975){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_31975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_31999 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_31999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_31999;
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

cljs.core.async.Mux = (function (){var obj32017 = {};
return obj32017;
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
return (function (){var or__3815__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32021 = x__4459__auto__;
return goog.typeOf(G__32021);
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


cljs.core.async.Mult = (function (){var obj32023 = {};
return obj32023;
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
return (function (){var or__3815__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32027 = x__4459__auto__;
return goog.typeOf(G__32027);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32031 = x__4459__auto__;
return goog.typeOf(G__32031);
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
return (function (){var or__3815__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32035 = x__4459__auto__;
return goog.typeOf(G__32035);
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
var cs = (function (){var G__32265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32265) : cljs.core.atom.call(null,G__32265));
})();
var m = (function (){
if(typeof cljs.core.async.t32266 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32266 = (function (cs,ch,mult,meta32267){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32267 = meta32267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32266.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32266.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32266.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32266.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32269_32494 = self__.cs;
var G__32270_32495 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32269_32494,G__32270_32495) : cljs.core.reset_BANG_.call(null,G__32269_32494,G__32270_32495));

return null;
});})(cs))
;

cljs.core.async.t32266.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32268){
var self__ = this;
var _32268__$1 = this;
return self__.meta32267;
});})(cs))
;

cljs.core.async.t32266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32268,meta32267__$1){
var self__ = this;
var _32268__$1 = this;
return (new cljs.core.async.t32266(self__.cs,self__.ch,self__.mult,meta32267__$1));
});})(cs))
;

cljs.core.async.t32266.cljs$lang$type = true;

cljs.core.async.t32266.cljs$lang$ctorStr = "cljs.core.async/t32266";

cljs.core.async.t32266.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t32266");
});})(cs))
;

cljs.core.async.__GT_t32266 = ((function (cs){
return (function __GT_t32266(cs__$1,ch__$1,mult__$1,meta32267){
return (new cljs.core.async.t32266(cs__$1,ch__$1,mult__$1,meta32267));
});})(cs))
;

}

return (new cljs.core.async.t32266(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__32271 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32271) : cljs.core.atom.call(null,G__32271));
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
var c__16216__auto___32496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___32496,cs,m,dchan,dctr,done){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___32496,cs,m,dchan,dctr,done){
return (function (state_32402){
var state_val_32403 = (state_32402[(1)]);
if((state_val_32403 === (7))){
var inst_32398 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32404_32497 = state_32402__$1;
(statearr_32404_32497[(2)] = inst_32398);

(statearr_32404_32497[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (20))){
var inst_32303 = (state_32402[(7)]);
var inst_32313 = cljs.core.first(inst_32303);
var inst_32314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32313,(0),null);
var inst_32315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32313,(1),null);
var state_32402__$1 = (function (){var statearr_32405 = state_32402;
(statearr_32405[(8)] = inst_32314);

return statearr_32405;
})();
if(cljs.core.truth_(inst_32315)){
var statearr_32406_32498 = state_32402__$1;
(statearr_32406_32498[(1)] = (22));

} else {
var statearr_32407_32499 = state_32402__$1;
(statearr_32407_32499[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (27))){
var inst_32350 = (state_32402[(9)]);
var inst_32274 = (state_32402[(10)]);
var inst_32345 = (state_32402[(11)]);
var inst_32343 = (state_32402[(12)]);
var inst_32350__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32343,inst_32345);
var inst_32351 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32350__$1,inst_32274,done);
var state_32402__$1 = (function (){var statearr_32408 = state_32402;
(statearr_32408[(9)] = inst_32350__$1);

return statearr_32408;
})();
if(cljs.core.truth_(inst_32351)){
var statearr_32409_32500 = state_32402__$1;
(statearr_32409_32500[(1)] = (30));

} else {
var statearr_32410_32501 = state_32402__$1;
(statearr_32410_32501[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (1))){
var state_32402__$1 = state_32402;
var statearr_32411_32502 = state_32402__$1;
(statearr_32411_32502[(2)] = null);

(statearr_32411_32502[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (24))){
var inst_32303 = (state_32402[(7)]);
var inst_32320 = (state_32402[(2)]);
var inst_32321 = cljs.core.next(inst_32303);
var inst_32283 = inst_32321;
var inst_32284 = null;
var inst_32285 = (0);
var inst_32286 = (0);
var state_32402__$1 = (function (){var statearr_32412 = state_32402;
(statearr_32412[(13)] = inst_32320);

(statearr_32412[(14)] = inst_32283);

(statearr_32412[(15)] = inst_32284);

(statearr_32412[(16)] = inst_32286);

(statearr_32412[(17)] = inst_32285);

return statearr_32412;
})();
var statearr_32413_32503 = state_32402__$1;
(statearr_32413_32503[(2)] = null);

(statearr_32413_32503[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (39))){
var state_32402__$1 = state_32402;
var statearr_32417_32504 = state_32402__$1;
(statearr_32417_32504[(2)] = null);

(statearr_32417_32504[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (4))){
var inst_32274 = (state_32402[(10)]);
var inst_32274__$1 = (state_32402[(2)]);
var inst_32275 = (inst_32274__$1 == null);
var state_32402__$1 = (function (){var statearr_32418 = state_32402;
(statearr_32418[(10)] = inst_32274__$1);

return statearr_32418;
})();
if(cljs.core.truth_(inst_32275)){
var statearr_32419_32505 = state_32402__$1;
(statearr_32419_32505[(1)] = (5));

} else {
var statearr_32420_32506 = state_32402__$1;
(statearr_32420_32506[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (15))){
var inst_32283 = (state_32402[(14)]);
var inst_32284 = (state_32402[(15)]);
var inst_32286 = (state_32402[(16)]);
var inst_32285 = (state_32402[(17)]);
var inst_32299 = (state_32402[(2)]);
var inst_32300 = (inst_32286 + (1));
var tmp32414 = inst_32283;
var tmp32415 = inst_32284;
var tmp32416 = inst_32285;
var inst_32283__$1 = tmp32414;
var inst_32284__$1 = tmp32415;
var inst_32285__$1 = tmp32416;
var inst_32286__$1 = inst_32300;
var state_32402__$1 = (function (){var statearr_32421 = state_32402;
(statearr_32421[(18)] = inst_32299);

(statearr_32421[(14)] = inst_32283__$1);

(statearr_32421[(15)] = inst_32284__$1);

(statearr_32421[(16)] = inst_32286__$1);

(statearr_32421[(17)] = inst_32285__$1);

return statearr_32421;
})();
var statearr_32422_32507 = state_32402__$1;
(statearr_32422_32507[(2)] = null);

(statearr_32422_32507[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (21))){
var inst_32324 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32426_32508 = state_32402__$1;
(statearr_32426_32508[(2)] = inst_32324);

(statearr_32426_32508[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (31))){
var inst_32350 = (state_32402[(9)]);
var inst_32354 = done(null);
var inst_32355 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32350);
var state_32402__$1 = (function (){var statearr_32427 = state_32402;
(statearr_32427[(19)] = inst_32354);

return statearr_32427;
})();
var statearr_32428_32509 = state_32402__$1;
(statearr_32428_32509[(2)] = inst_32355);

(statearr_32428_32509[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (32))){
var inst_32344 = (state_32402[(20)]);
var inst_32345 = (state_32402[(11)]);
var inst_32343 = (state_32402[(12)]);
var inst_32342 = (state_32402[(21)]);
var inst_32357 = (state_32402[(2)]);
var inst_32358 = (inst_32345 + (1));
var tmp32423 = inst_32344;
var tmp32424 = inst_32343;
var tmp32425 = inst_32342;
var inst_32342__$1 = tmp32425;
var inst_32343__$1 = tmp32424;
var inst_32344__$1 = tmp32423;
var inst_32345__$1 = inst_32358;
var state_32402__$1 = (function (){var statearr_32429 = state_32402;
(statearr_32429[(22)] = inst_32357);

(statearr_32429[(20)] = inst_32344__$1);

(statearr_32429[(11)] = inst_32345__$1);

(statearr_32429[(12)] = inst_32343__$1);

(statearr_32429[(21)] = inst_32342__$1);

return statearr_32429;
})();
var statearr_32430_32510 = state_32402__$1;
(statearr_32430_32510[(2)] = null);

(statearr_32430_32510[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (40))){
var inst_32370 = (state_32402[(23)]);
var inst_32374 = done(null);
var inst_32375 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32370);
var state_32402__$1 = (function (){var statearr_32431 = state_32402;
(statearr_32431[(24)] = inst_32374);

return statearr_32431;
})();
var statearr_32432_32511 = state_32402__$1;
(statearr_32432_32511[(2)] = inst_32375);

(statearr_32432_32511[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (33))){
var inst_32361 = (state_32402[(25)]);
var inst_32363 = cljs.core.chunked_seq_QMARK_(inst_32361);
var state_32402__$1 = state_32402;
if(inst_32363){
var statearr_32433_32512 = state_32402__$1;
(statearr_32433_32512[(1)] = (36));

} else {
var statearr_32434_32513 = state_32402__$1;
(statearr_32434_32513[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (13))){
var inst_32293 = (state_32402[(26)]);
var inst_32296 = cljs.core.async.close_BANG_(inst_32293);
var state_32402__$1 = state_32402;
var statearr_32435_32514 = state_32402__$1;
(statearr_32435_32514[(2)] = inst_32296);

(statearr_32435_32514[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (22))){
var inst_32314 = (state_32402[(8)]);
var inst_32317 = cljs.core.async.close_BANG_(inst_32314);
var state_32402__$1 = state_32402;
var statearr_32436_32515 = state_32402__$1;
(statearr_32436_32515[(2)] = inst_32317);

(statearr_32436_32515[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (36))){
var inst_32361 = (state_32402[(25)]);
var inst_32365 = cljs.core.chunk_first(inst_32361);
var inst_32366 = cljs.core.chunk_rest(inst_32361);
var inst_32367 = cljs.core.count(inst_32365);
var inst_32342 = inst_32366;
var inst_32343 = inst_32365;
var inst_32344 = inst_32367;
var inst_32345 = (0);
var state_32402__$1 = (function (){var statearr_32437 = state_32402;
(statearr_32437[(20)] = inst_32344);

(statearr_32437[(11)] = inst_32345);

(statearr_32437[(12)] = inst_32343);

(statearr_32437[(21)] = inst_32342);

return statearr_32437;
})();
var statearr_32438_32516 = state_32402__$1;
(statearr_32438_32516[(2)] = null);

(statearr_32438_32516[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (41))){
var inst_32361 = (state_32402[(25)]);
var inst_32377 = (state_32402[(2)]);
var inst_32378 = cljs.core.next(inst_32361);
var inst_32342 = inst_32378;
var inst_32343 = null;
var inst_32344 = (0);
var inst_32345 = (0);
var state_32402__$1 = (function (){var statearr_32439 = state_32402;
(statearr_32439[(20)] = inst_32344);

(statearr_32439[(27)] = inst_32377);

(statearr_32439[(11)] = inst_32345);

(statearr_32439[(12)] = inst_32343);

(statearr_32439[(21)] = inst_32342);

return statearr_32439;
})();
var statearr_32440_32517 = state_32402__$1;
(statearr_32440_32517[(2)] = null);

(statearr_32440_32517[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (43))){
var state_32402__$1 = state_32402;
var statearr_32441_32518 = state_32402__$1;
(statearr_32441_32518[(2)] = null);

(statearr_32441_32518[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (29))){
var inst_32386 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32442_32519 = state_32402__$1;
(statearr_32442_32519[(2)] = inst_32386);

(statearr_32442_32519[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (44))){
var inst_32395 = (state_32402[(2)]);
var state_32402__$1 = (function (){var statearr_32443 = state_32402;
(statearr_32443[(28)] = inst_32395);

return statearr_32443;
})();
var statearr_32444_32520 = state_32402__$1;
(statearr_32444_32520[(2)] = null);

(statearr_32444_32520[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (6))){
var inst_32334 = (state_32402[(29)]);
var inst_32333 = (function (){var G__32445 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32445) : cljs.core.deref.call(null,G__32445));
})();
var inst_32334__$1 = cljs.core.keys(inst_32333);
var inst_32335 = cljs.core.count(inst_32334__$1);
var inst_32336 = (function (){var G__32446 = dctr;
var G__32447 = inst_32335;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32446,G__32447) : cljs.core.reset_BANG_.call(null,G__32446,G__32447));
})();
var inst_32341 = cljs.core.seq(inst_32334__$1);
var inst_32342 = inst_32341;
var inst_32343 = null;
var inst_32344 = (0);
var inst_32345 = (0);
var state_32402__$1 = (function (){var statearr_32448 = state_32402;
(statearr_32448[(20)] = inst_32344);

(statearr_32448[(11)] = inst_32345);

(statearr_32448[(12)] = inst_32343);

(statearr_32448[(30)] = inst_32336);

(statearr_32448[(29)] = inst_32334__$1);

(statearr_32448[(21)] = inst_32342);

return statearr_32448;
})();
var statearr_32449_32521 = state_32402__$1;
(statearr_32449_32521[(2)] = null);

(statearr_32449_32521[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (28))){
var inst_32361 = (state_32402[(25)]);
var inst_32342 = (state_32402[(21)]);
var inst_32361__$1 = cljs.core.seq(inst_32342);
var state_32402__$1 = (function (){var statearr_32450 = state_32402;
(statearr_32450[(25)] = inst_32361__$1);

return statearr_32450;
})();
if(inst_32361__$1){
var statearr_32451_32522 = state_32402__$1;
(statearr_32451_32522[(1)] = (33));

} else {
var statearr_32452_32523 = state_32402__$1;
(statearr_32452_32523[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (25))){
var inst_32344 = (state_32402[(20)]);
var inst_32345 = (state_32402[(11)]);
var inst_32347 = (inst_32345 < inst_32344);
var inst_32348 = inst_32347;
var state_32402__$1 = state_32402;
if(cljs.core.truth_(inst_32348)){
var statearr_32453_32524 = state_32402__$1;
(statearr_32453_32524[(1)] = (27));

} else {
var statearr_32454_32525 = state_32402__$1;
(statearr_32454_32525[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (34))){
var state_32402__$1 = state_32402;
var statearr_32455_32526 = state_32402__$1;
(statearr_32455_32526[(2)] = null);

(statearr_32455_32526[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (17))){
var state_32402__$1 = state_32402;
var statearr_32456_32527 = state_32402__$1;
(statearr_32456_32527[(2)] = null);

(statearr_32456_32527[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (3))){
var inst_32400 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32402__$1,inst_32400);
} else {
if((state_val_32403 === (12))){
var inst_32329 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32457_32528 = state_32402__$1;
(statearr_32457_32528[(2)] = inst_32329);

(statearr_32457_32528[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (2))){
var state_32402__$1 = state_32402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32402__$1,(4),ch);
} else {
if((state_val_32403 === (23))){
var state_32402__$1 = state_32402;
var statearr_32458_32529 = state_32402__$1;
(statearr_32458_32529[(2)] = null);

(statearr_32458_32529[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (35))){
var inst_32384 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32459_32530 = state_32402__$1;
(statearr_32459_32530[(2)] = inst_32384);

(statearr_32459_32530[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (19))){
var inst_32303 = (state_32402[(7)]);
var inst_32307 = cljs.core.chunk_first(inst_32303);
var inst_32308 = cljs.core.chunk_rest(inst_32303);
var inst_32309 = cljs.core.count(inst_32307);
var inst_32283 = inst_32308;
var inst_32284 = inst_32307;
var inst_32285 = inst_32309;
var inst_32286 = (0);
var state_32402__$1 = (function (){var statearr_32460 = state_32402;
(statearr_32460[(14)] = inst_32283);

(statearr_32460[(15)] = inst_32284);

(statearr_32460[(16)] = inst_32286);

(statearr_32460[(17)] = inst_32285);

return statearr_32460;
})();
var statearr_32461_32531 = state_32402__$1;
(statearr_32461_32531[(2)] = null);

(statearr_32461_32531[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (11))){
var inst_32283 = (state_32402[(14)]);
var inst_32303 = (state_32402[(7)]);
var inst_32303__$1 = cljs.core.seq(inst_32283);
var state_32402__$1 = (function (){var statearr_32462 = state_32402;
(statearr_32462[(7)] = inst_32303__$1);

return statearr_32462;
})();
if(inst_32303__$1){
var statearr_32463_32532 = state_32402__$1;
(statearr_32463_32532[(1)] = (16));

} else {
var statearr_32464_32533 = state_32402__$1;
(statearr_32464_32533[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (9))){
var inst_32331 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32465_32534 = state_32402__$1;
(statearr_32465_32534[(2)] = inst_32331);

(statearr_32465_32534[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (5))){
var inst_32281 = (function (){var G__32466 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32466) : cljs.core.deref.call(null,G__32466));
})();
var inst_32282 = cljs.core.seq(inst_32281);
var inst_32283 = inst_32282;
var inst_32284 = null;
var inst_32285 = (0);
var inst_32286 = (0);
var state_32402__$1 = (function (){var statearr_32467 = state_32402;
(statearr_32467[(14)] = inst_32283);

(statearr_32467[(15)] = inst_32284);

(statearr_32467[(16)] = inst_32286);

(statearr_32467[(17)] = inst_32285);

return statearr_32467;
})();
var statearr_32468_32535 = state_32402__$1;
(statearr_32468_32535[(2)] = null);

(statearr_32468_32535[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (14))){
var state_32402__$1 = state_32402;
var statearr_32469_32536 = state_32402__$1;
(statearr_32469_32536[(2)] = null);

(statearr_32469_32536[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (45))){
var inst_32392 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32470_32537 = state_32402__$1;
(statearr_32470_32537[(2)] = inst_32392);

(statearr_32470_32537[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (26))){
var inst_32334 = (state_32402[(29)]);
var inst_32388 = (state_32402[(2)]);
var inst_32389 = cljs.core.seq(inst_32334);
var state_32402__$1 = (function (){var statearr_32471 = state_32402;
(statearr_32471[(31)] = inst_32388);

return statearr_32471;
})();
if(inst_32389){
var statearr_32472_32538 = state_32402__$1;
(statearr_32472_32538[(1)] = (42));

} else {
var statearr_32473_32539 = state_32402__$1;
(statearr_32473_32539[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (16))){
var inst_32303 = (state_32402[(7)]);
var inst_32305 = cljs.core.chunked_seq_QMARK_(inst_32303);
var state_32402__$1 = state_32402;
if(inst_32305){
var statearr_32474_32540 = state_32402__$1;
(statearr_32474_32540[(1)] = (19));

} else {
var statearr_32475_32541 = state_32402__$1;
(statearr_32475_32541[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (38))){
var inst_32381 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32476_32542 = state_32402__$1;
(statearr_32476_32542[(2)] = inst_32381);

(statearr_32476_32542[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (30))){
var state_32402__$1 = state_32402;
var statearr_32477_32543 = state_32402__$1;
(statearr_32477_32543[(2)] = null);

(statearr_32477_32543[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (10))){
var inst_32284 = (state_32402[(15)]);
var inst_32286 = (state_32402[(16)]);
var inst_32292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32284,inst_32286);
var inst_32293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32292,(0),null);
var inst_32294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32292,(1),null);
var state_32402__$1 = (function (){var statearr_32478 = state_32402;
(statearr_32478[(26)] = inst_32293);

return statearr_32478;
})();
if(cljs.core.truth_(inst_32294)){
var statearr_32479_32544 = state_32402__$1;
(statearr_32479_32544[(1)] = (13));

} else {
var statearr_32480_32545 = state_32402__$1;
(statearr_32480_32545[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (18))){
var inst_32327 = (state_32402[(2)]);
var state_32402__$1 = state_32402;
var statearr_32481_32546 = state_32402__$1;
(statearr_32481_32546[(2)] = inst_32327);

(statearr_32481_32546[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (42))){
var state_32402__$1 = state_32402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32402__$1,(45),dchan);
} else {
if((state_val_32403 === (37))){
var inst_32370 = (state_32402[(23)]);
var inst_32274 = (state_32402[(10)]);
var inst_32361 = (state_32402[(25)]);
var inst_32370__$1 = cljs.core.first(inst_32361);
var inst_32371 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32370__$1,inst_32274,done);
var state_32402__$1 = (function (){var statearr_32482 = state_32402;
(statearr_32482[(23)] = inst_32370__$1);

return statearr_32482;
})();
if(cljs.core.truth_(inst_32371)){
var statearr_32483_32547 = state_32402__$1;
(statearr_32483_32547[(1)] = (39));

} else {
var statearr_32484_32548 = state_32402__$1;
(statearr_32484_32548[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32403 === (8))){
var inst_32286 = (state_32402[(16)]);
var inst_32285 = (state_32402[(17)]);
var inst_32288 = (inst_32286 < inst_32285);
var inst_32289 = inst_32288;
var state_32402__$1 = state_32402;
if(cljs.core.truth_(inst_32289)){
var statearr_32485_32549 = state_32402__$1;
(statearr_32485_32549[(1)] = (10));

} else {
var statearr_32486_32550 = state_32402__$1;
(statearr_32486_32550[(1)] = (11));

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
});})(c__16216__auto___32496,cs,m,dchan,dctr,done))
;
return ((function (switch__16136__auto__,c__16216__auto___32496,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_32490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32490[(0)] = state_machine__16137__auto__);

(statearr_32490[(1)] = (1));

return statearr_32490;
});
var state_machine__16137__auto____1 = (function (state_32402){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_32402);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e32491){if((e32491 instanceof Object)){
var ex__16140__auto__ = e32491;
var statearr_32492_32551 = state_32402;
(statearr_32492_32551[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32402);

return cljs.core.constant$keyword$97;
} else {
throw e32491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__32552 = state_32402;
state_32402 = G__32552;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_32402){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_32402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___32496,cs,m,dchan,dctr,done))
})();
var state__16218__auto__ = (function (){var statearr_32493 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_32493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___32496);

return statearr_32493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___32496,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32557 = {};
return obj32557;
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
return (function (){var or__3815__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__32561 = x__4459__auto__;
return goog.typeOf(G__32561);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__32565 = x__4459__auto__;
return goog.typeOf(G__32565);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__32569 = x__4459__auto__;
return goog.typeOf(G__32569);
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
return (function (){var or__3815__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__32573 = x__4459__auto__;
return goog.typeOf(G__32573);
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
return (function (){var or__3815__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__32577 = x__4459__auto__;
return goog.typeOf(G__32577);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32578){
var map__32584 = p__32578;
var map__32584__$1 = ((cljs.core.seq_QMARK_(map__32584))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32584):map__32584);
var opts = map__32584__$1;
var statearr_32585_32589 = state;
(statearr_32585_32589[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__32584,map__32584__$1,opts){
return (function (val){
var statearr_32586_32590 = state;
(statearr_32586_32590[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32584,map__32584__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32587_32591 = state;
(statearr_32587_32591[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__32588 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32588) : cljs.core.deref.call(null,G__32588));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32578 = null;
if (arguments.length > 3) {
var G__32592__i = 0, G__32592__a = new Array(arguments.length -  3);
while (G__32592__i < G__32592__a.length) {G__32592__a[G__32592__i] = arguments[G__32592__i + 3]; ++G__32592__i;}
  p__32578 = new cljs.core.IndexedSeq(G__32592__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32578);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32593){
var state = cljs.core.first(arglist__32593);
arglist__32593 = cljs.core.next(arglist__32593);
var cont_block = cljs.core.first(arglist__32593);
arglist__32593 = cljs.core.next(arglist__32593);
var ports = cljs.core.first(arglist__32593);
var p__32578 = cljs.core.rest(arglist__32593);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32578);
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
var cs = (function (){var G__32727 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32727) : cljs.core.atom.call(null,G__32727));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__32728 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32728) : cljs.core.atom.call(null,G__32728));
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
if(cljs.core.truth_((function (){var G__32729 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__32729) : attr.call(null,G__32729));
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
var chs = (function (){var G__32730 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32730) : cljs.core.deref.call(null,G__32730));
})();
var mode = (function (){var G__32731 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32731) : cljs.core.deref.call(null,G__32731));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32732 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32732 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32733){
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
this.meta32733 = meta32733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32732.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32732.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32735_32860 = self__.cs;
var G__32736_32861 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32735_32860,G__32736_32861) : cljs.core.reset_BANG_.call(null,G__32735_32860,G__32736_32861));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__32737 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__32737) : self__.solo_modes.call(null,G__32737));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__32738_32862 = self__.solo_mode;
var G__32739_32863 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32738_32862,G__32739_32863) : cljs.core.reset_BANG_.call(null,G__32738_32862,G__32739_32863));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32734){
var self__ = this;
var _32734__$1 = this;
return self__.meta32733;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32734,meta32733__$1){
var self__ = this;
var _32734__$1 = this;
return (new cljs.core.async.t32732(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32733__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32732.cljs$lang$type = true;

cljs.core.async.t32732.cljs$lang$ctorStr = "cljs.core.async/t32732";

cljs.core.async.t32732.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t32732");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32732 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32732(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32733){
return (new cljs.core.async.t32732(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32733));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32732(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16216__auto___32864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___32864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___32864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32811){
var state_val_32812 = (state_32811[(1)]);
if((state_val_32812 === (7))){
var inst_32753 = (state_32811[(7)]);
var inst_32758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32753);
var state_32811__$1 = state_32811;
var statearr_32813_32865 = state_32811__$1;
(statearr_32813_32865[(2)] = inst_32758);

(statearr_32813_32865[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (20))){
var inst_32768 = (state_32811[(8)]);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32811__$1,(23),out,inst_32768);
} else {
if((state_val_32812 === (1))){
var inst_32743 = (state_32811[(9)]);
var inst_32743__$1 = calc_state();
var inst_32744 = cljs.core.seq_QMARK_(inst_32743__$1);
var state_32811__$1 = (function (){var statearr_32814 = state_32811;
(statearr_32814[(9)] = inst_32743__$1);

return statearr_32814;
})();
if(inst_32744){
var statearr_32815_32866 = state_32811__$1;
(statearr_32815_32866[(1)] = (2));

} else {
var statearr_32816_32867 = state_32811__$1;
(statearr_32816_32867[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (24))){
var inst_32761 = (state_32811[(10)]);
var inst_32753 = inst_32761;
var state_32811__$1 = (function (){var statearr_32817 = state_32811;
(statearr_32817[(7)] = inst_32753);

return statearr_32817;
})();
var statearr_32818_32868 = state_32811__$1;
(statearr_32818_32868[(2)] = null);

(statearr_32818_32868[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (4))){
var inst_32743 = (state_32811[(9)]);
var inst_32749 = (state_32811[(2)]);
var inst_32750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32749,cljs.core.constant$keyword$111);
var inst_32751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32749,cljs.core.constant$keyword$110);
var inst_32752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32749,cljs.core.constant$keyword$109);
var inst_32753 = inst_32743;
var state_32811__$1 = (function (){var statearr_32819 = state_32811;
(statearr_32819[(11)] = inst_32750);

(statearr_32819[(12)] = inst_32751);

(statearr_32819[(7)] = inst_32753);

(statearr_32819[(13)] = inst_32752);

return statearr_32819;
})();
var statearr_32820_32869 = state_32811__$1;
(statearr_32820_32869[(2)] = null);

(statearr_32820_32869[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (15))){
var state_32811__$1 = state_32811;
var statearr_32821_32870 = state_32811__$1;
(statearr_32821_32870[(2)] = null);

(statearr_32821_32870[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (21))){
var inst_32761 = (state_32811[(10)]);
var inst_32753 = inst_32761;
var state_32811__$1 = (function (){var statearr_32822 = state_32811;
(statearr_32822[(7)] = inst_32753);

return statearr_32822;
})();
var statearr_32823_32871 = state_32811__$1;
(statearr_32823_32871[(2)] = null);

(statearr_32823_32871[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (13))){
var inst_32807 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32824_32872 = state_32811__$1;
(statearr_32824_32872[(2)] = inst_32807);

(statearr_32824_32872[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (22))){
var inst_32805 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32825_32873 = state_32811__$1;
(statearr_32825_32873[(2)] = inst_32805);

(statearr_32825_32873[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (6))){
var inst_32809 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32811__$1,inst_32809);
} else {
if((state_val_32812 === (25))){
var state_32811__$1 = state_32811;
var statearr_32826_32874 = state_32811__$1;
(statearr_32826_32874[(2)] = null);

(statearr_32826_32874[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (17))){
var inst_32784 = (state_32811[(14)]);
var state_32811__$1 = state_32811;
var statearr_32827_32875 = state_32811__$1;
(statearr_32827_32875[(2)] = inst_32784);

(statearr_32827_32875[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (3))){
var inst_32743 = (state_32811[(9)]);
var state_32811__$1 = state_32811;
var statearr_32828_32876 = state_32811__$1;
(statearr_32828_32876[(2)] = inst_32743);

(statearr_32828_32876[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (12))){
var inst_32769 = (state_32811[(15)]);
var inst_32784 = (state_32811[(14)]);
var inst_32764 = (state_32811[(16)]);
var inst_32784__$1 = (function (){var G__32829 = inst_32769;
return (inst_32764.cljs$core$IFn$_invoke$arity$1 ? inst_32764.cljs$core$IFn$_invoke$arity$1(G__32829) : inst_32764.call(null,G__32829));
})();
var state_32811__$1 = (function (){var statearr_32830 = state_32811;
(statearr_32830[(14)] = inst_32784__$1);

return statearr_32830;
})();
if(cljs.core.truth_(inst_32784__$1)){
var statearr_32831_32877 = state_32811__$1;
(statearr_32831_32877[(1)] = (17));

} else {
var statearr_32832_32878 = state_32811__$1;
(statearr_32832_32878[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (2))){
var inst_32743 = (state_32811[(9)]);
var inst_32746 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32743);
var state_32811__$1 = state_32811;
var statearr_32833_32879 = state_32811__$1;
(statearr_32833_32879[(2)] = inst_32746);

(statearr_32833_32879[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (23))){
var inst_32796 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32796)){
var statearr_32834_32880 = state_32811__$1;
(statearr_32834_32880[(1)] = (24));

} else {
var statearr_32835_32881 = state_32811__$1;
(statearr_32835_32881[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (19))){
var inst_32793 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32793)){
var statearr_32836_32882 = state_32811__$1;
(statearr_32836_32882[(1)] = (20));

} else {
var statearr_32837_32883 = state_32811__$1;
(statearr_32837_32883[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (11))){
var inst_32768 = (state_32811[(8)]);
var inst_32774 = (inst_32768 == null);
var state_32811__$1 = state_32811;
if(cljs.core.truth_(inst_32774)){
var statearr_32838_32884 = state_32811__$1;
(statearr_32838_32884[(1)] = (14));

} else {
var statearr_32839_32885 = state_32811__$1;
(statearr_32839_32885[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (9))){
var inst_32761 = (state_32811[(10)]);
var inst_32761__$1 = (state_32811[(2)]);
var inst_32762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32761__$1,cljs.core.constant$keyword$111);
var inst_32763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32761__$1,cljs.core.constant$keyword$110);
var inst_32764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32761__$1,cljs.core.constant$keyword$109);
var state_32811__$1 = (function (){var statearr_32840 = state_32811;
(statearr_32840[(10)] = inst_32761__$1);

(statearr_32840[(17)] = inst_32763);

(statearr_32840[(16)] = inst_32764);

return statearr_32840;
})();
return cljs.core.async.ioc_alts_BANG_(state_32811__$1,(10),inst_32762);
} else {
if((state_val_32812 === (5))){
var inst_32753 = (state_32811[(7)]);
var inst_32756 = cljs.core.seq_QMARK_(inst_32753);
var state_32811__$1 = state_32811;
if(inst_32756){
var statearr_32841_32886 = state_32811__$1;
(statearr_32841_32886[(1)] = (7));

} else {
var statearr_32842_32887 = state_32811__$1;
(statearr_32842_32887[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (14))){
var inst_32769 = (state_32811[(15)]);
var inst_32776 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32769);
var state_32811__$1 = state_32811;
var statearr_32843_32888 = state_32811__$1;
(statearr_32843_32888[(2)] = inst_32776);

(statearr_32843_32888[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (26))){
var inst_32801 = (state_32811[(2)]);
var state_32811__$1 = state_32811;
var statearr_32844_32889 = state_32811__$1;
(statearr_32844_32889[(2)] = inst_32801);

(statearr_32844_32889[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (16))){
var inst_32779 = (state_32811[(2)]);
var inst_32780 = calc_state();
var inst_32753 = inst_32780;
var state_32811__$1 = (function (){var statearr_32845 = state_32811;
(statearr_32845[(18)] = inst_32779);

(statearr_32845[(7)] = inst_32753);

return statearr_32845;
})();
var statearr_32846_32890 = state_32811__$1;
(statearr_32846_32890[(2)] = null);

(statearr_32846_32890[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (10))){
var inst_32769 = (state_32811[(15)]);
var inst_32768 = (state_32811[(8)]);
var inst_32767 = (state_32811[(2)]);
var inst_32768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32767,(0),null);
var inst_32769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32767,(1),null);
var inst_32770 = (inst_32768__$1 == null);
var inst_32771 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32769__$1,change);
var inst_32772 = (inst_32770) || (inst_32771);
var state_32811__$1 = (function (){var statearr_32847 = state_32811;
(statearr_32847[(15)] = inst_32769__$1);

(statearr_32847[(8)] = inst_32768__$1);

return statearr_32847;
})();
if(cljs.core.truth_(inst_32772)){
var statearr_32848_32891 = state_32811__$1;
(statearr_32848_32891[(1)] = (11));

} else {
var statearr_32849_32892 = state_32811__$1;
(statearr_32849_32892[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (18))){
var inst_32763 = (state_32811[(17)]);
var inst_32769 = (state_32811[(15)]);
var inst_32764 = (state_32811[(16)]);
var inst_32788 = cljs.core.empty_QMARK_(inst_32764);
var inst_32789 = (function (){var G__32850 = inst_32769;
return (inst_32763.cljs$core$IFn$_invoke$arity$1 ? inst_32763.cljs$core$IFn$_invoke$arity$1(G__32850) : inst_32763.call(null,G__32850));
})();
var inst_32790 = cljs.core.not(inst_32789);
var inst_32791 = (inst_32788) && (inst_32790);
var state_32811__$1 = state_32811;
var statearr_32851_32893 = state_32811__$1;
(statearr_32851_32893[(2)] = inst_32791);

(statearr_32851_32893[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_32812 === (8))){
var inst_32753 = (state_32811[(7)]);
var state_32811__$1 = state_32811;
var statearr_32852_32894 = state_32811__$1;
(statearr_32852_32894[(2)] = inst_32753);

(statearr_32852_32894[(1)] = (9));


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
});})(c__16216__auto___32864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16136__auto__,c__16216__auto___32864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_32856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32856[(0)] = state_machine__16137__auto__);

(statearr_32856[(1)] = (1));

return statearr_32856;
});
var state_machine__16137__auto____1 = (function (state_32811){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_32811);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e32857){if((e32857 instanceof Object)){
var ex__16140__auto__ = e32857;
var statearr_32858_32895 = state_32811;
(statearr_32858_32895[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32811);

return cljs.core.constant$keyword$97;
} else {
throw e32857;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__32896 = state_32811;
state_32811 = G__32896;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_32811){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_32811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___32864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16218__auto__ = (function (){var statearr_32859 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_32859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___32864);

return statearr_32859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___32864,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32898 = {};
return obj32898;
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
return (function (){var or__3815__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__32902 = x__4459__auto__;
return goog.typeOf(G__32902);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__32906 = x__4459__auto__;
return goog.typeOf(G__32906);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__32912 = x__4459__auto__;
return goog.typeOf(G__32912);
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
return (function (){var or__3815__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__32914 = x__4459__auto__;
return goog.typeOf(G__32914);
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
var mults = (function (){var G__33053 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33053) : cljs.core.atom.call(null,G__33053));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3815__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33055 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33055) : cljs.core.deref.call(null,G__33055));
})(),topic);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3815__auto__,mults){
return (function (p1__32915_SHARP_){
if(cljs.core.truth_((function (){var G__33056 = topic;
return (p1__32915_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32915_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33056) : p1__32915_SHARP_.call(null,G__33056));
})())){
return p1__32915_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32915_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33057 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33057) : buf_fn.call(null,G__33057));
})())));
}
});})(or__3815__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33058 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33059){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33059 = meta33059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33058.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__33061 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33061) : self__.ensure_mult.call(null,G__33061));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33062 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33062) : cljs.core.deref.call(null,G__33062));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33063 = self__.mults;
var G__33064 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33063,G__33064) : cljs.core.reset_BANG_.call(null,G__33063,G__33064));
});})(mults,ensure_mult))
;

cljs.core.async.t33058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33060){
var self__ = this;
var _33060__$1 = this;
return self__.meta33059;
});})(mults,ensure_mult))
;

cljs.core.async.t33058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33060,meta33059__$1){
var self__ = this;
var _33060__$1 = this;
return (new cljs.core.async.t33058(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33059__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33058.cljs$lang$type = true;

cljs.core.async.t33058.cljs$lang$ctorStr = "cljs.core.async/t33058";

cljs.core.async.t33058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33058");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33058 = ((function (mults,ensure_mult){
return (function __GT_t33058(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33059){
return (new cljs.core.async.t33058(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33059));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33058(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16216__auto___33187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33187,mults,ensure_mult,p){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33187,mults,ensure_mult,p){
return (function (state_33136){
var state_val_33137 = (state_33136[(1)]);
if((state_val_33137 === (7))){
var inst_33132 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33138_33188 = state_33136__$1;
(statearr_33138_33188[(2)] = inst_33132);

(statearr_33138_33188[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (20))){
var state_33136__$1 = state_33136;
var statearr_33139_33189 = state_33136__$1;
(statearr_33139_33189[(2)] = null);

(statearr_33139_33189[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (1))){
var state_33136__$1 = state_33136;
var statearr_33140_33190 = state_33136__$1;
(statearr_33140_33190[(2)] = null);

(statearr_33140_33190[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (24))){
var inst_33115 = (state_33136[(7)]);
var inst_33124 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33115);
var state_33136__$1 = state_33136;
var statearr_33141_33191 = state_33136__$1;
(statearr_33141_33191[(2)] = inst_33124);

(statearr_33141_33191[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (4))){
var inst_33067 = (state_33136[(8)]);
var inst_33067__$1 = (state_33136[(2)]);
var inst_33068 = (inst_33067__$1 == null);
var state_33136__$1 = (function (){var statearr_33142 = state_33136;
(statearr_33142[(8)] = inst_33067__$1);

return statearr_33142;
})();
if(cljs.core.truth_(inst_33068)){
var statearr_33143_33192 = state_33136__$1;
(statearr_33143_33192[(1)] = (5));

} else {
var statearr_33144_33193 = state_33136__$1;
(statearr_33144_33193[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (15))){
var inst_33109 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33145_33194 = state_33136__$1;
(statearr_33145_33194[(2)] = inst_33109);

(statearr_33145_33194[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (21))){
var inst_33129 = (state_33136[(2)]);
var state_33136__$1 = (function (){var statearr_33146 = state_33136;
(statearr_33146[(9)] = inst_33129);

return statearr_33146;
})();
var statearr_33147_33195 = state_33136__$1;
(statearr_33147_33195[(2)] = null);

(statearr_33147_33195[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (13))){
var inst_33091 = (state_33136[(10)]);
var inst_33093 = cljs.core.chunked_seq_QMARK_(inst_33091);
var state_33136__$1 = state_33136;
if(inst_33093){
var statearr_33148_33196 = state_33136__$1;
(statearr_33148_33196[(1)] = (16));

} else {
var statearr_33149_33197 = state_33136__$1;
(statearr_33149_33197[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (22))){
var inst_33121 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33121)){
var statearr_33150_33198 = state_33136__$1;
(statearr_33150_33198[(1)] = (23));

} else {
var statearr_33151_33199 = state_33136__$1;
(statearr_33151_33199[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (6))){
var inst_33117 = (state_33136[(11)]);
var inst_33067 = (state_33136[(8)]);
var inst_33115 = (state_33136[(7)]);
var inst_33115__$1 = (function (){var G__33152 = inst_33067;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33152) : topic_fn.call(null,G__33152));
})();
var inst_33116 = (function (){var G__33153 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33153) : cljs.core.deref.call(null,G__33153));
})();
var inst_33117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33116,inst_33115__$1);
var state_33136__$1 = (function (){var statearr_33154 = state_33136;
(statearr_33154[(11)] = inst_33117__$1);

(statearr_33154[(7)] = inst_33115__$1);

return statearr_33154;
})();
if(cljs.core.truth_(inst_33117__$1)){
var statearr_33155_33200 = state_33136__$1;
(statearr_33155_33200[(1)] = (19));

} else {
var statearr_33156_33201 = state_33136__$1;
(statearr_33156_33201[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (25))){
var inst_33126 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33157_33202 = state_33136__$1;
(statearr_33157_33202[(2)] = inst_33126);

(statearr_33157_33202[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (17))){
var inst_33091 = (state_33136[(10)]);
var inst_33100 = cljs.core.first(inst_33091);
var inst_33101 = cljs.core.async.muxch_STAR_(inst_33100);
var inst_33102 = cljs.core.async.close_BANG_(inst_33101);
var inst_33103 = cljs.core.next(inst_33091);
var inst_33077 = inst_33103;
var inst_33078 = null;
var inst_33079 = (0);
var inst_33080 = (0);
var state_33136__$1 = (function (){var statearr_33158 = state_33136;
(statearr_33158[(12)] = inst_33078);

(statearr_33158[(13)] = inst_33077);

(statearr_33158[(14)] = inst_33080);

(statearr_33158[(15)] = inst_33102);

(statearr_33158[(16)] = inst_33079);

return statearr_33158;
})();
var statearr_33159_33203 = state_33136__$1;
(statearr_33159_33203[(2)] = null);

(statearr_33159_33203[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (3))){
var inst_33134 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33136__$1,inst_33134);
} else {
if((state_val_33137 === (12))){
var inst_33111 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33160_33204 = state_33136__$1;
(statearr_33160_33204[(2)] = inst_33111);

(statearr_33160_33204[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (2))){
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33136__$1,(4),ch);
} else {
if((state_val_33137 === (23))){
var state_33136__$1 = state_33136;
var statearr_33161_33205 = state_33136__$1;
(statearr_33161_33205[(2)] = null);

(statearr_33161_33205[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (19))){
var inst_33117 = (state_33136[(11)]);
var inst_33067 = (state_33136[(8)]);
var inst_33119 = cljs.core.async.muxch_STAR_(inst_33117);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33136__$1,(22),inst_33119,inst_33067);
} else {
if((state_val_33137 === (11))){
var inst_33091 = (state_33136[(10)]);
var inst_33077 = (state_33136[(13)]);
var inst_33091__$1 = cljs.core.seq(inst_33077);
var state_33136__$1 = (function (){var statearr_33162 = state_33136;
(statearr_33162[(10)] = inst_33091__$1);

return statearr_33162;
})();
if(inst_33091__$1){
var statearr_33163_33206 = state_33136__$1;
(statearr_33163_33206[(1)] = (13));

} else {
var statearr_33164_33207 = state_33136__$1;
(statearr_33164_33207[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (9))){
var inst_33113 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33165_33208 = state_33136__$1;
(statearr_33165_33208[(2)] = inst_33113);

(statearr_33165_33208[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (5))){
var inst_33074 = (function (){var G__33166 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33166) : cljs.core.deref.call(null,G__33166));
})();
var inst_33075 = cljs.core.vals(inst_33074);
var inst_33076 = cljs.core.seq(inst_33075);
var inst_33077 = inst_33076;
var inst_33078 = null;
var inst_33079 = (0);
var inst_33080 = (0);
var state_33136__$1 = (function (){var statearr_33167 = state_33136;
(statearr_33167[(12)] = inst_33078);

(statearr_33167[(13)] = inst_33077);

(statearr_33167[(14)] = inst_33080);

(statearr_33167[(16)] = inst_33079);

return statearr_33167;
})();
var statearr_33168_33209 = state_33136__$1;
(statearr_33168_33209[(2)] = null);

(statearr_33168_33209[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (14))){
var state_33136__$1 = state_33136;
var statearr_33172_33210 = state_33136__$1;
(statearr_33172_33210[(2)] = null);

(statearr_33172_33210[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (16))){
var inst_33091 = (state_33136[(10)]);
var inst_33095 = cljs.core.chunk_first(inst_33091);
var inst_33096 = cljs.core.chunk_rest(inst_33091);
var inst_33097 = cljs.core.count(inst_33095);
var inst_33077 = inst_33096;
var inst_33078 = inst_33095;
var inst_33079 = inst_33097;
var inst_33080 = (0);
var state_33136__$1 = (function (){var statearr_33173 = state_33136;
(statearr_33173[(12)] = inst_33078);

(statearr_33173[(13)] = inst_33077);

(statearr_33173[(14)] = inst_33080);

(statearr_33173[(16)] = inst_33079);

return statearr_33173;
})();
var statearr_33174_33211 = state_33136__$1;
(statearr_33174_33211[(2)] = null);

(statearr_33174_33211[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (10))){
var inst_33078 = (state_33136[(12)]);
var inst_33077 = (state_33136[(13)]);
var inst_33080 = (state_33136[(14)]);
var inst_33079 = (state_33136[(16)]);
var inst_33085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33078,inst_33080);
var inst_33086 = cljs.core.async.muxch_STAR_(inst_33085);
var inst_33087 = cljs.core.async.close_BANG_(inst_33086);
var inst_33088 = (inst_33080 + (1));
var tmp33169 = inst_33078;
var tmp33170 = inst_33077;
var tmp33171 = inst_33079;
var inst_33077__$1 = tmp33170;
var inst_33078__$1 = tmp33169;
var inst_33079__$1 = tmp33171;
var inst_33080__$1 = inst_33088;
var state_33136__$1 = (function (){var statearr_33175 = state_33136;
(statearr_33175[(17)] = inst_33087);

(statearr_33175[(12)] = inst_33078__$1);

(statearr_33175[(13)] = inst_33077__$1);

(statearr_33175[(14)] = inst_33080__$1);

(statearr_33175[(16)] = inst_33079__$1);

return statearr_33175;
})();
var statearr_33176_33212 = state_33136__$1;
(statearr_33176_33212[(2)] = null);

(statearr_33176_33212[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (18))){
var inst_33106 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33177_33213 = state_33136__$1;
(statearr_33177_33213[(2)] = inst_33106);

(statearr_33177_33213[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33137 === (8))){
var inst_33080 = (state_33136[(14)]);
var inst_33079 = (state_33136[(16)]);
var inst_33082 = (inst_33080 < inst_33079);
var inst_33083 = inst_33082;
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33083)){
var statearr_33178_33214 = state_33136__$1;
(statearr_33178_33214[(1)] = (10));

} else {
var statearr_33179_33215 = state_33136__$1;
(statearr_33179_33215[(1)] = (11));

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
});})(c__16216__auto___33187,mults,ensure_mult,p))
;
return ((function (switch__16136__auto__,c__16216__auto___33187,mults,ensure_mult,p){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33183[(0)] = state_machine__16137__auto__);

(statearr_33183[(1)] = (1));

return statearr_33183;
});
var state_machine__16137__auto____1 = (function (state_33136){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33136);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33184){if((e33184 instanceof Object)){
var ex__16140__auto__ = e33184;
var statearr_33185_33216 = state_33136;
(statearr_33185_33216[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33136);

return cljs.core.constant$keyword$97;
} else {
throw e33184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33217 = state_33136;
state_33136 = G__33217;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33136){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33187,mults,ensure_mult,p))
})();
var state__16218__auto__ = (function (){var statearr_33186 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33187);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33187,mults,ensure_mult,p))
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
var dctr = (function (){var G__33298 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33298) : cljs.core.atom.call(null,G__33298));
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
var c__16216__auto___33371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33371,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33371,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33337){
var state_val_33338 = (state_33337[(1)]);
if((state_val_33338 === (7))){
var state_33337__$1 = state_33337;
var statearr_33339_33372 = state_33337__$1;
(statearr_33339_33372[(2)] = null);

(statearr_33339_33372[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (1))){
var state_33337__$1 = state_33337;
var statearr_33340_33373 = state_33337__$1;
(statearr_33340_33373[(2)] = null);

(statearr_33340_33373[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (4))){
var inst_33301 = (state_33337[(7)]);
var inst_33303 = (inst_33301 < cnt);
var state_33337__$1 = state_33337;
if(cljs.core.truth_(inst_33303)){
var statearr_33341_33374 = state_33337__$1;
(statearr_33341_33374[(1)] = (6));

} else {
var statearr_33342_33375 = state_33337__$1;
(statearr_33342_33375[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (15))){
var inst_33333 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33343_33376 = state_33337__$1;
(statearr_33343_33376[(2)] = inst_33333);

(statearr_33343_33376[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (13))){
var inst_33326 = cljs.core.async.close_BANG_(out);
var state_33337__$1 = state_33337;
var statearr_33344_33377 = state_33337__$1;
(statearr_33344_33377[(2)] = inst_33326);

(statearr_33344_33377[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (6))){
var state_33337__$1 = state_33337;
var statearr_33345_33378 = state_33337__$1;
(statearr_33345_33378[(2)] = null);

(statearr_33345_33378[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (3))){
var inst_33335 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33337__$1,inst_33335);
} else {
if((state_val_33338 === (12))){
var inst_33323 = (state_33337[(8)]);
var inst_33323__$1 = (state_33337[(2)]);
var inst_33324 = cljs.core.some(cljs.core.nil_QMARK_,inst_33323__$1);
var state_33337__$1 = (function (){var statearr_33346 = state_33337;
(statearr_33346[(8)] = inst_33323__$1);

return statearr_33346;
})();
if(cljs.core.truth_(inst_33324)){
var statearr_33347_33379 = state_33337__$1;
(statearr_33347_33379[(1)] = (13));

} else {
var statearr_33348_33380 = state_33337__$1;
(statearr_33348_33380[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (2))){
var inst_33300 = (function (){var G__33349 = dctr;
var G__33350 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33349,G__33350) : cljs.core.reset_BANG_.call(null,G__33349,G__33350));
})();
var inst_33301 = (0);
var state_33337__$1 = (function (){var statearr_33351 = state_33337;
(statearr_33351[(9)] = inst_33300);

(statearr_33351[(7)] = inst_33301);

return statearr_33351;
})();
var statearr_33352_33381 = state_33337__$1;
(statearr_33352_33381[(2)] = null);

(statearr_33352_33381[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (11))){
var inst_33301 = (state_33337[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33337,(10),Object,null,(9));
var inst_33310 = (function (){var G__33353 = inst_33301;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33353) : chs__$1.call(null,G__33353));
})();
var inst_33311 = (function (){var G__33354 = inst_33301;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33354) : done.call(null,G__33354));
})();
var inst_33312 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33310,inst_33311);
var state_33337__$1 = state_33337;
var statearr_33355_33382 = state_33337__$1;
(statearr_33355_33382[(2)] = inst_33312);


cljs.core.async.impl.ioc_helpers.process_exception(state_33337__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (9))){
var inst_33301 = (state_33337[(7)]);
var inst_33314 = (state_33337[(2)]);
var inst_33315 = (inst_33301 + (1));
var inst_33301__$1 = inst_33315;
var state_33337__$1 = (function (){var statearr_33356 = state_33337;
(statearr_33356[(7)] = inst_33301__$1);

(statearr_33356[(10)] = inst_33314);

return statearr_33356;
})();
var statearr_33357_33383 = state_33337__$1;
(statearr_33357_33383[(2)] = null);

(statearr_33357_33383[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (5))){
var inst_33321 = (state_33337[(2)]);
var state_33337__$1 = (function (){var statearr_33358 = state_33337;
(statearr_33358[(11)] = inst_33321);

return statearr_33358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33337__$1,(12),dchan);
} else {
if((state_val_33338 === (14))){
var inst_33323 = (state_33337[(8)]);
var inst_33328 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33323);
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33337__$1,(16),out,inst_33328);
} else {
if((state_val_33338 === (16))){
var inst_33330 = (state_33337[(2)]);
var state_33337__$1 = (function (){var statearr_33359 = state_33337;
(statearr_33359[(12)] = inst_33330);

return statearr_33359;
})();
var statearr_33360_33384 = state_33337__$1;
(statearr_33360_33384[(2)] = null);

(statearr_33360_33384[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (10))){
var inst_33305 = (state_33337[(2)]);
var inst_33306 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33337__$1 = (function (){var statearr_33361 = state_33337;
(statearr_33361[(13)] = inst_33305);

return statearr_33361;
})();
var statearr_33362_33385 = state_33337__$1;
(statearr_33362_33385[(2)] = inst_33306);


cljs.core.async.impl.ioc_helpers.process_exception(state_33337__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_33338 === (8))){
var inst_33319 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33363_33386 = state_33337__$1;
(statearr_33363_33386[(2)] = inst_33319);

(statearr_33363_33386[(1)] = (5));


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
});})(c__16216__auto___33371,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16136__auto__,c__16216__auto___33371,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33367[(0)] = state_machine__16137__auto__);

(statearr_33367[(1)] = (1));

return statearr_33367;
});
var state_machine__16137__auto____1 = (function (state_33337){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33337);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33368){if((e33368 instanceof Object)){
var ex__16140__auto__ = e33368;
var statearr_33369_33387 = state_33337;
(statearr_33369_33387[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33337);

return cljs.core.constant$keyword$97;
} else {
throw e33368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33388 = state_33337;
state_33337 = G__33388;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33337){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33371,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16218__auto__ = (function (){var statearr_33370 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33371);

return statearr_33370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33371,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16216__auto___33498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33498,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33498,out){
return (function (state_33474){
var state_val_33475 = (state_33474[(1)]);
if((state_val_33475 === (7))){
var inst_33454 = (state_33474[(7)]);
var inst_33453 = (state_33474[(8)]);
var inst_33453__$1 = (state_33474[(2)]);
var inst_33454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33453__$1,(0),null);
var inst_33455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33453__$1,(1),null);
var inst_33456 = (inst_33454__$1 == null);
var state_33474__$1 = (function (){var statearr_33476 = state_33474;
(statearr_33476[(7)] = inst_33454__$1);

(statearr_33476[(9)] = inst_33455);

(statearr_33476[(8)] = inst_33453__$1);

return statearr_33476;
})();
if(cljs.core.truth_(inst_33456)){
var statearr_33477_33499 = state_33474__$1;
(statearr_33477_33499[(1)] = (8));

} else {
var statearr_33478_33500 = state_33474__$1;
(statearr_33478_33500[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (1))){
var inst_33445 = cljs.core.vec(chs);
var inst_33446 = inst_33445;
var state_33474__$1 = (function (){var statearr_33479 = state_33474;
(statearr_33479[(10)] = inst_33446);

return statearr_33479;
})();
var statearr_33480_33501 = state_33474__$1;
(statearr_33480_33501[(2)] = null);

(statearr_33480_33501[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (4))){
var inst_33446 = (state_33474[(10)]);
var state_33474__$1 = state_33474;
return cljs.core.async.ioc_alts_BANG_(state_33474__$1,(7),inst_33446);
} else {
if((state_val_33475 === (6))){
var inst_33470 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
var statearr_33481_33502 = state_33474__$1;
(statearr_33481_33502[(2)] = inst_33470);

(statearr_33481_33502[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (3))){
var inst_33472 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33474__$1,inst_33472);
} else {
if((state_val_33475 === (2))){
var inst_33446 = (state_33474[(10)]);
var inst_33448 = cljs.core.count(inst_33446);
var inst_33449 = (inst_33448 > (0));
var state_33474__$1 = state_33474;
if(cljs.core.truth_(inst_33449)){
var statearr_33483_33503 = state_33474__$1;
(statearr_33483_33503[(1)] = (4));

} else {
var statearr_33484_33504 = state_33474__$1;
(statearr_33484_33504[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (11))){
var inst_33446 = (state_33474[(10)]);
var inst_33463 = (state_33474[(2)]);
var tmp33482 = inst_33446;
var inst_33446__$1 = tmp33482;
var state_33474__$1 = (function (){var statearr_33485 = state_33474;
(statearr_33485[(10)] = inst_33446__$1);

(statearr_33485[(11)] = inst_33463);

return statearr_33485;
})();
var statearr_33486_33505 = state_33474__$1;
(statearr_33486_33505[(2)] = null);

(statearr_33486_33505[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (9))){
var inst_33454 = (state_33474[(7)]);
var state_33474__$1 = state_33474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33474__$1,(11),out,inst_33454);
} else {
if((state_val_33475 === (5))){
var inst_33468 = cljs.core.async.close_BANG_(out);
var state_33474__$1 = state_33474;
var statearr_33487_33506 = state_33474__$1;
(statearr_33487_33506[(2)] = inst_33468);

(statearr_33487_33506[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (10))){
var inst_33466 = (state_33474[(2)]);
var state_33474__$1 = state_33474;
var statearr_33488_33507 = state_33474__$1;
(statearr_33488_33507[(2)] = inst_33466);

(statearr_33488_33507[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33475 === (8))){
var inst_33454 = (state_33474[(7)]);
var inst_33446 = (state_33474[(10)]);
var inst_33455 = (state_33474[(9)]);
var inst_33453 = (state_33474[(8)]);
var inst_33458 = (function (){var c = inst_33455;
var v = inst_33454;
var vec__33451 = inst_33453;
var cs = inst_33446;
return ((function (c,v,vec__33451,cs,inst_33454,inst_33446,inst_33455,inst_33453,state_val_33475,c__16216__auto___33498,out){
return (function (p1__33389_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33389_SHARP_);
});
;})(c,v,vec__33451,cs,inst_33454,inst_33446,inst_33455,inst_33453,state_val_33475,c__16216__auto___33498,out))
})();
var inst_33459 = cljs.core.filterv(inst_33458,inst_33446);
var inst_33446__$1 = inst_33459;
var state_33474__$1 = (function (){var statearr_33489 = state_33474;
(statearr_33489[(10)] = inst_33446__$1);

return statearr_33489;
})();
var statearr_33490_33508 = state_33474__$1;
(statearr_33490_33508[(2)] = null);

(statearr_33490_33508[(1)] = (2));


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
});})(c__16216__auto___33498,out))
;
return ((function (switch__16136__auto__,c__16216__auto___33498,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33494[(0)] = state_machine__16137__auto__);

(statearr_33494[(1)] = (1));

return statearr_33494;
});
var state_machine__16137__auto____1 = (function (state_33474){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33474);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33495){if((e33495 instanceof Object)){
var ex__16140__auto__ = e33495;
var statearr_33496_33509 = state_33474;
(statearr_33496_33509[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33474);

return cljs.core.constant$keyword$97;
} else {
throw e33495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33510 = state_33474;
state_33474 = G__33510;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33474){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33498,out))
})();
var state__16218__auto__ = (function (){var statearr_33497 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33498);

return statearr_33497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33498,out))
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
var c__16216__auto___33606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33606,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33606,out){
return (function (state_33583){
var state_val_33584 = (state_33583[(1)]);
if((state_val_33584 === (7))){
var inst_33565 = (state_33583[(7)]);
var inst_33565__$1 = (state_33583[(2)]);
var inst_33566 = (inst_33565__$1 == null);
var inst_33567 = cljs.core.not(inst_33566);
var state_33583__$1 = (function (){var statearr_33585 = state_33583;
(statearr_33585[(7)] = inst_33565__$1);

return statearr_33585;
})();
if(inst_33567){
var statearr_33586_33607 = state_33583__$1;
(statearr_33586_33607[(1)] = (8));

} else {
var statearr_33587_33608 = state_33583__$1;
(statearr_33587_33608[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (1))){
var inst_33560 = (0);
var state_33583__$1 = (function (){var statearr_33588 = state_33583;
(statearr_33588[(8)] = inst_33560);

return statearr_33588;
})();
var statearr_33589_33609 = state_33583__$1;
(statearr_33589_33609[(2)] = null);

(statearr_33589_33609[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (4))){
var state_33583__$1 = state_33583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33583__$1,(7),ch);
} else {
if((state_val_33584 === (6))){
var inst_33578 = (state_33583[(2)]);
var state_33583__$1 = state_33583;
var statearr_33590_33610 = state_33583__$1;
(statearr_33590_33610[(2)] = inst_33578);

(statearr_33590_33610[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (3))){
var inst_33580 = (state_33583[(2)]);
var inst_33581 = cljs.core.async.close_BANG_(out);
var state_33583__$1 = (function (){var statearr_33591 = state_33583;
(statearr_33591[(9)] = inst_33580);

return statearr_33591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33583__$1,inst_33581);
} else {
if((state_val_33584 === (2))){
var inst_33560 = (state_33583[(8)]);
var inst_33562 = (inst_33560 < n);
var state_33583__$1 = state_33583;
if(cljs.core.truth_(inst_33562)){
var statearr_33592_33611 = state_33583__$1;
(statearr_33592_33611[(1)] = (4));

} else {
var statearr_33593_33612 = state_33583__$1;
(statearr_33593_33612[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (11))){
var inst_33560 = (state_33583[(8)]);
var inst_33570 = (state_33583[(2)]);
var inst_33571 = (inst_33560 + (1));
var inst_33560__$1 = inst_33571;
var state_33583__$1 = (function (){var statearr_33594 = state_33583;
(statearr_33594[(10)] = inst_33570);

(statearr_33594[(8)] = inst_33560__$1);

return statearr_33594;
})();
var statearr_33595_33613 = state_33583__$1;
(statearr_33595_33613[(2)] = null);

(statearr_33595_33613[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (9))){
var state_33583__$1 = state_33583;
var statearr_33596_33614 = state_33583__$1;
(statearr_33596_33614[(2)] = null);

(statearr_33596_33614[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (5))){
var state_33583__$1 = state_33583;
var statearr_33597_33615 = state_33583__$1;
(statearr_33597_33615[(2)] = null);

(statearr_33597_33615[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (10))){
var inst_33575 = (state_33583[(2)]);
var state_33583__$1 = state_33583;
var statearr_33598_33616 = state_33583__$1;
(statearr_33598_33616[(2)] = inst_33575);

(statearr_33598_33616[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33584 === (8))){
var inst_33565 = (state_33583[(7)]);
var state_33583__$1 = state_33583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33583__$1,(11),out,inst_33565);
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
});})(c__16216__auto___33606,out))
;
return ((function (switch__16136__auto__,c__16216__auto___33606,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33602[(0)] = state_machine__16137__auto__);

(statearr_33602[(1)] = (1));

return statearr_33602;
});
var state_machine__16137__auto____1 = (function (state_33583){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33583);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33603){if((e33603 instanceof Object)){
var ex__16140__auto__ = e33603;
var statearr_33604_33617 = state_33583;
(statearr_33604_33617[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33583);

return cljs.core.constant$keyword$97;
} else {
throw e33603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33618 = state_33583;
state_33583 = G__33618;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33583){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33606,out))
})();
var state__16218__auto__ = (function (){var statearr_33605 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33606);

return statearr_33605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33606,out))
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
if(typeof cljs.core.async.t33631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33631 = (function (ch,f,map_LT_,meta33632){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33632 = meta33632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t33634 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33634 = (function (fn1,_,meta33632,map_LT_,f,ch,meta33635){
this.fn1 = fn1;
this._ = _;
this.meta33632 = meta33632;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33635 = meta33635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33634.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t33634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33619_SHARP_){
var G__33637 = (((p1__33619_SHARP_ == null))?null:(function (){var G__33638 = p1__33619_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33638) : self__.f.call(null,G__33638));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33637) : f1.call(null,G__33637));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33636){
var self__ = this;
var _33636__$1 = this;
return self__.meta33635;
});})(___$1))
;

cljs.core.async.t33634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33636,meta33635__$1){
var self__ = this;
var _33636__$1 = this;
return (new cljs.core.async.t33634(self__.fn1,self__._,self__.meta33632,self__.map_LT_,self__.f,self__.ch,meta33635__$1));
});})(___$1))
;

cljs.core.async.t33634.cljs$lang$type = true;

cljs.core.async.t33634.cljs$lang$ctorStr = "cljs.core.async/t33634";

cljs.core.async.t33634.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33634");
});})(___$1))
;

cljs.core.async.__GT_t33634 = ((function (___$1){
return (function __GT_t33634(fn1__$1,___$2,meta33632__$1,map_LT___$1,f__$1,ch__$1,meta33635){
return (new cljs.core.async.t33634(fn1__$1,___$2,meta33632__$1,map_LT___$1,f__$1,ch__$1,meta33635));
});})(___$1))
;

}

return (new cljs.core.async.t33634(fn1,___$1,self__.meta33632,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3803__auto__ = ret;
if(cljs.core.truth_(and__3803__auto__)){
return !(((function (){var G__33639 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33639) : cljs.core.deref.call(null,G__33639));
})() == null));
} else {
return and__3803__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33640 = (function (){var G__33641 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33641) : cljs.core.deref.call(null,G__33641));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33640) : self__.f.call(null,G__33640));
})());
} else {
return ret;
}
});

cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33633){
var self__ = this;
var _33633__$1 = this;
return self__.meta33632;
});

cljs.core.async.t33631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33633,meta33632__$1){
var self__ = this;
var _33633__$1 = this;
return (new cljs.core.async.t33631(self__.ch,self__.f,self__.map_LT_,meta33632__$1));
});

cljs.core.async.t33631.cljs$lang$type = true;

cljs.core.async.t33631.cljs$lang$ctorStr = "cljs.core.async/t33631";

cljs.core.async.t33631.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33631");
});

cljs.core.async.__GT_t33631 = (function __GT_t33631(ch__$1,f__$1,map_LT___$1,meta33632){
return (new cljs.core.async.t33631(ch__$1,f__$1,map_LT___$1,meta33632));
});

}

return (new cljs.core.async.t33631(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33646 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33646 = (function (ch,f,map_GT_,meta33647){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33647 = meta33647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__33649 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33649) : self__.f.call(null,G__33649));
})(),fn1);
});

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33648){
var self__ = this;
var _33648__$1 = this;
return self__.meta33647;
});

cljs.core.async.t33646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33648,meta33647__$1){
var self__ = this;
var _33648__$1 = this;
return (new cljs.core.async.t33646(self__.ch,self__.f,self__.map_GT_,meta33647__$1));
});

cljs.core.async.t33646.cljs$lang$type = true;

cljs.core.async.t33646.cljs$lang$ctorStr = "cljs.core.async/t33646";

cljs.core.async.t33646.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33646");
});

cljs.core.async.__GT_t33646 = (function __GT_t33646(ch__$1,f__$1,map_GT___$1,meta33647){
return (new cljs.core.async.t33646(ch__$1,f__$1,map_GT___$1,meta33647));
});

}

return (new cljs.core.async.t33646(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33654 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33654 = (function (ch,p,filter_GT_,meta33655){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33655 = meta33655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33657 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__33657) : self__.p.call(null,G__33657));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33656){
var self__ = this;
var _33656__$1 = this;
return self__.meta33655;
});

cljs.core.async.t33654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33656,meta33655__$1){
var self__ = this;
var _33656__$1 = this;
return (new cljs.core.async.t33654(self__.ch,self__.p,self__.filter_GT_,meta33655__$1));
});

cljs.core.async.t33654.cljs$lang$type = true;

cljs.core.async.t33654.cljs$lang$ctorStr = "cljs.core.async/t33654";

cljs.core.async.t33654.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"cljs.core.async/t33654");
});

cljs.core.async.__GT_t33654 = (function __GT_t33654(ch__$1,p__$1,filter_GT___$1,meta33655){
return (new cljs.core.async.t33654(ch__$1,p__$1,filter_GT___$1,meta33655));
});

}

return (new cljs.core.async.t33654(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16216__auto___33745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___33745,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___33745,out){
return (function (state_33723){
var state_val_33724 = (state_33723[(1)]);
if((state_val_33724 === (7))){
var inst_33719 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33725_33746 = state_33723__$1;
(statearr_33725_33746[(2)] = inst_33719);

(statearr_33725_33746[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (1))){
var state_33723__$1 = state_33723;
var statearr_33726_33747 = state_33723__$1;
(statearr_33726_33747[(2)] = null);

(statearr_33726_33747[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (4))){
var inst_33705 = (state_33723[(7)]);
var inst_33705__$1 = (state_33723[(2)]);
var inst_33706 = (inst_33705__$1 == null);
var state_33723__$1 = (function (){var statearr_33727 = state_33723;
(statearr_33727[(7)] = inst_33705__$1);

return statearr_33727;
})();
if(cljs.core.truth_(inst_33706)){
var statearr_33728_33748 = state_33723__$1;
(statearr_33728_33748[(1)] = (5));

} else {
var statearr_33729_33749 = state_33723__$1;
(statearr_33729_33749[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (6))){
var inst_33705 = (state_33723[(7)]);
var inst_33710 = (function (){var G__33730 = inst_33705;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__33730) : p.call(null,G__33730));
})();
var state_33723__$1 = state_33723;
if(cljs.core.truth_(inst_33710)){
var statearr_33731_33750 = state_33723__$1;
(statearr_33731_33750[(1)] = (8));

} else {
var statearr_33732_33751 = state_33723__$1;
(statearr_33732_33751[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (3))){
var inst_33721 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33723__$1,inst_33721);
} else {
if((state_val_33724 === (2))){
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33723__$1,(4),ch);
} else {
if((state_val_33724 === (11))){
var inst_33713 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33733_33752 = state_33723__$1;
(statearr_33733_33752[(2)] = inst_33713);

(statearr_33733_33752[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (9))){
var state_33723__$1 = state_33723;
var statearr_33734_33753 = state_33723__$1;
(statearr_33734_33753[(2)] = null);

(statearr_33734_33753[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (5))){
var inst_33708 = cljs.core.async.close_BANG_(out);
var state_33723__$1 = state_33723;
var statearr_33735_33754 = state_33723__$1;
(statearr_33735_33754[(2)] = inst_33708);

(statearr_33735_33754[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (10))){
var inst_33716 = (state_33723[(2)]);
var state_33723__$1 = (function (){var statearr_33736 = state_33723;
(statearr_33736[(8)] = inst_33716);

return statearr_33736;
})();
var statearr_33737_33755 = state_33723__$1;
(statearr_33737_33755[(2)] = null);

(statearr_33737_33755[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33724 === (8))){
var inst_33705 = (state_33723[(7)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33723__$1,(11),out,inst_33705);
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
});})(c__16216__auto___33745,out))
;
return ((function (switch__16136__auto__,c__16216__auto___33745,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_33741 = [null,null,null,null,null,null,null,null,null];
(statearr_33741[(0)] = state_machine__16137__auto__);

(statearr_33741[(1)] = (1));

return statearr_33741;
});
var state_machine__16137__auto____1 = (function (state_33723){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33723);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33742){if((e33742 instanceof Object)){
var ex__16140__auto__ = e33742;
var statearr_33743_33756 = state_33723;
(statearr_33743_33756[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33723);

return cljs.core.constant$keyword$97;
} else {
throw e33742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33757 = state_33723;
state_33723 = G__33757;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33723){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___33745,out))
})();
var state__16218__auto__ = (function (){var statearr_33744 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___33745);

return statearr_33744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___33745,out))
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
return (function (state_33927){
var state_val_33928 = (state_33927[(1)]);
if((state_val_33928 === (7))){
var inst_33923 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33929_33971 = state_33927__$1;
(statearr_33929_33971[(2)] = inst_33923);

(statearr_33929_33971[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (20))){
var inst_33893 = (state_33927[(7)]);
var inst_33904 = (state_33927[(2)]);
var inst_33905 = cljs.core.next(inst_33893);
var inst_33879 = inst_33905;
var inst_33880 = null;
var inst_33881 = (0);
var inst_33882 = (0);
var state_33927__$1 = (function (){var statearr_33930 = state_33927;
(statearr_33930[(8)] = inst_33881);

(statearr_33930[(9)] = inst_33882);

(statearr_33930[(10)] = inst_33880);

(statearr_33930[(11)] = inst_33904);

(statearr_33930[(12)] = inst_33879);

return statearr_33930;
})();
var statearr_33931_33972 = state_33927__$1;
(statearr_33931_33972[(2)] = null);

(statearr_33931_33972[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (1))){
var state_33927__$1 = state_33927;
var statearr_33932_33973 = state_33927__$1;
(statearr_33932_33973[(2)] = null);

(statearr_33932_33973[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (4))){
var inst_33868 = (state_33927[(13)]);
var inst_33868__$1 = (state_33927[(2)]);
var inst_33869 = (inst_33868__$1 == null);
var state_33927__$1 = (function (){var statearr_33933 = state_33927;
(statearr_33933[(13)] = inst_33868__$1);

return statearr_33933;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33934_33974 = state_33927__$1;
(statearr_33934_33974[(1)] = (5));

} else {
var statearr_33935_33975 = state_33927__$1;
(statearr_33935_33975[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (15))){
var state_33927__$1 = state_33927;
var statearr_33939_33976 = state_33927__$1;
(statearr_33939_33976[(2)] = null);

(statearr_33939_33976[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (21))){
var state_33927__$1 = state_33927;
var statearr_33940_33977 = state_33927__$1;
(statearr_33940_33977[(2)] = null);

(statearr_33940_33977[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (13))){
var inst_33881 = (state_33927[(8)]);
var inst_33882 = (state_33927[(9)]);
var inst_33880 = (state_33927[(10)]);
var inst_33879 = (state_33927[(12)]);
var inst_33889 = (state_33927[(2)]);
var inst_33890 = (inst_33882 + (1));
var tmp33936 = inst_33881;
var tmp33937 = inst_33880;
var tmp33938 = inst_33879;
var inst_33879__$1 = tmp33938;
var inst_33880__$1 = tmp33937;
var inst_33881__$1 = tmp33936;
var inst_33882__$1 = inst_33890;
var state_33927__$1 = (function (){var statearr_33941 = state_33927;
(statearr_33941[(8)] = inst_33881__$1);

(statearr_33941[(9)] = inst_33882__$1);

(statearr_33941[(10)] = inst_33880__$1);

(statearr_33941[(14)] = inst_33889);

(statearr_33941[(12)] = inst_33879__$1);

return statearr_33941;
})();
var statearr_33942_33978 = state_33927__$1;
(statearr_33942_33978[(2)] = null);

(statearr_33942_33978[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (22))){
var state_33927__$1 = state_33927;
var statearr_33943_33979 = state_33927__$1;
(statearr_33943_33979[(2)] = null);

(statearr_33943_33979[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (6))){
var inst_33868 = (state_33927[(13)]);
var inst_33877 = (function (){var G__33944 = inst_33868;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33944) : f.call(null,G__33944));
})();
var inst_33878 = cljs.core.seq(inst_33877);
var inst_33879 = inst_33878;
var inst_33880 = null;
var inst_33881 = (0);
var inst_33882 = (0);
var state_33927__$1 = (function (){var statearr_33945 = state_33927;
(statearr_33945[(8)] = inst_33881);

(statearr_33945[(9)] = inst_33882);

(statearr_33945[(10)] = inst_33880);

(statearr_33945[(12)] = inst_33879);

return statearr_33945;
})();
var statearr_33946_33980 = state_33927__$1;
(statearr_33946_33980[(2)] = null);

(statearr_33946_33980[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (17))){
var inst_33893 = (state_33927[(7)]);
var inst_33897 = cljs.core.chunk_first(inst_33893);
var inst_33898 = cljs.core.chunk_rest(inst_33893);
var inst_33899 = cljs.core.count(inst_33897);
var inst_33879 = inst_33898;
var inst_33880 = inst_33897;
var inst_33881 = inst_33899;
var inst_33882 = (0);
var state_33927__$1 = (function (){var statearr_33947 = state_33927;
(statearr_33947[(8)] = inst_33881);

(statearr_33947[(9)] = inst_33882);

(statearr_33947[(10)] = inst_33880);

(statearr_33947[(12)] = inst_33879);

return statearr_33947;
})();
var statearr_33948_33981 = state_33927__$1;
(statearr_33948_33981[(2)] = null);

(statearr_33948_33981[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (3))){
var inst_33925 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33927__$1,inst_33925);
} else {
if((state_val_33928 === (12))){
var inst_33913 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33949_33982 = state_33927__$1;
(statearr_33949_33982[(2)] = inst_33913);

(statearr_33949_33982[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (2))){
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33927__$1,(4),in$);
} else {
if((state_val_33928 === (23))){
var inst_33921 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33950_33983 = state_33927__$1;
(statearr_33950_33983[(2)] = inst_33921);

(statearr_33950_33983[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (19))){
var inst_33908 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33951_33984 = state_33927__$1;
(statearr_33951_33984[(2)] = inst_33908);

(statearr_33951_33984[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (11))){
var inst_33893 = (state_33927[(7)]);
var inst_33879 = (state_33927[(12)]);
var inst_33893__$1 = cljs.core.seq(inst_33879);
var state_33927__$1 = (function (){var statearr_33952 = state_33927;
(statearr_33952[(7)] = inst_33893__$1);

return statearr_33952;
})();
if(inst_33893__$1){
var statearr_33953_33985 = state_33927__$1;
(statearr_33953_33985[(1)] = (14));

} else {
var statearr_33954_33986 = state_33927__$1;
(statearr_33954_33986[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (9))){
var inst_33915 = (state_33927[(2)]);
var inst_33916 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33927__$1 = (function (){var statearr_33955 = state_33927;
(statearr_33955[(15)] = inst_33915);

return statearr_33955;
})();
if(cljs.core.truth_(inst_33916)){
var statearr_33956_33987 = state_33927__$1;
(statearr_33956_33987[(1)] = (21));

} else {
var statearr_33957_33988 = state_33927__$1;
(statearr_33957_33988[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (5))){
var inst_33871 = cljs.core.async.close_BANG_(out);
var state_33927__$1 = state_33927;
var statearr_33958_33989 = state_33927__$1;
(statearr_33958_33989[(2)] = inst_33871);

(statearr_33958_33989[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (14))){
var inst_33893 = (state_33927[(7)]);
var inst_33895 = cljs.core.chunked_seq_QMARK_(inst_33893);
var state_33927__$1 = state_33927;
if(inst_33895){
var statearr_33959_33990 = state_33927__$1;
(statearr_33959_33990[(1)] = (17));

} else {
var statearr_33960_33991 = state_33927__$1;
(statearr_33960_33991[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (16))){
var inst_33911 = (state_33927[(2)]);
var state_33927__$1 = state_33927;
var statearr_33961_33992 = state_33927__$1;
(statearr_33961_33992[(2)] = inst_33911);

(statearr_33961_33992[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_33928 === (10))){
var inst_33882 = (state_33927[(9)]);
var inst_33880 = (state_33927[(10)]);
var inst_33887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33880,inst_33882);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33927__$1,(13),out,inst_33887);
} else {
if((state_val_33928 === (18))){
var inst_33893 = (state_33927[(7)]);
var inst_33902 = cljs.core.first(inst_33893);
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33927__$1,(20),out,inst_33902);
} else {
if((state_val_33928 === (8))){
var inst_33881 = (state_33927[(8)]);
var inst_33882 = (state_33927[(9)]);
var inst_33884 = (inst_33882 < inst_33881);
var inst_33885 = inst_33884;
var state_33927__$1 = state_33927;
if(cljs.core.truth_(inst_33885)){
var statearr_33962_33993 = state_33927__$1;
(statearr_33962_33993[(1)] = (10));

} else {
var statearr_33963_33994 = state_33927__$1;
(statearr_33963_33994[(1)] = (11));

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
var statearr_33967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33967[(0)] = state_machine__16137__auto__);

(statearr_33967[(1)] = (1));

return statearr_33967;
});
var state_machine__16137__auto____1 = (function (state_33927){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_33927);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e33968){if((e33968 instanceof Object)){
var ex__16140__auto__ = e33968;
var statearr_33969_33995 = state_33927;
(statearr_33969_33995[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33927);

return cljs.core.constant$keyword$97;
} else {
throw e33968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__33996 = state_33927;
state_33927 = G__33996;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_33927){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_33927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto__))
})();
var state__16218__auto__ = (function (){var statearr_33970 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_33970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto__);

return statearr_33970;
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
var c__16216__auto___34101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___34101,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___34101,out){
return (function (state_34076){
var state_val_34077 = (state_34076[(1)]);
if((state_val_34077 === (7))){
var inst_34071 = (state_34076[(2)]);
var state_34076__$1 = state_34076;
var statearr_34078_34102 = state_34076__$1;
(statearr_34078_34102[(2)] = inst_34071);

(statearr_34078_34102[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (1))){
var inst_34053 = null;
var state_34076__$1 = (function (){var statearr_34079 = state_34076;
(statearr_34079[(7)] = inst_34053);

return statearr_34079;
})();
var statearr_34080_34103 = state_34076__$1;
(statearr_34080_34103[(2)] = null);

(statearr_34080_34103[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (4))){
var inst_34056 = (state_34076[(8)]);
var inst_34056__$1 = (state_34076[(2)]);
var inst_34057 = (inst_34056__$1 == null);
var inst_34058 = cljs.core.not(inst_34057);
var state_34076__$1 = (function (){var statearr_34081 = state_34076;
(statearr_34081[(8)] = inst_34056__$1);

return statearr_34081;
})();
if(inst_34058){
var statearr_34082_34104 = state_34076__$1;
(statearr_34082_34104[(1)] = (5));

} else {
var statearr_34083_34105 = state_34076__$1;
(statearr_34083_34105[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (6))){
var state_34076__$1 = state_34076;
var statearr_34084_34106 = state_34076__$1;
(statearr_34084_34106[(2)] = null);

(statearr_34084_34106[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (3))){
var inst_34073 = (state_34076[(2)]);
var inst_34074 = cljs.core.async.close_BANG_(out);
var state_34076__$1 = (function (){var statearr_34085 = state_34076;
(statearr_34085[(9)] = inst_34073);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34076__$1,inst_34074);
} else {
if((state_val_34077 === (2))){
var state_34076__$1 = state_34076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34076__$1,(4),ch);
} else {
if((state_val_34077 === (11))){
var inst_34056 = (state_34076[(8)]);
var inst_34065 = (state_34076[(2)]);
var inst_34053 = inst_34056;
var state_34076__$1 = (function (){var statearr_34086 = state_34076;
(statearr_34086[(10)] = inst_34065);

(statearr_34086[(7)] = inst_34053);

return statearr_34086;
})();
var statearr_34087_34107 = state_34076__$1;
(statearr_34087_34107[(2)] = null);

(statearr_34087_34107[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (9))){
var inst_34056 = (state_34076[(8)]);
var state_34076__$1 = state_34076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34076__$1,(11),out,inst_34056);
} else {
if((state_val_34077 === (5))){
var inst_34056 = (state_34076[(8)]);
var inst_34053 = (state_34076[(7)]);
var inst_34060 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34056,inst_34053);
var state_34076__$1 = state_34076;
if(inst_34060){
var statearr_34089_34108 = state_34076__$1;
(statearr_34089_34108[(1)] = (8));

} else {
var statearr_34090_34109 = state_34076__$1;
(statearr_34090_34109[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (10))){
var inst_34068 = (state_34076[(2)]);
var state_34076__$1 = state_34076;
var statearr_34091_34110 = state_34076__$1;
(statearr_34091_34110[(2)] = inst_34068);

(statearr_34091_34110[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34077 === (8))){
var inst_34053 = (state_34076[(7)]);
var tmp34088 = inst_34053;
var inst_34053__$1 = tmp34088;
var state_34076__$1 = (function (){var statearr_34092 = state_34076;
(statearr_34092[(7)] = inst_34053__$1);

return statearr_34092;
})();
var statearr_34093_34111 = state_34076__$1;
(statearr_34093_34111[(2)] = null);

(statearr_34093_34111[(1)] = (2));


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
});})(c__16216__auto___34101,out))
;
return ((function (switch__16136__auto__,c__16216__auto___34101,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_34097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34097[(0)] = state_machine__16137__auto__);

(statearr_34097[(1)] = (1));

return statearr_34097;
});
var state_machine__16137__auto____1 = (function (state_34076){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_34076);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e34098){if((e34098 instanceof Object)){
var ex__16140__auto__ = e34098;
var statearr_34099_34112 = state_34076;
(statearr_34099_34112[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34076);

return cljs.core.constant$keyword$97;
} else {
throw e34098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34113 = state_34076;
state_34076 = G__34113;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_34076){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_34076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___34101,out))
})();
var state__16218__auto__ = (function (){var statearr_34100 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_34100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___34101);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___34101,out))
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
var c__16216__auto___34251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___34251,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___34251,out){
return (function (state_34221){
var state_val_34222 = (state_34221[(1)]);
if((state_val_34222 === (7))){
var inst_34217 = (state_34221[(2)]);
var state_34221__$1 = state_34221;
var statearr_34223_34252 = state_34221__$1;
(statearr_34223_34252[(2)] = inst_34217);

(statearr_34223_34252[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (1))){
var inst_34184 = (new Array(n));
var inst_34185 = inst_34184;
var inst_34186 = (0);
var state_34221__$1 = (function (){var statearr_34224 = state_34221;
(statearr_34224[(7)] = inst_34186);

(statearr_34224[(8)] = inst_34185);

return statearr_34224;
})();
var statearr_34225_34253 = state_34221__$1;
(statearr_34225_34253[(2)] = null);

(statearr_34225_34253[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (4))){
var inst_34189 = (state_34221[(9)]);
var inst_34189__$1 = (state_34221[(2)]);
var inst_34190 = (inst_34189__$1 == null);
var inst_34191 = cljs.core.not(inst_34190);
var state_34221__$1 = (function (){var statearr_34226 = state_34221;
(statearr_34226[(9)] = inst_34189__$1);

return statearr_34226;
})();
if(inst_34191){
var statearr_34227_34254 = state_34221__$1;
(statearr_34227_34254[(1)] = (5));

} else {
var statearr_34228_34255 = state_34221__$1;
(statearr_34228_34255[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (15))){
var inst_34211 = (state_34221[(2)]);
var state_34221__$1 = state_34221;
var statearr_34229_34256 = state_34221__$1;
(statearr_34229_34256[(2)] = inst_34211);

(statearr_34229_34256[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (13))){
var state_34221__$1 = state_34221;
var statearr_34230_34257 = state_34221__$1;
(statearr_34230_34257[(2)] = null);

(statearr_34230_34257[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (6))){
var inst_34186 = (state_34221[(7)]);
var inst_34207 = (inst_34186 > (0));
var state_34221__$1 = state_34221;
if(cljs.core.truth_(inst_34207)){
var statearr_34231_34258 = state_34221__$1;
(statearr_34231_34258[(1)] = (12));

} else {
var statearr_34232_34259 = state_34221__$1;
(statearr_34232_34259[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (3))){
var inst_34219 = (state_34221[(2)]);
var state_34221__$1 = state_34221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34221__$1,inst_34219);
} else {
if((state_val_34222 === (12))){
var inst_34185 = (state_34221[(8)]);
var inst_34209 = cljs.core.vec(inst_34185);
var state_34221__$1 = state_34221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34221__$1,(15),out,inst_34209);
} else {
if((state_val_34222 === (2))){
var state_34221__$1 = state_34221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34221__$1,(4),ch);
} else {
if((state_val_34222 === (11))){
var inst_34201 = (state_34221[(2)]);
var inst_34202 = (new Array(n));
var inst_34185 = inst_34202;
var inst_34186 = (0);
var state_34221__$1 = (function (){var statearr_34233 = state_34221;
(statearr_34233[(7)] = inst_34186);

(statearr_34233[(10)] = inst_34201);

(statearr_34233[(8)] = inst_34185);

return statearr_34233;
})();
var statearr_34234_34260 = state_34221__$1;
(statearr_34234_34260[(2)] = null);

(statearr_34234_34260[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (9))){
var inst_34185 = (state_34221[(8)]);
var inst_34199 = cljs.core.vec(inst_34185);
var state_34221__$1 = state_34221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34221__$1,(11),out,inst_34199);
} else {
if((state_val_34222 === (5))){
var inst_34194 = (state_34221[(11)]);
var inst_34186 = (state_34221[(7)]);
var inst_34189 = (state_34221[(9)]);
var inst_34185 = (state_34221[(8)]);
var inst_34193 = (inst_34185[inst_34186] = inst_34189);
var inst_34194__$1 = (inst_34186 + (1));
var inst_34195 = (inst_34194__$1 < n);
var state_34221__$1 = (function (){var statearr_34235 = state_34221;
(statearr_34235[(11)] = inst_34194__$1);

(statearr_34235[(12)] = inst_34193);

return statearr_34235;
})();
if(cljs.core.truth_(inst_34195)){
var statearr_34236_34261 = state_34221__$1;
(statearr_34236_34261[(1)] = (8));

} else {
var statearr_34237_34262 = state_34221__$1;
(statearr_34237_34262[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (14))){
var inst_34214 = (state_34221[(2)]);
var inst_34215 = cljs.core.async.close_BANG_(out);
var state_34221__$1 = (function (){var statearr_34239 = state_34221;
(statearr_34239[(13)] = inst_34214);

return statearr_34239;
})();
var statearr_34240_34263 = state_34221__$1;
(statearr_34240_34263[(2)] = inst_34215);

(statearr_34240_34263[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (10))){
var inst_34205 = (state_34221[(2)]);
var state_34221__$1 = state_34221;
var statearr_34241_34264 = state_34221__$1;
(statearr_34241_34264[(2)] = inst_34205);

(statearr_34241_34264[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34222 === (8))){
var inst_34194 = (state_34221[(11)]);
var inst_34185 = (state_34221[(8)]);
var tmp34238 = inst_34185;
var inst_34185__$1 = tmp34238;
var inst_34186 = inst_34194;
var state_34221__$1 = (function (){var statearr_34242 = state_34221;
(statearr_34242[(7)] = inst_34186);

(statearr_34242[(8)] = inst_34185__$1);

return statearr_34242;
})();
var statearr_34243_34265 = state_34221__$1;
(statearr_34243_34265[(2)] = null);

(statearr_34243_34265[(1)] = (2));


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
});})(c__16216__auto___34251,out))
;
return ((function (switch__16136__auto__,c__16216__auto___34251,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_34247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34247[(0)] = state_machine__16137__auto__);

(statearr_34247[(1)] = (1));

return statearr_34247;
});
var state_machine__16137__auto____1 = (function (state_34221){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_34221);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e34248){if((e34248 instanceof Object)){
var ex__16140__auto__ = e34248;
var statearr_34249_34266 = state_34221;
(statearr_34249_34266[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34221);

return cljs.core.constant$keyword$97;
} else {
throw e34248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34267 = state_34221;
state_34221 = G__34267;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_34221){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_34221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___34251,out))
})();
var state__16218__auto__ = (function (){var statearr_34250 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_34250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___34251);

return statearr_34250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___34251,out))
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
var c__16216__auto___34415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16216__auto___34415,out){
return (function (){
var f__16217__auto__ = (function (){var switch__16136__auto__ = ((function (c__16216__auto___34415,out){
return (function (state_34384){
var state_val_34385 = (state_34384[(1)]);
if((state_val_34385 === (7))){
var inst_34380 = (state_34384[(2)]);
var state_34384__$1 = state_34384;
var statearr_34386_34416 = state_34384__$1;
(statearr_34386_34416[(2)] = inst_34380);

(statearr_34386_34416[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (1))){
var inst_34343 = [];
var inst_34344 = inst_34343;
var inst_34345 = cljs.core.constant$keyword$112;
var state_34384__$1 = (function (){var statearr_34387 = state_34384;
(statearr_34387[(7)] = inst_34345);

(statearr_34387[(8)] = inst_34344);

return statearr_34387;
})();
var statearr_34388_34417 = state_34384__$1;
(statearr_34388_34417[(2)] = null);

(statearr_34388_34417[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (4))){
var inst_34348 = (state_34384[(9)]);
var inst_34348__$1 = (state_34384[(2)]);
var inst_34349 = (inst_34348__$1 == null);
var inst_34350 = cljs.core.not(inst_34349);
var state_34384__$1 = (function (){var statearr_34389 = state_34384;
(statearr_34389[(9)] = inst_34348__$1);

return statearr_34389;
})();
if(inst_34350){
var statearr_34390_34418 = state_34384__$1;
(statearr_34390_34418[(1)] = (5));

} else {
var statearr_34391_34419 = state_34384__$1;
(statearr_34391_34419[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (15))){
var inst_34374 = (state_34384[(2)]);
var state_34384__$1 = state_34384;
var statearr_34392_34420 = state_34384__$1;
(statearr_34392_34420[(2)] = inst_34374);

(statearr_34392_34420[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (13))){
var state_34384__$1 = state_34384;
var statearr_34393_34421 = state_34384__$1;
(statearr_34393_34421[(2)] = null);

(statearr_34393_34421[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (6))){
var inst_34344 = (state_34384[(8)]);
var inst_34369 = inst_34344.length;
var inst_34370 = (inst_34369 > (0));
var state_34384__$1 = state_34384;
if(cljs.core.truth_(inst_34370)){
var statearr_34394_34422 = state_34384__$1;
(statearr_34394_34422[(1)] = (12));

} else {
var statearr_34395_34423 = state_34384__$1;
(statearr_34395_34423[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (3))){
var inst_34382 = (state_34384[(2)]);
var state_34384__$1 = state_34384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34384__$1,inst_34382);
} else {
if((state_val_34385 === (12))){
var inst_34344 = (state_34384[(8)]);
var inst_34372 = cljs.core.vec(inst_34344);
var state_34384__$1 = state_34384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34384__$1,(15),out,inst_34372);
} else {
if((state_val_34385 === (2))){
var state_34384__$1 = state_34384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34384__$1,(4),ch);
} else {
if((state_val_34385 === (11))){
var inst_34352 = (state_34384[(10)]);
var inst_34348 = (state_34384[(9)]);
var inst_34362 = (state_34384[(2)]);
var inst_34363 = [];
var inst_34364 = inst_34363.push(inst_34348);
var inst_34344 = inst_34363;
var inst_34345 = inst_34352;
var state_34384__$1 = (function (){var statearr_34396 = state_34384;
(statearr_34396[(11)] = inst_34362);

(statearr_34396[(12)] = inst_34364);

(statearr_34396[(7)] = inst_34345);

(statearr_34396[(8)] = inst_34344);

return statearr_34396;
})();
var statearr_34397_34424 = state_34384__$1;
(statearr_34397_34424[(2)] = null);

(statearr_34397_34424[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (9))){
var inst_34344 = (state_34384[(8)]);
var inst_34360 = cljs.core.vec(inst_34344);
var state_34384__$1 = state_34384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34384__$1,(11),out,inst_34360);
} else {
if((state_val_34385 === (5))){
var inst_34345 = (state_34384[(7)]);
var inst_34352 = (state_34384[(10)]);
var inst_34348 = (state_34384[(9)]);
var inst_34352__$1 = (function (){var G__34398 = inst_34348;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34398) : f.call(null,G__34398));
})();
var inst_34353 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34352__$1,inst_34345);
var inst_34354 = cljs.core.keyword_identical_QMARK_(inst_34345,cljs.core.constant$keyword$112);
var inst_34355 = (inst_34353) || (inst_34354);
var state_34384__$1 = (function (){var statearr_34399 = state_34384;
(statearr_34399[(10)] = inst_34352__$1);

return statearr_34399;
})();
if(cljs.core.truth_(inst_34355)){
var statearr_34400_34425 = state_34384__$1;
(statearr_34400_34425[(1)] = (8));

} else {
var statearr_34401_34426 = state_34384__$1;
(statearr_34401_34426[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (14))){
var inst_34377 = (state_34384[(2)]);
var inst_34378 = cljs.core.async.close_BANG_(out);
var state_34384__$1 = (function (){var statearr_34403 = state_34384;
(statearr_34403[(13)] = inst_34377);

return statearr_34403;
})();
var statearr_34404_34427 = state_34384__$1;
(statearr_34404_34427[(2)] = inst_34378);

(statearr_34404_34427[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (10))){
var inst_34367 = (state_34384[(2)]);
var state_34384__$1 = state_34384;
var statearr_34405_34428 = state_34384__$1;
(statearr_34405_34428[(2)] = inst_34367);

(statearr_34405_34428[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_34385 === (8))){
var inst_34344 = (state_34384[(8)]);
var inst_34352 = (state_34384[(10)]);
var inst_34348 = (state_34384[(9)]);
var inst_34357 = inst_34344.push(inst_34348);
var tmp34402 = inst_34344;
var inst_34344__$1 = tmp34402;
var inst_34345 = inst_34352;
var state_34384__$1 = (function (){var statearr_34406 = state_34384;
(statearr_34406[(7)] = inst_34345);

(statearr_34406[(8)] = inst_34344__$1);

(statearr_34406[(14)] = inst_34357);

return statearr_34406;
})();
var statearr_34407_34429 = state_34384__$1;
(statearr_34407_34429[(2)] = null);

(statearr_34407_34429[(1)] = (2));


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
});})(c__16216__auto___34415,out))
;
return ((function (switch__16136__auto__,c__16216__auto___34415,out){
return (function() {
var state_machine__16137__auto__ = null;
var state_machine__16137__auto____0 = (function (){
var statearr_34411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34411[(0)] = state_machine__16137__auto__);

(statearr_34411[(1)] = (1));

return statearr_34411;
});
var state_machine__16137__auto____1 = (function (state_34384){
while(true){
var ret_value__16138__auto__ = (function (){try{while(true){
var result__16139__auto__ = switch__16136__auto__(state_34384);
if(cljs.core.keyword_identical_QMARK_(result__16139__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16139__auto__;
}
break;
}
}catch (e34412){if((e34412 instanceof Object)){
var ex__16140__auto__ = e34412;
var statearr_34413_34430 = state_34384;
(statearr_34413_34430[(5)] = ex__16140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34384);

return cljs.core.constant$keyword$97;
} else {
throw e34412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16138__auto__,cljs.core.constant$keyword$97)){
var G__34431 = state_34384;
state_34384 = G__34431;
continue;
} else {
return ret_value__16138__auto__;
}
break;
}
});
state_machine__16137__auto__ = function(state_34384){
switch(arguments.length){
case 0:
return state_machine__16137__auto____0.call(this);
case 1:
return state_machine__16137__auto____1.call(this,state_34384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16137__auto____0;
state_machine__16137__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16137__auto____1;
return state_machine__16137__auto__;
})()
;})(switch__16136__auto__,c__16216__auto___34415,out))
})();
var state__16218__auto__ = (function (){var statearr_34414 = (function (){return (f__16217__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16217__auto__.cljs$core$IFn$_invoke$arity$0() : f__16217__auto__.call(null));
})();
(statearr_34414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16216__auto___34415);

return statearr_34414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16218__auto__);
});})(c__16216__auto___34415,out))
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
