// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8653 = [];
var len__6046__auto___8659 = arguments.length;
var i__6047__auto___8660 = (0);
while(true){
if((i__6047__auto___8660 < len__6046__auto___8659)){
args8653.push((arguments[i__6047__auto___8660]));

var G__8661 = (i__6047__auto___8660 + (1));
i__6047__auto___8660 = G__8661;
continue;
} else {
}
break;
}

var G__8655 = args8653.length;
switch (G__8655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8653.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8656 = (function (f,blockable,meta8657){
this.f = f;
this.blockable = blockable;
this.meta8657 = meta8657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8658,meta8657__$1){
var self__ = this;
var _8658__$1 = this;
return (new cljs.core.async.t_cljs$core$async8656(self__.f,self__.blockable,meta8657__$1));
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8658){
var self__ = this;
var _8658__$1 = this;
return self__.meta8657;
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8657","meta8657",-1814460431,null)], null);
});

cljs.core.async.t_cljs$core$async8656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8656";

cljs.core.async.t_cljs$core$async8656.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async8656");
});

cljs.core.async.__GT_t_cljs$core$async8656 = (function cljs$core$async$__GT_t_cljs$core$async8656(f__$1,blockable__$1,meta8657){
return (new cljs.core.async.t_cljs$core$async8656(f__$1,blockable__$1,meta8657));
});

}

return (new cljs.core.async.t_cljs$core$async8656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args8665 = [];
var len__6046__auto___8668 = arguments.length;
var i__6047__auto___8669 = (0);
while(true){
if((i__6047__auto___8669 < len__6046__auto___8668)){
args8665.push((arguments[i__6047__auto___8669]));

var G__8670 = (i__6047__auto___8669 + (1));
i__6047__auto___8669 = G__8670;
continue;
} else {
}
break;
}

var G__8667 = args8665.length;
switch (G__8667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8665.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args8672 = [];
var len__6046__auto___8675 = arguments.length;
var i__6047__auto___8676 = (0);
while(true){
if((i__6047__auto___8676 < len__6046__auto___8675)){
args8672.push((arguments[i__6047__auto___8676]));

var G__8677 = (i__6047__auto___8676 + (1));
i__6047__auto___8676 = G__8677;
continue;
} else {
}
break;
}

var G__8674 = args8672.length;
switch (G__8674) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8672.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args8679 = [];
var len__6046__auto___8682 = arguments.length;
var i__6047__auto___8683 = (0);
while(true){
if((i__6047__auto___8683 < len__6046__auto___8682)){
args8679.push((arguments[i__6047__auto___8683]));

var G__8684 = (i__6047__auto___8683 + (1));
i__6047__auto___8683 = G__8684;
continue;
} else {
}
break;
}

var G__8681 = args8679.length;
switch (G__8681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8679.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8686,ret){
return (function (){
return fn1.call(null,val_8686);
});})(val_8686,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args8687 = [];
var len__6046__auto___8690 = arguments.length;
var i__6047__auto___8691 = (0);
while(true){
if((i__6047__auto___8691 < len__6046__auto___8690)){
args8687.push((arguments[i__6047__auto___8691]));

var G__8692 = (i__6047__auto___8691 + (1));
i__6047__auto___8691 = G__8692;
continue;
} else {
}
break;
}

var G__8689 = args8687.length;
switch (G__8689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8687.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5891__auto___8694 = n;
var x_8695 = (0);
while(true){
if((x_8695 < n__5891__auto___8694)){
(a[x_8695] = (0));

var G__8696 = (x_8695 + (1));
x_8695 = G__8696;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8697 = (i + (1));
i = G__8697;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8701 = (function (alt_flag,flag,meta8702){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8702 = meta8702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8703,meta8702__$1){
var self__ = this;
var _8703__$1 = this;
return (new cljs.core.async.t_cljs$core$async8701(self__.alt_flag,self__.flag,meta8702__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8703){
var self__ = this;
var _8703__$1 = this;
return self__.meta8702;
});})(flag))
;

cljs.core.async.t_cljs$core$async8701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8701.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8702","meta8702",954833994,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8701";

cljs.core.async.t_cljs$core$async8701.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async8701");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8701 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8701(alt_flag__$1,flag__$1,meta8702){
return (new cljs.core.async.t_cljs$core$async8701(alt_flag__$1,flag__$1,meta8702));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8701(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8707 = (function (alt_handler,flag,cb,meta8708){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8708 = meta8708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8709,meta8708__$1){
var self__ = this;
var _8709__$1 = this;
return (new cljs.core.async.t_cljs$core$async8707(self__.alt_handler,self__.flag,self__.cb,meta8708__$1));
});

cljs.core.async.t_cljs$core$async8707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8709){
var self__ = this;
var _8709__$1 = this;
return self__.meta8708;
});

cljs.core.async.t_cljs$core$async8707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8708","meta8708",-1072677292,null)], null);
});

cljs.core.async.t_cljs$core$async8707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8707";

cljs.core.async.t_cljs$core$async8707.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async8707");
});

cljs.core.async.__GT_t_cljs$core$async8707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8707(alt_handler__$1,flag__$1,cb__$1,meta8708){
return (new cljs.core.async.t_cljs$core$async8707(alt_handler__$1,flag__$1,cb__$1,meta8708));
});

}

