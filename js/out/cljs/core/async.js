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
if(typeof cljs.core.async.t31700 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31700 = (function (f,fn_handler,meta31701){
this.f = f;
this.fn_handler = fn_handler;
this.meta31701 = meta31701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31700.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31702){
var self__ = this;
var _31702__$1 = this;
return self__.meta31701;
});

cljs.core.async.t31700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31702,meta31701__$1){
var self__ = this;
var _31702__$1 = this;
return (new cljs.core.async.t31700(self__.f,self__.fn_handler,meta31701__$1));
});

cljs.core.async.t31700.cljs$lang$type = true;

cljs.core.async.t31700.cljs$lang$ctorStr = "cljs.core.async/t31700";

cljs.core.async.t31700.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31700");
});

cljs.core.async.__GT_t31700 = (function __GT_t31700(f__$1,fn_handler__$1,meta31701){
return (new cljs.core.async.t31700(f__$1,fn_handler__$1,meta31701));
});

}

return (new cljs.core.async.t31700(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,20,cljs.core.constant$keyword$9,16,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,13,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var G__31704 = buff;
if(G__31704){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__31704.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31704.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31704);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__31704);
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
var val_31721 = (function (){var G__31718 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31718) : cljs.core.deref.call(null,G__31718));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31719_31722 = val_31721;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31719_31722) : fn1.call(null,G__31719_31722));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31721,ret){
return (function (){
var G__31720 = val_31721;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31720) : fn1.call(null,G__31720));
});})(val_31721,ret))
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
var G__31731 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31731) : cljs.core.deref.call(null,G__31731));
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
var ret = (function (){var G__31732 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31732) : cljs.core.deref.call(null,G__31732));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__31733_31735 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31733_31735) : fn1.call(null,G__31733_31735));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__31734 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__31734) : fn1.call(null,G__31734));
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
var n__5138__auto___31736 = n;
var x_31737 = (0);
while(true){
if((x_31737 < n__5138__auto___31736)){
(a[x_31737] = (0));

var G__31738 = (x_31737 + (1));
x_31737 = G__31738;
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

var G__31739 = (i + (1));
i = G__31739;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__31747 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__31747) : cljs.core.atom.call(null,G__31747));
})();
if(typeof cljs.core.async.t31748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31748 = (function (flag,alt_flag,meta31749){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31749 = meta31749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31751 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31751) : cljs.core.deref.call(null,G__31751));
});})(flag))
;

cljs.core.async.t31748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__31752_31754 = self__.flag;
var G__31753_31755 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__31752_31754,G__31753_31755) : cljs.core.reset_BANG_.call(null,G__31752_31754,G__31753_31755));

return true;
});})(flag))
;

cljs.core.async.t31748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31750){
var self__ = this;
var _31750__$1 = this;
return self__.meta31749;
});})(flag))
;

cljs.core.async.t31748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31750,meta31749__$1){
var self__ = this;
var _31750__$1 = this;
return (new cljs.core.async.t31748(self__.flag,self__.alt_flag,meta31749__$1));
});})(flag))
;

cljs.core.async.t31748.cljs$lang$type = true;

cljs.core.async.t31748.cljs$lang$ctorStr = "cljs.core.async/t31748";

cljs.core.async.t31748.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31748");
});})(flag))
;

cljs.core.async.__GT_t31748 = ((function (flag){
return (function __GT_t31748(flag__$1,alt_flag__$1,meta31749){
return (new cljs.core.async.t31748(flag__$1,alt_flag__$1,meta31749));
});})(flag))
;

}

return (new cljs.core.async.t31748(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,15,cljs.core.constant$keyword$9,146,cljs.core.constant$keyword$10,5,cljs.core.constant$keyword$11,141,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31759 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31759 = (function (cb,flag,alt_handler,meta31760){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31760 = meta31760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31759.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31761){
var self__ = this;
var _31761__$1 = this;
return self__.meta31760;
});

cljs.core.async.t31759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31761,meta31760__$1){
var self__ = this;
var _31761__$1 = this;
return (new cljs.core.async.t31759(self__.cb,self__.flag,self__.alt_handler,meta31760__$1));
});

cljs.core.async.t31759.cljs$lang$type = true;

cljs.core.async.t31759.cljs$lang$ctorStr = "cljs.core.async/t31759";

cljs.core.async.t31759.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t31759");
});

cljs.core.async.__GT_t31759 = (function __GT_t31759(cb__$1,flag__$1,alt_handler__$1,meta31760){
return (new cljs.core.async.t31759(cb__$1,flag__$1,alt_handler__$1,meta31760));
});

}

