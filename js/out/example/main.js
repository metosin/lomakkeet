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
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$37,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$199,schema.core.Str,cljs.core.constant$keyword$200,example.main.LocalDate,cljs.core.constant$keyword$201,schema.core.maybe(example.main.LocalDate),cljs.core.constant$keyword$202,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,schema.core.Str,cljs.core.constant$keyword$12,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0)))], null)], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.ThingieDates = (function ThingieDates(p__22031){
var map__22033 = p__22031;
var map__22033__$1 = ((cljs.core.seq_QMARK_(map__22033))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22033):map__22033);
var thingie = map__22033__$1;
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.constant$keyword$201);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.constant$keyword$200);
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$200,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,schema.core.pred.cljs$core$IFn$_invoke$arity$2(((function (map__22033,map__22033__$1,thingie,end_date,start_date){
return (function (x){
var and__3616__auto__ = (function (){var or__3628__auto__ = x.equals(cljs_time.core.today());
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs_time.core.after_QMARK_(x,cljs_time.core.today());
}
})();
if(cljs.core.truth_(and__3616__auto__)){
var or__3628__auto__ = cljs.core.not(end_date);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = x.equals(end_date);
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return cljs_time.core.before_QMARK_(x,end_date);
}
}
} else {
return and__3616__auto__;
}
});})(map__22033,map__22033__$1,thingie,end_date,start_date))
,new cljs.core.Symbol(null,"invalid-date","invalid-date",-623929196,null))], 0)),cljs.core.constant$keyword$201,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.maybe(example.main.LocalDate),schema.core.pred.cljs$core$IFn$_invoke$arity$2(((function (map__22033,map__22033__$1,thingie,end_date,start_date){
return (function (x){
var or__3628__auto__ = cljs.core.not(x);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = x.equals(start_date);
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return cljs_time.core.after_QMARK_(x,start_date);
}
}
});})(map__22033,map__22033__$1,thingie,end_date,start_date))
,new cljs.core.Symbol(null,"invalid-date","invalid-date",-623929196,null))], 0)),schema.core.Keyword,schema.core.Any], true, false);
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$37,"Luke Skywalker",cljs.core.constant$keyword$199,"luke@rebel.gov",cljs.core.constant$keyword$200,cljs_time.core.today(),cljs.core.constant$keyword$201,null,cljs.core.constant$keyword$202,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$203,"",cljs.core.constant$keyword$12,null], null)], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$204,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__22034 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22034) : cljs.core.atom.call(null,G__22034));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22037 = schema.core.Any;
var input_schema22038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$201,schema.core.Any,cljs.core.constant$keyword$200,schema.core.Any], true, false),cljs.core.constant$keyword$145,schema.core.Any,cljs.core.constant$keyword$141,schema.core.Any,cljs.core.constant$keyword$151,schema.core.Any], true, false),new cljs.core.Symbol(null,"map22035","map22035",1305122186,null))], null);
var input_checker22039 = schema.core.checker(input_schema22038);
var output_checker22040 = schema.core.checker(output_schema22037);
return schema.core.schematize_fn(((function (ufv__,output_schema22037,input_schema22038,input_checker22039,output_checker22040){
return (function render_thingie_form(G__22041){
var validate__6096__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22041], null);
var temp__4126__auto___22079 = (function (){var G__22060 = args__6097__auto___22078;
return (input_checker22039.cljs$core$IFn$_invoke$arity$1 ? input_checker22039.cljs$core$IFn$_invoke$arity$1(G__22060) : input_checker22039.call(null,G__22060));
})();
if(cljs.core.truth_(temp__4126__auto___22079)){
var error__6098__auto___22080 = temp__4126__auto___22079;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22080], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22080,cljs.core.constant$keyword$23,args__6097__auto___22078,cljs.core.constant$keyword$24,input_schema22038,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var map22035 = G__22041;
while(true){
if(cljs.core.map_QMARK_(map22035)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map22035], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map22035,cljs.core.constant$keyword$151,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map22035,cljs.core.constant$keyword$141,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map22035,cljs.core.constant$keyword$145,cljs.core.PersistentVector.EMPTY);
var map22036 = plumbing.fnk.schema.safe_get(map22035,cljs.core.constant$keyword$23,cljs.core.PersistentVector.EMPTY);
var start_date = plumbing.fnk.schema.safe_get(map22036,cljs.core.constant$keyword$200,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23], null));
var end_date = plumbing.fnk.schema.safe_get(map22036,cljs.core.constant$keyword$201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23], null));
var G__22066 = {"className": "tasks"};
var G__22067 = (function (){var G__22070 = null;
var G__22071 = "New thingie";
var G__22072 = (function (){var attrs22061 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22061))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22061], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22061))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22061),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__22070,G__22071,G__22072);
})();
var G__22068 = (function (){var G__22073 = {"className": "column-content"};
var G__22074 = (function (){var attrs22062 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$37], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22062))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22062], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22062))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22062),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199], null)))], null))));
})();
var G__22075 = (function (){var attrs22063 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$149,(3),cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,cljs_time.core.today(),cljs.core.constant$keyword$167,end_date], null),cljs.core.constant$keyword$148,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22063))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22063], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22063))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$149,(3),cljs.core.constant$keyword$168,true,cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$166,start_date], null),cljs.core.constant$keyword$148,"Optional. After start date."], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22063),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$149,(3),cljs.core.constant$keyword$168,true,cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$166,start_date], null),cljs.core.constant$keyword$148,"Optional. After start date."], null)], 0)))], null))));
})();
var G__22076 = (function (){var attrs22064 = lomakkeet.fields.textarea(form,"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,cljs.core.constant$keyword$203], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22064))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22064], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22064))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22064),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$202,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,"Under 1MB"], null)], 0)))], null))));
})();
return React.DOM.form(G__22073,G__22074,G__22075,G__22076);
})();
var G__22069 = (function (){var attrs22065 = example.forms.save_btn(form_state,ch);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22065))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22065], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22065))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22065)], null))));
})();
return React.DOM.div(G__22066,G__22067,G__22068,G__22069);
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22081 = (function (){var G__22077 = o__6099__auto__;
return (output_checker22040.cljs$core$IFn$_invoke$arity$1 ? output_checker22040.cljs$core$IFn$_invoke$arity$1(G__22077) : output_checker22040.call(null,G__22077));
})();
if(cljs.core.truth_(temp__4126__auto___22081)){
var error__6098__auto___22082 = temp__4126__auto___22081;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22082], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22082,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22037,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv__,output_schema22037,input_schema22038,input_checker22039,output_checker22040))
,schema.core.make_fn_schema(output_schema22037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22038], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22100 = schema.utils.use_fn_validation;
var output_schema22084_22101 = schema.core.Any;
var input_schema22085_22102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22086_22103 = schema.core.checker(input_schema22085_22102);
var output_checker22087_22104 = schema.core.checker(output_schema22084_22101);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function thing_view(G__22088,G__22089){
var validate__6096__auto__ = ufv___22100.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22088,G__22089], null);
var temp__4126__auto___22106 = (function (){var G__22095 = args__6097__auto___22105;
return (input_checker22086_22103.cljs$core$IFn$_invoke$arity$1 ? input_checker22086_22103.cljs$core$IFn$_invoke$arity$1(G__22095) : input_checker22086_22103.call(null,G__22095));
})();
if(cljs.core.truth_(temp__4126__auto___22106)){
var error__6098__auto___22107 = temp__4126__auto___22106;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22107], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22107,cljs.core.constant$keyword$23,args__6097__auto___22105,cljs.core.constant$keyword$24,input_schema22085_22102,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var page_state = G__22088;
var owner = G__22089;
while(true){
if(typeof example.main.t22096 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22096 = (function (page_state,owner,input_schema22085,G__22089,validate__6096__auto__,G__22088,input_checker22086,output_checker22087,thing_view,ufv__,output_schema22084,meta22097){
this.page_state = page_state;
this.owner = owner;
this.input_schema22085 = input_schema22085;
this.G__22089 = G__22089;
this.validate__6096__auto__ = validate__6096__auto__;
this.G__22088 = G__22088;
this.input_checker22086 = input_checker22086;
this.output_checker22087 = output_checker22087;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.output_schema22084 = output_schema22084;
this.meta22097 = meta22097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22096.prototype.om$core$IDisplayName$ = true;

example.main.t22096.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

example.main.t22096.prototype.om$core$IRender$ = true;

example.main.t22096.prototype.om$core$IRender$render$arity$1 = ((function (validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$87,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$205,example.forms.humanize_error], null),cljs.core.constant$keyword$161,((function (___$1,validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
,cljs.core.constant$keyword$163,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$172,example.main.save_thing], null),cljs.core.constant$keyword$162,example.main.render_thingie_form], null)], null)));
});})(validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

example.main.t22096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function (_22098){
var self__ = this;
var _22098__$1 = this;
return self__.meta22097;
});})(validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

example.main.t22096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function (_22098,meta22097__$1){
var self__ = this;
var _22098__$1 = this;
return (new example.main.t22096(self__.page_state,self__.owner,self__.input_schema22085,self__.G__22089,self__.validate__6096__auto__,self__.G__22088,self__.input_checker22086,self__.output_checker22087,self__.thing_view,self__.ufv__,self__.output_schema22084,meta22097__$1));
});})(validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

example.main.t22096.cljs$lang$type = true;

example.main.t22096.cljs$lang$ctorStr = "example.main/t22096";

example.main.t22096.cljs$lang$ctorPrWriter = ((function (validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"example.main/t22096");
});})(validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

example.main.__GT_t22096 = ((function (validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104){
return (function __GT_t22096(page_state__$1,owner__$1,input_schema22085__$1,G__22089__$1,validate__6096__auto____$1,G__22088__$1,input_checker22086__$1,output_checker22087__$1,thing_view__$1,ufv____$1,output_schema22084__$1,meta22097){
return (new example.main.t22096(page_state__$1,owner__$1,input_schema22085__$1,G__22089__$1,validate__6096__auto____$1,G__22088__$1,input_checker22086__$1,output_checker22087__$1,thing_view__$1,ufv____$1,output_schema22084__$1,meta22097));
});})(validate__6096__auto__,ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

}

return (new example.main.t22096(page_state,owner,input_schema22085_22102,G__22089,validate__6096__auto__,G__22088,input_checker22086_22103,output_checker22087_22104,thing_view,ufv___22100,output_schema22084_22101,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22108 = (function (){var G__22099 = o__6099__auto__;
return (output_checker22087_22104.cljs$core$IFn$_invoke$arity$1 ? output_checker22087_22104.cljs$core$IFn$_invoke$arity$1(G__22099) : output_checker22087_22104.call(null,G__22099));
})();
if(cljs.core.truth_(temp__4126__auto___22108)){
var error__6098__auto___22109 = temp__4126__auto___22108;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22109], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22109,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22084_22101,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22100,output_schema22084_22101,input_schema22085_22102,input_checker22086_22103,output_checker22087_22104))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22084_22101,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22085_22102], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__7890__auto__);
});
var __GT_thing_view__2 = (function (cursor__7890__auto__,m22083){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__7890__auto__,m22083);
});
__GT_thing_view = function(cursor__7890__auto__,m22083){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__7890__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__7890__auto__,m22083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22129 = schema.utils.use_fn_validation;
var output_schema22111_22130 = schema.core.Any;
var input_schema22112_22131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22113_22132 = schema.core.checker(input_schema22112_22131);
var output_checker22114_22133 = schema.core.checker(output_schema22111_22130);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function app_view(G__22115,G__22116){
var validate__6096__auto__ = ufv___22129.get_cell();
if(cljs.core.truth_(validate__6096__auto__)){
var args__6097__auto___22134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22115,G__22116], null);
var temp__4126__auto___22135 = (function (){var G__22123 = args__6097__auto___22134;
return (input_checker22113_22132.cljs$core$IFn$_invoke$arity$1 ? input_checker22113_22132.cljs$core$IFn$_invoke$arity$1(G__22123) : input_checker22113_22132.call(null,G__22123));
})();
if(cljs.core.truth_(temp__4126__auto___22135)){
var error__6098__auto___22136 = temp__4126__auto___22135;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22136], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22136,cljs.core.constant$keyword$23,args__6097__auto___22134,cljs.core.constant$keyword$24,input_schema22112_22131,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__6099__auto__ = (function (){var app_state = G__22115;
var owner = G__22116;
while(true){
if(typeof example.main.t22124 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22124 = (function (app_view,owner,output_schema22111,validate__6096__auto__,input_schema22112,G__22116,G__22115,output_checker22114,app_state,input_checker22113,ufv__,meta22125){
this.app_view = app_view;
this.owner = owner;
this.output_schema22111 = output_schema22111;
this.validate__6096__auto__ = validate__6096__auto__;
this.input_schema22112 = input_schema22112;
this.G__22116 = G__22116;
this.G__22115 = G__22115;
this.output_checker22114 = output_checker22114;
this.app_state = app_state;
this.input_checker22113 = input_checker22113;
this.ufv__ = ufv__;
this.meta22125 = meta22125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22124.prototype.om$core$IDisplayName$ = true;

example.main.t22124.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

example.main.t22124.prototype.om$core$IRender$ = true;

example.main.t22124.prototype.om$core$IRender$render$arity$1 = ((function (validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs22127 = om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(self__.app_state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22127))?sablono.interpreter.attributes(attrs22127):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22127))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22127),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state))], null))));
});})(validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

example.main.t22124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function (_22126){
var self__ = this;
var _22126__$1 = this;
return self__.meta22125;
});})(validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

example.main.t22124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function (_22126,meta22125__$1){
var self__ = this;
var _22126__$1 = this;
return (new example.main.t22124(self__.app_view,self__.owner,self__.output_schema22111,self__.validate__6096__auto__,self__.input_schema22112,self__.G__22116,self__.G__22115,self__.output_checker22114,self__.app_state,self__.input_checker22113,self__.ufv__,meta22125__$1));
});})(validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

example.main.t22124.cljs$lang$type = true;

example.main.t22124.cljs$lang$ctorStr = "example.main/t22124";

example.main.t22124.cljs$lang$ctorPrWriter = ((function (validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"example.main/t22124");
});})(validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

example.main.__GT_t22124 = ((function (validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133){
return (function __GT_t22124(app_view__$1,owner__$1,output_schema22111__$1,validate__6096__auto____$1,input_schema22112__$1,G__22116__$1,G__22115__$1,output_checker22114__$1,app_state__$1,input_checker22113__$1,ufv____$1,meta22125){
return (new example.main.t22124(app_view__$1,owner__$1,output_schema22111__$1,validate__6096__auto____$1,input_schema22112__$1,G__22116__$1,G__22115__$1,output_checker22114__$1,app_state__$1,input_checker22113__$1,ufv____$1,meta22125));
});})(validate__6096__auto__,ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

}

return (new example.main.t22124(app_view,owner,output_schema22111_22130,validate__6096__auto__,input_schema22112_22131,G__22116,G__22115,output_checker22114_22133,app_state,input_checker22113_22132,ufv___22129,null));
break;
}
})();
if(cljs.core.truth_(validate__6096__auto__)){
var temp__4126__auto___22137 = (function (){var G__22128 = o__6099__auto__;
return (output_checker22114_22133.cljs$core$IFn$_invoke$arity$1 ? output_checker22114_22133.cljs$core$IFn$_invoke$arity$1(G__22128) : output_checker22114_22133.call(null,G__22128));
})();
if(cljs.core.truth_(temp__4126__auto___22137)){
var error__6098__auto___22138 = temp__4126__auto___22137;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__6098__auto___22138], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__6098__auto___22138,cljs.core.constant$keyword$23,o__6099__auto__,cljs.core.constant$keyword$24,output_schema22111_22130,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__6099__auto__;
});})(ufv___22129,output_schema22111_22130,input_schema22112_22131,input_checker22113_22132,output_checker22114_22133))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22111_22130,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22112_22131], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__7890__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__7890__auto__);
});
var __GT_app_view__2 = (function (cursor__7890__auto__,m22110){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__7890__auto__,m22110);
});
__GT_app_view = function(cursor__7890__auto__,m22110){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__7890__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__7890__auto__,m22110);
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
