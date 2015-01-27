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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35292) : f.call(null,G__35292));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35294 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35293,G__35294) : f.call(null,G__35293,G__35294));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__35295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__35296 = x1;
var G__35297 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35295,G__35296,G__35297) : f.call(null,G__35295,G__35296,G__35297));
})());
});
var update__6 = (function() { 
var G__35298__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__35298 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__35299__i = 0, G__35299__a = new Array(arguments.length -  5);
while (G__35299__i < G__35299__a.length) {G__35299__a[G__35299__i] = arguments[G__35299__i + 5]; ++G__35299__i;}
  xs = new cljs.core.IndexedSeq(G__35299__a,0);
} 
return G__35298__delegate.call(this,m,k,f,x1,x2,xs);};
G__35298.cljs$lang$maxFixedArity = 5;
G__35298.cljs$lang$applyTo = (function (arglist__35300){
var m = cljs.core.first(arglist__35300);
arglist__35300 = cljs.core.next(arglist__35300);
var k = cljs.core.first(arglist__35300);
arglist__35300 = cljs.core.next(arglist__35300);
var f = cljs.core.first(arglist__35300);
arglist__35300 = cljs.core.next(arglist__35300);
var x1 = cljs.core.first(arglist__35300);
arglist__35300 = cljs.core.next(arglist__35300);
var x2 = cljs.core.first(arglist__35300);
var xs = cljs.core.rest(arglist__35300);
return G__35298__delegate(m,k,f,x1,x2,xs);
});
G__35298.cljs$core$IFn$_invoke$arity$variadic = G__35298__delegate;
return G__35298;
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
var G__35301 = null;
if (arguments.length > 5) {
var G__35302__i = 0, G__35302__a = new Array(arguments.length -  5);
while (G__35302__i < G__35302__a.length) {G__35302__a[G__35302__i] = arguments[G__35302__i + 5]; ++G__35302__i;}
G__35301 = new cljs.core.IndexedSeq(G__35302__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__35301);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35322 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35322) : f.call(null,G__35322));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__35323 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35323) : f.call(null,G__35323));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14723__auto__ = (function (){var G__35325 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35325) : cljs.core.atom.call(null,G__35325));
})();
var seq__35326_35341 = cljs.core.seq(m);
var chunk__35327_35342 = null;
var count__35328_35343 = (0);
var i__35329_35344 = (0);
while(true){
if((i__35329_35344 < count__35328_35343)){
var vec__35330_35345 = chunk__35327_35342.cljs$core$IIndexed$_nth$arity$2(null,i__35329_35344);
var k_35346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35330_35345,(0),null);
var v_35347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35330_35345,(1),null);
var m35324_35348 = (function (){var G__35331 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35331) : cljs.core.deref.call(null,G__35331));
})();
var G__35332_35349 = m_atom__14723__auto__;
var G__35333_35350 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35324_35348,k_35346,(function (){var G__35334 = v_35347;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35334) : f.call(null,G__35334));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35332_35349,G__35333_35350) : cljs.core.reset_BANG_.call(null,G__35332_35349,G__35333_35350));

var G__35351 = seq__35326_35341;
var G__35352 = chunk__35327_35342;
var G__35353 = count__35328_35343;
var G__35354 = (i__35329_35344 + (1));
seq__35326_35341 = G__35351;
chunk__35327_35342 = G__35352;
count__35328_35343 = G__35353;
i__35329_35344 = G__35354;
continue;
} else {
var temp__4126__auto___35355 = cljs.core.seq(seq__35326_35341);
if(temp__4126__auto___35355){
var seq__35326_35356__$1 = temp__4126__auto___35355;
if(cljs.core.chunked_seq_QMARK_(seq__35326_35356__$1)){
var c__5038__auto___35357 = cljs.core.chunk_first(seq__35326_35356__$1);
var G__35358 = cljs.core.chunk_rest(seq__35326_35356__$1);
var G__35359 = c__5038__auto___35357;
var G__35360 = cljs.core.count(c__5038__auto___35357);
var G__35361 = (0);
seq__35326_35341 = G__35358;
chunk__35327_35342 = G__35359;
count__35328_35343 = G__35360;
i__35329_35344 = G__35361;
continue;
} else {
var vec__35335_35362 = cljs.core.first(seq__35326_35356__$1);
var k_35363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35335_35362,(0),null);
var v_35364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35335_35362,(1),null);
var m35324_35365 = (function (){var G__35336 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35336) : cljs.core.deref.call(null,G__35336));
})();
var G__35337_35366 = m_atom__14723__auto__;
var G__35338_35367 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35324_35365,k_35363,(function (){var G__35339 = v_35364;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35339) : f.call(null,G__35339));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35337_35366,G__35338_35367) : cljs.core.reset_BANG_.call(null,G__35337_35366,G__35338_35367));

