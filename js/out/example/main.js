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
example.main.email_pattern = (new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$","i"));
/**
* 
*/
example.main.Thingie = schema.core.schema_with_name(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$80,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null))], 0)),cljs.core.constant$keyword$232,schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.Str,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (p1__21899_SHARP_){
return cljs.core.re_find(example.main.email_pattern,p1__21899_SHARP_);
}),new cljs.core.Symbol(null,"email","email",-1238619063,null))], 0)),cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$216,example.main.LocalDate,cljs.core.constant$keyword$217,schema.core.maybe(example.main.LocalDate)], null),cljs.core.constant$keyword$233,schema.core.Str,cljs.core.constant$keyword$12,schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([File,schema.core.pred.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.truth_(f)){
return (f.size < (1000000));
} else {
return null;
}
}),new cljs.core.Symbol(null,"large-file","large-file",1285636257,null))], 0))),cljs.core.constant$keyword$234,schema.core.Str,cljs.core.constant$keyword$235,schema.core.Keyword], null),new cljs.core.Symbol(null,"Thingie","Thingie",537507576,null));
example.main.ThingieDates = (function ThingieDates(p__21901){
var map__21904 = p__21901;
var map__21904__$1 = ((cljs.core.seq_QMARK_(map__21904))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21904):map__21904);
var map__21905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21904__$1,cljs.core.constant$keyword$193);
var map__21905__$1 = ((cljs.core.seq_QMARK_(map__21905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21905):map__21905);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,cljs.core.constant$keyword$217);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,cljs.core.constant$keyword$216);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(example.main.Thingie,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$216], null),((function (map__21904,map__21904__$1,map__21905,map__21905__$1,end,start){
return (function (p1__21900_SHARP_){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__21900_SHARP_,example.main.DateRange(cljs_time.core.today(),end)], 0));
});})(map__21904,map__21904__$1,map__21905,map__21905__$1,end,start))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$217], null),schema.core.maybe(schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([example.main.LocalDate,example.main.DateRange(start,null)], 0))));
});
example.main.empty_thing = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$80,"Luke Skywalker",cljs.core.constant$keyword$232,"luke@rebel.gov",cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$216,cljs_time.core.today(),cljs.core.constant$keyword$217,null], null),cljs.core.constant$keyword$233,"",cljs.core.constant$keyword$12,null,cljs.core.constant$keyword$234,"FI",cljs.core.constant$keyword$235,cljs.core.constant$keyword$236], null);
example.main.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$192,lomakkeet.fields.__GT_form_state.cljs$core$IFn$_invoke$arity$2(example.main.empty_thing,example.main.Thingie)], null);
if(typeof example.main.state !== 'undefined'){
} else {
example.main.state = (function (){var G__21906 = example.main.initial_state;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21906) : cljs.core.atom.call(null,G__21906));
})();
}
example.main.render_thingie_form = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema21910 = schema.core.Any;
var input_schema21911 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,cljs.core.constant$keyword$217,schema.core.Any,cljs.core.constant$keyword$216,schema.core.Any], true, false)], true, false),cljs.core.constant$keyword$147,schema.core.Any,cljs.core.constant$keyword$143,schema.core.Any,cljs.core.constant$keyword$153,schema.core.Any], true, false),new cljs.core.Symbol(null,"map21907","map21907",-1003741632,null))], null);
var input_checker21912 = schema.core.checker(input_schema21911);
var output_checker21913 = schema.core.checker(output_schema21910);
return schema.core.schematize_fn(((function (ufv__,output_schema21910,input_schema21911,input_checker21912,output_checker21913){
return (function render_thingie_form(G__21914){
var validate__12088__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21914], null);
var temp__4126__auto___22024 = (function (){var G__21969 = args__12089__auto___22023;
return (input_checker21912.cljs$core$IFn$_invoke$arity$1 ? input_checker21912.cljs$core$IFn$_invoke$arity$1(G__21969) : input_checker21912.call(null,G__21969));
})();
if(cljs.core.truth_(temp__4126__auto___22024)){
var error__12090__auto___22025 = temp__4126__auto___22024;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22025], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22025,cljs.core.constant$keyword$66,args__12089__auto___22023,cljs.core.constant$keyword$67,input_schema21911,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var map21907 = G__21914;
while(true){
if(cljs.core.map_QMARK_(map21907)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("fnk called on non-map: %s",cljs.core.array_seq([map21907], 0))));
}

var form_state = plumbing.fnk.schema.safe_get(map21907,cljs.core.constant$keyword$153,cljs.core.PersistentVector.EMPTY);
var form = plumbing.fnk.schema.safe_get(map21907,cljs.core.constant$keyword$143,cljs.core.PersistentVector.EMPTY);
var ch = plumbing.fnk.schema.safe_get(map21907,cljs.core.constant$keyword$147,cljs.core.PersistentVector.EMPTY);
var map21908 = plumbing.fnk.schema.safe_get(map21907,cljs.core.constant$keyword$66,cljs.core.PersistentVector.EMPTY);
var map21909 = plumbing.fnk.schema.safe_get(map21908,cljs.core.constant$keyword$193,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var start = plumbing.fnk.schema.safe_get(map21909,cljs.core.constant$keyword$216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$193], null));
var end = plumbing.fnk.schema.safe_get(map21909,cljs.core.constant$keyword$217,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66,cljs.core.constant$keyword$193], null));
var G__21980 = {"className": "tasks"};
var G__21981 = (function (){var G__21983 = null;
var G__21984 = "Basic fields";
var G__21985 = (function (){var attrs21970 = example.forms.form_status(form_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21970))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn-toolbar","pull-right"], null)], null),attrs21970], 0))):{"className": "btn-toolbar pull-right"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21970))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21970),sablono.interpreter.interpret(example.forms.cancel_btn(form_state,ch)),sablono.interpreter.interpret(example.forms.save_btn(form_state,ch))], null))));
})();
return React.DOM.h2(G__21983,G__21984,G__21985);
})();
var G__21982 = (function (){var G__21986 = {"className": "column-content"};
var G__21987 = (function (){var attrs21971 = lomakkeet.fields.input(form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21971))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21971], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21971))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21971),sablono.interpreter.interpret(lomakkeet.fields.input(form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232], null)))], null))));
})();
var G__21988 = (function (){var attrs21972 = lomakkeet.fields.textarea(form,"Textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21972))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21972], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21972))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.fields.select(form,"Select",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$237,"Male",cljs.core.constant$keyword$238,"Female",cljs.core.constant$keyword$236,"Other"], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21972),sablono.interpreter.interpret(lomakkeet.fields.select(form,"Select",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$237,"Male",cljs.core.constant$keyword$238,"Female",cljs.core.constant$keyword$236,"Other"], null)))], null))));
})();
var G__21989 = (function (){var G__21992 = {"className": "row"};
var G__21993 = (function (){var G__21995 = {"className": "col-sm-6"};
var G__21996 = (function (){var G__21997 = null;
var G__21998 = "Datepicker (using ";
var G__21999 = (function (){var G__22001 = {"href": "https://github.com/dbushell/Pikaday"};
var G__22002 = "Pikaday";
return React.DOM.a(G__22001,G__22002);
})();
var G__22000 = ")";
return React.DOM.h2(G__21997,G__21998,G__21999,G__22000);
})();
return React.DOM.div(G__21995,G__21996);
})();
var G__21994 = (function (){var G__22003 = {"className": "col-sm-6"};
var G__22004 = (function (){var G__22005 = null;
var G__22006 = "Filepicker";
return React.DOM.h2(G__22005,G__22006);
})();
return React.DOM.div(G__22003,G__22004);
})();
return React.DOM.div(G__21992,G__21993,G__21994);
})();
var G__21990 = (function (){var attrs21975 = lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"Start date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$216], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,cljs_time.core.today(),cljs.core.constant$keyword$198,end], null),cljs.core.constant$keyword$150,"Today or later. Before end date."], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21975))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row"], null)], null),attrs21975], 0))):{"className": "row"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21975))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$217], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$205,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$197,start], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0))),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21975),sablono.interpreter.interpret(lomakkeet.datepicker.date.cljs$core$IFn$_invoke$arity$variadic(form,"End date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$217], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$151,(3),cljs.core.constant$keyword$205,true,cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$197,start], null),cljs.core.constant$keyword$150,"Optional. After start date."], null)], 0))),sablono.interpreter.interpret(lomakkeet.file.file.cljs$core$IFn$_invoke$arity$variadic(form,"File",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$12], null),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$150,"Under 1MB"], null)], 0)))], null))));
})();
var G__21991 = (function (){var G__22007 = {"className": "row"};
var G__22008 = (function (){var G__22011 = {"className": "col-sm-12"};
var G__22012 = (function (){var G__22013 = null;
var G__22014 = "Autocomplete";
return React.DOM.h2(G__22013,G__22014);
})();
return React.DOM.div(G__22011,G__22012);
})();
var G__22009 = sablono.interpreter.interpret(example.autocomplete.country_select(form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234], null)));
var G__22010 = (function (){var G__22015 = {"className": "form-group col-sm-6"};
var G__22016 = (function (){var G__22018 = null;
var G__22019 = "Autocomplete (tree):";
return React.DOM.label(G__22018,G__22019);
})();
var G__22017 = (function (){var G__22020 = {"className": "form-control-static"};
var G__22021 = "TODO";
return React.DOM.p(G__22020,G__22021);
})();
return React.DOM.div(G__22015,G__22016,G__22017);
})();
return React.DOM.div(G__22007,G__22008,G__22009,G__22010);
})();
return React.DOM.form(G__21986,G__21987,G__21988,G__21989,G__21990,G__21991);
})();
return React.DOM.div(G__21980,G__21981,G__21982);
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22026 = (function (){var G__22022 = o__12091__auto__;
return (output_checker21913.cljs$core$IFn$_invoke$arity$1 ? output_checker21913.cljs$core$IFn$_invoke$arity$1(G__22022) : output_checker21913.call(null,G__22022));
})();
if(cljs.core.truth_(temp__4126__auto___22026)){
var error__12090__auto___22027 = temp__4126__auto___22026;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"render-thingie-form","render-thingie-form",1941681563,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22027], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22027,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema21910,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv__,output_schema21910,input_schema21911,input_checker21912,output_checker21913))
,schema.core.make_fn_schema(output_schema21910,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21911], null)));
})();
example.main.save_thing = (function save_thing(state,evt){
return lomakkeet.fields.save_form(state,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(state));
});

