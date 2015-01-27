// Compiled by ClojureScript 0.0-2727 {}
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23214) : f.call(null,G__23214));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__23216 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23215,G__23216) : f.call(null,G__23215,G__23216));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__23217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__23218 = x1;
var G__23219 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__23217,G__23218,G__23219) : f.call(null,G__23217,G__23218,G__23219));
})());
});
var update__6 = (function() { 
var G__23220__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__23220 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__23221__i = 0, G__23221__a = new Array(arguments.length -  5);
while (G__23221__i < G__23221__a.length) {G__23221__a[G__23221__i] = arguments[G__23221__i + 5]; ++G__23221__i;}
  xs = new cljs.core.IndexedSeq(G__23221__a,0);
} 
return G__23220__delegate.call(this,m,k,f,x1,x2,xs);};
G__23220.cljs$lang$maxFixedArity = 5;
G__23220.cljs$lang$applyTo = (function (arglist__23222){
var m = cljs.core.first(arglist__23222);
arglist__23222 = cljs.core.next(arglist__23222);
var k = cljs.core.first(arglist__23222);
arglist__23222 = cljs.core.next(arglist__23222);
var f = cljs.core.first(arglist__23222);
arglist__23222 = cljs.core.next(arglist__23222);
var x1 = cljs.core.first(arglist__23222);
arglist__23222 = cljs.core.next(arglist__23222);
var x2 = cljs.core.first(arglist__23222);
var xs = cljs.core.rest(arglist__23222);
return G__23220__delegate(m,k,f,x1,x2,xs);
});
G__23220.cljs$core$IFn$_invoke$arity$variadic = G__23220__delegate;
return G__23220;
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
var G__23223 = null;
if (arguments.length > 5) {
var G__23224__i = 0, G__23224__a = new Array(arguments.length -  5);
while (G__23224__i < G__23224__a.length) {G__23224__a[G__23224__i] = arguments[G__23224__i + 5]; ++G__23224__i;}
G__23223 = new cljs.core.IndexedSeq(G__23224__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__23223);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__23244 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23244) : f.call(null,G__23244));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__23245 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23245) : f.call(null,G__23245));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12860__auto__ = (function (){var G__23247 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23247) : cljs.core.atom.call(null,G__23247));
})();
var seq__23248_23263 = cljs.core.seq(m);
var chunk__23249_23264 = null;
var count__23250_23265 = (0);
var i__23251_23266 = (0);
while(true){
if((i__23251_23266 < count__23250_23265)){
var vec__23252_23267 = chunk__23249_23264.cljs$core$IIndexed$_nth$arity$2(null,i__23251_23266);
var k_23268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23252_23267,(0),null);
var v_23269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23252_23267,(1),null);
var m23246_23270 = (function (){var G__23253 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23253) : cljs.core.deref.call(null,G__23253));
})();
var G__23254_23271 = m_atom__12860__auto__;
var G__23255_23272 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23246_23270,k_23268,(function (){var G__23256 = v_23269;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23256) : f.call(null,G__23256));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23254_23271,G__23255_23272) : cljs.core.reset_BANG_.call(null,G__23254_23271,G__23255_23272));

var G__23273 = seq__23248_23263;
var G__23274 = chunk__23249_23264;
var G__23275 = count__23250_23265;
var G__23276 = (i__23251_23266 + (1));
seq__23248_23263 = G__23273;
chunk__23249_23264 = G__23274;
count__23250_23265 = G__23275;
i__23251_23266 = G__23276;
continue;
} else {
var temp__4126__auto___23277 = cljs.core.seq(seq__23248_23263);
if(temp__4126__auto___23277){
var seq__23248_23278__$1 = temp__4126__auto___23277;
if(cljs.core.chunked_seq_QMARK_(seq__23248_23278__$1)){
var c__4545__auto___23279 = cljs.core.chunk_first(seq__23248_23278__$1);
var G__23280 = cljs.core.chunk_rest(seq__23248_23278__$1);
var G__23281 = c__4545__auto___23279;
var G__23282 = cljs.core.count(c__4545__auto___23279);
var G__23283 = (0);
seq__23248_23263 = G__23280;
chunk__23249_23264 = G__23281;
count__23250_23265 = G__23282;
i__23251_23266 = G__23283;
continue;
} else {
var vec__23257_23284 = cljs.core.first(seq__23248_23278__$1);
var k_23285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23257_23284,(0),null);
var v_23286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23257_23284,(1),null);
var m23246_23287 = (function (){var G__23258 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23258) : cljs.core.deref.call(null,G__23258));
})();
var G__23259_23288 = m_atom__12860__auto__;
var G__23260_23289 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23246_23287,k_23285,(function (){var G__23261 = v_23286;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23261) : f.call(null,G__23261));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23259_23288,G__23260_23289) : cljs.core.reset_BANG_.call(null,G__23259_23288,G__23260_23289));

