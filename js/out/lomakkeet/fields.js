// Compiled by ClojureScript 0.0-2727 {}
goog.provide('lomakkeet.fields');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('schema.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('schema.coerce');
goog.require('sablono.core');
goog.require('om.core');
goog.require('schema.utils');
/**
* @param {...*} var_args
*/
lomakkeet.fields.get_in_schema = (function() { 
var get_in_schema__delegate = function (schema__$1,ks,p__22285){
var vec__22287 = p__22285;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22287,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22287,not_found){
return (function (acc,k){
var or__3758__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,schema.core.optional_key(k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,schema.core.required_key(k)));
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return not_found;
}
}
});})(vec__22287,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22285 = null;
if (arguments.length > 2) {
var G__22288__i = 0, G__22288__a = new Array(arguments.length -  2);
while (G__22288__i < G__22288__a.length) {G__22288__a[G__22288__i] = arguments[G__22288__i + 2]; ++G__22288__i;}
  p__22285 = new cljs.core.IndexedSeq(G__22288__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22285);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22289){
var schema__$1 = cljs.core.first(arglist__22289);
arglist__22289 = cljs.core.next(arglist__22289);
var ks = cljs.core.first(arglist__22289);
var p__22285 = cljs.core.rest(arglist__22289);
return get_in_schema__delegate(schema__$1,ks,p__22285);
});
get_in_schema.cljs$core$IFn$_invoke$arity$variadic = get_in_schema__delegate;
return get_in_schema;
})()
;
lomakkeet.fields.chan_QMARK_ = (function chan_QMARK_(v){
return (v instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
/**
* Dissociates an entry from a nested associative structure returning a new
* nested structure. keys is a sequence of keys. Any empty maps that result
* will not be present in the new structure.
*/
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22290){
var vec__22294 = p__22290;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22294,(0),null);
var ks = cljs.core.nthnext(vec__22294,(1));
var keys = vec__22294;
if(ks){
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var nextmap = temp__4124__auto__;
var newmap = dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
lomakkeet.fields.empty_cb = (function empty_cb(p__22295){
var map__22297 = p__22295;
var map__22297__$1 = ((cljs.core.seq_QMARK_(map__22297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22297):map__22297);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,cljs.core.constant$keyword$147);
return ((function (map__22297,map__22297__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$146,ks], null));
});
;})(map__22297,map__22297__$1,ks,ch))
});

