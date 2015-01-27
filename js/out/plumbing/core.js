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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35300) : f.call(null,G__35300));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35302 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35301,G__35302) : f.call(null,G__35301,G__35302));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35304 = x1;
var G__35305 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35303,G__35304,G__35305) : f.call(null,G__35303,G__35304,G__35305));
})());
});
var update__6 = (function() { 
var G__35306__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__35306 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__35307__i = 0, G__35307__a = new Array(arguments.length -  5);
while (G__35307__i < G__35307__a.length) {G__35307__a[G__35307__i] = arguments[G__35307__i + 5]; ++G__35307__i;}
  xs = new cljs.core.IndexedSeq(G__35307__a,0);
} 
return G__35306__delegate.call(this,m,k,f,x1,x2,xs);};
G__35306.cljs$lang$maxFixedArity = 5;
G__35306.cljs$lang$applyTo = (function (arglist__35308){
var m = cljs.core.first(arglist__35308);
arglist__35308 = cljs.core.next(arglist__35308);
var k = cljs.core.first(arglist__35308);
arglist__35308 = cljs.core.next(arglist__35308);
var f = cljs.core.first(arglist__35308);
arglist__35308 = cljs.core.next(arglist__35308);
var x1 = cljs.core.first(arglist__35308);
arglist__35308 = cljs.core.next(arglist__35308);
var x2 = cljs.core.first(arglist__35308);
var xs = cljs.core.rest(arglist__35308);
return G__35306__delegate(m,k,f,x1,x2,xs);
});
G__35306.cljs$core$IFn$_invoke$arity$variadic = G__35306__delegate;
return G__35306;
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
var G__35309 = null;
if (arguments.length > 5) {
var G__35310__i = 0, G__35310__a = new Array(arguments.length -  5);
while (G__35310__i < G__35310__a.length) {G__35310__a[G__35310__i] = arguments[G__35310__i + 5]; ++G__35310__i;}
G__35309 = new cljs.core.IndexedSeq(G__35310__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__35309);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35330 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35330) : f.call(null,G__35330));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35331 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35331) : f.call(null,G__35331));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14723__auto__ = (function (){var G__35333 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35333) : cljs.core.atom.call(null,G__35333));
})();
var seq__35334_35349 = cljs.core.seq(m);
var chunk__35335_35350 = null;
var count__35336_35351 = (0);
var i__35337_35352 = (0);
while(true){
if((i__35337_35352 < count__35336_35351)){
var vec__35338_35353 = chunk__35335_35350.cljs$core$IIndexed$_nth$arity$2(null,i__35337_35352);
var k_35354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35338_35353,(0),null);
var v_35355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35338_35353,(1),null);
var m35332_35356 = (function (){var G__35339 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35339) : cljs.core.deref.call(null,G__35339));
})();
var G__35340_35357 = m_atom__14723__auto__;
var G__35341_35358 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35332_35356,k_35354,(function (){var G__35342 = v_35355;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35342) : f.call(null,G__35342));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35340_35357,G__35341_35358) : cljs.core.reset_BANG_.call(null,G__35340_35357,G__35341_35358));

var G__35359 = seq__35334_35349;
var G__35360 = chunk__35335_35350;
var G__35361 = count__35336_35351;
var G__35362 = (i__35337_35352 + (1));
seq__35334_35349 = G__35359;
chunk__35335_35350 = G__35360;
count__35336_35351 = G__35361;
i__35337_35352 = G__35362;
continue;
} else {
var temp__4126__auto___35363 = cljs.core.seq(seq__35334_35349);
if(temp__4126__auto___35363){
var seq__35334_35364__$1 = temp__4126__auto___35363;
if(cljs.core.chunked_seq_QMARK_(seq__35334_35364__$1)){
var c__5038__auto___35365 = cljs.core.chunk_first(seq__35334_35364__$1);
var G__35366 = cljs.core.chunk_rest(seq__35334_35364__$1);
var G__35367 = c__5038__auto___35365;
var G__35368 = cljs.core.count(c__5038__auto___35365);
var G__35369 = (0);
seq__35334_35349 = G__35366;
chunk__35335_35350 = G__35367;
count__35336_35351 = G__35368;
i__35337_35352 = G__35369;
continue;
} else {
var vec__35343_35370 = cljs.core.first(seq__35334_35364__$1);
var k_35371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343_35370,(0),null);
var v_35372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35343_35370,(1),null);
var m35332_35373 = (function (){var G__35344 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35344) : cljs.core.deref.call(null,G__35344));
})();
var G__35345_35374 = m_atom__14723__auto__;
var G__35346_35375 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35332_35373,k_35371,(function (){var G__35347 = v_35372;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35347) : f.call(null,G__35347));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35345_35374,G__35346_35375) : cljs.core.reset_BANG_.call(null,G__35345_35374,G__35346_35375));