var G__23290 = cljs.core.next(seq__23248_23278__$1);
var G__23291 = null;
var G__23292 = (0);
var G__23293 = (0);
seq__23248_23263 = G__23290;
chunk__23249_23264 = G__23291;
count__23250_23265 = G__23292;
i__23251_23266 = G__23293;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__23262 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23262) : cljs.core.deref.call(null,G__23262));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__23312 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23312) : f.call(null,G__23312));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__12860__auto__ = (function (){var G__23314 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23314) : cljs.core.atom.call(null,G__23314));
})();
var seq__23315_23330 = cljs.core.seq(m);
var chunk__23316_23331 = null;
var count__23317_23332 = (0);
var i__23318_23333 = (0);
while(true){
if((i__23318_23333 < count__23317_23332)){
var vec__23319_23334 = chunk__23316_23331.cljs$core$IIndexed$_nth$arity$2(null,i__23318_23333);
var k_23335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319_23334,(0),null);
var v_23336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23319_23334,(1),null);
var m23313_23337 = (function (){var G__23320 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23320) : cljs.core.deref.call(null,G__23320));
})();
var G__23321_23338 = m_atom__12860__auto__;
var G__23322_23339 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23313_23337,(function (){var G__23323 = k_23335;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23323) : f.call(null,G__23323));
})(),v_23336);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23321_23338,G__23322_23339) : cljs.core.reset_BANG_.call(null,G__23321_23338,G__23322_23339));

var G__23340 = seq__23315_23330;
var G__23341 = chunk__23316_23331;
var G__23342 = count__23317_23332;
var G__23343 = (i__23318_23333 + (1));
seq__23315_23330 = G__23340;
chunk__23316_23331 = G__23341;
count__23317_23332 = G__23342;
i__23318_23333 = G__23343;
continue;
} else {
var temp__4126__auto___23344 = cljs.core.seq(seq__23315_23330);
if(temp__4126__auto___23344){
var seq__23315_23345__$1 = temp__4126__auto___23344;
if(cljs.core.chunked_seq_QMARK_(seq__23315_23345__$1)){
var c__4545__auto___23346 = cljs.core.chunk_first(seq__23315_23345__$1);
var G__23347 = cljs.core.chunk_rest(seq__23315_23345__$1);
var G__23348 = c__4545__auto___23346;
var G__23349 = cljs.core.count(c__4545__auto___23346);
var G__23350 = (0);
seq__23315_23330 = G__23347;
chunk__23316_23331 = G__23348;
count__23317_23332 = G__23349;
i__23318_23333 = G__23350;
continue;
} else {
var vec__23324_23351 = cljs.core.first(seq__23315_23345__$1);
var k_23352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324_23351,(0),null);
var v_23353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324_23351,(1),null);
var m23313_23354 = (function (){var G__23325 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23325) : cljs.core.deref.call(null,G__23325));
})();
var G__23326_23355 = m_atom__12860__auto__;
var G__23327_23356 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23313_23354,(function (){var G__23328 = k_23352;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23328) : f.call(null,G__23328));
})(),v_23353);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23326_23355,G__23327_23356) : cljs.core.reset_BANG_.call(null,G__23326_23355,G__23327_23356));

