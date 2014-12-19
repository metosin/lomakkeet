// Compiled by ClojureScript 0.0-2496
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$55;
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34041) : f.call(null,G__34041));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34043 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34042,G__34043) : f.call(null,G__34042,G__34043));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34045 = x1;
var G__34046 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34044,G__34045,G__34046) : f.call(null,G__34044,G__34045,G__34046));
})());
});
var update__6 = (function() { 
var G__34047__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__34047 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__34047__delegate.call(this,m,k,f,x1,x2,xs);};
G__34047.cljs$lang$maxFixedArity = 5;
G__34047.cljs$lang$applyTo = (function (arglist__34048){
var m = cljs.core.first(arglist__34048);
arglist__34048 = cljs.core.next(arglist__34048);
var k = cljs.core.first(arglist__34048);
arglist__34048 = cljs.core.next(arglist__34048);
var f = cljs.core.first(arglist__34048);
arglist__34048 = cljs.core.next(arglist__34048);
var x1 = cljs.core.first(arglist__34048);
arglist__34048 = cljs.core.next(arglist__34048);
var x2 = cljs.core.first(arglist__34048);
var xs = cljs.core.rest(arglist__34048);
return G__34047__delegate(m,k,f,x1,x2,xs);
});
G__34047.cljs$core$IFn$_invoke$arity$variadic = G__34047__delegate;
return G__34047;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34068 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34068) : f.call(null,G__34068));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34069 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34069) : f.call(null,G__34069));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__7603__auto__ = (function (){var G__34071 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34071) : cljs.core.atom.call(null,G__34071));
})();
var seq__34072_34087 = cljs.core.seq(m);
var chunk__34073_34088 = null;
var count__34074_34089 = (0);
var i__34075_34090 = (0);
while(true){
if((i__34075_34090 < count__34074_34089)){
var vec__34076_34091 = chunk__34073_34088.cljs$core$IIndexed$_nth$arity$2(null,i__34075_34090);
var k_34092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076_34091,(0),null);
var v_34093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076_34091,(1),null);
var m34070_34094 = (function (){var G__34077 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34077) : cljs.core.deref.call(null,G__34077));
})();
var G__34078_34095 = m_atom__7603__auto__;
var G__34079_34096 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34070_34094,k_34092,(function (){var G__34080 = v_34093;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34080) : f.call(null,G__34080));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34078_34095,G__34079_34096) : cljs.core.reset_BANG_.call(null,G__34078_34095,G__34079_34096));

var G__34097 = seq__34072_34087;
var G__34098 = chunk__34073_34088;
var G__34099 = count__34074_34089;
var G__34100 = (i__34075_34090 + (1));
seq__34072_34087 = G__34097;
chunk__34073_34088 = G__34098;
count__34074_34089 = G__34099;
i__34075_34090 = G__34100;
continue;
} else {
var temp__4126__auto___34101 = cljs.core.seq(seq__34072_34087);
if(temp__4126__auto___34101){
var seq__34072_34102__$1 = temp__4126__auto___34101;
if(cljs.core.chunked_seq_QMARK_(seq__34072_34102__$1)){
var c__4415__auto___34103 = cljs.core.chunk_first(seq__34072_34102__$1);
var G__34104 = cljs.core.chunk_rest(seq__34072_34102__$1);
var G__34105 = c__4415__auto___34103;
var G__34106 = cljs.core.count(c__4415__auto___34103);
var G__34107 = (0);
seq__34072_34087 = G__34104;
chunk__34073_34088 = G__34105;
count__34074_34089 = G__34106;
i__34075_34090 = G__34107;
continue;
} else {
var vec__34081_34108 = cljs.core.first(seq__34072_34102__$1);
var k_34109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081_34108,(0),null);
var v_34110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34081_34108,(1),null);
var m34070_34111 = (function (){var G__34082 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34082) : cljs.core.deref.call(null,G__34082));
})();
var G__34083_34112 = m_atom__7603__auto__;
var G__34084_34113 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34070_34111,k_34109,(function (){var G__34085 = v_34110;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34085) : f.call(null,G__34085));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34083_34112,G__34084_34113) : cljs.core.reset_BANG_.call(null,G__34083_34112,G__34084_34113));