var G__35376 = cljs.core.next(seq__35334_35364__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__35334_35349 = G__35376;
chunk__35335_35350 = G__35377;
count__35336_35351 = G__35378;
i__35337_35352 = G__35379;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35348 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35348) : cljs.core.deref.call(null,G__35348));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__35398 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35398) : f.call(null,G__35398));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14723__auto__ = (function (){var G__35400 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35400) : cljs.core.atom.call(null,G__35400));
})();
var seq__35401_35416 = cljs.core.seq(m);
var chunk__35402_35417 = null;
var count__35403_35418 = (0);
var i__35404_35419 = (0);
while(true){
if((i__35404_35419 < count__35403_35418)){
var vec__35405_35420 = chunk__35402_35417.cljs$core$IIndexed$_nth$arity$2(null,i__35404_35419);
var k_35421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35405_35420,(0),null);
var v_35422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35405_35420,(1),null);
var m35399_35423 = (function (){var G__35406 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35406) : cljs.core.deref.call(null,G__35406));
})();
var G__35407_35424 = m_atom__14723__auto__;
var G__35408_35425 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35399_35423,(function (){var G__35409 = k_35421;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35409) : f.call(null,G__35409));
})(),v_35422);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35407_35424,G__35408_35425) : cljs.core.reset_BANG_.call(null,G__35407_35424,G__35408_35425));

var G__35426 = seq__35401_35416;
var G__35427 = chunk__35402_35417;
var G__35428 = count__35403_35418;
var G__35429 = (i__35404_35419 + (1));
seq__35401_35416 = G__35426;
chunk__35402_35417 = G__35427;
count__35403_35418 = G__35428;
i__35404_35419 = G__35429;
continue;
} else {
var temp__4126__auto___35430 = cljs.core.seq(seq__35401_35416);
if(temp__4126__auto___35430){
var seq__35401_35431__$1 = temp__4126__auto___35430;
if(cljs.core.chunked_seq_QMARK_(seq__35401_35431__$1)){
var c__5038__auto___35432 = cljs.core.chunk_first(seq__35401_35431__$1);
var G__35433 = cljs.core.chunk_rest(seq__35401_35431__$1);
var G__35434 = c__5038__auto___35432;
var G__35435 = cljs.core.count(c__5038__auto___35432);
var G__35436 = (0);
seq__35401_35416 = G__35433;
chunk__35402_35417 = G__35434;
count__35403_35418 = G__35435;
i__35404_35419 = G__35436;
continue;
} else {
var vec__35410_35437 = cljs.core.first(seq__35401_35431__$1);
var k_35438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410_35437,(0),null);
var v_35439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410_35437,(1),null);
var m35399_35440 = (function (){var G__35411 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35411) : cljs.core.deref.call(null,G__35411));
})();
var G__35412_35441 = m_atom__14723__auto__;
var G__35413_35442 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35399_35440,(function (){var G__35414 = k_35438;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35414) : f.call(null,G__35414));
})(),v_35439);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35412_35441,G__35413_35442) : cljs.core.reset_BANG_.call(null,G__35412_35441,G__35413_35442));