var G__23357 = cljs.core.next(seq__23315_23345__$1);
var G__23358 = null;
var G__23359 = (0);
var G__23360 = (0);
seq__23315_23330 = G__23357;
chunk__23316_23331 = G__23358;
count__23317_23332 = G__23359;
i__23318_23333 = G__23360;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__23329 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23329) : cljs.core.deref.call(null,G__23329));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__12860__auto__ = (function (){var G__23377 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23377) : cljs.core.atom.call(null,G__23377));
})();
var seq__23378_23391 = cljs.core.seq(ks);
var chunk__23379_23392 = null;
var count__23380_23393 = (0);
var i__23381_23394 = (0);
while(true){
if((i__23381_23394 < count__23380_23393)){
var k_23395 = chunk__23379_23392.cljs$core$IIndexed$_nth$arity$2(null,i__23381_23394);
var m23376_23396 = (function (){var G__23382 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23382) : cljs.core.deref.call(null,G__23382));
})();
var G__23383_23397 = m_atom__12860__auto__;
var G__23384_23398 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23376_23396,k_23395,(function (){var G__23385 = k_23395;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23385) : f.call(null,G__23385));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23383_23397,G__23384_23398) : cljs.core.reset_BANG_.call(null,G__23383_23397,G__23384_23398));

var G__23399 = seq__23378_23391;
var G__23400 = chunk__23379_23392;
var G__23401 = count__23380_23393;
var G__23402 = (i__23381_23394 + (1));
seq__23378_23391 = G__23399;
chunk__23379_23392 = G__23400;
count__23380_23393 = G__23401;
i__23381_23394 = G__23402;
continue;
} else {
var temp__4126__auto___23403 = cljs.core.seq(seq__23378_23391);
if(temp__4126__auto___23403){
var seq__23378_23404__$1 = temp__4126__auto___23403;
if(cljs.core.chunked_seq_QMARK_(seq__23378_23404__$1)){
var c__4545__auto___23405 = cljs.core.chunk_first(seq__23378_23404__$1);
var G__23406 = cljs.core.chunk_rest(seq__23378_23404__$1);
var G__23407 = c__4545__auto___23405;
var G__23408 = cljs.core.count(c__4545__auto___23405);
var G__23409 = (0);
seq__23378_23391 = G__23406;
chunk__23379_23392 = G__23407;
count__23380_23393 = G__23408;
i__23381_23394 = G__23409;
continue;
} else {
var k_23410 = cljs.core.first(seq__23378_23404__$1);
var m23376_23411 = (function (){var G__23386 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23386) : cljs.core.deref.call(null,G__23386));
})();
var G__23387_23412 = m_atom__12860__auto__;
var G__23388_23413 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23376_23411,k_23410,(function (){var G__23389 = k_23410;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23389) : f.call(null,G__23389));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23387_23412,G__23388_23413) : cljs.core.reset_BANG_.call(null,G__23387_23412,G__23388_23413));

var G__23414 = cljs.core.next(seq__23378_23404__$1);
var G__23415 = null;
var G__23416 = (0);
var G__23417 = (0);
seq__23378_23391 = G__23414;
chunk__23379_23392 = G__23415;
count__23380_23393 = G__23416;
i__23381_23394 = G__23417;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__23390 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23390) : cljs.core.deref.call(null,G__23390));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__12860__auto__ = (function (){var G__23434 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23434) : cljs.core.atom.call(null,G__23434));
})();
var seq__23435_23448 = cljs.core.seq(vs);
var chunk__23436_23449 = null;
var count__23437_23450 = (0);
var i__23438_23451 = (0);
while(true){
if((i__23438_23451 < count__23437_23450)){
var v_23452 = chunk__23436_23449.cljs$core$IIndexed$_nth$arity$2(null,i__23438_23451);
var m23433_23453 = (function (){var G__23439 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23439) : cljs.core.deref.call(null,G__23439));
})();
var G__23440_23454 = m_atom__12860__auto__;
var G__23441_23455 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23433_23453,(function (){var G__23442 = v_23452;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23442) : f.call(null,G__23442));
})(),v_23452);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23440_23454,G__23441_23455) : cljs.core.reset_BANG_.call(null,G__23440_23454,G__23441_23455));

