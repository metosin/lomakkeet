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
example.main.ThingieDates = (function ThingieDates(p__22389){
var map__22391 = p__22389;
var map__22391__$1 = ((cljs.core.seq_QMARK_(map__22391))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22391):map__22391);
var thingie = map__22391__$1;
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22391__$1,cljs.core.constant$keyword$232);
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22391__$1,cljs.core.constant$keyword$231);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.main.Thingie,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),((function (map__22391,map__22391__$1,thingie,end_date,start_date){
return (function (p1__22388_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__22388_SHARP_,example.main.DateRange(cljs_time.core.today(),end_date)], 0));
});})(map__22391,map__22391__$1,thingie,end_date,start_date))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,example.main.DateRange(start_date,null)], 0))));
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$80,"Luke Skywalker",cljs.core.constant$keyword$230,"luke@rebel.gov",cljs.core.constant$keyword$231,cljs_time.core.today(),cljs.core.constant$keyword$232,null,cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,"",cljs.core.constant$keyword$12,null], null)], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__22392 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22392) : cljs.core.atom.call(null,G__22392));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22395 = schema.core.Any;
var input_schema22396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$232,schema.core.Any,cljs.core.constant$keyword$231,schema.core.Any], true, false),cljs.core.constant$keyword$147,schema.core.Any,cljs.core.constant$keyword$143,schema.core.Any,cljs.core.constant$keyword$153,schema.core.Any], true, false),new cljs.core.Symbol(null,"map22393","map22393",-1133494621,null))], null);
var input_checker22397 = schema.core.checker(input_schema22396);
var output_checker22398 = schema.core.checker(output_schema22395);
return schema.core.schematize_fn(((function (ufv__,output_schema22395,input_schema22396,input_checker22397,output_checker22398){
return (function render_thingie_form(G__22399){
var validate__12581__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22399], null);
var temp__4126__auto___22453 = (function (){var G__22426 = args__12582__auto___22452;
return (input_checker22397.cljs$core$IFn$_invoke$arity$1 ? input_checker22397.cljs$core$IFn$_invoke$arity$1(G__22426) : input_checker22397.call(null,G__22426));
})();
if(cljs.core.truth_(temp__4126__auto___22453)){
var error__12583__auto___22454 = temp__4126__auto___22453;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22454], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22454,cljs.core.constant$keyword$66,args__12582__auto___22452,cljs.core.constant$keyword$67,input_schema22396,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var map22393 = G__22399;
while(true){
if(cljs.core.map_QMARK_(map22393)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map22393], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map22393,cljs.core.constant$keyword$153,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map22393,cljs.core.constant$keyword$143,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map22393,cljs.core.constant$keyword$147,cljs.core.PersistentVector.EMPTY);
var map22394 = plumbing.fnk.schema.safe_get(map22393,cljs.core.constant$keyword$66,cljs.core.PersistentVector.EMPTY);
var start_date = plumbing.fnk.schema.safe_get(map22394,cljs.core.constant$keyword$231,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var end_date = plumbing.fnk.schema.safe_get(map22394,cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var G__22433 = {"className": "tasks"};
var G__22434 = (function (){var G__22436 = null;
var G__22437 = "New thingie";
var G__22438 = (function (){var attrs22427 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22427))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs22427], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22427))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22427),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__22436,G__22437,G__22438);
})();
var G__22435 = (function (){var G__22439 = {"className": "column-content"};
var G__22440 = (function (){var attrs22428 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22428))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22428], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22428))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22428),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230], null)))], null))));
})();
var G__22441 = (function (){var attrs22429 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$195,cljs_time.core.today(),cljs.core.constant$keyword$196,end_date], null),cljs.core.constant$keyword$150,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22429))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22429], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22429))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$203,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$195,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22429),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$203,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$195,start_date], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0)))], null))));
})();
var G__22442 = (function (){var attrs22430 = lomakkeet.fields.textarea(form,"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$235], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs22430))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs22430], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22430))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22430),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null))));
})();
var G__22443 = (function (){var G__22444 = {"className": "row"};
var G__22445 = (function (){var G__22447 = {"className": "col-sm-12"};
var G__22448 = (function (){var G__22449 = null;
var G__22450 = "Autocomplete";
return React.DOM.h2(G__22449,G__22450);
})();
return React.DOM.div(G__22447,G__22448);
})();
var G__22446 = sablono.interpreter.interpret(example.autocomplete.country_select(form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234], null)));
return React.DOM.div(G__22444,G__22445,G__22446);
})();
return React.DOM.form(G__22439,G__22440,G__22441,G__22442,G__22443);
})();
return React.DOM.div(G__22433,G__22434,G__22435);
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22455 = (function (){var G__22451 = o__12584__auto__;
return (output_checker22398.cljs$core$IFn$_invoke$arity$1 ? output_checker22398.cljs$core$IFn$_invoke$arity$1(G__22451) : output_checker22398.call(null,G__22451));
})();
if(cljs.core.truth_(temp__4126__auto___22455)){
var error__12583__auto___22456 = temp__4126__auto___22455;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22456], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22456,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22395,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv__,output_schema22395,input_schema22396,input_checker22397,output_checker22398))
,schema.core.make_fn_schema(output_schema22395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22396], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22474 = schema.utils.use_fn_validation;
var output_schema22458_22475 = schema.core.Any;
var input_schema22459_22476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22460_22477 = schema.core.checker(input_schema22459_22476);
var output_checker22461_22478 = schema.core.checker(output_schema22458_22475);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function thing_view(G__22462,G__22463){
var validate__12581__auto__ = ufv___22474.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22479 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22462,G__22463], null);
var temp__4126__auto___22480 = (function (){var G__22469 = args__12582__auto___22479;
return (input_checker22460_22477.cljs$core$IFn$_invoke$arity$1 ? input_checker22460_22477.cljs$core$IFn$_invoke$arity$1(G__22469) : input_checker22460_22477.call(null,G__22469));
})();
if(cljs.core.truth_(temp__4126__auto___22480)){
var error__12583__auto___22481 = temp__4126__auto___22480;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22481], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22481,cljs.core.constant$keyword$66,args__12582__auto___22479,cljs.core.constant$keyword$67,input_schema22459_22476,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var page_state = G__22462;
var owner = G__22463;
while(true){
if(typeof example.main.t22470 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22470 = (function (page_state,owner,validate__12581__auto__,G__22462,output_checker22461,output_schema22458,input_schema22459,thing_view,ufv__,G__22463,input_checker22460,meta22471){
this.page_state = page_state;
this.owner = owner;
this.validate__12581__auto__ = validate__12581__auto__;
this.G__22462 = G__22462;
this.output_checker22461 = output_checker22461;
this.output_schema22458 = output_schema22458;
this.input_schema22459 = input_schema22459;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.G__22463 = G__22463;
this.input_checker22460 = input_checker22460;
this.meta22471 = meta22471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22470.prototype.om$core$IDisplayName$ = true;

example.main.t22470.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

example.main.t22470.prototype.om$core$IRender$ = true;

example.main.t22470.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,example.forms.humanize_error], null),cljs.core.constant$keyword$164,((function (___$1,validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
,cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$194,example.main.save_thing], null),cljs.core.constant$keyword$165,example.main.render_thingie_form], null)], null)));
});})(validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

example.main.t22470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function (_22472){
var self__ = this;
var _22472__$1 = this;
return self__.meta22471;
});})(validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

example.main.t22470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function (_22472,meta22471__$1){
var self__ = this;
var _22472__$1 = this;
return (new example.main.t22470(self__.page_state,self__.owner,self__.validate__12581__auto__,self__.G__22462,self__.output_checker22461,self__.output_schema22458,self__.input_schema22459,self__.thing_view,self__.ufv__,self__.G__22463,self__.input_checker22460,meta22471__$1));
});})(validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

example.main.t22470.cljs$lang$type = true;

example.main.t22470.cljs$lang$ctorStr = "example.main/t22470";

example.main.t22470.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.main/t22470");
});})(validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

example.main.__GT_t22470 = ((function (validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478){
return (function __GT_t22470(page_state__$1,owner__$1,validate__12581__auto____$1,G__22462__$1,output_checker22461__$1,output_schema22458__$1,input_schema22459__$1,thing_view__$1,ufv____$1,G__22463__$1,input_checker22460__$1,meta22471){
return (new example.main.t22470(page_state__$1,owner__$1,validate__12581__auto____$1,G__22462__$1,output_checker22461__$1,output_schema22458__$1,input_schema22459__$1,thing_view__$1,ufv____$1,G__22463__$1,input_checker22460__$1,meta22471));
});})(validate__12581__auto__,ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

}

return (new example.main.t22470(page_state,owner,validate__12581__auto__,G__22462,output_checker22461_22478,output_schema22458_22475,input_schema22459_22476,thing_view,ufv___22474,G__22463,input_checker22460_22477,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22482 = (function (){var G__22473 = o__12584__auto__;
return (output_checker22461_22478.cljs$core$IFn$_invoke$arity$1 ? output_checker22461_22478.cljs$core$IFn$_invoke$arity$1(G__22473) : output_checker22461_22478.call(null,G__22473));
})();
if(cljs.core.truth_(temp__4126__auto___22482)){
var error__12583__auto___22483 = temp__4126__auto___22482;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22483], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22483,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22458_22475,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22474,output_schema22458_22475,input_schema22459_22476,input_checker22460_22477,output_checker22461_22478))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22458_22475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22459_22476], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__20832__auto__);
});
var __GT_thing_view__2 = (function (cursor__20832__auto__,m22457){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__20832__auto__,m22457);
});
__GT_thing_view = function(cursor__20832__auto__,m22457){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__20832__auto__,m22457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22533 = schema.utils.use_fn_validation;
var output_schema22485_22534 = schema.core.Any;
var input_schema22486_22535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22487_22536 = schema.core.checker(input_schema22486_22535);
var output_checker22488_22537 = schema.core.checker(output_schema22485_22534);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function app_view(G__22489,G__22490){
var validate__12581__auto__ = ufv___22533.get_cell();
if(cljs.core.truth_(validate__12581__auto__)){
var args__12582__auto___22538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22489,G__22490], null);
var temp__4126__auto___22539 = (function (){var G__22512 = args__12582__auto___22538;
return (input_checker22487_22536.cljs$core$IFn$_invoke$arity$1 ? input_checker22487_22536.cljs$core$IFn$_invoke$arity$1(G__22512) : input_checker22487_22536.call(null,G__22512));
})();
if(cljs.core.truth_(temp__4126__auto___22539)){
var error__12583__auto___22540 = temp__4126__auto___22539;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22540], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22540,cljs.core.constant$keyword$66,args__12582__auto___22538,cljs.core.constant$keyword$67,input_schema22486_22535,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12584__auto__ = (function (){var app_state = G__22489;
var owner = G__22490;
while(true){
if(typeof example.main.t22513 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22513 = (function (app_view,owner,output_schema22485,validate__12581__auto__,input_checker22487,G__22490,app_state,input_schema22486,G__22489,output_checker22488,ufv__,meta22514){
this.app_view = app_view;
this.owner = owner;
this.output_schema22485 = output_schema22485;
this.validate__12581__auto__ = validate__12581__auto__;
this.input_checker22487 = input_checker22487;
this.G__22490 = G__22490;
this.app_state = app_state;
this.input_schema22486 = input_schema22486;
this.G__22489 = G__22489;
this.output_checker22488 = output_checker22488;
this.ufv__ = ufv__;
this.meta22514 = meta22514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22513.prototype.om$core$IDisplayName$ = true;

example.main.t22513.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

example.main.t22513.prototype.om$core$IRender$ = true;

example.main.t22513.prototype.om$core$IRender$render$arity$1 = ((function (validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22520 = null;
var G__22521 = (function (){var G__22525 = null;
var G__22526 = "Example form ";
var G__22527 = (function (){var G__22528 = {"href": "https://github.com/metosin/lomakkeet/blob/master/example/example/main.cljs"};
var G__22529 = "(Code)";
return React.DOM.a(G__22528,G__22529);
})();
return React.DOM.h1(G__22525,G__22526,G__22527);
})();
var G__22522 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
var G__22523 = (function (){var G__22530 = null;
var G__22531 = "Om state tree";
return React.DOM.h1(G__22530,G__22531);
})();
var G__22524 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state));
return React.DOM.div(G__22520,G__22521,G__22522,G__22523,G__22524);
});})(validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

example.main.t22513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function (_22515){
var self__ = this;
var _22515__$1 = this;
return self__.meta22514;
});})(validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

example.main.t22513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function (_22515,meta22514__$1){
var self__ = this;
var _22515__$1 = this;
return (new example.main.t22513(self__.app_view,self__.owner,self__.output_schema22485,self__.validate__12581__auto__,self__.input_checker22487,self__.G__22490,self__.app_state,self__.input_schema22486,self__.G__22489,self__.output_checker22488,self__.ufv__,meta22514__$1));
});})(validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

example.main.t22513.cljs$lang$type = true;

example.main.t22513.cljs$lang$ctorStr = "example.main/t22513";

example.main.t22513.cljs$lang$ctorPrWriter = ((function (validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"example.main/t22513");
});})(validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

example.main.__GT_t22513 = ((function (validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537){
return (function __GT_t22513(app_view__$1,owner__$1,output_schema22485__$1,validate__12581__auto____$1,input_checker22487__$1,G__22490__$1,app_state__$1,input_schema22486__$1,G__22489__$1,output_checker22488__$1,ufv____$1,meta22514){
return (new example.main.t22513(app_view__$1,owner__$1,output_schema22485__$1,validate__12581__auto____$1,input_checker22487__$1,G__22490__$1,app_state__$1,input_schema22486__$1,G__22489__$1,output_checker22488__$1,ufv____$1,meta22514));
});})(validate__12581__auto__,ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

}

return (new example.main.t22513(app_view,owner,output_schema22485_22534,validate__12581__auto__,input_checker22487_22536,G__22490,app_state,input_schema22486_22535,G__22489,output_checker22488_22537,ufv___22533,null));
break;
}
})();
if(cljs.core.truth_(validate__12581__auto__)){
var temp__4126__auto___22541 = (function (){var G__22532 = o__12584__auto__;
return (output_checker22488_22537.cljs$core$IFn$_invoke$arity$1 ? output_checker22488_22537.cljs$core$IFn$_invoke$arity$1(G__22532) : output_checker22488_22537.call(null,G__22532));
})();
if(cljs.core.truth_(temp__4126__auto___22541)){
var error__12583__auto___22542 = temp__4126__auto___22541;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12583__auto___22542], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12583__auto___22542,cljs.core.constant$keyword$66,o__12584__auto__,cljs.core.constant$keyword$67,output_schema22485_22534,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12584__auto__;
});})(ufv___22533,output_schema22485_22534,input_schema22486_22535,input_checker22487_22536,output_checker22488_22537))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22485_22534,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22486_22535], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20832__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20832__auto__);
});
var __GT_app_view__2 = (function (cursor__20832__auto__,m22484){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20832__auto__,m22484);
});
__GT_app_view = function(cursor__20832__auto__,m22484){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20832__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20832__auto__,m22484);
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
