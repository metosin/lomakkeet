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
var get_in_schema__delegate = function (schema__$1,ks,p__22107){
var vec__22109 = p__22107;
var not_found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22109,not_found){
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
});})(vec__22109,not_found))
,schema__$1,ks);
};
var get_in_schema = function (schema__$1,ks,var_args){
var p__22107 = null;
if (arguments.length > 2) {
var G__22110__i = 0, G__22110__a = new Array(arguments.length -  2);
while (G__22110__i < G__22110__a.length) {G__22110__a[G__22110__i] = arguments[G__22110__i + 2]; ++G__22110__i;}
  p__22107 = new cljs.core.IndexedSeq(G__22110__a,0);
} 
return get_in_schema__delegate.call(this,schema__$1,ks,p__22107);};
get_in_schema.cljs$lang$maxFixedArity = 2;
get_in_schema.cljs$lang$applyTo = (function (arglist__22111){
var schema__$1 = cljs.core.first(arglist__22111);
arglist__22111 = cljs.core.next(arglist__22111);
var ks = cljs.core.first(arglist__22111);
var p__22107 = cljs.core.rest(arglist__22111);
return get_in_schema__delegate(schema__$1,ks,p__22107);
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
lomakkeet.fields.dissoc_in = (function dissoc_in(m,p__22112){
var vec__22116 = p__22112;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22116,(0),null);
var ks = cljs.core.nthnext(vec__22116,(1));
var keys = vec__22116;
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
lomakkeet.fields.empty_cb = (function empty_cb(p__22117){
var map__22119 = p__22117;
var map__22119__$1 = ((cljs.core.seq_QMARK_(map__22119))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22119):map__22119);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22119__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22119__$1,cljs.core.constant$keyword$147);
return ((function (map__22119,map__22119__$1,ks,ch){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$146,ks], null));
});
;})(map__22119,map__22119__$1,ks,ch))
});

var ufv___22164 = schema.utils.use_fn_validation;
var output_schema22121_22165 = schema.core.Any;
var input_schema22122_22166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"state","state",-348086572,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22123_22167 = schema.core.checker(input_schema22122_22166);
var output_checker22124_22168 = schema.core.checker(output_schema22121_22165);
/**
* Inputs: [state owner {:keys [real-input], :as opts}]
*/
lomakkeet.fields.emptyable_input = ((function (ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function emptyable_input(G__22125,G__22126,G__22127){
var validate__10718__auto__ = ufv___22164.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22169 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22125,G__22126,G__22127], null);
var temp__4126__auto___22170 = (function (){var G__22146 = args__10719__auto___22169;
return (input_checker22123_22167.cljs$core$IFn$_invoke$arity$1 ? input_checker22123_22167.cljs$core$IFn$_invoke$arity$1(G__22146) : input_checker22123_22167.call(null,G__22146));
})();
if(cljs.core.truth_(temp__4126__auto___22170)){
var error__10720__auto___22171 = temp__4126__auto___22170;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22171], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22171,cljs.core.constant$keyword$23,args__10719__auto___22169,cljs.core.constant$keyword$24,input_schema22122_22166,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var state = G__22125;
var owner = G__22126;
var G__22148 = G__22127;
var map__22149 = G__22148;
var map__22149__$1 = ((cljs.core.seq_QMARK_(map__22149))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22149):map__22149);
var opts = map__22149__$1;
var real_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22149__$1,cljs.core.constant$keyword$149);
var state__$1 = state;
var owner__$1 = owner;
var G__22148__$1 = G__22148;
while(true){
var state__$2 = state__$1;
var owner__$2 = owner__$1;
var map__22150 = G__22148__$1;
var map__22150__$1 = ((cljs.core.seq_QMARK_(map__22150))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22150):map__22150);
var opts__$1 = map__22150__$1;
var real_input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.constant$keyword$149);
if(typeof lomakkeet.fields.t22151 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22151 = (function (G__22126,input_checker22123,output_checker22124,owner,emptyable_input,input_schema22122,G__22148,map__22150,real_input,state,map__22149,opts,ufv__,G__22125,output_schema22121,G__22127,validate__10718__auto__,meta22152){
this.G__22126 = G__22126;
this.input_checker22123 = input_checker22123;
this.output_checker22124 = output_checker22124;
this.owner = owner;
this.emptyable_input = emptyable_input;
this.input_schema22122 = input_schema22122;
this.G__22148 = G__22148;
this.map__22150 = map__22150;
this.real_input = real_input;
this.state = state;
this.map__22149 = map__22149;
this.opts = opts;
this.ufv__ = ufv__;
this.G__22125 = G__22125;
this.output_schema22121 = output_schema22121;
this.G__22127 = G__22127;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22152 = meta22152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22151.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22151.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function (_){
var self__ = this;
var ___$1 = this;
return "emptyable-input";
});})(state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

lomakkeet.fields.t22151.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22151.prototype.om$core$IRenderState$render_state$arity$2 = ((function (state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var attrs22154 = om.core.build.cljs$core$IFn$_invoke$arity$3(self__.real_input,self__.state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,self__.opts,cljs.core.constant$keyword$86,s], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22154))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-group"], null)], null),attrs22154], 0))):{"className": "input-group"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22154))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22155 = {"className": "input-group-btn"};
var G__22156 = (function (){var G__22157 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22158 = "\u00D7";
return React.DOM.button(G__22157,G__22158);
})();
return React.DOM.span(G__22155,G__22156);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22154),(function (){var G__22159 = {"className": "input-group-btn"};
var G__22160 = (function (){var G__22161 = {"className": "btn btn-default", "type": "button", "onClick": lomakkeet.fields.empty_cb(self__.opts)};
var G__22162 = "\u00D7";
return React.DOM.button(G__22161,G__22162);
})();
return React.DOM.span(G__22159,G__22160);
})()], null))));
});})(state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

lomakkeet.fields.t22151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function (_22153){
var self__ = this;
var _22153__$1 = this;
return self__.meta22152;
});})(state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

lomakkeet.fields.t22151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function (_22153,meta22152__$1){
var self__ = this;
var _22153__$1 = this;
return (new lomakkeet.fields.t22151(self__.G__22126,self__.input_checker22123,self__.output_checker22124,self__.owner,self__.emptyable_input,self__.input_schema22122,self__.G__22148,self__.map__22150,self__.real_input,self__.state,self__.map__22149,self__.opts,self__.ufv__,self__.G__22125,self__.output_schema22121,self__.G__22127,self__.validate__10718__auto__,meta22152__$1));
});})(state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

lomakkeet.fields.t22151.cljs$lang$type = true;

lomakkeet.fields.t22151.cljs$lang$ctorStr = "lomakkeet.fields/t22151";

lomakkeet.fields.t22151.cljs$lang$ctorPrWriter = ((function (state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22151");
});})(state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

lomakkeet.fields.__GT_t22151 = ((function (state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168){
return (function __GT_t22151(G__22126__$1,input_checker22123__$1,output_checker22124__$1,owner__$3,emptyable_input__$1,input_schema22122__$1,G__22148__$2,map__22150__$2,real_input__$2,state__$3,map__22149__$2,opts__$2,ufv____$1,G__22125__$1,output_schema22121__$1,G__22127__$1,validate__10718__auto____$1,meta22152){
return (new lomakkeet.fields.t22151(G__22126__$1,input_checker22123__$1,output_checker22124__$1,owner__$3,emptyable_input__$1,input_schema22122__$1,G__22148__$2,map__22150__$2,real_input__$2,state__$3,map__22149__$2,opts__$2,ufv____$1,G__22125__$1,output_schema22121__$1,G__22127__$1,validate__10718__auto____$1,meta22152));
});})(state__$2,owner__$2,map__22150,map__22150__$1,opts__$1,real_input__$1,state,owner,G__22148,map__22149,map__22149__$1,opts,real_input,validate__10718__auto__,ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

}

return (new lomakkeet.fields.t22151(G__22126,input_checker22123_22167,output_checker22124_22168,owner__$2,emptyable_input,input_schema22122_22166,G__22148__$1,map__22150__$1,real_input__$1,state__$2,map__22149__$1,opts__$1,ufv___22164,G__22125,output_schema22121_22165,G__22127,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22172 = (function (){var G__22163 = o__10721__auto__;
return (output_checker22124_22168.cljs$core$IFn$_invoke$arity$1 ? output_checker22124_22168.cljs$core$IFn$_invoke$arity$1(G__22163) : output_checker22124_22168.call(null,G__22163));
})();
if(cljs.core.truth_(temp__4126__auto___22172)){
var error__10720__auto___22173 = temp__4126__auto___22172;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"emptyable-input","emptyable-input",298440140,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22173], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22173,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22121_22165,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22164,output_schema22121_22165,input_schema22122_22166,input_checker22123_22167,output_checker22124_22168))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.emptyable_input),schema.core.make_fn_schema(output_schema22121_22165,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22122_22166], null)));

