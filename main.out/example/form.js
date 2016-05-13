// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.form');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('schema.core');
goog.require('lomakkeet.reagent');
goog.require('devcards.core');
/**
 * 
 */
example.form.SimpleForm = cljs.core.vary_meta.call(null,schema.core.schema_with_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.constrained.call(null,schema.core.Str,cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null)),new cljs.core.Keyword(null,"email","email",1415816706),schema.core.constrained.call(null,schema.core.Str,cljs.core.seq,new cljs.core.Symbol(null,"required","required",-846788763,null)),new cljs.core.Keyword(null,"yes","yes",182838819),schema.core.Bool,new cljs.core.Keyword(null,"postalcode","postalcode",1580803416),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),schema.core.Str,new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str], null))], null),new cljs.core.Symbol(null,"SimpleForm","SimpleForm",-52023020,null)),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"example.form","example.form",257630564,null));
example.form.simple_form_SINGLEQUOTE_ = (function example$form$simple_form_SINGLEQUOTE_(state){
var form = lomakkeet.reagent.create_form.call(null,state);
return ((function (form){
return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.input,form,"Name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.input,form,"Email",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.checkbox,form,"Yes or no",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yes","yes",182838819)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lomakkeet.reagent.complete,form,"Postalcode",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"postalcode","postalcode",1580803416)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item->value","item->value",370830851),((function (form){
return (function (p1__20986_SHARP_){
return cljs.core.select_keys.call(null,p1__20986_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});})(form))
,new cljs.core.Keyword(null,"item->text","item->text",914440483),((function (form){
return (function (p1__20987_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__20987_SHARP_)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20987_SHARP_))].join('');
});})(form))
,new cljs.core.Keyword(null,"value->text","value->text",-2066558161),((function (form){
return (function (___$1,v){
if(cljs.core.truth_(v)){
return [cljs.core.str(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(v)),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v))].join('');
} else {
return null;
}
});})(form))
,new cljs.core.Keyword(null,"search-fields","search-fields",641290308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),"33720",new cljs.core.Keyword(null,"name","name",1843675177),"Tampere"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),"33100",new cljs.core.Keyword(null,"name","name",1843675177),"Tampere"], null)], null)], null)], null)], null)], null);
});
;})(form))
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.form","example.form",-1382900963),new cljs.core.Keyword(null,"simple-form","simple-form",-1671417247)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-form",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof example.form.t_example$form20988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.form.t_example$form20988 = (function (meta20989){
this.meta20989 = meta20989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
example.form.t_example$form20988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20990,meta20989__$1){
var self__ = this;
var _20990__$1 = this;
return (new example.form.t_example$form20988(meta20989__$1));
});

example.form.t_example$form20988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20990){
var self__ = this;
var _20990__$1 = this;
return self__.meta20989;
});

example.form.t_example$form20988.prototype.devcards$core$IDevcardOptions$ = true;

example.form.t_example$form20988.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__18502__auto__,devcard_opts__18503__auto__){
var self__ = this;
var this__18502__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__18503__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__18521__auto__ = ((function (this__18502__auto____$1){
return (function (state,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.form.simple_form_SINGLEQUOTE_,state], null);
});})(this__18502__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__18521__auto__)){
return ((function (v__18521__auto__,this__18502__auto____$1){
return (function (data_atom__18522__auto__,owner__18523__auto__){
return reagent.core.as_element.call(null,v__18521__auto__.call(null,data_atom__18522__auto__,owner__18523__auto__));
});
;})(v__18521__auto__,this__18502__auto____$1))
} else {
return reagent.core.as_element.call(null,v__18521__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__18503__auto__))));
});

example.form.t_example$form20988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta20989","meta20989",307214617,null)], null);
});

example.form.t_example$form20988.cljs$lang$type = true;

example.form.t_example$form20988.cljs$lang$ctorStr = "example.form/t_example$form20988";

example.form.t_example$form20988.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"example.form/t_example$form20988");
});

example.form.__GT_t_example$form20988 = (function example$form$__GT_t_example$form20988(meta20989){
return (new example.form.t_example$form20988(meta20989));
});

}

return (new example.form.t_example$form20988(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,lomakkeet.reagent.__GT_fs.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Foo",new cljs.core.Keyword(null,"email","email",1415816706),"Bar",new cljs.core.Keyword(null,"postalcode","postalcode",1580803416),null], null),example.form.SimpleForm)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=form.js.map