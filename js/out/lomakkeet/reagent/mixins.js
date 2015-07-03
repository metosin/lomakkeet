// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('lomakkeet.reagent.mixins');
goog.require('cljs.core');
goog.require('lomakkeet.util');
goog.require('goog.events');
goog.require('goog.events.EventType');
/**
 * Returns a function which can be called to remove the event handlers.
 */
lomakkeet.reagent.mixins.create_closable = (function lomakkeet$reagent$mixins$create_closable(open_QMARK_){
var click_handler = (function (e){
var G__17446 = open_QMARK_;
var G__17447 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17446,G__17447) : cljs.core.reset_BANG_.call(null,G__17446,G__17447));
});
var key_handler = ((function (click_handler){
return (function (e){
var G__17448 = e.key;
switch (G__17448) {
case "Esc":
var G__17449 = open_QMARK_;
var G__17450 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17449,G__17450) : cljs.core.reset_BANG_.call(null,G__17449,G__17450));

break;
default:
return null;

}
});})(click_handler))
;
var G__17451_17464 = window;
var G__17452_17465 = goog.events.EventType.CLICK;
var G__17453_17466 = click_handler;
goog.events.listen(G__17451_17464,G__17452_17465,G__17453_17466);

var G__17454_17467 = window;
var G__17455_17468 = goog.events.EventType.KEYUP;
var G__17456_17469 = key_handler;
goog.events.listen(G__17454_17467,G__17455_17468,G__17456_17469);

return ((function (click_handler,key_handler){
return (function (){
var G__17457_17470 = window;
var G__17458_17471 = goog.events.EventType.CLICK;
var G__17459_17472 = click_handler;
goog.events.unlisten(G__17457_17470,G__17458_17471,G__17459_17472);

var G__17460 = window;
var G__17461 = goog.events.EventType.KEYUP;
var G__17462 = key_handler;
return goog.events.unlisten(G__17460,G__17461,G__17462);
});
;})(click_handler,key_handler))
});
