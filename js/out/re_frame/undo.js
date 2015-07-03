// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('reagent.core');
goog.require('re_frame.utils');
re_frame.undo.max_undos = (function (){var G__26017 = (50);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26017) : cljs.core.atom.call(null,G__26017));
})();
re_frame.undo.set_max_undos_BANG_ = (function set_max_undos_BANG_(n){
var G__26020 = re_frame.undo.max_undos;
var G__26021 = n;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26020,G__26021) : cljs.core.reset_BANG_.call(null,G__26020,G__26021));
});
re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_history_BANG_ = (function clear_history_BANG_(){
var G__26030_26038 = re_frame.undo.undo_list;
var G__26031_26039 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26030_26038,G__26031_26039) : cljs.core.reset_BANG_.call(null,G__26030_26038,G__26031_26039));

var G__26032_26040 = re_frame.undo.redo_list;
var G__26033_26041 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26032_26040,G__26033_26041) : cljs.core.reset_BANG_.call(null,G__26032_26040,G__26033_26041));

var G__26034_26042 = re_frame.undo.undo_explain_list;
var G__26035_26043 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26034_26042,G__26035_26043) : cljs.core.reset_BANG_.call(null,G__26034_26042,G__26035_26043));

var G__26036 = re_frame.undo.redo_explain_list;
var G__26037 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26036,G__26037) : cljs.core.reset_BANG_.call(null,G__26036,G__26037));
});
/**
* stores the value currently in app-db, so the user can later undo
*/
re_frame.undo.store_now_BANG_ = (function store_now_BANG_(explanation){
var G__26060_26076 = re_frame.undo.redo_list;
var G__26061_26077 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26060_26076,G__26061_26077) : cljs.core.reset_BANG_.call(null,G__26060_26076,G__26061_26077));

var G__26062_26078 = re_frame.undo.redo_explain_list;
var G__26063_26079 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26062_26078,G__26063_26079) : cljs.core.reset_BANG_.call(null,G__26062_26078,G__26063_26079));

var G__26064_26080 = re_frame.undo.undo_list;
var G__26065_26081 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__26066 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26066) : cljs.core.deref.call(null,G__26066));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__26067 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26067) : cljs.core.deref.call(null,G__26067));
})(),(function (){var G__26068 = re_frame.db.app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26068) : cljs.core.deref.call(null,G__26068));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26064_26080,G__26065_26081) : cljs.core.reset_BANG_.call(null,G__26064_26080,G__26065_26081));

var G__26069_26082 = re_frame.undo.undo_explain_list;
var G__26070_26083 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__26071 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26071) : cljs.core.deref.call(null,G__26071));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__26072 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26072) : cljs.core.deref.call(null,G__26072));
})(),(function (){var G__26073 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26073) : cljs.core.deref.call(null,G__26073));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26069_26082,G__26070_26083) : cljs.core.reset_BANG_.call(null,G__26069_26082,G__26070_26083));

var G__26074 = re_frame.undo.app_explain;
var G__26075 = explanation;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26074,G__26075) : cljs.core.reset_BANG_.call(null,G__26074,G__26075));
});
re_frame.undo.undos_QMARK_ = (function undos_QMARK_(){
return (cljs.core.count((function (){var G__26085 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26085) : cljs.core.deref.call(null,G__26085));
})()) > (0));
});
re_frame.undo.redos_QMARK_ = (function redos_QMARK_(){
return (cljs.core.count((function (){var G__26087 = re_frame.undo.redo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26087) : cljs.core.deref.call(null,G__26087));
})()) > (0));
});
re_frame.subs.register(cljs.core.constant$keyword$127,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$128,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.redos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$129,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__26090 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26090) : cljs.core.deref.call(null,G__26090));
})(),(function (){var G__26091 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26091) : cljs.core.deref.call(null,G__26091));
})());
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$130,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
var G__26093 = re_frame.undo.redo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26093) : cljs.core.deref.call(null,G__26093));
}));
}));
re_frame.undo.undo = (function undo(undos,cur,redos){
var u = (function (){var G__26103 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26103) : cljs.core.deref.call(null,G__26103));
})();
var r = cljs.core.cons((function (){var G__26104 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26104) : cljs.core.deref.call(null,G__26104));
})(),(function (){var G__26105 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26105) : cljs.core.deref.call(null,G__26105));
})());
var G__26106_26112 = cur;
var G__26107_26113 = cljs.core.last(u);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26106_26112,G__26107_26113) : cljs.core.reset_BANG_.call(null,G__26106_26112,G__26107_26113));

var G__26108_26114 = redos;
var G__26109_26115 = r;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26108_26114,G__26109_26115) : cljs.core.reset_BANG_.call(null,G__26108_26114,G__26109_26115));

var G__26110 = undos;
var G__26111 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26110,G__26111) : cljs.core.reset_BANG_.call(null,G__26110,G__26111));
});
/**
* undo until we reach n or run out of undos
*/
re_frame.undo.undo_n = (function undo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.undos_QMARK_())){
re_frame.undo.undo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__26116 = (n - (1));
n = G__26116;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$131,(function handler(_,p__26117){
var vec__26119 = p__26117;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26119,(1),null);
if(!(re_frame.undo.undos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:undo]), but there is nothing to undo."], 0));
} else {
return re_frame.undo.undo_n((function (){var or__3925__auto__ = n;
if(cljs.core.truth_(or__3925__auto__)){
return or__3925__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.undo.redo = (function redo(undos,cur,redos){
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__26129 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26129) : cljs.core.deref.call(null,G__26129));
})(),(function (){var G__26130 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26130) : cljs.core.deref.call(null,G__26130));
})());
var r = (function (){var G__26131 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26131) : cljs.core.deref.call(null,G__26131));
})();
var G__26132_26138 = cur;
var G__26133_26139 = cljs.core.first(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26132_26138,G__26133_26139) : cljs.core.reset_BANG_.call(null,G__26132_26138,G__26133_26139));

var G__26134_26140 = redos;
var G__26135_26141 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26134_26140,G__26135_26141) : cljs.core.reset_BANG_.call(null,G__26134_26140,G__26135_26141));

var G__26136 = undos;
var G__26137 = u;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26136,G__26137) : cljs.core.reset_BANG_.call(null,G__26136,G__26137));
});
/**
* redo until we reach n or run out of redos
*/
re_frame.undo.redo_n = (function redo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.redos_QMARK_())){
re_frame.undo.redo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__26142 = (n - (1));
n = G__26142;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$132,(function handler(_,p__26143){
var vec__26145 = p__26143;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26145,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26145,(1),null);
if(!(re_frame.undo.redos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:redo]), but there is nothing to redo."], 0));
} else {
return re_frame.undo.redo_n((function (){var or__3925__auto__ = n;
if(cljs.core.truth_(or__3925__auto__)){
return or__3925__auto__;
} else {
return (1);
}
})());
}
}));