var G__35368 = cljs.core.next(seq__35326_35356__$1);
var G__35369 = null;
var G__35370 = (0);
var G__35371 = (0);
seq__35326_35341 = G__35368;
chunk__35327_35342 = G__35369;
count__35328_35343 = G__35370;
i__35329_35344 = G__35371;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35340 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35340) : cljs.core.deref.call(null,G__35340));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__35390 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35390) : f.call(null,G__35390));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14723__auto__ = (function (){var G__35392 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35392) : cljs.core.atom.call(null,G__35392));
})();
var seq__35393_35408 = cljs.core.seq(m);
var chunk__35394_35409 = null;
var count__35395_35410 = (0);
var i__35396_35411 = (0);
while(true){
if((i__35396_35411 < count__35395_35410)){
var vec__35397_35412 = chunk__35394_35409.cljs$core$IIndexed$_nth$arity$2(null,i__35396_35411);
var k_35413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35397_35412,(0),null);
var v_35414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35397_35412,(1),null);
var m35391_35415 = (function (){var G__35398 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35398) : cljs.core.deref.call(null,G__35398));
})();
var G__35399_35416 = m_atom__14723__auto__;
var G__35400_35417 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35391_35415,(function (){var G__35401 = k_35413;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35401) : f.call(null,G__35401));
})(),v_35414);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35399_35416,G__35400_35417) : cljs.core.reset_BANG_.call(null,G__35399_35416,G__35400_35417));

var G__35418 = seq__35393_35408;
var G__35419 = chunk__35394_35409;
var G__35420 = count__35395_35410;
var G__35421 = (i__35396_35411 + (1));
seq__35393_35408 = G__35418;
chunk__35394_35409 = G__35419;
count__35395_35410 = G__35420;
i__35396_35411 = G__35421;
continue;
} else {
var temp__4126__auto___35422 = cljs.core.seq(seq__35393_35408);
if(temp__4126__auto___35422){
var seq__35393_35423__$1 = temp__4126__auto___35422;
if(cljs.core.chunked_seq_QMARK_(seq__35393_35423__$1)){
var c__5038__auto___35424 = cljs.core.chunk_first(seq__35393_35423__$1);
var G__35425 = cljs.core.chunk_rest(seq__35393_35423__$1);
var G__35426 = c__5038__auto___35424;
var G__35427 = cljs.core.count(c__5038__auto___35424);
var G__35428 = (0);
seq__35393_35408 = G__35425;
chunk__35394_35409 = G__35426;
count__35395_35410 = G__35427;
i__35396_35411 = G__35428;
continue;
} else {
var vec__35402_35429 = cljs.core.first(seq__35393_35423__$1);
var k_35430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402_35429,(0),null);
var v_35431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35402_35429,(1),null);
var m35391_35432 = (function (){var G__35403 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35403) : cljs.core.deref.call(null,G__35403));
})();
var G__35404_35433 = m_atom__14723__auto__;
var G__35405_35434 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35391_35432,(function (){var G__35406 = k_35430;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35406) : f.call(null,G__35406));
})(),v_35431);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35404_35433,G__35405_35434) : cljs.core.reset_BANG_.call(null,G__35404_35433,G__35405_35434));

