// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');

schema.core.Schema = (function (){var obj19100 = {};
return obj19100;
})();

/**
 * Produce a function that takes [data], and either returns a walked version of data
 * (by default, usually just data), or a utils/ErrorContainer containing value that looks
 * like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 * If this is a composite schema, should let-bind (subschema-walker sub-schema) for each
 * subschema outside the returned fn.  Within the returned fn, should break down data
 * into constituents, call the let-bound subschema walkers on each component, and then
 * reassemble the components into a walked version of the data (or an ErrorContainer
 * describing the validaiton failures).
 * 
 * Attempting to walk a value that already contains a utils/ErrorContainer produces undefined
 * behavior.
 * 
 * User code should never call `walker` directly.  Instead, it should call `start-walker`
 * below.
 */
schema.core.walker = (function schema$core$walker(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (schema.core.walker[(function (){var G__19104 = x__4974__auto__;
return goog.typeOf(G__19104);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (schema.core.walker["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 * also expanding class schematas at the leaves.  Example:
 * 
 * user> (s/explain {:a s/Keyword :b [s/Int]} )
 * {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((function (){var and__4326__auto__ = this$;
if(and__4326__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__4326__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__4974__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4338__auto__ = (schema.core.explain[(function (){var G__19108 = x__4974__auto__;
return goog.typeOf(G__19108);
})()]);
if(or__4338__auto__){
return or__4338__auto__;
} else {
var or__4338__auto____$1 = (schema.core.explain["_"]);
if(or__4338__auto____$1){
return or__4338__auto____$1;
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
schema.core.subschema_walker = (function schema$core$subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
 * The entry point for creating walkers.  Binds the provided walker to subschema-walker,
 * then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
 * More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
 * that wraps walker with additional behavior.
 */
schema.core.start_walker = (function schema$core$start_walker(sub_walker,schema__$1){
var subschema_walker19110 = schema.core.subschema_walker;
schema.core.subschema_walker = sub_walker;

try{return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker19110;
}});
/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
var temp__4423__auto___19111 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4423__auto___19111)){
var error_19112 = temp__4423__auto___19111;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_19112], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,schema__$1,cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$error,error_19112], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4421__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4421__auto__)){
var more_schema = temp__4421__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__4338__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__4338__auto__ = (this$ === x.constructor);
if(or__4338__auto__){
return or__4338__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.make_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var G__19113 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__19113) : class_walker.call(null,G__19113));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4421__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4421__auto__)){
var more_schema = temp__4421__auto__;
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
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19115,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19117 = (((k19115 instanceof cljs.core.Keyword))?k19115.fqn:null);
switch (G__19117) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19115,else__4936__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.AnythingSchema{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19114){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19118 = cljs.core.keyword_identical_QMARK_;
var expr__19119 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19121 = cljs.core.constant$keyword$_;
var G__19122 = expr__19119;
return (pred__19118.cljs$core$IFn$_invoke$arity$2 ? pred__19118.cljs$core$IFn$_invoke$arity$2(G__19121,G__19122) : pred__19118.call(null,G__19121,G__19122));
})())){
return (new schema.core.AnythingSchema(G__19114,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19114),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19114){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__19114,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__19116){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$_.cljs$core$IFn$_invoke$arity$1(G__19116),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19116,cljs.core.constant$keyword$_),null));
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
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19125,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19127 = (((k19125 instanceof cljs.core.Keyword))?k19125.fqn:null);
switch (G__19127) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19125,else__4936__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.EqSchema{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$v,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19124){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19128 = cljs.core.keyword_identical_QMARK_;
var expr__19129 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19131 = cljs.core.constant$keyword$v;
var G__19132 = expr__19129;
return (pred__19128.cljs$core$IFn$_invoke$arity$2 ? pred__19128.cljs$core$IFn$_invoke$arity$2(G__19131,G__19132) : pred__19128.call(null,G__19131,G__19132));
})())){
return (new schema.core.EqSchema(G__19124,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19124),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19124){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__19124,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
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

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__19126){
return (new schema.core.EqSchema(cljs.core.constant$keyword$v.cljs$core$IFn$_invoke$arity$1(G__19126),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19126,cljs.core.constant$keyword$v),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
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
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19135,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19137 = (((k19135 instanceof cljs.core.Keyword))?k19135.fqn:null);
switch (G__19137) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19135,else__4936__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Isa{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$parent,null,cljs.core.constant$keyword$h,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19134){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19138 = cljs.core.keyword_identical_QMARK_;
var expr__19139 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19141 = cljs.core.constant$keyword$h;
var G__19142 = expr__19139;
return (pred__19138.cljs$core$IFn$_invoke$arity$2 ? pred__19138.cljs$core$IFn$_invoke$arity$2(G__19141,G__19142) : pred__19138.call(null,G__19141,G__19142));
})())){
return (new schema.core.Isa(G__19134,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19143 = cljs.core.constant$keyword$parent;
var G__19144 = expr__19139;
return (pred__19138.cljs$core$IFn$_invoke$arity$2 ? pred__19138.cljs$core$IFn$_invoke$arity$2(G__19143,G__19144) : pred__19138.call(null,G__19143,G__19144));
})())){
return (new schema.core.Isa(self__.h,G__19134,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19134),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19134){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__19134,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__4338__auto__ = (function (){var and__4326__auto__ = self__.h;
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__4326__auto__;
}
})();
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
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

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__19136){
return (new schema.core.Isa(cljs.core.constant$keyword$h.cljs$core$IFn$_invoke$arity$1(G__19136),cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(G__19136),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19136,cljs.core.constant$keyword$h,cljs.core.array_seq([cljs.core.constant$keyword$parent], 0)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(){
var G__19147 = arguments.length;
switch (G__19147) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

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
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19150,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19152 = (((k19150 instanceof cljs.core.Keyword))?k19150.fqn:null);
switch (G__19152) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19150,else__4936__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.EnumSchema{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$vs,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19149){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19153 = cljs.core.keyword_identical_QMARK_;
var expr__19154 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19156 = cljs.core.constant$keyword$vs;
var G__19157 = expr__19154;
return (pred__19153.cljs$core$IFn$_invoke$arity$2 ? pred__19153.cljs$core$IFn$_invoke$arity$2(G__19156,G__19157) : pred__19153.call(null,G__19156,G__19157));
})())){
return (new schema.core.EnumSchema(G__19149,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19149),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19149){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__19149,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
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

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__19151){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$vs.cljs$core$IFn$_invoke$arity$1(G__19151),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19151,cljs.core.constant$keyword$vs),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq19159){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19159));
});

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
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19161,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19163 = (((k19161 instanceof cljs.core.Keyword))?k19161.fqn:null);
switch (G__19163) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19161,else__4936__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Predicate{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pred_DASH_name,null,cljs.core.constant$keyword$p_QMARK_,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19160){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19164 = cljs.core.keyword_identical_QMARK_;
var expr__19165 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19167 = cljs.core.constant$keyword$p_QMARK_;
var G__19168 = expr__19165;
return (pred__19164.cljs$core$IFn$_invoke$arity$2 ? pred__19164.cljs$core$IFn$_invoke$arity$2(G__19167,G__19168) : pred__19164.call(null,G__19167,G__19168));
})())){
return (new schema.core.Predicate(G__19160,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19169 = cljs.core.constant$keyword$pred_DASH_name;
var G__19170 = expr__19165;
return (pred__19164.cljs$core$IFn$_invoke$arity$2 ? pred__19164.cljs$core$IFn$_invoke$arity$2(G__19169,G__19170) : pred__19164.call(null,G__19169,G__19170));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__19160,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19160),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19160){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__19160,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4421__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__19172 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19172) : self__.p_QMARK_.call(null,G__19172));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e19171){if((e19171 instanceof Object)){
var e = e19171;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e19171;

}
}})();
if(cljs.core.truth_(temp__4421__auto__)){
var reason = temp__4421__auto__;
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4421__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4421__auto__,this$__$1))
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

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__19162){
return (new schema.core.Predicate(cljs.core.constant$keyword$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19162),cljs.core.constant$keyword$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__19162),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19162,cljs.core.constant$keyword$p_QMARK_,cljs.core.array_seq([cljs.core.constant$keyword$pred_DASH_name], 0)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(){
var G__19175 = arguments.length;
switch (G__19175) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.constant$keyword$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
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
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19178,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19180 = (((k19178 instanceof cljs.core.Keyword))?k19178.fqn:null);
switch (G__19180) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19178,else__4936__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Protocol{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$p,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19177){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19181 = cljs.core.keyword_identical_QMARK_;
var expr__19182 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19184 = cljs.core.constant$keyword$p;
var G__19185 = expr__19182;
return (pred__19181.cljs$core$IFn$_invoke$arity$2 ? pred__19181.cljs$core$IFn$_invoke$arity$2(G__19184,G__19185) : pred__19181.call(null,G__19184,G__19185));
})())){
return (new schema.core.Protocol(G__19177,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19177),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19177){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__19177,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
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

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__19179){
return (new schema.core.Protocol(cljs.core.constant$keyword$p.cljs$core$IFn$_invoke$arity$1(G__19179),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19179,cljs.core.constant$keyword$p),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
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
if(typeof schema.core.t19187 !== 'undefined'){
} else {

/**
* @constructor
*/
schema.core.t19187 = (function (meta19188){
this.meta19188 = meta19188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t19187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19189,meta19188__$1){
var self__ = this;
var _19189__$1 = this;
return (new schema.core.t19187(meta19188__$1));
});

schema.core.t19187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19189){
var self__ = this;
var _19189__$1 = this;
return self__.meta19188;
});

schema.core.t19187.prototype.schema$core$Schema$ = true;

schema.core.t19187.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if((x instanceof RegExp)){
return x;
} else {
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.t19187.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t19187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19188","meta19188",295426124,null)], null);
});

schema.core.t19187.cljs$lang$type = true;

schema.core.t19187.cljs$lang$ctorStr = "schema.core/t19187";

schema.core.t19187.cljs$lang$ctorPrWriter = (function (this__4917__auto__,writer__4918__auto__,opt__4919__auto__){
return cljs.core._write(writer__4918__auto__,"schema.core/t19187");
});

schema.core.__GT_t19187 = (function schema$core$__GT_t19187(meta19188){
return (new schema.core.t19187(meta19188));
});

}

