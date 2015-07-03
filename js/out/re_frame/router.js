// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13929__auto___26215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13929__auto___26215){
return (function (){
var f__13930__auto__ = (function (){var switch__13914__auto__ = ((function (c__13929__auto___26215){
return (function (state_26197){
var state_val_26198 = (state_26197[(1)]);
if((state_val_26198 === (9))){
var inst_26189 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
var statearr_26199_26216 = state_26197__$1;
(statearr_26199_26216[(2)] = inst_26189);

(statearr_26199_26216[(1)] = (7));


return cljs.core.constant$keyword$110;
} else {
if((state_val_26198 === (8))){
var inst_26185 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
var statearr_26200_26217 = state_26197__$1;
(statearr_26200_26217[(2)] = inst_26185);

(statearr_26200_26217[(1)] = (7));


return cljs.core.constant$keyword$110;
} else {
if((state_val_26198 === (7))){
var inst_26178 = (state_26197[(7)]);
var inst_26191 = (state_26197[(2)]);
var inst_26192 = re_frame.handlers.handle(inst_26178);
var state_26197__$1 = (function (){var statearr_26201 = state_26197;
(statearr_26201[(8)] = inst_26191);

(statearr_26201[(9)] = inst_26192);

return statearr_26201;
})();
var statearr_26202_26218 = state_26197__$1;
(statearr_26202_26218[(2)] = null);

(statearr_26202_26218[(1)] = (2));


return cljs.core.constant$keyword$110;
} else {
if((state_val_26198 === (6))){
var inst_26187 = cljs.core.async.timeout((0));
var state_26197__$1 = state_26197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26197__$1,(9),inst_26187);
} else {
if((state_val_26198 === (5))){
var inst_26182 = reagent.core.flush();
var inst_26183 = cljs.core.async.timeout((20));
var state_26197__$1 = (function (){var statearr_26203 = state_26197;
(statearr_26203[(10)] = inst_26182);

return statearr_26203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26197__$1,(8),inst_26183);
} else {
if((state_val_26198 === (4))){
var inst_26178 = (state_26197[(7)]);
var inst_26178__$1 = (state_26197[(2)]);
var inst_26179 = cljs.core.meta(inst_26178__$1);
var inst_26180 = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(inst_26179);
var state_26197__$1 = (function (){var statearr_26204 = state_26197;
(statearr_26204[(7)] = inst_26178__$1);

return statearr_26204;
})();
if(cljs.core.truth_(inst_26180)){
var statearr_26205_26219 = state_26197__$1;
(statearr_26205_26219[(1)] = (5));

} else {
var statearr_26206_26220 = state_26197__$1;
(statearr_26206_26220[(1)] = (6));

}

return cljs.core.constant$keyword$110;
} else {
if((state_val_26198 === (3))){
var inst_26195 = (state_26197[(2)]);
var state_26197__$1 = state_26197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26197__$1,inst_26195);
} else {
if((state_val_26198 === (2))){
var state_26197__$1 = state_26197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26197__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26198 === (1))){
var state_26197__$1 = state_26197;
var statearr_26207_26221 = state_26197__$1;
(statearr_26207_26221[(2)] = null);

(statearr_26207_26221[(1)] = (2));


return cljs.core.constant$keyword$110;
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
});})(c__13929__auto___26215))
;
return ((function (switch__13914__auto__,c__13929__auto___26215){
return (function() {
var state_machine__13915__auto__ = null;
var state_machine__13915__auto____0 = (function (){
var statearr_26211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26211[(0)] = state_machine__13915__auto__);

(statearr_26211[(1)] = (1));

return statearr_26211;
});
var state_machine__13915__auto____1 = (function (state_26197){
while(true){
var ret_value__13916__auto__ = (function (){try{while(true){
var result__13917__auto__ = switch__13914__auto__(state_26197);
if(cljs.core.keyword_identical_QMARK_(result__13917__auto__,cljs.core.constant$keyword$110)){
continue;
} else {
return result__13917__auto__;
}
break;
}
}catch (e26212){if((e26212 instanceof Object)){
var ex__13918__auto__ = e26212;
var statearr_26213_26222 = state_26197;
(statearr_26213_26222[(5)] = ex__13918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26197);

return cljs.core.constant$keyword$110;
} else {
throw e26212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13916__auto__,cljs.core.constant$keyword$110)){
var G__26223 = state_26197;
state_26197 = G__26223;
continue;
} else {
return ret_value__13916__auto__;
}
break;
}
});
state_machine__13915__auto__ = function(state_26197){
switch(arguments.length){
case 0:
return state_machine__13915__auto____0.call(this);
case 1:
return state_machine__13915__auto____1.call(this,state_26197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13915__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13915__auto____0;
state_machine__13915__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13915__auto____1;
return state_machine__13915__auto__;
})()
;})(switch__13914__auto__,c__13929__auto___26215))
})();
var state__13931__auto__ = (function (){var statearr_26214 = (function (){return (f__13930__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13930__auto__.cljs$core$IFn$_invoke$arity$0() : f__13930__auto__.call(null));
})();
(statearr_26214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13929__auto___26215);

return statearr_26214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13931__auto__);
});})(c__13929__auto___26215))
);

/**
* Send an event to be processed by the registered handler.
* 
* Usage example:
* (dispatch [:delete-item 42])
* 
*/
re_frame.router.dispatch = (function dispatch(event_v){
if((event_v == null)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"dispatch\" is ignoring a nil event."], 0));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.router.event_chan,event_v);
}

return null;
});
/**
* Send an event to be processed by the registered handler, but avoid the async-inducing
* use of core.async/chan.
* 
* Usage example:
* (dispatch-sync [:delete-item 42])
*/
re_frame.router.dispatch_sync = (function dispatch_sync(event_v){
re_frame.handlers.handle(event_v);

return null;
});
