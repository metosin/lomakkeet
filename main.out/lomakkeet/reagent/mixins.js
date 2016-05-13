// Compiled by ClojureScript 1.7.170 {}
goog.provide('lomakkeet.reagent.mixins');
goog.require('cljs.core');
goog.require('lomakkeet.util');
goog.require('goog.events');
goog.require('goog.events.EventType');
/**
 * Returns a function which can be called to remove the event handlers.
 */
lomakkeet.reagent.mixins.create_closable = (function lomakkeet$reagent$mixins$create_closable(close_cb){
var click_handler = goog.events.listen(window,goog.events.EventType.CLICK,(function (e){
close_cb.call(null);

return null;
}));
var key_handler = goog.events.listen(window,goog.events.EventType.KEYUP,((function (click_handler){
return (function (e){
var G__11595_11596 = e.key;
switch (G__11595_11596) {
case "Esc":
close_cb.call(null);

break;
default:

}

return null;
});})(click_handler))
);
return ((function (click_handler,key_handler){
return (function (){
goog.events.unlistenByKey(click_handler);

return goog.events.unlistenByKey(key_handler);
});
;})(click_handler,key_handler))
});

//# sourceMappingURL=mixins.js.map