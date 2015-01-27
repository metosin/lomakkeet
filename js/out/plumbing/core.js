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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34863) : f.call(null,G__34863));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34865 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__34864,G__34865) : f.call(null,G__34864,G__34865));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__34866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__34867 = x1;
var G__34868 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__34866,G__34867,G__34868) : f.call(null,G__34866,G__34867,G__34868));
})());
});
var update__6 = (function() { 
var G__34869__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__34869 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__34870__i = 0, G__34870__a = new Array(arguments.length -  5);
while (G__34870__i < G__34870__a.length) {G__34870__a[G__34870__i] = arguments[G__34870__i + 5]; ++G__34870__i;}
  xs = new cljs.core.IndexedSeq(G__34870__a,0);
} 
return G__34869__delegate.call(this,m,k,f,x1,x2,xs);};
G__34869.cljs$lang$maxFixedArity = 5;
G__34869.cljs$lang$applyTo = (function (arglist__34871){
var m = cljs.core.first(arglist__34871);
arglist__34871 = cljs.core.next(arglist__34871);
var k = cljs.core.first(arglist__34871);
arglist__34871 = cljs.core.next(arglist__34871);
var f = cljs.core.first(arglist__34871);
arglist__34871 = cljs.core.next(arglist__34871);
var x1 = cljs.core.first(arglist__34871);
arglist__34871 = cljs.core.next(arglist__34871);
var x2 = cljs.core.first(arglist__34871);
var xs = cljs.core.rest(arglist__34871);
return G__34869__delegate(m,k,f,x1,x2,xs);
});
G__34869.cljs$core$IFn$_invoke$arity$variadic = G__34869__delegate;
return G__34869;
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
var G__34872 = null;
if (arguments.length > 5) {
var G__34873__i = 0, G__34873__a = new Array(arguments.length -  5);
while (G__34873__i < G__34873__a.length) {G__34873__a[G__34873__i] = arguments[G__34873__i + 5]; ++G__34873__i;}
G__34872 = new cljs.core.IndexedSeq(G__34873__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__34872);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34893 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34893) : f.call(null,G__34893));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__34894 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34894) : f.call(null,G__34894));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14230__auto__ = (function (){var G__34896 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34896) : cljs.core.atom.call(null,G__34896));
})();
var seq__34897_34912 = cljs.core.seq(m);
var chunk__34898_34913 = null;
var count__34899_34914 = (0);
var i__34900_34915 = (0);
while(true){
if((i__34900_34915 < count__34899_34914)){
var vec__34901_34916 = chunk__34898_34913.cljs$core$IIndexed$_nth$arity$2(null,i__34900_34915);
var k_34917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34901_34916,(0),null);
var v_34918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34901_34916,(1),null);
var m34895_34919 = (function (){var G__34902 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34902) : cljs.core.deref.call(null,G__34902));
})();
var G__34903_34920 = m_atom__14230__auto__;
var G__34904_34921 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34895_34919,k_34917,(function (){var G__34905 = v_34918;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34905) : f.call(null,G__34905));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34903_34920,G__34904_34921) : cljs.core.reset_BANG_.call(null,G__34903_34920,G__34904_34921));

var G__34922 = seq__34897_34912;
var G__34923 = chunk__34898_34913;
var G__34924 = count__34899_34914;
var G__34925 = (i__34900_34915 + (1));
seq__34897_34912 = G__34922;
chunk__34898_34913 = G__34923;
count__34899_34914 = G__34924;
i__34900_34915 = G__34925;
continue;
} else {
var temp__4126__auto___34926 = cljs.core.seq(seq__34897_34912);
if(temp__4126__auto___34926){
var seq__34897_34927__$1 = temp__4126__auto___34926;
if(cljs.core.chunked_seq_QMARK_(seq__34897_34927__$1)){
var c__4545__auto___34928 = cljs.core.chunk_first(seq__34897_34927__$1);
var G__34929 = cljs.core.chunk_rest(seq__34897_34927__$1);
var G__34930 = c__4545__auto___34928;
var G__34931 = cljs.core.count(c__4545__auto___34928);
var G__34932 = (0);
seq__34897_34912 = G__34929;
chunk__34898_34913 = G__34930;
count__34899_34914 = G__34931;
i__34900_34915 = G__34932;
continue;
} else {
var vec__34906_34933 = cljs.core.first(seq__34897_34927__$1);
var k_34934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34906_34933,(0),null);
var v_34935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34906_34933,(1),null);
var m34895_34936 = (function (){var G__34907 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34907) : cljs.core.deref.call(null,G__34907));
})();
var G__34908_34937 = m_atom__14230__auto__;
var G__34909_34938 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34895_34936,k_34934,(function (){var G__34910 = v_34935;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34910) : f.call(null,G__34910));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34908_34937,G__34909_34938) : cljs.core.reset_BANG_.call(null,G__34908_34937,G__34909_34938));

