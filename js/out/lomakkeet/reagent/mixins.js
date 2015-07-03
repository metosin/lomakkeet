// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
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
var G__17440 = open_QMARK_;
var G__17441 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17440,G__17441) : cljs.core.reset_BANG_.call(null,G__17440,G__17441));
});
var key_handler = ((function (click_handler){
return (function (e){
var G__17442 = e.key;
switch (G__17442) {
case "Esc":
var G__17443 = open_QMARK_;
var G__17444 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17443,G__17444) : cljs.core.reset_BANG_.call(null,G__17443,G__17444));

break;
default:
return null;

}
});})(click_handler))
;
var G__17445_17458 = window;
var G__17446_17459 = goog.events.EventType.CLICK;
var G__17447_17460 = click_handler;
goog.events.listen(G__17445_17458,G__17446_17459,G__17447_17460);

var G__17448_17461 = window;
var G__17449_17462 = goog.events.EventType.KEYUP;
var G__17450_17463 = key_handler;
goog.events.listen(G__17448_17461,G__17449_17462,G__17450_17463);

return ((function (click_handler,key_handler){
return (function (){
var G__17451_17464 = window;
var G__17452_17465 = goog.events.EventType.CLICK;
var G__17453_17466 = click_handler;
goog.events.unlisten(G__17451_17464,G__17452_17465,G__17453_17466);

var G__17454 = window;
var G__17455 = goog.events.EventType.KEYUP;
var G__17456 = key_handler;
return goog.events.unlisten(G__17454,G__17455,G__17456);
});
;})(click_handler,key_handler))
});
