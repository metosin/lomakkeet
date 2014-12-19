// Compiled by ClojureScript 0.0-2496
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
var get_in_schema__delegate = function (schema__$1,ks,p__20893){
var vec__20895 = p__20893;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20895,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__20895,not_found){
return (function (acc,k){
var or__3628__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,schema.core.optional_key(k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,schema.core.required_key(k)));
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return not_found;
}
}
});})(vec__20895,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__20893 = null;
if (arguments.length > 2) {
  p__20893 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__20893);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__20896){
var schema__$1 = cljs.core.first(arglist__20896);
arglist__20896 = cljs.core.next(arglist__20896);
var ks = cljs.core.first(arglist__20896);
var p__20893 = cljs.core.rest(arglist__20896);
return get_in_schema__delegate(schema__$1,ks,p__20893);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__20897){
var vec__20901 = p__20897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20901,(0),null);
var ks = cljs.core.nthnext(vec__20901,(1));
var keys = vec__20901;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__20902){
var map__20904 = p__20902;
var map__20904__$1 = ((cljs.core.seq_QMARK_(map__20904))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20904):map__20904);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20904__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20904__$1,cljs.core.constant$keyword$145);
return ((function (map__20904,map__20904__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$144,ks], null));
});
;})(map__20904,map__20904__$1,ks,ch))
});

