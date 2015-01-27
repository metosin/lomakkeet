// Compiled by ClojureScript 0.0-2727 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('clojure.string');

schema.core.Schema = (function (){var obj35300 = {};
return obj35300;
})();

schema.core.walker = (function walker(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (schema.core.walker[(function (){var G__35304 = x__4402__auto__;
return goog.typeOf(G__35304);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (schema.core.walker["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

schema.core.explain = (function explain(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (schema.core.explain[(function (){var G__35308 = x__4402__auto__;
return goog.typeOf(G__35308);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (schema.core.explain["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});

/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){
var subschema_walker35310 = schema.core.subschema_walker;
try{schema.core.subschema_walker = sub_walker;

return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker35310;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){
var temp__4126__auto___35311 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4126__auto___35311)){
var error_35312 = temp__4126__auto___35311;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_35312], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$65,error_35312,cljs.core.constant$keyword$66,value,cljs.core.constant$keyword$67,schema__$1,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__3758__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__3758__auto__ = (this$ === x.constructor);
if(or__3758__auto__){
return or__3758__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var G__35313 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__35313) : class_walker.call(null,G__35313));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4124__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4124__auto__)){
var more_schema = temp__4124__auto__;
return schema.core.explain(more_schema);
} else {
return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35315,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35317 = (((k35315 instanceof cljs.core.Keyword))?k35315.fqn:null);
switch (G__35317) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35315,else__4364__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35314){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35318 = cljs.core.keyword_identical_QMARK_;
var expr__35319 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35321 = cljs.core.constant$keyword$70;
var G__35322 = expr__35319;
return (pred__35318.cljs$core$IFn$_invoke$arity$2 ? pred__35318.cljs$core$IFn$_invoke$arity$2(G__35321,G__35322) : pred__35318.call(null,G__35321,G__35322));
})())){
return (new schema.core.AnythingSchema(G__35314,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35314),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$70,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35314){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__35314,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__35316){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(G__35316),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35316,cljs.core.constant$keyword$70),null));
});

/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35325,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35327 = (((k35325 instanceof cljs.core.Keyword))?k35325.fqn:null);
switch (G__35327) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35325,else__4364__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.EqSchema{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$71,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35324){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35328 = cljs.core.keyword_identical_QMARK_;
var expr__35329 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35331 = cljs.core.constant$keyword$71;
var G__35332 = expr__35329;
return (pred__35328.cljs$core$IFn$_invoke$arity$2 ? pred__35328.cljs$core$IFn$_invoke$arity$2(G__35331,G__35332) : pred__35328.call(null,G__35331,G__35332));
})())){
return (new schema.core.EqSchema(G__35324,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35324),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$71,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35324){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__35324,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function __GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__35326){
return (new schema.core.EqSchema(cljs.core.constant$keyword$71.cljs$core$IFn$_invoke$arity$1(G__35326),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35326,cljs.core.constant$keyword$71),null));
});

/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
* @param {*} h
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35335,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35337 = (((k35335 instanceof cljs.core.Keyword))?k35335.fqn:null);
switch (G__35337) {
case "parent":
return self__.parent;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35335,else__4364__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Isa{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$72,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,null,cljs.core.constant$keyword$72,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35334){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35338 = cljs.core.keyword_identical_QMARK_;
var expr__35339 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35341 = cljs.core.constant$keyword$72;
var G__35342 = expr__35339;
return (pred__35338.cljs$core$IFn$_invoke$arity$2 ? pred__35338.cljs$core$IFn$_invoke$arity$2(G__35341,G__35342) : pred__35338.call(null,G__35341,G__35342));
})())){
return (new schema.core.Isa(G__35334,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35343 = cljs.core.constant$keyword$73;
var G__35344 = expr__35339;
return (pred__35338.cljs$core$IFn$_invoke$arity$2 ? pred__35338.cljs$core$IFn$_invoke$arity$2(G__35343,G__35344) : pred__35338.call(null,G__35343,G__35344));
})())){
return (new schema.core.Isa(self__.h,G__35334,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35334),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$72,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$73,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35334){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__35334,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__3758__auto__ = (function (){var and__3746__auto__ = self__.h;
if(cljs.core.truth_(and__3746__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__3746__auto__;
}
})();
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function __GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function map__GT_Isa(G__35336){
return (new schema.core.Isa(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(G__35336),cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(G__35336),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35336,cljs.core.constant$keyword$72,cljs.core.array_seq([cljs.core.constant$keyword$73], 0)),null));
});

/**
* A value that must be a child of parent.
*/
schema.core.isa = (function() {
var isa = null;
var isa__1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});
var isa__2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});
isa = function(h,parent){
switch(arguments.length){
case 1:
return isa__1.call(this,h);
case 2:
return isa__2.call(this,h,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa.cljs$core$IFn$_invoke$arity$1 = isa__1;
isa.cljs$core$IFn$_invoke$arity$2 = isa__2;
return isa;
})()
;

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35347,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35349 = (((k35347 instanceof cljs.core.Keyword))?k35347.fqn:null);
switch (G__35349) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35347,else__4364__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.EnumSchema{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$74,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35346){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35350 = cljs.core.keyword_identical_QMARK_;
var expr__35351 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35353 = cljs.core.constant$keyword$74;
var G__35354 = expr__35351;
return (pred__35350.cljs$core$IFn$_invoke$arity$2 ? pred__35350.cljs$core$IFn$_invoke$arity$2(G__35353,G__35354) : pred__35350.call(null,G__35353,G__35354));
})())){
return (new schema.core.EnumSchema(G__35346,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35346),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$74,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35346){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__35346,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_(self__.vs,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__35348){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(G__35348),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35348,cljs.core.constant$keyword$74),null));
});

