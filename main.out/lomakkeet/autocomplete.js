// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.autocomplete');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('lomakkeet.util');
lomakkeet.autocomplete.normalize = (function lomakkeet$autocomplete$normalize(s){
var G__11630 = s;
var G__11630__$1 = (((G__11630 == null))?null:clojure.string.lower_case.call(null,G__11630));
return G__11630__$1;
});
lomakkeet.autocomplete.highlight_string = (function lomakkeet$autocomplete$highlight_string(var_args){
var args11631 = [];
var len__6046__auto___11637 = arguments.length;
var i__6047__auto___11638 = (0);
while(true){
if((i__6047__auto___11638 < len__6046__auto___11637)){
args11631.push((arguments[i__6047__auto___11638]));

var G__11639 = (i__6047__auto___11638 + (1));
i__6047__auto___11638 = G__11639;
continue;
} else {
}
break;
}

var G__11633 = args11631.length;
switch (G__11633) {
case 2:
return lomakkeet.autocomplete.highlight_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lomakkeet.autocomplete.highlight_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11631.length)].join('')));

}
});

lomakkeet.autocomplete.highlight_string.cljs$core$IFn$_invoke$arity$2 = (function (s,query){
return lomakkeet.autocomplete.highlight_string.call(null,s,query,(function (s__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.highlight","span.highlight",-1499625131),s__$1], null);
}));
});

lomakkeet.autocomplete.highlight_string.cljs$core$IFn$_invoke$arity$3 = (function (s,query,wrapper){
var rst = s;
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
while(true){
if(cljs.core.truth_(rst)){
var normalized_rst = lomakkeet.autocomplete.normalize.call(null,rst);
var vec__11634 = cljs.core.reduce.call(null,((function (rst,r,normalized_rst){
return (function (p__11635,term){
var vec__11636 = p__11635;
var i = cljs.core.nth.call(null,vec__11636,(0),null);
var acc = vec__11636;
var x = normalized_rst.indexOf(term);
if((cljs.core.not_EQ_.call(null,x,(-1))) && ((cljs.core._EQ_.call(null,i,(-1))) || ((x < i)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.subs.call(null,rst,x,(x + cljs.core.count.call(null,term)))], null);
} else {
return acc;
}
});})(rst,r,normalized_rst))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),null], null),query);
var i = cljs.core.nth.call(null,vec__11634,(0),null);
var match = cljs.core.nth.call(null,vec__11634,(1),null);
if(cljs.core.not_EQ_.call(null,i,(-1))){
var a = cljs.core.subs.call(null,rst,(0),i);
var b = cljs.core.subs.call(null,rst,i,(i + cljs.core.count.call(null,match)));
var c = cljs.core.subs.call(null,rst,(i + cljs.core.count.call(null,match)));
var G__11641 = c;
var G__11642 = ((cljs.core.seq.call(null,a))?cljs.core.conj.call(null,r,a,wrapper.call(null,b)):cljs.core.conj.call(null,r,wrapper.call(null,b)));
rst = G__11641;
r = G__11642;
continue;
} else {
return cljs.core.conj.call(null,r,rst);
}
} else {
return r;
}
break;
}
});

lomakkeet.autocomplete.highlight_string.cljs$lang$maxFixedArity = 3;
lomakkeet.autocomplete.query_match_QMARK_ = (function lomakkeet$autocomplete$query_match_QMARK_(term_match_fn,v,query){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,term_match_fn,v),query);
});
lomakkeet.autocomplete.matches = (function lomakkeet$autocomplete$matches(term_match_fn,v,query){
var m = cljs.core.group_by.call(null,cljs.core.partial.call(null,term_match_fn,v),query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,m,true),cljs.core.get.call(null,m,false)], null);
});
lomakkeet.autocomplete.default__GT_query = (function lomakkeet$autocomplete$default__GT_query(search){
var G__11644 = search;
var G__11644__$1 = (((G__11644 == null))?null:G__11644.toLowerCase());
var G__11644__$2 = (((G__11644__$1 == null))?null:G__11644__$1.split(/ /));
var G__11644__$3 = (((G__11644__$2 == null))?null:cljs.core.remove.call(null,cljs.core.empty_QMARK_,G__11644__$2));
var G__11644__$4 = (((G__11644__$3 == null))?null:cljs.core.vec.call(null,G__11644__$3));
return G__11644__$4;
});
lomakkeet.autocomplete.default_find_by_selection = (function lomakkeet$autocomplete$default_find_by_selection(data,x){
return cljs.core.some.call(null,(function (v){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("lomakkeet.autocomplete","i","lomakkeet.autocomplete/i",-2094349674).cljs$core$IFn$_invoke$arity$1(v),x)){
return v;
} else {
return null;
}
}),data);
});
lomakkeet.autocomplete.default_group_find_by_selection = (function lomakkeet$autocomplete$default_group_find_by_selection(data,x){
return cljs.core.some.call(null,(function (p__11647){
var vec__11648 = p__11647;
var _ = cljs.core.nth.call(null,vec__11648,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__11648,(1),null);
return cljs.core.some.call(null,((function (vec__11648,_,data__$1){
return (function (v){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("lomakkeet.autocomplete","i","lomakkeet.autocomplete/i",-2094349674).cljs$core$IFn$_invoke$arity$1(v),x)){
return v;
} else {
return null;
}
});})(vec__11648,_,data__$1))
,data__$1);
}),data);
});
/**
 * Fields can be either collection containing multiple key for map,
 * or a single key.
 * If collection is given, returned function will go through keys using some.
 */
lomakkeet.autocomplete.create_matcher_STAR_ = (function lomakkeet$autocomplete$create_matcher_STAR_(fields){
if(cljs.core.sequential_QMARK_.call(null,fields)){
return (function (item,term){
return cljs.core.some.call(null,(function (field){
var G__11651 = item;
var G__11651__$1 = (((G__11651 == null))?null:cljs.core.get.call(null,G__11651,field));
var G__11651__$2 = (((G__11651__$1 == null))?null:cljs.core.not_EQ_.call(null,G__11651__$1.toLowerCase().indexOf(term),(-1)));
return G__11651__$2;
}),fields);
});
} else {
return (function (item,term){
var G__11652 = item;
var G__11652__$1 = (((G__11652 == null))?null:cljs.core.get.call(null,G__11652,fields));
var G__11652__$2 = (((G__11652__$1 == null))?null:cljs.core.not_EQ_.call(null,G__11652__$1.toLowerCase().indexOf(term),(-1)));
return G__11652__$2;
});
}
});

//# sourceMappingURL=autocomplete.js.map