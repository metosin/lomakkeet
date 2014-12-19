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
var get_in_schema__delegate = function (schema__$1,ks,p__20889){
var vec__20891 = p__20889;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20891,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__20891,not_found){
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
});})(vec__20891,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__20889 = null;
if (arguments.length > 2) {
  p__20889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__20889);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__20892){
var schema__$1 = cljs.core.first(arglist__20892);
arglist__20892 = cljs.core.next(arglist__20892);
var ks = cljs.core.first(arglist__20892);
var p__20889 = cljs.core.rest(arglist__20892);
return get_in_schema__delegate(schema__$1,ks,p__20889);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__20893){
var vec__20897 = p__20893;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20897,(0),null);
var ks = cljs.core.nthnext(vec__20897,(1));
var keys = vec__20897;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__20898){
var map__20900 = p__20898;
var map__20900__$1 = ((cljs.core.seq_QMARK_(map__20900))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20900):map__20900);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20900__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20900__$1,cljs.core.constant$keyword$145);
return ((function (map__20900,map__20900__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$144,ks], null));
});
;})(map__20900,map__20900__$1,ks,ch))
});

var ufv___20945 = schema.utils.use_fn_validation;
var output_schema20902_20946 = schema.core.Any;
var input_schema20903_20947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20904_20948 = schema.core.checker(input_schema20903_20947);
var output_checker20905_20949 = schema.core.checker(output_schema20902_20946);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function emptyable_input(G__20906,G__20907,G__20908){
var validate__6096__auto__ = ufv___20945.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___20950 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20906,G__20907,G__20908], null);
var temp__4126__auto___20951 = (function (){var G__20927 = args__6097__auto___20950;
return (input_checker20904_20948.cljs$core$IFn$_invoke$arity$1 ? input_checker20904_20948.cljs$core$IFn$_invoke$arity$1(G__20927) : input_checker20904_20948.call(null,G__20927));
})();
if(cljs.core.truth_(temp__4126__auto___20951)){
var error__6098__auto___20952 = temp__4126__auto___20951;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20952], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20952,cljs.core.constant$keyword$23,args__6097__auto___20950,cljs.core.constant$keyword$24,input_schema20903_20947,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var state = G__20906;
var owner = G__20907;
var G__20929 = G__20908;
var map__20930 = G__20929;
var map__20930__$1 = ((cljs.core.seq_QMARK_(map__20930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20930):map__20930);
var opts = map__20930__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20930__$1,cljs.core.constant$keyword$147);
var state__$1 = state;
var owner__$1 = owner;
var G__20929__$1 = G__20929;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__20931 = G__20929__$1;
var map__20931__$1 = ((cljs.core.seq_QMARK_(map__20931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20931):map__20931);
var opts__$1 = map__20931__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t20932 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t20932 = (function (G__20929,input_checker20904,G__20906,output_schema20902,owner,emptyable_input,G__20908,validate__6096__auto__,map__20931,real_input,state,input_schema20903,G__20907,output_checker20905,opts,map__20930,ufv__,meta20933){
this.G__20929 = G__20929;
this.input_checker20904 = input_checker20904;
this.G__20906 = G__20906;
this.output_schema20902 = output_schema20902;
this.owner = owner;
this.emptyable_input = emptyable_input;
this.G__20908 = G__20908;
this.validate__6096__auto__ = validate__6096__auto__;
this.map__20931 = map__20931;
this.real_input = real_input;
this.state = state;
this.input_schema20903 = input_schema20903;
this.G__20907 = G__20907;
this.output_checker20905 = output_checker20905;
this.opts = opts;
this.map__20930 = map__20930;
this.ufv__ = ufv__;
this.meta20933 = meta20933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t20932.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t20932.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

lomakkeet.fields.t20932.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t20932.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs20935 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,self__.opts,cljs.core.constant$keyword$86,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs20935))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs20935], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20935))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20936 = {"className": "input-group-btn"};
var G__20937 = (function (){var G__20938 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__20939 = "\u00D7";
return React.DOM.button(G__20938,G__20939);
})();
return React.DOM.span(G__20936,G__20937);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20935),(function (){var G__20940 = {"className": "input-group-btn"};
var G__20941 = (function (){var G__20942 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__20943 = "\u00D7";
return React.DOM.button(G__20942,G__20943);
})();
return React.DOM.span(G__20940,G__20941);
})()], null))));
});})(state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

lomakkeet.fields.t20932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function (_20934){
var self__ = this;
var _20934__$1 = this;
return self__.meta20933;
});})(state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

lomakkeet.fields.t20932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function (_20934,meta20933__$1){
var self__ = this;
var _20934__$1 = this;
return (new lomakkeet.fields.t20932(self__.G__20929,self__.input_checker20904,self__.G__20906,self__.output_schema20902,self__.owner,self__.emptyable_input,self__.G__20908,self__.validate__6096__auto__,self__.map__20931,self__.real_input,self__.state,self__.input_schema20903,self__.G__20907,self__.output_checker20905,self__.opts,self__.map__20930,self__.ufv__,meta20933__$1));
});})(state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

lomakkeet.fields.t20932.cljs$lang$type = true;

lomakkeet.fields.t20932.cljs$lang$ctorStr = "lomakkeet.fields/t20932";

lomakkeet.fields.t20932.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t20932");
});})(state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

lomakkeet.fields.__GT_t20932 = ((function (state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949){
return (function __GT_t20932(G__20929__$2,input_checker20904__$1,G__20906__$1,output_schema20902__$1,owner__$3,emptyable_input__$1,G__20908__$1,validate__6096__auto____$1,map__20931__$2,real_input__$2,state__$3,input_schema20903__$1,G__20907__$1,output_checker20905__$1,opts__$2,map__20930__$2,ufv____$1,meta20933){
return (new lomakkeet.fields.t20932(G__20929__$2,input_checker20904__$1,G__20906__$1,output_schema20902__$1,owner__$3,emptyable_input__$1,G__20908__$1,validate__6096__auto____$1,map__20931__$2,real_input__$2,state__$3,input_schema20903__$1,G__20907__$1,output_checker20905__$1,opts__$2,map__20930__$2,ufv____$1,meta20933));
});})(state__$2,owner__$2,map__20931,map__20931__$1,opts__$1,real_input__$1,state,owner,G__20929,map__20930,map__20930__$1,opts,real_input,validate__6096__auto__,ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

}

return (new lomakkeet.fields.t20932(G__20929__$1,input_checker20904_20948,G__20906,output_schema20902_20946,owner__$2,emptyable_input,G__20908,validate__6096__auto__,map__20931__$1,real_input__$1,state__$2,input_schema20903_20947,G__20907,output_checker20905_20949,opts__$1,map__20930__$1,ufv___20945,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___20953 = (function (){var G__20944 = o__6099__auto__;
return (output_checker20905_20949.cljs$core$IFn$_invoke$arity$1 ? output_checker20905_20949.cljs$core$IFn$_invoke$arity$1(G__20944) : output_checker20905_20949.call(null,G__20944));
})();
if(cljs.core.truth_(temp__4126__auto___20953)){
var error__6098__auto___20954 = temp__4126__auto___20953;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___20954], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___20954,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20902_20946,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___20945,output_schema20902_20946,input_schema20903_20947,input_checker20904_20948,output_checker20905_20949))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema20902_20946,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20903_20947], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__7890__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__7890__auto__,m20901){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__7890__auto__,m20901);
});
__GT_emptyable_input = function(cursor__7890__auto__,m20901){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__7890__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__7890__auto__,m20901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___21003 = schema.utils.use_fn_validation;
var output_schema20956_21004 = schema.core.Any;
var input_schema20957_21005 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker20958_21006 = schema.core.checker(input_schema20957_21005);
var output_checker20959_21007 = schema.core.checker(output_schema20956_21004);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function default_form_group(G__20960,G__20961,G__20962){
var validate__6096__auto__ = ufv___21003.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21008 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20960,G__20961,G__20962], null);
var temp__4126__auto___21009 = (function (){var G__20983 = args__6097__auto___21008;
return (input_checker20958_21006.cljs$core$IFn$_invoke$arity$1 ? input_checker20958_21006.cljs$core$IFn$_invoke$arity$1(G__20983) : input_checker20958_21006.call(null,G__20983));
})();
if(cljs.core.truth_(temp__4126__auto___21009)){
var error__6098__auto___21010 = temp__4126__auto___21009;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21010], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21010,cljs.core.constant$keyword$23,args__6097__auto___21008,cljs.core.constant$keyword$24,input_schema20957_21005,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__20986 = G__20960;
var map__20988 = G__20986;
var map__20988__$1 = ((cljs.core.seq_QMARK_(map__20988))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20988):map__20988);
var input_state = map__20988__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20988__$1,cljs.core.constant$keyword$22);
var owner = G__20961;
var G__20987 = G__20962;
var map__20989 = G__20987;
var map__20989__$1 = ((cljs.core.seq_QMARK_(map__20989))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20989):map__20989);
var opts = map__20989__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20989__$1,cljs.core.constant$keyword$148,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20989__$1,cljs.core.constant$keyword$135);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20989__$1,cljs.core.constant$keyword$122);
var G__20986__$1 = G__20986;
var owner__$1 = owner;
var G__20987__$1 = G__20987;
while(true){
var map__20990 = G__20986__$1;
var map__20990__$1 = ((cljs.core.seq_QMARK_(map__20990))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20990):map__20990);
var input_state__$1 = map__20990__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20990__$1,cljs.core.constant$keyword$22);
var owner__$2 = owner__$1;
var map__20991 = G__20987__$1;
var map__20991__$1 = ((cljs.core.seq_QMARK_(map__20991))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20991):map__20991);
var opts__$1 = map__20991__$1;
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20991__$1,cljs.core.constant$keyword$148,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20991__$1,cljs.core.constant$keyword$135);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20991__$1,cljs.core.constant$keyword$122);
if(typeof lomakkeet.fields.t20992 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t20992 = (function (input_checker20958,input,default_form_group,owner,map__20989,map__20991,G__20961,G__20987,input_schema20957,input_state,validate__6096__auto__,output_checker20959,G__20986,map__20988,size,G__20962,label,map__20990,opts,G__20960,ufv__,output_schema20956,error,meta20993){
this.input_checker20958 = input_checker20958;
this.input = input;
this.default_form_group = default_form_group;
this.owner = owner;
this.map__20989 = map__20989;
this.map__20991 = map__20991;
this.G__20961 = G__20961;
this.G__20987 = G__20987;
this.input_schema20957 = input_schema20957;
this.input_state = input_state;
this.validate__6096__auto__ = validate__6096__auto__;
this.output_checker20959 = output_checker20959;
this.G__20986 = G__20986;
this.map__20988 = map__20988;
this.size = size;
this.G__20962 = G__20962;
this.label = label;
this.map__20990 = map__20990;
this.opts = opts;
this.G__20960 = G__20960;
this.ufv__ = ufv__;
this.output_schema20956 = output_schema20956;
this.error = error;
this.meta20993 = meta20993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t20992.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t20992.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

lomakkeet.fields.t20992.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t20992.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__20996 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__21000 = cljs.core.PersistentVector.EMPTY;
var G__21000__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21000,"has-error"):G__21000);
var G__21000__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__21000__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__21000__$1);
return G__21000__$2;
})()], null))};
var G__20997 = (function (){var attrs20995 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs20995))?sablono.interpreter.attributes(attrs20995):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs20995))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs20995),":"], null))));
})();
var G__20998 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,self__.opts,cljs.core.constant$keyword$86,s], null)));
var G__20999 = (cljs.core.truth_((function (){var and__3616__auto__ = !(cljs.core.empty_QMARK_);
if(and__3616__auto__){
return self__.error;
} else {
return and__3616__auto__;
}
})())?(function (){var attrs21001 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs21001))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs21001], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21001))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21001)], null))));
})():null);
return React.DOM.div(G__20996,G__20997,G__20998,G__20999);
});})(map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

lomakkeet.fields.t20992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function (_20994){
var self__ = this;
var _20994__$1 = this;
return self__.meta20993;
});})(map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

lomakkeet.fields.t20992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function (_20994,meta20993__$1){
var self__ = this;
var _20994__$1 = this;
return (new lomakkeet.fields.t20992(self__.input_checker20958,self__.input,self__.default_form_group,self__.owner,self__.map__20989,self__.map__20991,self__.G__20961,self__.G__20987,self__.input_schema20957,self__.input_state,self__.validate__6096__auto__,self__.output_checker20959,self__.G__20986,self__.map__20988,self__.size,self__.G__20962,self__.label,self__.map__20990,self__.opts,self__.G__20960,self__.ufv__,self__.output_schema20956,self__.error,meta20993__$1));
});})(map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

lomakkeet.fields.t20992.cljs$lang$type = true;

lomakkeet.fields.t20992.cljs$lang$ctorStr = "lomakkeet.fields/t20992";

lomakkeet.fields.t20992.cljs$lang$ctorPrWriter = ((function (map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t20992");
});})(map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

lomakkeet.fields.__GT_t20992 = ((function (map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007){
return (function __GT_t20992(input_checker20958__$1,input__$2,default_form_group__$1,owner__$3,map__20989__$2,map__20991__$2,G__20961__$1,G__20987__$2,input_schema20957__$1,input_state__$2,validate__6096__auto____$1,output_checker20959__$1,G__20986__$2,map__20988__$2,size__$2,G__20962__$1,label__$2,map__20990__$2,opts__$2,G__20960__$1,ufv____$1,output_schema20956__$1,error__$2,meta20993){
return (new lomakkeet.fields.t20992(input_checker20958__$1,input__$2,default_form_group__$1,owner__$3,map__20989__$2,map__20991__$2,G__20961__$1,G__20987__$2,input_schema20957__$1,input_state__$2,validate__6096__auto____$1,output_checker20959__$1,G__20986__$2,map__20988__$2,size__$2,G__20962__$1,label__$2,map__20990__$2,opts__$2,G__20960__$1,ufv____$1,output_schema20956__$1,error__$2,meta20993));
});})(map__20990,map__20990__$1,input_state__$1,error__$1,owner__$2,map__20991,map__20991__$1,opts__$1,size__$1,label__$1,input__$1,G__20986,map__20988,map__20988__$1,input_state,error,owner,G__20987,map__20989,map__20989__$1,opts,size,label,input,validate__6096__auto__,ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

}

return (new lomakkeet.fields.t20992(input_checker20958_21006,input__$1,default_form_group,owner__$2,map__20989__$1,map__20991__$1,G__20961,G__20987__$1,input_schema20957_21005,input_state__$1,validate__6096__auto__,output_checker20959_21007,G__20986__$1,map__20988__$1,size__$1,G__20962,label__$1,map__20990__$1,opts__$1,G__20960,ufv___21003,output_schema20956_21004,error__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21011 = (function (){var G__21002 = o__6099__auto__;
return (output_checker20959_21007.cljs$core$IFn$_invoke$arity$1 ? output_checker20959_21007.cljs$core$IFn$_invoke$arity$1(G__21002) : output_checker20959_21007.call(null,G__21002));
})();
if(cljs.core.truth_(temp__4126__auto___21011)){
var error__6098__auto___21012 = temp__4126__auto___21011;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21012], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21012,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema20956_21004,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21003,output_schema20956_21004,input_schema20957_21005,input_checker20958_21006,output_checker20959_21007))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema20956_21004,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20957_21005], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__7890__auto__);
});
var __GT_default_form_group__2 = (function (cursor__7890__auto__,m20955){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__7890__auto__,m20955);
});
__GT_default_form_group = function(cursor__7890__auto__,m20955){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__7890__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__7890__auto__,m20955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__21013){
var map__21019 = p__21013;
var map__21019__$1 = ((cljs.core.seq_QMARK_(map__21019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21019):map__21019);
var opts = map__21019__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019__$1,cljs.core.constant$keyword$144);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019__$1,cljs.core.constant$keyword$149);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21019__$1,cljs.core.constant$keyword$150);
var map__21020 = form_state;
var map__21020__$1 = ((cljs.core.seq_QMARK_(map__21020))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21020):map__21020);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21020__$1,cljs.core.constant$keyword$24);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21020__$1,cljs.core.constant$keyword$151);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21020__$1,cljs.core.constant$keyword$23);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21021 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21021) : cljs.core.deref.call(null,G__21021));
})(),ks),cljs.core.constant$keyword$22,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__21022 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21022) : cljs.core.deref.call(null,G__21022));
})(),ks):null),cljs.core.constant$keyword$24,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__21023 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21023) : cljs.core.deref.call(null,G__21023));
})(),ks):null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$86),cljs.core.constant$keyword$86,cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(opts)], null));
});
lomakkeet.fields.input_input = (function input_input(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text",cljs.core.constant$keyword$23,(function (){var or__3628__auto__ = value;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$153,cb], null)], null);
});
lomakkeet.fields.input_textarea = (function input_textarea(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,(function (){var or__3628__auto__ = value;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$153,cb], null)], null);
});
lomakkeet.fields.input_static = (function input_static(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,value], null);
});

