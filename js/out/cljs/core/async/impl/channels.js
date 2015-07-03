// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t18179 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t18179 = (function (box,val,meta18180){
this.box = box;
this.val = val;
this.meta18180 = meta18180;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t18179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18181,meta18180__$1){
var self__ = this;
var _18181__$1 = this;
return (new cljs.core.async.impl.channels.t18179(self__.box,self__.val,meta18180__$1));
});

cljs.core.async.impl.channels.t18179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18181){
var self__ = this;
var _18181__$1 = this;
return self__.meta18180;
});

cljs.core.async.impl.channels.t18179.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t18179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta18180","meta18180",-555849253,null)], null);
});

cljs.core.async.impl.channels.t18179.cljs$lang$type = true;

cljs.core.async.impl.channels.t18179.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t18179";

cljs.core.async.impl.channels.t18179.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async.impl.channels/t18179");
});

cljs.core.async.impl.channels.__GT_t18179 = (function cljs$core$async$impl$channels$box_$___GT_t18179(box__$1,val__$1,meta18180){
return (new cljs.core.async.impl.channels.t18179(box__$1,val__$1,meta18180));
});

}

return (new cljs.core.async.impl.channels.t18179(cljs$core$async$impl$channels$box,val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj18183 = {};
return obj18183;
})();

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__18187 = x__4974__auto__;
return goog.typeOf(G__18187);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_18200 = self__.puts.pop();
if((putter_18200 == null)){
} else {
var put_handler_18201 = putter_18200.handler;
var val_18202 = putter_18200.val;
if(put_handler_18201.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_18203 = put_handler_18201.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_18203,put_handler_18201,val_18202,putter_18200,this$__$1){
return (function (){
var G__18188 = true;
return (put_cb_18203.cljs$core$IFn$_invoke$arity$1 ? put_cb_18203.cljs$core$IFn$_invoke$arity$1(G__18188) : put_cb_18203.call(null,G__18188));
});})(put_cb_18203,put_handler_18201,val_18202,putter_18200,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"val","val",1769233139,null)))], 0)))].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__4326__auto__ = self__.buf;
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4326__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__18189 = self__.buf;
var G__18190 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__18189,G__18190) : self__.add_BANG_.call(null,G__18189,G__18190));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_18204 = self__.takes.pop();
if(taker_18204.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_18205 = taker_18204.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_18206__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_18205,val_18206__$1,taker_18204,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__18191 = val_18206__$1;
return (take_cb_18205.cljs$core$IFn$_invoke$arity$1 ? take_cb_18205.cljs$core$IFn$_invoke$arity$1(G__18191) : take_cb_18205.call(null,G__18191));
});})(take_cb_18205,val_18206__$1,taker_18204,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__18192 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__18192) : take_cb.call(null,G__18192));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_18207 = self__.puts.pop();
if((putter_18207 == null)){
} else {
var put_handler_18208 = putter_18207.handler;
var val_18209 = putter_18207.val;
if(put_handler_18208.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_18210 = put_handler_18208.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_18210,put_handler_18208,val_18209,putter_18207,_,retval,this$__$1){
return (function (){
var G__18193 = true;
return (put_cb_18210.cljs$core$IFn$_invoke$arity$1 ? put_cb_18210.cljs$core$IFn$_invoke$arity$1(G__18193) : put_cb_18210.call(null,G__18193));
});})(put_cb_18210,put_handler_18208,val_18209,putter_18207,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__18194 = self__.buf;
var G__18195 = val_18209;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__18194,G__18195) : self__.add_BANG_.call(null,G__18194,G__18195));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__18196 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__18196) : put_cb.call(null,G__18196));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__18197_18211 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__18197_18211) : self__.add_BANG_.call(null,G__18197_18211));
} else {
}

if(cljs.core.truth_((function (){var and__4326__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4326__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4326__auto__;
}
})())){
var has_val = (function (){var and__4326__auto__ = self__.buf;
if(cljs.core.truth_(and__4326__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4326__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",-280799999,null),new cljs.core.Symbol(null,"takes","takes",298247964,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))], 0)))].join('')));
}

self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__4326__auto__ = self__.buf;
if(cljs.core.truth_(and__4326__auto__)){
return (self__.puts.length === (0));
} else {
return and__4326__auto__;
}
})())){
var G__18198_18212 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__18198_18212) : self__.add_BANG_.call(null,G__18198_18212));
} else {
}

while(true){
var taker_18213 = self__.takes.pop();
if((taker_18213 == null)){
} else {
if(taker_18213.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_18214 = taker_18213.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_18215 = (cljs.core.truth_((function (){var and__4326__auto__ = self__.buf;
if(cljs.core.truth_(and__4326__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4326__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_18214,val_18215,taker_18213,this$__$1){
return (function (){
var G__18199 = val_18215;
return (take_cb_18214.cljs$core$IFn$_invoke$arity$1 ? take_cb_18214.cljs$core$IFn$_invoke$arity$1(G__18199) : take_cb_18214.call(null,G__18199));
});})(take_cb_18214,val_18215,taker_18213,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4338__auto__ = exh;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(){
var G__18217 = arguments.length;
switch (G__18217) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__18218 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__18218) : xform.call(null,G__18218));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__18225 = null;
var G__18225__1 = (function (buf__$1){
try{var G__18220 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__18220) : add_BANG_.call(null,G__18220));
}catch (e18219){var t = e18219;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__18225__2 = (function (buf__$1,val){
try{var G__18222 = buf__$1;
var G__18223 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__18222,G__18223) : add_BANG_.call(null,G__18222,G__18223));
}catch (e18221){var t = e18221;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__18225 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__18225__1.call(this,buf__$1);
case 2:
return G__18225__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18225.cljs$core$IFn$_invoke$arity$1 = G__18225__1;
G__18225.cljs$core$IFn$_invoke$arity$2 = G__18225__2;
return G__18225;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;
