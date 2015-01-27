// Compiled by ClojureScript 0.0-2727 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$97;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35240) : f.call(null,G__35240));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35242 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35241,G__35242) : f.call(null,G__35241,G__35242));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35244 = x1;
var G__35245 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35243,G__35244,G__35245) : f.call(null,G__35243,G__35244,G__35245));
})());
});
var update__6 = (function() { 
var G__35246__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__35246 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__35247__i = 0, G__35247__a = new Array(arguments.length -  5);
while (G__35247__i < G__35247__a.length) {G__35247__a[G__35247__i] = arguments[G__35247__i + 5]; ++G__35247__i;}
  xs = new cljs.core.IndexedSeq(G__35247__a,0);
} 
return G__35246__delegate.call(this,m,k,f,x1,x2,xs);};
G__35246.cljs$lang$maxFixedArity = 5;
G__35246.cljs$lang$applyTo = (function (arglist__35248){
var m = cljs.core.first(arglist__35248);
arglist__35248 = cljs.core.next(arglist__35248);
var k = cljs.core.first(arglist__35248);
arglist__35248 = cljs.core.next(arglist__35248);
var f = cljs.core.first(arglist__35248);
arglist__35248 = cljs.core.next(arglist__35248);
var x1 = cljs.core.first(arglist__35248);
arglist__35248 = cljs.core.next(arglist__35248);
var x2 = cljs.core.first(arglist__35248);
var xs = cljs.core.rest(arglist__35248);
return G__35246__delegate(m,k,f,x1,x2,xs);
});
G__35246.cljs$core$IFn$_invoke$arity$variadic = G__35246__delegate;
return G__35246;
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
var G__35249 = null;
if (arguments.length > 5) {
var G__35250__i = 0, G__35250__a = new Array(arguments.length -  5);
while (G__35250__i < G__35250__a.length) {G__35250__a[G__35250__i] = arguments[G__35250__i + 5]; ++G__35250__i;}
G__35249 = new cljs.core.IndexedSeq(G__35250__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__35249);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35270 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35270) : f.call(null,G__35270));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35271 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35271) : f.call(null,G__35271));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14723__auto__ = (function (){var G__35273 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35273) : cljs.core.atom.call(null,G__35273));
})();
var seq__35274_35289 = cljs.core.seq(m);
var chunk__35275_35290 = null;
var count__35276_35291 = (0);
var i__35277_35292 = (0);
while(true){
if((i__35277_35292 < count__35276_35291)){
var vec__35278_35293 = chunk__35275_35290.cljs$core$IIndexed$_nth$arity$2(null,i__35277_35292);
var k_35294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35278_35293,(0),null);
var v_35295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35278_35293,(1),null);
var m35272_35296 = (function (){var G__35279 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35279) : cljs.core.deref.call(null,G__35279));
})();
var G__35280_35297 = m_atom__14723__auto__;
var G__35281_35298 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35272_35296,k_35294,(function (){var G__35282 = v_35295;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35282) : f.call(null,G__35282));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35280_35297,G__35281_35298) : cljs.core.reset_BANG_.call(null,G__35280_35297,G__35281_35298));

var G__35299 = seq__35274_35289;
var G__35300 = chunk__35275_35290;
var G__35301 = count__35276_35291;
var G__35302 = (i__35277_35292 + (1));
seq__35274_35289 = G__35299;
chunk__35275_35290 = G__35300;
count__35276_35291 = G__35301;
i__35277_35292 = G__35302;
continue;
} else {
var temp__4126__auto___35303 = cljs.core.seq(seq__35274_35289);
if(temp__4126__auto___35303){
var seq__35274_35304__$1 = temp__4126__auto___35303;
if(cljs.core.chunked_seq_QMARK_(seq__35274_35304__$1)){
var c__5038__auto___35305 = cljs.core.chunk_first(seq__35274_35304__$1);
var G__35306 = cljs.core.chunk_rest(seq__35274_35304__$1);
var G__35307 = c__5038__auto___35305;
var G__35308 = cljs.core.count(c__5038__auto___35305);
var G__35309 = (0);
seq__35274_35289 = G__35306;
chunk__35275_35290 = G__35307;
count__35276_35291 = G__35308;
i__35277_35292 = G__35309;
continue;
} else {
var vec__35283_35310 = cljs.core.first(seq__35274_35304__$1);
var k_35311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283_35310,(0),null);
var v_35312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35283_35310,(1),null);
var m35272_35313 = (function (){var G__35284 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35284) : cljs.core.deref.call(null,G__35284));
})();
var G__35285_35314 = m_atom__14723__auto__;
var G__35286_35315 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35272_35313,k_35311,(function (){var G__35287 = v_35312;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35287) : f.call(null,G__35287));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35285_35314,G__35286_35315) : cljs.core.reset_BANG_.call(null,G__35285_35314,G__35286_35315));

