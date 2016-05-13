// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__6053__auto__ = [];
var len__6046__auto___11768 = arguments.length;
var i__6047__auto___11769 = (0);
while(true){
if((i__6047__auto___11769 < len__6046__auto___11768)){
args__6053__auto__.push((arguments[i__6047__auto___11769]));

var G__11770 = (i__6047__auto___11769 + (1));
i__6047__auto___11769 = G__11770;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4988__auto__ = m;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5760__auto__ = (function schema$utils$iter__11760(s__11761){
return (new cljs.core.LazySeq(null,(function (){
var s__11761__$1 = s__11761;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11761__$1);
if(temp__4425__auto__){
var s__11761__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11761__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__11761__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__11763 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__11762 = (0);
while(true){
if((i__11762 < size__5759__auto__)){
var vec__11766 = cljs.core._nth.call(null,c__5758__auto__,i__11762);
var k = cljs.core.nth.call(null,vec__11766,(0),null);
var v = cljs.core.nth.call(null,vec__11766,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__11763,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11771 = (i__11762 + (1));
i__11762 = G__11771;
continue;
} else {
var G__11772 = (i__11762 + (1));
i__11762 = G__11772;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11763),schema$utils$iter__11760.call(null,cljs.core.chunk_rest.call(null,s__11761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11763),null);
}
} else {
var vec__11767 = cljs.core.first.call(null,s__11761__$2);
var k = cljs.core.nth.call(null,vec__11767,(0),null);
var v = cljs.core.nth.call(null,vec__11767,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__11760.call(null,cljs.core.rest.call(null,s__11761__$2)));
} else {
var G__11773 = cljs.core.rest.call(null,s__11761__$2);
s__11761__$1 = G__11773;
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
return iter__5760__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq11758){
var G__11759 = cljs.core.first.call(null,seq11758);
var seq11758__$1 = cljs.core.next.call(null,seq11758);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__11759,seq11758__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___11776 = arguments.length;
var i__6047__auto___11777 = (0);
while(true){
if((i__6047__auto___11777 < len__6046__auto___11776)){
args__6053__auto__.push((arguments[i__6047__auto___11777]));

var G__11778 = (i__6047__auto___11777 + (1));
i__6047__auto___11777 = G__11778;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq11774){
var G__11775 = cljs.core.first.call(null,seq11774);
var seq11774__$1 = cljs.core.next.call(null,seq11774);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__11775,seq11774__$1);
});
schema.utils.max_value_length = cljs.core.atom.call(null,(19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) <= cljs.core.deref.call(null,schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.call(null,(function (s__$1,p__11782){
var vec__11783 = p__11782;
var to = cljs.core.nth.call(null,vec__11783,(0),null);
var from = cljs.core.nth.call(null,vec__11783,(1),null);
return clojure.string.replace.call(null,s__$1,from,[cljs.core.str(to)].join(''));
}),s,cljs.core.sort_by.call(null,(function (p1__11779_SHARP_){
return (- cljs.core.count.call(null,cljs.core.second.call(null,p1__11779_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
return schema.utils.unmunge.call(null,(function (){var or__4988__auto__ = cljs.core.not_empty.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/function ([^\(]*)\(/,[cljs.core.str(f)].join(''))));
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return "function";
}
})());
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || (x.cljs$core$IRecord$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});
schema.utils.validation_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__4988__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.named_error_explain;

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5602__auto__,k__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
return cljs.core._lookup.call(null,this__5602__auto____$1,k__5603__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5604__auto__,k11787,else__5605__auto__){
var self__ = this;
var this__5604__auto____$1 = this;
var G__11789 = (((k11787 instanceof cljs.core.Keyword))?k11787.fqn:null);
switch (G__11789) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11787,else__5605__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5616__auto__,writer__5617__auto__,opts__5618__auto__){
var self__ = this;
var this__5616__auto____$1 = this;
var pr_pair__5619__auto__ = ((function (this__5616__auto____$1){
return (function (keyval__5620__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5617__auto__,cljs.core.pr_writer,""," ","",opts__5618__auto__,keyval__5620__auto__);
});})(this__5616__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5617__auto__,pr_pair__5619__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__5618__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = true;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11786){
var self__ = this;
var G__11786__$1 = this;
return (new cljs.core.RecordIter((0),G__11786__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5600__auto__){
var self__ = this;
var this__5600__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5596__auto__){
var self__ = this;
var this__5596__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5606__auto__){
var self__ = this;
var this__5606__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5597__auto__){
var self__ = this;
var this__5597__auto____$1 = this;
var h__5423__auto__ = self__.__hash;
if(!((h__5423__auto__ == null))){
return h__5423__auto__;
} else {
var h__5423__auto____$1 = cljs.core.hash_imap.call(null,this__5597__auto____$1);
self__.__hash = h__5423__auto____$1;

return h__5423__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5598__auto__,other__5599__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4976__auto__ = other__5599__auto__;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = (this__5598__auto____$1.constructor === other__5599__auto__.constructor);
if(and__4976__auto____$1){
return cljs.core.equiv_map.call(null,this__5598__auto____$1,other__5599__auto__);
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5611__auto__,k__5612__auto__){
var self__ = this;
var this__5611__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__5612__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5611__auto____$1),self__.__meta),k__5612__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5612__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5609__auto__,k__5610__auto__,G__11786){
var self__ = this;
var this__5609__auto____$1 = this;
var pred__11790 = cljs.core.keyword_identical_QMARK_;
var expr__11791 = k__5610__auto__;
if(cljs.core.truth_(pred__11790.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__11791))){
return (new schema.utils.ErrorContainer(G__11786,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5610__auto__,G__11786),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5614__auto__){
var self__ = this;
var this__5614__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5601__auto__,G__11786){
var self__ = this;
var this__5601__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__11786,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5607__auto__,entry__5608__auto__){
var self__ = this;
var this__5607__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5608__auto__)){
return cljs.core._assoc.call(null,this__5607__auto____$1,cljs.core._nth.call(null,entry__5608__auto__,(0)),cljs.core._nth.call(null,entry__5608__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5607__auto____$1,entry__5608__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__5636__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__5636__auto__,writer__5637__auto__){
return cljs.core._write.call(null,writer__5637__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__11788){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__11788),null,cljs.core.dissoc.call(null,G__11788,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,x))){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

/**
 * @interface
 */
schema.utils.PSimpleCell = function(){};

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$get_cell$arity$1 == null)))){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__5643__auto__ = (((this$ == null))?null:this$);
var m__5644__auto__ = (schema.utils.get_cell[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,this$);
} else {
var m__5644__auto____$1 = (schema.utils.get_cell["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((!((this$ == null))) && (!((this$.schema$utils$PSimpleCell$set_cell$arity$2 == null)))){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__5643__auto__ = (((this$ == null))?null:this$);
var m__5644__auto__ = (schema.utils.set_cell[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,this$,x);
} else {
var m__5644__auto____$1 = (schema.utils.set_cell["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
}
});


/**
* @constructor
 * @implements {schema.utils.PSimpleCell}
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

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

//# sourceMappingURL=utils.js.map