var ufv___21064 = schema.utils.use_fn_validation;
var output_schema21025_21065 = schema.core.Any;
var input_schema21026_21066 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21027_21067 = schema.core.checker(input_schema21026_21066);
var output_checker21028_21068 = schema.core.checker(output_schema21025_21065);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function input_STAR_(G__21029,G__21030,G__21031){
var validate__6096__auto__ = ufv___21064.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21069 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21029,G__21030,G__21031], null);
var temp__4126__auto___21070 = (function (){var G__21048 = args__6097__auto___21069;
return (input_checker21027_21067.cljs$core$IFn$_invoke$arity$1 ? input_checker21027_21067.cljs$core$IFn$_invoke$arity$1(G__21048) : input_checker21027_21067.call(null,G__21048));
})();
if(cljs.core.truth_(temp__4126__auto___21070)){
var error__6098__auto___21071 = temp__4126__auto___21070;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21071], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21071,cljs.core.constant$keyword$23,args__6097__auto___21069,cljs.core.constant$keyword$24,input_schema21026_21066,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21051 = G__21029;
var map__21053 = G__21051;
var map__21053__$1 = ((cljs.core.seq_QMARK_(map__21053))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21053):map__21053);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,cljs.core.constant$keyword$23);
var owner = G__21030;
var G__21052 = G__21031;
var map__21054 = G__21052;
var map__21054__$1 = ((cljs.core.seq_QMARK_(map__21054))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21054):map__21054);
var opts = map__21054__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21054__$1,cljs.core.constant$keyword$156,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21054__$1,cljs.core.constant$keyword$157,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21054__$1,cljs.core.constant$keyword$145);
var G__21051__$1 = G__21051;
var owner__$1 = owner;
var G__21052__$1 = G__21052;
while(true){
var map__21055 = G__21051__$1;
var map__21055__$1 = ((cljs.core.seq_QMARK_(map__21055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21055):map__21055);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21056 = G__21052__$1;
var map__21056__$1 = ((cljs.core.seq_QMARK_(map__21056))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21056):map__21056);
var opts__$1 = map__21056__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21056__$1,cljs.core.constant$keyword$156,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21056__$1,cljs.core.constant$keyword$157,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t21057 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21057 = (function (input_checker21027,owner,map__21056,output_schema21025,input_STAR_,G__21052,G__21029,el,map__21055,input_schema21026,G__21031,output_checker21028,G__21051,ks,validate__6096__auto__,G__21030,value,map__21054,transform_value,ch,map__21053,opts,ufv__,meta21058){
this.input_checker21027 = input_checker21027;
this.owner = owner;
this.map__21056 = map__21056;
this.output_schema21025 = output_schema21025;
this.input_STAR_ = input_STAR_;
this.G__21052 = G__21052;
this.G__21029 = G__21029;
this.el = el;
this.map__21055 = map__21055;
this.input_schema21026 = input_schema21026;
this.G__21031 = G__21031;
this.output_checker21028 = output_checker21028;
this.G__21051 = G__21051;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__21030 = G__21030;
this.value = value;
this.map__21054 = map__21054;
this.transform_value = transform_value;
this.ch = ch;
this.map__21053 = map__21053;
this.opts = opts;
this.ufv__ = ufv__;
this.meta21058 = meta21058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21057.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21057.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

lomakkeet.fields.t21057.prototype.om$core$IRender$ = true;

lomakkeet.fields.t21057.prototype.om$core$IRender$render$arity$1 = ((function (map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__21060 = (function (){var G__21062 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__21062) : self__.transform_value.call(null,G__21062));
})();
var G__21061 = ((function (G__21060,___$1,map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,e.target.value], null));
});})(G__21060,___$1,map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__21060,G__21061) : self__.el.call(null,G__21060,G__21061));
})());
});})(map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

lomakkeet.fields.t21057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function (_21059){
var self__ = this;
var _21059__$1 = this;
return self__.meta21058;
});})(map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

lomakkeet.fields.t21057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function (_21059,meta21058__$1){
var self__ = this;
var _21059__$1 = this;
return (new lomakkeet.fields.t21057(self__.input_checker21027,self__.owner,self__.map__21056,self__.output_schema21025,self__.input_STAR_,self__.G__21052,self__.G__21029,self__.el,self__.map__21055,self__.input_schema21026,self__.G__21031,self__.output_checker21028,self__.G__21051,self__.ks,self__.validate__6096__auto__,self__.G__21030,self__.value,self__.map__21054,self__.transform_value,self__.ch,self__.map__21053,self__.opts,self__.ufv__,meta21058__$1));
});})(map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

lomakkeet.fields.t21057.cljs$lang$type = true;

lomakkeet.fields.t21057.cljs$lang$ctorStr = "lomakkeet.fields/t21057";

lomakkeet.fields.t21057.cljs$lang$ctorPrWriter = ((function (map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21057");
});})(map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

lomakkeet.fields.__GT_t21057 = ((function (map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068){
return (function __GT_t21057(input_checker21027__$1,owner__$3,map__21056__$2,output_schema21025__$1,input_STAR___$1,G__21052__$2,G__21029__$1,el__$2,map__21055__$2,input_schema21026__$1,G__21031__$1,output_checker21028__$1,G__21051__$2,ks__$2,validate__6096__auto____$1,G__21030__$1,value__$2,map__21054__$2,transform_value__$2,ch__$2,map__21053__$2,opts__$2,ufv____$1,meta21058){
return (new lomakkeet.fields.t21057(input_checker21027__$1,owner__$3,map__21056__$2,output_schema21025__$1,input_STAR___$1,G__21052__$2,G__21029__$1,el__$2,map__21055__$2,input_schema21026__$1,G__21031__$1,output_checker21028__$1,G__21051__$2,ks__$2,validate__6096__auto____$1,G__21030__$1,value__$2,map__21054__$2,transform_value__$2,ch__$2,map__21053__$2,opts__$2,ufv____$1,meta21058));
});})(map__21055,map__21055__$1,value__$1,owner__$2,map__21056,map__21056__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__21051,map__21053,map__21053__$1,value,owner,G__21052,map__21054,map__21054__$1,opts,transform_value,el,ks,ch,validate__6096__auto__,ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

}

return (new lomakkeet.fields.t21057(input_checker21027_21067,owner__$2,map__21056__$1,output_schema21025_21065,input_STAR_,G__21052__$1,G__21029,el__$1,map__21055__$1,input_schema21026_21066,G__21031,output_checker21028_21068,G__21051__$1,ks__$1,validate__6096__auto__,G__21030,value__$1,map__21054__$1,transform_value__$1,ch__$1,map__21053__$1,opts__$1,ufv___21064,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21072 = (function (){var G__21063 = o__6099__auto__;
return (output_checker21028_21068.cljs$core$IFn$_invoke$arity$1 ? output_checker21028_21068.cljs$core$IFn$_invoke$arity$1(G__21063) : output_checker21028_21068.call(null,G__21063));
})();
if(cljs.core.truth_(temp__4126__auto___21072)){
var error__6098__auto___21073 = temp__4126__auto___21072;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21073], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21073,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21025_21065,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21064,output_schema21025_21065,input_schema21026_21066,input_checker21027_21067,output_checker21028_21068))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema21025_21065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21026_21066], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__7890__auto__);
});
var __GT_input_STAR___2 = (function (cursor__7890__auto__,m21024){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__7890__auto__,m21024);
});
__GT_input_STAR_ = function(cursor__7890__auto__,m21024){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__7890__auto__,m21024);
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
var input__delegate = function (form,label,ks,p__21074){
var vec__21076 = p__21074;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21076,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__21074 = null;
if (arguments.length > 3) {
  p__21074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return input__delegate.call(this,form,label,ks,p__21074);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__21077){
var form = cljs.core.first(arglist__21077);
arglist__21077 = cljs.core.next(arglist__21077);
var label = cljs.core.first(arglist__21077);
arglist__21077 = cljs.core.next(arglist__21077);
var ks = cljs.core.first(arglist__21077);
var p__21074 = cljs.core.rest(arglist__21077);
return input__delegate(form,label,ks,p__21074);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__21078){
var vec__21080 = p__21078;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21080,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$157,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__21078 = null;
if (arguments.length > 3) {
  p__21078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return textarea__delegate.call(this,form,label,ks,p__21078);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__21081){
var form = cljs.core.first(arglist__21081);
arglist__21081 = cljs.core.next(arglist__21081);
var label = cljs.core.first(arglist__21081);
arglist__21081 = cljs.core.next(arglist__21081);
var ks = cljs.core.first(arglist__21081);
var p__21078 = cljs.core.rest(arglist__21081);
return textarea__delegate(form,label,ks,p__21078);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__21082){
var vec__21084 = p__21082;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21084,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$157,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__21082 = null;
if (arguments.length > 3) {
  p__21082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return static$__delegate.call(this,form,label,ks,p__21082);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__21085){
var form = cljs.core.first(arglist__21085);
arglist__21085 = cljs.core.next(arglist__21085);
var label = cljs.core.first(arglist__21085);
arglist__21085 = cljs.core.next(arglist__21085);
var ks = cljs.core.first(arglist__21085);
var p__21082 = cljs.core.rest(arglist__21085);
return static$__delegate(form,label,ks,p__21082);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___21122 = schema.utils.use_fn_validation;
var output_schema21087_21123 = schema.core.Any;
var input_schema21088_21124 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21089_21125 = schema.core.checker(input_schema21088_21124);
var output_checker21090_21126 = schema.core.checker(output_schema21087_21123);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function checkbox_STAR_(G__21091,G__21092,G__21093){
var validate__6096__auto__ = ufv___21122.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21091,G__21092,G__21093], null);
var temp__4126__auto___21128 = (function (){var G__21108 = args__6097__auto___21127;
return (input_checker21089_21125.cljs$core$IFn$_invoke$arity$1 ? input_checker21089_21125.cljs$core$IFn$_invoke$arity$1(G__21108) : input_checker21089_21125.call(null,G__21108));
})();
if(cljs.core.truth_(temp__4126__auto___21128)){
var error__6098__auto___21129 = temp__4126__auto___21128;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21129], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21129,cljs.core.constant$keyword$23,args__6097__auto___21127,cljs.core.constant$keyword$24,input_schema21088_21124,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21111 = G__21091;
var map__21113 = G__21111;
var map__21113__$1 = ((cljs.core.seq_QMARK_(map__21113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21113):map__21113);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21113__$1,cljs.core.constant$keyword$23);
var owner = G__21092;
var G__21112 = G__21093;
var map__21114 = G__21112;
var map__21114__$1 = ((cljs.core.seq_QMARK_(map__21114))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21114):map__21114);
var opts = map__21114__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,cljs.core.constant$keyword$145);
var G__21111__$1 = G__21111;
var owner__$1 = owner;
var G__21112__$1 = G__21112;
while(true){
var map__21115 = G__21111__$1;
var map__21115__$1 = ((cljs.core.seq_QMARK_(map__21115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21115):map__21115);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21115__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21116 = G__21112__$1;
var map__21116__$1 = ((cljs.core.seq_QMARK_(map__21116))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21116):map__21116);
var opts__$1 = map__21116__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t21117 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21117 = (function (map__21113,owner,output_checker21090,G__21091,output_schema21087,map__21115,ks,validate__6096__auto__,G__21092,G__21111,input_checker21089,value,G__21093,map__21114,G__21112,ch,map__21116,checkbox_STAR_,opts,input_schema21088,ufv__,meta21118){
this.map__21113 = map__21113;
this.owner = owner;
this.output_checker21090 = output_checker21090;
this.G__21091 = G__21091;
this.output_schema21087 = output_schema21087;
this.map__21115 = map__21115;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__21092 = G__21092;
this.G__21111 = G__21111;
this.input_checker21089 = input_checker21089;
this.value = value;
this.G__21093 = G__21093;
this.map__21114 = map__21114;
this.G__21112 = G__21112;
this.ch = ch;
this.map__21116 = map__21116;
this.checkbox_STAR_ = checkbox_STAR_;
this.opts = opts;
this.input_schema21088 = input_schema21088;
this.ufv__ = ufv__;
this.meta21118 = meta21118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21117.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21117.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

lomakkeet.fields.t21117.prototype.om$core$IRender$ = true;

lomakkeet.fields.t21117.prototype.om$core$IRender$render$arity$1 = ((function (map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21120 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,e.target.checked], null));
});})(___$1,map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__21120) : sablono.interpreter.input.call(null,G__21120));
});})(map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

lomakkeet.fields.t21117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function (_21119){
var self__ = this;
var _21119__$1 = this;
return self__.meta21118;
});})(map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

lomakkeet.fields.t21117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function (_21119,meta21118__$1){
var self__ = this;
var _21119__$1 = this;
return (new lomakkeet.fields.t21117(self__.map__21113,self__.owner,self__.output_checker21090,self__.G__21091,self__.output_schema21087,self__.map__21115,self__.ks,self__.validate__6096__auto__,self__.G__21092,self__.G__21111,self__.input_checker21089,self__.value,self__.G__21093,self__.map__21114,self__.G__21112,self__.ch,self__.map__21116,self__.checkbox_STAR_,self__.opts,self__.input_schema21088,self__.ufv__,meta21118__$1));
});})(map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

lomakkeet.fields.t21117.cljs$lang$type = true;

lomakkeet.fields.t21117.cljs$lang$ctorStr = "lomakkeet.fields/t21117";

lomakkeet.fields.t21117.cljs$lang$ctorPrWriter = ((function (map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21117");
});})(map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

lomakkeet.fields.__GT_t21117 = ((function (map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126){
return (function __GT_t21117(map__21113__$2,owner__$3,output_checker21090__$1,G__21091__$1,output_schema21087__$1,map__21115__$2,ks__$2,validate__6096__auto____$1,G__21092__$1,G__21111__$2,input_checker21089__$1,value__$2,G__21093__$1,map__21114__$2,G__21112__$2,ch__$2,map__21116__$2,checkbox_STAR___$1,opts__$2,input_schema21088__$1,ufv____$1,meta21118){
return (new lomakkeet.fields.t21117(map__21113__$2,owner__$3,output_checker21090__$1,G__21091__$1,output_schema21087__$1,map__21115__$2,ks__$2,validate__6096__auto____$1,G__21092__$1,G__21111__$2,input_checker21089__$1,value__$2,G__21093__$1,map__21114__$2,G__21112__$2,ch__$2,map__21116__$2,checkbox_STAR___$1,opts__$2,input_schema21088__$1,ufv____$1,meta21118));
});})(map__21115,map__21115__$1,value__$1,owner__$2,map__21116,map__21116__$1,opts__$1,ks__$1,ch__$1,G__21111,map__21113,map__21113__$1,value,owner,G__21112,map__21114,map__21114__$1,opts,ks,ch,validate__6096__auto__,ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

}

return (new lomakkeet.fields.t21117(map__21113__$1,owner__$2,output_checker21090_21126,G__21091,output_schema21087_21123,map__21115__$1,ks__$1,validate__6096__auto__,G__21092,G__21111__$1,input_checker21089_21125,value__$1,G__21093,map__21114__$1,G__21112__$1,ch__$1,map__21116__$1,checkbox_STAR_,opts__$1,input_schema21088_21124,ufv___21122,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21130 = (function (){var G__21121 = o__6099__auto__;
return (output_checker21090_21126.cljs$core$IFn$_invoke$arity$1 ? output_checker21090_21126.cljs$core$IFn$_invoke$arity$1(G__21121) : output_checker21090_21126.call(null,G__21121));
})();
if(cljs.core.truth_(temp__4126__auto___21130)){
var error__6098__auto___21131 = temp__4126__auto___21130;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21131], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21131,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21087_21123,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21122,output_schema21087_21123,input_schema21088_21124,input_checker21089_21125,output_checker21090_21126))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema21087_21123,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21088_21124], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__7890__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__7890__auto__,m21086){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__7890__auto__,m21086);
});
__GT_checkbox_STAR_ = function(cursor__7890__auto__,m21086){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__7890__auto__,m21086);
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
var checkbox__delegate = function (form,label,ks,p__21132){
var vec__21134 = p__21132;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21134,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__21132 = null;
if (arguments.length > 3) {
  p__21132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return checkbox__delegate.call(this,form,label,ks,p__21132);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__21135){
var form = cljs.core.first(arglist__21135);
arglist__21135 = cljs.core.next(arglist__21135);
var label = cljs.core.first(arglist__21135);
arglist__21135 = cljs.core.next(arglist__21135);
var ks = cljs.core.first(arglist__21135);
var p__21132 = cljs.core.rest(arglist__21135);
return checkbox__delegate(form,label,ks,p__21132);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___21194 = schema.utils.use_fn_validation;
var output_schema21137_21195 = schema.core.Any;
var input_schema21138_21196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21139_21197 = schema.core.checker(input_schema21138_21196);
var output_checker21140_21198 = schema.core.checker(output_schema21137_21195);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function select_STAR_(G__21141,G__21142,G__21143){
var validate__6096__auto__ = ufv___21194.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21199 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21141,G__21142,G__21143], null);
var temp__4126__auto___21200 = (function (){var G__21169 = args__6097__auto___21199;
return (input_checker21139_21197.cljs$core$IFn$_invoke$arity$1 ? input_checker21139_21197.cljs$core$IFn$_invoke$arity$1(G__21169) : input_checker21139_21197.call(null,G__21169));
})();
if(cljs.core.truth_(temp__4126__auto___21200)){
var error__6098__auto___21201 = temp__4126__auto___21200;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21201], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21201,cljs.core.constant$keyword$23,args__6097__auto___21199,cljs.core.constant$keyword$24,input_schema21138_21196,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21172 = G__21141;
var map__21174 = G__21172;
var map__21174__$1 = ((cljs.core.seq_QMARK_(map__21174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21174):map__21174);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,cljs.core.constant$keyword$23);
var owner = G__21142;
var G__21173 = G__21143;
var map__21175 = G__21173;
var map__21175__$1 = ((cljs.core.seq_QMARK_(map__21175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21175):map__21175);
var opts = map__21175__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,cljs.core.constant$keyword$158);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,cljs.core.constant$keyword$144);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21175__$1,cljs.core.constant$keyword$145);
var G__21172__$1 = G__21172;
var owner__$1 = owner;
var G__21173__$1 = G__21173;
while(true){
var map__21176 = G__21172__$1;
var map__21176__$1 = ((cljs.core.seq_QMARK_(map__21176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21176):map__21176);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21176__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21177 = G__21173__$1;
var map__21177__$1 = ((cljs.core.seq_QMARK_(map__21177))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21177):map__21177);
var opts__$1 = map__21177__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.constant$keyword$158);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.constant$keyword$144);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,cljs.core.constant$keyword$145);
if(typeof lomakkeet.fields.t21178 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21178 = (function (G__21141,options,G__21173,input_checker21139,output_checker21140,owner,map__21176,G__21143,map__21174,ks,validate__6096__auto__,G__21172,value,map__21177,ch,select_STAR_,input_schema21138,G__21142,opts,ufv__,output_schema21137,map__21175,meta21179){
this.G__21141 = G__21141;
this.options = options;
this.G__21173 = G__21173;
this.input_checker21139 = input_checker21139;
this.output_checker21140 = output_checker21140;
this.owner = owner;
this.map__21176 = map__21176;
this.G__21143 = G__21143;
this.map__21174 = map__21174;
this.ks = ks;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__21172 = G__21172;
this.value = value;
this.map__21177 = map__21177;
this.ch = ch;
this.select_STAR_ = select_STAR_;
this.input_schema21138 = input_schema21138;
this.G__21142 = G__21142;
this.opts = opts;
this.ufv__ = ufv__;
this.output_schema21137 = output_schema21137;
this.map__21175 = map__21175;
this.meta21179 = meta21179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21178.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21178.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

lomakkeet.fields.t21178.prototype.om$core$IRender$ = true;

lomakkeet.fields.t21178.prototype.om$core$IRender$render$arity$1 = ((function (map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21181 = {"className": "form-control", "value": self__.value, "onChange": ((function (___$1,map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$146,cljs.core.constant$keyword$144,self__.ks,cljs.core.constant$keyword$23,e.target.value], null));
});})(___$1,map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
};
var G__21182 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__4384__auto__ = ((function (G__21181,___$1,map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function iter__21183(s__21184){
return (new cljs.core.LazySeq(null,((function (G__21181,___$1,map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (){
var s__21184__$1 = s__21184;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21184__$1);
if(temp__4126__auto__){
var s__21184__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21184__$2)){
var c__4382__auto__ = cljs.core.chunk_first(s__21184__$2);
var size__4383__auto__ = cljs.core.count(c__4382__auto__);
var b__21186 = cljs.core.chunk_buffer(size__4383__auto__);
if((function (){var i__21185 = (0);
while(true){
if((i__21185 < size__4383__auto__)){
var vec__21191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4382__auto__,i__21185);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21191,(1),null);
cljs.core.chunk_append(b__21186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,k,cljs.core.constant$keyword$49,k], null),v], null));

var G__21202 = (i__21185 + (1));
i__21185 = G__21202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21186),iter__21183(cljs.core.chunk_rest(s__21184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21186),null);
}
} else {
var vec__21192 = cljs.core.first(s__21184__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21192,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,k,cljs.core.constant$keyword$49,k], null),v], null),iter__21183(cljs.core.rest(s__21184__$2)));
}
} else {
return null;
}
break;
}
});})(G__21181,___$1,map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
,null,null));
});})(G__21181,___$1,map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;
return iter__4384__auto__(self__.options);
})():null));
return React.DOM.select(G__21181,G__21182);
});})(map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

lomakkeet.fields.t21178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (_21180){
var self__ = this;
var _21180__$1 = this;
return self__.meta21179;
});})(map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

lomakkeet.fields.t21178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (_21180,meta21179__$1){
var self__ = this;
var _21180__$1 = this;
return (new lomakkeet.fields.t21178(self__.G__21141,self__.options,self__.G__21173,self__.input_checker21139,self__.output_checker21140,self__.owner,self__.map__21176,self__.G__21143,self__.map__21174,self__.ks,self__.validate__6096__auto__,self__.G__21172,self__.value,self__.map__21177,self__.ch,self__.select_STAR_,self__.input_schema21138,self__.G__21142,self__.opts,self__.ufv__,self__.output_schema21137,self__.map__21175,meta21179__$1));
});})(map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

lomakkeet.fields.t21178.cljs$lang$type = true;

lomakkeet.fields.t21178.cljs$lang$ctorStr = "lomakkeet.fields/t21178";

lomakkeet.fields.t21178.cljs$lang$ctorPrWriter = ((function (map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21178");
});})(map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

lomakkeet.fields.__GT_t21178 = ((function (map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198){
return (function __GT_t21178(G__21141__$1,options__$2,G__21173__$2,input_checker21139__$1,output_checker21140__$1,owner__$3,map__21176__$2,G__21143__$1,map__21174__$2,ks__$2,validate__6096__auto____$1,G__21172__$2,value__$2,map__21177__$2,ch__$2,select_STAR___$1,input_schema21138__$1,G__21142__$1,opts__$2,ufv____$1,output_schema21137__$1,map__21175__$2,meta21179){
return (new lomakkeet.fields.t21178(G__21141__$1,options__$2,G__21173__$2,input_checker21139__$1,output_checker21140__$1,owner__$3,map__21176__$2,G__21143__$1,map__21174__$2,ks__$2,validate__6096__auto____$1,G__21172__$2,value__$2,map__21177__$2,ch__$2,select_STAR___$1,input_schema21138__$1,G__21142__$1,opts__$2,ufv____$1,output_schema21137__$1,map__21175__$2,meta21179));
});})(map__21176,map__21176__$1,value__$1,owner__$2,map__21177,map__21177__$1,opts__$1,options__$1,ks__$1,ch__$1,G__21172,map__21174,map__21174__$1,value,owner,G__21173,map__21175,map__21175__$1,opts,options,ks,ch,validate__6096__auto__,ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

}

return (new lomakkeet.fields.t21178(G__21141,options__$1,G__21173__$1,input_checker21139_21197,output_checker21140_21198,owner__$2,map__21176__$1,G__21143,map__21174__$1,ks__$1,validate__6096__auto__,G__21172__$1,value__$1,map__21177__$1,ch__$1,select_STAR_,input_schema21138_21196,G__21142,opts__$1,ufv___21194,output_schema21137_21195,map__21175__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21203 = (function (){var G__21193 = o__6099__auto__;
return (output_checker21140_21198.cljs$core$IFn$_invoke$arity$1 ? output_checker21140_21198.cljs$core$IFn$_invoke$arity$1(G__21193) : output_checker21140_21198.call(null,G__21193));
})();
if(cljs.core.truth_(temp__4126__auto___21203)){
var error__6098__auto___21204 = temp__4126__auto___21203;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21204], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21204,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21137_21195,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21194,output_schema21137_21195,input_schema21138_21196,input_checker21139_21197,output_checker21140_21198))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema21137_21195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21138_21196], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__7890__auto__);
});
var __GT_select_STAR___2 = (function (cursor__7890__auto__,m21136){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__7890__auto__,m21136);
});
__GT_select_STAR_ = function(cursor__7890__auto__,m21136){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__7890__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__7890__auto__,m21136);
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
var select__delegate = function (form,label,ks,options,p__21205){
var vec__21207 = p__21205;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21207,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$122,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$135,label,cljs.core.constant$keyword$144,ks,cljs.core.constant$keyword$158,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__21205 = null;
if (arguments.length > 4) {
  p__21205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return select__delegate.call(this,form,label,ks,options,p__21205);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__21208){
var form = cljs.core.first(arglist__21208);
arglist__21208 = cljs.core.next(arglist__21208);
var label = cljs.core.first(arglist__21208);
arglist__21208 = cljs.core.next(arglist__21208);
var ks = cljs.core.first(arglist__21208);
arglist__21208 = cljs.core.next(arglist__21208);
var options = cljs.core.first(arglist__21208);
var p__21205 = cljs.core.rest(arglist__21208);
return select__delegate(form,label,ks,options,p__21205);
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
lomakkeet.fields.FormState = schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$23,schema.core.Any,cljs.core.constant$keyword$159,schema.core.Any,cljs.core.constant$keyword$151,schema.core.Any,cljs.core.constant$keyword$24,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null));
lomakkeet.fields.__GT_form_state = (function() {
var __GT_form_state = null;
var __GT_form_state__1 = (function (value){
return __GT_form_state.cljs$core$IFn$_invoke$arity$2(value,null);
});
var __GT_form_state__2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$159,value,cljs.core.constant$keyword$151,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$24,schema__$1], null);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.constant$keyword$23,cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.save_form = (function save_form(p__21211,value){
var map__21213 = p__21211;
var map__21213__$1 = ((cljs.core.seq_QMARK_(map__21213))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21213):map__21213);
var form_state = map__21213__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21213__$1,cljs.core.constant$keyword$24);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$23,value,cljs.core.array_seq([cljs.core.constant$keyword$159,value,cljs.core.constant$keyword$151,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__21214,f,args){
var map__21216 = p__21214;
var map__21216__$1 = ((cljs.core.seq_QMARK_(map__21216))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21216):map__21216);
var form_state = map__21216__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216__$1,cljs.core.constant$keyword$23);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__21214,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_form__delegate.call(this,p__21214,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__21217){
var p__21214 = cljs.core.first(arglist__21217);
arglist__21217 = cljs.core.next(arglist__21217);
var f = cljs.core.first(arglist__21217);
var args = cljs.core.rest(arglist__21217);
return update_form__delegate(p__21214,f,args);
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
return (function (p1__21218_SHARP_){
return lomakkeet.fields.dissoc_in(p1__21218_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___21523 = schema.utils.use_fn_validation;
var output_schema21220_21524 = schema.core.Any;
var input_schema21221_21525 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker21222_21526 = schema.core.checker(input_schema21221_21525);
var output_checker21223_21527 = schema.core.checker(output_schema21220_21524);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function form(G__21224,G__21225,G__21226){
var validate__6096__auto__ = ufv___21523.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___21528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21224,G__21225,G__21226], null);
var temp__4126__auto___21529 = (function (){var G__21375 = args__6097__auto___21528;
return (input_checker21222_21526.cljs$core$IFn$_invoke$arity$1 ? input_checker21222_21526.cljs$core$IFn$_invoke$arity$1(G__21375) : input_checker21222_21526.call(null,G__21375));
})();
if(cljs.core.truth_(temp__4126__auto___21529)){
var error__6098__auto___21530 = temp__4126__auto___21529;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21530], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21530,cljs.core.constant$keyword$23,args__6097__auto___21528,cljs.core.constant$keyword$24,input_schema21221_21525,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var G__21378 = G__21224;
var map__21380 = G__21378;
var map__21380__$1 = ((cljs.core.seq_QMARK_(map__21380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21380):map__21380);
var form_state = map__21380__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,cljs.core.constant$keyword$159);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,cljs.core.constant$keyword$23);
var owner = G__21225;
var G__21379 = G__21226;
var map__21381 = G__21379;
var map__21381__$1 = ((cljs.core.seq_QMARK_(map__21381))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21381):map__21381);
var opts = map__21381__$1;
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.constant$keyword$160);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.constant$keyword$141);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.constant$keyword$161);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.constant$keyword$162);
var G__21378__$1 = G__21378;
var owner__$1 = owner;
var G__21379__$1 = G__21379;
while(true){
var map__21382 = G__21378__$1;
var map__21382__$1 = ((cljs.core.seq_QMARK_(map__21382))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21382):map__21382);
var form_state__$1 = map__21382__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.constant$keyword$159);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__21383 = G__21379__$1;
var map__21383__$1 = ((cljs.core.seq_QMARK_(map__21383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21383):map__21383);
var opts__$1 = map__21383__$1;
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$160);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$141);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$161);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21383__$1,cljs.core.constant$keyword$162);
if(typeof lomakkeet.fields.t21384 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t21384 = (function (form,input_schema21221,G__21226,owner,output_checker21223,form_validation_fn,form_state,G__21379,render_fn,G__21225,validate__6096__auto__,map__21381,value,input_checker21222,G__21224,actions,G__21378,map__21380,opts,initial_value,output_schema21220,ufv__,map__21382,map__21383,meta21385){
this.form = form;
this.input_schema21221 = input_schema21221;
this.G__21226 = G__21226;
this.owner = owner;
this.output_checker21223 = output_checker21223;
this.form_validation_fn = form_validation_fn;
this.form_state = form_state;
this.G__21379 = G__21379;
this.render_fn = render_fn;
this.G__21225 = G__21225;
this.validate__6096__auto__ = validate__6096__auto__;
this.map__21381 = map__21381;
this.value = value;
this.input_checker21222 = input_checker21222;
this.G__21224 = G__21224;
this.actions = actions;
this.G__21378 = G__21378;
this.map__21380 = map__21380;
this.opts = opts;
this.initial_value = initial_value;
this.output_schema21220 = output_schema21220;
this.ufv__ = ufv__;
this.map__21382 = map__21382;
this.map__21383 = map__21383;
this.meta21385 = meta21385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t21384.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t21384.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.t21384.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t21384.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__21387 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$150,self__.form_state,cljs.core.constant$keyword$23,(function (){var G__21388 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21388) : cljs.core.deref.call(null,G__21388));
})(),cljs.core.constant$keyword$159,(function (){var G__21389 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21389) : cljs.core.deref.call(null,G__21389));
})(),cljs.core.constant$keyword$141,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$150,self__.form_state),cljs.core.constant$keyword$145,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__21387) : self__.render_fn.call(null,G__21387));
})());
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.t21384.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t21384.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__21391 = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21391) : cljs.core.deref.call(null,G__21391));
})():null);
var map__21390 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__21390__$1 = ((cljs.core.seq_QMARK_(map__21390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21390):map__21390);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.constant$keyword$163);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.constant$keyword$145);
var c__16610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (state_21462){
var state_val_21463 = (state_21462[(1)]);
if((state_val_21463 === (7))){
var inst_21399 = (state_21462[(7)]);
var inst_21394 = (state_21462[(8)]);
var inst_21396 = (state_21462[(9)]);
var inst_21398 = (function (){var G__21464 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21464) : cljs.core.deref.call(null,G__21464));
})();
var inst_21399__$1 = (function (){var G__21465 = inst_21398;
var G__21466 = inst_21394;
return (inst_21396.cljs$core$IFn$_invoke$arity$2 ? inst_21396.cljs$core$IFn$_invoke$arity$2(G__21465,G__21466) : inst_21396.call(null,G__21465,G__21466));
})();
var inst_21400 = lomakkeet.fields.chan_QMARK_(inst_21399__$1);
var state_21462__$1 = (function (){var statearr_21467 = state_21462;
(statearr_21467[(7)] = inst_21399__$1);

return statearr_21467;
})();
if(inst_21400){
var statearr_21468_21531 = state_21462__$1;
(statearr_21468_21531[(1)] = (10));

} else {
var statearr_21469_21532 = state_21462__$1;
(statearr_21469_21532[(1)] = (11));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (20))){
var state_21462__$1 = state_21462;
var statearr_21470_21533 = state_21462__$1;
(statearr_21470_21533[(2)] = null);

(statearr_21470_21533[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (1))){
var state_21462__$1 = state_21462;
var statearr_21471_21534 = state_21462__$1;
(statearr_21471_21534[(2)] = null);

(statearr_21471_21534[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (24))){
var inst_21449 = (state_21462[(10)]);
var inst_21455 = (state_21462[(2)]);
var inst_21456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21449,inst_21455], 0));
var inst_21457 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$151,inst_21456);
var state_21462__$1 = (function (){var statearr_21472 = state_21462;
(statearr_21472[(11)] = inst_21457);

return statearr_21472;
})();
var statearr_21473_21535 = state_21462__$1;
(statearr_21473_21535[(2)] = null);