lomakkeet.fields.__GT_emptyable_input = (function() {
var __GT_emptyable_input = null;
var __GT_emptyable_input__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.emptyable_input,cursor__20339__auto__);
});
var __GT_emptyable_input__2 = (function (cursor__20339__auto__,m22120){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.emptyable_input,cursor__20339__auto__,m22120);
});
__GT_emptyable_input = function(cursor__20339__auto__,m22120){
switch(arguments.length){
case 1:
return __GT_emptyable_input__1.call(this,cursor__20339__auto__);
case 2:
return __GT_emptyable_input__2.call(this,cursor__20339__auto__,m22120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$1 = __GT_emptyable_input__1;
__GT_emptyable_input.cljs$core$IFn$_invoke$arity$2 = __GT_emptyable_input__2;
return __GT_emptyable_input;
})()
;

var ufv___22226 = schema.utils.use_fn_validation;
var output_schema22175_22227 = schema.core.Any;
var input_schema22176_22228 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22177_22229 = schema.core.checker(input_schema22176_22228);
var output_checker22178_22230 = schema.core.checker(output_schema22175_22227);
/**
* Inputs: [{:keys [error], :as input-state} owner {:keys [input label size help-text], :or {size 6}, :as opts}]
*/
lomakkeet.fields.default_form_group = ((function (ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function default_form_group(G__22179,G__22180,G__22181){
var validate__10718__auto__ = ufv___22226.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22231 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22179,G__22180,G__22181], null);
var temp__4126__auto___22232 = (function (){var G__22204 = args__10719__auto___22231;
return (input_checker22177_22229.cljs$core$IFn$_invoke$arity$1 ? input_checker22177_22229.cljs$core$IFn$_invoke$arity$1(G__22204) : input_checker22177_22229.call(null,G__22204));
})();
if(cljs.core.truth_(temp__4126__auto___22232)){
var error__10720__auto___22233 = temp__4126__auto___22232;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22233], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22233,cljs.core.constant$keyword$23,args__10719__auto___22231,cljs.core.constant$keyword$24,input_schema22176_22228,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22207 = G__22179;
var map__22209 = G__22207;
var map__22209__$1 = ((cljs.core.seq_QMARK_(map__22209))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22209):map__22209);
var input_state = map__22209__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22209__$1,cljs.core.constant$keyword$22);
var owner = G__22180;
var G__22208 = G__22181;
var map__22210 = G__22208;
var map__22210__$1 = ((cljs.core.seq_QMARK_(map__22210))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22210):map__22210);
var opts = map__22210__$1;
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210__$1,cljs.core.constant$keyword$150);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22210__$1,cljs.core.constant$keyword$151,(6));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210__$1,cljs.core.constant$keyword$137);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22210__$1,cljs.core.constant$keyword$124);
var G__22207__$1 = G__22207;
var owner__$1 = owner;
var G__22208__$1 = G__22208;
while(true){
var map__22211 = G__22207__$1;
var map__22211__$1 = ((cljs.core.seq_QMARK_(map__22211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22211):map__22211);
var input_state__$1 = map__22211__$1;
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22211__$1,cljs.core.constant$keyword$22);
var owner__$2 = owner__$1;
var map__22212 = G__22208__$1;
var map__22212__$1 = ((cljs.core.seq_QMARK_(map__22212))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22212):map__22212);
var opts__$1 = map__22212__$1;
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,cljs.core.constant$keyword$150);
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22212__$1,cljs.core.constant$keyword$151,(6));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,cljs.core.constant$keyword$137);
var input__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,cljs.core.constant$keyword$124);
if(typeof lomakkeet.fields.t22213 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22213 = (function (input,input_checker22177,default_form_group,map__22212,G__22180,input_schema22176,owner,output_checker22178,G__22179,input_state,map__22211,output_schema22175,G__22208,G__22181,size,map__22210,G__22207,map__22209,label,opts,ufv__,help_text,error,validate__10718__auto__,meta22214){
this.input = input;
this.input_checker22177 = input_checker22177;
this.default_form_group = default_form_group;
this.map__22212 = map__22212;
this.G__22180 = G__22180;
this.input_schema22176 = input_schema22176;
this.owner = owner;
this.output_checker22178 = output_checker22178;
this.G__22179 = G__22179;
this.input_state = input_state;
this.map__22211 = map__22211;
this.output_schema22175 = output_schema22175;
this.G__22208 = G__22208;
this.G__22181 = G__22181;
this.size = size;
this.map__22210 = map__22210;
this.G__22207 = G__22207;
this.map__22209 = map__22209;
this.label = label;
this.opts = opts;
this.ufv__ = ufv__;
this.help_text = help_text;
this.error = error;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22214 = meta22214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22213.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22213.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function (_){
var self__ = this;
var ___$1 = this;
return "default-form-group";
});})(map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

lomakkeet.fields.t22213.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22213.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var G__22217 = {"className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-group",(function (){var G__22222 = cljs.core.PersistentVector.EMPTY;
var G__22222__$1 = (cljs.core.truth_(self__.error)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22222,"has-error"):G__22222);
var G__22222__$2 = (cljs.core.truth_(self__.size)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__22222__$1,[cljs.core.str("col-md-"),cljs.core.str(self__.size)].join('')):G__22222__$1);
return G__22222__$2;
})()], null))};
var G__22218 = (function (){var attrs22216 = self__.label;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs22216))?sablono.interpreter.attributes(attrs22216):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22216))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22216),":"], null))));
})();
var G__22219 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(self__.input,self__.input_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,self__.opts,cljs.core.constant$keyword$86,s], null)));
var G__22220 = (cljs.core.truth_(self__.help_text)?(function (){var attrs22223 = self__.help_text;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22223))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22223], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22223))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22223)], null))));
})():null);
var G__22221 = (cljs.core.truth_((function (){var and__3746__auto__ = !(cljs.core.empty_QMARK_);
if(and__3746__auto__){
return self__.error;
} else {
return and__3746__auto__;
}
})())?(function (){var attrs22224 = [cljs.core.str(self__.error)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs22224))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help-block"], null)], null),attrs22224], 0))):{"className": "help-block"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22224))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22224)], null))));
})():null);
return React.DOM.div(G__22217,G__22218,G__22219,G__22220,G__22221);
});})(map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

lomakkeet.fields.t22213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function (_22215){
var self__ = this;
var _22215__$1 = this;
return self__.meta22214;
});})(map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

lomakkeet.fields.t22213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function (_22215,meta22214__$1){
var self__ = this;
var _22215__$1 = this;
return (new lomakkeet.fields.t22213(self__.input,self__.input_checker22177,self__.default_form_group,self__.map__22212,self__.G__22180,self__.input_schema22176,self__.owner,self__.output_checker22178,self__.G__22179,self__.input_state,self__.map__22211,self__.output_schema22175,self__.G__22208,self__.G__22181,self__.size,self__.map__22210,self__.G__22207,self__.map__22209,self__.label,self__.opts,self__.ufv__,self__.help_text,self__.error,self__.validate__10718__auto__,meta22214__$1));
});})(map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

lomakkeet.fields.t22213.cljs$lang$type = true;

lomakkeet.fields.t22213.cljs$lang$ctorStr = "lomakkeet.fields/t22213";

lomakkeet.fields.t22213.cljs$lang$ctorPrWriter = ((function (map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22213");
});})(map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

lomakkeet.fields.__GT_t22213 = ((function (map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230){
return (function __GT_t22213(input__$2,input_checker22177__$1,default_form_group__$1,map__22212__$2,G__22180__$1,input_schema22176__$1,owner__$3,output_checker22178__$1,G__22179__$1,input_state__$2,map__22211__$2,output_schema22175__$1,G__22208__$2,G__22181__$1,size__$2,map__22210__$2,G__22207__$2,map__22209__$2,label__$2,opts__$2,ufv____$1,help_text__$2,error__$2,validate__10718__auto____$1,meta22214){
return (new lomakkeet.fields.t22213(input__$2,input_checker22177__$1,default_form_group__$1,map__22212__$2,G__22180__$1,input_schema22176__$1,owner__$3,output_checker22178__$1,G__22179__$1,input_state__$2,map__22211__$2,output_schema22175__$1,G__22208__$2,G__22181__$1,size__$2,map__22210__$2,G__22207__$2,map__22209__$2,label__$2,opts__$2,ufv____$1,help_text__$2,error__$2,validate__10718__auto____$1,meta22214));
});})(map__22211,map__22211__$1,input_state__$1,error__$1,owner__$2,map__22212,map__22212__$1,opts__$1,help_text__$1,size__$1,label__$1,input__$1,G__22207,map__22209,map__22209__$1,input_state,error,owner,G__22208,map__22210,map__22210__$1,opts,help_text,size,label,input,validate__10718__auto__,ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

}

return (new lomakkeet.fields.t22213(input__$1,input_checker22177_22229,default_form_group,map__22212__$1,G__22180,input_schema22176_22228,owner__$2,output_checker22178_22230,G__22179,input_state__$1,map__22211__$1,output_schema22175_22227,G__22208__$1,G__22181,size__$1,map__22210__$1,G__22207__$1,map__22209__$1,label__$1,opts__$1,ufv___22226,help_text__$1,error__$1,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22234 = (function (){var G__22225 = o__10721__auto__;
return (output_checker22178_22230.cljs$core$IFn$_invoke$arity$1 ? output_checker22178_22230.cljs$core$IFn$_invoke$arity$1(G__22225) : output_checker22178_22230.call(null,G__22225));
})();
if(cljs.core.truth_(temp__4126__auto___22234)){
var error__10720__auto___22235 = temp__4126__auto___22234;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"default-form-group","default-form-group",567307618,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22235], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22235,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22175_22227,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22226,output_schema22175_22227,input_schema22176_22228,input_checker22177_22229,output_checker22178_22230))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.default_form_group),schema.core.make_fn_schema(output_schema22175_22227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22176_22228], null)));

