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
if(typeof cljs.core.async.t31752 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31752 = (function (f,fn_handler,meta31753){
this.f = f;
this.fn_handler = fn_handler;
this.meta31753 = meta31753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31752.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31754){
var self__ = this;
var _31754__$1 = this;
return self__.meta31753;
});

cljs.core.async.t31752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31754,meta31753__$1){
var self__ = this;
var _31754__$1 = this;
return (new cljs.core.async.t31752(self__.f,self__.fn_handler,meta31753__$1));
});

cljs.core.async.t31752.cljs$lang$type = true;

cljs.core.async.t31752.cljs$lang$ctorStr = "cljs.core.async/t31752";

cljs.core.async.t31752.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31752");
});

cljs.core.async.__GT_t31752 = (function __GT_t31752(f__$1,fn_handler__$1,meta31753){
return (new cljs.core.async.t31752(f__$1,fn_handler__$1,meta31753));
});

}

return (new cljs.core.async.t31752(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var G__31756 = buff;
if(G__31756){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__31756.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31756.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31756);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31756);
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
var val_31773 = (function (){var G__31770 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31770) : cljs.core.deref.call(null,G__31770));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31771_31774 = val_31773;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31771_31774) : fn1.call(null,G__31771_31774));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31773,ret){
return (function (){
var G__31772 = val_31773;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31772) : fn1.call(null,G__31772));
});})(val_31773,ret))
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
var G__31783 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31783) : cljs.core.deref.call(null,G__31783));
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
var ret = (function (){var G__31784 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31784) : cljs.core.deref.call(null,G__31784));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31785_31787 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31785_31787) : fn1.call(null,G__31785_31787));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__31786 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31786) : fn1.call(null,G__31786));
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
var n__5138__auto___31788 = n;
var x_31789 = (0);
while(true){
if((x_31789 < n__5138__auto___31788)){
(a[x_31789] = (0));

var G__31790 = (x_31789 + (1));
x_31789 = G__31790;
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

var G__31791 = (i + (1));
i = G__31791;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__31799 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31799) : cljs.core.atom.call(null,G__31799));
})();
if(typeof cljs.core.async.t31800 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31800 = (function (flag,alt_flag,meta31801){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31801 = meta31801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31803 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31803) : cljs.core.deref.call(null,G__31803));
});})(flag))
;

cljs.core.async.t31800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31804_31806 = self__.flag;
var G__31805_31807 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31804_31806,G__31805_31807) : cljs.core.reset_BANG_.call(null,G__31804_31806,G__31805_31807));

return true;
});})(flag))
;

cljs.core.async.t31800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31802){
var self__ = this;
var _31802__$1 = this;
return self__.meta31801;
});})(flag))
;

cljs.core.async.t31800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31802,meta31801__$1){
var self__ = this;
var _31802__$1 = this;
return (new cljs.core.async.t31800(self__.flag,self__.alt_flag,meta31801__$1));
});})(flag))
;

cljs.core.async.t31800.cljs$lang$type = true;

cljs.core.async.t31800.cljs$lang$ctorStr = "cljs.core.async/t31800";

cljs.core.async.t31800.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31800");
});})(flag))
;

cljs.core.async.__GT_t31800 = ((function (flag){
return (function __GT_t31800(flag__$1,alt_flag__$1,meta31801){
return (new cljs.core.async.t31800(flag__$1,alt_flag__$1,meta31801));
});})(flag))
;

}

return (new cljs.core.async.t31800(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31811 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31811 = (function (cb,flag,alt_handler,meta31812){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31812 = meta31812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31811.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31813){
var self__ = this;
var _31813__$1 = this;
return self__.meta31812;
});

cljs.core.async.t31811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31813,meta31812__$1){
var self__ = this;
var _31813__$1 = this;
return (new cljs.core.async.t31811(self__.cb,self__.flag,self__.alt_handler,meta31812__$1));
});

cljs.core.async.t31811.cljs$lang$type = true;

cljs.core.async.t31811.cljs$lang$ctorStr = "cljs.core.async/t31811";

cljs.core.async.t31811.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31811");
});

cljs.core.async.__GT_t31811 = (function __GT_t31811(cb__$1,flag__$1,alt_handler__$1,meta31812){
return (new cljs.core.async.t31811(cb__$1,flag__$1,alt_handler__$1,meta31812));
});

}

