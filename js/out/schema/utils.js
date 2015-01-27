// Compiled by ClojureScript 0.0-2727 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
* Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
* schema need not depend on plumbing.
* @param {...*} var_args
*/
schema.utils.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3758__auto__ = m;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4514__auto__ = (function iter__36638(s__36639){
return (new cljs.core.LazySeq(null,(function (){
var s__36639__$1 = s__36639;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__36639__$1);
if(temp__4126__auto__){
var s__36639__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36639__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__36639__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__36641 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__36640 = (0);
while(true){
if((i__36640 < size__4513__auto__)){
var vec__36646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__36640);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36646,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__36641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__36648 = (i__36640 + (1));
i__36640 = G__36648;
continue;
} else {
var G__36649 = (i__36640 + (1));
i__36640 = G__36649;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36641),iter__36638(cljs.core.chunk_rest(s__36639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36641),null);
}
} else {
var vec__36647 = cljs.core.first(s__36639__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36638(cljs.core.rest(s__36639__$2)));
} else {
var G__36650 = cljs.core.rest(s__36639__$2);
s__36639__$1 = G__36650;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__36651__i = 0, G__36651__a = new Array(arguments.length -  1);
while (G__36651__i < G__36651__a.length) {G__36651__a[G__36651__i] = arguments[G__36651__i + 1]; ++G__36651__i;}
  kvs = new cljs.core.IndexedSeq(G__36651__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__36652){
var m = cljs.core.first(arglist__36652);
var kvs = cljs.core.rest(arglist__36652);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
schema.utils.type_of = (function type_of(x){
return typeof x;
});
/**
* What class can we associate the fn schema with? In Clojure use the class of the fn; in
* cljs just use the fn itself.
*/
schema.utils.fn_schema_bearer = (function fn_schema_bearer(f){
return f;
});
/**
* @param {...*} var_args
*/
schema.utils.format_STAR_ = (function() { 
var format_STAR___delegate = function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__36653__i = 0, G__36653__a = new Array(arguments.length -  1);
while (G__36653__i < G__36653__a.length) {G__36653__a[G__36653__i] = arguments[G__36653__i + 1]; ++G__36653__i;}
  args = new cljs.core.IndexedSeq(G__36653__a,0);
} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__36654){
var fmt = cljs.core.first(arglist__36654);
var args = cljs.core.rest(arglist__36654);
return format_STAR___delegate(fmt,args);
});
format_STAR_.cljs$core$IFn$_invoke$arity$variadic = format_STAR___delegate;
return format_STAR_;
})()
;
/**
* Provide a descriptive short name for a value.
*/
schema.utils.value_name = (function value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
* Identity version of memoize, because many schemas are records, and records
* don't cache their hash codes (at least in Clojure 1.5.1).
* Not thread safe, and doesn't cache falsey values.
*/
schema.utils.memoize_id = (function memoize_id(f){
return cljs.core.memoize(f);
});
schema.utils.record_QMARK_ = (function record_QMARK_(x){
var G__36656 = x;
if(G__36656){
var bit__4439__auto__ = (G__36656.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4439__auto__) || (G__36656.cljs$core$IRecord$)){
return true;
} else {
if((!G__36656.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__36656);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__36656);
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__36657 = this$__$1;
return (schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(G__36657) : schema.utils.validation_error_explain.call(null,G__36657));
})(),writer,opts);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__36659 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__36659) : cljs.core.deref.call(null,G__36659));
})()),(function (){var or__3758__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__36660 = this$__$1;
return (schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(G__36660) : schema.utils.named_error_explain.call(null,G__36660));
})(),writer,opts);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k36662,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__36664 = (((k36662 instanceof cljs.core.Keyword))?k36662.fqn:null);
switch (G__36664) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36662,else__4364__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
var self__ = this;
var this__4356__auto____$1 = this;
var h__4179__auto__ = self__.__hash;
if(!((h__4179__auto__ == null))){
return h__4179__auto__;
} else {
var h__4179__auto____$1 = cljs.core.hash_imap(this__4356__auto____$1);
self__.__hash = h__4179__auto____$1;

return h__4179__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
var self__ = this;
var this__4357__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3746__auto__ = other__4358__auto__;
if(cljs.core.truth_(and__3746__auto__)){
return ((this__4357__auto____$1.constructor === other__4358__auto__.constructor)) && (cljs.core.equiv_map(this__4357__auto____$1,other__4358__auto__));
} else {
return and__3746__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$65,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__36661){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__36665 = cljs.core.keyword_identical_QMARK_;
var expr__36666 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__36668 = cljs.core.constant$keyword$65;
var G__36669 = expr__36666;
return (pred__36665.cljs$core$IFn$_invoke$arity$2 ? pred__36665.cljs$core$IFn$_invoke$arity$2(G__36668,G__36669) : pred__36665.call(null,G__36668,G__36669));
})())){
return (new schema.utils.ErrorContainer(G__36661,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__36661),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__36661){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__36661,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__36663){
return (new schema.utils.ErrorContainer(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(G__36663),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36663,cljs.core.constant$keyword$65),null));
});

/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"x","x",-555367584,null)], 0)))].join('')));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){
if(schema.utils.error_QMARK_(x)){
return x.error;
} else {
return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){
var temp__4124__auto__ = schema.utils.error_val(maybe_error);
if(cljs.core.truth_(temp__4124__auto__)){
var e = temp__4124__auto__;
return schema.utils.error(schema.utils.__GT_NamedError(name,e));
} else {
return maybe_error;
}
});
/**
* Build up a result by conjing values, producing an error if at least one
* sub-value returns an error.
*/
schema.utils.result_builder = (function result_builder(lift_to_error){
return (function conjer(m,e){
var temp__4124__auto__ = schema.utils.error_val(e);
if(cljs.core.truth_(temp__4124__auto__)){
var err = temp__4124__auto__;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3758__auto__ = schema.utils.error_val(m);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var G__36674 = m;
return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(G__36674) : lift_to_error.call(null,G__36674));
}
})(),err));
} else {
var temp__4124__auto____$1 = schema.utils.error_val(m);
if(cljs.core.truth_(temp__4124__auto____$1)){
var merr = temp__4124__auto____$1;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merr,null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function class_schema(klass){
return (klass["schema$utils$schema"]);
});

schema.utils.PSimpleCell = (function (){var obj36676 = {};
return obj36676;
})();

schema.utils.get_cell = (function get_cell(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (schema.utils.get_cell[(function (){var G__36680 = x__4402__auto__;
return goog.typeOf(G__36680);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (schema.utils.get_cell["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function set_cell(this$,x){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (schema.utils.set_cell[(function (){var G__36684 = x__4402__auto__;
return goog.typeOf(G__36684);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (schema.utils.set_cell["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});


/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function __GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
* Turn on run-time function validation for functions compiled when
* s/compile-fn-validation was true -- has no effect for functions compiled
* when it is false.
*/
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