var G__35443 = cljs.core.next(seq__35401_35431__$1);
var G__35444 = null;
var G__35445 = (0);
var G__35446 = (0);
seq__35401_35416 = G__35443;
chunk__35402_35417 = G__35444;
count__35403_35418 = G__35445;
i__35404_35419 = G__35446;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35415 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35415) : cljs.core.deref.call(null,G__35415));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14723__auto__ = (function (){var G__35463 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35463) : cljs.core.atom.call(null,G__35463));
})();
var seq__35464_35477 = cljs.core.seq(ks);
var chunk__35465_35478 = null;
var count__35466_35479 = (0);
var i__35467_35480 = (0);
while(true){
if((i__35467_35480 < count__35466_35479)){
var k_35481 = chunk__35465_35478.cljs$core$IIndexed$_nth$arity$2(null,i__35467_35480);
var m35462_35482 = (function (){var G__35468 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35468) : cljs.core.deref.call(null,G__35468));
})();
var G__35469_35483 = m_atom__14723__auto__;
var G__35470_35484 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35462_35482,k_35481,(function (){var G__35471 = k_35481;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35471) : f.call(null,G__35471));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35469_35483,G__35470_35484) : cljs.core.reset_BANG_.call(null,G__35469_35483,G__35470_35484));

var G__35485 = seq__35464_35477;
var G__35486 = chunk__35465_35478;
var G__35487 = count__35466_35479;
var G__35488 = (i__35467_35480 + (1));
seq__35464_35477 = G__35485;
chunk__35465_35478 = G__35486;
count__35466_35479 = G__35487;
i__35467_35480 = G__35488;
continue;
} else {
var temp__4126__auto___35489 = cljs.core.seq(seq__35464_35477);
if(temp__4126__auto___35489){
var seq__35464_35490__$1 = temp__4126__auto___35489;
if(cljs.core.chunked_seq_QMARK_(seq__35464_35490__$1)){
var c__5038__auto___35491 = cljs.core.chunk_first(seq__35464_35490__$1);
var G__35492 = cljs.core.chunk_rest(seq__35464_35490__$1);
var G__35493 = c__5038__auto___35491;
var G__35494 = cljs.core.count(c__5038__auto___35491);
var G__35495 = (0);
seq__35464_35477 = G__35492;
chunk__35465_35478 = G__35493;
count__35466_35479 = G__35494;
i__35467_35480 = G__35495;
continue;
} else {
var k_35496 = cljs.core.first(seq__35464_35490__$1);
var m35462_35497 = (function (){var G__35472 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35472) : cljs.core.deref.call(null,G__35472));
})();
var G__35473_35498 = m_atom__14723__auto__;
var G__35474_35499 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35462_35497,k_35496,(function (){var G__35475 = k_35496;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35475) : f.call(null,G__35475));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35473_35498,G__35474_35499) : cljs.core.reset_BANG_.call(null,G__35473_35498,G__35474_35499));

var G__35500 = cljs.core.next(seq__35464_35490__$1);
var G__35501 = null;
var G__35502 = (0);
var G__35503 = (0);
seq__35464_35477 = G__35500;
chunk__35465_35478 = G__35501;
count__35466_35479 = G__35502;
i__35467_35480 = G__35503;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35476 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35476) : cljs.core.deref.call(null,G__35476));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14723__auto__ = (function (){var G__35520 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35520) : cljs.core.atom.call(null,G__35520));
})();
var seq__35521_35534 = cljs.core.seq(vs);
var chunk__35522_35535 = null;
var count__35523_35536 = (0);
var i__35524_35537 = (0);
while(true){
if((i__35524_35537 < count__35523_35536)){
var v_35538 = chunk__35522_35535.cljs$core$IIndexed$_nth$arity$2(null,i__35524_35537);
var m35519_35539 = (function (){var G__35525 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35525) : cljs.core.deref.call(null,G__35525));
})();
var G__35526_35540 = m_atom__14723__auto__;
var G__35527_35541 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35519_35539,(function (){var G__35528 = v_35538;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35528) : f.call(null,G__35528));
})(),v_35538);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35526_35540,G__35527_35541) : cljs.core.reset_BANG_.call(null,G__35526_35540,G__35527_35541));

