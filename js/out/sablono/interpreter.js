// Compiled by ClojureScript 0.0-2850 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('sablono.util');
goog.require('clojure.string');

sablono.interpreter.IInterpreter = (function (){var obj36569 = {};
return obj36569;
})();

sablono.interpreter.interpret = (function interpret(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (sablono.interpreter.interpret[(function (){var G__36573 = x__4459__auto__;
return goog.typeOf(G__36573);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (sablono.interpreter.interpret["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});

sablono.interpreter.wrap_form_element = (function wrap_form_element(ctor,display_name){
var G__36581 = (function (){var G__36582 = {"render": (function (){
var this$ = this;
var props = {};
var G__36584_36588 = props;
var G__36585_36589 = this$.props;
var G__36586_36590 = {"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])};
goog.object.extend(G__36584_36588,G__36585_36589,G__36586_36590);

var G__36587 = props;
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__36587) : ctor.call(null,G__36587));
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
var G__36583_36591 = e;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__36583_36591) : handler.call(null,G__36583_36591));

return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){
return cljs.core.name(display_name);
})};
return React.createClass(G__36582);
})();
return React.createFactory(G__36581);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
/**
* @param {...*} var_args
*/
sablono.interpreter.create_element = (function() { 
var create_element__delegate = function (type,props,children){
return ((sablono.util.wrapped_type_QMARK_(type))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,sablono.interpreter.input,cljs.core.constant$keyword$121,sablono.interpreter.option,cljs.core.constant$keyword$120,sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(React.createElement,cljs.core.name(type))).call(null,props,(((cljs.core.sequential_QMARK_(children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))))?cljs.core.first(children):children));
};
var create_element = function (type,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__36592__i = 0, G__36592__a = new Array(arguments.length -  2);
while (G__36592__i < G__36592__a.length) {G__36592__a[G__36592__i] = arguments[G__36592__i + 2]; ++G__36592__i;}
  children = new cljs.core.IndexedSeq(G__36592__a,0);
} 
return create_element__delegate.call(this,type,props,children);};
create_element.cljs$lang$maxFixedArity = 2;
create_element.cljs$lang$applyTo = (function (arglist__36593){
var type = cljs.core.first(arglist__36593);
arglist__36593 = cljs.core.next(arglist__36593);
var props = cljs.core.first(arglist__36593);
var children = cljs.core.rest(arglist__36593);
return create_element__delegate(type,props,children);
});
create_element.cljs$core$IFn$_invoke$arity$variadic = create_element__delegate;
return create_element;
})()
;
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
var vec__36595 = sablono.util.normalize_element(element__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36595,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36595,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36595,(2),null);
var js_attrs = sablono.interpreter.attributes(attrs);
if((cljs.core.sequential_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content)))){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(cljs.core.first(content))], 0));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(content)], 0));
} else {
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([null], 0));

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