(statearr_21473_21535[(1)] = (2));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (4))){
var inst_21394 = (state_21462[(8)]);
var inst_21394__$1 = (state_21462[(2)]);
var inst_21441 = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(inst_21394__$1);
var state_21462__$1 = (function (){var statearr_21474 = state_21462;
(statearr_21474[(8)] = inst_21394__$1);

return statearr_21474;
})();
var G__21475_21536 = (((inst_21441 instanceof cljs.core.Keyword))?inst_21441.fqn:null);
switch (G__21475_21536) {
case "change":
var statearr_21476_21538 = state_21462__$1;
(statearr_21476_21538[(1)] = (14));


break;
case "cancel":
var statearr_21477_21539 = state_21462__$1;
(statearr_21477_21539[(1)] = (13));


break;
case "action":
var statearr_21478_21540 = state_21462__$1;
(statearr_21478_21540[(1)] = (6));


break;
default:
var statearr_21479_21541 = state_21462__$1;
(statearr_21479_21541[(1)] = (18));



}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (15))){
var inst_21394 = (state_21462[(8)]);
var inst_21427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21394);
var state_21462__$1 = state_21462;
var statearr_21480_21542 = state_21462__$1;
(statearr_21480_21542[(2)] = inst_21427);

(statearr_21480_21542[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (21))){
var inst_21449 = (state_21462[(2)]);
var state_21462__$1 = (function (){var statearr_21481 = state_21462;
(statearr_21481[(10)] = inst_21449);

return statearr_21481;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_21482_21543 = state_21462__$1;
(statearr_21482_21543[(1)] = (22));

} else {
var statearr_21483_21544 = state_21462__$1;
(statearr_21483_21544[(1)] = (23));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (13))){
var inst_21422 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_21462__$1 = state_21462;
var statearr_21484_21545 = state_21462__$1;
(statearr_21484_21545[(2)] = inst_21422);

(statearr_21484_21545[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (22))){
var inst_21451 = (function (){var G__21485 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21485) : cljs.core.deref.call(null,G__21485));
})();
var inst_21452 = schema.core.check(schema__$1,inst_21451);
var state_21462__$1 = state_21462;
var statearr_21486_21546 = state_21462__$1;
(statearr_21486_21546[(2)] = inst_21452);

(statearr_21486_21546[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (6))){
var inst_21394 = (state_21462[(8)]);
var inst_21396 = (state_21462[(9)]);
var inst_21395 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_21394);
var inst_21396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_21395);
var state_21462__$1 = (function (){var statearr_21487 = state_21462;
(statearr_21487[(9)] = inst_21396__$1);

return statearr_21487;
})();
if(cljs.core.truth_(inst_21396__$1)){
var statearr_21488_21547 = state_21462__$1;
(statearr_21488_21547[(1)] = (7));

} else {
var statearr_21489_21548 = state_21462__$1;
(statearr_21489_21548[(1)] = (8));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (17))){
var inst_21394 = (state_21462[(8)]);
var inst_21430 = (state_21462[(2)]);
var inst_21431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21430,cljs.core.constant$keyword$144);
var inst_21432 = lomakkeet.fields.get_in_schema(schema__$1,inst_21431);
var inst_21433 = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(inst_21394);
var inst_21434 = lomakkeet.fields.coerce(coercion_matcher,inst_21432,inst_21433);
var inst_21435 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_21431,inst_21434);
var state_21462__$1 = state_21462;
var statearr_21490_21549 = state_21462__$1;
(statearr_21490_21549[(2)] = inst_21435);

