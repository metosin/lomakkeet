// Compiled by ClojureScript 0.0-2727 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('sablono.util');
goog.require('clojure.string');

sablono.interpreter.IInterpreter = (function (){var obj31654 = {};
return obj31654;
})();

sablono.interpreter.interpret = (function interpret(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (sablono.interpreter.interpret[(function (){var G__31658 = x__4895__auto__;
return goog.typeOf(G__31658);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (sablono.interpreter.interpret["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});

sablono.interpreter.wrap_form_element = (function wrap_form_element(ctor,display_name){
var G__31662 = {"render": (function (){
var this$ = this;
return this$.transferPropsTo((function (){var G__31664 = {"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__31664) : ctor.call(null,G__31664));
})());
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
var G__31663_31665 = e;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__31663_31665) : handler.call(null,G__31663_31665));

return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){
return display_name;
})};
return React.createClass(G__31662);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
sablono.interpreter.dom_fn = (function dom_fn(tag){
var temp__4124__auto__ = (React.DOM[cljs.core.name(tag)]);
if(cljs.core.truth_(temp__4124__auto__)){
var dom_fn__$1 = temp__4124__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,sablono.interpreter.input,cljs.core.constant$keyword$123,sablono.interpreter.option,cljs.core.constant$keyword$122,sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag),dom_fn__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Unsupported HTML tag: "),cljs.core.str(cljs.core.name(tag))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$28,tag], null));
}
});
sablono.interpreter.attributes = (function attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((class$ instanceof Array)?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(clojure.string.blank_QMARK_(class$__$1))){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.interpreter.element = (function element(element__$1){
var vec__31671 = sablono.util.normalize_element(element__$1);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(2),null);
var f = sablono.interpreter.dom_fn(tag);
var js_attrs = sablono.interpreter.attributes(attrs);
if((cljs.core.sequential_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content)))){
var G__31672 = js_attrs;
var G__31673 = sablono.interpreter.interpret(cljs.core.first(content));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31672,G__31673) : f.call(null,G__31672,G__31673));
} else {
if(cljs.core.truth_(content)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,js_attrs,sablono.interpreter.interpret(content));
} else {
var G__31674 = js_attrs;
var G__31675 = null;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__31674,G__31675) : f.call(null,G__31674,G__31675));

}
}
});
sablono.interpreter.interpret_seq = (function interpret_seq(s){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});