var ufv___22342 = schema.utils.use_fn_validation;
var output_schema22299_22343 = schema.core.Any;
var input_schema22300_22344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22301_22345 = schema.core.checker(input_schema22300_22344);
var output_checker22302_22346 = schema.core.checker(output_schema22299_22343);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function emptyable_input(G__22303,G__22304,G__22305){
var validate__12088__auto__ = ufv___22342.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22347 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22303,G__22304,G__22305], null);
var temp__4126__auto___22348 = (function (){var G__22324 = args__12089__auto___22347;
return (input_checker22301_22345.cljs$core$IFn$_invoke$arity$1 ? input_checker22301_22345.cljs$core$IFn$_invoke$arity$1(G__22324) : input_checker22301_22345.call(null,G__22324));
})();
if(cljs.core.truth_(temp__4126__auto___22348)){
var error__12090__auto___22349 = temp__4126__auto___22348;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22349], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22349,cljs.core.constant$keyword$66,args__12089__auto___22347,cljs.core.constant$keyword$67,input_schema22300_22344,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var state = G__22303;
var owner = G__22304;
var G__22326 = G__22305;
var map__22327 = G__22326;
var map__22327__$1 = ((cljs.core.seq_QMARK_(map__22327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22327):map__22327);
var opts = map__22327__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327__$1,cljs.core.constant$keyword$149);
var state__$1 = state;
var owner__$1 = owner;
var G__22326__$1 = G__22326;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22328 = G__22326__$1;
var map__22328__$1 = ((cljs.core.seq_QMARK_(map__22328))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22328):map__22328);
var opts__$1 = map__22328__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22328__$1,cljs.core.constant$keyword$149);
if(typeof lomakkeet.fields.t22329 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22329 = (function (G__22304,owner,validate__12088__auto__,output_checker22302,input_checker22301,map__22328,emptyable_input,output_schema22299,G__22326,input_schema22300,real_input,state,G__22305,G__22303,map__22327,opts,ufv__,meta22330){
this.G__22304 = G__22304;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.output_checker22302 = output_checker22302;
this.input_checker22301 = input_checker22301;
this.map__22328 = map__22328;
this.emptyable_input = emptyable_input;
this.output_schema22299 = output_schema22299;
this.G__22326 = G__22326;
this.input_schema22300 = input_schema22300;
this.real_input = real_input;
this.state = state;
this.G__22305 = G__22305;
this.G__22303 = G__22303;
this.map__22327 = map__22327;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22330 = meta22330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22329.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22329.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

lomakkeet.fields.t22329.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22329.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22332 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22332))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22332], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22332))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22333 = {"className": "input-group-btn"};
var G__22334 = (function (){var G__22335 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22336 = "\u00D7";
return React.DOM.button(G__22335,G__22336);
})();
return React.DOM.span(G__22333,G__22334);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22332),(function (){var G__22337 = {"className": "input-group-btn"};
var G__22338 = (function (){var G__22339 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22340 = "\u00D7";
return React.DOM.button(G__22339,G__22340);
})();
return React.DOM.span(G__22337,G__22338);
})()], null))));
});})(state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

lomakkeet.fields.t22329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function (_22331){
var self__ = this;
var _22331__$1 = this;
return self__.meta22330;
});})(state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

lomakkeet.fields.t22329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function (_22331,meta22330__$1){
var self__ = this;
var _22331__$1 = this;
return (new lomakkeet.fields.t22329(self__.G__22304,self__.owner,self__.validate__12088__auto__,self__.output_checker22302,self__.input_checker22301,self__.map__22328,self__.emptyable_input,self__.output_schema22299,self__.G__22326,self__.input_schema22300,self__.real_input,self__.state,self__.G__22305,self__.G__22303,self__.map__22327,self__.opts,self__.ufv__,meta22330__$1));
});})(state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

lomakkeet.fields.t22329.cljs$lang$type = true;

lomakkeet.fields.t22329.cljs$lang$ctorStr = "lomakkeet.fields/t22329";

lomakkeet.fields.t22329.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22329");
});})(state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

lomakkeet.fields.__GT_t22329 = ((function (state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346){
return (function __GT_t22329(G__22304__$1,owner__$3,validate__12088__auto____$1,output_checker22302__$1,input_checker22301__$1,map__22328__$2,emptyable_input__$1,output_schema22299__$1,G__22326__$2,input_schema22300__$1,real_input__$2,state__$3,G__22305__$1,G__22303__$1,map__22327__$2,opts__$2,ufv____$1,meta22330){
return (new lomakkeet.fields.t22329(G__22304__$1,owner__$3,validate__12088__auto____$1,output_checker22302__$1,input_checker22301__$1,map__22328__$2,emptyable_input__$1,output_schema22299__$1,G__22326__$2,input_schema22300__$1,real_input__$2,state__$3,G__22305__$1,G__22303__$1,map__22327__$2,opts__$2,ufv____$1,meta22330));
});})(state__$2,owner__$2,map__22328,map__22328__$1,opts__$1,real_input__$1,state,owner,G__22326,map__22327,map__22327__$1,opts,real_input,validate__12088__auto__,ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

}

return (new lomakkeet.fields.t22329(G__22304,owner__$2,validate__12088__auto__,output_checker22302_22346,input_checker22301_22345,map__22328__$1,emptyable_input,output_schema22299_22343,G__22326__$1,input_schema22300_22344,real_input__$1,state__$2,G__22305,G__22303,map__22327__$1,opts__$1,ufv___22342,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22350 = (function (){var G__22341 = o__12091__auto__;
return (output_checker22302_22346.cljs$core$IFn$_invoke$arity$1 ? output_checker22302_22346.cljs$core$IFn$_invoke$arity$1(G__22341) : output_checker22302_22346.call(null,G__22341));
})();
if(cljs.core.truth_(temp__4126__auto___22350)){
var error__12090__auto___22351 = temp__4126__auto___22350;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22351], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22351,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22299_22343,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22342,output_schema22299_22343,input_schema22300_22344,input_checker22301_22345,output_checker22302_22346))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22299_22343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22300_22344], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20339__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20339__auto__,m22298){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20339__auto__,m22298);
});
__GT_emptyable_input = function(cursor__20339__auto__,m22298){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20339__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20339__auto__,m22298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22404 = schema.utils.use_fn_validation;
var output_schema22353_22405 = schema.core.Any;
var input_schema22354_22406 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22355_22407 = schema.core.checker(input_schema22354_22406);
var output_checker22356_22408 = schema.core.checker(output_schema22353_22405);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function default_form_group(G__22357,G__22358,G__22359){
var validate__12088__auto__ = ufv___22404.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22409 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22357,G__22358,G__22359], null);
var temp__4126__auto___22410 = (function (){var G__22382 = args__12089__auto___22409;
return (input_checker22355_22407.cljs$core$IFn$_invoke$arity$1 ? input_checker22355_22407.cljs$core$IFn$_invoke$arity$1(G__22382) : input_checker22355_22407.call(null,G__22382));
})();
if(cljs.core.truth_(temp__4126__auto___22410)){
var error__12090__auto___22411 = temp__4126__auto___22410;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22411], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22411,cljs.core.constant$keyword$66,args__12089__auto___22409,cljs.core.constant$keyword$67,input_schema22354_22406,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22385 = G__22357;
var map__22387 = G__22385;
var map__22387__$1 = ((cljs.core.seq_QMARK_(map__22387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22387):map__22387);
var input_state = map__22387__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22387__$1,cljs.core.constant$keyword$65);
var owner = G__22358;
var G__22386 = G__22359;
var map__22388 = G__22386;
var map__22388__$1 = ((cljs.core.seq_QMARK_(map__22388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22388):map__22388);
var opts = map__22388__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,cljs.core.constant$keyword$150);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22388__$1,cljs.core.constant$keyword$151,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,cljs.core.constant$keyword$137);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22388__$1,cljs.core.constant$keyword$124);
var G__22385__$1 = G__22385;
var owner__$1 = owner;
var G__22386__$1 = G__22386;
while(true){
var map__22389 = G__22385__$1;
var map__22389__$1 = ((cljs.core.seq_QMARK_(map__22389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22389):map__22389);
var input_state__$1 = map__22389__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22389__$1,cljs.core.constant$keyword$65);
var owner__$2 = owner__$1;
var map__22390 = G__22386__$1;
var map__22390__$1 = ((cljs.core.seq_QMARK_(map__22390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22390):map__22390);
var opts__$1 = map__22390__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.constant$keyword$150);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22390__$1,cljs.core.constant$keyword$151,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.constant$keyword$137);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.constant$keyword$124);
if(typeof lomakkeet.fields.t22391 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22391 = (function (input,default_form_group,map__22389,owner,output_checker22356,validate__12088__auto__,map__22387,input_state,input_checker22355,map__22388,input_schema22354,G__22359,G__22386,map__22390,G__22385,size,output_schema22353,G__22357,label,G__22358,opts,ufv__,help_text,error,meta22392){
this.input = input;
this.default_form_group = default_form_group;
this.map__22389 = map__22389;
this.owner = owner;
this.output_checker22356 = output_checker22356;
this.validate__12088__auto__ = validate__12088__auto__;
this.map__22387 = map__22387;
this.input_state = input_state;
this.input_checker22355 = input_checker22355;
this.map__22388 = map__22388;
this.input_schema22354 = input_schema22354;
this.G__22359 = G__22359;
this.G__22386 = G__22386;
this.map__22390 = map__22390;
this.G__22385 = G__22385;
this.size = size;
this.output_schema22353 = output_schema22353;
this.G__22357 = G__22357;
this.label = label;
this.G__22358 = G__22358;
this.opts = opts;
this.ufv__ = ufv__;
this.help_text = help_text;
this.error = error;
this.meta22392 = meta22392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22391.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22391.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

lomakkeet.fields.t22391.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22391.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22395 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22400 = cljs.core.PersistentVector.EMPTY;
var G__22400__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22400,"has-error"):G__22400);
var G__22400__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22400__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22400__$1);
return G__22400__$2;
})()], null))};
var G__22396 = (function (){var attrs22394 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs22394))?sablono.interpreter.attributes(attrs22394):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22394))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22394),":"], null))));
})();
var G__22397 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,self__.opts,cljs.core.constant$keyword$53,s], null)));
var G__22398 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22401 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22401))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22401], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22401))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22401)], null))));
})():null);
var G__22399 = (cljs.core.truth_((function (){var and__3746__auto__ = !(cljs.core.empty_QMARK_);
if(and__3746__auto__){
return self__.error;
} else {
return and__3746__auto__;
}
})())?(function (){var attrs22402 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22402))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22402], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22402))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22402)], null))));
})():null);
return React.DOM.div(G__22395,G__22396,G__22397,G__22398,G__22399);
});})(map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

lomakkeet.fields.t22391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function (_22393){
var self__ = this;
var _22393__$1 = this;
return self__.meta22392;
});})(map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

lomakkeet.fields.t22391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function (_22393,meta22392__$1){
var self__ = this;
var _22393__$1 = this;
return (new lomakkeet.fields.t22391(self__.input,self__.default_form_group,self__.map__22389,self__.owner,self__.output_checker22356,self__.validate__12088__auto__,self__.map__22387,self__.input_state,self__.input_checker22355,self__.map__22388,self__.input_schema22354,self__.G__22359,self__.G__22386,self__.map__22390,self__.G__22385,self__.size,self__.output_schema22353,self__.G__22357,self__.label,self__.G__22358,self__.opts,self__.ufv__,self__.help_text,self__.error,meta22392__$1));
});})(map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

lomakkeet.fields.t22391.cljs$lang$type = true;

lomakkeet.fields.t22391.cljs$lang$ctorStr = "lomakkeet.fields/t22391";

lomakkeet.fields.t22391.cljs$lang$ctorPrWriter = ((function (map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22391");
});})(map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

lomakkeet.fields.__GT_t22391 = ((function (map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408){
return (function __GT_t22391(input__$2,default_form_group__$1,map__22389__$2,owner__$3,output_checker22356__$1,validate__12088__auto____$1,map__22387__$2,input_state__$2,input_checker22355__$1,map__22388__$2,input_schema22354__$1,G__22359__$1,G__22386__$2,map__22390__$2,G__22385__$2,size__$2,output_schema22353__$1,G__22357__$1,label__$2,G__22358__$1,opts__$2,ufv____$1,help_text__$2,error__$2,meta22392){
return (new lomakkeet.fields.t22391(input__$2,default_form_group__$1,map__22389__$2,owner__$3,output_checker22356__$1,validate__12088__auto____$1,map__22387__$2,input_state__$2,input_checker22355__$1,map__22388__$2,input_schema22354__$1,G__22359__$1,G__22386__$2,map__22390__$2,G__22385__$2,size__$2,output_schema22353__$1,G__22357__$1,label__$2,G__22358__$1,opts__$2,ufv____$1,help_text__$2,error__$2,meta22392));
});})(map__22389,map__22389__$1,input_state__$1,error__$1,owner__$2,map__22390,map__22390__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22385,map__22387,map__22387__$1,input_state,error,owner,G__22386,map__22388,map__22388__$1,opts,help_text,size,label,input,validate__12088__auto__,ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

}

return (new lomakkeet.fields.t22391(input__$1,default_form_group,map__22389__$1,owner__$2,output_checker22356_22408,validate__12088__auto__,map__22387__$1,input_state__$1,input_checker22355_22407,map__22388__$1,input_schema22354_22406,G__22359,G__22386__$1,map__22390__$1,G__22385__$1,size__$1,output_schema22353_22405,G__22357,label__$1,G__22358,opts__$1,ufv___22404,help_text__$1,error__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22412 = (function (){var G__22403 = o__12091__auto__;
return (output_checker22356_22408.cljs$core$IFn$_invoke$arity$1 ? output_checker22356_22408.cljs$core$IFn$_invoke$arity$1(G__22403) : output_checker22356_22408.call(null,G__22403));
})();
if(cljs.core.truth_(temp__4126__auto___22412)){
var error__12090__auto___22413 = temp__4126__auto___22412;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22413], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22413,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22353_22405,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22404,output_schema22353_22405,input_schema22354_22406,input_checker22355_22407,output_checker22356_22408))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22353_22405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22354_22406], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20339__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20339__auto__,m22352){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20339__auto__,m22352);
});
__GT_default_form_group = function(cursor__20339__auto__,m22352){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20339__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20339__auto__,m22352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22414){
var map__22420 = p__22414;
var map__22420__$1 = ((cljs.core.seq_QMARK_(map__22420))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22420):map__22420);
var opts = map__22420__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,cljs.core.constant$keyword$146);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,cljs.core.constant$keyword$152);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,cljs.core.constant$keyword$153);
var map__22421 = form_state;
var map__22421__$1 = ((cljs.core.seq_QMARK_(map__22421))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22421):map__22421);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421__$1,cljs.core.constant$keyword$67);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421__$1,cljs.core.constant$keyword$154);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22421__$1,cljs.core.constant$keyword$66);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$66,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22422 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22422) : cljs.core.deref.call(null,G__22422));
})(),ks),cljs.core.constant$keyword$65,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22423 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22423) : cljs.core.deref.call(null,G__22423));
})(),ks):null),cljs.core.constant$keyword$67,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22424 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22424) : cljs.core.deref.call(null,G__22424));
})(),ks):null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$53),cljs.core.constant$keyword$53,cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(opts)], null));
});
lomakkeet.fields.input_input = (function input_input(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,"text",cljs.core.constant$keyword$66,(function (){var or__3758__auto__ = value;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$156,cb], null)], null);
});
lomakkeet.fields.input_textarea = (function input_textarea(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,(function (){var or__3758__auto__ = value;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$156,cb], null)], null);
});
lomakkeet.fields.input_static = (function input_static(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,value], null);
});