return (new schema.core.t19187(cljs.core.PersistentArrayMap.EMPTY));
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
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19191,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19193 = (((k19191 instanceof cljs.core.Keyword))?k19191.fqn:null);
switch (G__19193) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19191,else__4936__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Maybe{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$schema,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19190){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19194 = cljs.core.keyword_identical_QMARK_;
var expr__19195 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19197 = cljs.core.constant$keyword$schema;
var G__19198 = expr__19195;
return (pred__19194.cljs$core$IFn$_invoke$arity$2 ? pred__19194.cljs$core$IFn$_invoke$arity$2(G__19197,G__19198) : pred__19194.call(null,G__19197,G__19198));
})())){
return (new schema.core.Maybe(G__19190,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19190),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19190){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__19190,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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
var G__19199 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__19199) : sub_walker.call(null,G__19199));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__19192){
return (new schema.core.Maybe(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__19192),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19192,cljs.core.constant$keyword$schema),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
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
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19202,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19204 = (((k19202 instanceof cljs.core.Keyword))?k19202.fqn:null);
switch (G__19204) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19202,else__4936__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.NamedSchema{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$schema,null,cljs.core.constant$keyword$name,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19201){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19205 = cljs.core.keyword_identical_QMARK_;
var expr__19206 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19208 = cljs.core.constant$keyword$schema;
var G__19209 = expr__19206;
return (pred__19205.cljs$core$IFn$_invoke$arity$2 ? pred__19205.cljs$core$IFn$_invoke$arity$2(G__19208,G__19209) : pred__19205.call(null,G__19208,G__19209));
})())){
return (new schema.core.NamedSchema(G__19201,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19210 = cljs.core.constant$keyword$name;
var G__19211 = expr__19206;
return (pred__19205.cljs$core$IFn$_invoke$arity$2 ? pred__19205.cljs$core$IFn$_invoke$arity$2(G__19210,G__19211) : pred__19205.call(null,G__19210,G__19211));
})())){
return (new schema.core.NamedSchema(self__.schema,G__19201,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19201),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19201){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__19201,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__19212 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__19212) : sub_walker.call(null,G__19212));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__19203){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__19203),cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(G__19203),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19203,cljs.core.constant$keyword$schema,cljs.core.array_seq([cljs.core.constant$keyword$name], 0)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
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
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19215,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19217 = (((k19215 instanceof cljs.core.Keyword))?k19215.fqn:null);
switch (G__19217) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19215,else__4936__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Either{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$schemas,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19214){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19218 = cljs.core.keyword_identical_QMARK_;
var expr__19219 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19221 = cljs.core.constant$keyword$schemas;
var G__19222 = expr__19219;
return (pred__19218.cljs$core$IFn$_invoke$arity$2 ? pred__19218.cljs$core$IFn$_invoke$arity$2(G__19221,G__19222) : pred__19218.call(null,G__19221,G__19222));
})())){
return (new schema.core.Either(G__19214,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19214),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19214){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__19214,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(cljs.core.not(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__19224 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__19224;
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

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__19216){
return (new schema.core.Either(cljs.core.constant$keyword$schemas.cljs$core$IFn$_invoke$arity$1(G__19216),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19216,cljs.core.constant$keyword$schemas),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 */
schema.core.either = (function schema$core$either(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq19225){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19225));
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19227,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19229 = (((k19227 instanceof cljs.core.Keyword))?k19227.fqn:null);
switch (G__19229) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19227,else__4936__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Both{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$schemas,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19226){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19230 = cljs.core.keyword_identical_QMARK_;
var expr__19231 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19233 = cljs.core.constant$keyword$schemas;
var G__19234 = expr__19231;
return (pred__19230.cljs$core$IFn$_invoke$arity$2 ? pred__19230.cljs$core$IFn$_invoke$arity$2(G__19233,G__19234) : pred__19230.call(null,G__19233,G__19234));
})())){
return (new schema.core.Both(G__19226,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19226),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19226){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__19226,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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
if(cljs.core.truth_(schema.utils.error_QMARK_(x__$1))){
return x__$1;
} else {
var G__19235 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__19235) : sub_walker.call(null,G__19235));
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

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__19228){
return (new schema.core.Both(cljs.core.constant$keyword$schemas.cljs$core$IFn$_invoke$arity$1(G__19228),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19228,cljs.core.constant$keyword$schemas),null));
});

