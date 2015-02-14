// Compiled by ClojureScript 0.0-2850 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$95;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34601) : f.call(null,G__34601));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34603 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34602,G__34603) : f.call(null,G__34602,G__34603));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34605 = x1;
var G__34606 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34604,G__34605,G__34606) : f.call(null,G__34604,G__34605,G__34606));
})());
});
var update__6 = (function() { 
var G__34607__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__34607 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__34608__i = 0, G__34608__a = new Array(arguments.length -  5);
while (G__34608__i < G__34608__a.length) {G__34608__a[G__34608__i] = arguments[G__34608__i + 5]; ++G__34608__i;}
  xs = new cljs.core.IndexedSeq(G__34608__a,0);
} 
return G__34607__delegate.call(this,m,k,f,x1,x2,xs);};
G__34607.cljs$lang$maxFixedArity = 5;
G__34607.cljs$lang$applyTo = (function (arglist__34609){
var m = cljs.core.first(arglist__34609);
arglist__34609 = cljs.core.next(arglist__34609);
var k = cljs.core.first(arglist__34609);
arglist__34609 = cljs.core.next(arglist__34609);
var f = cljs.core.first(arglist__34609);
arglist__34609 = cljs.core.next(arglist__34609);
var x1 = cljs.core.first(arglist__34609);
arglist__34609 = cljs.core.next(arglist__34609);
var x2 = cljs.core.first(arglist__34609);
var xs = cljs.core.rest(arglist__34609);
return G__34607__delegate(m,k,f,x1,x2,xs);
});
G__34607.cljs$core$IFn$_invoke$arity$variadic = G__34607__delegate;
return G__34607;
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
var G__34610 = null;
if (arguments.length > 5) {
var G__34611__i = 0, G__34611__a = new Array(arguments.length -  5);
while (G__34611__i < G__34611__a.length) {G__34611__a[G__34611__i] = arguments[G__34611__i + 5]; ++G__34611__i;}
G__34610 = new cljs.core.IndexedSeq(G__34611__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__34610);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34631 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34631) : f.call(null,G__34631));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34632 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34632) : f.call(null,G__34632));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14312__auto__ = (function (){var G__34634 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34634) : cljs.core.atom.call(null,G__34634));
})();
var seq__34635_34650 = cljs.core.seq(m);
var chunk__34636_34651 = null;
var count__34637_34652 = (0);
var i__34638_34653 = (0);
while(true){
if((i__34638_34653 < count__34637_34652)){
var vec__34639_34654 = chunk__34636_34651.cljs$core$IIndexed$_nth$arity$2(null,i__34638_34653);
var k_34655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34639_34654,(0),null);
var v_34656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34639_34654,(1),null);
var m34633_34657 = (function (){var G__34640 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34640) : cljs.core.deref.call(null,G__34640));
})();
var G__34641_34658 = m_atom__14312__auto__;
var G__34642_34659 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34633_34657,k_34655,(function (){var G__34643 = v_34656;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34643) : f.call(null,G__34643));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34641_34658,G__34642_34659) : cljs.core.reset_BANG_.call(null,G__34641_34658,G__34642_34659));

var G__34660 = seq__34635_34650;
var G__34661 = chunk__34636_34651;
var G__34662 = count__34637_34652;
var G__34663 = (i__34638_34653 + (1));
seq__34635_34650 = G__34660;
chunk__34636_34651 = G__34661;
count__34637_34652 = G__34662;
i__34638_34653 = G__34663;
continue;
} else {
var temp__4126__auto___34664 = cljs.core.seq(seq__34635_34650);
if(temp__4126__auto___34664){
var seq__34635_34665__$1 = temp__4126__auto___34664;
if(cljs.core.chunked_seq_QMARK_(seq__34635_34665__$1)){
var c__4602__auto___34666 = cljs.core.chunk_first(seq__34635_34665__$1);
var G__34667 = cljs.core.chunk_rest(seq__34635_34665__$1);
var G__34668 = c__4602__auto___34666;
var G__34669 = cljs.core.count(c__4602__auto___34666);
var G__34670 = (0);
seq__34635_34650 = G__34667;
chunk__34636_34651 = G__34668;
count__34637_34652 = G__34669;
i__34638_34653 = G__34670;
continue;
} else {
var vec__34644_34671 = cljs.core.first(seq__34635_34665__$1);
var k_34672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34644_34671,(0),null);
var v_34673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34644_34671,(1),null);
var m34633_34674 = (function (){var G__34645 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34645) : cljs.core.deref.call(null,G__34645));
})();
var G__34646_34675 = m_atom__14312__auto__;
var G__34647_34676 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34633_34674,k_34672,(function (){var G__34648 = v_34673;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34648) : f.call(null,G__34648));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34646_34675,G__34647_34676) : cljs.core.reset_BANG_.call(null,G__34646_34675,G__34647_34676));