/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
};
var enum$ = function (var_args){
var vs = null;
if (arguments.length > 0) {
var G__35356__i = 0, G__35356__a = new Array(arguments.length -  0);
while (G__35356__i < G__35356__a.length) {G__35356__a[G__35356__i] = arguments[G__35356__i + 0]; ++G__35356__i;}
  vs = new cljs.core.IndexedSeq(G__35356__a,0);
} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__35357){
var vs = cljs.core.seq(arglist__35357);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35359,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35361 = (((k35359 instanceof cljs.core.Keyword))?k35359.fqn:null);
switch (G__35361) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35359,else__4364__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Predicate{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,null,cljs.core.constant$keyword$75,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35358){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35362 = cljs.core.keyword_identical_QMARK_;
var expr__35363 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35365 = cljs.core.constant$keyword$75;
var G__35366 = expr__35363;
return (pred__35362.cljs$core$IFn$_invoke$arity$2 ? pred__35362.cljs$core$IFn$_invoke$arity$2(G__35365,G__35366) : pred__35362.call(null,G__35365,G__35366));
})())){
return (new schema.core.Predicate(G__35358,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35367 = cljs.core.constant$keyword$76;
var G__35368 = expr__35363;
return (pred__35362.cljs$core$IFn$_invoke$arity$2 ? pred__35362.cljs$core$IFn$_invoke$arity$2(G__35367,G__35368) : pred__35362.call(null,G__35367,G__35368));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__35358,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35358),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$75,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$76,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35358){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__35358,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4124__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__35370 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__35370) : self__.p_QMARK_.call(null,G__35370));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e35369){if((e35369 instanceof Object)){
var e = e35369;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e35369;

}
}})();
if(cljs.core.truth_(temp__4124__auto__)){
var reason = temp__4124__auto__;
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4124__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4124__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function map__GT_Predicate(G__35360){
return (new schema.core.Predicate(cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(G__35360),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(G__35360),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35360,cljs.core.constant$keyword$75,cljs.core.array_seq([cljs.core.constant$keyword$76], 0)),null));
});