lomakkeet.fields.__GT_default_form_group = (function() {
var __GT_default_form_group = null;
var __GT_default_form_group__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.default_form_group,cursor__20339__auto__);
});
var __GT_default_form_group__2 = (function (cursor__20339__auto__,m22174){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.default_form_group,cursor__20339__auto__,m22174);
});
__GT_default_form_group = function(cursor__20339__auto__,m22174){
switch(arguments.length){
case 1:
return __GT_default_form_group__1.call(this,cursor__20339__auto__);
case 2:
return __GT_default_form_group__2.call(this,cursor__20339__auto__,m22174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_default_form_group.cljs$core$IFn$_invoke$arity$1 = __GT_default_form_group__1;
__GT_default_form_group.cljs$core$IFn$_invoke$arity$2 = __GT_default_form_group__2;
return __GT_default_form_group;
})()
;
lomakkeet.fields.build = (function build(p__22236){
var map__22242 = p__22236;
var map__22242__$1 = ((cljs.core.seq_QMARK_(map__22242))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22242):map__22242);
var opts = map__22242__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22242__$1,cljs.core.constant$keyword$146);
var form_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22242__$1,cljs.core.constant$keyword$152);
var form_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22242__$1,cljs.core.constant$keyword$153);
var map__22243 = form_state;
var map__22243__$1 = ((cljs.core.seq_QMARK_(map__22243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22243):map__22243);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22243__$1,cljs.core.constant$keyword$24);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22243__$1,cljs.core.constant$keyword$154);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22243__$1,cljs.core.constant$keyword$23);
return om.core.build.cljs$core$IFn$_invoke$arity$3(form_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22244 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22244) : cljs.core.deref.call(null,G__22244));
})(),ks),cljs.core.constant$keyword$22,(cljs.core.truth_(errors)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__22245 = errors;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22245) : cljs.core.deref.call(null,G__22245));
})(),ks):null),cljs.core.constant$keyword$24,(cljs.core.truth_(schema__$1)?lomakkeet.fields.get_in_schema((function (){var G__22246 = schema__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22246) : cljs.core.deref.call(null,G__22246));
})(),ks):null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$86),cljs.core.constant$keyword$86,cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(opts)], null));
});
lomakkeet.fields.input_input = (function input_input(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,"text",cljs.core.constant$keyword$23,(function (){var or__3758__auto__ = value;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return "";
}
})(),cljs.core.constant$keyword$156,cb], null)], null);
});
lomakkeet.fields.input_textarea = (function input_textarea(value,cb){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,(function (){var or__3758__auto__ = value;
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

var ufv___22287 = schema.utils.use_fn_validation;
var output_schema22248_22288 = schema.core.Any;
var input_schema22249_22289 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22250_22290 = schema.core.checker(input_schema22249_22289);
var output_checker22251_22291 = schema.core.checker(output_schema22248_22288);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks el transform-value], :or {el input-input, transform-value identity}, :as opts}]
*/
lomakkeet.fields.input_STAR_ = ((function (ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function input_STAR_(G__22252,G__22253,G__22254){
var validate__10718__auto__ = ufv___22287.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22292 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22252,G__22253,G__22254], null);
var temp__4126__auto___22293 = (function (){var G__22271 = args__10719__auto___22292;
return (input_checker22250_22290.cljs$core$IFn$_invoke$arity$1 ? input_checker22250_22290.cljs$core$IFn$_invoke$arity$1(G__22271) : input_checker22250_22290.call(null,G__22271));
})();
if(cljs.core.truth_(temp__4126__auto___22293)){
var error__10720__auto___22294 = temp__4126__auto___22293;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22294], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22294,cljs.core.constant$keyword$23,args__10719__auto___22292,cljs.core.constant$keyword$24,input_schema22249_22289,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22274 = G__22252;
var map__22276 = G__22274;
var map__22276__$1 = ((cljs.core.seq_QMARK_(map__22276))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22276):map__22276);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22276__$1,cljs.core.constant$keyword$23);
var owner = G__22253;
var G__22275 = G__22254;
var map__22277 = G__22275;
var map__22277__$1 = ((cljs.core.seq_QMARK_(map__22277))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22277):map__22277);
var opts = map__22277__$1;
var transform_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22277__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22277__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22277__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22277__$1,cljs.core.constant$keyword$147);
var G__22274__$1 = G__22274;
var owner__$1 = owner;
var G__22275__$1 = G__22275;
while(true){
var map__22278 = G__22274__$1;
var map__22278__$1 = ((cljs.core.seq_QMARK_(map__22278))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22278):map__22278);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22278__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__22279 = G__22275__$1;
var map__22279__$1 = ((cljs.core.seq_QMARK_(map__22279))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22279):map__22279);
var opts__$1 = map__22279__$1;
var transform_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22279__$1,cljs.core.constant$keyword$159,cljs.core.identity);
var el__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22279__$1,cljs.core.constant$keyword$160,lomakkeet.fields.input_input);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22279__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22280 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22280 = (function (input_checker22250,owner,map__22277,input_STAR_,map__22278,G__22253,G__22274,el,output_schema22248,map__22279,map__22276,ks,G__22254,output_checker22251,value,transform_value,ch,opts,G__22275,G__22252,ufv__,input_schema22249,validate__10718__auto__,meta22281){
this.input_checker22250 = input_checker22250;
this.owner = owner;
this.map__22277 = map__22277;
this.input_STAR_ = input_STAR_;
this.map__22278 = map__22278;
this.G__22253 = G__22253;
this.G__22274 = G__22274;
this.el = el;
this.output_schema22248 = output_schema22248;
this.map__22279 = map__22279;
this.map__22276 = map__22276;
this.ks = ks;
this.G__22254 = G__22254;
this.output_checker22251 = output_checker22251;
this.value = value;
this.transform_value = transform_value;
this.ch = ch;
this.opts = opts;
this.G__22275 = G__22275;
this.G__22252 = G__22252;
this.ufv__ = ufv__;
this.input_schema22249 = input_schema22249;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22281 = meta22281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22280.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22280.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function (_){
var self__ = this;
var ___$1 = this;
return "input*";
});})(map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

lomakkeet.fields.t22280.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22280.prototype.om$core$IRender$render$arity$1 = ((function (map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22283 = (function (){var G__22285 = self__.value;
return (self__.transform_value.cljs$core$IFn$_invoke$arity$1 ? self__.transform_value.cljs$core$IFn$_invoke$arity$1(G__22285) : self__.transform_value.call(null,G__22285));
})();
var G__22284 = ((function (G__22283,___$1,map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,e.target.value], null));
});})(G__22283,___$1,map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;
return (self__.el.cljs$core$IFn$_invoke$arity$2 ? self__.el.cljs$core$IFn$_invoke$arity$2(G__22283,G__22284) : self__.el.call(null,G__22283,G__22284));
})());
});})(map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

lomakkeet.fields.t22280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function (_22282){
var self__ = this;
var _22282__$1 = this;
return self__.meta22281;
});})(map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

lomakkeet.fields.t22280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function (_22282,meta22281__$1){
var self__ = this;
var _22282__$1 = this;
return (new lomakkeet.fields.t22280(self__.input_checker22250,self__.owner,self__.map__22277,self__.input_STAR_,self__.map__22278,self__.G__22253,self__.G__22274,self__.el,self__.output_schema22248,self__.map__22279,self__.map__22276,self__.ks,self__.G__22254,self__.output_checker22251,self__.value,self__.transform_value,self__.ch,self__.opts,self__.G__22275,self__.G__22252,self__.ufv__,self__.input_schema22249,self__.validate__10718__auto__,meta22281__$1));
});})(map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

lomakkeet.fields.t22280.cljs$lang$type = true;

lomakkeet.fields.t22280.cljs$lang$ctorStr = "lomakkeet.fields/t22280";

lomakkeet.fields.t22280.cljs$lang$ctorPrWriter = ((function (map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22280");
});})(map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

lomakkeet.fields.__GT_t22280 = ((function (map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291){
return (function __GT_t22280(input_checker22250__$1,owner__$3,map__22277__$2,input_STAR___$1,map__22278__$2,G__22253__$1,G__22274__$2,el__$2,output_schema22248__$1,map__22279__$2,map__22276__$2,ks__$2,G__22254__$1,output_checker22251__$1,value__$2,transform_value__$2,ch__$2,opts__$2,G__22275__$2,G__22252__$1,ufv____$1,input_schema22249__$1,validate__10718__auto____$1,meta22281){
return (new lomakkeet.fields.t22280(input_checker22250__$1,owner__$3,map__22277__$2,input_STAR___$1,map__22278__$2,G__22253__$1,G__22274__$2,el__$2,output_schema22248__$1,map__22279__$2,map__22276__$2,ks__$2,G__22254__$1,output_checker22251__$1,value__$2,transform_value__$2,ch__$2,opts__$2,G__22275__$2,G__22252__$1,ufv____$1,input_schema22249__$1,validate__10718__auto____$1,meta22281));
});})(map__22278,map__22278__$1,value__$1,owner__$2,map__22279,map__22279__$1,opts__$1,transform_value__$1,el__$1,ks__$1,ch__$1,G__22274,map__22276,map__22276__$1,value,owner,G__22275,map__22277,map__22277__$1,opts,transform_value,el,ks,ch,validate__10718__auto__,ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

}

return (new lomakkeet.fields.t22280(input_checker22250_22290,owner__$2,map__22277__$1,input_STAR_,map__22278__$1,G__22253,G__22274__$1,el__$1,output_schema22248_22288,map__22279__$1,map__22276__$1,ks__$1,G__22254,output_checker22251_22291,value__$1,transform_value__$1,ch__$1,opts__$1,G__22275__$1,G__22252,ufv___22287,input_schema22249_22289,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22295 = (function (){var G__22286 = o__10721__auto__;
return (output_checker22251_22291.cljs$core$IFn$_invoke$arity$1 ? output_checker22251_22291.cljs$core$IFn$_invoke$arity$1(G__22286) : output_checker22251_22291.call(null,G__22286));
})();
if(cljs.core.truth_(temp__4126__auto___22295)){
var error__10720__auto___22296 = temp__4126__auto___22295;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"input*","input*",1326385478,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22296], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22296,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22248_22288,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22287,output_schema22248_22288,input_schema22249_22289,input_checker22250_22290,output_checker22251_22291))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.input_STAR_),schema.core.make_fn_schema(output_schema22248_22288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22249_22289], null)));

