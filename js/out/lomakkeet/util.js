// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
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
lomakkeet.util.dissoc_in = (function lomakkeet$util$dissoc_in(m,p__17209){
var vec__17213 = p__17209;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(0),null);
var ks = cljs.core.nthnext(vec__17213,(1));
var keys = vec__17213;
if(cljs.core.truth_(ks)){
var temp__4421__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4421__auto__)){
var nextmap = temp__4421__auto__;
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
var c__13630__auto___17396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13630__auto___17396,out){
return (function (){
var f__13631__auto__ = (function (){var switch__13552__auto__ = ((function (c__13630__auto___17396,out){
return (function (state_17358){
var state_val_17359 = (state_17358[(1)]);
if((state_val_17359 === (7))){
var inst_17310 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17360_17397 = state_17358__$1;
(statearr_17360_17397[(2)] = inst_17310);

(statearr_17360_17397[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (20))){
var state_17358__$1 = state_17358;
var statearr_17361_17398 = state_17358__$1;
(statearr_17361_17398[(2)] = null);

(statearr_17361_17398[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (1))){
var inst_17305 = null;
var state_17358__$1 = (function (){var statearr_17362 = state_17358;
(statearr_17362[(7)] = inst_17305);

return statearr_17362;
})();
var statearr_17363_17399 = state_17358__$1;
(statearr_17363_17399[(2)] = null);

(statearr_17363_17399[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (4))){
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17358__$1,(7),in$);
} else {
if((state_val_17359 === (15))){
var inst_17324 = (state_17358[(8)]);
var inst_17313 = (state_17358[(9)]);
var inst_17341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17324,(0),null);
var state_17358__$1 = (function (){var statearr_17364 = state_17358;
(statearr_17364[(10)] = inst_17341);

return statearr_17364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17358__$1,(18),out,inst_17313);
} else {
if((state_val_17359 === (21))){
var inst_17350 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17365_17400 = state_17358__$1;
(statearr_17365_17400[(2)] = inst_17350);

(statearr_17365_17400[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (13))){
var inst_17334 = cljs.core.async.close_BANG_(out);
var state_17358__$1 = state_17358;
var statearr_17366_17401 = state_17358__$1;
(statearr_17366_17401[(2)] = inst_17334);

(statearr_17366_17401[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (6))){
var inst_17314 = (state_17358[(11)]);
var inst_17313 = (state_17358[(2)]);
var inst_17314__$1 = cljs.core.async.timeout(ms);
var inst_17320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17321 = [in$,inst_17314__$1];
var inst_17322 = (new cljs.core.PersistentVector(null,2,(5),inst_17320,inst_17321,null));
var state_17358__$1 = (function (){var statearr_17367 = state_17358;
(statearr_17367[(11)] = inst_17314__$1);

(statearr_17367[(9)] = inst_17313);

return statearr_17367;
})();
return cljs.core.async.ioc_alts_BANG_(state_17358__$1,(8),inst_17322);
} else {
if((state_val_17359 === (17))){
var inst_17352 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17368_17402 = state_17358__$1;
(statearr_17368_17402[(2)] = inst_17352);

(statearr_17368_17402[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (3))){
var inst_17356 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17358__$1,inst_17356);
} else {
if((state_val_17359 === (12))){
var inst_17330 = (state_17358[(12)]);
var inst_17305 = inst_17330;
var state_17358__$1 = (function (){var statearr_17369 = state_17358;
(statearr_17369[(7)] = inst_17305);

return statearr_17369;
})();
var statearr_17370_17403 = state_17358__$1;
(statearr_17370_17403[(2)] = null);

(statearr_17370_17403[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (2))){
var inst_17305 = (state_17358[(7)]);
var inst_17307 = (inst_17305 == null);
var state_17358__$1 = state_17358;
if(cljs.core.truth_(inst_17307)){
var statearr_17371_17404 = state_17358__$1;
(statearr_17371_17404[(1)] = (4));

} else {
var statearr_17372_17405 = state_17358__$1;
(statearr_17372_17405[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (19))){
var inst_17325 = (state_17358[(13)]);
var state_17358__$1 = state_17358;
var statearr_17373_17406 = state_17358__$1;
(statearr_17373_17406[(2)] = inst_17325);

(statearr_17373_17406[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (11))){
var inst_17354 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17374_17407 = state_17358__$1;
(statearr_17374_17407[(2)] = inst_17354);

(statearr_17374_17407[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (9))){
var inst_17324 = (state_17358[(8)]);
var inst_17330 = (state_17358[(12)]);
var inst_17330__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17324,(0),null);
var state_17358__$1 = (function (){var statearr_17375 = state_17358;
(statearr_17375[(12)] = inst_17330__$1);

return statearr_17375;
})();
if(cljs.core.truth_(inst_17330__$1)){
var statearr_17376_17408 = state_17358__$1;
(statearr_17376_17408[(1)] = (12));

} else {
var statearr_17377_17409 = state_17358__$1;
(statearr_17377_17409[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (5))){
var inst_17305 = (state_17358[(7)]);
var state_17358__$1 = state_17358;
var statearr_17378_17410 = state_17358__$1;
(statearr_17378_17410[(2)] = inst_17305);

(statearr_17378_17410[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (14))){
var inst_17336 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17379_17411 = state_17358__$1;
(statearr_17379_17411[(2)] = inst_17336);

(statearr_17379_17411[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (16))){
var inst_17326 = (state_17358[(14)]);
var inst_17346 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17326,cljs.core.constant$keyword$default);
var state_17358__$1 = state_17358;
if(inst_17346){
var statearr_17380_17412 = state_17358__$1;
(statearr_17380_17412[(1)] = (19));

} else {
var statearr_17381_17413 = state_17358__$1;
(statearr_17381_17413[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (10))){
var inst_17314 = (state_17358[(11)]);
var inst_17326 = (state_17358[(14)]);
var inst_17338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17326,inst_17314);
var state_17358__$1 = state_17358;
if(inst_17338){
var statearr_17382_17414 = state_17358__$1;
(statearr_17382_17414[(1)] = (15));

} else {
var statearr_17383_17415 = state_17358__$1;
(statearr_17383_17415[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (18))){
var inst_17343 = (state_17358[(2)]);
var inst_17305 = null;
var state_17358__$1 = (function (){var statearr_17384 = state_17358;
(statearr_17384[(7)] = inst_17305);

(statearr_17384[(15)] = inst_17343);

return statearr_17384;
})();
var statearr_17385_17416 = state_17358__$1;
(statearr_17385_17416[(2)] = null);

(statearr_17385_17416[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17359 === (8))){
var inst_17326 = (state_17358[(14)]);
var inst_17324 = (state_17358[(8)]);
var inst_17324__$1 = (state_17358[(2)]);
var inst_17325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17324__$1,(0),null);
var inst_17326__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17324__$1,(1),null);
var inst_17327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17326__$1,in$);
var state_17358__$1 = (function (){var statearr_17386 = state_17358;
(statearr_17386[(14)] = inst_17326__$1);

(statearr_17386[(13)] = inst_17325);

(statearr_17386[(8)] = inst_17324__$1);

return statearr_17386;
})();
if(inst_17327){
var statearr_17387_17417 = state_17358__$1;
(statearr_17387_17417[(1)] = (9));

} else {
var statearr_17388_17418 = state_17358__$1;
(statearr_17388_17418[(1)] = (10));

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
});})(c__13630__auto___17396,out))
;
return ((function (switch__13552__auto__,c__13630__auto___17396,out){
return (function() {
var lomakkeet$util$debounce_$_state_machine__13553__auto__ = null;
var lomakkeet$util$debounce_$_state_machine__13553__auto____0 = (function (){
var statearr_17392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17392[(0)] = lomakkeet$util$debounce_$_state_machine__13553__auto__);

(statearr_17392[(1)] = (1));

return statearr_17392;
});
var lomakkeet$util$debounce_$_state_machine__13553__auto____1 = (function (state_17358){
while(true){
var ret_value__13554__auto__ = (function (){try{while(true){
var result__13555__auto__ = switch__13552__auto__(state_17358);
if(cljs.core.keyword_identical_QMARK_(result__13555__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__13555__auto__;
}
break;
}
}catch (e17393){if((e17393 instanceof Object)){
var ex__13556__auto__ = e17393;
var statearr_17394_17419 = state_17358;
(statearr_17394_17419[(5)] = ex__13556__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17358);

return cljs.core.constant$keyword$recur;
} else {
throw e17393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13554__auto__,cljs.core.constant$keyword$recur)){
var G__17420 = state_17358;
state_17358 = G__17420;
continue;
} else {
return ret_value__13554__auto__;
}
break;
}
});
lomakkeet$util$debounce_$_state_machine__13553__auto__ = function(state_17358){
switch(arguments.length){
case 0:
return lomakkeet$util$debounce_$_state_machine__13553__auto____0.call(this);
case 1:
return lomakkeet$util$debounce_$_state_machine__13553__auto____1.call(this,state_17358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lomakkeet$util$debounce_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$0 = lomakkeet$util$debounce_$_state_machine__13553__auto____0;
lomakkeet$util$debounce_$_state_machine__13553__auto__.cljs$core$IFn$_invoke$arity$1 = lomakkeet$util$debounce_$_state_machine__13553__auto____1;
return lomakkeet$util$debounce_$_state_machine__13553__auto__;
})()
;})(switch__13552__auto__,c__13630__auto___17396,out))
})();
var state__13632__auto__ = (function (){var statearr_17395 = (function (){return (f__13631__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13631__auto__.cljs$core$IFn$_invoke$arity$0() : f__13631__auto__.call(null));
})();
(statearr_17395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13630__auto___17396);

return statearr_17395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13632__auto__);
});})(c__13630__auto___17396,out))
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
