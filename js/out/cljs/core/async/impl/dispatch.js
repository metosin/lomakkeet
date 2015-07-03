// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer((32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_18287 = (0);
while(true){
var m_18288 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_18288 == null)){
} else {
(m_18288.cljs$core$IFn$_invoke$arity$0 ? m_18288.cljs$core$IFn$_invoke$arity$0() : m_18288.call(null));

if((count_18287 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__18289 = (count_18287 + (1));
count_18287 = G__18289;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return (cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.impl.dispatch.queue_dispatcher.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.impl.dispatch.queue_dispatcher.call(null));
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(cljs.core.truth_((function (){var and__4326__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__4326__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

var G__18291 = cljs.core.async.impl.dispatch.process_messages;
return goog.async.nextTick(G__18291);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher();
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
var G__18294 = f;
var G__18295 = delay;
return setTimeout(G__18294,G__18295);
});
