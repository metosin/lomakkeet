// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.util');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
lomakkeet.util.chan_QMARK_ = (function lomakkeet$util$chan_QMARK_(v){
return (v instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 * nested structure. keys is a sequence of keys. Any empty maps that result
 * will not be present in the new structure.
 */
lomakkeet.util.dissoc_in = (function lomakkeet$util$dissoc_in(m,p__17215){
var vec__17219 = p__17215;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17219,(0),null);
var ks = cljs.core.nthnext(vec__17219,(1));
var keys = vec__17219;
if(cljs.core.truth_(ks)){
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var nextmap = temp__4423__auto__;
var newmap = lomakkeet$util$dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
lomakkeet.util.debounce = (function lomakkeet$util$debounce(in$,ms){

var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__13636__auto___17402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13636__auto___17402,out){
return (function (){
var f__13637__auto__ = (function (){var switch__13558__auto__ = ((function (c__13636__auto___17402,out){
return (function (state_17364){
var state_val_17365 = (state_17364[(1)]);
if((state_val_17365 === (7))){
var inst_17316 = (state_17364[(2)]);
var state_17364__$1 = state_17364;
var statearr_17366_17403 = state_17364__$1;
(statearr_17366_17403[(2)] = inst_17316);

(statearr_17366_17403[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (20))){
var state_17364__$1 = state_17364;
var statearr_17367_17404 = state_17364__$1;
(statearr_17367_17404[(2)] = null);

(statearr_17367_17404[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (1))){
var inst_17311 = null;
var state_17364__$1 = (function (){var statearr_17368 = state_17364;
(statearr_17368[(7)] = inst_17311);

return statearr_17368;
})();
var statearr_17369_17405 = state_17364__$1;
(statearr_17369_17405[(2)] = null);

(statearr_17369_17405[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (4))){
var state_17364__$1 = state_17364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17364__$1,(7),in$);
} else {
if((state_val_17365 === (15))){
var inst_17319 = (state_17364[(8)]);
var inst_17330 = (state_17364[(9)]);
var inst_17347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330,(0),null);
var state_17364__$1 = (function (){var statearr_17370 = state_17364;
(statearr_17370[(10)] = inst_17347);

return statearr_17370;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17364__$1,(18),out,inst_17319);
} else {
if((state_val_17365 === (21))){
var inst_17356 = (state_17364[(2)]);
var state_17364__$1 = state_17364;
var statearr_17371_17406 = state_17364__$1;
(statearr_17371_17406[(2)] = inst_17356);

(statearr_17371_17406[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (13))){
var inst_17340 = cljs.core.async.close_BANG_(out);
var state_17364__$1 = state_17364;
var statearr_17372_17407 = state_17364__$1;
(statearr_17372_17407[(2)] = inst_17340);

(statearr_17372_17407[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (6))){
var inst_17320 = (state_17364[(11)]);
var inst_17319 = (state_17364[(2)]);
var inst_17320__$1 = cljs.core.async.timeout(ms);
var inst_17326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17327 = [in$,inst_17320__$1];
var inst_17328 = (new cljs.core.PersistentVector(null,2,(5),inst_17326,inst_17327,null));
var state_17364__$1 = (function (){var statearr_17373 = state_17364;
(statearr_17373[(8)] = inst_17319);

(statearr_17373[(11)] = inst_17320__$1);

return statearr_17373;
})();
return cljs.core.async.ioc_alts_BANG_(state_17364__$1,(8),inst_17328);
} else {
if((state_val_17365 === (17))){
var inst_17358 = (state_17364[(2)]);
var state_17364__$1 = state_17364;
var statearr_17374_17408 = state_17364__$1;
(statearr_17374_17408[(2)] = inst_17358);

(statearr_17374_17408[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (3))){
var inst_17362 = (state_17364[(2)]);
var state_17364__$1 = state_17364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17364__$1,inst_17362);
} else {
if((state_val_17365 === (12))){
var inst_17336 = (state_17364[(12)]);
var inst_17311 = inst_17336;
var state_17364__$1 = (function (){var statearr_17375 = state_17364;
(statearr_17375[(7)] = inst_17311);

return statearr_17375;
})();
var statearr_17376_17409 = state_17364__$1;
(statearr_17376_17409[(2)] = null);

(statearr_17376_17409[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (2))){
var inst_17311 = (state_17364[(7)]);
var inst_17313 = (inst_17311 == null);
var state_17364__$1 = state_17364;
if(cljs.core.truth_(inst_17313)){
var statearr_17377_17410 = state_17364__$1;
(statearr_17377_17410[(1)] = (4));

} else {
var statearr_17378_17411 = state_17364__$1;
(statearr_17378_17411[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (19))){
var inst_17331 = (state_17364[(13)]);
var state_17364__$1 = state_17364;
var statearr_17379_17412 = state_17364__$1;
(statearr_17379_17412[(2)] = inst_17331);

(statearr_17379_17412[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (11))){
var inst_17360 = (state_17364[(2)]);
var state_17364__$1 = state_17364;
var statearr_17380_17413 = state_17364__$1;
(statearr_17380_17413[(2)] = inst_17360);

(statearr_17380_17413[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (9))){
var inst_17336 = (state_17364[(12)]);
var inst_17330 = (state_17364[(9)]);
var inst_17336__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330,(0),null);
var state_17364__$1 = (function (){var statearr_17381 = state_17364;
(statearr_17381[(12)] = inst_17336__$1);

return statearr_17381;
})();
if(cljs.core.truth_(inst_17336__$1)){
var statearr_17382_17414 = state_17364__$1;
(statearr_17382_17414[(1)] = (12));

} else {
var statearr_17383_17415 = state_17364__$1;
(statearr_17383_17415[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (5))){
var inst_17311 = (state_17364[(7)]);
var state_17364__$1 = state_17364;
var statearr_17384_17416 = state_17364__$1;
(statearr_17384_17416[(2)] = inst_17311);

(statearr_17384_17416[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (14))){
var inst_17342 = (state_17364[(2)]);
var state_17364__$1 = state_17364;
var statearr_17385_17417 = state_17364__$1;
(statearr_17385_17417[(2)] = inst_17342);

(statearr_17385_17417[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (16))){
var inst_17332 = (state_17364[(14)]);
var inst_17352 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17332,cljs.core.constant$keyword$default);
var state_17364__$1 = state_17364;
if(inst_17352){
var statearr_17386_17418 = state_17364__$1;
(statearr_17386_17418[(1)] = (19));

} else {
var statearr_17387_17419 = state_17364__$1;
(statearr_17387_17419[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (10))){
var inst_17332 = (state_17364[(14)]);
var inst_17320 = (state_17364[(11)]);
var inst_17344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17332,inst_17320);
var state_17364__$1 = state_17364;
if(inst_17344){
var statearr_17388_17420 = state_17364__$1;
(statearr_17388_17420[(1)] = (15));

} else {
var statearr_17389_17421 = state_17364__$1;
(statearr_17389_17421[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (18))){
var inst_17349 = (state_17364[(2)]);
var inst_17311 = null;
var state_17364__$1 = (function (){var statearr_17390 = state_17364;
(statearr_17390[(15)] = inst_17349);

(statearr_17390[(7)] = inst_17311);

return statearr_17390;
})();
var statearr_17391_17422 = state_17364__$1;
(statearr_17391_17422[(2)] = null);

(statearr_17391_17422[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17365 === (8))){
var inst_17332 = (state_17364[(14)]);
var inst_17330 = (state_17364[(9)]);
var inst_17330__$1 = (state_17364[(2)]);
var inst_17331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330__$1,(0),null);
var inst_17332__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17330__$1,(1),null);
var inst_17333 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17332__$1,in$);
var state_17364__$1 = (function (){var statearr_17392 = state_17364;
(statearr_17392[(13)] = inst_17331);

(statearr_17392[(14)] = inst_17332__$1);

(statearr_17392[(9)] = inst_17330__$1);

return statearr_17392;
})();
if(inst_17333){
var statearr_17393_17423 = state_17364__$1;
(statearr_17393_17423[(1)] = (9));

} else {
var statearr_17394_17424 = state_17364__$1;
(statearr_17394_17424[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
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
});})(c__13636__auto___17402,out))
;
return ((function (switch__13558__auto__,c__13636__auto___17402,out){
return (function() {
var lomakkeet$util$debounce_$_state_machine__13559__auto__ = null;
var lomakkeet$util$debounce_$_state_machine__13559__auto____0 = (function (){
var statearr_17398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17398[(0)] = lomakkeet$util$debounce_$_state_machine__13559__auto__);

(statearr_17398[(1)] = (1));

return statearr_17398;
});
var lomakkeet$util$debounce_$_state_machine__13559__auto____1 = (function (state_17364){
while(true){
var ret_value__13560__auto__ = (function (){try{while(true){
var result__13561__auto__ = switch__13558__auto__(state_17364);
if(cljs.core.keyword_identical_QMARK_(result__13561__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13561__auto__;
}
break;
}
}catch (e17399){if((e17399 instanceof Object)){
var ex__13562__auto__ = e17399;
var statearr_17400_17425 = state_17364;
(statearr_17400_17425[(5)] = ex__13562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17364);

return cljs.core.constant$keyword$recur;
} else {
throw e17399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13560__auto__,cljs.core.constant$keyword$recur)){
var G__17426 = state_17364;
state_17364 = G__17426;
continue;
} else {
return ret_value__13560__auto__;
}
break;
}
});
lomakkeet$util$debounce_$_state_machine__13559__auto__ = function(state_17364){
switch(arguments.length){
case 0:
return lomakkeet$util$debounce_$_state_machine__13559__auto____0.call(this);
case 1:
return lomakkeet$util$debounce_$_state_machine__13559__auto____1.call(this,state_17364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lomakkeet$util$debounce_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$0 = lomakkeet$util$debounce_$_state_machine__13559__auto____0;
lomakkeet$util$debounce_$_state_machine__13559__auto__.cljs$core$IFn$_invoke$arity$1 = lomakkeet$util$debounce_$_state_machine__13559__auto____1;
return lomakkeet$util$debounce_$_state_machine__13559__auto__;
})()
;})(switch__13558__auto__,c__13636__auto___17402,out))
})();
var state__13638__auto__ = (function (){var statearr_17401 = (function (){return (f__13637__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13637__auto__.cljs$core$IFn$_invoke$arity$0() : f__13637__auto__.call(null));
})();
(statearr_17401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13636__auto___17402);

return statearr_17401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13638__auto__);
});})(c__13636__auto___17402,out))
);


return out;
});
/**
 * Given parent element with scrollbar, keep the children visible.
 */
lomakkeet.util.keep_visible_BANG_ = (function lomakkeet$util$keep_visible_BANG_(parent,el){
var par_offset = parent.scrollTop;
var par_height = parent.clientHeight;
var child_offset = el.offsetTop;
var child_height = el.clientHeight;
if(((child_offset + child_height) > (par_offset + par_height))){
return parent.scrollTop = ((child_offset + child_height) - par_height);
} else {
if((child_offset < par_offset)){
return parent.scrollTop = child_offset;
} else {
return null;
}
}
});
/**
 * Limit x: a < x b
 */
lomakkeet.util.limit = (function lomakkeet$util$limit(a,b,x){
var x__4650__auto__ = a;
var y__4651__auto__ = (function (){var x__4657__auto__ = b;
var y__4658__auto__ = x;
return ((x__4657__auto__ < y__4658__auto__) ? x__4657__auto__ : y__4658__auto__);
})();
return ((x__4650__auto__ > y__4651__auto__) ? x__4650__auto__ : y__4651__auto__);
});