var G__34114 = cljs.core.next(seq__34072_34102__$1);
var G__34115 = null;
var G__34116 = (0);
var G__34117 = (0);
seq__34072_34087 = G__34114;
chunk__34073_34088 = G__34115;
count__34074_34089 = G__34116;
i__34075_34090 = G__34117;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34086 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34086) : cljs.core.deref.call(null,G__34086));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__34136 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34136) : f.call(null,G__34136));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__7603__auto__ = (function (){var G__34138 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34138) : cljs.core.atom.call(null,G__34138));
})();
var seq__34139_34154 = cljs.core.seq(m);
var chunk__34140_34155 = null;
var count__34141_34156 = (0);
var i__34142_34157 = (0);
while(true){
if((i__34142_34157 < count__34141_34156)){
var vec__34143_34158 = chunk__34140_34155.cljs$core$IIndexed$_nth$arity$2(null,i__34142_34157);
var k_34159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143_34158,(0),null);
var v_34160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34143_34158,(1),null);
var m34137_34161 = (function (){var G__34144 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34144) : cljs.core.deref.call(null,G__34144));
})();
var G__34145_34162 = m_atom__7603__auto__;
var G__34146_34163 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34137_34161,(function (){var G__34147 = k_34159;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34147) : f.call(null,G__34147));
})(),v_34160);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34145_34162,G__34146_34163) : cljs.core.reset_BANG_.call(null,G__34145_34162,G__34146_34163));

var G__34164 = seq__34139_34154;
var G__34165 = chunk__34140_34155;
var G__34166 = count__34141_34156;
var G__34167 = (i__34142_34157 + (1));
seq__34139_34154 = G__34164;
chunk__34140_34155 = G__34165;
count__34141_34156 = G__34166;
i__34142_34157 = G__34167;
continue;
} else {
var temp__4126__auto___34168 = cljs.core.seq(seq__34139_34154);
if(temp__4126__auto___34168){
var seq__34139_34169__$1 = temp__4126__auto___34168;
if(cljs.core.chunked_seq_QMARK_(seq__34139_34169__$1)){
var c__4415__auto___34170 = cljs.core.chunk_first(seq__34139_34169__$1);
var G__34171 = cljs.core.chunk_rest(seq__34139_34169__$1);
var G__34172 = c__4415__auto___34170;
var G__34173 = cljs.core.count(c__4415__auto___34170);
var G__34174 = (0);
seq__34139_34154 = G__34171;
chunk__34140_34155 = G__34172;
count__34141_34156 = G__34173;
i__34142_34157 = G__34174;
continue;
} else {
var vec__34148_34175 = cljs.core.first(seq__34139_34169__$1);
var k_34176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34148_34175,(0),null);
var v_34177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34148_34175,(1),null);
var m34137_34178 = (function (){var G__34149 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34149) : cljs.core.deref.call(null,G__34149));
})();
var G__34150_34179 = m_atom__7603__auto__;
var G__34151_34180 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34137_34178,(function (){var G__34152 = k_34176;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34152) : f.call(null,G__34152));
})(),v_34177);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34150_34179,G__34151_34180) : cljs.core.reset_BANG_.call(null,G__34150_34179,G__34151_34180));

var G__34181 = cljs.core.next(seq__34139_34169__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__34139_34154 = G__34181;
chunk__34140_34155 = G__34182;
count__34141_34156 = G__34183;
i__34142_34157 = G__34184;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34153 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34153) : cljs.core.deref.call(null,G__34153));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__7603__auto__ = (function (){var G__34201 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34201) : cljs.core.atom.call(null,G__34201));
})();
var seq__34202_34215 = cljs.core.seq(ks);
var chunk__34203_34216 = null;
var count__34204_34217 = (0);
var i__34205_34218 = (0);
while(true){
if((i__34205_34218 < count__34204_34217)){
var k_34219 = chunk__34203_34216.cljs$core$IIndexed$_nth$arity$2(null,i__34205_34218);
var m34200_34220 = (function (){var G__34206 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34206) : cljs.core.deref.call(null,G__34206));
})();
var G__34207_34221 = m_atom__7603__auto__;
var G__34208_34222 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34200_34220,k_34219,(function (){var G__34209 = k_34219;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34209) : f.call(null,G__34209));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34207_34221,G__34208_34222) : cljs.core.reset_BANG_.call(null,G__34207_34221,G__34208_34222));