var G__34939 = cljs.core.next(seq__34897_34927__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__34897_34912 = G__34939;
chunk__34898_34913 = G__34940;
count__34899_34914 = G__34941;
i__34900_34915 = G__34942;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34911 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34911) : cljs.core.deref.call(null,G__34911));
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
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__34961 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34961) : f.call(null,G__34961));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14230__auto__ = (function (){var G__34963 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34963) : cljs.core.atom.call(null,G__34963));
})();
var seq__34964_34979 = cljs.core.seq(m);
var chunk__34965_34980 = null;
var count__34966_34981 = (0);
var i__34967_34982 = (0);
while(true){
if((i__34967_34982 < count__34966_34981)){
var vec__34968_34983 = chunk__34965_34980.cljs$core$IIndexed$_nth$arity$2(null,i__34967_34982);
var k_34984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_34983,(0),null);
var v_34985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_34983,(1),null);
var m34962_34986 = (function (){var G__34969 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34969) : cljs.core.deref.call(null,G__34969));
})();
var G__34970_34987 = m_atom__14230__auto__;
var G__34971_34988 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34962_34986,(function (){var G__34972 = k_34984;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34972) : f.call(null,G__34972));
})(),v_34985);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34970_34987,G__34971_34988) : cljs.core.reset_BANG_.call(null,G__34970_34987,G__34971_34988));

var G__34989 = seq__34964_34979;
var G__34990 = chunk__34965_34980;
var G__34991 = count__34966_34981;
var G__34992 = (i__34967_34982 + (1));
seq__34964_34979 = G__34989;
chunk__34965_34980 = G__34990;
count__34966_34981 = G__34991;
i__34967_34982 = G__34992;
continue;
} else {
var temp__4126__auto___34993 = cljs.core.seq(seq__34964_34979);
if(temp__4126__auto___34993){
var seq__34964_34994__$1 = temp__4126__auto___34993;
if(cljs.core.chunked_seq_QMARK_(seq__34964_34994__$1)){
var c__4545__auto___34995 = cljs.core.chunk_first(seq__34964_34994__$1);
var G__34996 = cljs.core.chunk_rest(seq__34964_34994__$1);
var G__34997 = c__4545__auto___34995;
var G__34998 = cljs.core.count(c__4545__auto___34995);
var G__34999 = (0);
seq__34964_34979 = G__34996;
chunk__34965_34980 = G__34997;
count__34966_34981 = G__34998;
i__34967_34982 = G__34999;
continue;
} else {
var vec__34973_35000 = cljs.core.first(seq__34964_34994__$1);
var k_35001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35000,(0),null);
var v_35002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35000,(1),null);
var m34962_35003 = (function (){var G__34974 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34974) : cljs.core.deref.call(null,G__34974));
})();
var G__34975_35004 = m_atom__14230__auto__;
var G__34976_35005 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m34962_35003,(function (){var G__34977 = k_35001;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__34977) : f.call(null,G__34977));
})(),v_35002);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34975_35004,G__34976_35005) : cljs.core.reset_BANG_.call(null,G__34975_35004,G__34976_35005));

