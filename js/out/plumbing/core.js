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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34029) : f.call(null,G__34029));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34031 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34030,G__34031) : f.call(null,G__34030,G__34031));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34033 = x1;
var G__34034 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34032,G__34033,G__34034) : f.call(null,G__34032,G__34033,G__34034));
})());
});
var update__6 = (function() { 
var G__34035__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__34035 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__34035__delegate.call(this,m,k,f,x1,x2,xs);};
G__34035.cljs$lang$maxFixedArity = 5;
G__34035.cljs$lang$applyTo = (function (arglist__34036){
var m = cljs.core.first(arglist__34036);
arglist__34036 = cljs.core.next(arglist__34036);
var k = cljs.core.first(arglist__34036);
arglist__34036 = cljs.core.next(arglist__34036);
var f = cljs.core.first(arglist__34036);
arglist__34036 = cljs.core.next(arglist__34036);
var x1 = cljs.core.first(arglist__34036);
arglist__34036 = cljs.core.next(arglist__34036);
var x2 = cljs.core.first(arglist__34036);
var xs = cljs.core.rest(arglist__34036);
return G__34035__delegate(m,k,f,x1,x2,xs);
});
G__34035.cljs$core$IFn$_invoke$arity$variadic = G__34035__delegate;
return G__34035;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34056 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34056) : f.call(null,G__34056));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34057 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34057) : f.call(null,G__34057));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__7603__auto__ = (function (){var G__34059 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34059) : cljs.core.atom.call(null,G__34059));
})();
var seq__34060_34075 = cljs.core.seq(m);
var chunk__34061_34076 = null;
var count__34062_34077 = (0);
var i__34063_34078 = (0);
while(true){
if((i__34063_34078 < count__34062_34077)){
var vec__34064_34079 = chunk__34061_34076.cljs$core$IIndexed$_nth$arity$2(null,i__34063_34078);
var k_34080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34064_34079,(0),null);
var v_34081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34064_34079,(1),null);
var m34058_34082 = (function (){var G__34065 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34065) : cljs.core.deref.call(null,G__34065));
})();
var G__34066_34083 = m_atom__7603__auto__;
var G__34067_34084 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34058_34082,k_34080,(function (){var G__34068 = v_34081;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34068) : f.call(null,G__34068));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34066_34083,G__34067_34084) : cljs.core.reset_BANG_.call(null,G__34066_34083,G__34067_34084));

var G__34085 = seq__34060_34075;
var G__34086 = chunk__34061_34076;
var G__34087 = count__34062_34077;
var G__34088 = (i__34063_34078 + (1));
seq__34060_34075 = G__34085;
chunk__34061_34076 = G__34086;
count__34062_34077 = G__34087;
i__34063_34078 = G__34088;
continue;
} else {
var temp__4126__auto___34089 = cljs.core.seq(seq__34060_34075);
if(temp__4126__auto___34089){
var seq__34060_34090__$1 = temp__4126__auto___34089;
if(cljs.core.chunked_seq_QMARK_(seq__34060_34090__$1)){
var c__4415__auto___34091 = cljs.core.chunk_first(seq__34060_34090__$1);
var G__34092 = cljs.core.chunk_rest(seq__34060_34090__$1);
var G__34093 = c__4415__auto___34091;
var G__34094 = cljs.core.count(c__4415__auto___34091);
var G__34095 = (0);
seq__34060_34075 = G__34092;
chunk__34061_34076 = G__34093;
count__34062_34077 = G__34094;
i__34063_34078 = G__34095;
continue;
} else {
var vec__34069_34096 = cljs.core.first(seq__34060_34090__$1);
var k_34097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34069_34096,(0),null);
var v_34098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34069_34096,(1),null);
var m34058_34099 = (function (){var G__34070 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34070) : cljs.core.deref.call(null,G__34070));
})();
var G__34071_34100 = m_atom__7603__auto__;
var G__34072_34101 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34058_34099,k_34097,(function (){var G__34073 = v_34098;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34073) : f.call(null,G__34073));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34071_34100,G__34072_34101) : cljs.core.reset_BANG_.call(null,G__34071_34100,G__34072_34101));