var G__34677 = cljs.core.next(seq__34635_34665__$1);
var G__34678 = null;
var G__34679 = (0);
var G__34680 = (0);
seq__34635_34650 = G__34677;
chunk__34636_34651 = G__34678;
count__34637_34652 = G__34679;
i__34638_34653 = G__34680;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34649 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34649) : cljs.core.deref.call(null,G__34649));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__34699 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34699) : f.call(null,G__34699));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14312__auto__ = (function (){var G__34701 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34701) : cljs.core.atom.call(null,G__34701));
})();
var seq__34702_34717 = cljs.core.seq(m);
var chunk__34703_34718 = null;
var count__34704_34719 = (0);
var i__34705_34720 = (0);
while(true){
if((i__34705_34720 < count__34704_34719)){
var vec__34706_34721 = chunk__34703_34718.cljs$core$IIndexed$_nth$arity$2(null,i__34705_34720);
var k_34722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34706_34721,(0),null);
var v_34723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34706_34721,(1),null);
var m34700_34724 = (function (){var G__34707 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34707) : cljs.core.deref.call(null,G__34707));
})();
var G__34708_34725 = m_atom__14312__auto__;
var G__34709_34726 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34700_34724,(function (){var G__34710 = k_34722;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34710) : f.call(null,G__34710));
})(),v_34723);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34708_34725,G__34709_34726) : cljs.core.reset_BANG_.call(null,G__34708_34725,G__34709_34726));

var G__34727 = seq__34702_34717;
var G__34728 = chunk__34703_34718;
var G__34729 = count__34704_34719;
var G__34730 = (i__34705_34720 + (1));
seq__34702_34717 = G__34727;
chunk__34703_34718 = G__34728;
count__34704_34719 = G__34729;
i__34705_34720 = G__34730;
continue;
} else {
var temp__4126__auto___34731 = cljs.core.seq(seq__34702_34717);
if(temp__4126__auto___34731){
var seq__34702_34732__$1 = temp__4126__auto___34731;
if(cljs.core.chunked_seq_QMARK_(seq__34702_34732__$1)){
var c__4602__auto___34733 = cljs.core.chunk_first(seq__34702_34732__$1);
var G__34734 = cljs.core.chunk_rest(seq__34702_34732__$1);
var G__34735 = c__4602__auto___34733;
var G__34736 = cljs.core.count(c__4602__auto___34733);
var G__34737 = (0);
seq__34702_34717 = G__34734;
chunk__34703_34718 = G__34735;
count__34704_34719 = G__34736;
i__34705_34720 = G__34737;
continue;
} else {
var vec__34711_34738 = cljs.core.first(seq__34702_34732__$1);
var k_34739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711_34738,(0),null);
var v_34740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711_34738,(1),null);
var m34700_34741 = (function (){var G__34712 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34712) : cljs.core.deref.call(null,G__34712));
})();
var G__34713_34742 = m_atom__14312__auto__;
var G__34714_34743 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34700_34741,(function (){var G__34715 = k_34739;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34715) : f.call(null,G__34715));
})(),v_34740);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34713_34742,G__34714_34743) : cljs.core.reset_BANG_.call(null,G__34713_34742,G__34714_34743));