var G__35435 = cljs.core.next(seq__35393_35423__$1);
var G__35436 = null;
var G__35437 = (0);
var G__35438 = (0);
seq__35393_35408 = G__35435;
chunk__35394_35409 = G__35436;
count__35395_35410 = G__35437;
i__35396_35411 = G__35438;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35407 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35407) : cljs.core.deref.call(null,G__35407));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14723__auto__ = (function (){var G__35455 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35455) : cljs.core.atom.call(null,G__35455));
})();
var seq__35456_35469 = cljs.core.seq(ks);
var chunk__35457_35470 = null;
var count__35458_35471 = (0);
var i__35459_35472 = (0);
while(true){
if((i__35459_35472 < count__35458_35471)){
var k_35473 = chunk__35457_35470.cljs$core$IIndexed$_nth$arity$2(null,i__35459_35472);
var m35454_35474 = (function (){var G__35460 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35460) : cljs.core.deref.call(null,G__35460));
})();
var G__35461_35475 = m_atom__14723__auto__;
var G__35462_35476 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35454_35474,k_35473,(function (){var G__35463 = k_35473;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35463) : f.call(null,G__35463));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35461_35475,G__35462_35476) : cljs.core.reset_BANG_.call(null,G__35461_35475,G__35462_35476));

var G__35477 = seq__35456_35469;
var G__35478 = chunk__35457_35470;
var G__35479 = count__35458_35471;
var G__35480 = (i__35459_35472 + (1));
seq__35456_35469 = G__35477;
chunk__35457_35470 = G__35478;
count__35458_35471 = G__35479;
i__35459_35472 = G__35480;
continue;
} else {
var temp__4126__auto___35481 = cljs.core.seq(seq__35456_35469);
if(temp__4126__auto___35481){
var seq__35456_35482__$1 = temp__4126__auto___35481;
if(cljs.core.chunked_seq_QMARK_(seq__35456_35482__$1)){
var c__5038__auto___35483 = cljs.core.chunk_first(seq__35456_35482__$1);
var G__35484 = cljs.core.chunk_rest(seq__35456_35482__$1);
var G__35485 = c__5038__auto___35483;
var G__35486 = cljs.core.count(c__5038__auto___35483);
var G__35487 = (0);
seq__35456_35469 = G__35484;
chunk__35457_35470 = G__35485;
count__35458_35471 = G__35486;
i__35459_35472 = G__35487;
continue;
} else {
var k_35488 = cljs.core.first(seq__35456_35482__$1);
var m35454_35489 = (function (){var G__35464 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35464) : cljs.core.deref.call(null,G__35464));
})();
var G__35465_35490 = m_atom__14723__auto__;
var G__35466_35491 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35454_35489,k_35488,(function (){var G__35467 = k_35488;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35467) : f.call(null,G__35467));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35465_35490,G__35466_35491) : cljs.core.reset_BANG_.call(null,G__35465_35490,G__35466_35491));

var G__35492 = cljs.core.next(seq__35456_35482__$1);
var G__35493 = null;
var G__35494 = (0);
var G__35495 = (0);
seq__35456_35469 = G__35492;
chunk__35457_35470 = G__35493;
count__35458_35471 = G__35494;
i__35459_35472 = G__35495;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35468 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35468) : cljs.core.deref.call(null,G__35468));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14723__auto__ = (function (){var G__35512 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35512) : cljs.core.atom.call(null,G__35512));
})();
var seq__35513_35526 = cljs.core.seq(vs);
var chunk__35514_35527 = null;
var count__35515_35528 = (0);
var i__35516_35529 = (0);
while(true){
if((i__35516_35529 < count__35515_35528)){
var v_35530 = chunk__35514_35527.cljs$core$IIndexed$_nth$arity$2(null,i__35516_35529);
var m35511_35531 = (function (){var G__35517 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35517) : cljs.core.deref.call(null,G__35517));
})();
var G__35518_35532 = m_atom__14723__auto__;
var G__35519_35533 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35511_35531,(function (){var G__35520 = v_35530;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35520) : f.call(null,G__35520));
})(),v_35530);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35518_35532,G__35519_35533) : cljs.core.reset_BANG_.call(null,G__35518_35532,G__35519_35533));