var ufv___20949 = schema.utils.use_fn_validation;
var output_schema20906_20950 = schema.core.Any;
var input_schema20907_20951 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20908_20952 = schema.core.checker(input_schema20907_20951);
var output_checker20909_20953 = schema.core.checker(output_schema20906_20950);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function emptyable_input(G__20910,G__20911,G__20912){
var validate__6096__auto__ = ufv___20949.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___20954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20910,G__20911,G__20912], null);
var temp__4126__auto___20955 = (function (){var G__20931 = args__6097__auto___20954;
return (input_checker20908_20952.cljs$core$IFn$_invoke$arity$1 ? input_checker20908_20952.cljs$core$IFn$_invoke$arity$1(G__20931) : input_checker20908_20952.call(null,G__20931));
})();
if(cljs.core.truth_(temp__4126__auto___20955)){
var error__6098__auto___20956 = temp__4126__auto___20955;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20956], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20956,cljs.core.constant$keyword$23,args__6097__auto___20954,cljs.core.constant$keyword$24,input_schema20907_20951,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var state = G__20910;
var owner = G__20911;
var G__20933 = G__20912;
var map__20934 = G__20933;
var map__20934__$1 = ((cljs.core.seq_QMARK_(map__20934))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20934):map__20934);
var opts = map__20934__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20934__$1,cljs.core.constant$keyword$147);
var state__$1 = state;
var owner__$1 = owner;
var G__20933__$1 = G__20933;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__20935 = G__20933__$1;
var map__20935__$1 = ((cljs.core.seq_QMARK_(map__20935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20935):map__20935);
var opts__$1 = map__20935__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t20936 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t20936 = (function (G__20912,input_schema20907,G__20933,owner,output_checker20909,map__20935,emptyable_input,validate__6096__auto__,G__20910,real_input,state,output_schema20906,input_checker20908,opts,map__20934,ufv__,G__20911,meta20937){
this.G__20912 = G__20912;
this.input_schema20907 = input_schema20907;
this.G__20933 = G__20933;
this.owner = owner;
this.output_checker20909 = output_checker20909;
this.map__20935 = map__20935;
this.emptyable_input = emptyable_input;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__20910 = G__20910;
this.real_input = real_input;
this.state = state;
this.output_schema20906 = output_schema20906;
this.input_checker20908 = input_checker20908;
this.opts = opts;
this.map__20934 = map__20934;
this.ufv__ = ufv__;
this.G__20911 = G__20911;
this.meta20937 = meta20937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t20936.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t20936.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

lomakkeet.fields.t20936.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t20936.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs20939 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,self__.opts,cljs.core.constant$keyword$86,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs20939))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs20939], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20939))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20940 = {"className": "input-group-btn"};
var G__20941 = (function (){var G__20942 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__20943 = "\u00D7";
return React.DOM.button(G__20942,G__20943);
})();
return React.DOM.span(G__20940,G__20941);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20939),(function (){var G__20944 = {"className": "input-group-btn"};
var G__20945 = (function (){var G__20946 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__20947 = "\u00D7";
return React.DOM.button(G__20946,G__20947);
})();
return React.DOM.span(G__20944,G__20945);
})()], null))));
});})(state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

lomakkeet.fields.t20936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function (_20938){
var self__ = this;
var _20938__$1 = this;
return self__.meta20937;
});})(state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

lomakkeet.fields.t20936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function (_20938,meta20937__$1){
var self__ = this;
var _20938__$1 = this;
return (new lomakkeet.fields.t20936(self__.G__20912,self__.input_schema20907,self__.G__20933,self__.owner,self__.output_checker20909,self__.map__20935,self__.emptyable_input,self__.validate__6096__auto__,self__.G__20910,self__.real_input,self__.state,self__.output_schema20906,self__.input_checker20908,self__.opts,self__.map__20934,self__.ufv__,self__.G__20911,meta20937__$1));
});})(state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

lomakkeet.fields.t20936.cljs$lang$type = true;

lomakkeet.fields.t20936.cljs$lang$ctorStr = "lomakkeet.fields/t20936";

lomakkeet.fields.t20936.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t20936");
});})(state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

lomakkeet.fields.__GT_t20936 = ((function (state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953){
return (function __GT_t20936(G__20912__$1,input_schema20907__$1,G__20933__$2,owner__$3,output_checker20909__$1,map__20935__$2,emptyable_input__$1,validate__6096__auto____$1,G__20910__$1,real_input__$2,state__$3,output_schema20906__$1,input_checker20908__$1,opts__$2,map__20934__$2,ufv____$1,G__20911__$1,meta20937){
return (new lomakkeet.fields.t20936(G__20912__$1,input_schema20907__$1,G__20933__$2,owner__$3,output_checker20909__$1,map__20935__$2,emptyable_input__$1,validate__6096__auto____$1,G__20910__$1,real_input__$2,state__$3,output_schema20906__$1,input_checker20908__$1,opts__$2,map__20934__$2,ufv____$1,G__20911__$1,meta20937));
});})(state__$2,owner__$2,map__20935,map__20935__$1,opts__$1,real_input__$1,state,owner,G__20933,map__20934,map__20934__$1,opts,real_input,validate__6096__auto__,ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

}

return (new lomakkeet.fields.t20936(G__20912,input_schema20907_20951,G__20933__$1,owner__$2,output_checker20909_20953,map__20935__$1,emptyable_input,validate__6096__auto__,G__20910,real_input__$1,state__$2,output_schema20906_20950,input_checker20908_20952,opts__$1,map__20934__$1,ufv___20949,G__20911,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___20957 = (function (){var G__20948 = o__6099__auto__;
return (output_checker20909_20953.cljs$core$IFn$_invoke$arity$1 ? output_checker20909_20953.cljs$core$IFn$_invoke$arity$1(G__20948) : output_checker20909_20953.call(null,G__20948));
})();
if(cljs.core.truth_(temp__4126__auto___20957)){
var error__6098__auto___20958 = temp__4126__auto___20957;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20958], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20958,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20906_20950,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___20949,output_schema20906_20950,input_schema20907_20951,input_checker20908_20952,output_checker20909_20953))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema20906_20950,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20907_20951], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__7890__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__7890__auto__,m20905){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__7890__auto__,m20905);
});
__GT_emptyable_input = function(cursor__7890__auto__,m20905){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__7890__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__7890__auto__,m20905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___21011 = schema.utils.use_fn_validation;
var output_schema20960_21012 = schema.core.Any;
var input_schema20961_21013 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20962_21014 = schema.core.checker(input_schema20961_21013);
var output_checker20963_21015 = schema.core.checker(output_schema20960_21012);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function default_form_group(G__20964,G__20965,G__20966){
var validate__6096__auto__ = ufv___21011.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21016 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20964,G__20965,G__20966], null);
var temp__4126__auto___21017 = (function (){var G__20989 = args__6097__auto___21016;
return (input_checker20962_21014.cljs$core$IFn$_invoke$arity$1 ? input_checker20962_21014.cljs$core$IFn$_invoke$arity$1(G__20989) : input_checker20962_21014.call(null,G__20989));
})();
if(cljs.core.truth_(temp__4126__auto___21017)){
var error__6098__auto___21018 = temp__4126__auto___21017;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21018], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21018,cljs.core.constant$keyword$23,args__6097__auto___21016,cljs.core.constant$keyword$24,input_schema20961_21013,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__20992 = G__20964;
var map__20994 = G__20992;
var map__20994__$1 = ((cljs.core.seq_QMARK_(map__20994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20994):map__20994);
var input_state = map__20994__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994__$1,cljs.core.constant$keyword$22);
var owner = G__20965;
var G__20993 = G__20966;
var map__20995 = G__20993;
var map__20995__$1 = ((cljs.core.seq_QMARK_(map__20995))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20995):map__20995);
var opts = map__20995__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,cljs.core.constant$keyword$148);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20995__$1,cljs.core.constant$keyword$149,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,cljs.core.constant$keyword$135);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20995__$1,cljs.core.constant$keyword$122);
var G__20992__$1 = G__20992;
var owner__$1 = owner;
var G__20993__$1 = G__20993;
while(true){
var map__20996 = G__20992__$1;
var map__20996__$1 = ((cljs.core.seq_QMARK_(map__20996))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20996):map__20996);
var input_state__$1 = map__20996__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20996__$1,cljs.core.constant$keyword$22);
var owner__$2 = owner__$1;
var map__20997 = G__20993__$1;
var map__20997__$1 = ((cljs.core.seq_QMARK_(map__20997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20997):map__20997);
var opts__$1 = map__20997__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997__$1,cljs.core.constant$keyword$148);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20997__$1,cljs.core.constant$keyword$149,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997__$1,cljs.core.constant$keyword$135);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20997__$1,cljs.core.constant$keyword$122);
if(typeof lomakkeet.fields.t20998 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t20998 = (function (G__20992,input,G__20965,default_form_group,map__20996,owner,input_checker20962,G__20964,map__20997,output_schema20960,input_state,validate__6096__auto__,map__20994,input_schema20961,size,map__20995,output_checker20963,label,opts,G__20966,ufv__,help_text,error,G__20993,meta20999){
this.G__20992 = G__20992;
this.input = input;
this.G__20965 = G__20965;
this.default_form_group = default_form_group;
this.map__20996 = map__20996;
this.owner = owner;
this.input_checker20962 = input_checker20962;
this.G__20964 = G__20964;
this.map__20997 = map__20997;
this.output_schema20960 = output_schema20960;
this.input_state = input_state;
this.validate__6096__auto__ = validate__6096__auto__;
this.map__20994 = map__20994;
this.input_schema20961 = input_schema20961;
this.size = size;
this.map__20995 = map__20995;
this.output_checker20963 = output_checker20963;
this.label = label;
this.opts = opts;
this.G__20966 = G__20966;
this.ufv__ = ufv__;
this.help_text = help_text;
this.error = error;
this.G__20993 = G__20993;
this.meta20999 = meta20999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t20998.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t20998.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

lomakkeet.fields.t20998.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t20998.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__21002 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__21007 = cljs.core.PersistentVector.EMPTY;
var G__21007__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21007,"has-error"):G__21007);
var G__21007__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21007__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__21007__$1);
return G__21007__$2;
})()], null))};
var G__21003 = (function (){var attrs21001 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs21001))?sablono.interpreter.attributes(attrs21001):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21001))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21001),":"], null))));
})();
var G__21004 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,self__.opts,cljs.core.constant$keyword$86,s], null)));
var G__21005 = (cljs.core.truth_(self__.help_text)?(function (){var attrs21008 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs21008))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs21008], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21008))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21008)], null))));
})():null);
var G__21006 = (cljs.core.truth_((function (){var and__3616__auto__ = !(cljs.core.empty_QMARK_);
if(and__3616__auto__){
return self__.error;
} else {
return and__3616__auto__;
}
})())?(function (){var attrs21009 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs21009))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs21009], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21009)], null))));
})():null);
return React.DOM.div(G__21002,G__21003,G__21004,G__21005,G__21006);
});})(map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

lomakkeet.fields.t20998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function (_21000){
var self__ = this;
var _21000__$1 = this;
return self__.meta20999;
});})(map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

lomakkeet.fields.t20998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function (_21000,meta20999__$1){
var self__ = this;
var _21000__$1 = this;
return (new lomakkeet.fields.t20998(self__.G__20992,self__.input,self__.G__20965,self__.default_form_group,self__.map__20996,self__.owner,self__.input_checker20962,self__.G__20964,self__.map__20997,self__.output_schema20960,self__.input_state,self__.validate__6096__auto__,self__.map__20994,self__.input_schema20961,self__.size,self__.map__20995,self__.output_checker20963,self__.label,self__.opts,self__.G__20966,self__.ufv__,self__.help_text,self__.error,self__.G__20993,meta20999__$1));
});})(map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

lomakkeet.fields.t20998.cljs$lang$type = true;

lomakkeet.fields.t20998.cljs$lang$ctorStr = "lomakkeet.fields/t20998";

lomakkeet.fields.t20998.cljs$lang$ctorPrWriter = ((function (map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t20998");
});})(map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

lomakkeet.fields.__GT_t20998 = ((function (map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015){
return (function __GT_t20998(G__20992__$2,input__$2,G__20965__$1,default_form_group__$1,map__20996__$2,owner__$3,input_checker20962__$1,G__20964__$1,map__20997__$2,output_schema20960__$1,input_state__$2,validate__6096__auto____$1,map__20994__$2,input_schema20961__$1,size__$2,map__20995__$2,output_checker20963__$1,label__$2,opts__$2,G__20966__$1,ufv____$1,help_text__$2,error__$2,G__20993__$2,meta20999){
return (new lomakkeet.fields.t20998(G__20992__$2,input__$2,G__20965__$1,default_form_group__$1,map__20996__$2,owner__$3,input_checker20962__$1,G__20964__$1,map__20997__$2,output_schema20960__$1,input_state__$2,validate__6096__auto____$1,map__20994__$2,input_schema20961__$1,size__$2,map__20995__$2,output_checker20963__$1,label__$2,opts__$2,G__20966__$1,ufv____$1,help_text__$2,error__$2,G__20993__$2,meta20999));
});})(map__20996,map__20996__$1,input_state__$1,error__$1,owner__$2,map__20997,map__20997__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__20992,map__20994,map__20994__$1,input_state,error,owner,G__20993,map__20995,map__20995__$1,opts,help_text,size,label,input,validate__6096__auto__,ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

}

return (new lomakkeet.fields.t20998(G__20992__$1,input__$1,G__20965,default_form_group,map__20996__$1,owner__$2,input_checker20962_21014,G__20964,map__20997__$1,output_schema20960_21012,input_state__$1,validate__6096__auto__,map__20994__$1,input_schema20961_21013,size__$1,map__20995__$1,output_checker20963_21015,label__$1,opts__$1,G__20966,ufv___21011,help_text__$1,error__$1,G__20993__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21019 = (function (){var G__21010 = o__6099__auto__;
return (output_checker20963_21015.cljs$core$IFn$_invoke$arity$1 ? output_checker20963_21015.cljs$core$IFn$_invoke$arity$1(G__21010) : output_checker20963_21015.call(null,G__21010));
})();
if(cljs.core.truth_(temp__4126__auto___21019)){
var error__6098__auto___21020 = temp__4126__auto___21019;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21020], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21020,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20960_21012,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21011,output_schema20960_21012,input_schema20961_21013,input_checker20962_21014,output_checker20963_21015))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema20960_21012,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20961_21013], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__7890__auto__);
});
var __GT_default_form_group__2 = (function (cursor__7890__auto__,m20959){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__7890__auto__,m20959);
});
__GT_default_form_group = function(cursor__7890__auto__,m20959){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__7890__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__7890__auto__,m20959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__21021){
var map__21027 = p__21021;
var map__21027__$1 = ((cljs.core.seq_QMARK_(map__21027))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21027):map__21027);
var opts = map__21027__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027__$1,cljs.core.constant$keyword$144);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027__$1,cljs.core.constant$keyword$150);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21027__$1,cljs.core.constant$keyword$151);
var map__21028 = form_state;
var map__21028__$1 = ((cljs.core.seq_QMARK_(map__21028))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21028):map__21028);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028__$1,cljs.core.constant$keyword$24);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028__$1,cljs.core.constant$keyword$152);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028__$1,cljs.core.constant$keyword$23);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21029 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21029) : cljs.core.deref.call(null,G__21029));
})(),ks),cljs.core.constant$keyword$22,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21030 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21030) : cljs.core.deref.call(null,G__21030));
})(),ks):null),cljs.core.constant$keyword$24,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__21031 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21031) : cljs.core.deref.call(null,G__21031));
})(),ks):null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$86),cljs.core.constant$keyword$86,cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(opts)], null));
});
lomakkeet.fields.input_input = (function input_input(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text",cljs.core.constant$keyword$23,(function (){var or__3628__auto__ = value;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$154,cb], null)], null);
});
lomakkeet.fields.input_textarea = (function input_textarea(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,(function (){var or__3628__auto__ = value;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$154,cb], null)], null);
});
lomakkeet.fields.input_static = (function input_static(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,value], null);
});

