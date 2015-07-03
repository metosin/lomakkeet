// Compiled by ClojureScript 0.0-2913 {}
goog.provide('re_frame.handlers');
goog.require('cljs.core');
goog.require('re_frame.utils');
goog.require('re_frame.db');
/**
* Given a vector of middleware, filter out any nils, and use "comp" to compose the elements.
* v can have nested vectors, and will be flattended before "comp" is applied.
* For convienience, if v a function (assumed to be middleware already), just return it.
* Filtering out nils allows us to create Middlewhere conditionally like this:
* (comp-middleware [pure (when debug? debug)])  ;; that 'when' might leave a nil
* 
*/
re_frame.handlers.comp_middleware = (function comp_middleware(v){
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
if(cljs.core.vector_QMARK_(v)){
var v__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(v));
if(cljs.core.empty_QMARK_(v__$1)){
return cljs.core.identity;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(v__$1))){
return cljs.core.first(v__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,v__$1);

}
}
} else {
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: comp-middleware expects a vector, got: ",v], 0));

}
}
});
re_frame.handlers.id__GT_fn = (function (){var G__26159 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26159) : cljs.core.atom.call(null,G__26159));
})();
re_frame.handlers.lookup_handler = (function lookup_handler(event_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26161 = re_frame.handlers.id__GT_fn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26161) : cljs.core.deref.call(null,G__26161));
})(),event_id);
});
/**
* register a handler for an event.
* This is low level and it is expected that "register-handler" would
* generally be used, see re-frame.core.
*/
re_frame.handlers.register_base = (function() {
var register_base = null;
var register_base__2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_((function (){var G__26166 = re_frame.handlers.id__GT_fn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26166) : cljs.core.deref.call(null,G__26166));
})(),event_id)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: overwriting an event-handler for: ",event_id], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
});
var register_base__3 = (function (event_id,middleware,handler_fn){
var mid_ware = re_frame.handlers.comp_middleware(middleware);
var hander_fn = (function (){var G__26167 = handler_fn;
return (mid_ware.cljs$core$IFn$_invoke$arity$1 ? mid_ware.cljs$core$IFn$_invoke$arity$1(G__26167) : mid_ware.call(null,G__26167));
})();
return register_base.cljs$core$IFn$_invoke$arity$2(event_id,hander_fn);
});
register_base = function(event_id,middleware,handler_fn){
switch(arguments.length){
case 2:
return register_base__2.call(this,event_id,middleware);
case 3:
return register_base__3.call(this,event_id,middleware,handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
register_base.cljs$core$IFn$_invoke$arity$2 = register_base__2;
register_base.cljs$core$IFn$_invoke$arity$3 = register_base__3;
return register_base;
})()
;
/**
* Given an event vector, look up the handler, then call it.
* By default, handlers are not assumed to be pure. They are called with
* two paramters:
* - the `app-db` atom and
* - the event vector
* The handler is assumed to side-effect on the given atom, the return value is ignored.
* To write pure handlers, use the "pure" middleware when registering the handler.
*/
re_frame.handlers.handle = (function handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var handler_fn = re_frame.handlers.lookup_handler(event_id);
if((handler_fn == null)){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no event handler registered for: \"",event_id,"\". Ignoring."], 0));
} else {
try{var G__26172 = re_frame.db.app_db;
var G__26173 = event_v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__26172,G__26173) : handler_fn.call(null,G__26172,G__26173));
}catch (e26171){var e = e26171;
console.error(e);

throw e;
}}
});