/**
 * A value that must satisfy every schema in schemas.
 */
schema.core.both = (function schema$core$both(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq19237){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19237));
});

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
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19239,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19241 = (((k19239 instanceof cljs.core.Keyword))?k19239.fqn:null);
switch (G__19241) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19239,else__4936__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$preds_DASH_and_DASH_schemas,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19238){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19242 = cljs.core.keyword_identical_QMARK_;
var expr__19243 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19245 = cljs.core.constant$keyword$preds_DASH_and_DASH_schemas;
var G__19246 = expr__19243;
return (pred__19242.cljs$core$IFn$_invoke$arity$2 ? pred__19242.cljs$core$IFn$_invoke$arity$2(G__19245,G__19246) : pred__19242.call(null,G__19245,G__19246));
})())){
return (new schema.core.ConditionalSchema(G__19238,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19238),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19238){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__19238,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__19247){
var vec__19248 = p__19247;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19248,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4421__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__19249){
var vec__19250 = p__19249;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19250,(0),null);
var G__19251 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19251) : pred.call(null,G__19251));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4421__auto__)){
var vec__19252 = temp__4421__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19252,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19252,(1),null);
var G__19253 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__19253) : match.call(null,G__19253));
} else {
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4421__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4421__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__19254){
var vec__19255 = p__19254;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19255,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19255,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__19240){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__19240),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19240,cljs.core.constant$keyword$preds_DASH_and_DASH_schemas),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 */
schema.core.conditional = (function schema$core$conditional(){
var argseq__5378__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5378__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__5092__auto__ = (function schema$core$iter__19258(s__19259){
return (new cljs.core.LazySeq(null,(function (){
var s__19259__$1 = s__19259;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19259__$1);
if(temp__4423__auto__){
var s__19259__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19259__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__19259__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__19261 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__19260 = (0);
while(true){
if((i__19260 < size__5091__auto__)){
var vec__19266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__19260);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19266,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19266,(1),null);
cljs.core.chunk_append(b__19261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$else))?cljs.core.constantly(true):pred),schema__$1], null));

var G__19268 = (i__19260 + (1));
i__19260 = G__19268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19261),schema$core$iter__19258(cljs.core.chunk_rest(s__19259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19261),null);
}
} else {
var vec__19267 = cljs.core.first(s__19259__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19267,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19267,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$else))?cljs.core.constantly(true):pred),schema__$1], null),schema$core$iter__19258(cljs.core.rest(s__19259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5092__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq19257){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19257));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__19270 = cljs.core.meta(v);
var map__19270__$1 = ((cljs.core.seq_QMARK_(map__19270))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19270):map__19270);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19270__$1,cljs.core.constant$keyword$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19270__$1,cljs.core.constant$keyword$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
* @param {*} derefable
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19273,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19275 = (((k19273 instanceof cljs.core.Keyword))?k19273.fqn:null);
switch (G__19275) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19273,else__4936__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Recursive{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$derefable,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19272){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19276 = cljs.core.keyword_identical_QMARK_;
var expr__19277 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19279 = cljs.core.constant$keyword$derefable;
var G__19280 = expr__19277;
return (pred__19276.cljs$core$IFn$_invoke$arity$2 ? pred__19276.cljs$core$IFn$_invoke$arity$2(G__19279,G__19280) : pred__19276.call(null,G__19279,G__19280));
})())){
return (new schema.core.Recursive(G__19272,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19272),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19272){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__19272,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var a = (function (){var G__19281 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19281) : cljs.core.atom.call(null,G__19281));
})();
var G__19282 = a;
var G__19283 = schema.core.start_walker((function (){var old = schema.core.subschema_walker;
return ((function (old,G__19282,a,this$__$1){
return (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,this$__$1)){
return ((function (old,G__19282,a,this$__$1){
return (function (p1__19271_SHARP_){
return (function (){var G__19284 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19284) : cljs.core.deref.call(null,G__19284));
})().call(null,p1__19271_SHARP_);
});
;})(old,G__19282,a,this$__$1))
} else {
var G__19285 = s;
return (old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(G__19285) : old.call(null,G__19285));
}
});
;})(old,G__19282,a,this$__$1))
})(),(function (){var G__19286 = self__.derefable;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19286) : cljs.core.deref.call(null,G__19286));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19282,G__19283) : cljs.core.reset_BANG_.call(null,G__19282,G__19283));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.var_name(self__.derefable)),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null))),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__19274){
return (new schema.core.Recursive(cljs.core.constant$keyword$derefable.cljs$core$IFn$_invoke$arity$1(G__19274),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19274,cljs.core.constant$keyword$derefable),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if((function (){var G__19289 = schema__$1;
if(G__19289){
var bit__5012__auto__ = (G__19289.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__5012__auto__) || (G__19289.cljs$core$IDeref$)){
return true;
} else {
if((!G__19289.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19289);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19289);
}
})()){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.array_seq([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
/**
 * A sentinel value representing missing portions of the input data.
 */
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$schema$core_SLASH_missing;

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
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19291,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19293 = (((k19291 instanceof cljs.core.Keyword))?k19291.fqn:null);
switch (G__19293) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19291,else__4936__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.RequiredKey{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$k,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19290){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19294 = cljs.core.keyword_identical_QMARK_;
var expr__19295 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19297 = cljs.core.constant$keyword$k;
var G__19298 = expr__19295;
return (pred__19294.cljs$core$IFn$_invoke$arity$2 ? pred__19294.cljs$core$IFn$_invoke$arity$2(G__19297,G__19298) : pred__19294.call(null,G__19297,G__19298));
})())){
return (new schema.core.RequiredKey(G__19290,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19290),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19290){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__19290,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__19292){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$k.cljs$core$IFn$_invoke$arity$1(G__19292),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19292,cljs.core.constant$keyword$k),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
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
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19301,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19303 = (((k19301 instanceof cljs.core.Keyword))?k19301.fqn:null);
switch (G__19303) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19301,else__4936__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.OptionalKey{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$k,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19300){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19304 = cljs.core.keyword_identical_QMARK_;
var expr__19305 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19307 = cljs.core.constant$keyword$k;
var G__19308 = expr__19305;
return (pred__19304.cljs$core$IFn$_invoke$arity$2 ? pred__19304.cljs$core$IFn$_invoke$arity$2(G__19307,G__19308) : pred__19304.call(null,G__19307,G__19308));
})())){
return (new schema.core.OptionalKey(G__19300,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19300),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19300){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__19300,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__19302){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$k.cljs$core$IFn$_invoke$arity$1(G__19302),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19302,cljs.core.constant$keyword$k),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__4338__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
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
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19311,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19313 = (((k19311 instanceof cljs.core.Keyword))?k19311.fqn:null);
switch (G__19313) {
case "kspec":
return self__.kspec;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19311,else__4936__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.MapEntry{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kspec,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$kspec,null,cljs.core.constant$keyword$val_DASH_schema,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19310){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19314 = cljs.core.keyword_identical_QMARK_;
var expr__19315 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19317 = cljs.core.constant$keyword$kspec;
var G__19318 = expr__19315;
return (pred__19314.cljs$core$IFn$_invoke$arity$2 ? pred__19314.cljs$core$IFn$_invoke$arity$2(G__19317,G__19318) : pred__19314.call(null,G__19317,G__19318));
})())){
return (new schema.core.MapEntry(G__19310,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19319 = cljs.core.constant$keyword$val_DASH_schema;
var G__19320 = expr__19315;
return (pred__19314.cljs$core$IFn$_invoke$arity$2 ? pred__19314.cljs$core$IFn$_invoke$arity$2(G__19319,G__19320) : pred__19314.call(null,G__19319,G__19320));
})())){
return (new schema.core.MapEntry(self__.kspec,G__19310,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19310),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kspec,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19310){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__19310,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(cljs.core.truth_(schema.core.specific_key_QMARK_(self__.kspec))){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(cljs.core.truth_(optional_QMARK_)){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__19321 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0)))].join('')));
}