return (new cljs.core.async.t31811(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31821 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31821) : port.call(null,G__31821));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31822 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31822) : port.call(null,G__31822));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31814_SHARP_){
var G__31823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31814_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31823) : fret.call(null,G__31823));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31815_SHARP_){
var G__31824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31815_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31824) : fret.call(null,G__31824));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31825 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31825) : cljs.core.deref.call(null,G__31825));
})(),(function (){var or__4251__auto__ = wport;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31826 = (i + (1));
i = G__31826;
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
var alts_BANG___delegate = function (ports,p__31827){
var map__31829 = p__31827;
var map__31829__$1 = ((cljs.core.seq_QMARK_(map__31829))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31829):map__31829);
var opts = map__31829__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31827 = null;
if (arguments.length > 1) {
var G__31830__i = 0, G__31830__a = new Array(arguments.length -  1);
while (G__31830__i < G__31830__a.length) {G__31830__a[G__31830__i] = arguments[G__31830__i + 1]; ++G__31830__i;}
  p__31827 = new cljs.core.IndexedSeq(G__31830__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31827);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31831){
var ports = cljs.core.first(arglist__31831);
var p__31827 = cljs.core.rest(arglist__31831);
return alts_BANG___delegate(ports,p__31827);
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
var c__16627__auto___31929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___31929){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___31929){
return (function (state_31905){
var state_val_31906 = (state_31905[(1)]);
if((state_val_31906 === (7))){
var inst_31901 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
var statearr_31907_31930 = state_31905__$1;
(statearr_31907_31930[(2)] = inst_31901);

(statearr_31907_31930[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (1))){
var state_31905__$1 = state_31905;
var statearr_31908_31931 = state_31905__$1;
(statearr_31908_31931[(2)] = null);

(statearr_31908_31931[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (4))){
var inst_31884 = (state_31905[(7)]);
var inst_31884__$1 = (state_31905[(2)]);
var inst_31885 = (inst_31884__$1 == null);
var state_31905__$1 = (function (){var statearr_31909 = state_31905;
(statearr_31909[(7)] = inst_31884__$1);

return statearr_31909;
})();
if(cljs.core.truth_(inst_31885)){
var statearr_31910_31932 = state_31905__$1;
(statearr_31910_31932[(1)] = (5));

} else {
var statearr_31911_31933 = state_31905__$1;
(statearr_31911_31933[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (13))){
var state_31905__$1 = state_31905;
var statearr_31912_31934 = state_31905__$1;
(statearr_31912_31934[(2)] = null);

(statearr_31912_31934[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (6))){
var inst_31884 = (state_31905[(7)]);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31905__$1,(11),to,inst_31884);
} else {
if((state_val_31906 === (3))){
var inst_31903 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31905__$1,inst_31903);
} else {
if((state_val_31906 === (12))){
var state_31905__$1 = state_31905;
var statearr_31913_31935 = state_31905__$1;
(statearr_31913_31935[(2)] = null);

(statearr_31913_31935[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (2))){
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31905__$1,(4),from);
} else {
if((state_val_31906 === (11))){
var inst_31894 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
if(cljs.core.truth_(inst_31894)){
var statearr_31914_31936 = state_31905__$1;
(statearr_31914_31936[(1)] = (12));

} else {
var statearr_31915_31937 = state_31905__$1;
(statearr_31915_31937[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (9))){
var state_31905__$1 = state_31905;
var statearr_31916_31938 = state_31905__$1;
(statearr_31916_31938[(2)] = null);

(statearr_31916_31938[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (5))){
var state_31905__$1 = state_31905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31917_31939 = state_31905__$1;
(statearr_31917_31939[(1)] = (8));

} else {
var statearr_31918_31940 = state_31905__$1;
(statearr_31918_31940[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (14))){
var inst_31899 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
var statearr_31919_31941 = state_31905__$1;
(statearr_31919_31941[(2)] = inst_31899);

(statearr_31919_31941[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (10))){
var inst_31891 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
var statearr_31920_31942 = state_31905__$1;
(statearr_31920_31942[(2)] = inst_31891);

(statearr_31920_31942[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31906 === (8))){
var inst_31888 = cljs.core.async.close_BANG_(to);
var state_31905__$1 = state_31905;
var statearr_31921_31943 = state_31905__$1;
(statearr_31921_31943[(2)] = inst_31888);

(statearr_31921_31943[(1)] = (10));


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
});})(c__16627__auto___31929))
;
return ((function (switch__16547__auto__,c__16627__auto___31929){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_31925 = [null,null,null,null,null,null,null,null];
(statearr_31925[(0)] = state_machine__16548__auto__);

(statearr_31925[(1)] = (1));

return statearr_31925;
});
var state_machine__16548__auto____1 = (function (state_31905){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_31905);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e31926){if((e31926 instanceof Object)){
var ex__16551__auto__ = e31926;
var statearr_31927_31944 = state_31905;
(statearr_31927_31944[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31905);

return cljs.core.constant$keyword$99;
} else {
throw e31926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__31945 = state_31905;
state_31905 = G__31945;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_31905){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_31905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___31929))
})();
var state__16629__auto__ = (function (){var statearr_31928 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_31928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___31929);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___31929))
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
return (function (p__32131){
var vec__32132 = p__32131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32132,(1),null);
var job = vec__32132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16627__auto___32316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32316,res,vec__32132,v,p,job,jobs,results){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32316,res,vec__32132,v,p,job,jobs,results){
return (function (state_32137){
var state_val_32138 = (state_32137[(1)]);
if((state_val_32138 === (2))){
var inst_32134 = (state_32137[(2)]);
var inst_32135 = cljs.core.async.close_BANG_(res);
var state_32137__$1 = (function (){var statearr_32139 = state_32137;
(statearr_32139[(7)] = inst_32134);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32137__$1,inst_32135);
} else {
if((state_val_32138 === (1))){
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32137__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16627__auto___32316,res,vec__32132,v,p,job,jobs,results))
;
return ((function (switch__16547__auto__,c__16627__auto___32316,res,vec__32132,v,p,job,jobs,results){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32143 = [null,null,null,null,null,null,null,null];
(statearr_32143[(0)] = state_machine__16548__auto__);

(statearr_32143[(1)] = (1));

return statearr_32143;
});
var state_machine__16548__auto____1 = (function (state_32137){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32137);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32144){if((e32144 instanceof Object)){
var ex__16551__auto__ = e32144;
var statearr_32145_32317 = state_32137;
(statearr_32145_32317[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32137);

return cljs.core.constant$keyword$99;
} else {
throw e32144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32318 = state_32137;
state_32137 = G__32318;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32137){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32316,res,vec__32132,v,p,job,jobs,results))
})();
var state__16629__auto__ = (function (){var statearr_32146 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32316);

return statearr_32146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32316,res,vec__32132,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32147){
var vec__32148 = p__32147;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32148,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32148,(1),null);
var job = vec__32148;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__32149_32319 = v;
var G__32150_32320 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__32149_32319,G__32150_32320) : xf.call(null,G__32149_32319,G__32150_32320));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5138__auto___32321 = n;
var __32322 = (0);
while(true){
if((__32322 < n__5138__auto___32321)){
var G__32151_32323 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32151_32323) {
case "async":
var c__16627__auto___32325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32322,c__16627__auto___32325,G__32151_32323,n__5138__auto___32321,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (__32322,c__16627__auto___32325,G__32151_32323,n__5138__auto___32321,jobs,results,process,async){
return (function (state_32164){
var state_val_32165 = (state_32164[(1)]);
if((state_val_32165 === (7))){
var inst_32160 = (state_32164[(2)]);
var state_32164__$1 = state_32164;
var statearr_32166_32326 = state_32164__$1;
(statearr_32166_32326[(2)] = inst_32160);

(statearr_32166_32326[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32165 === (6))){
var state_32164__$1 = state_32164;
var statearr_32167_32327 = state_32164__$1;
(statearr_32167_32327[(2)] = null);

(statearr_32167_32327[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32165 === (5))){
var state_32164__$1 = state_32164;
var statearr_32168_32328 = state_32164__$1;
(statearr_32168_32328[(2)] = null);

(statearr_32168_32328[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32165 === (4))){
var inst_32154 = (state_32164[(2)]);
var inst_32155 = async(inst_32154);
var state_32164__$1 = state_32164;
if(cljs.core.truth_(inst_32155)){
var statearr_32169_32329 = state_32164__$1;
(statearr_32169_32329[(1)] = (5));

} else {
var statearr_32170_32330 = state_32164__$1;
(statearr_32170_32330[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32165 === (3))){
var inst_32162 = (state_32164[(2)]);
var state_32164__$1 = state_32164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32164__$1,inst_32162);
} else {
if((state_val_32165 === (2))){
var state_32164__$1 = state_32164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32164__$1,(4),jobs);
} else {
if((state_val_32165 === (1))){
var state_32164__$1 = state_32164;
var statearr_32171_32331 = state_32164__$1;
(statearr_32171_32331[(2)] = null);

(statearr_32171_32331[(1)] = (2));


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
});})(__32322,c__16627__auto___32325,G__32151_32323,n__5138__auto___32321,jobs,results,process,async))
;
return ((function (__32322,switch__16547__auto__,c__16627__auto___32325,G__32151_32323,n__5138__auto___32321,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32175 = [null,null,null,null,null,null,null];
(statearr_32175[(0)] = state_machine__16548__auto__);

(statearr_32175[(1)] = (1));

return statearr_32175;
});
var state_machine__16548__auto____1 = (function (state_32164){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32164);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32176){if((e32176 instanceof Object)){
var ex__16551__auto__ = e32176;
var statearr_32177_32332 = state_32164;
(statearr_32177_32332[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32164);

return cljs.core.constant$keyword$99;
} else {
throw e32176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32333 = state_32164;
state_32164 = G__32333;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32164){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(__32322,switch__16547__auto__,c__16627__auto___32325,G__32151_32323,n__5138__auto___32321,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32178 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32325);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(__32322,c__16627__auto___32325,G__32151_32323,n__5138__auto___32321,jobs,results,process,async))
);


break;
case "compute":
var c__16627__auto___32334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32322,c__16627__auto___32334,G__32151_32323,n__5138__auto___32321,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (__32322,c__16627__auto___32334,G__32151_32323,n__5138__auto___32321,jobs,results,process,async){
return (function (state_32191){
var state_val_32192 = (state_32191[(1)]);
if((state_val_32192 === (7))){
var inst_32187 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
var statearr_32193_32335 = state_32191__$1;
(statearr_32193_32335[(2)] = inst_32187);

(statearr_32193_32335[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32192 === (6))){
var state_32191__$1 = state_32191;
var statearr_32194_32336 = state_32191__$1;
(statearr_32194_32336[(2)] = null);

(statearr_32194_32336[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32192 === (5))){
var state_32191__$1 = state_32191;
var statearr_32195_32337 = state_32191__$1;
(statearr_32195_32337[(2)] = null);

(statearr_32195_32337[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32192 === (4))){
var inst_32181 = (state_32191[(2)]);
var inst_32182 = process(inst_32181);
var state_32191__$1 = state_32191;
if(cljs.core.truth_(inst_32182)){
var statearr_32196_32338 = state_32191__$1;
(statearr_32196_32338[(1)] = (5));

} else {
var statearr_32197_32339 = state_32191__$1;
(statearr_32197_32339[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32192 === (3))){
var inst_32189 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32191__$1,inst_32189);
} else {
if((state_val_32192 === (2))){
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32191__$1,(4),jobs);
} else {
if((state_val_32192 === (1))){
var state_32191__$1 = state_32191;
var statearr_32198_32340 = state_32191__$1;
(statearr_32198_32340[(2)] = null);

(statearr_32198_32340[(1)] = (2));


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
});})(__32322,c__16627__auto___32334,G__32151_32323,n__5138__auto___32321,jobs,results,process,async))
;
return ((function (__32322,switch__16547__auto__,c__16627__auto___32334,G__32151_32323,n__5138__auto___32321,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32202 = [null,null,null,null,null,null,null];
(statearr_32202[(0)] = state_machine__16548__auto__);

(statearr_32202[(1)] = (1));

return statearr_32202;
});
var state_machine__16548__auto____1 = (function (state_32191){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32191);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32203){if((e32203 instanceof Object)){
var ex__16551__auto__ = e32203;
var statearr_32204_32341 = state_32191;
(statearr_32204_32341[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32191);

return cljs.core.constant$keyword$99;
} else {
throw e32203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32342 = state_32191;
state_32191 = G__32342;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32191){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(__32322,switch__16547__auto__,c__16627__auto___32334,G__32151_32323,n__5138__auto___32321,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32205 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32334);

return statearr_32205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(__32322,c__16627__auto___32334,G__32151_32323,n__5138__auto___32321,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32343 = (__32322 + (1));
__32322 = G__32343;
continue;
} else {
}
break;
}

var c__16627__auto___32344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32344,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32344,jobs,results,process,async){
return (function (state_32227){
var state_val_32228 = (state_32227[(1)]);
if((state_val_32228 === (9))){
var inst_32220 = (state_32227[(2)]);
var state_32227__$1 = (function (){var statearr_32229 = state_32227;
(statearr_32229[(7)] = inst_32220);

return statearr_32229;
})();
var statearr_32230_32345 = state_32227__$1;
(statearr_32230_32345[(2)] = null);

(statearr_32230_32345[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32228 === (8))){
var inst_32213 = (state_32227[(8)]);
var inst_32218 = (state_32227[(2)]);
var state_32227__$1 = (function (){var statearr_32231 = state_32227;
(statearr_32231[(9)] = inst_32218);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32227__$1,(9),results,inst_32213);
} else {
if((state_val_32228 === (7))){
var inst_32223 = (state_32227[(2)]);
var state_32227__$1 = state_32227;
var statearr_32232_32346 = state_32227__$1;
(statearr_32232_32346[(2)] = inst_32223);

(statearr_32232_32346[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32228 === (6))){
var inst_32208 = (state_32227[(10)]);
var inst_32213 = (state_32227[(8)]);
var inst_32213__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32215 = [inst_32208,inst_32213__$1];
var inst_32216 = (new cljs.core.PersistentVector(null,2,(5),inst_32214,inst_32215,null));
var state_32227__$1 = (function (){var statearr_32233 = state_32227;
(statearr_32233[(8)] = inst_32213__$1);

return statearr_32233;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32227__$1,(8),jobs,inst_32216);
} else {
if((state_val_32228 === (5))){
var inst_32211 = cljs.core.async.close_BANG_(jobs);
var state_32227__$1 = state_32227;
var statearr_32234_32347 = state_32227__$1;
(statearr_32234_32347[(2)] = inst_32211);

(statearr_32234_32347[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32228 === (4))){
var inst_32208 = (state_32227[(10)]);
var inst_32208__$1 = (state_32227[(2)]);
var inst_32209 = (inst_32208__$1 == null);
var state_32227__$1 = (function (){var statearr_32235 = state_32227;
(statearr_32235[(10)] = inst_32208__$1);

return statearr_32235;
})();
if(cljs.core.truth_(inst_32209)){
var statearr_32236_32348 = state_32227__$1;
(statearr_32236_32348[(1)] = (5));

} else {
var statearr_32237_32349 = state_32227__$1;
(statearr_32237_32349[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32228 === (3))){
var inst_32225 = (state_32227[(2)]);
var state_32227__$1 = state_32227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32227__$1,inst_32225);
} else {
if((state_val_32228 === (2))){
var state_32227__$1 = state_32227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32227__$1,(4),from);
} else {
if((state_val_32228 === (1))){
var state_32227__$1 = state_32227;
var statearr_32238_32350 = state_32227__$1;
(statearr_32238_32350[(2)] = null);

(statearr_32238_32350[(1)] = (2));


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
});})(c__16627__auto___32344,jobs,results,process,async))
;
return ((function (switch__16547__auto__,c__16627__auto___32344,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32242[(0)] = state_machine__16548__auto__);

(statearr_32242[(1)] = (1));

return statearr_32242;
});
var state_machine__16548__auto____1 = (function (state_32227){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32227);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32243){if((e32243 instanceof Object)){
var ex__16551__auto__ = e32243;
var statearr_32244_32351 = state_32227;
(statearr_32244_32351[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32227);

return cljs.core.constant$keyword$99;
} else {
throw e32243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32352 = state_32227;
state_32227 = G__32352;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32227){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32344,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32245 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32344);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32344,jobs,results,process,async))
);


var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__,jobs,results,process,async){
return (function (state_32283){
var state_val_32284 = (state_32283[(1)]);
if((state_val_32284 === (7))){
var inst_32279 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32285_32353 = state_32283__$1;
(statearr_32285_32353[(2)] = inst_32279);

(statearr_32285_32353[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (20))){
var state_32283__$1 = state_32283;
var statearr_32286_32354 = state_32283__$1;
(statearr_32286_32354[(2)] = null);

(statearr_32286_32354[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (1))){
var state_32283__$1 = state_32283;
var statearr_32287_32355 = state_32283__$1;
(statearr_32287_32355[(2)] = null);

(statearr_32287_32355[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (4))){
var inst_32248 = (state_32283[(7)]);
var inst_32248__$1 = (state_32283[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var state_32283__$1 = (function (){var statearr_32288 = state_32283;
(statearr_32288[(7)] = inst_32248__$1);

return statearr_32288;
})();
if(cljs.core.truth_(inst_32249)){
var statearr_32289_32356 = state_32283__$1;
(statearr_32289_32356[(1)] = (5));

} else {
var statearr_32290_32357 = state_32283__$1;
(statearr_32290_32357[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (15))){
var inst_32261 = (state_32283[(8)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32283__$1,(18),to,inst_32261);
} else {
if((state_val_32284 === (21))){
var inst_32274 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32291_32358 = state_32283__$1;
(statearr_32291_32358[(2)] = inst_32274);

(statearr_32291_32358[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (13))){
var inst_32276 = (state_32283[(2)]);
var state_32283__$1 = (function (){var statearr_32292 = state_32283;
(statearr_32292[(9)] = inst_32276);

return statearr_32292;
})();
var statearr_32293_32359 = state_32283__$1;
(statearr_32293_32359[(2)] = null);

(statearr_32293_32359[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (6))){
var inst_32248 = (state_32283[(7)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(11),inst_32248);
} else {
if((state_val_32284 === (17))){
var inst_32269 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
if(cljs.core.truth_(inst_32269)){
var statearr_32294_32360 = state_32283__$1;
(statearr_32294_32360[(1)] = (19));

} else {
var statearr_32295_32361 = state_32283__$1;
(statearr_32295_32361[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (3))){
var inst_32281 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32283__$1,inst_32281);
} else {
if((state_val_32284 === (12))){
var inst_32258 = (state_32283[(10)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(14),inst_32258);
} else {
if((state_val_32284 === (2))){
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(4),results);
} else {
if((state_val_32284 === (19))){
var state_32283__$1 = state_32283;
var statearr_32296_32362 = state_32283__$1;
(statearr_32296_32362[(2)] = null);

(statearr_32296_32362[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (11))){
var inst_32258 = (state_32283[(2)]);
var state_32283__$1 = (function (){var statearr_32297 = state_32283;
(statearr_32297[(10)] = inst_32258);

return statearr_32297;
})();
var statearr_32298_32363 = state_32283__$1;
(statearr_32298_32363[(2)] = null);

(statearr_32298_32363[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (9))){
var state_32283__$1 = state_32283;
var statearr_32299_32364 = state_32283__$1;
(statearr_32299_32364[(2)] = null);

(statearr_32299_32364[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (5))){
var state_32283__$1 = state_32283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32300_32365 = state_32283__$1;
(statearr_32300_32365[(1)] = (8));

} else {
var statearr_32301_32366 = state_32283__$1;
(statearr_32301_32366[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (14))){
var inst_32263 = (state_32283[(11)]);
var inst_32261 = (state_32283[(8)]);
var inst_32261__$1 = (state_32283[(2)]);
var inst_32262 = (inst_32261__$1 == null);
var inst_32263__$1 = cljs.core.not(inst_32262);
var state_32283__$1 = (function (){var statearr_32302 = state_32283;
(statearr_32302[(11)] = inst_32263__$1);

(statearr_32302[(8)] = inst_32261__$1);

return statearr_32302;
})();
if(inst_32263__$1){
var statearr_32303_32367 = state_32283__$1;
(statearr_32303_32367[(1)] = (15));

} else {
var statearr_32304_32368 = state_32283__$1;
(statearr_32304_32368[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (16))){
var inst_32263 = (state_32283[(11)]);
var state_32283__$1 = state_32283;
var statearr_32305_32369 = state_32283__$1;
(statearr_32305_32369[(2)] = inst_32263);

(statearr_32305_32369[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (10))){
var inst_32255 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32306_32370 = state_32283__$1;
(statearr_32306_32370[(2)] = inst_32255);

(statearr_32306_32370[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (18))){
var inst_32266 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32307_32371 = state_32283__$1;
(statearr_32307_32371[(2)] = inst_32266);

(statearr_32307_32371[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32284 === (8))){
var inst_32252 = cljs.core.async.close_BANG_(to);
var state_32283__$1 = state_32283;
var statearr_32308_32372 = state_32283__$1;
(statearr_32308_32372[(2)] = inst_32252);

(statearr_32308_32372[(1)] = (10));


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
var statearr_32312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32312[(0)] = state_machine__16548__auto__);

(statearr_32312[(1)] = (1));

return statearr_32312;
});
var state_machine__16548__auto____1 = (function (state_32283){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32283);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32313){if((e32313 instanceof Object)){
var ex__16551__auto__ = e32313;
var statearr_32314_32373 = state_32283;
(statearr_32314_32373[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32283);

return cljs.core.constant$keyword$99;
} else {
throw e32313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32374 = state_32283;
state_32283 = G__32374;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32283){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32315 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32315;
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
var c__16627__auto___32497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32497,tc,fc){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32497,tc,fc){
return (function (state_32471){
var state_val_32472 = (state_32471[(1)]);
if((state_val_32472 === (7))){
var inst_32467 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32473_32498 = state_32471__$1;
(statearr_32473_32498[(2)] = inst_32467);

(statearr_32473_32498[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (1))){
var state_32471__$1 = state_32471;
var statearr_32474_32499 = state_32471__$1;
(statearr_32474_32499[(2)] = null);

(statearr_32474_32499[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (4))){
var inst_32448 = (state_32471[(7)]);
var inst_32448__$1 = (state_32471[(2)]);
var inst_32449 = (inst_32448__$1 == null);
var state_32471__$1 = (function (){var statearr_32475 = state_32471;
(statearr_32475[(7)] = inst_32448__$1);

return statearr_32475;
})();
if(cljs.core.truth_(inst_32449)){
var statearr_32476_32500 = state_32471__$1;
(statearr_32476_32500[(1)] = (5));

} else {
var statearr_32477_32501 = state_32471__$1;
(statearr_32477_32501[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (13))){
var state_32471__$1 = state_32471;
var statearr_32478_32502 = state_32471__$1;
(statearr_32478_32502[(2)] = null);

(statearr_32478_32502[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (6))){
var inst_32448 = (state_32471[(7)]);
var inst_32454 = (function (){var G__32479 = inst_32448;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32479) : p.call(null,G__32479));
})();
var state_32471__$1 = state_32471;
if(cljs.core.truth_(inst_32454)){
var statearr_32480_32503 = state_32471__$1;
(statearr_32480_32503[(1)] = (9));

} else {
var statearr_32481_32504 = state_32471__$1;
(statearr_32481_32504[(1)] = (10));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (3))){
var inst_32469 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32471__$1,inst_32469);
} else {
if((state_val_32472 === (12))){
var state_32471__$1 = state_32471;
var statearr_32482_32505 = state_32471__$1;
(statearr_32482_32505[(2)] = null);

(statearr_32482_32505[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (2))){
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32471__$1,(4),ch);
} else {
if((state_val_32472 === (11))){
var inst_32448 = (state_32471[(7)]);
var inst_32458 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32471__$1,(8),inst_32458,inst_32448);
} else {
if((state_val_32472 === (9))){
var state_32471__$1 = state_32471;
var statearr_32483_32506 = state_32471__$1;
(statearr_32483_32506[(2)] = tc);

(statearr_32483_32506[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (5))){
var inst_32451 = cljs.core.async.close_BANG_(tc);
var inst_32452 = cljs.core.async.close_BANG_(fc);
var state_32471__$1 = (function (){var statearr_32484 = state_32471;
(statearr_32484[(8)] = inst_32451);

return statearr_32484;
})();
var statearr_32485_32507 = state_32471__$1;
(statearr_32485_32507[(2)] = inst_32452);

(statearr_32485_32507[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (14))){
var inst_32465 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
var statearr_32486_32508 = state_32471__$1;
(statearr_32486_32508[(2)] = inst_32465);

(statearr_32486_32508[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (10))){
var state_32471__$1 = state_32471;
var statearr_32487_32509 = state_32471__$1;
(statearr_32487_32509[(2)] = fc);

(statearr_32487_32509[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32472 === (8))){
var inst_32460 = (state_32471[(2)]);
var state_32471__$1 = state_32471;
if(cljs.core.truth_(inst_32460)){
var statearr_32488_32510 = state_32471__$1;
(statearr_32488_32510[(1)] = (12));

} else {
var statearr_32489_32511 = state_32471__$1;
(statearr_32489_32511[(1)] = (13));

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
});})(c__16627__auto___32497,tc,fc))
;
return ((function (switch__16547__auto__,c__16627__auto___32497,tc,fc){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32493 = [null,null,null,null,null,null,null,null,null];
(statearr_32493[(0)] = state_machine__16548__auto__);

(statearr_32493[(1)] = (1));

return statearr_32493;
});
var state_machine__16548__auto____1 = (function (state_32471){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32471);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32494){if((e32494 instanceof Object)){
var ex__16551__auto__ = e32494;
var statearr_32495_32512 = state_32471;
(statearr_32495_32512[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32471);

return cljs.core.constant$keyword$99;
} else {
throw e32494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32513 = state_32471;
state_32471 = G__32513;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32471){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32497,tc,fc))
})();
var state__16629__auto__ = (function (){var statearr_32496 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32497);

return statearr_32496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32497,tc,fc))
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
return (function (state_32562){
var state_val_32563 = (state_32562[(1)]);
if((state_val_32563 === (7))){
var inst_32558 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32564_32582 = state_32562__$1;
(statearr_32564_32582[(2)] = inst_32558);

(statearr_32564_32582[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32563 === (6))){
var inst_32551 = (state_32562[(7)]);
var inst_32548 = (state_32562[(8)]);
var inst_32555 = (function (){var G__32565 = inst_32548;
var G__32566 = inst_32551;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32565,G__32566) : f.call(null,G__32565,G__32566));
})();
var inst_32548__$1 = inst_32555;
var state_32562__$1 = (function (){var statearr_32567 = state_32562;
(statearr_32567[(8)] = inst_32548__$1);

return statearr_32567;
})();
var statearr_32568_32583 = state_32562__$1;
(statearr_32568_32583[(2)] = null);

(statearr_32568_32583[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32563 === (5))){
var inst_32548 = (state_32562[(8)]);
var state_32562__$1 = state_32562;
var statearr_32569_32584 = state_32562__$1;
(statearr_32569_32584[(2)] = inst_32548);

(statearr_32569_32584[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32563 === (4))){
var inst_32551 = (state_32562[(7)]);
var inst_32551__$1 = (state_32562[(2)]);
var inst_32552 = (inst_32551__$1 == null);
var state_32562__$1 = (function (){var statearr_32570 = state_32562;
(statearr_32570[(7)] = inst_32551__$1);

return statearr_32570;
})();
if(cljs.core.truth_(inst_32552)){
var statearr_32571_32585 = state_32562__$1;
(statearr_32571_32585[(1)] = (5));

} else {
var statearr_32572_32586 = state_32562__$1;
(statearr_32572_32586[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32563 === (3))){
var inst_32560 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32562__$1,inst_32560);
} else {
if((state_val_32563 === (2))){
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32562__$1,(4),ch);
} else {
if((state_val_32563 === (1))){
var inst_32548 = init;
var state_32562__$1 = (function (){var statearr_32573 = state_32562;
(statearr_32573[(8)] = inst_32548);

return statearr_32573;
})();
var statearr_32574_32587 = state_32562__$1;
(statearr_32574_32587[(2)] = null);

(statearr_32574_32587[(1)] = (2));


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
var statearr_32578 = [null,null,null,null,null,null,null,null,null];
(statearr_32578[(0)] = state_machine__16548__auto__);

(statearr_32578[(1)] = (1));

return statearr_32578;
});
var state_machine__16548__auto____1 = (function (state_32562){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32562);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32579){if((e32579 instanceof Object)){
var ex__16551__auto__ = e32579;
var statearr_32580_32588 = state_32562;
(statearr_32580_32588[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32562);

return cljs.core.constant$keyword$99;
} else {
throw e32579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32589 = state_32562;
state_32562 = G__32589;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32562){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_32581 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32581;
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
return (function (state_32666){
var state_val_32667 = (state_32666[(1)]);
if((state_val_32667 === (7))){
var inst_32648 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32668_32691 = state_32666__$1;
(statearr_32668_32691[(2)] = inst_32648);

(statearr_32668_32691[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (1))){
var inst_32642 = cljs.core.seq(coll);
var inst_32643 = inst_32642;
var state_32666__$1 = (function (){var statearr_32669 = state_32666;
(statearr_32669[(7)] = inst_32643);

return statearr_32669;
})();
var statearr_32670_32692 = state_32666__$1;
(statearr_32670_32692[(2)] = null);

(statearr_32670_32692[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (4))){
var inst_32643 = (state_32666[(7)]);
var inst_32646 = cljs.core.first(inst_32643);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32666__$1,(7),ch,inst_32646);
} else {
if((state_val_32667 === (13))){
var inst_32660 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32671_32693 = state_32666__$1;
(statearr_32671_32693[(2)] = inst_32660);

(statearr_32671_32693[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (6))){
var inst_32651 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32651)){
var statearr_32672_32694 = state_32666__$1;
(statearr_32672_32694[(1)] = (8));

} else {
var statearr_32673_32695 = state_32666__$1;
(statearr_32673_32695[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (3))){
var inst_32664 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32666__$1,inst_32664);
} else {
if((state_val_32667 === (12))){
var state_32666__$1 = state_32666;
var statearr_32674_32696 = state_32666__$1;
(statearr_32674_32696[(2)] = null);

(statearr_32674_32696[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (2))){
var inst_32643 = (state_32666[(7)]);
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32643)){
var statearr_32675_32697 = state_32666__$1;
(statearr_32675_32697[(1)] = (4));

} else {
var statearr_32676_32698 = state_32666__$1;
(statearr_32676_32698[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (11))){
var inst_32657 = cljs.core.async.close_BANG_(ch);
var state_32666__$1 = state_32666;
var statearr_32677_32699 = state_32666__$1;
(statearr_32677_32699[(2)] = inst_32657);

(statearr_32677_32699[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (9))){
var state_32666__$1 = state_32666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32678_32700 = state_32666__$1;
(statearr_32678_32700[(1)] = (11));

} else {
var statearr_32679_32701 = state_32666__$1;
(statearr_32679_32701[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (5))){
var inst_32643 = (state_32666[(7)]);
var state_32666__$1 = state_32666;
var statearr_32680_32702 = state_32666__$1;
(statearr_32680_32702[(2)] = inst_32643);

(statearr_32680_32702[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (10))){
var inst_32662 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32681_32703 = state_32666__$1;
(statearr_32681_32703[(2)] = inst_32662);

(statearr_32681_32703[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32667 === (8))){
var inst_32643 = (state_32666[(7)]);
var inst_32653 = cljs.core.next(inst_32643);
var inst_32643__$1 = inst_32653;
var state_32666__$1 = (function (){var statearr_32682 = state_32666;
(statearr_32682[(7)] = inst_32643__$1);

return statearr_32682;
})();
var statearr_32683_32704 = state_32666__$1;
(statearr_32683_32704[(2)] = null);

(statearr_32683_32704[(1)] = (2));


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
var statearr_32687 = [null,null,null,null,null,null,null,null];
(statearr_32687[(0)] = state_machine__16548__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var state_machine__16548__auto____1 = (function (state_32666){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32666);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32688){if((e32688 instanceof Object)){
var ex__16551__auto__ = e32688;
var statearr_32689_32705 = state_32666;
(statearr_32689_32705[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32666);

return cljs.core.constant$keyword$99;
} else {
throw e32688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32706 = state_32666;
state_32666 = G__32706;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32666){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_32690 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32690;
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

cljs.core.async.Mux = (function (){var obj32708 = {};
return obj32708;
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
return (function (){var or__4251__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32712 = x__4895__auto__;
return goog.typeOf(G__32712);
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


cljs.core.async.Mult = (function (){var obj32714 = {};
return obj32714;
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
return (function (){var or__4251__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32718 = x__4895__auto__;
return goog.typeOf(G__32718);
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
return (function (){var or__4251__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32722 = x__4895__auto__;
return goog.typeOf(G__32722);
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
return (function (){var or__4251__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32726 = x__4895__auto__;
return goog.typeOf(G__32726);
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
var cs = (function (){var G__32956 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32956) : cljs.core.atom.call(null,G__32956));
})();
var m = (function (){
if(typeof cljs.core.async.t32957 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32957 = (function (cs,ch,mult,meta32958){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32958 = meta32958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32957.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32957.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32957.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32957.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32960_33185 = self__.cs;
var G__32961_33186 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32960_33185,G__32961_33186) : cljs.core.reset_BANG_.call(null,G__32960_33185,G__32961_33186));

return null;
});})(cs))
;

cljs.core.async.t32957.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32959){
var self__ = this;
var _32959__$1 = this;
return self__.meta32958;
});})(cs))
;

cljs.core.async.t32957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32959,meta32958__$1){
var self__ = this;
var _32959__$1 = this;
return (new cljs.core.async.t32957(self__.cs,self__.ch,self__.mult,meta32958__$1));
});})(cs))
;

cljs.core.async.t32957.cljs$lang$type = true;

cljs.core.async.t32957.cljs$lang$ctorStr = "cljs.core.async/t32957";

cljs.core.async.t32957.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t32957");
});})(cs))
;

cljs.core.async.__GT_t32957 = ((function (cs){
return (function __GT_t32957(cs__$1,ch__$1,mult__$1,meta32958){
return (new cljs.core.async.t32957(cs__$1,ch__$1,mult__$1,meta32958));
});})(cs))
;

}

return (new cljs.core.async.t32957(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__32962 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32962) : cljs.core.atom.call(null,G__32962));
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
var c__16627__auto___33187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33187,cs,m,dchan,dctr,done){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33187,cs,m,dchan,dctr,done){
return (function (state_33093){
var state_val_33094 = (state_33093[(1)]);
if((state_val_33094 === (7))){
var inst_33089 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33095_33188 = state_33093__$1;
(statearr_33095_33188[(2)] = inst_33089);

(statearr_33095_33188[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (20))){
var inst_32994 = (state_33093[(7)]);
var inst_33004 = cljs.core.first(inst_32994);
var inst_33005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33004,(0),null);
var inst_33006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33004,(1),null);
var state_33093__$1 = (function (){var statearr_33096 = state_33093;
(statearr_33096[(8)] = inst_33005);

return statearr_33096;
})();
if(cljs.core.truth_(inst_33006)){
var statearr_33097_33189 = state_33093__$1;
(statearr_33097_33189[(1)] = (22));

} else {
var statearr_33098_33190 = state_33093__$1;
(statearr_33098_33190[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (27))){
var inst_33036 = (state_33093[(9)]);
var inst_33041 = (state_33093[(10)]);
var inst_32965 = (state_33093[(11)]);
var inst_33034 = (state_33093[(12)]);
var inst_33041__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33034,inst_33036);
var inst_33042 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33041__$1,inst_32965,done);
var state_33093__$1 = (function (){var statearr_33099 = state_33093;
(statearr_33099[(10)] = inst_33041__$1);

return statearr_33099;
})();
if(cljs.core.truth_(inst_33042)){
var statearr_33100_33191 = state_33093__$1;
(statearr_33100_33191[(1)] = (30));

} else {
var statearr_33101_33192 = state_33093__$1;
(statearr_33101_33192[(1)] = (31));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (1))){
var state_33093__$1 = state_33093;
var statearr_33102_33193 = state_33093__$1;
(statearr_33102_33193[(2)] = null);

(statearr_33102_33193[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (24))){
var inst_32994 = (state_33093[(7)]);
var inst_33011 = (state_33093[(2)]);
var inst_33012 = cljs.core.next(inst_32994);
var inst_32974 = inst_33012;
var inst_32975 = null;
var inst_32976 = (0);
var inst_32977 = (0);
var state_33093__$1 = (function (){var statearr_33103 = state_33093;
(statearr_33103[(13)] = inst_32976);

(statearr_33103[(14)] = inst_32977);

(statearr_33103[(15)] = inst_32975);

(statearr_33103[(16)] = inst_32974);

(statearr_33103[(17)] = inst_33011);

return statearr_33103;
})();
var statearr_33104_33194 = state_33093__$1;
(statearr_33104_33194[(2)] = null);

(statearr_33104_33194[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (39))){
var state_33093__$1 = state_33093;
var statearr_33108_33195 = state_33093__$1;
(statearr_33108_33195[(2)] = null);

(statearr_33108_33195[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (4))){
var inst_32965 = (state_33093[(11)]);
var inst_32965__$1 = (state_33093[(2)]);
var inst_32966 = (inst_32965__$1 == null);
var state_33093__$1 = (function (){var statearr_33109 = state_33093;
(statearr_33109[(11)] = inst_32965__$1);

return statearr_33109;
})();
if(cljs.core.truth_(inst_32966)){
var statearr_33110_33196 = state_33093__$1;
(statearr_33110_33196[(1)] = (5));

} else {
var statearr_33111_33197 = state_33093__$1;
(statearr_33111_33197[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (15))){
var inst_32976 = (state_33093[(13)]);
var inst_32977 = (state_33093[(14)]);
var inst_32975 = (state_33093[(15)]);
var inst_32974 = (state_33093[(16)]);
var inst_32990 = (state_33093[(2)]);
var inst_32991 = (inst_32977 + (1));
var tmp33105 = inst_32976;
var tmp33106 = inst_32975;
var tmp33107 = inst_32974;
var inst_32974__$1 = tmp33107;
var inst_32975__$1 = tmp33106;
var inst_32976__$1 = tmp33105;
var inst_32977__$1 = inst_32991;
var state_33093__$1 = (function (){var statearr_33112 = state_33093;
(statearr_33112[(13)] = inst_32976__$1);

(statearr_33112[(14)] = inst_32977__$1);

(statearr_33112[(15)] = inst_32975__$1);

(statearr_33112[(16)] = inst_32974__$1);

(statearr_33112[(18)] = inst_32990);

return statearr_33112;
})();
var statearr_33113_33198 = state_33093__$1;
(statearr_33113_33198[(2)] = null);

(statearr_33113_33198[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (21))){
var inst_33015 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33117_33199 = state_33093__$1;
(statearr_33117_33199[(2)] = inst_33015);

(statearr_33117_33199[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (31))){
var inst_33041 = (state_33093[(10)]);
var inst_33045 = done(null);
var inst_33046 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33041);
var state_33093__$1 = (function (){var statearr_33118 = state_33093;
(statearr_33118[(19)] = inst_33045);

return statearr_33118;
})();
var statearr_33119_33200 = state_33093__$1;
(statearr_33119_33200[(2)] = inst_33046);

(statearr_33119_33200[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (32))){
var inst_33036 = (state_33093[(9)]);
var inst_33035 = (state_33093[(20)]);
var inst_33033 = (state_33093[(21)]);
var inst_33034 = (state_33093[(12)]);
var inst_33048 = (state_33093[(2)]);
var inst_33049 = (inst_33036 + (1));
var tmp33114 = inst_33035;
var tmp33115 = inst_33033;
var tmp33116 = inst_33034;
var inst_33033__$1 = tmp33115;
var inst_33034__$1 = tmp33116;
var inst_33035__$1 = tmp33114;
var inst_33036__$1 = inst_33049;
var state_33093__$1 = (function (){var statearr_33120 = state_33093;
(statearr_33120[(9)] = inst_33036__$1);

(statearr_33120[(20)] = inst_33035__$1);

(statearr_33120[(21)] = inst_33033__$1);

(statearr_33120[(22)] = inst_33048);

(statearr_33120[(12)] = inst_33034__$1);

return statearr_33120;
})();
var statearr_33121_33201 = state_33093__$1;
(statearr_33121_33201[(2)] = null);

(statearr_33121_33201[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (40))){
var inst_33061 = (state_33093[(23)]);
var inst_33065 = done(null);
var inst_33066 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33061);
var state_33093__$1 = (function (){var statearr_33122 = state_33093;
(statearr_33122[(24)] = inst_33065);

return statearr_33122;
})();
var statearr_33123_33202 = state_33093__$1;
(statearr_33123_33202[(2)] = inst_33066);

(statearr_33123_33202[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (33))){
var inst_33052 = (state_33093[(25)]);
var inst_33054 = cljs.core.chunked_seq_QMARK_(inst_33052);
var state_33093__$1 = state_33093;
if(inst_33054){
var statearr_33124_33203 = state_33093__$1;
(statearr_33124_33203[(1)] = (36));

} else {
var statearr_33125_33204 = state_33093__$1;
(statearr_33125_33204[(1)] = (37));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (13))){
var inst_32984 = (state_33093[(26)]);
var inst_32987 = cljs.core.async.close_BANG_(inst_32984);
var state_33093__$1 = state_33093;
var statearr_33126_33205 = state_33093__$1;
(statearr_33126_33205[(2)] = inst_32987);

(statearr_33126_33205[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (22))){
var inst_33005 = (state_33093[(8)]);
var inst_33008 = cljs.core.async.close_BANG_(inst_33005);
var state_33093__$1 = state_33093;
var statearr_33127_33206 = state_33093__$1;
(statearr_33127_33206[(2)] = inst_33008);

(statearr_33127_33206[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (36))){
var inst_33052 = (state_33093[(25)]);
var inst_33056 = cljs.core.chunk_first(inst_33052);
var inst_33057 = cljs.core.chunk_rest(inst_33052);
var inst_33058 = cljs.core.count(inst_33056);
var inst_33033 = inst_33057;
var inst_33034 = inst_33056;
var inst_33035 = inst_33058;
var inst_33036 = (0);
var state_33093__$1 = (function (){var statearr_33128 = state_33093;
(statearr_33128[(9)] = inst_33036);

(statearr_33128[(20)] = inst_33035);

(statearr_33128[(21)] = inst_33033);

(statearr_33128[(12)] = inst_33034);

return statearr_33128;
})();
var statearr_33129_33207 = state_33093__$1;
(statearr_33129_33207[(2)] = null);

(statearr_33129_33207[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (41))){
var inst_33052 = (state_33093[(25)]);
var inst_33068 = (state_33093[(2)]);
var inst_33069 = cljs.core.next(inst_33052);
var inst_33033 = inst_33069;
var inst_33034 = null;
var inst_33035 = (0);
var inst_33036 = (0);
var state_33093__$1 = (function (){var statearr_33130 = state_33093;
(statearr_33130[(9)] = inst_33036);

(statearr_33130[(20)] = inst_33035);

(statearr_33130[(21)] = inst_33033);

(statearr_33130[(27)] = inst_33068);

(statearr_33130[(12)] = inst_33034);

return statearr_33130;
})();
var statearr_33131_33208 = state_33093__$1;
(statearr_33131_33208[(2)] = null);

(statearr_33131_33208[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (43))){
var state_33093__$1 = state_33093;
var statearr_33132_33209 = state_33093__$1;
(statearr_33132_33209[(2)] = null);

(statearr_33132_33209[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (29))){
var inst_33077 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33133_33210 = state_33093__$1;
(statearr_33133_33210[(2)] = inst_33077);

(statearr_33133_33210[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (44))){
var inst_33086 = (state_33093[(2)]);
var state_33093__$1 = (function (){var statearr_33134 = state_33093;
(statearr_33134[(28)] = inst_33086);

return statearr_33134;
})();
var statearr_33135_33211 = state_33093__$1;
(statearr_33135_33211[(2)] = null);

(statearr_33135_33211[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (6))){
var inst_33025 = (state_33093[(29)]);
var inst_33024 = (function (){var G__33136 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33136) : cljs.core.deref.call(null,G__33136));
})();
var inst_33025__$1 = cljs.core.keys(inst_33024);
var inst_33026 = cljs.core.count(inst_33025__$1);
var inst_33027 = (function (){var G__33137 = dctr;
var G__33138 = inst_33026;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33137,G__33138) : cljs.core.reset_BANG_.call(null,G__33137,G__33138));
})();
var inst_33032 = cljs.core.seq(inst_33025__$1);
var inst_33033 = inst_33032;
var inst_33034 = null;
var inst_33035 = (0);
var inst_33036 = (0);
var state_33093__$1 = (function (){var statearr_33139 = state_33093;
(statearr_33139[(29)] = inst_33025__$1);

(statearr_33139[(9)] = inst_33036);

(statearr_33139[(20)] = inst_33035);

(statearr_33139[(21)] = inst_33033);

(statearr_33139[(12)] = inst_33034);

(statearr_33139[(30)] = inst_33027);

return statearr_33139;
})();
var statearr_33140_33212 = state_33093__$1;
(statearr_33140_33212[(2)] = null);

(statearr_33140_33212[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (28))){
var inst_33033 = (state_33093[(21)]);
var inst_33052 = (state_33093[(25)]);
var inst_33052__$1 = cljs.core.seq(inst_33033);
var state_33093__$1 = (function (){var statearr_33141 = state_33093;
(statearr_33141[(25)] = inst_33052__$1);

return statearr_33141;
})();
if(inst_33052__$1){
var statearr_33142_33213 = state_33093__$1;
(statearr_33142_33213[(1)] = (33));

} else {
var statearr_33143_33214 = state_33093__$1;
(statearr_33143_33214[(1)] = (34));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (25))){
var inst_33036 = (state_33093[(9)]);
var inst_33035 = (state_33093[(20)]);
var inst_33038 = (inst_33036 < inst_33035);
var inst_33039 = inst_33038;
var state_33093__$1 = state_33093;
if(cljs.core.truth_(inst_33039)){
var statearr_33144_33215 = state_33093__$1;
(statearr_33144_33215[(1)] = (27));

} else {
var statearr_33145_33216 = state_33093__$1;
(statearr_33145_33216[(1)] = (28));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (34))){
var state_33093__$1 = state_33093;
var statearr_33146_33217 = state_33093__$1;
(statearr_33146_33217[(2)] = null);

(statearr_33146_33217[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (17))){
var state_33093__$1 = state_33093;
var statearr_33147_33218 = state_33093__$1;
(statearr_33147_33218[(2)] = null);

(statearr_33147_33218[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (3))){
var inst_33091 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33093__$1,inst_33091);
} else {
if((state_val_33094 === (12))){
var inst_33020 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33148_33219 = state_33093__$1;
(statearr_33148_33219[(2)] = inst_33020);

(statearr_33148_33219[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (2))){
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33093__$1,(4),ch);
} else {
if((state_val_33094 === (23))){
var state_33093__$1 = state_33093;
var statearr_33149_33220 = state_33093__$1;
(statearr_33149_33220[(2)] = null);

(statearr_33149_33220[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (35))){
var inst_33075 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33150_33221 = state_33093__$1;
(statearr_33150_33221[(2)] = inst_33075);

(statearr_33150_33221[(1)] = (29));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (19))){
var inst_32994 = (state_33093[(7)]);
var inst_32998 = cljs.core.chunk_first(inst_32994);
var inst_32999 = cljs.core.chunk_rest(inst_32994);
var inst_33000 = cljs.core.count(inst_32998);
var inst_32974 = inst_32999;
var inst_32975 = inst_32998;
var inst_32976 = inst_33000;
var inst_32977 = (0);
var state_33093__$1 = (function (){var statearr_33151 = state_33093;
(statearr_33151[(13)] = inst_32976);

(statearr_33151[(14)] = inst_32977);

(statearr_33151[(15)] = inst_32975);

(statearr_33151[(16)] = inst_32974);

return statearr_33151;
})();
var statearr_33152_33222 = state_33093__$1;
(statearr_33152_33222[(2)] = null);

(statearr_33152_33222[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (11))){
var inst_32994 = (state_33093[(7)]);
var inst_32974 = (state_33093[(16)]);
var inst_32994__$1 = cljs.core.seq(inst_32974);
var state_33093__$1 = (function (){var statearr_33153 = state_33093;
(statearr_33153[(7)] = inst_32994__$1);

return statearr_33153;
})();
if(inst_32994__$1){
var statearr_33154_33223 = state_33093__$1;
(statearr_33154_33223[(1)] = (16));

} else {
var statearr_33155_33224 = state_33093__$1;
(statearr_33155_33224[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (9))){
var inst_33022 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33156_33225 = state_33093__$1;
(statearr_33156_33225[(2)] = inst_33022);

(statearr_33156_33225[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (5))){
var inst_32972 = (function (){var G__33157 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33157) : cljs.core.deref.call(null,G__33157));
})();
var inst_32973 = cljs.core.seq(inst_32972);
var inst_32974 = inst_32973;
var inst_32975 = null;
var inst_32976 = (0);
var inst_32977 = (0);
var state_33093__$1 = (function (){var statearr_33158 = state_33093;
(statearr_33158[(13)] = inst_32976);

(statearr_33158[(14)] = inst_32977);

(statearr_33158[(15)] = inst_32975);

(statearr_33158[(16)] = inst_32974);

return statearr_33158;
})();
var statearr_33159_33226 = state_33093__$1;
(statearr_33159_33226[(2)] = null);

(statearr_33159_33226[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (14))){
var state_33093__$1 = state_33093;
var statearr_33160_33227 = state_33093__$1;
(statearr_33160_33227[(2)] = null);

(statearr_33160_33227[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (45))){
var inst_33083 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33161_33228 = state_33093__$1;
(statearr_33161_33228[(2)] = inst_33083);

(statearr_33161_33228[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (26))){
var inst_33025 = (state_33093[(29)]);
var inst_33079 = (state_33093[(2)]);
var inst_33080 = cljs.core.seq(inst_33025);
var state_33093__$1 = (function (){var statearr_33162 = state_33093;
(statearr_33162[(31)] = inst_33079);

return statearr_33162;
})();
if(inst_33080){
var statearr_33163_33229 = state_33093__$1;
(statearr_33163_33229[(1)] = (42));

} else {
var statearr_33164_33230 = state_33093__$1;
(statearr_33164_33230[(1)] = (43));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (16))){
var inst_32994 = (state_33093[(7)]);
var inst_32996 = cljs.core.chunked_seq_QMARK_(inst_32994);
var state_33093__$1 = state_33093;
if(inst_32996){
var statearr_33165_33231 = state_33093__$1;
(statearr_33165_33231[(1)] = (19));

} else {
var statearr_33166_33232 = state_33093__$1;
(statearr_33166_33232[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (38))){
var inst_33072 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33167_33233 = state_33093__$1;
(statearr_33167_33233[(2)] = inst_33072);

(statearr_33167_33233[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (30))){
var state_33093__$1 = state_33093;
var statearr_33168_33234 = state_33093__$1;
(statearr_33168_33234[(2)] = null);

(statearr_33168_33234[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (10))){
var inst_32977 = (state_33093[(14)]);
var inst_32975 = (state_33093[(15)]);
var inst_32983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32975,inst_32977);
var inst_32984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32983,(0),null);
var inst_32985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32983,(1),null);
var state_33093__$1 = (function (){var statearr_33169 = state_33093;
(statearr_33169[(26)] = inst_32984);

return statearr_33169;
})();
if(cljs.core.truth_(inst_32985)){
var statearr_33170_33235 = state_33093__$1;
(statearr_33170_33235[(1)] = (13));

} else {
var statearr_33171_33236 = state_33093__$1;
(statearr_33171_33236[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (18))){
var inst_33018 = (state_33093[(2)]);
var state_33093__$1 = state_33093;
var statearr_33172_33237 = state_33093__$1;
(statearr_33172_33237[(2)] = inst_33018);

(statearr_33172_33237[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (42))){
var state_33093__$1 = state_33093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33093__$1,(45),dchan);
} else {
if((state_val_33094 === (37))){
var inst_33061 = (state_33093[(23)]);
var inst_32965 = (state_33093[(11)]);
var inst_33052 = (state_33093[(25)]);
var inst_33061__$1 = cljs.core.first(inst_33052);
var inst_33062 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33061__$1,inst_32965,done);
var state_33093__$1 = (function (){var statearr_33173 = state_33093;
(statearr_33173[(23)] = inst_33061__$1);

return statearr_33173;
})();
if(cljs.core.truth_(inst_33062)){
var statearr_33174_33238 = state_33093__$1;
(statearr_33174_33238[(1)] = (39));

} else {
var statearr_33175_33239 = state_33093__$1;
(statearr_33175_33239[(1)] = (40));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33094 === (8))){
var inst_32976 = (state_33093[(13)]);
var inst_32977 = (state_33093[(14)]);
var inst_32979 = (inst_32977 < inst_32976);
var inst_32980 = inst_32979;
var state_33093__$1 = state_33093;
if(cljs.core.truth_(inst_32980)){
var statearr_33176_33240 = state_33093__$1;
(statearr_33176_33240[(1)] = (10));

} else {
var statearr_33177_33241 = state_33093__$1;
(statearr_33177_33241[(1)] = (11));

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
});})(c__16627__auto___33187,cs,m,dchan,dctr,done))
;
return ((function (switch__16547__auto__,c__16627__auto___33187,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33181[(0)] = state_machine__16548__auto__);

(statearr_33181[(1)] = (1));

return statearr_33181;
});
var state_machine__16548__auto____1 = (function (state_33093){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33093);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33182){if((e33182 instanceof Object)){
var ex__16551__auto__ = e33182;
var statearr_33183_33242 = state_33093;
(statearr_33183_33242[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33093);

return cljs.core.constant$keyword$99;
} else {
throw e33182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33243 = state_33093;
state_33093 = G__33243;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33093){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33187,cs,m,dchan,dctr,done))
})();
var state__16629__auto__ = (function (){var statearr_33184 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33187);

return statearr_33184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33187,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj33248 = {};
return obj33248;
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
return (function (){var or__4251__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__33252 = x__4895__auto__;
return goog.typeOf(G__33252);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__33256 = x__4895__auto__;
return goog.typeOf(G__33256);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__33260 = x__4895__auto__;
return goog.typeOf(G__33260);
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
return (function (){var or__4251__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__33264 = x__4895__auto__;
return goog.typeOf(G__33264);
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
return (function (){var or__4251__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__33268 = x__4895__auto__;
return goog.typeOf(G__33268);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33269){
var map__33275 = p__33269;
var map__33275__$1 = ((cljs.core.seq_QMARK_(map__33275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33275):map__33275);
var opts = map__33275__$1;
var statearr_33276_33280 = state;
(statearr_33276_33280[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__33275,map__33275__$1,opts){
return (function (val){
var statearr_33277_33281 = state;
(statearr_33277_33281[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33275,map__33275__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33278_33282 = state;
(statearr_33278_33282[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__33279 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33279) : cljs.core.deref.call(null,G__33279));
})());


return cljs.core.constant$keyword$99;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33269 = null;
if (arguments.length > 3) {
var G__33283__i = 0, G__33283__a = new Array(arguments.length -  3);
while (G__33283__i < G__33283__a.length) {G__33283__a[G__33283__i] = arguments[G__33283__i + 3]; ++G__33283__i;}
  p__33269 = new cljs.core.IndexedSeq(G__33283__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33269);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33284){
var state = cljs.core.first(arglist__33284);
arglist__33284 = cljs.core.next(arglist__33284);
var cont_block = cljs.core.first(arglist__33284);
arglist__33284 = cljs.core.next(arglist__33284);
var ports = cljs.core.first(arglist__33284);
var p__33269 = cljs.core.rest(arglist__33284);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33269);
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
var cs = (function (){var G__33418 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33418) : cljs.core.atom.call(null,G__33418));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$110);
var solo_mode = (function (){var G__33419 = cljs.core.constant$keyword$109;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33419) : cljs.core.atom.call(null,G__33419));
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
if(cljs.core.truth_((function (){var G__33420 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__33420) : attr.call(null,G__33420));
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
var chs = (function (){var G__33421 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33421) : cljs.core.deref.call(null,G__33421));
})();
var mode = (function (){var G__33422 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33422) : cljs.core.deref.call(null,G__33422));
})();
var solos = pick(cljs.core.constant$keyword$110,chs);
var pauses = pick(cljs.core.constant$keyword$108,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$111,solos,cljs.core.constant$keyword$112,pick(cljs.core.constant$keyword$109,chs),cljs.core.constant$keyword$113,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$108)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t33423 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33423 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33424){
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
this.meta33424 = meta33424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33423.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33423.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33426_33551 = self__.cs;
var G__33427_33552 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33426_33551,G__33427_33552) : cljs.core.reset_BANG_.call(null,G__33426_33551,G__33427_33552));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33428 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__33428) : self__.solo_modes.call(null,G__33428));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__33429_33553 = self__.solo_mode;
var G__33430_33554 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33429_33553,G__33430_33554) : cljs.core.reset_BANG_.call(null,G__33429_33553,G__33430_33554));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33425){
var self__ = this;
var _33425__$1 = this;
return self__.meta33424;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33425,meta33424__$1){
var self__ = this;
var _33425__$1 = this;
return (new cljs.core.async.t33423(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33424__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33423.cljs$lang$type = true;

cljs.core.async.t33423.cljs$lang$ctorStr = "cljs.core.async/t33423";

cljs.core.async.t33423.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t33423");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33423 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33423(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33424){
return (new cljs.core.async.t33423(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33424));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33423(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16627__auto___33555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33555,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33555,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33502){
var state_val_33503 = (state_33502[(1)]);
if((state_val_33503 === (7))){
var inst_33444 = (state_33502[(7)]);
var inst_33449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33444);
var state_33502__$1 = state_33502;
var statearr_33504_33556 = state_33502__$1;
(statearr_33504_33556[(2)] = inst_33449);

(statearr_33504_33556[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (20))){
var inst_33459 = (state_33502[(8)]);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33502__$1,(23),out,inst_33459);
} else {
if((state_val_33503 === (1))){
var inst_33434 = (state_33502[(9)]);
var inst_33434__$1 = calc_state();
var inst_33435 = cljs.core.seq_QMARK_(inst_33434__$1);
var state_33502__$1 = (function (){var statearr_33505 = state_33502;
(statearr_33505[(9)] = inst_33434__$1);

return statearr_33505;
})();
if(inst_33435){
var statearr_33506_33557 = state_33502__$1;
(statearr_33506_33557[(1)] = (2));

} else {
var statearr_33507_33558 = state_33502__$1;
(statearr_33507_33558[(1)] = (3));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (24))){
var inst_33452 = (state_33502[(10)]);
var inst_33444 = inst_33452;
var state_33502__$1 = (function (){var statearr_33508 = state_33502;
(statearr_33508[(7)] = inst_33444);

return statearr_33508;
})();
var statearr_33509_33559 = state_33502__$1;
(statearr_33509_33559[(2)] = null);

(statearr_33509_33559[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (4))){
var inst_33434 = (state_33502[(9)]);
var inst_33440 = (state_33502[(2)]);
var inst_33441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33440,cljs.core.constant$keyword$113);
var inst_33442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33440,cljs.core.constant$keyword$112);
var inst_33443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33440,cljs.core.constant$keyword$111);
var inst_33444 = inst_33434;
var state_33502__$1 = (function (){var statearr_33510 = state_33502;
(statearr_33510[(11)] = inst_33443);

(statearr_33510[(12)] = inst_33442);

(statearr_33510[(7)] = inst_33444);

(statearr_33510[(13)] = inst_33441);

return statearr_33510;
})();
var statearr_33511_33560 = state_33502__$1;
(statearr_33511_33560[(2)] = null);

(statearr_33511_33560[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (15))){
var state_33502__$1 = state_33502;
var statearr_33512_33561 = state_33502__$1;
(statearr_33512_33561[(2)] = null);

(statearr_33512_33561[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (21))){
var inst_33452 = (state_33502[(10)]);
var inst_33444 = inst_33452;
var state_33502__$1 = (function (){var statearr_33513 = state_33502;
(statearr_33513[(7)] = inst_33444);

return statearr_33513;
})();
var statearr_33514_33562 = state_33502__$1;
(statearr_33514_33562[(2)] = null);

(statearr_33514_33562[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (13))){
var inst_33498 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33515_33563 = state_33502__$1;
(statearr_33515_33563[(2)] = inst_33498);

(statearr_33515_33563[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (22))){
var inst_33496 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33516_33564 = state_33502__$1;
(statearr_33516_33564[(2)] = inst_33496);

(statearr_33516_33564[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (6))){
var inst_33500 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33502__$1,inst_33500);
} else {
if((state_val_33503 === (25))){
var state_33502__$1 = state_33502;
var statearr_33517_33565 = state_33502__$1;
(statearr_33517_33565[(2)] = null);

(statearr_33517_33565[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (17))){
var inst_33475 = (state_33502[(14)]);
var state_33502__$1 = state_33502;
var statearr_33518_33566 = state_33502__$1;
(statearr_33518_33566[(2)] = inst_33475);

(statearr_33518_33566[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (3))){
var inst_33434 = (state_33502[(9)]);
var state_33502__$1 = state_33502;
var statearr_33519_33567 = state_33502__$1;
(statearr_33519_33567[(2)] = inst_33434);

(statearr_33519_33567[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (12))){
var inst_33455 = (state_33502[(15)]);
var inst_33460 = (state_33502[(16)]);
var inst_33475 = (state_33502[(14)]);
var inst_33475__$1 = (function (){var G__33520 = inst_33460;
return (inst_33455.cljs$core$IFn$_invoke$arity$1 ? inst_33455.cljs$core$IFn$_invoke$arity$1(G__33520) : inst_33455.call(null,G__33520));
})();
var state_33502__$1 = (function (){var statearr_33521 = state_33502;
(statearr_33521[(14)] = inst_33475__$1);

return statearr_33521;
})();
if(cljs.core.truth_(inst_33475__$1)){
var statearr_33522_33568 = state_33502__$1;
(statearr_33522_33568[(1)] = (17));

} else {
var statearr_33523_33569 = state_33502__$1;
(statearr_33523_33569[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (2))){
var inst_33434 = (state_33502[(9)]);
var inst_33437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33434);
var state_33502__$1 = state_33502;
var statearr_33524_33570 = state_33502__$1;
(statearr_33524_33570[(2)] = inst_33437);

(statearr_33524_33570[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (23))){
var inst_33487 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33487)){
var statearr_33525_33571 = state_33502__$1;
(statearr_33525_33571[(1)] = (24));

} else {
var statearr_33526_33572 = state_33502__$1;
(statearr_33526_33572[(1)] = (25));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (19))){
var inst_33484 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33484)){
var statearr_33527_33573 = state_33502__$1;
(statearr_33527_33573[(1)] = (20));

} else {
var statearr_33528_33574 = state_33502__$1;
(statearr_33528_33574[(1)] = (21));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (11))){
var inst_33459 = (state_33502[(8)]);
var inst_33465 = (inst_33459 == null);
var state_33502__$1 = state_33502;
if(cljs.core.truth_(inst_33465)){
var statearr_33529_33575 = state_33502__$1;
(statearr_33529_33575[(1)] = (14));

} else {
var statearr_33530_33576 = state_33502__$1;
(statearr_33530_33576[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (9))){
var inst_33452 = (state_33502[(10)]);
var inst_33452__$1 = (state_33502[(2)]);
var inst_33453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33452__$1,cljs.core.constant$keyword$113);
var inst_33454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33452__$1,cljs.core.constant$keyword$112);
var inst_33455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33452__$1,cljs.core.constant$keyword$111);
var state_33502__$1 = (function (){var statearr_33531 = state_33502;
(statearr_33531[(17)] = inst_33454);

(statearr_33531[(15)] = inst_33455);

(statearr_33531[(10)] = inst_33452__$1);

return statearr_33531;
})();
return cljs.core.async.ioc_alts_BANG_(state_33502__$1,(10),inst_33453);
} else {
if((state_val_33503 === (5))){
var inst_33444 = (state_33502[(7)]);
var inst_33447 = cljs.core.seq_QMARK_(inst_33444);
var state_33502__$1 = state_33502;
if(inst_33447){
var statearr_33532_33577 = state_33502__$1;
(statearr_33532_33577[(1)] = (7));

} else {
var statearr_33533_33578 = state_33502__$1;
(statearr_33533_33578[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (14))){
var inst_33460 = (state_33502[(16)]);
var inst_33467 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33460);
var state_33502__$1 = state_33502;
var statearr_33534_33579 = state_33502__$1;
(statearr_33534_33579[(2)] = inst_33467);

(statearr_33534_33579[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (26))){
var inst_33492 = (state_33502[(2)]);
var state_33502__$1 = state_33502;
var statearr_33535_33580 = state_33502__$1;
(statearr_33535_33580[(2)] = inst_33492);

(statearr_33535_33580[(1)] = (22));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (16))){
var inst_33470 = (state_33502[(2)]);
var inst_33471 = calc_state();
var inst_33444 = inst_33471;
var state_33502__$1 = (function (){var statearr_33536 = state_33502;
(statearr_33536[(7)] = inst_33444);

(statearr_33536[(18)] = inst_33470);

return statearr_33536;
})();
var statearr_33537_33581 = state_33502__$1;
(statearr_33537_33581[(2)] = null);

(statearr_33537_33581[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (10))){
var inst_33460 = (state_33502[(16)]);
var inst_33459 = (state_33502[(8)]);
var inst_33458 = (state_33502[(2)]);
var inst_33459__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33458,(0),null);
var inst_33460__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33458,(1),null);
var inst_33461 = (inst_33459__$1 == null);
var inst_33462 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33460__$1,change);
var inst_33463 = (inst_33461) || (inst_33462);
var state_33502__$1 = (function (){var statearr_33538 = state_33502;
(statearr_33538[(16)] = inst_33460__$1);

(statearr_33538[(8)] = inst_33459__$1);

return statearr_33538;
})();
if(cljs.core.truth_(inst_33463)){
var statearr_33539_33582 = state_33502__$1;
(statearr_33539_33582[(1)] = (11));

} else {
var statearr_33540_33583 = state_33502__$1;
(statearr_33540_33583[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (18))){
var inst_33454 = (state_33502[(17)]);
var inst_33455 = (state_33502[(15)]);
var inst_33460 = (state_33502[(16)]);
var inst_33479 = cljs.core.empty_QMARK_(inst_33455);
var inst_33480 = (function (){var G__33541 = inst_33460;
return (inst_33454.cljs$core$IFn$_invoke$arity$1 ? inst_33454.cljs$core$IFn$_invoke$arity$1(G__33541) : inst_33454.call(null,G__33541));
})();
var inst_33481 = cljs.core.not(inst_33480);
var inst_33482 = (inst_33479) && (inst_33481);
var state_33502__$1 = state_33502;
var statearr_33542_33584 = state_33502__$1;
(statearr_33542_33584[(2)] = inst_33482);

(statearr_33542_33584[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33503 === (8))){
var inst_33444 = (state_33502[(7)]);
var state_33502__$1 = state_33502;
var statearr_33543_33585 = state_33502__$1;
(statearr_33543_33585[(2)] = inst_33444);

(statearr_33543_33585[(1)] = (9));


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
});})(c__16627__auto___33555,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16547__auto__,c__16627__auto___33555,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33547[(0)] = state_machine__16548__auto__);

(statearr_33547[(1)] = (1));

return statearr_33547;
});
var state_machine__16548__auto____1 = (function (state_33502){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33502);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33548){if((e33548 instanceof Object)){
var ex__16551__auto__ = e33548;
var statearr_33549_33586 = state_33502;
(statearr_33549_33586[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33502);

return cljs.core.constant$keyword$99;
} else {
throw e33548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33587 = state_33502;
state_33502 = G__33587;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33502){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33555,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16629__auto__ = (function (){var statearr_33550 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33555);

return statearr_33550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33555,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj33589 = {};
return obj33589;
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
return (function (){var or__4251__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33593 = x__4895__auto__;
return goog.typeOf(G__33593);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33597 = x__4895__auto__;
return goog.typeOf(G__33597);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33603 = x__4895__auto__;
return goog.typeOf(G__33603);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33605 = x__4895__auto__;
return goog.typeOf(G__33605);
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
var mults = (function (){var G__33744 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33744) : cljs.core.atom.call(null,G__33744));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33746 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33746) : cljs.core.deref.call(null,G__33746));
})(),topic);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4251__auto__,mults){
return (function (p1__33606_SHARP_){
if(cljs.core.truth_((function (){var G__33747 = topic;
return (p1__33606_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33606_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33747) : p1__33606_SHARP_.call(null,G__33747));
})())){
return p1__33606_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33606_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33748 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33748) : buf_fn.call(null,G__33748));
})())));
}
});})(or__4251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33749 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33749 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33750){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33750 = meta33750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33749.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33749.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__33752 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33752) : self__.ensure_mult.call(null,G__33752));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33749.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33753 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33753) : cljs.core.deref.call(null,G__33753));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33754 = self__.mults;
var G__33755 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33754,G__33755) : cljs.core.reset_BANG_.call(null,G__33754,G__33755));
});})(mults,ensure_mult))
;

cljs.core.async.t33749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33749.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33751){
var self__ = this;
var _33751__$1 = this;
return self__.meta33750;
});})(mults,ensure_mult))
;

cljs.core.async.t33749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33751,meta33750__$1){
var self__ = this;
var _33751__$1 = this;
return (new cljs.core.async.t33749(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33750__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33749.cljs$lang$type = true;

cljs.core.async.t33749.cljs$lang$ctorStr = "cljs.core.async/t33749";

cljs.core.async.t33749.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t33749");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33749 = ((function (mults,ensure_mult){
return (function __GT_t33749(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33750){
return (new cljs.core.async.t33749(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33750));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33749(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16627__auto___33878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33878,mults,ensure_mult,p){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33878,mults,ensure_mult,p){
return (function (state_33827){
var state_val_33828 = (state_33827[(1)]);
if((state_val_33828 === (7))){
var inst_33823 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33829_33879 = state_33827__$1;
(statearr_33829_33879[(2)] = inst_33823);

(statearr_33829_33879[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (20))){
var state_33827__$1 = state_33827;
var statearr_33830_33880 = state_33827__$1;
(statearr_33830_33880[(2)] = null);

(statearr_33830_33880[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (1))){
var state_33827__$1 = state_33827;
var statearr_33831_33881 = state_33827__$1;
(statearr_33831_33881[(2)] = null);

(statearr_33831_33881[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (24))){
var inst_33806 = (state_33827[(7)]);
var inst_33815 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33806);
var state_33827__$1 = state_33827;
var statearr_33832_33882 = state_33827__$1;
(statearr_33832_33882[(2)] = inst_33815);

(statearr_33832_33882[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (4))){
var inst_33758 = (state_33827[(8)]);
var inst_33758__$1 = (state_33827[(2)]);
var inst_33759 = (inst_33758__$1 == null);
var state_33827__$1 = (function (){var statearr_33833 = state_33827;
(statearr_33833[(8)] = inst_33758__$1);

return statearr_33833;
})();
if(cljs.core.truth_(inst_33759)){
var statearr_33834_33883 = state_33827__$1;
(statearr_33834_33883[(1)] = (5));

} else {
var statearr_33835_33884 = state_33827__$1;
(statearr_33835_33884[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (15))){
var inst_33800 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33836_33885 = state_33827__$1;
(statearr_33836_33885[(2)] = inst_33800);

(statearr_33836_33885[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (21))){
var inst_33820 = (state_33827[(2)]);
var state_33827__$1 = (function (){var statearr_33837 = state_33827;
(statearr_33837[(9)] = inst_33820);

return statearr_33837;
})();
var statearr_33838_33886 = state_33827__$1;
(statearr_33838_33886[(2)] = null);

(statearr_33838_33886[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (13))){
var inst_33782 = (state_33827[(10)]);
var inst_33784 = cljs.core.chunked_seq_QMARK_(inst_33782);
var state_33827__$1 = state_33827;
if(inst_33784){
var statearr_33839_33887 = state_33827__$1;
(statearr_33839_33887[(1)] = (16));

} else {
var statearr_33840_33888 = state_33827__$1;
(statearr_33840_33888[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (22))){
var inst_33812 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33812)){
var statearr_33841_33889 = state_33827__$1;
(statearr_33841_33889[(1)] = (23));

} else {
var statearr_33842_33890 = state_33827__$1;
(statearr_33842_33890[(1)] = (24));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (6))){
var inst_33806 = (state_33827[(7)]);
var inst_33758 = (state_33827[(8)]);
var inst_33808 = (state_33827[(11)]);
var inst_33806__$1 = (function (){var G__33843 = inst_33758;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33843) : topic_fn.call(null,G__33843));
})();
var inst_33807 = (function (){var G__33844 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33844) : cljs.core.deref.call(null,G__33844));
})();
var inst_33808__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33807,inst_33806__$1);
var state_33827__$1 = (function (){var statearr_33845 = state_33827;
(statearr_33845[(7)] = inst_33806__$1);

(statearr_33845[(11)] = inst_33808__$1);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33808__$1)){
var statearr_33846_33891 = state_33827__$1;
(statearr_33846_33891[(1)] = (19));

} else {
var statearr_33847_33892 = state_33827__$1;
(statearr_33847_33892[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (25))){
var inst_33817 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33848_33893 = state_33827__$1;
(statearr_33848_33893[(2)] = inst_33817);

(statearr_33848_33893[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (17))){
var inst_33782 = (state_33827[(10)]);
var inst_33791 = cljs.core.first(inst_33782);
var inst_33792 = cljs.core.async.muxch_STAR_(inst_33791);
var inst_33793 = cljs.core.async.close_BANG_(inst_33792);
var inst_33794 = cljs.core.next(inst_33782);
var inst_33768 = inst_33794;
var inst_33769 = null;
var inst_33770 = (0);
var inst_33771 = (0);
var state_33827__$1 = (function (){var statearr_33849 = state_33827;
(statearr_33849[(12)] = inst_33770);

(statearr_33849[(13)] = inst_33769);

(statearr_33849[(14)] = inst_33793);

(statearr_33849[(15)] = inst_33768);

(statearr_33849[(16)] = inst_33771);

return statearr_33849;
})();
var statearr_33850_33894 = state_33827__$1;
(statearr_33850_33894[(2)] = null);

(statearr_33850_33894[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (3))){
var inst_33825 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33827__$1,inst_33825);
} else {
if((state_val_33828 === (12))){
var inst_33802 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33851_33895 = state_33827__$1;
(statearr_33851_33895[(2)] = inst_33802);

(statearr_33851_33895[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (2))){
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33827__$1,(4),ch);
} else {
if((state_val_33828 === (23))){
var state_33827__$1 = state_33827;
var statearr_33852_33896 = state_33827__$1;
(statearr_33852_33896[(2)] = null);

(statearr_33852_33896[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (19))){
var inst_33758 = (state_33827[(8)]);
var inst_33808 = (state_33827[(11)]);
var inst_33810 = cljs.core.async.muxch_STAR_(inst_33808);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33827__$1,(22),inst_33810,inst_33758);
} else {
if((state_val_33828 === (11))){
var inst_33782 = (state_33827[(10)]);
var inst_33768 = (state_33827[(15)]);
var inst_33782__$1 = cljs.core.seq(inst_33768);
var state_33827__$1 = (function (){var statearr_33853 = state_33827;
(statearr_33853[(10)] = inst_33782__$1);

return statearr_33853;
})();
if(inst_33782__$1){
var statearr_33854_33897 = state_33827__$1;
(statearr_33854_33897[(1)] = (13));

} else {
var statearr_33855_33898 = state_33827__$1;
(statearr_33855_33898[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (9))){
var inst_33804 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33856_33899 = state_33827__$1;
(statearr_33856_33899[(2)] = inst_33804);

(statearr_33856_33899[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (5))){
var inst_33765 = (function (){var G__33857 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33857) : cljs.core.deref.call(null,G__33857));
})();
var inst_33766 = cljs.core.vals(inst_33765);
var inst_33767 = cljs.core.seq(inst_33766);
var inst_33768 = inst_33767;
var inst_33769 = null;
var inst_33770 = (0);
var inst_33771 = (0);
var state_33827__$1 = (function (){var statearr_33858 = state_33827;
(statearr_33858[(12)] = inst_33770);

(statearr_33858[(13)] = inst_33769);

(statearr_33858[(15)] = inst_33768);

(statearr_33858[(16)] = inst_33771);

return statearr_33858;
})();
var statearr_33859_33900 = state_33827__$1;
(statearr_33859_33900[(2)] = null);

(statearr_33859_33900[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (14))){
var state_33827__$1 = state_33827;
var statearr_33863_33901 = state_33827__$1;
(statearr_33863_33901[(2)] = null);

(statearr_33863_33901[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (16))){
var inst_33782 = (state_33827[(10)]);
var inst_33786 = cljs.core.chunk_first(inst_33782);
var inst_33787 = cljs.core.chunk_rest(inst_33782);
var inst_33788 = cljs.core.count(inst_33786);
var inst_33768 = inst_33787;
var inst_33769 = inst_33786;
var inst_33770 = inst_33788;
var inst_33771 = (0);
var state_33827__$1 = (function (){var statearr_33864 = state_33827;
(statearr_33864[(12)] = inst_33770);

(statearr_33864[(13)] = inst_33769);

(statearr_33864[(15)] = inst_33768);

(statearr_33864[(16)] = inst_33771);

return statearr_33864;
})();
var statearr_33865_33902 = state_33827__$1;
(statearr_33865_33902[(2)] = null);

(statearr_33865_33902[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (10))){
var inst_33770 = (state_33827[(12)]);
var inst_33769 = (state_33827[(13)]);
var inst_33768 = (state_33827[(15)]);
var inst_33771 = (state_33827[(16)]);
var inst_33776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33769,inst_33771);
var inst_33777 = cljs.core.async.muxch_STAR_(inst_33776);
var inst_33778 = cljs.core.async.close_BANG_(inst_33777);
var inst_33779 = (inst_33771 + (1));
var tmp33860 = inst_33770;
var tmp33861 = inst_33769;
var tmp33862 = inst_33768;
var inst_33768__$1 = tmp33862;
var inst_33769__$1 = tmp33861;
var inst_33770__$1 = tmp33860;
var inst_33771__$1 = inst_33779;
var state_33827__$1 = (function (){var statearr_33866 = state_33827;
(statearr_33866[(12)] = inst_33770__$1);

(statearr_33866[(13)] = inst_33769__$1);

(statearr_33866[(17)] = inst_33778);

(statearr_33866[(15)] = inst_33768__$1);

(statearr_33866[(16)] = inst_33771__$1);

return statearr_33866;
})();
var statearr_33867_33903 = state_33827__$1;
(statearr_33867_33903[(2)] = null);

(statearr_33867_33903[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (18))){
var inst_33797 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33868_33904 = state_33827__$1;
(statearr_33868_33904[(2)] = inst_33797);

(statearr_33868_33904[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33828 === (8))){
var inst_33770 = (state_33827[(12)]);
var inst_33771 = (state_33827[(16)]);
var inst_33773 = (inst_33771 < inst_33770);
var inst_33774 = inst_33773;
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33774)){
var statearr_33869_33905 = state_33827__$1;
(statearr_33869_33905[(1)] = (10));

} else {
var statearr_33870_33906 = state_33827__$1;
(statearr_33870_33906[(1)] = (11));

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
});})(c__16627__auto___33878,mults,ensure_mult,p))
;
return ((function (switch__16547__auto__,c__16627__auto___33878,mults,ensure_mult,p){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = state_machine__16548__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var state_machine__16548__auto____1 = (function (state_33827){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33827);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object)){
var ex__16551__auto__ = e33875;
var statearr_33876_33907 = state_33827;
(statearr_33876_33907[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33827);

return cljs.core.constant$keyword$99;
} else {
throw e33875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33908 = state_33827;
state_33827 = G__33908;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33827){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33878,mults,ensure_mult,p))
})();
var state__16629__auto__ = (function (){var statearr_33877 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33878);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33878,mults,ensure_mult,p))
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
var dctr = (function (){var G__33989 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33989) : cljs.core.atom.call(null,G__33989));
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
var c__16627__auto___34062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34028){
var state_val_34029 = (state_34028[(1)]);
if((state_val_34029 === (7))){
var state_34028__$1 = state_34028;
var statearr_34030_34063 = state_34028__$1;
(statearr_34030_34063[(2)] = null);

(statearr_34030_34063[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (1))){
var state_34028__$1 = state_34028;
var statearr_34031_34064 = state_34028__$1;
(statearr_34031_34064[(2)] = null);

(statearr_34031_34064[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (4))){
var inst_33992 = (state_34028[(7)]);
var inst_33994 = (inst_33992 < cnt);
var state_34028__$1 = state_34028;
if(cljs.core.truth_(inst_33994)){
var statearr_34032_34065 = state_34028__$1;
(statearr_34032_34065[(1)] = (6));

} else {
var statearr_34033_34066 = state_34028__$1;
(statearr_34033_34066[(1)] = (7));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (15))){
var inst_34024 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
var statearr_34034_34067 = state_34028__$1;
(statearr_34034_34067[(2)] = inst_34024);

(statearr_34034_34067[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (13))){
var inst_34017 = cljs.core.async.close_BANG_(out);
var state_34028__$1 = state_34028;
var statearr_34035_34068 = state_34028__$1;
(statearr_34035_34068[(2)] = inst_34017);

(statearr_34035_34068[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (6))){
var state_34028__$1 = state_34028;
var statearr_34036_34069 = state_34028__$1;
(statearr_34036_34069[(2)] = null);

(statearr_34036_34069[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (3))){
var inst_34026 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34028__$1,inst_34026);
} else {
if((state_val_34029 === (12))){
var inst_34014 = (state_34028[(8)]);
var inst_34014__$1 = (state_34028[(2)]);
var inst_34015 = cljs.core.some(cljs.core.nil_QMARK_,inst_34014__$1);
var state_34028__$1 = (function (){var statearr_34037 = state_34028;
(statearr_34037[(8)] = inst_34014__$1);

return statearr_34037;
})();
if(cljs.core.truth_(inst_34015)){
var statearr_34038_34070 = state_34028__$1;
(statearr_34038_34070[(1)] = (13));

} else {
var statearr_34039_34071 = state_34028__$1;
(statearr_34039_34071[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (2))){
var inst_33991 = (function (){var G__34040 = dctr;
var G__34041 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34040,G__34041) : cljs.core.reset_BANG_.call(null,G__34040,G__34041));
})();
var inst_33992 = (0);
var state_34028__$1 = (function (){var statearr_34042 = state_34028;
(statearr_34042[(9)] = inst_33991);

(statearr_34042[(7)] = inst_33992);

return statearr_34042;
})();
var statearr_34043_34072 = state_34028__$1;
(statearr_34043_34072[(2)] = null);

(statearr_34043_34072[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (11))){
var inst_33992 = (state_34028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34028,(10),Object,null,(9));
var inst_34001 = (function (){var G__34044 = inst_33992;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__34044) : chs__$1.call(null,G__34044));
})();
var inst_34002 = (function (){var G__34045 = inst_33992;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__34045) : done.call(null,G__34045));
})();
var inst_34003 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34001,inst_34002);
var state_34028__$1 = state_34028;
var statearr_34046_34073 = state_34028__$1;
(statearr_34046_34073[(2)] = inst_34003);


cljs.core.async.impl.ioc_helpers.process_exception(state_34028__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (9))){
var inst_33992 = (state_34028[(7)]);
var inst_34005 = (state_34028[(2)]);
var inst_34006 = (inst_33992 + (1));
var inst_33992__$1 = inst_34006;
var state_34028__$1 = (function (){var statearr_34047 = state_34028;
(statearr_34047[(10)] = inst_34005);

(statearr_34047[(7)] = inst_33992__$1);

return statearr_34047;
})();
var statearr_34048_34074 = state_34028__$1;
(statearr_34048_34074[(2)] = null);

(statearr_34048_34074[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (5))){
var inst_34012 = (state_34028[(2)]);
var state_34028__$1 = (function (){var statearr_34049 = state_34028;
(statearr_34049[(11)] = inst_34012);

return statearr_34049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34028__$1,(12),dchan);
} else {
if((state_val_34029 === (14))){
var inst_34014 = (state_34028[(8)]);
var inst_34019 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34014);
var state_34028__$1 = state_34028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34028__$1,(16),out,inst_34019);
} else {
if((state_val_34029 === (16))){
var inst_34021 = (state_34028[(2)]);
var state_34028__$1 = (function (){var statearr_34050 = state_34028;
(statearr_34050[(12)] = inst_34021);

return statearr_34050;
})();
var statearr_34051_34075 = state_34028__$1;
(statearr_34051_34075[(2)] = null);

(statearr_34051_34075[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (10))){
var inst_33996 = (state_34028[(2)]);
var inst_33997 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34028__$1 = (function (){var statearr_34052 = state_34028;
(statearr_34052[(13)] = inst_33996);

return statearr_34052;
})();
var statearr_34053_34076 = state_34028__$1;
(statearr_34053_34076[(2)] = inst_33997);


cljs.core.async.impl.ioc_helpers.process_exception(state_34028__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_34029 === (8))){
var inst_34010 = (state_34028[(2)]);
var state_34028__$1 = state_34028;
var statearr_34054_34077 = state_34028__$1;
(statearr_34054_34077[(2)] = inst_34010);

(statearr_34054_34077[(1)] = (5));


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
});})(c__16627__auto___34062,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16547__auto__,c__16627__auto___34062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34058[(0)] = state_machine__16548__auto__);

(statearr_34058[(1)] = (1));

return statearr_34058;
});
var state_machine__16548__auto____1 = (function (state_34028){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34028);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34059){if((e34059 instanceof Object)){
var ex__16551__auto__ = e34059;
var statearr_34060_34078 = state_34028;
(statearr_34060_34078[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34028);

return cljs.core.constant$keyword$99;
} else {
throw e34059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34079 = state_34028;
state_34028 = G__34079;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34028){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34062,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16629__auto__ = (function (){var statearr_34061 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34062);

return statearr_34061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34062,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16627__auto___34189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34189,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34189,out){
return (function (state_34165){
var state_val_34166 = (state_34165[(1)]);
if((state_val_34166 === (7))){
var inst_34145 = (state_34165[(7)]);
var inst_34144 = (state_34165[(8)]);
var inst_34144__$1 = (state_34165[(2)]);
var inst_34145__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34144__$1,(0),null);
var inst_34146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34144__$1,(1),null);
var inst_34147 = (inst_34145__$1 == null);
var state_34165__$1 = (function (){var statearr_34167 = state_34165;
(statearr_34167[(7)] = inst_34145__$1);

(statearr_34167[(8)] = inst_34144__$1);

(statearr_34167[(9)] = inst_34146);

return statearr_34167;
})();
if(cljs.core.truth_(inst_34147)){
var statearr_34168_34190 = state_34165__$1;
(statearr_34168_34190[(1)] = (8));

} else {
var statearr_34169_34191 = state_34165__$1;
(statearr_34169_34191[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (1))){
var inst_34136 = cljs.core.vec(chs);
var inst_34137 = inst_34136;
var state_34165__$1 = (function (){var statearr_34170 = state_34165;
(statearr_34170[(10)] = inst_34137);

return statearr_34170;
})();
var statearr_34171_34192 = state_34165__$1;
(statearr_34171_34192[(2)] = null);

(statearr_34171_34192[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (4))){
var inst_34137 = (state_34165[(10)]);
var state_34165__$1 = state_34165;
return cljs.core.async.ioc_alts_BANG_(state_34165__$1,(7),inst_34137);
} else {
if((state_val_34166 === (6))){
var inst_34161 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34172_34193 = state_34165__$1;
(statearr_34172_34193[(2)] = inst_34161);

(statearr_34172_34193[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (3))){
var inst_34163 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34165__$1,inst_34163);
} else {
if((state_val_34166 === (2))){
var inst_34137 = (state_34165[(10)]);
var inst_34139 = cljs.core.count(inst_34137);
var inst_34140 = (inst_34139 > (0));
var state_34165__$1 = state_34165;
if(cljs.core.truth_(inst_34140)){
var statearr_34174_34194 = state_34165__$1;
(statearr_34174_34194[(1)] = (4));

} else {
var statearr_34175_34195 = state_34165__$1;
(statearr_34175_34195[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (11))){
var inst_34137 = (state_34165[(10)]);
var inst_34154 = (state_34165[(2)]);
var tmp34173 = inst_34137;
var inst_34137__$1 = tmp34173;
var state_34165__$1 = (function (){var statearr_34176 = state_34165;
(statearr_34176[(11)] = inst_34154);

(statearr_34176[(10)] = inst_34137__$1);

return statearr_34176;
})();
var statearr_34177_34196 = state_34165__$1;
(statearr_34177_34196[(2)] = null);

(statearr_34177_34196[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (9))){
var inst_34145 = (state_34165[(7)]);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34165__$1,(11),out,inst_34145);
} else {
if((state_val_34166 === (5))){
var inst_34159 = cljs.core.async.close_BANG_(out);
var state_34165__$1 = state_34165;
var statearr_34178_34197 = state_34165__$1;
(statearr_34178_34197[(2)] = inst_34159);

(statearr_34178_34197[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (10))){
var inst_34157 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34179_34198 = state_34165__$1;
(statearr_34179_34198[(2)] = inst_34157);

(statearr_34179_34198[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34166 === (8))){
var inst_34145 = (state_34165[(7)]);
var inst_34144 = (state_34165[(8)]);
var inst_34146 = (state_34165[(9)]);
var inst_34137 = (state_34165[(10)]);
var inst_34149 = (function (){var c = inst_34146;
var v = inst_34145;
var vec__34142 = inst_34144;
var cs = inst_34137;
return ((function (c,v,vec__34142,cs,inst_34145,inst_34144,inst_34146,inst_34137,state_val_34166,c__16627__auto___34189,out){
return (function (p1__34080_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34080_SHARP_);
});
;})(c,v,vec__34142,cs,inst_34145,inst_34144,inst_34146,inst_34137,state_val_34166,c__16627__auto___34189,out))
})();
var inst_34150 = cljs.core.filterv(inst_34149,inst_34137);
var inst_34137__$1 = inst_34150;
var state_34165__$1 = (function (){var statearr_34180 = state_34165;
(statearr_34180[(10)] = inst_34137__$1);

return statearr_34180;
})();
var statearr_34181_34199 = state_34165__$1;
(statearr_34181_34199[(2)] = null);

(statearr_34181_34199[(1)] = (2));


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
});})(c__16627__auto___34189,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34189,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34185[(0)] = state_machine__16548__auto__);

(statearr_34185[(1)] = (1));

return statearr_34185;
});
var state_machine__16548__auto____1 = (function (state_34165){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34165);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34186){if((e34186 instanceof Object)){
var ex__16551__auto__ = e34186;
var statearr_34187_34200 = state_34165;
(statearr_34187_34200[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34165);

return cljs.core.constant$keyword$99;
} else {
throw e34186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34201 = state_34165;
state_34165 = G__34201;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34165){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34189,out))
})();
var state__16629__auto__ = (function (){var statearr_34188 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34189);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34189,out))
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
var c__16627__auto___34297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34297,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34297,out){
return (function (state_34274){
var state_val_34275 = (state_34274[(1)]);
if((state_val_34275 === (7))){
var inst_34256 = (state_34274[(7)]);
var inst_34256__$1 = (state_34274[(2)]);
var inst_34257 = (inst_34256__$1 == null);
var inst_34258 = cljs.core.not(inst_34257);
var state_34274__$1 = (function (){var statearr_34276 = state_34274;
(statearr_34276[(7)] = inst_34256__$1);

return statearr_34276;
})();
if(inst_34258){
var statearr_34277_34298 = state_34274__$1;
(statearr_34277_34298[(1)] = (8));

} else {
var statearr_34278_34299 = state_34274__$1;
(statearr_34278_34299[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (1))){
var inst_34251 = (0);
var state_34274__$1 = (function (){var statearr_34279 = state_34274;
(statearr_34279[(8)] = inst_34251);

return statearr_34279;
})();
var statearr_34280_34300 = state_34274__$1;
(statearr_34280_34300[(2)] = null);

(statearr_34280_34300[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (4))){
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34274__$1,(7),ch);
} else {
if((state_val_34275 === (6))){
var inst_34269 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34281_34301 = state_34274__$1;
(statearr_34281_34301[(2)] = inst_34269);

(statearr_34281_34301[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (3))){
var inst_34271 = (state_34274[(2)]);
var inst_34272 = cljs.core.async.close_BANG_(out);
var state_34274__$1 = (function (){var statearr_34282 = state_34274;
(statearr_34282[(9)] = inst_34271);

return statearr_34282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34274__$1,inst_34272);
} else {
if((state_val_34275 === (2))){
var inst_34251 = (state_34274[(8)]);
var inst_34253 = (inst_34251 < n);
var state_34274__$1 = state_34274;
if(cljs.core.truth_(inst_34253)){
var statearr_34283_34302 = state_34274__$1;
(statearr_34283_34302[(1)] = (4));

} else {
var statearr_34284_34303 = state_34274__$1;
(statearr_34284_34303[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (11))){
var inst_34251 = (state_34274[(8)]);
var inst_34261 = (state_34274[(2)]);
var inst_34262 = (inst_34251 + (1));
var inst_34251__$1 = inst_34262;
var state_34274__$1 = (function (){var statearr_34285 = state_34274;
(statearr_34285[(10)] = inst_34261);

(statearr_34285[(8)] = inst_34251__$1);

return statearr_34285;
})();
var statearr_34286_34304 = state_34274__$1;
(statearr_34286_34304[(2)] = null);

(statearr_34286_34304[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (9))){
var state_34274__$1 = state_34274;
var statearr_34287_34305 = state_34274__$1;
(statearr_34287_34305[(2)] = null);

(statearr_34287_34305[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (5))){
var state_34274__$1 = state_34274;
var statearr_34288_34306 = state_34274__$1;
(statearr_34288_34306[(2)] = null);

(statearr_34288_34306[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (10))){
var inst_34266 = (state_34274[(2)]);
var state_34274__$1 = state_34274;
var statearr_34289_34307 = state_34274__$1;
(statearr_34289_34307[(2)] = inst_34266);

(statearr_34289_34307[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34275 === (8))){
var inst_34256 = (state_34274[(7)]);
var state_34274__$1 = state_34274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34274__$1,(11),out,inst_34256);
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
});})(c__16627__auto___34297,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34297,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34293[(0)] = state_machine__16548__auto__);

(statearr_34293[(1)] = (1));

return statearr_34293;
});
var state_machine__16548__auto____1 = (function (state_34274){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34274);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34294){if((e34294 instanceof Object)){
var ex__16551__auto__ = e34294;
var statearr_34295_34308 = state_34274;
(statearr_34295_34308[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34274);

return cljs.core.constant$keyword$99;
} else {
throw e34294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34309 = state_34274;
state_34274 = G__34309;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34274){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34297,out))
})();
var state__16629__auto__ = (function (){var statearr_34296 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34297);

return statearr_34296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34297,out))
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
if(typeof cljs.core.async.t34322 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34322 = (function (ch,f,map_LT_,meta34323){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34323 = meta34323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t34325 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34325 = (function (fn1,_,meta34323,map_LT_,f,ch,meta34326){
this.fn1 = fn1;
this._ = _;
this.meta34323 = meta34323;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34326 = meta34326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34325.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t34325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34310_SHARP_){
var G__34328 = (((p1__34310_SHARP_ == null))?null:(function (){var G__34329 = p1__34310_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34329) : self__.f.call(null,G__34329));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34328) : f1.call(null,G__34328));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34327){
var self__ = this;
var _34327__$1 = this;
return self__.meta34326;
});})(___$1))
;

cljs.core.async.t34325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34327,meta34326__$1){
var self__ = this;
var _34327__$1 = this;
return (new cljs.core.async.t34325(self__.fn1,self__._,self__.meta34323,self__.map_LT_,self__.f,self__.ch,meta34326__$1));
});})(___$1))
;

cljs.core.async.t34325.cljs$lang$type = true;

cljs.core.async.t34325.cljs$lang$ctorStr = "cljs.core.async/t34325";

cljs.core.async.t34325.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34325");
});})(___$1))
;

cljs.core.async.__GT_t34325 = ((function (___$1){
return (function __GT_t34325(fn1__$1,___$2,meta34323__$1,map_LT___$1,f__$1,ch__$1,meta34326){
return (new cljs.core.async.t34325(fn1__$1,___$2,meta34323__$1,map_LT___$1,f__$1,ch__$1,meta34326));
});})(___$1))
;

}

return (new cljs.core.async.t34325(fn1,___$1,self__.meta34323,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__4239__auto__ = ret;
if(cljs.core.truth_(and__4239__auto__)){
return !(((function (){var G__34330 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34330) : cljs.core.deref.call(null,G__34330));
})() == null));
} else {
return and__4239__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34331 = (function (){var G__34332 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34332) : cljs.core.deref.call(null,G__34332));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34331) : self__.f.call(null,G__34331));
})());
} else {
return ret;
}
});

cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34322.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t34322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34324){
var self__ = this;
var _34324__$1 = this;
return self__.meta34323;
});

cljs.core.async.t34322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34324,meta34323__$1){
var self__ = this;
var _34324__$1 = this;
return (new cljs.core.async.t34322(self__.ch,self__.f,self__.map_LT_,meta34323__$1));
});

cljs.core.async.t34322.cljs$lang$type = true;

cljs.core.async.t34322.cljs$lang$ctorStr = "cljs.core.async/t34322";

cljs.core.async.t34322.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34322");
});

cljs.core.async.__GT_t34322 = (function __GT_t34322(ch__$1,f__$1,map_LT___$1,meta34323){
return (new cljs.core.async.t34322(ch__$1,f__$1,map_LT___$1,meta34323));
});

}

return (new cljs.core.async.t34322(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34337 = (function (ch,f,map_GT_,meta34338){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34338 = meta34338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__34340 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34340) : self__.f.call(null,G__34340));
})(),fn1);
});

cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34339){
var self__ = this;
var _34339__$1 = this;
return self__.meta34338;
});

cljs.core.async.t34337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34339,meta34338__$1){
var self__ = this;
var _34339__$1 = this;
return (new cljs.core.async.t34337(self__.ch,self__.f,self__.map_GT_,meta34338__$1));
});

cljs.core.async.t34337.cljs$lang$type = true;

cljs.core.async.t34337.cljs$lang$ctorStr = "cljs.core.async/t34337";

cljs.core.async.t34337.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34337");
});

cljs.core.async.__GT_t34337 = (function __GT_t34337(ch__$1,f__$1,map_GT___$1,meta34338){
return (new cljs.core.async.t34337(ch__$1,f__$1,map_GT___$1,meta34338));
});

}

return (new cljs.core.async.t34337(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34345 = (function (ch,p,filter_GT_,meta34346){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34346 = meta34346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__34348 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__34348) : self__.p.call(null,G__34348));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
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

cljs.core.async.t34345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t34345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34347){
var self__ = this;
var _34347__$1 = this;
return self__.meta34346;
});

cljs.core.async.t34345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34347,meta34346__$1){
var self__ = this;
var _34347__$1 = this;
return (new cljs.core.async.t34345(self__.ch,self__.p,self__.filter_GT_,meta34346__$1));
});

cljs.core.async.t34345.cljs$lang$type = true;

cljs.core.async.t34345.cljs$lang$ctorStr = "cljs.core.async/t34345";

cljs.core.async.t34345.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34345");
});

cljs.core.async.__GT_t34345 = (function __GT_t34345(ch__$1,p__$1,filter_GT___$1,meta34346){
return (new cljs.core.async.t34345(ch__$1,p__$1,filter_GT___$1,meta34346));
});

}

return (new cljs.core.async.t34345(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16627__auto___34436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34436,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34436,out){
return (function (state_34414){
var state_val_34415 = (state_34414[(1)]);
if((state_val_34415 === (7))){
var inst_34410 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34416_34437 = state_34414__$1;
(statearr_34416_34437[(2)] = inst_34410);

(statearr_34416_34437[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (1))){
var state_34414__$1 = state_34414;
var statearr_34417_34438 = state_34414__$1;
(statearr_34417_34438[(2)] = null);

(statearr_34417_34438[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (4))){
var inst_34396 = (state_34414[(7)]);
var inst_34396__$1 = (state_34414[(2)]);
var inst_34397 = (inst_34396__$1 == null);
var state_34414__$1 = (function (){var statearr_34418 = state_34414;
(statearr_34418[(7)] = inst_34396__$1);

return statearr_34418;
})();
if(cljs.core.truth_(inst_34397)){
var statearr_34419_34439 = state_34414__$1;
(statearr_34419_34439[(1)] = (5));

} else {
var statearr_34420_34440 = state_34414__$1;
(statearr_34420_34440[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (6))){
var inst_34396 = (state_34414[(7)]);
var inst_34401 = (function (){var G__34421 = inst_34396;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__34421) : p.call(null,G__34421));
})();
var state_34414__$1 = state_34414;
if(cljs.core.truth_(inst_34401)){
var statearr_34422_34441 = state_34414__$1;
(statearr_34422_34441[(1)] = (8));

} else {
var statearr_34423_34442 = state_34414__$1;
(statearr_34423_34442[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (3))){
var inst_34412 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34414__$1,inst_34412);
} else {
if((state_val_34415 === (2))){
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34414__$1,(4),ch);
} else {
if((state_val_34415 === (11))){
var inst_34404 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34424_34443 = state_34414__$1;
(statearr_34424_34443[(2)] = inst_34404);

(statearr_34424_34443[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (9))){
var state_34414__$1 = state_34414;
var statearr_34425_34444 = state_34414__$1;
(statearr_34425_34444[(2)] = null);

(statearr_34425_34444[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (5))){
var inst_34399 = cljs.core.async.close_BANG_(out);
var state_34414__$1 = state_34414;
var statearr_34426_34445 = state_34414__$1;
(statearr_34426_34445[(2)] = inst_34399);

(statearr_34426_34445[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (10))){
var inst_34407 = (state_34414[(2)]);
var state_34414__$1 = (function (){var statearr_34427 = state_34414;
(statearr_34427[(8)] = inst_34407);

return statearr_34427;
})();
var statearr_34428_34446 = state_34414__$1;
(statearr_34428_34446[(2)] = null);

(statearr_34428_34446[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34415 === (8))){
var inst_34396 = (state_34414[(7)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34414__$1,(11),out,inst_34396);
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
});})(c__16627__auto___34436,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34436,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34432 = [null,null,null,null,null,null,null,null,null];
(statearr_34432[(0)] = state_machine__16548__auto__);

(statearr_34432[(1)] = (1));

return statearr_34432;
});
var state_machine__16548__auto____1 = (function (state_34414){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34414);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34433){if((e34433 instanceof Object)){
var ex__16551__auto__ = e34433;
var statearr_34434_34447 = state_34414;
(statearr_34434_34447[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34414);

return cljs.core.constant$keyword$99;
} else {
throw e34433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34448 = state_34414;
state_34414 = G__34448;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34436,out))
})();
var state__16629__auto__ = (function (){var statearr_34435 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34436);

return statearr_34435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34436,out))
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
return (function (state_34618){
var state_val_34619 = (state_34618[(1)]);
if((state_val_34619 === (7))){
var inst_34614 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34620_34662 = state_34618__$1;
(statearr_34620_34662[(2)] = inst_34614);

(statearr_34620_34662[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (20))){
var inst_34584 = (state_34618[(7)]);
var inst_34595 = (state_34618[(2)]);
var inst_34596 = cljs.core.next(inst_34584);
var inst_34570 = inst_34596;
var inst_34571 = null;
var inst_34572 = (0);
var inst_34573 = (0);
var state_34618__$1 = (function (){var statearr_34621 = state_34618;
(statearr_34621[(8)] = inst_34571);

(statearr_34621[(9)] = inst_34595);

(statearr_34621[(10)] = inst_34570);

(statearr_34621[(11)] = inst_34572);

(statearr_34621[(12)] = inst_34573);

return statearr_34621;
})();
var statearr_34622_34663 = state_34618__$1;
(statearr_34622_34663[(2)] = null);

(statearr_34622_34663[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (1))){
var state_34618__$1 = state_34618;
var statearr_34623_34664 = state_34618__$1;
(statearr_34623_34664[(2)] = null);

(statearr_34623_34664[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (4))){
var inst_34559 = (state_34618[(13)]);
var inst_34559__$1 = (state_34618[(2)]);
var inst_34560 = (inst_34559__$1 == null);
var state_34618__$1 = (function (){var statearr_34624 = state_34618;
(statearr_34624[(13)] = inst_34559__$1);

return statearr_34624;
})();
if(cljs.core.truth_(inst_34560)){
var statearr_34625_34665 = state_34618__$1;
(statearr_34625_34665[(1)] = (5));

} else {
var statearr_34626_34666 = state_34618__$1;
(statearr_34626_34666[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (15))){
var state_34618__$1 = state_34618;
var statearr_34630_34667 = state_34618__$1;
(statearr_34630_34667[(2)] = null);

(statearr_34630_34667[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (21))){
var state_34618__$1 = state_34618;
var statearr_34631_34668 = state_34618__$1;
(statearr_34631_34668[(2)] = null);

(statearr_34631_34668[(1)] = (23));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (13))){
var inst_34571 = (state_34618[(8)]);
var inst_34570 = (state_34618[(10)]);
var inst_34572 = (state_34618[(11)]);
var inst_34573 = (state_34618[(12)]);
var inst_34580 = (state_34618[(2)]);
var inst_34581 = (inst_34573 + (1));
var tmp34627 = inst_34571;
var tmp34628 = inst_34570;
var tmp34629 = inst_34572;
var inst_34570__$1 = tmp34628;
var inst_34571__$1 = tmp34627;
var inst_34572__$1 = tmp34629;
var inst_34573__$1 = inst_34581;
var state_34618__$1 = (function (){var statearr_34632 = state_34618;
(statearr_34632[(8)] = inst_34571__$1);

(statearr_34632[(10)] = inst_34570__$1);

(statearr_34632[(11)] = inst_34572__$1);

(statearr_34632[(14)] = inst_34580);

(statearr_34632[(12)] = inst_34573__$1);

return statearr_34632;
})();
var statearr_34633_34669 = state_34618__$1;
(statearr_34633_34669[(2)] = null);

(statearr_34633_34669[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (22))){
var state_34618__$1 = state_34618;
var statearr_34634_34670 = state_34618__$1;
(statearr_34634_34670[(2)] = null);

(statearr_34634_34670[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (6))){
var inst_34559 = (state_34618[(13)]);
var inst_34568 = (function (){var G__34635 = inst_34559;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34635) : f.call(null,G__34635));
})();
var inst_34569 = cljs.core.seq(inst_34568);
var inst_34570 = inst_34569;
var inst_34571 = null;
var inst_34572 = (0);
var inst_34573 = (0);
var state_34618__$1 = (function (){var statearr_34636 = state_34618;
(statearr_34636[(8)] = inst_34571);

(statearr_34636[(10)] = inst_34570);

(statearr_34636[(11)] = inst_34572);

(statearr_34636[(12)] = inst_34573);

return statearr_34636;
})();
var statearr_34637_34671 = state_34618__$1;
(statearr_34637_34671[(2)] = null);

(statearr_34637_34671[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (17))){
var inst_34584 = (state_34618[(7)]);
var inst_34588 = cljs.core.chunk_first(inst_34584);
var inst_34589 = cljs.core.chunk_rest(inst_34584);
var inst_34590 = cljs.core.count(inst_34588);
var inst_34570 = inst_34589;
var inst_34571 = inst_34588;
var inst_34572 = inst_34590;
var inst_34573 = (0);
var state_34618__$1 = (function (){var statearr_34638 = state_34618;
(statearr_34638[(8)] = inst_34571);

(statearr_34638[(10)] = inst_34570);

(statearr_34638[(11)] = inst_34572);

(statearr_34638[(12)] = inst_34573);

return statearr_34638;
})();
var statearr_34639_34672 = state_34618__$1;
(statearr_34639_34672[(2)] = null);

(statearr_34639_34672[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (3))){
var inst_34616 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34618__$1,inst_34616);
} else {
if((state_val_34619 === (12))){
var inst_34604 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34640_34673 = state_34618__$1;
(statearr_34640_34673[(2)] = inst_34604);

(statearr_34640_34673[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (2))){
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34618__$1,(4),in$);
} else {
if((state_val_34619 === (23))){
var inst_34612 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34641_34674 = state_34618__$1;
(statearr_34641_34674[(2)] = inst_34612);

(statearr_34641_34674[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (19))){
var inst_34599 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34642_34675 = state_34618__$1;
(statearr_34642_34675[(2)] = inst_34599);

(statearr_34642_34675[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (11))){
var inst_34584 = (state_34618[(7)]);
var inst_34570 = (state_34618[(10)]);
var inst_34584__$1 = cljs.core.seq(inst_34570);
var state_34618__$1 = (function (){var statearr_34643 = state_34618;
(statearr_34643[(7)] = inst_34584__$1);

return statearr_34643;
})();
if(inst_34584__$1){
var statearr_34644_34676 = state_34618__$1;
(statearr_34644_34676[(1)] = (14));

} else {
var statearr_34645_34677 = state_34618__$1;
(statearr_34645_34677[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (9))){
var inst_34606 = (state_34618[(2)]);
var inst_34607 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34618__$1 = (function (){var statearr_34646 = state_34618;
(statearr_34646[(15)] = inst_34606);

return statearr_34646;
})();
if(cljs.core.truth_(inst_34607)){
var statearr_34647_34678 = state_34618__$1;
(statearr_34647_34678[(1)] = (21));

} else {
var statearr_34648_34679 = state_34618__$1;
(statearr_34648_34679[(1)] = (22));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (5))){
var inst_34562 = cljs.core.async.close_BANG_(out);
var state_34618__$1 = state_34618;
var statearr_34649_34680 = state_34618__$1;
(statearr_34649_34680[(2)] = inst_34562);

(statearr_34649_34680[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (14))){
var inst_34584 = (state_34618[(7)]);
var inst_34586 = cljs.core.chunked_seq_QMARK_(inst_34584);
var state_34618__$1 = state_34618;
if(inst_34586){
var statearr_34650_34681 = state_34618__$1;
(statearr_34650_34681[(1)] = (17));

} else {
var statearr_34651_34682 = state_34618__$1;
(statearr_34651_34682[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (16))){
var inst_34602 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34652_34683 = state_34618__$1;
(statearr_34652_34683[(2)] = inst_34602);

(statearr_34652_34683[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34619 === (10))){
var inst_34571 = (state_34618[(8)]);
var inst_34573 = (state_34618[(12)]);
var inst_34578 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34571,inst_34573);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34618__$1,(13),out,inst_34578);
} else {
if((state_val_34619 === (18))){
var inst_34584 = (state_34618[(7)]);
var inst_34593 = cljs.core.first(inst_34584);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34618__$1,(20),out,inst_34593);
} else {
if((state_val_34619 === (8))){
var inst_34572 = (state_34618[(11)]);
var inst_34573 = (state_34618[(12)]);
var inst_34575 = (inst_34573 < inst_34572);
var inst_34576 = inst_34575;
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34576)){
var statearr_34653_34684 = state_34618__$1;
(statearr_34653_34684[(1)] = (10));

} else {
var statearr_34654_34685 = state_34618__$1;
(statearr_34654_34685[(1)] = (11));

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
var statearr_34658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34658[(0)] = state_machine__16548__auto__);

(statearr_34658[(1)] = (1));

return statearr_34658;
});
var state_machine__16548__auto____1 = (function (state_34618){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34618);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34659){if((e34659 instanceof Object)){
var ex__16551__auto__ = e34659;
var statearr_34660_34686 = state_34618;
(statearr_34660_34686[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34618);

return cljs.core.constant$keyword$99;
} else {
throw e34659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34687 = state_34618;
state_34618 = G__34687;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34618){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_34661 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_34661;
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
var c__16627__auto___34792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34792,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34792,out){
return (function (state_34767){
var state_val_34768 = (state_34767[(1)]);
if((state_val_34768 === (7))){
var inst_34762 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34769_34793 = state_34767__$1;
(statearr_34769_34793[(2)] = inst_34762);

(statearr_34769_34793[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (1))){
var inst_34744 = null;
var state_34767__$1 = (function (){var statearr_34770 = state_34767;
(statearr_34770[(7)] = inst_34744);

return statearr_34770;
})();
var statearr_34771_34794 = state_34767__$1;
(statearr_34771_34794[(2)] = null);

(statearr_34771_34794[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (4))){
var inst_34747 = (state_34767[(8)]);
var inst_34747__$1 = (state_34767[(2)]);
var inst_34748 = (inst_34747__$1 == null);
var inst_34749 = cljs.core.not(inst_34748);
var state_34767__$1 = (function (){var statearr_34772 = state_34767;
(statearr_34772[(8)] = inst_34747__$1);

return statearr_34772;
})();
if(inst_34749){
var statearr_34773_34795 = state_34767__$1;
(statearr_34773_34795[(1)] = (5));

} else {
var statearr_34774_34796 = state_34767__$1;
(statearr_34774_34796[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (6))){
var state_34767__$1 = state_34767;
var statearr_34775_34797 = state_34767__$1;
(statearr_34775_34797[(2)] = null);

(statearr_34775_34797[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (3))){
var inst_34764 = (state_34767[(2)]);
var inst_34765 = cljs.core.async.close_BANG_(out);
var state_34767__$1 = (function (){var statearr_34776 = state_34767;
(statearr_34776[(9)] = inst_34764);

return statearr_34776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34767__$1,inst_34765);
} else {
if((state_val_34768 === (2))){
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34767__$1,(4),ch);
} else {
if((state_val_34768 === (11))){
var inst_34747 = (state_34767[(8)]);
var inst_34756 = (state_34767[(2)]);
var inst_34744 = inst_34747;
var state_34767__$1 = (function (){var statearr_34777 = state_34767;
(statearr_34777[(10)] = inst_34756);

(statearr_34777[(7)] = inst_34744);

return statearr_34777;
})();
var statearr_34778_34798 = state_34767__$1;
(statearr_34778_34798[(2)] = null);

(statearr_34778_34798[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (9))){
var inst_34747 = (state_34767[(8)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34767__$1,(11),out,inst_34747);
} else {
if((state_val_34768 === (5))){
var inst_34747 = (state_34767[(8)]);
var inst_34744 = (state_34767[(7)]);
var inst_34751 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34747,inst_34744);
var state_34767__$1 = state_34767;
if(inst_34751){
var statearr_34780_34799 = state_34767__$1;
(statearr_34780_34799[(1)] = (8));

} else {
var statearr_34781_34800 = state_34767__$1;
(statearr_34781_34800[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (10))){
var inst_34759 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34782_34801 = state_34767__$1;
(statearr_34782_34801[(2)] = inst_34759);

(statearr_34782_34801[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34768 === (8))){
var inst_34744 = (state_34767[(7)]);
var tmp34779 = inst_34744;
var inst_34744__$1 = tmp34779;
var state_34767__$1 = (function (){var statearr_34783 = state_34767;
(statearr_34783[(7)] = inst_34744__$1);

return statearr_34783;
})();
var statearr_34784_34802 = state_34767__$1;
(statearr_34784_34802[(2)] = null);

(statearr_34784_34802[(1)] = (2));


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
});})(c__16627__auto___34792,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34792,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34788[(0)] = state_machine__16548__auto__);

(statearr_34788[(1)] = (1));

return statearr_34788;
});
var state_machine__16548__auto____1 = (function (state_34767){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34767);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34789){if((e34789 instanceof Object)){
var ex__16551__auto__ = e34789;
var statearr_34790_34803 = state_34767;
(statearr_34790_34803[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34767);

return cljs.core.constant$keyword$99;
} else {
throw e34789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34804 = state_34767;
state_34767 = G__34804;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34767){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34792,out))
})();
var state__16629__auto__ = (function (){var statearr_34791 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34792);

return statearr_34791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34792,out))
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
var c__16627__auto___34942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34942,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34942,out){
return (function (state_34912){
var state_val_34913 = (state_34912[(1)]);
if((state_val_34913 === (7))){
var inst_34908 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
var statearr_34914_34943 = state_34912__$1;
(statearr_34914_34943[(2)] = inst_34908);

(statearr_34914_34943[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (1))){
var inst_34875 = (new Array(n));
var inst_34876 = inst_34875;
var inst_34877 = (0);
var state_34912__$1 = (function (){var statearr_34915 = state_34912;
(statearr_34915[(7)] = inst_34876);

(statearr_34915[(8)] = inst_34877);

return statearr_34915;
})();
var statearr_34916_34944 = state_34912__$1;
(statearr_34916_34944[(2)] = null);

(statearr_34916_34944[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (4))){
var inst_34880 = (state_34912[(9)]);
var inst_34880__$1 = (state_34912[(2)]);
var inst_34881 = (inst_34880__$1 == null);
var inst_34882 = cljs.core.not(inst_34881);
var state_34912__$1 = (function (){var statearr_34917 = state_34912;
(statearr_34917[(9)] = inst_34880__$1);

return statearr_34917;
})();
if(inst_34882){
var statearr_34918_34945 = state_34912__$1;
(statearr_34918_34945[(1)] = (5));

} else {
var statearr_34919_34946 = state_34912__$1;
(statearr_34919_34946[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (15))){
var inst_34902 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
var statearr_34920_34947 = state_34912__$1;
(statearr_34920_34947[(2)] = inst_34902);

(statearr_34920_34947[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (13))){
var state_34912__$1 = state_34912;
var statearr_34921_34948 = state_34912__$1;
(statearr_34921_34948[(2)] = null);

(statearr_34921_34948[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (6))){
var inst_34877 = (state_34912[(8)]);
var inst_34898 = (inst_34877 > (0));
var state_34912__$1 = state_34912;
if(cljs.core.truth_(inst_34898)){
var statearr_34922_34949 = state_34912__$1;
(statearr_34922_34949[(1)] = (12));

} else {
var statearr_34923_34950 = state_34912__$1;
(statearr_34923_34950[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (3))){
var inst_34910 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34912__$1,inst_34910);
} else {
if((state_val_34913 === (12))){
var inst_34876 = (state_34912[(7)]);
var inst_34900 = cljs.core.vec(inst_34876);
var state_34912__$1 = state_34912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34912__$1,(15),out,inst_34900);
} else {
if((state_val_34913 === (2))){
var state_34912__$1 = state_34912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34912__$1,(4),ch);
} else {
if((state_val_34913 === (11))){
var inst_34892 = (state_34912[(2)]);
var inst_34893 = (new Array(n));
var inst_34876 = inst_34893;
var inst_34877 = (0);
var state_34912__$1 = (function (){var statearr_34924 = state_34912;
(statearr_34924[(10)] = inst_34892);

(statearr_34924[(7)] = inst_34876);

(statearr_34924[(8)] = inst_34877);

return statearr_34924;
})();
var statearr_34925_34951 = state_34912__$1;
(statearr_34925_34951[(2)] = null);

(statearr_34925_34951[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (9))){
var inst_34876 = (state_34912[(7)]);
var inst_34890 = cljs.core.vec(inst_34876);
var state_34912__$1 = state_34912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34912__$1,(11),out,inst_34890);
} else {
if((state_val_34913 === (5))){
var inst_34885 = (state_34912[(11)]);
var inst_34876 = (state_34912[(7)]);
var inst_34877 = (state_34912[(8)]);
var inst_34880 = (state_34912[(9)]);
var inst_34884 = (inst_34876[inst_34877] = inst_34880);
var inst_34885__$1 = (inst_34877 + (1));
var inst_34886 = (inst_34885__$1 < n);
var state_34912__$1 = (function (){var statearr_34926 = state_34912;
(statearr_34926[(11)] = inst_34885__$1);

(statearr_34926[(12)] = inst_34884);

return statearr_34926;
})();
if(cljs.core.truth_(inst_34886)){
var statearr_34927_34952 = state_34912__$1;
(statearr_34927_34952[(1)] = (8));

} else {
var statearr_34928_34953 = state_34912__$1;
(statearr_34928_34953[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (14))){
var inst_34905 = (state_34912[(2)]);
var inst_34906 = cljs.core.async.close_BANG_(out);
var state_34912__$1 = (function (){var statearr_34930 = state_34912;
(statearr_34930[(13)] = inst_34905);

return statearr_34930;
})();
var statearr_34931_34954 = state_34912__$1;
(statearr_34931_34954[(2)] = inst_34906);

(statearr_34931_34954[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (10))){
var inst_34896 = (state_34912[(2)]);
var state_34912__$1 = state_34912;
var statearr_34932_34955 = state_34912__$1;
(statearr_34932_34955[(2)] = inst_34896);

(statearr_34932_34955[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34913 === (8))){
var inst_34885 = (state_34912[(11)]);
var inst_34876 = (state_34912[(7)]);
var tmp34929 = inst_34876;
var inst_34876__$1 = tmp34929;
var inst_34877 = inst_34885;
var state_34912__$1 = (function (){var statearr_34933 = state_34912;
(statearr_34933[(7)] = inst_34876__$1);

(statearr_34933[(8)] = inst_34877);

return statearr_34933;
})();
var statearr_34934_34956 = state_34912__$1;
(statearr_34934_34956[(2)] = null);

(statearr_34934_34956[(1)] = (2));


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
});})(c__16627__auto___34942,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34942,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34938[(0)] = state_machine__16548__auto__);

(statearr_34938[(1)] = (1));

return statearr_34938;
});
var state_machine__16548__auto____1 = (function (state_34912){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34912);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34939){if((e34939 instanceof Object)){
var ex__16551__auto__ = e34939;
var statearr_34940_34957 = state_34912;
(statearr_34940_34957[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34912);

return cljs.core.constant$keyword$99;
} else {
throw e34939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34958 = state_34912;
state_34912 = G__34958;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34912){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34942,out))
})();
var state__16629__auto__ = (function (){var statearr_34941 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34942);

return statearr_34941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34942,out))
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
var c__16627__auto___35106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___35106,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___35106,out){
return (function (state_35075){
var state_val_35076 = (state_35075[(1)]);
if((state_val_35076 === (7))){
var inst_35071 = (state_35075[(2)]);
var state_35075__$1 = state_35075;
var statearr_35077_35107 = state_35075__$1;
(statearr_35077_35107[(2)] = inst_35071);

(statearr_35077_35107[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (1))){
var inst_35034 = [];
var inst_35035 = inst_35034;
var inst_35036 = cljs.core.constant$keyword$114;
var state_35075__$1 = (function (){var statearr_35078 = state_35075;
(statearr_35078[(7)] = inst_35035);

(statearr_35078[(8)] = inst_35036);

return statearr_35078;
})();
var statearr_35079_35108 = state_35075__$1;
(statearr_35079_35108[(2)] = null);

(statearr_35079_35108[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (4))){
var inst_35039 = (state_35075[(9)]);
var inst_35039__$1 = (state_35075[(2)]);
var inst_35040 = (inst_35039__$1 == null);
var inst_35041 = cljs.core.not(inst_35040);
var state_35075__$1 = (function (){var statearr_35080 = state_35075;
(statearr_35080[(9)] = inst_35039__$1);

return statearr_35080;
})();
if(inst_35041){
var statearr_35081_35109 = state_35075__$1;
(statearr_35081_35109[(1)] = (5));

} else {
var statearr_35082_35110 = state_35075__$1;
(statearr_35082_35110[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (15))){
var inst_35065 = (state_35075[(2)]);
var state_35075__$1 = state_35075;
var statearr_35083_35111 = state_35075__$1;
(statearr_35083_35111[(2)] = inst_35065);

(statearr_35083_35111[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (13))){
var state_35075__$1 = state_35075;
var statearr_35084_35112 = state_35075__$1;
(statearr_35084_35112[(2)] = null);

(statearr_35084_35112[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (6))){
var inst_35035 = (state_35075[(7)]);
var inst_35060 = inst_35035.length;
var inst_35061 = (inst_35060 > (0));
var state_35075__$1 = state_35075;
if(cljs.core.truth_(inst_35061)){
var statearr_35085_35113 = state_35075__$1;
(statearr_35085_35113[(1)] = (12));

} else {
var statearr_35086_35114 = state_35075__$1;
(statearr_35086_35114[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (3))){
var inst_35073 = (state_35075[(2)]);
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35075__$1,inst_35073);
} else {
if((state_val_35076 === (12))){
var inst_35035 = (state_35075[(7)]);
var inst_35063 = cljs.core.vec(inst_35035);
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35075__$1,(15),out,inst_35063);
} else {
if((state_val_35076 === (2))){
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35075__$1,(4),ch);
} else {
if((state_val_35076 === (11))){
var inst_35039 = (state_35075[(9)]);
var inst_35043 = (state_35075[(10)]);
var inst_35053 = (state_35075[(2)]);
var inst_35054 = [];
var inst_35055 = inst_35054.push(inst_35039);
var inst_35035 = inst_35054;
var inst_35036 = inst_35043;
var state_35075__$1 = (function (){var statearr_35087 = state_35075;
(statearr_35087[(7)] = inst_35035);

(statearr_35087[(11)] = inst_35055);

(statearr_35087[(12)] = inst_35053);

(statearr_35087[(8)] = inst_35036);

return statearr_35087;
})();
var statearr_35088_35115 = state_35075__$1;
(statearr_35088_35115[(2)] = null);

(statearr_35088_35115[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (9))){
var inst_35035 = (state_35075[(7)]);
var inst_35051 = cljs.core.vec(inst_35035);
var state_35075__$1 = state_35075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35075__$1,(11),out,inst_35051);
} else {
if((state_val_35076 === (5))){
var inst_35039 = (state_35075[(9)]);
var inst_35043 = (state_35075[(10)]);
var inst_35036 = (state_35075[(8)]);
var inst_35043__$1 = (function (){var G__35089 = inst_35039;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35089) : f.call(null,G__35089));
})();
var inst_35044 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35043__$1,inst_35036);
var inst_35045 = cljs.core.keyword_identical_QMARK_(inst_35036,cljs.core.constant$keyword$114);
var inst_35046 = (inst_35044) || (inst_35045);
var state_35075__$1 = (function (){var statearr_35090 = state_35075;
(statearr_35090[(10)] = inst_35043__$1);

return statearr_35090;
})();
if(cljs.core.truth_(inst_35046)){
var statearr_35091_35116 = state_35075__$1;
(statearr_35091_35116[(1)] = (8));

} else {
var statearr_35092_35117 = state_35075__$1;
(statearr_35092_35117[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (14))){
var inst_35068 = (state_35075[(2)]);
var inst_35069 = cljs.core.async.close_BANG_(out);
var state_35075__$1 = (function (){var statearr_35094 = state_35075;
(statearr_35094[(13)] = inst_35068);

return statearr_35094;
})();
var statearr_35095_35118 = state_35075__$1;
(statearr_35095_35118[(2)] = inst_35069);

(statearr_35095_35118[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (10))){
var inst_35058 = (state_35075[(2)]);
var state_35075__$1 = state_35075;
var statearr_35096_35119 = state_35075__$1;
(statearr_35096_35119[(2)] = inst_35058);

(statearr_35096_35119[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35076 === (8))){
var inst_35039 = (state_35075[(9)]);
var inst_35035 = (state_35075[(7)]);
var inst_35043 = (state_35075[(10)]);
var inst_35048 = inst_35035.push(inst_35039);
var tmp35093 = inst_35035;
var inst_35035__$1 = tmp35093;
var inst_35036 = inst_35043;
var state_35075__$1 = (function (){var statearr_35097 = state_35075;
(statearr_35097[(7)] = inst_35035__$1);

(statearr_35097[(8)] = inst_35036);

(statearr_35097[(14)] = inst_35048);

return statearr_35097;
})();
var statearr_35098_35120 = state_35075__$1;
(statearr_35098_35120[(2)] = null);

(statearr_35098_35120[(1)] = (2));


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
});})(c__16627__auto___35106,out))
;
return ((function (switch__16547__auto__,c__16627__auto___35106,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_35102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35102[(0)] = state_machine__16548__auto__);

(statearr_35102[(1)] = (1));

return statearr_35102;
});
var state_machine__16548__auto____1 = (function (state_35075){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_35075);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e35103){if((e35103 instanceof Object)){
var ex__16551__auto__ = e35103;
var statearr_35104_35121 = state_35075;
(statearr_35104_35121[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35075);

return cljs.core.constant$keyword$99;
} else {
throw e35103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__35122 = state_35075;
state_35075 = G__35122;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_35075){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_35075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___35106,out))
})();
var state__16629__auto__ = (function (){var statearr_35105 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_35105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___35106);

return statearr_35105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___35106,out))
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