/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){
return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){
return cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35375,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35377 = (((k35375 instanceof cljs.core.Keyword))?k35375.fqn:null);
switch (G__35377) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35375,else__4364__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Protocol{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$78,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35374){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35378 = cljs.core.keyword_identical_QMARK_;
var expr__35379 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35381 = cljs.core.constant$keyword$78;
var G__35382 = expr__35379;
return (pred__35378.cljs$core$IFn$_invoke$arity$2 ? pred__35378.cljs$core$IFn$_invoke$arity$2(G__35381,G__35382) : pred__35378.call(null,G__35381,G__35382));
})())){
return (new schema.core.Protocol(G__35374,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35374),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$78,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35374){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__35374,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function __GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function map__GT_Protocol(G__35376){
return (new schema.core.Protocol(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(G__35376),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35376,cljs.core.constant$keyword$78),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = (function (){
if(typeof schema.core.t35384 !== 'undefined'){
} else {

/**
* @constructor
*/
schema.core.t35384 = (function (meta35385){
this.meta35385 = meta35385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
schema.core.t35384.prototype.schema$core$Schema$ = true;

schema.core.t35384.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if((x instanceof RegExp)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.t35384.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t35384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35386){
var self__ = this;
var _35386__$1 = this;
return self__.meta35385;
});

schema.core.t35384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35386,meta35385__$1){
var self__ = this;
var _35386__$1 = this;
return (new schema.core.t35384(meta35385__$1));
});

schema.core.t35384.cljs$lang$type = true;

schema.core.t35384.cljs$lang$ctorStr = "schema.core/t35384";

schema.core.t35384.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"schema.core/t35384");
});

schema.core.__GT_t35384 = (function __GT_t35384(meta35385){
return (new schema.core.t35384(meta35385));
});

}

return (new schema.core.t35384(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$8,36,cljs.core.constant$keyword$9,409,cljs.core.constant$keyword$10,10,cljs.core.constant$keyword$11,403,cljs.core.constant$keyword$12,"/home/juho/Source/lomakkeet/example/target/cljsbuild-adv/public/js/out/schema/core.cljs"], null)));
})()
;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35388,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35390 = (((k35388 instanceof cljs.core.Keyword))?k35388.fqn:null);
switch (G__35390) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35388,else__4364__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Maybe{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$67,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35387){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35391 = cljs.core.keyword_identical_QMARK_;
var expr__35392 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35394 = cljs.core.constant$keyword$67;
var G__35395 = expr__35392;
return (pred__35391.cljs$core$IFn$_invoke$arity$2 ? pred__35391.cljs$core$IFn$_invoke$arity$2(G__35394,G__35395) : pred__35391.call(null,G__35394,G__35395));
})())){
return (new schema.core.Maybe(G__35387,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35387),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35387){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__35387,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
var G__35396 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__35396) : sub_walker.call(null,G__35396));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function map__GT_Maybe(G__35389){
return (new schema.core.Maybe(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__35389),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35389,cljs.core.constant$keyword$67),null));
});

/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35399,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35401 = (((k35399 instanceof cljs.core.Keyword))?k35399.fqn:null);
switch (G__35401) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35399,else__4364__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.NamedSchema{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$80,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35398){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35402 = cljs.core.keyword_identical_QMARK_;
var expr__35403 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35405 = cljs.core.constant$keyword$67;
var G__35406 = expr__35403;
return (pred__35402.cljs$core$IFn$_invoke$arity$2 ? pred__35402.cljs$core$IFn$_invoke$arity$2(G__35405,G__35406) : pred__35402.call(null,G__35405,G__35406));
})())){
return (new schema.core.NamedSchema(G__35398,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35407 = cljs.core.constant$keyword$80;
var G__35408 = expr__35403;
return (pred__35402.cljs$core$IFn$_invoke$arity$2 ? pred__35402.cljs$core$IFn$_invoke$arity$2(G__35407,G__35408) : pred__35402.call(null,G__35407,G__35408));
})())){
return (new schema.core.NamedSchema(self__.schema,G__35398,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35398),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35398){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__35398,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__35409 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__35409) : sub_walker.call(null,G__35409));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__35400){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__35400),cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__35400),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35400,cljs.core.constant$keyword$67,cljs.core.array_seq([cljs.core.constant$keyword$80], 0)),null));
});