var G__34223 = seq__34202_34215;
var G__34224 = chunk__34203_34216;
var G__34225 = count__34204_34217;
var G__34226 = (i__34205_34218 + (1));
seq__34202_34215 = G__34223;
chunk__34203_34216 = G__34224;
count__34204_34217 = G__34225;
i__34205_34218 = G__34226;
continue;
} else {
var temp__4126__auto___34227 = cljs.core.seq(seq__34202_34215);
if(temp__4126__auto___34227){
var seq__34202_34228__$1 = temp__4126__auto___34227;
if(cljs.core.chunked_seq_QMARK_(seq__34202_34228__$1)){
var c__4415__auto___34229 = cljs.core.chunk_first(seq__34202_34228__$1);
var G__34230 = cljs.core.chunk_rest(seq__34202_34228__$1);
var G__34231 = c__4415__auto___34229;
var G__34232 = cljs.core.count(c__4415__auto___34229);
var G__34233 = (0);
seq__34202_34215 = G__34230;
chunk__34203_34216 = G__34231;
count__34204_34217 = G__34232;
i__34205_34218 = G__34233;
continue;
} else {
var k_34234 = cljs.core.first(seq__34202_34228__$1);
var m34200_34235 = (function (){var G__34210 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34210) : cljs.core.deref.call(null,G__34210));
})();
var G__34211_34236 = m_atom__7603__auto__;
var G__34212_34237 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34200_34235,k_34234,(function (){var G__34213 = k_34234;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34213) : f.call(null,G__34213));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34211_34236,G__34212_34237) : cljs.core.reset_BANG_.call(null,G__34211_34236,G__34212_34237));

var G__34238 = cljs.core.next(seq__34202_34228__$1);
var G__34239 = null;
var G__34240 = (0);
var G__34241 = (0);
seq__34202_34215 = G__34238;
chunk__34203_34216 = G__34239;
count__34204_34217 = G__34240;
i__34205_34218 = G__34241;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34214 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34214) : cljs.core.deref.call(null,G__34214));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__7603__auto__ = (function (){var G__34258 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34258) : cljs.core.atom.call(null,G__34258));
})();
var seq__34259_34272 = cljs.core.seq(vs);
var chunk__34260_34273 = null;
var count__34261_34274 = (0);
var i__34262_34275 = (0);
while(true){
if((i__34262_34275 < count__34261_34274)){
var v_34276 = chunk__34260_34273.cljs$core$IIndexed$_nth$arity$2(null,i__34262_34275);
var m34257_34277 = (function (){var G__34263 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34263) : cljs.core.deref.call(null,G__34263));
})();
var G__34264_34278 = m_atom__7603__auto__;
var G__34265_34279 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34257_34277,(function (){var G__34266 = v_34276;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34266) : f.call(null,G__34266));
})(),v_34276);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34264_34278,G__34265_34279) : cljs.core.reset_BANG_.call(null,G__34264_34278,G__34265_34279));

var G__34280 = seq__34259_34272;
var G__34281 = chunk__34260_34273;
var G__34282 = count__34261_34274;
var G__34283 = (i__34262_34275 + (1));
seq__34259_34272 = G__34280;
chunk__34260_34273 = G__34281;
count__34261_34274 = G__34282;
i__34262_34275 = G__34283;
continue;
} else {
var temp__4126__auto___34284 = cljs.core.seq(seq__34259_34272);
if(temp__4126__auto___34284){
var seq__34259_34285__$1 = temp__4126__auto___34284;
if(cljs.core.chunked_seq_QMARK_(seq__34259_34285__$1)){
var c__4415__auto___34286 = cljs.core.chunk_first(seq__34259_34285__$1);
var G__34287 = cljs.core.chunk_rest(seq__34259_34285__$1);
var G__34288 = c__4415__auto___34286;
var G__34289 = cljs.core.count(c__4415__auto___34286);
var G__34290 = (0);
seq__34259_34272 = G__34287;
chunk__34260_34273 = G__34288;
count__34261_34274 = G__34289;
i__34262_34275 = G__34290;
continue;
} else {
var v_34291 = cljs.core.first(seq__34259_34285__$1);
var m34257_34292 = (function (){var G__34267 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34267) : cljs.core.deref.call(null,G__34267));
})();
var G__34268_34293 = m_atom__7603__auto__;
var G__34269_34294 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34257_34292,(function (){var G__34270 = v_34291;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34270) : f.call(null,G__34270));
})(),v_34291);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34268_34293,G__34269_34294) : cljs.core.reset_BANG_.call(null,G__34268_34293,G__34269_34294));