var G__23456 = seq__23435_23448;
var G__23457 = chunk__23436_23449;
var G__23458 = count__23437_23450;
var G__23459 = (i__23438_23451 + (1));
seq__23435_23448 = G__23456;
chunk__23436_23449 = G__23457;
count__23437_23450 = G__23458;
i__23438_23451 = G__23459;
continue;
} else {
var temp__4126__auto___23460 = cljs.core.seq(seq__23435_23448);
if(temp__4126__auto___23460){
var seq__23435_23461__$1 = temp__4126__auto___23460;
if(cljs.core.chunked_seq_QMARK_(seq__23435_23461__$1)){
var c__4545__auto___23462 = cljs.core.chunk_first(seq__23435_23461__$1);
var G__23463 = cljs.core.chunk_rest(seq__23435_23461__$1);
var G__23464 = c__4545__auto___23462;
var G__23465 = cljs.core.count(c__4545__auto___23462);
var G__23466 = (0);
seq__23435_23448 = G__23463;
chunk__23436_23449 = G__23464;
count__23437_23450 = G__23465;
i__23438_23451 = G__23466;
continue;
} else {
var v_23467 = cljs.core.first(seq__23435_23461__$1);
var m23433_23468 = (function (){var G__23443 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23443) : cljs.core.deref.call(null,G__23443));
})();
var G__23444_23469 = m_atom__12860__auto__;
var G__23445_23470 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23433_23468,(function (){var G__23446 = v_23467;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23446) : f.call(null,G__23446));
})(),v_23467);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23444_23469,G__23445_23470) : cljs.core.reset_BANG_.call(null,G__23444_23469,G__23445_23470));

var G__23471 = cljs.core.next(seq__23435_23461__$1);
var G__23472 = null;
var G__23473 = (0);
var G__23474 = (0);
seq__23435_23448 = G__23471;
chunk__23436_23449 = G__23472;
count__23437_23450 = G__23473;
i__23438_23451 = G__23474;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__23447 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23447) : cljs.core.deref.call(null,G__23447));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__23475){
var vec__23481 = p__23475;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23481,(0),null);
var ks = cljs.core.nthnext(vec__23481,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3746__auto__ = ks;
if(and__3746__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__3746__auto__;
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
var m_atom__12860__auto__ = (function (){var G__23500 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23500) : cljs.core.atom.call(null,G__23500));
})();
var seq__23501_23514 = cljs.core.seq(x);
var chunk__23502_23515 = null;
var count__23503_23516 = (0);
var i__23504_23517 = (0);
while(true){
if((i__23504_23517 < count__23503_23516)){
var vec__23505_23518 = chunk__23502_23515.cljs$core$IIndexed$_nth$arity$2(null,i__23504_23517);
var k_23519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505_23518,(0),null);
var v_23520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505_23518,(1),null);
var m23499_23521 = (function (){var G__23506 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23506) : cljs.core.deref.call(null,G__23506));
})();
var G__23507_23522 = m_atom__12860__auto__;
var G__23508_23523 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23499_23521,((typeof k_23519 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_23519):k_23519),keywordize_map(v_23520));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23507_23522,G__23508_23523) : cljs.core.reset_BANG_.call(null,G__23507_23522,G__23508_23523));

var G__23524 = seq__23501_23514;
var G__23525 = chunk__23502_23515;
var G__23526 = count__23503_23516;
var G__23527 = (i__23504_23517 + (1));
seq__23501_23514 = G__23524;
chunk__23502_23515 = G__23525;
count__23503_23516 = G__23526;
i__23504_23517 = G__23527;
continue;
} else {
var temp__4126__auto___23528 = cljs.core.seq(seq__23501_23514);
if(temp__4126__auto___23528){
var seq__23501_23529__$1 = temp__4126__auto___23528;
if(cljs.core.chunked_seq_QMARK_(seq__23501_23529__$1)){
var c__4545__auto___23530 = cljs.core.chunk_first(seq__23501_23529__$1);
var G__23531 = cljs.core.chunk_rest(seq__23501_23529__$1);
var G__23532 = c__4545__auto___23530;
var G__23533 = cljs.core.count(c__4545__auto___23530);
var G__23534 = (0);
seq__23501_23514 = G__23531;
chunk__23502_23515 = G__23532;
count__23503_23516 = G__23533;
i__23504_23517 = G__23534;
continue;
} else {
var vec__23509_23535 = cljs.core.first(seq__23501_23529__$1);
var k_23536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23509_23535,(0),null);
var v_23537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23509_23535,(1),null);
var m23499_23538 = (function (){var G__23510 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23510) : cljs.core.deref.call(null,G__23510));
})();
var G__23511_23539 = m_atom__12860__auto__;
var G__23512_23540 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m23499_23538,((typeof k_23536 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_23536):k_23536),keywordize_map(v_23537));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23511_23539,G__23512_23540) : cljs.core.reset_BANG_.call(null,G__23511_23539,G__23512_23540));

