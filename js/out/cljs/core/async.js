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
if(typeof cljs.core.async.t28273 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28273 = (function (f,fn_handler,meta28274){
this.f = f;
this.fn_handler = fn_handler;
this.meta28274 = meta28274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28275){
var self__ = this;
var _28275__$1 = this;
return self__.meta28274;
});

cljs.core.async.t28273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28275,meta28274__$1){
var self__ = this;
var _28275__$1 = this;
return (new cljs.core.async.t28273(self__.f,self__.fn_handler,meta28274__$1));
});

cljs.core.async.t28273.cljs$lang$type = true;

cljs.core.async.t28273.cljs$lang$ctorStr = "cljs.core.async/t28273";

cljs.core.async.t28273.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28273");
});

cljs.core.async.__GT_t28273 = (function __GT_t28273(f__$1,fn_handler__$1,meta28274){
return (new cljs.core.async.t28273(f__$1,fn_handler__$1,meta28274));
});

}

return (new cljs.core.async.t28273(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__28277 = buff;
if(G__28277){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__28277.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28277.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28277);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__28277);
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
var val_28294 = (function (){var G__28291 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28291) : cljs.core.deref.call(null,G__28291));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28292_28295 = val_28294;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28292_28295) : fn1.call(null,G__28292_28295));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28294,ret){
return (function (){
var G__28293 = val_28294;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28293) : fn1.call(null,G__28293));
});})(val_28294,ret))
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
var G__28304 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28304) : cljs.core.deref.call(null,G__28304));
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
var ret = (function (){var G__28305 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28305) : cljs.core.deref.call(null,G__28305));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__28306_28308 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28306_28308) : fn1.call(null,G__28306_28308));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__28307 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__28307) : fn1.call(null,G__28307));
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
var n__4515__auto___28309 = n;
var x_28310 = (0);
while(true){
if((x_28310 < n__4515__auto___28309)){
(a[x_28310] = (0));

var G__28311 = (x_28310 + (1));
x_28310 = G__28311;
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

var G__28312 = (i + (1));
i = G__28312;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__28320 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28320) : cljs.core.atom.call(null,G__28320));
})();
if(typeof cljs.core.async.t28321 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28321 = (function (flag,alt_flag,meta28322){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28322 = meta28322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28321.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28324 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28324) : cljs.core.deref.call(null,G__28324));
});})(flag))
;

cljs.core.async.t28321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__28325_28327 = self__.flag;
var G__28326_28328 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28325_28327,G__28326_28328) : cljs.core.reset_BANG_.call(null,G__28325_28327,G__28326_28328));

return true;
});})(flag))
;

cljs.core.async.t28321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28323){
var self__ = this;
var _28323__$1 = this;
return self__.meta28322;
});})(flag))
;

cljs.core.async.t28321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28323,meta28322__$1){
var self__ = this;
var _28323__$1 = this;
return (new cljs.core.async.t28321(self__.flag,self__.alt_flag,meta28322__$1));
});})(flag))
;

cljs.core.async.t28321.cljs$lang$type = true;

cljs.core.async.t28321.cljs$lang$ctorStr = "cljs.core.async/t28321";

cljs.core.async.t28321.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28321");
});})(flag))
;

cljs.core.async.__GT_t28321 = ((function (flag){
return (function __GT_t28321(flag__$1,alt_flag__$1,meta28322){
return (new cljs.core.async.t28321(flag__$1,alt_flag__$1,meta28322));
});})(flag))
;

}

return (new cljs.core.async.t28321(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t28332 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28332 = (function (cb,flag,alt_handler,meta28333){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28333 = meta28333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28332.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t28332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t28332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28334){
var self__ = this;
var _28334__$1 = this;
return self__.meta28333;
});

cljs.core.async.t28332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28334,meta28333__$1){
var self__ = this;
var _28334__$1 = this;
return (new cljs.core.async.t28332(self__.cb,self__.flag,self__.alt_handler,meta28333__$1));
});

cljs.core.async.t28332.cljs$lang$type = true;

cljs.core.async.t28332.cljs$lang$ctorStr = "cljs.core.async/t28332";

cljs.core.async.t28332.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t28332");
});

cljs.core.async.__GT_t28332 = (function __GT_t28332(cb__$1,flag__$1,alt_handler__$1,meta28333){
return (new cljs.core.async.t28332(cb__$1,flag__$1,alt_handler__$1,meta28333));
});

}

