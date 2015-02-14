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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34687) : f.call(null,G__34687));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34689 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34688,G__34689) : f.call(null,G__34688,G__34689));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34691 = x1;
var G__34692 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34690,G__34691,G__34692) : f.call(null,G__34690,G__34691,G__34692));
})());
});
var update__6 = (function() { 
var G__34693__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__34693 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__34694__i = 0, G__34694__a = new Array(arguments.length -  5);
while (G__34694__i < G__34694__a.length) {G__34694__a[G__34694__i] = arguments[G__34694__i + 5]; ++G__34694__i;}
  xs = new cljs.core.IndexedSeq(G__34694__a,0);
} 
return G__34693__delegate.call(this,m,k,f,x1,x2,xs);};
G__34693.cljs$lang$maxFixedArity = 5;
G__34693.cljs$lang$applyTo = (function (arglist__34695){
var m = cljs.core.first(arglist__34695);
arglist__34695 = cljs.core.next(arglist__34695);
var k = cljs.core.first(arglist__34695);
arglist__34695 = cljs.core.next(arglist__34695);
var f = cljs.core.first(arglist__34695);
arglist__34695 = cljs.core.next(arglist__34695);
var x1 = cljs.core.first(arglist__34695);
arglist__34695 = cljs.core.next(arglist__34695);
var x2 = cljs.core.first(arglist__34695);
var xs = cljs.core.rest(arglist__34695);
return G__34693__delegate(m,k,f,x1,x2,xs);
});
G__34693.cljs$core$IFn$_invoke$arity$variadic = G__34693__delegate;
return G__34693;
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
var G__34696 = null;
if (arguments.length > 5) {
var G__34697__i = 0, G__34697__a = new Array(arguments.length -  5);
while (G__34697__i < G__34697__a.length) {G__34697__a[G__34697__i] = arguments[G__34697__i + 5]; ++G__34697__i;}
G__34696 = new cljs.core.IndexedSeq(G__34697__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__34696);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34717 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34717) : f.call(null,G__34717));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34718 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34718) : f.call(null,G__34718));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14312__auto__ = (function (){var G__34720 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34720) : cljs.core.atom.call(null,G__34720));
})();
var seq__34721_34736 = cljs.core.seq(m);
var chunk__34722_34737 = null;
var count__34723_34738 = (0);
var i__34724_34739 = (0);
while(true){
if((i__34724_34739 < count__34723_34738)){
var vec__34725_34740 = chunk__34722_34737.cljs$core$IIndexed$_nth$arity$2(null,i__34724_34739);
var k_34741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_34740,(0),null);
var v_34742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34725_34740,(1),null);
var m34719_34743 = (function (){var G__34726 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34726) : cljs.core.deref.call(null,G__34726));
})();
var G__34727_34744 = m_atom__14312__auto__;
var G__34728_34745 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34719_34743,k_34741,(function (){var G__34729 = v_34742;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34729) : f.call(null,G__34729));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34727_34744,G__34728_34745) : cljs.core.reset_BANG_.call(null,G__34727_34744,G__34728_34745));

var G__34746 = seq__34721_34736;
var G__34747 = chunk__34722_34737;
var G__34748 = count__34723_34738;
var G__34749 = (i__34724_34739 + (1));
seq__34721_34736 = G__34746;
chunk__34722_34737 = G__34747;
count__34723_34738 = G__34748;
i__34724_34739 = G__34749;
continue;
} else {
var temp__4126__auto___34750 = cljs.core.seq(seq__34721_34736);
if(temp__4126__auto___34750){
var seq__34721_34751__$1 = temp__4126__auto___34750;
if(cljs.core.chunked_seq_QMARK_(seq__34721_34751__$1)){
var c__4602__auto___34752 = cljs.core.chunk_first(seq__34721_34751__$1);
var G__34753 = cljs.core.chunk_rest(seq__34721_34751__$1);
var G__34754 = c__4602__auto___34752;
var G__34755 = cljs.core.count(c__4602__auto___34752);
var G__34756 = (0);
seq__34721_34736 = G__34753;
chunk__34722_34737 = G__34754;
count__34723_34738 = G__34755;
i__34724_34739 = G__34756;
continue;
} else {
var vec__34730_34757 = cljs.core.first(seq__34721_34751__$1);
var k_34758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730_34757,(0),null);
var v_34759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34730_34757,(1),null);
var m34719_34760 = (function (){var G__34731 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34731) : cljs.core.deref.call(null,G__34731));
})();
var G__34732_34761 = m_atom__14312__auto__;
var G__34733_34762 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34719_34760,k_34758,(function (){var G__34734 = v_34759;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34734) : f.call(null,G__34734));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34732_34761,G__34733_34762) : cljs.core.reset_BANG_.call(null,G__34732_34761,G__34733_34762));