var G__23541 = cljs.core.next(seq__23501_23529__$1);
var G__23542 = null;
var G__23543 = (0);
var G__23544 = (0);
seq__23501_23514 = G__23541;
chunk__23502_23515 = G__23542;
count__23503_23516 = G__23543;
i__23504_23517 = G__23544;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__23513 = m_atom__12860__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23513) : cljs.core.deref.call(null,G__23513));
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
var pair__12929__auto__ = temp__4124__auto__;
return cljs.core.val(pair__12929__auto__);
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
var G__23545 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__23546 = cljs.core.next(ks);
m = G__23545;
ks = G__23546;
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3758__auto__ = m;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4514__auto__ = (function iter__23557(s__23558){
return (new cljs.core.LazySeq(null,(function (){
var s__23558__$1 = s__23558;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23558__$1);
if(temp__4126__auto__){
var s__23558__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23558__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23558__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23560 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23559 = (0);
while(true){
if((i__23559 < size__4513__auto__)){
var vec__23565 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23565,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23565,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__23560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23567 = (i__23559 + (1));
i__23559 = G__23567;
continue;
} else {
var G__23568 = (i__23559 + (1));
i__23559 = G__23568;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23560),iter__23557(cljs.core.chunk_rest(s__23558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23560),null);
}
} else {
var vec__23566 = cljs.core.first(s__23558__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23566,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23557(cljs.core.rest(s__23558__$2)));
} else {
var G__23569 = cljs.core.rest(s__23558__$2);
s__23558__$1 = G__23569;
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
return iter__4514__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23570__i = 0, G__23570__a = new Array(arguments.length -  1);
while (G__23570__i < G__23570__a.length) {G__23570__a[G__23570__i] = arguments[G__23570__i + 1]; ++G__23570__i;}
  kvs = new cljs.core.IndexedSeq(G__23570__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__23571){
var m = cljs.core.first(arglist__23571);
var kvs = cljs.core.rest(arglist__23571);
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
var G__23572__i = 0, G__23572__a = new Array(arguments.length -  3);
while (G__23572__i < G__23572__a.length) {G__23572__a[G__23572__i] = arguments[G__23572__i + 3]; ++G__23572__i;}
  args = new cljs.core.IndexedSeq(G__23572__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__23573){
var m = cljs.core.first(arglist__23573);
arglist__23573 = cljs.core.next(arglist__23573);
var key_seq = cljs.core.first(arglist__23573);
arglist__23573 = cljs.core.next(arglist__23573);
var f = cljs.core.first(arglist__23573);
var args = cljs.core.rest(arglist__23573);
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
var k = (function (){var G__23576 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__23576) : key_fn.call(null,G__23576));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__23577 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__23577) : map_fn.call(null,G__23577));
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
if(cljs.core.truth_((function (){var G__23581 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23581) : f.call(null,G__23581));
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
var s = (function (){var G__23597 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23597) : cljs.core.atom.call(null,G__23597));
})();
var iter__4514__auto__ = ((function (s){
return (function iter__23598(s__23599){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__23599__$1 = s__23599;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23599__$1);
if(temp__4126__auto__){
var s__23599__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23599__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__23599__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__23601 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__23600 = (0);
while(true){
if((i__23600 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__23600);
var id = (function (){var G__23608 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23608) : f.call(null,G__23608));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__23609 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23609) : cljs.core.deref.call(null,G__23609));
})(),id))){
cljs.core.chunk_append(b__23601,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__23612 = (i__23600 + (1));
i__23600 = G__23612;
continue;
} else {
var G__23613 = (i__23600 + (1));
i__23600 = G__23613;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23601),iter__23598(cljs.core.chunk_rest(s__23599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23601),null);
}
} else {
var x = cljs.core.first(s__23599__$2);
var id = (function (){var G__23610 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23610) : f.call(null,G__23610));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__23611 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23611) : cljs.core.deref.call(null,G__23611));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__23598(cljs.core.rest(s__23599__$2)));
} else {
var G__23614 = cljs.core.rest(s__23599__$2);
s__23599__$1 = G__23614;
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
return iter__4514__auto__(xs);
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
var G__23617__i = 0, G__23617__a = new Array(arguments.length -  0);
while (G__23617__i < G__23617__a.length) {G__23617__a[G__23617__i] = arguments[G__23617__i + 0]; ++G__23617__i;}
  colls = new cljs.core.IndexedSeq(G__23617__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__23618){
var colls = cljs.core.seq(arglist__23618);
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
var G__23623__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__23624 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__23625 = cljs.core.first(xs);
var G__23626 = cljs.core.next(xs);
coll = G__23624;
x = G__23625;
xs = G__23626;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__23623 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__23627__i = 0, G__23627__a = new Array(arguments.length -  2);
while (G__23627__i < G__23627__a.length) {G__23627__a[G__23627__i] = arguments[G__23627__i + 2]; ++G__23627__i;}
  xs = new cljs.core.IndexedSeq(G__23627__a,0);
} 
return G__23623__delegate.call(this,coll,x,xs);};
G__23623.cljs$lang$maxFixedArity = 2;
G__23623.cljs$lang$applyTo = (function (arglist__23628){
var coll = cljs.core.first(arglist__23628);
arglist__23628 = cljs.core.next(arglist__23628);
var x = cljs.core.first(arglist__23628);
var xs = cljs.core.rest(arglist__23628);
return G__23623__delegate(coll,x,xs);
});
G__23623.cljs$core$IFn$_invoke$arity$variadic = G__23623__delegate;
return G__23623;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__23629 = null;
if (arguments.length > 2) {
var G__23630__i = 0, G__23630__a = new Array(arguments.length -  2);
while (G__23630__i < G__23630__a.length) {G__23630__a[G__23630__i] = arguments[G__23630__i + 2]; ++G__23630__i;}
G__23629 = new cljs.core.IndexedSeq(G__23630__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__23629);
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
var old_val = (function (){var G__23636 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23636) : cljs.core.deref.call(null,G__23636));
})();
var new_val = (function (){var G__23637 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23637) : f.call(null,G__23637));
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
var G__23638__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__23631_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__23631_SHARP_,args);
}));
};
var G__23638 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23639__i = 0, G__23639__a = new Array(arguments.length -  2);
while (G__23639__i < G__23639__a.length) {G__23639__a[G__23639__i] = arguments[G__23639__i + 2]; ++G__23639__i;}
  args = new cljs.core.IndexedSeq(G__23639__a,0);
} 
return G__23638__delegate.call(this,a,f,args);};
G__23638.cljs$lang$maxFixedArity = 2;
G__23638.cljs$lang$applyTo = (function (arglist__23640){
var a = cljs.core.first(arglist__23640);
arglist__23640 = cljs.core.next(arglist__23640);
var f = cljs.core.first(arglist__23640);
var args = cljs.core.rest(arglist__23640);
return G__23638__delegate(a,f,args);
});
G__23638.cljs$core$IFn$_invoke$arity$variadic = G__23638__delegate;
return G__23638;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__23641 = null;
if (arguments.length > 2) {
var G__23642__i = 0, G__23642__a = new Array(arguments.length -  2);
while (G__23642__i < G__23642__a.length) {G__23642__a[G__23642__i] = arguments[G__23642__i + 2]; ++G__23642__i;}
G__23641 = new cljs.core.IndexedSeq(G__23642__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__23641);
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
var G__23643__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__23643 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__23644__i = 0, G__23644__a = new Array(arguments.length -  2);
while (G__23644__i < G__23644__a.length) {G__23644__a[G__23644__i] = arguments[G__23644__i + 2]; ++G__23644__i;}
  args = new cljs.core.IndexedSeq(G__23644__a,0);
} 
return G__23643__delegate.call(this,f,arg,args);};
G__23643.cljs$lang$maxFixedArity = 2;
G__23643.cljs$lang$applyTo = (function (arglist__23645){
var f = cljs.core.first(arglist__23645);
arglist__23645 = cljs.core.next(arglist__23645);
var arg = cljs.core.first(arglist__23645);
var args = cljs.core.rest(arglist__23645);
return G__23643__delegate(f,arg,args);
});
G__23643.cljs$core$IFn$_invoke$arity$variadic = G__23643__delegate;
return G__23643;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__23646 = null;
if (arguments.length > 2) {
var G__23647__i = 0, G__23647__a = new Array(arguments.length -  2);
while (G__23647__i < G__23647__a.length) {G__23647__a[G__23647__i] = arguments[G__23647__i + 2]; ++G__23647__i;}
G__23646 = new cljs.core.IndexedSeq(G__23647__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__23646);
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