var G__35316 = cljs.core.next(seq__35274_35304__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__35274_35289 = G__35316;
chunk__35275_35290 = G__35317;
count__35276_35291 = G__35318;
i__35277_35292 = G__35319;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35288 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35288) : cljs.core.deref.call(null,G__35288));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__35338 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35338) : f.call(null,G__35338));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14723__auto__ = (function (){var G__35340 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35340) : cljs.core.atom.call(null,G__35340));
})();
var seq__35341_35356 = cljs.core.seq(m);
var chunk__35342_35357 = null;
var count__35343_35358 = (0);
var i__35344_35359 = (0);
while(true){
if((i__35344_35359 < count__35343_35358)){
var vec__35345_35360 = chunk__35342_35357.cljs$core$IIndexed$_nth$arity$2(null,i__35344_35359);
var k_35361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345_35360,(0),null);
var v_35362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35345_35360,(1),null);
var m35339_35363 = (function (){var G__35346 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35346) : cljs.core.deref.call(null,G__35346));
})();
var G__35347_35364 = m_atom__14723__auto__;
var G__35348_35365 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35339_35363,(function (){var G__35349 = k_35361;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35349) : f.call(null,G__35349));
})(),v_35362);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35347_35364,G__35348_35365) : cljs.core.reset_BANG_.call(null,G__35347_35364,G__35348_35365));

var G__35366 = seq__35341_35356;
var G__35367 = chunk__35342_35357;
var G__35368 = count__35343_35358;
var G__35369 = (i__35344_35359 + (1));
seq__35341_35356 = G__35366;
chunk__35342_35357 = G__35367;
count__35343_35358 = G__35368;
i__35344_35359 = G__35369;
continue;
} else {
var temp__4126__auto___35370 = cljs.core.seq(seq__35341_35356);
if(temp__4126__auto___35370){
var seq__35341_35371__$1 = temp__4126__auto___35370;
if(cljs.core.chunked_seq_QMARK_(seq__35341_35371__$1)){
var c__5038__auto___35372 = cljs.core.chunk_first(seq__35341_35371__$1);
var G__35373 = cljs.core.chunk_rest(seq__35341_35371__$1);
var G__35374 = c__5038__auto___35372;
var G__35375 = cljs.core.count(c__5038__auto___35372);
var G__35376 = (0);
seq__35341_35356 = G__35373;
chunk__35342_35357 = G__35374;
count__35343_35358 = G__35375;
i__35344_35359 = G__35376;
continue;
} else {
var vec__35350_35377 = cljs.core.first(seq__35341_35371__$1);
var k_35378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350_35377,(0),null);
var v_35379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35350_35377,(1),null);
var m35339_35380 = (function (){var G__35351 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35351) : cljs.core.deref.call(null,G__35351));
})();
var G__35352_35381 = m_atom__14723__auto__;
var G__35353_35382 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35339_35380,(function (){var G__35354 = k_35378;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35354) : f.call(null,G__35354));
})(),v_35379);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35352_35381,G__35353_35382) : cljs.core.reset_BANG_.call(null,G__35352_35381,G__35353_35382));