var G__34295 = cljs.core.next(seq__34259_34285__$1);
var G__34296 = null;
var G__34297 = (0);
var G__34298 = (0);
seq__34259_34272 = G__34295;
chunk__34260_34273 = G__34296;
count__34261_34274 = G__34297;
i__34262_34275 = G__34298;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34271 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34271) : cljs.core.deref.call(null,G__34271));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__34299){
var vec__34305 = p__34299;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34305,(0),null);
var ks = cljs.core.nthnext(vec__34305,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3616__auto__ = ks;
if(and__3616__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__3616__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__7603__auto__ = (function (){var G__34324 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34324) : cljs.core.atom.call(null,G__34324));
})();
var seq__34325_34338 = cljs.core.seq(x);
var chunk__34326_34339 = null;
var count__34327_34340 = (0);
var i__34328_34341 = (0);
while(true){
if((i__34328_34341 < count__34327_34340)){
var vec__34329_34342 = chunk__34326_34339.cljs$core$IIndexed$_nth$arity$2(null,i__34328_34341);
var k_34343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329_34342,(0),null);
var v_34344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34329_34342,(1),null);
var m34323_34345 = (function (){var G__34330 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34330) : cljs.core.deref.call(null,G__34330));
})();
var G__34331_34346 = m_atom__7603__auto__;
var G__34332_34347 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34323_34345,((typeof k_34343 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34343):k_34343),keywordize_map(v_34344));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34331_34346,G__34332_34347) : cljs.core.reset_BANG_.call(null,G__34331_34346,G__34332_34347));

var G__34348 = seq__34325_34338;
var G__34349 = chunk__34326_34339;
var G__34350 = count__34327_34340;
var G__34351 = (i__34328_34341 + (1));
seq__34325_34338 = G__34348;
chunk__34326_34339 = G__34349;
count__34327_34340 = G__34350;
i__34328_34341 = G__34351;
continue;
} else {
var temp__4126__auto___34352 = cljs.core.seq(seq__34325_34338);
if(temp__4126__auto___34352){
var seq__34325_34353__$1 = temp__4126__auto___34352;
if(cljs.core.chunked_seq_QMARK_(seq__34325_34353__$1)){
var c__4415__auto___34354 = cljs.core.chunk_first(seq__34325_34353__$1);
var G__34355 = cljs.core.chunk_rest(seq__34325_34353__$1);
var G__34356 = c__4415__auto___34354;
var G__34357 = cljs.core.count(c__4415__auto___34354);
var G__34358 = (0);
seq__34325_34338 = G__34355;
chunk__34326_34339 = G__34356;
count__34327_34340 = G__34357;
i__34328_34341 = G__34358;
continue;
} else {
var vec__34333_34359 = cljs.core.first(seq__34325_34353__$1);
var k_34360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34333_34359,(0),null);
var v_34361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34333_34359,(1),null);
var m34323_34362 = (function (){var G__34334 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34334) : cljs.core.deref.call(null,G__34334));
})();
var G__34335_34363 = m_atom__7603__auto__;
var G__34336_34364 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34323_34362,((typeof k_34360 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34360):k_34360),keywordize_map(v_34361));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34335_34363,G__34336_34364) : cljs.core.reset_BANG_.call(null,G__34335_34363,G__34336_34364));