/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35412,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35414 = (((k35412 instanceof cljs.core.Keyword))?k35412.fqn:null);
switch (G__35414) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35412,else__4364__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Either{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$81,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35411){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35415 = cljs.core.keyword_identical_QMARK_;
var expr__35416 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35418 = cljs.core.constant$keyword$81;
var G__35419 = expr__35416;
return (pred__35415.cljs$core$IFn$_invoke$arity$2 ? pred__35415.cljs$core$IFn$_invoke$arity$2(G__35418,G__35419) : pred__35415.call(null,G__35418,G__35419));
})())){
return (new schema.core.Either(G__35411,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35411),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35411){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__35411,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq(sub_walkers);
while(true){
if(cljs.core.not(sub_walkers__$1)){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(!(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__35421 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__35421;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function __GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function map__GT_Either(G__35413){
return (new schema.core.Either(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__35413),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35413,cljs.core.constant$keyword$81),null));
});

/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){
return (new schema.core.Either(schemas,null,null,null));
};
var either = function (var_args){
var schemas = null;
if (arguments.length > 0) {
var G__35422__i = 0, G__35422__a = new Array(arguments.length -  0);
while (G__35422__i < G__35422__a.length) {G__35422__a[G__35422__i] = arguments[G__35422__i + 0]; ++G__35422__i;}
  schemas = new cljs.core.IndexedSeq(G__35422__a,0);
} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__35423){
var schemas = cljs.core.seq(arglist__35423);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35425,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35427 = (((k35425 instanceof cljs.core.Keyword))?k35425.fqn:null);
switch (G__35427) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35425,else__4364__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Both{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$81,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35424){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35428 = cljs.core.keyword_identical_QMARK_;
var expr__35429 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35431 = cljs.core.constant$keyword$81;
var G__35432 = expr__35429;
return (pred__35428.cljs$core$IFn$_invoke$arity$2 ? pred__35428.cljs$core$IFn$_invoke$arity$2(G__35431,G__35432) : pred__35428.call(null,G__35431,G__35432));
})())){
return (new schema.core.Both(G__35424,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35424),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$81,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35424){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__35424,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(schema.utils.error_QMARK_(x__$1)){
return x__$1;
} else {
var G__35433 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__35433) : sub_walker.call(null,G__35433));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function __GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function map__GT_Both(G__35426){
return (new schema.core.Both(cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(G__35426),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35426,cljs.core.constant$keyword$81),null));
});

/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){
return (new schema.core.Both(schemas,null,null,null));
};
var both = function (var_args){
var schemas = null;
if (arguments.length > 0) {
var G__35435__i = 0, G__35435__a = new Array(arguments.length -  0);
while (G__35435__i < G__35435__a.length) {G__35435__a[G__35435__i] = arguments[G__35435__i + 0]; ++G__35435__i;}
  schemas = new cljs.core.IndexedSeq(G__35435__a,0);
} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__35436){
var schemas = cljs.core.seq(arglist__35436);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35438,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35440 = (((k35438 instanceof cljs.core.Keyword))?k35438.fqn:null);
switch (G__35440) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35438,else__4364__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$82,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$82,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35437){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35441 = cljs.core.keyword_identical_QMARK_;
var expr__35442 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35444 = cljs.core.constant$keyword$82;
var G__35445 = expr__35442;
return (pred__35441.cljs$core$IFn$_invoke$arity$2 ? pred__35441.cljs$core$IFn$_invoke$arity$2(G__35444,G__35445) : pred__35441.call(null,G__35444,G__35445));
})())){
return (new schema.core.ConditionalSchema(G__35437,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35437),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$82,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35437){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__35437,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__35446){
var vec__35447 = p__35446;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4124__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__35448){
var vec__35449 = p__35448;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35449,(0),null);
var G__35450 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__35450) : pred.call(null,G__35450));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4124__auto__)){
var vec__35451 = temp__4124__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35451,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35451,(1),null);
var G__35452 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__35452) : match.call(null,G__35452));
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4124__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4124__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__35453){
var vec__35454 = p__35453;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35454,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35454,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__35439){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(G__35439),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35439,cljs.core.constant$keyword$82),null));
});

/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__4514__auto__ = (function iter__35466(s__35467){
return (new cljs.core.LazySeq(null,(function (){
var s__35467__$1 = s__35467;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35467__$1);
if(temp__4126__auto__){
var s__35467__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35467__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35467__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35469 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35468 = (0);
while(true){
if((i__35468 < size__4513__auto__)){
var vec__35474 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35468);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474,(1),null);
cljs.core.chunk_append(b__35469,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null));

var G__35476 = (i__35468 + (1));
i__35468 = G__35476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35469),iter__35466(cljs.core.chunk_rest(s__35467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35469),null);
}
} else {
var vec__35475 = cljs.core.first(s__35467__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35475,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35475,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null),iter__35466(cljs.core.rest(s__35467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
};
var conditional = function (var_args){
var preds_and_schemas = null;
if (arguments.length > 0) {
var G__35477__i = 0, G__35477__a = new Array(arguments.length -  0);
while (G__35477__i < G__35477__a.length) {G__35477__a[G__35477__i] = arguments[G__35477__i + 0]; ++G__35477__i;}
  preds_and_schemas = new cljs.core.IndexedSeq(G__35477__a,0);
} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__35478){
var preds_and_schemas = cljs.core.seq(arglist__35478);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$83;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35480,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35482 = (((k35480 instanceof cljs.core.Keyword))?k35480.fqn:null);
switch (G__35482) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35480,else__4364__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.RequiredKey{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$84,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35479){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35483 = cljs.core.keyword_identical_QMARK_;
var expr__35484 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35486 = cljs.core.constant$keyword$84;
var G__35487 = expr__35484;
return (pred__35483.cljs$core$IFn$_invoke$arity$2 ? pred__35483.cljs$core$IFn$_invoke$arity$2(G__35486,G__35487) : pred__35483.call(null,G__35486,G__35487));
})())){
return (new schema.core.RequiredKey(G__35479,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35479),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35479){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__35479,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__35481){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(G__35481),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35481,cljs.core.constant$keyword$84),null));
});