lomakkeet.fields.__GT_input_STAR_ = (function() {
var __GT_input_STAR_ = null;
var __GT_input_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.input_STAR_,cursor__20339__auto__);
});
var __GT_input_STAR___2 = (function (cursor__20339__auto__,m22247){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.input_STAR_,cursor__20339__auto__,m22247);
});
__GT_input_STAR_ = function(cursor__20339__auto__,m22247){
switch(arguments.length){
case 1:
return __GT_input_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_input_STAR___2.call(this,cursor__20339__auto__,m22247);
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
var input__delegate = function (form,label,ks,p__22297){
var vec__22299 = p__22297;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22299,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var input = function (form,label,ks,var_args){
var p__22297 = null;
if (arguments.length > 3) {
var G__22300__i = 0, G__22300__a = new Array(arguments.length -  3);
while (G__22300__i < G__22300__a.length) {G__22300__a[G__22300__i] = arguments[G__22300__i + 3]; ++G__22300__i;}
  p__22297 = new cljs.core.IndexedSeq(G__22300__a,0);
} 
return input__delegate.call(this,form,label,ks,p__22297);};
input.cljs$lang$maxFixedArity = 3;
input.cljs$lang$applyTo = (function (arglist__22301){
var form = cljs.core.first(arglist__22301);
arglist__22301 = cljs.core.next(arglist__22301);
var label = cljs.core.first(arglist__22301);
arglist__22301 = cljs.core.next(arglist__22301);
var ks = cljs.core.first(arglist__22301);
var p__22297 = cljs.core.rest(arglist__22301);
return input__delegate(form,label,ks,p__22297);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.textarea = (function() { 
var textarea__delegate = function (form,label,ks,p__22302){
var vec__22304 = p__22302;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22304,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_textarea], null)], 0)));
};
var textarea = function (form,label,ks,var_args){
var p__22302 = null;
if (arguments.length > 3) {
var G__22305__i = 0, G__22305__a = new Array(arguments.length -  3);
while (G__22305__i < G__22305__a.length) {G__22305__a[G__22305__i] = arguments[G__22305__i + 3]; ++G__22305__i;}
  p__22302 = new cljs.core.IndexedSeq(G__22305__a,0);
} 
return textarea__delegate.call(this,form,label,ks,p__22302);};
textarea.cljs$lang$maxFixedArity = 3;
textarea.cljs$lang$applyTo = (function (arglist__22306){
var form = cljs.core.first(arglist__22306);
arglist__22306 = cljs.core.next(arglist__22306);
var label = cljs.core.first(arglist__22306);
arglist__22306 = cljs.core.next(arglist__22306);
var ks = cljs.core.first(arglist__22306);
var p__22302 = cljs.core.rest(arglist__22306);
return textarea__delegate(form,label,ks,p__22302);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
lomakkeet.fields.static$ = (function() { 
var static$__delegate = function (form,label,ks,p__22307){
var vec__22309 = p__22307;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22309,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.input_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$160,lomakkeet.fields.input_static], null)], 0)));
};
var static$ = function (form,label,ks,var_args){
var p__22307 = null;
if (arguments.length > 3) {
var G__22310__i = 0, G__22310__a = new Array(arguments.length -  3);
while (G__22310__i < G__22310__a.length) {G__22310__a[G__22310__i] = arguments[G__22310__i + 3]; ++G__22310__i;}
  p__22307 = new cljs.core.IndexedSeq(G__22310__a,0);
} 
return static$__delegate.call(this,form,label,ks,p__22307);};
static$.cljs$lang$maxFixedArity = 3;
static$.cljs$lang$applyTo = (function (arglist__22311){
var form = cljs.core.first(arglist__22311);
arglist__22311 = cljs.core.next(arglist__22311);
var label = cljs.core.first(arglist__22311);
arglist__22311 = cljs.core.next(arglist__22311);
var ks = cljs.core.first(arglist__22311);
var p__22307 = cljs.core.rest(arglist__22311);
return static$__delegate(form,label,ks,p__22307);
});
static$.cljs$core$IFn$_invoke$arity$variadic = static$__delegate;
return static$;
})()
;

var ufv___22348 = schema.utils.use_fn_validation;
var output_schema22313_22349 = schema.core.Any;
var input_schema22314_22350 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22315_22351 = schema.core.checker(input_schema22314_22350);
var output_checker22316_22352 = schema.core.checker(output_schema22313_22349);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks], :as opts}]
*/
lomakkeet.fields.checkbox_STAR_ = ((function (ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function checkbox_STAR_(G__22317,G__22318,G__22319){
var validate__10718__auto__ = ufv___22348.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22353 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22317,G__22318,G__22319], null);
var temp__4126__auto___22354 = (function (){var G__22334 = args__10719__auto___22353;
return (input_checker22315_22351.cljs$core$IFn$_invoke$arity$1 ? input_checker22315_22351.cljs$core$IFn$_invoke$arity$1(G__22334) : input_checker22315_22351.call(null,G__22334));
})();
if(cljs.core.truth_(temp__4126__auto___22354)){
var error__10720__auto___22355 = temp__4126__auto___22354;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22355], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22355,cljs.core.constant$keyword$23,args__10719__auto___22353,cljs.core.constant$keyword$24,input_schema22314_22350,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22337 = G__22317;
var map__22339 = G__22337;
var map__22339__$1 = ((cljs.core.seq_QMARK_(map__22339))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22339):map__22339);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22339__$1,cljs.core.constant$keyword$23);
var owner = G__22318;
var G__22338 = G__22319;
var map__22340 = G__22338;
var map__22340__$1 = ((cljs.core.seq_QMARK_(map__22340))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22340):map__22340);
var opts = map__22340__$1;
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22340__$1,cljs.core.constant$keyword$147);
var G__22337__$1 = G__22337;
var owner__$1 = owner;
var G__22338__$1 = G__22338;
while(true){
var map__22341 = G__22337__$1;
var map__22341__$1 = ((cljs.core.seq_QMARK_(map__22341))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22341):map__22341);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22341__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__22342 = G__22338__$1;
var map__22342__$1 = ((cljs.core.seq_QMARK_(map__22342))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22342):map__22342);
var opts__$1 = map__22342__$1;
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22343 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22343 = (function (G__22318,input_checker22315,map__22340,owner,map__22342,G__22319,output_schema22313,ks,map__22341,value,output_checker22316,G__22317,ch,input_schema22314,G__22337,map__22339,G__22338,checkbox_STAR_,opts,ufv__,validate__10718__auto__,meta22344){
this.G__22318 = G__22318;
this.input_checker22315 = input_checker22315;
this.map__22340 = map__22340;
this.owner = owner;
this.map__22342 = map__22342;
this.G__22319 = G__22319;
this.output_schema22313 = output_schema22313;
this.ks = ks;
this.map__22341 = map__22341;
this.value = value;
this.output_checker22316 = output_checker22316;
this.G__22317 = G__22317;
this.ch = ch;
this.input_schema22314 = input_schema22314;
this.G__22337 = G__22337;
this.map__22339 = map__22339;
this.G__22338 = G__22338;
this.checkbox_STAR_ = checkbox_STAR_;
this.opts = opts;
this.ufv__ = ufv__;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22344 = meta22344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22343.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22343.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function (_){
var self__ = this;
var ___$1 = this;
return "checkbox*";
});})(map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

lomakkeet.fields.t22343.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22343.prototype.om$core$IRender$render$arity$1 = ((function (map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22346 = {"type": "checkbox", "checked": cljs.core.boolean$(self__.value), "onChange": ((function (___$1,map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,e.target.checked], null));
});})(___$1,map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__22346) : sablono.interpreter.input.call(null,G__22346));
});})(map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

lomakkeet.fields.t22343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function (_22345){
var self__ = this;
var _22345__$1 = this;
return self__.meta22344;
});})(map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

lomakkeet.fields.t22343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function (_22345,meta22344__$1){
var self__ = this;
var _22345__$1 = this;
return (new lomakkeet.fields.t22343(self__.G__22318,self__.input_checker22315,self__.map__22340,self__.owner,self__.map__22342,self__.G__22319,self__.output_schema22313,self__.ks,self__.map__22341,self__.value,self__.output_checker22316,self__.G__22317,self__.ch,self__.input_schema22314,self__.G__22337,self__.map__22339,self__.G__22338,self__.checkbox_STAR_,self__.opts,self__.ufv__,self__.validate__10718__auto__,meta22344__$1));
});})(map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

lomakkeet.fields.t22343.cljs$lang$type = true;

lomakkeet.fields.t22343.cljs$lang$ctorStr = "lomakkeet.fields/t22343";

lomakkeet.fields.t22343.cljs$lang$ctorPrWriter = ((function (map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22343");
});})(map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

lomakkeet.fields.__GT_t22343 = ((function (map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352){
return (function __GT_t22343(G__22318__$1,input_checker22315__$1,map__22340__$2,owner__$3,map__22342__$2,G__22319__$1,output_schema22313__$1,ks__$2,map__22341__$2,value__$2,output_checker22316__$1,G__22317__$1,ch__$2,input_schema22314__$1,G__22337__$2,map__22339__$2,G__22338__$2,checkbox_STAR___$1,opts__$2,ufv____$1,validate__10718__auto____$1,meta22344){
return (new lomakkeet.fields.t22343(G__22318__$1,input_checker22315__$1,map__22340__$2,owner__$3,map__22342__$2,G__22319__$1,output_schema22313__$1,ks__$2,map__22341__$2,value__$2,output_checker22316__$1,G__22317__$1,ch__$2,input_schema22314__$1,G__22337__$2,map__22339__$2,G__22338__$2,checkbox_STAR___$1,opts__$2,ufv____$1,validate__10718__auto____$1,meta22344));
});})(map__22341,map__22341__$1,value__$1,owner__$2,map__22342,map__22342__$1,opts__$1,ks__$1,ch__$1,G__22337,map__22339,map__22339__$1,value,owner,G__22338,map__22340,map__22340__$1,opts,ks,ch,validate__10718__auto__,ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

}

return (new lomakkeet.fields.t22343(G__22318,input_checker22315_22351,map__22340__$1,owner__$2,map__22342__$1,G__22319,output_schema22313_22349,ks__$1,map__22341__$1,value__$1,output_checker22316_22352,G__22317,ch__$1,input_schema22314_22350,G__22337__$1,map__22339__$1,G__22338__$1,checkbox_STAR_,opts__$1,ufv___22348,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22356 = (function (){var G__22347 = o__10721__auto__;
return (output_checker22316_22352.cljs$core$IFn$_invoke$arity$1 ? output_checker22316_22352.cljs$core$IFn$_invoke$arity$1(G__22347) : output_checker22316_22352.call(null,G__22347));
})();
if(cljs.core.truth_(temp__4126__auto___22356)){
var error__10720__auto___22357 = temp__4126__auto___22356;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"checkbox*","checkbox*",-648650981,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22357], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22357,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22313_22349,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22348,output_schema22313_22349,input_schema22314_22350,input_checker22315_22351,output_checker22316_22352))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.checkbox_STAR_),schema.core.make_fn_schema(output_schema22313_22349,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22314_22350], null)));