(statearr_21490_21549[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (3))){
var inst_21460 = (state_21462[(2)]);
var state_21462__$1 = state_21462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21462__$1,inst_21460);
} else {
if((state_val_21463 === (12))){
var inst_21414 = (state_21462[(2)]);
var state_21462__$1 = state_21462;
var statearr_21491_21550 = state_21462__$1;
(statearr_21491_21550[(2)] = inst_21414);

(statearr_21491_21550[(1)] = (9));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (2))){
var state_21462__$1 = state_21462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21462__$1,(4),ch);
} else {
if((state_val_21463 === (23))){
var state_21462__$1 = state_21462;
var statearr_21492_21551 = state_21462__$1;
(statearr_21492_21551[(2)] = null);

(statearr_21492_21551[(1)] = (24));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (19))){
var inst_21445 = (function (){var G__21493 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21493) : cljs.core.deref.call(null,G__21493));
})();
var inst_21446 = (function (){var G__21494 = inst_21445;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__21494) : self__.form_validation_fn.call(null,G__21494));
})();
var state_21462__$1 = state_21462;
var statearr_21495_21552 = state_21462__$1;
(statearr_21495_21552[(2)] = inst_21446);

(statearr_21495_21552[(1)] = (21));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (11))){
var inst_21399 = (state_21462[(7)]);
var inst_21412 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_21399);
var state_21462__$1 = state_21462;
var statearr_21496_21553 = state_21462__$1;
(statearr_21496_21553[(2)] = inst_21412);

