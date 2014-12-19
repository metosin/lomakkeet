// Compiled by ClojureScript 0.0-2496
goog.provide('example.main');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('plumbing.core');
goog.require('lomakkeet.utils');
goog.require('schema.core');
goog.require('example.dev');
goog.require('example.forms');
goog.require('om_tools.core');
goog.require('lomakkeet.datepicker');
goog.require('lomakkeet.file');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('lomakkeet.fields');
example.main.LocalDate = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs_time.core.date_QMARK_);
/**
* 
*/
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$37,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$198,schema.core.Str,cljs.core.constant$keyword$181,schema.core.maybe(example.main.LocalDate),cljs.core.constant$keyword$199,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,schema.core.Str,cljs.core.constant$keyword$12,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0)))], null)], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$37,"Luke Skywalker",cljs.core.constant$keyword$198,"luke@rebel.gov",cljs.core.constant$keyword$181,null,cljs.core.constant$keyword$199,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,"",cljs.core.constant$keyword$12,null], null)], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$201,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__22023 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22023) : cljs.core.atom.call(null,G__22023));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22025 = schema.core.Any;
var input_schema22026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$145,schema.core.Any,cljs.core.constant$keyword$141,schema.core.Any,cljs.core.constant$keyword$150,schema.core.Any], true, false),new cljs.core.Symbol(null,"map22024","map22024",-839885173,null))], null);
var input_checker22027 = schema.core.checker(input_schema22026);
var output_checker22028 = schema.core.checker(output_schema22025);
return schema.core.schematize_fn(((function (ufv__,output_schema22025,input_schema22026,input_checker22027,output_checker22028){
return (function render_thingie_form(G__22029){
var validate__6096__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22029], null);
var temp__4126__auto___22067 = (function (){var G__22048 = args__6097__auto___22066;
return (input_checker22027.cljs$core$IFn$_invoke$arity$1 ? input_checker22027.cljs$core$IFn$_invoke$arity$1(G__22048) : input_checker22027.call(null,G__22048));
})();
if(cljs.core.truth_(temp__4126__auto___22067)){
var error__6098__auto___22068 = temp__4126__auto___22067;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22068], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22068,cljs.core.constant$keyword$23,args__6097__auto___22066,cljs.core.constant$keyword$24,input_schema22026,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var map22024 = G__22029;
while(true){
if(cljs.core.map_QMARK_(map22024)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map22024], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map22024,cljs.core.constant$keyword$150,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map22024,cljs.core.constant$keyword$141,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map22024,cljs.core.constant$keyword$145,cljs.core.PersistentVector.EMPTY);
var G__22054 = {"className": "tasks"};
var G__22055 = (function (){var G__22058 = null;
var G__22059 = "New thingie";
var G__22060 = (function (){var attrs22049 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22049))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22049], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22049))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22049),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__22058,G__22059,G__22060);
})();
var G__22056 = (function (){var G__22061 = {"className": "column-content"};
var G__22062 = (function (){var attrs22050 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$37], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22050))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22050], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22050))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22050),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198], null)))], null))));
})();
var G__22063 = (function (){var attrs22051 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$181], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,(3),cljs.core.constant$keyword$167,true], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22051))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22051], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22051))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22051)], null))));
})();
var G__22064 = (function (){var attrs22052 = lomakkeet.fields.textarea(form,"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,cljs.core.constant$keyword$200], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22052))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22052], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22052))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.file.file(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,cljs.core.constant$keyword$12], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22052),sablono.interpreter.interpret(lomakkeet.file.file(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,cljs.core.constant$keyword$12], null)))], null))));
})();
return React.DOM.form(G__22061,G__22062,G__22063,G__22064);
})();
var G__22057 = (function (){var attrs22053 = example.forms.save_btn(form_state,ch);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22053))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22053], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22053))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22053)], null))));
})();
return React.DOM.div(G__22054,G__22055,G__22056,G__22057);
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22069 = (function (){var G__22065 = o__6099__auto__;
return (output_checker22028.cljs$core$IFn$_invoke$arity$1 ? output_checker22028.cljs$core$IFn$_invoke$arity$1(G__22065) : output_checker22028.call(null,G__22065));
})();
if(cljs.core.truth_(temp__4126__auto___22069)){
var error__6098__auto___22070 = temp__4126__auto___22069;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22070], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22070,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22025,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv__,output_schema22025,input_schema22026,input_checker22027,output_checker22028))
,schema.core.make_fn_schema(output_schema22025,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22026], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22088 = schema.utils.use_fn_validation;
var output_schema22072_22089 = schema.core.Any;
var input_schema22073_22090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22074_22091 = schema.core.checker(input_schema22073_22090);
var output_checker22075_22092 = schema.core.checker(output_schema22072_22089);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function thing_view(G__22076,G__22077){
var validate__6096__auto__ = ufv___22088.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22076,G__22077], null);
var temp__4126__auto___22094 = (function (){var G__22083 = args__6097__auto___22093;
return (input_checker22074_22091.cljs$core$IFn$_invoke$arity$1 ? input_checker22074_22091.cljs$core$IFn$_invoke$arity$1(G__22083) : input_checker22074_22091.call(null,G__22083));
})();
if(cljs.core.truth_(temp__4126__auto___22094)){
var error__6098__auto___22095 = temp__4126__auto___22094;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22095], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22095,cljs.core.constant$keyword$23,args__6097__auto___22093,cljs.core.constant$keyword$24,input_schema22073_22090,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var page_state = G__22076;
var owner = G__22077;
while(true){
if(typeof example.main.t22084 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22084 = (function (G__22077,page_state,owner,output_checker22075,validate__6096__auto__,G__22076,input_schema22073,input_checker22074,output_schema22072,thing_view,ufv__,meta22085){
this.G__22077 = G__22077;
this.page_state = page_state;
this.owner = owner;
this.output_checker22075 = output_checker22075;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__22076 = G__22076;
this.input_schema22073 = input_schema22073;
this.input_checker22074 = input_checker22074;
this.output_schema22072 = output_schema22072;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.meta22085 = meta22085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22084.prototype.om$core$IDisplayName$ = true;

example.main.t22084.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

example.main.t22084.prototype.om$core$IRender$ = true;

example.main.t22084.prototype.om$core$IRender$render$arity$1 = ((function (validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$202,example.forms.humanize_error], null),cljs.core.constant$keyword$162,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,example.main.save_thing], null),cljs.core.constant$keyword$161,example.main.render_thingie_form], null)], null)));
});})(validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

example.main.t22084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function (_22086){
var self__ = this;
var _22086__$1 = this;
return self__.meta22085;
});})(validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

example.main.t22084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function (_22086,meta22085__$1){
var self__ = this;
var _22086__$1 = this;
return (new example.main.t22084(self__.G__22077,self__.page_state,self__.owner,self__.output_checker22075,self__.validate__6096__auto__,self__.G__22076,self__.input_schema22073,self__.input_checker22074,self__.output_schema22072,self__.thing_view,self__.ufv__,meta22085__$1));
});})(validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

example.main.t22084.cljs$lang$type = true;

example.main.t22084.cljs$lang$ctorStr = "example.main/t22084";

example.main.t22084.cljs$lang$ctorPrWriter = ((function (validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"example.main/t22084");
});})(validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

example.main.__GT_t22084 = ((function (validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092){
return (function __GT_t22084(G__22077__$1,page_state__$1,owner__$1,output_checker22075__$1,validate__6096__auto____$1,G__22076__$1,input_schema22073__$1,input_checker22074__$1,output_schema22072__$1,thing_view__$1,ufv____$1,meta22085){
return (new example.main.t22084(G__22077__$1,page_state__$1,owner__$1,output_checker22075__$1,validate__6096__auto____$1,G__22076__$1,input_schema22073__$1,input_checker22074__$1,output_schema22072__$1,thing_view__$1,ufv____$1,meta22085));
});})(validate__6096__auto__,ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

}

return (new example.main.t22084(G__22077,page_state,owner,output_checker22075_22092,validate__6096__auto__,G__22076,input_schema22073_22090,input_checker22074_22091,output_schema22072_22089,thing_view,ufv___22088,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22096 = (function (){var G__22087 = o__6099__auto__;
return (output_checker22075_22092.cljs$core$IFn$_invoke$arity$1 ? output_checker22075_22092.cljs$core$IFn$_invoke$arity$1(G__22087) : output_checker22075_22092.call(null,G__22087));
})();
if(cljs.core.truth_(temp__4126__auto___22096)){
var error__6098__auto___22097 = temp__4126__auto___22096;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22097], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22097,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22072_22089,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22088,output_schema22072_22089,input_schema22073_22090,input_checker22074_22091,output_checker22075_22092))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22072_22089,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22073_22090], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__7890__auto__);
});
var __GT_thing_view__2 = (function (cursor__7890__auto__,m22071){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__7890__auto__,m22071);
});
__GT_thing_view = function(cursor__7890__auto__,m22071){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__7890__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__7890__auto__,m22071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22117 = schema.utils.use_fn_validation;
var output_schema22099_22118 = schema.core.Any;
var input_schema22100_22119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22101_22120 = schema.core.checker(input_schema22100_22119);
var output_checker22102_22121 = schema.core.checker(output_schema22099_22118);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function app_view(G__22103,G__22104){
var validate__6096__auto__ = ufv___22117.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22103,G__22104], null);
var temp__4126__auto___22123 = (function (){var G__22111 = args__6097__auto___22122;
return (input_checker22101_22120.cljs$core$IFn$_invoke$arity$1 ? input_checker22101_22120.cljs$core$IFn$_invoke$arity$1(G__22111) : input_checker22101_22120.call(null,G__22111));
})();
if(cljs.core.truth_(temp__4126__auto___22123)){
var error__6098__auto___22124 = temp__4126__auto___22123;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22124], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22124,cljs.core.constant$keyword$23,args__6097__auto___22122,cljs.core.constant$keyword$24,input_schema22100_22119,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var app_state = G__22103;
var owner = G__22104;
while(true){
if(typeof example.main.t22112 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22112 = (function (app_view,input_schema22100,owner,output_schema22099,G__22103,validate__6096__auto__,input_checker22101,output_checker22102,app_state,G__22104,ufv__,meta22113){
this.app_view = app_view;
this.input_schema22100 = input_schema22100;
this.owner = owner;
this.output_schema22099 = output_schema22099;
this.G__22103 = G__22103;
this.validate__6096__auto__ = validate__6096__auto__;
this.input_checker22101 = input_checker22101;
this.output_checker22102 = output_checker22102;
this.app_state = app_state;
this.G__22104 = G__22104;
this.ufv__ = ufv__;
this.meta22113 = meta22113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22112.prototype.om$core$IDisplayName$ = true;

example.main.t22112.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

example.main.t22112.prototype.om$core$IRender$ = true;

example.main.t22112.prototype.om$core$IRender$render$arity$1 = ((function (validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs22115 = om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22115))?sablono.interpreter.attributes(attrs22115):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22115))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22115),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state))], null))));
});})(validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

example.main.t22112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function (_22114){
var self__ = this;
var _22114__$1 = this;
return self__.meta22113;
});})(validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

example.main.t22112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function (_22114,meta22113__$1){
var self__ = this;
var _22114__$1 = this;
return (new example.main.t22112(self__.app_view,self__.input_schema22100,self__.owner,self__.output_schema22099,self__.G__22103,self__.validate__6096__auto__,self__.input_checker22101,self__.output_checker22102,self__.app_state,self__.G__22104,self__.ufv__,meta22113__$1));
});})(validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

example.main.t22112.cljs$lang$type = true;

example.main.t22112.cljs$lang$ctorStr = "example.main/t22112";

example.main.t22112.cljs$lang$ctorPrWriter = ((function (validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"example.main/t22112");
});})(validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

example.main.__GT_t22112 = ((function (validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121){
return (function __GT_t22112(app_view__$1,input_schema22100__$1,owner__$1,output_schema22099__$1,G__22103__$1,validate__6096__auto____$1,input_checker22101__$1,output_checker22102__$1,app_state__$1,G__22104__$1,ufv____$1,meta22113){
return (new example.main.t22112(app_view__$1,input_schema22100__$1,owner__$1,output_schema22099__$1,G__22103__$1,validate__6096__auto____$1,input_checker22101__$1,output_checker22102__$1,app_state__$1,G__22104__$1,ufv____$1,meta22113));
});})(validate__6096__auto__,ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

}

return (new example.main.t22112(app_view,input_schema22100_22119,owner,output_schema22099_22118,G__22103,validate__6096__auto__,input_checker22101_22120,output_checker22102_22121,app_state,G__22104,ufv___22117,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22125 = (function (){var G__22116 = o__6099__auto__;
return (output_checker22102_22121.cljs$core$IFn$_invoke$arity$1 ? output_checker22102_22121.cljs$core$IFn$_invoke$arity$1(G__22116) : output_checker22102_22121.call(null,G__22116));
})();
if(cljs.core.truth_(temp__4126__auto___22125)){
var error__6098__auto___22126 = temp__4126__auto___22125;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22126], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22126,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22099_22118,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22117,output_schema22099_22118,input_schema22100_22119,input_checker22101_22120,output_checker22102_22121))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22099_22118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22100_22119], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__7890__auto__);
});
var __GT_app_view__2 = (function (cursor__7890__auto__,m22098){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__7890__auto__,m22098);
});
__GT_app_view = function(cursor__7890__auto__,m22098){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__7890__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__7890__auto__,m22098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
example.main.restart_BANG_ = (function restart_BANG_(){
return om.core.root(example.main.app_view,example.main.state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$93,document.getElementById("app")], null));
});
example.main.restart_BANG_();
