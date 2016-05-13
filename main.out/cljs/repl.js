// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19068_19082 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19069_19083 = null;
var count__19070_19084 = (0);
var i__19071_19085 = (0);
while(true){
if((i__19071_19085 < count__19070_19084)){
var f_19086 = cljs.core._nth.call(null,chunk__19069_19083,i__19071_19085);
cljs.core.println.call(null,"  ",f_19086);

var G__19087 = seq__19068_19082;
var G__19088 = chunk__19069_19083;
var G__19089 = count__19070_19084;
var G__19090 = (i__19071_19085 + (1));
seq__19068_19082 = G__19087;
chunk__19069_19083 = G__19088;
count__19070_19084 = G__19089;
i__19071_19085 = G__19090;
continue;
} else {
var temp__4425__auto___19091 = cljs.core.seq.call(null,seq__19068_19082);
if(temp__4425__auto___19091){
var seq__19068_19092__$1 = temp__4425__auto___19091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19068_19092__$1)){
var c__5791__auto___19093 = cljs.core.chunk_first.call(null,seq__19068_19092__$1);
var G__19094 = cljs.core.chunk_rest.call(null,seq__19068_19092__$1);
var G__19095 = c__5791__auto___19093;
var G__19096 = cljs.core.count.call(null,c__5791__auto___19093);
var G__19097 = (0);
seq__19068_19082 = G__19094;
chunk__19069_19083 = G__19095;
count__19070_19084 = G__19096;
i__19071_19085 = G__19097;
continue;
} else {
var f_19098 = cljs.core.first.call(null,seq__19068_19092__$1);
cljs.core.println.call(null,"  ",f_19098);

var G__19099 = cljs.core.next.call(null,seq__19068_19092__$1);
var G__19100 = null;
var G__19101 = (0);
var G__19102 = (0);
seq__19068_19082 = G__19099;
chunk__19069_19083 = G__19100;
count__19070_19084 = G__19101;
i__19071_19085 = G__19102;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19103 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19103);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19103)))?cljs.core.second.call(null,arglists_19103):arglists_19103));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19072 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19073 = null;
var count__19074 = (0);
var i__19075 = (0);
while(true){
if((i__19075 < count__19074)){
var vec__19076 = cljs.core._nth.call(null,chunk__19073,i__19075);
var name = cljs.core.nth.call(null,vec__19076,(0),null);
var map__19077 = cljs.core.nth.call(null,vec__19076,(1),null);
var map__19077__$1 = ((((!((map__19077 == null)))?((((map__19077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19077):map__19077);
var doc = cljs.core.get.call(null,map__19077__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19077__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19104 = seq__19072;
var G__19105 = chunk__19073;
var G__19106 = count__19074;
var G__19107 = (i__19075 + (1));
seq__19072 = G__19104;
chunk__19073 = G__19105;
count__19074 = G__19106;
i__19075 = G__19107;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19072);
if(temp__4425__auto__){
var seq__19072__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19072__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__19072__$1);
var G__19108 = cljs.core.chunk_rest.call(null,seq__19072__$1);
var G__19109 = c__5791__auto__;
var G__19110 = cljs.core.count.call(null,c__5791__auto__);
var G__19111 = (0);
seq__19072 = G__19108;
chunk__19073 = G__19109;
count__19074 = G__19110;
i__19075 = G__19111;
continue;
} else {
var vec__19079 = cljs.core.first.call(null,seq__19072__$1);
var name = cljs.core.nth.call(null,vec__19079,(0),null);
var map__19080 = cljs.core.nth.call(null,vec__19079,(1),null);
var map__19080__$1 = ((((!((map__19080 == null)))?((((map__19080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19080):map__19080);
var doc = cljs.core.get.call(null,map__19080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19112 = cljs.core.next.call(null,seq__19072__$1);
var G__19113 = null;
var G__19114 = (0);
var G__19115 = (0);
seq__19072 = G__19112;
chunk__19073 = G__19113;
count__19074 = G__19114;
i__19075 = G__19115;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map