var ufv___22045 = schema.utils.use_fn_validation;
var output_schema22029_22046 = schema.core.Any;
var input_schema22030_22047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"page-state","page-state",-1430783485,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22031_22048 = schema.core.checker(input_schema22030_22047);
var output_checker22032_22049 = schema.core.checker(output_schema22029_22046);
/**
* Inputs: [page-state owner]
*/
example.main.thing_view = ((function (ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function thing_view(G__22033,G__22034){
var validate__12088__auto__ = ufv___22045.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22033,G__22034], null);
var temp__4126__auto___22051 = (function (){var G__22040 = args__12089__auto___22050;
return (input_checker22031_22048.cljs$core$IFn$_invoke$arity$1 ? input_checker22031_22048.cljs$core$IFn$_invoke$arity$1(G__22040) : input_checker22031_22048.call(null,G__22040));
})();
if(cljs.core.truth_(temp__4126__auto___22051)){
var error__12090__auto___22052 = temp__4126__auto___22051;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22052], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22052,cljs.core.constant$keyword$66,args__12089__auto___22050,cljs.core.constant$keyword$67,input_schema22030_22047,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var page_state = G__22033;
var owner = G__22034;
while(true){
if(typeof example.main.t22041 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22041 = (function (page_state,owner,validate__12088__auto__,G__22033,output_checker22032,G__22034,input_schema22030,input_checker22031,thing_view,ufv__,output_schema22029,meta22042){
this.page_state = page_state;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.G__22033 = G__22033;
this.output_checker22032 = output_checker22032;
this.G__22034 = G__22034;
this.input_schema22030 = input_schema22030;
this.input_checker22031 = input_checker22031;
this.thing_view = thing_view;
this.ufv__ = ufv__;
this.output_schema22029 = output_schema22029;
this.meta22042 = meta22042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22041.prototype.om$core$IDisplayName$ = true;

example.main.t22041.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function (_){
var self__ = this;
var ___$1 = this;
return "thing-view";
});})(validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

example.main.t22041.prototype.om$core$IRender$ = true;

example.main.t22041.prototype.om$core$IRender$render$arity$1 = ((function (validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(lomakkeet.fields.form,self__.page_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$239,example.forms.humanize_error], null),cljs.core.constant$keyword$164,((function (___$1,validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function (v){
return schema.core.check(example.main.ThingieDates(v),v);
});})(___$1,validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
,cljs.core.constant$keyword$166,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$196,example.main.save_thing], null),cljs.core.constant$keyword$165,example.main.render_thingie_form], null)], null)));
});})(validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

example.main.t22041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function (_22043){
var self__ = this;
var _22043__$1 = this;
return self__.meta22042;
});})(validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

example.main.t22041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function (_22043,meta22042__$1){
var self__ = this;
var _22043__$1 = this;
return (new example.main.t22041(self__.page_state,self__.owner,self__.validate__12088__auto__,self__.G__22033,self__.output_checker22032,self__.G__22034,self__.input_schema22030,self__.input_checker22031,self__.thing_view,self__.ufv__,self__.output_schema22029,meta22042__$1));
});})(validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

example.main.t22041.cljs$lang$type = true;

example.main.t22041.cljs$lang$ctorStr = "example.main/t22041";

example.main.t22041.cljs$lang$ctorPrWriter = ((function (validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"example.main/t22041");
});})(validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

example.main.__GT_t22041 = ((function (validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049){
return (function __GT_t22041(page_state__$1,owner__$1,validate__12088__auto____$1,G__22033__$1,output_checker22032__$1,G__22034__$1,input_schema22030__$1,input_checker22031__$1,thing_view__$1,ufv____$1,output_schema22029__$1,meta22042){
return (new example.main.t22041(page_state__$1,owner__$1,validate__12088__auto____$1,G__22033__$1,output_checker22032__$1,G__22034__$1,input_schema22030__$1,input_checker22031__$1,thing_view__$1,ufv____$1,output_schema22029__$1,meta22042));
});})(validate__12088__auto__,ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

}

return (new example.main.t22041(page_state,owner,validate__12088__auto__,G__22033,output_checker22032_22049,G__22034,input_schema22030_22047,input_checker22031_22048,thing_view,ufv___22045,output_schema22029_22046,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22053 = (function (){var G__22044 = o__12091__auto__;
return (output_checker22032_22049.cljs$core$IFn$_invoke$arity$1 ? output_checker22032_22049.cljs$core$IFn$_invoke$arity$1(G__22044) : output_checker22032_22049.call(null,G__22044));
})();
if(cljs.core.truth_(temp__4126__auto___22053)){
var error__12090__auto___22054 = temp__4126__auto___22053;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"thing-view","thing-view",1616890141,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22054], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22054,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22029_22046,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22045,output_schema22029_22046,input_schema22030_22047,input_checker22031_22048,output_checker22032_22049))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.thing_view),schema.core.make_fn_schema(output_schema22029_22046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22030_22047], null)));