(statearr_21496_21553[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (9))){
var inst_21420 = (state_21462[(2)]);
var state_21462__$1 = state_21462;
var statearr_21497_21554 = state_21462__$1;
(statearr_21497_21554[(2)] = inst_21420);

(statearr_21497_21554[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (5))){
var inst_21443 = (state_21462[(2)]);
var state_21462__$1 = (function (){var statearr_21498 = state_21462;
(statearr_21498[(12)] = inst_21443);

return statearr_21498;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_21499_21555 = state_21462__$1;
(statearr_21499_21555[(1)] = (19));

} else {
var statearr_21500_21556 = state_21462__$1;
(statearr_21500_21556[(1)] = (20));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (14))){
var inst_21394 = (state_21462[(8)]);
var inst_21425 = cljs.core.seq_QMARK_(inst_21394);
var state_21462__$1 = state_21462;
if(inst_21425){
var statearr_21501_21557 = state_21462__$1;
(statearr_21501_21557[(1)] = (15));

} else {
var statearr_21502_21558 = state_21462__$1;
(statearr_21502_21558[(1)] = (16));

}

return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (16))){
var inst_21394 = (state_21462[(8)]);
var state_21462__$1 = state_21462;
var statearr_21503_21559 = state_21462__$1;
(statearr_21503_21559[(2)] = inst_21394);

(statearr_21503_21559[(1)] = (17));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (10))){
var inst_21399 = (state_21462[(7)]);
var inst_21394 = (state_21462[(8)]);
var inst_21396 = (state_21462[(9)]);
var inst_21408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21409 = (function (){var c__16610__auto____$1 = inst_21408;
var next = inst_21399;
var action_fn = inst_21396;
var temp__4124__auto__ = inst_21396;
var evt = inst_21394;
return ((function (c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21399,inst_21394,inst_21396,inst_21408,state_val_21463,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (){
var f__16611__auto__ = (function (){var switch__16530__auto__ = ((function (c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21399,inst_21394,inst_21396,inst_21408,state_val_21463,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (state_21406){
var state_val_21407 = (state_21406[(1)]);
if((state_val_21407 === (2))){
var inst_21403 = (state_21406[(2)]);
var inst_21404 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_21403);
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21406__$1,inst_21404);
} else {
if((state_val_21407 === (1))){
var state_21406__$1 = state_21406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21406__$1,(2),next);
} else {
return null;
}
}
});})(c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21399,inst_21394,inst_21396,inst_21408,state_val_21463,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;
return ((function (switch__16530__auto__,c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21399,inst_21394,inst_21396,inst_21408,state_val_21463,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_21507 = [null,null,null,null,null,null,null];
(statearr_21507[(0)] = state_machine__16531__auto__);

(statearr_21507[(1)] = (1));

return statearr_21507;
});
var state_machine__16531__auto____1 = (function (state_21406){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_21406);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e21508){if((e21508 instanceof Object)){
var ex__16534__auto__ = e21508;
var statearr_21509_21560 = state_21406;
(statearr_21509_21560[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21406);

return cljs.core.constant$keyword$97;
} else {
throw e21508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__21561 = state_21406;
state_21406 = G__21561;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_21406){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_21406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21399,inst_21394,inst_21396,inst_21408,state_val_21463,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
})();
var state__16612__auto__ = (function (){var statearr_21510 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_21510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto____$1);

return statearr_21510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});
;})(c__16610__auto____$1,next,action_fn,temp__4124__auto__,evt,inst_21399,inst_21394,inst_21396,inst_21408,state_val_21463,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
})();
var inst_21410 = cljs.core.async.impl.dispatch.run(inst_21409);
var state_21462__$1 = (function (){var statearr_21511 = state_21462;
(statearr_21511[(13)] = inst_21410);

return statearr_21511;
})();
var statearr_21512_21562 = state_21462__$1;
(statearr_21512_21562[(2)] = inst_21408);

(statearr_21512_21562[(1)] = (12));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (18))){
var inst_21394 = (state_21462[(8)]);
var inst_21437 = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(inst_21394);
var inst_21438 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_21437)].join('');
var inst_21439 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21438], 0));
var state_21462__$1 = state_21462;
var statearr_21513_21563 = state_21462__$1;
(statearr_21513_21563[(2)] = inst_21439);

