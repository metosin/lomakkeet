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
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$80,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$228,schema.core.Str,cljs.core.constant$keyword$229,example.main.LocalDate,cljs.core.constant$keyword$230,schema.core.maybe(example.main.LocalDate),cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,schema.core.Str,cljs.core.constant$keyword$12,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0)))], null),cljs.core.constant$keyword$232,schema.core.Str], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.ThingieDates = (function ThingieDates(p__22367){
var map__22369 = p__22367;
var map__22369__$1 = ((cljs.core.seq_QMARK_(map__22369))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22369):map__22369);
var thingie = map__22369__$1;
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22369__$1,cljs.core.constant$keyword$230);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22369__$1,cljs.core.constant$keyword$229);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.main.Thingie,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229], null),((function (map__22369,map__22369__$1,thingie,end_date,start_date){
return (function (p1__22366_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22366_SHARP_,example.main.DateRange(cljs_time.core.today(),end_date)], 0));
});})(map__22369,map__22369__$1,thingie,end_date,start_date))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,example.main.DateRange(start_date,null)], 0))));
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$80,"Luke Skywalker",cljs.core.constant$keyword$228,"luke@rebel.gov",cljs.core.constant$keyword$229,cljs_time.core.today(),cljs.core.constant$keyword$230,null,cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$233,"",cljs.core.constant$keyword$12,null], null)], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__22370 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22370) : cljs.core.atom.call(null,G__22370));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22373 = schema.core.Any;
var input_schema22374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$230,schema.core.Any,cljs.core.constant$keyword$229,schema.core.Any], true, false),cljs.core.constant$keyword$147,schema.core.Any,cljs.core.constant$keyword$143,schema.core.Any,cljs.core.constant$keyword$153,schema.core.Any], true, false),new cljs.core.Symbol(null,"map22371","map22371",871071878,null))], null);
var input_checker22375 = schema.core.checker(input_schema22374);
var output_checker22376 = schema.core.checker(output_schema22373);
return schema.core.schematize_fn(((function (ufv__,output_schema22373,input_schema22374,input_checker22375,output_checker22376){
return (function render_thingie_form(G__22377){
var validate__12581__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22377], null);
var temp__4126__auto___22431 = (function (){var G__22404 = args__12582__auto___22430;
return (input_checker22375.cljs$core$IFn$_invoke$arity$1 ? input_checker22375.cljs$core$IFn$_invoke$arity$1(G__22404) : input_checker22375.call(null,G__22404));
})();
if(cljs.core.truth_(temp__4126__auto___22431)){
var error__12583__auto___22432 = temp__4126__auto___22431;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22432], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22432,cljs.core.constant$keyword$66,args__12582__auto___22430,cljs.core.constant$keyword$67,input_schema22374,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var map22371 = G__22377;
while(true){
if(cljs.core.map_QMARK_(map22371)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map22371], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map22371,cljs.core.constant$keyword$153,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map22371,cljs.core.constant$keyword$143,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map22371,cljs.core.constant$keyword$147,cljs.core.PersistentVector.EMPTY);
var map22372 = plumbing.fnk.schema.safe_get(map22371,cljs.core.constant$keyword$66,cljs.core.PersistentVector.EMPTY);
var start_date = plumbing.fnk.schema.safe_get(map22372,cljs.core.constant$keyword$229,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var end_date = plumbing.fnk.schema.safe_get(map22372,cljs.core.constant$keyword$230,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var G__22411 = {"className": "tasks"};
var G__22412 = (function (){var G__22414 = null;
var G__22415 = "New thingie";
var G__22416 = (function (){var attrs22405 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22405))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22405], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22405))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22405),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__22414,G__22415,G__22416);
})();
var G__22413 = (function (){var G__22417 = {"className": "column-content"};
var G__22418 = (function (){var attrs22406 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22406))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22406], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22406))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22406),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228], null)))], null))));
})();
var G__22419 = (function (){var attrs22407 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,cljs_time.core.today(),cljs.core.constant$keyword$194,end_date], null),cljs.core.constant$keyword$150,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22407))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22407], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22407))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$201,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$193,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22407),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$201,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$193,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null))));
})();
var G__22420 = (function (){var attrs22408 = lomakkeet.fields.textarea(form,"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.constant$keyword$233], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22408))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22408], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22408))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22408),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null))));
})();
var G__22421 = (function (){var G__22422 = {"className": "row"};
var G__22423 = (function (){var G__22425 = {"className": "col-sm-12"};
var G__22426 = (function (){var G__22427 = null;
var G__22428 = "Autocomplete";
return React.DOM.h2(G__22427,G__22428);
})();
return React.DOM.div(G__22425,G__22426);
})();
var G__22424 = sablono.interpreter.interpret(example.autocomplete.country_select(form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null)));
return React.DOM.div(G__22422,G__22423,G__22424);
})();
return React.DOM.form(G__22417,G__22418,G__22419,G__22420,G__22421);
})();
return React.DOM.div(G__22411,G__22412,G__22413);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22433 = (function (){var G__22429 = o__12584__auto__;
return (output_checker22376.cljs$core$IFn$_invoke$arity$1 ? output_checker22376.cljs$core$IFn$_invoke$arity$1(G__22429) : output_checker22376.call(null,G__22429));
})();
if(cljs.core.truth_(temp__4126__auto___22433)){
var error__12583__auto___22434 = temp__4126__auto___22433;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22434], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22434,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22373,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv__,output_schema22373,input_schema22374,input_checker22375,output_checker22376))
,schema.core.make_fn_schema(output_schema22373,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22374], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22452 = schema.utils.use_fn_validation;
var output_schema22436_22453 = schema.core.Any;
var input_schema22437_22454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22438_22455 = schema.core.checker(input_schema22437_22454);
var output_checker22439_22456 = schema.core.checker(output_schema22436_22453);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function thing_view(G__22440,G__22441){
var validate__12581__auto__ = ufv___22452.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22440,G__22441], null);
var temp__4126__auto___22458 = (function (){var G__22447 = args__12582__auto___22457;
return (input_checker22438_22455.cljs$core$IFn$_invoke$arity$1 ? input_checker22438_22455.cljs$core$IFn$_invoke$arity$1(G__22447) : input_checker22438_22455.call(null,G__22447));
})();
if(cljs.core.truth_(temp__4126__auto___22458)){
var error__12583__auto___22459 = temp__4126__auto___22458;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22459], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22459,cljs.core.constant$keyword$66,args__12582__auto___22457,cljs.core.constant$keyword$67,input_schema22437_22454,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var page_state = G__22440;
var owner = G__22441;
while(true){
if(typeof example.main.t22448 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22448 = (function (output_schema22436,input_schema22437,page_state,owner,validate__12581__auto__,G__22440,G__22441,output_checker22439,thing_view,ufv__,input_checker22438,meta22449){
this.output_schema22436 = output_schema22436;
this.input_schema22437 = input_schema22437;
this.page_state = page_state;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22440 = G__22440;
this.G__22441 = G__22441;
this.output_checker22439 = output_checker22439;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.input_checker22438 = input_checker22438;
this.meta22449 = meta22449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22448.prototype.om$core$IDisplayName$ = true;

example.main.t22448.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

example.main.t22448.prototype.om$core$IRender$ = true;

example.main.t22448.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,example.forms.humanize_error], null),cljs.core.constant$keyword$164,((function (___$1,validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
,cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$192,example.main.save_thing], null),cljs.core.constant$keyword$165,example.main.render_thingie_form], null)], null)));
});})(validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

example.main.t22448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function (_22450){
var self__ = this;
var _22450__$1 = this;
return self__.meta22449;
});})(validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

example.main.t22448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function (_22450,meta22449__$1){
var self__ = this;
var _22450__$1 = this;
return (new example.main.t22448(self__.output_schema22436,self__.input_schema22437,self__.page_state,self__.owner,self__.validate__12581__auto__,self__.G__22440,self__.G__22441,self__.output_checker22439,self__.thing_view,self__.ufv__,self__.input_checker22438,meta22449__$1));
});})(validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

example.main.t22448.cljs$lang$type = true;

example.main.t22448.cljs$lang$ctorStr = "example.main/t22448";

example.main.t22448.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.main/t22448");
});})(validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

example.main.__GT_t22448 = ((function (validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456){
return (function __GT_t22448(output_schema22436__$1,input_schema22437__$1,page_state__$1,owner__$1,validate__12581__auto____$1,G__22440__$1,G__22441__$1,output_checker22439__$1,thing_view__$1,ufv____$1,input_checker22438__$1,meta22449){
return (new example.main.t22448(output_schema22436__$1,input_schema22437__$1,page_state__$1,owner__$1,validate__12581__auto____$1,G__22440__$1,G__22441__$1,output_checker22439__$1,thing_view__$1,ufv____$1,input_checker22438__$1,meta22449));
});})(validate__12581__auto__,ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

}

return (new example.main.t22448(output_schema22436_22453,input_schema22437_22454,page_state,owner,validate__12581__auto__,G__22440,G__22441,output_checker22439_22456,thing_view,ufv___22452,input_checker22438_22455,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22460 = (function (){var G__22451 = o__12584__auto__;
return (output_checker22439_22456.cljs$core$IFn$_invoke$arity$1 ? output_checker22439_22456.cljs$core$IFn$_invoke$arity$1(G__22451) : output_checker22439_22456.call(null,G__22451));
})();
if(cljs.core.truth_(temp__4126__auto___22460)){
var error__12583__auto___22461 = temp__4126__auto___22460;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22461], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22461,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22436_22453,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22452,output_schema22436_22453,input_schema22437_22454,input_checker22438_22455,output_checker22439_22456))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22436_22453,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22437_22454], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__20832__auto__);
});
var __GT_thing_view__2 = (function (cursor__20832__auto__,m22435){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__20832__auto__,m22435);
});
__GT_thing_view = function(cursor__20832__auto__,m22435){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__20832__auto__,m22435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22511 = schema.utils.use_fn_validation;
var output_schema22463_22512 = schema.core.Any;
var input_schema22464_22513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22465_22514 = schema.core.checker(input_schema22464_22513);
var output_checker22466_22515 = schema.core.checker(output_schema22463_22512);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function app_view(G__22467,G__22468){
var validate__12581__auto__ = ufv___22511.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22467,G__22468], null);
var temp__4126__auto___22517 = (function (){var G__22490 = args__12582__auto___22516;
return (input_checker22465_22514.cljs$core$IFn$_invoke$arity$1 ? input_checker22465_22514.cljs$core$IFn$_invoke$arity$1(G__22490) : input_checker22465_22514.call(null,G__22490));
})();
if(cljs.core.truth_(temp__4126__auto___22517)){
var error__12583__auto___22518 = temp__4126__auto___22517;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22518], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22518,cljs.core.constant$keyword$66,args__12582__auto___22516,cljs.core.constant$keyword$67,input_schema22464_22513,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var app_state = G__22467;
var owner = G__22468;
while(true){
if(typeof example.main.t22491 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22491 = (function (app_view,owner,validate__12581__auto__,input_checker22465,G__22467,app_state,input_schema22464,G__22468,output_checker22466,output_schema22463,ufv__,meta22492){
this.app_view = app_view;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_checker22465 = input_checker22465;
this.G__22467 = G__22467;
this.app_state = app_state;
this.input_schema22464 = input_schema22464;
this.G__22468 = G__22468;
this.output_checker22466 = output_checker22466;
this.output_schema22463 = output_schema22463;
this.ufv__ = ufv__;
this.meta22492 = meta22492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22491.prototype.om$core$IDisplayName$ = true;

example.main.t22491.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

example.main.t22491.prototype.om$core$IRender$ = true;

example.main.t22491.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22498 = null;
var G__22499 = (function (){var G__22503 = null;
var G__22504 = "Example form ";
var G__22505 = (function (){var G__22506 = {"href": "https://github.com/metosin/lomakkeet/blob/master/example/example/main.cljs"};
var G__22507 = "(Code)";
return React.DOM.a(G__22506,G__22507);
})();
return React.DOM.h1(G__22503,G__22504,G__22505);
})();
var G__22500 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
var G__22501 = (function (){var G__22508 = null;
var G__22509 = "Om state tree";
return React.DOM.h1(G__22508,G__22509);
})();
var G__22502 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state));
return React.DOM.div(G__22498,G__22499,G__22500,G__22501,G__22502);
});})(validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

example.main.t22491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function (_22493){
var self__ = this;
var _22493__$1 = this;
return self__.meta22492;
});})(validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

example.main.t22491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function (_22493,meta22492__$1){
var self__ = this;
var _22493__$1 = this;
return (new example.main.t22491(self__.app_view,self__.owner,self__.validate__12581__auto__,self__.input_checker22465,self__.G__22467,self__.app_state,self__.input_schema22464,self__.G__22468,self__.output_checker22466,self__.output_schema22463,self__.ufv__,meta22492__$1));
});})(validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

example.main.t22491.cljs$lang$type = true;

example.main.t22491.cljs$lang$ctorStr = "example.main/t22491";

example.main.t22491.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.main/t22491");
});})(validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

example.main.__GT_t22491 = ((function (validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515){
return (function __GT_t22491(app_view__$1,owner__$1,validate__12581__auto____$1,input_checker22465__$1,G__22467__$1,app_state__$1,input_schema22464__$1,G__22468__$1,output_checker22466__$1,output_schema22463__$1,ufv____$1,meta22492){
return (new example.main.t22491(app_view__$1,owner__$1,validate__12581__auto____$1,input_checker22465__$1,G__22467__$1,app_state__$1,input_schema22464__$1,G__22468__$1,output_checker22466__$1,output_schema22463__$1,ufv____$1,meta22492));
});})(validate__12581__auto__,ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

}

return (new example.main.t22491(app_view,owner,validate__12581__auto__,input_checker22465_22514,G__22467,app_state,input_schema22464_22513,G__22468,output_checker22466_22515,output_schema22463_22512,ufv___22511,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22519 = (function (){var G__22510 = o__12584__auto__;
return (output_checker22466_22515.cljs$core$IFn$_invoke$arity$1 ? output_checker22466_22515.cljs$core$IFn$_invoke$arity$1(G__22510) : output_checker22466_22515.call(null,G__22510));
})();
if(cljs.core.truth_(temp__4126__auto___22519)){
var error__12583__auto___22520 = temp__4126__auto___22519;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22520], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22520,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22463_22512,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22511,output_schema22463_22512,input_schema22464_22513,input_checker22465_22514,output_checker22466_22515))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22463_22512,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22464_22513], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20832__auto__);
});
var __GT_app_view__2 = (function (cursor__20832__auto__,m22462){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20832__auto__,m22462);
});
__GT_app_view = function(cursor__20832__auto__,m22462){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20832__auto__,m22462);
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