return (new cljs.core.async.t31759(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,11,cljs.core.constant$keyword$9,154,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,149,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__31769 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31769) : port.call(null,G__31769));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__31770 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__31770) : port.call(null,G__31770));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31762_SHARP_){
var G__31771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31762_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31771) : fret.call(null,G__31771));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31763_SHARP_){
var G__31772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31763_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31772) : fret.call(null,G__31772));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31773 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__31773) : cljs.core.deref.call(null,G__31773));
})(),(function (){var or__4251__auto__ = wport;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31774 = (i + (1));
i = G__31774;
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
var alts_BANG___delegate = function (ports,p__31775){
var map__31777 = p__31775;
var map__31777__$1 = ((cljs.core.seq_QMARK_(map__31777))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31777):map__31777);
var opts = map__31777__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31775 = null;
if (arguments.length > 1) {
var G__31778__i = 0, G__31778__a = new Array(arguments.length -  1);
while (G__31778__i < G__31778__a.length) {G__31778__a[G__31778__i] = arguments[G__31778__i + 1]; ++G__31778__i;}
  p__31775 = new cljs.core.IndexedSeq(G__31778__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31775);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31779){
var ports = cljs.core.first(arglist__31779);
var p__31775 = cljs.core.rest(arglist__31779);
return alts_BANG___delegate(ports,p__31775);
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
var c__16627__auto___31877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___31877){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___31877){
return (function (state_31853){
var state_val_31854 = (state_31853[(1)]);
if((state_val_31854 === (7))){
var inst_31849 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31855_31878 = state_31853__$1;
(statearr_31855_31878[(2)] = inst_31849);

(statearr_31855_31878[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (1))){
var state_31853__$1 = state_31853;
var statearr_31856_31879 = state_31853__$1;
(statearr_31856_31879[(2)] = null);

(statearr_31856_31879[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (4))){
var inst_31832 = (state_31853[(7)]);
var inst_31832__$1 = (state_31853[(2)]);
var inst_31833 = (inst_31832__$1 == null);
var state_31853__$1 = (function (){var statearr_31857 = state_31853;
(statearr_31857[(7)] = inst_31832__$1);

return statearr_31857;
})();
if(cljs.core.truth_(inst_31833)){
var statearr_31858_31880 = state_31853__$1;
(statearr_31858_31880[(1)] = (5));

} else {
var statearr_31859_31881 = state_31853__$1;
(statearr_31859_31881[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (13))){
var state_31853__$1 = state_31853;
var statearr_31860_31882 = state_31853__$1;
(statearr_31860_31882[(2)] = null);

(statearr_31860_31882[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (6))){
var inst_31832 = (state_31853[(7)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31853__$1,(11),to,inst_31832);
} else {
if((state_val_31854 === (3))){
var inst_31851 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31853__$1,inst_31851);
} else {
if((state_val_31854 === (12))){
var state_31853__$1 = state_31853;
var statearr_31861_31883 = state_31853__$1;
(statearr_31861_31883[(2)] = null);

(statearr_31861_31883[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (2))){
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31853__$1,(4),from);
} else {
if((state_val_31854 === (11))){
var inst_31842 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31842)){
var statearr_31862_31884 = state_31853__$1;
(statearr_31862_31884[(1)] = (12));

} else {
var statearr_31863_31885 = state_31853__$1;
(statearr_31863_31885[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (9))){
var state_31853__$1 = state_31853;
var statearr_31864_31886 = state_31853__$1;
(statearr_31864_31886[(2)] = null);

(statearr_31864_31886[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (5))){
var state_31853__$1 = state_31853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31865_31887 = state_31853__$1;
(statearr_31865_31887[(1)] = (8));

} else {
var statearr_31866_31888 = state_31853__$1;
(statearr_31866_31888[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (14))){
var inst_31847 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31867_31889 = state_31853__$1;
(statearr_31867_31889[(2)] = inst_31847);

(statearr_31867_31889[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (10))){
var inst_31839 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31868_31890 = state_31853__$1;
(statearr_31868_31890[(2)] = inst_31839);

(statearr_31868_31890[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_31854 === (8))){
var inst_31836 = cljs.core.async.close_BANG_(to);
var state_31853__$1 = state_31853;
var statearr_31869_31891 = state_31853__$1;
(statearr_31869_31891[(2)] = inst_31836);

(statearr_31869_31891[(1)] = (10));


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
});})(c__16627__auto___31877))
;
return ((function (switch__16547__auto__,c__16627__auto___31877){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_31873 = [null,null,null,null,null,null,null,null];
(statearr_31873[(0)] = state_machine__16548__auto__);

(statearr_31873[(1)] = (1));

return statearr_31873;
});
var state_machine__16548__auto____1 = (function (state_31853){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_31853);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e31874){if((e31874 instanceof Object)){
var ex__16551__auto__ = e31874;
var statearr_31875_31892 = state_31853;
(statearr_31875_31892[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31853);

return cljs.core.constant$keyword$99;
} else {
throw e31874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__31893 = state_31853;
state_31853 = G__31893;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___31877))
})();
var state__16629__auto__ = (function (){var statearr_31876 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_31876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___31877);

return statearr_31876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___31877))
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
return (function (p__32079){
var vec__32080 = p__32079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32080,(1),null);
var job = vec__32080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16627__auto___32264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32264,res,vec__32080,v,p,job,jobs,results){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32264,res,vec__32080,v,p,job,jobs,results){
return (function (state_32085){
var state_val_32086 = (state_32085[(1)]);
if((state_val_32086 === (2))){
var inst_32082 = (state_32085[(2)]);
var inst_32083 = cljs.core.async.close_BANG_(res);
var state_32085__$1 = (function (){var statearr_32087 = state_32085;
(statearr_32087[(7)] = inst_32082);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32085__$1,inst_32083);
} else {
if((state_val_32086 === (1))){
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32085__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16627__auto___32264,res,vec__32080,v,p,job,jobs,results))
;
return ((function (switch__16547__auto__,c__16627__auto___32264,res,vec__32080,v,p,job,jobs,results){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32091 = [null,null,null,null,null,null,null,null];
(statearr_32091[(0)] = state_machine__16548__auto__);

(statearr_32091[(1)] = (1));

return statearr_32091;
});
var state_machine__16548__auto____1 = (function (state_32085){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32085);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32092){if((e32092 instanceof Object)){
var ex__16551__auto__ = e32092;
var statearr_32093_32265 = state_32085;
(statearr_32093_32265[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32085);

return cljs.core.constant$keyword$99;
} else {
throw e32092;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32266 = state_32085;
state_32085 = G__32266;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32085){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32264,res,vec__32080,v,p,job,jobs,results))
})();
var state__16629__auto__ = (function (){var statearr_32094 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32264);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32264,res,vec__32080,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32095){
var vec__32096 = p__32095;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32096,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32096,(1),null);
var job = vec__32096;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__32097_32267 = v;
var G__32098_32268 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__32097_32267,G__32098_32268) : xf.call(null,G__32097_32267,G__32098_32268));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5138__auto___32269 = n;
var __32270 = (0);
while(true){
if((__32270 < n__5138__auto___32269)){
var G__32099_32271 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32099_32271) {
case "async":
var c__16627__auto___32273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32270,c__16627__auto___32273,G__32099_32271,n__5138__auto___32269,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (__32270,c__16627__auto___32273,G__32099_32271,n__5138__auto___32269,jobs,results,process,async){
return (function (state_32112){
var state_val_32113 = (state_32112[(1)]);
if((state_val_32113 === (7))){
var inst_32108 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
var statearr_32114_32274 = state_32112__$1;
(statearr_32114_32274[(2)] = inst_32108);

(statearr_32114_32274[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32113 === (6))){
var state_32112__$1 = state_32112;
var statearr_32115_32275 = state_32112__$1;
(statearr_32115_32275[(2)] = null);

(statearr_32115_32275[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32113 === (5))){
var state_32112__$1 = state_32112;
var statearr_32116_32276 = state_32112__$1;
(statearr_32116_32276[(2)] = null);

(statearr_32116_32276[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32113 === (4))){
var inst_32102 = (state_32112[(2)]);
var inst_32103 = async(inst_32102);
var state_32112__$1 = state_32112;
if(cljs.core.truth_(inst_32103)){
var statearr_32117_32277 = state_32112__$1;
(statearr_32117_32277[(1)] = (5));

} else {
var statearr_32118_32278 = state_32112__$1;
(statearr_32118_32278[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32113 === (3))){
var inst_32110 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32112__$1,inst_32110);
} else {
if((state_val_32113 === (2))){
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32112__$1,(4),jobs);
} else {
if((state_val_32113 === (1))){
var state_32112__$1 = state_32112;
var statearr_32119_32279 = state_32112__$1;
(statearr_32119_32279[(2)] = null);

(statearr_32119_32279[(1)] = (2));


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
});})(__32270,c__16627__auto___32273,G__32099_32271,n__5138__auto___32269,jobs,results,process,async))
;
return ((function (__32270,switch__16547__auto__,c__16627__auto___32273,G__32099_32271,n__5138__auto___32269,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32123 = [null,null,null,null,null,null,null];
(statearr_32123[(0)] = state_machine__16548__auto__);

(statearr_32123[(1)] = (1));

return statearr_32123;
});
var state_machine__16548__auto____1 = (function (state_32112){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32112);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32124){if((e32124 instanceof Object)){
var ex__16551__auto__ = e32124;
var statearr_32125_32280 = state_32112;
(statearr_32125_32280[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32112);

return cljs.core.constant$keyword$99;
} else {
throw e32124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32281 = state_32112;
state_32112 = G__32281;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32112){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(__32270,switch__16547__auto__,c__16627__auto___32273,G__32099_32271,n__5138__auto___32269,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32126 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32273);

return statearr_32126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(__32270,c__16627__auto___32273,G__32099_32271,n__5138__auto___32269,jobs,results,process,async))
);


break;
case "compute":
var c__16627__auto___32282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32270,c__16627__auto___32282,G__32099_32271,n__5138__auto___32269,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (__32270,c__16627__auto___32282,G__32099_32271,n__5138__auto___32269,jobs,results,process,async){
return (function (state_32139){
var state_val_32140 = (state_32139[(1)]);
if((state_val_32140 === (7))){
var inst_32135 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
var statearr_32141_32283 = state_32139__$1;
(statearr_32141_32283[(2)] = inst_32135);

(statearr_32141_32283[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32140 === (6))){
var state_32139__$1 = state_32139;
var statearr_32142_32284 = state_32139__$1;
(statearr_32142_32284[(2)] = null);

(statearr_32142_32284[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32140 === (5))){
var state_32139__$1 = state_32139;
var statearr_32143_32285 = state_32139__$1;
(statearr_32143_32285[(2)] = null);

(statearr_32143_32285[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32140 === (4))){
var inst_32129 = (state_32139[(2)]);
var inst_32130 = process(inst_32129);
var state_32139__$1 = state_32139;
if(cljs.core.truth_(inst_32130)){
var statearr_32144_32286 = state_32139__$1;
(statearr_32144_32286[(1)] = (5));

} else {
var statearr_32145_32287 = state_32139__$1;
(statearr_32145_32287[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32140 === (3))){
var inst_32137 = (state_32139[(2)]);
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32139__$1,inst_32137);
} else {
if((state_val_32140 === (2))){
var state_32139__$1 = state_32139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32139__$1,(4),jobs);
} else {
if((state_val_32140 === (1))){
var state_32139__$1 = state_32139;
var statearr_32146_32288 = state_32139__$1;
(statearr_32146_32288[(2)] = null);

(statearr_32146_32288[(1)] = (2));


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
});})(__32270,c__16627__auto___32282,G__32099_32271,n__5138__auto___32269,jobs,results,process,async))
;
return ((function (__32270,switch__16547__auto__,c__16627__auto___32282,G__32099_32271,n__5138__auto___32269,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32150 = [null,null,null,null,null,null,null];
(statearr_32150[(0)] = state_machine__16548__auto__);

(statearr_32150[(1)] = (1));

return statearr_32150;
});
var state_machine__16548__auto____1 = (function (state_32139){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32139);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32151){if((e32151 instanceof Object)){
var ex__16551__auto__ = e32151;
var statearr_32152_32289 = state_32139;
(statearr_32152_32289[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32139);

return cljs.core.constant$keyword$99;
} else {
throw e32151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32290 = state_32139;
state_32139 = G__32290;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32139){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(__32270,switch__16547__auto__,c__16627__auto___32282,G__32099_32271,n__5138__auto___32269,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32153 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32282);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(__32270,c__16627__auto___32282,G__32099_32271,n__5138__auto___32269,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32291 = (__32270 + (1));
__32270 = G__32291;
continue;
} else {
}
break;
}

var c__16627__auto___32292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32292,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32292,jobs,results,process,async){
return (function (state_32175){
var state_val_32176 = (state_32175[(1)]);
if((state_val_32176 === (9))){
var inst_32168 = (state_32175[(2)]);
var state_32175__$1 = (function (){var statearr_32177 = state_32175;
(statearr_32177[(7)] = inst_32168);

return statearr_32177;
})();
var statearr_32178_32293 = state_32175__$1;
(statearr_32178_32293[(2)] = null);

(statearr_32178_32293[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32176 === (8))){
var inst_32161 = (state_32175[(8)]);
var inst_32166 = (state_32175[(2)]);
var state_32175__$1 = (function (){var statearr_32179 = state_32175;
(statearr_32179[(9)] = inst_32166);

return statearr_32179;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32175__$1,(9),results,inst_32161);
} else {
if((state_val_32176 === (7))){
var inst_32171 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32180_32294 = state_32175__$1;
(statearr_32180_32294[(2)] = inst_32171);

(statearr_32180_32294[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32176 === (6))){
var inst_32161 = (state_32175[(8)]);
var inst_32156 = (state_32175[(10)]);
var inst_32161__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32163 = [inst_32156,inst_32161__$1];
var inst_32164 = (new cljs.core.PersistentVector(null,2,(5),inst_32162,inst_32163,null));
var state_32175__$1 = (function (){var statearr_32181 = state_32175;
(statearr_32181[(8)] = inst_32161__$1);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32175__$1,(8),jobs,inst_32164);
} else {
if((state_val_32176 === (5))){
var inst_32159 = cljs.core.async.close_BANG_(jobs);
var state_32175__$1 = state_32175;
var statearr_32182_32295 = state_32175__$1;
(statearr_32182_32295[(2)] = inst_32159);

(statearr_32182_32295[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32176 === (4))){
var inst_32156 = (state_32175[(10)]);
var inst_32156__$1 = (state_32175[(2)]);
var inst_32157 = (inst_32156__$1 == null);
var state_32175__$1 = (function (){var statearr_32183 = state_32175;
(statearr_32183[(10)] = inst_32156__$1);

return statearr_32183;
})();
if(cljs.core.truth_(inst_32157)){
var statearr_32184_32296 = state_32175__$1;
(statearr_32184_32296[(1)] = (5));

} else {
var statearr_32185_32297 = state_32175__$1;
(statearr_32185_32297[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32176 === (3))){
var inst_32173 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32175__$1,inst_32173);
} else {
if((state_val_32176 === (2))){
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32175__$1,(4),from);
} else {
if((state_val_32176 === (1))){
var state_32175__$1 = state_32175;
var statearr_32186_32298 = state_32175__$1;
(statearr_32186_32298[(2)] = null);

(statearr_32186_32298[(1)] = (2));


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
});})(c__16627__auto___32292,jobs,results,process,async))
;
return ((function (switch__16547__auto__,c__16627__auto___32292,jobs,results,process,async){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32190[(0)] = state_machine__16548__auto__);

(statearr_32190[(1)] = (1));

return statearr_32190;
});
var state_machine__16548__auto____1 = (function (state_32175){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32175);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32191){if((e32191 instanceof Object)){
var ex__16551__auto__ = e32191;
var statearr_32192_32299 = state_32175;
(statearr_32192_32299[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32175);

return cljs.core.constant$keyword$99;
} else {
throw e32191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32300 = state_32175;
state_32175 = G__32300;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32175){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32292,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32193 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32292);

return statearr_32193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32292,jobs,results,process,async))
);


var c__16627__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto__,jobs,results,process,async){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto__,jobs,results,process,async){
return (function (state_32231){
var state_val_32232 = (state_32231[(1)]);
if((state_val_32232 === (7))){
var inst_32227 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32233_32301 = state_32231__$1;
(statearr_32233_32301[(2)] = inst_32227);

(statearr_32233_32301[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (20))){
var state_32231__$1 = state_32231;
var statearr_32234_32302 = state_32231__$1;
(statearr_32234_32302[(2)] = null);

(statearr_32234_32302[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (1))){
var state_32231__$1 = state_32231;
var statearr_32235_32303 = state_32231__$1;
(statearr_32235_32303[(2)] = null);

(statearr_32235_32303[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (4))){
var inst_32196 = (state_32231[(7)]);
var inst_32196__$1 = (state_32231[(2)]);
var inst_32197 = (inst_32196__$1 == null);
var state_32231__$1 = (function (){var statearr_32236 = state_32231;
(statearr_32236[(7)] = inst_32196__$1);

return statearr_32236;
})();
if(cljs.core.truth_(inst_32197)){
var statearr_32237_32304 = state_32231__$1;
(statearr_32237_32304[(1)] = (5));

} else {
var statearr_32238_32305 = state_32231__$1;
(statearr_32238_32305[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (15))){
var inst_32209 = (state_32231[(8)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32231__$1,(18),to,inst_32209);
} else {
if((state_val_32232 === (21))){
var inst_32222 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32239_32306 = state_32231__$1;
(statearr_32239_32306[(2)] = inst_32222);

(statearr_32239_32306[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (13))){
var inst_32224 = (state_32231[(2)]);
var state_32231__$1 = (function (){var statearr_32240 = state_32231;
(statearr_32240[(9)] = inst_32224);

return statearr_32240;
})();
var statearr_32241_32307 = state_32231__$1;
(statearr_32241_32307[(2)] = null);

(statearr_32241_32307[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (6))){
var inst_32196 = (state_32231[(7)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32231__$1,(11),inst_32196);
} else {
if((state_val_32232 === (17))){
var inst_32217 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
if(cljs.core.truth_(inst_32217)){
var statearr_32242_32308 = state_32231__$1;
(statearr_32242_32308[(1)] = (19));

} else {
var statearr_32243_32309 = state_32231__$1;
(statearr_32243_32309[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (3))){
var inst_32229 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32231__$1,inst_32229);
} else {
if((state_val_32232 === (12))){
var inst_32206 = (state_32231[(10)]);
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32231__$1,(14),inst_32206);
} else {
if((state_val_32232 === (2))){
var state_32231__$1 = state_32231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32231__$1,(4),results);
} else {
if((state_val_32232 === (19))){
var state_32231__$1 = state_32231;
var statearr_32244_32310 = state_32231__$1;
(statearr_32244_32310[(2)] = null);

(statearr_32244_32310[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (11))){
var inst_32206 = (state_32231[(2)]);
var state_32231__$1 = (function (){var statearr_32245 = state_32231;
(statearr_32245[(10)] = inst_32206);

return statearr_32245;
})();
var statearr_32246_32311 = state_32231__$1;
(statearr_32246_32311[(2)] = null);

(statearr_32246_32311[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (9))){
var state_32231__$1 = state_32231;
var statearr_32247_32312 = state_32231__$1;
(statearr_32247_32312[(2)] = null);

(statearr_32247_32312[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (5))){
var state_32231__$1 = state_32231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32248_32313 = state_32231__$1;
(statearr_32248_32313[(1)] = (8));

} else {
var statearr_32249_32314 = state_32231__$1;
(statearr_32249_32314[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (14))){
var inst_32209 = (state_32231[(8)]);
var inst_32211 = (state_32231[(11)]);
var inst_32209__$1 = (state_32231[(2)]);
var inst_32210 = (inst_32209__$1 == null);
var inst_32211__$1 = cljs.core.not(inst_32210);
var state_32231__$1 = (function (){var statearr_32250 = state_32231;
(statearr_32250[(8)] = inst_32209__$1);

(statearr_32250[(11)] = inst_32211__$1);

return statearr_32250;
})();
if(inst_32211__$1){
var statearr_32251_32315 = state_32231__$1;
(statearr_32251_32315[(1)] = (15));

} else {
var statearr_32252_32316 = state_32231__$1;
(statearr_32252_32316[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (16))){
var inst_32211 = (state_32231[(11)]);
var state_32231__$1 = state_32231;
var statearr_32253_32317 = state_32231__$1;
(statearr_32253_32317[(2)] = inst_32211);

(statearr_32253_32317[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (10))){
var inst_32203 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32254_32318 = state_32231__$1;
(statearr_32254_32318[(2)] = inst_32203);

(statearr_32254_32318[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (18))){
var inst_32214 = (state_32231[(2)]);
var state_32231__$1 = state_32231;
var statearr_32255_32319 = state_32231__$1;
(statearr_32255_32319[(2)] = inst_32214);

(statearr_32255_32319[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32232 === (8))){
var inst_32200 = cljs.core.async.close_BANG_(to);
var state_32231__$1 = state_32231;
var statearr_32256_32320 = state_32231__$1;
(statearr_32256_32320[(2)] = inst_32200);

(statearr_32256_32320[(1)] = (10));


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
var statearr_32260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32260[(0)] = state_machine__16548__auto__);

(statearr_32260[(1)] = (1));

return statearr_32260;
});
var state_machine__16548__auto____1 = (function (state_32231){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32231);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32261){if((e32261 instanceof Object)){
var ex__16551__auto__ = e32261;
var statearr_32262_32321 = state_32231;
(statearr_32262_32321[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32231);

return cljs.core.constant$keyword$99;
} else {
throw e32261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32322 = state_32231;
state_32231 = G__32322;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32231){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__,jobs,results,process,async))
})();
var state__16629__auto__ = (function (){var statearr_32263 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32263;
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
var c__16627__auto___32445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___32445,tc,fc){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___32445,tc,fc){
return (function (state_32419){
var state_val_32420 = (state_32419[(1)]);
if((state_val_32420 === (7))){
var inst_32415 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32421_32446 = state_32419__$1;
(statearr_32421_32446[(2)] = inst_32415);

(statearr_32421_32446[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (1))){
var state_32419__$1 = state_32419;
var statearr_32422_32447 = state_32419__$1;
(statearr_32422_32447[(2)] = null);

(statearr_32422_32447[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (4))){
var inst_32396 = (state_32419[(7)]);
var inst_32396__$1 = (state_32419[(2)]);
var inst_32397 = (inst_32396__$1 == null);
var state_32419__$1 = (function (){var statearr_32423 = state_32419;
(statearr_32423[(7)] = inst_32396__$1);

return statearr_32423;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32424_32448 = state_32419__$1;
(statearr_32424_32448[(1)] = (5));

} else {
var statearr_32425_32449 = state_32419__$1;
(statearr_32425_32449[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (13))){
var state_32419__$1 = state_32419;
var statearr_32426_32450 = state_32419__$1;
(statearr_32426_32450[(2)] = null);

(statearr_32426_32450[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (6))){
var inst_32396 = (state_32419[(7)]);
var inst_32402 = (function (){var G__32427 = inst_32396;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__32427) : p.call(null,G__32427));
})();
var state_32419__$1 = state_32419;
if(cljs.core.truth_(inst_32402)){
var statearr_32428_32451 = state_32419__$1;
(statearr_32428_32451[(1)] = (9));

} else {
var statearr_32429_32452 = state_32419__$1;
(statearr_32429_32452[(1)] = (10));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (3))){
var inst_32417 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32419__$1,inst_32417);
} else {
if((state_val_32420 === (12))){
var state_32419__$1 = state_32419;
var statearr_32430_32453 = state_32419__$1;
(statearr_32430_32453[(2)] = null);

(statearr_32430_32453[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (2))){
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32419__$1,(4),ch);
} else {
if((state_val_32420 === (11))){
var inst_32396 = (state_32419[(7)]);
var inst_32406 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32419__$1,(8),inst_32406,inst_32396);
} else {
if((state_val_32420 === (9))){
var state_32419__$1 = state_32419;
var statearr_32431_32454 = state_32419__$1;
(statearr_32431_32454[(2)] = tc);

(statearr_32431_32454[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (5))){
var inst_32399 = cljs.core.async.close_BANG_(tc);
var inst_32400 = cljs.core.async.close_BANG_(fc);
var state_32419__$1 = (function (){var statearr_32432 = state_32419;
(statearr_32432[(8)] = inst_32399);

return statearr_32432;
})();
var statearr_32433_32455 = state_32419__$1;
(statearr_32433_32455[(2)] = inst_32400);

(statearr_32433_32455[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (14))){
var inst_32413 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32434_32456 = state_32419__$1;
(statearr_32434_32456[(2)] = inst_32413);

(statearr_32434_32456[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (10))){
var state_32419__$1 = state_32419;
var statearr_32435_32457 = state_32419__$1;
(statearr_32435_32457[(2)] = fc);

(statearr_32435_32457[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32420 === (8))){
var inst_32408 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
if(cljs.core.truth_(inst_32408)){
var statearr_32436_32458 = state_32419__$1;
(statearr_32436_32458[(1)] = (12));

} else {
var statearr_32437_32459 = state_32419__$1;
(statearr_32437_32459[(1)] = (13));

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
});})(c__16627__auto___32445,tc,fc))
;
return ((function (switch__16547__auto__,c__16627__auto___32445,tc,fc){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_32441 = [null,null,null,null,null,null,null,null,null];
(statearr_32441[(0)] = state_machine__16548__auto__);

(statearr_32441[(1)] = (1));

return statearr_32441;
});
var state_machine__16548__auto____1 = (function (state_32419){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32419);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32442){if((e32442 instanceof Object)){
var ex__16551__auto__ = e32442;
var statearr_32443_32460 = state_32419;
(statearr_32443_32460[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32419);

return cljs.core.constant$keyword$99;
} else {
throw e32442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32461 = state_32419;
state_32419 = G__32461;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32419){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___32445,tc,fc))
})();
var state__16629__auto__ = (function (){var statearr_32444 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___32445);

return statearr_32444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___32445,tc,fc))
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
return (function (state_32510){
var state_val_32511 = (state_32510[(1)]);
if((state_val_32511 === (7))){
var inst_32506 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
var statearr_32512_32530 = state_32510__$1;
(statearr_32512_32530[(2)] = inst_32506);

(statearr_32512_32530[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32511 === (6))){
var inst_32499 = (state_32510[(7)]);
var inst_32496 = (state_32510[(8)]);
var inst_32503 = (function (){var G__32513 = inst_32496;
var G__32514 = inst_32499;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32513,G__32514) : f.call(null,G__32513,G__32514));
})();
var inst_32496__$1 = inst_32503;
var state_32510__$1 = (function (){var statearr_32515 = state_32510;
(statearr_32515[(8)] = inst_32496__$1);

return statearr_32515;
})();
var statearr_32516_32531 = state_32510__$1;
(statearr_32516_32531[(2)] = null);

(statearr_32516_32531[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32511 === (5))){
var inst_32496 = (state_32510[(8)]);
var state_32510__$1 = state_32510;
var statearr_32517_32532 = state_32510__$1;
(statearr_32517_32532[(2)] = inst_32496);

(statearr_32517_32532[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32511 === (4))){
var inst_32499 = (state_32510[(7)]);
var inst_32499__$1 = (state_32510[(2)]);
var inst_32500 = (inst_32499__$1 == null);
var state_32510__$1 = (function (){var statearr_32518 = state_32510;
(statearr_32518[(7)] = inst_32499__$1);

return statearr_32518;
})();
if(cljs.core.truth_(inst_32500)){
var statearr_32519_32533 = state_32510__$1;
(statearr_32519_32533[(1)] = (5));

} else {
var statearr_32520_32534 = state_32510__$1;
(statearr_32520_32534[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32511 === (3))){
var inst_32508 = (state_32510[(2)]);
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32510__$1,inst_32508);
} else {
if((state_val_32511 === (2))){
var state_32510__$1 = state_32510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32510__$1,(4),ch);
} else {
if((state_val_32511 === (1))){
var inst_32496 = init;
var state_32510__$1 = (function (){var statearr_32521 = state_32510;
(statearr_32521[(8)] = inst_32496);

return statearr_32521;
})();
var statearr_32522_32535 = state_32510__$1;
(statearr_32522_32535[(2)] = null);

(statearr_32522_32535[(1)] = (2));


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
var statearr_32526 = [null,null,null,null,null,null,null,null,null];
(statearr_32526[(0)] = state_machine__16548__auto__);

(statearr_32526[(1)] = (1));

return statearr_32526;
});
var state_machine__16548__auto____1 = (function (state_32510){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32510);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32527){if((e32527 instanceof Object)){
var ex__16551__auto__ = e32527;
var statearr_32528_32536 = state_32510;
(statearr_32528_32536[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32510);

return cljs.core.constant$keyword$99;
} else {
throw e32527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32537 = state_32510;
state_32510 = G__32537;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32510){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_32529 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32529;
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
return (function (state_32614){
var state_val_32615 = (state_32614[(1)]);
if((state_val_32615 === (7))){
var inst_32596 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32616_32639 = state_32614__$1;
(statearr_32616_32639[(2)] = inst_32596);

(statearr_32616_32639[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (1))){
var inst_32590 = cljs.core.seq(coll);
var inst_32591 = inst_32590;
var state_32614__$1 = (function (){var statearr_32617 = state_32614;
(statearr_32617[(7)] = inst_32591);

return statearr_32617;
})();
var statearr_32618_32640 = state_32614__$1;
(statearr_32618_32640[(2)] = null);

(statearr_32618_32640[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (4))){
var inst_32591 = (state_32614[(7)]);
var inst_32594 = cljs.core.first(inst_32591);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32614__$1,(7),ch,inst_32594);
} else {
if((state_val_32615 === (13))){
var inst_32608 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32619_32641 = state_32614__$1;
(statearr_32619_32641[(2)] = inst_32608);

(statearr_32619_32641[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (6))){
var inst_32599 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32599)){
var statearr_32620_32642 = state_32614__$1;
(statearr_32620_32642[(1)] = (8));

} else {
var statearr_32621_32643 = state_32614__$1;
(statearr_32621_32643[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (3))){
var inst_32612 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32614__$1,inst_32612);
} else {
if((state_val_32615 === (12))){
var state_32614__$1 = state_32614;
var statearr_32622_32644 = state_32614__$1;
(statearr_32622_32644[(2)] = null);

(statearr_32622_32644[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (2))){
var inst_32591 = (state_32614[(7)]);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32591)){
var statearr_32623_32645 = state_32614__$1;
(statearr_32623_32645[(1)] = (4));

} else {
var statearr_32624_32646 = state_32614__$1;
(statearr_32624_32646[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (11))){
var inst_32605 = cljs.core.async.close_BANG_(ch);
var state_32614__$1 = state_32614;
var statearr_32625_32647 = state_32614__$1;
(statearr_32625_32647[(2)] = inst_32605);

(statearr_32625_32647[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (9))){
var state_32614__$1 = state_32614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32626_32648 = state_32614__$1;
(statearr_32626_32648[(1)] = (11));

} else {
var statearr_32627_32649 = state_32614__$1;
(statearr_32627_32649[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (5))){
var inst_32591 = (state_32614[(7)]);
var state_32614__$1 = state_32614;
var statearr_32628_32650 = state_32614__$1;
(statearr_32628_32650[(2)] = inst_32591);

(statearr_32628_32650[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (10))){
var inst_32610 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32629_32651 = state_32614__$1;
(statearr_32629_32651[(2)] = inst_32610);

(statearr_32629_32651[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_32615 === (8))){
var inst_32591 = (state_32614[(7)]);
var inst_32601 = cljs.core.next(inst_32591);
var inst_32591__$1 = inst_32601;
var state_32614__$1 = (function (){var statearr_32630 = state_32614;
(statearr_32630[(7)] = inst_32591__$1);

return statearr_32630;
})();
var statearr_32631_32652 = state_32614__$1;
(statearr_32631_32652[(2)] = null);

(statearr_32631_32652[(1)] = (2));


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
var statearr_32635 = [null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = state_machine__16548__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var state_machine__16548__auto____1 = (function (state_32614){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_32614);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e32636){if((e32636 instanceof Object)){
var ex__16551__auto__ = e32636;
var statearr_32637_32653 = state_32614;
(statearr_32637_32653[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32614);

return cljs.core.constant$keyword$99;
} else {
throw e32636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__32654 = state_32614;
state_32614 = G__32654;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_32614){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_32614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_32638 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_32638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_32638;
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

cljs.core.async.Mux = (function (){var obj32656 = {};
return obj32656;
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
return (function (){var or__4251__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__32660 = x__4895__auto__;
return goog.typeOf(G__32660);
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


cljs.core.async.Mult = (function (){var obj32662 = {};
return obj32662;
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
return (function (){var or__4251__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__32666 = x__4895__auto__;
return goog.typeOf(G__32666);
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
return (function (){var or__4251__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__32670 = x__4895__auto__;
return goog.typeOf(G__32670);
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
return (function (){var or__4251__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__32674 = x__4895__auto__;
return goog.typeOf(G__32674);
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
var cs = (function (){var G__32904 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32904) : cljs.core.atom.call(null,G__32904));
})();
var m = (function (){
if(typeof cljs.core.async.t32905 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32905 = (function (cs,ch,mult,meta32906){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32906 = meta32906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32905.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32905.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32905.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32905.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32908_33133 = self__.cs;
var G__32909_33134 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32908_33133,G__32909_33134) : cljs.core.reset_BANG_.call(null,G__32908_33133,G__32909_33134));

return null;
});})(cs))
;

cljs.core.async.t32905.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32907){
var self__ = this;
var _32907__$1 = this;
return self__.meta32906;
});})(cs))
;

cljs.core.async.t32905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32907,meta32906__$1){
var self__ = this;
var _32907__$1 = this;
return (new cljs.core.async.t32905(self__.cs,self__.ch,self__.mult,meta32906__$1));
});})(cs))
;

cljs.core.async.t32905.cljs$lang$type = true;

cljs.core.async.t32905.cljs$lang$ctorStr = "cljs.core.async/t32905";

cljs.core.async.t32905.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t32905");
});})(cs))
;

cljs.core.async.__GT_t32905 = ((function (cs){
return (function __GT_t32905(cs__$1,ch__$1,mult__$1,meta32906){
return (new cljs.core.async.t32905(cs__$1,ch__$1,mult__$1,meta32906));
});})(cs))
;

}

return (new cljs.core.async.t32905(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,397,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,390,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__32910 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32910) : cljs.core.atom.call(null,G__32910));
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
var c__16627__auto___33135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33135,cs,m,dchan,dctr,done){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33135,cs,m,dchan,dctr,done){
return (function (state_33041){
var state_val_33042 = (state_33041[(1)]);
if((state_val_33042 === (7))){
var inst_33037 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33043_33136 = state_33041__$1;
(statearr_33043_33136[(2)] = inst_33037);

(statearr_33043_33136[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (20))){
var inst_32942 = (state_33041[(7)]);
var inst_32952 = cljs.core.first(inst_32942);
var inst_32953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32952,(0),null);
var inst_32954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32952,(1),null);
var state_33041__$1 = (function (){var statearr_33044 = state_33041;
(statearr_33044[(8)] = inst_32953);

return statearr_33044;
})();
if(cljs.core.truth_(inst_32954)){
var statearr_33045_33137 = state_33041__$1;
(statearr_33045_33137[(1)] = (22));

} else {
var statearr_33046_33138 = state_33041__$1;
(statearr_33046_33138[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (27))){
var inst_32989 = (state_33041[(9)]);
var inst_32913 = (state_33041[(10)]);
var inst_32982 = (state_33041[(11)]);
var inst_32984 = (state_33041[(12)]);
var inst_32989__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32982,inst_32984);
var inst_32990 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32989__$1,inst_32913,done);
var state_33041__$1 = (function (){var statearr_33047 = state_33041;
(statearr_33047[(9)] = inst_32989__$1);

return statearr_33047;
})();
if(cljs.core.truth_(inst_32990)){
var statearr_33048_33139 = state_33041__$1;
(statearr_33048_33139[(1)] = (30));

} else {
var statearr_33049_33140 = state_33041__$1;
(statearr_33049_33140[(1)] = (31));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (1))){
var state_33041__$1 = state_33041;
var statearr_33050_33141 = state_33041__$1;
(statearr_33050_33141[(2)] = null);

(statearr_33050_33141[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (24))){
var inst_32942 = (state_33041[(7)]);
var inst_32959 = (state_33041[(2)]);
var inst_32960 = cljs.core.next(inst_32942);
var inst_32922 = inst_32960;
var inst_32923 = null;
var inst_32924 = (0);
var inst_32925 = (0);
var state_33041__$1 = (function (){var statearr_33051 = state_33041;
(statearr_33051[(13)] = inst_32922);

(statearr_33051[(14)] = inst_32924);

(statearr_33051[(15)] = inst_32959);

(statearr_33051[(16)] = inst_32925);

(statearr_33051[(17)] = inst_32923);

return statearr_33051;
})();
var statearr_33052_33142 = state_33041__$1;
(statearr_33052_33142[(2)] = null);

(statearr_33052_33142[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (39))){
var state_33041__$1 = state_33041;
var statearr_33056_33143 = state_33041__$1;
(statearr_33056_33143[(2)] = null);

(statearr_33056_33143[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (4))){
var inst_32913 = (state_33041[(10)]);
var inst_32913__$1 = (state_33041[(2)]);
var inst_32914 = (inst_32913__$1 == null);
var state_33041__$1 = (function (){var statearr_33057 = state_33041;
(statearr_33057[(10)] = inst_32913__$1);

return statearr_33057;
})();
if(cljs.core.truth_(inst_32914)){
var statearr_33058_33144 = state_33041__$1;
(statearr_33058_33144[(1)] = (5));

} else {
var statearr_33059_33145 = state_33041__$1;
(statearr_33059_33145[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (15))){
var inst_32922 = (state_33041[(13)]);
var inst_32924 = (state_33041[(14)]);
var inst_32925 = (state_33041[(16)]);
var inst_32923 = (state_33041[(17)]);
var inst_32938 = (state_33041[(2)]);
var inst_32939 = (inst_32925 + (1));
var tmp33053 = inst_32922;
var tmp33054 = inst_32924;
var tmp33055 = inst_32923;
var inst_32922__$1 = tmp33053;
var inst_32923__$1 = tmp33055;
var inst_32924__$1 = tmp33054;
var inst_32925__$1 = inst_32939;
var state_33041__$1 = (function (){var statearr_33060 = state_33041;
(statearr_33060[(18)] = inst_32938);

(statearr_33060[(13)] = inst_32922__$1);

(statearr_33060[(14)] = inst_32924__$1);

(statearr_33060[(16)] = inst_32925__$1);

(statearr_33060[(17)] = inst_32923__$1);

return statearr_33060;
})();
var statearr_33061_33146 = state_33041__$1;
(statearr_33061_33146[(2)] = null);

(statearr_33061_33146[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (21))){
var inst_32963 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33065_33147 = state_33041__$1;
(statearr_33065_33147[(2)] = inst_32963);

(statearr_33065_33147[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (31))){
var inst_32989 = (state_33041[(9)]);
var inst_32993 = done(null);
var inst_32994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32989);
var state_33041__$1 = (function (){var statearr_33066 = state_33041;
(statearr_33066[(19)] = inst_32993);

return statearr_33066;
})();
var statearr_33067_33148 = state_33041__$1;
(statearr_33067_33148[(2)] = inst_32994);

(statearr_33067_33148[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (32))){
var inst_32982 = (state_33041[(11)]);
var inst_32984 = (state_33041[(12)]);
var inst_32981 = (state_33041[(20)]);
var inst_32983 = (state_33041[(21)]);
var inst_32996 = (state_33041[(2)]);
var inst_32997 = (inst_32984 + (1));
var tmp33062 = inst_32982;
var tmp33063 = inst_32981;
var tmp33064 = inst_32983;
var inst_32981__$1 = tmp33063;
var inst_32982__$1 = tmp33062;
var inst_32983__$1 = tmp33064;
var inst_32984__$1 = inst_32997;
var state_33041__$1 = (function (){var statearr_33068 = state_33041;
(statearr_33068[(11)] = inst_32982__$1);

(statearr_33068[(12)] = inst_32984__$1);

(statearr_33068[(20)] = inst_32981__$1);

(statearr_33068[(22)] = inst_32996);

(statearr_33068[(21)] = inst_32983__$1);

return statearr_33068;
})();
var statearr_33069_33149 = state_33041__$1;
(statearr_33069_33149[(2)] = null);

(statearr_33069_33149[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (40))){
var inst_33009 = (state_33041[(23)]);
var inst_33013 = done(null);
var inst_33014 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33009);
var state_33041__$1 = (function (){var statearr_33070 = state_33041;
(statearr_33070[(24)] = inst_33013);

return statearr_33070;
})();
var statearr_33071_33150 = state_33041__$1;
(statearr_33071_33150[(2)] = inst_33014);

(statearr_33071_33150[(1)] = (41));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (33))){
var inst_33000 = (state_33041[(25)]);
var inst_33002 = cljs.core.chunked_seq_QMARK_(inst_33000);
var state_33041__$1 = state_33041;
if(inst_33002){
var statearr_33072_33151 = state_33041__$1;
(statearr_33072_33151[(1)] = (36));

} else {
var statearr_33073_33152 = state_33041__$1;
(statearr_33073_33152[(1)] = (37));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (13))){
var inst_32932 = (state_33041[(26)]);
var inst_32935 = cljs.core.async.close_BANG_(inst_32932);
var state_33041__$1 = state_33041;
var statearr_33074_33153 = state_33041__$1;
(statearr_33074_33153[(2)] = inst_32935);

(statearr_33074_33153[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (22))){
var inst_32953 = (state_33041[(8)]);
var inst_32956 = cljs.core.async.close_BANG_(inst_32953);
var state_33041__$1 = state_33041;
var statearr_33075_33154 = state_33041__$1;
(statearr_33075_33154[(2)] = inst_32956);

(statearr_33075_33154[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (36))){
var inst_33000 = (state_33041[(25)]);
var inst_33004 = cljs.core.chunk_first(inst_33000);
var inst_33005 = cljs.core.chunk_rest(inst_33000);
var inst_33006 = cljs.core.count(inst_33004);
var inst_32981 = inst_33005;
var inst_32982 = inst_33004;
var inst_32983 = inst_33006;
var inst_32984 = (0);
var state_33041__$1 = (function (){var statearr_33076 = state_33041;
(statearr_33076[(11)] = inst_32982);

(statearr_33076[(12)] = inst_32984);

(statearr_33076[(20)] = inst_32981);

(statearr_33076[(21)] = inst_32983);

return statearr_33076;
})();
var statearr_33077_33155 = state_33041__$1;
(statearr_33077_33155[(2)] = null);

(statearr_33077_33155[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (41))){
var inst_33000 = (state_33041[(25)]);
var inst_33016 = (state_33041[(2)]);
var inst_33017 = cljs.core.next(inst_33000);
var inst_32981 = inst_33017;
var inst_32982 = null;
var inst_32983 = (0);
var inst_32984 = (0);
var state_33041__$1 = (function (){var statearr_33078 = state_33041;
(statearr_33078[(11)] = inst_32982);

(statearr_33078[(12)] = inst_32984);

(statearr_33078[(27)] = inst_33016);

(statearr_33078[(20)] = inst_32981);

(statearr_33078[(21)] = inst_32983);

return statearr_33078;
})();
var statearr_33079_33156 = state_33041__$1;
(statearr_33079_33156[(2)] = null);

(statearr_33079_33156[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (43))){
var state_33041__$1 = state_33041;
var statearr_33080_33157 = state_33041__$1;
(statearr_33080_33157[(2)] = null);

(statearr_33080_33157[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (29))){
var inst_33025 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33081_33158 = state_33041__$1;
(statearr_33081_33158[(2)] = inst_33025);

(statearr_33081_33158[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (44))){
var inst_33034 = (state_33041[(2)]);
var state_33041__$1 = (function (){var statearr_33082 = state_33041;
(statearr_33082[(28)] = inst_33034);

return statearr_33082;
})();
var statearr_33083_33159 = state_33041__$1;
(statearr_33083_33159[(2)] = null);

(statearr_33083_33159[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (6))){
var inst_32973 = (state_33041[(29)]);
var inst_32972 = (function (){var G__33084 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33084) : cljs.core.deref.call(null,G__33084));
})();
var inst_32973__$1 = cljs.core.keys(inst_32972);
var inst_32974 = cljs.core.count(inst_32973__$1);
var inst_32975 = (function (){var G__33085 = dctr;
var G__33086 = inst_32974;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33085,G__33086) : cljs.core.reset_BANG_.call(null,G__33085,G__33086));
})();
var inst_32980 = cljs.core.seq(inst_32973__$1);
var inst_32981 = inst_32980;
var inst_32982 = null;
var inst_32983 = (0);
var inst_32984 = (0);
var state_33041__$1 = (function (){var statearr_33087 = state_33041;
(statearr_33087[(11)] = inst_32982);

(statearr_33087[(29)] = inst_32973__$1);

(statearr_33087[(12)] = inst_32984);

(statearr_33087[(30)] = inst_32975);

(statearr_33087[(20)] = inst_32981);

(statearr_33087[(21)] = inst_32983);

return statearr_33087;
})();
var statearr_33088_33160 = state_33041__$1;
(statearr_33088_33160[(2)] = null);

(statearr_33088_33160[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (28))){
var inst_32981 = (state_33041[(20)]);
var inst_33000 = (state_33041[(25)]);
var inst_33000__$1 = cljs.core.seq(inst_32981);
var state_33041__$1 = (function (){var statearr_33089 = state_33041;
(statearr_33089[(25)] = inst_33000__$1);

return statearr_33089;
})();
if(inst_33000__$1){
var statearr_33090_33161 = state_33041__$1;
(statearr_33090_33161[(1)] = (33));

} else {
var statearr_33091_33162 = state_33041__$1;
(statearr_33091_33162[(1)] = (34));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (25))){
var inst_32984 = (state_33041[(12)]);
var inst_32983 = (state_33041[(21)]);
var inst_32986 = (inst_32984 < inst_32983);
var inst_32987 = inst_32986;
var state_33041__$1 = state_33041;
if(cljs.core.truth_(inst_32987)){
var statearr_33092_33163 = state_33041__$1;
(statearr_33092_33163[(1)] = (27));

} else {
var statearr_33093_33164 = state_33041__$1;
(statearr_33093_33164[(1)] = (28));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (34))){
var state_33041__$1 = state_33041;
var statearr_33094_33165 = state_33041__$1;
(statearr_33094_33165[(2)] = null);

(statearr_33094_33165[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (17))){
var state_33041__$1 = state_33041;
var statearr_33095_33166 = state_33041__$1;
(statearr_33095_33166[(2)] = null);

(statearr_33095_33166[(1)] = (18));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (3))){
var inst_33039 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33041__$1,inst_33039);
} else {
if((state_val_33042 === (12))){
var inst_32968 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33096_33167 = state_33041__$1;
(statearr_33096_33167[(2)] = inst_32968);

(statearr_33096_33167[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (2))){
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33041__$1,(4),ch);
} else {
if((state_val_33042 === (23))){
var state_33041__$1 = state_33041;
var statearr_33097_33168 = state_33041__$1;
(statearr_33097_33168[(2)] = null);

(statearr_33097_33168[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (35))){
var inst_33023 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33098_33169 = state_33041__$1;
(statearr_33098_33169[(2)] = inst_33023);

(statearr_33098_33169[(1)] = (29));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (19))){
var inst_32942 = (state_33041[(7)]);
var inst_32946 = cljs.core.chunk_first(inst_32942);
var inst_32947 = cljs.core.chunk_rest(inst_32942);
var inst_32948 = cljs.core.count(inst_32946);
var inst_32922 = inst_32947;
var inst_32923 = inst_32946;
var inst_32924 = inst_32948;
var inst_32925 = (0);
var state_33041__$1 = (function (){var statearr_33099 = state_33041;
(statearr_33099[(13)] = inst_32922);

(statearr_33099[(14)] = inst_32924);

(statearr_33099[(16)] = inst_32925);

(statearr_33099[(17)] = inst_32923);

return statearr_33099;
})();
var statearr_33100_33170 = state_33041__$1;
(statearr_33100_33170[(2)] = null);

(statearr_33100_33170[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (11))){
var inst_32942 = (state_33041[(7)]);
var inst_32922 = (state_33041[(13)]);
var inst_32942__$1 = cljs.core.seq(inst_32922);
var state_33041__$1 = (function (){var statearr_33101 = state_33041;
(statearr_33101[(7)] = inst_32942__$1);

return statearr_33101;
})();
if(inst_32942__$1){
var statearr_33102_33171 = state_33041__$1;
(statearr_33102_33171[(1)] = (16));

} else {
var statearr_33103_33172 = state_33041__$1;
(statearr_33103_33172[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (9))){
var inst_32970 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33104_33173 = state_33041__$1;
(statearr_33104_33173[(2)] = inst_32970);

(statearr_33104_33173[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (5))){
var inst_32920 = (function (){var G__33105 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33105) : cljs.core.deref.call(null,G__33105));
})();
var inst_32921 = cljs.core.seq(inst_32920);
var inst_32922 = inst_32921;
var inst_32923 = null;
var inst_32924 = (0);
var inst_32925 = (0);
var state_33041__$1 = (function (){var statearr_33106 = state_33041;
(statearr_33106[(13)] = inst_32922);

(statearr_33106[(14)] = inst_32924);

(statearr_33106[(16)] = inst_32925);

(statearr_33106[(17)] = inst_32923);

return statearr_33106;
})();
var statearr_33107_33174 = state_33041__$1;
(statearr_33107_33174[(2)] = null);

(statearr_33107_33174[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (14))){
var state_33041__$1 = state_33041;
var statearr_33108_33175 = state_33041__$1;
(statearr_33108_33175[(2)] = null);

(statearr_33108_33175[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (45))){
var inst_33031 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33109_33176 = state_33041__$1;
(statearr_33109_33176[(2)] = inst_33031);

(statearr_33109_33176[(1)] = (44));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (26))){
var inst_32973 = (state_33041[(29)]);
var inst_33027 = (state_33041[(2)]);
var inst_33028 = cljs.core.seq(inst_32973);
var state_33041__$1 = (function (){var statearr_33110 = state_33041;
(statearr_33110[(31)] = inst_33027);

return statearr_33110;
})();
if(inst_33028){
var statearr_33111_33177 = state_33041__$1;
(statearr_33111_33177[(1)] = (42));

} else {
var statearr_33112_33178 = state_33041__$1;
(statearr_33112_33178[(1)] = (43));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (16))){
var inst_32942 = (state_33041[(7)]);
var inst_32944 = cljs.core.chunked_seq_QMARK_(inst_32942);
var state_33041__$1 = state_33041;
if(inst_32944){
var statearr_33113_33179 = state_33041__$1;
(statearr_33113_33179[(1)] = (19));

} else {
var statearr_33114_33180 = state_33041__$1;
(statearr_33114_33180[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (38))){
var inst_33020 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33115_33181 = state_33041__$1;
(statearr_33115_33181[(2)] = inst_33020);

(statearr_33115_33181[(1)] = (35));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (30))){
var state_33041__$1 = state_33041;
var statearr_33116_33182 = state_33041__$1;
(statearr_33116_33182[(2)] = null);

(statearr_33116_33182[(1)] = (32));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (10))){
var inst_32925 = (state_33041[(16)]);
var inst_32923 = (state_33041[(17)]);
var inst_32931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32923,inst_32925);
var inst_32932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32931,(0),null);
var inst_32933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32931,(1),null);
var state_33041__$1 = (function (){var statearr_33117 = state_33041;
(statearr_33117[(26)] = inst_32932);

return statearr_33117;
})();
if(cljs.core.truth_(inst_32933)){
var statearr_33118_33183 = state_33041__$1;
(statearr_33118_33183[(1)] = (13));

} else {
var statearr_33119_33184 = state_33041__$1;
(statearr_33119_33184[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (18))){
var inst_32966 = (state_33041[(2)]);
var state_33041__$1 = state_33041;
var statearr_33120_33185 = state_33041__$1;
(statearr_33120_33185[(2)] = inst_32966);

(statearr_33120_33185[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (42))){
var state_33041__$1 = state_33041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33041__$1,(45),dchan);
} else {
if((state_val_33042 === (37))){
var inst_32913 = (state_33041[(10)]);
var inst_33009 = (state_33041[(23)]);
var inst_33000 = (state_33041[(25)]);
var inst_33009__$1 = cljs.core.first(inst_33000);
var inst_33010 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33009__$1,inst_32913,done);
var state_33041__$1 = (function (){var statearr_33121 = state_33041;
(statearr_33121[(23)] = inst_33009__$1);

return statearr_33121;
})();
if(cljs.core.truth_(inst_33010)){
var statearr_33122_33186 = state_33041__$1;
(statearr_33122_33186[(1)] = (39));

} else {
var statearr_33123_33187 = state_33041__$1;
(statearr_33123_33187[(1)] = (40));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33042 === (8))){
var inst_32924 = (state_33041[(14)]);
var inst_32925 = (state_33041[(16)]);
var inst_32927 = (inst_32925 < inst_32924);
var inst_32928 = inst_32927;
var state_33041__$1 = state_33041;
if(cljs.core.truth_(inst_32928)){
var statearr_33124_33188 = state_33041__$1;
(statearr_33124_33188[(1)] = (10));

} else {
var statearr_33125_33189 = state_33041__$1;
(statearr_33125_33189[(1)] = (11));

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
});})(c__16627__auto___33135,cs,m,dchan,dctr,done))
;
return ((function (switch__16547__auto__,c__16627__auto___33135,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33129[(0)] = state_machine__16548__auto__);

(statearr_33129[(1)] = (1));

return statearr_33129;
});
var state_machine__16548__auto____1 = (function (state_33041){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33041);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33130){if((e33130 instanceof Object)){
var ex__16551__auto__ = e33130;
var statearr_33131_33190 = state_33041;
(statearr_33131_33190[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33041);

return cljs.core.constant$keyword$99;
} else {
throw e33130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33191 = state_33041;
state_33041 = G__33191;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33041){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33135,cs,m,dchan,dctr,done))
})();
var state__16629__auto__ = (function (){var statearr_33132 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33135);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33135,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj33196 = {};
return obj33196;
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
return (function (){var or__4251__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__33200 = x__4895__auto__;
return goog.typeOf(G__33200);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__33204 = x__4895__auto__;
return goog.typeOf(G__33204);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__33208 = x__4895__auto__;
return goog.typeOf(G__33208);
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
return (function (){var or__4251__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__33212 = x__4895__auto__;
return goog.typeOf(G__33212);
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
return (function (){var or__4251__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__33216 = x__4895__auto__;
return goog.typeOf(G__33216);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__33217){
var map__33223 = p__33217;
var map__33223__$1 = ((cljs.core.seq_QMARK_(map__33223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33223):map__33223);
var opts = map__33223__$1;
var statearr_33224_33228 = state;
(statearr_33224_33228[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__33223,map__33223__$1,opts){
return (function (val){
var statearr_33225_33229 = state;
(statearr_33225_33229[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33223,map__33223__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_33226_33230 = state;
(statearr_33226_33230[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__33227 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33227) : cljs.core.deref.call(null,G__33227));
})());


return cljs.core.constant$keyword$99;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__33217 = null;
if (arguments.length > 3) {
var G__33231__i = 0, G__33231__a = new Array(arguments.length -  3);
while (G__33231__i < G__33231__a.length) {G__33231__a[G__33231__i] = arguments[G__33231__i + 3]; ++G__33231__i;}
  p__33217 = new cljs.core.IndexedSeq(G__33231__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__33217);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__33232){
var state = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var cont_block = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var ports = cljs.core.first(arglist__33232);
var p__33217 = cljs.core.rest(arglist__33232);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__33217);
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
var cs = (function (){var G__33366 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33366) : cljs.core.atom.call(null,G__33366));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$110);
var solo_mode = (function (){var G__33367 = cljs.core.constant$keyword$109;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33367) : cljs.core.atom.call(null,G__33367));
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
if(cljs.core.truth_((function (){var G__33368 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__33368) : attr.call(null,G__33368));
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
var chs = (function (){var G__33369 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33369) : cljs.core.deref.call(null,G__33369));
})();
var mode = (function (){var G__33370 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33370) : cljs.core.deref.call(null,G__33370));
})();
var solos = pick(cljs.core.constant$keyword$110,chs);
var pauses = pick(cljs.core.constant$keyword$108,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$111,solos,cljs.core.constant$keyword$112,pick(cljs.core.constant$keyword$109,chs),cljs.core.constant$keyword$113,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$108)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t33371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33371 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33372){
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
this.meta33372 = meta33372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33371.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33374_33499 = self__.cs;
var G__33375_33500 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33374_33499,G__33375_33500) : cljs.core.reset_BANG_.call(null,G__33374_33499,G__33375_33500));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__33376 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__33376) : self__.solo_modes.call(null,G__33376));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__33377_33501 = self__.solo_mode;
var G__33378_33502 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33377_33501,G__33378_33502) : cljs.core.reset_BANG_.call(null,G__33377_33501,G__33378_33502));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33373){
var self__ = this;
var _33373__$1 = this;
return self__.meta33372;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33373,meta33372__$1){
var self__ = this;
var _33373__$1 = this;
return (new cljs.core.async.t33371(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33372__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33371.cljs$lang$type = true;

cljs.core.async.t33371.cljs$lang$ctorStr = "cljs.core.async/t33371";

cljs.core.async.t33371.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t33371");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33371 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33371(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33372){
return (new cljs.core.async.t33371(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33372));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33371(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,25,cljs.core.constant$keyword$9,510,cljs.core.constant$keyword$10,11,cljs.core.constant$keyword$11,499,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16627__auto___33503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33450){
var state_val_33451 = (state_33450[(1)]);
if((state_val_33451 === (7))){
var inst_33392 = (state_33450[(7)]);
var inst_33397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33392);
var state_33450__$1 = state_33450;
var statearr_33452_33504 = state_33450__$1;
(statearr_33452_33504[(2)] = inst_33397);

(statearr_33452_33504[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (20))){
var inst_33407 = (state_33450[(8)]);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33450__$1,(23),out,inst_33407);
} else {
if((state_val_33451 === (1))){
var inst_33382 = (state_33450[(9)]);
var inst_33382__$1 = calc_state();
var inst_33383 = cljs.core.seq_QMARK_(inst_33382__$1);
var state_33450__$1 = (function (){var statearr_33453 = state_33450;
(statearr_33453[(9)] = inst_33382__$1);

return statearr_33453;
})();
if(inst_33383){
var statearr_33454_33505 = state_33450__$1;
(statearr_33454_33505[(1)] = (2));

} else {
var statearr_33455_33506 = state_33450__$1;
(statearr_33455_33506[(1)] = (3));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (24))){
var inst_33400 = (state_33450[(10)]);
var inst_33392 = inst_33400;
var state_33450__$1 = (function (){var statearr_33456 = state_33450;
(statearr_33456[(7)] = inst_33392);

return statearr_33456;
})();
var statearr_33457_33507 = state_33450__$1;
(statearr_33457_33507[(2)] = null);

(statearr_33457_33507[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (4))){
var inst_33382 = (state_33450[(9)]);
var inst_33388 = (state_33450[(2)]);
var inst_33389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33388,cljs.core.constant$keyword$113);
var inst_33390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33388,cljs.core.constant$keyword$112);
var inst_33391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33388,cljs.core.constant$keyword$111);
var inst_33392 = inst_33382;
var state_33450__$1 = (function (){var statearr_33458 = state_33450;
(statearr_33458[(7)] = inst_33392);

(statearr_33458[(11)] = inst_33391);

(statearr_33458[(12)] = inst_33390);

(statearr_33458[(13)] = inst_33389);

return statearr_33458;
})();
var statearr_33459_33508 = state_33450__$1;
(statearr_33459_33508[(2)] = null);

(statearr_33459_33508[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (15))){
var state_33450__$1 = state_33450;
var statearr_33460_33509 = state_33450__$1;
(statearr_33460_33509[(2)] = null);

(statearr_33460_33509[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (21))){
var inst_33400 = (state_33450[(10)]);
var inst_33392 = inst_33400;
var state_33450__$1 = (function (){var statearr_33461 = state_33450;
(statearr_33461[(7)] = inst_33392);

return statearr_33461;
})();
var statearr_33462_33510 = state_33450__$1;
(statearr_33462_33510[(2)] = null);

(statearr_33462_33510[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (13))){
var inst_33446 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33463_33511 = state_33450__$1;
(statearr_33463_33511[(2)] = inst_33446);

(statearr_33463_33511[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (22))){
var inst_33444 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33464_33512 = state_33450__$1;
(statearr_33464_33512[(2)] = inst_33444);

(statearr_33464_33512[(1)] = (13));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (6))){
var inst_33448 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33450__$1,inst_33448);
} else {
if((state_val_33451 === (25))){
var state_33450__$1 = state_33450;
var statearr_33465_33513 = state_33450__$1;
(statearr_33465_33513[(2)] = null);

(statearr_33465_33513[(1)] = (26));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (17))){
var inst_33423 = (state_33450[(14)]);
var state_33450__$1 = state_33450;
var statearr_33466_33514 = state_33450__$1;
(statearr_33466_33514[(2)] = inst_33423);

(statearr_33466_33514[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (3))){
var inst_33382 = (state_33450[(9)]);
var state_33450__$1 = state_33450;
var statearr_33467_33515 = state_33450__$1;
(statearr_33467_33515[(2)] = inst_33382);

(statearr_33467_33515[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (12))){
var inst_33403 = (state_33450[(15)]);
var inst_33408 = (state_33450[(16)]);
var inst_33423 = (state_33450[(14)]);
var inst_33423__$1 = (function (){var G__33468 = inst_33408;
return (inst_33403.cljs$core$IFn$_invoke$arity$1 ? inst_33403.cljs$core$IFn$_invoke$arity$1(G__33468) : inst_33403.call(null,G__33468));
})();
var state_33450__$1 = (function (){var statearr_33469 = state_33450;
(statearr_33469[(14)] = inst_33423__$1);

return statearr_33469;
})();
if(cljs.core.truth_(inst_33423__$1)){
var statearr_33470_33516 = state_33450__$1;
(statearr_33470_33516[(1)] = (17));

} else {
var statearr_33471_33517 = state_33450__$1;
(statearr_33471_33517[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (2))){
var inst_33382 = (state_33450[(9)]);
var inst_33385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33382);
var state_33450__$1 = state_33450;
var statearr_33472_33518 = state_33450__$1;
(statearr_33472_33518[(2)] = inst_33385);

(statearr_33472_33518[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (23))){
var inst_33435 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33435)){
var statearr_33473_33519 = state_33450__$1;
(statearr_33473_33519[(1)] = (24));

} else {
var statearr_33474_33520 = state_33450__$1;
(statearr_33474_33520[(1)] = (25));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (19))){
var inst_33432 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33432)){
var statearr_33475_33521 = state_33450__$1;
(statearr_33475_33521[(1)] = (20));

} else {
var statearr_33476_33522 = state_33450__$1;
(statearr_33476_33522[(1)] = (21));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (11))){
var inst_33407 = (state_33450[(8)]);
var inst_33413 = (inst_33407 == null);
var state_33450__$1 = state_33450;
if(cljs.core.truth_(inst_33413)){
var statearr_33477_33523 = state_33450__$1;
(statearr_33477_33523[(1)] = (14));

} else {
var statearr_33478_33524 = state_33450__$1;
(statearr_33478_33524[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (9))){
var inst_33400 = (state_33450[(10)]);
var inst_33400__$1 = (state_33450[(2)]);
var inst_33401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33400__$1,cljs.core.constant$keyword$113);
var inst_33402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33400__$1,cljs.core.constant$keyword$112);
var inst_33403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33400__$1,cljs.core.constant$keyword$111);
var state_33450__$1 = (function (){var statearr_33479 = state_33450;
(statearr_33479[(17)] = inst_33402);

(statearr_33479[(10)] = inst_33400__$1);

(statearr_33479[(15)] = inst_33403);

return statearr_33479;
})();
return cljs.core.async.ioc_alts_BANG_(state_33450__$1,(10),inst_33401);
} else {
if((state_val_33451 === (5))){
var inst_33392 = (state_33450[(7)]);
var inst_33395 = cljs.core.seq_QMARK_(inst_33392);
var state_33450__$1 = state_33450;
if(inst_33395){
var statearr_33480_33525 = state_33450__$1;
(statearr_33480_33525[(1)] = (7));

} else {
var statearr_33481_33526 = state_33450__$1;
(statearr_33481_33526[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (14))){
var inst_33408 = (state_33450[(16)]);
var inst_33415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33408);
var state_33450__$1 = state_33450;
var statearr_33482_33527 = state_33450__$1;
(statearr_33482_33527[(2)] = inst_33415);

(statearr_33482_33527[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (26))){
var inst_33440 = (state_33450[(2)]);
var state_33450__$1 = state_33450;
var statearr_33483_33528 = state_33450__$1;
(statearr_33483_33528[(2)] = inst_33440);

(statearr_33483_33528[(1)] = (22));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (16))){
var inst_33418 = (state_33450[(2)]);
var inst_33419 = calc_state();
var inst_33392 = inst_33419;
var state_33450__$1 = (function (){var statearr_33484 = state_33450;
(statearr_33484[(7)] = inst_33392);

(statearr_33484[(18)] = inst_33418);

return statearr_33484;
})();
var statearr_33485_33529 = state_33450__$1;
(statearr_33485_33529[(2)] = null);

(statearr_33485_33529[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (10))){
var inst_33407 = (state_33450[(8)]);
var inst_33408 = (state_33450[(16)]);
var inst_33406 = (state_33450[(2)]);
var inst_33407__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33406,(0),null);
var inst_33408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33406,(1),null);
var inst_33409 = (inst_33407__$1 == null);
var inst_33410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33408__$1,change);
var inst_33411 = (inst_33409) || (inst_33410);
var state_33450__$1 = (function (){var statearr_33486 = state_33450;
(statearr_33486[(8)] = inst_33407__$1);

(statearr_33486[(16)] = inst_33408__$1);

return statearr_33486;
})();
if(cljs.core.truth_(inst_33411)){
var statearr_33487_33530 = state_33450__$1;
(statearr_33487_33530[(1)] = (11));

} else {
var statearr_33488_33531 = state_33450__$1;
(statearr_33488_33531[(1)] = (12));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (18))){
var inst_33402 = (state_33450[(17)]);
var inst_33403 = (state_33450[(15)]);
var inst_33408 = (state_33450[(16)]);
var inst_33427 = cljs.core.empty_QMARK_(inst_33403);
var inst_33428 = (function (){var G__33489 = inst_33408;
return (inst_33402.cljs$core$IFn$_invoke$arity$1 ? inst_33402.cljs$core$IFn$_invoke$arity$1(G__33489) : inst_33402.call(null,G__33489));
})();
var inst_33429 = cljs.core.not(inst_33428);
var inst_33430 = (inst_33427) && (inst_33429);
var state_33450__$1 = state_33450;
var statearr_33490_33532 = state_33450__$1;
(statearr_33490_33532[(2)] = inst_33430);

(statearr_33490_33532[(1)] = (19));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33451 === (8))){
var inst_33392 = (state_33450[(7)]);
var state_33450__$1 = state_33450;
var statearr_33491_33533 = state_33450__$1;
(statearr_33491_33533[(2)] = inst_33392);

(statearr_33491_33533[(1)] = (9));


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
});})(c__16627__auto___33503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16547__auto__,c__16627__auto___33503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33495[(0)] = state_machine__16548__auto__);

(statearr_33495[(1)] = (1));

return statearr_33495;
});
var state_machine__16548__auto____1 = (function (state_33450){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33450);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33496){if((e33496 instanceof Object)){
var ex__16551__auto__ = e33496;
var statearr_33497_33534 = state_33450;
(statearr_33497_33534[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33450);

return cljs.core.constant$keyword$99;
} else {
throw e33496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33535 = state_33450;
state_33450 = G__33535;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33450){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16629__auto__ = (function (){var statearr_33498 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33503);

return statearr_33498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33503,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj33537 = {};
return obj33537;
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
return (function (){var or__4251__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__33541 = x__4895__auto__;
return goog.typeOf(G__33541);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__33545 = x__4895__auto__;
return goog.typeOf(G__33545);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33551 = x__4895__auto__;
return goog.typeOf(G__33551);
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
return (function (){var or__4251__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__33553 = x__4895__auto__;
return goog.typeOf(G__33553);
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
var mults = (function (){var G__33692 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33692) : cljs.core.atom.call(null,G__33692));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33694 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33694) : cljs.core.deref.call(null,G__33694));
})(),topic);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4251__auto__,mults){
return (function (p1__33554_SHARP_){
if(cljs.core.truth_((function (){var G__33695 = topic;
return (p1__33554_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33554_SHARP_.cljs$core$IFn$_invoke$arity$1(G__33695) : p1__33554_SHARP_.call(null,G__33695));
})())){
return p1__33554_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33554_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__33696 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__33696) : buf_fn.call(null,G__33696));
})())));
}
});})(or__4251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33697 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33698){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33698 = meta33698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33697.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33697.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__33700 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__33700) : self__.ensure_mult.call(null,G__33700));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33697.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33701 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33701) : cljs.core.deref.call(null,G__33701));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33697.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__33702 = self__.mults;
var G__33703 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33702,G__33703) : cljs.core.reset_BANG_.call(null,G__33702,G__33703));
});})(mults,ensure_mult))
;

cljs.core.async.t33697.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33697.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33699){
var self__ = this;
var _33699__$1 = this;
return self__.meta33698;
});})(mults,ensure_mult))
;

cljs.core.async.t33697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33699,meta33698__$1){
var self__ = this;
var _33699__$1 = this;
return (new cljs.core.async.t33697(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33698__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33697.cljs$lang$type = true;

cljs.core.async.t33697.cljs$lang$ctorStr = "cljs.core.async/t33697";

cljs.core.async.t33697.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t33697");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33697 = ((function (mults,ensure_mult){
return (function __GT_t33697(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33698){
return (new cljs.core.async.t33697(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33698));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33697(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,65,cljs.core.constant$keyword$9,603,cljs.core.constant$keyword$10,14,cljs.core.constant$keyword$11,591,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16627__auto___33826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___33826,mults,ensure_mult,p){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___33826,mults,ensure_mult,p){
return (function (state_33775){
var state_val_33776 = (state_33775[(1)]);
if((state_val_33776 === (7))){
var inst_33771 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33777_33827 = state_33775__$1;
(statearr_33777_33827[(2)] = inst_33771);

(statearr_33777_33827[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (20))){
var state_33775__$1 = state_33775;
var statearr_33778_33828 = state_33775__$1;
(statearr_33778_33828[(2)] = null);

(statearr_33778_33828[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (1))){
var state_33775__$1 = state_33775;
var statearr_33779_33829 = state_33775__$1;
(statearr_33779_33829[(2)] = null);

(statearr_33779_33829[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (24))){
var inst_33754 = (state_33775[(7)]);
var inst_33763 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33754);
var state_33775__$1 = state_33775;
var statearr_33780_33830 = state_33775__$1;
(statearr_33780_33830[(2)] = inst_33763);

(statearr_33780_33830[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (4))){
var inst_33706 = (state_33775[(8)]);
var inst_33706__$1 = (state_33775[(2)]);
var inst_33707 = (inst_33706__$1 == null);
var state_33775__$1 = (function (){var statearr_33781 = state_33775;
(statearr_33781[(8)] = inst_33706__$1);

return statearr_33781;
})();
if(cljs.core.truth_(inst_33707)){
var statearr_33782_33831 = state_33775__$1;
(statearr_33782_33831[(1)] = (5));

} else {
var statearr_33783_33832 = state_33775__$1;
(statearr_33783_33832[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (15))){
var inst_33748 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33784_33833 = state_33775__$1;
(statearr_33784_33833[(2)] = inst_33748);

(statearr_33784_33833[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (21))){
var inst_33768 = (state_33775[(2)]);
var state_33775__$1 = (function (){var statearr_33785 = state_33775;
(statearr_33785[(9)] = inst_33768);

return statearr_33785;
})();
var statearr_33786_33834 = state_33775__$1;
(statearr_33786_33834[(2)] = null);

(statearr_33786_33834[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (13))){
var inst_33730 = (state_33775[(10)]);
var inst_33732 = cljs.core.chunked_seq_QMARK_(inst_33730);
var state_33775__$1 = state_33775;
if(inst_33732){
var statearr_33787_33835 = state_33775__$1;
(statearr_33787_33835[(1)] = (16));

} else {
var statearr_33788_33836 = state_33775__$1;
(statearr_33788_33836[(1)] = (17));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (22))){
var inst_33760 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33760)){
var statearr_33789_33837 = state_33775__$1;
(statearr_33789_33837[(1)] = (23));

} else {
var statearr_33790_33838 = state_33775__$1;
(statearr_33790_33838[(1)] = (24));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (6))){
var inst_33754 = (state_33775[(7)]);
var inst_33756 = (state_33775[(11)]);
var inst_33706 = (state_33775[(8)]);
var inst_33754__$1 = (function (){var G__33791 = inst_33706;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__33791) : topic_fn.call(null,G__33791));
})();
var inst_33755 = (function (){var G__33792 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33792) : cljs.core.deref.call(null,G__33792));
})();
var inst_33756__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33755,inst_33754__$1);
var state_33775__$1 = (function (){var statearr_33793 = state_33775;
(statearr_33793[(7)] = inst_33754__$1);

(statearr_33793[(11)] = inst_33756__$1);

return statearr_33793;
})();
if(cljs.core.truth_(inst_33756__$1)){
var statearr_33794_33839 = state_33775__$1;
(statearr_33794_33839[(1)] = (19));

} else {
var statearr_33795_33840 = state_33775__$1;
(statearr_33795_33840[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (25))){
var inst_33765 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33796_33841 = state_33775__$1;
(statearr_33796_33841[(2)] = inst_33765);

(statearr_33796_33841[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (17))){
var inst_33730 = (state_33775[(10)]);
var inst_33739 = cljs.core.first(inst_33730);
var inst_33740 = cljs.core.async.muxch_STAR_(inst_33739);
var inst_33741 = cljs.core.async.close_BANG_(inst_33740);
var inst_33742 = cljs.core.next(inst_33730);
var inst_33716 = inst_33742;
var inst_33717 = null;
var inst_33718 = (0);
var inst_33719 = (0);
var state_33775__$1 = (function (){var statearr_33797 = state_33775;
(statearr_33797[(12)] = inst_33719);

(statearr_33797[(13)] = inst_33716);

(statearr_33797[(14)] = inst_33741);

(statearr_33797[(15)] = inst_33717);

(statearr_33797[(16)] = inst_33718);

return statearr_33797;
})();
var statearr_33798_33842 = state_33775__$1;
(statearr_33798_33842[(2)] = null);

(statearr_33798_33842[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (3))){
var inst_33773 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33775__$1,inst_33773);
} else {
if((state_val_33776 === (12))){
var inst_33750 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33799_33843 = state_33775__$1;
(statearr_33799_33843[(2)] = inst_33750);

(statearr_33799_33843[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (2))){
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33775__$1,(4),ch);
} else {
if((state_val_33776 === (23))){
var state_33775__$1 = state_33775;
var statearr_33800_33844 = state_33775__$1;
(statearr_33800_33844[(2)] = null);

(statearr_33800_33844[(1)] = (25));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (19))){
var inst_33756 = (state_33775[(11)]);
var inst_33706 = (state_33775[(8)]);
var inst_33758 = cljs.core.async.muxch_STAR_(inst_33756);
var state_33775__$1 = state_33775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33775__$1,(22),inst_33758,inst_33706);
} else {
if((state_val_33776 === (11))){
var inst_33716 = (state_33775[(13)]);
var inst_33730 = (state_33775[(10)]);
var inst_33730__$1 = cljs.core.seq(inst_33716);
var state_33775__$1 = (function (){var statearr_33801 = state_33775;
(statearr_33801[(10)] = inst_33730__$1);

return statearr_33801;
})();
if(inst_33730__$1){
var statearr_33802_33845 = state_33775__$1;
(statearr_33802_33845[(1)] = (13));

} else {
var statearr_33803_33846 = state_33775__$1;
(statearr_33803_33846[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (9))){
var inst_33752 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33804_33847 = state_33775__$1;
(statearr_33804_33847[(2)] = inst_33752);

(statearr_33804_33847[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (5))){
var inst_33713 = (function (){var G__33805 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33805) : cljs.core.deref.call(null,G__33805));
})();
var inst_33714 = cljs.core.vals(inst_33713);
var inst_33715 = cljs.core.seq(inst_33714);
var inst_33716 = inst_33715;
var inst_33717 = null;
var inst_33718 = (0);
var inst_33719 = (0);
var state_33775__$1 = (function (){var statearr_33806 = state_33775;
(statearr_33806[(12)] = inst_33719);

(statearr_33806[(13)] = inst_33716);

(statearr_33806[(15)] = inst_33717);

(statearr_33806[(16)] = inst_33718);

return statearr_33806;
})();
var statearr_33807_33848 = state_33775__$1;
(statearr_33807_33848[(2)] = null);

(statearr_33807_33848[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (14))){
var state_33775__$1 = state_33775;
var statearr_33811_33849 = state_33775__$1;
(statearr_33811_33849[(2)] = null);

(statearr_33811_33849[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (16))){
var inst_33730 = (state_33775[(10)]);
var inst_33734 = cljs.core.chunk_first(inst_33730);
var inst_33735 = cljs.core.chunk_rest(inst_33730);
var inst_33736 = cljs.core.count(inst_33734);
var inst_33716 = inst_33735;
var inst_33717 = inst_33734;
var inst_33718 = inst_33736;
var inst_33719 = (0);
var state_33775__$1 = (function (){var statearr_33812 = state_33775;
(statearr_33812[(12)] = inst_33719);

(statearr_33812[(13)] = inst_33716);

(statearr_33812[(15)] = inst_33717);

(statearr_33812[(16)] = inst_33718);

return statearr_33812;
})();
var statearr_33813_33850 = state_33775__$1;
(statearr_33813_33850[(2)] = null);

(statearr_33813_33850[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (10))){
var inst_33719 = (state_33775[(12)]);
var inst_33716 = (state_33775[(13)]);
var inst_33717 = (state_33775[(15)]);
var inst_33718 = (state_33775[(16)]);
var inst_33724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33717,inst_33719);
var inst_33725 = cljs.core.async.muxch_STAR_(inst_33724);
var inst_33726 = cljs.core.async.close_BANG_(inst_33725);
var inst_33727 = (inst_33719 + (1));
var tmp33808 = inst_33716;
var tmp33809 = inst_33717;
var tmp33810 = inst_33718;
var inst_33716__$1 = tmp33808;
var inst_33717__$1 = tmp33809;
var inst_33718__$1 = tmp33810;
var inst_33719__$1 = inst_33727;
var state_33775__$1 = (function (){var statearr_33814 = state_33775;
(statearr_33814[(12)] = inst_33719__$1);

(statearr_33814[(13)] = inst_33716__$1);

(statearr_33814[(17)] = inst_33726);

(statearr_33814[(15)] = inst_33717__$1);

(statearr_33814[(16)] = inst_33718__$1);

return statearr_33814;
})();
var statearr_33815_33851 = state_33775__$1;
(statearr_33815_33851[(2)] = null);

(statearr_33815_33851[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (18))){
var inst_33745 = (state_33775[(2)]);
var state_33775__$1 = state_33775;
var statearr_33816_33852 = state_33775__$1;
(statearr_33816_33852[(2)] = inst_33745);

(statearr_33816_33852[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33776 === (8))){
var inst_33719 = (state_33775[(12)]);
var inst_33718 = (state_33775[(16)]);
var inst_33721 = (inst_33719 < inst_33718);
var inst_33722 = inst_33721;
var state_33775__$1 = state_33775;
if(cljs.core.truth_(inst_33722)){
var statearr_33817_33853 = state_33775__$1;
(statearr_33817_33853[(1)] = (10));

} else {
var statearr_33818_33854 = state_33775__$1;
(statearr_33818_33854[(1)] = (11));

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
});})(c__16627__auto___33826,mults,ensure_mult,p))
;
return ((function (switch__16547__auto__,c__16627__auto___33826,mults,ensure_mult,p){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_33822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33822[(0)] = state_machine__16548__auto__);

(statearr_33822[(1)] = (1));

return statearr_33822;
});
var state_machine__16548__auto____1 = (function (state_33775){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33775);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e33823){if((e33823 instanceof Object)){
var ex__16551__auto__ = e33823;
var statearr_33824_33855 = state_33775;
(statearr_33824_33855[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33775);

return cljs.core.constant$keyword$99;
} else {
throw e33823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__33856 = state_33775;
state_33775 = G__33856;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33775){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___33826,mults,ensure_mult,p))
})();
var state__16629__auto__ = (function (){var statearr_33825 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_33825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___33826);

return statearr_33825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___33826,mults,ensure_mult,p))
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
var dctr = (function (){var G__33937 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33937) : cljs.core.atom.call(null,G__33937));
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
var c__16627__auto___34010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33976){
var state_val_33977 = (state_33976[(1)]);
if((state_val_33977 === (7))){
var state_33976__$1 = state_33976;
var statearr_33978_34011 = state_33976__$1;
(statearr_33978_34011[(2)] = null);

(statearr_33978_34011[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (1))){
var state_33976__$1 = state_33976;
var statearr_33979_34012 = state_33976__$1;
(statearr_33979_34012[(2)] = null);

(statearr_33979_34012[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (4))){
var inst_33940 = (state_33976[(7)]);
var inst_33942 = (inst_33940 < cnt);
var state_33976__$1 = state_33976;
if(cljs.core.truth_(inst_33942)){
var statearr_33980_34013 = state_33976__$1;
(statearr_33980_34013[(1)] = (6));

} else {
var statearr_33981_34014 = state_33976__$1;
(statearr_33981_34014[(1)] = (7));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (15))){
var inst_33972 = (state_33976[(2)]);
var state_33976__$1 = state_33976;
var statearr_33982_34015 = state_33976__$1;
(statearr_33982_34015[(2)] = inst_33972);

(statearr_33982_34015[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (13))){
var inst_33965 = cljs.core.async.close_BANG_(out);
var state_33976__$1 = state_33976;
var statearr_33983_34016 = state_33976__$1;
(statearr_33983_34016[(2)] = inst_33965);

(statearr_33983_34016[(1)] = (15));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (6))){
var state_33976__$1 = state_33976;
var statearr_33984_34017 = state_33976__$1;
(statearr_33984_34017[(2)] = null);

(statearr_33984_34017[(1)] = (11));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (3))){
var inst_33974 = (state_33976[(2)]);
var state_33976__$1 = state_33976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33976__$1,inst_33974);
} else {
if((state_val_33977 === (12))){
var inst_33962 = (state_33976[(8)]);
var inst_33962__$1 = (state_33976[(2)]);
var inst_33963 = cljs.core.some(cljs.core.nil_QMARK_,inst_33962__$1);
var state_33976__$1 = (function (){var statearr_33985 = state_33976;
(statearr_33985[(8)] = inst_33962__$1);

return statearr_33985;
})();
if(cljs.core.truth_(inst_33963)){
var statearr_33986_34018 = state_33976__$1;
(statearr_33986_34018[(1)] = (13));

} else {
var statearr_33987_34019 = state_33976__$1;
(statearr_33987_34019[(1)] = (14));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (2))){
var inst_33939 = (function (){var G__33988 = dctr;
var G__33989 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__33988,G__33989) : cljs.core.reset_BANG_.call(null,G__33988,G__33989));
})();
var inst_33940 = (0);
var state_33976__$1 = (function (){var statearr_33990 = state_33976;
(statearr_33990[(7)] = inst_33940);

(statearr_33990[(9)] = inst_33939);

return statearr_33990;
})();
var statearr_33991_34020 = state_33976__$1;
(statearr_33991_34020[(2)] = null);

(statearr_33991_34020[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (11))){
var inst_33940 = (state_33976[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33976,(10),Object,null,(9));
var inst_33949 = (function (){var G__33992 = inst_33940;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__33992) : chs__$1.call(null,G__33992));
})();
var inst_33950 = (function (){var G__33993 = inst_33940;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33993) : done.call(null,G__33993));
})();
var inst_33951 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33949,inst_33950);
var state_33976__$1 = state_33976;
var statearr_33994_34021 = state_33976__$1;
(statearr_33994_34021[(2)] = inst_33951);


cljs.core.async.impl.ioc_helpers.process_exception(state_33976__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (9))){
var inst_33940 = (state_33976[(7)]);
var inst_33953 = (state_33976[(2)]);
var inst_33954 = (inst_33940 + (1));
var inst_33940__$1 = inst_33954;
var state_33976__$1 = (function (){var statearr_33995 = state_33976;
(statearr_33995[(7)] = inst_33940__$1);

(statearr_33995[(10)] = inst_33953);

return statearr_33995;
})();
var statearr_33996_34022 = state_33976__$1;
(statearr_33996_34022[(2)] = null);

(statearr_33996_34022[(1)] = (4));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (5))){
var inst_33960 = (state_33976[(2)]);
var state_33976__$1 = (function (){var statearr_33997 = state_33976;
(statearr_33997[(11)] = inst_33960);

return statearr_33997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33976__$1,(12),dchan);
} else {
if((state_val_33977 === (14))){
var inst_33962 = (state_33976[(8)]);
var inst_33967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33962);
var state_33976__$1 = state_33976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33976__$1,(16),out,inst_33967);
} else {
if((state_val_33977 === (16))){
var inst_33969 = (state_33976[(2)]);
var state_33976__$1 = (function (){var statearr_33998 = state_33976;
(statearr_33998[(12)] = inst_33969);

return statearr_33998;
})();
var statearr_33999_34023 = state_33976__$1;
(statearr_33999_34023[(2)] = null);

(statearr_33999_34023[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (10))){
var inst_33944 = (state_33976[(2)]);
var inst_33945 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33976__$1 = (function (){var statearr_34000 = state_33976;
(statearr_34000[(13)] = inst_33944);

return statearr_34000;
})();
var statearr_34001_34024 = state_33976__$1;
(statearr_34001_34024[(2)] = inst_33945);


cljs.core.async.impl.ioc_helpers.process_exception(state_33976__$1);

return cljs.core.constant$keyword$99;
} else {
if((state_val_33977 === (8))){
var inst_33958 = (state_33976[(2)]);
var state_33976__$1 = state_33976;
var statearr_34002_34025 = state_33976__$1;
(statearr_34002_34025[(2)] = inst_33958);

(statearr_34002_34025[(1)] = (5));


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
});})(c__16627__auto___34010,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16547__auto__,c__16627__auto___34010,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34006[(0)] = state_machine__16548__auto__);

(statearr_34006[(1)] = (1));

return statearr_34006;
});
var state_machine__16548__auto____1 = (function (state_33976){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_33976);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34007){if((e34007 instanceof Object)){
var ex__16551__auto__ = e34007;
var statearr_34008_34026 = state_33976;
(statearr_34008_34026[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33976);

return cljs.core.constant$keyword$99;
} else {
throw e34007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34027 = state_33976;
state_33976 = G__34027;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_33976){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_33976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34010,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16629__auto__ = (function (){var statearr_34009 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34010);

return statearr_34009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34010,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__16627__auto___34137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34137,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34137,out){
return (function (state_34113){
var state_val_34114 = (state_34113[(1)]);
if((state_val_34114 === (7))){
var inst_34092 = (state_34113[(7)]);
var inst_34093 = (state_34113[(8)]);
var inst_34092__$1 = (state_34113[(2)]);
var inst_34093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34092__$1,(0),null);
var inst_34094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34092__$1,(1),null);
var inst_34095 = (inst_34093__$1 == null);
var state_34113__$1 = (function (){var statearr_34115 = state_34113;
(statearr_34115[(9)] = inst_34094);

(statearr_34115[(7)] = inst_34092__$1);

(statearr_34115[(8)] = inst_34093__$1);

return statearr_34115;
})();
if(cljs.core.truth_(inst_34095)){
var statearr_34116_34138 = state_34113__$1;
(statearr_34116_34138[(1)] = (8));

} else {
var statearr_34117_34139 = state_34113__$1;
(statearr_34117_34139[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (1))){
var inst_34084 = cljs.core.vec(chs);
var inst_34085 = inst_34084;
var state_34113__$1 = (function (){var statearr_34118 = state_34113;
(statearr_34118[(10)] = inst_34085);

return statearr_34118;
})();
var statearr_34119_34140 = state_34113__$1;
(statearr_34119_34140[(2)] = null);

(statearr_34119_34140[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (4))){
var inst_34085 = (state_34113[(10)]);
var state_34113__$1 = state_34113;
return cljs.core.async.ioc_alts_BANG_(state_34113__$1,(7),inst_34085);
} else {
if((state_val_34114 === (6))){
var inst_34109 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34120_34141 = state_34113__$1;
(statearr_34120_34141[(2)] = inst_34109);

(statearr_34120_34141[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (3))){
var inst_34111 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34113__$1,inst_34111);
} else {
if((state_val_34114 === (2))){
var inst_34085 = (state_34113[(10)]);
var inst_34087 = cljs.core.count(inst_34085);
var inst_34088 = (inst_34087 > (0));
var state_34113__$1 = state_34113;
if(cljs.core.truth_(inst_34088)){
var statearr_34122_34142 = state_34113__$1;
(statearr_34122_34142[(1)] = (4));

} else {
var statearr_34123_34143 = state_34113__$1;
(statearr_34123_34143[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (11))){
var inst_34085 = (state_34113[(10)]);
var inst_34102 = (state_34113[(2)]);
var tmp34121 = inst_34085;
var inst_34085__$1 = tmp34121;
var state_34113__$1 = (function (){var statearr_34124 = state_34113;
(statearr_34124[(10)] = inst_34085__$1);

(statearr_34124[(11)] = inst_34102);

return statearr_34124;
})();
var statearr_34125_34144 = state_34113__$1;
(statearr_34125_34144[(2)] = null);

(statearr_34125_34144[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (9))){
var inst_34093 = (state_34113[(8)]);
var state_34113__$1 = state_34113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34113__$1,(11),out,inst_34093);
} else {
if((state_val_34114 === (5))){
var inst_34107 = cljs.core.async.close_BANG_(out);
var state_34113__$1 = state_34113;
var statearr_34126_34145 = state_34113__$1;
(statearr_34126_34145[(2)] = inst_34107);

(statearr_34126_34145[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (10))){
var inst_34105 = (state_34113[(2)]);
var state_34113__$1 = state_34113;
var statearr_34127_34146 = state_34113__$1;
(statearr_34127_34146[(2)] = inst_34105);

(statearr_34127_34146[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34114 === (8))){
var inst_34094 = (state_34113[(9)]);
var inst_34092 = (state_34113[(7)]);
var inst_34093 = (state_34113[(8)]);
var inst_34085 = (state_34113[(10)]);
var inst_34097 = (function (){var c = inst_34094;
var v = inst_34093;
var vec__34090 = inst_34092;
var cs = inst_34085;
return ((function (c,v,vec__34090,cs,inst_34094,inst_34092,inst_34093,inst_34085,state_val_34114,c__16627__auto___34137,out){
return (function (p1__34028_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34028_SHARP_);
});
;})(c,v,vec__34090,cs,inst_34094,inst_34092,inst_34093,inst_34085,state_val_34114,c__16627__auto___34137,out))
})();
var inst_34098 = cljs.core.filterv(inst_34097,inst_34085);
var inst_34085__$1 = inst_34098;
var state_34113__$1 = (function (){var statearr_34128 = state_34113;
(statearr_34128[(10)] = inst_34085__$1);

return statearr_34128;
})();
var statearr_34129_34147 = state_34113__$1;
(statearr_34129_34147[(2)] = null);

(statearr_34129_34147[(1)] = (2));


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
});})(c__16627__auto___34137,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34137,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34133[(0)] = state_machine__16548__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var state_machine__16548__auto____1 = (function (state_34113){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34113);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34134){if((e34134 instanceof Object)){
var ex__16551__auto__ = e34134;
var statearr_34135_34148 = state_34113;
(statearr_34135_34148[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34113);

return cljs.core.constant$keyword$99;
} else {
throw e34134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34149 = state_34113;
state_34113 = G__34149;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34113){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34137,out))
})();
var state__16629__auto__ = (function (){var statearr_34136 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34137);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34137,out))
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
var c__16627__auto___34245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34245,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34245,out){
return (function (state_34222){
var state_val_34223 = (state_34222[(1)]);
if((state_val_34223 === (7))){
var inst_34204 = (state_34222[(7)]);
var inst_34204__$1 = (state_34222[(2)]);
var inst_34205 = (inst_34204__$1 == null);
var inst_34206 = cljs.core.not(inst_34205);
var state_34222__$1 = (function (){var statearr_34224 = state_34222;
(statearr_34224[(7)] = inst_34204__$1);

return statearr_34224;
})();
if(inst_34206){
var statearr_34225_34246 = state_34222__$1;
(statearr_34225_34246[(1)] = (8));

} else {
var statearr_34226_34247 = state_34222__$1;
(statearr_34226_34247[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (1))){
var inst_34199 = (0);
var state_34222__$1 = (function (){var statearr_34227 = state_34222;
(statearr_34227[(8)] = inst_34199);

return statearr_34227;
})();
var statearr_34228_34248 = state_34222__$1;
(statearr_34228_34248[(2)] = null);

(statearr_34228_34248[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (4))){
var state_34222__$1 = state_34222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34222__$1,(7),ch);
} else {
if((state_val_34223 === (6))){
var inst_34217 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34229_34249 = state_34222__$1;
(statearr_34229_34249[(2)] = inst_34217);

(statearr_34229_34249[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (3))){
var inst_34219 = (state_34222[(2)]);
var inst_34220 = cljs.core.async.close_BANG_(out);
var state_34222__$1 = (function (){var statearr_34230 = state_34222;
(statearr_34230[(9)] = inst_34219);

return statearr_34230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34222__$1,inst_34220);
} else {
if((state_val_34223 === (2))){
var inst_34199 = (state_34222[(8)]);
var inst_34201 = (inst_34199 < n);
var state_34222__$1 = state_34222;
if(cljs.core.truth_(inst_34201)){
var statearr_34231_34250 = state_34222__$1;
(statearr_34231_34250[(1)] = (4));

} else {
var statearr_34232_34251 = state_34222__$1;
(statearr_34232_34251[(1)] = (5));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (11))){
var inst_34199 = (state_34222[(8)]);
var inst_34209 = (state_34222[(2)]);
var inst_34210 = (inst_34199 + (1));
var inst_34199__$1 = inst_34210;
var state_34222__$1 = (function (){var statearr_34233 = state_34222;
(statearr_34233[(8)] = inst_34199__$1);

(statearr_34233[(10)] = inst_34209);

return statearr_34233;
})();
var statearr_34234_34252 = state_34222__$1;
(statearr_34234_34252[(2)] = null);

(statearr_34234_34252[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (9))){
var state_34222__$1 = state_34222;
var statearr_34235_34253 = state_34222__$1;
(statearr_34235_34253[(2)] = null);

(statearr_34235_34253[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (5))){
var state_34222__$1 = state_34222;
var statearr_34236_34254 = state_34222__$1;
(statearr_34236_34254[(2)] = null);

(statearr_34236_34254[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (10))){
var inst_34214 = (state_34222[(2)]);
var state_34222__$1 = state_34222;
var statearr_34237_34255 = state_34222__$1;
(statearr_34237_34255[(2)] = inst_34214);

(statearr_34237_34255[(1)] = (6));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34223 === (8))){
var inst_34204 = (state_34222[(7)]);
var state_34222__$1 = state_34222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34222__$1,(11),out,inst_34204);
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
});})(c__16627__auto___34245,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34245,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34241[(0)] = state_machine__16548__auto__);

(statearr_34241[(1)] = (1));

return statearr_34241;
});
var state_machine__16548__auto____1 = (function (state_34222){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34222);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34242){if((e34242 instanceof Object)){
var ex__16551__auto__ = e34242;
var statearr_34243_34256 = state_34222;
(statearr_34243_34256[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34222);

return cljs.core.constant$keyword$99;
} else {
throw e34242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34257 = state_34222;
state_34222 = G__34257;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34222){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34245,out))
})();
var state__16629__auto__ = (function (){var statearr_34244 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34245);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34245,out))
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
if(typeof cljs.core.async.t34270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34270 = (function (ch,f,map_LT_,meta34271){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34271 = meta34271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t34273 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34273 = (function (fn1,_,meta34271,map_LT_,f,ch,meta34274){
this.fn1 = fn1;
this._ = _;
this.meta34271 = meta34271;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34274 = meta34274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t34273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34258_SHARP_){
var G__34276 = (((p1__34258_SHARP_ == null))?null:(function (){var G__34277 = p1__34258_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34277) : self__.f.call(null,G__34277));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34276) : f1.call(null,G__34276));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34275){
var self__ = this;
var _34275__$1 = this;
return self__.meta34274;
});})(___$1))
;

cljs.core.async.t34273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34275,meta34274__$1){
var self__ = this;
var _34275__$1 = this;
return (new cljs.core.async.t34273(self__.fn1,self__._,self__.meta34271,self__.map_LT_,self__.f,self__.ch,meta34274__$1));
});})(___$1))
;

cljs.core.async.t34273.cljs$lang$type = true;

cljs.core.async.t34273.cljs$lang$ctorStr = "cljs.core.async/t34273";

cljs.core.async.t34273.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34273");
});})(___$1))
;

cljs.core.async.__GT_t34273 = ((function (___$1){
return (function __GT_t34273(fn1__$1,___$2,meta34271__$1,map_LT___$1,f__$1,ch__$1,meta34274){
return (new cljs.core.async.t34273(fn1__$1,___$2,meta34271__$1,map_LT___$1,f__$1,ch__$1,meta34274));
});})(___$1))
;

}

return (new cljs.core.async.t34273(fn1,___$1,self__.meta34271,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,737,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,731,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__4239__auto__ = ret;
if(cljs.core.truth_(and__4239__auto__)){
return !(((function (){var G__34278 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34278) : cljs.core.deref.call(null,G__34278));
})() == null));
} else {
return and__4239__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34279 = (function (){var G__34280 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34280) : cljs.core.deref.call(null,G__34280));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34279) : self__.f.call(null,G__34279));
})());
} else {
return ret;
}
});

cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t34270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34272){
var self__ = this;
var _34272__$1 = this;
return self__.meta34271;
});

cljs.core.async.t34270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34272,meta34271__$1){
var self__ = this;
var _34272__$1 = this;
return (new cljs.core.async.t34270(self__.ch,self__.f,self__.map_LT_,meta34271__$1));
});

cljs.core.async.t34270.cljs$lang$type = true;

cljs.core.async.t34270.cljs$lang$ctorStr = "cljs.core.async/t34270";

cljs.core.async.t34270.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34270");
});

cljs.core.async.__GT_t34270 = (function __GT_t34270(ch__$1,f__$1,map_LT___$1,meta34271){
return (new cljs.core.async.t34270(ch__$1,f__$1,map_LT___$1,meta34271));
});

}

return (new cljs.core.async.t34270(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,46,cljs.core.constant$keyword$9,743,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,722,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t34285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34285 = (function (ch,f,map_GT_,meta34286){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34286 = meta34286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__34288 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34288) : self__.f.call(null,G__34288));
})(),fn1);
});

cljs.core.async.t34285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t34285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34287){
var self__ = this;
var _34287__$1 = this;
return self__.meta34286;
});

cljs.core.async.t34285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34287,meta34286__$1){
var self__ = this;
var _34287__$1 = this;
return (new cljs.core.async.t34285(self__.ch,self__.f,self__.map_GT_,meta34286__$1));
});

cljs.core.async.t34285.cljs$lang$type = true;

cljs.core.async.t34285.cljs$lang$ctorStr = "cljs.core.async/t34285";

cljs.core.async.t34285.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34285");
});

cljs.core.async.__GT_t34285 = (function __GT_t34285(ch__$1,f__$1,map_GT___$1,meta34286){
return (new cljs.core.async.t34285(ch__$1,f__$1,map_GT___$1,meta34286));
});

}

return (new cljs.core.async.t34285(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,34,cljs.core.constant$keyword$9,757,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,748,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t34293 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34293 = (function (ch,p,filter_GT_,meta34294){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34294 = meta34294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__34296 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__34296) : self__.p.call(null,G__34296));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t34293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t34293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34295){
var self__ = this;
var _34295__$1 = this;
return self__.meta34294;
});

cljs.core.async.t34293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34295,meta34294__$1){
var self__ = this;
var _34295__$1 = this;
return (new cljs.core.async.t34293(self__.ch,self__.p,self__.filter_GT_,meta34294__$1));
});

cljs.core.async.t34293.cljs$lang$type = true;

cljs.core.async.t34293.cljs$lang$ctorStr = "cljs.core.async/t34293";

cljs.core.async.t34293.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"cljs.core.async/t34293");
});

cljs.core.async.__GT_t34293 = (function __GT_t34293(ch__$1,p__$1,filter_GT___$1,meta34294){
return (new cljs.core.async.t34293(ch__$1,p__$1,filter_GT___$1,meta34294));
});

}

return (new cljs.core.async.t34293(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,48,cljs.core.constant$keyword$9,774,cljs.core.constant$keyword$10,3,cljs.core.constant$keyword$11,762,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16627__auto___34384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34384,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34384,out){
return (function (state_34362){
var state_val_34363 = (state_34362[(1)]);
if((state_val_34363 === (7))){
var inst_34358 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34364_34385 = state_34362__$1;
(statearr_34364_34385[(2)] = inst_34358);

(statearr_34364_34385[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (1))){
var state_34362__$1 = state_34362;
var statearr_34365_34386 = state_34362__$1;
(statearr_34365_34386[(2)] = null);

(statearr_34365_34386[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (4))){
var inst_34344 = (state_34362[(7)]);
var inst_34344__$1 = (state_34362[(2)]);
var inst_34345 = (inst_34344__$1 == null);
var state_34362__$1 = (function (){var statearr_34366 = state_34362;
(statearr_34366[(7)] = inst_34344__$1);

return statearr_34366;
})();
if(cljs.core.truth_(inst_34345)){
var statearr_34367_34387 = state_34362__$1;
(statearr_34367_34387[(1)] = (5));

} else {
var statearr_34368_34388 = state_34362__$1;
(statearr_34368_34388[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (6))){
var inst_34344 = (state_34362[(7)]);
var inst_34349 = (function (){var G__34369 = inst_34344;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__34369) : p.call(null,G__34369));
})();
var state_34362__$1 = state_34362;
if(cljs.core.truth_(inst_34349)){
var statearr_34370_34389 = state_34362__$1;
(statearr_34370_34389[(1)] = (8));

} else {
var statearr_34371_34390 = state_34362__$1;
(statearr_34371_34390[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (3))){
var inst_34360 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34362__$1,inst_34360);
} else {
if((state_val_34363 === (2))){
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34362__$1,(4),ch);
} else {
if((state_val_34363 === (11))){
var inst_34352 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34372_34391 = state_34362__$1;
(statearr_34372_34391[(2)] = inst_34352);

(statearr_34372_34391[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (9))){
var state_34362__$1 = state_34362;
var statearr_34373_34392 = state_34362__$1;
(statearr_34373_34392[(2)] = null);

(statearr_34373_34392[(1)] = (10));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (5))){
var inst_34347 = cljs.core.async.close_BANG_(out);
var state_34362__$1 = state_34362;
var statearr_34374_34393 = state_34362__$1;
(statearr_34374_34393[(2)] = inst_34347);

(statearr_34374_34393[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (10))){
var inst_34355 = (state_34362[(2)]);
var state_34362__$1 = (function (){var statearr_34375 = state_34362;
(statearr_34375[(8)] = inst_34355);

return statearr_34375;
})();
var statearr_34376_34394 = state_34362__$1;
(statearr_34376_34394[(2)] = null);

(statearr_34376_34394[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34363 === (8))){
var inst_34344 = (state_34362[(7)]);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34362__$1,(11),out,inst_34344);
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
});})(c__16627__auto___34384,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34384,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = state_machine__16548__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var state_machine__16548__auto____1 = (function (state_34362){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34362);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34381){if((e34381 instanceof Object)){
var ex__16551__auto__ = e34381;
var statearr_34382_34395 = state_34362;
(statearr_34382_34395[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34362);

return cljs.core.constant$keyword$99;
} else {
throw e34381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34396 = state_34362;
state_34362 = G__34396;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34362){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34384,out))
})();
var state__16629__auto__ = (function (){var statearr_34383 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34384);

return statearr_34383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34384,out))
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
return (function (state_34566){
var state_val_34567 = (state_34566[(1)]);
if((state_val_34567 === (7))){
var inst_34562 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34568_34610 = state_34566__$1;
(statearr_34568_34610[(2)] = inst_34562);

(statearr_34568_34610[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (20))){
var inst_34532 = (state_34566[(7)]);
var inst_34543 = (state_34566[(2)]);
var inst_34544 = cljs.core.next(inst_34532);
var inst_34518 = inst_34544;
var inst_34519 = null;
var inst_34520 = (0);
var inst_34521 = (0);
var state_34566__$1 = (function (){var statearr_34569 = state_34566;
(statearr_34569[(8)] = inst_34543);

(statearr_34569[(9)] = inst_34521);

(statearr_34569[(10)] = inst_34520);

(statearr_34569[(11)] = inst_34518);

(statearr_34569[(12)] = inst_34519);

return statearr_34569;
})();
var statearr_34570_34611 = state_34566__$1;
(statearr_34570_34611[(2)] = null);

(statearr_34570_34611[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (1))){
var state_34566__$1 = state_34566;
var statearr_34571_34612 = state_34566__$1;
(statearr_34571_34612[(2)] = null);

(statearr_34571_34612[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (4))){
var inst_34507 = (state_34566[(13)]);
var inst_34507__$1 = (state_34566[(2)]);
var inst_34508 = (inst_34507__$1 == null);
var state_34566__$1 = (function (){var statearr_34572 = state_34566;
(statearr_34572[(13)] = inst_34507__$1);

return statearr_34572;
})();
if(cljs.core.truth_(inst_34508)){
var statearr_34573_34613 = state_34566__$1;
(statearr_34573_34613[(1)] = (5));

} else {
var statearr_34574_34614 = state_34566__$1;
(statearr_34574_34614[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (15))){
var state_34566__$1 = state_34566;
var statearr_34578_34615 = state_34566__$1;
(statearr_34578_34615[(2)] = null);

(statearr_34578_34615[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (21))){
var state_34566__$1 = state_34566;
var statearr_34579_34616 = state_34566__$1;
(statearr_34579_34616[(2)] = null);

(statearr_34579_34616[(1)] = (23));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (13))){
var inst_34521 = (state_34566[(9)]);
var inst_34520 = (state_34566[(10)]);
var inst_34518 = (state_34566[(11)]);
var inst_34519 = (state_34566[(12)]);
var inst_34528 = (state_34566[(2)]);
var inst_34529 = (inst_34521 + (1));
var tmp34575 = inst_34520;
var tmp34576 = inst_34518;
var tmp34577 = inst_34519;
var inst_34518__$1 = tmp34576;
var inst_34519__$1 = tmp34577;
var inst_34520__$1 = tmp34575;
var inst_34521__$1 = inst_34529;
var state_34566__$1 = (function (){var statearr_34580 = state_34566;
(statearr_34580[(9)] = inst_34521__$1);

(statearr_34580[(10)] = inst_34520__$1);

(statearr_34580[(14)] = inst_34528);

(statearr_34580[(11)] = inst_34518__$1);

(statearr_34580[(12)] = inst_34519__$1);

return statearr_34580;
})();
var statearr_34581_34617 = state_34566__$1;
(statearr_34581_34617[(2)] = null);

(statearr_34581_34617[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (22))){
var state_34566__$1 = state_34566;
var statearr_34582_34618 = state_34566__$1;
(statearr_34582_34618[(2)] = null);

(statearr_34582_34618[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (6))){
var inst_34507 = (state_34566[(13)]);
var inst_34516 = (function (){var G__34583 = inst_34507;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34583) : f.call(null,G__34583));
})();
var inst_34517 = cljs.core.seq(inst_34516);
var inst_34518 = inst_34517;
var inst_34519 = null;
var inst_34520 = (0);
var inst_34521 = (0);
var state_34566__$1 = (function (){var statearr_34584 = state_34566;
(statearr_34584[(9)] = inst_34521);

(statearr_34584[(10)] = inst_34520);

(statearr_34584[(11)] = inst_34518);

(statearr_34584[(12)] = inst_34519);

return statearr_34584;
})();
var statearr_34585_34619 = state_34566__$1;
(statearr_34585_34619[(2)] = null);

(statearr_34585_34619[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (17))){
var inst_34532 = (state_34566[(7)]);
var inst_34536 = cljs.core.chunk_first(inst_34532);
var inst_34537 = cljs.core.chunk_rest(inst_34532);
var inst_34538 = cljs.core.count(inst_34536);
var inst_34518 = inst_34537;
var inst_34519 = inst_34536;
var inst_34520 = inst_34538;
var inst_34521 = (0);
var state_34566__$1 = (function (){var statearr_34586 = state_34566;
(statearr_34586[(9)] = inst_34521);

(statearr_34586[(10)] = inst_34520);

(statearr_34586[(11)] = inst_34518);

(statearr_34586[(12)] = inst_34519);

return statearr_34586;
})();
var statearr_34587_34620 = state_34566__$1;
(statearr_34587_34620[(2)] = null);

(statearr_34587_34620[(1)] = (8));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (3))){
var inst_34564 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34566__$1,inst_34564);
} else {
if((state_val_34567 === (12))){
var inst_34552 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34588_34621 = state_34566__$1;
(statearr_34588_34621[(2)] = inst_34552);

(statearr_34588_34621[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (2))){
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34566__$1,(4),in$);
} else {
if((state_val_34567 === (23))){
var inst_34560 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34589_34622 = state_34566__$1;
(statearr_34589_34622[(2)] = inst_34560);

(statearr_34589_34622[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (19))){
var inst_34547 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34590_34623 = state_34566__$1;
(statearr_34590_34623[(2)] = inst_34547);

(statearr_34590_34623[(1)] = (16));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (11))){
var inst_34518 = (state_34566[(11)]);
var inst_34532 = (state_34566[(7)]);
var inst_34532__$1 = cljs.core.seq(inst_34518);
var state_34566__$1 = (function (){var statearr_34591 = state_34566;
(statearr_34591[(7)] = inst_34532__$1);

return statearr_34591;
})();
if(inst_34532__$1){
var statearr_34592_34624 = state_34566__$1;
(statearr_34592_34624[(1)] = (14));

} else {
var statearr_34593_34625 = state_34566__$1;
(statearr_34593_34625[(1)] = (15));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (9))){
var inst_34554 = (state_34566[(2)]);
var inst_34555 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34566__$1 = (function (){var statearr_34594 = state_34566;
(statearr_34594[(15)] = inst_34554);

return statearr_34594;
})();
if(cljs.core.truth_(inst_34555)){
var statearr_34595_34626 = state_34566__$1;
(statearr_34595_34626[(1)] = (21));

} else {
var statearr_34596_34627 = state_34566__$1;
(statearr_34596_34627[(1)] = (22));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (5))){
var inst_34510 = cljs.core.async.close_BANG_(out);
var state_34566__$1 = state_34566;
var statearr_34597_34628 = state_34566__$1;
(statearr_34597_34628[(2)] = inst_34510);

(statearr_34597_34628[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (14))){
var inst_34532 = (state_34566[(7)]);
var inst_34534 = cljs.core.chunked_seq_QMARK_(inst_34532);
var state_34566__$1 = state_34566;
if(inst_34534){
var statearr_34598_34629 = state_34566__$1;
(statearr_34598_34629[(1)] = (17));

} else {
var statearr_34599_34630 = state_34566__$1;
(statearr_34599_34630[(1)] = (18));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (16))){
var inst_34550 = (state_34566[(2)]);
var state_34566__$1 = state_34566;
var statearr_34600_34631 = state_34566__$1;
(statearr_34600_34631[(2)] = inst_34550);

(statearr_34600_34631[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34567 === (10))){
var inst_34521 = (state_34566[(9)]);
var inst_34519 = (state_34566[(12)]);
var inst_34526 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34519,inst_34521);
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34566__$1,(13),out,inst_34526);
} else {
if((state_val_34567 === (18))){
var inst_34532 = (state_34566[(7)]);
var inst_34541 = cljs.core.first(inst_34532);
var state_34566__$1 = state_34566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34566__$1,(20),out,inst_34541);
} else {
if((state_val_34567 === (8))){
var inst_34521 = (state_34566[(9)]);
var inst_34520 = (state_34566[(10)]);
var inst_34523 = (inst_34521 < inst_34520);
var inst_34524 = inst_34523;
var state_34566__$1 = state_34566;
if(cljs.core.truth_(inst_34524)){
var statearr_34601_34632 = state_34566__$1;
(statearr_34601_34632[(1)] = (10));

} else {
var statearr_34602_34633 = state_34566__$1;
(statearr_34602_34633[(1)] = (11));

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
var statearr_34606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34606[(0)] = state_machine__16548__auto__);

(statearr_34606[(1)] = (1));

return statearr_34606;
});
var state_machine__16548__auto____1 = (function (state_34566){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34566);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34607){if((e34607 instanceof Object)){
var ex__16551__auto__ = e34607;
var statearr_34608_34634 = state_34566;
(statearr_34608_34634[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34566);

return cljs.core.constant$keyword$99;
} else {
throw e34607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34635 = state_34566;
state_34566 = G__34635;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34566){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto__))
})();
var state__16629__auto__ = (function (){var statearr_34609 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto__);

return statearr_34609;
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
var c__16627__auto___34740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34740,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34740,out){
return (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34710 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_34741 = state_34715__$1;
(statearr_34717_34741[(2)] = inst_34710);

(statearr_34717_34741[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (1))){
var inst_34692 = null;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34692);

return statearr_34718;
})();
var statearr_34719_34742 = state_34715__$1;
(statearr_34719_34742[(2)] = null);

(statearr_34719_34742[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (4))){
var inst_34695 = (state_34715[(8)]);
var inst_34695__$1 = (state_34715[(2)]);
var inst_34696 = (inst_34695__$1 == null);
var inst_34697 = cljs.core.not(inst_34696);
var state_34715__$1 = (function (){var statearr_34720 = state_34715;
(statearr_34720[(8)] = inst_34695__$1);

return statearr_34720;
})();
if(inst_34697){
var statearr_34721_34743 = state_34715__$1;
(statearr_34721_34743[(1)] = (5));

} else {
var statearr_34722_34744 = state_34715__$1;
(statearr_34722_34744[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (6))){
var state_34715__$1 = state_34715;
var statearr_34723_34745 = state_34715__$1;
(statearr_34723_34745[(2)] = null);

(statearr_34723_34745[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (3))){
var inst_34712 = (state_34715[(2)]);
var inst_34713 = cljs.core.async.close_BANG_(out);
var state_34715__$1 = (function (){var statearr_34724 = state_34715;
(statearr_34724[(9)] = inst_34712);

return statearr_34724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34715__$1,inst_34713);
} else {
if((state_val_34716 === (2))){
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34715__$1,(4),ch);
} else {
if((state_val_34716 === (11))){
var inst_34695 = (state_34715[(8)]);
var inst_34704 = (state_34715[(2)]);
var inst_34692 = inst_34695;
var state_34715__$1 = (function (){var statearr_34725 = state_34715;
(statearr_34725[(10)] = inst_34704);

(statearr_34725[(7)] = inst_34692);

return statearr_34725;
})();
var statearr_34726_34746 = state_34715__$1;
(statearr_34726_34746[(2)] = null);

(statearr_34726_34746[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (9))){
var inst_34695 = (state_34715[(8)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34715__$1,(11),out,inst_34695);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(8)]);
var inst_34692 = (state_34715[(7)]);
var inst_34699 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34695,inst_34692);
var state_34715__$1 = state_34715;
if(inst_34699){
var statearr_34728_34747 = state_34715__$1;
(statearr_34728_34747[(1)] = (8));

} else {
var statearr_34729_34748 = state_34715__$1;
(statearr_34729_34748[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (10))){
var inst_34707 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34730_34749 = state_34715__$1;
(statearr_34730_34749[(2)] = inst_34707);

(statearr_34730_34749[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34716 === (8))){
var inst_34692 = (state_34715[(7)]);
var tmp34727 = inst_34692;
var inst_34692__$1 = tmp34727;
var state_34715__$1 = (function (){var statearr_34731 = state_34715;
(statearr_34731[(7)] = inst_34692__$1);

return statearr_34731;
})();
var statearr_34732_34750 = state_34715__$1;
(statearr_34732_34750[(2)] = null);

(statearr_34732_34750[(1)] = (2));


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
});})(c__16627__auto___34740,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34740,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34736[(0)] = state_machine__16548__auto__);

(statearr_34736[(1)] = (1));

return statearr_34736;
});
var state_machine__16548__auto____1 = (function (state_34715){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34715);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34737){if((e34737 instanceof Object)){
var ex__16551__auto__ = e34737;
var statearr_34738_34751 = state_34715;
(statearr_34738_34751[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return cljs.core.constant$keyword$99;
} else {
throw e34737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34752 = state_34715;
state_34715 = G__34752;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34740,out))
})();
var state__16629__auto__ = (function (){var statearr_34739 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34740);

return statearr_34739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34740,out))
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
var c__16627__auto___34890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___34890,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___34890,out){
return (function (state_34860){
var state_val_34861 = (state_34860[(1)]);
if((state_val_34861 === (7))){
var inst_34856 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34862_34891 = state_34860__$1;
(statearr_34862_34891[(2)] = inst_34856);

(statearr_34862_34891[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (1))){
var inst_34823 = (new Array(n));
var inst_34824 = inst_34823;
var inst_34825 = (0);
var state_34860__$1 = (function (){var statearr_34863 = state_34860;
(statearr_34863[(7)] = inst_34824);

(statearr_34863[(8)] = inst_34825);

return statearr_34863;
})();
var statearr_34864_34892 = state_34860__$1;
(statearr_34864_34892[(2)] = null);

(statearr_34864_34892[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (4))){
var inst_34828 = (state_34860[(9)]);
var inst_34828__$1 = (state_34860[(2)]);
var inst_34829 = (inst_34828__$1 == null);
var inst_34830 = cljs.core.not(inst_34829);
var state_34860__$1 = (function (){var statearr_34865 = state_34860;
(statearr_34865[(9)] = inst_34828__$1);

return statearr_34865;
})();
if(inst_34830){
var statearr_34866_34893 = state_34860__$1;
(statearr_34866_34893[(1)] = (5));

} else {
var statearr_34867_34894 = state_34860__$1;
(statearr_34867_34894[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (15))){
var inst_34850 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34868_34895 = state_34860__$1;
(statearr_34868_34895[(2)] = inst_34850);

(statearr_34868_34895[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (13))){
var state_34860__$1 = state_34860;
var statearr_34869_34896 = state_34860__$1;
(statearr_34869_34896[(2)] = null);

(statearr_34869_34896[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (6))){
var inst_34825 = (state_34860[(8)]);
var inst_34846 = (inst_34825 > (0));
var state_34860__$1 = state_34860;
if(cljs.core.truth_(inst_34846)){
var statearr_34870_34897 = state_34860__$1;
(statearr_34870_34897[(1)] = (12));

} else {
var statearr_34871_34898 = state_34860__$1;
(statearr_34871_34898[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (3))){
var inst_34858 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34860__$1,inst_34858);
} else {
if((state_val_34861 === (12))){
var inst_34824 = (state_34860[(7)]);
var inst_34848 = cljs.core.vec(inst_34824);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34860__$1,(15),out,inst_34848);
} else {
if((state_val_34861 === (2))){
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34860__$1,(4),ch);
} else {
if((state_val_34861 === (11))){
var inst_34840 = (state_34860[(2)]);
var inst_34841 = (new Array(n));
var inst_34824 = inst_34841;
var inst_34825 = (0);
var state_34860__$1 = (function (){var statearr_34872 = state_34860;
(statearr_34872[(7)] = inst_34824);

(statearr_34872[(10)] = inst_34840);

(statearr_34872[(8)] = inst_34825);

return statearr_34872;
})();
var statearr_34873_34899 = state_34860__$1;
(statearr_34873_34899[(2)] = null);

(statearr_34873_34899[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (9))){
var inst_34824 = (state_34860[(7)]);
var inst_34838 = cljs.core.vec(inst_34824);
var state_34860__$1 = state_34860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34860__$1,(11),out,inst_34838);
} else {
if((state_val_34861 === (5))){
var inst_34824 = (state_34860[(7)]);
var inst_34833 = (state_34860[(11)]);
var inst_34828 = (state_34860[(9)]);
var inst_34825 = (state_34860[(8)]);
var inst_34832 = (inst_34824[inst_34825] = inst_34828);
var inst_34833__$1 = (inst_34825 + (1));
var inst_34834 = (inst_34833__$1 < n);
var state_34860__$1 = (function (){var statearr_34874 = state_34860;
(statearr_34874[(11)] = inst_34833__$1);

(statearr_34874[(12)] = inst_34832);

return statearr_34874;
})();
if(cljs.core.truth_(inst_34834)){
var statearr_34875_34900 = state_34860__$1;
(statearr_34875_34900[(1)] = (8));

} else {
var statearr_34876_34901 = state_34860__$1;
(statearr_34876_34901[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (14))){
var inst_34853 = (state_34860[(2)]);
var inst_34854 = cljs.core.async.close_BANG_(out);
var state_34860__$1 = (function (){var statearr_34878 = state_34860;
(statearr_34878[(13)] = inst_34853);

return statearr_34878;
})();
var statearr_34879_34902 = state_34860__$1;
(statearr_34879_34902[(2)] = inst_34854);

(statearr_34879_34902[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (10))){
var inst_34844 = (state_34860[(2)]);
var state_34860__$1 = state_34860;
var statearr_34880_34903 = state_34860__$1;
(statearr_34880_34903[(2)] = inst_34844);

(statearr_34880_34903[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_34861 === (8))){
var inst_34824 = (state_34860[(7)]);
var inst_34833 = (state_34860[(11)]);
var tmp34877 = inst_34824;
var inst_34824__$1 = tmp34877;
var inst_34825 = inst_34833;
var state_34860__$1 = (function (){var statearr_34881 = state_34860;
(statearr_34881[(7)] = inst_34824__$1);

(statearr_34881[(8)] = inst_34825);

return statearr_34881;
})();
var statearr_34882_34904 = state_34860__$1;
(statearr_34882_34904[(2)] = null);

(statearr_34882_34904[(1)] = (2));


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
});})(c__16627__auto___34890,out))
;
return ((function (switch__16547__auto__,c__16627__auto___34890,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_34886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34886[(0)] = state_machine__16548__auto__);

(statearr_34886[(1)] = (1));

return statearr_34886;
});
var state_machine__16548__auto____1 = (function (state_34860){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_34860);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e34887){if((e34887 instanceof Object)){
var ex__16551__auto__ = e34887;
var statearr_34888_34905 = state_34860;
(statearr_34888_34905[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34860);

return cljs.core.constant$keyword$99;
} else {
throw e34887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__34906 = state_34860;
state_34860 = G__34906;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_34860){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_34860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___34890,out))
})();
var state__16629__auto__ = (function (){var statearr_34889 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_34889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___34890);

return statearr_34889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___34890,out))
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
var c__16627__auto___35054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16627__auto___35054,out){
return (function (){
var f__16628__auto__ = (function (){var switch__16547__auto__ = ((function (c__16627__auto___35054,out){
return (function (state_35023){
var state_val_35024 = (state_35023[(1)]);
if((state_val_35024 === (7))){
var inst_35019 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35025_35055 = state_35023__$1;
(statearr_35025_35055[(2)] = inst_35019);

(statearr_35025_35055[(1)] = (3));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (1))){
var inst_34982 = [];
var inst_34983 = inst_34982;
var inst_34984 = cljs.core.constant$keyword$114;
var state_35023__$1 = (function (){var statearr_35026 = state_35023;
(statearr_35026[(7)] = inst_34983);

(statearr_35026[(8)] = inst_34984);

return statearr_35026;
})();
var statearr_35027_35056 = state_35023__$1;
(statearr_35027_35056[(2)] = null);

(statearr_35027_35056[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (4))){
var inst_34987 = (state_35023[(9)]);
var inst_34987__$1 = (state_35023[(2)]);
var inst_34988 = (inst_34987__$1 == null);
var inst_34989 = cljs.core.not(inst_34988);
var state_35023__$1 = (function (){var statearr_35028 = state_35023;
(statearr_35028[(9)] = inst_34987__$1);

return statearr_35028;
})();
if(inst_34989){
var statearr_35029_35057 = state_35023__$1;
(statearr_35029_35057[(1)] = (5));

} else {
var statearr_35030_35058 = state_35023__$1;
(statearr_35030_35058[(1)] = (6));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (15))){
var inst_35013 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35031_35059 = state_35023__$1;
(statearr_35031_35059[(2)] = inst_35013);

(statearr_35031_35059[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (13))){
var state_35023__$1 = state_35023;
var statearr_35032_35060 = state_35023__$1;
(statearr_35032_35060[(2)] = null);

(statearr_35032_35060[(1)] = (14));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (6))){
var inst_34983 = (state_35023[(7)]);
var inst_35008 = inst_34983.length;
var inst_35009 = (inst_35008 > (0));
var state_35023__$1 = state_35023;
if(cljs.core.truth_(inst_35009)){
var statearr_35033_35061 = state_35023__$1;
(statearr_35033_35061[(1)] = (12));

} else {
var statearr_35034_35062 = state_35023__$1;
(statearr_35034_35062[(1)] = (13));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (3))){
var inst_35021 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35023__$1,inst_35021);
} else {
if((state_val_35024 === (12))){
var inst_34983 = (state_35023[(7)]);
var inst_35011 = cljs.core.vec(inst_34983);
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35023__$1,(15),out,inst_35011);
} else {
if((state_val_35024 === (2))){
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35023__$1,(4),ch);
} else {
if((state_val_35024 === (11))){
var inst_34991 = (state_35023[(10)]);
var inst_34987 = (state_35023[(9)]);
var inst_35001 = (state_35023[(2)]);
var inst_35002 = [];
var inst_35003 = inst_35002.push(inst_34987);
var inst_34983 = inst_35002;
var inst_34984 = inst_34991;
var state_35023__$1 = (function (){var statearr_35035 = state_35023;
(statearr_35035[(7)] = inst_34983);

(statearr_35035[(11)] = inst_35003);

(statearr_35035[(12)] = inst_35001);

(statearr_35035[(8)] = inst_34984);

return statearr_35035;
})();
var statearr_35036_35063 = state_35023__$1;
(statearr_35036_35063[(2)] = null);

(statearr_35036_35063[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (9))){
var inst_34983 = (state_35023[(7)]);
var inst_34999 = cljs.core.vec(inst_34983);
var state_35023__$1 = state_35023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35023__$1,(11),out,inst_34999);
} else {
if((state_val_35024 === (5))){
var inst_34991 = (state_35023[(10)]);
var inst_34987 = (state_35023[(9)]);
var inst_34984 = (state_35023[(8)]);
var inst_34991__$1 = (function (){var G__35037 = inst_34987;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35037) : f.call(null,G__35037));
})();
var inst_34992 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34991__$1,inst_34984);
var inst_34993 = cljs.core.keyword_identical_QMARK_(inst_34984,cljs.core.constant$keyword$114);
var inst_34994 = (inst_34992) || (inst_34993);
var state_35023__$1 = (function (){var statearr_35038 = state_35023;
(statearr_35038[(10)] = inst_34991__$1);

return statearr_35038;
})();
if(cljs.core.truth_(inst_34994)){
var statearr_35039_35064 = state_35023__$1;
(statearr_35039_35064[(1)] = (8));

} else {
var statearr_35040_35065 = state_35023__$1;
(statearr_35040_35065[(1)] = (9));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (14))){
var inst_35016 = (state_35023[(2)]);
var inst_35017 = cljs.core.async.close_BANG_(out);
var state_35023__$1 = (function (){var statearr_35042 = state_35023;
(statearr_35042[(13)] = inst_35016);

return statearr_35042;
})();
var statearr_35043_35066 = state_35023__$1;
(statearr_35043_35066[(2)] = inst_35017);

(statearr_35043_35066[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (10))){
var inst_35006 = (state_35023[(2)]);
var state_35023__$1 = state_35023;
var statearr_35044_35067 = state_35023__$1;
(statearr_35044_35067[(2)] = inst_35006);

(statearr_35044_35067[(1)] = (7));


return cljs.core.constant$keyword$99;
} else {
if((state_val_35024 === (8))){
var inst_34983 = (state_35023[(7)]);
var inst_34991 = (state_35023[(10)]);
var inst_34987 = (state_35023[(9)]);
var inst_34996 = inst_34983.push(inst_34987);
var tmp35041 = inst_34983;
var inst_34983__$1 = tmp35041;
var inst_34984 = inst_34991;
var state_35023__$1 = (function (){var statearr_35045 = state_35023;
(statearr_35045[(7)] = inst_34983__$1);

(statearr_35045[(14)] = inst_34996);

(statearr_35045[(8)] = inst_34984);

return statearr_35045;
})();
var statearr_35046_35068 = state_35023__$1;
(statearr_35046_35068[(2)] = null);

(statearr_35046_35068[(1)] = (2));


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
});})(c__16627__auto___35054,out))
;
return ((function (switch__16547__auto__,c__16627__auto___35054,out){
return (function() {
var state_machine__16548__auto__ = null;
var state_machine__16548__auto____0 = (function (){
var statearr_35050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35050[(0)] = state_machine__16548__auto__);

(statearr_35050[(1)] = (1));

return statearr_35050;
});
var state_machine__16548__auto____1 = (function (state_35023){
while(true){
var ret_value__16549__auto__ = (function (){try{while(true){
var result__16550__auto__ = switch__16547__auto__(state_35023);
if(cljs.core.keyword_identical_QMARK_(result__16550__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16550__auto__;
}
break;
}
}catch (e35051){if((e35051 instanceof Object)){
var ex__16551__auto__ = e35051;
var statearr_35052_35069 = state_35023;
(statearr_35052_35069[(5)] = ex__16551__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35023);

return cljs.core.constant$keyword$99;
} else {
throw e35051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16549__auto__,cljs.core.constant$keyword$99)){
var G__35070 = state_35023;
state_35023 = G__35070;
continue;
} else {
return ret_value__16549__auto__;
}
break;
}
});
state_machine__16548__auto__ = function(state_35023){
switch(arguments.length){
case 0:
return state_machine__16548__auto____0.call(this);
case 1:
return state_machine__16548__auto____1.call(this,state_35023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16548__auto____0;
state_machine__16548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16548__auto____1;
return state_machine__16548__auto__;
})()
;})(switch__16547__auto__,c__16627__auto___35054,out))
})();
var state__16629__auto__ = (function (){var statearr_35053 = (function (){return (f__16628__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16628__auto__.cljs$core$IFn$_invoke$arity$0() : f__16628__auto__.call(null));
})();
(statearr_35053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16627__auto___35054);

return statearr_35053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16629__auto__);
});})(c__16627__auto___35054,out))
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
