// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('example.main');
adzerk.boot_reload.client.connect.call(null,"ws://localhost:40232",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return example.main.restart_BANG_.call(null);
})], null));

//# sourceMappingURL=boot_reload.js.map