var G__34744 = cljs.core.next(seq__34702_34732__$1);
var G__34745 = null;
var G__34746 = (0);
var G__34747 = (0);
seq__34702_34717 = G__34744;
chunk__34703_34718 = G__34745;
count__34704_34719 = G__34746;
i__34705_34720 = G__34747;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34716 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34716) : cljs.core.deref.call(null,G__34716));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14312__auto__ = (function (){var G__34764 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34764) : cljs.core.atom.call(null,G__34764));
})();
var seq__34765_34778 = cljs.core.seq(ks);
var chunk__34766_34779 = null;
var count__34767_34780 = (0);
var i__34768_34781 = (0);
while(true){
if((i__34768_34781 < count__34767_34780)){
var k_34782 = chunk__34766_34779.cljs$core$IIndexed$_nth$arity$2(null,i__34768_34781);
var m34763_34783 = (function (){var G__34769 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34769) : cljs.core.deref.call(null,G__34769));
})();
var G__34770_34784 = m_atom__14312__auto__;
var G__34771_34785 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34763_34783,k_34782,(function (){var G__34772 = k_34782;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34772) : f.call(null,G__34772));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34770_34784,G__34771_34785) : cljs.core.reset_BANG_.call(null,G__34770_34784,G__34771_34785));

var G__34786 = seq__34765_34778;
var G__34787 = chunk__34766_34779;
var G__34788 = count__34767_34780;
var G__34789 = (i__34768_34781 + (1));
seq__34765_34778 = G__34786;
chunk__34766_34779 = G__34787;
count__34767_34780 = G__34788;
i__34768_34781 = G__34789;
continue;
} else {
var temp__4126__auto___34790 = cljs.core.seq(seq__34765_34778);
if(temp__4126__auto___34790){
var seq__34765_34791__$1 = temp__4126__auto___34790;
if(cljs.core.chunked_seq_QMARK_(seq__34765_34791__$1)){
var c__4602__auto___34792 = cljs.core.chunk_first(seq__34765_34791__$1);
var G__34793 = cljs.core.chunk_rest(seq__34765_34791__$1);
var G__34794 = c__4602__auto___34792;
var G__34795 = cljs.core.count(c__4602__auto___34792);
var G__34796 = (0);
seq__34765_34778 = G__34793;
chunk__34766_34779 = G__34794;
count__34767_34780 = G__34795;
i__34768_34781 = G__34796;
continue;
} else {
var k_34797 = cljs.core.first(seq__34765_34791__$1);
var m34763_34798 = (function (){var G__34773 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34773) : cljs.core.deref.call(null,G__34773));
})();
var G__34774_34799 = m_atom__14312__auto__;
var G__34775_34800 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34763_34798,k_34797,(function (){var G__34776 = k_34797;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34776) : f.call(null,G__34776));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34774_34799,G__34775_34800) : cljs.core.reset_BANG_.call(null,G__34774_34799,G__34775_34800));

var G__34801 = cljs.core.next(seq__34765_34791__$1);
var G__34802 = null;
var G__34803 = (0);
var G__34804 = (0);
seq__34765_34778 = G__34801;
chunk__34766_34779 = G__34802;
count__34767_34780 = G__34803;
i__34768_34781 = G__34804;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34777 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34777) : cljs.core.deref.call(null,G__34777));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14312__auto__ = (function (){var G__34821 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34821) : cljs.core.atom.call(null,G__34821));
})();
var seq__34822_34835 = cljs.core.seq(vs);
var chunk__34823_34836 = null;
var count__34824_34837 = (0);
var i__34825_34838 = (0);
while(true){
if((i__34825_34838 < count__34824_34837)){
var v_34839 = chunk__34823_34836.cljs$core$IIndexed$_nth$arity$2(null,i__34825_34838);
var m34820_34840 = (function (){var G__34826 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34826) : cljs.core.deref.call(null,G__34826));
})();
var G__34827_34841 = m_atom__14312__auto__;
var G__34828_34842 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34820_34840,(function (){var G__34829 = v_34839;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34829) : f.call(null,G__34829));
})(),v_34839);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34827_34841,G__34828_34842) : cljs.core.reset_BANG_.call(null,G__34827_34841,G__34828_34842));