(statearr_21513_21563[(1)] = (5));


return cljs.core.constant$keyword$97;
} else {
if((state_val_21463 === (8))){
var inst_21394 = (state_21462[(8)]);
var inst_21416 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(inst_21394);
var inst_21417 = [cljs.core.str("WARNING: "),cljs.core.str(inst_21416),cljs.core.str(" is unknown")].join('');
var inst_21418 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21417], 0));
var state_21462__$1 = state_21462;
var statearr_21514_21564 = state_21462__$1;
(statearr_21514_21564[(2)] = inst_21418);

(statearr_21514_21564[(1)] = (9));


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
});})(c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;
return ((function (switch__16530__auto__,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function() {
var state_machine__16531__auto__ = null;
var state_machine__16531__auto____0 = (function (){
var statearr_21518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21518[(0)] = state_machine__16531__auto__);

(statearr_21518[(1)] = (1));

return statearr_21518;
});
var state_machine__16531__auto____1 = (function (state_21462){
while(true){
var ret_value__16532__auto__ = (function (){try{while(true){
var result__16533__auto__ = switch__16530__auto__(state_21462);
if(cljs.core.keyword_identical_QMARK_(result__16533__auto__,cljs.core.constant$keyword$97)){
continue;
} else {
return result__16533__auto__;
}
break;
}
}catch (e21519){if((e21519 instanceof Object)){
var ex__16534__auto__ = e21519;
var statearr_21520_21565 = state_21462;
(statearr_21520_21565[(5)] = ex__16534__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21462);

return cljs.core.constant$keyword$97;
} else {
throw e21519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16532__auto__,cljs.core.constant$keyword$97)){
var G__21566 = state_21462;
state_21462 = G__21566;
continue;
} else {
return ret_value__16532__auto__;
}
break;
}
});
state_machine__16531__auto__ = function(state_21462){
switch(arguments.length){
case 0:
return state_machine__16531__auto____0.call(this);
case 1:
return state_machine__16531__auto____1.call(this,state_21462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16531__auto____0;
state_machine__16531__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16531__auto____1;
return state_machine__16531__auto__;
})()
;})(switch__16530__auto__,c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
})();
var state__16612__auto__ = (function (){var statearr_21521 = (function (){return (f__16611__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16611__auto__.cljs$core$IFn$_invoke$arity$0() : f__16611__auto__.call(null));
})();
(statearr_21521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16610__auto__);

return statearr_21521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16612__auto__);
});})(c__16610__auto__,schema__$1,map__21390,map__21390__$1,coercion_matcher,ch,___$1,map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
);

return c__16610__auto__;
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.t21384.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t21384.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$149,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$163,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.t21384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (_21386){
var self__ = this;
var _21386__$1 = this;
return self__.meta21385;
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.t21384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (_21386,meta21385__$1){
var self__ = this;
var _21386__$1 = this;
return (new lomakkeet.fields.t21384(self__.form,self__.input_schema21221,self__.G__21226,self__.owner,self__.output_checker21223,self__.form_validation_fn,self__.form_state,self__.G__21379,self__.render_fn,self__.G__21225,self__.validate__6096__auto__,self__.map__21381,self__.value,self__.input_checker21222,self__.G__21224,self__.actions,self__.G__21378,self__.map__21380,self__.opts,self__.initial_value,self__.output_schema21220,self__.ufv__,self__.map__21382,self__.map__21383,meta21385__$1));
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.t21384.cljs$lang$type = true;

lomakkeet.fields.t21384.cljs$lang$ctorStr = "lomakkeet.fields/t21384";

lomakkeet.fields.t21384.cljs$lang$ctorPrWriter = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"lomakkeet.fields/t21384");
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

lomakkeet.fields.__GT_t21384 = ((function (map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527){
return (function __GT_t21384(form__$3,input_schema21221__$1,G__21226__$1,owner__$3,output_checker21223__$1,form_validation_fn__$2,form_state__$2,G__21379__$2,render_fn__$2,G__21225__$1,validate__6096__auto____$1,map__21381__$2,value__$2,input_checker21222__$1,G__21224__$1,actions__$2,G__21378__$2,map__21380__$2,opts__$2,initial_value__$2,output_schema21220__$1,ufv____$1,map__21382__$2,map__21383__$2,meta21385){
return (new lomakkeet.fields.t21384(form__$3,input_schema21221__$1,G__21226__$1,owner__$3,output_checker21223__$1,form_validation_fn__$2,form_state__$2,G__21379__$2,render_fn__$2,G__21225__$1,validate__6096__auto____$1,map__21381__$2,value__$2,input_checker21222__$1,G__21224__$1,actions__$2,G__21378__$2,map__21380__$2,opts__$2,initial_value__$2,output_schema21220__$1,ufv____$1,map__21382__$2,map__21383__$2,meta21385));
});})(map__21382,map__21382__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__21383,map__21383__$1,opts__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__21378,map__21380,map__21380__$1,form_state,initial_value,value,owner,G__21379,map__21381,map__21381__$1,opts,form_validation_fn,form__$1,render_fn,actions,validate__6096__auto__,ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

}

return (new lomakkeet.fields.t21384(form__$2,input_schema21221_21525,G__21226,owner__$2,output_checker21223_21527,form_validation_fn__$1,form_state__$1,G__21379__$1,render_fn__$1,G__21225,validate__6096__auto__,map__21381__$1,value__$1,input_checker21222_21526,G__21224,actions__$1,G__21378__$1,map__21380__$1,opts__$1,initial_value__$1,output_schema21220_21524,ufv___21523,map__21382__$1,map__21383__$1,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___21567 = (function (){var G__21522 = o__6099__auto__;
return (output_checker21223_21527.cljs$core$IFn$_invoke$arity$1 ? output_checker21223_21527.cljs$core$IFn$_invoke$arity$1(G__21522) : output_checker21223_21527.call(null,G__21522));
})();
if(cljs.core.truth_(temp__4126__auto___21567)){
var error__6098__auto___21568 = temp__4126__auto___21567;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___21568], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___21568,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema21220_21524,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___21523,output_schema21220_21524,input_schema21221_21525,input_checker21222_21526,output_checker21223_21527))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema21220_21524,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21221_21525], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__7890__auto__);
});
var __GT_form__2 = (function (cursor__7890__auto__,m21219){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__7890__auto__,m21219);
});
__GT_form = function(cursor__7890__auto__,m21219){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__7890__auto__);
case 2:
return __GT_form__2.call(this,cursor__7890__auto__,m21219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
lomakkeet.fields.dirty_QMARK_ = (function dirty_QMARK_(form_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.errors_QMARK_ = (function errors_QMARK_(form_state){
return cljs.core.seq(cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(form_state));
});