return (new cljs.core.async.t28332(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__28342 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28342) : port.call(null,G__28342));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__28343 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__28343) : port.call(null,G__28343));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28335_SHARP_){
var G__28344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28335_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28344) : fret.call(null,G__28344));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28336_SHARP_){
var G__28345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28336_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28345) : fret.call(null,G__28345));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28346 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28346) : cljs.core.deref.call(null,G__28346));
})(),(function (){var or__3628__auto__ = wport;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28347 = (i + (1));
i = G__28347;
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
var alts_BANG___delegate = function (ports,p__28348){
var map__28350 = p__28348;
var map__28350__$1 = ((cljs.core.seq_QMARK_(map__28350))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28350):map__28350);
var opts = map__28350__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28348 = null;
if (arguments.length > 1) {
  p__28348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__28348);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28351){
var ports = cljs.core.first(arglist__28351);
var p__28348 = cljs.core.rest(arglist__28351);
return alts_BANG___delegate(ports,p__28348);
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
var c__16610__auto___28449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___28449){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___28449){
return (function (state_28425){
var state_val_28426 = (state_28425[(1)]);
if((state_val_28426 === (7))){
var inst_28421 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28427_28450 = state_28425__$1;
(statearr_28427_28450[(2)] = inst_28421);

(statearr_28427_28450[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (1))){
var state_28425__$1 = state_28425;
var statearr_28428_28451 = state_28425__$1;
(statearr_28428_28451[(2)] = null);

(statearr_28428_28451[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (4))){
var inst_28404 = (state_28425[(7)]);
var inst_28404__$1 = (state_28425[(2)]);
var inst_28405 = (inst_28404__$1 == null);
var state_28425__$1 = (function (){var statearr_28429 = state_28425;
(statearr_28429[(7)] = inst_28404__$1);

return statearr_28429;
})();
if(cljs.core.truth_(inst_28405)){
var statearr_28430_28452 = state_28425__$1;
(statearr_28430_28452[(1)] = (5));

} else {
var statearr_28431_28453 = state_28425__$1;
(statearr_28431_28453[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (13))){
var state_28425__$1 = state_28425;
var statearr_28432_28454 = state_28425__$1;
(statearr_28432_28454[(2)] = null);

(statearr_28432_28454[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (6))){
var inst_28404 = (state_28425[(7)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28425__$1,(11),to,inst_28404);
} else {
if((state_val_28426 === (3))){
var inst_28423 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28425__$1,inst_28423);
} else {
if((state_val_28426 === (12))){
var state_28425__$1 = state_28425;
var statearr_28433_28455 = state_28425__$1;
(statearr_28433_28455[(2)] = null);

(statearr_28433_28455[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (2))){
var state_28425__$1 = state_28425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28425__$1,(4),from);
} else {
if((state_val_28426 === (11))){
var inst_28414 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
if(cljs.core.truth_(inst_28414)){
var statearr_28434_28456 = state_28425__$1;
(statearr_28434_28456[(1)] = (12));

} else {
var statearr_28435_28457 = state_28425__$1;
(statearr_28435_28457[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (9))){
var state_28425__$1 = state_28425;
var statearr_28436_28458 = state_28425__$1;
(statearr_28436_28458[(2)] = null);

(statearr_28436_28458[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (5))){
var state_28425__$1 = state_28425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28437_28459 = state_28425__$1;
(statearr_28437_28459[(1)] = (8));

} else {
var statearr_28438_28460 = state_28425__$1;
(statearr_28438_28460[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (14))){
var inst_28419 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28439_28461 = state_28425__$1;
(statearr_28439_28461[(2)] = inst_28419);

(statearr_28439_28461[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (10))){
var inst_28411 = (state_28425[(2)]);
var state_28425__$1 = state_28425;
var statearr_28440_28462 = state_28425__$1;
(statearr_28440_28462[(2)] = inst_28411);

(statearr_28440_28462[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28426 === (8))){
var inst_28408 = cljs.core.async.close_BANG_(to);
var state_28425__$1 = state_28425;
var statearr_28441_28463 = state_28425__$1;
(statearr_28441_28463[(2)] = inst_28408);

(statearr_28441_28463[(1)] = (10));


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
});})(c__16610__auto___28449))
;
return ((function (switch__16530__auto__,c__16610__auto___28449){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28445 = [null,null,null,null,null,null,null,null];
(statearr_28445[(0)] = state_machine__16531__auto__);

(statearr_28445[(1)] = (1));

return statearr_28445;
});
var state_machine__16531__auto____1 = (function (state_28425){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28425);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28446){if((e28446 instanceof Object)){
var ex__16534__auto__ = e28446;
var statearr_28447_28464 = state_28425;
(statearr_28447_28464[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28425);

return cljs.core.constant$keyword$97;
} else {
throw e28446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28465 = state_28425;
state_28425 = G__28465;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28425){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___28449))
})();
var state__16612__auto__ = (function (){var statearr_28448 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28449);

return statearr_28448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___28449))
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
return (function (p__28651){
var vec__28652 = p__28651;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28652,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28652,(1),null);
var job = vec__28652;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16610__auto___28836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___28836,res,vec__28652,v,p,job,jobs,results){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___28836,res,vec__28652,v,p,job,jobs,results){
return (function (state_28657){
var state_val_28658 = (state_28657[(1)]);
if((state_val_28658 === (2))){
var inst_28654 = (state_28657[(2)]);
var inst_28655 = cljs.core.async.close_BANG_(res);
var state_28657__$1 = (function (){var statearr_28659 = state_28657;
(statearr_28659[(7)] = inst_28654);

return statearr_28659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28657__$1,inst_28655);
} else {
if((state_val_28658 === (1))){
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28657__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16610__auto___28836,res,vec__28652,v,p,job,jobs,results))
;
return ((function (switch__16530__auto__,c__16610__auto___28836,res,vec__28652,v,p,job,jobs,results){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28663 = [null,null,null,null,null,null,null,null];
(statearr_28663[(0)] = state_machine__16531__auto__);

(statearr_28663[(1)] = (1));

return statearr_28663;
});
var state_machine__16531__auto____1 = (function (state_28657){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28657);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28664){if((e28664 instanceof Object)){
var ex__16534__auto__ = e28664;
var statearr_28665_28837 = state_28657;
(statearr_28665_28837[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28657);

return cljs.core.constant$keyword$97;
} else {
throw e28664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28838 = state_28657;
state_28657 = G__28838;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28657){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___28836,res,vec__28652,v,p,job,jobs,results))
})();
var state__16612__auto__ = (function (){var statearr_28666 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28836);

return statearr_28666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___28836,res,vec__28652,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28667){
var vec__28668 = p__28667;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28668,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28668,(1),null);
var job = vec__28668;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__28669_28839 = v;
var G__28670_28840 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__28669_28839,G__28670_28840) : xf.call(null,G__28669_28839,G__28670_28840));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4515__auto___28841 = n;
var __28842 = (0);
while(true){
if((__28842 < n__4515__auto___28841)){
var G__28671_28843 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28671_28843) {
case "async":
var c__16610__auto___28845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28842,c__16610__auto___28845,G__28671_28843,n__4515__auto___28841,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (__28842,c__16610__auto___28845,G__28671_28843,n__4515__auto___28841,jobs,results,process,async){
return (function (state_28684){
var state_val_28685 = (state_28684[(1)]);
if((state_val_28685 === (7))){
var inst_28680 = (state_28684[(2)]);
var state_28684__$1 = state_28684;
var statearr_28686_28846 = state_28684__$1;
(statearr_28686_28846[(2)] = inst_28680);

(statearr_28686_28846[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28685 === (6))){
var state_28684__$1 = state_28684;
var statearr_28687_28847 = state_28684__$1;
(statearr_28687_28847[(2)] = null);

(statearr_28687_28847[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28685 === (5))){
var state_28684__$1 = state_28684;
var statearr_28688_28848 = state_28684__$1;
(statearr_28688_28848[(2)] = null);

(statearr_28688_28848[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28685 === (4))){
var inst_28674 = (state_28684[(2)]);
var inst_28675 = async(inst_28674);
var state_28684__$1 = state_28684;
if(cljs.core.truth_(inst_28675)){
var statearr_28689_28849 = state_28684__$1;
(statearr_28689_28849[(1)] = (5));

} else {
var statearr_28690_28850 = state_28684__$1;
(statearr_28690_28850[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28685 === (3))){
var inst_28682 = (state_28684[(2)]);
var state_28684__$1 = state_28684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28684__$1,inst_28682);
} else {
if((state_val_28685 === (2))){
var state_28684__$1 = state_28684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28684__$1,(4),jobs);
} else {
if((state_val_28685 === (1))){
var state_28684__$1 = state_28684;
var statearr_28691_28851 = state_28684__$1;
(statearr_28691_28851[(2)] = null);

(statearr_28691_28851[(1)] = (2));


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
});})(__28842,c__16610__auto___28845,G__28671_28843,n__4515__auto___28841,jobs,results,process,async))
;
return ((function (__28842,switch__16530__auto__,c__16610__auto___28845,G__28671_28843,n__4515__auto___28841,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28695 = [null,null,null,null,null,null,null];
(statearr_28695[(0)] = state_machine__16531__auto__);

(statearr_28695[(1)] = (1));

return statearr_28695;
});
var state_machine__16531__auto____1 = (function (state_28684){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28684);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28696){if((e28696 instanceof Object)){
var ex__16534__auto__ = e28696;
var statearr_28697_28852 = state_28684;
(statearr_28697_28852[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28684);

return cljs.core.constant$keyword$97;
} else {
throw e28696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28853 = state_28684;
state_28684 = G__28853;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28684){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(__28842,switch__16530__auto__,c__16610__auto___28845,G__28671_28843,n__4515__auto___28841,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28698 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28845);

return statearr_28698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(__28842,c__16610__auto___28845,G__28671_28843,n__4515__auto___28841,jobs,results,process,async))
);


break;
case "compute":
var c__16610__auto___28854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__28842,c__16610__auto___28854,G__28671_28843,n__4515__auto___28841,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (__28842,c__16610__auto___28854,G__28671_28843,n__4515__auto___28841,jobs,results,process,async){
return (function (state_28711){
var state_val_28712 = (state_28711[(1)]);
if((state_val_28712 === (7))){
var inst_28707 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28713_28855 = state_28711__$1;
(statearr_28713_28855[(2)] = inst_28707);

(statearr_28713_28855[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28712 === (6))){
var state_28711__$1 = state_28711;
var statearr_28714_28856 = state_28711__$1;
(statearr_28714_28856[(2)] = null);

(statearr_28714_28856[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28712 === (5))){
var state_28711__$1 = state_28711;
var statearr_28715_28857 = state_28711__$1;
(statearr_28715_28857[(2)] = null);

(statearr_28715_28857[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28712 === (4))){
var inst_28701 = (state_28711[(2)]);
var inst_28702 = process(inst_28701);
var state_28711__$1 = state_28711;
if(cljs.core.truth_(inst_28702)){
var statearr_28716_28858 = state_28711__$1;
(statearr_28716_28858[(1)] = (5));

} else {
var statearr_28717_28859 = state_28711__$1;
(statearr_28717_28859[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28712 === (3))){
var inst_28709 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28711__$1,inst_28709);
} else {
if((state_val_28712 === (2))){
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28711__$1,(4),jobs);
} else {
if((state_val_28712 === (1))){
var state_28711__$1 = state_28711;
var statearr_28718_28860 = state_28711__$1;
(statearr_28718_28860[(2)] = null);

(statearr_28718_28860[(1)] = (2));


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
});})(__28842,c__16610__auto___28854,G__28671_28843,n__4515__auto___28841,jobs,results,process,async))
;
return ((function (__28842,switch__16530__auto__,c__16610__auto___28854,G__28671_28843,n__4515__auto___28841,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28722 = [null,null,null,null,null,null,null];
(statearr_28722[(0)] = state_machine__16531__auto__);

(statearr_28722[(1)] = (1));

return statearr_28722;
});
var state_machine__16531__auto____1 = (function (state_28711){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28711);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28723){if((e28723 instanceof Object)){
var ex__16534__auto__ = e28723;
var statearr_28724_28861 = state_28711;
(statearr_28724_28861[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28711);

return cljs.core.constant$keyword$97;
} else {
throw e28723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28862 = state_28711;
state_28711 = G__28862;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28711){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(__28842,switch__16530__auto__,c__16610__auto___28854,G__28671_28843,n__4515__auto___28841,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28725 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28854);

return statearr_28725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(__28842,c__16610__auto___28854,G__28671_28843,n__4515__auto___28841,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28863 = (__28842 + (1));
__28842 = G__28863;
continue;
} else {
}
break;
}

var c__16610__auto___28864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___28864,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___28864,jobs,results,process,async){
return (function (state_28747){
var state_val_28748 = (state_28747[(1)]);
if((state_val_28748 === (9))){
var inst_28740 = (state_28747[(2)]);
var state_28747__$1 = (function (){var statearr_28749 = state_28747;
(statearr_28749[(7)] = inst_28740);

return statearr_28749;
})();
var statearr_28750_28865 = state_28747__$1;
(statearr_28750_28865[(2)] = null);

(statearr_28750_28865[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28748 === (8))){
var inst_28733 = (state_28747[(8)]);
var inst_28738 = (state_28747[(2)]);
var state_28747__$1 = (function (){var statearr_28751 = state_28747;
(statearr_28751[(9)] = inst_28738);

return statearr_28751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28747__$1,(9),results,inst_28733);
} else {
if((state_val_28748 === (7))){
var inst_28743 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
var statearr_28752_28866 = state_28747__$1;
(statearr_28752_28866[(2)] = inst_28743);

(statearr_28752_28866[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28748 === (6))){
var inst_28733 = (state_28747[(8)]);
var inst_28728 = (state_28747[(10)]);
var inst_28733__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28735 = [inst_28728,inst_28733__$1];
var inst_28736 = (new cljs.core.PersistentVector(null,2,(5),inst_28734,inst_28735,null));
var state_28747__$1 = (function (){var statearr_28753 = state_28747;
(statearr_28753[(8)] = inst_28733__$1);

return statearr_28753;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28747__$1,(8),jobs,inst_28736);
} else {
if((state_val_28748 === (5))){
var inst_28731 = cljs.core.async.close_BANG_(jobs);
var state_28747__$1 = state_28747;
var statearr_28754_28867 = state_28747__$1;
(statearr_28754_28867[(2)] = inst_28731);

(statearr_28754_28867[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28748 === (4))){
var inst_28728 = (state_28747[(10)]);
var inst_28728__$1 = (state_28747[(2)]);
var inst_28729 = (inst_28728__$1 == null);
var state_28747__$1 = (function (){var statearr_28755 = state_28747;
(statearr_28755[(10)] = inst_28728__$1);

return statearr_28755;
})();
if(cljs.core.truth_(inst_28729)){
var statearr_28756_28868 = state_28747__$1;
(statearr_28756_28868[(1)] = (5));

} else {
var statearr_28757_28869 = state_28747__$1;
(statearr_28757_28869[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28748 === (3))){
var inst_28745 = (state_28747[(2)]);
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28747__$1,inst_28745);
} else {
if((state_val_28748 === (2))){
var state_28747__$1 = state_28747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28747__$1,(4),from);
} else {
if((state_val_28748 === (1))){
var state_28747__$1 = state_28747;
var statearr_28758_28870 = state_28747__$1;
(statearr_28758_28870[(2)] = null);

(statearr_28758_28870[(1)] = (2));


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
});})(c__16610__auto___28864,jobs,results,process,async))
;
return ((function (switch__16530__auto__,c__16610__auto___28864,jobs,results,process,async){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_28762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28762[(0)] = state_machine__16531__auto__);

(statearr_28762[(1)] = (1));

return statearr_28762;
});
var state_machine__16531__auto____1 = (function (state_28747){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28747);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28763){if((e28763 instanceof Object)){
var ex__16534__auto__ = e28763;
var statearr_28764_28871 = state_28747;
(statearr_28764_28871[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28747);

return cljs.core.constant$keyword$97;
} else {
throw e28763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28872 = state_28747;
state_28747 = G__28872;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28747){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___28864,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28765 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___28864);

return statearr_28765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___28864,jobs,results,process,async))
);


var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__,jobs,results,process,async){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__,jobs,results,process,async){
return (function (state_28803){
var state_val_28804 = (state_28803[(1)]);
if((state_val_28804 === (7))){
var inst_28799 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28805_28873 = state_28803__$1;
(statearr_28805_28873[(2)] = inst_28799);

(statearr_28805_28873[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (20))){
var state_28803__$1 = state_28803;
var statearr_28806_28874 = state_28803__$1;
(statearr_28806_28874[(2)] = null);

(statearr_28806_28874[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (1))){
var state_28803__$1 = state_28803;
var statearr_28807_28875 = state_28803__$1;
(statearr_28807_28875[(2)] = null);

(statearr_28807_28875[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (4))){
var inst_28768 = (state_28803[(7)]);
var inst_28768__$1 = (state_28803[(2)]);
var inst_28769 = (inst_28768__$1 == null);
var state_28803__$1 = (function (){var statearr_28808 = state_28803;
(statearr_28808[(7)] = inst_28768__$1);

return statearr_28808;
})();
if(cljs.core.truth_(inst_28769)){
var statearr_28809_28876 = state_28803__$1;
(statearr_28809_28876[(1)] = (5));

} else {
var statearr_28810_28877 = state_28803__$1;
(statearr_28810_28877[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (15))){
var inst_28781 = (state_28803[(8)]);
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28803__$1,(18),to,inst_28781);
} else {
if((state_val_28804 === (21))){
var inst_28794 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28811_28878 = state_28803__$1;
(statearr_28811_28878[(2)] = inst_28794);

(statearr_28811_28878[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (13))){
var inst_28796 = (state_28803[(2)]);
var state_28803__$1 = (function (){var statearr_28812 = state_28803;
(statearr_28812[(9)] = inst_28796);

return statearr_28812;
})();
var statearr_28813_28879 = state_28803__$1;
(statearr_28813_28879[(2)] = null);

(statearr_28813_28879[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (6))){
var inst_28768 = (state_28803[(7)]);
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28803__$1,(11),inst_28768);
} else {
if((state_val_28804 === (17))){
var inst_28789 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
if(cljs.core.truth_(inst_28789)){
var statearr_28814_28880 = state_28803__$1;
(statearr_28814_28880[(1)] = (19));

} else {
var statearr_28815_28881 = state_28803__$1;
(statearr_28815_28881[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (3))){
var inst_28801 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28803__$1,inst_28801);
} else {
if((state_val_28804 === (12))){
var inst_28778 = (state_28803[(10)]);
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28803__$1,(14),inst_28778);
} else {
if((state_val_28804 === (2))){
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28803__$1,(4),results);
} else {
if((state_val_28804 === (19))){
var state_28803__$1 = state_28803;
var statearr_28816_28882 = state_28803__$1;
(statearr_28816_28882[(2)] = null);

(statearr_28816_28882[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (11))){
var inst_28778 = (state_28803[(2)]);
var state_28803__$1 = (function (){var statearr_28817 = state_28803;
(statearr_28817[(10)] = inst_28778);

return statearr_28817;
})();
var statearr_28818_28883 = state_28803__$1;
(statearr_28818_28883[(2)] = null);

(statearr_28818_28883[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (9))){
var state_28803__$1 = state_28803;
var statearr_28819_28884 = state_28803__$1;
(statearr_28819_28884[(2)] = null);

(statearr_28819_28884[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (5))){
var state_28803__$1 = state_28803;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28820_28885 = state_28803__$1;
(statearr_28820_28885[(1)] = (8));

} else {
var statearr_28821_28886 = state_28803__$1;
(statearr_28821_28886[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (14))){
var inst_28783 = (state_28803[(11)]);
var inst_28781 = (state_28803[(8)]);
var inst_28781__$1 = (state_28803[(2)]);
var inst_28782 = (inst_28781__$1 == null);
var inst_28783__$1 = cljs.core.not(inst_28782);
var state_28803__$1 = (function (){var statearr_28822 = state_28803;
(statearr_28822[(11)] = inst_28783__$1);

(statearr_28822[(8)] = inst_28781__$1);

return statearr_28822;
})();
if(inst_28783__$1){
var statearr_28823_28887 = state_28803__$1;
(statearr_28823_28887[(1)] = (15));

} else {
var statearr_28824_28888 = state_28803__$1;
(statearr_28824_28888[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (16))){
var inst_28783 = (state_28803[(11)]);
var state_28803__$1 = state_28803;
var statearr_28825_28889 = state_28803__$1;
(statearr_28825_28889[(2)] = inst_28783);

(statearr_28825_28889[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (10))){
var inst_28775 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28826_28890 = state_28803__$1;
(statearr_28826_28890[(2)] = inst_28775);

(statearr_28826_28890[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (18))){
var inst_28786 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28827_28891 = state_28803__$1;
(statearr_28827_28891[(2)] = inst_28786);

(statearr_28827_28891[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28804 === (8))){
var inst_28772 = cljs.core.async.close_BANG_(to);
var state_28803__$1 = state_28803;
var statearr_28828_28892 = state_28803__$1;
(statearr_28828_28892[(2)] = inst_28772);

(statearr_28828_28892[(1)] = (10));


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
var statearr_28832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28832[(0)] = state_machine__16531__auto__);

(statearr_28832[(1)] = (1));

return statearr_28832;
});
var state_machine__16531__auto____1 = (function (state_28803){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28803);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e28833){if((e28833 instanceof Object)){
var ex__16534__auto__ = e28833;
var statearr_28834_28893 = state_28803;
(statearr_28834_28893[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28803);

return cljs.core.constant$keyword$97;
} else {
throw e28833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__28894 = state_28803;
state_28803 = G__28894;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28803){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__,jobs,results,process,async))
})();
var state__16612__auto__ = (function (){var statearr_28835 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_28835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_28835;
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
var c__16610__auto___29017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___29017,tc,fc){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___29017,tc,fc){
return (function (state_28991){
var state_val_28992 = (state_28991[(1)]);
if((state_val_28992 === (7))){
var inst_28987 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
var statearr_28993_29018 = state_28991__$1;
(statearr_28993_29018[(2)] = inst_28987);

(statearr_28993_29018[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (1))){
var state_28991__$1 = state_28991;
var statearr_28994_29019 = state_28991__$1;
(statearr_28994_29019[(2)] = null);

(statearr_28994_29019[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (4))){
var inst_28968 = (state_28991[(7)]);
var inst_28968__$1 = (state_28991[(2)]);
var inst_28969 = (inst_28968__$1 == null);
var state_28991__$1 = (function (){var statearr_28995 = state_28991;
(statearr_28995[(7)] = inst_28968__$1);

return statearr_28995;
})();
if(cljs.core.truth_(inst_28969)){
var statearr_28996_29020 = state_28991__$1;
(statearr_28996_29020[(1)] = (5));

} else {
var statearr_28997_29021 = state_28991__$1;
(statearr_28997_29021[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (13))){
var state_28991__$1 = state_28991;
var statearr_28998_29022 = state_28991__$1;
(statearr_28998_29022[(2)] = null);

(statearr_28998_29022[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (6))){
var inst_28968 = (state_28991[(7)]);
var inst_28974 = (function (){var G__28999 = inst_28968;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__28999) : p.call(null,G__28999));
})();
var state_28991__$1 = state_28991;
if(cljs.core.truth_(inst_28974)){
var statearr_29000_29023 = state_28991__$1;
(statearr_29000_29023[(1)] = (9));

} else {
var statearr_29001_29024 = state_28991__$1;
(statearr_29001_29024[(1)] = (10));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (3))){
var inst_28989 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28991__$1,inst_28989);
} else {
if((state_val_28992 === (12))){
var state_28991__$1 = state_28991;
var statearr_29002_29025 = state_28991__$1;
(statearr_29002_29025[(2)] = null);

(statearr_29002_29025[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (2))){
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28991__$1,(4),ch);
} else {
if((state_val_28992 === (11))){
var inst_28968 = (state_28991[(7)]);
var inst_28978 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28991__$1,(8),inst_28978,inst_28968);
} else {
if((state_val_28992 === (9))){
var state_28991__$1 = state_28991;
var statearr_29003_29026 = state_28991__$1;
(statearr_29003_29026[(2)] = tc);

(statearr_29003_29026[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (5))){
var inst_28971 = cljs.core.async.close_BANG_(tc);
var inst_28972 = cljs.core.async.close_BANG_(fc);
var state_28991__$1 = (function (){var statearr_29004 = state_28991;
(statearr_29004[(8)] = inst_28971);

return statearr_29004;
})();
var statearr_29005_29027 = state_28991__$1;
(statearr_29005_29027[(2)] = inst_28972);

(statearr_29005_29027[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (14))){
var inst_28985 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
var statearr_29006_29028 = state_28991__$1;
(statearr_29006_29028[(2)] = inst_28985);

(statearr_29006_29028[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (10))){
var state_28991__$1 = state_28991;
var statearr_29007_29029 = state_28991__$1;
(statearr_29007_29029[(2)] = fc);

(statearr_29007_29029[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_28992 === (8))){
var inst_28980 = (state_28991[(2)]);
var state_28991__$1 = state_28991;
if(cljs.core.truth_(inst_28980)){
var statearr_29008_29030 = state_28991__$1;
(statearr_29008_29030[(1)] = (12));

} else {
var statearr_29009_29031 = state_28991__$1;
(statearr_29009_29031[(1)] = (13));

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
});})(c__16610__auto___29017,tc,fc))
;
return ((function (switch__16530__auto__,c__16610__auto___29017,tc,fc){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_29013 = [null,null,null,null,null,null,null,null,null];
(statearr_29013[(0)] = state_machine__16531__auto__);

(statearr_29013[(1)] = (1));

return statearr_29013;
});
var state_machine__16531__auto____1 = (function (state_28991){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_28991);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29014){if((e29014 instanceof Object)){
var ex__16534__auto__ = e29014;
var statearr_29015_29032 = state_28991;
(statearr_29015_29032[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28991);

return cljs.core.constant$keyword$97;
} else {
throw e29014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29033 = state_28991;
state_28991 = G__29033;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_28991){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_28991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___29017,tc,fc))
})();
var state__16612__auto__ = (function (){var statearr_29016 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___29017);

return statearr_29016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___29017,tc,fc))
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
return (function (state_29082){
var state_val_29083 = (state_29082[(1)]);
if((state_val_29083 === (7))){
var inst_29078 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
var statearr_29084_29102 = state_29082__$1;
(statearr_29084_29102[(2)] = inst_29078);

(statearr_29084_29102[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29083 === (6))){
var inst_29068 = (state_29082[(7)]);
var inst_29071 = (state_29082[(8)]);
var inst_29075 = (function (){var G__29085 = inst_29068;
var G__29086 = inst_29071;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29085,G__29086) : f.call(null,G__29085,G__29086));
})();
var inst_29068__$1 = inst_29075;
var state_29082__$1 = (function (){var statearr_29087 = state_29082;
(statearr_29087[(7)] = inst_29068__$1);

return statearr_29087;
})();
var statearr_29088_29103 = state_29082__$1;
(statearr_29088_29103[(2)] = null);

(statearr_29088_29103[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29083 === (5))){
var inst_29068 = (state_29082[(7)]);
var state_29082__$1 = state_29082;
var statearr_29089_29104 = state_29082__$1;
(statearr_29089_29104[(2)] = inst_29068);

(statearr_29089_29104[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29083 === (4))){
var inst_29071 = (state_29082[(8)]);
var inst_29071__$1 = (state_29082[(2)]);
var inst_29072 = (inst_29071__$1 == null);
var state_29082__$1 = (function (){var statearr_29090 = state_29082;
(statearr_29090[(8)] = inst_29071__$1);

return statearr_29090;
})();
if(cljs.core.truth_(inst_29072)){
var statearr_29091_29105 = state_29082__$1;
(statearr_29091_29105[(1)] = (5));

} else {
var statearr_29092_29106 = state_29082__$1;
(statearr_29092_29106[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29083 === (3))){
var inst_29080 = (state_29082[(2)]);
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29082__$1,inst_29080);
} else {
if((state_val_29083 === (2))){
var state_29082__$1 = state_29082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29082__$1,(4),ch);
} else {
if((state_val_29083 === (1))){
var inst_29068 = init;
var state_29082__$1 = (function (){var statearr_29093 = state_29082;
(statearr_29093[(7)] = inst_29068);

return statearr_29093;
})();
var statearr_29094_29107 = state_29082__$1;
(statearr_29094_29107[(2)] = null);

(statearr_29094_29107[(1)] = (2));


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
var statearr_29098 = [null,null,null,null,null,null,null,null,null];
(statearr_29098[(0)] = state_machine__16531__auto__);

(statearr_29098[(1)] = (1));

return statearr_29098;
});
var state_machine__16531__auto____1 = (function (state_29082){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29082);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29099){if((e29099 instanceof Object)){
var ex__16534__auto__ = e29099;
var statearr_29100_29108 = state_29082;
(statearr_29100_29108[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29082);

return cljs.core.constant$keyword$97;
} else {
throw e29099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29109 = state_29082;
state_29082 = G__29109;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29082){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_29101 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_29101;
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
return (function (state_29186){
var state_val_29187 = (state_29186[(1)]);
if((state_val_29187 === (7))){
var inst_29168 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
var statearr_29188_29211 = state_29186__$1;
(statearr_29188_29211[(2)] = inst_29168);

(statearr_29188_29211[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (1))){
var inst_29162 = cljs.core.seq(coll);
var inst_29163 = inst_29162;
var state_29186__$1 = (function (){var statearr_29189 = state_29186;
(statearr_29189[(7)] = inst_29163);

return statearr_29189;
})();
var statearr_29190_29212 = state_29186__$1;
(statearr_29190_29212[(2)] = null);

(statearr_29190_29212[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (4))){
var inst_29163 = (state_29186[(7)]);
var inst_29166 = cljs.core.first(inst_29163);
var state_29186__$1 = state_29186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29186__$1,(7),ch,inst_29166);
} else {
if((state_val_29187 === (13))){
var inst_29180 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
var statearr_29191_29213 = state_29186__$1;
(statearr_29191_29213[(2)] = inst_29180);

(statearr_29191_29213[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (6))){
var inst_29171 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
if(cljs.core.truth_(inst_29171)){
var statearr_29192_29214 = state_29186__$1;
(statearr_29192_29214[(1)] = (8));

} else {
var statearr_29193_29215 = state_29186__$1;
(statearr_29193_29215[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (3))){
var inst_29184 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29186__$1,inst_29184);
} else {
if((state_val_29187 === (12))){
var state_29186__$1 = state_29186;
var statearr_29194_29216 = state_29186__$1;
(statearr_29194_29216[(2)] = null);

(statearr_29194_29216[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (2))){
var inst_29163 = (state_29186[(7)]);
var state_29186__$1 = state_29186;
if(cljs.core.truth_(inst_29163)){
var statearr_29195_29217 = state_29186__$1;
(statearr_29195_29217[(1)] = (4));

} else {
var statearr_29196_29218 = state_29186__$1;
(statearr_29196_29218[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (11))){
var inst_29177 = cljs.core.async.close_BANG_(ch);
var state_29186__$1 = state_29186;
var statearr_29197_29219 = state_29186__$1;
(statearr_29197_29219[(2)] = inst_29177);

(statearr_29197_29219[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (9))){
var state_29186__$1 = state_29186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29198_29220 = state_29186__$1;
(statearr_29198_29220[(1)] = (11));

} else {
var statearr_29199_29221 = state_29186__$1;
(statearr_29199_29221[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (5))){
var inst_29163 = (state_29186[(7)]);
var state_29186__$1 = state_29186;
var statearr_29200_29222 = state_29186__$1;
(statearr_29200_29222[(2)] = inst_29163);

(statearr_29200_29222[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (10))){
var inst_29182 = (state_29186[(2)]);
var state_29186__$1 = state_29186;
var statearr_29201_29223 = state_29186__$1;
(statearr_29201_29223[(2)] = inst_29182);

(statearr_29201_29223[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29187 === (8))){
var inst_29163 = (state_29186[(7)]);
var inst_29173 = cljs.core.next(inst_29163);
var inst_29163__$1 = inst_29173;
var state_29186__$1 = (function (){var statearr_29202 = state_29186;
(statearr_29202[(7)] = inst_29163__$1);

return statearr_29202;
})();
var statearr_29203_29224 = state_29186__$1;
(statearr_29203_29224[(2)] = null);

(statearr_29203_29224[(1)] = (2));


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
var statearr_29207 = [null,null,null,null,null,null,null,null];
(statearr_29207[(0)] = state_machine__16531__auto__);

(statearr_29207[(1)] = (1));

return statearr_29207;
});
var state_machine__16531__auto____1 = (function (state_29186){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29186);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29208){if((e29208 instanceof Object)){
var ex__16534__auto__ = e29208;
var statearr_29209_29225 = state_29186;
(statearr_29209_29225[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29186);

return cljs.core.constant$keyword$97;
} else {
throw e29208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29226 = state_29186;
state_29186 = G__29226;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29186){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_29210 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_29210;
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

cljs.core.async.Mux = (function (){var obj29228 = {};
return obj29228;
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
return (function (){var or__3628__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__29232 = x__4272__auto__;
return goog.typeOf(G__29232);
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


cljs.core.async.Mult = (function (){var obj29234 = {};
return obj29234;
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
return (function (){var or__3628__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__29238 = x__4272__auto__;
return goog.typeOf(G__29238);
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
return (function (){var or__3628__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__29242 = x__4272__auto__;
return goog.typeOf(G__29242);
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
return (function (){var or__3628__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__29246 = x__4272__auto__;
return goog.typeOf(G__29246);
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
var cs = (function (){var G__29476 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29476) : cljs.core.atom.call(null,G__29476));
})();
var m = (function (){
if(typeof cljs.core.async.t29477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29477 = (function (cs,ch,mult,meta29478){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29478 = meta29478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29477.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29477.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29477.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29477.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29480_29705 = self__.cs;
var G__29481_29706 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29480_29705,G__29481_29706) : cljs.core.reset_BANG_.call(null,G__29480_29705,G__29481_29706));

return null;
});})(cs))
;

cljs.core.async.t29477.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29479){
var self__ = this;
var _29479__$1 = this;
return self__.meta29478;
});})(cs))
;

cljs.core.async.t29477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29479,meta29478__$1){
var self__ = this;
var _29479__$1 = this;
return (new cljs.core.async.t29477(self__.cs,self__.ch,self__.mult,meta29478__$1));
});})(cs))
;

cljs.core.async.t29477.cljs$lang$type = true;

cljs.core.async.t29477.cljs$lang$ctorStr = "cljs.core.async/t29477";

cljs.core.async.t29477.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t29477");
});})(cs))
;

cljs.core.async.__GT_t29477 = ((function (cs){
return (function __GT_t29477(cs__$1,ch__$1,mult__$1,meta29478){
return (new cljs.core.async.t29477(cs__$1,ch__$1,mult__$1,meta29478));
});})(cs))
;

}

return (new cljs.core.async.t29477(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__29482 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29482) : cljs.core.atom.call(null,G__29482));
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
var c__16610__auto___29707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___29707,cs,m,dchan,dctr,done){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___29707,cs,m,dchan,dctr,done){
return (function (state_29613){
var state_val_29614 = (state_29613[(1)]);
if((state_val_29614 === (7))){
var inst_29609 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29615_29708 = state_29613__$1;
(statearr_29615_29708[(2)] = inst_29609);

(statearr_29615_29708[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (20))){
var inst_29514 = (state_29613[(7)]);
var inst_29524 = cljs.core.first(inst_29514);
var inst_29525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29524,(0),null);
var inst_29526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29524,(1),null);
var state_29613__$1 = (function (){var statearr_29616 = state_29613;
(statearr_29616[(8)] = inst_29525);

return statearr_29616;
})();
if(cljs.core.truth_(inst_29526)){
var statearr_29617_29709 = state_29613__$1;
(statearr_29617_29709[(1)] = (22));

} else {
var statearr_29618_29710 = state_29613__$1;
(statearr_29618_29710[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (27))){
var inst_29554 = (state_29613[(9)]);
var inst_29485 = (state_29613[(10)]);
var inst_29561 = (state_29613[(11)]);
var inst_29556 = (state_29613[(12)]);
var inst_29561__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29554,inst_29556);
var inst_29562 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29561__$1,inst_29485,done);
var state_29613__$1 = (function (){var statearr_29619 = state_29613;
(statearr_29619[(11)] = inst_29561__$1);

return statearr_29619;
})();
if(cljs.core.truth_(inst_29562)){
var statearr_29620_29711 = state_29613__$1;
(statearr_29620_29711[(1)] = (30));

} else {
var statearr_29621_29712 = state_29613__$1;
(statearr_29621_29712[(1)] = (31));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (1))){
var state_29613__$1 = state_29613;
var statearr_29622_29713 = state_29613__$1;
(statearr_29622_29713[(2)] = null);

(statearr_29622_29713[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (24))){
var inst_29514 = (state_29613[(7)]);
var inst_29531 = (state_29613[(2)]);
var inst_29532 = cljs.core.next(inst_29514);
var inst_29494 = inst_29532;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29613__$1 = (function (){var statearr_29623 = state_29613;
(statearr_29623[(13)] = inst_29497);

(statearr_29623[(14)] = inst_29495);

(statearr_29623[(15)] = inst_29496);

(statearr_29623[(16)] = inst_29531);

(statearr_29623[(17)] = inst_29494);

return statearr_29623;
})();
var statearr_29624_29714 = state_29613__$1;
(statearr_29624_29714[(2)] = null);

(statearr_29624_29714[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (39))){
var state_29613__$1 = state_29613;
var statearr_29628_29715 = state_29613__$1;
(statearr_29628_29715[(2)] = null);

(statearr_29628_29715[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (4))){
var inst_29485 = (state_29613[(10)]);
var inst_29485__$1 = (state_29613[(2)]);
var inst_29486 = (inst_29485__$1 == null);
var state_29613__$1 = (function (){var statearr_29629 = state_29613;
(statearr_29629[(10)] = inst_29485__$1);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29486)){
var statearr_29630_29716 = state_29613__$1;
(statearr_29630_29716[(1)] = (5));

} else {
var statearr_29631_29717 = state_29613__$1;
(statearr_29631_29717[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (15))){
var inst_29497 = (state_29613[(13)]);
var inst_29495 = (state_29613[(14)]);
var inst_29496 = (state_29613[(15)]);
var inst_29494 = (state_29613[(17)]);
var inst_29510 = (state_29613[(2)]);
var inst_29511 = (inst_29497 + (1));
var tmp29625 = inst_29495;
var tmp29626 = inst_29496;
var tmp29627 = inst_29494;
var inst_29494__$1 = tmp29627;
var inst_29495__$1 = tmp29625;
var inst_29496__$1 = tmp29626;
var inst_29497__$1 = inst_29511;
var state_29613__$1 = (function (){var statearr_29632 = state_29613;
(statearr_29632[(13)] = inst_29497__$1);

(statearr_29632[(14)] = inst_29495__$1);

(statearr_29632[(15)] = inst_29496__$1);

(statearr_29632[(17)] = inst_29494__$1);

(statearr_29632[(18)] = inst_29510);

return statearr_29632;
})();
var statearr_29633_29718 = state_29613__$1;
(statearr_29633_29718[(2)] = null);

(statearr_29633_29718[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (21))){
var inst_29535 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29637_29719 = state_29613__$1;
(statearr_29637_29719[(2)] = inst_29535);

(statearr_29637_29719[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (31))){
var inst_29561 = (state_29613[(11)]);
var inst_29565 = done(null);
var inst_29566 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29561);
var state_29613__$1 = (function (){var statearr_29638 = state_29613;
(statearr_29638[(19)] = inst_29565);

return statearr_29638;
})();
var statearr_29639_29720 = state_29613__$1;
(statearr_29639_29720[(2)] = inst_29566);

(statearr_29639_29720[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (32))){
var inst_29554 = (state_29613[(9)]);
var inst_29556 = (state_29613[(12)]);
var inst_29553 = (state_29613[(20)]);
var inst_29555 = (state_29613[(21)]);
var inst_29568 = (state_29613[(2)]);
var inst_29569 = (inst_29556 + (1));
var tmp29634 = inst_29554;
var tmp29635 = inst_29553;
var tmp29636 = inst_29555;
var inst_29553__$1 = tmp29635;
var inst_29554__$1 = tmp29634;
var inst_29555__$1 = tmp29636;
var inst_29556__$1 = inst_29569;
var state_29613__$1 = (function (){var statearr_29640 = state_29613;
(statearr_29640[(9)] = inst_29554__$1);

(statearr_29640[(22)] = inst_29568);

(statearr_29640[(12)] = inst_29556__$1);

(statearr_29640[(20)] = inst_29553__$1);

(statearr_29640[(21)] = inst_29555__$1);

return statearr_29640;
})();
var statearr_29641_29721 = state_29613__$1;
(statearr_29641_29721[(2)] = null);

(statearr_29641_29721[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (40))){
var inst_29581 = (state_29613[(23)]);
var inst_29585 = done(null);
var inst_29586 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29581);
var state_29613__$1 = (function (){var statearr_29642 = state_29613;
(statearr_29642[(24)] = inst_29585);

return statearr_29642;
})();
var statearr_29643_29722 = state_29613__$1;
(statearr_29643_29722[(2)] = inst_29586);

(statearr_29643_29722[(1)] = (41));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (33))){
var inst_29572 = (state_29613[(25)]);
var inst_29574 = cljs.core.chunked_seq_QMARK_(inst_29572);
var state_29613__$1 = state_29613;
if(inst_29574){
var statearr_29644_29723 = state_29613__$1;
(statearr_29644_29723[(1)] = (36));

} else {
var statearr_29645_29724 = state_29613__$1;
(statearr_29645_29724[(1)] = (37));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (13))){
var inst_29504 = (state_29613[(26)]);
var inst_29507 = cljs.core.async.close_BANG_(inst_29504);
var state_29613__$1 = state_29613;
var statearr_29646_29725 = state_29613__$1;
(statearr_29646_29725[(2)] = inst_29507);

(statearr_29646_29725[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (22))){
var inst_29525 = (state_29613[(8)]);
var inst_29528 = cljs.core.async.close_BANG_(inst_29525);
var state_29613__$1 = state_29613;
var statearr_29647_29726 = state_29613__$1;
(statearr_29647_29726[(2)] = inst_29528);

(statearr_29647_29726[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (36))){
var inst_29572 = (state_29613[(25)]);
var inst_29576 = cljs.core.chunk_first(inst_29572);
var inst_29577 = cljs.core.chunk_rest(inst_29572);
var inst_29578 = cljs.core.count(inst_29576);
var inst_29553 = inst_29577;
var inst_29554 = inst_29576;
var inst_29555 = inst_29578;
var inst_29556 = (0);
var state_29613__$1 = (function (){var statearr_29648 = state_29613;
(statearr_29648[(9)] = inst_29554);

(statearr_29648[(12)] = inst_29556);

(statearr_29648[(20)] = inst_29553);

(statearr_29648[(21)] = inst_29555);

return statearr_29648;
})();
var statearr_29649_29727 = state_29613__$1;
(statearr_29649_29727[(2)] = null);

(statearr_29649_29727[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (41))){
var inst_29572 = (state_29613[(25)]);
var inst_29588 = (state_29613[(2)]);
var inst_29589 = cljs.core.next(inst_29572);
var inst_29553 = inst_29589;
var inst_29554 = null;
var inst_29555 = (0);
var inst_29556 = (0);
var state_29613__$1 = (function (){var statearr_29650 = state_29613;
(statearr_29650[(9)] = inst_29554);

(statearr_29650[(12)] = inst_29556);

(statearr_29650[(27)] = inst_29588);

(statearr_29650[(20)] = inst_29553);

(statearr_29650[(21)] = inst_29555);

return statearr_29650;
})();
var statearr_29651_29728 = state_29613__$1;
(statearr_29651_29728[(2)] = null);

(statearr_29651_29728[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (43))){
var state_29613__$1 = state_29613;
var statearr_29652_29729 = state_29613__$1;
(statearr_29652_29729[(2)] = null);

(statearr_29652_29729[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (29))){
var inst_29597 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29653_29730 = state_29613__$1;
(statearr_29653_29730[(2)] = inst_29597);

(statearr_29653_29730[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (44))){
var inst_29606 = (state_29613[(2)]);
var state_29613__$1 = (function (){var statearr_29654 = state_29613;
(statearr_29654[(28)] = inst_29606);

return statearr_29654;
})();
var statearr_29655_29731 = state_29613__$1;
(statearr_29655_29731[(2)] = null);

(statearr_29655_29731[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (6))){
var inst_29545 = (state_29613[(29)]);
var inst_29544 = (function (){var G__29656 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29656) : cljs.core.deref.call(null,G__29656));
})();
var inst_29545__$1 = cljs.core.keys(inst_29544);
var inst_29546 = cljs.core.count(inst_29545__$1);
var inst_29547 = (function (){var G__29657 = dctr;
var G__29658 = inst_29546;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29657,G__29658) : cljs.core.reset_BANG_.call(null,G__29657,G__29658));
})();
var inst_29552 = cljs.core.seq(inst_29545__$1);
var inst_29553 = inst_29552;
var inst_29554 = null;
var inst_29555 = (0);
var inst_29556 = (0);
var state_29613__$1 = (function (){var statearr_29659 = state_29613;
(statearr_29659[(30)] = inst_29547);

(statearr_29659[(9)] = inst_29554);

(statearr_29659[(12)] = inst_29556);

(statearr_29659[(29)] = inst_29545__$1);

(statearr_29659[(20)] = inst_29553);

(statearr_29659[(21)] = inst_29555);

return statearr_29659;
})();
var statearr_29660_29732 = state_29613__$1;
(statearr_29660_29732[(2)] = null);

(statearr_29660_29732[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (28))){
var inst_29572 = (state_29613[(25)]);
var inst_29553 = (state_29613[(20)]);
var inst_29572__$1 = cljs.core.seq(inst_29553);
var state_29613__$1 = (function (){var statearr_29661 = state_29613;
(statearr_29661[(25)] = inst_29572__$1);

return statearr_29661;
})();
if(inst_29572__$1){
var statearr_29662_29733 = state_29613__$1;
(statearr_29662_29733[(1)] = (33));

} else {
var statearr_29663_29734 = state_29613__$1;
(statearr_29663_29734[(1)] = (34));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (25))){
var inst_29556 = (state_29613[(12)]);
var inst_29555 = (state_29613[(21)]);
var inst_29558 = (inst_29556 < inst_29555);
var inst_29559 = inst_29558;
var state_29613__$1 = state_29613;
if(cljs.core.truth_(inst_29559)){
var statearr_29664_29735 = state_29613__$1;
(statearr_29664_29735[(1)] = (27));

} else {
var statearr_29665_29736 = state_29613__$1;
(statearr_29665_29736[(1)] = (28));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (34))){
var state_29613__$1 = state_29613;
var statearr_29666_29737 = state_29613__$1;
(statearr_29666_29737[(2)] = null);

(statearr_29666_29737[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (17))){
var state_29613__$1 = state_29613;
var statearr_29667_29738 = state_29613__$1;
(statearr_29667_29738[(2)] = null);

(statearr_29667_29738[(1)] = (18));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (3))){
var inst_29611 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29613__$1,inst_29611);
} else {
if((state_val_29614 === (12))){
var inst_29540 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29668_29739 = state_29613__$1;
(statearr_29668_29739[(2)] = inst_29540);

(statearr_29668_29739[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (2))){
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29613__$1,(4),ch);
} else {
if((state_val_29614 === (23))){
var state_29613__$1 = state_29613;
var statearr_29669_29740 = state_29613__$1;
(statearr_29669_29740[(2)] = null);

(statearr_29669_29740[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (35))){
var inst_29595 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29670_29741 = state_29613__$1;
(statearr_29670_29741[(2)] = inst_29595);

(statearr_29670_29741[(1)] = (29));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (19))){
var inst_29514 = (state_29613[(7)]);
var inst_29518 = cljs.core.chunk_first(inst_29514);
var inst_29519 = cljs.core.chunk_rest(inst_29514);
var inst_29520 = cljs.core.count(inst_29518);
var inst_29494 = inst_29519;
var inst_29495 = inst_29518;
var inst_29496 = inst_29520;
var inst_29497 = (0);
var state_29613__$1 = (function (){var statearr_29671 = state_29613;
(statearr_29671[(13)] = inst_29497);

(statearr_29671[(14)] = inst_29495);

(statearr_29671[(15)] = inst_29496);

(statearr_29671[(17)] = inst_29494);

return statearr_29671;
})();
var statearr_29672_29742 = state_29613__$1;
(statearr_29672_29742[(2)] = null);

(statearr_29672_29742[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (11))){
var inst_29514 = (state_29613[(7)]);
var inst_29494 = (state_29613[(17)]);
var inst_29514__$1 = cljs.core.seq(inst_29494);
var state_29613__$1 = (function (){var statearr_29673 = state_29613;
(statearr_29673[(7)] = inst_29514__$1);

return statearr_29673;
})();
if(inst_29514__$1){
var statearr_29674_29743 = state_29613__$1;
(statearr_29674_29743[(1)] = (16));

} else {
var statearr_29675_29744 = state_29613__$1;
(statearr_29675_29744[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (9))){
var inst_29542 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29676_29745 = state_29613__$1;
(statearr_29676_29745[(2)] = inst_29542);

(statearr_29676_29745[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (5))){
var inst_29492 = (function (){var G__29677 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29677) : cljs.core.deref.call(null,G__29677));
})();
var inst_29493 = cljs.core.seq(inst_29492);
var inst_29494 = inst_29493;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29613__$1 = (function (){var statearr_29678 = state_29613;
(statearr_29678[(13)] = inst_29497);

(statearr_29678[(14)] = inst_29495);

(statearr_29678[(15)] = inst_29496);

(statearr_29678[(17)] = inst_29494);

return statearr_29678;
})();
var statearr_29679_29746 = state_29613__$1;
(statearr_29679_29746[(2)] = null);

(statearr_29679_29746[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (14))){
var state_29613__$1 = state_29613;
var statearr_29680_29747 = state_29613__$1;
(statearr_29680_29747[(2)] = null);

(statearr_29680_29747[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (45))){
var inst_29603 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29681_29748 = state_29613__$1;
(statearr_29681_29748[(2)] = inst_29603);

(statearr_29681_29748[(1)] = (44));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (26))){
var inst_29545 = (state_29613[(29)]);
var inst_29599 = (state_29613[(2)]);
var inst_29600 = cljs.core.seq(inst_29545);
var state_29613__$1 = (function (){var statearr_29682 = state_29613;
(statearr_29682[(31)] = inst_29599);

return statearr_29682;
})();
if(inst_29600){
var statearr_29683_29749 = state_29613__$1;
(statearr_29683_29749[(1)] = (42));

} else {
var statearr_29684_29750 = state_29613__$1;
(statearr_29684_29750[(1)] = (43));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (16))){
var inst_29514 = (state_29613[(7)]);
var inst_29516 = cljs.core.chunked_seq_QMARK_(inst_29514);
var state_29613__$1 = state_29613;
if(inst_29516){
var statearr_29685_29751 = state_29613__$1;
(statearr_29685_29751[(1)] = (19));

} else {
var statearr_29686_29752 = state_29613__$1;
(statearr_29686_29752[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (38))){
var inst_29592 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29687_29753 = state_29613__$1;
(statearr_29687_29753[(2)] = inst_29592);

(statearr_29687_29753[(1)] = (35));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (30))){
var state_29613__$1 = state_29613;
var statearr_29688_29754 = state_29613__$1;
(statearr_29688_29754[(2)] = null);

(statearr_29688_29754[(1)] = (32));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (10))){
var inst_29497 = (state_29613[(13)]);
var inst_29495 = (state_29613[(14)]);
var inst_29503 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29495,inst_29497);
var inst_29504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29503,(0),null);
var inst_29505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29503,(1),null);
var state_29613__$1 = (function (){var statearr_29689 = state_29613;
(statearr_29689[(26)] = inst_29504);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29505)){
var statearr_29690_29755 = state_29613__$1;
(statearr_29690_29755[(1)] = (13));

} else {
var statearr_29691_29756 = state_29613__$1;
(statearr_29691_29756[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (18))){
var inst_29538 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29692_29757 = state_29613__$1;
(statearr_29692_29757[(2)] = inst_29538);

(statearr_29692_29757[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (42))){
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29613__$1,(45),dchan);
} else {
if((state_val_29614 === (37))){
var inst_29572 = (state_29613[(25)]);
var inst_29485 = (state_29613[(10)]);
var inst_29581 = (state_29613[(23)]);
var inst_29581__$1 = cljs.core.first(inst_29572);
var inst_29582 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29581__$1,inst_29485,done);
var state_29613__$1 = (function (){var statearr_29693 = state_29613;
(statearr_29693[(23)] = inst_29581__$1);

return statearr_29693;
})();
if(cljs.core.truth_(inst_29582)){
var statearr_29694_29758 = state_29613__$1;
(statearr_29694_29758[(1)] = (39));

} else {
var statearr_29695_29759 = state_29613__$1;
(statearr_29695_29759[(1)] = (40));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_29614 === (8))){
var inst_29497 = (state_29613[(13)]);
var inst_29496 = (state_29613[(15)]);
var inst_29499 = (inst_29497 < inst_29496);
var inst_29500 = inst_29499;
var state_29613__$1 = state_29613;
if(cljs.core.truth_(inst_29500)){
var statearr_29696_29760 = state_29613__$1;
(statearr_29696_29760[(1)] = (10));

} else {
var statearr_29697_29761 = state_29613__$1;
(statearr_29697_29761[(1)] = (11));

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
});})(c__16610__auto___29707,cs,m,dchan,dctr,done))
;
return ((function (switch__16530__auto__,c__16610__auto___29707,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_29701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29701[(0)] = state_machine__16531__auto__);

(statearr_29701[(1)] = (1));

return statearr_29701;
});
var state_machine__16531__auto____1 = (function (state_29613){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_29613);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e29702){if((e29702 instanceof Object)){
var ex__16534__auto__ = e29702;
var statearr_29703_29762 = state_29613;
(statearr_29703_29762[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29613);

return cljs.core.constant$keyword$97;
} else {
throw e29702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__29763 = state_29613;
state_29613 = G__29763;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_29613){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_29613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___29707,cs,m,dchan,dctr,done))
})();
var state__16612__auto__ = (function (){var statearr_29704 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_29704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___29707);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___29707,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj29768 = {};
return obj29768;
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
return (function (){var or__3628__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__29772 = x__4272__auto__;
return goog.typeOf(G__29772);
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
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__29776 = x__4272__auto__;
return goog.typeOf(G__29776);
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
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__29780 = x__4272__auto__;
return goog.typeOf(G__29780);
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
return (function (){var or__3628__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__29784 = x__4272__auto__;
return goog.typeOf(G__29784);
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
return (function (){var or__3628__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__29788 = x__4272__auto__;
return goog.typeOf(G__29788);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29789){
var map__29795 = p__29789;
var map__29795__$1 = ((cljs.core.seq_QMARK_(map__29795))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29795):map__29795);
var opts = map__29795__$1;
var statearr_29796_29800 = state;
(statearr_29796_29800[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__29795,map__29795__$1,opts){
return (function (val){
var statearr_29797_29801 = state;
(statearr_29797_29801[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__29795,map__29795__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_29798_29802 = state;
(statearr_29798_29802[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__29799 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29799) : cljs.core.deref.call(null,G__29799));
})());


return cljs.core.constant$keyword$97;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29789 = null;
if (arguments.length > 3) {
  p__29789 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29789);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29803){
var state = cljs.core.first(arglist__29803);
arglist__29803 = cljs.core.next(arglist__29803);
var cont_block = cljs.core.first(arglist__29803);
arglist__29803 = cljs.core.next(arglist__29803);
var ports = cljs.core.first(arglist__29803);
var p__29789 = cljs.core.rest(arglist__29803);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29789);
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
var cs = (function (){var G__29937 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29937) : cljs.core.atom.call(null,G__29937));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,null,cljs.core.constant$keyword$107,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$108);
var solo_mode = (function (){var G__29938 = cljs.core.constant$keyword$107;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29938) : cljs.core.atom.call(null,G__29938));
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
if(cljs.core.truth_((function (){var G__29939 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__29939) : attr.call(null,G__29939));
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
var chs = (function (){var G__29940 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29940) : cljs.core.deref.call(null,G__29940));
})();
var mode = (function (){var G__29941 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29941) : cljs.core.deref.call(null,G__29941));
})();
var solos = pick(cljs.core.constant$keyword$108,chs);
var pauses = pick(cljs.core.constant$keyword$106,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,solos,cljs.core.constant$keyword$110,pick(cljs.core.constant$keyword$107,chs),cljs.core.constant$keyword$111,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$106)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29942 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29942 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29943){
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
this.meta29943 = meta29943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29942.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29942.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__29945_30070 = self__.cs;
var G__29946_30071 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29945_30070,G__29946_30071) : cljs.core.reset_BANG_.call(null,G__29945_30070,G__29946_30071));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__29947 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__29947) : self__.solo_modes.call(null,G__29947));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__29948_30072 = self__.solo_mode;
var G__29949_30073 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29948_30072,G__29949_30073) : cljs.core.reset_BANG_.call(null,G__29948_30072,G__29949_30073));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29944){
var self__ = this;
var _29944__$1 = this;
return self__.meta29943;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29944,meta29943__$1){
var self__ = this;
var _29944__$1 = this;
return (new cljs.core.async.t29942(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29943__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29942.cljs$lang$type = true;

cljs.core.async.t29942.cljs$lang$ctorStr = "cljs.core.async/t29942";

cljs.core.async.t29942.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t29942");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29942 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29942(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29943){
return (new cljs.core.async.t29942(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29943));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29942(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16610__auto___30074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30021){
var state_val_30022 = (state_30021[(1)]);
if((state_val_30022 === (7))){
var inst_29963 = (state_30021[(7)]);
var inst_29968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29963);
var state_30021__$1 = state_30021;
var statearr_30023_30075 = state_30021__$1;
(statearr_30023_30075[(2)] = inst_29968);

(statearr_30023_30075[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (20))){
var inst_29978 = (state_30021[(8)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30021__$1,(23),out,inst_29978);
} else {
if((state_val_30022 === (1))){
var inst_29953 = (state_30021[(9)]);
var inst_29953__$1 = calc_state();
var inst_29954 = cljs.core.seq_QMARK_(inst_29953__$1);
var state_30021__$1 = (function (){var statearr_30024 = state_30021;
(statearr_30024[(9)] = inst_29953__$1);

return statearr_30024;
})();
if(inst_29954){
var statearr_30025_30076 = state_30021__$1;
(statearr_30025_30076[(1)] = (2));

} else {
var statearr_30026_30077 = state_30021__$1;
(statearr_30026_30077[(1)] = (3));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (24))){
var inst_29971 = (state_30021[(10)]);
var inst_29963 = inst_29971;
var state_30021__$1 = (function (){var statearr_30027 = state_30021;
(statearr_30027[(7)] = inst_29963);

return statearr_30027;
})();
var statearr_30028_30078 = state_30021__$1;
(statearr_30028_30078[(2)] = null);

(statearr_30028_30078[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (4))){
var inst_29953 = (state_30021[(9)]);
var inst_29959 = (state_30021[(2)]);
var inst_29960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29959,cljs.core.constant$keyword$111);
var inst_29961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29959,cljs.core.constant$keyword$110);
var inst_29962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29959,cljs.core.constant$keyword$109);
var inst_29963 = inst_29953;
var state_30021__$1 = (function (){var statearr_30029 = state_30021;
(statearr_30029[(11)] = inst_29960);

(statearr_30029[(12)] = inst_29962);

(statearr_30029[(7)] = inst_29963);

(statearr_30029[(13)] = inst_29961);

return statearr_30029;
})();
var statearr_30030_30079 = state_30021__$1;
(statearr_30030_30079[(2)] = null);

(statearr_30030_30079[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (15))){
var state_30021__$1 = state_30021;
var statearr_30031_30080 = state_30021__$1;
(statearr_30031_30080[(2)] = null);

(statearr_30031_30080[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (21))){
var inst_29971 = (state_30021[(10)]);
var inst_29963 = inst_29971;
var state_30021__$1 = (function (){var statearr_30032 = state_30021;
(statearr_30032[(7)] = inst_29963);

return statearr_30032;
})();
var statearr_30033_30081 = state_30021__$1;
(statearr_30033_30081[(2)] = null);

(statearr_30033_30081[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (13))){
var inst_30017 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30034_30082 = state_30021__$1;
(statearr_30034_30082[(2)] = inst_30017);

(statearr_30034_30082[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (22))){
var inst_30015 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30035_30083 = state_30021__$1;
(statearr_30035_30083[(2)] = inst_30015);

(statearr_30035_30083[(1)] = (13));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (6))){
var inst_30019 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30021__$1,inst_30019);
} else {
if((state_val_30022 === (25))){
var state_30021__$1 = state_30021;
var statearr_30036_30084 = state_30021__$1;
(statearr_30036_30084[(2)] = null);

(statearr_30036_30084[(1)] = (26));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (17))){
var inst_29994 = (state_30021[(14)]);
var state_30021__$1 = state_30021;
var statearr_30037_30085 = state_30021__$1;
(statearr_30037_30085[(2)] = inst_29994);

(statearr_30037_30085[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (3))){
var inst_29953 = (state_30021[(9)]);
var state_30021__$1 = state_30021;
var statearr_30038_30086 = state_30021__$1;
(statearr_30038_30086[(2)] = inst_29953);

(statearr_30038_30086[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (12))){
var inst_29994 = (state_30021[(14)]);
var inst_29979 = (state_30021[(15)]);
var inst_29974 = (state_30021[(16)]);
var inst_29994__$1 = (function (){var G__30039 = inst_29979;
return (inst_29974.cljs$core$IFn$_invoke$arity$1 ? inst_29974.cljs$core$IFn$_invoke$arity$1(G__30039) : inst_29974.call(null,G__30039));
})();
var state_30021__$1 = (function (){var statearr_30040 = state_30021;
(statearr_30040[(14)] = inst_29994__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_29994__$1)){
var statearr_30041_30087 = state_30021__$1;
(statearr_30041_30087[(1)] = (17));

} else {
var statearr_30042_30088 = state_30021__$1;
(statearr_30042_30088[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (2))){
var inst_29953 = (state_30021[(9)]);
var inst_29956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_29953);
var state_30021__$1 = state_30021;
var statearr_30043_30089 = state_30021__$1;
(statearr_30043_30089[(2)] = inst_29956);

(statearr_30043_30089[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (23))){
var inst_30006 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_30006)){
var statearr_30044_30090 = state_30021__$1;
(statearr_30044_30090[(1)] = (24));

} else {
var statearr_30045_30091 = state_30021__$1;
(statearr_30045_30091[(1)] = (25));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (19))){
var inst_30003 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_30003)){
var statearr_30046_30092 = state_30021__$1;
(statearr_30046_30092[(1)] = (20));

} else {
var statearr_30047_30093 = state_30021__$1;
(statearr_30047_30093[(1)] = (21));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (11))){
var inst_29978 = (state_30021[(8)]);
var inst_29984 = (inst_29978 == null);
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_29984)){
var statearr_30048_30094 = state_30021__$1;
(statearr_30048_30094[(1)] = (14));

} else {
var statearr_30049_30095 = state_30021__$1;
(statearr_30049_30095[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (9))){
var inst_29971 = (state_30021[(10)]);
var inst_29971__$1 = (state_30021[(2)]);
var inst_29972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29971__$1,cljs.core.constant$keyword$111);
var inst_29973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29971__$1,cljs.core.constant$keyword$110);
var inst_29974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29971__$1,cljs.core.constant$keyword$109);
var state_30021__$1 = (function (){var statearr_30050 = state_30021;
(statearr_30050[(10)] = inst_29971__$1);

(statearr_30050[(16)] = inst_29974);

(statearr_30050[(17)] = inst_29973);

return statearr_30050;
})();
return cljs.core.async.ioc_alts_BANG_(state_30021__$1,(10),inst_29972);
} else {
if((state_val_30022 === (5))){
var inst_29963 = (state_30021[(7)]);
var inst_29966 = cljs.core.seq_QMARK_(inst_29963);
var state_30021__$1 = state_30021;
if(inst_29966){
var statearr_30051_30096 = state_30021__$1;
(statearr_30051_30096[(1)] = (7));

} else {
var statearr_30052_30097 = state_30021__$1;
(statearr_30052_30097[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (14))){
var inst_29979 = (state_30021[(15)]);
var inst_29986 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29979);
var state_30021__$1 = state_30021;
var statearr_30053_30098 = state_30021__$1;
(statearr_30053_30098[(2)] = inst_29986);

(statearr_30053_30098[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (26))){
var inst_30011 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30054_30099 = state_30021__$1;
(statearr_30054_30099[(2)] = inst_30011);

(statearr_30054_30099[(1)] = (22));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (16))){
var inst_29989 = (state_30021[(2)]);
var inst_29990 = calc_state();
var inst_29963 = inst_29990;
var state_30021__$1 = (function (){var statearr_30055 = state_30021;
(statearr_30055[(18)] = inst_29989);

(statearr_30055[(7)] = inst_29963);

return statearr_30055;
})();
var statearr_30056_30100 = state_30021__$1;
(statearr_30056_30100[(2)] = null);

(statearr_30056_30100[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (10))){
var inst_29978 = (state_30021[(8)]);
var inst_29979 = (state_30021[(15)]);
var inst_29977 = (state_30021[(2)]);
var inst_29978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29977,(0),null);
var inst_29979__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29977,(1),null);
var inst_29980 = (inst_29978__$1 == null);
var inst_29981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29979__$1,change);
var inst_29982 = (inst_29980) || (inst_29981);
var state_30021__$1 = (function (){var statearr_30057 = state_30021;
(statearr_30057[(8)] = inst_29978__$1);

(statearr_30057[(15)] = inst_29979__$1);

return statearr_30057;
})();
if(cljs.core.truth_(inst_29982)){
var statearr_30058_30101 = state_30021__$1;
(statearr_30058_30101[(1)] = (11));

} else {
var statearr_30059_30102 = state_30021__$1;
(statearr_30059_30102[(1)] = (12));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (18))){
var inst_29979 = (state_30021[(15)]);
var inst_29974 = (state_30021[(16)]);
var inst_29973 = (state_30021[(17)]);
var inst_29998 = cljs.core.empty_QMARK_(inst_29974);
var inst_29999 = (function (){var G__30060 = inst_29979;
return (inst_29973.cljs$core$IFn$_invoke$arity$1 ? inst_29973.cljs$core$IFn$_invoke$arity$1(G__30060) : inst_29973.call(null,G__30060));
})();
var inst_30000 = cljs.core.not(inst_29999);
var inst_30001 = (inst_29998) && (inst_30000);
var state_30021__$1 = state_30021;
var statearr_30061_30103 = state_30021__$1;
(statearr_30061_30103[(2)] = inst_30001);

(statearr_30061_30103[(1)] = (19));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30022 === (8))){
var inst_29963 = (state_30021[(7)]);
var state_30021__$1 = state_30021;
var statearr_30062_30104 = state_30021__$1;
(statearr_30062_30104[(2)] = inst_29963);

(statearr_30062_30104[(1)] = (9));


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
});})(c__16610__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16530__auto__,c__16610__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30066[(0)] = state_machine__16531__auto__);

(statearr_30066[(1)] = (1));

return statearr_30066;
});
var state_machine__16531__auto____1 = (function (state_30021){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30021);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30067){if((e30067 instanceof Object)){
var ex__16534__auto__ = e30067;
var statearr_30068_30105 = state_30021;
(statearr_30068_30105[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30021);

return cljs.core.constant$keyword$97;
} else {
throw e30067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30106 = state_30021;
state_30021 = G__30106;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30021){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16612__auto__ = (function (){var statearr_30069 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30074);

return statearr_30069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj30108 = {};
return obj30108;
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
return (function (){var or__3628__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__30112 = x__4272__auto__;
return goog.typeOf(G__30112);
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
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__30116 = x__4272__auto__;
return goog.typeOf(G__30116);
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
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30122 = x__4272__auto__;
return goog.typeOf(G__30122);
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
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__30124 = x__4272__auto__;
return goog.typeOf(G__30124);
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
var mults = (function (){var G__30263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30263) : cljs.core.atom.call(null,G__30263));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3628__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30265 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30265) : cljs.core.deref.call(null,G__30265));
})(),topic);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3628__auto__,mults){
return (function (p1__30125_SHARP_){
if(cljs.core.truth_((function (){var G__30266 = topic;
return (p1__30125_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30125_SHARP_.cljs$core$IFn$_invoke$arity$1(G__30266) : p1__30125_SHARP_.call(null,G__30266));
})())){
return p1__30125_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30125_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__30267 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__30267) : buf_fn.call(null,G__30267));
})())));
}
});})(or__3628__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30268 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30269){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30269 = meta30269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30268.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30268.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__30271 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__30271) : self__.ensure_mult.call(null,G__30271));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30268.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30272 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30272) : cljs.core.deref.call(null,G__30272));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__30273 = self__.mults;
var G__30274 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30273,G__30274) : cljs.core.reset_BANG_.call(null,G__30273,G__30274));
});})(mults,ensure_mult))
;

cljs.core.async.t30268.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30268.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30270){
var self__ = this;
var _30270__$1 = this;
return self__.meta30269;
});})(mults,ensure_mult))
;

cljs.core.async.t30268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30270,meta30269__$1){
var self__ = this;
var _30270__$1 = this;
return (new cljs.core.async.t30268(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30269__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30268.cljs$lang$type = true;

cljs.core.async.t30268.cljs$lang$ctorStr = "cljs.core.async/t30268";

cljs.core.async.t30268.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30268");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30268 = ((function (mults,ensure_mult){
return (function __GT_t30268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30269){
return (new cljs.core.async.t30268(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30269));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30268(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16610__auto___30397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30397,mults,ensure_mult,p){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30397,mults,ensure_mult,p){
return (function (state_30346){
var state_val_30347 = (state_30346[(1)]);
if((state_val_30347 === (7))){
var inst_30342 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30348_30398 = state_30346__$1;
(statearr_30348_30398[(2)] = inst_30342);

(statearr_30348_30398[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (20))){
var state_30346__$1 = state_30346;
var statearr_30349_30399 = state_30346__$1;
(statearr_30349_30399[(2)] = null);

(statearr_30349_30399[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (1))){
var state_30346__$1 = state_30346;
var statearr_30350_30400 = state_30346__$1;
(statearr_30350_30400[(2)] = null);

(statearr_30350_30400[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (24))){
var inst_30325 = (state_30346[(7)]);
var inst_30334 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30325);
var state_30346__$1 = state_30346;
var statearr_30351_30401 = state_30346__$1;
(statearr_30351_30401[(2)] = inst_30334);

(statearr_30351_30401[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (4))){
var inst_30277 = (state_30346[(8)]);
var inst_30277__$1 = (state_30346[(2)]);
var inst_30278 = (inst_30277__$1 == null);
var state_30346__$1 = (function (){var statearr_30352 = state_30346;
(statearr_30352[(8)] = inst_30277__$1);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30278)){
var statearr_30353_30402 = state_30346__$1;
(statearr_30353_30402[(1)] = (5));

} else {
var statearr_30354_30403 = state_30346__$1;
(statearr_30354_30403[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (15))){
var inst_30319 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30355_30404 = state_30346__$1;
(statearr_30355_30404[(2)] = inst_30319);

(statearr_30355_30404[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (21))){
var inst_30339 = (state_30346[(2)]);
var state_30346__$1 = (function (){var statearr_30356 = state_30346;
(statearr_30356[(9)] = inst_30339);

return statearr_30356;
})();
var statearr_30357_30405 = state_30346__$1;
(statearr_30357_30405[(2)] = null);

(statearr_30357_30405[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (13))){
var inst_30301 = (state_30346[(10)]);
var inst_30303 = cljs.core.chunked_seq_QMARK_(inst_30301);
var state_30346__$1 = state_30346;
if(inst_30303){
var statearr_30358_30406 = state_30346__$1;
(statearr_30358_30406[(1)] = (16));

} else {
var statearr_30359_30407 = state_30346__$1;
(statearr_30359_30407[(1)] = (17));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (22))){
var inst_30331 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30331)){
var statearr_30360_30408 = state_30346__$1;
(statearr_30360_30408[(1)] = (23));

} else {
var statearr_30361_30409 = state_30346__$1;
(statearr_30361_30409[(1)] = (24));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (6))){
var inst_30277 = (state_30346[(8)]);
var inst_30327 = (state_30346[(11)]);
var inst_30325 = (state_30346[(7)]);
var inst_30325__$1 = (function (){var G__30362 = inst_30277;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__30362) : topic_fn.call(null,G__30362));
})();
var inst_30326 = (function (){var G__30363 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30363) : cljs.core.deref.call(null,G__30363));
})();
var inst_30327__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30326,inst_30325__$1);
var state_30346__$1 = (function (){var statearr_30364 = state_30346;
(statearr_30364[(11)] = inst_30327__$1);

(statearr_30364[(7)] = inst_30325__$1);

return statearr_30364;
})();
if(cljs.core.truth_(inst_30327__$1)){
var statearr_30365_30410 = state_30346__$1;
(statearr_30365_30410[(1)] = (19));

} else {
var statearr_30366_30411 = state_30346__$1;
(statearr_30366_30411[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (25))){
var inst_30336 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30367_30412 = state_30346__$1;
(statearr_30367_30412[(2)] = inst_30336);

(statearr_30367_30412[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (17))){
var inst_30301 = (state_30346[(10)]);
var inst_30310 = cljs.core.first(inst_30301);
var inst_30311 = cljs.core.async.muxch_STAR_(inst_30310);
var inst_30312 = cljs.core.async.close_BANG_(inst_30311);
var inst_30313 = cljs.core.next(inst_30301);
var inst_30287 = inst_30313;
var inst_30288 = null;
var inst_30289 = (0);
var inst_30290 = (0);
var state_30346__$1 = (function (){var statearr_30368 = state_30346;
(statearr_30368[(12)] = inst_30287);

(statearr_30368[(13)] = inst_30288);

(statearr_30368[(14)] = inst_30289);

(statearr_30368[(15)] = inst_30290);

(statearr_30368[(16)] = inst_30312);

return statearr_30368;
})();
var statearr_30369_30413 = state_30346__$1;
(statearr_30369_30413[(2)] = null);

(statearr_30369_30413[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (3))){
var inst_30344 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30346__$1,inst_30344);
} else {
if((state_val_30347 === (12))){
var inst_30321 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30370_30414 = state_30346__$1;
(statearr_30370_30414[(2)] = inst_30321);

(statearr_30370_30414[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (2))){
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30346__$1,(4),ch);
} else {
if((state_val_30347 === (23))){
var state_30346__$1 = state_30346;
var statearr_30371_30415 = state_30346__$1;
(statearr_30371_30415[(2)] = null);

(statearr_30371_30415[(1)] = (25));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (19))){
var inst_30277 = (state_30346[(8)]);
var inst_30327 = (state_30346[(11)]);
var inst_30329 = cljs.core.async.muxch_STAR_(inst_30327);
var state_30346__$1 = state_30346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30346__$1,(22),inst_30329,inst_30277);
} else {
if((state_val_30347 === (11))){
var inst_30301 = (state_30346[(10)]);
var inst_30287 = (state_30346[(12)]);
var inst_30301__$1 = cljs.core.seq(inst_30287);
var state_30346__$1 = (function (){var statearr_30372 = state_30346;
(statearr_30372[(10)] = inst_30301__$1);

return statearr_30372;
})();
if(inst_30301__$1){
var statearr_30373_30416 = state_30346__$1;
(statearr_30373_30416[(1)] = (13));

} else {
var statearr_30374_30417 = state_30346__$1;
(statearr_30374_30417[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (9))){
var inst_30323 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30375_30418 = state_30346__$1;
(statearr_30375_30418[(2)] = inst_30323);

(statearr_30375_30418[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (5))){
var inst_30284 = (function (){var G__30376 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30376) : cljs.core.deref.call(null,G__30376));
})();
var inst_30285 = cljs.core.vals(inst_30284);
var inst_30286 = cljs.core.seq(inst_30285);
var inst_30287 = inst_30286;
var inst_30288 = null;
var inst_30289 = (0);
var inst_30290 = (0);
var state_30346__$1 = (function (){var statearr_30377 = state_30346;
(statearr_30377[(12)] = inst_30287);

(statearr_30377[(13)] = inst_30288);

(statearr_30377[(14)] = inst_30289);

(statearr_30377[(15)] = inst_30290);

return statearr_30377;
})();
var statearr_30378_30419 = state_30346__$1;
(statearr_30378_30419[(2)] = null);

(statearr_30378_30419[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (14))){
var state_30346__$1 = state_30346;
var statearr_30382_30420 = state_30346__$1;
(statearr_30382_30420[(2)] = null);

(statearr_30382_30420[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (16))){
var inst_30301 = (state_30346[(10)]);
var inst_30305 = cljs.core.chunk_first(inst_30301);
var inst_30306 = cljs.core.chunk_rest(inst_30301);
var inst_30307 = cljs.core.count(inst_30305);
var inst_30287 = inst_30306;
var inst_30288 = inst_30305;
var inst_30289 = inst_30307;
var inst_30290 = (0);
var state_30346__$1 = (function (){var statearr_30383 = state_30346;
(statearr_30383[(12)] = inst_30287);

(statearr_30383[(13)] = inst_30288);

(statearr_30383[(14)] = inst_30289);

(statearr_30383[(15)] = inst_30290);

return statearr_30383;
})();
var statearr_30384_30421 = state_30346__$1;
(statearr_30384_30421[(2)] = null);

(statearr_30384_30421[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (10))){
var inst_30287 = (state_30346[(12)]);
var inst_30288 = (state_30346[(13)]);
var inst_30289 = (state_30346[(14)]);
var inst_30290 = (state_30346[(15)]);
var inst_30295 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30288,inst_30290);
var inst_30296 = cljs.core.async.muxch_STAR_(inst_30295);
var inst_30297 = cljs.core.async.close_BANG_(inst_30296);
var inst_30298 = (inst_30290 + (1));
var tmp30379 = inst_30287;
var tmp30380 = inst_30288;
var tmp30381 = inst_30289;
var inst_30287__$1 = tmp30379;
var inst_30288__$1 = tmp30380;
var inst_30289__$1 = tmp30381;
var inst_30290__$1 = inst_30298;
var state_30346__$1 = (function (){var statearr_30385 = state_30346;
(statearr_30385[(12)] = inst_30287__$1);

(statearr_30385[(17)] = inst_30297);

(statearr_30385[(13)] = inst_30288__$1);

(statearr_30385[(14)] = inst_30289__$1);

(statearr_30385[(15)] = inst_30290__$1);

return statearr_30385;
})();
var statearr_30386_30422 = state_30346__$1;
(statearr_30386_30422[(2)] = null);

(statearr_30386_30422[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (18))){
var inst_30316 = (state_30346[(2)]);
var state_30346__$1 = state_30346;
var statearr_30387_30423 = state_30346__$1;
(statearr_30387_30423[(2)] = inst_30316);

(statearr_30387_30423[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30347 === (8))){
var inst_30289 = (state_30346[(14)]);
var inst_30290 = (state_30346[(15)]);
var inst_30292 = (inst_30290 < inst_30289);
var inst_30293 = inst_30292;
var state_30346__$1 = state_30346;
if(cljs.core.truth_(inst_30293)){
var statearr_30388_30424 = state_30346__$1;
(statearr_30388_30424[(1)] = (10));

} else {
var statearr_30389_30425 = state_30346__$1;
(statearr_30389_30425[(1)] = (11));

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
});})(c__16610__auto___30397,mults,ensure_mult,p))
;
return ((function (switch__16530__auto__,c__16610__auto___30397,mults,ensure_mult,p){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30393[(0)] = state_machine__16531__auto__);

(statearr_30393[(1)] = (1));

return statearr_30393;
});
var state_machine__16531__auto____1 = (function (state_30346){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30346);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30394){if((e30394 instanceof Object)){
var ex__16534__auto__ = e30394;
var statearr_30395_30426 = state_30346;
(statearr_30395_30426[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30346);

return cljs.core.constant$keyword$97;
} else {
throw e30394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30427 = state_30346;
state_30346 = G__30427;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30346){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30397,mults,ensure_mult,p))
})();
var state__16612__auto__ = (function (){var statearr_30396 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30397);

return statearr_30396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30397,mults,ensure_mult,p))
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
var dctr = (function (){var G__30508 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30508) : cljs.core.atom.call(null,G__30508));
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
var c__16610__auto___30581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30547){
var state_val_30548 = (state_30547[(1)]);
if((state_val_30548 === (7))){
var state_30547__$1 = state_30547;
var statearr_30549_30582 = state_30547__$1;
(statearr_30549_30582[(2)] = null);

(statearr_30549_30582[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (1))){
var state_30547__$1 = state_30547;
var statearr_30550_30583 = state_30547__$1;
(statearr_30550_30583[(2)] = null);

(statearr_30550_30583[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (4))){
var inst_30511 = (state_30547[(7)]);
var inst_30513 = (inst_30511 < cnt);
var state_30547__$1 = state_30547;
if(cljs.core.truth_(inst_30513)){
var statearr_30551_30584 = state_30547__$1;
(statearr_30551_30584[(1)] = (6));

} else {
var statearr_30552_30585 = state_30547__$1;
(statearr_30552_30585[(1)] = (7));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (15))){
var inst_30543 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30553_30586 = state_30547__$1;
(statearr_30553_30586[(2)] = inst_30543);

(statearr_30553_30586[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (13))){
var inst_30536 = cljs.core.async.close_BANG_(out);
var state_30547__$1 = state_30547;
var statearr_30554_30587 = state_30547__$1;
(statearr_30554_30587[(2)] = inst_30536);

(statearr_30554_30587[(1)] = (15));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (6))){
var state_30547__$1 = state_30547;
var statearr_30555_30588 = state_30547__$1;
(statearr_30555_30588[(2)] = null);

(statearr_30555_30588[(1)] = (11));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (3))){
var inst_30545 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30547__$1,inst_30545);
} else {
if((state_val_30548 === (12))){
var inst_30533 = (state_30547[(8)]);
var inst_30533__$1 = (state_30547[(2)]);
var inst_30534 = cljs.core.some(cljs.core.nil_QMARK_,inst_30533__$1);
var state_30547__$1 = (function (){var statearr_30556 = state_30547;
(statearr_30556[(8)] = inst_30533__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30534)){
var statearr_30557_30589 = state_30547__$1;
(statearr_30557_30589[(1)] = (13));

} else {
var statearr_30558_30590 = state_30547__$1;
(statearr_30558_30590[(1)] = (14));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (2))){
var inst_30510 = (function (){var G__30559 = dctr;
var G__30560 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30559,G__30560) : cljs.core.reset_BANG_.call(null,G__30559,G__30560));
})();
var inst_30511 = (0);
var state_30547__$1 = (function (){var statearr_30561 = state_30547;
(statearr_30561[(7)] = inst_30511);

(statearr_30561[(9)] = inst_30510);

return statearr_30561;
})();
var statearr_30562_30591 = state_30547__$1;
(statearr_30562_30591[(2)] = null);

(statearr_30562_30591[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (11))){
var inst_30511 = (state_30547[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30547,(10),Object,null,(9));
var inst_30520 = (function (){var G__30563 = inst_30511;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__30563) : chs__$1.call(null,G__30563));
})();
var inst_30521 = (function (){var G__30564 = inst_30511;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__30564) : done.call(null,G__30564));
})();
var inst_30522 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30520,inst_30521);
var state_30547__$1 = state_30547;
var statearr_30565_30592 = state_30547__$1;
(statearr_30565_30592[(2)] = inst_30522);


cljs.core.async.impl.ioc_helpers.process_exception(state_30547__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (9))){
var inst_30511 = (state_30547[(7)]);
var inst_30524 = (state_30547[(2)]);
var inst_30525 = (inst_30511 + (1));
var inst_30511__$1 = inst_30525;
var state_30547__$1 = (function (){var statearr_30566 = state_30547;
(statearr_30566[(7)] = inst_30511__$1);

(statearr_30566[(10)] = inst_30524);

return statearr_30566;
})();
var statearr_30567_30593 = state_30547__$1;
(statearr_30567_30593[(2)] = null);

(statearr_30567_30593[(1)] = (4));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (5))){
var inst_30531 = (state_30547[(2)]);
var state_30547__$1 = (function (){var statearr_30568 = state_30547;
(statearr_30568[(11)] = inst_30531);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30547__$1,(12),dchan);
} else {
if((state_val_30548 === (14))){
var inst_30533 = (state_30547[(8)]);
var inst_30538 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30533);
var state_30547__$1 = state_30547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30547__$1,(16),out,inst_30538);
} else {
if((state_val_30548 === (16))){
var inst_30540 = (state_30547[(2)]);
var state_30547__$1 = (function (){var statearr_30569 = state_30547;
(statearr_30569[(12)] = inst_30540);

return statearr_30569;
})();
var statearr_30570_30594 = state_30547__$1;
(statearr_30570_30594[(2)] = null);

(statearr_30570_30594[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (10))){
var inst_30515 = (state_30547[(2)]);
var inst_30516 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30547__$1 = (function (){var statearr_30571 = state_30547;
(statearr_30571[(13)] = inst_30515);

return statearr_30571;
})();
var statearr_30572_30595 = state_30547__$1;
(statearr_30572_30595[(2)] = inst_30516);


cljs.core.async.impl.ioc_helpers.process_exception(state_30547__$1);

return cljs.core.constant$keyword$97;
} else {
if((state_val_30548 === (8))){
var inst_30529 = (state_30547[(2)]);
var state_30547__$1 = state_30547;
var statearr_30573_30596 = state_30547__$1;
(statearr_30573_30596[(2)] = inst_30529);

(statearr_30573_30596[(1)] = (5));


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
});})(c__16610__auto___30581,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16530__auto__,c__16610__auto___30581,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30577[(0)] = state_machine__16531__auto__);

(statearr_30577[(1)] = (1));

return statearr_30577;
});
var state_machine__16531__auto____1 = (function (state_30547){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30547);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30578){if((e30578 instanceof Object)){
var ex__16534__auto__ = e30578;
var statearr_30579_30597 = state_30547;
(statearr_30579_30597[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30547);

return cljs.core.constant$keyword$97;
} else {
throw e30578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30598 = state_30547;
state_30547 = G__30598;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30547){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30581,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16612__auto__ = (function (){var statearr_30580 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30581);

return statearr_30580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30581,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16610__auto___30708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30708,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30708,out){
return (function (state_30684){
var state_val_30685 = (state_30684[(1)]);
if((state_val_30685 === (7))){
var inst_30663 = (state_30684[(7)]);
var inst_30664 = (state_30684[(8)]);
var inst_30663__$1 = (state_30684[(2)]);
var inst_30664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30663__$1,(0),null);
var inst_30665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30663__$1,(1),null);
var inst_30666 = (inst_30664__$1 == null);
var state_30684__$1 = (function (){var statearr_30686 = state_30684;
(statearr_30686[(7)] = inst_30663__$1);

(statearr_30686[(8)] = inst_30664__$1);

(statearr_30686[(9)] = inst_30665);

return statearr_30686;
})();
if(cljs.core.truth_(inst_30666)){
var statearr_30687_30709 = state_30684__$1;
(statearr_30687_30709[(1)] = (8));

} else {
var statearr_30688_30710 = state_30684__$1;
(statearr_30688_30710[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (1))){
var inst_30655 = cljs.core.vec(chs);
var inst_30656 = inst_30655;
var state_30684__$1 = (function (){var statearr_30689 = state_30684;
(statearr_30689[(10)] = inst_30656);

return statearr_30689;
})();
var statearr_30690_30711 = state_30684__$1;
(statearr_30690_30711[(2)] = null);

(statearr_30690_30711[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (4))){
var inst_30656 = (state_30684[(10)]);
var state_30684__$1 = state_30684;
return cljs.core.async.ioc_alts_BANG_(state_30684__$1,(7),inst_30656);
} else {
if((state_val_30685 === (6))){
var inst_30680 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30691_30712 = state_30684__$1;
(statearr_30691_30712[(2)] = inst_30680);

(statearr_30691_30712[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (3))){
var inst_30682 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30684__$1,inst_30682);
} else {
if((state_val_30685 === (2))){
var inst_30656 = (state_30684[(10)]);
var inst_30658 = cljs.core.count(inst_30656);
var inst_30659 = (inst_30658 > (0));
var state_30684__$1 = state_30684;
if(cljs.core.truth_(inst_30659)){
var statearr_30693_30713 = state_30684__$1;
(statearr_30693_30713[(1)] = (4));

} else {
var statearr_30694_30714 = state_30684__$1;
(statearr_30694_30714[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (11))){
var inst_30656 = (state_30684[(10)]);
var inst_30673 = (state_30684[(2)]);
var tmp30692 = inst_30656;
var inst_30656__$1 = tmp30692;
var state_30684__$1 = (function (){var statearr_30695 = state_30684;
(statearr_30695[(11)] = inst_30673);

(statearr_30695[(10)] = inst_30656__$1);

return statearr_30695;
})();
var statearr_30696_30715 = state_30684__$1;
(statearr_30696_30715[(2)] = null);

(statearr_30696_30715[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (9))){
var inst_30664 = (state_30684[(8)]);
var state_30684__$1 = state_30684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30684__$1,(11),out,inst_30664);
} else {
if((state_val_30685 === (5))){
var inst_30678 = cljs.core.async.close_BANG_(out);
var state_30684__$1 = state_30684;
var statearr_30697_30716 = state_30684__$1;
(statearr_30697_30716[(2)] = inst_30678);

(statearr_30697_30716[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (10))){
var inst_30676 = (state_30684[(2)]);
var state_30684__$1 = state_30684;
var statearr_30698_30717 = state_30684__$1;
(statearr_30698_30717[(2)] = inst_30676);

(statearr_30698_30717[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30685 === (8))){
var inst_30663 = (state_30684[(7)]);
var inst_30664 = (state_30684[(8)]);
var inst_30665 = (state_30684[(9)]);
var inst_30656 = (state_30684[(10)]);
var inst_30668 = (function (){var c = inst_30665;
var v = inst_30664;
var vec__30661 = inst_30663;
var cs = inst_30656;
return ((function (c,v,vec__30661,cs,inst_30663,inst_30664,inst_30665,inst_30656,state_val_30685,c__16610__auto___30708,out){
return (function (p1__30599_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30599_SHARP_);
});
;})(c,v,vec__30661,cs,inst_30663,inst_30664,inst_30665,inst_30656,state_val_30685,c__16610__auto___30708,out))
})();
var inst_30669 = cljs.core.filterv(inst_30668,inst_30656);
var inst_30656__$1 = inst_30669;
var state_30684__$1 = (function (){var statearr_30699 = state_30684;
(statearr_30699[(10)] = inst_30656__$1);

return statearr_30699;
})();
var statearr_30700_30718 = state_30684__$1;
(statearr_30700_30718[(2)] = null);

(statearr_30700_30718[(1)] = (2));


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
});})(c__16610__auto___30708,out))
;
return ((function (switch__16530__auto__,c__16610__auto___30708,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = state_machine__16531__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var state_machine__16531__auto____1 = (function (state_30684){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30684);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30705){if((e30705 instanceof Object)){
var ex__16534__auto__ = e30705;
var statearr_30706_30719 = state_30684;
(statearr_30706_30719[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30684);

return cljs.core.constant$keyword$97;
} else {
throw e30705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30720 = state_30684;
state_30684 = G__30720;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30684){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30708,out))
})();
var state__16612__auto__ = (function (){var statearr_30707 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30708);

return statearr_30707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30708,out))
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
var c__16610__auto___30816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30816,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30816,out){
return (function (state_30793){
var state_val_30794 = (state_30793[(1)]);
if((state_val_30794 === (7))){
var inst_30775 = (state_30793[(7)]);
var inst_30775__$1 = (state_30793[(2)]);
var inst_30776 = (inst_30775__$1 == null);
var inst_30777 = cljs.core.not(inst_30776);
var state_30793__$1 = (function (){var statearr_30795 = state_30793;
(statearr_30795[(7)] = inst_30775__$1);

return statearr_30795;
})();
if(inst_30777){
var statearr_30796_30817 = state_30793__$1;
(statearr_30796_30817[(1)] = (8));

} else {
var statearr_30797_30818 = state_30793__$1;
(statearr_30797_30818[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (1))){
var inst_30770 = (0);
var state_30793__$1 = (function (){var statearr_30798 = state_30793;
(statearr_30798[(8)] = inst_30770);

return statearr_30798;
})();
var statearr_30799_30819 = state_30793__$1;
(statearr_30799_30819[(2)] = null);

(statearr_30799_30819[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (4))){
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30793__$1,(7),ch);
} else {
if((state_val_30794 === (6))){
var inst_30788 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30800_30820 = state_30793__$1;
(statearr_30800_30820[(2)] = inst_30788);

(statearr_30800_30820[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (3))){
var inst_30790 = (state_30793[(2)]);
var inst_30791 = cljs.core.async.close_BANG_(out);
var state_30793__$1 = (function (){var statearr_30801 = state_30793;
(statearr_30801[(9)] = inst_30790);

return statearr_30801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30793__$1,inst_30791);
} else {
if((state_val_30794 === (2))){
var inst_30770 = (state_30793[(8)]);
var inst_30772 = (inst_30770 < n);
var state_30793__$1 = state_30793;
if(cljs.core.truth_(inst_30772)){
var statearr_30802_30821 = state_30793__$1;
(statearr_30802_30821[(1)] = (4));

} else {
var statearr_30803_30822 = state_30793__$1;
(statearr_30803_30822[(1)] = (5));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (11))){
var inst_30770 = (state_30793[(8)]);
var inst_30780 = (state_30793[(2)]);
var inst_30781 = (inst_30770 + (1));
var inst_30770__$1 = inst_30781;
var state_30793__$1 = (function (){var statearr_30804 = state_30793;
(statearr_30804[(10)] = inst_30780);

(statearr_30804[(8)] = inst_30770__$1);

return statearr_30804;
})();
var statearr_30805_30823 = state_30793__$1;
(statearr_30805_30823[(2)] = null);

(statearr_30805_30823[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (9))){
var state_30793__$1 = state_30793;
var statearr_30806_30824 = state_30793__$1;
(statearr_30806_30824[(2)] = null);

(statearr_30806_30824[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (5))){
var state_30793__$1 = state_30793;
var statearr_30807_30825 = state_30793__$1;
(statearr_30807_30825[(2)] = null);

(statearr_30807_30825[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (10))){
var inst_30785 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30808_30826 = state_30793__$1;
(statearr_30808_30826[(2)] = inst_30785);

(statearr_30808_30826[(1)] = (6));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30794 === (8))){
var inst_30775 = (state_30793[(7)]);
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30793__$1,(11),out,inst_30775);
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
});})(c__16610__auto___30816,out))
;
return ((function (switch__16530__auto__,c__16610__auto___30816,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30812[(0)] = state_machine__16531__auto__);

(statearr_30812[(1)] = (1));

return statearr_30812;
});
var state_machine__16531__auto____1 = (function (state_30793){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30793);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30813){if((e30813 instanceof Object)){
var ex__16534__auto__ = e30813;
var statearr_30814_30827 = state_30793;
(statearr_30814_30827[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30793);

return cljs.core.constant$keyword$97;
} else {
throw e30813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30828 = state_30793;
state_30793 = G__30828;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30793){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30816,out))
})();
var state__16612__auto__ = (function (){var statearr_30815 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30816);

return statearr_30815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30816,out))
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
if(typeof cljs.core.async.t30841 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30841 = (function (ch,f,map_LT_,meta30842){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30842 = meta30842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t30844 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30844 = (function (fn1,_,meta30842,map_LT_,f,ch,meta30845){
this.fn1 = fn1;
this._ = _;
this.meta30842 = meta30842;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30845 = meta30845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30844.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t30844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30829_SHARP_){
var G__30847 = (((p1__30829_SHARP_ == null))?null:(function (){var G__30848 = p1__30829_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30848) : self__.f.call(null,G__30848));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30847) : f1.call(null,G__30847));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30846){
var self__ = this;
var _30846__$1 = this;
return self__.meta30845;
});})(___$1))
;

cljs.core.async.t30844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30846,meta30845__$1){
var self__ = this;
var _30846__$1 = this;
return (new cljs.core.async.t30844(self__.fn1,self__._,self__.meta30842,self__.map_LT_,self__.f,self__.ch,meta30845__$1));
});})(___$1))
;

cljs.core.async.t30844.cljs$lang$type = true;

cljs.core.async.t30844.cljs$lang$ctorStr = "cljs.core.async/t30844";

cljs.core.async.t30844.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30844");
});})(___$1))
;

cljs.core.async.__GT_t30844 = ((function (___$1){
return (function __GT_t30844(fn1__$1,___$2,meta30842__$1,map_LT___$1,f__$1,ch__$1,meta30845){
return (new cljs.core.async.t30844(fn1__$1,___$2,meta30842__$1,map_LT___$1,f__$1,ch__$1,meta30845));
});})(___$1))
;

}

return (new cljs.core.async.t30844(fn1,___$1,self__.meta30842,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3616__auto__ = ret;
if(cljs.core.truth_(and__3616__auto__)){
return !(((function (){var G__30849 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30849) : cljs.core.deref.call(null,G__30849));
})() == null));
} else {
return and__3616__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30850 = (function (){var G__30851 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30851) : cljs.core.deref.call(null,G__30851));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30850) : self__.f.call(null,G__30850));
})());
} else {
return ret;
}
});

cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t30841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t30841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30843){
var self__ = this;
var _30843__$1 = this;
return self__.meta30842;
});

cljs.core.async.t30841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30843,meta30842__$1){
var self__ = this;
var _30843__$1 = this;
return (new cljs.core.async.t30841(self__.ch,self__.f,self__.map_LT_,meta30842__$1));
});

cljs.core.async.t30841.cljs$lang$type = true;

cljs.core.async.t30841.cljs$lang$ctorStr = "cljs.core.async/t30841";

cljs.core.async.t30841.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30841");
});

cljs.core.async.__GT_t30841 = (function __GT_t30841(ch__$1,f__$1,map_LT___$1,meta30842){
return (new cljs.core.async.t30841(ch__$1,f__$1,map_LT___$1,meta30842));
});

}

return (new cljs.core.async.t30841(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t30856 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30856 = (function (ch,f,map_GT_,meta30857){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30857 = meta30857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__30859 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30859) : self__.f.call(null,G__30859));
})(),fn1);
});

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t30856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30858){
var self__ = this;
var _30858__$1 = this;
return self__.meta30857;
});

cljs.core.async.t30856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30858,meta30857__$1){
var self__ = this;
var _30858__$1 = this;
return (new cljs.core.async.t30856(self__.ch,self__.f,self__.map_GT_,meta30857__$1));
});

cljs.core.async.t30856.cljs$lang$type = true;

cljs.core.async.t30856.cljs$lang$ctorStr = "cljs.core.async/t30856";

cljs.core.async.t30856.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30856");
});

cljs.core.async.__GT_t30856 = (function __GT_t30856(ch__$1,f__$1,map_GT___$1,meta30857){
return (new cljs.core.async.t30856(ch__$1,f__$1,map_GT___$1,meta30857));
});

}

return (new cljs.core.async.t30856(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t30864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30864 = (function (ch,p,filter_GT_,meta30865){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30865 = meta30865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__30867 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__30867) : self__.p.call(null,G__30867));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t30864.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t30864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30866){
var self__ = this;
var _30866__$1 = this;
return self__.meta30865;
});

cljs.core.async.t30864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30866,meta30865__$1){
var self__ = this;
var _30866__$1 = this;
return (new cljs.core.async.t30864(self__.ch,self__.p,self__.filter_GT_,meta30865__$1));
});

cljs.core.async.t30864.cljs$lang$type = true;

cljs.core.async.t30864.cljs$lang$ctorStr = "cljs.core.async/t30864";

cljs.core.async.t30864.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"cljs.core.async/t30864");
});

cljs.core.async.__GT_t30864 = (function __GT_t30864(ch__$1,p__$1,filter_GT___$1,meta30865){
return (new cljs.core.async.t30864(ch__$1,p__$1,filter_GT___$1,meta30865));
});

}

return (new cljs.core.async.t30864(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16610__auto___30955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___30955,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___30955,out){
return (function (state_30933){
var state_val_30934 = (state_30933[(1)]);
if((state_val_30934 === (7))){
var inst_30929 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
var statearr_30935_30956 = state_30933__$1;
(statearr_30935_30956[(2)] = inst_30929);

(statearr_30935_30956[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (1))){
var state_30933__$1 = state_30933;
var statearr_30936_30957 = state_30933__$1;
(statearr_30936_30957[(2)] = null);

(statearr_30936_30957[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (4))){
var inst_30915 = (state_30933[(7)]);
var inst_30915__$1 = (state_30933[(2)]);
var inst_30916 = (inst_30915__$1 == null);
var state_30933__$1 = (function (){var statearr_30937 = state_30933;
(statearr_30937[(7)] = inst_30915__$1);

return statearr_30937;
})();
if(cljs.core.truth_(inst_30916)){
var statearr_30938_30958 = state_30933__$1;
(statearr_30938_30958[(1)] = (5));

} else {
var statearr_30939_30959 = state_30933__$1;
(statearr_30939_30959[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (6))){
var inst_30915 = (state_30933[(7)]);
var inst_30920 = (function (){var G__30940 = inst_30915;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__30940) : p.call(null,G__30940));
})();
var state_30933__$1 = state_30933;
if(cljs.core.truth_(inst_30920)){
var statearr_30941_30960 = state_30933__$1;
(statearr_30941_30960[(1)] = (8));

} else {
var statearr_30942_30961 = state_30933__$1;
(statearr_30942_30961[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (3))){
var inst_30931 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30933__$1,inst_30931);
} else {
if((state_val_30934 === (2))){
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30933__$1,(4),ch);
} else {
if((state_val_30934 === (11))){
var inst_30923 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
var statearr_30943_30962 = state_30933__$1;
(statearr_30943_30962[(2)] = inst_30923);

(statearr_30943_30962[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (9))){
var state_30933__$1 = state_30933;
var statearr_30944_30963 = state_30933__$1;
(statearr_30944_30963[(2)] = null);

(statearr_30944_30963[(1)] = (10));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (5))){
var inst_30918 = cljs.core.async.close_BANG_(out);
var state_30933__$1 = state_30933;
var statearr_30945_30964 = state_30933__$1;
(statearr_30945_30964[(2)] = inst_30918);

(statearr_30945_30964[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (10))){
var inst_30926 = (state_30933[(2)]);
var state_30933__$1 = (function (){var statearr_30946 = state_30933;
(statearr_30946[(8)] = inst_30926);

return statearr_30946;
})();
var statearr_30947_30965 = state_30933__$1;
(statearr_30947_30965[(2)] = null);

(statearr_30947_30965[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_30934 === (8))){
var inst_30915 = (state_30933[(7)]);
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30933__$1,(11),out,inst_30915);
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
});})(c__16610__auto___30955,out))
;
return ((function (switch__16530__auto__,c__16610__auto___30955,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_30951 = [null,null,null,null,null,null,null,null,null];
(statearr_30951[(0)] = state_machine__16531__auto__);

(statearr_30951[(1)] = (1));

return statearr_30951;
});
var state_machine__16531__auto____1 = (function (state_30933){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_30933);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e30952){if((e30952 instanceof Object)){
var ex__16534__auto__ = e30952;
var statearr_30953_30966 = state_30933;
(statearr_30953_30966[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30933);

return cljs.core.constant$keyword$97;
} else {
throw e30952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__30967 = state_30933;
state_30933 = G__30967;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_30933){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_30933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___30955,out))
})();
var state__16612__auto__ = (function (){var statearr_30954 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_30954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___30955);

return statearr_30954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___30955,out))
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
return (function (state_31137){
var state_val_31138 = (state_31137[(1)]);
if((state_val_31138 === (7))){
var inst_31133 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31139_31181 = state_31137__$1;
(statearr_31139_31181[(2)] = inst_31133);

(statearr_31139_31181[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (20))){
var inst_31103 = (state_31137[(7)]);
var inst_31114 = (state_31137[(2)]);
var inst_31115 = cljs.core.next(inst_31103);
var inst_31089 = inst_31115;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31137__$1 = (function (){var statearr_31140 = state_31137;
(statearr_31140[(8)] = inst_31091);

(statearr_31140[(9)] = inst_31092);

(statearr_31140[(10)] = inst_31089);

(statearr_31140[(11)] = inst_31114);

(statearr_31140[(12)] = inst_31090);

return statearr_31140;
})();
var statearr_31141_31182 = state_31137__$1;
(statearr_31141_31182[(2)] = null);

(statearr_31141_31182[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (1))){
var state_31137__$1 = state_31137;
var statearr_31142_31183 = state_31137__$1;
(statearr_31142_31183[(2)] = null);

(statearr_31142_31183[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (4))){
var inst_31078 = (state_31137[(13)]);
var inst_31078__$1 = (state_31137[(2)]);
var inst_31079 = (inst_31078__$1 == null);
var state_31137__$1 = (function (){var statearr_31143 = state_31137;
(statearr_31143[(13)] = inst_31078__$1);

return statearr_31143;
})();
if(cljs.core.truth_(inst_31079)){
var statearr_31144_31184 = state_31137__$1;
(statearr_31144_31184[(1)] = (5));

} else {
var statearr_31145_31185 = state_31137__$1;
(statearr_31145_31185[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (15))){
var state_31137__$1 = state_31137;
var statearr_31149_31186 = state_31137__$1;
(statearr_31149_31186[(2)] = null);

(statearr_31149_31186[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (21))){
var state_31137__$1 = state_31137;
var statearr_31150_31187 = state_31137__$1;
(statearr_31150_31187[(2)] = null);

(statearr_31150_31187[(1)] = (23));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (13))){
var inst_31091 = (state_31137[(8)]);
var inst_31092 = (state_31137[(9)]);
var inst_31089 = (state_31137[(10)]);
var inst_31090 = (state_31137[(12)]);
var inst_31099 = (state_31137[(2)]);
var inst_31100 = (inst_31092 + (1));
var tmp31146 = inst_31091;
var tmp31147 = inst_31089;
var tmp31148 = inst_31090;
var inst_31089__$1 = tmp31147;
var inst_31090__$1 = tmp31148;
var inst_31091__$1 = tmp31146;
var inst_31092__$1 = inst_31100;
var state_31137__$1 = (function (){var statearr_31151 = state_31137;
(statearr_31151[(8)] = inst_31091__$1);

(statearr_31151[(9)] = inst_31092__$1);

(statearr_31151[(10)] = inst_31089__$1);

(statearr_31151[(14)] = inst_31099);

(statearr_31151[(12)] = inst_31090__$1);

return statearr_31151;
})();
var statearr_31152_31188 = state_31137__$1;
(statearr_31152_31188[(2)] = null);

(statearr_31152_31188[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (22))){
var state_31137__$1 = state_31137;
var statearr_31153_31189 = state_31137__$1;
(statearr_31153_31189[(2)] = null);

(statearr_31153_31189[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (6))){
var inst_31078 = (state_31137[(13)]);
var inst_31087 = (function (){var G__31154 = inst_31078;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31154) : f.call(null,G__31154));
})();
var inst_31088 = cljs.core.seq(inst_31087);
var inst_31089 = inst_31088;
var inst_31090 = null;
var inst_31091 = (0);
var inst_31092 = (0);
var state_31137__$1 = (function (){var statearr_31155 = state_31137;
(statearr_31155[(8)] = inst_31091);

(statearr_31155[(9)] = inst_31092);

(statearr_31155[(10)] = inst_31089);

(statearr_31155[(12)] = inst_31090);

return statearr_31155;
})();
var statearr_31156_31190 = state_31137__$1;
(statearr_31156_31190[(2)] = null);

(statearr_31156_31190[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (17))){
var inst_31103 = (state_31137[(7)]);
var inst_31107 = cljs.core.chunk_first(inst_31103);
var inst_31108 = cljs.core.chunk_rest(inst_31103);
var inst_31109 = cljs.core.count(inst_31107);
var inst_31089 = inst_31108;
var inst_31090 = inst_31107;
var inst_31091 = inst_31109;
var inst_31092 = (0);
var state_31137__$1 = (function (){var statearr_31157 = state_31137;
(statearr_31157[(8)] = inst_31091);

(statearr_31157[(9)] = inst_31092);

(statearr_31157[(10)] = inst_31089);

(statearr_31157[(12)] = inst_31090);

return statearr_31157;
})();
var statearr_31158_31191 = state_31137__$1;
(statearr_31158_31191[(2)] = null);

(statearr_31158_31191[(1)] = (8));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (3))){
var inst_31135 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31137__$1,inst_31135);
} else {
if((state_val_31138 === (12))){
var inst_31123 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31159_31192 = state_31137__$1;
(statearr_31159_31192[(2)] = inst_31123);

(statearr_31159_31192[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (2))){
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31137__$1,(4),in$);
} else {
if((state_val_31138 === (23))){
var inst_31131 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31160_31193 = state_31137__$1;
(statearr_31160_31193[(2)] = inst_31131);

(statearr_31160_31193[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (19))){
var inst_31118 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31161_31194 = state_31137__$1;
(statearr_31161_31194[(2)] = inst_31118);

(statearr_31161_31194[(1)] = (16));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (11))){
var inst_31103 = (state_31137[(7)]);
var inst_31089 = (state_31137[(10)]);
var inst_31103__$1 = cljs.core.seq(inst_31089);
var state_31137__$1 = (function (){var statearr_31162 = state_31137;
(statearr_31162[(7)] = inst_31103__$1);

return statearr_31162;
})();
if(inst_31103__$1){
var statearr_31163_31195 = state_31137__$1;
(statearr_31163_31195[(1)] = (14));

} else {
var statearr_31164_31196 = state_31137__$1;
(statearr_31164_31196[(1)] = (15));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (9))){
var inst_31125 = (state_31137[(2)]);
var inst_31126 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31137__$1 = (function (){var statearr_31165 = state_31137;
(statearr_31165[(15)] = inst_31125);

return statearr_31165;
})();
if(cljs.core.truth_(inst_31126)){
var statearr_31166_31197 = state_31137__$1;
(statearr_31166_31197[(1)] = (21));

} else {
var statearr_31167_31198 = state_31137__$1;
(statearr_31167_31198[(1)] = (22));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (5))){
var inst_31081 = cljs.core.async.close_BANG_(out);
var state_31137__$1 = state_31137;
var statearr_31168_31199 = state_31137__$1;
(statearr_31168_31199[(2)] = inst_31081);

(statearr_31168_31199[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (14))){
var inst_31103 = (state_31137[(7)]);
var inst_31105 = cljs.core.chunked_seq_QMARK_(inst_31103);
var state_31137__$1 = state_31137;
if(inst_31105){
var statearr_31169_31200 = state_31137__$1;
(statearr_31169_31200[(1)] = (17));

} else {
var statearr_31170_31201 = state_31137__$1;
(statearr_31170_31201[(1)] = (18));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (16))){
var inst_31121 = (state_31137[(2)]);
var state_31137__$1 = state_31137;
var statearr_31171_31202 = state_31137__$1;
(statearr_31171_31202[(2)] = inst_31121);

(statearr_31171_31202[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31138 === (10))){
var inst_31092 = (state_31137[(9)]);
var inst_31090 = (state_31137[(12)]);
var inst_31097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31090,inst_31092);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31137__$1,(13),out,inst_31097);
} else {
if((state_val_31138 === (18))){
var inst_31103 = (state_31137[(7)]);
var inst_31112 = cljs.core.first(inst_31103);
var state_31137__$1 = state_31137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31137__$1,(20),out,inst_31112);
} else {
if((state_val_31138 === (8))){
var inst_31091 = (state_31137[(8)]);
var inst_31092 = (state_31137[(9)]);
var inst_31094 = (inst_31092 < inst_31091);
var inst_31095 = inst_31094;
var state_31137__$1 = state_31137;
if(cljs.core.truth_(inst_31095)){
var statearr_31172_31203 = state_31137__$1;
(statearr_31172_31203[(1)] = (10));

} else {
var statearr_31173_31204 = state_31137__$1;
(statearr_31173_31204[(1)] = (11));

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
var statearr_31177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = state_machine__16531__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var state_machine__16531__auto____1 = (function (state_31137){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31137);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31178){if((e31178 instanceof Object)){
var ex__16534__auto__ = e31178;
var statearr_31179_31205 = state_31137;
(statearr_31179_31205[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31137);

return cljs.core.constant$keyword$97;
} else {
throw e31178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31206 = state_31137;
state_31137 = G__31206;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31137){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__))
})();
var state__16612__auto__ = (function (){var statearr_31180 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_31180;
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
var c__16610__auto___31311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___31311,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___31311,out){
return (function (state_31286){
var state_val_31287 = (state_31286[(1)]);
if((state_val_31287 === (7))){
var inst_31281 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31288_31312 = state_31286__$1;
(statearr_31288_31312[(2)] = inst_31281);

(statearr_31288_31312[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (1))){
var inst_31263 = null;
var state_31286__$1 = (function (){var statearr_31289 = state_31286;
(statearr_31289[(7)] = inst_31263);

return statearr_31289;
})();
var statearr_31290_31313 = state_31286__$1;
(statearr_31290_31313[(2)] = null);

(statearr_31290_31313[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (4))){
var inst_31266 = (state_31286[(8)]);
var inst_31266__$1 = (state_31286[(2)]);
var inst_31267 = (inst_31266__$1 == null);
var inst_31268 = cljs.core.not(inst_31267);
var state_31286__$1 = (function (){var statearr_31291 = state_31286;
(statearr_31291[(8)] = inst_31266__$1);

return statearr_31291;
})();
if(inst_31268){
var statearr_31292_31314 = state_31286__$1;
(statearr_31292_31314[(1)] = (5));

} else {
var statearr_31293_31315 = state_31286__$1;
(statearr_31293_31315[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (6))){
var state_31286__$1 = state_31286;
var statearr_31294_31316 = state_31286__$1;
(statearr_31294_31316[(2)] = null);

(statearr_31294_31316[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (3))){
var inst_31283 = (state_31286[(2)]);
var inst_31284 = cljs.core.async.close_BANG_(out);
var state_31286__$1 = (function (){var statearr_31295 = state_31286;
(statearr_31295[(9)] = inst_31283);

return statearr_31295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31286__$1,inst_31284);
} else {
if((state_val_31287 === (2))){
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31286__$1,(4),ch);
} else {
if((state_val_31287 === (11))){
var inst_31266 = (state_31286[(8)]);
var inst_31275 = (state_31286[(2)]);
var inst_31263 = inst_31266;
var state_31286__$1 = (function (){var statearr_31296 = state_31286;
(statearr_31296[(7)] = inst_31263);

(statearr_31296[(10)] = inst_31275);

return statearr_31296;
})();
var statearr_31297_31317 = state_31286__$1;
(statearr_31297_31317[(2)] = null);

(statearr_31297_31317[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (9))){
var inst_31266 = (state_31286[(8)]);
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31286__$1,(11),out,inst_31266);
} else {
if((state_val_31287 === (5))){
var inst_31263 = (state_31286[(7)]);
var inst_31266 = (state_31286[(8)]);
var inst_31270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31266,inst_31263);
var state_31286__$1 = state_31286;
if(inst_31270){
var statearr_31299_31318 = state_31286__$1;
(statearr_31299_31318[(1)] = (8));

} else {
var statearr_31300_31319 = state_31286__$1;
(statearr_31300_31319[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (10))){
var inst_31278 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31301_31320 = state_31286__$1;
(statearr_31301_31320[(2)] = inst_31278);

(statearr_31301_31320[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31287 === (8))){
var inst_31263 = (state_31286[(7)]);
var tmp31298 = inst_31263;
var inst_31263__$1 = tmp31298;
var state_31286__$1 = (function (){var statearr_31302 = state_31286;
(statearr_31302[(7)] = inst_31263__$1);

return statearr_31302;
})();
var statearr_31303_31321 = state_31286__$1;
(statearr_31303_31321[(2)] = null);

(statearr_31303_31321[(1)] = (2));


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
});})(c__16610__auto___31311,out))
;
return ((function (switch__16530__auto__,c__16610__auto___31311,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31307[(0)] = state_machine__16531__auto__);

(statearr_31307[(1)] = (1));

return statearr_31307;
});
var state_machine__16531__auto____1 = (function (state_31286){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31286);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31308){if((e31308 instanceof Object)){
var ex__16534__auto__ = e31308;
var statearr_31309_31322 = state_31286;
(statearr_31309_31322[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31286);

return cljs.core.constant$keyword$97;
} else {
throw e31308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31323 = state_31286;
state_31286 = G__31323;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31286){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___31311,out))
})();
var state__16612__auto__ = (function (){var statearr_31310 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___31311);

return statearr_31310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___31311,out))
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
var c__16610__auto___31461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___31461,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___31461,out){
return (function (state_31431){
var state_val_31432 = (state_31431[(1)]);
if((state_val_31432 === (7))){
var inst_31427 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
var statearr_31433_31462 = state_31431__$1;
(statearr_31433_31462[(2)] = inst_31427);

(statearr_31433_31462[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (1))){
var inst_31394 = (new Array(n));
var inst_31395 = inst_31394;
var inst_31396 = (0);
var state_31431__$1 = (function (){var statearr_31434 = state_31431;
(statearr_31434[(7)] = inst_31396);

(statearr_31434[(8)] = inst_31395);

return statearr_31434;
})();
var statearr_31435_31463 = state_31431__$1;
(statearr_31435_31463[(2)] = null);

(statearr_31435_31463[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (4))){
var inst_31399 = (state_31431[(9)]);
var inst_31399__$1 = (state_31431[(2)]);
var inst_31400 = (inst_31399__$1 == null);
var inst_31401 = cljs.core.not(inst_31400);
var state_31431__$1 = (function (){var statearr_31436 = state_31431;
(statearr_31436[(9)] = inst_31399__$1);

return statearr_31436;
})();
if(inst_31401){
var statearr_31437_31464 = state_31431__$1;
(statearr_31437_31464[(1)] = (5));

} else {
var statearr_31438_31465 = state_31431__$1;
(statearr_31438_31465[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (15))){
var inst_31421 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
var statearr_31439_31466 = state_31431__$1;
(statearr_31439_31466[(2)] = inst_31421);

(statearr_31439_31466[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (13))){
var state_31431__$1 = state_31431;
var statearr_31440_31467 = state_31431__$1;
(statearr_31440_31467[(2)] = null);

(statearr_31440_31467[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (6))){
var inst_31396 = (state_31431[(7)]);
var inst_31417 = (inst_31396 > (0));
var state_31431__$1 = state_31431;
if(cljs.core.truth_(inst_31417)){
var statearr_31441_31468 = state_31431__$1;
(statearr_31441_31468[(1)] = (12));

} else {
var statearr_31442_31469 = state_31431__$1;
(statearr_31442_31469[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (3))){
var inst_31429 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31431__$1,inst_31429);
} else {
if((state_val_31432 === (12))){
var inst_31395 = (state_31431[(8)]);
var inst_31419 = cljs.core.vec(inst_31395);
var state_31431__$1 = state_31431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31431__$1,(15),out,inst_31419);
} else {
if((state_val_31432 === (2))){
var state_31431__$1 = state_31431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31431__$1,(4),ch);
} else {
if((state_val_31432 === (11))){
var inst_31411 = (state_31431[(2)]);
var inst_31412 = (new Array(n));
var inst_31395 = inst_31412;
var inst_31396 = (0);
var state_31431__$1 = (function (){var statearr_31443 = state_31431;
(statearr_31443[(7)] = inst_31396);

(statearr_31443[(8)] = inst_31395);

(statearr_31443[(10)] = inst_31411);

return statearr_31443;
})();
var statearr_31444_31470 = state_31431__$1;
(statearr_31444_31470[(2)] = null);

(statearr_31444_31470[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (9))){
var inst_31395 = (state_31431[(8)]);
var inst_31409 = cljs.core.vec(inst_31395);
var state_31431__$1 = state_31431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31431__$1,(11),out,inst_31409);
} else {
if((state_val_31432 === (5))){
var inst_31399 = (state_31431[(9)]);
var inst_31396 = (state_31431[(7)]);
var inst_31395 = (state_31431[(8)]);
var inst_31404 = (state_31431[(11)]);
var inst_31403 = (inst_31395[inst_31396] = inst_31399);
var inst_31404__$1 = (inst_31396 + (1));
var inst_31405 = (inst_31404__$1 < n);
var state_31431__$1 = (function (){var statearr_31445 = state_31431;
(statearr_31445[(11)] = inst_31404__$1);

(statearr_31445[(12)] = inst_31403);

return statearr_31445;
})();
if(cljs.core.truth_(inst_31405)){
var statearr_31446_31471 = state_31431__$1;
(statearr_31446_31471[(1)] = (8));

} else {
var statearr_31447_31472 = state_31431__$1;
(statearr_31447_31472[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (14))){
var inst_31424 = (state_31431[(2)]);
var inst_31425 = cljs.core.async.close_BANG_(out);
var state_31431__$1 = (function (){var statearr_31449 = state_31431;
(statearr_31449[(13)] = inst_31424);

return statearr_31449;
})();
var statearr_31450_31473 = state_31431__$1;
(statearr_31450_31473[(2)] = inst_31425);

(statearr_31450_31473[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (10))){
var inst_31415 = (state_31431[(2)]);
var state_31431__$1 = state_31431;
var statearr_31451_31474 = state_31431__$1;
(statearr_31451_31474[(2)] = inst_31415);

(statearr_31451_31474[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31432 === (8))){
var inst_31395 = (state_31431[(8)]);
var inst_31404 = (state_31431[(11)]);
var tmp31448 = inst_31395;
var inst_31395__$1 = tmp31448;
var inst_31396 = inst_31404;
var state_31431__$1 = (function (){var statearr_31452 = state_31431;
(statearr_31452[(7)] = inst_31396);

(statearr_31452[(8)] = inst_31395__$1);

return statearr_31452;
})();
var statearr_31453_31475 = state_31431__$1;
(statearr_31453_31475[(2)] = null);

(statearr_31453_31475[(1)] = (2));


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
});})(c__16610__auto___31461,out))
;
return ((function (switch__16530__auto__,c__16610__auto___31461,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31457[(0)] = state_machine__16531__auto__);

(statearr_31457[(1)] = (1));

return statearr_31457;
});
var state_machine__16531__auto____1 = (function (state_31431){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31431);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31458){if((e31458 instanceof Object)){
var ex__16534__auto__ = e31458;
var statearr_31459_31476 = state_31431;
(statearr_31459_31476[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31431);

return cljs.core.constant$keyword$97;
} else {
throw e31458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31477 = state_31431;
state_31431 = G__31477;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31431){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___31461,out))
})();
var state__16612__auto__ = (function (){var statearr_31460 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___31461);

return statearr_31460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___31461,out))
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
var c__16610__auto___31625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto___31625,out){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto___31625,out){
return (function (state_31594){
var state_val_31595 = (state_31594[(1)]);
if((state_val_31595 === (7))){
var inst_31590 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31596_31626 = state_31594__$1;
(statearr_31596_31626[(2)] = inst_31590);

(statearr_31596_31626[(1)] = (3));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (1))){
var inst_31553 = [];
var inst_31554 = inst_31553;
var inst_31555 = cljs.core.constant$keyword$112;
var state_31594__$1 = (function (){var statearr_31597 = state_31594;
(statearr_31597[(7)] = inst_31554);

(statearr_31597[(8)] = inst_31555);

return statearr_31597;
})();
var statearr_31598_31627 = state_31594__$1;
(statearr_31598_31627[(2)] = null);

(statearr_31598_31627[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (4))){
var inst_31558 = (state_31594[(9)]);
var inst_31558__$1 = (state_31594[(2)]);
var inst_31559 = (inst_31558__$1 == null);
var inst_31560 = cljs.core.not(inst_31559);
var state_31594__$1 = (function (){var statearr_31599 = state_31594;
(statearr_31599[(9)] = inst_31558__$1);

return statearr_31599;
})();
if(inst_31560){
var statearr_31600_31628 = state_31594__$1;
(statearr_31600_31628[(1)] = (5));

} else {
var statearr_31601_31629 = state_31594__$1;
(statearr_31601_31629[(1)] = (6));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (15))){
var inst_31584 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31602_31630 = state_31594__$1;
(statearr_31602_31630[(2)] = inst_31584);

(statearr_31602_31630[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (13))){
var state_31594__$1 = state_31594;
var statearr_31603_31631 = state_31594__$1;
(statearr_31603_31631[(2)] = null);

(statearr_31603_31631[(1)] = (14));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (6))){
var inst_31554 = (state_31594[(7)]);
var inst_31579 = inst_31554.length;
var inst_31580 = (inst_31579 > (0));
var state_31594__$1 = state_31594;
if(cljs.core.truth_(inst_31580)){
var statearr_31604_31632 = state_31594__$1;
(statearr_31604_31632[(1)] = (12));

} else {
var statearr_31605_31633 = state_31594__$1;
(statearr_31605_31633[(1)] = (13));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (3))){
var inst_31592 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31594__$1,inst_31592);
} else {
if((state_val_31595 === (12))){
var inst_31554 = (state_31594[(7)]);
var inst_31582 = cljs.core.vec(inst_31554);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31594__$1,(15),out,inst_31582);
} else {
if((state_val_31595 === (2))){
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31594__$1,(4),ch);
} else {
if((state_val_31595 === (11))){
var inst_31562 = (state_31594[(10)]);
var inst_31558 = (state_31594[(9)]);
var inst_31572 = (state_31594[(2)]);
var inst_31573 = [];
var inst_31574 = inst_31573.push(inst_31558);
var inst_31554 = inst_31573;
var inst_31555 = inst_31562;
var state_31594__$1 = (function (){var statearr_31606 = state_31594;
(statearr_31606[(11)] = inst_31572);

(statearr_31606[(7)] = inst_31554);

(statearr_31606[(8)] = inst_31555);

(statearr_31606[(12)] = inst_31574);

return statearr_31606;
})();
var statearr_31607_31634 = state_31594__$1;
(statearr_31607_31634[(2)] = null);

(statearr_31607_31634[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (9))){
var inst_31554 = (state_31594[(7)]);
var inst_31570 = cljs.core.vec(inst_31554);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31594__$1,(11),out,inst_31570);
} else {
if((state_val_31595 === (5))){
var inst_31555 = (state_31594[(8)]);
var inst_31562 = (state_31594[(10)]);
var inst_31558 = (state_31594[(9)]);
var inst_31562__$1 = (function (){var G__31608 = inst_31558;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31608) : f.call(null,G__31608));
})();
var inst_31563 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31562__$1,inst_31555);
var inst_31564 = cljs.core.keyword_identical_QMARK_(inst_31555,cljs.core.constant$keyword$112);
var inst_31565 = (inst_31563) || (inst_31564);
var state_31594__$1 = (function (){var statearr_31609 = state_31594;
(statearr_31609[(10)] = inst_31562__$1);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31565)){
var statearr_31610_31635 = state_31594__$1;
(statearr_31610_31635[(1)] = (8));

} else {
var statearr_31611_31636 = state_31594__$1;
(statearr_31611_31636[(1)] = (9));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (14))){
var inst_31587 = (state_31594[(2)]);
var inst_31588 = cljs.core.async.close_BANG_(out);
var state_31594__$1 = (function (){var statearr_31613 = state_31594;
(statearr_31613[(13)] = inst_31587);

return statearr_31613;
})();
var statearr_31614_31637 = state_31594__$1;
(statearr_31614_31637[(2)] = inst_31588);

(statearr_31614_31637[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (10))){
var inst_31577 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31615_31638 = state_31594__$1;
(statearr_31615_31638[(2)] = inst_31577);

(statearr_31615_31638[(1)] = (7));


return cljs.core.constant$keyword$97;
} else {
if((state_val_31595 === (8))){
var inst_31554 = (state_31594[(7)]);
var inst_31562 = (state_31594[(10)]);
var inst_31558 = (state_31594[(9)]);
var inst_31567 = inst_31554.push(inst_31558);
var tmp31612 = inst_31554;
var inst_31554__$1 = tmp31612;
var inst_31555 = inst_31562;
var state_31594__$1 = (function (){var statearr_31616 = state_31594;
(statearr_31616[(14)] = inst_31567);

(statearr_31616[(7)] = inst_31554__$1);

(statearr_31616[(8)] = inst_31555);

return statearr_31616;
})();
var statearr_31617_31639 = state_31594__$1;
(statearr_31617_31639[(2)] = null);

(statearr_31617_31639[(1)] = (2));


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
});})(c__16610__auto___31625,out))
;
return ((function (switch__16530__auto__,c__16610__auto___31625,out){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_31621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31621[(0)] = state_machine__16531__auto__);

(statearr_31621[(1)] = (1));

return statearr_31621;
});
var state_machine__16531__auto____1 = (function (state_31594){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_31594);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e31622){if((e31622 instanceof Object)){
var ex__16534__auto__ = e31622;
var statearr_31623_31640 = state_31594;
(statearr_31623_31640[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31594);

return cljs.core.constant$keyword$97;
} else {
throw e31622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__31641 = state_31594;
state_31594 = G__31641;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_31594){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_31594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto___31625,out))
})();
var state__16612__auto__ = (function (){var statearr_31624 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_31624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto___31625);

return statearr_31624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto___31625,out))
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
