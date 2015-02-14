// Compiled by ClojureScript 0.0-2850 {}
goog.provide('example.main');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('example.autocomplete');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('om_dev_tools.core');
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
var and__3803__auto__ = (function (){var or__3815__auto__ = cljs.core.not(start);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = x.equals(start);
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return cljs_time.core.after_QMARK_(x,start);
}
}
})();
if(cljs.core.truth_(and__3803__auto__)){
var or__3815__auto__ = cljs.core.not(end);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = x.equals(end);
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return cljs_time.core.before_QMARK_(x,end);
}
}
} else {
return and__3803__auto__;
}
}),new cljs.core.Symbol(null,"invalid-date","invalid-date",-623929196,null));
});
example.main.email_pattern = (new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$","i"));
/**
* 
*/
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$78,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$325,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (p1__22354_SHARP_){
return cljs.core.re_find(example.main.email_pattern,p1__22354_SHARP_);
}),new cljs.core.Symbol(null,"email","email",-1238619063,null))], 0)),cljs.core.constant$keyword$326,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$211,example.main.LocalDate,cljs.core.constant$keyword$212,schema.core.maybe(example.main.LocalDate)], null),cljs.core.constant$keyword$327,schema.core.Str,cljs.core.constant$keyword$328,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0))),cljs.core.constant$keyword$329,schema.core.Str,cljs.core.constant$keyword$330,schema.core.Keyword], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.ThingieDates = (function ThingieDates(p__22356){
var map__22359 = p__22356;
var map__22359__$1 = ((cljs.core.seq_QMARK_(map__22359))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22359):map__22359);
var map__22360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.constant$keyword$326);
var map__22360__$1 = ((cljs.core.seq_QMARK_(map__22360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22360):map__22360);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,cljs.core.constant$keyword$212);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22360__$1,cljs.core.constant$keyword$211);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.main.Thingie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.constant$keyword$211], null),((function (map__22359,map__22359__$1,map__22360,map__22360__$1,end,start){
return (function (p1__22355_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22355_SHARP_,example.main.DateRange(cljs_time.core.today(),end)], 0));
});})(map__22359,map__22359__$1,map__22360,map__22360__$1,end,start))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.constant$keyword$212], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,example.main.DateRange(start,null)], 0))));
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$78,"Luke Skywalker",cljs.core.constant$keyword$325,"luke@rebel.gov",cljs.core.constant$keyword$326,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$211,cljs_time.core.today(),cljs.core.constant$keyword$212,null], null),cljs.core.constant$keyword$327,"",cljs.core.constant$keyword$328,null,cljs.core.constant$keyword$329,"FI",cljs.core.constant$keyword$330,cljs.core.constant$keyword$331], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__22361 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22361) : cljs.core.atom.call(null,G__22361));
})();
}
if(typeof example.main.dev_state !== 'undefined'){
} else {
example.main.dev_state = (function (){var G__22362 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(om_dev_tools.core.empty_state(),cljs.core.constant$keyword$168,true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,cljs.core.constant$keyword$332,cljs.core.constant$keyword$64,cljs.core.constant$keyword$326], null),cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22362) : cljs.core.atom.call(null,G__22362));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22366 = schema.core.Any;
var input_schema22367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$326,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$212,schema.core.Any,cljs.core.constant$keyword$211,schema.core.Any], true, false)], true, false),cljs.core.constant$keyword$145,schema.core.Any,cljs.core.constant$keyword$141,schema.core.Any,cljs.core.constant$keyword$151,schema.core.Any], true, false),new cljs.core.Symbol(null,"map22363","map22363",-918859372,null))], null);
var input_checker22368 = schema.core.checker(input_schema22367);
var output_checker22369 = schema.core.checker(output_schema22366);
return schema.core.schematize_fn(((function (ufv__,output_schema22366,input_schema22367,input_checker22368,output_checker22369){
return (function render_thingie_form(G__22370){
var validate__12170__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22370], null);
var temp__4126__auto___22510 = (function (){var G__22440 = args__12171__auto___22509;
return (input_checker22368.cljs$core$IFn$_invoke$arity$1 ? input_checker22368.cljs$core$IFn$_invoke$arity$1(G__22440) : input_checker22368.call(null,G__22440));
})();
if(cljs.core.truth_(temp__4126__auto___22510)){
var error__12172__auto___22511 = temp__4126__auto___22510;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22511], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22511,cljs.core.constant$keyword$64,args__12171__auto___22509,cljs.core.constant$keyword$65,input_schema22367,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var map22363 = G__22370;
while(true){
if(cljs.core.map_QMARK_(map22363)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map22363], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map22363,cljs.core.constant$keyword$151,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map22363,cljs.core.constant$keyword$141,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map22363,cljs.core.constant$keyword$145,cljs.core.PersistentVector.EMPTY);
var map22364 = plumbing.fnk.schema.safe_get(map22363,cljs.core.constant$keyword$64,cljs.core.PersistentVector.EMPTY);
var map22365 = plumbing.fnk.schema.safe_get(map22364,cljs.core.constant$keyword$326,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64], null));
var start = plumbing.fnk.schema.safe_get(map22365,cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,cljs.core.constant$keyword$326], null));
var end = plumbing.fnk.schema.safe_get(map22365,cljs.core.constant$keyword$212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,cljs.core.constant$keyword$326], null));
var G__22451 = "div";
var G__22452 = {"className": "tasks"};
var G__22453 = (function (){var G__22455 = "h2";
var G__22456 = null;
var G__22457 = "Basic fields";
var G__22458 = (function (){var attrs22441 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22441))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22441], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22441))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22441),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.createElement(G__22455,G__22456,G__22457,G__22458);
})();
var G__22454 = (function (){var G__22459 = "form";
var G__22460 = {"className": "column-content"};
var G__22461 = (function (){var attrs22442 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22442))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22442], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22442))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22442),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325], null)))], null))));
})();
var G__22462 = (function (){var attrs22443 = lomakkeet.fields.textarea(form,"Textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$327], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22443))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22443], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22443))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.select(form,"Select",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$330], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$333,"Male",cljs.core.constant$keyword$334,"Female",cljs.core.constant$keyword$331,"Other"], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22443),sablono.interpreter.interpret(lomakkeet.fields.select(form,"Select",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$330], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$333,"Male",cljs.core.constant$keyword$334,"Female",cljs.core.constant$keyword$331,"Other"], null)))], null))));
})();
var G__22463 = (function (){var G__22466 = "div";
var G__22467 = {"className": "row"};
var G__22468 = (function (){var G__22470 = "div";
var G__22471 = {"className": "col-sm-6"};
var G__22472 = (function (){var G__22473 = "h2";
var G__22474 = null;
var G__22475 = "Datepicker (using ";
var G__22476 = (function (){var G__22478 = "a";
var G__22479 = {"href": "https://github.com/dbushell/Pikaday"};
var G__22480 = "Pikaday";
return React.createElement(G__22478,G__22479,G__22480);
})();
var G__22477 = ")";
return React.createElement(G__22473,G__22474,G__22475,G__22476,G__22477);
})();
return React.createElement(G__22470,G__22471,G__22472);
})();
var G__22469 = (function (){var G__22481 = "div";
var G__22482 = {"className": "col-sm-6"};
var G__22483 = (function (){var G__22484 = "h2";
var G__22485 = null;
var G__22486 = "Filepicker";
return React.createElement(G__22484,G__22485,G__22486);
})();
return React.createElement(G__22481,G__22482,G__22483);
})();
return React.createElement(G__22466,G__22467,G__22468,G__22469);
})();
var G__22464 = (function (){var attrs22446 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.constant$keyword$211], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$149,(3),cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,cljs_time.core.today(),cljs.core.constant$keyword$192,end], null),cljs.core.constant$keyword$148,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22446))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22446], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22446))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.constant$keyword$212], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$149,(3),cljs.core.constant$keyword$200,true,cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,start], null),cljs.core.constant$keyword$148,"Optional. After start date."], null)], 0))),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22446),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,cljs.core.constant$keyword$212], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$149,(3),cljs.core.constant$keyword$200,true,cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,start], null),cljs.core.constant$keyword$148,"Optional. After start date."], null)], 0))),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,"Under 1MB"], null)], 0)))], null))));
})();
var G__22465 = (function (){var G__22487 = "div";
var G__22488 = {"className": "row"};
var G__22489 = (function (){var G__22492 = "div";
var G__22493 = {"className": "col-sm-12"};
var G__22494 = (function (){var G__22495 = "h2";
var G__22496 = null;
var G__22497 = "Autocomplete";
return React.createElement(G__22495,G__22496,G__22497);
})();
return React.createElement(G__22492,G__22493,G__22494);
})();
var G__22490 = sablono.interpreter.interpret(example.autocomplete.country_select(form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$329], null)));
var G__22491 = (function (){var G__22498 = "div";
var G__22499 = {"className": "form-group col-sm-6"};
var G__22500 = (function (){var G__22502 = "label";
var G__22503 = null;
var G__22504 = "Autocomplete (tree):";
return React.createElement(G__22502,G__22503,G__22504);
})();
var G__22501 = (function (){var G__22505 = "p";
var G__22506 = {"className": "form-control-static"};
var G__22507 = "TODO";
return React.createElement(G__22505,G__22506,G__22507);
})();
return React.createElement(G__22498,G__22499,G__22500,G__22501);
})();
return React.createElement(G__22487,G__22488,G__22489,G__22490,G__22491);
})();
return React.createElement(G__22459,G__22460,G__22461,G__22462,G__22463,G__22464,G__22465);
})();
return React.createElement(G__22451,G__22452,G__22453,G__22454);
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22512 = (function (){var G__22508 = o__12173__auto__;
return (output_checker22369.cljs$core$IFn$_invoke$arity$1 ? output_checker22369.cljs$core$IFn$_invoke$arity$1(G__22508) : output_checker22369.call(null,G__22508));
})();
if(cljs.core.truth_(temp__4126__auto___22512)){
var error__12172__auto___22513 = temp__4126__auto___22512;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22513], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22513,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22366,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv__,output_schema22366,input_schema22367,input_checker22368,output_checker22369))
,schema.core.make_fn_schema(output_schema22366,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22367], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22531 = schema.utils.use_fn_validation;
var output_schema22515_22532 = schema.core.Any;
var input_schema22516_22533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22517_22534 = schema.core.checker(input_schema22516_22533);
var output_checker22518_22535 = schema.core.checker(output_schema22515_22532);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function thing_view(G__22519,G__22520){
var validate__12170__auto__ = ufv___22531.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22519,G__22520], null);
var temp__4126__auto___22537 = (function (){var G__22526 = args__12171__auto___22536;
return (input_checker22517_22534.cljs$core$IFn$_invoke$arity$1 ? input_checker22517_22534.cljs$core$IFn$_invoke$arity$1(G__22526) : input_checker22517_22534.call(null,G__22526));
})();
if(cljs.core.truth_(temp__4126__auto___22537)){
var error__12172__auto___22538 = temp__4126__auto___22537;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22538], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22538,cljs.core.constant$keyword$64,args__12171__auto___22536,cljs.core.constant$keyword$65,input_schema22516_22533,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var page_state = G__22519;
var owner = G__22520;
while(true){
if(typeof example.main.t22527 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22527 = (function (page_state,owner,G__22520,output_checker22518,input_checker22517,input_schema22516,validate__12170__auto__,thing_view,ufv__,output_schema22515,G__22519,meta22528){
this.page_state = page_state;
this.owner = owner;
this.G__22520 = G__22520;
this.output_checker22518 = output_checker22518;
this.input_checker22517 = input_checker22517;
this.input_schema22516 = input_schema22516;
this.validate__12170__auto__ = validate__12170__auto__;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.output_schema22515 = output_schema22515;
this.G__22519 = G__22519;
this.meta22528 = meta22528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22527.prototype.om$core$IDisplayName$ = true;

example.main.t22527.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

example.main.t22527.prototype.om$core$IRender$ = true;

example.main.t22527.prototype.om$core$IRender$render$arity$1 = ((function (validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$335,example.forms.humanize_error], null),cljs.core.constant$keyword$162,((function (___$1,validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
,cljs.core.constant$keyword$164,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$190,example.main.save_thing], null),cljs.core.constant$keyword$163,example.main.render_thingie_form], null)], null)));
});})(validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

example.main.t22527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function (_22529){
var self__ = this;
var _22529__$1 = this;
return self__.meta22528;
});})(validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

example.main.t22527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function (_22529,meta22528__$1){
var self__ = this;
var _22529__$1 = this;
return (new example.main.t22527(self__.page_state,self__.owner,self__.G__22520,self__.output_checker22518,self__.input_checker22517,self__.input_schema22516,self__.validate__12170__auto__,self__.thing_view,self__.ufv__,self__.output_schema22515,self__.G__22519,meta22528__$1));
});})(validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

example.main.t22527.cljs$lang$type = true;

example.main.t22527.cljs$lang$ctorStr = "example.main/t22527";

example.main.t22527.cljs$lang$ctorPrWriter = ((function (validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t22527");
});})(validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

example.main.__GT_t22527 = ((function (validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535){
return (function __GT_t22527(page_state__$1,owner__$1,G__22520__$1,output_checker22518__$1,input_checker22517__$1,input_schema22516__$1,validate__12170__auto____$1,thing_view__$1,ufv____$1,output_schema22515__$1,G__22519__$1,meta22528){
return (new example.main.t22527(page_state__$1,owner__$1,G__22520__$1,output_checker22518__$1,input_checker22517__$1,input_schema22516__$1,validate__12170__auto____$1,thing_view__$1,ufv____$1,output_schema22515__$1,G__22519__$1,meta22528));
});})(validate__12170__auto__,ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

}

return (new example.main.t22527(page_state,owner,G__22520,output_checker22518_22535,input_checker22517_22534,input_schema22516_22533,validate__12170__auto__,thing_view,ufv___22531,output_schema22515_22532,G__22519,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22539 = (function (){var G__22530 = o__12173__auto__;
return (output_checker22518_22535.cljs$core$IFn$_invoke$arity$1 ? output_checker22518_22535.cljs$core$IFn$_invoke$arity$1(G__22530) : output_checker22518_22535.call(null,G__22530));
})();
if(cljs.core.truth_(temp__4126__auto___22539)){
var error__12172__auto___22540 = temp__4126__auto___22539;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22540], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22540,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22515_22532,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22531,output_schema22515_22532,input_schema22516_22533,input_checker22517_22534,output_checker22518_22535))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22515_22532,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22516_22533], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__20405__auto__);
});
var __GT_thing_view__2 = (function (cursor__20405__auto__,m22514){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__20405__auto__,m22514);
});
__GT_thing_view = function(cursor__20405__auto__,m22514){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__20405__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__20405__auto__,m22514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22584 = schema.utils.use_fn_validation;
var output_schema22542_22585 = schema.core.Any;
var input_schema22543_22586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22544_22587 = schema.core.checker(input_schema22543_22586);
var output_checker22545_22588 = schema.core.checker(output_schema22542_22585);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function app_view(G__22546,G__22547){
var validate__12170__auto__ = ufv___22584.get_cell();
if(cljs.core.truth_(validate__12170__auto__)){
var args__12171__auto___22589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22546,G__22547], null);
var temp__4126__auto___22590 = (function (){var G__22566 = args__12171__auto___22589;
return (input_checker22544_22587.cljs$core$IFn$_invoke$arity$1 ? input_checker22544_22587.cljs$core$IFn$_invoke$arity$1(G__22566) : input_checker22544_22587.call(null,G__22566));
})();
if(cljs.core.truth_(temp__4126__auto___22590)){
var error__12172__auto___22591 = temp__4126__auto___22590;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22591], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22591,cljs.core.constant$keyword$64,args__12171__auto___22589,cljs.core.constant$keyword$65,input_schema22543_22586,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

var o__12173__auto__ = (function (){var app_state = G__22546;
var owner = G__22547;
while(true){
if(typeof example.main.t22567 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22567 = (function (app_view,output_schema22542,owner,input_schema22543,input_checker22544,output_checker22545,validate__12170__auto__,G__22547,G__22546,app_state,ufv__,meta22568){
this.app_view = app_view;
this.output_schema22542 = output_schema22542;
this.owner = owner;
this.input_schema22543 = input_schema22543;
this.input_checker22544 = input_checker22544;
this.output_checker22545 = output_checker22545;
this.validate__12170__auto__ = validate__12170__auto__;
this.G__22547 = G__22547;
this.G__22546 = G__22546;
this.app_state = app_state;
this.ufv__ = ufv__;
this.meta22568 = meta22568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22567.prototype.om$core$IDisplayName$ = true;

example.main.t22567.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

example.main.t22567.prototype.om$core$IRender$ = true;

example.main.t22567.prototype.om$core$IRender$render$arity$1 = ((function (validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22572 = "div";
var G__22573 = null;
var G__22574 = (function (){var G__22576 = "h1";
var G__22577 = null;
var G__22578 = "Example form ";
var G__22579 = (function (){var G__22580 = "a";
var G__22581 = {"href": "https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"};
var G__22582 = "(Code)";
return React.createElement(G__22580,G__22581,G__22582);
})();
return React.createElement(G__22576,G__22577,G__22578,G__22579);
})();
var G__22575 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
return React.createElement(G__22572,G__22573,G__22574,G__22575);
});})(validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

example.main.t22567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function (_22569){
var self__ = this;
var _22569__$1 = this;
return self__.meta22568;
});})(validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

example.main.t22567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function (_22569,meta22568__$1){
var self__ = this;
var _22569__$1 = this;
return (new example.main.t22567(self__.app_view,self__.output_schema22542,self__.owner,self__.input_schema22543,self__.input_checker22544,self__.output_checker22545,self__.validate__12170__auto__,self__.G__22547,self__.G__22546,self__.app_state,self__.ufv__,meta22568__$1));
});})(validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

example.main.t22567.cljs$lang$type = true;

example.main.t22567.cljs$lang$ctorStr = "example.main/t22567";

example.main.t22567.cljs$lang$ctorPrWriter = ((function (validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"example.main/t22567");
});})(validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

example.main.__GT_t22567 = ((function (validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588){
return (function __GT_t22567(app_view__$1,output_schema22542__$1,owner__$1,input_schema22543__$1,input_checker22544__$1,output_checker22545__$1,validate__12170__auto____$1,G__22547__$1,G__22546__$1,app_state__$1,ufv____$1,meta22568){
return (new example.main.t22567(app_view__$1,output_schema22542__$1,owner__$1,input_schema22543__$1,input_checker22544__$1,output_checker22545__$1,validate__12170__auto____$1,G__22547__$1,G__22546__$1,app_state__$1,ufv____$1,meta22568));
});})(validate__12170__auto__,ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

}

return (new example.main.t22567(app_view,output_schema22542_22585,owner,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588,validate__12170__auto__,G__22547,G__22546,app_state,ufv___22584,null));
break;
}
})();
if(cljs.core.truth_(validate__12170__auto__)){
var temp__4126__auto___22592 = (function (){var G__22583 = o__12173__auto__;
return (output_checker22545_22588.cljs$core$IFn$_invoke$arity$1 ? output_checker22545_22588.cljs$core$IFn$_invoke$arity$1(G__22583) : output_checker22545_22588.call(null,G__22583));
})();
if(cljs.core.truth_(temp__4126__auto___22592)){
var error__12172__auto___22593 = temp__4126__auto___22592;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12172__auto___22593], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$63,error__12172__auto___22593,cljs.core.constant$keyword$64,o__12173__auto__,cljs.core.constant$keyword$65,output_schema22542_22585,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67], null));
} else {
}
} else {
}

return o__12173__auto__;
});})(ufv___22584,output_schema22542_22585,input_schema22543_22586,input_checker22544_22587,output_checker22545_22588))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22542_22585,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22543_22586], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20405__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20405__auto__);
});
var __GT_app_view__2 = (function (cursor__20405__auto__,m22541){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20405__auto__,m22541);
});
__GT_app_view = function(cursor__20405__auto__,m22541){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20405__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20405__auto__,m22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
example.main.restart_BANG_ = (function restart_BANG_(){
return om_dev_tools.core.root(example.main.app_view,example.main.state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,document.getElementById("app"),cljs.core.constant$keyword$322,document.getElementById("dev"),cljs.core.constant$keyword$321,example.main.dev_state], null));
});
example.main.restart_BANG_();
