// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.core');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.coerce');
goog.require('schema.utils');
goog.require('schema_tools.core');
goog.require('lomakkeet.util');
lomakkeet.core._STAR_coercion_matcher_STAR_ = schema.coerce.string_coercion_matcher;
/**
 * 
 */
lomakkeet.core.FormState = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema.core.schema_with_name(new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$value,schema.core.Any,cljs.core.constant$keyword$initial_DASH_value,schema.core.Any,cljs.core.constant$keyword$errors,schema.core.Any,cljs.core.constant$keyword$not_DASH_pristine,schema.core.Any,cljs.core.constant$keyword$schema,schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null)),cljs.core.assoc,cljs.core.constant$keyword$ns,new cljs.core.Symbol(null,"lomakkeet.core","lomakkeet.core",-436480680,null));
lomakkeet.core.__GT_fs = (function lomakkeet$core$__GT_fs(){
var G__17498 = arguments.length;
switch (G__17498) {
case 1:
return lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$2(value,null);
});

lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$initial_DASH_value,value,cljs.core.constant$keyword$errors,(cljs.core.truth_(schema__$1)?schema.core.check(schema__$1,value):null),cljs.core.constant$keyword$not_DASH_pristine,null,cljs.core.constant$keyword$schema,schema__$1], null);
});

lomakkeet.core.__GT_fs.cljs$lang$maxFixedArity = 2;
/**
 * Reset the value of form to initial value.
 */
lomakkeet.core.reset = (function lomakkeet$core$reset(fs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fs,cljs.core.constant$keyword$value,cljs.core.constant$keyword$initial_DASH_value.cljs$core$IFn$_invoke$arity$1(fs));
});
/**
 * Commit the changes in value to the initial-value of the form.
 */
lomakkeet.core.commit = (function lomakkeet$core$commit(fs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fs,cljs.core.constant$keyword$initial_DASH_value,cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(fs));
});
lomakkeet.core.validate = (function lomakkeet$core$validate(fs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fs,cljs.core.constant$keyword$errors,(function (){var temp__4423__auto__ = cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(temp__4423__auto__)){
var schema__$1 = temp__4423__auto__;
return schema.core.check(schema__$1,cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(fs));
} else {
return null;
}
})());
});
/**
 * Set a new value to form. This will trigger a schema validation for the value.
 * Doesn't trigger commit.
 */
lomakkeet.core.save = (function lomakkeet$core$save(fs,value){
return lomakkeet.core.validate(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fs,cljs.core.constant$keyword$value,value));
});
/**
 * Use a function to set a new value to form. This changes both the value and the initial value.
 * The function is called with the value as the first parameter and rest of arguemtns
 * are passed to the function (Like update-in).
 */
lomakkeet.core.update = (function lomakkeet$core$update(){
var argseq__5378__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return lomakkeet.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5378__auto__);
});

lomakkeet.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (fs,f,args){
var value = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(fs);
var new_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,value,args);
return lomakkeet.core.save(fs,new_value);
});

lomakkeet.core.update.cljs$lang$maxFixedArity = (2);

lomakkeet.core.update.cljs$lang$applyTo = (function (seq17500){
var G__17501 = cljs.core.first(seq17500);
var seq17500__$1 = cljs.core.next(seq17500);
var G__17502 = cljs.core.first(seq17500__$1);
var seq17500__$2 = cljs.core.next(seq17500__$1);
return lomakkeet.core.update.cljs$core$IFn$_invoke$arity$variadic(G__17501,G__17502,seq17500__$2);
});
/**
 * Return either coerced or the original value if the coercion failed.
 */
lomakkeet.core.coerce = (function lomakkeet$core$coerce(schema__$1,value){
if(cljs.core.truth_(schema__$1)){
var coerced = schema.coerce.coercer(schema__$1,lomakkeet.core._STAR_coercion_matcher_STAR_).call(null,value);
if(cljs.core.truth_(schema.utils.error_QMARK_(coerced))){
return value;
} else {
return coerced;
}
} else {
return value;
}
});
lomakkeet.core.extra_validation = (function lomakkeet$core$extra_validation(fs,validation_fn){
if(cljs.core.truth_(validation_fn)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$errors], null),cljs.core.merge,(function (){var G__17504 = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(fs);
return (validation_fn.cljs$core$IFn$_invoke$arity$1 ? validation_fn.cljs$core$IFn$_invoke$arity$1(G__17504) : validation_fn.call(null,G__17504));
})());
} else {
return fs;
}
});
/**
 * Takes fs, schema, vector of keywords and new value.
 * 
 * If new value is nil, schema is checked if value is in optional-key,
 * value it is, instead of setting value to nil, the key is dissoced.
 */
lomakkeet.core.change_value = (function lomakkeet$core$change_value(){
var argseq__5378__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5378__auto__);
});

lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$variadic = (function (fs,ks,value,p__17509){
var vec__17510 = p__17509;
var validation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17510,(0),null);
var schema__$1 = cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(fs);
var value__$1 = lomakkeet.core.coerce(schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2(schema__$1,ks),value);
return lomakkeet.core.extra_validation(lomakkeet.core.validate(((((cljs.core.seq_QMARK_(value__$1)) && (cljs.core.seq(value__$1))) || (!((value__$1 == null))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$value], null),cljs.core.assoc_in,ks,value__$1):(function (){var parent_schema = schema_tools.core.get_in.cljs$core$IFn$_invoke$arity$2(schema__$1,cljs.core.butlast(ks));
if(cljs.core.contains_QMARK_(parent_schema,schema.core.optional_key(cljs.core.last(ks)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$value], null),lomakkeet.util.dissoc_in,ks);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$value], null),cljs.core.assoc_in,ks,value__$1);
}
})())),validation_fn);
});

lomakkeet.core.change_value.cljs$lang$maxFixedArity = (3);

lomakkeet.core.change_value.cljs$lang$applyTo = (function (seq17505){
var G__17506 = cljs.core.first(seq17505);
var seq17505__$1 = cljs.core.next(seq17505);
var G__17507 = cljs.core.first(seq17505__$1);
var seq17505__$2 = cljs.core.next(seq17505__$1);
var G__17508 = cljs.core.first(seq17505__$2);
var seq17505__$3 = cljs.core.next(seq17505__$2);
return lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$variadic(G__17506,G__17507,G__17508,seq17505__$3);
});
/**
 * Check if form-state is dirty, meaning that the value and the initial value are not identitcal.
 */
lomakkeet.core.dirty_QMARK_ = (function lomakkeet$core$dirty_QMARK_(fs){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(fs),cljs.core.constant$keyword$initial_DASH_value.cljs$core$IFn$_invoke$arity$1(fs));
});
/**
 * Check if form has any errors.
 */
lomakkeet.core.errors_QMARK_ = (function lomakkeet$core$errors_QMARK_(fs){
return cljs.core.seq(cljs.core.constant$keyword$errors.cljs$core$IFn$_invoke$arity$1(fs));
});