var ufv___22465 = schema.utils.use_fn_validation;
var output_schema22426_22466 = schema.core.Any;
var input_schema22427_22467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22428_22468 = schema.core.checker(input_schema22427_22467);
var output_checker22429_22469 = schema.core.checker(output_schema22426_22466);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function input_STAR_(G__22430,G__22431,G__22432){
var validate__12088__auto__ = ufv___22465.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22430,G__22431,G__22432], null);
var temp__4126__auto___22471 = (function (){var G__22449 = args__12089__auto___22470;
return (input_checker22428_22468.cljs$core$IFn$_invoke$arity$1 ? input_checker22428_22468.cljs$core$IFn$_invoke$arity$1(G__22449) : input_checker22428_22468.call(null,G__22449));
})();
if(cljs.core.truth_(temp__4126__auto___22471)){
var error__12090__auto___22472 = temp__4126__auto___22471;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22472], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22472,cljs.core.constant$keyword$66,args__12089__auto___22470,cljs.core.constant$keyword$67,input_schema22427_22467,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22452 = G__22430;
var map__22454 = G__22452;
var map__22454__$1 = ((cljs.core.seq_QMARK_(map__22454))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22454):map__22454);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22454__$1,cljs.core.constant$keyword$66);
var owner = G__22431;
var G__22453 = G__22432;
var map__22455 = G__22453;
var map__22455__$1 = ((cljs.core.seq_QMARK_(map__22455))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22455):map__22455);
var opts = map__22455__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22455__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22455__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22455__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22455__$1,cljs.core.constant$keyword$147);
var G__22452__$1 = G__22452;
var owner__$1 = owner;
var G__22453__$1 = G__22453;
while(true){
var map__22456 = G__22452__$1;
var map__22456__$1 = ((cljs.core.seq_QMARK_(map__22456))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22456):map__22456);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22456__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22457 = G__22453__$1;
var map__22457__$1 = ((cljs.core.seq_QMARK_(map__22457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22457):map__22457);
var opts__$1 = map__22457__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22457__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22457__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22458 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22458 = (function (G__22453,map__22456,G__22432,owner,G__22431,validate__12088__auto__,output_checker22429,input_STAR_,el,input_checker22428,output_schema22426,ks,value,G__22430,transform_value,map__22454,map__22455,ch,G__22452,map__22457,opts,input_schema22427,ufv__,meta22459){
this.G__22453 = G__22453;
this.map__22456 = map__22456;
this.G__22432 = G__22432;
this.owner = owner;
this.G__22431 = G__22431;
this.validate__12088__auto__ = validate__12088__auto__;
this.output_checker22429 = output_checker22429;
this.input_STAR_ = input_STAR_;
this.el = el;
this.input_checker22428 = input_checker22428;
this.output_schema22426 = output_schema22426;
this.ks = ks;
this.value = value;
this.G__22430 = G__22430;
this.transform_value = transform_value;
this.map__22454 = map__22454;
this.map__22455 = map__22455;
this.ch = ch;
this.G__22452 = G__22452;
this.map__22457 = map__22457;
this.opts = opts;
this.input_schema22427 = input_schema22427;
this.ufv__ = ufv__;
this.meta22459 = meta22459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22458.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22458.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

lomakkeet.fields.t22458.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22458.prototype.om$core$IRender$render$arity$1 = ((function (map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22461 = (function (){var G__22463 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22463) : self__.transform_value.call(null,G__22463));
})();
var G__22462 = ((function (G__22461,___$1,map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(G__22461,___$1,map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22461,G__22462) : self__.el.call(null,G__22461,G__22462));
})());
});})(map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

lomakkeet.fields.t22458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function (_22460){
var self__ = this;
var _22460__$1 = this;
return self__.meta22459;
});})(map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

lomakkeet.fields.t22458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function (_22460,meta22459__$1){
var self__ = this;
var _22460__$1 = this;
return (new lomakkeet.fields.t22458(self__.G__22453,self__.map__22456,self__.G__22432,self__.owner,self__.G__22431,self__.validate__12088__auto__,self__.output_checker22429,self__.input_STAR_,self__.el,self__.input_checker22428,self__.output_schema22426,self__.ks,self__.value,self__.G__22430,self__.transform_value,self__.map__22454,self__.map__22455,self__.ch,self__.G__22452,self__.map__22457,self__.opts,self__.input_schema22427,self__.ufv__,meta22459__$1));
});})(map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

lomakkeet.fields.t22458.cljs$lang$type = true;

lomakkeet.fields.t22458.cljs$lang$ctorStr = "lomakkeet.fields/t22458";

lomakkeet.fields.t22458.cljs$lang$ctorPrWriter = ((function (map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22458");
});})(map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

lomakkeet.fields.__GT_t22458 = ((function (map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469){
return (function __GT_t22458(G__22453__$2,map__22456__$2,G__22432__$1,owner__$3,G__22431__$1,validate__12088__auto____$1,output_checker22429__$1,input_STAR___$1,el__$2,input_checker22428__$1,output_schema22426__$1,ks__$2,value__$2,G__22430__$1,transform_value__$2,map__22454__$2,map__22455__$2,ch__$2,G__22452__$2,map__22457__$2,opts__$2,input_schema22427__$1,ufv____$1,meta22459){
return (new lomakkeet.fields.t22458(G__22453__$2,map__22456__$2,G__22432__$1,owner__$3,G__22431__$1,validate__12088__auto____$1,output_checker22429__$1,input_STAR___$1,el__$2,input_checker22428__$1,output_schema22426__$1,ks__$2,value__$2,G__22430__$1,transform_value__$2,map__22454__$2,map__22455__$2,ch__$2,G__22452__$2,map__22457__$2,opts__$2,input_schema22427__$1,ufv____$1,meta22459));
});})(map__22456,map__22456__$1,value__$1,owner__$2,map__22457,map__22457__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22452,map__22454,map__22454__$1,value,owner,G__22453,map__22455,map__22455__$1,opts,transform_value,el,ks,ch,validate__12088__auto__,ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

}

return (new lomakkeet.fields.t22458(G__22453__$1,map__22456__$1,G__22432,owner__$2,G__22431,validate__12088__auto__,output_checker22429_22469,input_STAR_,el__$1,input_checker22428_22468,output_schema22426_22466,ks__$1,value__$1,G__22430,transform_value__$1,map__22454__$1,map__22455__$1,ch__$1,G__22452__$1,map__22457__$1,opts__$1,input_schema22427_22467,ufv___22465,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22473 = (function (){var G__22464 = o__12091__auto__;
return (output_checker22429_22469.cljs$core$IFn$_invoke$arity$1 ? output_checker22429_22469.cljs$core$IFn$_invoke$arity$1(G__22464) : output_checker22429_22469.call(null,G__22464));
})();
if(cljs.core.truth_(temp__4126__auto___22473)){
var error__12090__auto___22474 = temp__4126__auto___22473;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22474], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22474,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22426_22466,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22465,output_schema22426_22466,input_schema22427_22467,input_checker22428_22468,output_checker22429_22469))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22426_22466,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22427_22467], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20339__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20339__auto__,m22425){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20339__auto__,m22425);
});
__GT_input_STAR_ = function(cursor__20339__auto__,m22425){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20339__auto__,m22425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_input_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_input_STAR___1;
__GT_input_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_input_STAR___2;
return __GT_input_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.input = (function() { 
var input__delegate = function (form,label,ks,p__22475){
var vec__22477 = p__22475;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22477,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22475 = null;
if (arguments.length > 3) {
var G__22478__i = 0, G__22478__a = new Array(arguments.length -  3);
while (G__22478__i < G__22478__a.length) {G__22478__a[G__22478__i] = arguments[G__22478__i + 3]; ++G__22478__i;}
  p__22475 = new cljs.core.IndexedSeq(G__22478__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22475);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22479){
var form = cljs.core.first(arglist__22479);
arglist__22479 = cljs.core.next(arglist__22479);
var label = cljs.core.first(arglist__22479);
arglist__22479 = cljs.core.next(arglist__22479);
var ks = cljs.core.first(arglist__22479);
var p__22475 = cljs.core.rest(arglist__22479);
return input__delegate(form,label,ks,p__22475);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22480){
var vec__22482 = p__22480;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22480 = null;
if (arguments.length > 3) {
var G__22483__i = 0, G__22483__a = new Array(arguments.length -  3);
while (G__22483__i < G__22483__a.length) {G__22483__a[G__22483__i] = arguments[G__22483__i + 3]; ++G__22483__i;}
  p__22480 = new cljs.core.IndexedSeq(G__22483__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22480);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22484){
var form = cljs.core.first(arglist__22484);
arglist__22484 = cljs.core.next(arglist__22484);
var label = cljs.core.first(arglist__22484);
arglist__22484 = cljs.core.next(arglist__22484);
var ks = cljs.core.first(arglist__22484);
var p__22480 = cljs.core.rest(arglist__22484);
return textarea__delegate(form,label,ks,p__22480);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__22485){
var vec__22487 = p__22485;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__22485 = null;
if (arguments.length > 3) {
var G__22488__i = 0, G__22488__a = new Array(arguments.length -  3);
while (G__22488__i < G__22488__a.length) {G__22488__a[G__22488__i] = arguments[G__22488__i + 3]; ++G__22488__i;}
  p__22485 = new cljs.core.IndexedSeq(G__22488__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__22485);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__22489){
var form = cljs.core.first(arglist__22489);
arglist__22489 = cljs.core.next(arglist__22489);
var label = cljs.core.first(arglist__22489);
arglist__22489 = cljs.core.next(arglist__22489);
var ks = cljs.core.first(arglist__22489);
var p__22485 = cljs.core.rest(arglist__22489);
return static$__delegate(form,label,ks,p__22485);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___22526 = schema.utils.use_fn_validation;
var output_schema22491_22527 = schema.core.Any;
var input_schema22492_22528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22493_22529 = schema.core.checker(input_schema22492_22528);
var output_checker22494_22530 = schema.core.checker(output_schema22491_22527);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function checkbox_STAR_(G__22495,G__22496,G__22497){
var validate__12088__auto__ = ufv___22526.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22531 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22495,G__22496,G__22497], null);
var temp__4126__auto___22532 = (function (){var G__22512 = args__12089__auto___22531;
return (input_checker22493_22529.cljs$core$IFn$_invoke$arity$1 ? input_checker22493_22529.cljs$core$IFn$_invoke$arity$1(G__22512) : input_checker22493_22529.call(null,G__22512));
})();
if(cljs.core.truth_(temp__4126__auto___22532)){
var error__12090__auto___22533 = temp__4126__auto___22532;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22533], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22533,cljs.core.constant$keyword$66,args__12089__auto___22531,cljs.core.constant$keyword$67,input_schema22492_22528,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22515 = G__22495;
var map__22517 = G__22515;
var map__22517__$1 = ((cljs.core.seq_QMARK_(map__22517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22517):map__22517);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,cljs.core.constant$keyword$66);
var owner = G__22496;
var G__22516 = G__22497;
var map__22518 = G__22516;
var map__22518__$1 = ((cljs.core.seq_QMARK_(map__22518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22518):map__22518);
var opts = map__22518__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22518__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22518__$1,cljs.core.constant$keyword$147);
var G__22515__$1 = G__22515;
var owner__$1 = owner;
var G__22516__$1 = G__22516;
while(true){
var map__22519 = G__22515__$1;
var map__22519__$1 = ((cljs.core.seq_QMARK_(map__22519))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22519):map__22519);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22519__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22520 = G__22516__$1;
var map__22520__$1 = ((cljs.core.seq_QMARK_(map__22520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22520):map__22520);
var opts__$1 = map__22520__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22521 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22521 = (function (G__22496,output_schema22491,G__22515,owner,validate__12088__auto__,map__22518,G__22495,ks,G__22516,map__22519,value,input_checker22493,output_checker22494,ch,input_schema22492,map__22520,checkbox_STAR_,G__22497,opts,ufv__,map__22517,meta22522){
this.G__22496 = G__22496;
this.output_schema22491 = output_schema22491;
this.G__22515 = G__22515;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.map__22518 = map__22518;
this.G__22495 = G__22495;
this.ks = ks;
this.G__22516 = G__22516;
this.map__22519 = map__22519;
this.value = value;
this.input_checker22493 = input_checker22493;
this.output_checker22494 = output_checker22494;
this.ch = ch;
this.input_schema22492 = input_schema22492;
this.map__22520 = map__22520;
this.checkbox_STAR_ = checkbox_STAR_;
this.G__22497 = G__22497;
this.opts = opts;
this.ufv__ = ufv__;
this.map__22517 = map__22517;
this.meta22522 = meta22522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22521.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22521.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

lomakkeet.fields.t22521.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22521.prototype.om$core$IRender$render$arity$1 = ((function (map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22524 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.checked], null));
});})(___$1,map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22524) : sablono.interpreter.input.call(null,G__22524));
});})(map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

lomakkeet.fields.t22521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function (_22523){
var self__ = this;
var _22523__$1 = this;
return self__.meta22522;
});})(map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

lomakkeet.fields.t22521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function (_22523,meta22522__$1){
var self__ = this;
var _22523__$1 = this;
return (new lomakkeet.fields.t22521(self__.G__22496,self__.output_schema22491,self__.G__22515,self__.owner,self__.validate__12088__auto__,self__.map__22518,self__.G__22495,self__.ks,self__.G__22516,self__.map__22519,self__.value,self__.input_checker22493,self__.output_checker22494,self__.ch,self__.input_schema22492,self__.map__22520,self__.checkbox_STAR_,self__.G__22497,self__.opts,self__.ufv__,self__.map__22517,meta22522__$1));
});})(map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

lomakkeet.fields.t22521.cljs$lang$type = true;

lomakkeet.fields.t22521.cljs$lang$ctorStr = "lomakkeet.fields/t22521";

lomakkeet.fields.t22521.cljs$lang$ctorPrWriter = ((function (map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22521");
});})(map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

lomakkeet.fields.__GT_t22521 = ((function (map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530){
return (function __GT_t22521(G__22496__$1,output_schema22491__$1,G__22515__$2,owner__$3,validate__12088__auto____$1,map__22518__$2,G__22495__$1,ks__$2,G__22516__$2,map__22519__$2,value__$2,input_checker22493__$1,output_checker22494__$1,ch__$2,input_schema22492__$1,map__22520__$2,checkbox_STAR___$1,G__22497__$1,opts__$2,ufv____$1,map__22517__$2,meta22522){
return (new lomakkeet.fields.t22521(G__22496__$1,output_schema22491__$1,G__22515__$2,owner__$3,validate__12088__auto____$1,map__22518__$2,G__22495__$1,ks__$2,G__22516__$2,map__22519__$2,value__$2,input_checker22493__$1,output_checker22494__$1,ch__$2,input_schema22492__$1,map__22520__$2,checkbox_STAR___$1,G__22497__$1,opts__$2,ufv____$1,map__22517__$2,meta22522));
});})(map__22519,map__22519__$1,value__$1,owner__$2,map__22520,map__22520__$1,opts__$1,ks__$1,ch__$1,G__22515,map__22517,map__22517__$1,value,owner,G__22516,map__22518,map__22518__$1,opts,ks,ch,validate__12088__auto__,ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

}

return (new lomakkeet.fields.t22521(G__22496,output_schema22491_22527,G__22515__$1,owner__$2,validate__12088__auto__,map__22518__$1,G__22495,ks__$1,G__22516__$1,map__22519__$1,value__$1,input_checker22493_22529,output_checker22494_22530,ch__$1,input_schema22492_22528,map__22520__$1,checkbox_STAR_,G__22497,opts__$1,ufv___22526,map__22517__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22534 = (function (){var G__22525 = o__12091__auto__;
return (output_checker22494_22530.cljs$core$IFn$_invoke$arity$1 ? output_checker22494_22530.cljs$core$IFn$_invoke$arity$1(G__22525) : output_checker22494_22530.call(null,G__22525));
})();
if(cljs.core.truth_(temp__4126__auto___22534)){
var error__12090__auto___22535 = temp__4126__auto___22534;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22535], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22535,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22491_22527,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22526,output_schema22491_22527,input_schema22492_22528,input_checker22493_22529,output_checker22494_22530))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema22491_22527,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22492_22528], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20339__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20339__auto__,m22490){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20339__auto__,m22490);
});
__GT_checkbox_STAR_ = function(cursor__20339__auto__,m22490){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20339__auto__,m22490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkbox_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_checkbox_STAR___1;
__GT_checkbox_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_checkbox_STAR___2;
return __GT_checkbox_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.checkbox = (function() { 
var checkbox__delegate = function (form,label,ks,p__22536){
var vec__22538 = p__22536;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22538,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__22536 = null;
if (arguments.length > 3) {
var G__22539__i = 0, G__22539__a = new Array(arguments.length -  3);
while (G__22539__i < G__22539__a.length) {G__22539__a[G__22539__i] = arguments[G__22539__i + 3]; ++G__22539__i;}
  p__22536 = new cljs.core.IndexedSeq(G__22539__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__22536);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__22540){
var form = cljs.core.first(arglist__22540);
arglist__22540 = cljs.core.next(arglist__22540);
var label = cljs.core.first(arglist__22540);
arglist__22540 = cljs.core.next(arglist__22540);
var ks = cljs.core.first(arglist__22540);
var p__22536 = cljs.core.rest(arglist__22540);
return checkbox__delegate(form,label,ks,p__22536);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___22599 = schema.utils.use_fn_validation;
var output_schema22542_22600 = schema.core.Any;
var input_schema22543_22601 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22544_22602 = schema.core.checker(input_schema22543_22601);
var output_checker22545_22603 = schema.core.checker(output_schema22542_22600);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function select_STAR_(G__22546,G__22547,G__22548){
var validate__12088__auto__ = ufv___22599.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22546,G__22547,G__22548], null);
var temp__4126__auto___22605 = (function (){var G__22574 = args__12089__auto___22604;
return (input_checker22544_22602.cljs$core$IFn$_invoke$arity$1 ? input_checker22544_22602.cljs$core$IFn$_invoke$arity$1(G__22574) : input_checker22544_22602.call(null,G__22574));
})();
if(cljs.core.truth_(temp__4126__auto___22605)){
var error__12090__auto___22606 = temp__4126__auto___22605;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22606], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22606,cljs.core.constant$keyword$66,args__12089__auto___22604,cljs.core.constant$keyword$67,input_schema22543_22601,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22577 = G__22546;
var map__22579 = G__22577;
var map__22579__$1 = ((cljs.core.seq_QMARK_(map__22579))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22579):map__22579);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,cljs.core.constant$keyword$66);
var owner = G__22547;
var G__22578 = G__22548;
var map__22580 = G__22578;
var map__22580__$1 = ((cljs.core.seq_QMARK_(map__22580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22580):map__22580);
var opts = map__22580__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,cljs.core.constant$keyword$161);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22580__$1,cljs.core.constant$keyword$147);
var G__22577__$1 = G__22577;
var owner__$1 = owner;
var G__22578__$1 = G__22578;
while(true){
var map__22581 = G__22577__$1;
var map__22581__$1 = ((cljs.core.seq_QMARK_(map__22581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22581):map__22581);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22581__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22582 = G__22578__$1;
var map__22582__$1 = ((cljs.core.seq_QMARK_(map__22582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22582):map__22582);
var opts__$1 = map__22582__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,cljs.core.constant$keyword$161);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22583 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22583 = (function (G__22578,options,map__22581,map__22580,output_schema22542,owner,validate__12088__auto__,map__22582,G__22548,input_schema22543,G__22577,ks,value,input_checker22544,map__22579,output_checker22545,ch,G__22547,G__22546,select_STAR_,opts,ufv__,meta22584){
this.G__22578 = G__22578;
this.options = options;
this.map__22581 = map__22581;
this.map__22580 = map__22580;
this.output_schema22542 = output_schema22542;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.map__22582 = map__22582;
this.G__22548 = G__22548;
this.input_schema22543 = input_schema22543;
this.G__22577 = G__22577;
this.ks = ks;
this.value = value;
this.input_checker22544 = input_checker22544;
this.map__22579 = map__22579;
this.output_checker22545 = output_checker22545;
this.ch = ch;
this.G__22547 = G__22547;
this.G__22546 = G__22546;
this.select_STAR_ = select_STAR_;
this.opts = opts;
this.ufv__ = ufv__;
this.meta22584 = meta22584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22583.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22583.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

lomakkeet.fields.t22583.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22583.prototype.om$core$IRender$render$arity$1 = ((function (map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22586 = {"className": "form-control", "value": (((self__.value instanceof cljs.core.Keyword))?cljs.core.name(self__.value):self__.value), "onChange": ((function (___$1,map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$66,e.target.value], null));
});})(___$1,map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
};
var G__22587 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__4514__auto__ = ((function (G__22586,___$1,map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function iter__22588(s__22589){
return (new cljs.core.LazySeq(null,((function (G__22586,___$1,map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (){
var s__22589__$1 = s__22589;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22589__$1);
if(temp__4126__auto__){
var s__22589__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22589__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__22589__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__22591 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__22590 = (0);
while(true){
if((i__22590 < size__4513__auto__)){
var vec__22596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__22590);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(1),null);
cljs.core.chunk_append(b__22591,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null));

var G__22607 = (i__22590 + (1));
i__22590 = G__22607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22591),iter__22588(cljs.core.chunk_rest(s__22589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22591),null);
}
} else {
var vec__22597 = cljs.core.first(s__22589__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$66,k,cljs.core.constant$keyword$51,k], null),v], null),iter__22588(cljs.core.rest(s__22589__$2)));
}
} else {
return null;
}
break;
}
});})(G__22586,___$1,map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
,null,null));
});})(G__22586,___$1,map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;
return iter__4514__auto__(self__.options);
})():null));
return React.DOM.select(G__22586,G__22587);
});})(map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

lomakkeet.fields.t22583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (_22585){
var self__ = this;
var _22585__$1 = this;
return self__.meta22584;
});})(map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

lomakkeet.fields.t22583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (_22585,meta22584__$1){
var self__ = this;
var _22585__$1 = this;
return (new lomakkeet.fields.t22583(self__.G__22578,self__.options,self__.map__22581,self__.map__22580,self__.output_schema22542,self__.owner,self__.validate__12088__auto__,self__.map__22582,self__.G__22548,self__.input_schema22543,self__.G__22577,self__.ks,self__.value,self__.input_checker22544,self__.map__22579,self__.output_checker22545,self__.ch,self__.G__22547,self__.G__22546,self__.select_STAR_,self__.opts,self__.ufv__,meta22584__$1));
});})(map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

lomakkeet.fields.t22583.cljs$lang$type = true;

lomakkeet.fields.t22583.cljs$lang$ctorStr = "lomakkeet.fields/t22583";

lomakkeet.fields.t22583.cljs$lang$ctorPrWriter = ((function (map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22583");
});})(map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

lomakkeet.fields.__GT_t22583 = ((function (map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603){
return (function __GT_t22583(G__22578__$2,options__$2,map__22581__$2,map__22580__$2,output_schema22542__$1,owner__$3,validate__12088__auto____$1,map__22582__$2,G__22548__$1,input_schema22543__$1,G__22577__$2,ks__$2,value__$2,input_checker22544__$1,map__22579__$2,output_checker22545__$1,ch__$2,G__22547__$1,G__22546__$1,select_STAR___$1,opts__$2,ufv____$1,meta22584){
return (new lomakkeet.fields.t22583(G__22578__$2,options__$2,map__22581__$2,map__22580__$2,output_schema22542__$1,owner__$3,validate__12088__auto____$1,map__22582__$2,G__22548__$1,input_schema22543__$1,G__22577__$2,ks__$2,value__$2,input_checker22544__$1,map__22579__$2,output_checker22545__$1,ch__$2,G__22547__$1,G__22546__$1,select_STAR___$1,opts__$2,ufv____$1,meta22584));
});})(map__22581,map__22581__$1,value__$1,owner__$2,map__22582,map__22582__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22577,map__22579,map__22579__$1,value,owner,G__22578,map__22580,map__22580__$1,opts,options,ks,ch,validate__12088__auto__,ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

}

return (new lomakkeet.fields.t22583(G__22578__$1,options__$1,map__22581__$1,map__22580__$1,output_schema22542_22600,owner__$2,validate__12088__auto__,map__22582__$1,G__22548,input_schema22543_22601,G__22577__$1,ks__$1,value__$1,input_checker22544_22602,map__22579__$1,output_checker22545_22603,ch__$1,G__22547,G__22546,select_STAR_,opts__$1,ufv___22599,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22608 = (function (){var G__22598 = o__12091__auto__;
return (output_checker22545_22603.cljs$core$IFn$_invoke$arity$1 ? output_checker22545_22603.cljs$core$IFn$_invoke$arity$1(G__22598) : output_checker22545_22603.call(null,G__22598));
})();
if(cljs.core.truth_(temp__4126__auto___22608)){
var error__12090__auto___22609 = temp__4126__auto___22608;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22609], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22609,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22542_22600,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22599,output_schema22542_22600,input_schema22543_22601,input_checker22544_22602,output_checker22545_22603))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema22542_22600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22543_22601], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20339__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20339__auto__,m22541){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20339__auto__,m22541);
});
__GT_select_STAR_ = function(cursor__20339__auto__,m22541){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20339__auto__,m22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_select_STAR___1;
__GT_select_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_select_STAR___2;
return __GT_select_STAR_;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.select = (function() { 
var select__delegate = function (form,label,ks,options,p__22610){
var vec__22612 = p__22610;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22612,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$161,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__22610 = null;
if (arguments.length > 4) {
var G__22613__i = 0, G__22613__a = new Array(arguments.length -  4);
while (G__22613__i < G__22613__a.length) {G__22613__a[G__22613__i] = arguments[G__22613__i + 4]; ++G__22613__i;}
  p__22610 = new cljs.core.IndexedSeq(G__22613__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__22610);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__22614){
var form = cljs.core.first(arglist__22614);
arglist__22614 = cljs.core.next(arglist__22614);
var label = cljs.core.first(arglist__22614);
arglist__22614 = cljs.core.next(arglist__22614);
var ks = cljs.core.first(arglist__22614);
arglist__22614 = cljs.core.next(arglist__22614);
var options = cljs.core.first(arglist__22614);
var p__22610 = cljs.core.rest(arglist__22614);
return select__delegate(form,label,ks,options,p__22610);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
lomakkeet.fields.coerce = (function coerce(coercion_matcher,schema__$1,value){
if(cljs.core.truth_(schema__$1)){
var coerced = schema.coerce.coercer(schema__$1,coercion_matcher).call(null,value);
if(schema.utils.error_QMARK_(coerced)){
return value;
} else {
return coerced;
}
} else {
return value;
}
});
/**
* 
*/
lomakkeet.fields.FormState = schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$66,schema.core.Any,cljs.core.constant$keyword$162,schema.core.Any,cljs.core.constant$keyword$154,schema.core.Any,cljs.core.constant$keyword$67,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null));
lomakkeet.fields.__GT_form_state = (function() {
var __GT_form_state = null;
var __GT_form_state__1 = (function (value){
return __GT_form_state.cljs$core$IFn$_invoke$arity$2(value,null);
});
var __GT_form_state__2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$67,schema__$1], null);
});
__GT_form_state = function(value,schema__$1){
switch(arguments.length){
case 1:
return __GT_form_state__1.call(this,value);
case 2:
return __GT_form_state__2.call(this,value,schema__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form_state.cljs$core$IFn$_invoke$arity$1 = __GT_form_state__1;
__GT_form_state.cljs$core$IFn$_invoke$arity$2 = __GT_form_state__2;
return __GT_form_state;
})()
;
lomakkeet.fields.cancel_form = (function cancel_form(form_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.constant$keyword$66,cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.save_form = (function save_form(p__22617,value){
var map__22619 = p__22617;
var map__22619__$1 = ((cljs.core.seq_QMARK_(map__22619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22619):map__22619);
var form_state = map__22619__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22619__$1,cljs.core.constant$keyword$67);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$66,value,cljs.core.array_seq([cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__22620,f,args){
var map__22622 = p__22620;
var map__22622__$1 = ((cljs.core.seq_QMARK_(map__22622))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22622):map__22622);
var form_state = map__22622__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22622__$1,cljs.core.constant$keyword$66);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__22620,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22623__i = 0, G__22623__a = new Array(arguments.length -  2);
while (G__22623__i < G__22623__a.length) {G__22623__a[G__22623__i] = arguments[G__22623__i + 2]; ++G__22623__i;}
  args = new cljs.core.IndexedSeq(G__22623__a,0);
} 
return update_form__delegate.call(this,p__22620,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__22624){
var p__22620 = cljs.core.first(arglist__22624);
arglist__22624 = cljs.core.next(arglist__22624);
var f = cljs.core.first(arglist__22624);
var args = cljs.core.rest(arglist__22624);
return update_form__delegate(p__22620,f,args);
});
update_form.cljs$core$IFn$_invoke$arity$variadic = update_form__delegate;
return update_form;
})()
;
/**
* Takes cursor, schema, vector of keywords and new value.
* 
* If new value is nil, schema is checked if value is in optional-key,
* value it is, instead of setting value to nil, the key is dissoced.
*/
lomakkeet.fields.change_value = (function change_value(value_cursor,schema__$1,ks,value){
if(cljs.core.truth_(value)){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
} else {
var schema__$2 = lomakkeet.fields.get_in_schema(schema__$1,cljs.core.butlast(ks));
if(cljs.core.contains_QMARK_(schema__$2,schema.core.optional_key(cljs.core.last(ks)))){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(value_cursor,((function (schema__$2){
return (function (p1__22625_SHARP_){
return lomakkeet.fields.dissoc_in(p1__22625_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___22966 = schema.utils.use_fn_validation;
var output_schema22627_22967 = schema.core.Any;
var input_schema22628_22968 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22629_22969 = schema.core.checker(input_schema22628_22968);
var output_checker22630_22970 = schema.core.checker(output_schema22627_22967);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function form(G__22631,G__22632,G__22633){
var validate__12088__auto__ = ufv___22966.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22971 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22631,G__22632,G__22633], null);
var temp__4126__auto___22972 = (function (){var G__22800 = args__12089__auto___22971;
return (input_checker22629_22969.cljs$core$IFn$_invoke$arity$1 ? input_checker22629_22969.cljs$core$IFn$_invoke$arity$1(G__22800) : input_checker22629_22969.call(null,G__22800));
})();
if(cljs.core.truth_(temp__4126__auto___22972)){
var error__12090__auto___22973 = temp__4126__auto___22972;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22973], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22973,cljs.core.constant$keyword$66,args__12089__auto___22971,cljs.core.constant$keyword$67,input_schema22628_22968,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var G__22803 = G__22631;
var map__22805 = G__22803;
var map__22805__$1 = ((cljs.core.seq_QMARK_(map__22805))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22805):map__22805);
var form_state = map__22805__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805__$1,cljs.core.constant$keyword$162);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805__$1,cljs.core.constant$keyword$66);
var owner = G__22632;
var G__22804 = G__22633;
var map__22806 = G__22804;
var map__22806__$1 = ((cljs.core.seq_QMARK_(map__22806))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22806):map__22806);
var opts = map__22806__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,cljs.core.constant$keyword$163);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,cljs.core.constant$keyword$164);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,cljs.core.constant$keyword$143);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,cljs.core.constant$keyword$165);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22806__$1,cljs.core.constant$keyword$166);
var G__22803__$1 = G__22803;
var owner__$1 = owner;
var G__22804__$1 = G__22804;
while(true){
var map__22807 = G__22803__$1;
var map__22807__$1 = ((cljs.core.seq_QMARK_(map__22807))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22807):map__22807);
var form_state__$1 = map__22807__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,cljs.core.constant$keyword$162);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,cljs.core.constant$keyword$66);
var owner__$2 = owner__$1;
var map__22808 = G__22804__$1;
var map__22808__$1 = ((cljs.core.seq_QMARK_(map__22808))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22808):map__22808);
var opts__$1 = map__22808__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,cljs.core.constant$keyword$163);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,cljs.core.constant$keyword$164);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,cljs.core.constant$keyword$143);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,cljs.core.constant$keyword$165);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22808__$1,cljs.core.constant$keyword$166);
if(typeof lomakkeet.fields.t22809 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22809 = (function (form,input_checker22629,after_change,owner,output_checker22630,validate__12088__auto__,map__22808,form_validation_fn,form_state,G__22633,input_schema22628,render_fn,G__22631,map__22805,value,map__22806,map__22807,output_schema22627,actions,G__22803,G__22804,G__22632,opts,initial_value,ufv__,meta22810){
this.form = form;
this.input_checker22629 = input_checker22629;
this.after_change = after_change;
this.owner = owner;
this.output_checker22630 = output_checker22630;
this.validate__12088__auto__ = validate__12088__auto__;
this.map__22808 = map__22808;
this.form_validation_fn = form_validation_fn;
this.form_state = form_state;
this.G__22633 = G__22633;
this.input_schema22628 = input_schema22628;
this.render_fn = render_fn;
this.G__22631 = G__22631;
this.map__22805 = map__22805;
this.value = value;
this.map__22806 = map__22806;
this.map__22807 = map__22807;
this.output_schema22627 = output_schema22627;
this.actions = actions;
this.G__22803 = G__22803;
this.G__22804 = G__22804;
this.G__22632 = G__22632;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.meta22810 = meta22810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22809.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22809.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.t22809.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22809.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22812 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,self__.form_state,cljs.core.constant$keyword$66,(function (){var G__22813 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22813) : cljs.core.deref.call(null,G__22813));
})(),cljs.core.constant$keyword$162,(function (){var G__22814 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22814) : cljs.core.deref.call(null,G__22814));
})(),cljs.core.constant$keyword$143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$153,self__.form_state),cljs.core.constant$keyword$147,cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__22812) : self__.render_fn.call(null,G__22812));
})());
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.t22809.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t22809.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__22816 = cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22816) : cljs.core.deref.call(null,G__22816));
})():null);
var map__22815 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__22815__$1 = ((cljs.core.seq_QMARK_(map__22815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22815):map__22815);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22815__$1,cljs.core.constant$keyword$167);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22815__$1,cljs.core.constant$keyword$147);
var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (state_22897){
var state_val_22898 = (state_22897[(1)]);
if((state_val_22898 === (7))){
var inst_22819 = (state_22897[(7)]);
var inst_22822 = (state_22897[(8)]);
var inst_22825 = (state_22897[(9)]);
var inst_22824 = (function (){var G__22899 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22899) : cljs.core.deref.call(null,G__22899));
})();
var inst_22825__$1 = (function (){var G__22900 = inst_22824;
var G__22901 = inst_22819;
return (inst_22822.cljs$core$IFn$_invoke$arity$2 ? inst_22822.cljs$core$IFn$_invoke$arity$2(G__22900,G__22901) : inst_22822.call(null,G__22900,G__22901));
})();
var inst_22826 = lomakkeet.fields.chan_QMARK_(inst_22825__$1);
var state_22897__$1 = (function (){var statearr_22902 = state_22897;
(statearr_22902[(9)] = inst_22825__$1);

return statearr_22902;
})();
if(inst_22826){
var statearr_22903_22974 = state_22897__$1;
(statearr_22903_22974[(1)] = (10));

} else {
var statearr_22904_22975 = state_22897__$1;
(statearr_22904_22975[(1)] = (11));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (20))){
var state_22897__$1 = state_22897;
var statearr_22905_22976 = state_22897__$1;
(statearr_22905_22976[(2)] = null);

(statearr_22905_22976[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (27))){
var inst_22884 = (state_22897[(10)]);
var inst_22890 = (state_22897[(2)]);
var inst_22891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22884,inst_22890], 0));
var inst_22892 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$154,inst_22891);
var state_22897__$1 = (function (){var statearr_22906 = state_22897;
(statearr_22906[(11)] = inst_22892);

return statearr_22906;
})();
var statearr_22907_22977 = state_22897__$1;
(statearr_22907_22977[(2)] = null);