var G__35383 = cljs.core.next(seq__35341_35371__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__35341_35356 = G__35383;
chunk__35342_35357 = G__35384;
count__35343_35358 = G__35385;
i__35344_35359 = G__35386;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35355 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35355) : cljs.core.deref.call(null,G__35355));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14723__auto__ = (function (){var G__35403 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35403) : cljs.core.atom.call(null,G__35403));
})();
var seq__35404_35417 = cljs.core.seq(ks);
var chunk__35405_35418 = null;
var count__35406_35419 = (0);
var i__35407_35420 = (0);
while(true){
if((i__35407_35420 < count__35406_35419)){
var k_35421 = chunk__35405_35418.cljs$core$IIndexed$_nth$arity$2(null,i__35407_35420);
var m35402_35422 = (function (){var G__35408 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35408) : cljs.core.deref.call(null,G__35408));
})();
var G__35409_35423 = m_atom__14723__auto__;
var G__35410_35424 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35402_35422,k_35421,(function (){var G__35411 = k_35421;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35411) : f.call(null,G__35411));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35409_35423,G__35410_35424) : cljs.core.reset_BANG_.call(null,G__35409_35423,G__35410_35424));

var G__35425 = seq__35404_35417;
var G__35426 = chunk__35405_35418;
var G__35427 = count__35406_35419;
var G__35428 = (i__35407_35420 + (1));
seq__35404_35417 = G__35425;
chunk__35405_35418 = G__35426;
count__35406_35419 = G__35427;
i__35407_35420 = G__35428;
continue;
} else {
var temp__4126__auto___35429 = cljs.core.seq(seq__35404_35417);
if(temp__4126__auto___35429){
var seq__35404_35430__$1 = temp__4126__auto___35429;
if(cljs.core.chunked_seq_QMARK_(seq__35404_35430__$1)){
var c__5038__auto___35431 = cljs.core.chunk_first(seq__35404_35430__$1);
var G__35432 = cljs.core.chunk_rest(seq__35404_35430__$1);
var G__35433 = c__5038__auto___35431;
var G__35434 = cljs.core.count(c__5038__auto___35431);
var G__35435 = (0);
seq__35404_35417 = G__35432;
chunk__35405_35418 = G__35433;
count__35406_35419 = G__35434;
i__35407_35420 = G__35435;
continue;
} else {
var k_35436 = cljs.core.first(seq__35404_35430__$1);
var m35402_35437 = (function (){var G__35412 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35412) : cljs.core.deref.call(null,G__35412));
})();
var G__35413_35438 = m_atom__14723__auto__;
var G__35414_35439 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35402_35437,k_35436,(function (){var G__35415 = k_35436;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35415) : f.call(null,G__35415));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35413_35438,G__35414_35439) : cljs.core.reset_BANG_.call(null,G__35413_35438,G__35414_35439));

var G__35440 = cljs.core.next(seq__35404_35430__$1);
var G__35441 = null;
var G__35442 = (0);
var G__35443 = (0);
seq__35404_35417 = G__35440;
chunk__35405_35418 = G__35441;
count__35406_35419 = G__35442;
i__35407_35420 = G__35443;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35416 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35416) : cljs.core.deref.call(null,G__35416));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14723__auto__ = (function (){var G__35460 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35460) : cljs.core.atom.call(null,G__35460));
})();
var seq__35461_35474 = cljs.core.seq(vs);
var chunk__35462_35475 = null;
var count__35463_35476 = (0);
var i__35464_35477 = (0);
while(true){
if((i__35464_35477 < count__35463_35476)){
var v_35478 = chunk__35462_35475.cljs$core$IIndexed$_nth$arity$2(null,i__35464_35477);
var m35459_35479 = (function (){var G__35465 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35465) : cljs.core.deref.call(null,G__35465));
})();
var G__35466_35480 = m_atom__14723__auto__;
var G__35467_35481 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35459_35479,(function (){var G__35468 = v_35478;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35468) : f.call(null,G__35468));
})(),v_35478);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35466_35480,G__35467_35481) : cljs.core.reset_BANG_.call(null,G__35466_35480,G__35467_35481));