var G__35542 = seq__35521_35534;
var G__35543 = chunk__35522_35535;
var G__35544 = count__35523_35536;
var G__35545 = (i__35524_35537 + (1));
seq__35521_35534 = G__35542;
chunk__35522_35535 = G__35543;
count__35523_35536 = G__35544;
i__35524_35537 = G__35545;
continue;
} else {
var temp__4126__auto___35546 = cljs.core.seq(seq__35521_35534);
if(temp__4126__auto___35546){
var seq__35521_35547__$1 = temp__4126__auto___35546;
if(cljs.core.chunked_seq_QMARK_(seq__35521_35547__$1)){
var c__5038__auto___35548 = cljs.core.chunk_first(seq__35521_35547__$1);
var G__35549 = cljs.core.chunk_rest(seq__35521_35547__$1);
var G__35550 = c__5038__auto___35548;
var G__35551 = cljs.core.count(c__5038__auto___35548);
var G__35552 = (0);
seq__35521_35534 = G__35549;
chunk__35522_35535 = G__35550;
count__35523_35536 = G__35551;
i__35524_35537 = G__35552;
continue;
} else {
var v_35553 = cljs.core.first(seq__35521_35547__$1);
var m35519_35554 = (function (){var G__35529 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35529) : cljs.core.deref.call(null,G__35529));
})();
var G__35530_35555 = m_atom__14723__auto__;
var G__35531_35556 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35519_35554,(function (){var G__35532 = v_35553;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35532) : f.call(null,G__35532));
})(),v_35553);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35530_35555,G__35531_35556) : cljs.core.reset_BANG_.call(null,G__35530_35555,G__35531_35556));

var G__35557 = cljs.core.next(seq__35521_35547__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__35521_35534 = G__35557;
chunk__35522_35535 = G__35558;
count__35523_35536 = G__35559;
i__35524_35537 = G__35560;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35533 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35533) : cljs.core.deref.call(null,G__35533));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__35561){
var vec__35567 = p__35561;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(0),null);
var ks = cljs.core.nthnext(vec__35567,(1));
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
var m_atom__14723__auto__ = (function (){var G__35586 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35586) : cljs.core.atom.call(null,G__35586));
})();
var seq__35587_35600 = cljs.core.seq(x);
var chunk__35588_35601 = null;
var count__35589_35602 = (0);
var i__35590_35603 = (0);
while(true){
if((i__35590_35603 < count__35589_35602)){
var vec__35591_35604 = chunk__35588_35601.cljs$core$IIndexed$_nth$arity$2(null,i__35590_35603);
var k_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35591_35604,(0),null);
var v_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35591_35604,(1),null);
var m35585_35607 = (function (){var G__35592 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35592) : cljs.core.deref.call(null,G__35592));
})();
var G__35593_35608 = m_atom__14723__auto__;
var G__35594_35609 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35585_35607,((typeof k_35605 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35605):k_35605),keywordize_map(v_35606));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35593_35608,G__35594_35609) : cljs.core.reset_BANG_.call(null,G__35593_35608,G__35594_35609));

var G__35610 = seq__35587_35600;
var G__35611 = chunk__35588_35601;
var G__35612 = count__35589_35602;
var G__35613 = (i__35590_35603 + (1));
seq__35587_35600 = G__35610;
chunk__35588_35601 = G__35611;
count__35589_35602 = G__35612;
i__35590_35603 = G__35613;
continue;
} else {
var temp__4126__auto___35614 = cljs.core.seq(seq__35587_35600);
if(temp__4126__auto___35614){
var seq__35587_35615__$1 = temp__4126__auto___35614;
if(cljs.core.chunked_seq_QMARK_(seq__35587_35615__$1)){
var c__5038__auto___35616 = cljs.core.chunk_first(seq__35587_35615__$1);
var G__35617 = cljs.core.chunk_rest(seq__35587_35615__$1);
var G__35618 = c__5038__auto___35616;
var G__35619 = cljs.core.count(c__5038__auto___35616);
var G__35620 = (0);
seq__35587_35600 = G__35617;
chunk__35588_35601 = G__35618;
count__35589_35602 = G__35619;
i__35590_35603 = G__35620;
continue;
} else {
var vec__35595_35621 = cljs.core.first(seq__35587_35615__$1);
var k_35622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595_35621,(0),null);
var v_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595_35621,(1),null);
var m35585_35624 = (function (){var G__35596 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35596) : cljs.core.deref.call(null,G__35596));
})();
var G__35597_35625 = m_atom__14723__auto__;
var G__35598_35626 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35585_35624,((typeof k_35622 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35622):k_35622),keywordize_map(v_35623));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35597_35625,G__35598_35626) : cljs.core.reset_BANG_.call(null,G__35597_35625,G__35598_35626));