var G__35006 = cljs.core.next(seq__34964_34994__$1);
var G__35007 = null;
var G__35008 = (0);
var G__35009 = (0);
seq__34964_34979 = G__35006;
chunk__34965_34980 = G__35007;
count__34966_34981 = G__35008;
i__34967_34982 = G__35009;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__34978 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__34978) : cljs.core.deref.call(null,G__34978));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14230__auto__ = (function (){var G__35026 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35026) : cljs.core.atom.call(null,G__35026));
})();
var seq__35027_35040 = cljs.core.seq(ks);
var chunk__35028_35041 = null;
var count__35029_35042 = (0);
var i__35030_35043 = (0);
while(true){
if((i__35030_35043 < count__35029_35042)){
var k_35044 = chunk__35028_35041.cljs$core$IIndexed$_nth$arity$2(null,i__35030_35043);
var m35025_35045 = (function (){var G__35031 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35031) : cljs.core.deref.call(null,G__35031));
})();
var G__35032_35046 = m_atom__14230__auto__;
var G__35033_35047 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35025_35045,k_35044,(function (){var G__35034 = k_35044;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35034) : f.call(null,G__35034));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35032_35046,G__35033_35047) : cljs.core.reset_BANG_.call(null,G__35032_35046,G__35033_35047));

var G__35048 = seq__35027_35040;
var G__35049 = chunk__35028_35041;
var G__35050 = count__35029_35042;
var G__35051 = (i__35030_35043 + (1));
seq__35027_35040 = G__35048;
chunk__35028_35041 = G__35049;
count__35029_35042 = G__35050;
i__35030_35043 = G__35051;
continue;
} else {
var temp__4126__auto___35052 = cljs.core.seq(seq__35027_35040);
if(temp__4126__auto___35052){
var seq__35027_35053__$1 = temp__4126__auto___35052;
if(cljs.core.chunked_seq_QMARK_(seq__35027_35053__$1)){
var c__4545__auto___35054 = cljs.core.chunk_first(seq__35027_35053__$1);
var G__35055 = cljs.core.chunk_rest(seq__35027_35053__$1);
var G__35056 = c__4545__auto___35054;
var G__35057 = cljs.core.count(c__4545__auto___35054);
var G__35058 = (0);
seq__35027_35040 = G__35055;
chunk__35028_35041 = G__35056;
count__35029_35042 = G__35057;
i__35030_35043 = G__35058;
continue;
} else {
var k_35059 = cljs.core.first(seq__35027_35053__$1);
var m35025_35060 = (function (){var G__35035 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35035) : cljs.core.deref.call(null,G__35035));
})();
var G__35036_35061 = m_atom__14230__auto__;
var G__35037_35062 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35025_35060,k_35059,(function (){var G__35038 = k_35059;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35038) : f.call(null,G__35038));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35036_35061,G__35037_35062) : cljs.core.reset_BANG_.call(null,G__35036_35061,G__35037_35062));

var G__35063 = cljs.core.next(seq__35027_35053__$1);
var G__35064 = null;
var G__35065 = (0);
var G__35066 = (0);
seq__35027_35040 = G__35063;
chunk__35028_35041 = G__35064;
count__35029_35042 = G__35065;
i__35030_35043 = G__35066;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35039 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35039) : cljs.core.deref.call(null,G__35039));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14230__auto__ = (function (){var G__35083 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35083) : cljs.core.atom.call(null,G__35083));
})();
var seq__35084_35097 = cljs.core.seq(vs);
var chunk__35085_35098 = null;
var count__35086_35099 = (0);
var i__35087_35100 = (0);
while(true){
if((i__35087_35100 < count__35086_35099)){
var v_35101 = chunk__35085_35098.cljs$core$IIndexed$_nth$arity$2(null,i__35087_35100);
var m35082_35102 = (function (){var G__35088 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35088) : cljs.core.deref.call(null,G__35088));
})();
var G__35089_35103 = m_atom__14230__auto__;
var G__35090_35104 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35082_35102,(function (){var G__35091 = v_35101;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35091) : f.call(null,G__35091));
})(),v_35101);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35089_35103,G__35090_35104) : cljs.core.reset_BANG_.call(null,G__35089_35103,G__35090_35104));