lomakkeet.fields.__GT_checkbox_STAR_ = (function() {
var __GT_checkbox_STAR_ = null;
var __GT_checkbox_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.checkbox_STAR_,cursor__20339__auto__);
});
var __GT_checkbox_STAR___2 = (function (cursor__20339__auto__,m22312){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.checkbox_STAR_,cursor__20339__auto__,m22312);
});
__GT_checkbox_STAR_ = function(cursor__20339__auto__,m22312){
switch(arguments.length){
case 1:
return __GT_checkbox_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_checkbox_STAR___2.call(this,cursor__20339__auto__,m22312);
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
var checkbox__delegate = function (form,label,ks,p__22358){
var vec__22360 = p__22358;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22360,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$124,lomakkeet.fields.checkbox_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks], null)], 0)));
};
var checkbox = function (form,label,ks,var_args){
var p__22358 = null;
if (arguments.length > 3) {
var G__22361__i = 0, G__22361__a = new Array(arguments.length -  3);
while (G__22361__i < G__22361__a.length) {G__22361__a[G__22361__i] = arguments[G__22361__i + 3]; ++G__22361__i;}
  p__22358 = new cljs.core.IndexedSeq(G__22361__a,0);
} 
return checkbox__delegate.call(this,form,label,ks,p__22358);};
checkbox.cljs$lang$maxFixedArity = 3;
checkbox.cljs$lang$applyTo = (function (arglist__22362){
var form = cljs.core.first(arglist__22362);
arglist__22362 = cljs.core.next(arglist__22362);
var label = cljs.core.first(arglist__22362);
arglist__22362 = cljs.core.next(arglist__22362);
var ks = cljs.core.first(arglist__22362);
var p__22358 = cljs.core.rest(arglist__22362);
return checkbox__delegate(form,label,ks,p__22358);
});
checkbox.cljs$core$IFn$_invoke$arity$variadic = checkbox__delegate;
return checkbox;
})()
;

var ufv___22421 = schema.utils.use_fn_validation;
var output_schema22364_22422 = schema.core.Any;
var input_schema22365_22423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22366_22424 = schema.core.checker(input_schema22365_22423);
var output_checker22367_22425 = schema.core.checker(output_schema22364_22422);
/**
* Inputs: [{:keys [value]} owner {:keys [ch ks options], :as opts}]
*/
lomakkeet.fields.select_STAR_ = ((function (ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function select_STAR_(G__22368,G__22369,G__22370){
var validate__10718__auto__ = ufv___22421.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22426 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22368,G__22369,G__22370], null);
var temp__4126__auto___22427 = (function (){var G__22396 = args__10719__auto___22426;
return (input_checker22366_22424.cljs$core$IFn$_invoke$arity$1 ? input_checker22366_22424.cljs$core$IFn$_invoke$arity$1(G__22396) : input_checker22366_22424.call(null,G__22396));
})();
if(cljs.core.truth_(temp__4126__auto___22427)){
var error__10720__auto___22428 = temp__4126__auto___22427;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22428], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22428,cljs.core.constant$keyword$23,args__10719__auto___22426,cljs.core.constant$keyword$24,input_schema22365_22423,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22399 = G__22368;
var map__22401 = G__22399;
var map__22401__$1 = ((cljs.core.seq_QMARK_(map__22401))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22401):map__22401);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22401__$1,cljs.core.constant$keyword$23);
var owner = G__22369;
var G__22400 = G__22370;
var map__22402 = G__22400;
var map__22402__$1 = ((cljs.core.seq_QMARK_(map__22402))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22402):map__22402);
var opts = map__22402__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,cljs.core.constant$keyword$161);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,cljs.core.constant$keyword$146);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22402__$1,cljs.core.constant$keyword$147);
var G__22399__$1 = G__22399;
var owner__$1 = owner;
var G__22400__$1 = G__22400;
while(true){
var map__22403 = G__22399__$1;
var map__22403__$1 = ((cljs.core.seq_QMARK_(map__22403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22403):map__22403);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22403__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__22404 = G__22400__$1;
var map__22404__$1 = ((cljs.core.seq_QMARK_(map__22404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22404):map__22404);
var opts__$1 = map__22404__$1;
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22404__$1,cljs.core.constant$keyword$161);
var ks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22404__$1,cljs.core.constant$keyword$146);
var ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22404__$1,cljs.core.constant$keyword$147);
if(typeof lomakkeet.fields.t22405 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22405 = (function (options,map__22403,owner,G__22400,map__22402,G__22399,G__22369,map__22404,map__22401,ks,output_schema22364,value,output_checker22367,G__22370,ch,G__22368,select_STAR_,input_schema22365,input_checker22366,opts,ufv__,validate__10718__auto__,meta22406){
this.options = options;
this.map__22403 = map__22403;
this.owner = owner;
this.G__22400 = G__22400;
this.map__22402 = map__22402;
this.G__22399 = G__22399;
this.G__22369 = G__22369;
this.map__22404 = map__22404;
this.map__22401 = map__22401;
this.ks = ks;
this.output_schema22364 = output_schema22364;
this.value = value;
this.output_checker22367 = output_checker22367;
this.G__22370 = G__22370;
this.ch = ch;
this.G__22368 = G__22368;
this.select_STAR_ = select_STAR_;
this.input_schema22365 = input_schema22365;
this.input_checker22366 = input_checker22366;
this.opts = opts;
this.ufv__ = ufv__;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22406 = meta22406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22405.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22405.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (_){
var self__ = this;
var ___$1 = this;
return "select*";
});})(map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

lomakkeet.fields.t22405.prototype.om$core$IRender$ = true;

lomakkeet.fields.t22405.prototype.om$core$IRender$render$arity$1 = ((function (map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22408 = {"className": "form-control", "value": self__.value, "onChange": ((function (___$1,map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,cljs.core.constant$keyword$148,cljs.core.constant$keyword$146,self__.ks,cljs.core.constant$keyword$23,e.target.value], null));
});})(___$1,map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
};
var G__22409 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(self__.options))?(function (){var iter__4514__auto__ = ((function (G__22408,___$1,map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function iter__22410(s__22411){
return (new cljs.core.LazySeq(null,((function (G__22408,___$1,map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (){
var s__22411__$1 = s__22411;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__22411__$1);
if(temp__4126__auto__){
var s__22411__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22411__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__22411__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__22413 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__22412 = (0);
while(true){
if((i__22412 < size__4513__auto__)){
var vec__22418 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__22412);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22418,(1),null);
cljs.core.chunk_append(b__22413,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,k,cljs.core.constant$keyword$49,k], null),v], null));

var G__22429 = (i__22412 + (1));
i__22412 = G__22429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22413),iter__22410(cljs.core.chunk_rest(s__22411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22413),null);
}
} else {
var vec__22419 = cljs.core.first(s__22411__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22419,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,k,cljs.core.constant$keyword$49,k], null),v], null),iter__22410(cljs.core.rest(s__22411__$2)));
}
} else {
return null;
}
break;
}
});})(G__22408,___$1,map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
,null,null));
});})(G__22408,___$1,map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;
return iter__4514__auto__(self__.options);
})():null));
return React.DOM.select(G__22408,G__22409);
});})(map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

lomakkeet.fields.t22405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (_22407){
var self__ = this;
var _22407__$1 = this;
return self__.meta22406;
});})(map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

lomakkeet.fields.t22405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (_22407,meta22406__$1){
var self__ = this;
var _22407__$1 = this;
return (new lomakkeet.fields.t22405(self__.options,self__.map__22403,self__.owner,self__.G__22400,self__.map__22402,self__.G__22399,self__.G__22369,self__.map__22404,self__.map__22401,self__.ks,self__.output_schema22364,self__.value,self__.output_checker22367,self__.G__22370,self__.ch,self__.G__22368,self__.select_STAR_,self__.input_schema22365,self__.input_checker22366,self__.opts,self__.ufv__,self__.validate__10718__auto__,meta22406__$1));
});})(map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

lomakkeet.fields.t22405.cljs$lang$type = true;

lomakkeet.fields.t22405.cljs$lang$ctorStr = "lomakkeet.fields/t22405";

lomakkeet.fields.t22405.cljs$lang$ctorPrWriter = ((function (map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22405");
});})(map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

lomakkeet.fields.__GT_t22405 = ((function (map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425){
return (function __GT_t22405(options__$2,map__22403__$2,owner__$3,G__22400__$2,map__22402__$2,G__22399__$2,G__22369__$1,map__22404__$2,map__22401__$2,ks__$2,output_schema22364__$1,value__$2,output_checker22367__$1,G__22370__$1,ch__$2,G__22368__$1,select_STAR___$1,input_schema22365__$1,input_checker22366__$1,opts__$2,ufv____$1,validate__10718__auto____$1,meta22406){
return (new lomakkeet.fields.t22405(options__$2,map__22403__$2,owner__$3,G__22400__$2,map__22402__$2,G__22399__$2,G__22369__$1,map__22404__$2,map__22401__$2,ks__$2,output_schema22364__$1,value__$2,output_checker22367__$1,G__22370__$1,ch__$2,G__22368__$1,select_STAR___$1,input_schema22365__$1,input_checker22366__$1,opts__$2,ufv____$1,validate__10718__auto____$1,meta22406));
});})(map__22403,map__22403__$1,value__$1,owner__$2,map__22404,map__22404__$1,opts__$1,options__$1,ks__$1,ch__$1,G__22399,map__22401,map__22401__$1,value,owner,G__22400,map__22402,map__22402__$1,opts,options,ks,ch,validate__10718__auto__,ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

}

return (new lomakkeet.fields.t22405(options__$1,map__22403__$1,owner__$2,G__22400__$1,map__22402__$1,G__22399__$1,G__22369,map__22404__$1,map__22401__$1,ks__$1,output_schema22364_22422,value__$1,output_checker22367_22425,G__22370,ch__$1,G__22368,select_STAR_,input_schema22365_22423,input_checker22366_22424,opts__$1,ufv___22421,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22430 = (function (){var G__22420 = o__10721__auto__;
return (output_checker22367_22425.cljs$core$IFn$_invoke$arity$1 ? output_checker22367_22425.cljs$core$IFn$_invoke$arity$1(G__22420) : output_checker22367_22425.call(null,G__22420));
})();
if(cljs.core.truth_(temp__4126__auto___22430)){
var error__10720__auto___22431 = temp__4126__auto___22430;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"select*","select*",-189382533,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22431], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22431,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22364_22422,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22421,output_schema22364_22422,input_schema22365_22423,input_checker22366_22424,output_checker22367_22425))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.select_STAR_),schema.core.make_fn_schema(output_schema22364_22422,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22365_22423], null)));