var G__35627 = cljs.core.next(seq__35587_35615__$1);
var G__35628 = null;
var G__35629 = (0);
var G__35630 = (0);
seq__35587_35600 = G__35627;
chunk__35588_35601 = G__35628;
count__35589_35602 = G__35629;
i__35590_35603 = G__35630;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35599 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35599) : cljs.core.deref.call(null,G__35599));
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
var G__35631 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__35632 = cljs.core.next(ks);
m = G__35631;
ks = G__35632;
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
})(),(function (){var iter__5007__auto__ = (function iter__35643(s__35644){
return (new cljs.core.LazySeq(null,(function (){
var s__35644__$1 = s__35644;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35644__$1);
if(temp__4126__auto__){
var s__35644__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35644__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__35644__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__35646 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__35645 = (0);
while(true){
if((i__35645 < size__5006__auto__)){
var vec__35651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__35645);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35651,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__35646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35653 = (i__35645 + (1));
i__35645 = G__35653;
continue;
} else {
var G__35654 = (i__35645 + (1));
i__35645 = G__35654;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35646),iter__35643(cljs.core.chunk_rest(s__35644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35646),null);
}
} else {
var vec__35652 = cljs.core.first(s__35644__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35652,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35643(cljs.core.rest(s__35644__$2)));
} else {
var G__35655 = cljs.core.rest(s__35644__$2);
s__35644__$1 = G__35655;
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
var G__35656__i = 0, G__35656__a = new Array(arguments.length -  1);
while (G__35656__i < G__35656__a.length) {G__35656__a[G__35656__i] = arguments[G__35656__i + 1]; ++G__35656__i;}
  kvs = new cljs.core.IndexedSeq(G__35656__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__35657){
var m = cljs.core.first(arglist__35657);
var kvs = cljs.core.rest(arglist__35657);
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
var G__35658__i = 0, G__35658__a = new Array(arguments.length -  3);
while (G__35658__i < G__35658__a.length) {G__35658__a[G__35658__i] = arguments[G__35658__i + 3]; ++G__35658__i;}
  args = new cljs.core.IndexedSeq(G__35658__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__35659){
var m = cljs.core.first(arglist__35659);
arglist__35659 = cljs.core.next(arglist__35659);
var key_seq = cljs.core.first(arglist__35659);
arglist__35659 = cljs.core.next(arglist__35659);
var f = cljs.core.first(arglist__35659);
var args = cljs.core.rest(arglist__35659);
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
var k = (function (){var G__35662 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__35662) : key_fn.call(null,G__35662));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__35663 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__35663) : map_fn.call(null,G__35663));
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
if(cljs.core.truth_((function (){var G__35667 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35667) : f.call(null,G__35667));
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
var s = (function (){var G__35683 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35683) : cljs.core.atom.call(null,G__35683));
})();
var iter__5007__auto__ = ((function (s){
return (function iter__35684(s__35685){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35685__$1 = s__35685;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35685__$1);
if(temp__4126__auto__){
var s__35685__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35685__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__35685__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__35687 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__35686 = (0);
while(true){
if((i__35686 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__35686);
var id = (function (){var G__35694 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35694) : f.call(null,G__35694));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35695 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35695) : cljs.core.deref.call(null,G__35695));
})(),id))){
cljs.core.chunk_append(b__35687,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__35698 = (i__35686 + (1));
i__35686 = G__35698;
continue;
} else {
var G__35699 = (i__35686 + (1));
i__35686 = G__35699;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35687),iter__35684(cljs.core.chunk_rest(s__35685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35687),null);
}
} else {
var x = cljs.core.first(s__35685__$2);
var id = (function (){var G__35696 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35696) : f.call(null,G__35696));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35697 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35697) : cljs.core.deref.call(null,G__35697));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__35684(cljs.core.rest(s__35685__$2)));
} else {
var G__35700 = cljs.core.rest(s__35685__$2);
s__35685__$1 = G__35700;
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
var G__35703__i = 0, G__35703__a = new Array(arguments.length -  0);
while (G__35703__i < G__35703__a.length) {G__35703__a[G__35703__i] = arguments[G__35703__i + 0]; ++G__35703__i;}
  colls = new cljs.core.IndexedSeq(G__35703__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__35704){
var colls = cljs.core.seq(arglist__35704);
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
var G__35709__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35710 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__35711 = cljs.core.first(xs);
var G__35712 = cljs.core.next(xs);
coll = G__35710;
x = G__35711;
xs = G__35712;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__35709 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__35713__i = 0, G__35713__a = new Array(arguments.length -  2);
while (G__35713__i < G__35713__a.length) {G__35713__a[G__35713__i] = arguments[G__35713__i + 2]; ++G__35713__i;}
  xs = new cljs.core.IndexedSeq(G__35713__a,0);
} 
return G__35709__delegate.call(this,coll,x,xs);};
G__35709.cljs$lang$maxFixedArity = 2;
G__35709.cljs$lang$applyTo = (function (arglist__35714){
var coll = cljs.core.first(arglist__35714);
arglist__35714 = cljs.core.next(arglist__35714);
var x = cljs.core.first(arglist__35714);
var xs = cljs.core.rest(arglist__35714);
return G__35709__delegate(coll,x,xs);
});
G__35709.cljs$core$IFn$_invoke$arity$variadic = G__35709__delegate;
return G__35709;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__35715 = null;
if (arguments.length > 2) {
var G__35716__i = 0, G__35716__a = new Array(arguments.length -  2);
while (G__35716__i < G__35716__a.length) {G__35716__a[G__35716__i] = arguments[G__35716__i + 2]; ++G__35716__i;}
G__35715 = new cljs.core.IndexedSeq(G__35716__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__35715);
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
var old_val = (function (){var G__35722 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35722) : cljs.core.deref.call(null,G__35722));
})();
var new_val = (function (){var G__35723 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35723) : f.call(null,G__35723));
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
var G__35724__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__35717_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__35717_SHARP_,args);
}));
};
var G__35724 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__35725__i = 0, G__35725__a = new Array(arguments.length -  2);
while (G__35725__i < G__35725__a.length) {G__35725__a[G__35725__i] = arguments[G__35725__i + 2]; ++G__35725__i;}
  args = new cljs.core.IndexedSeq(G__35725__a,0);
} 
return G__35724__delegate.call(this,a,f,args);};
G__35724.cljs$lang$maxFixedArity = 2;
G__35724.cljs$lang$applyTo = (function (arglist__35726){
var a = cljs.core.first(arglist__35726);
arglist__35726 = cljs.core.next(arglist__35726);
var f = cljs.core.first(arglist__35726);
var args = cljs.core.rest(arglist__35726);
return G__35724__delegate(a,f,args);
});
G__35724.cljs$core$IFn$_invoke$arity$variadic = G__35724__delegate;
return G__35724;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__35727 = null;
if (arguments.length > 2) {
var G__35728__i = 0, G__35728__a = new Array(arguments.length -  2);
while (G__35728__i < G__35728__a.length) {G__35728__a[G__35728__i] = arguments[G__35728__i + 2]; ++G__35728__i;}
G__35727 = new cljs.core.IndexedSeq(G__35728__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__35727);
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
var G__35729__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__35729 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__35730__i = 0, G__35730__a = new Array(arguments.length -  2);
while (G__35730__i < G__35730__a.length) {G__35730__a[G__35730__i] = arguments[G__35730__i + 2]; ++G__35730__i;}
  args = new cljs.core.IndexedSeq(G__35730__a,0);
} 
return G__35729__delegate.call(this,f,arg,args);};
G__35729.cljs$lang$maxFixedArity = 2;
G__35729.cljs$lang$applyTo = (function (arglist__35731){
var f = cljs.core.first(arglist__35731);
arglist__35731 = cljs.core.next(arglist__35731);
var arg = cljs.core.first(arglist__35731);
var args = cljs.core.rest(arglist__35731);
return G__35729__delegate(f,arg,args);
});
G__35729.cljs$core$IFn$_invoke$arity$variadic = G__35729__delegate;
return G__35729;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__35732 = null;
if (arguments.length > 2) {
var G__35733__i = 0, G__35733__a = new Array(arguments.length -  2);
while (G__35733__i < G__35733__a.length) {G__35733__a[G__35733__i] = arguments[G__35733__i + 2]; ++G__35733__i;}
G__35732 = new cljs.core.IndexedSeq(G__35733__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__35732);
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