var G__34102 = cljs.core.next(seq__34060_34090__$1);
var G__34103 = null;
var G__34104 = (0);
var G__34105 = (0);
seq__34060_34075 = G__34102;
chunk__34061_34076 = G__34103;
count__34062_34077 = G__34104;
i__34063_34078 = G__34105;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34074 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34074) : cljs.core.deref.call(null,G__34074));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__34124 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34124) : f.call(null,G__34124));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__7603__auto__ = (function (){var G__34126 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34126) : cljs.core.atom.call(null,G__34126));
})();
var seq__34127_34142 = cljs.core.seq(m);
var chunk__34128_34143 = null;
var count__34129_34144 = (0);
var i__34130_34145 = (0);
while(true){
if((i__34130_34145 < count__34129_34144)){
var vec__34131_34146 = chunk__34128_34143.cljs$core$IIndexed$_nth$arity$2(null,i__34130_34145);
var k_34147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131_34146,(0),null);
var v_34148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131_34146,(1),null);
var m34125_34149 = (function (){var G__34132 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34132) : cljs.core.deref.call(null,G__34132));
})();
var G__34133_34150 = m_atom__7603__auto__;
var G__34134_34151 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34125_34149,(function (){var G__34135 = k_34147;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34135) : f.call(null,G__34135));
})(),v_34148);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34133_34150,G__34134_34151) : cljs.core.reset_BANG_.call(null,G__34133_34150,G__34134_34151));

var G__34152 = seq__34127_34142;
var G__34153 = chunk__34128_34143;
var G__34154 = count__34129_34144;
var G__34155 = (i__34130_34145 + (1));
seq__34127_34142 = G__34152;
chunk__34128_34143 = G__34153;
count__34129_34144 = G__34154;
i__34130_34145 = G__34155;
continue;
} else {
var temp__4126__auto___34156 = cljs.core.seq(seq__34127_34142);
if(temp__4126__auto___34156){
var seq__34127_34157__$1 = temp__4126__auto___34156;
if(cljs.core.chunked_seq_QMARK_(seq__34127_34157__$1)){
var c__4415__auto___34158 = cljs.core.chunk_first(seq__34127_34157__$1);
var G__34159 = cljs.core.chunk_rest(seq__34127_34157__$1);
var G__34160 = c__4415__auto___34158;
var G__34161 = cljs.core.count(c__4415__auto___34158);
var G__34162 = (0);
seq__34127_34142 = G__34159;
chunk__34128_34143 = G__34160;
count__34129_34144 = G__34161;
i__34130_34145 = G__34162;
continue;
} else {
var vec__34136_34163 = cljs.core.first(seq__34127_34157__$1);
var k_34164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136_34163,(0),null);
var v_34165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136_34163,(1),null);
var m34125_34166 = (function (){var G__34137 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34137) : cljs.core.deref.call(null,G__34137));
})();
var G__34138_34167 = m_atom__7603__auto__;
var G__34139_34168 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34125_34166,(function (){var G__34140 = k_34164;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34140) : f.call(null,G__34140));
})(),v_34165);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34138_34167,G__34139_34168) : cljs.core.reset_BANG_.call(null,G__34138_34167,G__34139_34168));

var G__34169 = cljs.core.next(seq__34127_34157__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__34127_34142 = G__34169;
chunk__34128_34143 = G__34170;
count__34129_34144 = G__34171;
i__34130_34145 = G__34172;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34141 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34141) : cljs.core.deref.call(null,G__34141));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__7603__auto__ = (function (){var G__34189 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34189) : cljs.core.atom.call(null,G__34189));
})();
var seq__34190_34203 = cljs.core.seq(ks);
var chunk__34191_34204 = null;
var count__34192_34205 = (0);
var i__34193_34206 = (0);
while(true){
if((i__34193_34206 < count__34192_34205)){
var k_34207 = chunk__34191_34204.cljs$core$IIndexed$_nth$arity$2(null,i__34193_34206);
var m34188_34208 = (function (){var G__34194 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34194) : cljs.core.deref.call(null,G__34194));
})();
var G__34195_34209 = m_atom__7603__auto__;
var G__34196_34210 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34188_34208,k_34207,(function (){var G__34197 = k_34207;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34197) : f.call(null,G__34197));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34195_34209,G__34196_34210) : cljs.core.reset_BANG_.call(null,G__34195_34209,G__34196_34210));