lomakkeet.fields.__GT_select_STAR_ = (function() {
var __GT_select_STAR_ = null;
var __GT_select_STAR___1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.select_STAR_,cursor__20339__auto__);
});
var __GT_select_STAR___2 = (function (cursor__20339__auto__,m22363){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.select_STAR_,cursor__20339__auto__,m22363);
});
__GT_select_STAR_ = function(cursor__20339__auto__,m22363){
switch(arguments.length){
case 1:
return __GT_select_STAR___1.call(this,cursor__20339__auto__);
case 2:
return __GT_select_STAR___2.call(this,cursor__20339__auto__,m22363);
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
var select__delegate = function (form,label,ks,options,p__22432){
var vec__22434 = p__22432;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22434,(0),null);
return lomakkeet.fields.build(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form,opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$124,lomakkeet.fields.select_STAR_,cljs.core.constant$keyword$137,label,cljs.core.constant$keyword$146,ks,cljs.core.constant$keyword$161,options], null)], 0)));
};
var select = function (form,label,ks,options,var_args){
var p__22432 = null;
if (arguments.length > 4) {
var G__22435__i = 0, G__22435__a = new Array(arguments.length -  4);
while (G__22435__i < G__22435__a.length) {G__22435__a[G__22435__i] = arguments[G__22435__i + 4]; ++G__22435__i;}
  p__22432 = new cljs.core.IndexedSeq(G__22435__a,0);
} 
return select__delegate.call(this,form,label,ks,options,p__22432);};
select.cljs$lang$maxFixedArity = 4;
select.cljs$lang$applyTo = (function (arglist__22436){
var form = cljs.core.first(arglist__22436);
arglist__22436 = cljs.core.next(arglist__22436);
var label = cljs.core.first(arglist__22436);
arglist__22436 = cljs.core.next(arglist__22436);
var ks = cljs.core.first(arglist__22436);
arglist__22436 = cljs.core.next(arglist__22436);
var options = cljs.core.first(arglist__22436);
var p__22432 = cljs.core.rest(arglist__22436);
return select__delegate(form,label,ks,options,p__22432);
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
lomakkeet.fields.FormState = schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$23,schema.core.Any,cljs.core.constant$keyword$162,schema.core.Any,cljs.core.constant$keyword$154,schema.core.Any,cljs.core.constant$keyword$24,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null));
lomakkeet.fields.__GT_form_state = (function() {
var __GT_form_state = null;
var __GT_form_state__1 = (function (value){
return __GT_form_state.cljs$core$IFn$_invoke$arity$2(value,null);
});
var __GT_form_state__2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$23,value,cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$24,schema__$1], null);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_state,cljs.core.constant$keyword$23,cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.save_form = (function save_form(p__22439,value){
var map__22441 = p__22439;
var map__22441__$1 = ((cljs.core.seq_QMARK_(map__22441))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22441):map__22441);
var form_state = map__22441__$1;
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22441__$1,cljs.core.constant$keyword$24);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(form_state,cljs.core.constant$keyword$23,value,cljs.core.array_seq([cljs.core.constant$keyword$162,value,cljs.core.constant$keyword$154,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null)], 0));
});
/**
* @param {...*} var_args
*/
lomakkeet.fields.update_form = (function() { 
var update_form__delegate = function (p__22442,f,args){
var map__22444 = p__22442;
var map__22444__$1 = ((cljs.core.seq_QMARK_(map__22444))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22444):map__22444);
var form_state = map__22444__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22444__$1,cljs.core.constant$keyword$23);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.fields.save_form(form_state,new_value);
};
var update_form = function (p__22442,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22445__i = 0, G__22445__a = new Array(arguments.length -  2);
while (G__22445__i < G__22445__a.length) {G__22445__a[G__22445__i] = arguments[G__22445__i + 2]; ++G__22445__i;}
  args = new cljs.core.IndexedSeq(G__22445__a,0);
} 
return update_form__delegate.call(this,p__22442,f,args);};
update_form.cljs$lang$maxFixedArity = 2;
update_form.cljs$lang$applyTo = (function (arglist__22446){
var p__22442 = cljs.core.first(arglist__22446);
arglist__22446 = cljs.core.next(arglist__22446);
var f = cljs.core.first(arglist__22446);
var args = cljs.core.rest(arglist__22446);
return update_form__delegate(p__22442,f,args);
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
return (function (p1__22447_SHARP_){
return lomakkeet.fields.dissoc_in(p1__22447_SHARP_,ks);
});})(schema__$2))
);
} else {
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(value_cursor,ks,value);
}
}
});

var ufv___22788 = schema.utils.use_fn_validation;
var output_schema22449_22789 = schema.core.Any;
var input_schema22450_22790 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(lomakkeet.fields.FormState,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);
var input_checker22451_22791 = schema.core.checker(input_schema22450_22790);
var output_checker22452_22792 = schema.core.checker(output_schema22449_22789);
/**
* Inputs: [{:keys [value initial-value], :as form-state} :- FormState owner {:keys [actions render-fn form form-validation-fn after-change], :as opts}]
*/
lomakkeet.fields.form = ((function (ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function form(G__22453,G__22454,G__22455){
var validate__10718__auto__ = ufv___22788.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22793 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22453,G__22454,G__22455], null);
var temp__4126__auto___22794 = (function (){var G__22622 = args__10719__auto___22793;
return (input_checker22451_22791.cljs$core$IFn$_invoke$arity$1 ? input_checker22451_22791.cljs$core$IFn$_invoke$arity$1(G__22622) : input_checker22451_22791.call(null,G__22622));
})();
if(cljs.core.truth_(temp__4126__auto___22794)){
var error__10720__auto___22795 = temp__4126__auto___22794;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22795], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22795,cljs.core.constant$keyword$23,args__10719__auto___22793,cljs.core.constant$keyword$24,input_schema22450_22790,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var G__22625 = G__22453;
var map__22627 = G__22625;
var map__22627__$1 = ((cljs.core.seq_QMARK_(map__22627))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22627):map__22627);
var form_state = map__22627__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,cljs.core.constant$keyword$162);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22627__$1,cljs.core.constant$keyword$23);
var owner = G__22454;
var G__22626 = G__22455;
var map__22628 = G__22626;
var map__22628__$1 = ((cljs.core.seq_QMARK_(map__22628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22628):map__22628);
var opts = map__22628__$1;
var after_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$163);
var form_validation_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$164);
var form__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$143);
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$165);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22628__$1,cljs.core.constant$keyword$166);
var G__22625__$1 = G__22625;
var owner__$1 = owner;
var G__22626__$1 = G__22626;
while(true){
var map__22629 = G__22625__$1;
var map__22629__$1 = ((cljs.core.seq_QMARK_(map__22629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22629):map__22629);
var form_state__$1 = map__22629__$1;
var initial_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22629__$1,cljs.core.constant$keyword$162);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22629__$1,cljs.core.constant$keyword$23);
var owner__$2 = owner__$1;
var map__22630 = G__22626__$1;
var map__22630__$1 = ((cljs.core.seq_QMARK_(map__22630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22630):map__22630);
var opts__$1 = map__22630__$1;
var after_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,cljs.core.constant$keyword$163);
var form_validation_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,cljs.core.constant$keyword$164);
var form__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,cljs.core.constant$keyword$143);
var render_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,cljs.core.constant$keyword$165);
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,cljs.core.constant$keyword$166);
if(typeof lomakkeet.fields.t22631 !== 'undefined'){
} else {

/**
* @constructor
*/
lomakkeet.fields.t22631 = (function (form,G__22626,G__22453,after_change,G__22625,owner,input_schema22450,map__22627,form_validation_fn,form_state,output_schema22449,G__22454,G__22455,render_fn,map__22630,map__22629,value,map__22628,actions,input_checker22451,output_checker22452,opts,initial_value,ufv__,validate__10718__auto__,meta22632){
this.form = form;
this.G__22626 = G__22626;
this.G__22453 = G__22453;
this.after_change = after_change;
this.G__22625 = G__22625;
this.owner = owner;
this.input_schema22450 = input_schema22450;
this.map__22627 = map__22627;
this.form_validation_fn = form_validation_fn;
this.form_state = form_state;
this.output_schema22449 = output_schema22449;
this.G__22454 = G__22454;
this.G__22455 = G__22455;
this.render_fn = render_fn;
this.map__22630 = map__22630;
this.map__22629 = map__22629;
this.value = value;
this.map__22628 = map__22628;
this.actions = actions;
this.input_checker22451 = input_checker22451;
this.output_checker22452 = output_checker22452;
this.opts = opts;
this.initial_value = initial_value;
this.ufv__ = ufv__;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22632 = meta22632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lomakkeet.fields.t22631.prototype.om$core$IDisplayName$ = true;

lomakkeet.fields.t22631.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (_){
var self__ = this;
var ___$1 = this;
return "form";
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.t22631.prototype.om$core$IRenderState$ = true;

lomakkeet.fields.t22631.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (_,form__$1){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret((function (){var G__22634 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$153,self__.form_state,cljs.core.constant$keyword$23,(function (){var G__22635 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22635) : cljs.core.deref.call(null,G__22635));
})(),cljs.core.constant$keyword$162,(function (){var G__22636 = self__.initial_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22636) : cljs.core.deref.call(null,G__22636));
})(),cljs.core.constant$keyword$143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,cljs.core.constant$keyword$153,self__.form_state),cljs.core.constant$keyword$147,cljs.core.constant$keyword$147.cljs$core$IFn$_invoke$arity$1(form__$1)], null);
return (self__.render_fn.cljs$core$IFn$_invoke$arity$1 ? self__.render_fn.cljs$core$IFn$_invoke$arity$1(G__22634) : self__.render_fn.call(null,G__22634));
})());
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.t22631.prototype.om$core$IWillMount$ = true;

