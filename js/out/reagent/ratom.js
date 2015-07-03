// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__19542 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19542) : cljs.core.atom.call(null,G__19542));
})();
}
reagent.ratom.running = (function reagent$ratom$running(){
var G__19544 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19544) : cljs.core.deref.call(null,G__19544));
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_19546 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_19546;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj19548 = {};
return obj19548;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19549 = this$__$1;
return goog.getUid(G__19549);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__19550 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__19550) : self__.validator.call(null,G__19550));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19551 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19551) : f.call(null,G__19551));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19552 = self__.state;
var G__19553 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19552,G__19553) : f.call(null,G__19552,G__19553));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19554 = self__.state;
var G__19555 = x;
var G__19556 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19554,G__19555,G__19556) : f.call(null,G__19554,G__19555,G__19556));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__19557_19561 = key;
var G__19558_19562 = this$__$1;
var G__19559_19563 = oldval;
var G__19560_19564 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19557_19561,G__19558_19562,G__19559_19563,G__19560_19564) : f.call(null,G__19557_19561,G__19558_19562,G__19559_19563,G__19560_19564));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(){
var G__19568 = arguments.length;
switch (G__19568) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5389__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5389__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__19569){
var map__19570 = p__19569;
var map__19570__$1 = ((cljs.core.seq_QMARK_(map__19570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19570):map__19570);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19570__$1,cljs.core.constant$keyword$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19570__$1,cljs.core.constant$keyword$validator);
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq19565){
var G__19566 = cljs.core.first(seq19565);
var seq19565__$1 = cljs.core.next(seq19565);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__19566,seq19565__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__19578 = self__.ratom;
if(G__19578){
var bit__5012__auto__ = (G__19578.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__19578.cljs$core$IDeref$)){
return true;
} else {
if((!G__19578.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19578);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19578);
}
})())?(function (){var G__19579 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19582 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19582) : cljs.core.deref.call(null,G__19582));
})(),self__.path);
});})(this$))
;
var G__19580 = cljs.core.constant$keyword$on_DASH_set;
var G__19581 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__19579,G__19580,this$){
return (function (p1__19573_SHARP_,p2__19572_SHARP_){
var G__19583 = self__.ratom;
var G__19584 = p2__19572_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19583,G__19584) : cljs.core.reset_BANG_.call(null,G__19583,G__19584));
});})(G__19579,G__19580,this$))
:((function (G__19579,G__19580,this$){
return (function (p1__19575_SHARP_,p2__19574_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__19574_SHARP_);
});})(G__19579,G__19580,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__19579,G__19580,G__19581) : reagent.ratom.make_reaction.call(null,G__19579,G__19580,G__19581));
})():(function (){var G__19585 = ((function (this$){
return (function (){
var G__19588 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__19588) : self__.ratom.call(null,G__19588));
});})(this$))
;
var G__19586 = cljs.core.constant$keyword$on_DASH_set;
var G__19587 = ((function (G__19585,G__19586,this$){
return (function (p1__19577_SHARP_,p2__19576_SHARP_){
var G__19589 = self__.path;
var G__19590 = p2__19576_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__19589,G__19590) : self__.ratom.call(null,G__19589,G__19590));
});})(G__19585,G__19586,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__19585,G__19586,G__19587) : reagent.ratom.make_reaction.call(null,G__19585,G__19586,G__19587));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_19591 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_19591;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null)], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__19596 = path;
if(G__19596){
var bit__5012__auto__ = (G__19596.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__19596.cljs$core$IDeref$)){
return true;
} else {
if((!G__19596.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19596);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19596);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__19597 = path;
if(G__19597){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__19597.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__19597.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__19597);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__19597);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4338__auto__ = (function (){var G__19599 = src;
if(G__19599){
var bit__5012__auto__ = null;
if(cljs.core.truth_((function (){var or__4338__auto__ = bit__5012__auto__;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return G__19599.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__19599.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__19599);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__19599);
}
})();
if(or__4338__auto__){
return or__4338__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj19601 = {};
return obj19601;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__19605 = x__4974__auto__;
return goog.typeOf(G__19605);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj19607 = {};
return obj19607;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (reagent.ratom.run[(function (){var G__19611 = x__4974__auto__;
return goog.typeOf(G__19611);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (reagent.ratom.run["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj19613 = {};
return obj19613;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__4326__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (reagent.ratom._update_watching[(function (){var G__19617 = x__4974__auto__;
return goog.typeOf(G__19617);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__4326__auto__ = k;
if(and__4326__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__4326__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4974__auto__ = (((k == null))?null:k);
return (function (){var or__4338__auto__ = (reagent.ratom._handle_change[(function (){var G__19621 = x__4974__auto__;
return goog.typeOf(G__19621);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (reagent.ratom._peek_at[(function (){var G__19625 = x__4974__auto__;
return goog.typeOf(G__19625);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4326__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__4326__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4338__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__19626_19652 = cljs.core.seq(derefed);
var chunk__19627_19653 = null;
var count__19628_19654 = (0);
var i__19629_19655 = (0);
while(true){
if((i__19629_19655 < count__19628_19654)){
var w_19656 = chunk__19627_19653.cljs$core$IIndexed$_nth$arity$2(null,i__19629_19655);
if(cljs.core.contains_QMARK_(self__.watching,w_19656)){
} else {
cljs.core.add_watch(w_19656,this$__$1,reagent.ratom._handle_change);
}

var G__19657 = seq__19626_19652;
var G__19658 = chunk__19627_19653;
var G__19659 = count__19628_19654;
var G__19660 = (i__19629_19655 + (1));
seq__19626_19652 = G__19657;
chunk__19627_19653 = G__19658;
count__19628_19654 = G__19659;
i__19629_19655 = G__19660;
continue;
} else {
var temp__4425__auto___19661 = cljs.core.seq(seq__19626_19652);
if(temp__4425__auto___19661){
var seq__19626_19662__$1 = temp__4425__auto___19661;
if(cljs.core.chunked_seq_QMARK_(seq__19626_19662__$1)){
var c__5123__auto___19663 = cljs.core.chunk_first(seq__19626_19662__$1);
var G__19664 = cljs.core.chunk_rest(seq__19626_19662__$1);
var G__19665 = c__5123__auto___19663;
var G__19666 = cljs.core.count(c__5123__auto___19663);
var G__19667 = (0);
seq__19626_19652 = G__19664;
chunk__19627_19653 = G__19665;
count__19628_19654 = G__19666;
i__19629_19655 = G__19667;
continue;
} else {
var w_19668 = cljs.core.first(seq__19626_19662__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_19668)){
} else {
cljs.core.add_watch(w_19668,this$__$1,reagent.ratom._handle_change);
}

var G__19669 = cljs.core.next(seq__19626_19662__$1);
var G__19670 = null;
var G__19671 = (0);
var G__19672 = (0);
seq__19626_19652 = G__19669;
chunk__19627_19653 = G__19670;
count__19628_19654 = G__19671;
i__19629_19655 = G__19672;
continue;
}
} else {
}
}
break;
}

var seq__19630_19673 = cljs.core.seq(self__.watching);
var chunk__19631_19674 = null;
var count__19632_19675 = (0);
var i__19633_19676 = (0);
while(true){
if((i__19633_19676 < count__19632_19675)){
var w_19677 = chunk__19631_19674.cljs$core$IIndexed$_nth$arity$2(null,i__19633_19676);
if(cljs.core.contains_QMARK_(derefed,w_19677)){
} else {
cljs.core.remove_watch(w_19677,this$__$1);
}

var G__19678 = seq__19630_19673;
var G__19679 = chunk__19631_19674;
var G__19680 = count__19632_19675;
var G__19681 = (i__19633_19676 + (1));
seq__19630_19673 = G__19678;
chunk__19631_19674 = G__19679;
count__19632_19675 = G__19680;
i__19633_19676 = G__19681;
continue;
} else {
var temp__4425__auto___19682 = cljs.core.seq(seq__19630_19673);
if(temp__4425__auto___19682){
var seq__19630_19683__$1 = temp__4425__auto___19682;
if(cljs.core.chunked_seq_QMARK_(seq__19630_19683__$1)){
var c__5123__auto___19684 = cljs.core.chunk_first(seq__19630_19683__$1);
var G__19685 = cljs.core.chunk_rest(seq__19630_19683__$1);
var G__19686 = c__5123__auto___19684;
var G__19687 = cljs.core.count(c__5123__auto___19684);
var G__19688 = (0);
seq__19630_19673 = G__19685;
chunk__19631_19674 = G__19686;
count__19632_19675 = G__19687;
i__19633_19676 = G__19688;
continue;
} else {
var w_19689 = cljs.core.first(seq__19630_19683__$1);
if(cljs.core.contains_QMARK_(derefed,w_19689)){
} else {
cljs.core.remove_watch(w_19689,this$__$1);
}

var G__19690 = cljs.core.next(seq__19630_19683__$1);
var G__19691 = null;
var G__19692 = (0);
var G__19693 = (0);
seq__19630_19673 = G__19690;
chunk__19631_19674 = G__19691;
count__19632_19675 = G__19692;
i__19633_19676 = G__19693;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_19634 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_19634;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19635 = this$__$1;
return goog.getUid(G__19635);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__19636_19694 = cljs.core.seq(self__.watching);
var chunk__19637_19695 = null;
var count__19638_19696 = (0);
var i__19639_19697 = (0);
while(true){
if((i__19639_19697 < count__19638_19696)){
var w_19698 = chunk__19637_19695.cljs$core$IIndexed$_nth$arity$2(null,i__19639_19697);
cljs.core.remove_watch(w_19698,this$__$1);

var G__19699 = seq__19636_19694;
var G__19700 = chunk__19637_19695;
var G__19701 = count__19638_19696;
var G__19702 = (i__19639_19697 + (1));
seq__19636_19694 = G__19699;
chunk__19637_19695 = G__19700;
count__19638_19696 = G__19701;
i__19639_19697 = G__19702;
continue;
} else {
var temp__4425__auto___19703 = cljs.core.seq(seq__19636_19694);
if(temp__4425__auto___19703){
var seq__19636_19704__$1 = temp__4425__auto___19703;
if(cljs.core.chunked_seq_QMARK_(seq__19636_19704__$1)){
var c__5123__auto___19705 = cljs.core.chunk_first(seq__19636_19704__$1);
var G__19706 = cljs.core.chunk_rest(seq__19636_19704__$1);
var G__19707 = c__5123__auto___19705;
var G__19708 = cljs.core.count(c__5123__auto___19705);
var G__19709 = (0);
seq__19636_19694 = G__19706;
chunk__19637_19695 = G__19707;
count__19638_19696 = G__19708;
i__19639_19697 = G__19709;
continue;
} else {
var w_19710 = cljs.core.first(seq__19636_19704__$1);
cljs.core.remove_watch(w_19710,this$__$1);

var G__19711 = cljs.core.next(seq__19636_19704__$1);
var G__19712 = null;
var G__19713 = (0);
var G__19714 = (0);
seq__19636_19694 = G__19711;
chunk__19637_19695 = G__19712;
count__19638_19696 = G__19713;
i__19639_19697 = G__19714;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__19640_19715 = oldval;
var G__19641_19716 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__19640_19715,G__19641_19716) : self__.on_set.call(null,G__19640_19715,G__19641_19716));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19642 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__19642) : f__$1.call(null,G__19642));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19643 = reagent.ratom._peek_at(a__$1);
var G__19644 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__19643,G__19644) : f__$1.call(null,G__19643,G__19644));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19645 = reagent.ratom._peek_at(a__$1);
var G__19646 = x;
var G__19647 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__19645,G__19646,G__19647) : f__$1.call(null,G__19645,G__19646,G__19647));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__19648_19717 = key;
var G__19649_19718 = this$__$1;
var G__19650_19719 = oldval;
var G__19651_19720 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__19648_19717,G__19649_19718,G__19650_19719,G__19651_19720) : f__$1.call(null,G__19648_19717,G__19649_19718,G__19650_19719,G__19651_19720));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4338__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_19721 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_19721 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_19721,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.Symbol(null,"active?","active?",2100031303,null),new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"on-set","on-set",1499578057,null),new cljs.core.Symbol(null,"on-dispose","on-dispose",-549129409,null)], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(){
var argseq__5378__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5378__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__19724){
var map__19725 = p__19724;
var map__19725__$1 = ((cljs.core.seq_QMARK_(map__19725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19725):map__19725);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.constant$keyword$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.constant$keyword$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.constant$keyword$on_DASH_dispose);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.constant$keyword$derefed);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq19722){
var G__19723 = cljs.core.first(seq19722);
var seq19722__$1 = cljs.core.next(seq19722);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__19723,seq19722__$1);
});

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = self__.changed;
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4326__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__19726_19737 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__19726_19737) : self__.callback.call(null,G__19726_19737));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19727 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19727) : f.call(null,G__19727));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19728 = self__.state;
var G__19729 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19728,G__19729) : f.call(null,G__19728,G__19729));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__19730 = self__.state;
var G__19731 = x;
var G__19732 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19730,G__19731,G__19732) : f.call(null,G__19730,G__19731,G__19732));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__19733_19738 = key;
var G__19734_19739 = this$__$1;
var G__19735_19740 = oldval;
var G__19736_19741 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19733_19738,G__19734_19739,G__19735_19740,G__19736_19741) : f.call(null,G__19733_19738,G__19734_19739,G__19735_19740,G__19736_19741));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