var G__35105 = seq__35084_35097;
var G__35106 = chunk__35085_35098;
var G__35107 = count__35086_35099;
var G__35108 = (i__35087_35100 + (1));
seq__35084_35097 = G__35105;
chunk__35085_35098 = G__35106;
count__35086_35099 = G__35107;
i__35087_35100 = G__35108;
continue;
} else {
var temp__4126__auto___35109 = cljs.core.seq(seq__35084_35097);
if(temp__4126__auto___35109){
var seq__35084_35110__$1 = temp__4126__auto___35109;
if(cljs.core.chunked_seq_QMARK_(seq__35084_35110__$1)){
var c__4545__auto___35111 = cljs.core.chunk_first(seq__35084_35110__$1);
var G__35112 = cljs.core.chunk_rest(seq__35084_35110__$1);
var G__35113 = c__4545__auto___35111;
var G__35114 = cljs.core.count(c__4545__auto___35111);
var G__35115 = (0);
seq__35084_35097 = G__35112;
chunk__35085_35098 = G__35113;
count__35086_35099 = G__35114;
i__35087_35100 = G__35115;
continue;
} else {
var v_35116 = cljs.core.first(seq__35084_35110__$1);
var m35082_35117 = (function (){var G__35092 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35092) : cljs.core.deref.call(null,G__35092));
})();
var G__35093_35118 = m_atom__14230__auto__;
var G__35094_35119 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35082_35117,(function (){var G__35095 = v_35116;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35095) : f.call(null,G__35095));
})(),v_35116);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35093_35118,G__35094_35119) : cljs.core.reset_BANG_.call(null,G__35093_35118,G__35094_35119));

var G__35120 = cljs.core.next(seq__35084_35110__$1);
var G__35121 = null;
var G__35122 = (0);
var G__35123 = (0);
seq__35084_35097 = G__35120;
chunk__35085_35098 = G__35121;
count__35086_35099 = G__35122;
i__35087_35100 = G__35123;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35096 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35096) : cljs.core.deref.call(null,G__35096));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__35124){
var vec__35130 = p__35124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(0),null);
var ks = cljs.core.nthnext(vec__35130,(1));
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
var m_atom__14230__auto__ = (function (){var G__35149 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35149) : cljs.core.atom.call(null,G__35149));
})();
var seq__35150_35163 = cljs.core.seq(x);
var chunk__35151_35164 = null;
var count__35152_35165 = (0);
var i__35153_35166 = (0);
while(true){
if((i__35153_35166 < count__35152_35165)){
var vec__35154_35167 = chunk__35151_35164.cljs$core$IIndexed$_nth$arity$2(null,i__35153_35166);
var k_35168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35167,(0),null);
var v_35169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35154_35167,(1),null);
var m35148_35170 = (function (){var G__35155 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35155) : cljs.core.deref.call(null,G__35155));
})();
var G__35156_35171 = m_atom__14230__auto__;
var G__35157_35172 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35148_35170,((typeof k_35168 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35168):k_35168),keywordize_map(v_35169));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35156_35171,G__35157_35172) : cljs.core.reset_BANG_.call(null,G__35156_35171,G__35157_35172));

var G__35173 = seq__35150_35163;
var G__35174 = chunk__35151_35164;
var G__35175 = count__35152_35165;
var G__35176 = (i__35153_35166 + (1));
seq__35150_35163 = G__35173;
chunk__35151_35164 = G__35174;
count__35152_35165 = G__35175;
i__35153_35166 = G__35176;
continue;
} else {
var temp__4126__auto___35177 = cljs.core.seq(seq__35150_35163);
if(temp__4126__auto___35177){
var seq__35150_35178__$1 = temp__4126__auto___35177;
if(cljs.core.chunked_seq_QMARK_(seq__35150_35178__$1)){
var c__4545__auto___35179 = cljs.core.chunk_first(seq__35150_35178__$1);
var G__35180 = cljs.core.chunk_rest(seq__35150_35178__$1);
var G__35181 = c__4545__auto___35179;
var G__35182 = cljs.core.count(c__4545__auto___35179);
var G__35183 = (0);
seq__35150_35163 = G__35180;
chunk__35151_35164 = G__35181;
count__35152_35165 = G__35182;
i__35153_35166 = G__35183;
continue;
} else {
var vec__35158_35184 = cljs.core.first(seq__35150_35178__$1);
var k_35185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35158_35184,(0),null);
var v_35186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35158_35184,(1),null);
var m35148_35187 = (function (){var G__35159 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35159) : cljs.core.deref.call(null,G__35159));
})();
var G__35160_35188 = m_atom__14230__auto__;
var G__35161_35189 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m35148_35187,((typeof k_35185 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_35185):k_35185),keywordize_map(v_35186));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35160_35188,G__35161_35189) : cljs.core.reset_BANG_.call(null,G__35160_35188,G__35161_35189));