lomakkeet.fields.t22631.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (_){
var self__ = this;
var ___$1 = this;
var schema__$1 = (cljs.core.truth_(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__.form_state))?(function (){var G__22638 = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(self__.form_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22638) : cljs.core.deref.call(null,G__22638));
})():null);
var map__22637 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
var map__22637__$1 = ((cljs.core.seq_QMARK_(map__22637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22637):map__22637);
var coercion_matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22637__$1,cljs.core.constant$keyword$167);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22637__$1,cljs.core.constant$keyword$147);
var c__16134__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (state_22719){
var state_val_22720 = (state_22719[(1)]);
if((state_val_22720 === (7))){
var inst_22647 = (state_22719[(7)]);
var inst_22641 = (state_22719[(8)]);
var inst_22644 = (state_22719[(9)]);
var inst_22646 = (function (){var G__22721 = self__.form_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22721) : cljs.core.deref.call(null,G__22721));
})();
var inst_22647__$1 = (function (){var G__22722 = inst_22646;
var G__22723 = inst_22641;
return (inst_22644.cljs$core$IFn$_invoke$arity$2 ? inst_22644.cljs$core$IFn$_invoke$arity$2(G__22722,G__22723) : inst_22644.call(null,G__22722,G__22723));
})();
var inst_22648 = lomakkeet.fields.chan_QMARK_(inst_22647__$1);
var state_22719__$1 = (function (){var statearr_22724 = state_22719;
(statearr_22724[(7)] = inst_22647__$1);

return statearr_22724;
})();
if(inst_22648){
var statearr_22725_22796 = state_22719__$1;
(statearr_22725_22796[(1)] = (10));

} else {
var statearr_22726_22797 = state_22719__$1;
(statearr_22726_22797[(1)] = (11));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (20))){
var state_22719__$1 = state_22719;
var statearr_22727_22798 = state_22719__$1;
(statearr_22727_22798[(2)] = null);

(statearr_22727_22798[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (27))){
var inst_22706 = (state_22719[(10)]);
var inst_22712 = (state_22719[(2)]);
var inst_22713 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22706,inst_22712], 0));
var inst_22714 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.form_state,cljs.core.constant$keyword$154,inst_22713);
var state_22719__$1 = (function (){var statearr_22728 = state_22719;
(statearr_22728[(11)] = inst_22714);

return statearr_22728;
})();
var statearr_22729_22799 = state_22719__$1;
(statearr_22729_22799[(2)] = null);

(statearr_22729_22799[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (1))){
var state_22719__$1 = state_22719;
var statearr_22730_22800 = state_22719__$1;
(statearr_22730_22800[(2)] = null);

(statearr_22730_22800[(1)] = (2));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (24))){
var inst_22706 = (state_22719[(2)]);
var state_22719__$1 = (function (){var statearr_22731 = state_22719;
(statearr_22731[(10)] = inst_22706);

return statearr_22731;
})();
if(cljs.core.truth_(schema__$1)){
var statearr_22732_22801 = state_22719__$1;
(statearr_22732_22801[(1)] = (25));

} else {
var statearr_22733_22802 = state_22719__$1;
(statearr_22733_22802[(1)] = (26));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (4))){
var inst_22641 = (state_22719[(8)]);
var inst_22641__$1 = (state_22719[(2)]);
var inst_22642 = (function (){var G__22734 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22734) : cljs.core.deref.call(null,G__22734));
})();
var inst_22689 = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(inst_22641__$1);
var state_22719__$1 = (function (){var statearr_22735 = state_22719;
(statearr_22735[(12)] = inst_22642);

(statearr_22735[(8)] = inst_22641__$1);

return statearr_22735;
})();
var G__22736_22803 = (((inst_22689 instanceof cljs.core.Keyword))?inst_22689.fqn:null);
switch (G__22736_22803) {
case "change":
var statearr_22737_22805 = state_22719__$1;
(statearr_22737_22805[(1)] = (14));


break;
case "cancel":
var statearr_22738_22806 = state_22719__$1;
(statearr_22738_22806[(1)] = (13));


break;
case "action":
var statearr_22739_22807 = state_22719__$1;
(statearr_22739_22807[(1)] = (6));


break;
default:
var statearr_22740_22808 = state_22719__$1;
(statearr_22740_22808[(1)] = (18));



}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (15))){
var inst_22641 = (state_22719[(8)]);
var inst_22675 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22641);
var state_22719__$1 = state_22719;
var statearr_22741_22809 = state_22719__$1;
(statearr_22741_22809[(2)] = inst_22675);

(statearr_22741_22809[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (21))){
var inst_22700 = (state_22719[(2)]);
var state_22719__$1 = (function (){var statearr_22742 = state_22719;
(statearr_22742[(13)] = inst_22700);

return statearr_22742;
})();
if(cljs.core.truth_(self__.form_validation_fn)){
var statearr_22743_22810 = state_22719__$1;
(statearr_22743_22810[(1)] = (22));

} else {
var statearr_22744_22811 = state_22719__$1;
(statearr_22744_22811[(1)] = (23));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (13))){
var inst_22670 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,lomakkeet.fields.cancel_form);
var state_22719__$1 = state_22719;
var statearr_22745_22812 = state_22719__$1;
(statearr_22745_22812[(2)] = inst_22670);

(statearr_22745_22812[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (22))){
var inst_22702 = (function (){var G__22746 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22746) : cljs.core.deref.call(null,G__22746));
})();
var inst_22703 = (function (){var G__22747 = inst_22702;
return (self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1 ? self__.form_validation_fn.cljs$core$IFn$_invoke$arity$1(G__22747) : self__.form_validation_fn.call(null,G__22747));
})();
var state_22719__$1 = state_22719;
var statearr_22748_22813 = state_22719__$1;
(statearr_22748_22813[(2)] = inst_22703);

(statearr_22748_22813[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (6))){
var inst_22641 = (state_22719[(8)]);
var inst_22644 = (state_22719[(9)]);
var inst_22643 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_22641);
var inst_22644__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.actions,inst_22643);
var state_22719__$1 = (function (){var statearr_22749 = state_22719;
(statearr_22749[(9)] = inst_22644__$1);

return statearr_22749;
})();
if(cljs.core.truth_(inst_22644__$1)){
var statearr_22750_22814 = state_22719__$1;
(statearr_22750_22814[(1)] = (7));

} else {
var statearr_22751_22815 = state_22719__$1;
(statearr_22751_22815[(1)] = (8));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (25))){
var inst_22708 = (function (){var G__22752 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22752) : cljs.core.deref.call(null,G__22752));
})();
var inst_22709 = schema.core.check(schema__$1,inst_22708);
var state_22719__$1 = state_22719;
var statearr_22753_22816 = state_22719__$1;
(statearr_22753_22816[(2)] = inst_22709);

(statearr_22753_22816[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (17))){
var inst_22641 = (state_22719[(8)]);
var inst_22678 = (state_22719[(2)]);
var inst_22679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22678,cljs.core.constant$keyword$146);
var inst_22680 = lomakkeet.fields.get_in_schema(schema__$1,inst_22679);
var inst_22681 = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(inst_22641);
var inst_22682 = lomakkeet.fields.coerce(coercion_matcher,inst_22680,inst_22681);
var inst_22683 = lomakkeet.fields.change_value(self__.value,schema__$1,inst_22679,inst_22682);
var state_22719__$1 = state_22719;
var statearr_22754_22817 = state_22719__$1;
(statearr_22754_22817[(2)] = inst_22683);

(statearr_22754_22817[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (3))){
var inst_22717 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22719__$1,inst_22717);
} else {
if((state_val_22720 === (12))){
var inst_22662 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22755_22818 = state_22719__$1;
(statearr_22755_22818[(2)] = inst_22662);

(statearr_22755_22818[(1)] = (9));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (2))){
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22719__$1,(4),ch);
} else {
if((state_val_22720 === (23))){
var state_22719__$1 = state_22719;
var statearr_22756_22819 = state_22719__$1;
(statearr_22756_22819[(2)] = null);

(statearr_22756_22819[(1)] = (24));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (19))){
var inst_22642 = (state_22719[(12)]);
var inst_22693 = [cljs.core.constant$keyword$153,cljs.core.constant$keyword$23,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169];
var inst_22694 = (function (){var G__22757 = self__.value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22757) : cljs.core.deref.call(null,G__22757));
})();
var inst_22695 = [self__.form_state,inst_22694,self__.value,inst_22642];
var inst_22696 = cljs.core.PersistentHashMap.fromArrays(inst_22693,inst_22695);
var inst_22697 = (function (){var G__22758 = inst_22696;
return (self__.after_change.cljs$core$IFn$_invoke$arity$1 ? self__.after_change.cljs$core$IFn$_invoke$arity$1(G__22758) : self__.after_change.call(null,G__22758));
})();
var state_22719__$1 = state_22719;
var statearr_22759_22820 = state_22719__$1;
(statearr_22759_22820[(2)] = inst_22697);

(statearr_22759_22820[(1)] = (21));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (11))){
var inst_22647 = (state_22719[(7)]);
var inst_22660 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_22647);
var state_22719__$1 = state_22719;
var statearr_22760_22821 = state_22719__$1;
(statearr_22760_22821[(2)] = inst_22660);