(statearr_22907_22977[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (1))){
var state_22897__$1 = state_22897;
var statearr_22908_22978 = state_22897__$1;
(statearr_22908_22978[(2)] = null);

(statearr_22908_22978[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (24))){
var inst_22884 = (state_22897[(2)]);
var state_22897__$1 = (function (){var statearr_22909 = state_22897;
(statearr_22909[(10)] = inst_22884);

return statearr_22909;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_22910_22979 = state_22897__$1;
(statearr_22910_22979[(1)] = (25));

} else {
var statearr_22911_22980 = state_22897__$1;
(statearr_22911_22980[(1)] = (26));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (4))){
var inst_22819 = (state_22897[(7)]);
var inst_22819__$1 = (state_22897[(2)]);
var inst_22820 = (function (){var G__22912 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22912) : cljs.core.deref.call(null,G__22912));
})();
var inst_22867 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_22819__$1);
var state_22897__$1 = (function (){var statearr_22913 = state_22897;
(statearr_22913[(7)] = inst_22819__$1);

(statearr_22913[(12)] = inst_22820);

return statearr_22913;
})();
var G__22914_22981 = (((inst_22867 instanceof cljs.core.Keyword))?inst_22867.fqn:null);
switch (G__22914_22981) {
case "change":
var statearr_22915_22983 = state_22897__$1;
(statearr_22915_22983[(1)] = (14));


break;
case "cancel":
var statearr_22916_22984 = state_22897__$1;
(statearr_22916_22984[(1)] = (13));


break;
case "action":
var statearr_22917_22985 = state_22897__$1;
(statearr_22917_22985[(1)] = (6));


break;
default:
var statearr_22918_22986 = state_22897__$1;
(statearr_22918_22986[(1)] = (18));



}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (15))){
var inst_22819 = (state_22897[(7)]);
var inst_22853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22819);
var state_22897__$1 = state_22897;
var statearr_22919_22987 = state_22897__$1;
(statearr_22919_22987[(2)] = inst_22853);