var ufv___21072 = schema.utils.use_fn_validation;
var output_schema21033_21073 = schema.core.Any;
var input_schema21034_21074 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21035_21075 = schema.core.checker(input_schema21034_21074);
var output_checker21036_21076 = schema.core.checker(output_schema21033_21073);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function input_STAR_(G__21037,G__21038,G__21039){
var validate__6096__auto__ = ufv___21072.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21077 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21037,G__21038,G__21039], null);
var temp__4126__auto___21078 = (function (){var G__21056 = args__6097__auto___21077;
return (input_checker21035_21075.cljs$core$IFn$_invoke$arity$1 ? input_checker21035_21075.cljs$core$IFn$_invoke$arity$1(G__21056) : input_checker21035_21075.call(null,G__21056));
})();
if(cljs.core.truth_(temp__4126__auto___21078)){
var error__6098__auto___21079 = temp__4126__auto___21078;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21079], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21079,cljs.core.constant$keyword$23,args__6097__auto___21077,cljs.core.constant$keyword$24,input_schema21034_21074,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21059 = G__21037;
var map__21061 = G__21059;
var map__21061__$1 = ((cljs.core.seq_QMARK_(map__21061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21061):map__21061);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.constant$keyword$23);
var owner = G__21038;
var G__21060 = G__21039;
var map__21062 = G__21060;
var map__21062__$1 = ((cljs.core.seq_QMARK_(map__21062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21062):map__21062);
var opts = map__21062__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21062__$1,cljs.core.constant$keyword$157,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21062__$1,cljs.core.constant$keyword$158,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.constant$keyword$145);
var G__21059__$1 = G__21059;
var owner__$1 = owner;
var G__21060__$1 = G__21060;
while(true){
var map__21063 = G__21059__$1;
var map__21063__$1 = ((cljs.core.seq_QMARK_(map__21063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21063):map__21063);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21064 = G__21060__$1;
var map__21064__$1 = ((cljs.core.seq_QMARK_(map__21064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21064):map__21064);
var opts__$1 = map__21064__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21064__$1,cljs.core.constant$keyword$157,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21064__$1,cljs.core.constant$keyword$158,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21064__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t21065 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21065 = (function (owner,G__21037,input_STAR_,map__21064,el,G__21060,ks,validate__6096__auto__,G__21059,output_schema21033,value,map__21062,input_schema21034,output_checker21036,map__21063,transform_value,map__21061,G__21038,ch,G__21039,input_checker21035,opts,ufv__,meta21066){
this.owner = owner;
this.G__21037 = G__21037;
this.input_STAR_ = input_STAR_;
this.map__21064 = map__21064;
this.el = el;
this.G__21060 = G__21060;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__21059 = G__21059;
this.output_schema21033 = output_schema21033;
this.value = value;
this.map__21062 = map__21062;
this.input_schema21034 = input_schema21034;
this.output_checker21036 = output_checker21036;
this.map__21063 = map__21063;
this.transform_value = transform_value;
this.map__21061 = map__21061;
this.G__21038 = G__21038;
this.ch = ch;
this.G__21039 = G__21039;
this.input_checker21035 = input_checker21035;
this.opts = opts;
this.ufv__ = ufv__;
this.meta21066 = meta21066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21065.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21065.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

lomakkeet.fields.t21065.prototype.om$core$IRender$ = true;

lomakkeet.fields.t21065.prototype.om$core$IRender$render$arity$1 = ((function (map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__21068 = (function (){var G__21070 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__21070) : self__.transform_value.call(null,G__21070));
})();
var G__21069 = ((function (G__21068,___$1,map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,e.target.value], null));
});})(G__21068,___$1,map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__21068,G__21069) : self__.el.call(null,G__21068,G__21069));
})());
});})(map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

lomakkeet.fields.t21065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function (_21067){
var self__ = this;
var _21067__$1 = this;
return self__.meta21066;
});})(map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

lomakkeet.fields.t21065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function (_21067,meta21066__$1){
var self__ = this;
var _21067__$1 = this;
return (new lomakkeet.fields.t21065(self__.owner,self__.G__21037,self__.input_STAR_,self__.map__21064,self__.el,self__.G__21060,self__.ks,self__.validate__6096__auto__,self__.G__21059,self__.output_schema21033,self__.value,self__.map__21062,self__.input_schema21034,self__.output_checker21036,self__.map__21063,self__.transform_value,self__.map__21061,self__.G__21038,self__.ch,self__.G__21039,self__.input_checker21035,self__.opts,self__.ufv__,meta21066__$1));
});})(map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

lomakkeet.fields.t21065.cljs$lang$type = true;

lomakkeet.fields.t21065.cljs$lang$ctorStr = "lomakkeet.fields/t21065";

lomakkeet.fields.t21065.cljs$lang$ctorPrWriter = ((function (map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21065");
});})(map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

lomakkeet.fields.__GT_t21065 = ((function (map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076){
return (function __GT_t21065(owner__$3,G__21037__$1,input_STAR___$1,map__21064__$2,el__$2,G__21060__$2,ks__$2,validate__6096__auto____$1,G__21059__$2,output_schema21033__$1,value__$2,map__21062__$2,input_schema21034__$1,output_checker21036__$1,map__21063__$2,transform_value__$2,map__21061__$2,G__21038__$1,ch__$2,G__21039__$1,input_checker21035__$1,opts__$2,ufv____$1,meta21066){
return (new lomakkeet.fields.t21065(owner__$3,G__21037__$1,input_STAR___$1,map__21064__$2,el__$2,G__21060__$2,ks__$2,validate__6096__auto____$1,G__21059__$2,output_schema21033__$1,value__$2,map__21062__$2,input_schema21034__$1,output_checker21036__$1,map__21063__$2,transform_value__$2,map__21061__$2,G__21038__$1,ch__$2,G__21039__$1,input_checker21035__$1,opts__$2,ufv____$1,meta21066));
});})(map__21063,map__21063__$1,value__$1,owner__$2,map__21064,map__21064__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21059,map__21061,map__21061__$1,value,owner,G__21060,map__21062,map__21062__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

}

return (new lomakkeet.fields.t21065(owner__$2,G__21037,input_STAR_,map__21064__$1,el__$1,G__21060__$1,ks__$1,validate__6096__auto__,G__21059__$1,output_schema21033_21073,value__$1,map__21062__$1,input_schema21034_21074,output_checker21036_21076,map__21063__$1,transform_value__$1,map__21061__$1,G__21038,ch__$1,G__21039,input_checker21035_21075,opts__$1,ufv___21072,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21080 = (function (){var G__21071 = o__6099__auto__;
return (output_checker21036_21076.cljs$core$IFn$_invoke$arity$1 ? output_checker21036_21076.cljs$core$IFn$_invoke$arity$1(G__21071) : output_checker21036_21076.call(null,G__21071));
})();
if(cljs.core.truth_(temp__4126__auto___21080)){
var error__6098__auto___21081 = temp__4126__auto___21080;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21081], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21081,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21033_21073,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21072,output_schema21033_21073,input_schema21034_21074,input_checker21035_21075,output_checker21036_21076))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema21033_21073,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21034_21074], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__7890__auto__);
});
var __GT_input_STAR___2 = (function (cursor__7890__auto__,m21032){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__7890__auto__,m21032);
});
__GT_input_STAR_ = function(cursor__7890__auto__,m21032){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__7890__auto__,m21032);
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
var input__delegate = function (form,label,ks,p__21082){
var vec__21084 = p__21082;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21084,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__21082 = null;
if (arguments.length > 3) {
  p__21082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return input__delegate.call(this,form,label,ks,p__21082);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__21085){
var form = cljs.core.first(arglist__21085);
arglist__21085 = cljs.core.next(arglist__21085);
var label = cljs.core.first(arglist__21085);
arglist__21085 = cljs.core.next(arglist__21085);
var ks = cljs.core.first(arglist__21085);
var p__21082 = cljs.core.rest(arglist__21085);
return input__delegate(form,label,ks,p__21082);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__21086){
var vec__21088 = p__21086;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21088,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__21086 = null;
if (arguments.length > 3) {
  p__21086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return textarea__delegate.call(this,form,label,ks,p__21086);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__21089){
var form = cljs.core.first(arglist__21089);
arglist__21089 = cljs.core.next(arglist__21089);
var label = cljs.core.first(arglist__21089);
arglist__21089 = cljs.core.next(arglist__21089);
var ks = cljs.core.first(arglist__21089);
var p__21086 = cljs.core.rest(arglist__21089);
return textarea__delegate(form,label,ks,p__21086);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__21090){
var vec__21092 = p__21090;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21092,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__21090 = null;
if (arguments.length > 3) {
  p__21090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return static$__delegate.call(this,form,label,ks,p__21090);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__21093){
var form = cljs.core.first(arglist__21093);
arglist__21093 = cljs.core.next(arglist__21093);
var label = cljs.core.first(arglist__21093);
arglist__21093 = cljs.core.next(arglist__21093);
var ks = cljs.core.first(arglist__21093);
var p__21090 = cljs.core.rest(arglist__21093);
return static$__delegate(form,label,ks,p__21090);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___21130 = schema.utils.use_fn_validation;
var output_schema21095_21131 = schema.core.Any;
var input_schema21096_21132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21097_21133 = schema.core.checker(input_schema21096_21132);
var output_checker21098_21134 = schema.core.checker(output_schema21095_21131);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function checkbox_STAR_(G__21099,G__21100,G__21101){
var validate__6096__auto__ = ufv___21130.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21099,G__21100,G__21101], null);
var temp__4126__auto___21136 = (function (){var G__21116 = args__6097__auto___21135;
return (input_checker21097_21133.cljs$core$IFn$_invoke$arity$1 ? input_checker21097_21133.cljs$core$IFn$_invoke$arity$1(G__21116) : input_checker21097_21133.call(null,G__21116));
})();
if(cljs.core.truth_(temp__4126__auto___21136)){
var error__6098__auto___21137 = temp__4126__auto___21136;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21137], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21137,cljs.core.constant$keyword$23,args__6097__auto___21135,cljs.core.constant$keyword$24,input_schema21096_21132,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21119 = G__21099;
var map__21121 = G__21119;
var map__21121__$1 = ((cljs.core.seq_QMARK_(map__21121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21121):map__21121);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.constant$keyword$23);
var owner = G__21100;
var G__21120 = G__21101;
var map__21122 = G__21120;
var map__21122__$1 = ((cljs.core.seq_QMARK_(map__21122))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21122):map__21122);
var opts = map__21122__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122__$1,cljs.core.constant$keyword$145);
var G__21119__$1 = G__21119;
var owner__$1 = owner;
var G__21120__$1 = G__21120;
while(true){
var map__21123 = G__21119__$1;
var map__21123__$1 = ((cljs.core.seq_QMARK_(map__21123))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21123):map__21123);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21124 = G__21120__$1;
var map__21124__$1 = ((cljs.core.seq_QMARK_(map__21124))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21124):map__21124);
var opts__$1 = map__21124__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t21125 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21125 = (function (G__21119,input_checker21097,map__21121,owner,map__21124,input_schema21096,ks,validate__6096__auto__,value,G__21120,G__21101,output_schema21095,ch,map__21123,output_checker21098,G__21099,map__21122,checkbox_STAR_,G__21100,opts,ufv__,meta21126){
this.G__21119 = G__21119;
this.input_checker21097 = input_checker21097;
this.map__21121 = map__21121;
this.owner = owner;
this.map__21124 = map__21124;
this.input_schema21096 = input_schema21096;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.value = value;
this.G__21120 = G__21120;
this.G__21101 = G__21101;
this.output_schema21095 = output_schema21095;
this.ch = ch;
this.map__21123 = map__21123;
this.output_checker21098 = output_checker21098;
this.G__21099 = G__21099;
this.map__21122 = map__21122;
this.checkbox_STAR_ = checkbox_STAR_;
this.G__21100 = G__21100;
this.opts = opts;
this.ufv__ = ufv__;
this.meta21126 = meta21126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21125.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21125.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

lomakkeet.fields.t21125.prototype.om$core$IRender$ = true;

lomakkeet.fields.t21125.prototype.om$core$IRender$render$arity$1 = ((function (map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21128 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,e.target.checked], null));
});})(___$1,map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__21128) : sablono.interpreter.input.call(null,G__21128));
});})(map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

lomakkeet.fields.t21125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function (_21127){
var self__ = this;
var _21127__$1 = this;
return self__.meta21126;
});})(map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

lomakkeet.fields.t21125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function (_21127,meta21126__$1){
var self__ = this;
var _21127__$1 = this;
return (new lomakkeet.fields.t21125(self__.G__21119,self__.input_checker21097,self__.map__21121,self__.owner,self__.map__21124,self__.input_schema21096,self__.ks,self__.validate__6096__auto__,self__.value,self__.G__21120,self__.G__21101,self__.output_schema21095,self__.ch,self__.map__21123,self__.output_checker21098,self__.G__21099,self__.map__21122,self__.checkbox_STAR_,self__.G__21100,self__.opts,self__.ufv__,meta21126__$1));
});})(map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

lomakkeet.fields.t21125.cljs$lang$type = true;

lomakkeet.fields.t21125.cljs$lang$ctorStr = "lomakkeet.fields/t21125";

lomakkeet.fields.t21125.cljs$lang$ctorPrWriter = ((function (map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21125");
});})(map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

lomakkeet.fields.__GT_t21125 = ((function (map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134){
return (function __GT_t21125(G__21119__$2,input_checker21097__$1,map__21121__$2,owner__$3,map__21124__$2,input_schema21096__$1,ks__$2,validate__6096__auto____$1,value__$2,G__21120__$2,G__21101__$1,output_schema21095__$1,ch__$2,map__21123__$2,output_checker21098__$1,G__21099__$1,map__21122__$2,checkbox_STAR___$1,G__21100__$1,opts__$2,ufv____$1,meta21126){
return (new lomakkeet.fields.t21125(G__21119__$2,input_checker21097__$1,map__21121__$2,owner__$3,map__21124__$2,input_schema21096__$1,ks__$2,validate__6096__auto____$1,value__$2,G__21120__$2,G__21101__$1,output_schema21095__$1,ch__$2,map__21123__$2,output_checker21098__$1,G__21099__$1,map__21122__$2,checkbox_STAR___$1,G__21100__$1,opts__$2,ufv____$1,meta21126));
});})(map__21123,map__21123__$1,value__$1,owner__$2,map__21124,map__21124__$1,opts__$1,ks__$1,ch__$1,G__21119,map__21121,map__21121__$1,value,owner,G__21120,map__21122,map__21122__$1,opts,ks,ch,validate__6096__auto__,ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

}

return (new lomakkeet.fields.t21125(G__21119__$1,input_checker21097_21133,map__21121__$1,owner__$2,map__21124__$1,input_schema21096_21132,ks__$1,validate__6096__auto__,value__$1,G__21120__$1,G__21101,output_schema21095_21131,ch__$1,map__21123__$1,output_checker21098_21134,G__21099,map__21122__$1,checkbox_STAR_,G__21100,opts__$1,ufv___21130,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21138 = (function (){var G__21129 = o__6099__auto__;
return (output_checker21098_21134.cljs$core$IFn$_invoke$arity$1 ? output_checker21098_21134.cljs$core$IFn$_invoke$arity$1(G__21129) : output_checker21098_21134.call(null,G__21129));
})();
if(cljs.core.truth_(temp__4126__auto___21138)){
var error__6098__auto___21139 = temp__4126__auto___21138;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21139], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21139,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21095_21131,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21130,output_schema21095_21131,input_schema21096_21132,input_checker21097_21133,output_checker21098_21134))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema21095_21131,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21096_21132], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__7890__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__7890__auto__,m21094){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__7890__auto__,m21094);
});
__GT_checkbox_STAR_ = function(cursor__7890__auto__,m21094){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__7890__auto__,m21094);
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
var checkbox__delegate = function (form,label,ks,p__21140){
var vec__21142 = p__21140;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21142,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__21140 = null;
if (arguments.length > 3) {
  p__21140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return checkbox__delegate.call(this,form,label,ks,p__21140);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__21143){
var form = cljs.core.first(arglist__21143);
arglist__21143 = cljs.core.next(arglist__21143);
var label = cljs.core.first(arglist__21143);
arglist__21143 = cljs.core.next(arglist__21143);
var ks = cljs.core.first(arglist__21143);
var p__21140 = cljs.core.rest(arglist__21143);
return checkbox__delegate(form,label,ks,p__21140);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___21202 = schema.utils.use_fn_validation;
var output_schema21145_21203 = schema.core.Any;
var input_schema21146_21204 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21147_21205 = schema.core.checker(input_schema21146_21204);
var output_checker21148_21206 = schema.core.checker(output_schema21145_21203);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function select_STAR_(G__21149,G__21150,G__21151){
var validate__6096__auto__ = ufv___21202.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21207 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21149,G__21150,G__21151], null);
var temp__4126__auto___21208 = (function (){var G__21177 = args__6097__auto___21207;
return (input_checker21147_21205.cljs$core$IFn$_invoke$arity$1 ? input_checker21147_21205.cljs$core$IFn$_invoke$arity$1(G__21177) : input_checker21147_21205.call(null,G__21177));
})();
if(cljs.core.truth_(temp__4126__auto___21208)){
var error__6098__auto___21209 = temp__4126__auto___21208;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21209], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21209,cljs.core.constant$keyword$23,args__6097__auto___21207,cljs.core.constant$keyword$24,input_schema21146_21204,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21180 = G__21149;
var map__21182 = G__21180;
var map__21182__$1 = ((cljs.core.seq_QMARK_(map__21182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21182):map__21182);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21182__$1,cljs.core.constant$keyword$23);
var owner = G__21150;
var G__21181 = G__21151;
var map__21183 = G__21181;
var map__21183__$1 = ((cljs.core.seq_QMARK_(map__21183))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21183):map__21183);
var opts = map__21183__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.constant$keyword$159);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21183__$1,cljs.core.constant$keyword$145);
var G__21180__$1 = G__21180;
var owner__$1 = owner;
var G__21181__$1 = G__21181;
while(true){
var map__21184 = G__21180__$1;
var map__21184__$1 = ((cljs.core.seq_QMARK_(map__21184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21184):map__21184);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21184__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21185 = G__21181__$1;
var map__21185__$1 = ((cljs.core.seq_QMARK_(map__21185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21185):map__21185);
var opts__$1 = map__21185__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,cljs.core.constant$keyword$159);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t21186 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21186 = (function (options,G__21181,owner,map__21185,G__21149,input_schema21146,ks,G__21151,validate__6096__auto__,G__21180,G__21150,value,map__21182,output_checker21148,map__21184,input_checker21147,ch,map__21183,select_STAR_,opts,ufv__,output_schema21145,meta21187){
this.options = options;
this.G__21181 = G__21181;
this.owner = owner;
this.map__21185 = map__21185;
this.G__21149 = G__21149;
this.input_schema21146 = input_schema21146;
this.ks = ks;
this.G__21151 = G__21151;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__21180 = G__21180;
this.G__21150 = G__21150;
this.value = value;
this.map__21182 = map__21182;
this.output_checker21148 = output_checker21148;
this.map__21184 = map__21184;
this.input_checker21147 = input_checker21147;
this.ch = ch;
this.map__21183 = map__21183;
this.select_STAR_ = select_STAR_;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema21145 = output_schema21145;
this.meta21187 = meta21187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21186.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21186.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

lomakkeet.fields.t21186.prototype.om$core$IRender$ = true;

lomakkeet.fields.t21186.prototype.om$core$IRender$render$arity$1 = ((function (map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21189 = {"className": "form-control", "value": self__.value, "onChange": ((function (___$1,map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,e.target.value], null));
});})(___$1,map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
};
var G__21190 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__4384__auto__ = ((function (G__21189,___$1,map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function iter__21191(s__21192){
return (new cljs.core.LazySeq(null,((function (G__21189,___$1,map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (){
var s__21192__$1 = s__21192;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21192__$1);
if(temp__4126__auto__){
var s__21192__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21192__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__21192__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__21194 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__21193 = (0);
while(true){
if((i__21193 < size__4383__auto__)){
var vec__21199 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__21193);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21199,(1),null);
cljs.core.chunk_append(b__21194,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,k,cljs.core.constant$keyword$49,k], null),v], null));

var G__21210 = (i__21193 + (1));
i__21193 = G__21210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21194),iter__21191(cljs.core.chunk_rest(s__21192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21194),null);
}
} else {
var vec__21200 = cljs.core.first(s__21192__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21200,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,k,cljs.core.constant$keyword$49,k], null),v], null),iter__21191(cljs.core.rest(s__21192__$2)));
}
} else {
return null;
}
break;
}
});})(G__21189,___$1,map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
,null,null));
});})(G__21189,___$1,map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;
return iter__4384__auto__(self__.options);
})():null));
return React.DOM.select(G__21189,G__21190);
});})(map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

lomakkeet.fields.t21186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (_21188){
var self__ = this;
var _21188__$1 = this;
return self__.meta21187;
});})(map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

lomakkeet.fields.t21186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (_21188,meta21187__$1){
var self__ = this;
var _21188__$1 = this;
return (new lomakkeet.fields.t21186(self__.options,self__.G__21181,self__.owner,self__.map__21185,self__.G__21149,self__.input_schema21146,self__.ks,self__.G__21151,self__.validate__6096__auto__,self__.G__21180,self__.G__21150,self__.value,self__.map__21182,self__.output_checker21148,self__.map__21184,self__.input_checker21147,self__.ch,self__.map__21183,self__.select_STAR_,self__.opts,self__.ufv__,self__.output_schema21145,meta21187__$1));
});})(map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

lomakkeet.fields.t21186.cljs$lang$type = true;

lomakkeet.fields.t21186.cljs$lang$ctorStr = "lomakkeet.fields/t21186";

lomakkeet.fields.t21186.cljs$lang$ctorPrWriter = ((function (map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21186");
});})(map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

lomakkeet.fields.__GT_t21186 = ((function (map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206){
return (function __GT_t21186(options__$2,G__21181__$2,owner__$3,map__21185__$2,G__21149__$1,input_schema21146__$1,ks__$2,G__21151__$1,validate__6096__auto____$1,G__21180__$2,G__21150__$1,value__$2,map__21182__$2,output_checker21148__$1,map__21184__$2,input_checker21147__$1,ch__$2,map__21183__$2,select_STAR___$1,opts__$2,ufv____$1,output_schema21145__$1,meta21187){
return (new lomakkeet.fields.t21186(options__$2,G__21181__$2,owner__$3,map__21185__$2,G__21149__$1,input_schema21146__$1,ks__$2,G__21151__$1,validate__6096__auto____$1,G__21180__$2,G__21150__$1,value__$2,map__21182__$2,output_checker21148__$1,map__21184__$2,input_checker21147__$1,ch__$2,map__21183__$2,select_STAR___$1,opts__$2,ufv____$1,output_schema21145__$1,meta21187));
});})(map__21184,map__21184__$1,value__$1,owner__$2,map__21185,map__21185__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21180,map__21182,map__21182__$1,value,owner,G__21181,map__21183,map__21183__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

}

return (new lomakkeet.fields.t21186(options__$1,G__21181__$1,owner__$2,map__21185__$1,G__21149,input_schema21146_21204,ks__$1,G__21151,validate__6096__auto__,G__21180__$1,G__21150,value__$1,map__21182__$1,output_checker21148_21206,map__21184__$1,input_checker21147_21205,ch__$1,map__21183__$1,select_STAR_,opts__$1,ufv___21202,output_schema21145_21203,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21211 = (function (){var G__21201 = o__6099__auto__;
return (output_checker21148_21206.cljs$core$IFn$_invoke$arity$1 ? output_checker21148_21206.cljs$core$IFn$_invoke$arity$1(G__21201) : output_checker21148_21206.call(null,G__21201));
})();
if(cljs.core.truth_(temp__4126__auto___21211)){
var error__6098__auto___21212 = temp__4126__auto___21211;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21212], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21212,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21145_21203,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21202,output_schema21145_21203,input_schema21146_21204,input_checker21147_21205,output_checker21148_21206))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema21145_21203,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21146_21204], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__7890__auto__);
});
var __GT_select_STAR___2 = (function (cursor__7890__auto__,m21144){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__7890__auto__,m21144);
});
__GT_select_STAR_ = function(cursor__7890__auto__,m21144){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__7890__auto__,m21144);
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
var select__delegate = function (form,label,ks,options,p__21213){
var vec__21215 = p__21213;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$159,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__21213 = null;
if (arguments.length > 4) {
  p__21213 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return select__delegate.call(this,form,label,ks,options,p__21213);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__21216){
var form = cljs.core.first(arglist__21216);
arglist__21216 = cljs.core.next(arglist__21216);
var label = cljs.core.first(arglist__21216);
arglist__21216 = cljs.core.next(arglist__21216);
var ks = cljs.core.first(arglist__21216);
arglist__21216 = cljs.core.next(arglist__21216);
var options = cljs.core.first(arglist__21216);
var p__21213 = cljs.core.rest(arglist__21216);
return select__delegate(form,label,ks,options,p__21213);
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
lomakkeet.fields.FormState = schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$23,schema.core.Any,cljs.core.constant$keyword$160,schema.core.Any,cljs.core.constant$keyword$152,schema.core.Any,cljs.core.constant$keyword$24,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null));
lomakkeet.fields.__GT_form_state = (function() {
var __GT_form_state = null;
var __GT_form_state__1 = (function (value){
return __GT_form_state.cljs$core$IFn$_invoke$arity$2(value,null);
});
var __GT_form_state__2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$160,value,cljs.core.constant$keyword$152,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$24,schema__$1], null);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.constant$keyword$23,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.save_form = (function save_form(p__21219,value){
var map__21221 = p__21219;
var map__21221__$1 = ((cljs.core.seq_QMARK_(map__21221))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21221):map__21221);
var form_state = map__21221__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221__$1,cljs.core.constant$keyword$24);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$23,value,cljs.core.array_seq([cljs.core.constant$keyword$160,value,cljs.core.constant$keyword$152,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__21222,f,args){
var map__21224 = p__21222;
var map__21224__$1 = ((cljs.core.seq_QMARK_(map__21224))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21224):map__21224);
var form_state = map__21224__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21224__$1,cljs.core.constant$keyword$23);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__21222,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_form__delegate.call(this,p__21222,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__21225){
var p__21222 = cljs.core.first(arglist__21225);
arglist__21225 = cljs.core.next(arglist__21225);
var f = cljs.core.first(arglist__21225);
var args = cljs.core.rest(arglist__21225);
return update_form__delegate(p__21222,f,args);
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
return (function (p1__21226_SHARP_){
return lomakkeet.fields.dissoc_in(p1__21226_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___21531 = schema.utils.use_fn_validation;
var output_schema21228_21532 = schema.core.Any;
var input_schema21229_21533 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21230_21534 = schema.core.checker(input_schema21229_21533);
var output_checker21231_21535 = schema.core.checker(output_schema21228_21532);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function form(G__21232,G__21233,G__21234){
var validate__6096__auto__ = ufv___21531.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21536 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21232,G__21233,G__21234], null);
var temp__4126__auto___21537 = (function (){var G__21383 = args__6097__auto___21536;
return (input_checker21230_21534.cljs$core$IFn$_invoke$arity$1 ? input_checker21230_21534.cljs$core$IFn$_invoke$arity$1(G__21383) : input_checker21230_21534.call(null,G__21383));
})();
if(cljs.core.truth_(temp__4126__auto___21537)){
var error__6098__auto___21538 = temp__4126__auto___21537;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21538], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21538,cljs.core.constant$keyword$23,args__6097__auto___21536,cljs.core.constant$keyword$24,input_schema21229_21533,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21386 = G__21232;
var map__21388 = G__21386;
var map__21388__$1 = ((cljs.core.seq_QMARK_(map__21388))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21388):map__21388);
var form_state = map__21388__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21388__$1,cljs.core.constant$keyword$160);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21388__$1,cljs.core.constant$keyword$23);
var owner = G__21233;
var G__21387 = G__21234;
var map__21389 = G__21387;
var map__21389__$1 = ((cljs.core.seq_QMARK_(map__21389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21389):map__21389);
var opts = map__21389__$1;
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$161);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$141);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$162);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.constant$keyword$163);
var G__21386__$1 = G__21386;
var owner__$1 = owner;
var G__21387__$1 = G__21387;
while(true){
var map__21390 = G__21386__$1;
var map__21390__$1 = ((cljs.core.seq_QMARK_(map__21390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21390):map__21390);
var form_state__$1 = map__21390__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.constant$keyword$160);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21391 = G__21387__$1;
var map__21391__$1 = ((cljs.core.seq_QMARK_(map__21391))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21391):map__21391);
var opts__$1 = map__21391__$1;
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,cljs.core.constant$keyword$161);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,cljs.core.constant$keyword$141);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,cljs.core.constant$keyword$162);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21391__$1,cljs.core.constant$keyword$163);
if(typeof lomakkeet.fields.t21392 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21392 = (function (form,output_checker21231,owner,map__21390,G__21232,G__21387,G__21386,form_validation_fn,map__21391,form_state,map__21389,G__21233,render_fn,validate__6096__auto__,value,map__21388,actions,input_schema21229,input_checker21230,G__21234,output_schema21228,opts,initial_value,ufv__,meta21393){
this.form = form;
this.output_checker21231 = output_checker21231;
this.owner = owner;
this.map__21390 = map__21390;
this.G__21232 = G__21232;
this.G__21387 = G__21387;
this.G__21386 = G__21386;
this.form_validation_fn = form_validation_fn;
this.map__21391 = map__21391;
this.form_state = form_state;
this.map__21389 = map__21389;
this.G__21233 = G__21233;
this.render_fn = render_fn;
this.validate__6096__auto__ = validate__6096__auto__;
this.value = value;
this.map__21388 = map__21388;
this.actions = actions;
this.input_schema21229 = input_schema21229;
this.input_checker21230 = input_checker21230;
this.G__21234 = G__21234;
this.output_schema21228 = output_schema21228;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.meta21393 = meta21393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21392.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21392.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.t21392.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t21392.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__21395 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$151,self__.form_state,cljs.core.constant$keyword$23,(function (){var G__21396 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21396) : cljs.core.deref.call(null,G__21396));
})(),cljs.core.constant$keyword$160,(function (){var G__21397 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21397) : cljs.core.deref.call(null,G__21397));
})(),cljs.core.constant$keyword$141,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$151,self__.form_state),cljs.core.constant$keyword$145,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__21395) : self__.render_fn.call(null,G__21395));
})());
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.t21392.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t21392.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__21399 = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21399) : cljs.core.deref.call(null,G__21399));
})():null);
var map__21398 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__21398__$1 = ((cljs.core.seq_QMARK_(map__21398))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21398):map__21398);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$164);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.constant$keyword$145);
var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (state_21470){
var state_val_21471 = (state_21470[(1)]);
if((state_val_21471 === (7))){
var inst_21407 = (state_21470[(7)]);
var inst_21402 = (state_21470[(8)]);
var inst_21404 = (state_21470[(9)]);
var inst_21406 = (function (){var G__21472 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21472) : cljs.core.deref.call(null,G__21472));
})();
var inst_21407__$1 = (function (){var G__21473 = inst_21406;
var G__21474 = inst_21402;
return (inst_21404.cljs$core$IFn$_invoke$arity$2 ? inst_21404.cljs$core$IFn$_invoke$arity$2(G__21473,G__21474) : inst_21404.call(null,G__21473,G__21474));
})();
var inst_21408 = lomakkeet.fields.chan_QMARK_(inst_21407__$1);
var state_21470__$1 = (function (){var statearr_21475 = state_21470;
(statearr_21475[(7)] = inst_21407__$1);

return statearr_21475;
})();
if(inst_21408){
var statearr_21476_21539 = state_21470__$1;
(statearr_21476_21539[(1)] = (10));

} else {
var statearr_21477_21540 = state_21470__$1;
(statearr_21477_21540[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (20))){
var state_21470__$1 = state_21470;
var statearr_21478_21541 = state_21470__$1;
(statearr_21478_21541[(2)] = null);

(statearr_21478_21541[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (1))){
var state_21470__$1 = state_21470;
var statearr_21479_21542 = state_21470__$1;
(statearr_21479_21542[(2)] = null);

(statearr_21479_21542[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (24))){
var inst_21457 = (state_21470[(10)]);
var inst_21463 = (state_21470[(2)]);
var inst_21464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21457,inst_21463], 0));
var inst_21465 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$152,inst_21464);
var state_21470__$1 = (function (){var statearr_21480 = state_21470;
(statearr_21480[(11)] = inst_21465);

return statearr_21480;
})();
var statearr_21481_21543 = state_21470__$1;
(statearr_21481_21543[(2)] = null);