var G__34211 = seq__34190_34203;
var G__34212 = chunk__34191_34204;
var G__34213 = count__34192_34205;
var G__34214 = (i__34193_34206 + (1));
seq__34190_34203 = G__34211;
chunk__34191_34204 = G__34212;
count__34192_34205 = G__34213;
i__34193_34206 = G__34214;
continue;
} else {
var temp__4126__auto___34215 = cljs.core.seq(seq__34190_34203);
if(temp__4126__auto___34215){
var seq__34190_34216__$1 = temp__4126__auto___34215;
if(cljs.core.chunked_seq_QMARK_(seq__34190_34216__$1)){
var c__4415__auto___34217 = cljs.core.chunk_first(seq__34190_34216__$1);
var G__34218 = cljs.core.chunk_rest(seq__34190_34216__$1);
var G__34219 = c__4415__auto___34217;
var G__34220 = cljs.core.count(c__4415__auto___34217);
var G__34221 = (0);
seq__34190_34203 = G__34218;
chunk__34191_34204 = G__34219;
count__34192_34205 = G__34220;
i__34193_34206 = G__34221;
continue;
} else {
var k_34222 = cljs.core.first(seq__34190_34216__$1);
var m34188_34223 = (function (){var G__34198 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34198) : cljs.core.deref.call(null,G__34198));
})();
var G__34199_34224 = m_atom__7603__auto__;
var G__34200_34225 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34188_34223,k_34222,(function (){var G__34201 = k_34222;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34201) : f.call(null,G__34201));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34199_34224,G__34200_34225) : cljs.core.reset_BANG_.call(null,G__34199_34224,G__34200_34225));

var G__34226 = cljs.core.next(seq__34190_34216__$1);
var G__34227 = null;
var G__34228 = (0);
var G__34229 = (0);
seq__34190_34203 = G__34226;
chunk__34191_34204 = G__34227;
count__34192_34205 = G__34228;
i__34193_34206 = G__34229;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34202 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34202) : cljs.core.deref.call(null,G__34202));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__7603__auto__ = (function (){var G__34246 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34246) : cljs.core.atom.call(null,G__34246));
})();
var seq__34247_34260 = cljs.core.seq(vs);
var chunk__34248_34261 = null;
var count__34249_34262 = (0);
var i__34250_34263 = (0);
while(true){
if((i__34250_34263 < count__34249_34262)){
var v_34264 = chunk__34248_34261.cljs$core$IIndexed$_nth$arity$2(null,i__34250_34263);
var m34245_34265 = (function (){var G__34251 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34251) : cljs.core.deref.call(null,G__34251));
})();
var G__34252_34266 = m_atom__7603__auto__;
var G__34253_34267 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34245_34265,(function (){var G__34254 = v_34264;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34254) : f.call(null,G__34254));
})(),v_34264);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34252_34266,G__34253_34267) : cljs.core.reset_BANG_.call(null,G__34252_34266,G__34253_34267));

var G__34268 = seq__34247_34260;
var G__34269 = chunk__34248_34261;
var G__34270 = count__34249_34262;
var G__34271 = (i__34250_34263 + (1));
seq__34247_34260 = G__34268;
chunk__34248_34261 = G__34269;
count__34249_34262 = G__34270;
i__34250_34263 = G__34271;
continue;
} else {
var temp__4126__auto___34272 = cljs.core.seq(seq__34247_34260);
if(temp__4126__auto___34272){
var seq__34247_34273__$1 = temp__4126__auto___34272;
if(cljs.core.chunked_seq_QMARK_(seq__34247_34273__$1)){
var c__4415__auto___34274 = cljs.core.chunk_first(seq__34247_34273__$1);
var G__34275 = cljs.core.chunk_rest(seq__34247_34273__$1);
var G__34276 = c__4415__auto___34274;
var G__34277 = cljs.core.count(c__4415__auto___34274);
var G__34278 = (0);
seq__34247_34260 = G__34275;
chunk__34248_34261 = G__34276;
count__34249_34262 = G__34277;
i__34250_34263 = G__34278;
continue;
} else {
var v_34279 = cljs.core.first(seq__34247_34273__$1);
var m34245_34280 = (function (){var G__34255 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34255) : cljs.core.deref.call(null,G__34255));
})();
var G__34256_34281 = m_atom__7603__auto__;
var G__34257_34282 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34245_34280,(function (){var G__34258 = v_34279;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34258) : f.call(null,G__34258));
})(),v_34279);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34256_34281,G__34257_34282) : cljs.core.reset_BANG_.call(null,G__34256_34281,G__34257_34282));