/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35490,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35492 = (((k35490 instanceof cljs.core.Keyword))?k35490.fqn:null);
switch (G__35492) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35490,else__4364__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.OptionalKey{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$84,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35489){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35493 = cljs.core.keyword_identical_QMARK_;
var expr__35494 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35496 = cljs.core.constant$keyword$84;
var G__35497 = expr__35494;
return (pred__35493.cljs$core$IFn$_invoke$arity$2 ? pred__35493.cljs$core$IFn$_invoke$arity$2(G__35496,G__35497) : pred__35493.call(null,G__35496,G__35497));
})())){
return (new schema.core.OptionalKey(G__35489,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35489),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35489){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__35489,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__35491){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(G__35491),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35491,cljs.core.constant$keyword$84),null));
});

/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){
return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35500,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35502 = (((k35500 instanceof cljs.core.Keyword))?k35500.fqn:null);
switch (G__35502) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35500,else__4364__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.MapEntry{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$86,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35499){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35503 = cljs.core.keyword_identical_QMARK_;
var expr__35504 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35506 = cljs.core.constant$keyword$85;
var G__35507 = expr__35504;
return (pred__35503.cljs$core$IFn$_invoke$arity$2 ? pred__35503.cljs$core$IFn$_invoke$arity$2(G__35506,G__35507) : pred__35503.call(null,G__35506,G__35507));
})())){
return (new schema.core.MapEntry(G__35499,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35508 = cljs.core.constant$keyword$86;
var G__35509 = expr__35504;
return (pred__35503.cljs$core$IFn$_invoke$arity$2 ? pred__35503.cljs$core$IFn$_invoke$arity$2(G__35508,G__35509) : pred__35503.call(null,G__35508,G__35509));
})())){
return (new schema.core.MapEntry(self__.kspec,G__35499,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35499),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35499){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__35499,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(schema.core.specific_key_QMARK_(self__.kspec)){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(optional_QMARK_){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__35510 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0)))].join('')));
}

var vres = (function (){var G__35511 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__35511) : val_walker.call(null,G__35511));
})();
var temp__4124__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4124__auto__)){
var ve = temp__4124__auto__;
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__35512 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__35512) : key_walker.call(null,G__35512));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__35513 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__35513) : val_walker.call(null,G__35513));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__3758__auto__ = out_ke;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3758__auto__ = out_ke;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__3758__auto__ = out_ve;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__35501){
return (new schema.core.MapEntry(cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__35501),cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__35501),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35501,cljs.core.constant$keyword$85,cljs.core.array_seq([cljs.core.constant$keyword$86], 0)),null));
});