return (new cljs.core.async.t_cljs$core$async8707(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8711_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4988__auto__ = wport;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8712 = (i + (1));
i = G__8712;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4988__auto__ = ret;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4976__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4976__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4976__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8718 = arguments.length;
var i__6047__auto___8719 = (0);
while(true){
if((i__6047__auto___8719 < len__6046__auto___8718)){
args__6053__auto__.push((arguments[i__6047__auto___8719]));

var G__8720 = (i__6047__auto___8719 + (1));
i__6047__auto___8719 = G__8720;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8715){
var map__8716 = p__8715;
var map__8716__$1 = ((((!((map__8716 == null)))?((((map__8716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);
var opts = map__8716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8713){
var G__8714 = cljs.core.first.call(null,seq8713);
var seq8713__$1 = cljs.core.next.call(null,seq8713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8714,seq8713__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args8721 = [];
var len__6046__auto___8771 = arguments.length;
var i__6047__auto___8772 = (0);
while(true){
if((i__6047__auto___8772 < len__6046__auto___8771)){
args8721.push((arguments[i__6047__auto___8772]));

var G__8773 = (i__6047__auto___8772 + (1));
i__6047__auto___8772 = G__8773;
continue;
} else {
}
break;
}

var G__8723 = args8721.length;
switch (G__8723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8721.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8608__auto___8775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___8775){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___8775){
return (function (state_8747){
var state_val_8748 = (state_8747[(1)]);
if((state_val_8748 === (7))){
var inst_8743 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
var statearr_8749_8776 = state_8747__$1;
(statearr_8749_8776[(2)] = inst_8743);

(statearr_8749_8776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (1))){
var state_8747__$1 = state_8747;
var statearr_8750_8777 = state_8747__$1;
(statearr_8750_8777[(2)] = null);

(statearr_8750_8777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (4))){
var inst_8726 = (state_8747[(7)]);
var inst_8726__$1 = (state_8747[(2)]);
var inst_8727 = (inst_8726__$1 == null);
var state_8747__$1 = (function (){var statearr_8751 = state_8747;
(statearr_8751[(7)] = inst_8726__$1);

return statearr_8751;
})();
if(cljs.core.truth_(inst_8727)){
var statearr_8752_8778 = state_8747__$1;
(statearr_8752_8778[(1)] = (5));

} else {
var statearr_8753_8779 = state_8747__$1;
(statearr_8753_8779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (13))){
var state_8747__$1 = state_8747;
var statearr_8754_8780 = state_8747__$1;
(statearr_8754_8780[(2)] = null);

(statearr_8754_8780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (6))){
var inst_8726 = (state_8747[(7)]);
var state_8747__$1 = state_8747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8747__$1,(11),to,inst_8726);
} else {
if((state_val_8748 === (3))){
var inst_8745 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8747__$1,inst_8745);
} else {
if((state_val_8748 === (12))){
var state_8747__$1 = state_8747;
var statearr_8755_8781 = state_8747__$1;
(statearr_8755_8781[(2)] = null);

(statearr_8755_8781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (2))){
var state_8747__$1 = state_8747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8747__$1,(4),from);
} else {
if((state_val_8748 === (11))){
var inst_8736 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
if(cljs.core.truth_(inst_8736)){
var statearr_8756_8782 = state_8747__$1;
(statearr_8756_8782[(1)] = (12));

} else {
var statearr_8757_8783 = state_8747__$1;
(statearr_8757_8783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (9))){
var state_8747__$1 = state_8747;
var statearr_8758_8784 = state_8747__$1;
(statearr_8758_8784[(2)] = null);

(statearr_8758_8784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (5))){
var state_8747__$1 = state_8747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8759_8785 = state_8747__$1;
(statearr_8759_8785[(1)] = (8));

} else {
var statearr_8760_8786 = state_8747__$1;
(statearr_8760_8786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (14))){
var inst_8741 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
var statearr_8761_8787 = state_8747__$1;
(statearr_8761_8787[(2)] = inst_8741);

(statearr_8761_8787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (10))){
var inst_8733 = (state_8747[(2)]);
var state_8747__$1 = state_8747;
var statearr_8762_8788 = state_8747__$1;
(statearr_8762_8788[(2)] = inst_8733);

(statearr_8762_8788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8748 === (8))){
var inst_8730 = cljs.core.async.close_BANG_.call(null,to);
var state_8747__$1 = state_8747;
var statearr_8763_8789 = state_8747__$1;
(statearr_8763_8789[(2)] = inst_8730);

(statearr_8763_8789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___8775))
;
return ((function (switch__8496__auto__,c__8608__auto___8775){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_8767 = [null,null,null,null,null,null,null,null];
(statearr_8767[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_8767[(1)] = (1));

return statearr_8767;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_8747){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_8747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e8768){if((e8768 instanceof Object)){
var ex__8500__auto__ = e8768;
var statearr_8769_8790 = state_8747;
(statearr_8769_8790[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8791 = state_8747;
state_8747 = G__8791;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_8747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_8747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___8775))
})();
var state__8610__auto__ = (function (){var statearr_8770 = f__8609__auto__.call(null);
(statearr_8770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___8775);

return statearr_8770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___8775))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__8975){
var vec__8976 = p__8975;
var v = cljs.core.nth.call(null,vec__8976,(0),null);
var p = cljs.core.nth.call(null,vec__8976,(1),null);
var job = vec__8976;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8608__auto___9158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___9158,res,vec__8976,v,p,job,jobs,results){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___9158,res,vec__8976,v,p,job,jobs,results){
return (function (state_8981){
var state_val_8982 = (state_8981[(1)]);
if((state_val_8982 === (1))){
var state_8981__$1 = state_8981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8981__$1,(2),res,v);
} else {
if((state_val_8982 === (2))){
var inst_8978 = (state_8981[(2)]);
var inst_8979 = cljs.core.async.close_BANG_.call(null,res);
var state_8981__$1 = (function (){var statearr_8983 = state_8981;
(statearr_8983[(7)] = inst_8978);

return statearr_8983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8981__$1,inst_8979);
} else {
return null;
}
}
});})(c__8608__auto___9158,res,vec__8976,v,p,job,jobs,results))
;
return ((function (switch__8496__auto__,c__8608__auto___9158,res,vec__8976,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0 = (function (){
var statearr_8987 = [null,null,null,null,null,null,null,null];
(statearr_8987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__);

(statearr_8987[(1)] = (1));

return statearr_8987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1 = (function (state_8981){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_8981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e8988){if((e8988 instanceof Object)){
var ex__8500__auto__ = e8988;
var statearr_8989_9159 = state_8981;
(statearr_8989_9159[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9160 = state_8981;
state_8981 = G__9160;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = function(state_8981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1.call(this,state_8981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___9158,res,vec__8976,v,p,job,jobs,results))
})();
var state__8610__auto__ = (function (){var statearr_8990 = f__8609__auto__.call(null);
(statearr_8990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___9158);

return statearr_8990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___9158,res,vec__8976,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8991){
var vec__8992 = p__8991;
var v = cljs.core.nth.call(null,vec__8992,(0),null);
var p = cljs.core.nth.call(null,vec__8992,(1),null);
var job = vec__8992;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5891__auto___9161 = n;
var __9162 = (0);
while(true){
if((__9162 < n__5891__auto___9161)){
var G__8993_9163 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8993_9163) {
case "compute":
var c__8608__auto___9165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9162,c__8608__auto___9165,G__8993_9163,n__5891__auto___9161,jobs,results,process,async){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (__9162,c__8608__auto___9165,G__8993_9163,n__5891__auto___9161,jobs,results,process,async){
return (function (state_9006){
var state_val_9007 = (state_9006[(1)]);
if((state_val_9007 === (1))){
var state_9006__$1 = state_9006;
var statearr_9008_9166 = state_9006__$1;
(statearr_9008_9166[(2)] = null);

(statearr_9008_9166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (2))){
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9006__$1,(4),jobs);
} else {
if((state_val_9007 === (3))){
var inst_9004 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9006__$1,inst_9004);
} else {
if((state_val_9007 === (4))){
var inst_8996 = (state_9006[(2)]);
var inst_8997 = process.call(null,inst_8996);
var state_9006__$1 = state_9006;
if(cljs.core.truth_(inst_8997)){
var statearr_9009_9167 = state_9006__$1;
(statearr_9009_9167[(1)] = (5));

} else {
var statearr_9010_9168 = state_9006__$1;
(statearr_9010_9168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (5))){
var state_9006__$1 = state_9006;
var statearr_9011_9169 = state_9006__$1;
(statearr_9011_9169[(2)] = null);

(statearr_9011_9169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (6))){
var state_9006__$1 = state_9006;
var statearr_9012_9170 = state_9006__$1;
(statearr_9012_9170[(2)] = null);

(statearr_9012_9170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9007 === (7))){
var inst_9002 = (state_9006[(2)]);
var state_9006__$1 = state_9006;
var statearr_9013_9171 = state_9006__$1;
(statearr_9013_9171[(2)] = inst_9002);

(statearr_9013_9171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9162,c__8608__auto___9165,G__8993_9163,n__5891__auto___9161,jobs,results,process,async))
;
return ((function (__9162,switch__8496__auto__,c__8608__auto___9165,G__8993_9163,n__5891__auto___9161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0 = (function (){
var statearr_9017 = [null,null,null,null,null,null,null];
(statearr_9017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__);

(statearr_9017[(1)] = (1));

return statearr_9017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1 = (function (state_9006){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9018){if((e9018 instanceof Object)){
var ex__8500__auto__ = e9018;
var statearr_9019_9172 = state_9006;
(statearr_9019_9172[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9173 = state_9006;
state_9006 = G__9173;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = function(state_9006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1.call(this,state_9006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__;
})()
;})(__9162,switch__8496__auto__,c__8608__auto___9165,G__8993_9163,n__5891__auto___9161,jobs,results,process,async))
})();
var state__8610__auto__ = (function (){var statearr_9020 = f__8609__auto__.call(null);
(statearr_9020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___9165);

return statearr_9020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(__9162,c__8608__auto___9165,G__8993_9163,n__5891__auto___9161,jobs,results,process,async))
);


break;
case "async":
var c__8608__auto___9174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9162,c__8608__auto___9174,G__8993_9163,n__5891__auto___9161,jobs,results,process,async){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (__9162,c__8608__auto___9174,G__8993_9163,n__5891__auto___9161,jobs,results,process,async){
return (function (state_9033){
var state_val_9034 = (state_9033[(1)]);
if((state_val_9034 === (1))){
var state_9033__$1 = state_9033;
var statearr_9035_9175 = state_9033__$1;
(statearr_9035_9175[(2)] = null);

(statearr_9035_9175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9034 === (2))){
var state_9033__$1 = state_9033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9033__$1,(4),jobs);
} else {
if((state_val_9034 === (3))){
var inst_9031 = (state_9033[(2)]);
var state_9033__$1 = state_9033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9033__$1,inst_9031);
} else {
if((state_val_9034 === (4))){
var inst_9023 = (state_9033[(2)]);
var inst_9024 = async.call(null,inst_9023);
var state_9033__$1 = state_9033;
if(cljs.core.truth_(inst_9024)){
var statearr_9036_9176 = state_9033__$1;
(statearr_9036_9176[(1)] = (5));

} else {
var statearr_9037_9177 = state_9033__$1;
(statearr_9037_9177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9034 === (5))){
var state_9033__$1 = state_9033;
var statearr_9038_9178 = state_9033__$1;
(statearr_9038_9178[(2)] = null);

(statearr_9038_9178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9034 === (6))){
var state_9033__$1 = state_9033;
var statearr_9039_9179 = state_9033__$1;
(statearr_9039_9179[(2)] = null);

(statearr_9039_9179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9034 === (7))){
var inst_9029 = (state_9033[(2)]);
var state_9033__$1 = state_9033;
var statearr_9040_9180 = state_9033__$1;
(statearr_9040_9180[(2)] = inst_9029);

(statearr_9040_9180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9162,c__8608__auto___9174,G__8993_9163,n__5891__auto___9161,jobs,results,process,async))
;
return ((function (__9162,switch__8496__auto__,c__8608__auto___9174,G__8993_9163,n__5891__auto___9161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0 = (function (){
var statearr_9044 = [null,null,null,null,null,null,null];
(statearr_9044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__);

(statearr_9044[(1)] = (1));

return statearr_9044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1 = (function (state_9033){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9045){if((e9045 instanceof Object)){
var ex__8500__auto__ = e9045;
var statearr_9046_9181 = state_9033;
(statearr_9046_9181[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9182 = state_9033;
state_9033 = G__9182;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = function(state_9033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1.call(this,state_9033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__;
})()
;})(__9162,switch__8496__auto__,c__8608__auto___9174,G__8993_9163,n__5891__auto___9161,jobs,results,process,async))
})();
var state__8610__auto__ = (function (){var statearr_9047 = f__8609__auto__.call(null);
(statearr_9047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___9174);

return statearr_9047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(__9162,c__8608__auto___9174,G__8993_9163,n__5891__auto___9161,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9183 = (__9162 + (1));
__9162 = G__9183;
continue;
} else {
}
break;
}

var c__8608__auto___9184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___9184,jobs,results,process,async){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___9184,jobs,results,process,async){
return (function (state_9069){
var state_val_9070 = (state_9069[(1)]);
if((state_val_9070 === (1))){
var state_9069__$1 = state_9069;
var statearr_9071_9185 = state_9069__$1;
(statearr_9071_9185[(2)] = null);

(statearr_9071_9185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9070 === (2))){
var state_9069__$1 = state_9069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9069__$1,(4),from);
} else {
if((state_val_9070 === (3))){
var inst_9067 = (state_9069[(2)]);
var state_9069__$1 = state_9069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9069__$1,inst_9067);
} else {
if((state_val_9070 === (4))){
var inst_9050 = (state_9069[(7)]);
var inst_9050__$1 = (state_9069[(2)]);
var inst_9051 = (inst_9050__$1 == null);
var state_9069__$1 = (function (){var statearr_9072 = state_9069;
(statearr_9072[(7)] = inst_9050__$1);

return statearr_9072;
})();
if(cljs.core.truth_(inst_9051)){
var statearr_9073_9186 = state_9069__$1;
(statearr_9073_9186[(1)] = (5));

} else {
var statearr_9074_9187 = state_9069__$1;
(statearr_9074_9187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9070 === (5))){
var inst_9053 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9069__$1 = state_9069;
var statearr_9075_9188 = state_9069__$1;
(statearr_9075_9188[(2)] = inst_9053);

(statearr_9075_9188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9070 === (6))){
var inst_9050 = (state_9069[(7)]);
var inst_9055 = (state_9069[(8)]);
var inst_9055__$1 = cljs.core.async.chan.call(null,(1));
var inst_9056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9057 = [inst_9050,inst_9055__$1];
var inst_9058 = (new cljs.core.PersistentVector(null,2,(5),inst_9056,inst_9057,null));
var state_9069__$1 = (function (){var statearr_9076 = state_9069;
(statearr_9076[(8)] = inst_9055__$1);

return statearr_9076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9069__$1,(8),jobs,inst_9058);
} else {
if((state_val_9070 === (7))){
var inst_9065 = (state_9069[(2)]);
var state_9069__$1 = state_9069;
var statearr_9077_9189 = state_9069__$1;
(statearr_9077_9189[(2)] = inst_9065);

(statearr_9077_9189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9070 === (8))){
var inst_9055 = (state_9069[(8)]);
var inst_9060 = (state_9069[(2)]);
var state_9069__$1 = (function (){var statearr_9078 = state_9069;
(statearr_9078[(9)] = inst_9060);

return statearr_9078;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9069__$1,(9),results,inst_9055);
} else {
if((state_val_9070 === (9))){
var inst_9062 = (state_9069[(2)]);
var state_9069__$1 = (function (){var statearr_9079 = state_9069;
(statearr_9079[(10)] = inst_9062);

return statearr_9079;
})();
var statearr_9080_9190 = state_9069__$1;
(statearr_9080_9190[(2)] = null);

(statearr_9080_9190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___9184,jobs,results,process,async))
;
return ((function (switch__8496__auto__,c__8608__auto___9184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0 = (function (){
var statearr_9084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__);

(statearr_9084[(1)] = (1));

return statearr_9084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1 = (function (state_9069){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9085){if((e9085 instanceof Object)){
var ex__8500__auto__ = e9085;
var statearr_9086_9191 = state_9069;
(statearr_9086_9191[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9192 = state_9069;
state_9069 = G__9192;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = function(state_9069){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1.call(this,state_9069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___9184,jobs,results,process,async))
})();
var state__8610__auto__ = (function (){var statearr_9087 = f__8609__auto__.call(null);
(statearr_9087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___9184);

return statearr_9087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___9184,jobs,results,process,async))
);


var c__8608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto__,jobs,results,process,async){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto__,jobs,results,process,async){
return (function (state_9125){
var state_val_9126 = (state_9125[(1)]);
if((state_val_9126 === (7))){
var inst_9121 = (state_9125[(2)]);
var state_9125__$1 = state_9125;
var statearr_9127_9193 = state_9125__$1;
(statearr_9127_9193[(2)] = inst_9121);

(statearr_9127_9193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (20))){
var state_9125__$1 = state_9125;
var statearr_9128_9194 = state_9125__$1;
(statearr_9128_9194[(2)] = null);

(statearr_9128_9194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (1))){
var state_9125__$1 = state_9125;
var statearr_9129_9195 = state_9125__$1;
(statearr_9129_9195[(2)] = null);

(statearr_9129_9195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (4))){
var inst_9090 = (state_9125[(7)]);
var inst_9090__$1 = (state_9125[(2)]);
var inst_9091 = (inst_9090__$1 == null);
var state_9125__$1 = (function (){var statearr_9130 = state_9125;
(statearr_9130[(7)] = inst_9090__$1);

return statearr_9130;
})();
if(cljs.core.truth_(inst_9091)){
var statearr_9131_9196 = state_9125__$1;
(statearr_9131_9196[(1)] = (5));

} else {
var statearr_9132_9197 = state_9125__$1;
(statearr_9132_9197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (15))){
var inst_9103 = (state_9125[(8)]);
var state_9125__$1 = state_9125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9125__$1,(18),to,inst_9103);
} else {
if((state_val_9126 === (21))){
var inst_9116 = (state_9125[(2)]);
var state_9125__$1 = state_9125;
var statearr_9133_9198 = state_9125__$1;
(statearr_9133_9198[(2)] = inst_9116);

(statearr_9133_9198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (13))){
var inst_9118 = (state_9125[(2)]);
var state_9125__$1 = (function (){var statearr_9134 = state_9125;
(statearr_9134[(9)] = inst_9118);

return statearr_9134;
})();
var statearr_9135_9199 = state_9125__$1;
(statearr_9135_9199[(2)] = null);

(statearr_9135_9199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (6))){
var inst_9090 = (state_9125[(7)]);
var state_9125__$1 = state_9125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9125__$1,(11),inst_9090);
} else {
if((state_val_9126 === (17))){
var inst_9111 = (state_9125[(2)]);
var state_9125__$1 = state_9125;
if(cljs.core.truth_(inst_9111)){
var statearr_9136_9200 = state_9125__$1;
(statearr_9136_9200[(1)] = (19));

} else {
var statearr_9137_9201 = state_9125__$1;
(statearr_9137_9201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (3))){
var inst_9123 = (state_9125[(2)]);
var state_9125__$1 = state_9125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9125__$1,inst_9123);
} else {
if((state_val_9126 === (12))){
var inst_9100 = (state_9125[(10)]);
var state_9125__$1 = state_9125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9125__$1,(14),inst_9100);
} else {
if((state_val_9126 === (2))){
var state_9125__$1 = state_9125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9125__$1,(4),results);
} else {
if((state_val_9126 === (19))){
var state_9125__$1 = state_9125;
var statearr_9138_9202 = state_9125__$1;
(statearr_9138_9202[(2)] = null);

(statearr_9138_9202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (11))){
var inst_9100 = (state_9125[(2)]);
var state_9125__$1 = (function (){var statearr_9139 = state_9125;
(statearr_9139[(10)] = inst_9100);

return statearr_9139;
})();
var statearr_9140_9203 = state_9125__$1;
(statearr_9140_9203[(2)] = null);

(statearr_9140_9203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (9))){
var state_9125__$1 = state_9125;
var statearr_9141_9204 = state_9125__$1;
(statearr_9141_9204[(2)] = null);

(statearr_9141_9204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (5))){
var state_9125__$1 = state_9125;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9142_9205 = state_9125__$1;
(statearr_9142_9205[(1)] = (8));

} else {
var statearr_9143_9206 = state_9125__$1;
(statearr_9143_9206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (14))){
var inst_9105 = (state_9125[(11)]);
var inst_9103 = (state_9125[(8)]);
var inst_9103__$1 = (state_9125[(2)]);
var inst_9104 = (inst_9103__$1 == null);
var inst_9105__$1 = cljs.core.not.call(null,inst_9104);
var state_9125__$1 = (function (){var statearr_9144 = state_9125;
(statearr_9144[(11)] = inst_9105__$1);

(statearr_9144[(8)] = inst_9103__$1);

return statearr_9144;
})();
if(inst_9105__$1){
var statearr_9145_9207 = state_9125__$1;
(statearr_9145_9207[(1)] = (15));

} else {
var statearr_9146_9208 = state_9125__$1;
(statearr_9146_9208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (16))){
var inst_9105 = (state_9125[(11)]);
var state_9125__$1 = state_9125;
var statearr_9147_9209 = state_9125__$1;
(statearr_9147_9209[(2)] = inst_9105);

(statearr_9147_9209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (10))){
var inst_9097 = (state_9125[(2)]);
var state_9125__$1 = state_9125;
var statearr_9148_9210 = state_9125__$1;
(statearr_9148_9210[(2)] = inst_9097);

(statearr_9148_9210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (18))){
var inst_9108 = (state_9125[(2)]);
var state_9125__$1 = state_9125;
var statearr_9149_9211 = state_9125__$1;
(statearr_9149_9211[(2)] = inst_9108);

(statearr_9149_9211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9126 === (8))){
var inst_9094 = cljs.core.async.close_BANG_.call(null,to);
var state_9125__$1 = state_9125;
var statearr_9150_9212 = state_9125__$1;
(statearr_9150_9212[(2)] = inst_9094);

(statearr_9150_9212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto__,jobs,results,process,async))
;
return ((function (switch__8496__auto__,c__8608__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0 = (function (){
var statearr_9154 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__);

(statearr_9154[(1)] = (1));

return statearr_9154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1 = (function (state_9125){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9155){if((e9155 instanceof Object)){
var ex__8500__auto__ = e9155;
var statearr_9156_9213 = state_9125;
(statearr_9156_9213[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9214 = state_9125;
state_9125 = G__9214;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__ = function(state_9125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1.call(this,state_9125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto__,jobs,results,process,async))
})();
var state__8610__auto__ = (function (){var statearr_9157 = f__8609__auto__.call(null);
(statearr_9157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto__);

return statearr_9157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto__,jobs,results,process,async))
);

return c__8608__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9215 = [];
var len__6046__auto___9218 = arguments.length;
var i__6047__auto___9219 = (0);
while(true){
if((i__6047__auto___9219 < len__6046__auto___9218)){
args9215.push((arguments[i__6047__auto___9219]));

var G__9220 = (i__6047__auto___9219 + (1));
i__6047__auto___9219 = G__9220;
continue;
} else {
}
break;
}

var G__9217 = args9215.length;
switch (G__9217) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9215.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9222 = [];
var len__6046__auto___9225 = arguments.length;
var i__6047__auto___9226 = (0);
while(true){
if((i__6047__auto___9226 < len__6046__auto___9225)){
args9222.push((arguments[i__6047__auto___9226]));

var G__9227 = (i__6047__auto___9226 + (1));
i__6047__auto___9226 = G__9227;
continue;
} else {
}
break;
}

var G__9224 = args9222.length;
switch (G__9224) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9222.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9229 = [];
var len__6046__auto___9282 = arguments.length;
var i__6047__auto___9283 = (0);
while(true){
if((i__6047__auto___9283 < len__6046__auto___9282)){
args9229.push((arguments[i__6047__auto___9283]));

var G__9284 = (i__6047__auto___9283 + (1));
i__6047__auto___9283 = G__9284;
continue;
} else {
}
break;
}

var G__9231 = args9229.length;
switch (G__9231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9229.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8608__auto___9286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___9286,tc,fc){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___9286,tc,fc){
return (function (state_9257){
var state_val_9258 = (state_9257[(1)]);
if((state_val_9258 === (7))){
var inst_9253 = (state_9257[(2)]);
var state_9257__$1 = state_9257;
var statearr_9259_9287 = state_9257__$1;
(statearr_9259_9287[(2)] = inst_9253);

(statearr_9259_9287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (1))){
var state_9257__$1 = state_9257;
var statearr_9260_9288 = state_9257__$1;
(statearr_9260_9288[(2)] = null);

(statearr_9260_9288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (4))){
var inst_9234 = (state_9257[(7)]);
var inst_9234__$1 = (state_9257[(2)]);
var inst_9235 = (inst_9234__$1 == null);
var state_9257__$1 = (function (){var statearr_9261 = state_9257;
(statearr_9261[(7)] = inst_9234__$1);

return statearr_9261;
})();
if(cljs.core.truth_(inst_9235)){
var statearr_9262_9289 = state_9257__$1;
(statearr_9262_9289[(1)] = (5));

} else {
var statearr_9263_9290 = state_9257__$1;
(statearr_9263_9290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (13))){
var state_9257__$1 = state_9257;
var statearr_9264_9291 = state_9257__$1;
(statearr_9264_9291[(2)] = null);

(statearr_9264_9291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (6))){
var inst_9234 = (state_9257[(7)]);
var inst_9240 = p.call(null,inst_9234);
var state_9257__$1 = state_9257;
if(cljs.core.truth_(inst_9240)){
var statearr_9265_9292 = state_9257__$1;
(statearr_9265_9292[(1)] = (9));

} else {
var statearr_9266_9293 = state_9257__$1;
(statearr_9266_9293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (3))){
var inst_9255 = (state_9257[(2)]);
var state_9257__$1 = state_9257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9257__$1,inst_9255);
} else {
if((state_val_9258 === (12))){
var state_9257__$1 = state_9257;
var statearr_9267_9294 = state_9257__$1;
(statearr_9267_9294[(2)] = null);

(statearr_9267_9294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (2))){
var state_9257__$1 = state_9257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9257__$1,(4),ch);
} else {
if((state_val_9258 === (11))){
var inst_9234 = (state_9257[(7)]);
var inst_9244 = (state_9257[(2)]);
var state_9257__$1 = state_9257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9257__$1,(8),inst_9244,inst_9234);
} else {
if((state_val_9258 === (9))){
var state_9257__$1 = state_9257;
var statearr_9268_9295 = state_9257__$1;
(statearr_9268_9295[(2)] = tc);

(statearr_9268_9295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (5))){
var inst_9237 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9238 = cljs.core.async.close_BANG_.call(null,fc);
var state_9257__$1 = (function (){var statearr_9269 = state_9257;
(statearr_9269[(8)] = inst_9237);

return statearr_9269;
})();
var statearr_9270_9296 = state_9257__$1;
(statearr_9270_9296[(2)] = inst_9238);

(statearr_9270_9296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (14))){
var inst_9251 = (state_9257[(2)]);
var state_9257__$1 = state_9257;
var statearr_9271_9297 = state_9257__$1;
(statearr_9271_9297[(2)] = inst_9251);

(statearr_9271_9297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (10))){
var state_9257__$1 = state_9257;
var statearr_9272_9298 = state_9257__$1;
(statearr_9272_9298[(2)] = fc);

(statearr_9272_9298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9258 === (8))){
var inst_9246 = (state_9257[(2)]);
var state_9257__$1 = state_9257;
if(cljs.core.truth_(inst_9246)){
var statearr_9273_9299 = state_9257__$1;
(statearr_9273_9299[(1)] = (12));

} else {
var statearr_9274_9300 = state_9257__$1;
(statearr_9274_9300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___9286,tc,fc))
;
return ((function (switch__8496__auto__,c__8608__auto___9286,tc,fc){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_9278 = [null,null,null,null,null,null,null,null,null];
(statearr_9278[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_9278[(1)] = (1));

return statearr_9278;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_9257){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9279){if((e9279 instanceof Object)){
var ex__8500__auto__ = e9279;
var statearr_9280_9301 = state_9257;
(statearr_9280_9301[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9302 = state_9257;
state_9257 = G__9302;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_9257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_9257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___9286,tc,fc))
})();
var state__8610__auto__ = (function (){var statearr_9281 = f__8609__auto__.call(null);
(statearr_9281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___9286);

return statearr_9281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___9286,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto__){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto__){
return (function (state_9366){
var state_val_9367 = (state_9366[(1)]);
if((state_val_9367 === (7))){
var inst_9362 = (state_9366[(2)]);
var state_9366__$1 = state_9366;
var statearr_9368_9389 = state_9366__$1;
(statearr_9368_9389[(2)] = inst_9362);

(statearr_9368_9389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (1))){
var inst_9346 = init;
var state_9366__$1 = (function (){var statearr_9369 = state_9366;
(statearr_9369[(7)] = inst_9346);

return statearr_9369;
})();
var statearr_9370_9390 = state_9366__$1;
(statearr_9370_9390[(2)] = null);

(statearr_9370_9390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (4))){
var inst_9349 = (state_9366[(8)]);
var inst_9349__$1 = (state_9366[(2)]);
var inst_9350 = (inst_9349__$1 == null);
var state_9366__$1 = (function (){var statearr_9371 = state_9366;
(statearr_9371[(8)] = inst_9349__$1);

return statearr_9371;
})();
if(cljs.core.truth_(inst_9350)){
var statearr_9372_9391 = state_9366__$1;
(statearr_9372_9391[(1)] = (5));

} else {
var statearr_9373_9392 = state_9366__$1;
(statearr_9373_9392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (6))){
var inst_9353 = (state_9366[(9)]);
var inst_9349 = (state_9366[(8)]);
var inst_9346 = (state_9366[(7)]);
var inst_9353__$1 = f.call(null,inst_9346,inst_9349);
var inst_9354 = cljs.core.reduced_QMARK_.call(null,inst_9353__$1);
var state_9366__$1 = (function (){var statearr_9374 = state_9366;
(statearr_9374[(9)] = inst_9353__$1);

return statearr_9374;
})();
if(inst_9354){
var statearr_9375_9393 = state_9366__$1;
(statearr_9375_9393[(1)] = (8));

} else {
var statearr_9376_9394 = state_9366__$1;
(statearr_9376_9394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (3))){
var inst_9364 = (state_9366[(2)]);
var state_9366__$1 = state_9366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9366__$1,inst_9364);
} else {
if((state_val_9367 === (2))){
var state_9366__$1 = state_9366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9366__$1,(4),ch);
} else {
if((state_val_9367 === (9))){
var inst_9353 = (state_9366[(9)]);
var inst_9346 = inst_9353;
var state_9366__$1 = (function (){var statearr_9377 = state_9366;
(statearr_9377[(7)] = inst_9346);

return statearr_9377;
})();
var statearr_9378_9395 = state_9366__$1;
(statearr_9378_9395[(2)] = null);

(statearr_9378_9395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (5))){
var inst_9346 = (state_9366[(7)]);
var state_9366__$1 = state_9366;
var statearr_9379_9396 = state_9366__$1;
(statearr_9379_9396[(2)] = inst_9346);

(statearr_9379_9396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (10))){
var inst_9360 = (state_9366[(2)]);
var state_9366__$1 = state_9366;
var statearr_9380_9397 = state_9366__$1;
(statearr_9380_9397[(2)] = inst_9360);

(statearr_9380_9397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9367 === (8))){
var inst_9353 = (state_9366[(9)]);
var inst_9356 = cljs.core.deref.call(null,inst_9353);
var state_9366__$1 = state_9366;
var statearr_9381_9398 = state_9366__$1;
(statearr_9381_9398[(2)] = inst_9356);

(statearr_9381_9398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto__))
;
return ((function (switch__8496__auto__,c__8608__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8497__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8497__auto____0 = (function (){
var statearr_9385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9385[(0)] = cljs$core$async$reduce_$_state_machine__8497__auto__);

(statearr_9385[(1)] = (1));

return statearr_9385;
});
var cljs$core$async$reduce_$_state_machine__8497__auto____1 = (function (state_9366){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9386){if((e9386 instanceof Object)){
var ex__8500__auto__ = e9386;
var statearr_9387_9399 = state_9366;
(statearr_9387_9399[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9400 = state_9366;
state_9366 = G__9400;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8497__auto__ = function(state_9366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8497__auto____1.call(this,state_9366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8497__auto____0;
cljs$core$async$reduce_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8497__auto____1;
return cljs$core$async$reduce_$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto__))
})();
var state__8610__auto__ = (function (){var statearr_9388 = f__8609__auto__.call(null);
(statearr_9388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto__);

return statearr_9388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto__))
);

return c__8608__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9401 = [];
var len__6046__auto___9453 = arguments.length;
var i__6047__auto___9454 = (0);
while(true){
if((i__6047__auto___9454 < len__6046__auto___9453)){
args9401.push((arguments[i__6047__auto___9454]));

var G__9455 = (i__6047__auto___9454 + (1));
i__6047__auto___9454 = G__9455;
continue;
} else {
}
break;
}

var G__9403 = args9401.length;
switch (G__9403) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9401.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto__){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto__){
return (function (state_9428){
var state_val_9429 = (state_9428[(1)]);
if((state_val_9429 === (7))){
var inst_9410 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9430_9457 = state_9428__$1;
(statearr_9430_9457[(2)] = inst_9410);

(statearr_9430_9457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (1))){
var inst_9404 = cljs.core.seq.call(null,coll);
var inst_9405 = inst_9404;
var state_9428__$1 = (function (){var statearr_9431 = state_9428;
(statearr_9431[(7)] = inst_9405);

return statearr_9431;
})();
var statearr_9432_9458 = state_9428__$1;
(statearr_9432_9458[(2)] = null);

(statearr_9432_9458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (4))){
var inst_9405 = (state_9428[(7)]);
var inst_9408 = cljs.core.first.call(null,inst_9405);
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9428__$1,(7),ch,inst_9408);
} else {
if((state_val_9429 === (13))){
var inst_9422 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9433_9459 = state_9428__$1;
(statearr_9433_9459[(2)] = inst_9422);

(statearr_9433_9459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (6))){
var inst_9413 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
if(cljs.core.truth_(inst_9413)){
var statearr_9434_9460 = state_9428__$1;
(statearr_9434_9460[(1)] = (8));

} else {
var statearr_9435_9461 = state_9428__$1;
(statearr_9435_9461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (3))){
var inst_9426 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9428__$1,inst_9426);
} else {
if((state_val_9429 === (12))){
var state_9428__$1 = state_9428;
var statearr_9436_9462 = state_9428__$1;
(statearr_9436_9462[(2)] = null);

(statearr_9436_9462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (2))){
var inst_9405 = (state_9428[(7)]);
var state_9428__$1 = state_9428;
if(cljs.core.truth_(inst_9405)){
var statearr_9437_9463 = state_9428__$1;
(statearr_9437_9463[(1)] = (4));

} else {
var statearr_9438_9464 = state_9428__$1;
(statearr_9438_9464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (11))){
var inst_9419 = cljs.core.async.close_BANG_.call(null,ch);
var state_9428__$1 = state_9428;
var statearr_9439_9465 = state_9428__$1;
(statearr_9439_9465[(2)] = inst_9419);

(statearr_9439_9465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (9))){
var state_9428__$1 = state_9428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9440_9466 = state_9428__$1;
(statearr_9440_9466[(1)] = (11));

} else {
var statearr_9441_9467 = state_9428__$1;
(statearr_9441_9467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (5))){
var inst_9405 = (state_9428[(7)]);
var state_9428__$1 = state_9428;
var statearr_9442_9468 = state_9428__$1;
(statearr_9442_9468[(2)] = inst_9405);

(statearr_9442_9468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (10))){
var inst_9424 = (state_9428[(2)]);
var state_9428__$1 = state_9428;
var statearr_9443_9469 = state_9428__$1;
(statearr_9443_9469[(2)] = inst_9424);

(statearr_9443_9469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9429 === (8))){
var inst_9405 = (state_9428[(7)]);
var inst_9415 = cljs.core.next.call(null,inst_9405);
var inst_9405__$1 = inst_9415;
var state_9428__$1 = (function (){var statearr_9444 = state_9428;
(statearr_9444[(7)] = inst_9405__$1);

return statearr_9444;
})();
var statearr_9445_9470 = state_9428__$1;
(statearr_9445_9470[(2)] = null);

(statearr_9445_9470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto__))
;
return ((function (switch__8496__auto__,c__8608__auto__){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_9449 = [null,null,null,null,null,null,null,null];
(statearr_9449[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_9449[(1)] = (1));

return statearr_9449;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_9428){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9450){if((e9450 instanceof Object)){
var ex__8500__auto__ = e9450;
var statearr_9451_9471 = state_9428;
(statearr_9451_9471[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9472 = state_9428;
state_9428 = G__9472;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_9428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_9428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto__))
})();
var state__8610__auto__ = (function (){var statearr_9452 = f__8609__auto__.call(null);
(statearr_9452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto__);

return statearr_9452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto__))
);

return c__8608__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5643__auto__ = (((_ == null))?null:_);
var m__5644__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,_);
} else {
var m__5644__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5644__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m);
} else {
var m__5644__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9694 = (function (mult,ch,cs,meta9695){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9695 = meta9695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9696,meta9695__$1){
var self__ = this;
var _9696__$1 = this;
return (new cljs.core.async.t_cljs$core$async9694(self__.mult,self__.ch,self__.cs,meta9695__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9696){
var self__ = this;
var _9696__$1 = this;
return self__.meta9695;
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9695","meta9695",669659510,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9694";

cljs.core.async.t_cljs$core$async9694.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async9694");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9694 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9694(mult__$1,ch__$1,cs__$1,meta9695){
return (new cljs.core.async.t_cljs$core$async9694(mult__$1,ch__$1,cs__$1,meta9695));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9694(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8608__auto___9915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___9915,cs,m,dchan,dctr,done){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___9915,cs,m,dchan,dctr,done){
return (function (state_9827){
var state_val_9828 = (state_9827[(1)]);
if((state_val_9828 === (7))){
var inst_9823 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9829_9916 = state_9827__$1;
(statearr_9829_9916[(2)] = inst_9823);

(statearr_9829_9916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (20))){
var inst_9728 = (state_9827[(7)]);
var inst_9738 = cljs.core.first.call(null,inst_9728);
var inst_9739 = cljs.core.nth.call(null,inst_9738,(0),null);
var inst_9740 = cljs.core.nth.call(null,inst_9738,(1),null);
var state_9827__$1 = (function (){var statearr_9830 = state_9827;
(statearr_9830[(8)] = inst_9739);

return statearr_9830;
})();
if(cljs.core.truth_(inst_9740)){
var statearr_9831_9917 = state_9827__$1;
(statearr_9831_9917[(1)] = (22));

} else {
var statearr_9832_9918 = state_9827__$1;
(statearr_9832_9918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (27))){
var inst_9775 = (state_9827[(9)]);
var inst_9770 = (state_9827[(10)]);
var inst_9768 = (state_9827[(11)]);
var inst_9699 = (state_9827[(12)]);
var inst_9775__$1 = cljs.core._nth.call(null,inst_9768,inst_9770);
var inst_9776 = cljs.core.async.put_BANG_.call(null,inst_9775__$1,inst_9699,done);
var state_9827__$1 = (function (){var statearr_9833 = state_9827;
(statearr_9833[(9)] = inst_9775__$1);

return statearr_9833;
})();
if(cljs.core.truth_(inst_9776)){
var statearr_9834_9919 = state_9827__$1;
(statearr_9834_9919[(1)] = (30));

} else {
var statearr_9835_9920 = state_9827__$1;
(statearr_9835_9920[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (1))){
var state_9827__$1 = state_9827;
var statearr_9836_9921 = state_9827__$1;
(statearr_9836_9921[(2)] = null);

(statearr_9836_9921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (24))){
var inst_9728 = (state_9827[(7)]);
var inst_9745 = (state_9827[(2)]);
var inst_9746 = cljs.core.next.call(null,inst_9728);
var inst_9708 = inst_9746;
var inst_9709 = null;
var inst_9710 = (0);
var inst_9711 = (0);
var state_9827__$1 = (function (){var statearr_9837 = state_9827;
(statearr_9837[(13)] = inst_9709);

(statearr_9837[(14)] = inst_9708);

(statearr_9837[(15)] = inst_9710);

(statearr_9837[(16)] = inst_9711);

(statearr_9837[(17)] = inst_9745);

return statearr_9837;
})();
var statearr_9838_9922 = state_9827__$1;
(statearr_9838_9922[(2)] = null);

(statearr_9838_9922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (39))){
var state_9827__$1 = state_9827;
var statearr_9842_9923 = state_9827__$1;
(statearr_9842_9923[(2)] = null);

(statearr_9842_9923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (4))){
var inst_9699 = (state_9827[(12)]);
var inst_9699__$1 = (state_9827[(2)]);
var inst_9700 = (inst_9699__$1 == null);
var state_9827__$1 = (function (){var statearr_9843 = state_9827;
(statearr_9843[(12)] = inst_9699__$1);

return statearr_9843;
})();
if(cljs.core.truth_(inst_9700)){
var statearr_9844_9924 = state_9827__$1;
(statearr_9844_9924[(1)] = (5));

} else {
var statearr_9845_9925 = state_9827__$1;
(statearr_9845_9925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (15))){
var inst_9709 = (state_9827[(13)]);
var inst_9708 = (state_9827[(14)]);
var inst_9710 = (state_9827[(15)]);
var inst_9711 = (state_9827[(16)]);
var inst_9724 = (state_9827[(2)]);
var inst_9725 = (inst_9711 + (1));
var tmp9839 = inst_9709;
var tmp9840 = inst_9708;
var tmp9841 = inst_9710;
var inst_9708__$1 = tmp9840;
var inst_9709__$1 = tmp9839;
var inst_9710__$1 = tmp9841;
var inst_9711__$1 = inst_9725;
var state_9827__$1 = (function (){var statearr_9846 = state_9827;
(statearr_9846[(13)] = inst_9709__$1);

(statearr_9846[(14)] = inst_9708__$1);

(statearr_9846[(18)] = inst_9724);

(statearr_9846[(15)] = inst_9710__$1);

(statearr_9846[(16)] = inst_9711__$1);

return statearr_9846;
})();
var statearr_9847_9926 = state_9827__$1;
(statearr_9847_9926[(2)] = null);

(statearr_9847_9926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (21))){
var inst_9749 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9851_9927 = state_9827__$1;
(statearr_9851_9927[(2)] = inst_9749);

(statearr_9851_9927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (31))){
var inst_9775 = (state_9827[(9)]);
var inst_9779 = done.call(null,null);
var inst_9780 = cljs.core.async.untap_STAR_.call(null,m,inst_9775);
var state_9827__$1 = (function (){var statearr_9852 = state_9827;
(statearr_9852[(19)] = inst_9779);

return statearr_9852;
})();
var statearr_9853_9928 = state_9827__$1;
(statearr_9853_9928[(2)] = inst_9780);

(statearr_9853_9928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (32))){
var inst_9767 = (state_9827[(20)]);
var inst_9770 = (state_9827[(10)]);
var inst_9769 = (state_9827[(21)]);
var inst_9768 = (state_9827[(11)]);
var inst_9782 = (state_9827[(2)]);
var inst_9783 = (inst_9770 + (1));
var tmp9848 = inst_9767;
var tmp9849 = inst_9769;
var tmp9850 = inst_9768;
var inst_9767__$1 = tmp9848;
var inst_9768__$1 = tmp9850;
var inst_9769__$1 = tmp9849;
var inst_9770__$1 = inst_9783;
var state_9827__$1 = (function (){var statearr_9854 = state_9827;
(statearr_9854[(20)] = inst_9767__$1);

(statearr_9854[(10)] = inst_9770__$1);

(statearr_9854[(21)] = inst_9769__$1);

(statearr_9854[(11)] = inst_9768__$1);

(statearr_9854[(22)] = inst_9782);

return statearr_9854;
})();
var statearr_9855_9929 = state_9827__$1;
(statearr_9855_9929[(2)] = null);

(statearr_9855_9929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (40))){
var inst_9795 = (state_9827[(23)]);
var inst_9799 = done.call(null,null);
var inst_9800 = cljs.core.async.untap_STAR_.call(null,m,inst_9795);
var state_9827__$1 = (function (){var statearr_9856 = state_9827;
(statearr_9856[(24)] = inst_9799);

return statearr_9856;
})();
var statearr_9857_9930 = state_9827__$1;
(statearr_9857_9930[(2)] = inst_9800);

(statearr_9857_9930[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (33))){
var inst_9786 = (state_9827[(25)]);
var inst_9788 = cljs.core.chunked_seq_QMARK_.call(null,inst_9786);
var state_9827__$1 = state_9827;
if(inst_9788){
var statearr_9858_9931 = state_9827__$1;
(statearr_9858_9931[(1)] = (36));

} else {
var statearr_9859_9932 = state_9827__$1;
(statearr_9859_9932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (13))){
var inst_9718 = (state_9827[(26)]);
var inst_9721 = cljs.core.async.close_BANG_.call(null,inst_9718);
var state_9827__$1 = state_9827;
var statearr_9860_9933 = state_9827__$1;
(statearr_9860_9933[(2)] = inst_9721);

(statearr_9860_9933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (22))){
var inst_9739 = (state_9827[(8)]);
var inst_9742 = cljs.core.async.close_BANG_.call(null,inst_9739);
var state_9827__$1 = state_9827;
var statearr_9861_9934 = state_9827__$1;
(statearr_9861_9934[(2)] = inst_9742);

(statearr_9861_9934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (36))){
var inst_9786 = (state_9827[(25)]);
var inst_9790 = cljs.core.chunk_first.call(null,inst_9786);
var inst_9791 = cljs.core.chunk_rest.call(null,inst_9786);
var inst_9792 = cljs.core.count.call(null,inst_9790);
var inst_9767 = inst_9791;
var inst_9768 = inst_9790;
var inst_9769 = inst_9792;
var inst_9770 = (0);
var state_9827__$1 = (function (){var statearr_9862 = state_9827;
(statearr_9862[(20)] = inst_9767);

(statearr_9862[(10)] = inst_9770);

(statearr_9862[(21)] = inst_9769);

(statearr_9862[(11)] = inst_9768);

return statearr_9862;
})();
var statearr_9863_9935 = state_9827__$1;
(statearr_9863_9935[(2)] = null);

(statearr_9863_9935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (41))){
var inst_9786 = (state_9827[(25)]);
var inst_9802 = (state_9827[(2)]);
var inst_9803 = cljs.core.next.call(null,inst_9786);
var inst_9767 = inst_9803;
var inst_9768 = null;
var inst_9769 = (0);
var inst_9770 = (0);
var state_9827__$1 = (function (){var statearr_9864 = state_9827;
(statearr_9864[(20)] = inst_9767);

(statearr_9864[(10)] = inst_9770);

(statearr_9864[(27)] = inst_9802);

(statearr_9864[(21)] = inst_9769);

(statearr_9864[(11)] = inst_9768);

return statearr_9864;
})();
var statearr_9865_9936 = state_9827__$1;
(statearr_9865_9936[(2)] = null);

(statearr_9865_9936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (43))){
var state_9827__$1 = state_9827;
var statearr_9866_9937 = state_9827__$1;
(statearr_9866_9937[(2)] = null);

(statearr_9866_9937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (29))){
var inst_9811 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9867_9938 = state_9827__$1;
(statearr_9867_9938[(2)] = inst_9811);

(statearr_9867_9938[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (44))){
var inst_9820 = (state_9827[(2)]);
var state_9827__$1 = (function (){var statearr_9868 = state_9827;
(statearr_9868[(28)] = inst_9820);

return statearr_9868;
})();
var statearr_9869_9939 = state_9827__$1;
(statearr_9869_9939[(2)] = null);

(statearr_9869_9939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (6))){
var inst_9759 = (state_9827[(29)]);
var inst_9758 = cljs.core.deref.call(null,cs);
var inst_9759__$1 = cljs.core.keys.call(null,inst_9758);
var inst_9760 = cljs.core.count.call(null,inst_9759__$1);
var inst_9761 = cljs.core.reset_BANG_.call(null,dctr,inst_9760);
var inst_9766 = cljs.core.seq.call(null,inst_9759__$1);
var inst_9767 = inst_9766;
var inst_9768 = null;
var inst_9769 = (0);
var inst_9770 = (0);
var state_9827__$1 = (function (){var statearr_9870 = state_9827;
(statearr_9870[(29)] = inst_9759__$1);

(statearr_9870[(20)] = inst_9767);

(statearr_9870[(10)] = inst_9770);

(statearr_9870[(30)] = inst_9761);

(statearr_9870[(21)] = inst_9769);

(statearr_9870[(11)] = inst_9768);

return statearr_9870;
})();
var statearr_9871_9940 = state_9827__$1;
(statearr_9871_9940[(2)] = null);

(statearr_9871_9940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (28))){
var inst_9786 = (state_9827[(25)]);
var inst_9767 = (state_9827[(20)]);
var inst_9786__$1 = cljs.core.seq.call(null,inst_9767);
var state_9827__$1 = (function (){var statearr_9872 = state_9827;
(statearr_9872[(25)] = inst_9786__$1);

return statearr_9872;
})();
if(inst_9786__$1){
var statearr_9873_9941 = state_9827__$1;
(statearr_9873_9941[(1)] = (33));

} else {
var statearr_9874_9942 = state_9827__$1;
(statearr_9874_9942[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (25))){
var inst_9770 = (state_9827[(10)]);
var inst_9769 = (state_9827[(21)]);
var inst_9772 = (inst_9770 < inst_9769);
var inst_9773 = inst_9772;
var state_9827__$1 = state_9827;
if(cljs.core.truth_(inst_9773)){
var statearr_9875_9943 = state_9827__$1;
(statearr_9875_9943[(1)] = (27));

} else {
var statearr_9876_9944 = state_9827__$1;
(statearr_9876_9944[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (34))){
var state_9827__$1 = state_9827;
var statearr_9877_9945 = state_9827__$1;
(statearr_9877_9945[(2)] = null);

(statearr_9877_9945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (17))){
var state_9827__$1 = state_9827;
var statearr_9878_9946 = state_9827__$1;
(statearr_9878_9946[(2)] = null);

(statearr_9878_9946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (3))){
var inst_9825 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9827__$1,inst_9825);
} else {
if((state_val_9828 === (12))){
var inst_9754 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9879_9947 = state_9827__$1;
(statearr_9879_9947[(2)] = inst_9754);

(statearr_9879_9947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (2))){
var state_9827__$1 = state_9827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9827__$1,(4),ch);
} else {
if((state_val_9828 === (23))){
var state_9827__$1 = state_9827;
var statearr_9880_9948 = state_9827__$1;
(statearr_9880_9948[(2)] = null);

(statearr_9880_9948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (35))){
var inst_9809 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9881_9949 = state_9827__$1;
(statearr_9881_9949[(2)] = inst_9809);

(statearr_9881_9949[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (19))){
var inst_9728 = (state_9827[(7)]);
var inst_9732 = cljs.core.chunk_first.call(null,inst_9728);
var inst_9733 = cljs.core.chunk_rest.call(null,inst_9728);
var inst_9734 = cljs.core.count.call(null,inst_9732);
var inst_9708 = inst_9733;
var inst_9709 = inst_9732;
var inst_9710 = inst_9734;
var inst_9711 = (0);
var state_9827__$1 = (function (){var statearr_9882 = state_9827;
(statearr_9882[(13)] = inst_9709);

(statearr_9882[(14)] = inst_9708);

(statearr_9882[(15)] = inst_9710);

(statearr_9882[(16)] = inst_9711);

return statearr_9882;
})();
var statearr_9883_9950 = state_9827__$1;
(statearr_9883_9950[(2)] = null);

(statearr_9883_9950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (11))){
var inst_9708 = (state_9827[(14)]);
var inst_9728 = (state_9827[(7)]);
var inst_9728__$1 = cljs.core.seq.call(null,inst_9708);
var state_9827__$1 = (function (){var statearr_9884 = state_9827;
(statearr_9884[(7)] = inst_9728__$1);

return statearr_9884;
})();
if(inst_9728__$1){
var statearr_9885_9951 = state_9827__$1;
(statearr_9885_9951[(1)] = (16));

} else {
var statearr_9886_9952 = state_9827__$1;
(statearr_9886_9952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (9))){
var inst_9756 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9887_9953 = state_9827__$1;
(statearr_9887_9953[(2)] = inst_9756);

(statearr_9887_9953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (5))){
var inst_9706 = cljs.core.deref.call(null,cs);
var inst_9707 = cljs.core.seq.call(null,inst_9706);
var inst_9708 = inst_9707;
var inst_9709 = null;
var inst_9710 = (0);
var inst_9711 = (0);
var state_9827__$1 = (function (){var statearr_9888 = state_9827;
(statearr_9888[(13)] = inst_9709);

(statearr_9888[(14)] = inst_9708);

(statearr_9888[(15)] = inst_9710);

(statearr_9888[(16)] = inst_9711);

return statearr_9888;
})();
var statearr_9889_9954 = state_9827__$1;
(statearr_9889_9954[(2)] = null);

(statearr_9889_9954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (14))){
var state_9827__$1 = state_9827;
var statearr_9890_9955 = state_9827__$1;
(statearr_9890_9955[(2)] = null);

(statearr_9890_9955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (45))){
var inst_9817 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9891_9956 = state_9827__$1;
(statearr_9891_9956[(2)] = inst_9817);

(statearr_9891_9956[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (26))){
var inst_9759 = (state_9827[(29)]);
var inst_9813 = (state_9827[(2)]);
var inst_9814 = cljs.core.seq.call(null,inst_9759);
var state_9827__$1 = (function (){var statearr_9892 = state_9827;
(statearr_9892[(31)] = inst_9813);

return statearr_9892;
})();
if(inst_9814){
var statearr_9893_9957 = state_9827__$1;
(statearr_9893_9957[(1)] = (42));

} else {
var statearr_9894_9958 = state_9827__$1;
(statearr_9894_9958[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (16))){
var inst_9728 = (state_9827[(7)]);
var inst_9730 = cljs.core.chunked_seq_QMARK_.call(null,inst_9728);
var state_9827__$1 = state_9827;
if(inst_9730){
var statearr_9895_9959 = state_9827__$1;
(statearr_9895_9959[(1)] = (19));

} else {
var statearr_9896_9960 = state_9827__$1;
(statearr_9896_9960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (38))){
var inst_9806 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9897_9961 = state_9827__$1;
(statearr_9897_9961[(2)] = inst_9806);

(statearr_9897_9961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (30))){
var state_9827__$1 = state_9827;
var statearr_9898_9962 = state_9827__$1;
(statearr_9898_9962[(2)] = null);

(statearr_9898_9962[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (10))){
var inst_9709 = (state_9827[(13)]);
var inst_9711 = (state_9827[(16)]);
var inst_9717 = cljs.core._nth.call(null,inst_9709,inst_9711);
var inst_9718 = cljs.core.nth.call(null,inst_9717,(0),null);
var inst_9719 = cljs.core.nth.call(null,inst_9717,(1),null);
var state_9827__$1 = (function (){var statearr_9899 = state_9827;
(statearr_9899[(26)] = inst_9718);

return statearr_9899;
})();
if(cljs.core.truth_(inst_9719)){
var statearr_9900_9963 = state_9827__$1;
(statearr_9900_9963[(1)] = (13));

} else {
var statearr_9901_9964 = state_9827__$1;
(statearr_9901_9964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (18))){
var inst_9752 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
var statearr_9902_9965 = state_9827__$1;
(statearr_9902_9965[(2)] = inst_9752);

(statearr_9902_9965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (42))){
var state_9827__$1 = state_9827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9827__$1,(45),dchan);
} else {
if((state_val_9828 === (37))){
var inst_9786 = (state_9827[(25)]);
var inst_9795 = (state_9827[(23)]);
var inst_9699 = (state_9827[(12)]);
var inst_9795__$1 = cljs.core.first.call(null,inst_9786);
var inst_9796 = cljs.core.async.put_BANG_.call(null,inst_9795__$1,inst_9699,done);
var state_9827__$1 = (function (){var statearr_9903 = state_9827;
(statearr_9903[(23)] = inst_9795__$1);

return statearr_9903;
})();
if(cljs.core.truth_(inst_9796)){
var statearr_9904_9966 = state_9827__$1;
(statearr_9904_9966[(1)] = (39));

} else {
var statearr_9905_9967 = state_9827__$1;
(statearr_9905_9967[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9828 === (8))){
var inst_9710 = (state_9827[(15)]);
var inst_9711 = (state_9827[(16)]);
var inst_9713 = (inst_9711 < inst_9710);
var inst_9714 = inst_9713;
var state_9827__$1 = state_9827;
if(cljs.core.truth_(inst_9714)){
var statearr_9906_9968 = state_9827__$1;
(statearr_9906_9968[(1)] = (10));

} else {
var statearr_9907_9969 = state_9827__$1;
(statearr_9907_9969[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___9915,cs,m,dchan,dctr,done))
;
return ((function (switch__8496__auto__,c__8608__auto___9915,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8497__auto__ = null;
var cljs$core$async$mult_$_state_machine__8497__auto____0 = (function (){
var statearr_9911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9911[(0)] = cljs$core$async$mult_$_state_machine__8497__auto__);

(statearr_9911[(1)] = (1));

return statearr_9911;
});
var cljs$core$async$mult_$_state_machine__8497__auto____1 = (function (state_9827){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_9827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e9912){if((e9912 instanceof Object)){
var ex__8500__auto__ = e9912;
var statearr_9913_9970 = state_9827;
(statearr_9913_9970[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9971 = state_9827;
state_9827 = G__9971;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8497__auto__ = function(state_9827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8497__auto____1.call(this,state_9827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8497__auto____0;
cljs$core$async$mult_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8497__auto____1;
return cljs$core$async$mult_$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___9915,cs,m,dchan,dctr,done))
})();
var state__8610__auto__ = (function (){var statearr_9914 = f__8609__auto__.call(null);
(statearr_9914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___9915);

return statearr_9914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___9915,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args9972 = [];
var len__6046__auto___9975 = arguments.length;
var i__6047__auto___9976 = (0);
while(true){
if((i__6047__auto___9976 < len__6046__auto___9975)){
args9972.push((arguments[i__6047__auto___9976]));

var G__9977 = (i__6047__auto___9976 + (1));
i__6047__auto___9976 = G__9977;
continue;
} else {
}
break;
}

var G__9974 = args9972.length;
switch (G__9974) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9972.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m);
} else {
var m__5644__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,state_map);
} else {
var m__5644__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5643__auto__ = (((m == null))?null:m);
var m__5644__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,m,mode);
} else {
var m__5644__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___9989 = arguments.length;
var i__6047__auto___9990 = (0);
while(true){
if((i__6047__auto___9990 < len__6046__auto___9989)){
args__6053__auto__.push((arguments[i__6047__auto___9990]));

var G__9991 = (i__6047__auto___9990 + (1));
i__6047__auto___9990 = G__9991;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((3) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6054__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9983){
var map__9984 = p__9983;
var map__9984__$1 = ((((!((map__9984 == null)))?((((map__9984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9984):map__9984);
var opts = map__9984__$1;
var statearr_9986_9992 = state;
(statearr_9986_9992[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__9984,map__9984__$1,opts){
return (function (val){
var statearr_9987_9993 = state;
(statearr_9987_9993[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__9984,map__9984__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_9988_9994 = state;
(statearr_9988_9994[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9979){
var G__9980 = cljs.core.first.call(null,seq9979);
var seq9979__$1 = cljs.core.next.call(null,seq9979);
var G__9981 = cljs.core.first.call(null,seq9979__$1);
var seq9979__$2 = cljs.core.next.call(null,seq9979__$1);
var G__9982 = cljs.core.first.call(null,seq9979__$2);
var seq9979__$3 = cljs.core.next.call(null,seq9979__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9980,G__9981,G__9982,seq9979__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10158 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10159){
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
this.meta10159 = meta10159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10160,meta10159__$1){
var self__ = this;
var _10160__$1 = this;
return (new cljs.core.async.t_cljs$core$async10158(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10159__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10160){
var self__ = this;
var _10160__$1 = this;
return self__.meta10159;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10159","meta10159",-947526703,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10158";

cljs.core.async.t_cljs$core$async10158.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async10158");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10158 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10159){
return (new cljs.core.async.t_cljs$core$async10158(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10159));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10158(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8608__auto___10321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___10321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___10321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10258){
var state_val_10259 = (state_10258[(1)]);
if((state_val_10259 === (7))){
var inst_10176 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10260_10322 = state_10258__$1;
(statearr_10260_10322[(2)] = inst_10176);

(statearr_10260_10322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (20))){
var inst_10188 = (state_10258[(7)]);
var state_10258__$1 = state_10258;
var statearr_10261_10323 = state_10258__$1;
(statearr_10261_10323[(2)] = inst_10188);

(statearr_10261_10323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (27))){
var state_10258__$1 = state_10258;
var statearr_10262_10324 = state_10258__$1;
(statearr_10262_10324[(2)] = null);

(statearr_10262_10324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (1))){
var inst_10164 = (state_10258[(8)]);
var inst_10164__$1 = calc_state.call(null);
var inst_10166 = (inst_10164__$1 == null);
var inst_10167 = cljs.core.not.call(null,inst_10166);
var state_10258__$1 = (function (){var statearr_10263 = state_10258;
(statearr_10263[(8)] = inst_10164__$1);

return statearr_10263;
})();
if(inst_10167){
var statearr_10264_10325 = state_10258__$1;
(statearr_10264_10325[(1)] = (2));

} else {
var statearr_10265_10326 = state_10258__$1;
(statearr_10265_10326[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (24))){
var inst_10218 = (state_10258[(9)]);
var inst_10232 = (state_10258[(10)]);
var inst_10211 = (state_10258[(11)]);
var inst_10232__$1 = inst_10211.call(null,inst_10218);
var state_10258__$1 = (function (){var statearr_10266 = state_10258;
(statearr_10266[(10)] = inst_10232__$1);

return statearr_10266;
})();
if(cljs.core.truth_(inst_10232__$1)){
var statearr_10267_10327 = state_10258__$1;
(statearr_10267_10327[(1)] = (29));

} else {
var statearr_10268_10328 = state_10258__$1;
(statearr_10268_10328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (4))){
var inst_10179 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10179)){
var statearr_10269_10329 = state_10258__$1;
(statearr_10269_10329[(1)] = (8));

} else {
var statearr_10270_10330 = state_10258__$1;
(statearr_10270_10330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (15))){
var inst_10205 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10205)){
var statearr_10271_10331 = state_10258__$1;
(statearr_10271_10331[(1)] = (19));

} else {
var statearr_10272_10332 = state_10258__$1;
(statearr_10272_10332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (21))){
var inst_10210 = (state_10258[(12)]);
var inst_10210__$1 = (state_10258[(2)]);
var inst_10211 = cljs.core.get.call(null,inst_10210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10212 = cljs.core.get.call(null,inst_10210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10213 = cljs.core.get.call(null,inst_10210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10258__$1 = (function (){var statearr_10273 = state_10258;
(statearr_10273[(12)] = inst_10210__$1);

(statearr_10273[(13)] = inst_10212);

(statearr_10273[(11)] = inst_10211);

return statearr_10273;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10258__$1,(22),inst_10213);
} else {
if((state_val_10259 === (31))){
var inst_10240 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10240)){
var statearr_10274_10333 = state_10258__$1;
(statearr_10274_10333[(1)] = (32));

} else {
var statearr_10275_10334 = state_10258__$1;
(statearr_10275_10334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (32))){
var inst_10217 = (state_10258[(14)]);
var state_10258__$1 = state_10258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10258__$1,(35),out,inst_10217);
} else {
if((state_val_10259 === (33))){
var inst_10210 = (state_10258[(12)]);
var inst_10188 = inst_10210;
var state_10258__$1 = (function (){var statearr_10276 = state_10258;
(statearr_10276[(7)] = inst_10188);

return statearr_10276;
})();
var statearr_10277_10335 = state_10258__$1;
(statearr_10277_10335[(2)] = null);

(statearr_10277_10335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (13))){
var inst_10188 = (state_10258[(7)]);
var inst_10195 = inst_10188.cljs$lang$protocol_mask$partition0$;
var inst_10196 = (inst_10195 & (64));
var inst_10197 = inst_10188.cljs$core$ISeq$;
var inst_10198 = (inst_10196) || (inst_10197);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10198)){
var statearr_10278_10336 = state_10258__$1;
(statearr_10278_10336[(1)] = (16));

} else {
var statearr_10279_10337 = state_10258__$1;
(statearr_10279_10337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (22))){
var inst_10217 = (state_10258[(14)]);
var inst_10218 = (state_10258[(9)]);
var inst_10216 = (state_10258[(2)]);
var inst_10217__$1 = cljs.core.nth.call(null,inst_10216,(0),null);
var inst_10218__$1 = cljs.core.nth.call(null,inst_10216,(1),null);
var inst_10219 = (inst_10217__$1 == null);
var inst_10220 = cljs.core._EQ_.call(null,inst_10218__$1,change);
var inst_10221 = (inst_10219) || (inst_10220);
var state_10258__$1 = (function (){var statearr_10280 = state_10258;
(statearr_10280[(14)] = inst_10217__$1);

(statearr_10280[(9)] = inst_10218__$1);

return statearr_10280;
})();
if(cljs.core.truth_(inst_10221)){
var statearr_10281_10338 = state_10258__$1;
(statearr_10281_10338[(1)] = (23));

} else {
var statearr_10282_10339 = state_10258__$1;
(statearr_10282_10339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (36))){
var inst_10210 = (state_10258[(12)]);
var inst_10188 = inst_10210;
var state_10258__$1 = (function (){var statearr_10283 = state_10258;
(statearr_10283[(7)] = inst_10188);

return statearr_10283;
})();
var statearr_10284_10340 = state_10258__$1;
(statearr_10284_10340[(2)] = null);

(statearr_10284_10340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (29))){
var inst_10232 = (state_10258[(10)]);
var state_10258__$1 = state_10258;
var statearr_10285_10341 = state_10258__$1;
(statearr_10285_10341[(2)] = inst_10232);

(statearr_10285_10341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (6))){
var state_10258__$1 = state_10258;
var statearr_10286_10342 = state_10258__$1;
(statearr_10286_10342[(2)] = false);

(statearr_10286_10342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (28))){
var inst_10228 = (state_10258[(2)]);
var inst_10229 = calc_state.call(null);
var inst_10188 = inst_10229;
var state_10258__$1 = (function (){var statearr_10287 = state_10258;
(statearr_10287[(15)] = inst_10228);

(statearr_10287[(7)] = inst_10188);

return statearr_10287;
})();
var statearr_10288_10343 = state_10258__$1;
(statearr_10288_10343[(2)] = null);

(statearr_10288_10343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (25))){
var inst_10254 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10289_10344 = state_10258__$1;
(statearr_10289_10344[(2)] = inst_10254);

(statearr_10289_10344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (34))){
var inst_10252 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10290_10345 = state_10258__$1;
(statearr_10290_10345[(2)] = inst_10252);

(statearr_10290_10345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (17))){
var state_10258__$1 = state_10258;
var statearr_10291_10346 = state_10258__$1;
(statearr_10291_10346[(2)] = false);

(statearr_10291_10346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (3))){
var state_10258__$1 = state_10258;
var statearr_10292_10347 = state_10258__$1;
(statearr_10292_10347[(2)] = false);

(statearr_10292_10347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (12))){
var inst_10256 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10258__$1,inst_10256);
} else {
if((state_val_10259 === (2))){
var inst_10164 = (state_10258[(8)]);
var inst_10169 = inst_10164.cljs$lang$protocol_mask$partition0$;
var inst_10170 = (inst_10169 & (64));
var inst_10171 = inst_10164.cljs$core$ISeq$;
var inst_10172 = (inst_10170) || (inst_10171);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10172)){
var statearr_10293_10348 = state_10258__$1;
(statearr_10293_10348[(1)] = (5));

} else {
var statearr_10294_10349 = state_10258__$1;
(statearr_10294_10349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (23))){
var inst_10217 = (state_10258[(14)]);
var inst_10223 = (inst_10217 == null);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10223)){
var statearr_10295_10350 = state_10258__$1;
(statearr_10295_10350[(1)] = (26));

} else {
var statearr_10296_10351 = state_10258__$1;
(statearr_10296_10351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (35))){
var inst_10243 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
if(cljs.core.truth_(inst_10243)){
var statearr_10297_10352 = state_10258__$1;
(statearr_10297_10352[(1)] = (36));

} else {
var statearr_10298_10353 = state_10258__$1;
(statearr_10298_10353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (19))){
var inst_10188 = (state_10258[(7)]);
var inst_10207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10188);
var state_10258__$1 = state_10258;
var statearr_10299_10354 = state_10258__$1;
(statearr_10299_10354[(2)] = inst_10207);

(statearr_10299_10354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (11))){
var inst_10188 = (state_10258[(7)]);
var inst_10192 = (inst_10188 == null);
var inst_10193 = cljs.core.not.call(null,inst_10192);
var state_10258__$1 = state_10258;
if(inst_10193){
var statearr_10300_10355 = state_10258__$1;
(statearr_10300_10355[(1)] = (13));

} else {
var statearr_10301_10356 = state_10258__$1;
(statearr_10301_10356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (9))){
var inst_10164 = (state_10258[(8)]);
var state_10258__$1 = state_10258;
var statearr_10302_10357 = state_10258__$1;
(statearr_10302_10357[(2)] = inst_10164);

(statearr_10302_10357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (5))){
var state_10258__$1 = state_10258;
var statearr_10303_10358 = state_10258__$1;
(statearr_10303_10358[(2)] = true);

(statearr_10303_10358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (14))){
var state_10258__$1 = state_10258;
var statearr_10304_10359 = state_10258__$1;
(statearr_10304_10359[(2)] = false);

(statearr_10304_10359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (26))){
var inst_10218 = (state_10258[(9)]);
var inst_10225 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10218);
var state_10258__$1 = state_10258;
var statearr_10305_10360 = state_10258__$1;
(statearr_10305_10360[(2)] = inst_10225);

(statearr_10305_10360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (16))){
var state_10258__$1 = state_10258;
var statearr_10306_10361 = state_10258__$1;
(statearr_10306_10361[(2)] = true);

(statearr_10306_10361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (38))){
var inst_10248 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10307_10362 = state_10258__$1;
(statearr_10307_10362[(2)] = inst_10248);

(statearr_10307_10362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (30))){
var inst_10218 = (state_10258[(9)]);
var inst_10212 = (state_10258[(13)]);
var inst_10211 = (state_10258[(11)]);
var inst_10235 = cljs.core.empty_QMARK_.call(null,inst_10211);
var inst_10236 = inst_10212.call(null,inst_10218);
var inst_10237 = cljs.core.not.call(null,inst_10236);
var inst_10238 = (inst_10235) && (inst_10237);
var state_10258__$1 = state_10258;
var statearr_10308_10363 = state_10258__$1;
(statearr_10308_10363[(2)] = inst_10238);

(statearr_10308_10363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (10))){
var inst_10164 = (state_10258[(8)]);
var inst_10184 = (state_10258[(2)]);
var inst_10185 = cljs.core.get.call(null,inst_10184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10186 = cljs.core.get.call(null,inst_10184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10187 = cljs.core.get.call(null,inst_10184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10188 = inst_10164;
var state_10258__$1 = (function (){var statearr_10309 = state_10258;
(statearr_10309[(16)] = inst_10185);

(statearr_10309[(17)] = inst_10186);

(statearr_10309[(18)] = inst_10187);

(statearr_10309[(7)] = inst_10188);

return statearr_10309;
})();
var statearr_10310_10364 = state_10258__$1;
(statearr_10310_10364[(2)] = null);

(statearr_10310_10364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (18))){
var inst_10202 = (state_10258[(2)]);
var state_10258__$1 = state_10258;
var statearr_10311_10365 = state_10258__$1;
(statearr_10311_10365[(2)] = inst_10202);

(statearr_10311_10365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (37))){
var state_10258__$1 = state_10258;
var statearr_10312_10366 = state_10258__$1;
(statearr_10312_10366[(2)] = null);

(statearr_10312_10366[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10259 === (8))){
var inst_10164 = (state_10258[(8)]);
var inst_10181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10164);
var state_10258__$1 = state_10258;
var statearr_10313_10367 = state_10258__$1;
(statearr_10313_10367[(2)] = inst_10181);

(statearr_10313_10367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___10321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8496__auto__,c__8608__auto___10321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8497__auto__ = null;
var cljs$core$async$mix_$_state_machine__8497__auto____0 = (function (){
var statearr_10317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10317[(0)] = cljs$core$async$mix_$_state_machine__8497__auto__);

(statearr_10317[(1)] = (1));

return statearr_10317;
});
var cljs$core$async$mix_$_state_machine__8497__auto____1 = (function (state_10258){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_10258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e10318){if((e10318 instanceof Object)){
var ex__8500__auto__ = e10318;
var statearr_10319_10368 = state_10258;
(statearr_10319_10368[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10369 = state_10258;
state_10258 = G__10369;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8497__auto__ = function(state_10258){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8497__auto____1.call(this,state_10258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8497__auto____0;
cljs$core$async$mix_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8497__auto____1;
return cljs$core$async$mix_$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___10321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8610__auto__ = (function (){var statearr_10320 = f__8609__auto__.call(null);
(statearr_10320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___10321);

return statearr_10320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___10321,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5644__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p,v,ch);
} else {
var m__5644__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10370 = [];
var len__6046__auto___10373 = arguments.length;
var i__6047__auto___10374 = (0);
while(true){
if((i__6047__auto___10374 < len__6046__auto___10373)){
args10370.push((arguments[i__6047__auto___10374]));

var G__10375 = (i__6047__auto___10374 + (1));
i__6047__auto___10374 = G__10375;
continue;
} else {
}
break;
}

var G__10372 = args10370.length;
switch (G__10372) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10370.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p);
} else {
var m__5644__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5643__auto__ = (((p == null))?null:p);
var m__5644__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,p,v);
} else {
var m__5644__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args10378 = [];
var len__6046__auto___10503 = arguments.length;
var i__6047__auto___10504 = (0);
while(true){
if((i__6047__auto___10504 < len__6046__auto___10503)){
args10378.push((arguments[i__6047__auto___10504]));

var G__10505 = (i__6047__auto___10504 + (1));
i__6047__auto___10504 = G__10505;
continue;
} else {
}
break;
}

var G__10380 = args10378.length;
switch (G__10380) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10378.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4988__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4988__auto__,mults){
return (function (p1__10377_SHARP_){
if(cljs.core.truth_(p1__10377_SHARP_.call(null,topic))){
return p1__10377_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10377_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4988__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10381 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10382){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10382 = meta10382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10383,meta10382__$1){
var self__ = this;
var _10383__$1 = this;
return (new cljs.core.async.t_cljs$core$async10381(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10382__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10383){
var self__ = this;
var _10383__$1 = this;
return self__.meta10382;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10382","meta10382",1392913201,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10381";

cljs.core.async.t_cljs$core$async10381.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async10381");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10381 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10382){
return (new cljs.core.async.t_cljs$core$async10381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10382));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10381(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8608__auto___10507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___10507,mults,ensure_mult,p){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___10507,mults,ensure_mult,p){
return (function (state_10455){
var state_val_10456 = (state_10455[(1)]);
if((state_val_10456 === (7))){
var inst_10451 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
var statearr_10457_10508 = state_10455__$1;
(statearr_10457_10508[(2)] = inst_10451);

(statearr_10457_10508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (20))){
var state_10455__$1 = state_10455;
var statearr_10458_10509 = state_10455__$1;
(statearr_10458_10509[(2)] = null);

(statearr_10458_10509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (1))){
var state_10455__$1 = state_10455;
var statearr_10459_10510 = state_10455__$1;
(statearr_10459_10510[(2)] = null);

(statearr_10459_10510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (24))){
var inst_10434 = (state_10455[(7)]);
var inst_10443 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10434);
var state_10455__$1 = state_10455;
var statearr_10460_10511 = state_10455__$1;
(statearr_10460_10511[(2)] = inst_10443);

(statearr_10460_10511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (4))){
var inst_10386 = (state_10455[(8)]);
var inst_10386__$1 = (state_10455[(2)]);
var inst_10387 = (inst_10386__$1 == null);
var state_10455__$1 = (function (){var statearr_10461 = state_10455;
(statearr_10461[(8)] = inst_10386__$1);

return statearr_10461;
})();
if(cljs.core.truth_(inst_10387)){
var statearr_10462_10512 = state_10455__$1;
(statearr_10462_10512[(1)] = (5));

} else {
var statearr_10463_10513 = state_10455__$1;
(statearr_10463_10513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (15))){
var inst_10428 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
var statearr_10464_10514 = state_10455__$1;
(statearr_10464_10514[(2)] = inst_10428);

(statearr_10464_10514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (21))){
var inst_10448 = (state_10455[(2)]);
var state_10455__$1 = (function (){var statearr_10465 = state_10455;
(statearr_10465[(9)] = inst_10448);

return statearr_10465;
})();
var statearr_10466_10515 = state_10455__$1;
(statearr_10466_10515[(2)] = null);

(statearr_10466_10515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (13))){
var inst_10410 = (state_10455[(10)]);
var inst_10412 = cljs.core.chunked_seq_QMARK_.call(null,inst_10410);
var state_10455__$1 = state_10455;
if(inst_10412){
var statearr_10467_10516 = state_10455__$1;
(statearr_10467_10516[(1)] = (16));

} else {
var statearr_10468_10517 = state_10455__$1;
(statearr_10468_10517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (22))){
var inst_10440 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
if(cljs.core.truth_(inst_10440)){
var statearr_10469_10518 = state_10455__$1;
(statearr_10469_10518[(1)] = (23));

} else {
var statearr_10470_10519 = state_10455__$1;
(statearr_10470_10519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (6))){
var inst_10436 = (state_10455[(11)]);
var inst_10386 = (state_10455[(8)]);
var inst_10434 = (state_10455[(7)]);
var inst_10434__$1 = topic_fn.call(null,inst_10386);
var inst_10435 = cljs.core.deref.call(null,mults);
var inst_10436__$1 = cljs.core.get.call(null,inst_10435,inst_10434__$1);
var state_10455__$1 = (function (){var statearr_10471 = state_10455;
(statearr_10471[(11)] = inst_10436__$1);

(statearr_10471[(7)] = inst_10434__$1);

return statearr_10471;
})();
if(cljs.core.truth_(inst_10436__$1)){
var statearr_10472_10520 = state_10455__$1;
(statearr_10472_10520[(1)] = (19));

} else {
var statearr_10473_10521 = state_10455__$1;
(statearr_10473_10521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (25))){
var inst_10445 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
var statearr_10474_10522 = state_10455__$1;
(statearr_10474_10522[(2)] = inst_10445);

(statearr_10474_10522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (17))){
var inst_10410 = (state_10455[(10)]);
var inst_10419 = cljs.core.first.call(null,inst_10410);
var inst_10420 = cljs.core.async.muxch_STAR_.call(null,inst_10419);
var inst_10421 = cljs.core.async.close_BANG_.call(null,inst_10420);
var inst_10422 = cljs.core.next.call(null,inst_10410);
var inst_10396 = inst_10422;
var inst_10397 = null;
var inst_10398 = (0);
var inst_10399 = (0);
var state_10455__$1 = (function (){var statearr_10475 = state_10455;
(statearr_10475[(12)] = inst_10399);

(statearr_10475[(13)] = inst_10398);

(statearr_10475[(14)] = inst_10421);

(statearr_10475[(15)] = inst_10396);

(statearr_10475[(16)] = inst_10397);

return statearr_10475;
})();
var statearr_10476_10523 = state_10455__$1;
(statearr_10476_10523[(2)] = null);

(statearr_10476_10523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (3))){
var inst_10453 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10455__$1,inst_10453);
} else {
if((state_val_10456 === (12))){
var inst_10430 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
var statearr_10477_10524 = state_10455__$1;
(statearr_10477_10524[(2)] = inst_10430);

(statearr_10477_10524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (2))){
var state_10455__$1 = state_10455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10455__$1,(4),ch);
} else {
if((state_val_10456 === (23))){
var state_10455__$1 = state_10455;
var statearr_10478_10525 = state_10455__$1;
(statearr_10478_10525[(2)] = null);

(statearr_10478_10525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (19))){
var inst_10436 = (state_10455[(11)]);
var inst_10386 = (state_10455[(8)]);
var inst_10438 = cljs.core.async.muxch_STAR_.call(null,inst_10436);
var state_10455__$1 = state_10455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10455__$1,(22),inst_10438,inst_10386);
} else {
if((state_val_10456 === (11))){
var inst_10396 = (state_10455[(15)]);
var inst_10410 = (state_10455[(10)]);
var inst_10410__$1 = cljs.core.seq.call(null,inst_10396);
var state_10455__$1 = (function (){var statearr_10479 = state_10455;
(statearr_10479[(10)] = inst_10410__$1);

return statearr_10479;
})();
if(inst_10410__$1){
var statearr_10480_10526 = state_10455__$1;
(statearr_10480_10526[(1)] = (13));

} else {
var statearr_10481_10527 = state_10455__$1;
(statearr_10481_10527[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (9))){
var inst_10432 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
var statearr_10482_10528 = state_10455__$1;
(statearr_10482_10528[(2)] = inst_10432);

(statearr_10482_10528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (5))){
var inst_10393 = cljs.core.deref.call(null,mults);
var inst_10394 = cljs.core.vals.call(null,inst_10393);
var inst_10395 = cljs.core.seq.call(null,inst_10394);
var inst_10396 = inst_10395;
var inst_10397 = null;
var inst_10398 = (0);
var inst_10399 = (0);
var state_10455__$1 = (function (){var statearr_10483 = state_10455;
(statearr_10483[(12)] = inst_10399);

(statearr_10483[(13)] = inst_10398);

(statearr_10483[(15)] = inst_10396);

(statearr_10483[(16)] = inst_10397);

return statearr_10483;
})();
var statearr_10484_10529 = state_10455__$1;
(statearr_10484_10529[(2)] = null);

(statearr_10484_10529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (14))){
var state_10455__$1 = state_10455;
var statearr_10488_10530 = state_10455__$1;
(statearr_10488_10530[(2)] = null);

(statearr_10488_10530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (16))){
var inst_10410 = (state_10455[(10)]);
var inst_10414 = cljs.core.chunk_first.call(null,inst_10410);
var inst_10415 = cljs.core.chunk_rest.call(null,inst_10410);
var inst_10416 = cljs.core.count.call(null,inst_10414);
var inst_10396 = inst_10415;
var inst_10397 = inst_10414;
var inst_10398 = inst_10416;
var inst_10399 = (0);
var state_10455__$1 = (function (){var statearr_10489 = state_10455;
(statearr_10489[(12)] = inst_10399);

(statearr_10489[(13)] = inst_10398);

(statearr_10489[(15)] = inst_10396);

(statearr_10489[(16)] = inst_10397);

return statearr_10489;
})();
var statearr_10490_10531 = state_10455__$1;
(statearr_10490_10531[(2)] = null);

(statearr_10490_10531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (10))){
var inst_10399 = (state_10455[(12)]);
var inst_10398 = (state_10455[(13)]);
var inst_10396 = (state_10455[(15)]);
var inst_10397 = (state_10455[(16)]);
var inst_10404 = cljs.core._nth.call(null,inst_10397,inst_10399);
var inst_10405 = cljs.core.async.muxch_STAR_.call(null,inst_10404);
var inst_10406 = cljs.core.async.close_BANG_.call(null,inst_10405);
var inst_10407 = (inst_10399 + (1));
var tmp10485 = inst_10398;
var tmp10486 = inst_10396;
var tmp10487 = inst_10397;
var inst_10396__$1 = tmp10486;
var inst_10397__$1 = tmp10487;
var inst_10398__$1 = tmp10485;
var inst_10399__$1 = inst_10407;
var state_10455__$1 = (function (){var statearr_10491 = state_10455;
(statearr_10491[(12)] = inst_10399__$1);

(statearr_10491[(17)] = inst_10406);

(statearr_10491[(13)] = inst_10398__$1);

(statearr_10491[(15)] = inst_10396__$1);

(statearr_10491[(16)] = inst_10397__$1);

return statearr_10491;
})();
var statearr_10492_10532 = state_10455__$1;
(statearr_10492_10532[(2)] = null);

(statearr_10492_10532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (18))){
var inst_10425 = (state_10455[(2)]);
var state_10455__$1 = state_10455;
var statearr_10493_10533 = state_10455__$1;
(statearr_10493_10533[(2)] = inst_10425);

(statearr_10493_10533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10456 === (8))){
var inst_10399 = (state_10455[(12)]);
var inst_10398 = (state_10455[(13)]);
var inst_10401 = (inst_10399 < inst_10398);
var inst_10402 = inst_10401;
var state_10455__$1 = state_10455;
if(cljs.core.truth_(inst_10402)){
var statearr_10494_10534 = state_10455__$1;
(statearr_10494_10534[(1)] = (10));

} else {
var statearr_10495_10535 = state_10455__$1;
(statearr_10495_10535[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___10507,mults,ensure_mult,p))
;
return ((function (switch__8496__auto__,c__8608__auto___10507,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_10499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10499[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_10499[(1)] = (1));

return statearr_10499;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_10455){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_10455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e10500){if((e10500 instanceof Object)){
var ex__8500__auto__ = e10500;
var statearr_10501_10536 = state_10455;
(statearr_10501_10536[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10537 = state_10455;
state_10455 = G__10537;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_10455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_10455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___10507,mults,ensure_mult,p))
})();
var state__8610__auto__ = (function (){var statearr_10502 = f__8609__auto__.call(null);
(statearr_10502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___10507);

return statearr_10502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___10507,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10538 = [];
var len__6046__auto___10541 = arguments.length;
var i__6047__auto___10542 = (0);
while(true){
if((i__6047__auto___10542 < len__6046__auto___10541)){
args10538.push((arguments[i__6047__auto___10542]));

var G__10543 = (i__6047__auto___10542 + (1));
i__6047__auto___10542 = G__10543;
continue;
} else {
}
break;
}

var G__10540 = args10538.length;
switch (G__10540) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10538.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10545 = [];
var len__6046__auto___10548 = arguments.length;
var i__6047__auto___10549 = (0);
while(true){
if((i__6047__auto___10549 < len__6046__auto___10548)){
args10545.push((arguments[i__6047__auto___10549]));

var G__10550 = (i__6047__auto___10549 + (1));
i__6047__auto___10549 = G__10550;
continue;
} else {
}
break;
}

var G__10547 = args10545.length;
switch (G__10547) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10545.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args10552 = [];
var len__6046__auto___10623 = arguments.length;
var i__6047__auto___10624 = (0);
while(true){
if((i__6047__auto___10624 < len__6046__auto___10623)){
args10552.push((arguments[i__6047__auto___10624]));

var G__10625 = (i__6047__auto___10624 + (1));
i__6047__auto___10624 = G__10625;
continue;
} else {
}
break;
}

var G__10554 = args10552.length;
switch (G__10554) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10552.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8608__auto___10627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___10627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___10627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10593){
var state_val_10594 = (state_10593[(1)]);
if((state_val_10594 === (7))){
var state_10593__$1 = state_10593;
var statearr_10595_10628 = state_10593__$1;
(statearr_10595_10628[(2)] = null);

(statearr_10595_10628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (1))){
var state_10593__$1 = state_10593;
var statearr_10596_10629 = state_10593__$1;
(statearr_10596_10629[(2)] = null);

(statearr_10596_10629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (4))){
var inst_10557 = (state_10593[(7)]);
var inst_10559 = (inst_10557 < cnt);
var state_10593__$1 = state_10593;
if(cljs.core.truth_(inst_10559)){
var statearr_10597_10630 = state_10593__$1;
(statearr_10597_10630[(1)] = (6));

} else {
var statearr_10598_10631 = state_10593__$1;
(statearr_10598_10631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (15))){
var inst_10589 = (state_10593[(2)]);
var state_10593__$1 = state_10593;
var statearr_10599_10632 = state_10593__$1;
(statearr_10599_10632[(2)] = inst_10589);

(statearr_10599_10632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (13))){
var inst_10582 = cljs.core.async.close_BANG_.call(null,out);
var state_10593__$1 = state_10593;
var statearr_10600_10633 = state_10593__$1;
(statearr_10600_10633[(2)] = inst_10582);

(statearr_10600_10633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (6))){
var state_10593__$1 = state_10593;
var statearr_10601_10634 = state_10593__$1;
(statearr_10601_10634[(2)] = null);

(statearr_10601_10634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (3))){
var inst_10591 = (state_10593[(2)]);
var state_10593__$1 = state_10593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10593__$1,inst_10591);
} else {
if((state_val_10594 === (12))){
var inst_10579 = (state_10593[(8)]);
var inst_10579__$1 = (state_10593[(2)]);
var inst_10580 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10579__$1);
var state_10593__$1 = (function (){var statearr_10602 = state_10593;
(statearr_10602[(8)] = inst_10579__$1);

return statearr_10602;
})();
if(cljs.core.truth_(inst_10580)){
var statearr_10603_10635 = state_10593__$1;
(statearr_10603_10635[(1)] = (13));

} else {
var statearr_10604_10636 = state_10593__$1;
(statearr_10604_10636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (2))){
var inst_10556 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10557 = (0);
var state_10593__$1 = (function (){var statearr_10605 = state_10593;
(statearr_10605[(9)] = inst_10556);

(statearr_10605[(7)] = inst_10557);

return statearr_10605;
})();
var statearr_10606_10637 = state_10593__$1;
(statearr_10606_10637[(2)] = null);

(statearr_10606_10637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (11))){
var inst_10557 = (state_10593[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10593,(10),Object,null,(9));
var inst_10566 = chs__$1.call(null,inst_10557);
var inst_10567 = done.call(null,inst_10557);
var inst_10568 = cljs.core.async.take_BANG_.call(null,inst_10566,inst_10567);
var state_10593__$1 = state_10593;
var statearr_10607_10638 = state_10593__$1;
(statearr_10607_10638[(2)] = inst_10568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (9))){
var inst_10557 = (state_10593[(7)]);
var inst_10570 = (state_10593[(2)]);
var inst_10571 = (inst_10557 + (1));
var inst_10557__$1 = inst_10571;
var state_10593__$1 = (function (){var statearr_10608 = state_10593;
(statearr_10608[(10)] = inst_10570);

(statearr_10608[(7)] = inst_10557__$1);

return statearr_10608;
})();
var statearr_10609_10639 = state_10593__$1;
(statearr_10609_10639[(2)] = null);

(statearr_10609_10639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (5))){
var inst_10577 = (state_10593[(2)]);
var state_10593__$1 = (function (){var statearr_10610 = state_10593;
(statearr_10610[(11)] = inst_10577);

return statearr_10610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10593__$1,(12),dchan);
} else {
if((state_val_10594 === (14))){
var inst_10579 = (state_10593[(8)]);
var inst_10584 = cljs.core.apply.call(null,f,inst_10579);
var state_10593__$1 = state_10593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10593__$1,(16),out,inst_10584);
} else {
if((state_val_10594 === (16))){
var inst_10586 = (state_10593[(2)]);
var state_10593__$1 = (function (){var statearr_10611 = state_10593;
(statearr_10611[(12)] = inst_10586);

return statearr_10611;
})();
var statearr_10612_10640 = state_10593__$1;
(statearr_10612_10640[(2)] = null);

(statearr_10612_10640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (10))){
var inst_10561 = (state_10593[(2)]);
var inst_10562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10593__$1 = (function (){var statearr_10613 = state_10593;
(statearr_10613[(13)] = inst_10561);

return statearr_10613;
})();
var statearr_10614_10641 = state_10593__$1;
(statearr_10614_10641[(2)] = inst_10562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10594 === (8))){
var inst_10575 = (state_10593[(2)]);
var state_10593__$1 = state_10593;
var statearr_10615_10642 = state_10593__$1;
(statearr_10615_10642[(2)] = inst_10575);

(statearr_10615_10642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___10627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8496__auto__,c__8608__auto___10627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_10619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10619[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_10619[(1)] = (1));

return statearr_10619;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_10593){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_10593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e10620){if((e10620 instanceof Object)){
var ex__8500__auto__ = e10620;
var statearr_10621_10643 = state_10593;
(statearr_10621_10643[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10644 = state_10593;
state_10593 = G__10644;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_10593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_10593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___10627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8610__auto__ = (function (){var statearr_10622 = f__8609__auto__.call(null);
(statearr_10622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___10627);

return statearr_10622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___10627,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args10646 = [];
var len__6046__auto___10702 = arguments.length;
var i__6047__auto___10703 = (0);
while(true){
if((i__6047__auto___10703 < len__6046__auto___10702)){
args10646.push((arguments[i__6047__auto___10703]));

var G__10704 = (i__6047__auto___10703 + (1));
i__6047__auto___10703 = G__10704;
continue;
} else {
}
break;
}

var G__10648 = args10646.length;
switch (G__10648) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10646.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8608__auto___10706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___10706,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___10706,out){
return (function (state_10678){
var state_val_10679 = (state_10678[(1)]);
if((state_val_10679 === (7))){
var inst_10658 = (state_10678[(7)]);
var inst_10657 = (state_10678[(8)]);
var inst_10657__$1 = (state_10678[(2)]);
var inst_10658__$1 = cljs.core.nth.call(null,inst_10657__$1,(0),null);
var inst_10659 = cljs.core.nth.call(null,inst_10657__$1,(1),null);
var inst_10660 = (inst_10658__$1 == null);
var state_10678__$1 = (function (){var statearr_10680 = state_10678;
(statearr_10680[(9)] = inst_10659);

(statearr_10680[(7)] = inst_10658__$1);

(statearr_10680[(8)] = inst_10657__$1);

return statearr_10680;
})();
if(cljs.core.truth_(inst_10660)){
var statearr_10681_10707 = state_10678__$1;
(statearr_10681_10707[(1)] = (8));

} else {
var statearr_10682_10708 = state_10678__$1;
(statearr_10682_10708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (1))){
var inst_10649 = cljs.core.vec.call(null,chs);
var inst_10650 = inst_10649;
var state_10678__$1 = (function (){var statearr_10683 = state_10678;
(statearr_10683[(10)] = inst_10650);

return statearr_10683;
})();
var statearr_10684_10709 = state_10678__$1;
(statearr_10684_10709[(2)] = null);

(statearr_10684_10709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (4))){
var inst_10650 = (state_10678[(10)]);
var state_10678__$1 = state_10678;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10678__$1,(7),inst_10650);
} else {
if((state_val_10679 === (6))){
var inst_10674 = (state_10678[(2)]);
var state_10678__$1 = state_10678;
var statearr_10685_10710 = state_10678__$1;
(statearr_10685_10710[(2)] = inst_10674);

(statearr_10685_10710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (3))){
var inst_10676 = (state_10678[(2)]);
var state_10678__$1 = state_10678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10678__$1,inst_10676);
} else {
if((state_val_10679 === (2))){
var inst_10650 = (state_10678[(10)]);
var inst_10652 = cljs.core.count.call(null,inst_10650);
var inst_10653 = (inst_10652 > (0));
var state_10678__$1 = state_10678;
if(cljs.core.truth_(inst_10653)){
var statearr_10687_10711 = state_10678__$1;
(statearr_10687_10711[(1)] = (4));

} else {
var statearr_10688_10712 = state_10678__$1;
(statearr_10688_10712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (11))){
var inst_10650 = (state_10678[(10)]);
var inst_10667 = (state_10678[(2)]);
var tmp10686 = inst_10650;
var inst_10650__$1 = tmp10686;
var state_10678__$1 = (function (){var statearr_10689 = state_10678;
(statearr_10689[(11)] = inst_10667);

(statearr_10689[(10)] = inst_10650__$1);

return statearr_10689;
})();
var statearr_10690_10713 = state_10678__$1;
(statearr_10690_10713[(2)] = null);

(statearr_10690_10713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (9))){
var inst_10658 = (state_10678[(7)]);
var state_10678__$1 = state_10678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10678__$1,(11),out,inst_10658);
} else {
if((state_val_10679 === (5))){
var inst_10672 = cljs.core.async.close_BANG_.call(null,out);
var state_10678__$1 = state_10678;
var statearr_10691_10714 = state_10678__$1;
(statearr_10691_10714[(2)] = inst_10672);

(statearr_10691_10714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (10))){
var inst_10670 = (state_10678[(2)]);
var state_10678__$1 = state_10678;
var statearr_10692_10715 = state_10678__$1;
(statearr_10692_10715[(2)] = inst_10670);

(statearr_10692_10715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10679 === (8))){
var inst_10650 = (state_10678[(10)]);
var inst_10659 = (state_10678[(9)]);
var inst_10658 = (state_10678[(7)]);
var inst_10657 = (state_10678[(8)]);
var inst_10662 = (function (){var cs = inst_10650;
var vec__10655 = inst_10657;
var v = inst_10658;
var c = inst_10659;
return ((function (cs,vec__10655,v,c,inst_10650,inst_10659,inst_10658,inst_10657,state_val_10679,c__8608__auto___10706,out){
return (function (p1__10645_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10645_SHARP_);
});
;})(cs,vec__10655,v,c,inst_10650,inst_10659,inst_10658,inst_10657,state_val_10679,c__8608__auto___10706,out))
})();
var inst_10663 = cljs.core.filterv.call(null,inst_10662,inst_10650);
var inst_10650__$1 = inst_10663;
var state_10678__$1 = (function (){var statearr_10693 = state_10678;
(statearr_10693[(10)] = inst_10650__$1);

return statearr_10693;
})();
var statearr_10694_10716 = state_10678__$1;
(statearr_10694_10716[(2)] = null);

(statearr_10694_10716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___10706,out))
;
return ((function (switch__8496__auto__,c__8608__auto___10706,out){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_10698 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10698[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_10698[(1)] = (1));

return statearr_10698;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_10678){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_10678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e10699){if((e10699 instanceof Object)){
var ex__8500__auto__ = e10699;
var statearr_10700_10717 = state_10678;
(statearr_10700_10717[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10718 = state_10678;
state_10678 = G__10718;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_10678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_10678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___10706,out))
})();
var state__8610__auto__ = (function (){var statearr_10701 = f__8609__auto__.call(null);
(statearr_10701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___10706);

return statearr_10701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___10706,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args10719 = [];
var len__6046__auto___10768 = arguments.length;
var i__6047__auto___10769 = (0);
while(true){
if((i__6047__auto___10769 < len__6046__auto___10768)){
args10719.push((arguments[i__6047__auto___10769]));

var G__10770 = (i__6047__auto___10769 + (1));
i__6047__auto___10769 = G__10770;
continue;
} else {
}
break;
}

var G__10721 = args10719.length;
switch (G__10721) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10719.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8608__auto___10772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___10772,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___10772,out){
return (function (state_10745){
var state_val_10746 = (state_10745[(1)]);
if((state_val_10746 === (7))){
var inst_10727 = (state_10745[(7)]);
var inst_10727__$1 = (state_10745[(2)]);
var inst_10728 = (inst_10727__$1 == null);
var inst_10729 = cljs.core.not.call(null,inst_10728);
var state_10745__$1 = (function (){var statearr_10747 = state_10745;
(statearr_10747[(7)] = inst_10727__$1);

return statearr_10747;
})();
if(inst_10729){
var statearr_10748_10773 = state_10745__$1;
(statearr_10748_10773[(1)] = (8));

} else {
var statearr_10749_10774 = state_10745__$1;
(statearr_10749_10774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (1))){
var inst_10722 = (0);
var state_10745__$1 = (function (){var statearr_10750 = state_10745;
(statearr_10750[(8)] = inst_10722);

return statearr_10750;
})();
var statearr_10751_10775 = state_10745__$1;
(statearr_10751_10775[(2)] = null);

(statearr_10751_10775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (4))){
var state_10745__$1 = state_10745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10745__$1,(7),ch);
} else {
if((state_val_10746 === (6))){
var inst_10740 = (state_10745[(2)]);
var state_10745__$1 = state_10745;
var statearr_10752_10776 = state_10745__$1;
(statearr_10752_10776[(2)] = inst_10740);

(statearr_10752_10776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (3))){
var inst_10742 = (state_10745[(2)]);
var inst_10743 = cljs.core.async.close_BANG_.call(null,out);
var state_10745__$1 = (function (){var statearr_10753 = state_10745;
(statearr_10753[(9)] = inst_10742);

return statearr_10753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10745__$1,inst_10743);
} else {
if((state_val_10746 === (2))){
var inst_10722 = (state_10745[(8)]);
var inst_10724 = (inst_10722 < n);
var state_10745__$1 = state_10745;
if(cljs.core.truth_(inst_10724)){
var statearr_10754_10777 = state_10745__$1;
(statearr_10754_10777[(1)] = (4));

} else {
var statearr_10755_10778 = state_10745__$1;
(statearr_10755_10778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (11))){
var inst_10722 = (state_10745[(8)]);
var inst_10732 = (state_10745[(2)]);
var inst_10733 = (inst_10722 + (1));
var inst_10722__$1 = inst_10733;
var state_10745__$1 = (function (){var statearr_10756 = state_10745;
(statearr_10756[(10)] = inst_10732);

(statearr_10756[(8)] = inst_10722__$1);

return statearr_10756;
})();
var statearr_10757_10779 = state_10745__$1;
(statearr_10757_10779[(2)] = null);

(statearr_10757_10779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (9))){
var state_10745__$1 = state_10745;
var statearr_10758_10780 = state_10745__$1;
(statearr_10758_10780[(2)] = null);

(statearr_10758_10780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (5))){
var state_10745__$1 = state_10745;
var statearr_10759_10781 = state_10745__$1;
(statearr_10759_10781[(2)] = null);

(statearr_10759_10781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (10))){
var inst_10737 = (state_10745[(2)]);
var state_10745__$1 = state_10745;
var statearr_10760_10782 = state_10745__$1;
(statearr_10760_10782[(2)] = inst_10737);

(statearr_10760_10782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10746 === (8))){
var inst_10727 = (state_10745[(7)]);
var state_10745__$1 = state_10745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10745__$1,(11),out,inst_10727);
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
});})(c__8608__auto___10772,out))
;
return ((function (switch__8496__auto__,c__8608__auto___10772,out){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_10764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10764[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_10764[(1)] = (1));

return statearr_10764;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_10745){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_10745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e10765){if((e10765 instanceof Object)){
var ex__8500__auto__ = e10765;
var statearr_10766_10783 = state_10745;
(statearr_10766_10783[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10784 = state_10745;
state_10745 = G__10784;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_10745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_10745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___10772,out))
})();
var state__8610__auto__ = (function (){var statearr_10767 = f__8609__auto__.call(null);
(statearr_10767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___10772);

return statearr_10767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___10772,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10792 = (function (map_LT_,f,ch,meta10793){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10793 = meta10793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10794,meta10793__$1){
var self__ = this;
var _10794__$1 = this;
return (new cljs.core.async.t_cljs$core$async10792(self__.map_LT_,self__.f,self__.ch,meta10793__$1));
});

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10794){
var self__ = this;
var _10794__$1 = this;
return self__.meta10793;
});

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10795 = (function (map_LT_,f,ch,meta10793,_,fn1,meta10796){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10793 = meta10793;
this._ = _;
this.fn1 = fn1;
this.meta10796 = meta10796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10797,meta10796__$1){
var self__ = this;
var _10797__$1 = this;
return (new cljs.core.async.t_cljs$core$async10795(self__.map_LT_,self__.f,self__.ch,self__.meta10793,self__._,self__.fn1,meta10796__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10797){
var self__ = this;
var _10797__$1 = this;
return self__.meta10796;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10795.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10795.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10795.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10795.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10785_SHARP_){
return f1.call(null,(((p1__10785_SHARP_ == null))?null:self__.f.call(null,p1__10785_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10795.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10793","meta10793",-1945000493,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10792","cljs.core.async/t_cljs$core$async10792",-270919820,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10796","meta10796",-1884560327,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10795";

cljs.core.async.t_cljs$core$async10795.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async10795");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10795 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10795(map_LT___$1,f__$1,ch__$1,meta10793__$1,___$2,fn1__$1,meta10796){
return (new cljs.core.async.t_cljs$core$async10795(map_LT___$1,f__$1,ch__$1,meta10793__$1,___$2,fn1__$1,meta10796));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10795(self__.map_LT_,self__.f,self__.ch,self__.meta10793,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4976__auto__ = ret;
if(cljs.core.truth_(and__4976__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4976__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10793","meta10793",-1945000493,null)], null);
});

cljs.core.async.t_cljs$core$async10792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10792";

cljs.core.async.t_cljs$core$async10792.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async10792");
});

cljs.core.async.__GT_t_cljs$core$async10792 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10792(map_LT___$1,f__$1,ch__$1,meta10793){
return (new cljs.core.async.t_cljs$core$async10792(map_LT___$1,f__$1,ch__$1,meta10793));
});

}

return (new cljs.core.async.t_cljs$core$async10792(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10801 = (function (map_GT_,f,ch,meta10802){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10802 = meta10802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10803,meta10802__$1){
var self__ = this;
var _10803__$1 = this;
return (new cljs.core.async.t_cljs$core$async10801(self__.map_GT_,self__.f,self__.ch,meta10802__$1));
});

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10803){
var self__ = this;
var _10803__$1 = this;
return self__.meta10802;
});

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10802","meta10802",-1845427682,null)], null);
});

cljs.core.async.t_cljs$core$async10801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10801";

cljs.core.async.t_cljs$core$async10801.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async10801");
});

cljs.core.async.__GT_t_cljs$core$async10801 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10801(map_GT___$1,f__$1,ch__$1,meta10802){
return (new cljs.core.async.t_cljs$core$async10801(map_GT___$1,f__$1,ch__$1,meta10802));
});

}

return (new cljs.core.async.t_cljs$core$async10801(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10807 = (function (filter_GT_,p,ch,meta10808){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10808 = meta10808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10809,meta10808__$1){
var self__ = this;
var _10809__$1 = this;
return (new cljs.core.async.t_cljs$core$async10807(self__.filter_GT_,self__.p,self__.ch,meta10808__$1));
});

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10809){
var self__ = this;
var _10809__$1 = this;
return self__.meta10808;
});

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10808","meta10808",-7818545,null)], null);
});

cljs.core.async.t_cljs$core$async10807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10807";

cljs.core.async.t_cljs$core$async10807.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"cljs.core.async/t_cljs$core$async10807");
});

cljs.core.async.__GT_t_cljs$core$async10807 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10807(filter_GT___$1,p__$1,ch__$1,meta10808){
return (new cljs.core.async.t_cljs$core$async10807(filter_GT___$1,p__$1,ch__$1,meta10808));
});

}

return (new cljs.core.async.t_cljs$core$async10807(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args10810 = [];
var len__6046__auto___10854 = arguments.length;
var i__6047__auto___10855 = (0);
while(true){
if((i__6047__auto___10855 < len__6046__auto___10854)){
args10810.push((arguments[i__6047__auto___10855]));

var G__10856 = (i__6047__auto___10855 + (1));
i__6047__auto___10855 = G__10856;
continue;
} else {
}
break;
}

var G__10812 = args10810.length;
switch (G__10812) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10810.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8608__auto___10858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___10858,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___10858,out){
return (function (state_10833){
var state_val_10834 = (state_10833[(1)]);
if((state_val_10834 === (7))){
var inst_10829 = (state_10833[(2)]);
var state_10833__$1 = state_10833;
var statearr_10835_10859 = state_10833__$1;
(statearr_10835_10859[(2)] = inst_10829);

(statearr_10835_10859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (1))){
var state_10833__$1 = state_10833;
var statearr_10836_10860 = state_10833__$1;
(statearr_10836_10860[(2)] = null);

(statearr_10836_10860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (4))){
var inst_10815 = (state_10833[(7)]);
var inst_10815__$1 = (state_10833[(2)]);
var inst_10816 = (inst_10815__$1 == null);
var state_10833__$1 = (function (){var statearr_10837 = state_10833;
(statearr_10837[(7)] = inst_10815__$1);

return statearr_10837;
})();
if(cljs.core.truth_(inst_10816)){
var statearr_10838_10861 = state_10833__$1;
(statearr_10838_10861[(1)] = (5));

} else {
var statearr_10839_10862 = state_10833__$1;
(statearr_10839_10862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (6))){
var inst_10815 = (state_10833[(7)]);
var inst_10820 = p.call(null,inst_10815);
var state_10833__$1 = state_10833;
if(cljs.core.truth_(inst_10820)){
var statearr_10840_10863 = state_10833__$1;
(statearr_10840_10863[(1)] = (8));

} else {
var statearr_10841_10864 = state_10833__$1;
(statearr_10841_10864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (3))){
var inst_10831 = (state_10833[(2)]);
var state_10833__$1 = state_10833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10833__$1,inst_10831);
} else {
if((state_val_10834 === (2))){
var state_10833__$1 = state_10833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10833__$1,(4),ch);
} else {
if((state_val_10834 === (11))){
var inst_10823 = (state_10833[(2)]);
var state_10833__$1 = state_10833;
var statearr_10842_10865 = state_10833__$1;
(statearr_10842_10865[(2)] = inst_10823);

(statearr_10842_10865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (9))){
var state_10833__$1 = state_10833;
var statearr_10843_10866 = state_10833__$1;
(statearr_10843_10866[(2)] = null);

(statearr_10843_10866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (5))){
var inst_10818 = cljs.core.async.close_BANG_.call(null,out);
var state_10833__$1 = state_10833;
var statearr_10844_10867 = state_10833__$1;
(statearr_10844_10867[(2)] = inst_10818);

(statearr_10844_10867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (10))){
var inst_10826 = (state_10833[(2)]);
var state_10833__$1 = (function (){var statearr_10845 = state_10833;
(statearr_10845[(8)] = inst_10826);

return statearr_10845;
})();
var statearr_10846_10868 = state_10833__$1;
(statearr_10846_10868[(2)] = null);

(statearr_10846_10868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10834 === (8))){
var inst_10815 = (state_10833[(7)]);
var state_10833__$1 = state_10833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10833__$1,(11),out,inst_10815);
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
});})(c__8608__auto___10858,out))
;
return ((function (switch__8496__auto__,c__8608__auto___10858,out){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_10850 = [null,null,null,null,null,null,null,null,null];
(statearr_10850[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_10850[(1)] = (1));

return statearr_10850;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_10833){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_10833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e10851){if((e10851 instanceof Object)){
var ex__8500__auto__ = e10851;
var statearr_10852_10869 = state_10833;
(statearr_10852_10869[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10870 = state_10833;
state_10833 = G__10870;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_10833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_10833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___10858,out))
})();
var state__8610__auto__ = (function (){var statearr_10853 = f__8609__auto__.call(null);
(statearr_10853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___10858);

return statearr_10853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___10858,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10871 = [];
var len__6046__auto___10874 = arguments.length;
var i__6047__auto___10875 = (0);
while(true){
if((i__6047__auto___10875 < len__6046__auto___10874)){
args10871.push((arguments[i__6047__auto___10875]));

var G__10876 = (i__6047__auto___10875 + (1));
i__6047__auto___10875 = G__10876;
continue;
} else {
}
break;
}

var G__10873 = args10871.length;
switch (G__10873) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10871.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto__){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto__){
return (function (state_11043){
var state_val_11044 = (state_11043[(1)]);
if((state_val_11044 === (7))){
var inst_11039 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11045_11086 = state_11043__$1;
(statearr_11045_11086[(2)] = inst_11039);

(statearr_11045_11086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (20))){
var inst_11009 = (state_11043[(7)]);
var inst_11020 = (state_11043[(2)]);
var inst_11021 = cljs.core.next.call(null,inst_11009);
var inst_10995 = inst_11021;
var inst_10996 = null;
var inst_10997 = (0);
var inst_10998 = (0);
var state_11043__$1 = (function (){var statearr_11046 = state_11043;
(statearr_11046[(8)] = inst_10997);

(statearr_11046[(9)] = inst_10996);

(statearr_11046[(10)] = inst_10998);

(statearr_11046[(11)] = inst_11020);

(statearr_11046[(12)] = inst_10995);

return statearr_11046;
})();
var statearr_11047_11087 = state_11043__$1;
(statearr_11047_11087[(2)] = null);

(statearr_11047_11087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (1))){
var state_11043__$1 = state_11043;
var statearr_11048_11088 = state_11043__$1;
(statearr_11048_11088[(2)] = null);

(statearr_11048_11088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (4))){
var inst_10984 = (state_11043[(13)]);
var inst_10984__$1 = (state_11043[(2)]);
var inst_10985 = (inst_10984__$1 == null);
var state_11043__$1 = (function (){var statearr_11049 = state_11043;
(statearr_11049[(13)] = inst_10984__$1);

return statearr_11049;
})();
if(cljs.core.truth_(inst_10985)){
var statearr_11050_11089 = state_11043__$1;
(statearr_11050_11089[(1)] = (5));

} else {
var statearr_11051_11090 = state_11043__$1;
(statearr_11051_11090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (15))){
var state_11043__$1 = state_11043;
var statearr_11055_11091 = state_11043__$1;
(statearr_11055_11091[(2)] = null);

(statearr_11055_11091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (21))){
var state_11043__$1 = state_11043;
var statearr_11056_11092 = state_11043__$1;
(statearr_11056_11092[(2)] = null);

(statearr_11056_11092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (13))){
var inst_10997 = (state_11043[(8)]);
var inst_10996 = (state_11043[(9)]);
var inst_10998 = (state_11043[(10)]);
var inst_10995 = (state_11043[(12)]);
var inst_11005 = (state_11043[(2)]);
var inst_11006 = (inst_10998 + (1));
var tmp11052 = inst_10997;
var tmp11053 = inst_10996;
var tmp11054 = inst_10995;
var inst_10995__$1 = tmp11054;
var inst_10996__$1 = tmp11053;
var inst_10997__$1 = tmp11052;
var inst_10998__$1 = inst_11006;
var state_11043__$1 = (function (){var statearr_11057 = state_11043;
(statearr_11057[(8)] = inst_10997__$1);

(statearr_11057[(9)] = inst_10996__$1);

(statearr_11057[(10)] = inst_10998__$1);

(statearr_11057[(12)] = inst_10995__$1);

(statearr_11057[(14)] = inst_11005);

return statearr_11057;
})();
var statearr_11058_11093 = state_11043__$1;
(statearr_11058_11093[(2)] = null);

(statearr_11058_11093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (22))){
var state_11043__$1 = state_11043;
var statearr_11059_11094 = state_11043__$1;
(statearr_11059_11094[(2)] = null);

(statearr_11059_11094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (6))){
var inst_10984 = (state_11043[(13)]);
var inst_10993 = f.call(null,inst_10984);
var inst_10994 = cljs.core.seq.call(null,inst_10993);
var inst_10995 = inst_10994;
var inst_10996 = null;
var inst_10997 = (0);
var inst_10998 = (0);
var state_11043__$1 = (function (){var statearr_11060 = state_11043;
(statearr_11060[(8)] = inst_10997);

(statearr_11060[(9)] = inst_10996);

(statearr_11060[(10)] = inst_10998);

(statearr_11060[(12)] = inst_10995);

return statearr_11060;
})();
var statearr_11061_11095 = state_11043__$1;
(statearr_11061_11095[(2)] = null);

(statearr_11061_11095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (17))){
var inst_11009 = (state_11043[(7)]);
var inst_11013 = cljs.core.chunk_first.call(null,inst_11009);
var inst_11014 = cljs.core.chunk_rest.call(null,inst_11009);
var inst_11015 = cljs.core.count.call(null,inst_11013);
var inst_10995 = inst_11014;
var inst_10996 = inst_11013;
var inst_10997 = inst_11015;
var inst_10998 = (0);
var state_11043__$1 = (function (){var statearr_11062 = state_11043;
(statearr_11062[(8)] = inst_10997);

(statearr_11062[(9)] = inst_10996);

(statearr_11062[(10)] = inst_10998);

(statearr_11062[(12)] = inst_10995);

return statearr_11062;
})();
var statearr_11063_11096 = state_11043__$1;
(statearr_11063_11096[(2)] = null);

(statearr_11063_11096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (3))){
var inst_11041 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11043__$1,inst_11041);
} else {
if((state_val_11044 === (12))){
var inst_11029 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11064_11097 = state_11043__$1;
(statearr_11064_11097[(2)] = inst_11029);

(statearr_11064_11097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (2))){
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11043__$1,(4),in$);
} else {
if((state_val_11044 === (23))){
var inst_11037 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11065_11098 = state_11043__$1;
(statearr_11065_11098[(2)] = inst_11037);

(statearr_11065_11098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (19))){
var inst_11024 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11066_11099 = state_11043__$1;
(statearr_11066_11099[(2)] = inst_11024);

(statearr_11066_11099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (11))){
var inst_11009 = (state_11043[(7)]);
var inst_10995 = (state_11043[(12)]);
var inst_11009__$1 = cljs.core.seq.call(null,inst_10995);
var state_11043__$1 = (function (){var statearr_11067 = state_11043;
(statearr_11067[(7)] = inst_11009__$1);

return statearr_11067;
})();
if(inst_11009__$1){
var statearr_11068_11100 = state_11043__$1;
(statearr_11068_11100[(1)] = (14));

} else {
var statearr_11069_11101 = state_11043__$1;
(statearr_11069_11101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (9))){
var inst_11031 = (state_11043[(2)]);
var inst_11032 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11043__$1 = (function (){var statearr_11070 = state_11043;
(statearr_11070[(15)] = inst_11031);

return statearr_11070;
})();
if(cljs.core.truth_(inst_11032)){
var statearr_11071_11102 = state_11043__$1;
(statearr_11071_11102[(1)] = (21));

} else {
var statearr_11072_11103 = state_11043__$1;
(statearr_11072_11103[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (5))){
var inst_10987 = cljs.core.async.close_BANG_.call(null,out);
var state_11043__$1 = state_11043;
var statearr_11073_11104 = state_11043__$1;
(statearr_11073_11104[(2)] = inst_10987);

(statearr_11073_11104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (14))){
var inst_11009 = (state_11043[(7)]);
var inst_11011 = cljs.core.chunked_seq_QMARK_.call(null,inst_11009);
var state_11043__$1 = state_11043;
if(inst_11011){
var statearr_11074_11105 = state_11043__$1;
(statearr_11074_11105[(1)] = (17));

} else {
var statearr_11075_11106 = state_11043__$1;
(statearr_11075_11106[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (16))){
var inst_11027 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11076_11107 = state_11043__$1;
(statearr_11076_11107[(2)] = inst_11027);

(statearr_11076_11107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (10))){
var inst_10996 = (state_11043[(9)]);
var inst_10998 = (state_11043[(10)]);
var inst_11003 = cljs.core._nth.call(null,inst_10996,inst_10998);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11043__$1,(13),out,inst_11003);
} else {
if((state_val_11044 === (18))){
var inst_11009 = (state_11043[(7)]);
var inst_11018 = cljs.core.first.call(null,inst_11009);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11043__$1,(20),out,inst_11018);
} else {
if((state_val_11044 === (8))){
var inst_10997 = (state_11043[(8)]);
var inst_10998 = (state_11043[(10)]);
var inst_11000 = (inst_10998 < inst_10997);
var inst_11001 = inst_11000;
var state_11043__$1 = state_11043;
if(cljs.core.truth_(inst_11001)){
var statearr_11077_11108 = state_11043__$1;
(statearr_11077_11108[(1)] = (10));

} else {
var statearr_11078_11109 = state_11043__$1;
(statearr_11078_11109[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto__))
;
return ((function (switch__8496__auto__,c__8608__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8497__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8497__auto____0 = (function (){
var statearr_11082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11082[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8497__auto__);

(statearr_11082[(1)] = (1));

return statearr_11082;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8497__auto____1 = (function (state_11043){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_11043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e11083){if((e11083 instanceof Object)){
var ex__8500__auto__ = e11083;
var statearr_11084_11110 = state_11043;
(statearr_11084_11110[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11111 = state_11043;
state_11043 = G__11111;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8497__auto__ = function(state_11043){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8497__auto____1.call(this,state_11043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto__))
})();
var state__8610__auto__ = (function (){var statearr_11085 = f__8609__auto__.call(null);
(statearr_11085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto__);

return statearr_11085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto__))
);

return c__8608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11112 = [];
var len__6046__auto___11115 = arguments.length;
var i__6047__auto___11116 = (0);
while(true){
if((i__6047__auto___11116 < len__6046__auto___11115)){
args11112.push((arguments[i__6047__auto___11116]));

var G__11117 = (i__6047__auto___11116 + (1));
i__6047__auto___11116 = G__11117;
continue;
} else {
}
break;
}

var G__11114 = args11112.length;
switch (G__11114) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11112.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11119 = [];
var len__6046__auto___11122 = arguments.length;
var i__6047__auto___11123 = (0);
while(true){
if((i__6047__auto___11123 < len__6046__auto___11122)){
args11119.push((arguments[i__6047__auto___11123]));

var G__11124 = (i__6047__auto___11123 + (1));
i__6047__auto___11123 = G__11124;
continue;
} else {
}
break;
}

var G__11121 = args11119.length;
switch (G__11121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11119.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11126 = [];
var len__6046__auto___11177 = arguments.length;
var i__6047__auto___11178 = (0);
while(true){
if((i__6047__auto___11178 < len__6046__auto___11177)){
args11126.push((arguments[i__6047__auto___11178]));

var G__11179 = (i__6047__auto___11178 + (1));
i__6047__auto___11178 = G__11179;
continue;
} else {
}
break;
}

var G__11128 = args11126.length;
switch (G__11128) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11126.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8608__auto___11181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___11181,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___11181,out){
return (function (state_11152){
var state_val_11153 = (state_11152[(1)]);
if((state_val_11153 === (7))){
var inst_11147 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11154_11182 = state_11152__$1;
(statearr_11154_11182[(2)] = inst_11147);

(statearr_11154_11182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (1))){
var inst_11129 = null;
var state_11152__$1 = (function (){var statearr_11155 = state_11152;
(statearr_11155[(7)] = inst_11129);

return statearr_11155;
})();
var statearr_11156_11183 = state_11152__$1;
(statearr_11156_11183[(2)] = null);

(statearr_11156_11183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (4))){
var inst_11132 = (state_11152[(8)]);
var inst_11132__$1 = (state_11152[(2)]);
var inst_11133 = (inst_11132__$1 == null);
var inst_11134 = cljs.core.not.call(null,inst_11133);
var state_11152__$1 = (function (){var statearr_11157 = state_11152;
(statearr_11157[(8)] = inst_11132__$1);

return statearr_11157;
})();
if(inst_11134){
var statearr_11158_11184 = state_11152__$1;
(statearr_11158_11184[(1)] = (5));

} else {
var statearr_11159_11185 = state_11152__$1;
(statearr_11159_11185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (6))){
var state_11152__$1 = state_11152;
var statearr_11160_11186 = state_11152__$1;
(statearr_11160_11186[(2)] = null);

(statearr_11160_11186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (3))){
var inst_11149 = (state_11152[(2)]);
var inst_11150 = cljs.core.async.close_BANG_.call(null,out);
var state_11152__$1 = (function (){var statearr_11161 = state_11152;
(statearr_11161[(9)] = inst_11149);

return statearr_11161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11152__$1,inst_11150);
} else {
if((state_val_11153 === (2))){
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11152__$1,(4),ch);
} else {
if((state_val_11153 === (11))){
var inst_11132 = (state_11152[(8)]);
var inst_11141 = (state_11152[(2)]);
var inst_11129 = inst_11132;
var state_11152__$1 = (function (){var statearr_11162 = state_11152;
(statearr_11162[(7)] = inst_11129);

(statearr_11162[(10)] = inst_11141);

return statearr_11162;
})();
var statearr_11163_11187 = state_11152__$1;
(statearr_11163_11187[(2)] = null);

(statearr_11163_11187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (9))){
var inst_11132 = (state_11152[(8)]);
var state_11152__$1 = state_11152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11152__$1,(11),out,inst_11132);
} else {
if((state_val_11153 === (5))){
var inst_11129 = (state_11152[(7)]);
var inst_11132 = (state_11152[(8)]);
var inst_11136 = cljs.core._EQ_.call(null,inst_11132,inst_11129);
var state_11152__$1 = state_11152;
if(inst_11136){
var statearr_11165_11188 = state_11152__$1;
(statearr_11165_11188[(1)] = (8));

} else {
var statearr_11166_11189 = state_11152__$1;
(statearr_11166_11189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (10))){
var inst_11144 = (state_11152[(2)]);
var state_11152__$1 = state_11152;
var statearr_11167_11190 = state_11152__$1;
(statearr_11167_11190[(2)] = inst_11144);

(statearr_11167_11190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11153 === (8))){
var inst_11129 = (state_11152[(7)]);
var tmp11164 = inst_11129;
var inst_11129__$1 = tmp11164;
var state_11152__$1 = (function (){var statearr_11168 = state_11152;
(statearr_11168[(7)] = inst_11129__$1);

return statearr_11168;
})();
var statearr_11169_11191 = state_11152__$1;
(statearr_11169_11191[(2)] = null);

(statearr_11169_11191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___11181,out))
;
return ((function (switch__8496__auto__,c__8608__auto___11181,out){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_11173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11173[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_11173[(1)] = (1));

return statearr_11173;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_11152){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_11152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e11174){if((e11174 instanceof Object)){
var ex__8500__auto__ = e11174;
var statearr_11175_11192 = state_11152;
(statearr_11175_11192[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11193 = state_11152;
state_11152 = G__11193;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_11152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_11152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___11181,out))
})();
var state__8610__auto__ = (function (){var statearr_11176 = f__8609__auto__.call(null);
(statearr_11176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___11181);

return statearr_11176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___11181,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11194 = [];
var len__6046__auto___11264 = arguments.length;
var i__6047__auto___11265 = (0);
while(true){
if((i__6047__auto___11265 < len__6046__auto___11264)){
args11194.push((arguments[i__6047__auto___11265]));

var G__11266 = (i__6047__auto___11265 + (1));
i__6047__auto___11265 = G__11266;
continue;
} else {
}
break;
}

var G__11196 = args11194.length;
switch (G__11196) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11194.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8608__auto___11268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___11268,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___11268,out){
return (function (state_11234){
var state_val_11235 = (state_11234[(1)]);
if((state_val_11235 === (7))){
var inst_11230 = (state_11234[(2)]);
var state_11234__$1 = state_11234;
var statearr_11236_11269 = state_11234__$1;
(statearr_11236_11269[(2)] = inst_11230);

(statearr_11236_11269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (1))){
var inst_11197 = (new Array(n));
var inst_11198 = inst_11197;
var inst_11199 = (0);
var state_11234__$1 = (function (){var statearr_11237 = state_11234;
(statearr_11237[(7)] = inst_11198);

(statearr_11237[(8)] = inst_11199);

return statearr_11237;
})();
var statearr_11238_11270 = state_11234__$1;
(statearr_11238_11270[(2)] = null);

(statearr_11238_11270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (4))){
var inst_11202 = (state_11234[(9)]);
var inst_11202__$1 = (state_11234[(2)]);
var inst_11203 = (inst_11202__$1 == null);
var inst_11204 = cljs.core.not.call(null,inst_11203);
var state_11234__$1 = (function (){var statearr_11239 = state_11234;
(statearr_11239[(9)] = inst_11202__$1);

return statearr_11239;
})();
if(inst_11204){
var statearr_11240_11271 = state_11234__$1;
(statearr_11240_11271[(1)] = (5));

} else {
var statearr_11241_11272 = state_11234__$1;
(statearr_11241_11272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (15))){
var inst_11224 = (state_11234[(2)]);
var state_11234__$1 = state_11234;
var statearr_11242_11273 = state_11234__$1;
(statearr_11242_11273[(2)] = inst_11224);

(statearr_11242_11273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (13))){
var state_11234__$1 = state_11234;
var statearr_11243_11274 = state_11234__$1;
(statearr_11243_11274[(2)] = null);

(statearr_11243_11274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (6))){
var inst_11199 = (state_11234[(8)]);
var inst_11220 = (inst_11199 > (0));
var state_11234__$1 = state_11234;
if(cljs.core.truth_(inst_11220)){
var statearr_11244_11275 = state_11234__$1;
(statearr_11244_11275[(1)] = (12));

} else {
var statearr_11245_11276 = state_11234__$1;
(statearr_11245_11276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (3))){
var inst_11232 = (state_11234[(2)]);
var state_11234__$1 = state_11234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11234__$1,inst_11232);
} else {
if((state_val_11235 === (12))){
var inst_11198 = (state_11234[(7)]);
var inst_11222 = cljs.core.vec.call(null,inst_11198);
var state_11234__$1 = state_11234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11234__$1,(15),out,inst_11222);
} else {
if((state_val_11235 === (2))){
var state_11234__$1 = state_11234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11234__$1,(4),ch);
} else {
if((state_val_11235 === (11))){
var inst_11214 = (state_11234[(2)]);
var inst_11215 = (new Array(n));
var inst_11198 = inst_11215;
var inst_11199 = (0);
var state_11234__$1 = (function (){var statearr_11246 = state_11234;
(statearr_11246[(7)] = inst_11198);

(statearr_11246[(10)] = inst_11214);

(statearr_11246[(8)] = inst_11199);

return statearr_11246;
})();
var statearr_11247_11277 = state_11234__$1;
(statearr_11247_11277[(2)] = null);

(statearr_11247_11277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (9))){
var inst_11198 = (state_11234[(7)]);
var inst_11212 = cljs.core.vec.call(null,inst_11198);
var state_11234__$1 = state_11234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11234__$1,(11),out,inst_11212);
} else {
if((state_val_11235 === (5))){
var inst_11198 = (state_11234[(7)]);
var inst_11207 = (state_11234[(11)]);
var inst_11199 = (state_11234[(8)]);
var inst_11202 = (state_11234[(9)]);
var inst_11206 = (inst_11198[inst_11199] = inst_11202);
var inst_11207__$1 = (inst_11199 + (1));
var inst_11208 = (inst_11207__$1 < n);
var state_11234__$1 = (function (){var statearr_11248 = state_11234;
(statearr_11248[(12)] = inst_11206);

(statearr_11248[(11)] = inst_11207__$1);

return statearr_11248;
})();
if(cljs.core.truth_(inst_11208)){
var statearr_11249_11278 = state_11234__$1;
(statearr_11249_11278[(1)] = (8));

} else {
var statearr_11250_11279 = state_11234__$1;
(statearr_11250_11279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (14))){
var inst_11227 = (state_11234[(2)]);
var inst_11228 = cljs.core.async.close_BANG_.call(null,out);
var state_11234__$1 = (function (){var statearr_11252 = state_11234;
(statearr_11252[(13)] = inst_11227);

return statearr_11252;
})();
var statearr_11253_11280 = state_11234__$1;
(statearr_11253_11280[(2)] = inst_11228);

(statearr_11253_11280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (10))){
var inst_11218 = (state_11234[(2)]);
var state_11234__$1 = state_11234;
var statearr_11254_11281 = state_11234__$1;
(statearr_11254_11281[(2)] = inst_11218);

(statearr_11254_11281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11235 === (8))){
var inst_11198 = (state_11234[(7)]);
var inst_11207 = (state_11234[(11)]);
var tmp11251 = inst_11198;
var inst_11198__$1 = tmp11251;
var inst_11199 = inst_11207;
var state_11234__$1 = (function (){var statearr_11255 = state_11234;
(statearr_11255[(7)] = inst_11198__$1);

(statearr_11255[(8)] = inst_11199);

return statearr_11255;
})();
var statearr_11256_11282 = state_11234__$1;
(statearr_11256_11282[(2)] = null);

(statearr_11256_11282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___11268,out))
;
return ((function (switch__8496__auto__,c__8608__auto___11268,out){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_11260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11260[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_11260[(1)] = (1));

return statearr_11260;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_11234){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_11234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e11261){if((e11261 instanceof Object)){
var ex__8500__auto__ = e11261;
var statearr_11262_11283 = state_11234;
(statearr_11262_11283[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11284 = state_11234;
state_11234 = G__11284;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_11234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_11234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___11268,out))
})();
var state__8610__auto__ = (function (){var statearr_11263 = f__8609__auto__.call(null);
(statearr_11263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___11268);

return statearr_11263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___11268,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11285 = [];
var len__6046__auto___11359 = arguments.length;
var i__6047__auto___11360 = (0);
while(true){
if((i__6047__auto___11360 < len__6046__auto___11359)){
args11285.push((arguments[i__6047__auto___11360]));

var G__11361 = (i__6047__auto___11360 + (1));
i__6047__auto___11360 = G__11361;
continue;
} else {
}
break;
}

var G__11287 = args11285.length;
switch (G__11287) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11285.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8608__auto___11363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___11363,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___11363,out){
return (function (state_11329){
var state_val_11330 = (state_11329[(1)]);
if((state_val_11330 === (7))){
var inst_11325 = (state_11329[(2)]);
var state_11329__$1 = state_11329;
var statearr_11331_11364 = state_11329__$1;
(statearr_11331_11364[(2)] = inst_11325);

(statearr_11331_11364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (1))){
var inst_11288 = [];
var inst_11289 = inst_11288;
var inst_11290 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11329__$1 = (function (){var statearr_11332 = state_11329;
(statearr_11332[(7)] = inst_11290);

(statearr_11332[(8)] = inst_11289);

return statearr_11332;
})();
var statearr_11333_11365 = state_11329__$1;
(statearr_11333_11365[(2)] = null);

(statearr_11333_11365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (4))){
var inst_11293 = (state_11329[(9)]);
var inst_11293__$1 = (state_11329[(2)]);
var inst_11294 = (inst_11293__$1 == null);
var inst_11295 = cljs.core.not.call(null,inst_11294);
var state_11329__$1 = (function (){var statearr_11334 = state_11329;
(statearr_11334[(9)] = inst_11293__$1);

return statearr_11334;
})();
if(inst_11295){
var statearr_11335_11366 = state_11329__$1;
(statearr_11335_11366[(1)] = (5));

} else {
var statearr_11336_11367 = state_11329__$1;
(statearr_11336_11367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (15))){
var inst_11319 = (state_11329[(2)]);
var state_11329__$1 = state_11329;
var statearr_11337_11368 = state_11329__$1;
(statearr_11337_11368[(2)] = inst_11319);

(statearr_11337_11368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (13))){
var state_11329__$1 = state_11329;
var statearr_11338_11369 = state_11329__$1;
(statearr_11338_11369[(2)] = null);

(statearr_11338_11369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (6))){
var inst_11289 = (state_11329[(8)]);
var inst_11314 = inst_11289.length;
var inst_11315 = (inst_11314 > (0));
var state_11329__$1 = state_11329;
if(cljs.core.truth_(inst_11315)){
var statearr_11339_11370 = state_11329__$1;
(statearr_11339_11370[(1)] = (12));

} else {
var statearr_11340_11371 = state_11329__$1;
(statearr_11340_11371[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (3))){
var inst_11327 = (state_11329[(2)]);
var state_11329__$1 = state_11329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11329__$1,inst_11327);
} else {
if((state_val_11330 === (12))){
var inst_11289 = (state_11329[(8)]);
var inst_11317 = cljs.core.vec.call(null,inst_11289);
var state_11329__$1 = state_11329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11329__$1,(15),out,inst_11317);
} else {
if((state_val_11330 === (2))){
var state_11329__$1 = state_11329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11329__$1,(4),ch);
} else {
if((state_val_11330 === (11))){
var inst_11297 = (state_11329[(10)]);
var inst_11293 = (state_11329[(9)]);
var inst_11307 = (state_11329[(2)]);
var inst_11308 = [];
var inst_11309 = inst_11308.push(inst_11293);
var inst_11289 = inst_11308;
var inst_11290 = inst_11297;
var state_11329__$1 = (function (){var statearr_11341 = state_11329;
(statearr_11341[(11)] = inst_11307);

(statearr_11341[(12)] = inst_11309);

(statearr_11341[(7)] = inst_11290);

(statearr_11341[(8)] = inst_11289);

return statearr_11341;
})();
var statearr_11342_11372 = state_11329__$1;
(statearr_11342_11372[(2)] = null);

(statearr_11342_11372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (9))){
var inst_11289 = (state_11329[(8)]);
var inst_11305 = cljs.core.vec.call(null,inst_11289);
var state_11329__$1 = state_11329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11329__$1,(11),out,inst_11305);
} else {
if((state_val_11330 === (5))){
var inst_11297 = (state_11329[(10)]);
var inst_11290 = (state_11329[(7)]);
var inst_11293 = (state_11329[(9)]);
var inst_11297__$1 = f.call(null,inst_11293);
var inst_11298 = cljs.core._EQ_.call(null,inst_11297__$1,inst_11290);
var inst_11299 = cljs.core.keyword_identical_QMARK_.call(null,inst_11290,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11300 = (inst_11298) || (inst_11299);
var state_11329__$1 = (function (){var statearr_11343 = state_11329;
(statearr_11343[(10)] = inst_11297__$1);

return statearr_11343;
})();
if(cljs.core.truth_(inst_11300)){
var statearr_11344_11373 = state_11329__$1;
(statearr_11344_11373[(1)] = (8));

} else {
var statearr_11345_11374 = state_11329__$1;
(statearr_11345_11374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (14))){
var inst_11322 = (state_11329[(2)]);
var inst_11323 = cljs.core.async.close_BANG_.call(null,out);
var state_11329__$1 = (function (){var statearr_11347 = state_11329;
(statearr_11347[(13)] = inst_11322);

return statearr_11347;
})();
var statearr_11348_11375 = state_11329__$1;
(statearr_11348_11375[(2)] = inst_11323);

(statearr_11348_11375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (10))){
var inst_11312 = (state_11329[(2)]);
var state_11329__$1 = state_11329;
var statearr_11349_11376 = state_11329__$1;
(statearr_11349_11376[(2)] = inst_11312);

(statearr_11349_11376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11330 === (8))){
var inst_11297 = (state_11329[(10)]);
var inst_11293 = (state_11329[(9)]);
var inst_11289 = (state_11329[(8)]);
var inst_11302 = inst_11289.push(inst_11293);
var tmp11346 = inst_11289;
var inst_11289__$1 = tmp11346;
var inst_11290 = inst_11297;
var state_11329__$1 = (function (){var statearr_11350 = state_11329;
(statearr_11350[(14)] = inst_11302);

(statearr_11350[(7)] = inst_11290);

(statearr_11350[(8)] = inst_11289__$1);

return statearr_11350;
})();
var statearr_11351_11377 = state_11329__$1;
(statearr_11351_11377[(2)] = null);

(statearr_11351_11377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__8608__auto___11363,out))
;
return ((function (switch__8496__auto__,c__8608__auto___11363,out){
return (function() {
var cljs$core$async$state_machine__8497__auto__ = null;
var cljs$core$async$state_machine__8497__auto____0 = (function (){
var statearr_11355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11355[(0)] = cljs$core$async$state_machine__8497__auto__);

(statearr_11355[(1)] = (1));

return statearr_11355;
});
var cljs$core$async$state_machine__8497__auto____1 = (function (state_11329){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_11329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e11356){if((e11356 instanceof Object)){
var ex__8500__auto__ = e11356;
var statearr_11357_11378 = state_11329;
(statearr_11357_11378[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11379 = state_11329;
state_11329 = G__11379;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
cljs$core$async$state_machine__8497__auto__ = function(state_11329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8497__auto____1.call(this,state_11329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8497__auto____0;
cljs$core$async$state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8497__auto____1;
return cljs$core$async$state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___11363,out))
})();
var state__8610__auto__ = (function (){var statearr_11358 = f__8609__auto__.call(null);
(statearr_11358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___11363);

return statearr_11358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___11363,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map