var G__34283 = cljs.core.next(seq__34247_34273__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__34247_34260 = G__34283;
chunk__34248_34261 = G__34284;
count__34249_34262 = G__34285;
i__34250_34263 = G__34286;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34259 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34259) : cljs.core.deref.call(null,G__34259));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__34287){
var vec__34293 = p__34287;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34293,(0),null);
var ks = cljs.core.nthnext(vec__34293,(1));
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
var m_atom__7603__auto__ = (function (){var G__34312 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34312) : cljs.core.atom.call(null,G__34312));
})();
var seq__34313_34326 = cljs.core.seq(x);
var chunk__34314_34327 = null;
var count__34315_34328 = (0);
var i__34316_34329 = (0);
while(true){
if((i__34316_34329 < count__34315_34328)){
var vec__34317_34330 = chunk__34314_34327.cljs$core$IIndexed$_nth$arity$2(null,i__34316_34329);
var k_34331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34317_34330,(0),null);
var v_34332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34317_34330,(1),null);
var m34311_34333 = (function (){var G__34318 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34318) : cljs.core.deref.call(null,G__34318));
})();
var G__34319_34334 = m_atom__7603__auto__;
var G__34320_34335 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34311_34333,((typeof k_34331 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34331):k_34331),keywordize_map(v_34332));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34319_34334,G__34320_34335) : cljs.core.reset_BANG_.call(null,G__34319_34334,G__34320_34335));

var G__34336 = seq__34313_34326;
var G__34337 = chunk__34314_34327;
var G__34338 = count__34315_34328;
var G__34339 = (i__34316_34329 + (1));
seq__34313_34326 = G__34336;
chunk__34314_34327 = G__34337;
count__34315_34328 = G__34338;
i__34316_34329 = G__34339;
continue;
} else {
var temp__4126__auto___34340 = cljs.core.seq(seq__34313_34326);
if(temp__4126__auto___34340){
var seq__34313_34341__$1 = temp__4126__auto___34340;
if(cljs.core.chunked_seq_QMARK_(seq__34313_34341__$1)){
var c__4415__auto___34342 = cljs.core.chunk_first(seq__34313_34341__$1);
var G__34343 = cljs.core.chunk_rest(seq__34313_34341__$1);
var G__34344 = c__4415__auto___34342;
var G__34345 = cljs.core.count(c__4415__auto___34342);
var G__34346 = (0);
seq__34313_34326 = G__34343;
chunk__34314_34327 = G__34344;
count__34315_34328 = G__34345;
i__34316_34329 = G__34346;
continue;
} else {
var vec__34321_34347 = cljs.core.first(seq__34313_34341__$1);
var k_34348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34321_34347,(0),null);
var v_34349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34321_34347,(1),null);
var m34311_34350 = (function (){var G__34322 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34322) : cljs.core.deref.call(null,G__34322));
})();
var G__34323_34351 = m_atom__7603__auto__;
var G__34324_34352 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34311_34350,((typeof k_34348 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34348):k_34348),keywordize_map(v_34349));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34323_34351,G__34324_34352) : cljs.core.reset_BANG_.call(null,G__34323_34351,G__34324_34352));

