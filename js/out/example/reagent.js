// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('example.reagent');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('example.reagent.autocomplete');
goog.require('reagent.core');
goog.require('example.reagent.dev_tools');
goog.require('example.reagent.forms');
goog.require('reagent.ratom');
goog.require('example.domain');
goog.require('schema.coerce');
goog.require('lomakkeet.core');
goog.require('lomakkeet.reagent');
cljs.core.enable_console_print_BANG_();
if(typeof example.reagent.app_state !== 'undefined'){
} else {
example.reagent.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$example_DASH_page,(function (){var G__17177 = example.domain.empty_thing;
var G__17178 = example.domain.Thingie;
return (lomakkeet.reagent.__GT_fs.cljs$core$IFn$_invoke$arity$2 ? lomakkeet.reagent.__GT_fs.cljs$core$IFn$_invoke$arity$2(G__17177,G__17178) : lomakkeet.reagent.__GT_fs.call(null,G__17177,G__17178));
})()], null));
}
example.reagent.thing_view = (function example$reagent$thing_view(){
var form_data = reagent.core.cursor(example.reagent.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$example_DASH_page], null));
var form = lomakkeet.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic(form_data,cljs.core.array_seq([cljs.core.constant$keyword$opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$size,(6)], null)], 0));
var form_value = reagent.ratom.make_reaction(((function (form_data,form){
return (function (){
return cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1((function (){var G__17182 = form_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17182) : cljs.core.deref.call(null,G__17182));
})());
});})(form_data,form))
);
var start = reagent.ratom.make_reaction(((function (form_data,form,form_value){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17183 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17183) : cljs.core.deref.call(null,G__17183));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dates,cljs.core.constant$keyword$start], null));
});})(form_data,form,form_value))
);
var end = reagent.ratom.make_reaction(((function (form_data,form,form_value,start){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17184 = form_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17184) : cljs.core.deref.call(null,G__17184));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dates,cljs.core.constant$keyword$end], null));
});})(form_data,form,form_value,start))
);
return ((function (form_data,form,form_value,start,end){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$tasks,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Basic fields",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$btn_DASH_toolbar$pull_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.forms.form_status,form], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.forms.cancel_btn,form], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.forms.save_btn,form], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form$column_DASH_content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.input,form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$name], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.input,form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$email], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.textarea,form,"Textarea",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$desc], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.select,form,"Select",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$gender], null),example.domain.genders], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_sm_DASH_6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Datepicker (using ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"https://github.com/dbushell/Pikaday"], null),"Pikaday"], null),")"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_sm_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Filepicker"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.date,form,"Start date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dates,cljs.core.constant$keyword$start], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$size,(3),cljs.core.constant$keyword$min_DASH_date,cljs_time.core.today(),cljs.core.constant$keyword$max_DASH_date,end,cljs.core.constant$keyword$help_DASH_text,"Today or later. Before end date."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.date,form,"End date",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dates,cljs.core.constant$keyword$end], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$size,(3),cljs.core.constant$keyword$min_DASH_date,start,cljs.core.constant$keyword$help_DASH_text,"Optional. After start date."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.file,form,"File",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$file], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$help_DASH_text,"Under 1MB"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_sm_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Autocomplete"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.autocomplete.country_select,form,"Country",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$country], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$size,(3)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.complete,form,"Select multiple",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$reasons], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$items,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$a,"A",cljs.core.constant$keyword$b,"B",cljs.core.constant$keyword$c,"C"], null),cljs.core.constant$keyword$multiple,true,cljs.core.constant$keyword$size,(3)], null)], null)], null)], null)], null);
});
;})(form_data,form,form_value,start,end))
});
if(typeof example.reagent.tree_state !== 'undefined'){
} else {
example.reagent.tree_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$example_DASH_page,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dates,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$initial_DASH_value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dates,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.constant$keyword$errors,cljs.core.PersistentArrayMap.EMPTY], null)], null));
}
example.reagent.dev_view = (function example$reagent$dev_view(app_state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$om_DASH_dev_DASH_tools_DASH_state_DASH_tree,example.reagent.dev_tools.tree(example.reagent.tree_state,(function (){var G__17187 = example.reagent.tree_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17187) : cljs.core.deref.call(null,G__17187));
})(),(function (){var G__17188 = app_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17188) : cljs.core.deref.call(null,G__17188));
})(),cljs.core.PersistentVector.EMPTY)], null);
});
});
example.reagent.app_view = (function example$reagent$app_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Example Reagent form ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"https://github.com/metosin/lomakkeet/blob/master/example/src/cljs/example/main.cljs"], null),"(Code)"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.thing_view], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Reagent state"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.dev_view,example.reagent.app_state], null)], null);
});
example.reagent.restart_BANG_ = (function example$reagent$restart_BANG_(){
var temp__4421__auto__ = (function (){var G__17190 = "reagent";
return document.getElementById(G__17190);
})();
if(cljs.core.truth_(temp__4421__auto__)){
var root = temp__4421__auto__;
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.reagent.app_view], null),root);
} else {
return null;
}
});
example.reagent.restart_BANG_();