var G__35482 = seq__35461_35474;
var G__35483 = chunk__35462_35475;
var G__35484 = count__35463_35476;
var G__35485 = (i__35464_35477 + (1));
seq__35461_35474 = G__35482;
chunk__35462_35475 = G__35483;
count__35463_35476 = G__35484;
i__35464_35477 = G__35485;
continue;
} else {
var temp__4126__auto___35486 = cljs.core.seq(seq__35461_35474);
if(temp__4126__auto___35486){
var seq__35461_35487__$1 = temp__4126__auto___35486;
if(cljs.core.chunked_seq_QMARK_(seq__35461_35487__$1)){
var c__5038__auto___35488 = cljs.core.chunk_first(seq__35461_35487__$1);
var G__35489 = cljs.core.chunk_rest(seq__35461_35487__$1);
var G__35490 = c__5038__auto___35488;
var G__35491 = cljs.core.count(c__5038__auto___35488);
var G__35492 = (0);
seq__35461_35474 = G__35489;
chunk__35462_35475 = G__35490;
count__35463_35476 = G__35491;
i__35464_35477 = G__35492;
continue;
} else {
var v_35493 = cljs.core.first(seq__35461_35487__$1);
var m35459_35494 = (function (){var G__35469 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35469) : cljs.core.deref.call(null,G__35469));
})();
var G__35470_35495 = m_atom__14723__auto__;
var G__35471_35496 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35459_35494,(function (){var G__35472 = v_35493;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35472) : f.call(null,G__35472));
})(),v_35493);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35470_35495,G__35471_35496) : cljs.core.reset_BANG_.call(null,G__35470_35495,G__35471_35496));

var G__35497 = cljs.core.next(seq__35461_35487__$1);
var G__35498 = null;
var G__35499 = (0);
var G__35500 = (0);
seq__35461_35474 = G__35497;
chunk__35462_35475 = G__35498;
count__35463_35476 = G__35499;
i__35464_35477 = G__35500;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35473 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35473) : cljs.core.deref.call(null,G__35473));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__35501){
var vec__35507 = p__35501;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507,(0),null);
var ks = cljs.core.nthnext(vec__35507,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__4239__auto__ = ks;
if(and__4239__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__4239__auto__;
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
var m_atom__14723__auto__ = (function (){var G__35526 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35526) : cljs.core.atom.call(null,G__35526));
})();
var seq__35527_35540 = cljs.core.seq(x);
var chunk__35528_35541 = null;
var count__35529_35542 = (0);
var i__35530_35543 = (0);
while(true){
if((i__35530_35543 < count__35529_35542)){
var vec__35531_35544 = chunk__35528_35541.cljs$core$IIndexed$_nth$arity$2(null,i__35530_35543);
var k_35545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531_35544,(0),null);
var v_35546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531_35544,(1),null);
var m35525_35547 = (function (){var G__35532 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35532) : cljs.core.deref.call(null,G__35532));
})();
var G__35533_35548 = m_atom__14723__auto__;
var G__35534_35549 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35525_35547,((typeof k_35545 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35545):k_35545),keywordize_map(v_35546));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35533_35548,G__35534_35549) : cljs.core.reset_BANG_.call(null,G__35533_35548,G__35534_35549));

var G__35550 = seq__35527_35540;
var G__35551 = chunk__35528_35541;
var G__35552 = count__35529_35542;
var G__35553 = (i__35530_35543 + (1));
seq__35527_35540 = G__35550;
chunk__35528_35541 = G__35551;
count__35529_35542 = G__35552;
i__35530_35543 = G__35553;
continue;
} else {
var temp__4126__auto___35554 = cljs.core.seq(seq__35527_35540);
if(temp__4126__auto___35554){
var seq__35527_35555__$1 = temp__4126__auto___35554;
if(cljs.core.chunked_seq_QMARK_(seq__35527_35555__$1)){
var c__5038__auto___35556 = cljs.core.chunk_first(seq__35527_35555__$1);
var G__35557 = cljs.core.chunk_rest(seq__35527_35555__$1);
var G__35558 = c__5038__auto___35556;
var G__35559 = cljs.core.count(c__5038__auto___35556);
var G__35560 = (0);
seq__35527_35540 = G__35557;
chunk__35528_35541 = G__35558;
count__35529_35542 = G__35559;
i__35530_35543 = G__35560;
continue;
} else {
var vec__35535_35561 = cljs.core.first(seq__35527_35555__$1);
var k_35562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535_35561,(0),null);
var v_35563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535_35561,(1),null);
var m35525_35564 = (function (){var G__35536 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35536) : cljs.core.deref.call(null,G__35536));
})();
var G__35537_35565 = m_atom__14723__auto__;
var G__35538_35566 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35525_35564,((typeof k_35562 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35562):k_35562),keywordize_map(v_35563));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35537_35565,G__35538_35566) : cljs.core.reset_BANG_.call(null,G__35537_35565,G__35538_35566));