var G__34353 = cljs.core.next(seq__34313_34341__$1);
var G__34354 = null;
var G__34355 = (0);
var G__34356 = (0);
seq__34313_34326 = G__34353;
chunk__34314_34327 = G__34354;
count__34315_34328 = G__34355;
i__34316_34329 = G__34356;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34325 = m_atom__7603__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34325) : cljs.core.deref.call(null,G__34325));
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
var G__34357 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__34358 = cljs.core.next(ks);
m = G__34357;
ks = G__34358;
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
})(),(function (){var iter__4384__auto__ = (function iter__34369(s__34370){
return (new cljs.core.LazySeq(null,(function (){
var s__34370__$1 = s__34370;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34370__$1);
if(temp__4126__auto__){
var s__34370__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34370__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__34370__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__34372 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__34371 = (0);
while(true){
if((i__34371 < size__4383__auto__)){
var vec__34377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__34371);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34377,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__34372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34379 = (i__34371 + (1));
i__34371 = G__34379;
continue;
} else {
var G__34380 = (i__34371 + (1));
i__34371 = G__34380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34372),iter__34369(cljs.core.chunk_rest(s__34370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34372),null);
}
} else {
var vec__34378 = cljs.core.first(s__34370__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34378,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__34369(cljs.core.rest(s__34370__$2)));
} else {
var G__34381 = cljs.core.rest(s__34370__$2);
s__34370__$1 = G__34381;
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
assoc_when.cljs$lang$applyTo = (function (arglist__34382){
var m = cljs.core.first(arglist__34382);
var kvs = cljs.core.rest(arglist__34382);
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
update_in_when.cljs$lang$applyTo = (function (arglist__34383){
var m = cljs.core.first(arglist__34383);
arglist__34383 = cljs.core.next(arglist__34383);
var key_seq = cljs.core.first(arglist__34383);
arglist__34383 = cljs.core.next(arglist__34383);
var f = cljs.core.first(arglist__34383);
var args = cljs.core.rest(arglist__34383);
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
var k = (function (){var G__34386 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__34386) : key_fn.call(null,G__34386));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__34387 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__34387) : map_fn.call(null,G__34387));
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
if(cljs.core.truth_((function (){var G__34391 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34391) : f.call(null,G__34391));
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
var s = (function (){var G__34407 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34407) : cljs.core.atom.call(null,G__34407));
})();
var iter__4384__auto__ = ((function (s){
return (function iter__34408(s__34409){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__34409__$1 = s__34409;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34409__$1);
if(temp__4126__auto__){
var s__34409__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34409__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__34409__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__34411 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__34410 = (0);
while(true){
if((i__34410 < size__4383__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__34410);
var id = (function (){var G__34418 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34418) : f.call(null,G__34418));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__34419 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34419) : cljs.core.deref.call(null,G__34419));
})(),id))){
cljs.core.chunk_append(b__34411,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__34422 = (i__34410 + (1));
i__34410 = G__34422;
continue;
} else {
var G__34423 = (i__34410 + (1));
i__34410 = G__34423;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34411),iter__34408(cljs.core.chunk_rest(s__34409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34411),null);
}
} else {
var x = cljs.core.first(s__34409__$2);
var id = (function (){var G__34420 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34420) : f.call(null,G__34420));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__34421 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34421) : cljs.core.deref.call(null,G__34421));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__34408(cljs.core.rest(s__34409__$2)));
} else {
var G__34424 = cljs.core.rest(s__34409__$2);
s__34409__$1 = G__34424;
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
interleave_all.cljs$lang$applyTo = (function (arglist__34427){
var colls = cljs.core.seq(arglist__34427);
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
var G__34432__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__34433 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__34434 = cljs.core.first(xs);
var G__34435 = cljs.core.next(xs);
coll = G__34433;
x = G__34434;
xs = G__34435;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__34432 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34432__delegate.call(this,coll,x,xs);};
G__34432.cljs$lang$maxFixedArity = 2;
G__34432.cljs$lang$applyTo = (function (arglist__34436){
var coll = cljs.core.first(arglist__34436);
arglist__34436 = cljs.core.next(arglist__34436);
var x = cljs.core.first(arglist__34436);
var xs = cljs.core.rest(arglist__34436);
return G__34432__delegate(coll,x,xs);
});
G__34432.cljs$core$IFn$_invoke$arity$variadic = G__34432__delegate;
return G__34432;
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
var old_val = (function (){var G__34442 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34442) : cljs.core.deref.call(null,G__34442));
})();
var new_val = (function (){var G__34443 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34443) : f.call(null,G__34443));
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
var G__34444__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__34437_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__34437_SHARP_,args);
}));
};
var G__34444 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34444__delegate.call(this,a,f,args);};
G__34444.cljs$lang$maxFixedArity = 2;
G__34444.cljs$lang$applyTo = (function (arglist__34445){
var a = cljs.core.first(arglist__34445);
arglist__34445 = cljs.core.next(arglist__34445);
var f = cljs.core.first(arglist__34445);
var args = cljs.core.rest(arglist__34445);
return G__34444__delegate(a,f,args);
});
G__34444.cljs$core$IFn$_invoke$arity$variadic = G__34444__delegate;
return G__34444;
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
var G__34446__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__34446 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34446__delegate.call(this,f,arg,args);};
G__34446.cljs$lang$maxFixedArity = 2;
G__34446.cljs$lang$applyTo = (function (arglist__34447){
var f = cljs.core.first(arglist__34447);
arglist__34447 = cljs.core.next(arglist__34447);
var arg = cljs.core.first(arglist__34447);
var args = cljs.core.rest(arglist__34447);
return G__34446__delegate(f,arg,args);
});
G__34446.cljs$core$IFn$_invoke$arity$variadic = G__34446__delegate;
return G__34446;
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