var vres = (function (){var G__19322 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__19322) : val_walker.call(null,G__19322));
})();
var temp__4421__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4421__auto__)){
var ve = temp__4421__auto__;
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
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__19323 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__19323) : key_walker.call(null,G__19323));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__19324 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__19324) : val_walker.call(null,G__19324));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__4338__auto__ = out_ke;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4338__auto__ = out_ke;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__4338__auto__ = out_ve;
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
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

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kspec","kspec",489299279,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__19312){
return (new schema.core.MapEntry(cljs.core.constant$keyword$kspec.cljs$core$IFn$_invoke$arity$1(G__19312),cljs.core.constant$keyword$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__19312),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19312,cljs.core.constant$keyword$kspec,cljs.core.array_seq([cljs.core.constant$keyword$val_DASH_schema], 0)),null));
});

schema.core.map_entry = (function schema$core$map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function schema$core$preserve_map_type(original,walker_result){
if(cljs.core.truth_((function (){var and__4326__auto__ = schema.utils.record_QMARK_(original);
if(cljs.core.truth_(and__4326__auto__)){
return cljs.core.not(schema.utils.error_QMARK_(walker_result));
} else {
return and__4326__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function schema$core$map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5092__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function schema$core$map_walker_$_iter__19351(s__19352){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__19352__$1 = s__19352;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19352__$1);
if(temp__4423__auto__){
var s__19352__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19352__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__19352__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__19354 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__19353 = (0);
while(true){
if((i__19353 < size__5091__auto__)){
var vec__19359 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__19353);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19359,(1),null);
cljs.core.chunk_append(b__19354,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__19375 = (i__19353 + (1));
i__19353 = G__19375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19354),schema$core$map_walker_$_iter__19351(cljs.core.chunk_rest(s__19352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19354),null);
}
} else {
var vec__19360 = cljs.core.first(s__19352__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19360,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19360,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),schema$core$map_walker_$_iter__19351(cljs.core.rest(s__19352__$2)));
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
return iter__5092__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__19326_SHARP_){
return (cljs.core.count(p1__19326_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.make_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
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
var G__19361 = out__$1;
var G__19362 = (function (){var G__19363 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__19363) : extra_walker.call(null,G__19363));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19361,G__19362) : err_conj.call(null,G__19361,G__19362));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__19364){
var vec__19365 = p__19364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19365,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19365,(1),null);
var G__19366 = out__$1;
var G__19367 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19366,G__19367) : err_conj.call(null,G__19366,G__19367));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__19368){
var vec__19369 = p__19368;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19369,(1),null);
var G__19370 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__19370) : ok_key.call(null,G__19370));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__19371 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19371,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19371,(1),null);
var G__19376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__19377 = cljs.core.next(explicit_walkers__$1);
var G__19378 = (function (){var G__19372 = out;
var G__19373 = (function (){var G__19374 = (function (){var or__4338__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__19374) : wv.call(null,G__19374));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19372,G__19373) : err_conj.call(null,G__19372,G__19373));
})();
ok_key = G__19376;
explicit_walkers__$1 = G__19377;
out = G__19378;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5092__auto__ = (function schema$core$map_explain_$_iter__19389(s__19390){
return (new cljs.core.LazySeq(null,(function (){
var s__19390__$1 = s__19390;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19390__$1);
if(temp__4423__auto__){
var s__19390__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19390__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__19390__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__19392 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__19391 = (0);
while(true){
if((i__19391 < size__5091__auto__)){
var vec__19397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__19391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19397,(1),null);
cljs.core.chunk_append(b__19392,cljs.core.vec(cljs.core.next(schema.core.explain(schema.core.map_entry(k,v)))));

var G__19399 = (i__19391 + (1));
i__19391 = G__19399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19392),schema$core$map_explain_$_iter__19389(cljs.core.chunk_rest(s__19390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19392),null);
}
} else {
var vec__19398 = cljs.core.first(s__19390__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19398,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.explain(schema.core.map_entry(k,v)))),schema$core$map_explain_$_iter__19389(cljs.core.rest(s__19390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5092__auto__(this$);
})());
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

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
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
var or__4338__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var vec__19400 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19400,(1),null);
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
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19402,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19404 = (((k19402 instanceof cljs.core.Keyword))?k19402.fqn:null);
switch (G__19404) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19402,else__4936__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.One{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$schema,null,cljs.core.constant$keyword$name,null,cljs.core.constant$keyword$optional_QMARK_,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19401){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19405 = cljs.core.keyword_identical_QMARK_;
var expr__19406 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19408 = cljs.core.constant$keyword$schema;
var G__19409 = expr__19406;
return (pred__19405.cljs$core$IFn$_invoke$arity$2 ? pred__19405.cljs$core$IFn$_invoke$arity$2(G__19408,G__19409) : pred__19405.call(null,G__19408,G__19409));
})())){
return (new schema.core.One(G__19401,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19410 = cljs.core.constant$keyword$optional_QMARK_;
var G__19411 = expr__19406;
return (pred__19405.cljs$core$IFn$_invoke$arity$2 ? pred__19405.cljs$core$IFn$_invoke$arity$2(G__19410,G__19411) : pred__19405.call(null,G__19410,G__19411));
})())){
return (new schema.core.One(self__.schema,G__19401,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19412 = cljs.core.constant$keyword$name;
var G__19413 = expr__19406;
return (pred__19405.cljs$core$IFn$_invoke$arity$2 ? pred__19405.cljs$core$IFn$_invoke$arity$2(G__19412,G__19413) : pred__19405.call(null,G__19412,G__19413));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__19401,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19401),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19401){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__19401,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__19403){
return (new schema.core.One(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__19403),cljs.core.constant$keyword$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19403),cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(G__19403),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19403,cljs.core.constant$keyword$schema,cljs.core.array_seq([cljs.core.constant$keyword$optional_QMARK_,cljs.core.constant$keyword$name], 0)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__19420 = cljs.core.split_with((function (p1__19415_SHARP_){
return ((p1__19415_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__19415_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19420,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19420,(1),null);
var vec__19421 = cljs.core.split_with(((function (vec__19420,required,more){
return (function (p1__19416_SHARP_){
var and__4326__auto__ = (p1__19416_SHARP_ instanceof schema.core.One);
if(and__4326__auto__){
return cljs.core.constant$keyword$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__19416_SHARP_);
} else {
return and__4326__auto__;
}
});})(vec__19420,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19421,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19421,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__19420,required,more,vec__19421,optional,more__$1){
return (function (p1__19417_SHARP_){
return !((p1__19417_SHARP_ instanceof schema.core.One));
});})(vec__19420,required,more,vec__19421,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__19422 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19422,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19422,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__5092__auto__ = ((function (vec__19422,singles,multi,this$__$1){
return (function schema$core$iter__19423(s__19424){
return (new cljs.core.LazySeq(null,((function (vec__19422,singles,multi,this$__$1){
return (function (){
var s__19424__$1 = s__19424;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19424__$1);
if(temp__4423__auto__){
var s__19424__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19424__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__19424__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__19426 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__19425 = (0);
while(true){
if((i__19425 < size__5091__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__19425);
cljs.core.chunk_append(b__19426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__19454 = (i__19425 + (1));
i__19425 = G__19454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19426),schema$core$iter__19423(cljs.core.chunk_rest(s__19424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19426),null);
}
} else {
var s = cljs.core.first(s__19424__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),schema$core$iter__19423(cljs.core.rest(s__19424__$2)));
}
} else {
return null;
}
break;
}
});})(vec__19422,singles,multi,this$__$1))
,null,null));
});})(vec__19422,singles,multi,this$__$1))
;
return iter__5092__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__19422,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__19422,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__4338__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4421__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__19429 = temp__4421__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19429,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19429,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__19430 = out;
var G__19431 = schema.utils.error(schema.utils.make_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__19430,vec__19429,first_single,single_walker,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__5092__auto__ = ((function (single_walkers__$1,x__$1,out,G__19430,vec__19429,first_single,single_walker,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function schema$core$iter__19432(s__19433){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__19430,vec__19429,first_single,single_walker,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__19433__$1 = s__19433;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19433__$1);
if(temp__4423__auto__){
var s__19433__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19433__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__19433__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__19435 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__19434 = (0);
while(true){
if((i__19434 < size__5091__auto__)){
var vec__19440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__19434);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19440,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__19435,single.name);

var G__19455 = (i__19434 + (1));
i__19434 = G__19455;
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
return cljs.core.chunk_cons(cljs.core.chunk(b__19435),schema$core$iter__19432(cljs.core.chunk_rest(s__19433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19435),null);
}
} else {
var vec__19441 = cljs.core.first(s__19433__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,schema$core$iter__19432(cljs.core.rest(s__19433__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__19430,vec__19429,first_single,single_walker,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__19430,vec__19429,first_single,single_walker,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__5092__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__19430,vec__19429,first_single,single_walker,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19430,G__19431) : err_conj.call(null,G__19430,G__19431));
}
} else {
var G__19456 = cljs.core.next(single_walkers__$1);
var G__19457 = cljs.core.rest(x__$1);
var G__19458 = (function (){var G__19442 = out;
var G__19443 = schema.utils.wrap_error_name(first_single.name,(function (){var G__19444 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__19444) : single_walker.call(null,G__19444));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19442,G__19443) : err_conj.call(null,G__19442,G__19443));
})();
single_walkers__$1 = G__19456;
x__$1 = G__19457;
out = G__19458;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__19445 = out;
var G__19446 = schema.utils.error(schema.utils.make_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__19445,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__19445,temp__4421__auto__,or__4338__auto__,vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19445,G__19446) : err_conj.call(null,G__19445,G__19446));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__19422,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__19447 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19447,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19447,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5092__auto__ = ((function (vec__19447,singles,multi,this$__$1){
return (function schema$core$iter__19448(s__19449){
return (new cljs.core.LazySeq(null,((function (vec__19447,singles,multi,this$__$1){
return (function (){
var s__19449__$1 = s__19449;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__19449__$1);
if(temp__4423__auto__){
var s__19449__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19449__$2)){
var c__5090__auto__ = cljs.core.chunk_first(s__19449__$2);
var size__5091__auto__ = cljs.core.count(c__5090__auto__);
var b__19451 = cljs.core.chunk_buffer(size__5091__auto__);
if((function (){var i__19450 = (0);
while(true){
if((i__19450 < size__5091__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5090__auto__,i__19450);
cljs.core.chunk_append(b__19451,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__19459 = (i__19450 + (1));
i__19450 = G__19459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19451),schema$core$iter__19448(cljs.core.chunk_rest(s__19449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19451),null);
}
} else {
var s = cljs.core.first(s__19449__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__19448(cljs.core.rest(s__19449__$2)));
}
} else {
return null;
}
break;
}
});})(vec__19447,singles,multi,this$__$1))
,null,null));
});})(vec__19447,singles,multi,this$__$1))
;
return iter__5092__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
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
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19461,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19463 = (((k19461 instanceof cljs.core.Keyword))?k19461.fqn:null);
switch (G__19463) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19461,else__4936__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.Record{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$schema,null,cljs.core.constant$keyword$klass,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19460){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19464 = cljs.core.keyword_identical_QMARK_;
var expr__19465 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19467 = cljs.core.constant$keyword$klass;
var G__19468 = expr__19465;
return (pred__19464.cljs$core$IFn$_invoke$arity$2 ? pred__19464.cljs$core$IFn$_invoke$arity$2(G__19467,G__19468) : pred__19464.call(null,G__19467,G__19468));
})())){
return (new schema.core.Record(G__19460,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19469 = cljs.core.constant$keyword$schema;
var G__19470 = expr__19465;
return (pred__19464.cljs$core$IFn$_invoke$arity$2 ? pred__19464.cljs$core$IFn$_invoke$arity$2(G__19469,G__19470) : pred__19464.call(null,G__19469,G__19470));
})())){
return (new schema.core.Record(self__.klass,G__19460,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19460),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19460){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__19460,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4423__auto__ = cljs.core.constant$keyword$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__4338__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.make_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var res = (function (){var G__19471 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__19471) : map_checker.call(null,G__19471));
})();
if(cljs.core.truth_(schema.utils.error_QMARK_(res))){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__19472 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__19472) : pred_checker.call(null,G__19472));
})():null);
if(cljs.core.truth_(schema.utils.error_QMARK_(pred_res))){
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

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__19462){
return (new schema.core.Record(cljs.core.constant$keyword$klass.cljs$core$IFn$_invoke$arity$1(G__19462),cljs.core.constant$keyword$schema.cljs$core$IFn$_invoke$arity$1(G__19462),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19462,cljs.core.constant$keyword$klass,cljs.core.array_seq([cljs.core.constant$keyword$schema], 0)),null));
});