(statearr_22760_22821[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (9))){
var inst_22668 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22761_22822 = state_22719__$1;
(statearr_22761_22822[(2)] = inst_22668);

(statearr_22761_22822[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (5))){
var inst_22691 = (state_22719[(2)]);
var state_22719__$1 = (function (){var statearr_22762 = state_22719;
(statearr_22762[(14)] = inst_22691);

return statearr_22762;
})();
if(cljs.core.truth_(self__.after_change)){
var statearr_22763_22823 = state_22719__$1;
(statearr_22763_22823[(1)] = (19));

} else {
var statearr_22764_22824 = state_22719__$1;
(statearr_22764_22824[(1)] = (20));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (14))){
var inst_22641 = (state_22719[(8)]);
var inst_22673 = cljs.core.seq_QMARK_(inst_22641);
var state_22719__$1 = state_22719;
if(inst_22673){
var statearr_22765_22825 = state_22719__$1;
(statearr_22765_22825[(1)] = (15));

} else {
var statearr_22766_22826 = state_22719__$1;
(statearr_22766_22826[(1)] = (16));

}

return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (26))){
var state_22719__$1 = state_22719;
var statearr_22767_22827 = state_22719__$1;
(statearr_22767_22827[(2)] = null);

(statearr_22767_22827[(1)] = (27));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (16))){
var inst_22641 = (state_22719[(8)]);
var state_22719__$1 = state_22719;
var statearr_22768_22828 = state_22719__$1;
(statearr_22768_22828[(2)] = inst_22641);

(statearr_22768_22828[(1)] = (17));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (10))){
var inst_22642 = (state_22719[(12)]);
var inst_22647 = (state_22719[(7)]);
var inst_22641 = (state_22719[(8)]);
var inst_22644 = (state_22719[(9)]);
var inst_22656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22657 = (function (){var c__16134__auto____$1 = inst_22656;
var next = inst_22647;
var action_fn = inst_22644;
var temp__4124__auto__ = inst_22644;
var prev_value = inst_22642;
var evt = inst_22641;
return ((function (c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22642,inst_22647,inst_22641,inst_22644,inst_22656,state_val_22720,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (){
var f__16135__auto__ = (function (){var switch__16054__auto__ = ((function (c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22642,inst_22647,inst_22641,inst_22644,inst_22656,state_val_22720,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (state_22654){
var state_val_22655 = (state_22654[(1)]);
if((state_val_22655 === (2))){
var inst_22651 = (state_22654[(2)]);
var inst_22652 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2(self__.form_state,inst_22651);
var state_22654__$1 = state_22654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22654__$1,inst_22652);
} else {
if((state_val_22655 === (1))){
var state_22654__$1 = state_22654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22654__$1,(2),next);
} else {
return null;
}
}
});})(c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22642,inst_22647,inst_22641,inst_22644,inst_22656,state_val_22720,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;
return ((function (switch__16054__auto__,c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22642,inst_22647,inst_22641,inst_22644,inst_22656,state_val_22720,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_22772 = [null,null,null,null,null,null,null];
(statearr_22772[(0)] = state_machine__16055__auto__);

(statearr_22772[(1)] = (1));

return statearr_22772;
});
var state_machine__16055__auto____1 = (function (state_22654){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_22654);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e22773){if((e22773 instanceof Object)){
var ex__16058__auto__ = e22773;
var statearr_22774_22829 = state_22654;
(statearr_22774_22829[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22654);

return cljs.core.constant$keyword$99;
} else {
throw e22773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__22830 = state_22654;
state_22654 = G__22830;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_22654){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_22654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22642,inst_22647,inst_22641,inst_22644,inst_22656,state_val_22720,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
})();
var state__16136__auto__ = (function (){var statearr_22775 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_22775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto____$1);

return statearr_22775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});
;})(c__16134__auto____$1,next,action_fn,temp__4124__auto__,prev_value,evt,inst_22642,inst_22647,inst_22641,inst_22644,inst_22656,state_val_22720,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
})();
var inst_22658 = cljs.core.async.impl.dispatch.run(inst_22657);
var state_22719__$1 = (function (){var statearr_22776 = state_22719;
(statearr_22776[(15)] = inst_22658);

return statearr_22776;
})();
var statearr_22777_22831 = state_22719__$1;
(statearr_22777_22831[(2)] = inst_22656);

(statearr_22777_22831[(1)] = (12));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (18))){
var inst_22641 = (state_22719[(8)]);
var inst_22685 = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(inst_22641);
var inst_22686 = [cljs.core.str("Unknown event-type: "),cljs.core.str(inst_22685)].join('');
var inst_22687 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22686], 0));
var state_22719__$1 = state_22719;
var statearr_22778_22832 = state_22719__$1;
(statearr_22778_22832[(2)] = inst_22687);

(statearr_22778_22832[(1)] = (5));


return cljs.core.constant$keyword$99;
} else {
if((state_val_22720 === (8))){
var inst_22641 = (state_22719[(8)]);
var inst_22664 = cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(inst_22641);
var inst_22665 = [cljs.core.str("WARNING: "),cljs.core.str(inst_22664),cljs.core.str(" is unknown")].join('');
var inst_22666 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22665], 0));
var state_22719__$1 = state_22719;
var statearr_22779_22833 = state_22719__$1;
(statearr_22779_22833[(2)] = inst_22666);

(statearr_22779_22833[(1)] = (9));


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
});})(c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;
return ((function (switch__16054__auto__,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function() {
var state_machine__16055__auto__ = null;
var state_machine__16055__auto____0 = (function (){
var statearr_22783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22783[(0)] = state_machine__16055__auto__);

(statearr_22783[(1)] = (1));

return statearr_22783;
});
var state_machine__16055__auto____1 = (function (state_22719){
while(true){
var ret_value__16056__auto__ = (function (){try{while(true){
var result__16057__auto__ = switch__16054__auto__(state_22719);
if(cljs.core.keyword_identical_QMARK_(result__16057__auto__,cljs.core.constant$keyword$99)){
continue;
} else {
return result__16057__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object)){
var ex__16058__auto__ = e22784;
var statearr_22785_22834 = state_22719;
(statearr_22785_22834[(5)] = ex__16058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22719);

return cljs.core.constant$keyword$99;
} else {
throw e22784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16056__auto__,cljs.core.constant$keyword$99)){
var G__22835 = state_22719;
state_22719 = G__22835;
continue;
} else {
return ret_value__16056__auto__;
}
break;
}
});
state_machine__16055__auto__ = function(state_22719){
switch(arguments.length){
case 0:
return state_machine__16055__auto____0.call(this);
case 1:
return state_machine__16055__auto____1.call(this,state_22719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16055__auto____0;
state_machine__16055__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16055__auto____1;
return state_machine__16055__auto__;
})()
;})(switch__16054__auto__,c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
})();
var state__16136__auto__ = (function (){var statearr_22786 = (function (){return (f__16135__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16135__auto__.cljs$core$IFn$_invoke$arity$0() : f__16135__auto__.call(null));
})();
(statearr_22786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16134__auto__);

return statearr_22786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16136__auto__);
});})(c__16134__auto__,schema__$1,map__22637,map__22637__$1,coercion_matcher,ch,___$1,map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
);

return c__16134__auto__;
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.t22631.prototype.om$core$IInitState$ = true;

lomakkeet.fields.t22631.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (_){
var self__ = this;
var ___$1 = this;
if((schema.core.check(lomakkeet.fields.FormState,self__.form_state) == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"FormState","FormState",834878066,null),new cljs.core.Symbol(null,"form-state","form-state",-256843510,null)))], 0)))].join('')));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$152,lomakkeet.fields.default_form_group,cljs.core.constant$keyword$167,schema.coerce.json_coercion_matcher], null),self__.form], 0));
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.t22631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (_22633){
var self__ = this;
var _22633__$1 = this;
return self__.meta22632;
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.t22631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (_22633,meta22632__$1){
var self__ = this;
var _22633__$1 = this;
return (new lomakkeet.fields.t22631(self__.form,self__.G__22626,self__.G__22453,self__.after_change,self__.G__22625,self__.owner,self__.input_schema22450,self__.map__22627,self__.form_validation_fn,self__.form_state,self__.output_schema22449,self__.G__22454,self__.G__22455,self__.render_fn,self__.map__22630,self__.map__22629,self__.value,self__.map__22628,self__.actions,self__.input_checker22451,self__.output_checker22452,self__.opts,self__.initial_value,self__.ufv__,self__.validate__10718__auto__,meta22632__$1));
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.t22631.cljs$lang$type = true;

lomakkeet.fields.t22631.cljs$lang$ctorStr = "lomakkeet.fields/t22631";

lomakkeet.fields.t22631.cljs$lang$ctorPrWriter = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"lomakkeet.fields/t22631");
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

lomakkeet.fields.__GT_t22631 = ((function (map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792){
return (function __GT_t22631(form__$3,G__22626__$2,G__22453__$1,after_change__$2,G__22625__$2,owner__$3,input_schema22450__$1,map__22627__$2,form_validation_fn__$2,form_state__$2,output_schema22449__$1,G__22454__$1,G__22455__$1,render_fn__$2,map__22630__$2,map__22629__$2,value__$2,map__22628__$2,actions__$2,input_checker22451__$1,output_checker22452__$1,opts__$2,initial_value__$2,ufv____$1,validate__10718__auto____$1,meta22632){
return (new lomakkeet.fields.t22631(form__$3,G__22626__$2,G__22453__$1,after_change__$2,G__22625__$2,owner__$3,input_schema22450__$1,map__22627__$2,form_validation_fn__$2,form_state__$2,output_schema22449__$1,G__22454__$1,G__22455__$1,render_fn__$2,map__22630__$2,map__22629__$2,value__$2,map__22628__$2,actions__$2,input_checker22451__$1,output_checker22452__$1,opts__$2,initial_value__$2,ufv____$1,validate__10718__auto____$1,meta22632));
});})(map__22629,map__22629__$1,form_state__$1,initial_value__$1,value__$1,owner__$2,map__22630,map__22630__$1,opts__$1,after_change__$1,form_validation_fn__$1,form__$2,render_fn__$1,actions__$1,G__22625,map__22627,map__22627__$1,form_state,initial_value,value,owner,G__22626,map__22628,map__22628__$1,opts,after_change,form_validation_fn,form__$1,render_fn,actions,validate__10718__auto__,ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

}

return (new lomakkeet.fields.t22631(form__$2,G__22626__$1,G__22453,after_change__$1,G__22625__$1,owner__$2,input_schema22450_22790,map__22627__$1,form_validation_fn__$1,form_state__$1,output_schema22449_22789,G__22454,G__22455,render_fn__$1,map__22630__$1,map__22629__$1,value__$1,map__22628__$1,actions__$1,input_checker22451_22791,output_checker22452_22792,opts__$1,initial_value__$1,ufv___22788,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22836 = (function (){var G__22787 = o__10721__auto__;
return (output_checker22452_22792.cljs$core$IFn$_invoke$arity$1 ? output_checker22452_22792.cljs$core$IFn$_invoke$arity$1(G__22787) : output_checker22452_22792.call(null,G__22787));
})();
if(cljs.core.truth_(temp__4126__auto___22836)){
var error__10720__auto___22837 = temp__4126__auto___22836;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22837], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22837,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema22449_22789,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22788,output_schema22449_22789,input_schema22450_22790,input_checker22451_22791,output_checker22452_22792))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(lomakkeet.fields.form),schema.core.make_fn_schema(output_schema22449_22789,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22450_22790], null)));

lomakkeet.fields.__GT_form = (function() {
var __GT_form = null;
var __GT_form__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(lomakkeet.fields.form,cursor__20339__auto__);
});
var __GT_form__2 = (function (cursor__20339__auto__,m22448){
return om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,cursor__20339__auto__,m22448);
});
__GT_form = function(cursor__20339__auto__,m22448){
switch(arguments.length){
case 1:
return __GT_form__1.call(this,cursor__20339__auto__);
case 2:
return __GT_form__2.call(this,cursor__20339__auto__,m22448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_form.cljs$core$IFn$_invoke$arity$1 = __GT_form__1;
__GT_form.cljs$core$IFn$_invoke$arity$2 = __GT_form__2;
return __GT_form;
})()
;
lomakkeet.fields.dirty_QMARK_ = (function dirty_QMARK_(form_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(form_state),cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(form_state));
});
lomakkeet.fields.errors_QMARK_ = (function errors_QMARK_(form_state){
return cljs.core.seq(cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(form_state));
});
