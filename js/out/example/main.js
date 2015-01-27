// Compiled by ClojureScript 0.0-2727 {}
goog.provide('example.main');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('example.autocomplete');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('example.dev');
goog.require('example.forms');
goog.require('om_tools.core');
goog.require('lomakkeet.datepicker');
goog.require('lomakkeet.file');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('potpuri.core');
goog.require('om.core');
goog.require('lomakkeet.fields');
example.main.LocalDate = goog.date.Date;
example.main.DateRange = (function DateRange(start,end){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (x){
var and__3746__auto__ = (function (){var or__3758__auto__ = cljs.core.not(start);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = x.equals(start);
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return cljs_time.core.after_QMARK_(x,start);
}
}
})();
if(cljs.core.truth_(and__3746__auto__)){
var or__3758__auto__ = cljs.core.not(end);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = x.equals(end);
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return cljs_time.core.before_QMARK_(x,end);
}
}
} else {
return and__3746__auto__;
}
}),new cljs.core.Symbol(null,"invalid-date","invalid-date",-623929196,null));
});
/**
* 
*/
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$37,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$230,schema.core.Str,cljs.core.constant$keyword$231,example.main.LocalDate,cljs.core.constant$keyword$232,schema.core.maybe(example.main.LocalDate),cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,schema.core.Str,cljs.core.constant$keyword$12,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0)))], null),cljs.core.constant$keyword$234,schema.core.Str], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.ThingieDates = (function ThingieDates(p__21877){
var map__21879 = p__21877;
var map__21879__$1 = ((cljs.core.seq_QMARK_(map__21879))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21879):map__21879);
var thingie = map__21879__$1;
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21879__$1,cljs.core.constant$keyword$232);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21879__$1,cljs.core.constant$keyword$231);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.main.Thingie,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),((function (map__21879,map__21879__$1,thingie,end_date,start_date){
return (function (p1__21876_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__21876_SHARP_,example.main.DateRange(cljs_time.core.today(),end_date)], 0));
});})(map__21879,map__21879__$1,thingie,end_date,start_date))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,example.main.DateRange(start_date,null)], 0))));
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$37,"Luke Skywalker",cljs.core.constant$keyword$230,"luke@rebel.gov",cljs.core.constant$keyword$231,cljs_time.core.today(),cljs.core.constant$keyword$232,null,cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"",cljs.core.constant$keyword$12,null], null)], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__21880 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21880) : cljs.core.atom.call(null,G__21880));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema21883 = schema.core.Any;
var input_schema21884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$232,schema.core.Any,cljs.core.constant$keyword$231,schema.core.Any], true, false),cljs.core.constant$keyword$147,schema.core.Any,cljs.core.constant$keyword$143,schema.core.Any,cljs.core.constant$keyword$153,schema.core.Any], true, false),new cljs.core.Symbol(null,"map21881","map21881",-1575618129,null))], null);
var input_checker21885 = schema.core.checker(input_schema21884);
var output_checker21886 = schema.core.checker(output_schema21883);
return schema.core.schematize_fn(((function (ufv__,output_schema21883,input_schema21884,input_checker21885,output_checker21886){
return (function render_thingie_form(G__21887){
var validate__10718__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___21940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21887], null);
var temp__4126__auto___21941 = (function (){var G__21914 = args__10719__auto___21940;
return (input_checker21885.cljs$core$IFn$_invoke$arity$1 ? input_checker21885.cljs$core$IFn$_invoke$arity$1(G__21914) : input_checker21885.call(null,G__21914));
})();
if(cljs.core.truth_(temp__4126__auto___21941)){
var error__10720__auto___21942 = temp__4126__auto___21941;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___21942], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___21942,cljs.core.constant$keyword$23,args__10719__auto___21940,cljs.core.constant$keyword$24,input_schema21884,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var map21881 = G__21887;
while(true){
if(cljs.core.map_QMARK_(map21881)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map21881], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map21881,cljs.core.constant$keyword$153,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map21881,cljs.core.constant$keyword$143,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map21881,cljs.core.constant$keyword$147,cljs.core.PersistentVector.EMPTY);
var map21882 = plumbing.fnk.schema.safe_get(map21881,cljs.core.constant$keyword$23,cljs.core.PersistentVector.EMPTY);
var start_date = plumbing.fnk.schema.safe_get(map21882,cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23], null));
var end_date = plumbing.fnk.schema.safe_get(map21882,cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$23], null));
var G__21921 = {"className": "tasks"};
var G__21922 = (function (){var G__21924 = null;
var G__21925 = "New thingie";
var G__21926 = (function (){var attrs21915 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21915))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs21915], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21915))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21915),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__21924,G__21925,G__21926);
})();
var G__21923 = (function (){var G__21927 = {"className": "column-content"};
var G__21928 = (function (){var attrs21916 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$37], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21916))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21916], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21916))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21916),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null)))], null))));
})();
var G__21929 = (function (){var attrs21917 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$170,cljs_time.core.today(),cljs.core.constant$keyword$171,end_date], null),cljs.core.constant$keyword$150,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21917))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21917], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21917))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$178,true,cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$170,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21917),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$178,true,cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$170,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null))));
})();
var G__21930 = (function (){var attrs21918 = lomakkeet.fields.textarea(form,"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$235], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21918))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21918], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21918))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21918),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null))));
})();
var G__21931 = (function (){var G__21932 = {"className": "row"};
var G__21933 = (function (){var G__21935 = {"className": "col-sm-12"};
var G__21936 = (function (){var G__21937 = null;
var G__21938 = "Autocomplete";
return React.DOM.h2(G__21937,G__21938);
})();
return React.DOM.div(G__21935,G__21936);
})();
var G__21934 = sablono.interpreter.interpret(example.autocomplete.country_select(form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234], null)));
return React.DOM.div(G__21932,G__21933,G__21934);
})();
return React.DOM.form(G__21927,G__21928,G__21929,G__21930,G__21931);
})();
return React.DOM.div(G__21921,G__21922,G__21923);
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___21943 = (function (){var G__21939 = o__10721__auto__;
return (output_checker21886.cljs$core$IFn$_invoke$arity$1 ? output_checker21886.cljs$core$IFn$_invoke$arity$1(G__21939) : output_checker21886.call(null,G__21939));
})();
if(cljs.core.truth_(temp__4126__auto___21943)){
var error__10720__auto___21944 = temp__4126__auto___21943;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___21944], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___21944,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema21883,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv__,output_schema21883,input_schema21884,input_checker21885,output_checker21886))
,schema.core.make_fn_schema(output_schema21883,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21884], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___21962 = schema.utils.use_fn_validation;
var output_schema21946_21963 = schema.core.Any;
var input_schema21947_21964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21948_21965 = schema.core.checker(input_schema21947_21964);
var output_checker21949_21966 = schema.core.checker(output_schema21946_21963);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function thing_view(G__21950,G__21951){
var validate__10718__auto__ = ufv___21962.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___21967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21950,G__21951], null);
var temp__4126__auto___21968 = (function (){var G__21957 = args__10719__auto___21967;
return (input_checker21948_21965.cljs$core$IFn$_invoke$arity$1 ? input_checker21948_21965.cljs$core$IFn$_invoke$arity$1(G__21957) : input_checker21948_21965.call(null,G__21957));
})();
if(cljs.core.truth_(temp__4126__auto___21968)){
var error__10720__auto___21969 = temp__4126__auto___21968;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___21969], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___21969,cljs.core.constant$keyword$23,args__10719__auto___21967,cljs.core.constant$keyword$24,input_schema21947_21964,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var page_state = G__21950;
var owner = G__21951;
while(true){
if(typeof example.main.t21958 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t21958 = (function (G__21951,page_state,owner,G__21950,input_checker21948,input_schema21947,output_checker21949,thing_view,ufv__,validate__10718__auto__,output_schema21946,meta21959){
this.G__21951 = G__21951;
this.page_state = page_state;
this.owner = owner;
this.G__21950 = G__21950;
this.input_checker21948 = input_checker21948;
this.input_schema21947 = input_schema21947;
this.output_checker21949 = output_checker21949;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.validate__10718__auto__ = validate__10718__auto__;
this.output_schema21946 = output_schema21946;
this.meta21959 = meta21959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t21958.prototype.om$core$IDisplayName$ = true;

example.main.t21958.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

example.main.t21958.prototype.om$core$IRender$ = true;

example.main.t21958.prototype.om$core$IRender$render$arity$1 = ((function (validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,example.forms.humanize_error], null),cljs.core.constant$keyword$164,((function (___$1,validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
,cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$206,example.main.save_thing], null),cljs.core.constant$keyword$165,example.main.render_thingie_form], null)], null)));
});})(validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

example.main.t21958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function (_21960){
var self__ = this;
var _21960__$1 = this;
return self__.meta21959;
});})(validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

example.main.t21958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function (_21960,meta21959__$1){
var self__ = this;
var _21960__$1 = this;
return (new example.main.t21958(self__.G__21951,self__.page_state,self__.owner,self__.G__21950,self__.input_checker21948,self__.input_schema21947,self__.output_checker21949,self__.thing_view,self__.ufv__,self__.validate__10718__auto__,self__.output_schema21946,meta21959__$1));
});})(validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

example.main.t21958.cljs$lang$type = true;

example.main.t21958.cljs$lang$ctorStr = "example.main/t21958";

example.main.t21958.cljs$lang$ctorPrWriter = ((function (validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"example.main/t21958");
});})(validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

example.main.__GT_t21958 = ((function (validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966){
return (function __GT_t21958(G__21951__$1,page_state__$1,owner__$1,G__21950__$1,input_checker21948__$1,input_schema21947__$1,output_checker21949__$1,thing_view__$1,ufv____$1,validate__10718__auto____$1,output_schema21946__$1,meta21959){
return (new example.main.t21958(G__21951__$1,page_state__$1,owner__$1,G__21950__$1,input_checker21948__$1,input_schema21947__$1,output_checker21949__$1,thing_view__$1,ufv____$1,validate__10718__auto____$1,output_schema21946__$1,meta21959));
});})(validate__10718__auto__,ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

}

return (new example.main.t21958(G__21951,page_state,owner,G__21950,input_checker21948_21965,input_schema21947_21964,output_checker21949_21966,thing_view,ufv___21962,validate__10718__auto__,output_schema21946_21963,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___21970 = (function (){var G__21961 = o__10721__auto__;
return (output_checker21949_21966.cljs$core$IFn$_invoke$arity$1 ? output_checker21949_21966.cljs$core$IFn$_invoke$arity$1(G__21961) : output_checker21949_21966.call(null,G__21961));
})();
if(cljs.core.truth_(temp__4126__auto___21970)){
var error__10720__auto___21971 = temp__4126__auto___21970;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___21971], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___21971,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema21946_21963,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___21962,output_schema21946_21963,input_schema21947_21964,input_checker21948_21965,output_checker21949_21966))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema21946_21963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21947_21964], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__20339__auto__);
});
var __GT_thing_view__2 = (function (cursor__20339__auto__,m21945){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__20339__auto__,m21945);
});
__GT_thing_view = function(cursor__20339__auto__,m21945){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__20339__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__20339__auto__,m21945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22021 = schema.utils.use_fn_validation;
var output_schema21973_22022 = schema.core.Any;
var input_schema21974_22023 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21975_22024 = schema.core.checker(input_schema21974_22023);
var output_checker21976_22025 = schema.core.checker(output_schema21973_22022);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function app_view(G__21977,G__21978){
var validate__10718__auto__ = ufv___22021.get_cell();
if(cljs.core.truth_(validate__10718__auto__)){
var args__10719__auto___22026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21977,G__21978], null);
var temp__4126__auto___22027 = (function (){var G__22000 = args__10719__auto___22026;
return (input_checker21975_22024.cljs$core$IFn$_invoke$arity$1 ? input_checker21975_22024.cljs$core$IFn$_invoke$arity$1(G__22000) : input_checker21975_22024.call(null,G__22000));
})();
if(cljs.core.truth_(temp__4126__auto___22027)){
var error__10720__auto___22028 = temp__4126__auto___22027;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22028], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22028,cljs.core.constant$keyword$23,args__10719__auto___22026,cljs.core.constant$keyword$24,input_schema21974_22023,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

var o__10721__auto__ = (function (){var app_state = G__21977;
var owner = G__21978;
while(true){
if(typeof example.main.t22001 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22001 = (function (G__21977,app_view,owner,input_schema21974,output_checker21976,output_schema21973,app_state,input_checker21975,G__21978,ufv__,validate__10718__auto__,meta22002){
this.G__21977 = G__21977;
this.app_view = app_view;
this.owner = owner;
this.input_schema21974 = input_schema21974;
this.output_checker21976 = output_checker21976;
this.output_schema21973 = output_schema21973;
this.app_state = app_state;
this.input_checker21975 = input_checker21975;
this.G__21978 = G__21978;
this.ufv__ = ufv__;
this.validate__10718__auto__ = validate__10718__auto__;
this.meta22002 = meta22002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22001.prototype.om$core$IDisplayName$ = true;

example.main.t22001.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

example.main.t22001.prototype.om$core$IRender$ = true;

example.main.t22001.prototype.om$core$IRender$render$arity$1 = ((function (validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22008 = null;
var G__22009 = (function (){var G__22013 = null;
var G__22014 = "Example form ";
var G__22015 = (function (){var G__22016 = {"href": "https://github.com/metosin/lomakkeet/"};
var G__22017 = "(Code)";
return React.DOM.a(G__22016,G__22017);
})();
return React.DOM.h1(G__22013,G__22014,G__22015);
})();
var G__22010 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
var G__22011 = (function (){var G__22018 = null;
var G__22019 = "Om state tree";
return React.DOM.h1(G__22018,G__22019);
})();
var G__22012 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state));
return React.DOM.div(G__22008,G__22009,G__22010,G__22011,G__22012);
});})(validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

example.main.t22001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function (_22003){
var self__ = this;
var _22003__$1 = this;
return self__.meta22002;
});})(validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

example.main.t22001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function (_22003,meta22002__$1){
var self__ = this;
var _22003__$1 = this;
return (new example.main.t22001(self__.G__21977,self__.app_view,self__.owner,self__.input_schema21974,self__.output_checker21976,self__.output_schema21973,self__.app_state,self__.input_checker21975,self__.G__21978,self__.ufv__,self__.validate__10718__auto__,meta22002__$1));
});})(validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

example.main.t22001.cljs$lang$type = true;

example.main.t22001.cljs$lang$ctorStr = "example.main/t22001";

example.main.t22001.cljs$lang$ctorPrWriter = ((function (validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"example.main/t22001");
});})(validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

example.main.__GT_t22001 = ((function (validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025){
return (function __GT_t22001(G__21977__$1,app_view__$1,owner__$1,input_schema21974__$1,output_checker21976__$1,output_schema21973__$1,app_state__$1,input_checker21975__$1,G__21978__$1,ufv____$1,validate__10718__auto____$1,meta22002){
return (new example.main.t22001(G__21977__$1,app_view__$1,owner__$1,input_schema21974__$1,output_checker21976__$1,output_schema21973__$1,app_state__$1,input_checker21975__$1,G__21978__$1,ufv____$1,validate__10718__auto____$1,meta22002));
});})(validate__10718__auto__,ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

}

return (new example.main.t22001(G__21977,app_view,owner,input_schema21974_22023,output_checker21976_22025,output_schema21973_22022,app_state,input_checker21975_22024,G__21978,ufv___22021,validate__10718__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__10718__auto__)){
var temp__4126__auto___22029 = (function (){var G__22020 = o__10721__auto__;
return (output_checker21976_22025.cljs$core$IFn$_invoke$arity$1 ? output_checker21976_22025.cljs$core$IFn$_invoke$arity$1(G__22020) : output_checker21976_22025.call(null,G__22020));
})();
if(cljs.core.truth_(temp__4126__auto___22029)){
var error__10720__auto___22030 = temp__4126__auto___22029;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__10720__auto___22030], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$22,error__10720__auto___22030,cljs.core.constant$keyword$23,o__10721__auto__,cljs.core.constant$keyword$24,output_schema21973_22022,cljs.core.constant$keyword$25,cljs.core.constant$keyword$26], null));
} else {
}
} else {
}

return o__10721__auto__;
});})(ufv___22021,output_schema21973_22022,input_schema21974_22023,input_checker21975_22024,output_checker21976_22025))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema21973_22022,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21974_22023], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20339__auto__);
});
var __GT_app_view__2 = (function (cursor__20339__auto__,m21972){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20339__auto__,m21972);
});
__GT_app_view = function(cursor__20339__auto__,m21972){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20339__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20339__auto__,m21972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
example.main.restart_BANG_ = (function restart_BANG_(){
return om.core.root(example.main.app_view,example.main.state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$95,document.getElementById("app")], null));
});
example.main.restart_BANG_();