var G__34843 = seq__34822_34835;
var G__34844 = chunk__34823_34836;
var G__34845 = count__34824_34837;
var G__34846 = (i__34825_34838 + (1));
seq__34822_34835 = G__34843;
chunk__34823_34836 = G__34844;
count__34824_34837 = G__34845;
i__34825_34838 = G__34846;
continue;
} else {
var temp__4126__auto___34847 = cljs.core.seq(seq__34822_34835);
if(temp__4126__auto___34847){
var seq__34822_34848__$1 = temp__4126__auto___34847;
if(cljs.core.chunked_seq_QMARK_(seq__34822_34848__$1)){
var c__4602__auto___34849 = cljs.core.chunk_first(seq__34822_34848__$1);
var G__34850 = cljs.core.chunk_rest(seq__34822_34848__$1);
var G__34851 = c__4602__auto___34849;
var G__34852 = cljs.core.count(c__4602__auto___34849);
var G__34853 = (0);
seq__34822_34835 = G__34850;
chunk__34823_34836 = G__34851;
count__34824_34837 = G__34852;
i__34825_34838 = G__34853;
continue;
} else {
var v_34854 = cljs.core.first(seq__34822_34848__$1);
var m34820_34855 = (function (){var G__34830 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34830) : cljs.core.deref.call(null,G__34830));
})();
var G__34831_34856 = m_atom__14312__auto__;
var G__34832_34857 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34820_34855,(function (){var G__34833 = v_34854;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34833) : f.call(null,G__34833));
})(),v_34854);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34831_34856,G__34832_34857) : cljs.core.reset_BANG_.call(null,G__34831_34856,G__34832_34857));

var G__34858 = cljs.core.next(seq__34822_34848__$1);
var G__34859 = null;
var G__34860 = (0);
var G__34861 = (0);
seq__34822_34835 = G__34858;
chunk__34823_34836 = G__34859;
count__34824_34837 = G__34860;
i__34825_34838 = G__34861;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34834 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34834) : cljs.core.deref.call(null,G__34834));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__34862){
var vec__34868 = p__34862;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,(0),null);
var ks = cljs.core.nthnext(vec__34868,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3803__auto__ = ks;
if(and__3803__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__3803__auto__;
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
var m_atom__14312__auto__ = (function (){var G__34887 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34887) : cljs.core.atom.call(null,G__34887));
})();
var seq__34888_34901 = cljs.core.seq(x);
var chunk__34889_34902 = null;
var count__34890_34903 = (0);
var i__34891_34904 = (0);
while(true){
if((i__34891_34904 < count__34890_34903)){
var vec__34892_34905 = chunk__34889_34902.cljs$core$IIndexed$_nth$arity$2(null,i__34891_34904);
var k_34906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34892_34905,(0),null);
var v_34907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34892_34905,(1),null);
var m34886_34908 = (function (){var G__34893 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34893) : cljs.core.deref.call(null,G__34893));
})();
var G__34894_34909 = m_atom__14312__auto__;
var G__34895_34910 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34886_34908,((typeof k_34906 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34906):k_34906),keywordize_map(v_34907));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34894_34909,G__34895_34910) : cljs.core.reset_BANG_.call(null,G__34894_34909,G__34895_34910));

var G__34911 = seq__34888_34901;
var G__34912 = chunk__34889_34902;
var G__34913 = count__34890_34903;
var G__34914 = (i__34891_34904 + (1));
seq__34888_34901 = G__34911;
chunk__34889_34902 = G__34912;
count__34890_34903 = G__34913;
i__34891_34904 = G__34914;
continue;
} else {
var temp__4126__auto___34915 = cljs.core.seq(seq__34888_34901);
if(temp__4126__auto___34915){
var seq__34888_34916__$1 = temp__4126__auto___34915;
if(cljs.core.chunked_seq_QMARK_(seq__34888_34916__$1)){
var c__4602__auto___34917 = cljs.core.chunk_first(seq__34888_34916__$1);
var G__34918 = cljs.core.chunk_rest(seq__34888_34916__$1);
var G__34919 = c__4602__auto___34917;
var G__34920 = cljs.core.count(c__4602__auto___34917);
var G__34921 = (0);
seq__34888_34901 = G__34918;
chunk__34889_34902 = G__34919;
count__34890_34903 = G__34920;
i__34891_34904 = G__34921;
continue;
} else {
var vec__34896_34922 = cljs.core.first(seq__34888_34916__$1);
var k_34923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896_34922,(0),null);
var v_34924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896_34922,(1),null);
var m34886_34925 = (function (){var G__34897 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34897) : cljs.core.deref.call(null,G__34897));
})();
var G__34898_34926 = m_atom__14312__auto__;
var G__34899_34927 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34886_34925,((typeof k_34923 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34923):k_34923),keywordize_map(v_34924));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34898_34926,G__34899_34927) : cljs.core.reset_BANG_.call(null,G__34898_34926,G__34899_34927));