(statearr_22919_22987[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (21))){
var inst_22878 = (state_22897[(2)]);
var state_22897__$1 = (function (){var statearr_22920 = state_22897;
(statearr_22920[(13)] = inst_22878);

return statearr_22920;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_22921_22988 = state_22897__$1;
(statearr_22921_22988[(1)] = (22));

} else {
var statearr_22922_22989 = state_22897__$1;
(statearr_22922_22989[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (13))){
var inst_22848 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_22897__$1 = state_22897;
var statearr_22923_22990 = state_22897__$1;
(statearr_22923_22990[(2)] = inst_22848);

(statearr_22923_22990[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (22))){
var inst_22880 = (function (){var G__22924 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22924) : cljs.core.deref.call(null,G__22924));
})();
var inst_22881 = (function (){var G__22925 = inst_22880;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__22925) : self__.form_validation_fn.call(null,G__22925));
})();
var state_22897__$1 = state_22897;
var statearr_22926_22991 = state_22897__$1;
(statearr_22926_22991[(2)] = inst_22881);

(statearr_22926_22991[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (6))){
var inst_22819 = (state_22897[(7)]);
var inst_22822 = (state_22897[(8)]);
var inst_22821 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_22819);
var inst_22822__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_22821);
var state_22897__$1 = (function (){var statearr_22927 = state_22897;
(statearr_22927[(8)] = inst_22822__$1);

return statearr_22927;
})();
if(cljs.core.truth_(inst_22822__$1)){
var statearr_22928_22992 = state_22897__$1;
(statearr_22928_22992[(1)] = (7));

} else {
var statearr_22929_22993 = state_22897__$1;
(statearr_22929_22993[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (25))){
var inst_22886 = (function (){var G__22930 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22930) : cljs.core.deref.call(null,G__22930));
})();
var inst_22887 = schema.core.check(schema__$1,inst_22886);
var state_22897__$1 = state_22897;
var statearr_22931_22994 = state_22897__$1;
(statearr_22931_22994[(2)] = inst_22887);

