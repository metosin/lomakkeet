// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7120_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7120_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7125 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7126 = null;
var count__7127 = (0);
var i__7128 = (0);
while(true){
if((i__7128 < count__7127)){
var s = cljs.core._nth.call(null,chunk__7126,i__7128);
var temp__4425__auto___7129 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7129)){
var sheet_7130 = temp__4425__auto___7129;
var temp__4425__auto___7131__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7130.href,changed);
if(cljs.core.truth_(temp__4425__auto___7131__$1)){
var href_uri_7132 = temp__4425__auto___7131__$1;
sheet_7130.ownerNode.href = href_uri_7132.makeUnique().toString();
} else {
}
} else {
}

var G__7133 = seq__7125;
var G__7134 = chunk__7126;
var G__7135 = count__7127;
var G__7136 = (i__7128 + (1));
seq__7125 = G__7133;
chunk__7126 = G__7134;
count__7127 = G__7135;
i__7128 = G__7136;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7125);
if(temp__4425__auto__){
var seq__7125__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7125__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7125__$1);
var G__7137 = cljs.core.chunk_rest.call(null,seq__7125__$1);
var G__7138 = c__5791__auto__;
var G__7139 = cljs.core.count.call(null,c__5791__auto__);
var G__7140 = (0);
seq__7125 = G__7137;
chunk__7126 = G__7138;
count__7127 = G__7139;
i__7128 = G__7140;
continue;
} else {
var s = cljs.core.first.call(null,seq__7125__$1);
var temp__4425__auto___7141__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7141__$1)){
var sheet_7142 = temp__4425__auto___7141__$1;
var temp__4425__auto___7143__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7142.href,changed);
if(cljs.core.truth_(temp__4425__auto___7143__$2)){
var href_uri_7144 = temp__4425__auto___7143__$2;
sheet_7142.ownerNode.href = href_uri_7144.makeUnique().toString();
} else {
}
} else {
}

var G__7145 = cljs.core.next.call(null,seq__7125__$1);
var G__7146 = null;
var G__7147 = (0);
var G__7148 = (0);
seq__7125 = G__7145;
chunk__7126 = G__7146;
count__7127 = G__7147;
i__7128 = G__7148;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7153 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7154 = null;
var count__7155 = (0);
var i__7156 = (0);
while(true){
if((i__7156 < count__7155)){
var s = cljs.core._nth.call(null,chunk__7154,i__7156);
var temp__4425__auto___7157 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7157)){
var image_7158 = temp__4425__auto___7157;
var temp__4425__auto___7159__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7158.src,changed);
if(cljs.core.truth_(temp__4425__auto___7159__$1)){
var href_uri_7160 = temp__4425__auto___7159__$1;
image_7158.src = href_uri_7160.makeUnique().toString();
} else {
}
} else {
}

var G__7161 = seq__7153;
var G__7162 = chunk__7154;
var G__7163 = count__7155;
var G__7164 = (i__7156 + (1));
seq__7153 = G__7161;
chunk__7154 = G__7162;
count__7155 = G__7163;
i__7156 = G__7164;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7153);
if(temp__4425__auto__){
var seq__7153__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7153__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7153__$1);
var G__7165 = cljs.core.chunk_rest.call(null,seq__7153__$1);
var G__7166 = c__5791__auto__;
var G__7167 = cljs.core.count.call(null,c__5791__auto__);
var G__7168 = (0);
seq__7153 = G__7165;
chunk__7154 = G__7166;
count__7155 = G__7167;
i__7156 = G__7168;
continue;
} else {
var s = cljs.core.first.call(null,seq__7153__$1);
var temp__4425__auto___7169__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7169__$1)){
var image_7170 = temp__4425__auto___7169__$1;
var temp__4425__auto___7171__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7170.src,changed);
if(cljs.core.truth_(temp__4425__auto___7171__$2)){
var href_uri_7172 = temp__4425__auto___7171__$2;
image_7170.src = href_uri_7172.makeUnique().toString();
} else {
}
} else {
}