var G__34928 = cljs.core.next(seq__34888_34916__$1);
var G__34929 = null;
var G__34930 = (0);
var G__34931 = (0);
seq__34888_34901 = G__34928;
chunk__34889_34902 = G__34929;
count__34890_34903 = G__34930;
i__34891_34904 = G__34931;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34900 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34900) : cljs.core.deref.call(null,G__34900));
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
var pair__14381__auto__ = temp__4124__auto__;
return cljs.core.val(pair__14381__auto__);
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
var G__34932 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__34933 = cljs.core.next(ks);
m = G__34932;
ks = G__34933;
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3815__auto__ = m;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4571__auto__ = (function iter__34944(s__34945){
return (new cljs.core.LazySeq(null,(function (){
var s__34945__$1 = s__34945;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34945__$1);
if(temp__4126__auto__){
var s__34945__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34945__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__34945__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__34947 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__34946 = (0);
while(true){
if((i__34946 < size__4570__auto__)){
var vec__34952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__34946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__34947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34954 = (i__34946 + (1));
i__34946 = G__34954;
continue;
} else {
var G__34955 = (i__34946 + (1));
i__34946 = G__34955;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34947),iter__34944(cljs.core.chunk_rest(s__34945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34947),null);
}
} else {
var vec__34953 = cljs.core.first(s__34945__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34953,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__34944(cljs.core.rest(s__34945__$2)));
} else {
var G__34956 = cljs.core.rest(s__34945__$2);
s__34945__$1 = G__34956;
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
return iter__4571__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__34957__i = 0, G__34957__a = new Array(arguments.length -  1);
while (G__34957__i < G__34957__a.length) {G__34957__a[G__34957__i] = arguments[G__34957__i + 1]; ++G__34957__i;}
  kvs = new cljs.core.IndexedSeq(G__34957__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__34958){
var m = cljs.core.first(arglist__34958);
var kvs = cljs.core.rest(arglist__34958);
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
var G__34959__i = 0, G__34959__a = new Array(arguments.length -  3);
while (G__34959__i < G__34959__a.length) {G__34959__a[G__34959__i] = arguments[G__34959__i + 3]; ++G__34959__i;}
  args = new cljs.core.IndexedSeq(G__34959__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__34960){
var m = cljs.core.first(arglist__34960);
arglist__34960 = cljs.core.next(arglist__34960);
var key_seq = cljs.core.first(arglist__34960);
arglist__34960 = cljs.core.next(arglist__34960);
var f = cljs.core.first(arglist__34960);
var args = cljs.core.rest(arglist__34960);
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
var k = (function (){var G__34963 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__34963) : key_fn.call(null,G__34963));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__34964 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__34964) : map_fn.call(null,G__34964));
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
if(cljs.core.truth_((function (){var G__34968 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34968) : f.call(null,G__34968));
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
var s = (function (){var G__34984 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34984) : cljs.core.atom.call(null,G__34984));
})();
var iter__4571__auto__ = ((function (s){
return (function iter__34985(s__34986){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__34986__$1 = s__34986;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__34986__$1);
if(temp__4126__auto__){
var s__34986__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34986__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__34986__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__34988 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__34987 = (0);
while(true){
if((i__34987 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__34987);
var id = (function (){var G__34995 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34995) : f.call(null,G__34995));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__34996 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34996) : cljs.core.deref.call(null,G__34996));
})(),id))){
cljs.core.chunk_append(b__34988,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__34999 = (i__34987 + (1));
i__34987 = G__34999;
continue;
} else {
var G__35000 = (i__34987 + (1));
i__34987 = G__35000;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34988),iter__34985(cljs.core.chunk_rest(s__34986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34988),null);
}
} else {
var x = cljs.core.first(s__34986__$2);
var id = (function (){var G__34997 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34997) : f.call(null,G__34997));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__34998 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34998) : cljs.core.deref.call(null,G__34998));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__34985(cljs.core.rest(s__34986__$2)));
} else {
var G__35001 = cljs.core.rest(s__34986__$2);
s__34986__$1 = G__35001;
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
return iter__4571__auto__(xs);
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
var G__35004__i = 0, G__35004__a = new Array(arguments.length -  0);
while (G__35004__i < G__35004__a.length) {G__35004__a[G__35004__i] = arguments[G__35004__i + 0]; ++G__35004__i;}
  colls = new cljs.core.IndexedSeq(G__35004__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__35005){
var colls = cljs.core.seq(arglist__35005);
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
var G__35010__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35011 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__35012 = cljs.core.first(xs);
var G__35013 = cljs.core.next(xs);
coll = G__35011;
x = G__35012;
xs = G__35013;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__35010 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__35014__i = 0, G__35014__a = new Array(arguments.length -  2);
while (G__35014__i < G__35014__a.length) {G__35014__a[G__35014__i] = arguments[G__35014__i + 2]; ++G__35014__i;}
  xs = new cljs.core.IndexedSeq(G__35014__a,0);
} 
return G__35010__delegate.call(this,coll,x,xs);};
G__35010.cljs$lang$maxFixedArity = 2;
G__35010.cljs$lang$applyTo = (function (arglist__35015){
var coll = cljs.core.first(arglist__35015);
arglist__35015 = cljs.core.next(arglist__35015);
var x = cljs.core.first(arglist__35015);
var xs = cljs.core.rest(arglist__35015);
return G__35010__delegate(coll,x,xs);
});
G__35010.cljs$core$IFn$_invoke$arity$variadic = G__35010__delegate;
return G__35010;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__35016 = null;
if (arguments.length > 2) {
var G__35017__i = 0, G__35017__a = new Array(arguments.length -  2);
while (G__35017__i < G__35017__a.length) {G__35017__a[G__35017__i] = arguments[G__35017__i + 2]; ++G__35017__i;}
G__35016 = new cljs.core.IndexedSeq(G__35017__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__35016);
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
var old_val = (function (){var G__35023 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35023) : cljs.core.deref.call(null,G__35023));
})();
var new_val = (function (){var G__35024 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35024) : f.call(null,G__35024));
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
var G__35025__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__35018_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__35018_SHARP_,args);
}));
};
var G__35025 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__35026__i = 0, G__35026__a = new Array(arguments.length -  2);
while (G__35026__i < G__35026__a.length) {G__35026__a[G__35026__i] = arguments[G__35026__i + 2]; ++G__35026__i;}
  args = new cljs.core.IndexedSeq(G__35026__a,0);
} 
return G__35025__delegate.call(this,a,f,args);};
G__35025.cljs$lang$maxFixedArity = 2;
G__35025.cljs$lang$applyTo = (function (arglist__35027){
var a = cljs.core.first(arglist__35027);
arglist__35027 = cljs.core.next(arglist__35027);
var f = cljs.core.first(arglist__35027);
var args = cljs.core.rest(arglist__35027);
return G__35025__delegate(a,f,args);
});
G__35025.cljs$core$IFn$_invoke$arity$variadic = G__35025__delegate;
return G__35025;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__35028 = null;
if (arguments.length > 2) {
var G__35029__i = 0, G__35029__a = new Array(arguments.length -  2);
while (G__35029__i < G__35029__a.length) {G__35029__a[G__35029__i] = arguments[G__35029__i + 2]; ++G__35029__i;}
G__35028 = new cljs.core.IndexedSeq(G__35029__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__35028);
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
var G__35030__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__35030 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__35031__i = 0, G__35031__a = new Array(arguments.length -  2);
while (G__35031__i < G__35031__a.length) {G__35031__a[G__35031__i] = arguments[G__35031__i + 2]; ++G__35031__i;}
  args = new cljs.core.IndexedSeq(G__35031__a,0);
} 
return G__35030__delegate.call(this,f,arg,args);};
G__35030.cljs$lang$maxFixedArity = 2;
G__35030.cljs$lang$applyTo = (function (arglist__35032){
var f = cljs.core.first(arglist__35032);
arglist__35032 = cljs.core.next(arglist__35032);
var arg = cljs.core.first(arglist__35032);
var args = cljs.core.rest(arglist__35032);
return G__35030__delegate(f,arg,args);
});
G__35030.cljs$core$IFn$_invoke$arity$variadic = G__35030__delegate;
return G__35030;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__35033 = null;
if (arguments.length > 2) {
var G__35034__i = 0, G__35034__a = new Array(arguments.length -  2);
while (G__35034__i < G__35034__a.length) {G__35034__a[G__35034__i] = arguments[G__35034__i + 2]; ++G__35034__i;}
G__35033 = new cljs.core.IndexedSeq(G__35034__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__35033);
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
