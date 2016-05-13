// Compiled by ClojureScript 1.7.170 {}
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
lomakkeet.util.dissoc_in = (function lomakkeet$util$dissoc_in(m,p__11382){
var vec__11384 = p__11382;
var k = cljs.core.nth.call(null,vec__11384,(0),null);
var ks = cljs.core.nthnext.call(null,vec__11384,(1));
var keys = vec__11384;
if(cljs.core.truth_(ks)){
var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var nextmap = temp__4423__auto__;
var newmap = lomakkeet$util$dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
lomakkeet.util.debounce = (function lomakkeet$util$debounce(in$,ms){

var out = cljs.core.async.chan.call(null);
var c__8608__auto___11567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8608__auto___11567,out){
return (function (){
var f__8609__auto__ = (function (){var switch__8496__auto__ = ((function (c__8608__auto___11567,out){
return (function (state_11529){
var state_val_11530 = (state_11529[(1)]);
if((state_val_11530 === (7))){
var inst_11481 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11531_11568 = state_11529__$1;
(statearr_11531_11568[(2)] = inst_11481);

(statearr_11531_11568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (20))){
var state_11529__$1 = state_11529;
var statearr_11532_11569 = state_11529__$1;
(statearr_11532_11569[(2)] = null);

(statearr_11532_11569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (1))){
var inst_11476 = null;
var state_11529__$1 = (function (){var statearr_11533 = state_11529;
(statearr_11533[(7)] = inst_11476);

return statearr_11533;
})();
var statearr_11534_11570 = state_11529__$1;
(statearr_11534_11570[(2)] = null);

(statearr_11534_11570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (4))){
var state_11529__$1 = state_11529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11529__$1,(7),in$);
} else {
if((state_val_11530 === (15))){
var inst_11484 = (state_11529[(8)]);
var inst_11495 = (state_11529[(9)]);
var inst_11512 = cljs.core.nth.call(null,inst_11495,(0),null);
var state_11529__$1 = (function (){var statearr_11535 = state_11529;
(statearr_11535[(10)] = inst_11512);

return statearr_11535;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11529__$1,(18),out,inst_11484);
} else {
if((state_val_11530 === (21))){
var inst_11521 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11536_11571 = state_11529__$1;
(statearr_11536_11571[(2)] = inst_11521);

(statearr_11536_11571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (13))){
var inst_11505 = cljs.core.async.close_BANG_.call(null,out);
var state_11529__$1 = state_11529;
var statearr_11537_11572 = state_11529__$1;
(statearr_11537_11572[(2)] = inst_11505);

(statearr_11537_11572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (6))){
var inst_11485 = (state_11529[(11)]);
var inst_11484 = (state_11529[(2)]);
var inst_11485__$1 = cljs.core.async.timeout.call(null,ms);
var inst_11491 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11492 = [in$,inst_11485__$1];
var inst_11493 = (new cljs.core.PersistentVector(null,2,(5),inst_11491,inst_11492,null));
var state_11529__$1 = (function (){var statearr_11538 = state_11529;
(statearr_11538[(11)] = inst_11485__$1);

(statearr_11538[(8)] = inst_11484);

return statearr_11538;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11529__$1,(8),inst_11493);
} else {
if((state_val_11530 === (17))){
var inst_11523 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11539_11573 = state_11529__$1;
(statearr_11539_11573[(2)] = inst_11523);

(statearr_11539_11573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (3))){
var inst_11527 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11529__$1,inst_11527);
} else {
if((state_val_11530 === (12))){
var inst_11501 = (state_11529[(12)]);
var inst_11476 = inst_11501;
var state_11529__$1 = (function (){var statearr_11540 = state_11529;
(statearr_11540[(7)] = inst_11476);

return statearr_11540;
})();
var statearr_11541_11574 = state_11529__$1;
(statearr_11541_11574[(2)] = null);

(statearr_11541_11574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (2))){
var inst_11476 = (state_11529[(7)]);
var inst_11478 = (inst_11476 == null);
var state_11529__$1 = state_11529;
if(cljs.core.truth_(inst_11478)){
var statearr_11542_11575 = state_11529__$1;
(statearr_11542_11575[(1)] = (4));

} else {
var statearr_11543_11576 = state_11529__$1;
(statearr_11543_11576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (19))){
var inst_11496 = (state_11529[(13)]);
var state_11529__$1 = state_11529;
var statearr_11544_11577 = state_11529__$1;
(statearr_11544_11577[(2)] = inst_11496);

(statearr_11544_11577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (11))){
var inst_11525 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11545_11578 = state_11529__$1;
(statearr_11545_11578[(2)] = inst_11525);

(statearr_11545_11578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (9))){
var inst_11501 = (state_11529[(12)]);
var inst_11495 = (state_11529[(9)]);
var inst_11501__$1 = cljs.core.nth.call(null,inst_11495,(0),null);
var state_11529__$1 = (function (){var statearr_11546 = state_11529;
(statearr_11546[(12)] = inst_11501__$1);

return statearr_11546;
})();
if(cljs.core.truth_(inst_11501__$1)){
var statearr_11547_11579 = state_11529__$1;
(statearr_11547_11579[(1)] = (12));

} else {
var statearr_11548_11580 = state_11529__$1;
(statearr_11548_11580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (5))){
var inst_11476 = (state_11529[(7)]);
var state_11529__$1 = state_11529;
var statearr_11549_11581 = state_11529__$1;
(statearr_11549_11581[(2)] = inst_11476);

(statearr_11549_11581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (14))){
var inst_11507 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11550_11582 = state_11529__$1;
(statearr_11550_11582[(2)] = inst_11507);

(statearr_11550_11582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (16))){
var inst_11497 = (state_11529[(14)]);
var inst_11517 = cljs.core._EQ_.call(null,inst_11497,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_11529__$1 = state_11529;
if(inst_11517){
var statearr_11551_11583 = state_11529__$1;
(statearr_11551_11583[(1)] = (19));

} else {
var statearr_11552_11584 = state_11529__$1;
(statearr_11552_11584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (10))){
var inst_11497 = (state_11529[(14)]);
var inst_11485 = (state_11529[(11)]);
var inst_11509 = cljs.core._EQ_.call(null,inst_11497,inst_11485);
var state_11529__$1 = state_11529;
if(inst_11509){
var statearr_11553_11585 = state_11529__$1;
(statearr_11553_11585[(1)] = (15));

} else {
var statearr_11554_11586 = state_11529__$1;
(statearr_11554_11586[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (18))){
var inst_11514 = (state_11529[(2)]);
var inst_11476 = null;
var state_11529__$1 = (function (){var statearr_11555 = state_11529;
(statearr_11555[(15)] = inst_11514);

(statearr_11555[(7)] = inst_11476);

return statearr_11555;
})();
var statearr_11556_11587 = state_11529__$1;
(statearr_11556_11587[(2)] = null);

(statearr_11556_11587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (8))){
var inst_11497 = (state_11529[(14)]);
var inst_11495 = (state_11529[(9)]);
var inst_11495__$1 = (state_11529[(2)]);
var inst_11496 = cljs.core.nth.call(null,inst_11495__$1,(0),null);
var inst_11497__$1 = cljs.core.nth.call(null,inst_11495__$1,(1),null);
var inst_11498 = cljs.core._EQ_.call(null,inst_11497__$1,in$);
var state_11529__$1 = (function (){var statearr_11557 = state_11529;
(statearr_11557[(13)] = inst_11496);

(statearr_11557[(14)] = inst_11497__$1);

(statearr_11557[(9)] = inst_11495__$1);

return statearr_11557;
})();
if(inst_11498){
var statearr_11558_11588 = state_11529__$1;
(statearr_11558_11588[(1)] = (9));

} else {
var statearr_11559_11589 = state_11529__$1;
(statearr_11559_11589[(1)] = (10));

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
});})(c__8608__auto___11567,out))
;
return ((function (switch__8496__auto__,c__8608__auto___11567,out){
return (function() {
var lomakkeet$util$debounce_$_state_machine__8497__auto__ = null;
var lomakkeet$util$debounce_$_state_machine__8497__auto____0 = (function (){
var statearr_11563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11563[(0)] = lomakkeet$util$debounce_$_state_machine__8497__auto__);

(statearr_11563[(1)] = (1));

return statearr_11563;
});
var lomakkeet$util$debounce_$_state_machine__8497__auto____1 = (function (state_11529){
while(true){
var ret_value__8498__auto__ = (function (){try{while(true){
var result__8499__auto__ = switch__8496__auto__.call(null,state_11529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8499__auto__;
}
break;
}
}catch (e11564){if((e11564 instanceof Object)){
var ex__8500__auto__ = e11564;
var statearr_11565_11590 = state_11529;
(statearr_11565_11590[(5)] = ex__8500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11591 = state_11529;
state_11529 = G__11591;
continue;
} else {
return ret_value__8498__auto__;
}
break;
}
});
lomakkeet$util$debounce_$_state_machine__8497__auto__ = function(state_11529){
switch(arguments.length){
case 0:
return lomakkeet$util$debounce_$_state_machine__8497__auto____0.call(this);
case 1:
return lomakkeet$util$debounce_$_state_machine__8497__auto____1.call(this,state_11529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lomakkeet$util$debounce_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$0 = lomakkeet$util$debounce_$_state_machine__8497__auto____0;
lomakkeet$util$debounce_$_state_machine__8497__auto__.cljs$core$IFn$_invoke$arity$1 = lomakkeet$util$debounce_$_state_machine__8497__auto____1;
return lomakkeet$util$debounce_$_state_machine__8497__auto__;
})()
;})(switch__8496__auto__,c__8608__auto___11567,out))
})();
var state__8610__auto__ = (function (){var statearr_11566 = f__8609__auto__.call(null);
(statearr_11566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8608__auto___11567);

return statearr_11566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8610__auto__);
});})(c__8608__auto___11567,out))
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
var x__5319__auto__ = a;
var y__5320__auto__ = (function (){var x__5326__auto__ = b;
var y__5327__auto__ = x;
return ((x__5326__auto__ < y__5327__auto__) ? x__5326__auto__ : y__5327__auto__);
})();
return ((x__5319__auto__ > y__5320__auto__) ? x__5319__auto__ : y__5320__auto__);
});

//# sourceMappingURL=util.js.map