var G__35534 = seq__35513_35526;
var G__35535 = chunk__35514_35527;
var G__35536 = count__35515_35528;
var G__35537 = (i__35516_35529 + (1));
seq__35513_35526 = G__35534;
chunk__35514_35527 = G__35535;
count__35515_35528 = G__35536;
i__35516_35529 = G__35537;
continue;
} else {
var temp__4126__auto___35538 = cljs.core.seq(seq__35513_35526);
if(temp__4126__auto___35538){
var seq__35513_35539__$1 = temp__4126__auto___35538;
if(cljs.core.chunked_seq_QMARK_(seq__35513_35539__$1)){
var c__5038__auto___35540 = cljs.core.chunk_first(seq__35513_35539__$1);
var G__35541 = cljs.core.chunk_rest(seq__35513_35539__$1);
var G__35542 = c__5038__auto___35540;
var G__35543 = cljs.core.count(c__5038__auto___35540);
var G__35544 = (0);
seq__35513_35526 = G__35541;
chunk__35514_35527 = G__35542;
count__35515_35528 = G__35543;
i__35516_35529 = G__35544;
continue;
} else {
var v_35545 = cljs.core.first(seq__35513_35539__$1);
var m35511_35546 = (function (){var G__35521 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35521) : cljs.core.deref.call(null,G__35521));
})();
var G__35522_35547 = m_atom__14723__auto__;
var G__35523_35548 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35511_35546,(function (){var G__35524 = v_35545;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35524) : f.call(null,G__35524));
})(),v_35545);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35522_35547,G__35523_35548) : cljs.core.reset_BANG_.call(null,G__35522_35547,G__35523_35548));

var G__35549 = cljs.core.next(seq__35513_35539__$1);
var G__35550 = null;
var G__35551 = (0);
var G__35552 = (0);
seq__35513_35526 = G__35549;
chunk__35514_35527 = G__35550;
count__35515_35528 = G__35551;
i__35516_35529 = G__35552;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35525 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35525) : cljs.core.deref.call(null,G__35525));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__35553){
var vec__35559 = p__35553;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35559,(0),null);
var ks = cljs.core.nthnext(vec__35559,(1));
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
var m_atom__14723__auto__ = (function (){var G__35578 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35578) : cljs.core.atom.call(null,G__35578));
})();
var seq__35579_35592 = cljs.core.seq(x);
var chunk__35580_35593 = null;
var count__35581_35594 = (0);
var i__35582_35595 = (0);
while(true){
if((i__35582_35595 < count__35581_35594)){
var vec__35583_35596 = chunk__35580_35593.cljs$core$IIndexed$_nth$arity$2(null,i__35582_35595);
var k_35597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35583_35596,(0),null);
var v_35598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35583_35596,(1),null);
var m35577_35599 = (function (){var G__35584 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35584) : cljs.core.deref.call(null,G__35584));
})();
var G__35585_35600 = m_atom__14723__auto__;
var G__35586_35601 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35577_35599,((typeof k_35597 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35597):k_35597),keywordize_map(v_35598));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35585_35600,G__35586_35601) : cljs.core.reset_BANG_.call(null,G__35585_35600,G__35586_35601));

var G__35602 = seq__35579_35592;
var G__35603 = chunk__35580_35593;
var G__35604 = count__35581_35594;
var G__35605 = (i__35582_35595 + (1));
seq__35579_35592 = G__35602;
chunk__35580_35593 = G__35603;
count__35581_35594 = G__35604;
i__35582_35595 = G__35605;
continue;
} else {
var temp__4126__auto___35606 = cljs.core.seq(seq__35579_35592);
if(temp__4126__auto___35606){
var seq__35579_35607__$1 = temp__4126__auto___35606;
if(cljs.core.chunked_seq_QMARK_(seq__35579_35607__$1)){
var c__5038__auto___35608 = cljs.core.chunk_first(seq__35579_35607__$1);
var G__35609 = cljs.core.chunk_rest(seq__35579_35607__$1);
var G__35610 = c__5038__auto___35608;
var G__35611 = cljs.core.count(c__5038__auto___35608);
var G__35612 = (0);
seq__35579_35592 = G__35609;
chunk__35580_35593 = G__35610;
count__35581_35594 = G__35611;
i__35582_35595 = G__35612;
continue;
} else {
var vec__35587_35613 = cljs.core.first(seq__35579_35607__$1);
var k_35614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587_35613,(0),null);
var v_35615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587_35613,(1),null);
var m35577_35616 = (function (){var G__35588 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35588) : cljs.core.deref.call(null,G__35588));
})();
var G__35589_35617 = m_atom__14723__auto__;
var G__35590_35618 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35577_35616,((typeof k_35614 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35614):k_35614),keywordize_map(v_35615));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35589_35617,G__35590_35618) : cljs.core.reset_BANG_.call(null,G__35589_35617,G__35590_35618));