(statearr_22931_22994[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (17))){
var inst_22819 = (state_22897[(7)]);
var inst_22856 = (state_22897[(2)]);
var inst_22857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22856,cljs.core.constant$keyword$146);
var inst_22858 = lomakkeet.fields.get_in_schema(schema__$1,inst_22857);
var inst_22859 = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(inst_22819);
var inst_22860 = lomakkeet.fields.coerce(coercion_matcher,inst_22858,inst_22859);
var inst_22861 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_22857,inst_22860);
var state_22897__$1 = state_22897;
var statearr_22932_22995 = state_22897__$1;
(statearr_22932_22995[(2)] = inst_22861);

(statearr_22932_22995[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (3))){
var inst_22895 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22897__$1,inst_22895);
} else {
if((state_val_22898 === (12))){
var inst_22840 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
var statearr_22933_22996 = state_22897__$1;
(statearr_22933_22996[(2)] = inst_22840);

(statearr_22933_22996[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (2))){
var state_22897__$1 = state_22897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22897__$1,(4),ch);
} else {
if((state_val_22898 === (23))){
var state_22897__$1 = state_22897;
var statearr_22934_22997 = state_22897__$1;
(statearr_22934_22997[(2)] = null);

(statearr_22934_22997[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (19))){
var inst_22820 = (state_22897[(12)]);
var inst_22871 = [cljs.core.constant$keyword$153,cljs.core.constant$keyword$66,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169];
var inst_22872 = (function (){var G__22935 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22935) : cljs.core.deref.call(null,G__22935));
})();
var inst_22873 = [self__.form_state,inst_22872,self__.value,inst_22820];
var inst_22874 = cljs.core.PersistentHashMap.fromArrays(inst_22871,inst_22873);
var inst_22875 = (function (){var G__22936 = inst_22874;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__22936) : self__.after_change.call(null,G__22936));
})();
var state_22897__$1 = state_22897;
var statearr_22937_22998 = state_22897__$1;
(statearr_22937_22998[(2)] = inst_22875);