example.main.__GT_thing_view = (function() {
var __GT_thing_view = null;
var __GT_thing_view__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cursor__20339__auto__);
});
var __GT_thing_view__2 = (function (cursor__20339__auto__,m22028){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.thing_view,cursor__20339__auto__,m22028);
});
__GT_thing_view = function(cursor__20339__auto__,m22028){
switch(arguments.length){
case 1:
return __GT_thing_view__1.call(this,cursor__20339__auto__);
case 2:
return __GT_thing_view__2.call(this,cursor__20339__auto__,m22028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_thing_view.cljs$core$IFn$_invoke$arity$1 = __GT_thing_view__1;
__GT_thing_view.cljs$core$IFn$_invoke$arity$2 = __GT_thing_view__2;
return __GT_thing_view;
})()
;

var ufv___22104 = schema.utils.use_fn_validation;
var output_schema22056_22105 = schema.core.Any;
var input_schema22057_22106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22058_22107 = schema.core.checker(input_schema22057_22106);
var output_checker22059_22108 = schema.core.checker(output_schema22056_22105);
/**
* Inputs: [app-state owner]
*/
example.main.app_view = ((function (ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function app_view(G__22060,G__22061){
var validate__12088__auto__ = ufv___22104.get_cell();
if(cljs.core.truth_(validate__12088__auto__)){
var args__12089__auto___22109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22060,G__22061], null);
var temp__4126__auto___22110 = (function (){var G__22083 = args__12089__auto___22109;
return (input_checker22058_22107.cljs$core$IFn$_invoke$arity$1 ? input_checker22058_22107.cljs$core$IFn$_invoke$arity$1(G__22083) : input_checker22058_22107.call(null,G__22083));
})();
if(cljs.core.truth_(temp__4126__auto___22110)){
var error__12090__auto___22111 = temp__4126__auto___22110;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22111], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22111,cljs.core.constant$keyword$66,args__12089__auto___22109,cljs.core.constant$keyword$67,input_schema22057_22106,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

var o__12091__auto__ = (function (){var app_state = G__22060;
var owner = G__22061;
while(true){
if(typeof example.main.t22084 !== 'undefined'){
} else {

/**
* @constructor
*/
example.main.t22084 = (function (app_view,owner,validate__12088__auto__,G__22060,G__22061,output_checker22059,output_schema22056,input_schema22057,app_state,input_checker22058,ufv__,meta22085){
this.app_view = app_view;
this.owner = owner;
this.validate__12088__auto__ = validate__12088__auto__;
this.G__22060 = G__22060;
this.G__22061 = G__22061;
this.output_checker22059 = output_checker22059;
this.output_schema22056 = output_schema22056;
this.input_schema22057 = input_schema22057;
this.app_state = app_state;
this.input_checker22058 = input_checker22058;
this.ufv__ = ufv__;
this.meta22085 = meta22085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example.main.t22084.prototype.om$core$IDisplayName$ = true;

example.main.t22084.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app-view";
});})(validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

example.main.t22084.prototype.om$core$IRender$ = true;

example.main.t22084.prototype.om$core$IRender$render$arity$1 = ((function (validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22091 = null;
var G__22092 = (function (){var G__22096 = null;
var G__22097 = "Example form ";
var G__22098 = (function (){var G__22099 = {"href": "https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"};
var G__22100 = "(Code)";
return React.DOM.a(G__22099,G__22100);
})();
return React.DOM.h1(G__22096,G__22097,G__22098);
})();
var G__22093 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.thing_view,cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(self__.app_state)));
var G__22094 = (function (){var G__22101 = null;
var G__22102 = "Om state tree";
return React.DOM.h1(G__22101,G__22102);
})();
var G__22095 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(example.dev.state_view,self__.app_state));
return React.DOM.div(G__22091,G__22092,G__22093,G__22094,G__22095);
});})(validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

example.main.t22084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function (_22086){
var self__ = this;
var _22086__$1 = this;
return self__.meta22085;
});})(validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

example.main.t22084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function (_22086,meta22085__$1){
var self__ = this;
var _22086__$1 = this;
return (new example.main.t22084(self__.app_view,self__.owner,self__.validate__12088__auto__,self__.G__22060,self__.G__22061,self__.output_checker22059,self__.output_schema22056,self__.input_schema22057,self__.app_state,self__.input_checker22058,self__.ufv__,meta22085__$1));
});})(validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

example.main.t22084.cljs$lang$type = true;

example.main.t22084.cljs$lang$ctorStr = "example.main/t22084";

example.main.t22084.cljs$lang$ctorPrWriter = ((function (validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"example.main/t22084");
});})(validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

example.main.__GT_t22084 = ((function (validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108){
return (function __GT_t22084(app_view__$1,owner__$1,validate__12088__auto____$1,G__22060__$1,G__22061__$1,output_checker22059__$1,output_schema22056__$1,input_schema22057__$1,app_state__$1,input_checker22058__$1,ufv____$1,meta22085){
return (new example.main.t22084(app_view__$1,owner__$1,validate__12088__auto____$1,G__22060__$1,G__22061__$1,output_checker22059__$1,output_schema22056__$1,input_schema22057__$1,app_state__$1,input_checker22058__$1,ufv____$1,meta22085));
});})(validate__12088__auto__,ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

}

return (new example.main.t22084(app_view,owner,validate__12088__auto__,G__22060,G__22061,output_checker22059_22108,output_schema22056_22105,input_schema22057_22106,app_state,input_checker22058_22107,ufv___22104,null));
break;
}
})();
if(cljs.core.truth_(validate__12088__auto__)){
var temp__4126__auto___22112 = (function (){var G__22103 = o__12091__auto__;
return (output_checker22059_22108.cljs$core$IFn$_invoke$arity$1 ? output_checker22059_22108.cljs$core$IFn$_invoke$arity$1(G__22103) : output_checker22059_22108.call(null,G__22103));
})();
if(cljs.core.truth_(temp__4126__auto___22112)){
var error__12090__auto___22113 = temp__4126__auto___22112;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app-view","app-view",-1295186174,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12090__auto___22113], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error__12090__auto___22113,cljs.core.constant$keyword$66,o__12091__auto__,cljs.core.constant$keyword$67,output_schema22056_22105,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}
} else {
}

return o__12091__auto__;
});})(ufv___22104,output_schema22056_22105,input_schema22057_22106,input_checker22058_22107,output_checker22059_22108))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(example.main.app_view),schema.core.make_fn_schema(output_schema22056_22105,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22057_22106], null)));

example.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__20339__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(example.main.app_view,cursor__20339__auto__);
});
var __GT_app_view__2 = (function (cursor__20339__auto__,m22055){
return om.core.build.cljs$core$IFn$_invoke$arity$3(example.main.app_view,cursor__20339__auto__,m22055);
});
__GT_app_view = function(cursor__20339__auto__,m22055){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__20339__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__20339__auto__,m22055);
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