var G__35190 = cljs.core.next(seq__35150_35178__$1);
var G__35191 = null;
var G__35192 = (0);
var G__35193 = (0);
seq__35150_35163 = G__35190;
chunk__35151_35164 = G__35191;
count__35152_35165 = G__35192;
i__35153_35166 = G__35193;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__35162 = m_atom__14230__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35162) : cljs.core.deref.call(null,G__35162));
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
var pair__14299__auto__ = temp__4124__auto__;
return cljs.core.val(pair__14299__auto__);
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
var G__35194 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__35195 = cljs.core.next(ks);
m = G__35194;
ks = G__35195;
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
})(),(function (){var iter__4514__auto__ = (function iter__35206(s__35207){
return (new cljs.core.LazySeq(null,(function (){
var s__35207__$1 = s__35207;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35207__$1);
if(temp__4126__auto__){
var s__35207__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35207__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35207__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35209 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35208 = (0);
while(true){
if((i__35208 < size__4513__auto__)){
var vec__35214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__35209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35216 = (i__35208 + (1));
i__35208 = G__35216;
continue;
} else {
var G__35217 = (i__35208 + (1));
i__35208 = G__35217;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35209),iter__35206(cljs.core.chunk_rest(s__35207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35209),null);
}
} else {
var vec__35215 = cljs.core.first(s__35207__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35215,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__35206(cljs.core.rest(s__35207__$2)));
} else {
var G__35218 = cljs.core.rest(s__35207__$2);
s__35207__$1 = G__35218;
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
var G__35219__i = 0, G__35219__a = new Array(arguments.length -  1);
while (G__35219__i < G__35219__a.length) {G__35219__a[G__35219__i] = arguments[G__35219__i + 1]; ++G__35219__i;}
  kvs = new cljs.core.IndexedSeq(G__35219__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__35220){
var m = cljs.core.first(arglist__35220);
var kvs = cljs.core.rest(arglist__35220);
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
var G__35221__i = 0, G__35221__a = new Array(arguments.length -  3);
while (G__35221__i < G__35221__a.length) {G__35221__a[G__35221__i] = arguments[G__35221__i + 3]; ++G__35221__i;}
  args = new cljs.core.IndexedSeq(G__35221__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__35222){
var m = cljs.core.first(arglist__35222);
arglist__35222 = cljs.core.next(arglist__35222);
var key_seq = cljs.core.first(arglist__35222);
arglist__35222 = cljs.core.next(arglist__35222);
var f = cljs.core.first(arglist__35222);
var args = cljs.core.rest(arglist__35222);
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
var k = (function (){var G__35225 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__35225) : key_fn.call(null,G__35225));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__35226 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__35226) : map_fn.call(null,G__35226));
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
if(cljs.core.truth_((function (){var G__35230 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35230) : f.call(null,G__35230));
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
var s = (function (){var G__35246 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35246) : cljs.core.atom.call(null,G__35246));
})();
var iter__4514__auto__ = ((function (s){
return (function iter__35247(s__35248){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35248__$1 = s__35248;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35248__$1);
if(temp__4126__auto__){
var s__35248__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35248__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35248__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35250 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35249 = (0);
while(true){
if((i__35249 < size__4513__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35249);
var id = (function (){var G__35257 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35257) : f.call(null,G__35257));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35258 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35258) : cljs.core.deref.call(null,G__35258));
})(),id))){
cljs.core.chunk_append(b__35250,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__35261 = (i__35249 + (1));
i__35249 = G__35261;
continue;
} else {
var G__35262 = (i__35249 + (1));
i__35249 = G__35262;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35250),iter__35247(cljs.core.chunk_rest(s__35248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35250),null);
}
} else {
var x = cljs.core.first(s__35248__$2);
var id = (function (){var G__35259 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35259) : f.call(null,G__35259));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__35260 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35260) : cljs.core.deref.call(null,G__35260));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__35247(cljs.core.rest(s__35248__$2)));
} else {
var G__35263 = cljs.core.rest(s__35248__$2);
s__35248__$1 = G__35263;
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
var G__35266__i = 0, G__35266__a = new Array(arguments.length -  0);
while (G__35266__i < G__35266__a.length) {G__35266__a[G__35266__i] = arguments[G__35266__i + 0]; ++G__35266__i;}
  colls = new cljs.core.IndexedSeq(G__35266__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__35267){
var colls = cljs.core.seq(arglist__35267);
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
var G__35272__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35273 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__35274 = cljs.core.first(xs);
var G__35275 = cljs.core.next(xs);
coll = G__35273;
x = G__35274;
xs = G__35275;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__35272 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__35276__i = 0, G__35276__a = new Array(arguments.length -  2);
while (G__35276__i < G__35276__a.length) {G__35276__a[G__35276__i] = arguments[G__35276__i + 2]; ++G__35276__i;}
  xs = new cljs.core.IndexedSeq(G__35276__a,0);
} 
return G__35272__delegate.call(this,coll,x,xs);};
G__35272.cljs$lang$maxFixedArity = 2;
G__35272.cljs$lang$applyTo = (function (arglist__35277){
var coll = cljs.core.first(arglist__35277);
arglist__35277 = cljs.core.next(arglist__35277);
var x = cljs.core.first(arglist__35277);
var xs = cljs.core.rest(arglist__35277);
return G__35272__delegate(coll,x,xs);
});
G__35272.cljs$core$IFn$_invoke$arity$variadic = G__35272__delegate;
return G__35272;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__35278 = null;
if (arguments.length > 2) {
var G__35279__i = 0, G__35279__a = new Array(arguments.length -  2);
while (G__35279__i < G__35279__a.length) {G__35279__a[G__35279__i] = arguments[G__35279__i + 2]; ++G__35279__i;}
G__35278 = new cljs.core.IndexedSeq(G__35279__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__35278);
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
var old_val = (function (){var G__35285 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35285) : cljs.core.deref.call(null,G__35285));
})();
var new_val = (function (){var G__35286 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35286) : f.call(null,G__35286));
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
var G__35287__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__35280_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__35280_SHARP_,args);
}));
};
var G__35287 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__35288__i = 0, G__35288__a = new Array(arguments.length -  2);
while (G__35288__i < G__35288__a.length) {G__35288__a[G__35288__i] = arguments[G__35288__i + 2]; ++G__35288__i;}
  args = new cljs.core.IndexedSeq(G__35288__a,0);
} 
return G__35287__delegate.call(this,a,f,args);};
G__35287.cljs$lang$maxFixedArity = 2;
G__35287.cljs$lang$applyTo = (function (arglist__35289){
var a = cljs.core.first(arglist__35289);
arglist__35289 = cljs.core.next(arglist__35289);
var f = cljs.core.first(arglist__35289);
var args = cljs.core.rest(arglist__35289);
return G__35287__delegate(a,f,args);
});
G__35287.cljs$core$IFn$_invoke$arity$variadic = G__35287__delegate;
return G__35287;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__35290 = null;
if (arguments.length > 2) {
var G__35291__i = 0, G__35291__a = new Array(arguments.length -  2);
while (G__35291__i < G__35291__a.length) {G__35291__a[G__35291__i] = arguments[G__35291__i + 2]; ++G__35291__i;}
G__35290 = new cljs.core.IndexedSeq(G__35291__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__35290);
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
var G__35292__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__35292 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__35293__i = 0, G__35293__a = new Array(arguments.length -  2);
while (G__35293__i < G__35293__a.length) {G__35293__a[G__35293__i] = arguments[G__35293__i + 2]; ++G__35293__i;}
  args = new cljs.core.IndexedSeq(G__35293__a,0);
} 
return G__35292__delegate.call(this,f,arg,args);};
G__35292.cljs$lang$maxFixedArity = 2;
G__35292.cljs$lang$applyTo = (function (arglist__35294){
var f = cljs.core.first(arglist__35294);
arglist__35294 = cljs.core.next(arglist__35294);
var arg = cljs.core.first(arglist__35294);
var args = cljs.core.rest(arglist__35294);
return G__35292__delegate(f,arg,args);
});
G__35292.cljs$core$IFn$_invoke$arity$variadic = G__35292__delegate;
return G__35292;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__35295 = null;
if (arguments.length > 2) {
var G__35296__i = 0, G__35296__a = new Array(arguments.length -  2);
while (G__35296__i < G__35296__a.length) {G__35296__a[G__35296__i] = arguments[G__35296__i + 2]; ++G__35296__i;}
G__35295 = new cljs.core.IndexedSeq(G__35296__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__35295);
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
