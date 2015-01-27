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
var and__4239__auto__ = (function (){var or__4251__auto__ = cljs.core.not(start);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = x.equals(start);
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return cljs_time.core.after_QMARK_(x,start);
}
}
})();
if(cljs.core.truth_(and__4239__auto__)){
var or__4251__auto__ = cljs.core.not(end);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = x.equals(end);
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return cljs_time.core.before_QMARK_(x,end);
}
}
} else {
return and__4239__auto__;
}
}),new cljs.core.Symbol(null,"invalid-date","invalid-date",-623929196,null));
});
/**
* 
*/
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$80,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$230,schema.core.Str,cljs.core.constant$keyword$231,example.main.LocalDate,cljs.core.constant$keyword$232,schema.core.maybe(example.main.LocalDate),cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,schema.core.Str,cljs.core.constant$keyword$12,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0)))], null),cljs.core.constant$keyword$234,schema.core.Str], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.ThingieDates = (function ThingieDates(p__22393){
var map__22395 = p__22393;
var map__22395__$1 = ((cljs.core.seq_QMARK_(map__22395))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22395):map__22395);
var thingie = map__22395__$1;
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22395__$1,cljs.core.constant$keyword$232);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22395__$1,cljs.core.constant$keyword$231);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.main.Thingie,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),((function (map__22395,map__22395__$1,thingie,end_date,start_date){
return (function (p1__22392_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22392_SHARP_,example.main.DateRange(cljs_time.core.today(),end_date)], 0));
});})(map__22395,map__22395__$1,thingie,end_date,start_date))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,example.main.DateRange(start_date,null)], 0))));
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$80,"Luke Skywalker",cljs.core.constant$keyword$230,"luke@rebel.gov",cljs.core.constant$keyword$231,cljs_time.core.today(),cljs.core.constant$keyword$232,null,cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"",cljs.core.constant$keyword$12,null], null)], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__22396 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22396) : cljs.core.atom.call(null,G__22396));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22399 = schema.core.Any;
var input_schema22400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$232,schema.core.Any,cljs.core.constant$keyword$231,schema.core.Any], true, false),cljs.core.constant$keyword$147,schema.core.Any,cljs.core.constant$keyword$143,schema.core.Any,cljs.core.constant$keyword$153,schema.core.Any], true, false),new cljs.core.Symbol(null,"map22397","map22397",-979491528,null))], null);
var input_checker22401 = schema.core.checker(input_schema22400);
var output_checker22402 = schema.core.checker(output_schema22399);
return schema.core.schematize_fn(((function (ufv__,output_schema22399,input_schema22400,input_checker22401,output_checker22402){
return (function render_thingie_form(G__22403){
var validate__12581__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22403], null);
var temp__4126__auto___22457 = (function (){var G__22430 = args__12582__auto___22456;
return (input_checker22401.cljs$core$IFn$_invoke$arity$1 ? input_checker22401.cljs$core$IFn$_invoke$arity$1(G__22430) : input_checker22401.call(null,G__22430));
})();
if(cljs.core.truth_(temp__4126__auto___22457)){
var error__12583__auto___22458 = temp__4126__auto___22457;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22458], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22458,cljs.core.constant$keyword$66,args__12582__auto___22456,cljs.core.constant$keyword$67,input_schema22400,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var map22397 = G__22403;
while(true){
if(cljs.core.map_QMARK_(map22397)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map22397], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map22397,cljs.core.constant$keyword$153,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map22397,cljs.core.constant$keyword$143,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map22397,cljs.core.constant$keyword$147,cljs.core.PersistentVector.EMPTY);
var map22398 = plumbing.fnk.schema.safe_get(map22397,cljs.core.constant$keyword$66,cljs.core.PersistentVector.EMPTY);
var start_date = plumbing.fnk.schema.safe_get(map22398,cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var end_date = plumbing.fnk.schema.safe_get(map22398,cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var G__22437 = {"className": "tasks"};
var G__22438 = (function (){var G__22440 = null;
var G__22441 = "New thingie";
var G__22442 = (function (){var attrs22431 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22431))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22431], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22431))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22431),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__22440,G__22441,G__22442);
})();
var G__22439 = (function (){var G__22443 = {"className": "column-content"};
var G__22444 = (function (){var attrs22432 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22432))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22432], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22432))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22432),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null)))], null))));
})();
var G__22445 = (function (){var attrs22433 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$195,cljs_time.core.today(),cljs.core.constant$keyword$196,end_date], null),cljs.core.constant$keyword$150,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22433))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22433], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22433))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$203,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$195,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22433),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$203,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$195,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null))));
})();
var G__22446 = (function (){var attrs22434 = lomakkeet.fields.textarea(form,"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$235], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22434))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22434], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22434))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22434),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null))));
})();
var G__22447 = (function (){var G__22448 = {"className": "row"};
var G__22449 = (function (){var G__22451 = {"className": "col-sm-12"};
var G__22452 = (function (){var G__22453 = null;
var G__22454 = "Autocomplete";
return React.DOM.h2(G__22453,G__22454);
})();
return React.DOM.div(G__22451,G__22452);
})();
var G__22450 = sablono.interpreter.interpret(example.autocomplete.country_select(form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234], null)));
return React.DOM.div(G__22448,G__22449,G__22450);
})();
return React.DOM.form(G__22443,G__22444,G__22445,G__22446,G__22447);
})();
return React.DOM.div(G__22437,G__22438,G__22439);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22459 = (function (){var G__22455 = o__12584__auto__;
return (output_checker22402.cljs$core$IFn$_invoke$arity$1 ? output_checker22402.cljs$core$IFn$_invoke$arity$1(G__22455) : output_checker22402.call(null,G__22455));
})();
if(cljs.core.truth_(temp__4126__auto___22459)){
var error__12583__auto___22460 = temp__4126__auto___22459;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22460], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22460,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22399,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv__,output_schema22399,input_schema22400,input_checker22401,output_checker22402))
,schema.core.make_fn_schema(output_schema22399,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22400], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22478 = schema.utils.use_fn_validation;
var output_schema22462_22479 = schema.core.Any;
var input_schema22463_22480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22464_22481 = schema.core.checker(input_schema22463_22480);
var output_checker22465_22482 = schema.core.checker(output_schema22462_22479);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function thing_view(G__22466,G__22467){
var validate__12581__auto__ = ufv___22478.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22466,G__22467], null);
var temp__4126__auto___22484 = (function (){var G__22473 = args__12582__auto___22483;
return (input_checker22464_22481.cljs$core$IFn$_invoke$arity$1 ? input_checker22464_22481.cljs$core$IFn$_invoke$arity$1(G__22473) : input_checker22464_22481.call(null,G__22473));
})();
if(cljs.core.truth_(temp__4126__auto___22484)){
var error__12583__auto___22485 = temp__4126__auto___22484;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22485], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22485,cljs.core.constant$keyword$66,args__12582__auto___22483,cljs.core.constant$keyword$67,input_schema22463_22480,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var page_state = G__22466;
var owner = G__22467;
while(true){
if(typeof example.main.t22474 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22474 = (function (input_checker22464,page_state,G__22466,owner,validate__12581__auto__,input_schema22463,output_schema22462,output_checker22465,G__22467,thing_view,ufv__,meta22475){
this.input_checker22464 = input_checker22464;
this.page_state = page_state;
this.G__22466 = G__22466;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_schema22463 = input_schema22463;
this.output_schema22462 = output_schema22462;
this.output_checker22465 = output_checker22465;
this.G__22467 = G__22467;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.meta22475 = meta22475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22474.prototype.om$core$IDisplayName$ = true;

example.main.t22474.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

example.main.t22474.prototype.om$core$IRender$ = true;

example.main.t22474.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,example.forms.humanize_error], null),cljs.core.constant$keyword$164,((function (___$1,validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
,cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$194,example.main.save_thing], null),cljs.core.constant$keyword$165,example.main.render_thingie_form], null)], null)));
});})(validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

example.main.t22474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function (_22476){
var self__ = this;
var _22476__$1 = this;
return self__.meta22475;
});})(validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

example.main.t22474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function (_22476,meta22475__$1){
var self__ = this;
var _22476__$1 = this;
return (new example.main.t22474(self__.input_checker22464,self__.page_state,self__.G__22466,self__.owner,self__.validate__12581__auto__,self__.input_schema22463,self__.output_schema22462,self__.output_checker22465,self__.G__22467,self__.thing_view,self__.ufv__,meta22475__$1));
});})(validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

example.main.t22474.cljs$lang$type = true;

example.main.t22474.cljs$lang$ctorStr = "example.main/t22474";

example.main.t22474.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.main/t22474");
});})(validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

example.main.__GT_t22474 = ((function (validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482){
return (function __GT_t22474(input_checker22464__$1,page_state__$1,G__22466__$1,owner__$1,validate__12581__auto____$1,input_schema22463__$1,output_schema22462__$1,output_checker22465__$1,G__22467__$1,thing_view__$1,ufv____$1,meta22475){
return (new example.main.t22474(input_checker22464__$1,page_state__$1,G__22466__$1,owner__$1,validate__12581__auto____$1,input_schema22463__$1,output_schema22462__$1,output_checker22465__$1,G__22467__$1,thing_view__$1,ufv____$1,meta22475));
});})(validate__12581__auto__,ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

}

return (new example.main.t22474(input_checker22464_22481,page_state,G__22466,owner,validate__12581__auto__,input_schema22463_22480,output_schema22462_22479,output_checker22465_22482,G__22467,thing_view,ufv___22478,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22486 = (function (){var G__22477 = o__12584__auto__;
return (output_checker22465_22482.cljs$core$IFn$_invoke$arity$1 ? output_checker22465_22482.cljs$core$IFn$_invoke$arity$1(G__22477) : output_checker22465_22482.call(null,G__22477));
})();
if(cljs.core.truth_(temp__4126__auto___22486)){
var error__12583__auto___22487 = temp__4126__auto___22486;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22487], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22487,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22462_22479,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22478,output_schema22462_22479,input_schema22463_22480,input_checker22464_22481,output_checker22465_22482))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22462_22479,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22463_22480], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__20832__auto__);
});
var __GT_thing_view__2 = (function (cursor__20832__auto__,m22461){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__20832__auto__,m22461);
});
__GT_thing_view = function(cursor__20832__auto__,m22461){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__20832__auto__,m22461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22537 = schema.utils.use_fn_validation;
var output_schema22489_22538 = schema.core.Any;
var input_schema22490_22539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22491_22540 = schema.core.checker(input_schema22490_22539);
var output_checker22492_22541 = schema.core.checker(output_schema22489_22538);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function app_view(G__22493,G__22494){
var validate__12581__auto__ = ufv___22537.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22493,G__22494], null);
var temp__4126__auto___22543 = (function (){var G__22516 = args__12582__auto___22542;
return (input_checker22491_22540.cljs$core$IFn$_invoke$arity$1 ? input_checker22491_22540.cljs$core$IFn$_invoke$arity$1(G__22516) : input_checker22491_22540.call(null,G__22516));
})();
if(cljs.core.truth_(temp__4126__auto___22543)){
var error__12583__auto___22544 = temp__4126__auto___22543;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22544], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22544,cljs.core.constant$keyword$66,args__12582__auto___22542,cljs.core.constant$keyword$67,input_schema22490_22539,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var app_state = G__22493;
var owner = G__22494;
while(true){
if(typeof example.main.t22517 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22517 = (function (app_view,input_checker22491,owner,validate__12581__auto__,G__22493,output_schema22489,output_checker22492,G__22494,input_schema22490,app_state,ufv__,meta22518){
this.app_view = app_view;
this.input_checker22491 = input_checker22491;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22493 = G__22493;
this.output_schema22489 = output_schema22489;
this.output_checker22492 = output_checker22492;
this.G__22494 = G__22494;
this.input_schema22490 = input_schema22490;
this.app_state = app_state;
this.ufv__ = ufv__;
this.meta22518 = meta22518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22517.prototype.om$core$IDisplayName$ = true;

example.main.t22517.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

example.main.t22517.prototype.om$core$IRender$ = true;

example.main.t22517.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22524 = null;
var G__22525 = (function (){var G__22529 = null;
var G__22530 = "Example form ";
var G__22531 = (function (){var G__22532 = {"href": "https://github.com/metosin/lomakkeet/blob/master/example/example/main.cljs"};
var G__22533 = "(Code)";
return React.DOM.a(G__22532,G__22533);
})();
return React.DOM.h1(G__22529,G__22530,G__22531);
})();
var G__22526 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
var G__22527 = (function (){var G__22534 = null;
var G__22535 = "Om state tree";
return React.DOM.h1(G__22534,G__22535);
})();
var G__22528 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state));
return React.DOM.div(G__22524,G__22525,G__22526,G__22527,G__22528);
});})(validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

example.main.t22517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function (_22519){
var self__ = this;
var _22519__$1 = this;
return self__.meta22518;
});})(validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

example.main.t22517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function (_22519,meta22518__$1){
var self__ = this;
var _22519__$1 = this;
return (new example.main.t22517(self__.app_view,self__.input_checker22491,self__.owner,self__.validate__12581__auto__,self__.G__22493,self__.output_schema22489,self__.output_checker22492,self__.G__22494,self__.input_schema22490,self__.app_state,self__.ufv__,meta22518__$1));
});})(validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

example.main.t22517.cljs$lang$type = true;

example.main.t22517.cljs$lang$ctorStr = "example.main/t22517";

example.main.t22517.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.main/t22517");
});})(validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

example.main.__GT_t22517 = ((function (validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541){
return (function __GT_t22517(app_view__$1,input_checker22491__$1,owner__$1,validate__12581__auto____$1,G__22493__$1,output_schema22489__$1,output_checker22492__$1,G__22494__$1,input_schema22490__$1,app_state__$1,ufv____$1,meta22518){
return (new example.main.t22517(app_view__$1,input_checker22491__$1,owner__$1,validate__12581__auto____$1,G__22493__$1,output_schema22489__$1,output_checker22492__$1,G__22494__$1,input_schema22490__$1,app_state__$1,ufv____$1,meta22518));
});})(validate__12581__auto__,ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

}

return (new example.main.t22517(app_view,input_checker22491_22540,owner,validate__12581__auto__,G__22493,output_schema22489_22538,output_checker22492_22541,G__22494,input_schema22490_22539,app_state,ufv___22537,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22545 = (function (){var G__22536 = o__12584__auto__;
return (output_checker22492_22541.cljs$core$IFn$_invoke$arity$1 ? output_checker22492_22541.cljs$core$IFn$_invoke$arity$1(G__22536) : output_checker22492_22541.call(null,G__22536));
})();
if(cljs.core.truth_(temp__4126__auto___22545)){
var error__12583__auto___22546 = temp__4126__auto___22545;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22546], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22546,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22489_22538,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22537,output_schema22489_22538,input_schema22490_22539,input_checker22491_22540,output_checker22492_22541))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22489_22538,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22490_22539], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20832__auto__);
});
var __GT_app_view__2 = (function (cursor__20832__auto__,m22488){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20832__auto__,m22488);
});
__GT_app_view = function(cursor__20832__auto__,m22488){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20832__auto__,m22488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
example.main.restart_BANG_ = (function restart_BANG_(){
return om.core.root(example.main.app_view,example.main.state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,document.getElementById("app")], null));
});
example.main.restart_BANG_();