var G__35567 = cljs.core.next(seq__35527_35555__$1);
var G__35568 = null;
var G__35569 = (0);
var G__35570 = (0);
seq__35527_35540 = G__35567;
chunk__35528_35541 = G__35568;
count__35529_35542 = G__35569;
i__35530_35543 = G__35570;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35539 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35539) : cljs.core.deref.call(null,G__35539));
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
var pair__14792__auto__ = temp__4124__auto__;
return cljs.core.val(pair__14792__auto__);
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
var G__35571 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__35572 = cljs.core.next(ks);
m = G__35571;
ks = G__35572;
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4251__auto__ = m;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5007__auto__ = (function iter__35583(s__35584){
return (new cljs.core.LazySeq(null,(function (){
var s__35584__$1 = s__35584;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35584__$1);
if(temp__4126__auto__){
var s__35584__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35584__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__35584__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__35586 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__35585 = (0);
while(true){
if((i__35585 < size__5006__auto__)){
var vec__35591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__35585);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35591,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__35586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35593 = (i__35585 + (1));
i__35585 = G__35593;
continue;
} else {
var G__35594 = (i__35585 + (1));
i__35585 = G__35594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35586),iter__35583(cljs.core.chunk_rest(s__35584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35586),null);
}
} else {
var vec__35592 = cljs.core.first(s__35584__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35583(cljs.core.rest(s__35584__$2)));
} else {
var G__35595 = cljs.core.rest(s__35584__$2);
s__35584__$1 = G__35595;
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
return iter__5007__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__35596__i = 0, G__35596__a = new Array(arguments.length -  1);
while (G__35596__i < G__35596__a.length) {G__35596__a[G__35596__i] = arguments[G__35596__i + 1]; ++G__35596__i;}
  kvs = new cljs.core.IndexedSeq(G__35596__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__35597){
var m = cljs.core.first(arglist__35597);
var kvs = cljs.core.rest(arglist__35597);
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
var G__35598__i = 0, G__35598__a = new Array(arguments.length -  3);
while (G__35598__i < G__35598__a.length) {G__35598__a[G__35598__i] = arguments[G__35598__i + 3]; ++G__35598__i;}
  args = new cljs.core.IndexedSeq(G__35598__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__35599){
var m = cljs.core.first(arglist__35599);
arglist__35599 = cljs.core.next(arglist__35599);
var key_seq = cljs.core.first(arglist__35599);
arglist__35599 = cljs.core.next(arglist__35599);
var f = cljs.core.first(arglist__35599);
var args = cljs.core.rest(arglist__35599);
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
var k = (function (){var G__35602 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__35602) : key_fn.call(null,G__35602));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__35603 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__35603) : map_fn.call(null,G__35603));
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
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__35607 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35607) : f.call(null,G__35607));
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
var s = (function (){var G__35623 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35623) : cljs.core.atom.call(null,G__35623));
})();
var iter__5007__auto__ = ((function (s){
return (function iter__35624(s__35625){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35625__$1 = s__35625;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35625__$1);
if(temp__4126__auto__){
var s__35625__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35625__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__35625__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__35627 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__35626 = (0);
while(true){
if((i__35626 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__35626);
var id = (function (){var G__35634 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35634) : f.call(null,G__35634));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35635 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35635) : cljs.core.deref.call(null,G__35635));
})(),id))){
cljs.core.chunk_append(b__35627,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__35638 = (i__35626 + (1));
i__35626 = G__35638;
continue;
} else {
var G__35639 = (i__35626 + (1));
i__35626 = G__35639;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35627),iter__35624(cljs.core.chunk_rest(s__35625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35627),null);
}
} else {
var x = cljs.core.first(s__35625__$2);
var id = (function (){var G__35636 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35636) : f.call(null,G__35636));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35637 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35637) : cljs.core.deref.call(null,G__35637));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__35624(cljs.core.rest(s__35625__$2)));
} else {
var G__35640 = cljs.core.rest(s__35625__$2);
s__35625__$1 = G__35640;
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
return iter__5007__auto__(xs);
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
var G__35643__i = 0, G__35643__a = new Array(arguments.length -  0);
while (G__35643__i < G__35643__a.length) {G__35643__a[G__35643__i] = arguments[G__35643__i + 0]; ++G__35643__i;}
  colls = new cljs.core.IndexedSeq(G__35643__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__35644){
var colls = cljs.core.seq(arglist__35644);
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
var G__35649__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35650 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__35651 = cljs.core.first(xs);
var G__35652 = cljs.core.next(xs);
coll = G__35650;
x = G__35651;
xs = G__35652;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__35649 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__35653__i = 0, G__35653__a = new Array(arguments.length -  2);
while (G__35653__i < G__35653__a.length) {G__35653__a[G__35653__i] = arguments[G__35653__i + 2]; ++G__35653__i;}
  xs = new cljs.core.IndexedSeq(G__35653__a,0);
} 
return G__35649__delegate.call(this,coll,x,xs);};
G__35649.cljs$lang$maxFixedArity = 2;
G__35649.cljs$lang$applyTo = (function (arglist__35654){
var coll = cljs.core.first(arglist__35654);
arglist__35654 = cljs.core.next(arglist__35654);
var x = cljs.core.first(arglist__35654);
var xs = cljs.core.rest(arglist__35654);
return G__35649__delegate(coll,x,xs);
});
G__35649.cljs$core$IFn$_invoke$arity$variadic = G__35649__delegate;
return G__35649;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__35655 = null;
if (arguments.length > 2) {
var G__35656__i = 0, G__35656__a = new Array(arguments.length -  2);
while (G__35656__i < G__35656__a.length) {G__35656__a[G__35656__i] = arguments[G__35656__i + 2]; ++G__35656__i;}
G__35655 = new cljs.core.IndexedSeq(G__35656__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__35655);
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
var old_val = (function (){var G__35662 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35662) : cljs.core.deref.call(null,G__35662));
})();
var new_val = (function (){var G__35663 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35663) : f.call(null,G__35663));
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
var G__35664__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__35657_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__35657_SHARP_,args);
}));
};
var G__35664 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__35665__i = 0, G__35665__a = new Array(arguments.length -  2);
while (G__35665__i < G__35665__a.length) {G__35665__a[G__35665__i] = arguments[G__35665__i + 2]; ++G__35665__i;}
  args = new cljs.core.IndexedSeq(G__35665__a,0);
} 
return G__35664__delegate.call(this,a,f,args);};
G__35664.cljs$lang$maxFixedArity = 2;
G__35664.cljs$lang$applyTo = (function (arglist__35666){
var a = cljs.core.first(arglist__35666);
arglist__35666 = cljs.core.next(arglist__35666);
var f = cljs.core.first(arglist__35666);
var args = cljs.core.rest(arglist__35666);
return G__35664__delegate(a,f,args);
});
G__35664.cljs$core$IFn$_invoke$arity$variadic = G__35664__delegate;
return G__35664;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__35667 = null;
if (arguments.length > 2) {
var G__35668__i = 0, G__35668__a = new Array(arguments.length -  2);
while (G__35668__i < G__35668__a.length) {G__35668__a[G__35668__i] = arguments[G__35668__i + 2]; ++G__35668__i;}
G__35667 = new cljs.core.IndexedSeq(G__35668__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__35667);
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
var G__35669__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__35669 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__35670__i = 0, G__35670__a = new Array(arguments.length -  2);
while (G__35670__i < G__35670__a.length) {G__35670__a[G__35670__i] = arguments[G__35670__i + 2]; ++G__35670__i;}
  args = new cljs.core.IndexedSeq(G__35670__a,0);
} 
return G__35669__delegate.call(this,f,arg,args);};
G__35669.cljs$lang$maxFixedArity = 2;
G__35669.cljs$lang$applyTo = (function (arglist__35671){
var f = cljs.core.first(arglist__35671);
arglist__35671 = cljs.core.next(arglist__35671);
var arg = cljs.core.first(arglist__35671);
var args = cljs.core.rest(arglist__35671);
return G__35669__delegate(f,arg,args);
});
G__35669.cljs$core$IFn$_invoke$arity$variadic = G__35669__delegate;
return G__35669;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__35672 = null;
if (arguments.length > 2) {
var G__35673__i = 0, G__35673__a = new Array(arguments.length -  2);
while (G__35673__i < G__35673__a.length) {G__35673__a[G__35673__i] = arguments[G__35673__i + 2]; ++G__35673__i;}
G__35672 = new cljs.core.IndexedSeq(G__35673__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__35672);
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