var G__34365 = cljs.core.next(seq__34325_34353__$1);
var G__34366 = null;
var G__34367 = (0);
var G__34368 = (0);
seq__34325_34338 = G__34365;
chunk__34326_34339 = G__34366;
count__34327_34340 = G__34367;
i__34328_34341 = G__34368;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34337 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34337) : cljs.core.deref.call(null,G__34337));
})());
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__7672__auto__ = temp__4124__auto__;
return cljs.core.val(pair__7672__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__34369 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__34370 = cljs.core.next(ks);
m = G__34369;
ks = G__34370;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3628__auto__ = m;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4384__auto__ = (function iter__34381(s__34382){
return (new cljs.core.LazySeq(null,(function (){
var s__34382__$1 = s__34382;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34382__$1);
if(temp__4126__auto__){
var s__34382__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34382__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__34382__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__34384 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__34383 = (0);
while(true){
if((i__34383 < size__4383__auto__)){
var vec__34389 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__34383);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34389,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__34384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34391 = (i__34383 + (1));
i__34383 = G__34391;
continue;
} else {
var G__34392 = (i__34383 + (1));
i__34383 = G__34392;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34384),iter__34381(cljs.core.chunk_rest(s__34382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34384),null);
}
} else {
var vec__34390 = cljs.core.first(s__34382__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34390,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__34381(cljs.core.rest(s__34382__$2)));
} else {
var G__34393 = cljs.core.rest(s__34382__$2);
s__34382__$1 = G__34393;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4384__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__34394){
var m = cljs.core.first(arglist__34394);
var kvs = cljs.core.rest(arglist__34394);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__34395){
var m = cljs.core.first(arglist__34395);
arglist__34395 = cljs.core.next(arglist__34395);
var key_seq = cljs.core.first(arglist__34395);
arglist__34395 = cljs.core.next(arglist__34395);
var f = cljs.core.first(arglist__34395);
var args = cljs.core.rest(arglist__34395);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__34398 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__34398) : key_fn.call(null,G__34398));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__34399 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__34399) : map_fn.call(null,G__34399));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next(s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq(xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__34403 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34403) : f.call(null,G__34403));
})())){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = (function (){var G__34419 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34419) : cljs.core.atom.call(null,G__34419));
})();
var iter__4384__auto__ = ((function (s){
return (function iter__34420(s__34421){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__34421__$1 = s__34421;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34421__$1);
if(temp__4126__auto__){
var s__34421__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34421__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__34421__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__34423 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__34422 = (0);
while(true){
if((i__34422 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__34422);
var id = (function (){var G__34430 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34430) : f.call(null,G__34430));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__34431 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34431) : cljs.core.deref.call(null,G__34431));
})(),id))){
cljs.core.chunk_append(b__34423,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__34434 = (i__34422 + (1));
i__34422 = G__34434;
continue;
} else {
var G__34435 = (i__34422 + (1));
i__34422 = G__34435;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34423),iter__34420(cljs.core.chunk_rest(s__34421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34423),null);
}
} else {
var x = cljs.core.first(s__34421__$2);
var id = (function (){var G__34432 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34432) : f.call(null,G__34432));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__34433 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34433) : cljs.core.deref.call(null,G__34433));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__34420(cljs.core.rest(s__34421__$2)));
} else {
var G__34436 = cljs.core.rest(s__34421__$2);
s__34421__$1 = G__34436;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4384__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__34439){
var colls = cljs.core.seq(arglist__34439);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__34444__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__34445 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__34446 = cljs.core.first(xs);
var G__34447 = cljs.core.next(xs);
coll = G__34445;
x = G__34446;
xs = G__34447;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__34444 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34444__delegate.call(this,coll,x,xs);};
G__34444.cljs$lang$maxFixedArity = 2;
G__34444.cljs$lang$applyTo = (function (arglist__34448){
var coll = cljs.core.first(arglist__34448);
arglist__34448 = cljs.core.next(arglist__34448);
var x = cljs.core.first(arglist__34448);
var xs = cljs.core.rest(arglist__34448);
return G__34444__delegate(coll,x,xs);
});
G__34444.cljs$core$IFn$_invoke$arity$variadic = G__34444__delegate;
return G__34444;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = (function (){var G__34454 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34454) : cljs.core.deref.call(null,G__34454));
})();
var new_val = (function (){var G__34455 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34455) : f.call(null,G__34455));
})();
if(cljs.core.compare_and_set_BANG_(a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__34456__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__34449_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__34449_SHARP_,args);
}));
};
var G__34456 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34456__delegate.call(this,a,f,args);};
G__34456.cljs$lang$maxFixedArity = 2;
G__34456.cljs$lang$applyTo = (function (arglist__34457){
var a = cljs.core.first(arglist__34457);
arglist__34457 = cljs.core.next(arglist__34457);
var f = cljs.core.first(arglist__34457);
var args = cljs.core.rest(arglist__34457);
return G__34456__delegate(a,f,args);
});
G__34456.cljs$core$IFn$_invoke$arity$variadic = G__34456__delegate;
return G__34456;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__34458__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__34458 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34458__delegate.call(this,f,arg,args);};
G__34458.cljs$lang$maxFixedArity = 2;
G__34458.cljs$lang$applyTo = (function (arglist__34459){
var f = cljs.core.first(arglist__34459);
arglist__34459 = cljs.core.next(arglist__34459);
var arg = cljs.core.first(arglist__34459);
var args = cljs.core.rest(arglist__34459);
return G__34458__delegate(f,arg,args);
});
G__34458.cljs$core$IFn$_invoke$arity$variadic = G__34458__delegate;
return G__34458;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