var G__34763 = cljs.core.next(seq__34721_34751__$1);
var G__34764 = null;
var G__34765 = (0);
var G__34766 = (0);
seq__34721_34736 = G__34763;
chunk__34722_34737 = G__34764;
count__34723_34738 = G__34765;
i__34724_34739 = G__34766;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34735 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34735) : cljs.core.deref.call(null,G__34735));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__34785 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34785) : f.call(null,G__34785));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14312__auto__ = (function (){var G__34787 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34787) : cljs.core.atom.call(null,G__34787));
})();
var seq__34788_34803 = cljs.core.seq(m);
var chunk__34789_34804 = null;
var count__34790_34805 = (0);
var i__34791_34806 = (0);
while(true){
if((i__34791_34806 < count__34790_34805)){
var vec__34792_34807 = chunk__34789_34804.cljs$core$IIndexed$_nth$arity$2(null,i__34791_34806);
var k_34808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_34807,(0),null);
var v_34809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_34807,(1),null);
var m34786_34810 = (function (){var G__34793 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34793) : cljs.core.deref.call(null,G__34793));
})();
var G__34794_34811 = m_atom__14312__auto__;
var G__34795_34812 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34786_34810,(function (){var G__34796 = k_34808;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34796) : f.call(null,G__34796));
})(),v_34809);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34794_34811,G__34795_34812) : cljs.core.reset_BANG_.call(null,G__34794_34811,G__34795_34812));

var G__34813 = seq__34788_34803;
var G__34814 = chunk__34789_34804;
var G__34815 = count__34790_34805;
var G__34816 = (i__34791_34806 + (1));
seq__34788_34803 = G__34813;
chunk__34789_34804 = G__34814;
count__34790_34805 = G__34815;
i__34791_34806 = G__34816;
continue;
} else {
var temp__4126__auto___34817 = cljs.core.seq(seq__34788_34803);
if(temp__4126__auto___34817){
var seq__34788_34818__$1 = temp__4126__auto___34817;
if(cljs.core.chunked_seq_QMARK_(seq__34788_34818__$1)){
var c__4602__auto___34819 = cljs.core.chunk_first(seq__34788_34818__$1);
var G__34820 = cljs.core.chunk_rest(seq__34788_34818__$1);
var G__34821 = c__4602__auto___34819;
var G__34822 = cljs.core.count(c__4602__auto___34819);
var G__34823 = (0);
seq__34788_34803 = G__34820;
chunk__34789_34804 = G__34821;
count__34790_34805 = G__34822;
i__34791_34806 = G__34823;
continue;
} else {
var vec__34797_34824 = cljs.core.first(seq__34788_34818__$1);
var k_34825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34797_34824,(0),null);
var v_34826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34797_34824,(1),null);
var m34786_34827 = (function (){var G__34798 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34798) : cljs.core.deref.call(null,G__34798));
})();
var G__34799_34828 = m_atom__14312__auto__;
var G__34800_34829 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34786_34827,(function (){var G__34801 = k_34825;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34801) : f.call(null,G__34801));
})(),v_34826);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34799_34828,G__34800_34829) : cljs.core.reset_BANG_.call(null,G__34799_34828,G__34800_34829));

