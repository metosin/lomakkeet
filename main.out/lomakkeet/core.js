// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.core');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.coerce');
goog.require('schema.utils');
goog.require('schema_tools.core');
goog.require('lomakkeet.util');
lomakkeet.core.validation_error__GT_str = (function lomakkeet$core$validation_error__GT_str(v){
if((v instanceof schema.utils.ValidationError)){
return cljs.core.first.call(null,cljs.core.deref.call(null,v.expectation_delay));
} else {
return null;
}
});
/**
 * Should convert error from e.g. predicate to single word.
 * 
 * (not (required "")) => "required"
 */
lomakkeet.core.default_explain_error = (function lomakkeet$core$default_explain_error(error){
var temp__4423__auto__ = lomakkeet.core.validation_error__GT_str.call(null,error);
if(cljs.core.truth_(temp__4423__auto__)){
var v = temp__4423__auto__;
return cljs.core.pr_str.call(null,v);
} else {
return null;
}
});
/**
 * 
 */
lomakkeet.core.FormState = cljs.core.vary_meta.call(null,schema.core.schema_with_name.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),schema.core.Any,new cljs.core.Keyword(null,"errors","errors",-908790718),schema.core.Any,new cljs.core.Keyword(null,"not-pristine","not-pristine",623148367),schema.core.Any,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Symbol(null,"FormState","FormState",834878066,null)),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"lomakkeet.core","lomakkeet.core",-436480680,null));
lomakkeet.core.__GT_fs = (function lomakkeet$core$__GT_fs(var_args){
var args14149 = [];
var len__6046__auto___14152 = arguments.length;
var i__6047__auto___14153 = (0);
while(true){
if((i__6047__auto___14153 < len__6046__auto___14152)){
args14149.push((arguments[i__6047__auto___14153]));

var G__14154 = (i__6047__auto___14153 + (1));
i__6047__auto___14153 = G__14154;
continue;
} else {
}
break;
}

var G__14151 = args14149.length;
switch (G__14151) {
case 1:
return lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14149.length)].join('')));

}
});

lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$1 = (function (value){
return lomakkeet.core.__GT_fs.call(null,value,null);
});

lomakkeet.core.__GT_fs.cljs$core$IFn$_invoke$arity$2 = (function (value,schema__$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),value,new cljs.core.Keyword(null,"errors","errors",-908790718),(cljs.core.truth_(schema__$1)?schema.core.check.call(null,schema__$1,value):null),new cljs.core.Keyword(null,"not-pristine","not-pristine",623148367),null,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null);
});