(statearr_21481_21543[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (4))){
var inst_21402 = (state_21470[(8)]);
var inst_21402__$1 = (state_21470[(2)]);
var inst_21449 = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(inst_21402__$1);
var state_21470__$1 = (function (){var statearr_21482 = state_21470;
(statearr_21482[(8)] = inst_21402__$1);

return statearr_21482;
})();
var G__21483_21544 = (((inst_21449 instanceof cljs.core.Keyword))?inst_21449.fqn:null);
switch (G__21483_21544) {
case "change":
var statearr_21484_21546 = state_21470__$1;
(statearr_21484_21546[(1)] = (14));


break;
case "cancel":
var statearr_21485_21547 = state_21470__$1;
(statearr_21485_21547[(1)] = (13));


break;
case "action":
var statearr_21486_21548 = state_21470__$1;
(statearr_21486_21548[(1)] = (6));


break;
default:
var statearr_21487_21549 = state_21470__$1;
(statearr_21487_21549[(1)] = (18));



}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (15))){
var inst_21402 = (state_21470[(8)]);
var inst_21435 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21402);
var state_21470__$1 = state_21470;
var statearr_21488_21550 = state_21470__$1;
(statearr_21488_21550[(2)] = inst_21435);

(statearr_21488_21550[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (21))){
var inst_21457 = (state_21470[(2)]);
var state_21470__$1 = (function (){var statearr_21489 = state_21470;
(statearr_21489[(10)] = inst_21457);

return statearr_21489;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_21490_21551 = state_21470__$1;
(statearr_21490_21551[(1)] = (22));

} else {
var statearr_21491_21552 = state_21470__$1;
(statearr_21491_21552[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (13))){
var inst_21430 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_21470__$1 = state_21470;
var statearr_21492_21553 = state_21470__$1;
(statearr_21492_21553[(2)] = inst_21430);

(statearr_21492_21553[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (22))){
var inst_21459 = (function (){var G__21493 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21493) : cljs.core.deref.call(null,G__21493));
})();
var inst_21460 = schema.core.check(schema__$1,inst_21459);
var state_21470__$1 = state_21470;
var statearr_21494_21554 = state_21470__$1;
(statearr_21494_21554[(2)] = inst_21460);

(statearr_21494_21554[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (6))){
var inst_21402 = (state_21470[(8)]);
var inst_21404 = (state_21470[(9)]);
var inst_21403 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_21402);
var inst_21404__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_21403);
var state_21470__$1 = (function (){var statearr_21495 = state_21470;
(statearr_21495[(9)] = inst_21404__$1);

return statearr_21495;
})();
if(cljs.core.truth_(inst_21404__$1)){
var statearr_21496_21555 = state_21470__$1;
(statearr_21496_21555[(1)] = (7));

} else {
var statearr_21497_21556 = state_21470__$1;
(statearr_21497_21556[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (17))){
var inst_21402 = (state_21470[(8)]);
var inst_21438 = (state_21470[(2)]);
var inst_21439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21438,cljs.core.constant$keyword$144);
var inst_21440 = lomakkeet.fields.get_in_schema(schema__$1,inst_21439);
var inst_21441 = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(inst_21402);
var inst_21442 = lomakkeet.fields.coerce(coercion_matcher,inst_21440,inst_21441);
var inst_21443 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_21439,inst_21442);
var state_21470__$1 = state_21470;
var statearr_21498_21557 = state_21470__$1;
(statearr_21498_21557[(2)] = inst_21443);

(statearr_21498_21557[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (3))){
var inst_21468 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21470__$1,inst_21468);
} else {
if((state_val_21471 === (12))){
var inst_21422 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
var statearr_21499_21558 = state_21470__$1;
(statearr_21499_21558[(2)] = inst_21422);

(statearr_21499_21558[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (2))){
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21470__$1,(4),ch);
} else {
if((state_val_21471 === (23))){
var state_21470__$1 = state_21470;
var statearr_21500_21559 = state_21470__$1;
(statearr_21500_21559[(2)] = null);

(statearr_21500_21559[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (19))){
var inst_21453 = (function (){var G__21501 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21501) : cljs.core.deref.call(null,G__21501));
})();
var inst_21454 = (function (){var G__21502 = inst_21453;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__21502) : self__.form_validation_fn.call(null,G__21502));
})();
var state_21470__$1 = state_21470;
var statearr_21503_21560 = state_21470__$1;
(statearr_21503_21560[(2)] = inst_21454);

(statearr_21503_21560[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (11))){
var inst_21407 = (state_21470[(7)]);
var inst_21420 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_21407);
var state_21470__$1 = state_21470;
var statearr_21504_21561 = state_21470__$1;
(statearr_21504_21561[(2)] = inst_21420);

(statearr_21504_21561[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (9))){
var inst_21428 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
var statearr_21505_21562 = state_21470__$1;
(statearr_21505_21562[(2)] = inst_21428);

(statearr_21505_21562[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (5))){
var inst_21451 = (state_21470[(2)]);
var state_21470__$1 = (function (){var statearr_21506 = state_21470;
(statearr_21506[(12)] = inst_21451);

return statearr_21506;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_21507_21563 = state_21470__$1;
(statearr_21507_21563[(1)] = (19));

} else {
var statearr_21508_21564 = state_21470__$1;
(statearr_21508_21564[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (14))){
var inst_21402 = (state_21470[(8)]);
var inst_21433 = cljs.core.seq_QMARK_(inst_21402);
var state_21470__$1 = state_21470;
if(inst_21433){
var statearr_21509_21565 = state_21470__$1;
(statearr_21509_21565[(1)] = (15));

} else {
var statearr_21510_21566 = state_21470__$1;
(statearr_21510_21566[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (16))){
var inst_21402 = (state_21470[(8)]);
var state_21470__$1 = state_21470;
var statearr_21511_21567 = state_21470__$1;
(statearr_21511_21567[(2)] = inst_21402);

(statearr_21511_21567[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (10))){
var inst_21407 = (state_21470[(7)]);
var inst_21402 = (state_21470[(8)]);
var inst_21404 = (state_21470[(9)]);
var inst_21416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21417 = (function (){var c__16610__auto____$1 = inst_21416;
var next = inst_21407;
var action_fn = inst_21404;
var temp__4124__auto__ = inst_21404;
var evt = inst_21402;
return ((function (c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21407,inst_21402,inst_21404,inst_21416,state_val_21471,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21407,inst_21402,inst_21404,inst_21416,state_val_21471,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (state_21414){
var state_val_21415 = (state_21414[(1)]);
if((state_val_21415 === (2))){
var inst_21411 = (state_21414[(2)]);
var inst_21412 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_21411);
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21414__$1,inst_21412);
} else {
if((state_val_21415 === (1))){
var state_21414__$1 = state_21414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21414__$1,(2),next);
} else {
return null;
}
}
});})(c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21407,inst_21402,inst_21404,inst_21416,state_val_21471,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;
return ((function (switch__16530__auto__,c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21407,inst_21402,inst_21404,inst_21416,state_val_21471,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_21515 = [null,null,null,null,null,null,null];
(statearr_21515[(0)] = state_machine__16531__auto__);

(statearr_21515[(1)] = (1));

return statearr_21515;
});
var state_machine__16531__auto____1 = (function (state_21414){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_21414);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e21516){if((e21516 instanceof Object)){
var ex__16534__auto__ = e21516;
var statearr_21517_21568 = state_21414;
(statearr_21517_21568[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21414);

return cljs.core.constant$keyword$97;
} else {
throw e21516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__21569 = state_21414;
state_21414 = G__21569;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_21414){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_21414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21407,inst_21402,inst_21404,inst_21416,state_val_21471,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
})();
var state__16612__auto__ = (function (){var statearr_21518 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_21518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto____$1);

return statearr_21518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});
;})(c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21407,inst_21402,inst_21404,inst_21416,state_val_21471,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
})();
var inst_21418 = cljs.core.async.impl.dispatch.run(inst_21417);
var state_21470__$1 = (function (){var statearr_21519 = state_21470;
(statearr_21519[(13)] = inst_21418);

return statearr_21519;
})();
var statearr_21520_21570 = state_21470__$1;
(statearr_21520_21570[(2)] = inst_21416);

(statearr_21520_21570[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (18))){
var inst_21402 = (state_21470[(8)]);
var inst_21445 = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(inst_21402);
var inst_21446 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_21445)].join('');
var inst_21447 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21446], 0));
var state_21470__$1 = state_21470;
var statearr_21521_21571 = state_21470__$1;
(statearr_21521_21571[(2)] = inst_21447);

(statearr_21521_21571[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21471 === (8))){
var inst_21402 = (state_21470[(8)]);
var inst_21424 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_21402);
var inst_21425 = [cljs.core.str("WARNING: "),cljs.core.str(inst_21424),cljs.core.str(" is unknown")].join('');
var inst_21426 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21425], 0));
var state_21470__$1 = state_21470;
var statearr_21522_21572 = state_21470__$1;
(statearr_21522_21572[(2)] = inst_21426);