var G__34830 = cljs.core.next(seq__34788_34818__$1);
var G__34831 = null;
var G__34832 = (0);
var G__34833 = (0);
seq__34788_34803 = G__34830;
chunk__34789_34804 = G__34831;
count__34790_34805 = G__34832;
i__34791_34806 = G__34833;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34802 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34802) : cljs.core.deref.call(null,G__34802));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14312__auto__ = (function (){var G__34850 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34850) : cljs.core.atom.call(null,G__34850));
})();
var seq__34851_34864 = cljs.core.seq(ks);
var chunk__34852_34865 = null;
var count__34853_34866 = (0);
var i__34854_34867 = (0);
while(true){
if((i__34854_34867 < count__34853_34866)){
var k_34868 = chunk__34852_34865.cljs$core$IIndexed$_nth$arity$2(null,i__34854_34867);
var m34849_34869 = (function (){var G__34855 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34855) : cljs.core.deref.call(null,G__34855));
})();
var G__34856_34870 = m_atom__14312__auto__;
var G__34857_34871 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34849_34869,k_34868,(function (){var G__34858 = k_34868;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34858) : f.call(null,G__34858));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34856_34870,G__34857_34871) : cljs.core.reset_BANG_.call(null,G__34856_34870,G__34857_34871));

var G__34872 = seq__34851_34864;
var G__34873 = chunk__34852_34865;
var G__34874 = count__34853_34866;
var G__34875 = (i__34854_34867 + (1));
seq__34851_34864 = G__34872;
chunk__34852_34865 = G__34873;
count__34853_34866 = G__34874;
i__34854_34867 = G__34875;
continue;
} else {
var temp__4126__auto___34876 = cljs.core.seq(seq__34851_34864);
if(temp__4126__auto___34876){
var seq__34851_34877__$1 = temp__4126__auto___34876;
if(cljs.core.chunked_seq_QMARK_(seq__34851_34877__$1)){
var c__4602__auto___34878 = cljs.core.chunk_first(seq__34851_34877__$1);
var G__34879 = cljs.core.chunk_rest(seq__34851_34877__$1);
var G__34880 = c__4602__auto___34878;
var G__34881 = cljs.core.count(c__4602__auto___34878);
var G__34882 = (0);
seq__34851_34864 = G__34879;
chunk__34852_34865 = G__34880;
count__34853_34866 = G__34881;
i__34854_34867 = G__34882;
continue;
} else {
var k_34883 = cljs.core.first(seq__34851_34877__$1);
var m34849_34884 = (function (){var G__34859 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34859) : cljs.core.deref.call(null,G__34859));
})();
var G__34860_34885 = m_atom__14312__auto__;
var G__34861_34886 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34849_34884,k_34883,(function (){var G__34862 = k_34883;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34862) : f.call(null,G__34862));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34860_34885,G__34861_34886) : cljs.core.reset_BANG_.call(null,G__34860_34885,G__34861_34886));

var G__34887 = cljs.core.next(seq__34851_34877__$1);
var G__34888 = null;
var G__34889 = (0);
var G__34890 = (0);
seq__34851_34864 = G__34887;
chunk__34852_34865 = G__34888;
count__34853_34866 = G__34889;
i__34854_34867 = G__34890;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34863 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34863) : cljs.core.deref.call(null,G__34863));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14312__auto__ = (function (){var G__34907 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34907) : cljs.core.atom.call(null,G__34907));
})();
var seq__34908_34921 = cljs.core.seq(vs);
var chunk__34909_34922 = null;
var count__34910_34923 = (0);
var i__34911_34924 = (0);
while(true){
if((i__34911_34924 < count__34910_34923)){
var v_34925 = chunk__34909_34922.cljs$core$IIndexed$_nth$arity$2(null,i__34911_34924);
var m34906_34926 = (function (){var G__34912 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34912) : cljs.core.deref.call(null,G__34912));
})();
var G__34913_34927 = m_atom__14312__auto__;
var G__34914_34928 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34906_34926,(function (){var G__34915 = v_34925;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34915) : f.call(null,G__34915));
})(),v_34925);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34913_34927,G__34914_34928) : cljs.core.reset_BANG_.call(null,G__34913_34927,G__34914_34928));