var G__7173 = cljs.core.next.call(null,seq__7153__$1);
var G__7174 = null;
var G__7175 = (0);
var G__7176 = (0);
seq__7153 = G__7173;
chunk__7154 = G__7174;
count__7155 = G__7175;
i__7156 = G__7176;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7179){
var map__7182 = p__7179;
var map__7182__$1 = ((((!((map__7182 == null)))?((((map__7182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7182):map__7182);
var on_jsload = cljs.core.get.call(null,map__7182__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7182,map__7182__$1,on_jsload){
return (function (p1__7177_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7177_SHARP_,".js");
});})(map__7182,map__7182__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7182,map__7182__$1,on_jsload){
return (function (p1__7178_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7178_SHARP_).makeUnique());
});})(js_files,map__7182,map__7182__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7182,map__7182__$1,on_jsload){
return (function() { 
var G__7184__delegate = function (_){
return on_jsload.call(null);
};
var G__7184 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7185__i = 0, G__7185__a = new Array(arguments.length -  0);
while (G__7185__i < G__7185__a.length) {G__7185__a[G__7185__i] = arguments[G__7185__i + 0]; ++G__7185__i;}
  _ = new cljs.core.IndexedSeq(G__7185__a,0);
} 
return G__7184__delegate.call(this,_);};
G__7184.cljs$lang$maxFixedArity = 0;
G__7184.cljs$lang$applyTo = (function (arglist__7186){
var _ = cljs.core.seq(arglist__7186);
return G__7184__delegate(_);
});
G__7184.cljs$core$IFn$_invoke$arity$variadic = G__7184__delegate;
return G__7184;
})()
;})(js_files,map__7182,map__7182__$1,on_jsload))
,((function (js_files,map__7182,map__7182__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7182,map__7182__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7191_7195 = cljs.core.seq.call(null,things_to_log);
var chunk__7192_7196 = null;
var count__7193_7197 = (0);
var i__7194_7198 = (0);
while(true){
if((i__7194_7198 < count__7193_7197)){
var t_7199 = cljs.core._nth.call(null,chunk__7192_7196,i__7194_7198);
console.log(t_7199);

var G__7200 = seq__7191_7195;
var G__7201 = chunk__7192_7196;
var G__7202 = count__7193_7197;
var G__7203 = (i__7194_7198 + (1));
seq__7191_7195 = G__7200;
chunk__7192_7196 = G__7201;
count__7193_7197 = G__7202;
i__7194_7198 = G__7203;
continue;
} else {
var temp__4425__auto___7204 = cljs.core.seq.call(null,seq__7191_7195);
if(temp__4425__auto___7204){
var seq__7191_7205__$1 = temp__4425__auto___7204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7191_7205__$1)){
var c__5791__auto___7206 = cljs.core.chunk_first.call(null,seq__7191_7205__$1);
var G__7207 = cljs.core.chunk_rest.call(null,seq__7191_7205__$1);
var G__7208 = c__5791__auto___7206;
var G__7209 = cljs.core.count.call(null,c__5791__auto___7206);
var G__7210 = (0);
seq__7191_7195 = G__7207;
chunk__7192_7196 = G__7208;
count__7193_7197 = G__7209;
i__7194_7198 = G__7210;
continue;
} else {
var t_7211 = cljs.core.first.call(null,seq__7191_7205__$1);
console.log(t_7211);

var G__7212 = cljs.core.next.call(null,seq__7191_7205__$1);
var G__7213 = null;
var G__7214 = (0);
var G__7215 = (0);
seq__7191_7195 = G__7212;
chunk__7192_7196 = G__7213;
count__7193_7197 = G__7214;
i__7194_7198 = G__7215;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7217 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7217,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7217);

adzerk.boot_reload.reload.reload_css.call(null,G__7217);

adzerk.boot_reload.reload.reload_img.call(null,G__7217);

return G__7217;
});

//# sourceMappingURL=reload.js.map