var G__35619 = cljs.core.next(seq__35579_35607__$1);
var G__35620 = null;
var G__35621 = (0);
var G__35622 = (0);
seq__35579_35592 = G__35619;
chunk__35580_35593 = G__35620;
count__35581_35594 = G__35621;
i__35582_35595 = G__35622;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35591 = m_atom__14723__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35591) : cljs.core.deref.call(null,G__35591));
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
var G__35623 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__35624 = cljs.core.next(ks);
m = G__35623;
ks = G__35624;
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
})(),(function (){var iter__5007__auto__ = (function iter__35635(s__35636){
return (new cljs.core.LazySeq(null,(function (){
var s__35636__$1 = s__35636;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35636__$1);
if(temp__4126__auto__){
var s__35636__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35636__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__35636__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__35638 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__35637 = (0);
while(true){
if((i__35637 < size__5006__auto__)){
var vec__35643 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__35637);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35643,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__35638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35645 = (i__35637 + (1));
i__35637 = G__35645;
continue;
} else {
var G__35646 = (i__35637 + (1));
i__35637 = G__35646;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35638),iter__35635(cljs.core.chunk_rest(s__35636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35638),null);
}
} else {
var vec__35644 = cljs.core.first(s__35636__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35635(cljs.core.rest(s__35636__$2)));
} else {
var G__35647 = cljs.core.rest(s__35636__$2);
s__35636__$1 = G__35647;
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
var G__35648__i = 0, G__35648__a = new Array(arguments.length -  1);
while (G__35648__i < G__35648__a.length) {G__35648__a[G__35648__i] = arguments[G__35648__i + 1]; ++G__35648__i;}
  kvs = new cljs.core.IndexedSeq(G__35648__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__35649){
var m = cljs.core.first(arglist__35649);
var kvs = cljs.core.rest(arglist__35649);
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
var G__35650__i = 0, G__35650__a = new Array(arguments.length -  3);
while (G__35650__i < G__35650__a.length) {G__35650__a[G__35650__i] = arguments[G__35650__i + 3]; ++G__35650__i;}
  args = new cljs.core.IndexedSeq(G__35650__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__35651){
var m = cljs.core.first(arglist__35651);
arglist__35651 = cljs.core.next(arglist__35651);
var key_seq = cljs.core.first(arglist__35651);
arglist__35651 = cljs.core.next(arglist__35651);
var f = cljs.core.first(arglist__35651);
var args = cljs.core.rest(arglist__35651);
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
var k = (function (){var G__35654 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__35654) : key_fn.call(null,G__35654));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__35655 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__35655) : map_fn.call(null,G__35655));
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
if(cljs.core.truth_((function (){var G__35659 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35659) : f.call(null,G__35659));
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
var s = (function (){var G__35675 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35675) : cljs.core.atom.call(null,G__35675));
})();
var iter__5007__auto__ = ((function (s){
return (function iter__35676(s__35677){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35677__$1 = s__35677;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35677__$1);
if(temp__4126__auto__){
var s__35677__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35677__$2)){
var c__5005__auto__ = cljs.core.chunk_first(s__35677__$2);
var size__5006__auto__ = cljs.core.count(c__5005__auto__);
var b__35679 = cljs.core.chunk_buffer(size__5006__auto__);
if((function (){var i__35678 = (0);
while(true){
if((i__35678 < size__5006__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5005__auto__,i__35678);
var id = (function (){var G__35686 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35686) : f.call(null,G__35686));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35687 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35687) : cljs.core.deref.call(null,G__35687));
})(),id))){
cljs.core.chunk_append(b__35679,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__35690 = (i__35678 + (1));
i__35678 = G__35690;
continue;
} else {
var G__35691 = (i__35678 + (1));
i__35678 = G__35691;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35679),iter__35676(cljs.core.chunk_rest(s__35677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35679),null);
}
} else {
var x = cljs.core.first(s__35677__$2);
var id = (function (){var G__35688 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35688) : f.call(null,G__35688));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35689 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35689) : cljs.core.deref.call(null,G__35689));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__35676(cljs.core.rest(s__35677__$2)));
} else {
var G__35692 = cljs.core.rest(s__35677__$2);
s__35677__$1 = G__35692;
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
var G__35695__i = 0, G__35695__a = new Array(arguments.length -  0);
while (G__35695__i < G__35695__a.length) {G__35695__a[G__35695__i] = arguments[G__35695__i + 0]; ++G__35695__i;}
  colls = new cljs.core.IndexedSeq(G__35695__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__35696){
var colls = cljs.core.seq(arglist__35696);
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
var G__35701__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35702 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__35703 = cljs.core.first(xs);
var G__35704 = cljs.core.next(xs);
coll = G__35702;
x = G__35703;
xs = G__35704;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__35701 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__35705__i = 0, G__35705__a = new Array(arguments.length -  2);
while (G__35705__i < G__35705__a.length) {G__35705__a[G__35705__i] = arguments[G__35705__i + 2]; ++G__35705__i;}
  xs = new cljs.core.IndexedSeq(G__35705__a,0);
} 
return G__35701__delegate.call(this,coll,x,xs);};
G__35701.cljs$lang$maxFixedArity = 2;
G__35701.cljs$lang$applyTo = (function (arglist__35706){
var coll = cljs.core.first(arglist__35706);
arglist__35706 = cljs.core.next(arglist__35706);
var x = cljs.core.first(arglist__35706);
var xs = cljs.core.rest(arglist__35706);
return G__35701__delegate(coll,x,xs);
});
G__35701.cljs$core$IFn$_invoke$arity$variadic = G__35701__delegate;
return G__35701;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__35707 = null;
if (arguments.length > 2) {
var G__35708__i = 0, G__35708__a = new Array(arguments.length -  2);
while (G__35708__i < G__35708__a.length) {G__35708__a[G__35708__i] = arguments[G__35708__i + 2]; ++G__35708__i;}
G__35707 = new cljs.core.IndexedSeq(G__35708__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__35707);
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
var old_val = (function (){var G__35714 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35714) : cljs.core.deref.call(null,G__35714));
})();
var new_val = (function (){var G__35715 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35715) : f.call(null,G__35715));
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
var G__35716__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__35709_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__35709_SHARP_,args);
}));
};
var G__35716 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__35717__i = 0, G__35717__a = new Array(arguments.length -  2);
while (G__35717__i < G__35717__a.length) {G__35717__a[G__35717__i] = arguments[G__35717__i + 2]; ++G__35717__i;}
  args = new cljs.core.IndexedSeq(G__35717__a,0);
} 
return G__35716__delegate.call(this,a,f,args);};
G__35716.cljs$lang$maxFixedArity = 2;
G__35716.cljs$lang$applyTo = (function (arglist__35718){
var a = cljs.core.first(arglist__35718);
arglist__35718 = cljs.core.next(arglist__35718);
var f = cljs.core.first(arglist__35718);
var args = cljs.core.rest(arglist__35718);
return G__35716__delegate(a,f,args);
});
G__35716.cljs$core$IFn$_invoke$arity$variadic = G__35716__delegate;
return G__35716;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__35719 = null;
if (arguments.length > 2) {
var G__35720__i = 0, G__35720__a = new Array(arguments.length -  2);
while (G__35720__i < G__35720__a.length) {G__35720__a[G__35720__i] = arguments[G__35720__i + 2]; ++G__35720__i;}
G__35719 = new cljs.core.IndexedSeq(G__35720__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__35719);
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
var G__35721__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__35721 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__35722__i = 0, G__35722__a = new Array(arguments.length -  2);
while (G__35722__i < G__35722__a.length) {G__35722__a[G__35722__i] = arguments[G__35722__i + 2]; ++G__35722__i;}
  args = new cljs.core.IndexedSeq(G__35722__a,0);
} 
return G__35721__delegate.call(this,f,arg,args);};
G__35721.cljs$lang$maxFixedArity = 2;
G__35721.cljs$lang$applyTo = (function (arglist__35723){
var f = cljs.core.first(arglist__35723);
arglist__35723 = cljs.core.next(arglist__35723);
var arg = cljs.core.first(arglist__35723);
var args = cljs.core.rest(arglist__35723);
return G__35721__delegate(f,arg,args);
});
G__35721.cljs$core$IFn$_invoke$arity$variadic = G__35721__delegate;
return G__35721;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__35724 = null;
if (arguments.length > 2) {
var G__35725__i = 0, G__35725__a = new Array(arguments.length -  2);
while (G__35725__i < G__35725__a.length) {G__35725__a[G__35725__i] = arguments[G__35725__i + 2]; ++G__35725__i;}
G__35724 = new cljs.core.IndexedSeq(G__35725__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__35724);
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