var G__34929 = seq__34908_34921;
var G__34930 = chunk__34909_34922;
var G__34931 = count__34910_34923;
var G__34932 = (i__34911_34924 + (1));
seq__34908_34921 = G__34929;
chunk__34909_34922 = G__34930;
count__34910_34923 = G__34931;
i__34911_34924 = G__34932;
continue;
} else {
var temp__4126__auto___34933 = cljs.core.seq(seq__34908_34921);
if(temp__4126__auto___34933){
var seq__34908_34934__$1 = temp__4126__auto___34933;
if(cljs.core.chunked_seq_QMARK_(seq__34908_34934__$1)){
var c__4602__auto___34935 = cljs.core.chunk_first(seq__34908_34934__$1);
var G__34936 = cljs.core.chunk_rest(seq__34908_34934__$1);
var G__34937 = c__4602__auto___34935;
var G__34938 = cljs.core.count(c__4602__auto___34935);
var G__34939 = (0);
seq__34908_34921 = G__34936;
chunk__34909_34922 = G__34937;
count__34910_34923 = G__34938;
i__34911_34924 = G__34939;
continue;
} else {
var v_34940 = cljs.core.first(seq__34908_34934__$1);
var m34906_34941 = (function (){var G__34916 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34916) : cljs.core.deref.call(null,G__34916));
})();
var G__34917_34942 = m_atom__14312__auto__;
var G__34918_34943 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34906_34941,(function (){var G__34919 = v_34940;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34919) : f.call(null,G__34919));
})(),v_34940);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34917_34942,G__34918_34943) : cljs.core.reset_BANG_.call(null,G__34917_34942,G__34918_34943));

var G__34944 = cljs.core.next(seq__34908_34934__$1);
var G__34945 = null;
var G__34946 = (0);
var G__34947 = (0);
seq__34908_34921 = G__34944;
chunk__34909_34922 = G__34945;
count__34910_34923 = G__34946;
i__34911_34924 = G__34947;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34920 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34920) : cljs.core.deref.call(null,G__34920));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__34948){
var vec__34954 = p__34948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34954,(0),null);
var ks = cljs.core.nthnext(vec__34954,(1));
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
var m_atom__14312__auto__ = (function (){var G__34973 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34973) : cljs.core.atom.call(null,G__34973));
})();
var seq__34974_34987 = cljs.core.seq(x);
var chunk__34975_34988 = null;
var count__34976_34989 = (0);
var i__34977_34990 = (0);
while(true){
if((i__34977_34990 < count__34976_34989)){
var vec__34978_34991 = chunk__34975_34988.cljs$core$IIndexed$_nth$arity$2(null,i__34977_34990);
var k_34992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_34991,(0),null);
var v_34993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978_34991,(1),null);
var m34972_34994 = (function (){var G__34979 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34979) : cljs.core.deref.call(null,G__34979));
})();
var G__34980_34995 = m_atom__14312__auto__;
var G__34981_34996 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34972_34994,((typeof k_34992 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_34992):k_34992),keywordize_map(v_34993));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34980_34995,G__34981_34996) : cljs.core.reset_BANG_.call(null,G__34980_34995,G__34981_34996));

var G__34997 = seq__34974_34987;
var G__34998 = chunk__34975_34988;
var G__34999 = count__34976_34989;
var G__35000 = (i__34977_34990 + (1));
seq__34974_34987 = G__34997;
chunk__34975_34988 = G__34998;
count__34976_34989 = G__34999;
i__34977_34990 = G__35000;
continue;
} else {
var temp__4126__auto___35001 = cljs.core.seq(seq__34974_34987);
if(temp__4126__auto___35001){
var seq__34974_35002__$1 = temp__4126__auto___35001;
if(cljs.core.chunked_seq_QMARK_(seq__34974_35002__$1)){
var c__4602__auto___35003 = cljs.core.chunk_first(seq__34974_35002__$1);
var G__35004 = cljs.core.chunk_rest(seq__34974_35002__$1);
var G__35005 = c__4602__auto___35003;
var G__35006 = cljs.core.count(c__4602__auto___35003);
var G__35007 = (0);
seq__34974_34987 = G__35004;
chunk__34975_34988 = G__35005;
count__34976_34989 = G__35006;
i__34977_34990 = G__35007;
continue;
} else {
var vec__34982_35008 = cljs.core.first(seq__34974_35002__$1);
var k_35009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35008,(0),null);
var v_35010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34982_35008,(1),null);
var m34972_35011 = (function (){var G__34983 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34983) : cljs.core.deref.call(null,G__34983));
})();
var G__34984_35012 = m_atom__14312__auto__;
var G__34985_35013 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34972_35011,((typeof k_35009 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35009):k_35009),keywordize_map(v_35010));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34984_35012,G__34985_35013) : cljs.core.reset_BANG_.call(null,G__34984_35012,G__34985_35013));