(statearr_22937_22998[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (11))){
var inst_22825 = (state_22897[(9)]);
var inst_22838 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_22825);
var state_22897__$1 = state_22897;
var statearr_22938_22999 = state_22897__$1;
(statearr_22938_22999[(2)] = inst_22838);

(statearr_22938_22999[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (9))){
var inst_22846 = (state_22897[(2)]);
var state_22897__$1 = state_22897;
var statearr_22939_23000 = state_22897__$1;
(statearr_22939_23000[(2)] = inst_22846);

(statearr_22939_23000[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (5))){
var inst_22869 = (state_22897[(2)]);
var state_22897__$1 = (function (){var statearr_22940 = state_22897;
(statearr_22940[(14)] = inst_22869);

return statearr_22940;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_22941_23001 = state_22897__$1;
(statearr_22941_23001[(1)] = (19));

} else {
var statearr_22942_23002 = state_22897__$1;
(statearr_22942_23002[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (14))){
var inst_22819 = (state_22897[(7)]);
var inst_22851 = cljs.core.seq_QMARK_(inst_22819);
var state_22897__$1 = state_22897;
if(inst_22851){
var statearr_22943_23003 = state_22897__$1;
(statearr_22943_23003[(1)] = (15));

} else {
var statearr_22944_23004 = state_22897__$1;
(statearr_22944_23004[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (26))){
var state_22897__$1 = state_22897;
var statearr_22945_23005 = state_22897__$1;
(statearr_22945_23005[(2)] = null);

(statearr_22945_23005[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (16))){
var inst_22819 = (state_22897[(7)]);
var state_22897__$1 = state_22897;
var statearr_22946_23006 = state_22897__$1;
(statearr_22946_23006[(2)] = inst_22819);

(statearr_22946_23006[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (10))){
var inst_22819 = (state_22897[(7)]);
var inst_22822 = (state_22897[(8)]);
var inst_22825 = (state_22897[(9)]);
var inst_22820 = (state_22897[(12)]);
var inst_22834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22835 = (function (){var c__16134__auto____$1 = inst_22834;
var next = inst_22825;
var action_fn = inst_22822;
var temp__4124__auto__ = inst_22822;
var prev_value = inst_22820;
var evt = inst_22819;
return ((function (c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22819,inst_22822,inst_22825,inst_22820,inst_22834,state_val_22898,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22819,inst_22822,inst_22825,inst_22820,inst_22834,state_val_22898,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (state_22832){
var state_val_22833 = (state_22832[(1)]);
if((state_val_22833 === (2))){
var inst_22829 = (state_22832[(2)]);
var inst_22830 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_22829);
var state_22832__$1 = state_22832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22832__$1,inst_22830);
} else {
if((state_val_22833 === (1))){
var state_22832__$1 = state_22832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22832__$1,(2),next);
} else {
return null;
}
}
});})(c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22819,inst_22822,inst_22825,inst_22820,inst_22834,state_val_22898,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;
return ((function (switch__16054__auto__,c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22819,inst_22822,inst_22825,inst_22820,inst_22834,state_val_22898,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_22950 = [null,null,null,null,null,null,null];
(statearr_22950[(0)] = state_machine__16055__auto__);

(statearr_22950[(1)] = (1));

return statearr_22950;
});
var state_machine__16055__auto____1 = (function (state_22832){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_22832);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e22951){if((e22951 instanceof Object)){
var ex__16058__auto__ = e22951;
var statearr_22952_23007 = state_22832;
(statearr_22952_23007[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22832);

return cljs.core.constant$keyword$99;
} else {
throw e22951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__23008 = state_22832;
state_22832 = G__23008;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_22832){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_22832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22819,inst_22822,inst_22825,inst_22820,inst_22834,state_val_22898,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
})();
var state__16136__auto__ = (function (){var statearr_22953 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_22953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto____$1);

return statearr_22953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});
;})(c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22819,inst_22822,inst_22825,inst_22820,inst_22834,state_val_22898,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
})();
var inst_22836 = cljs.core.async.impl.dispatch.run(inst_22835);
var state_22897__$1 = (function (){var statearr_22954 = state_22897;
(statearr_22954[(15)] = inst_22836);

return statearr_22954;
})();
var statearr_22955_23009 = state_22897__$1;
(statearr_22955_23009[(2)] = inst_22834);

(statearr_22955_23009[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (18))){
var inst_22819 = (state_22897[(7)]);
var inst_22863 = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(inst_22819);
var inst_22864 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_22863)].join('');
var inst_22865 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22864], 0));
var state_22897__$1 = state_22897;
var statearr_22956_23010 = state_22897__$1;
(statearr_22956_23010[(2)] = inst_22865);

(statearr_22956_23010[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22898 === (8))){
var inst_22819 = (state_22897[(7)]);
var inst_22842 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_22819);
var inst_22843 = [cljs.core.str("WARNING: "),cljs.core.str(inst_22842),cljs.core.str(" is unknown")].join('');
var inst_22844 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22843], 0));
var state_22897__$1 = state_22897;
var statearr_22957_23011 = state_22897__$1;
(statearr_22957_23011[(2)] = inst_22844);