schema.core.map_entry = (function map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function preserve_map_type(original,walker_result){
if((schema.utils.record_QMARK_(original)) && (!(schema.utils.error_QMARK_(walker_result)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__35540(s__35541){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__35541__$1 = s__35541;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35541__$1);
if(temp__4126__auto__){
var s__35541__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35541__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35541__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35543 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35542 = (0);
while(true){
if((i__35542 < size__4513__auto__)){
var vec__35548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35542);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35548,(1),null);
cljs.core.chunk_append(b__35543,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__35564 = (i__35542 + (1));
i__35542 = G__35564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35543),iter__35540(cljs.core.chunk_rest(s__35541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35543),null);
}
} else {
var vec__35549 = cljs.core.first(s__35541__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35549,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__35540(cljs.core.rest(s__35541__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__4514__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__35515_SHARP_){
return (cljs.core.count(p1__35515_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type(x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(explicit_walkers__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
var G__35550 = out__$1;
var G__35551 = (function (){var G__35552 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__35552) : extra_walker.call(null,G__35552));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35550,G__35551) : err_conj.call(null,G__35550,G__35551));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__35553){
var vec__35554 = p__35553;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35554,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35554,(1),null);
var G__35555 = out__$1;
var G__35556 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35555,G__35556) : err_conj.call(null,G__35555,G__35556));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__35557){
var vec__35558 = p__35557;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35558,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35558,(1),null);
var G__35559 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__35559) : ok_key.call(null,G__35559));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__35560 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(1),null);
var G__35565 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__35566 = cljs.core.next(explicit_walkers__$1);
var G__35567 = (function (){var G__35561 = out;
var G__35562 = (function (){var G__35563 = (function (){var or__3758__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__35563) : wv.call(null,G__35563));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35561,G__35562) : err_conj.call(null,G__35561,G__35562));
})();
ok_key = G__35565;
explicit_walkers__$1 = G__35566;
out = G__35567;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4514__auto__ = (function iter__35578(s__35579){
return (new cljs.core.LazySeq(null,(function (){
var s__35579__$1 = s__35579;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35579__$1);
if(temp__4126__auto__){
var s__35579__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35579__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35579__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35581 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35580 = (0);
while(true){
if((i__35580 < size__4513__auto__)){
var vec__35586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35580);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35586,(1),null);
cljs.core.chunk_append(b__35581,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));

var G__35588 = (i__35580 + (1));
i__35580 = G__35588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35581),iter__35578(cljs.core.chunk_rest(s__35579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35581),null);
}
} else {
var vec__35587 = cljs.core.first(s__35579__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__35578(cljs.core.rest(s__35579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4514__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__3758__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var vec__35589 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35589,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35589,(1),null);
if(cljs.core.seq(bad)){
return schema.utils.error(cljs.core.set(bad));
} else {
return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35591,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35593 = (((k35591 instanceof cljs.core.Keyword))?k35591.fqn:null);
switch (G__35593) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35591,else__4364__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.One{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$87,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$87,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35590){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35594 = cljs.core.keyword_identical_QMARK_;
var expr__35595 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35597 = cljs.core.constant$keyword$67;
var G__35598 = expr__35595;
return (pred__35594.cljs$core$IFn$_invoke$arity$2 ? pred__35594.cljs$core$IFn$_invoke$arity$2(G__35597,G__35598) : pred__35594.call(null,G__35597,G__35598));
})())){
return (new schema.core.One(G__35590,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35599 = cljs.core.constant$keyword$87;
var G__35600 = expr__35595;
return (pred__35594.cljs$core$IFn$_invoke$arity$2 ? pred__35594.cljs$core$IFn$_invoke$arity$2(G__35599,G__35600) : pred__35594.call(null,G__35599,G__35600));
})())){
return (new schema.core.One(self__.schema,G__35590,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35601 = cljs.core.constant$keyword$80;
var G__35602 = expr__35595;
return (pred__35594.cljs$core$IFn$_invoke$arity$2 ? pred__35594.cljs$core$IFn$_invoke$arity$2(G__35601,G__35602) : pred__35594.call(null,G__35601,G__35602));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__35590,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35590),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$87,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$80,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35590){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__35590,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/One");
});

schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function map__GT_One(G__35592){
return (new schema.core.One(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__35592),cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(G__35592),cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(G__35592),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35592,cljs.core.constant$keyword$67,cljs.core.array_seq([cljs.core.constant$keyword$87,cljs.core.constant$keyword$80], 0)),null));
});

/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){

var vec__35609 = cljs.core.split_with((function (p1__35604_SHARP_){
return ((p1__35604_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(p1__35604_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609,(1),null);
var vec__35610 = cljs.core.split_with(((function (vec__35609,required,more){
return (function (p1__35605_SHARP_){
var and__3746__auto__ = (p1__35605_SHARP_ instanceof schema.core.One);
if(and__3746__auto__){
return cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(p1__35605_SHARP_);
} else {
return and__3746__auto__;
}
});})(vec__35609,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__35609,required,more,vec__35610,optional,more__$1){
return (function (p1__35606_SHARP_){
return !((p1__35606_SHARP_ instanceof schema.core.One));
});})(vec__35609,required,more,vec__35610,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__35611 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35611,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__4514__auto__ = ((function (vec__35611,singles,multi,this$__$1){
return (function iter__35612(s__35613){
return (new cljs.core.LazySeq(null,((function (vec__35611,singles,multi,this$__$1){
return (function (){
var s__35613__$1 = s__35613;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35613__$1);
if(temp__4126__auto__){
var s__35613__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35613__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35613__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35615 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35614 = (0);
while(true){
if((i__35614 < size__4513__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35614);
cljs.core.chunk_append(b__35615,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__35643 = (i__35614 + (1));
i__35614 = G__35643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35615),iter__35612(cljs.core.chunk_rest(s__35613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35615),null);
}
} else {
var s = cljs.core.first(s__35613__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__35612(cljs.core.rest(s__35613__$2)));
}
} else {
return null;
}
break;
}
});})(vec__35611,singles,multi,this$__$1))
,null,null));
});})(vec__35611,singles,multi,this$__$1))
;
return iter__4514__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__35611,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__35611,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__3758__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4124__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__35618 = temp__4124__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__35619 = out;
var G__35620 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__35619,vec__35618,first_single,single_walker,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__4514__auto__ = ((function (single_walkers__$1,x__$1,out,G__35619,vec__35618,first_single,single_walker,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__35621(s__35622){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__35619,vec__35618,first_single,single_walker,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__35622__$1 = s__35622;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35622__$1);
if(temp__4126__auto__){
var s__35622__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35622__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35622__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35624 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35623 = (0);
while(true){
if((i__35623 < size__4513__auto__)){
var vec__35629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35623);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35629,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__35624,single.name);

var G__35644 = (i__35623 + (1));
i__35623 = G__35644;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35624),iter__35621(cljs.core.chunk_rest(s__35622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35624),null);
}
} else {
var vec__35630 = cljs.core.first(s__35622__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,iter__35621(cljs.core.rest(s__35622__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__35619,vec__35618,first_single,single_walker,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__35619,vec__35618,first_single,single_walker,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__4514__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__35619,vec__35618,first_single,single_walker,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35619,G__35620) : err_conj.call(null,G__35619,G__35620));
}
} else {
var G__35645 = cljs.core.next(single_walkers__$1);
var G__35646 = cljs.core.rest(x__$1);
var G__35647 = (function (){var G__35631 = out;
var G__35632 = schema.utils.wrap_error_name(first_single.name,(function (){var G__35633 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__35633) : single_walker.call(null,G__35633));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35631,G__35632) : err_conj.call(null,G__35631,G__35632));
})();
single_walkers__$1 = G__35645;
x__$1 = G__35646;
out = G__35647;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__35634 = out;
var G__35635 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__35634,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__35634,temp__4124__auto__,or__3758__auto__,vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__35634,G__35635) : err_conj.call(null,G__35634,G__35635));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__35611,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__35636 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4514__auto__ = ((function (vec__35636,singles,multi,this$__$1){
return (function iter__35637(s__35638){
return (new cljs.core.LazySeq(null,((function (vec__35636,singles,multi,this$__$1){
return (function (){
var s__35638__$1 = s__35638;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__35638__$1);
if(temp__4126__auto__){
var s__35638__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35638__$2)){
var c__4512__auto__ = cljs.core.chunk_first(s__35638__$2);
var size__4513__auto__ = cljs.core.count(c__4512__auto__);
var b__35640 = cljs.core.chunk_buffer(size__4513__auto__);
if((function (){var i__35639 = (0);
while(true){
if((i__35639 < size__4513__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4512__auto__,i__35639);
cljs.core.chunk_append(b__35640,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__35648 = (i__35639 + (1));
i__35639 = G__35648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35640),iter__35637(cljs.core.chunk_rest(s__35638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35640),null);
}
} else {
var s = cljs.core.first(s__35638__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__35637(cljs.core.rest(s__35638__$2)));
}
} else {
return null;
}
break;
}
});})(vec__35636,singles,multi,this$__$1))
,null,null));
});})(vec__35636,singles,multi,this$__$1))
;
return iter__4514__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35650,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35652 = (((k35650 instanceof cljs.core.Keyword))?k35650.fqn:null);
switch (G__35652) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35650,else__4364__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.Record{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$88,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35649){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35653 = cljs.core.keyword_identical_QMARK_;
var expr__35654 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35656 = cljs.core.constant$keyword$88;
var G__35657 = expr__35654;
return (pred__35653.cljs$core$IFn$_invoke$arity$2 ? pred__35653.cljs$core$IFn$_invoke$arity$2(G__35656,G__35657) : pred__35653.call(null,G__35656,G__35657));
})())){
return (new schema.core.Record(G__35649,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35658 = cljs.core.constant$keyword$67;
var G__35659 = expr__35654;
return (pred__35653.cljs$core$IFn$_invoke$arity$2 ? pred__35653.cljs$core$IFn$_invoke$arity$2(G__35658,G__35659) : pred__35653.call(null,G__35658,G__35659));
})())){
return (new schema.core.Record(self__.klass,G__35649,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35649),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$67,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35649){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__35649,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var evf = temp__4126__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__3758__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var res = (function (){var G__35660 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__35660) : map_checker.call(null,G__35660));
})();
if(schema.utils.error_QMARK_(res)){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__35661 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__35661) : pred_checker.call(null,G__35661));
})():null);
if(schema.utils.error_QMARK_(pred_res)){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function map__GT_Record(G__35651){
return (new schema.core.Record(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__35651),cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1(G__35651),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35651,cljs.core.constant$keyword$88,cljs.core.array_seq([cljs.core.constant$keyword$67], 0)),null));
});