var G__35014 = cljs.core.next(seq__34974_35002__$1);
var G__35015 = null;
var G__35016 = (0);
var G__35017 = (0);
seq__34974_34987 = G__35014;
chunk__34975_34988 = G__35015;
count__34976_34989 = G__35016;
i__34977_34990 = G__35017;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34986 = m_atom__14312__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34986) : cljs.core.deref.call(null,G__34986));
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
var G__35018 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__35019 = cljs.core.next(ks);
m = G__35018;
ks = G__35019;
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
})(),(function (){var iter__4571__auto__ = (function iter__35030(s__35031){
return (new cljs.core.LazySeq(null,(function (){
var s__35031__$1 = s__35031;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35031__$1);
if(temp__4126__auto__){
var s__35031__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35031__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35031__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35033 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35032 = (0);
while(true){
if((i__35032 < size__4570__auto__)){
var vec__35038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35032);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35038,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__35033,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35040 = (i__35032 + (1));
i__35032 = G__35040;
continue;
} else {
var G__35041 = (i__35032 + (1));
i__35032 = G__35041;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35033),iter__35030(cljs.core.chunk_rest(s__35031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35033),null);
}
} else {
var vec__35039 = cljs.core.first(s__35031__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35039,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35030(cljs.core.rest(s__35031__$2)));
} else {
var G__35042 = cljs.core.rest(s__35031__$2);
s__35031__$1 = G__35042;
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
var G__35043__i = 0, G__35043__a = new Array(arguments.length -  1);
while (G__35043__i < G__35043__a.length) {G__35043__a[G__35043__i] = arguments[G__35043__i + 1]; ++G__35043__i;}
  kvs = new cljs.core.IndexedSeq(G__35043__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__35044){
var m = cljs.core.first(arglist__35044);
var kvs = cljs.core.rest(arglist__35044);
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
var G__35045__i = 0, G__35045__a = new Array(arguments.length -  3);
while (G__35045__i < G__35045__a.length) {G__35045__a[G__35045__i] = arguments[G__35045__i + 3]; ++G__35045__i;}
  args = new cljs.core.IndexedSeq(G__35045__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__35046){
var m = cljs.core.first(arglist__35046);
arglist__35046 = cljs.core.next(arglist__35046);
var key_seq = cljs.core.first(arglist__35046);
arglist__35046 = cljs.core.next(arglist__35046);
var f = cljs.core.first(arglist__35046);
var args = cljs.core.rest(arglist__35046);
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
var k = (function (){var G__35049 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__35049) : key_fn.call(null,G__35049));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__35050 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__35050) : map_fn.call(null,G__35050));
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
if(cljs.core.truth_((function (){var G__35054 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35054) : f.call(null,G__35054));
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
var s = (function (){var G__35070 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35070) : cljs.core.atom.call(null,G__35070));
})();
var iter__4571__auto__ = ((function (s){
return (function iter__35071(s__35072){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35072__$1 = s__35072;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35072__$1);
if(temp__4126__auto__){
var s__35072__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35072__$2)){
var c__4569__auto__ = cljs.core.chunk_first(s__35072__$2);
var size__4570__auto__ = cljs.core.count(c__4569__auto__);
var b__35074 = cljs.core.chunk_buffer(size__4570__auto__);
if((function (){var i__35073 = (0);
while(true){
if((i__35073 < size__4570__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4569__auto__,i__35073);
var id = (function (){var G__35081 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35081) : f.call(null,G__35081));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35082 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35082) : cljs.core.deref.call(null,G__35082));
})(),id))){
cljs.core.chunk_append(b__35074,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__35085 = (i__35073 + (1));
i__35073 = G__35085;
continue;
} else {
var G__35086 = (i__35073 + (1));
i__35073 = G__35086;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35074),iter__35071(cljs.core.chunk_rest(s__35072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35074),null);
}
} else {
var x = cljs.core.first(s__35072__$2);
var id = (function (){var G__35083 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35083) : f.call(null,G__35083));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35084 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35084) : cljs.core.deref.call(null,G__35084));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__35071(cljs.core.rest(s__35072__$2)));
} else {
var G__35087 = cljs.core.rest(s__35072__$2);
s__35072__$1 = G__35087;
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
var G__35090__i = 0, G__35090__a = new Array(arguments.length -  0);
while (G__35090__i < G__35090__a.length) {G__35090__a[G__35090__i] = arguments[G__35090__i + 0]; ++G__35090__i;}
  colls = new cljs.core.IndexedSeq(G__35090__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__35091){
var colls = cljs.core.seq(arglist__35091);
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
var G__35096__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35097 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__35098 = cljs.core.first(xs);
var G__35099 = cljs.core.next(xs);
coll = G__35097;
x = G__35098;
xs = G__35099;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__35096 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__35100__i = 0, G__35100__a = new Array(arguments.length -  2);
while (G__35100__i < G__35100__a.length) {G__35100__a[G__35100__i] = arguments[G__35100__i + 2]; ++G__35100__i;}
  xs = new cljs.core.IndexedSeq(G__35100__a,0);
} 
return G__35096__delegate.call(this,coll,x,xs);};
G__35096.cljs$lang$maxFixedArity = 2;
G__35096.cljs$lang$applyTo = (function (arglist__35101){
var coll = cljs.core.first(arglist__35101);
arglist__35101 = cljs.core.next(arglist__35101);
var x = cljs.core.first(arglist__35101);
var xs = cljs.core.rest(arglist__35101);
return G__35096__delegate(coll,x,xs);
});
G__35096.cljs$core$IFn$_invoke$arity$variadic = G__35096__delegate;
return G__35096;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__35102 = null;
if (arguments.length > 2) {
var G__35103__i = 0, G__35103__a = new Array(arguments.length -  2);
while (G__35103__i < G__35103__a.length) {G__35103__a[G__35103__i] = arguments[G__35103__i + 2]; ++G__35103__i;}
G__35102 = new cljs.core.IndexedSeq(G__35103__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__35102);
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
var old_val = (function (){var G__35109 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35109) : cljs.core.deref.call(null,G__35109));
})();
var new_val = (function (){var G__35110 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35110) : f.call(null,G__35110));
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
var G__35111__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__35104_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__35104_SHARP_,args);
}));
};
var G__35111 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__35112__i = 0, G__35112__a = new Array(arguments.length -  2);
while (G__35112__i < G__35112__a.length) {G__35112__a[G__35112__i] = arguments[G__35112__i + 2]; ++G__35112__i;}
  args = new cljs.core.IndexedSeq(G__35112__a,0);
} 
return G__35111__delegate.call(this,a,f,args);};
G__35111.cljs$lang$maxFixedArity = 2;
G__35111.cljs$lang$applyTo = (function (arglist__35113){
var a = cljs.core.first(arglist__35113);
arglist__35113 = cljs.core.next(arglist__35113);
var f = cljs.core.first(arglist__35113);
var args = cljs.core.rest(arglist__35113);
return G__35111__delegate(a,f,args);
});
G__35111.cljs$core$IFn$_invoke$arity$variadic = G__35111__delegate;
return G__35111;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__35114 = null;
if (arguments.length > 2) {
var G__35115__i = 0, G__35115__a = new Array(arguments.length -  2);
while (G__35115__i < G__35115__a.length) {G__35115__a[G__35115__i] = arguments[G__35115__i + 2]; ++G__35115__i;}
G__35114 = new cljs.core.IndexedSeq(G__35115__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__35114);
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
var G__35116__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__35116 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__35117__i = 0, G__35117__a = new Array(arguments.length -  2);
while (G__35117__i < G__35117__a.length) {G__35117__a[G__35117__i] = arguments[G__35117__i + 2]; ++G__35117__i;}
  args = new cljs.core.IndexedSeq(G__35117__a,0);
} 
return G__35116__delegate.call(this,f,arg,args);};
G__35116.cljs$lang$maxFixedArity = 2;
G__35116.cljs$lang$applyTo = (function (arglist__35118){
var f = cljs.core.first(arglist__35118);
arglist__35118 = cljs.core.next(arglist__35118);
var arg = cljs.core.first(arglist__35118);
var args = cljs.core.rest(arglist__35118);
return G__35116__delegate(f,arg,args);
});
G__35116.cljs$core$IFn$_invoke$arity$variadic = G__35116__delegate;
return G__35116;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__35119 = null;
if (arguments.length > 2) {
var G__35120__i = 0, G__35120__a = new Array(arguments.length -  2);
while (G__35120__i < G__35120__a.length) {G__35120__a[G__35120__i] = arguments[G__35120__i + 2]; ++G__35120__i;}
G__35119 = new cljs.core.IndexedSeq(G__35120__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__35119);
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