lomakkeet.core.__GT_fs.cljs$lang$maxFixedArity = 2;
lomakkeet.core.value = (function lomakkeet$core$value(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14158 = arguments.length;
var i__6047__auto___14159 = (0);
while(true){
if((i__6047__auto___14159 < len__6046__auto___14158)){
args__6053__auto__.push((arguments[i__6047__auto___14159]));

var G__14160 = (i__6047__auto___14159 + (1));
i__6047__auto___14159 = G__14160;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return lomakkeet.core.value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

lomakkeet.core.value.cljs$core$IFn$_invoke$arity$variadic = (function (fs,kws){
return cljs.core.get_in.call(null,fs,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),kws));
});

lomakkeet.core.value.cljs$lang$maxFixedArity = (1);

lomakkeet.core.value.cljs$lang$applyTo = (function (seq14156){
var G__14157 = cljs.core.first.call(null,seq14156);
var seq14156__$1 = cljs.core.next.call(null,seq14156);
return lomakkeet.core.value.cljs$core$IFn$_invoke$arity$variadic(G__14157,seq14156__$1);
});
/**
 * Reset the value of form to initial value.
 */
lomakkeet.core.reset = (function lomakkeet$core$reset(fs){
return cljs.core.assoc.call(null,fs,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(fs));
});
/**
 * Commit the changes in value to the initial-value of the form.
 */
lomakkeet.core.commit = (function lomakkeet$core$commit(fs){
return cljs.core.assoc.call(null,fs,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fs));
});
lomakkeet.core.validate = (function lomakkeet$core$validate(fs){
return cljs.core.assoc.call(null,fs,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(temp__4423__auto__)){
var schema__$1 = temp__4423__auto__;
return schema.core.check.call(null,schema__$1,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fs));
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
return lomakkeet.core.validate.call(null,cljs.core.assoc.call(null,fs,new cljs.core.Keyword(null,"value","value",305978217),value));
});
/**
 * Use a function to set a new value to form. This changes both the value and the initial value.
 * The function is called with the value as the first parameter and rest of arguemtns
 * are passed to the function (Like update-in).
 */
lomakkeet.core.update = (function lomakkeet$core$update(var_args){
var args__6053__auto__ = [];
var len__6046__auto___14164 = arguments.length;
var i__6047__auto___14165 = (0);
while(true){
if((i__6047__auto___14165 < len__6046__auto___14164)){
args__6053__auto__.push((arguments[i__6047__auto___14165]));

var G__14166 = (i__6047__auto___14165 + (1));
i__6047__auto___14165 = G__14166;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return lomakkeet.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

lomakkeet.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (fs,f,args){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fs);
var new_value = cljs.core.apply.call(null,f,value,args);
return lomakkeet.core.save.call(null,fs,new_value);
});

lomakkeet.core.update.cljs$lang$maxFixedArity = (2);

lomakkeet.core.update.cljs$lang$applyTo = (function (seq14161){
var G__14162 = cljs.core.first.call(null,seq14161);
var seq14161__$1 = cljs.core.next.call(null,seq14161);
var G__14163 = cljs.core.first.call(null,seq14161__$1);
var seq14161__$2 = cljs.core.next.call(null,seq14161__$1);
return lomakkeet.core.update.cljs$core$IFn$_invoke$arity$variadic(G__14162,G__14163,seq14161__$2);
});
/**
 * Return either coerced or the original value if the coercion failed.
 */
lomakkeet.core.coerce = (function lomakkeet$core$coerce(schema__$1,value,coercion_matcher){
if(cljs.core.truth_(schema__$1)){
var coerced = schema.coerce.coercer.call(null,schema__$1,coercion_matcher).call(null,value);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,coerced))){
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
return cljs.core.update_in.call(null,fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.merge,validation_fn.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fs)));
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
lomakkeet.core.change_value = (function lomakkeet$core$change_value(var_args){
var args14167 = [];
var len__6046__auto___14173 = arguments.length;
var i__6047__auto___14174 = (0);
while(true){
if((i__6047__auto___14174 < len__6046__auto___14173)){
args14167.push((arguments[i__6047__auto___14174]));

var G__14175 = (i__6047__auto___14174 + (1));
i__6047__auto___14174 = G__14175;
continue;
} else {
}
break;
}

var G__14169 = args14167.length;
switch (G__14169) {
case 3:
return lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14167.length)].join('')));

}
});

lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$3 = (function (fs,ks,value){
return lomakkeet.core.change_value.call(null,fs,ks,value,null);
});

lomakkeet.core.change_value.cljs$core$IFn$_invoke$arity$4 = (function (fs,ks,value,p__14170){
var map__14171 = p__14170;
var map__14171__$1 = ((((!((map__14171 == null)))?((((map__14171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14171):map__14171);
var validation_fn = cljs.core.get.call(null,map__14171__$1,new cljs.core.Keyword(null,"validation-fn","validation-fn",484220738));
var coercion_matcher = cljs.core.get.call(null,map__14171__$1,new cljs.core.Keyword(null,"coercion-matcher","coercion-matcher",725015316),schema.coerce.string_coercion_matcher);
var schema__$1 = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(fs);
var value__$1 = lomakkeet.core.coerce.call(null,schema_tools.core.get_in.call(null,schema__$1,ks),value,coercion_matcher);
return lomakkeet.core.extra_validation.call(null,lomakkeet.core.validate.call(null,((((cljs.core.seq_QMARK_.call(null,value__$1)) && (cljs.core.seq.call(null,value__$1))) || (!((value__$1 == null))))?cljs.core.update_in.call(null,fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.assoc_in,ks,value__$1):(function (){var parent_schema = schema_tools.core.get_in.call(null,schema__$1,cljs.core.butlast.call(null,ks));
if(cljs.core.contains_QMARK_.call(null,parent_schema,schema.core.optional_key.call(null,cljs.core.last.call(null,ks)))){
return cljs.core.update_in.call(null,fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),lomakkeet.util.dissoc_in,ks);
} else {
return cljs.core.update_in.call(null,fs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.assoc_in,ks,value__$1);
}
})())),validation_fn);
});

lomakkeet.core.change_value.cljs$lang$maxFixedArity = 4;
/**
 * Check if form-state is dirty, meaning that the value and the initial value are not identitcal.
 */
lomakkeet.core.dirty_QMARK_ = (function lomakkeet$core$dirty_QMARK_(fs){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fs),new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(fs));
});
/**
 * Check if form has any errors.
 */
lomakkeet.core.errors_QMARK_ = (function lomakkeet$core$errors_QMARK_(fs){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(fs));
});

//# sourceMappingURL=core.js.map