/**
 * A Record instance of type klass, whose elements match map schema 'schema'.
 */
schema.core.record = (function schema$core$record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__19477 = cljs.core.split_with((function (p1__19474_SHARP_){
return (p1__19474_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19477,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19477,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19477,required,more){
return (function (p1__19475_SHARP_){
return schema.core.explain(p1__19475_SHARP_.schema);
});})(vec__19477,required,more))
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
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4933__auto__,k__4934__auto__){
var self__ = this;
var this__4933__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4933__auto____$1,k__4934__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4935__auto__,k19479,else__4936__auto__){
var self__ = this;
var this__4935__auto____$1 = this;
var G__19481 = (((k19479 instanceof cljs.core.Keyword))?k19479.fqn:null);
switch (G__19481) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19479,else__4936__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4947__auto__,writer__4948__auto__,opts__4949__auto__){
var self__ = this;
var this__4947__auto____$1 = this;
var pr_pair__4950__auto__ = ((function (this__4947__auto____$1){
return (function (keyval__4951__auto__){
return cljs.core.pr_sequential_writer(writer__4948__auto__,cljs.core.pr_writer,""," ","",opts__4949__auto__,keyval__4951__auto__);
});})(this__4947__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4948__auto__,pr_pair__4950__auto__,"#schema.core.FnSchema{",", ","}",opts__4949__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4931__auto__){
var self__ = this;
var this__4931__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4927__auto__){
var self__ = this;
var this__4927__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4937__auto__){
var self__ = this;
var this__4937__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4928__auto__){
var self__ = this;
var this__4928__auto____$1 = this;
var h__4754__auto__ = self__.__hash;
if(!((h__4754__auto__ == null))){
return h__4754__auto__;
} else {
var h__4754__auto____$1 = cljs.core.hash_imap(this__4928__auto____$1);
self__.__hash = h__4754__auto____$1;

return h__4754__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4929__auto__,other__4930__auto__){
var self__ = this;
var this__4929__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4326__auto__ = other__4930__auto__;
if(cljs.core.truth_(and__4326__auto__)){
var and__4326__auto____$1 = (this__4929__auto____$1.constructor === other__4930__auto__.constructor);
if(and__4326__auto____$1){
return cljs.core.equiv_map(this__4929__auto____$1,other__4930__auto__);
} else {
return and__4326__auto____$1;
}
} else {
return and__4326__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4942__auto__,k__4943__auto__){
var self__ = this;
var this__4942__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$output_DASH_schema,null,cljs.core.constant$keyword$input_DASH_schemas,null], null), null),k__4943__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4942__auto____$1),self__.__meta),k__4943__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4943__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4940__auto__,k__4941__auto__,G__19478){
var self__ = this;
var this__4940__auto____$1 = this;
var pred__19482 = cljs.core.keyword_identical_QMARK_;
var expr__19483 = k__4941__auto__;
if(cljs.core.truth_((function (){var G__19485 = cljs.core.constant$keyword$output_DASH_schema;
var G__19486 = expr__19483;
return (pred__19482.cljs$core$IFn$_invoke$arity$2 ? pred__19482.cljs$core$IFn$_invoke$arity$2(G__19485,G__19486) : pred__19482.call(null,G__19485,G__19486));
})())){
return (new schema.core.FnSchema(G__19478,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19487 = cljs.core.constant$keyword$input_DASH_schemas;
var G__19488 = expr__19483;
return (pred__19482.cljs$core$IFn$_invoke$arity$2 ? pred__19482.cljs$core$IFn$_invoke$arity$2(G__19487,G__19488) : pred__19482.call(null,G__19487,G__19488));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__19478,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4941__auto__,G__19478),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4945__auto__){
var self__ = this;
var this__4945__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4932__auto__,G__19478){
var self__ = this;
var this__4932__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__19478,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4938__auto__,entry__4939__auto__){
var self__ = this;
var this__4938__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4939__auto__)){
return cljs.core._assoc(this__4938__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4939__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4938__auto____$1,entry__4939__auto__);
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
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
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

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__4967__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__4967__auto__,writer__4968__auto__){
return cljs.core._write(writer__4968__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__19480){
return (new schema.core.FnSchema(cljs.core.constant$keyword$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__19480),cljs.core.constant$keyword$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__19480),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19480,cljs.core.constant$keyword$output_DASH_schema,cljs.core.array_seq([cljs.core.constant$keyword$input_DASH_schemas], 0)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
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
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
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
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){

return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.constant$keyword$name,name);
});
schema.core.schema_name = (function schema$core$schema_name(schema__$1){

return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){

return cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__4338__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__4338__auto__)){
return or__4338__auto__;
} else {
var m__10037__auto__ = cljs.core.meta(f);
var k__10038__auto__ = cljs.core.constant$keyword$schema;
var temp__4421__auto__ = cljs.core.find(m__10037__auto__,k__10038__auto__);
if(cljs.core.truth_(temp__4421__auto__)){
var pair__10039__auto__ = temp__4421__auto__;
return cljs.core.val(pair__10039__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__10038__auto__,m__10037__auto__], 0))));
}
}
});