/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){
var vec__35666 = cljs.core.split_with((function (p1__35663_SHARP_){
return (p1__35663_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35666,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35666,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__35666,required,more){
return (function (p1__35664_SHARP_){
return schema.core.explain(p1__35664_SHARP_.schema);
});})(vec__35666,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4361__auto__,k__4362__auto__){
var self__ = this;
var this__4361__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4361__auto____$1,k__4362__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4363__auto__,k35668,else__4364__auto__){
var self__ = this;
var this__4363__auto____$1 = this;
var G__35670 = (((k35668 instanceof cljs.core.Keyword))?k35668.fqn:null);
switch (G__35670) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35668,else__4364__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4375__auto__,writer__4376__auto__,opts__4377__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
var pr_pair__4378__auto__ = ((function (this__4375__auto____$1){
return (function (keyval__4379__auto__){
return cljs.core.pr_sequential_writer(writer__4376__auto__,cljs.core.pr_writer,""," ","",opts__4377__auto__,keyval__4379__auto__);
});})(this__4375__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4376__auto__,pr_pair__4378__auto__,"#schema.core.FnSchema{",", ","}",opts__4377__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4359__auto__){
var self__ = this;
var this__4359__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4355__auto__){
var self__ = this;
var this__4355__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4365__auto__){
var self__ = this;
var this__4365__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4356__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4357__auto__,other__4358__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4370__auto__,k__4371__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$90,null,cljs.core.constant$keyword$91,null], null), null),k__4371__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4370__auto____$1),self__.__meta),k__4371__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4371__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4368__auto__,k__4369__auto__,G__35667){
var self__ = this;
var this__4368__auto____$1 = this;
var pred__35671 = cljs.core.keyword_identical_QMARK_;
var expr__35672 = k__4369__auto__;
if(cljs.core.truth_((function (){var G__35674 = cljs.core.constant$keyword$90;
var G__35675 = expr__35672;
return (pred__35671.cljs$core$IFn$_invoke$arity$2 ? pred__35671.cljs$core$IFn$_invoke$arity$2(G__35674,G__35675) : pred__35671.call(null,G__35674,G__35675));
})())){
return (new schema.core.FnSchema(G__35667,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35676 = cljs.core.constant$keyword$91;
var G__35677 = expr__35672;
return (pred__35671.cljs$core$IFn$_invoke$arity$2 ? pred__35671.cljs$core$IFn$_invoke$arity$2(G__35676,G__35677) : pred__35671.call(null,G__35676,G__35677));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__35667,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4369__auto__,G__35667),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4360__auto__,G__35667){
var self__ = this;
var this__4360__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__35667,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4366__auto__,entry__4367__auto__){
var self__ = this;
var this__4366__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4367__auto__)){
return cljs.core._assoc(this__4366__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4367__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4366__auto____$1,entry__4367__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_(x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4395__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4395__auto__,writer__4396__auto__){
return cljs.core._write(writer__4396__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__35669){
return (new schema.core.FnSchema(cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__35669),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__35669),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35669,cljs.core.constant$keyword$90,cljs.core.array_seq([cljs.core.constant$keyword$91], 0)),null));
});

schema.core.arity = (function arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regardless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.constant$keyword$80,name);
});
schema.core.schema_name = (function schema_name(schema__$1){

return cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$67,schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__3758__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var m__12006__auto__ = cljs.core.meta(f);
var k__12007__auto__ = cljs.core.constant$keyword$67;
var temp__4124__auto__ = cljs.core.find(m__12006__auto__,k__12007__auto__);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__12008__auto__ = temp__4124__auto__;
return cljs.core.val(pair__12008__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__12007__auto__,m__12006__auto__], 0))));
}
}
});
