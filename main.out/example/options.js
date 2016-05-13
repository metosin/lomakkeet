// Compiled by ClojureScript 1.7.170 {}
goog.provide('example.options');
goog.require('cljs.core');
goog.require('reagent.core');
example.options.field = (function example$options$field(k,value,type,cb){
var G__18971 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18971) {
case "string":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__18971){
return (function (p1__18968_SHARP_){
return cb.call(null,p1__18968_SHARP_.target.value);
});})(G__18971))
], null)], null);

break;
case "bool":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (G__18971){
return (function (p1__18969_SHARP_){
return cb.call(null,p1__18969_SHARP_.target.checked);
});})(G__18971))
], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
example.options.table = (function example$options$table(current,cb,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Value"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5760__auto__ = (function example$options$table_$_iter__18981(s__18982){
return (new cljs.core.LazySeq(null,(function (){
var s__18982__$1 = s__18982;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18982__$1);
if(temp__4425__auto__){
var s__18982__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18982__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__18982__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__18984 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__18983 = (0);
while(true){
if((i__18983 < size__5759__auto__)){
var vec__18987 = cljs.core._nth.call(null,c__5758__auto__,i__18983);
var k = cljs.core.nth.call(null,vec__18987,(0),null);
var type = cljs.core.nth.call(null,vec__18987,(1),null);
cljs.core.chunk_append.call(null,b__18984,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":",cljs.core.name.call(null,k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.call(null,current,k),type,((function (i__18983,vec__18987,k,type,c__5758__auto__,size__5759__auto__,b__18984,s__18982__$2,temp__4425__auto__){
return (function (v){
return cb.call(null,k,v);
});})(i__18983,vec__18987,k,type,c__5758__auto__,size__5759__auto__,b__18984,s__18982__$2,temp__4425__auto__))
], null)], null)], null));

var G__18989 = (i__18983 + (1));
i__18983 = G__18989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18984),example$options$table_$_iter__18981.call(null,cljs.core.chunk_rest.call(null,s__18982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18984),null);
}
} else {
var vec__18988 = cljs.core.first.call(null,s__18982__$2);
var k = cljs.core.nth.call(null,vec__18988,(0),null);
var type = cljs.core.nth.call(null,vec__18988,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":",cljs.core.name.call(null,k)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.options.field,k,cljs.core.get.call(null,current,k),type,((function (vec__18988,k,type,s__18982__$2,temp__4425__auto__){
return (function (v){
return cb.call(null,k,v);
});})(vec__18988,k,type,s__18982__$2,temp__4425__auto__))
], null)], null)], null),example$options$table_$_iter__18981.call(null,cljs.core.rest.call(null,s__18982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,options);
})()], null)], null);
});

//# sourceMappingURL=options.js.map