(statearr_21522_21572[(1)] = (9));


return cljs.core.constant$keyword$97;
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
});})(c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;
return ((function (switch__16530__auto__,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_21526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21526[(0)] = state_machine__16531__auto__);

(statearr_21526[(1)] = (1));

return statearr_21526;
});
var state_machine__16531__auto____1 = (function (state_21470){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_21470);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e21527){if((e21527 instanceof Object)){
var ex__16534__auto__ = e21527;
var statearr_21528_21573 = state_21470;
(statearr_21528_21573[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21470);

return cljs.core.constant$keyword$97;
} else {
throw e21527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__21574 = state_21470;
state_21470 = G__21574;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_21470){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_21470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
})();
var state__16612__auto__ = (function (){var statearr_21529 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_21529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_21529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto__,schema__$1,map__21398,map__21398__$1,coercion_matcher,ch,___$1,map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
);

return c__16610__auto__;
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.t21392.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t21392.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$150,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$164,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.t21392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (_21394){
var self__ = this;
var _21394__$1 = this;
return self__.meta21393;
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.t21392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (_21394,meta21393__$1){
var self__ = this;
var _21394__$1 = this;
return (new lomakkeet.fields.t21392(self__.form,self__.output_checker21231,self__.owner,self__.map__21390,self__.G__21232,self__.G__21387,self__.G__21386,self__.form_validation_fn,self__.map__21391,self__.form_state,self__.map__21389,self__.G__21233,self__.render_fn,self__.validate__6096__auto__,self__.value,self__.map__21388,self__.actions,self__.input_schema21229,self__.input_checker21230,self__.G__21234,self__.output_schema21228,self__.opts,self__.initial_value,self__.ufv__,meta21393__$1));
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.t21392.cljs$lang$type = true;

lomakkeet.fields.t21392.cljs$lang$ctorStr = "lomakkeet.fields/t21392";

lomakkeet.fields.t21392.cljs$lang$ctorPrWriter = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21392");
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

lomakkeet.fields.__GT_t21392 = ((function (map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535){
return (function __GT_t21392(form__$3,output_checker21231__$1,owner__$3,map__21390__$2,G__21232__$1,G__21387__$2,G__21386__$2,form_validation_fn__$2,map__21391__$2,form_state__$2,map__21389__$2,G__21233__$1,render_fn__$2,validate__6096__auto____$1,value__$2,map__21388__$2,actions__$2,input_schema21229__$1,input_checker21230__$1,G__21234__$1,output_schema21228__$1,opts__$2,initial_value__$2,ufv____$1,meta21393){
return (new lomakkeet.fields.t21392(form__$3,output_checker21231__$1,owner__$3,map__21390__$2,G__21232__$1,G__21387__$2,G__21386__$2,form_validation_fn__$2,map__21391__$2,form_state__$2,map__21389__$2,G__21233__$1,render_fn__$2,validate__6096__auto____$1,value__$2,map__21388__$2,actions__$2,input_schema21229__$1,input_checker21230__$1,G__21234__$1,output_schema21228__$1,opts__$2,initial_value__$2,ufv____$1,meta21393));
});})(map__21390,map__21390__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21391,map__21391__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21386,map__21388,map__21388__$1,form_state,initial_value,value,owner,G__21387,map__21389,map__21389__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

}

return (new lomakkeet.fields.t21392(form__$2,output_checker21231_21535,owner__$2,map__21390__$1,G__21232,G__21387__$1,G__21386__$1,form_validation_fn__$1,map__21391__$1,form_state__$1,map__21389__$1,G__21233,render_fn__$1,validate__6096__auto__,value__$1,map__21388__$1,actions__$1,input_schema21229_21533,input_checker21230_21534,G__21234,output_schema21228_21532,opts__$1,initial_value__$1,ufv___21531,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21575 = (function (){var G__21530 = o__6099__auto__;
return (output_checker21231_21535.cljs$core$IFn$_invoke$arity$1 ? output_checker21231_21535.cljs$core$IFn$_invoke$arity$1(G__21530) : output_checker21231_21535.call(null,G__21530));
})();
if(cljs.core.truth_(temp__4126__auto___21575)){
var error__6098__auto___21576 = temp__4126__auto___21575;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21576], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21576,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21228_21532,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21531,output_schema21228_21532,input_schema21229_21533,input_checker21230_21534,output_checker21231_21535))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema21228_21532,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21229_21533], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__7890__auto__);
});
var __GT_form__2 = (function (cursor__7890__auto__,m21227){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__7890__auto__,m21227);
});
__GT_form = function(cursor__7890__auto__,m21227){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__7890__auto__);
case 2:
return __GT_form__2.call(this,cursor__7890__auto__,m21227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
lomakkeet.fields.dirty_QMARK_ = (function dirty_QMARK_(form_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.errors_QMARK_ = (function errors_QMARK_(form_state){
return cljs.core.seq(cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(form_state));
});