(statearr_22957_23011[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;
return ((function (switch__16054__auto__,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_22961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22961[(0)] = state_machine__16055__auto__);

(statearr_22961[(1)] = (1));

return statearr_22961;
});
var state_machine__16055__auto____1 = (function (state_22897){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_22897);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e22962){if((e22962 instanceof Object)){
var ex__16058__auto__ = e22962;
var statearr_22963_23012 = state_22897;
(statearr_22963_23012[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22897);

return cljs.core.constant$keyword$99;
} else {
throw e22962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__23013 = state_22897;
state_22897 = G__23013;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_22897){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_22897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
})();
var state__16136__auto__ = (function (){var statearr_22964 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_22964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_22964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto__,schema__$1,map__22815,map__22815__$1,coercion_matcher,ch,___$1,map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
);

return c__16134__auto__;
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.t22809.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t22809.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$152,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$167,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.t22809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (_22811){
var self__ = this;
var _22811__$1 = this;
return self__.meta22810;
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.t22809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (_22811,meta22810__$1){
var self__ = this;
var _22811__$1 = this;
return (new lomakkeet.fields.t22809(self__.form,self__.input_checker22629,self__.after_change,self__.owner,self__.output_checker22630,self__.validate__12088__auto__,self__.map__22808,self__.form_validation_fn,self__.form_state,self__.G__22633,self__.input_schema22628,self__.render_fn,self__.G__22631,self__.map__22805,self__.value,self__.map__22806,self__.map__22807,self__.output_schema22627,self__.actions,self__.G__22803,self__.G__22804,self__.G__22632,self__.opts,self__.initial_value,self__.ufv__,meta22810__$1));
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.t22809.cljs$lang$type = true;

lomakkeet.fields.t22809.cljs$lang$ctorStr = "lomakkeet.fields/t22809";

lomakkeet.fields.t22809.cljs$lang$ctorPrWriter = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22809");
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

lomakkeet.fields.__GT_t22809 = ((function (map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970){
return (function __GT_t22809(form__$3,input_checker22629__$1,after_change__$2,owner__$3,output_checker22630__$1,validate__12088__auto____$1,map__22808__$2,form_validation_fn__$2,form_state__$2,G__22633__$1,input_schema22628__$1,render_fn__$2,G__22631__$1,map__22805__$2,value__$2,map__22806__$2,map__22807__$2,output_schema22627__$1,actions__$2,G__22803__$2,G__22804__$2,G__22632__$1,opts__$2,initial_value__$2,ufv____$1,meta22810){
return (new lomakkeet.fields.t22809(form__$3,input_checker22629__$1,after_change__$2,owner__$3,output_checker22630__$1,validate__12088__auto____$1,map__22808__$2,form_validation_fn__$2,form_state__$2,G__22633__$1,input_schema22628__$1,render_fn__$2,G__22631__$1,map__22805__$2,value__$2,map__22806__$2,map__22807__$2,output_schema22627__$1,actions__$2,G__22803__$2,G__22804__$2,G__22632__$1,opts__$2,initial_value__$2,ufv____$1,meta22810));
});})(map__22807,map__22807__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22808,map__22808__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22803,map__22805,map__22805__$1,form_state,initial_value,value,owner,G__22804,map__22806,map__22806__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__12088__auto__,ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

}

return (new lomakkeet.fields.t22809(form__$2,input_checker22629_22969,after_change__$1,owner__$2,output_checker22630_22970,validate__12088__auto__,map__22808__$1,form_validation_fn__$1,form_state__$1,G__22633,input_schema22628_22968,render_fn__$1,G__22631,map__22805__$1,value__$1,map__22806__$1,map__22807__$1,output_schema22627_22967,actions__$1,G__22803__$1,G__22804__$1,G__22632,opts__$1,initial_value__$1,ufv___22966,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___23014 = (function (){var G__22965 = o__12091__auto__;
return (output_checker22630_22970.cljs$core$IFn$_invoke$arity$1 ? output_checker22630_22970.cljs$core$IFn$_invoke$arity$1(G__22965) : output_checker22630_22970.call(null,G__22965));
})();
if(cljs.core.truth_(temp__4126__auto___23014)){
var error__12090__auto___23015 = temp__4126__auto___23014;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___23015], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___23015,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22627_22967,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22966,output_schema22627_22967,input_schema22628_22968,input_checker22629_22969,output_checker22630_22970))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema22627_22967,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22628_22968], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20339__auto__);
});
var __GT_form__2 = (function (cursor__20339__auto__,m22626){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20339__auto__,m22626);
});
__GT_form = function(cursor__20339__auto__,m22626){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20339__auto__);
case 2:
return __GT_form__2.call(this,cursor__20339__auto__,m22626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
lomakkeet.fields.dirty_QMARK_ = (function dirty_QMARK_(form_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.errors_QMARK_ = (function errors_QMARK_(form_state){
return cljs.core.seq(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(form_state));
});
