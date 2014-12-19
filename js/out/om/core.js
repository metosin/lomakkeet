// Compiled by ClojureScript 0.0-2496
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj32137 = {};
return obj32137;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.display_name[(function (){var G__32141 = x__4272__auto__;
return goog.typeOf(G__32141);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.display_name["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj32143 = {};
return obj32143;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.init_state[(function (){var G__32147 = x__4272__auto__;
return goog.typeOf(G__32147);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.init_state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj32149 = {};
return obj32149;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.should_update[(function (){var G__32153 = x__4272__auto__;
return goog.typeOf(G__32153);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.should_update["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj32155 = {};
return obj32155;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.will_mount[(function (){var G__32159 = x__4272__auto__;
return goog.typeOf(G__32159);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.will_mount["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj32161 = {};
return obj32161;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.did_mount[(function (){var G__32165 = x__4272__auto__;
return goog.typeOf(G__32165);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.did_mount["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj32167 = {};
return obj32167;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.will_unmount[(function (){var G__32171 = x__4272__auto__;
return goog.typeOf(G__32171);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.will_unmount["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj32173 = {};
return obj32173;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.will_update[(function (){var G__32177 = x__4272__auto__;
return goog.typeOf(G__32177);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.will_update["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj32179 = {};
return obj32179;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.did_update[(function (){var G__32183 = x__4272__auto__;
return goog.typeOf(G__32183);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.did_update["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj32185 = {};
return obj32185;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.will_receive_props[(function (){var G__32189 = x__4272__auto__;
return goog.typeOf(G__32189);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj32191 = {};
return obj32191;
})();

om.core.render = (function render(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.render[(function (){var G__32195 = x__4272__auto__;
return goog.typeOf(G__32195);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.render["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj32197 = {};
return obj32197;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.render_props[(function (){var G__32201 = x__4272__auto__;
return goog.typeOf(G__32201);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.render_props["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj32203 = {};
return obj32203;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core.render_state[(function (){var G__32207 = x__4272__auto__;
return goog.typeOf(G__32207);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core.render_state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj32209 = {};
return obj32209;
})();


om.core.IOmSwap = (function (){var obj32211 = {};
return obj32211;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._om_swap_BANG_[(function (){var G__32215 = x__4272__auto__;
return goog.typeOf(G__32215);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj32217 = {};
return obj32217;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_state[(function (){var G__32223 = x__4272__auto__;
return goog.typeOf(G__32223);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_state[(function (){var G__32225 = x__4272__auto__;
return goog.typeOf(G__32225);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj32227 = {};
return obj32227;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_render_state[(function (){var G__32233 = x__4272__auto__;
return goog.typeOf(G__32233);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_render_state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_render_state[(function (){var G__32235 = x__4272__auto__;
return goog.typeOf(G__32235);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_render_state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj32237 = {};
return obj32237;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._set_state_BANG_[(function (){var G__32243 = x__4272__auto__;
return goog.typeOf(G__32243);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._set_state_BANG_[(function (){var G__32245 = x__4272__auto__;
return goog.typeOf(G__32245);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj32247 = {};
return obj32247;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_queue[(function (){var G__32251 = x__4272__auto__;
return goog.typeOf(G__32251);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_queue["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._queue_render_BANG_[(function (){var G__32255 = x__4272__auto__;
return goog.typeOf(G__32255);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._empty_queue_BANG_[(function (){var G__32259 = x__4272__auto__;
return goog.typeOf(G__32259);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj32261 = {};
return obj32261;
})();

om.core._value = (function _value(x){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3616__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (om.core._value[(function (){var G__32265 = x__4272__auto__;
return goog.typeOf(G__32265);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._value["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj32267 = {};
return obj32267;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3616__auto__ = cursor;
if(and__3616__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3616__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4272__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3628__auto__ = (om.core._path[(function (){var G__32271 = x__4272__auto__;
return goog.typeOf(G__32271);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._path["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3616__auto__ = cursor;
if(and__3616__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3616__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4272__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3628__auto__ = (om.core._state[(function (){var G__32275 = x__4272__auto__;
return goog.typeOf(G__32275);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._state["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj32277 = {};
return obj32277;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3616__auto__ = value;
if(and__3616__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3616__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4272__auto__ = (((value == null))?null:value);
return (function (){var or__3628__auto__ = (om.core._to_cursor[(function (){var G__32283 = x__4272__auto__;
return goog.typeOf(G__32283);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._to_cursor["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3616__auto__ = value;
if(and__3616__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3616__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4272__auto__ = (((value == null))?null:value);
return (function (){var or__3628__auto__ = (om.core._to_cursor[(function (){var G__32285 = x__4272__auto__;
return goog.typeOf(G__32285);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._to_cursor["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj32287 = {};
return obj32287;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3616__auto__ = cursor;
if(and__3616__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3616__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4272__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3628__auto__ = (om.core._derive[(function (){var G__32291 = x__4272__auto__;
return goog.typeOf(G__32291);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._derive["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__32292 = derived;
var G__32293 = state;
var G__32294 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__32292,G__32293,G__32294) : om.core.to_cursor.call(null,G__32292,G__32293,G__32294));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj32296 = {};
return obj32296;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3616__auto__ = cursor;
if(and__3616__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4272__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3628__auto__ = (om.core._transact_BANG_[(function (){var G__32300 = x__4272__auto__;
return goog.typeOf(G__32300);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj32302 = {};
return obj32302;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (om.core._listen_BANG_[(function (){var G__32306 = x__4272__auto__;
return goog.typeOf(G__32306);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (om.core._unlisten_BANG_[(function (){var G__32310 = x__4272__auto__;
return goog.typeOf(G__32310);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3616__auto__ = x;
if(and__3616__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4272__auto__ = (((x == null))?null:x);
return (function (){var or__3628__auto__ = (om.core._notify_BANG_[(function (){var G__32314 = x__4272__auto__;
return goog.typeOf(G__32314);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj32316 = {};
return obj32316;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._set_property_BANG_[(function (){var G__32320 = x__4272__auto__;
return goog.typeOf(G__32320);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._remove_property_BANG_[(function (){var G__32324 = x__4272__auto__;
return goog.typeOf(G__32324);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._remove_properties_BANG_[(function (){var G__32328 = x__4272__auto__;
return goog.typeOf(G__32328);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_property[(function (){var G__32332 = x__4272__auto__;
return goog.typeOf(G__32332);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_property["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj32334 = {};
return obj32334;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3616__auto__ = cursor;
if(and__3616__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3616__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4272__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3628__auto__ = (om.core._root_key[(function (){var G__32338 = x__4272__auto__;
return goog.typeOf(G__32338);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._root_key["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj32340 = {};
return obj32340;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._adapt[(function (){var G__32344 = x__4272__auto__;
return goog.typeOf(G__32344);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._adapt["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj32346 = {};
return obj32346;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._add_dep_BANG_[(function (){var G__32350 = x__4272__auto__;
return goog.typeOf(G__32350);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._remove_dep_BANG_[(function (){var G__32354 = x__4272__auto__;
return goog.typeOf(G__32354);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__32358 = x__4272__auto__;
return goog.typeOf(G__32358);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3616__auto__ = this$;
if(and__3616__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3616__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4272__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3628__auto__ = (om.core._get_deps[(function (){var G__32362 = x__4272__auto__;
return goog.typeOf(G__32362);
})()]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (om.core._get_deps["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__32372 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32372) : cljs.core.deref.call(null,G__32372));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__32373 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32373) : om.core.path.call(null,G__32373));
})(),korks);
var ret = (((function (){var G__32374 = state;
if(G__32374){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32374.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__32374.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__32374);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__32374);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$56)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$57,path,cljs.core.constant$keyword$58,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$59,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32375 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32375) : cljs.core.deref.call(null,G__32375));
})(),path),cljs.core.constant$keyword$60,old_state,cljs.core.constant$keyword$61,(function (){var G__32376 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32376) : cljs.core.deref.call(null,G__32376));
})()], null);
if(!((tag == null))){
var G__32377 = cursor;
var G__32378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$62,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__32377,G__32378) : om.core.notify_STAR_.call(null,G__32377,G__32378));
} else {
var G__32379 = cursor;
var G__32380 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__32379,G__32380) : om.core.notify_STAR_.call(null,G__32379,G__32380));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__32382 = x;
if(G__32382){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32382.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__32382.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32382);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32382);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__32384 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__32384) : c.call(null,G__32384));
})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__32389 = state;
(G__32389["__om_prev_state"] = (state["__om_state"]));

(G__32389["__om_state"] = pending_state);

(G__32389["__om_pending_state"] = null);

return G__32389;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3628__auto__ = props;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3628__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32394 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32394) : cljs.core.deref.call(null,G__32394));
})(),(function (){var G__32395 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32395) : om.core.path.call(null,G__32395));
})(),cljs.core.constant$keyword$63);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__32401 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32401) : om.core.path.call(null,G__32401));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32402 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32402) : cljs.core.deref.call(null,G__32402));
})(),ref_path,cljs.core.constant$keyword$63);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$63)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__32403 = ref_val_SINGLEQUOTE_;
var G__32404 = ref_state;
var G__32405 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__32403,G__32404,G__32405) : om.core.to_cursor.call(null,G__32403,G__32404,G__32405));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$64,cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69,cljs.core.constant$keyword$70,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72,cljs.core.constant$keyword$73,cljs.core.constant$keyword$74],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__32407 = c;
if(G__32407){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32407.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__32407.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32407);
}
})()){
var state_32432 = this$.state;
om.core.did_update(c,om.core.get_props({"isOmComponent": true, "props": prev_props}),(function (){var or__3628__auto__ = (state_32432["__om_prev_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (state_32432["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__32408 = c;
if(G__32408){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32408.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__32408.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32408);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32408);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__32409 = cljs.core.seq(refs);
var chunk__32410 = null;
var count__32411 = (0);
var i__32412 = (0);
while(true){
if((i__32412 < count__32411)){
var ref = chunk__32410.cljs$core$IIndexed$_nth$arity$2(null,i__32412);
var G__32413_32433 = this$;
var G__32414_32434 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32413_32433,G__32414_32434) : om.core.unobserve.call(null,G__32413_32433,G__32414_32434));

var G__32435 = seq__32409;
var G__32436 = chunk__32410;
var G__32437 = count__32411;
var G__32438 = (i__32412 + (1));
seq__32409 = G__32435;
chunk__32410 = G__32436;
count__32411 = G__32437;
i__32412 = G__32438;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__32409);
if(temp__4126__auto____$1){
var seq__32409__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32409__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__32409__$1);
var G__32439 = cljs.core.chunk_rest(seq__32409__$1);
var G__32440 = c__4415__auto__;
var G__32441 = cljs.core.count(c__4415__auto__);
var G__32442 = (0);
seq__32409 = G__32439;
chunk__32410 = G__32440;
count__32411 = G__32441;
i__32412 = G__32442;
continue;
} else {
var ref = cljs.core.first(seq__32409__$1);
var G__32415_32443 = this$;
var G__32416_32444 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32415_32443,G__32416_32444) : om.core.unobserve.call(null,G__32415_32443,G__32416_32444));

var G__32445 = cljs.core.next(seq__32409__$1);
var G__32446 = null;
var G__32447 = (0);
var G__32448 = (0);
seq__32409 = G__32445;
chunk__32410 = G__32446;
count__32411 = G__32447;
i__32412 = G__32448;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__32417 = c;
if(G__32417){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32417.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__32417.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__32417);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__32417);
}
})()){
return om.core.will_receive_props(c,om.core.get_props({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__32418 = c;
if(G__32418){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32418.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__32418.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__32418);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__32418);
}
})()){
return om.core.should_update(c,om.core.get_props({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3616__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__3616__auto__){
return cljs.core.some(((function (and__3616__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__32406_SHARP_){
return om.core.ref_changed_QMARK_(p1__32406_SHARP_);
});})(and__3616__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3616__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_32419 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32420 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32421 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32422 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32423 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__32424 = c;
if(G__32424){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32424.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__32424.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32424);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32424);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__32425 = c;
if(G__32425){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32425.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__32425.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32425);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32425);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__32426 = c;
if(G__32426){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32426.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__32426.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32426);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32426);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32423;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32422;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32421;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32420;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32419;
}}),(function (next_props,next_state){
var this$ = this;
var c_32449 = om.core.children(this$);
if((function (){var G__32427 = c_32449;
if(G__32427){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32427.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__32427.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32427);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32427);
}
})()){
var state_32450 = this$.state;
om.core.will_update(c_32449,om.core.get_props({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3628__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__32428 = c;
if(G__32428){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32428.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__32428.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32428);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32428);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$75)], 0)), "__om_id": (function (){var or__3628__auto__ = id;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__32429 = c;
if(G__32429){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32429.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__32429.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__32429);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__32429);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__32430 = c;
if(G__32430){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32430.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__32430.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__32430);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__32430);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_32451 = om.core.children(this$);
if((function (){var G__32431 = c_32451;
if(G__32431){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32431.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__32431.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32431);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32431);
}
})()){
om.core.will_mount(c_32451);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x32453 = obj;
x32453.om$core$IGetState$ = true;

x32453.om$core$IGetState$_get_state$arity$1 = ((function (x32453){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3628__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (state["__om_state"]);
}
});})(x32453))
;

x32453.om$core$IGetState$_get_state$arity$2 = ((function (x32453){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32453))
;

x32453.om$core$IGetRenderState$ = true;

x32453.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32453){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32453))
;

x32453.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32453){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32453))
;

x32453.om$core$ISetState$ = true;

x32453.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32453){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3616__auto__ = !((app_state == null));
if(and__3616__auto__){
return render;
} else {
return and__3616__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x32453))
;

x32453.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32453){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3616__auto__ = !((app_state == null));
if(and__3616__auto__){
return render;
} else {
return and__3616__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x32453))
;

return x32453;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32455 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32455) : cljs.core.deref.call(null,G__32455));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$78,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$77);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$71,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3628__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3628__auto__ = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$75),(((function (){var G__32456 = c;
if(G__32456){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32456.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__32456.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32456);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32456);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$),cljs.core.constant$keyword$78], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$74,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_32470 = om.core.children(this$);
if((function (){var G__32457 = c_32470;
if(G__32457){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32457.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__32457.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32457);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32457);
}
})()){
om.core.will_mount(c_32470);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$66,(function (){
var this$ = this;
var c = om.core.children(this$);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null);
if((function (){var G__32458 = c;
if(G__32458){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32458.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__32458.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32458);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32458);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__32459 = cljs.core.seq(refs);
var chunk__32460 = null;
var count__32461 = (0);
var i__32462 = (0);
while(true){
if((i__32462 < count__32461)){
var ref = chunk__32460.cljs$core$IIndexed$_nth$arity$2(null,i__32462);
var G__32463_32471 = this$;
var G__32464_32472 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32463_32471,G__32464_32472) : om.core.unobserve.call(null,G__32463_32471,G__32464_32472));

var G__32473 = seq__32459;
var G__32474 = chunk__32460;
var G__32475 = count__32461;
var G__32476 = (i__32462 + (1));
seq__32459 = G__32473;
chunk__32460 = G__32474;
count__32461 = G__32475;
i__32462 = G__32476;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__32459);
if(temp__4126__auto____$1){
var seq__32459__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32459__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__32459__$1);
var G__32477 = cljs.core.chunk_rest(seq__32459__$1);
var G__32478 = c__4415__auto__;
var G__32479 = cljs.core.count(c__4415__auto__);
var G__32480 = (0);
seq__32459 = G__32477;
chunk__32460 = G__32478;
count__32461 = G__32479;
i__32462 = G__32480;
continue;
} else {
var ref = cljs.core.first(seq__32459__$1);
var G__32465_32481 = this$;
var G__32466_32482 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32465_32481,G__32466_32482) : om.core.unobserve.call(null,G__32465_32481,G__32466_32482));

var G__32483 = cljs.core.next(seq__32459__$1);
var G__32484 = null;
var G__32485 = (0);
var G__32486 = (0);
seq__32459 = G__32483;
chunk__32460 = G__32484;
count__32461 = G__32485;
i__32462 = G__32486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.constant$keyword$70,(function (next_props,next_state){
var this$ = this;
var props_32487 = this$.props;
var c_32488 = om.core.children(this$);
if((function (){var G__32467 = c_32488;
if(G__32467){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32467.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__32467.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32467);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32467);
}
})()){
var state_32489 = this$.state;
om.core.will_update(c_32488,om.core.get_props({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$64,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32468 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32468) : cljs.core.deref.call(null,G__32468));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null);
if((function (){var G__32469 = c;
if(G__32469){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32469.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__32469.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32469);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32469);
}
})()){
var state_32490 = this$.state;
om.core.did_update(c,om.core.get_props({"isOmComponent": true, "props": prev_props}),(function (){var or__3628__auto__ = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$79], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x32494 = cljs.core.clj__GT_js(methods$);
x32494.om$core$IGetState$ = true;

x32494.om$core$IGetState$_get_state$arity$1 = ((function (x32494){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32495 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32495) : cljs.core.deref.call(null,G__32495));
})(),spath);
var or__3628__auto__ = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x32494))
;

x32494.om$core$IGetState$_get_state$arity$2 = ((function (x32494){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32494))
;

x32494.om$core$IGetRenderState$ = true;

x32494.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32494){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1),cljs.core.constant$keyword$78], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32496 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32496) : cljs.core.deref.call(null,G__32496));
})(),spath);
});})(x32494))
;

x32494.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32494){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32494))
;

x32494.om$core$ISetState$ = true;

x32494.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32494){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1),cljs.core.constant$keyword$77], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3616__auto__ = !((gstate == null));
if(and__3616__auto__){
return render;
} else {
return and__3616__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x32494))
;

x32494.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32494){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x32494))
;

return x32494;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__32499 = x;
if(G__32499){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32499.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__32499.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32499);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32499);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__32500 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32500) : cljs.core.deref.call(null,G__32500));
})(),cljs.core.constant$keyword$80));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$63);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$63))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__32502){
var vec__32503 = p__32502;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32503,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__32505 = null;
var G__32505__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__32505__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__32505 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32505__2.call(this,self__,k);
case 3:
return G__32505__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32505.cljs$core$IFn$_invoke$arity$2 = G__32505__2;
G__32505.cljs$core$IFn$_invoke$arity$3 = G__32505__3;
return G__32505;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32501){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32501)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32504 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32504) : cljs.core.deref.call(null,G__32504));
})(),self__.path,cljs.core.constant$keyword$80);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__32508 = null;
var G__32508__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__32508__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__32508 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32508__2.call(this,self__,k);
case 3:
return G__32508__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32508.cljs$core$IFn$_invoke$arity$2 = G__32508__2;
G__32508.cljs$core$IFn$_invoke$arity$3 = G__32508__3;
return G__32508;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32506){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32506)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32507 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32507) : cljs.core.deref.call(null,G__32507));
})(),self__.path,cljs.core.constant$keyword$80);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){
return cljs.core._write(writer__4216__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x32511 = cljs.core.clone(val);
x32511.cljs$core$IEquiv$ = true;

x32511.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32511){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x32511))
;

x32511.om$core$ITransact$ = true;

x32511.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32511){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x32511))
;

x32511.om$core$ICursor$ = true;

x32511.om$core$ICursor$_path$arity$1 = ((function (x32511){
return (function (_){
var ___$1 = this;
return path;
});})(x32511))
;

x32511.om$core$ICursor$_state$arity$1 = ((function (x32511){
return (function (_){
var ___$1 = this;
return state;
});})(x32511))
;

x32511.cljs$core$IDeref$ = true;

x32511.cljs$core$IDeref$_deref$arity$1 = ((function (x32511){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32512 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32512) : cljs.core.deref.call(null,G__32512));
})(),path,cljs.core.constant$keyword$80);
});})(x32511))
;

return x32511;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__32521 = val;
if(G__32521){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32521.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__32521.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__32521);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__32521);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__32522 = val;
if(G__32522){
var bit__4309__auto__ = (G__32522.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4309__auto__) || (G__32522.cljs$core$ICloneable$)){
return true;
} else {
if((!G__32522.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__32522);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__32522);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__32524 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32524) : cljs.core.deref.call(null,G__32524));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__32527 = atom;
if(G__32527){
var bit__4309__auto__ = (G__32527.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4309__auto__) || (G__32527.cljs$core$IDeref$)){
return true;
} else {
if((!G__32527.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__32527);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__32527);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__32528 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32528) : cljs.core.deref.call(null,G__32528));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__32529 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32529) : cljs.core.atom.call(null,G__32529));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x32538 = cljs.core.clone(x);
x32538.om$core$ITransact$ = true;

x32538.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32538){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__32539_32542 = cursor__$1;
var G__32540_32543 = korks;
var G__32541_32544 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__32539_32542,G__32540_32543,G__32541_32544) : om.core.commit_BANG_.call(null,G__32539_32542,G__32540_32543,G__32541_32544));

return om.core._refresh_deps_BANG_(parent);
});})(x32538))
;

x32538.om$core$ICursorDerive$ = true;

x32538.om$core$ICursorDerive$_derive$arity$4 = ((function (x32538){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32538))
;

x32538.om$core$IAdapt$ = true;

x32538.om$core$IAdapt$_adapt$arity$2 = ((function (x32538){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x32538))
;

x32538.cljs$core$ICloneable$ = true;

x32538.cljs$core$ICloneable$_clone$arity$1 = ((function (x32538){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x32538))
;

return x32538;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if((function (){var G__32560 = cursor;
if(G__32560){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32560.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__32560.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__32560);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__32560);
}
})()){
return cursor;
} else {
var path = (function (){var G__32561 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32561) : om.core.path.call(null,G__32561));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__32562 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32562) : cljs.core.atom.call(null,G__32562));
})())),path);
var x32563 = cljs.core.clone(cursor);
x32563.om$core$ITransact$ = true;

x32563.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32563,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__32564_32575 = cursor__$2;
var G__32565_32576 = korks;
var G__32566_32577 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__32564_32575,G__32565_32576,G__32566_32577) : om.core.commit_BANG_.call(null,G__32564_32575,G__32565_32576,G__32566_32577));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x32563,path,storage))
;

x32563.om$core$IOmRef$ = true;

x32563.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32563,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__32567 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__32567) : om.core.id.call(null,G__32567));
})(),c);
});})(x32563,path,storage))
;

x32563.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32563,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__32568 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__32568) : om.core.id.call(null,G__32568));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32563,path,storage))
;

x32563.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32563,path,storage){
return (function (_){
var ___$1 = this;
var seq__32569 = cljs.core.seq(cljs.core.vals((function (){var G__32573 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32573) : cljs.core.deref.call(null,G__32573));
})()));
var chunk__32570 = null;
var count__32571 = (0);
var i__32572 = (0);
while(true){
if((i__32572 < count__32571)){
var c = chunk__32570.cljs$core$IIndexed$_nth$arity$2(null,i__32572);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__32578 = seq__32569;
var G__32579 = chunk__32570;
var G__32580 = count__32571;
var G__32581 = (i__32572 + (1));
seq__32569 = G__32578;
chunk__32570 = G__32579;
count__32571 = G__32580;
i__32572 = G__32581;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__32569);
if(temp__4126__auto__){
var seq__32569__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32569__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__32569__$1);
var G__32582 = cljs.core.chunk_rest(seq__32569__$1);
var G__32583 = c__4415__auto__;
var G__32584 = cljs.core.count(c__4415__auto__);
var G__32585 = (0);
seq__32569 = G__32582;
chunk__32570 = G__32583;
count__32571 = G__32584;
i__32572 = G__32585;
continue;
} else {
var c = cljs.core.first(seq__32569__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__32586 = cljs.core.next(seq__32569__$1);
var G__32587 = null;
var G__32588 = (0);
var G__32589 = (0);
seq__32569 = G__32586;
chunk__32570 = G__32587;
count__32571 = G__32588;
i__32572 = G__32589;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32563,path,storage))
;

x32563.om$core$IOmRef$_get_deps$arity$1 = ((function (x32563,path,storage){
return (function (_){
var ___$1 = this;
var G__32574 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32574) : cljs.core.deref.call(null,G__32574));
});})(x32563,path,storage))
;

x32563.om$core$ICursorDerive$ = true;

x32563.om$core$ICursorDerive$_derive$arity$4 = ((function (x32563,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32563,path,storage))
;

return x32563;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3628__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

if(om.core.cursor_QMARK_(ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__32590 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32590) : cljs.core.atom.call(null,G__32590));
})();
om.core.get_renderT = (function get_renderT(state){
var or__3628__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__32597_32602 = cljs.core.seq((function (){var G__32601 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32601) : cljs.core.deref.call(null,G__32601));
})());
var chunk__32598_32603 = null;
var count__32599_32604 = (0);
var i__32600_32605 = (0);
while(true){
if((i__32600_32605 < count__32599_32604)){
var f_32606 = chunk__32598_32603.cljs$core$IIndexed$_nth$arity$2(null,i__32600_32605);
(f_32606.cljs$core$IFn$_invoke$arity$0 ? f_32606.cljs$core$IFn$_invoke$arity$0() : f_32606.call(null));

var G__32607 = seq__32597_32602;
var G__32608 = chunk__32598_32603;
var G__32609 = count__32599_32604;
var G__32610 = (i__32600_32605 + (1));
seq__32597_32602 = G__32607;
chunk__32598_32603 = G__32608;
count__32599_32604 = G__32609;
i__32600_32605 = G__32610;
continue;
} else {
var temp__4126__auto___32611 = cljs.core.seq(seq__32597_32602);
if(temp__4126__auto___32611){
var seq__32597_32612__$1 = temp__4126__auto___32611;
if(cljs.core.chunked_seq_QMARK_(seq__32597_32612__$1)){
var c__4415__auto___32613 = cljs.core.chunk_first(seq__32597_32612__$1);
var G__32614 = cljs.core.chunk_rest(seq__32597_32612__$1);
var G__32615 = c__4415__auto___32613;
var G__32616 = cljs.core.count(c__4415__auto___32613);
var G__32617 = (0);
seq__32597_32602 = G__32614;
chunk__32598_32603 = G__32615;
count__32599_32604 = G__32616;
i__32600_32605 = G__32617;
continue;
} else {
var f_32618 = cljs.core.first(seq__32597_32612__$1);
(f_32618.cljs$core$IFn$_invoke$arity$0 ? f_32618.cljs$core$IFn$_invoke$arity$0() : f_32618.call(null));

var G__32619 = cljs.core.next(seq__32597_32612__$1);
var G__32620 = null;
var G__32621 = (0);
var G__32622 = (0);
seq__32597_32602 = G__32619;
chunk__32598_32603 = G__32620;
count__32599_32604 = G__32621;
i__32600_32605 = G__32622;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = (function (){var G__32623 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32623) : cljs.core.atom.call(null,G__32623));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3628__auto__ = (function (){var G__32630 = x;
if(G__32630){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32630.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__32630.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32630);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32630);
}
})();
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__32632 = x;
if(G__32632){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto____$1 = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return G__32632.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__32632.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32632);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32632);
}
})();
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
var G__32633 = x;
if(G__32633){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto____$2 = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
return G__32633.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__32633.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32633);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32633);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$87,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$89,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__32637 = (function (){var or__3628__auto__ = descriptor;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__32637);
})());
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(om.core.valid_opts_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__32654 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__32655 = cursor;
var G__32656 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32655,G__32656) : f.call(null,G__32655,G__32656));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32654) : ctor.call(null,G__32654));
} else {
var map__32657 = m;
var map__32657__$1 = ((cljs.core.seq_QMARK_(map__32657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32657):map__32657);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,cljs.core.constant$keyword$87);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,cljs.core.constant$keyword$85);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,cljs.core.constant$keyword$86);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32657__$1,cljs.core.constant$keyword$49);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$82);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__32658 = cursor;
var G__32659 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__32658,G__32659) : dataf.call(null,G__32658,G__32659));
} else {
var G__32660 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__32660) : dataf.call(null,G__32660));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$84));
var shared = (function (){var or__3628__auto__ = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(m));
var G__32661 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32657,map__32657__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__32662 = cursor_SINGLEQUOTE_;
var G__32663 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32662,G__32663) : f.call(null,G__32662,G__32663));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__32657,map__32657__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32657,map__32657__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__32664 = cursor_SINGLEQUOTE_;
var G__32665 = this$;
var G__32666 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32664,G__32665,G__32666) : f.call(null,G__32664,G__32665,G__32666));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__32657,map__32657__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32661) : ctor.call(null,G__32661));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__32673 = f;
var G__32674 = x;
var G__32675 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__32673,G__32674,G__32675) : om.core._STAR_instrument_STAR_.call(null,G__32673,G__32674,G__32675));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$90)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$88,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__32698 = state;
if(G__32698){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32698.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__32698.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__32698);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__32698);
}
})()){
} else {
var properties_32717 = (function (){var G__32699 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32699) : cljs.core.atom.call(null,G__32699));
})();
var listeners_32718 = (function (){var G__32700 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32700) : cljs.core.atom.call(null,G__32700));
})();
var render_queue_32719 = (function (){var G__32701 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32701) : cljs.core.atom.call(null,G__32701));
})();
var x32702_32720 = state;
x32702_32720.om$core$IRenderQueue$ = true;

x32702_32720.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (this$){
var this$__$1 = this;
var G__32703 = render_queue_32719;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32703) : cljs.core.deref.call(null,G__32703));
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__32704 = render_queue_32719;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32704) : cljs.core.deref.call(null,G__32704));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_32719,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_32719,cljs.core.empty);
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$INotify$ = true;

x32702_32720.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_32718,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_32718,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32705_32721 = cljs.core.seq((function (){var G__32709 = listeners_32718;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32709) : cljs.core.deref.call(null,G__32709));
})());
var chunk__32706_32722 = null;
var count__32707_32723 = (0);
var i__32708_32724 = (0);
while(true){
if((i__32708_32724 < count__32707_32723)){
var vec__32710_32725 = chunk__32706_32722.cljs$core$IIndexed$_nth$arity$2(null,i__32708_32724);
var __32726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710_32725,(0),null);
var f_32727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32710_32725,(1),null);
var G__32711_32728 = tx_data;
var G__32712_32729 = root_cursor;
(f_32727.cljs$core$IFn$_invoke$arity$2 ? f_32727.cljs$core$IFn$_invoke$arity$2(G__32711_32728,G__32712_32729) : f_32727.call(null,G__32711_32728,G__32712_32729));

var G__32730 = seq__32705_32721;
var G__32731 = chunk__32706_32722;
var G__32732 = count__32707_32723;
var G__32733 = (i__32708_32724 + (1));
seq__32705_32721 = G__32730;
chunk__32706_32722 = G__32731;
count__32707_32723 = G__32732;
i__32708_32724 = G__32733;
continue;
} else {
var temp__4126__auto___32734 = cljs.core.seq(seq__32705_32721);
if(temp__4126__auto___32734){
var seq__32705_32735__$1 = temp__4126__auto___32734;
if(cljs.core.chunked_seq_QMARK_(seq__32705_32735__$1)){
var c__4415__auto___32736 = cljs.core.chunk_first(seq__32705_32735__$1);
var G__32737 = cljs.core.chunk_rest(seq__32705_32735__$1);
var G__32738 = c__4415__auto___32736;
var G__32739 = cljs.core.count(c__4415__auto___32736);
var G__32740 = (0);
seq__32705_32721 = G__32737;
chunk__32706_32722 = G__32738;
count__32707_32723 = G__32739;
i__32708_32724 = G__32740;
continue;
} else {
var vec__32713_32741 = cljs.core.first(seq__32705_32735__$1);
var __32742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713_32741,(0),null);
var f_32743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32713_32741,(1),null);
var G__32714_32744 = tx_data;
var G__32715_32745 = root_cursor;
(f_32743.cljs$core$IFn$_invoke$arity$2 ? f_32743.cljs$core$IFn$_invoke$arity$2(G__32714_32744,G__32715_32745) : f_32743.call(null,G__32714_32744,G__32715_32745));

var G__32746 = cljs.core.next(seq__32705_32735__$1);
var G__32747 = null;
var G__32748 = (0);
var G__32749 = (0);
seq__32705_32721 = G__32746;
chunk__32706_32722 = G__32747;
count__32707_32723 = G__32748;
i__32708_32724 = G__32749;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$IRootProperties$ = true;

x32702_32720.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_32717,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_32717,cljs.core.dissoc,id,k);
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_32717,cljs.core.dissoc,id);
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

x32702_32720.om$core$IRootProperties$_get_property$arity$3 = ((function (x32702_32720,properties_32717,listeners_32718,render_queue_32719){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32716 = properties_32717;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32716) : cljs.core.deref.call(null,G__32716));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32702_32720,properties_32717,listeners_32718,render_queue_32719))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x32755 = cljs.core.clone(cursor);
x32755.om$core$IRootKey$ = true;

x32755.om$core$IRootKey$_root_key$arity$1 = ((function (x32755){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32755))
;

x32755.om$core$IAdapt$ = true;

x32755.om$core$IAdapt$_adapt$arity$2 = ((function (x32755){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x32755))
;

x32755.cljs$core$ICloneable$ = true;

x32755.cljs$core$ICloneable$_clone$arity$1 = ((function (x32755){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x32755))
;

return x32755;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__32756){
var map__32845 = p__32756;
var map__32845__$1 = ((cljs.core.seq_QMARK_(map__32845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32845):map__32845);
var options = map__32845__$1;
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,cljs.core.constant$keyword$91);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,cljs.core.constant$keyword$81);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,cljs.core.constant$keyword$83);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,cljs.core.constant$keyword$57);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,cljs.core.constant$keyword$92);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32845__$1,cljs.core.constant$keyword$93);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__32933 = (function (){var G__32846 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32846) : cljs.core.deref.call(null,G__32846));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__32933,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__32933,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__32847 = value;
if(G__32847){
var bit__4309__auto__ = (G__32847.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4309__auto__) || (G__32847.cljs$core$IAtom$)){
return true;
} else {
if((!G__32847.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__32847);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__32847);
}
})())?value:(function (){var G__32848 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32848) : cljs.core.atom.call(null,G__32848));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3628__auto__ = adapt;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$93,cljs.core.array_seq([cljs.core.constant$keyword$92,cljs.core.constant$keyword$57,cljs.core.constant$keyword$91], 0));
var ret = (function (){var G__32849 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32849) : cljs.core.atom.call(null,G__32849));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__32889 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32889) : cljs.core.deref.call(null,G__32889));
})();
var cursor = (function (){var G__32890 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__32890) : adapt__$1.call(null,G__32890));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$94))){
} else {
var c_32934 = om.dom.render((function (){var _STAR_descriptor_STAR_32891 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_32892 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_32893 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_32894 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32894;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32893;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32892;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32891;
}})(),target);
if(((function (){var G__32895 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32895) : cljs.core.deref.call(null,G__32895));
})() == null)){
var G__32896_32935 = ret;
var G__32897_32936 = c_32934;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32896_32935,G__32897_32936) : cljs.core.reset_BANG_.call(null,G__32896_32935,G__32897_32936));
} else {
}
}

var queue_32937 = om.core._get_queue(state__$1);
if(cljs.core.empty_QMARK_(queue_32937)){
} else {
var seq__32898_32938 = cljs.core.seq(queue_32937);
var chunk__32899_32939 = null;
var count__32900_32940 = (0);
var i__32901_32941 = (0);
while(true){
if((i__32901_32941 < count__32900_32940)){
var c_32942 = chunk__32899_32939.cljs$core$IIndexed$_nth$arity$2(null,i__32901_32941);
if(cljs.core.truth_(c_32942.isMounted())){
var temp__4126__auto___32943 = (c_32942.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___32943)){
var next_props_32944 = temp__4126__auto___32943;
(c_32942.props["__om_cursor"] = next_props_32944);

(c_32942.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3628__auto__ = !((function (){var G__32903 = om.core.children(c_32942);
if(G__32903){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32903.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__32903.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32903);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32903);
}
})());
if(or__3628__auto__){
return or__3628__auto__;
} else {
return c_32942.shouldComponentUpdate(c_32942.props,c_32942.state);
}
})())){
c_32942.forceUpdate();
} else {
}
} else {
}

var G__32945 = seq__32898_32938;
var G__32946 = chunk__32899_32939;
var G__32947 = count__32900_32940;
var G__32948 = (i__32901_32941 + (1));
seq__32898_32938 = G__32945;
chunk__32899_32939 = G__32946;
count__32900_32940 = G__32947;
i__32901_32941 = G__32948;
continue;
} else {
var temp__4126__auto___32949 = cljs.core.seq(seq__32898_32938);
if(temp__4126__auto___32949){
var seq__32898_32950__$1 = temp__4126__auto___32949;
if(cljs.core.chunked_seq_QMARK_(seq__32898_32950__$1)){
var c__4415__auto___32951 = cljs.core.chunk_first(seq__32898_32950__$1);
var G__32952 = cljs.core.chunk_rest(seq__32898_32950__$1);
var G__32953 = c__4415__auto___32951;
var G__32954 = cljs.core.count(c__4415__auto___32951);
var G__32955 = (0);
seq__32898_32938 = G__32952;
chunk__32899_32939 = G__32953;
count__32900_32940 = G__32954;
i__32901_32941 = G__32955;
continue;
} else {
var c_32956 = cljs.core.first(seq__32898_32950__$1);
if(cljs.core.truth_(c_32956.isMounted())){
var temp__4126__auto___32957__$1 = (c_32956.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___32957__$1)){
var next_props_32958 = temp__4126__auto___32957__$1;
(c_32956.props["__om_cursor"] = next_props_32958);

(c_32956.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3628__auto__ = !((function (){var G__32905 = om.core.children(c_32956);
if(G__32905){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32905.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__32905.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32905);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32905);
}
})());
if(or__3628__auto__){
return or__3628__auto__;
} else {
return c_32956.shouldComponentUpdate(c_32956.props,c_32956.state);
}
})())){
c_32956.forceUpdate();
} else {
}
} else {
}

var G__32959 = cljs.core.next(seq__32898_32950__$1);
var G__32960 = null;
var G__32961 = (0);
var G__32962 = (0);
seq__32898_32938 = G__32959;
chunk__32899_32939 = G__32960;
count__32900_32940 = G__32961;
i__32901_32941 = G__32962;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_(state__$1);
}

var _refs_32963 = (function (){var G__32906 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32906) : cljs.core.deref.call(null,G__32906));
})();
if(cljs.core.empty_QMARK_(_refs_32963)){
} else {
var seq__32907_32964 = cljs.core.seq(_refs_32963);
var chunk__32908_32965 = null;
var count__32909_32966 = (0);
var i__32910_32967 = (0);
while(true){
if((i__32910_32967 < count__32909_32966)){
var vec__32911_32968 = chunk__32908_32965.cljs$core$IIndexed$_nth$arity$2(null,i__32910_32967);
var path_32969__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911_32968,(0),null);
var cs_32970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32911_32968,(1),null);
var cs_32971__$1 = (function (){var G__32912 = cs_32970;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32912) : cljs.core.deref.call(null,G__32912));
})();
var seq__32913_32972 = cljs.core.seq(cs_32971__$1);
var chunk__32914_32973 = null;
var count__32915_32974 = (0);
var i__32916_32975 = (0);
while(true){
if((i__32916_32975 < count__32915_32974)){
var vec__32917_32976 = chunk__32914_32973.cljs$core$IIndexed$_nth$arity$2(null,i__32916_32975);
var id_32977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32917_32976,(0),null);
var c_32978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32917_32976,(1),null);
if(cljs.core.truth_(c_32978.shouldComponentUpdate(c_32978.props,c_32978.state))){
c_32978.forceUpdate();
} else {
}

var G__32979 = seq__32913_32972;
var G__32980 = chunk__32914_32973;
var G__32981 = count__32915_32974;
var G__32982 = (i__32916_32975 + (1));
seq__32913_32972 = G__32979;
chunk__32914_32973 = G__32980;
count__32915_32974 = G__32981;
i__32916_32975 = G__32982;
continue;
} else {
var temp__4126__auto___32983 = cljs.core.seq(seq__32913_32972);
if(temp__4126__auto___32983){
var seq__32913_32984__$1 = temp__4126__auto___32983;
if(cljs.core.chunked_seq_QMARK_(seq__32913_32984__$1)){
var c__4415__auto___32985 = cljs.core.chunk_first(seq__32913_32984__$1);
var G__32986 = cljs.core.chunk_rest(seq__32913_32984__$1);
var G__32987 = c__4415__auto___32985;
var G__32988 = cljs.core.count(c__4415__auto___32985);
var G__32989 = (0);
seq__32913_32972 = G__32986;
chunk__32914_32973 = G__32987;
count__32915_32974 = G__32988;
i__32916_32975 = G__32989;
continue;
} else {
var vec__32918_32990 = cljs.core.first(seq__32913_32984__$1);
var id_32991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918_32990,(0),null);
var c_32992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32918_32990,(1),null);
if(cljs.core.truth_(c_32992.shouldComponentUpdate(c_32992.props,c_32992.state))){
c_32992.forceUpdate();
} else {
}

var G__32993 = cljs.core.next(seq__32913_32984__$1);
var G__32994 = null;
var G__32995 = (0);
var G__32996 = (0);
seq__32913_32972 = G__32993;
chunk__32914_32973 = G__32994;
count__32915_32974 = G__32995;
i__32916_32975 = G__32996;
continue;
}
} else {
}
}
break;
}

var G__32997 = seq__32907_32964;
var G__32998 = chunk__32908_32965;
var G__32999 = count__32909_32966;
var G__33000 = (i__32910_32967 + (1));
seq__32907_32964 = G__32997;
chunk__32908_32965 = G__32998;
count__32909_32966 = G__32999;
i__32910_32967 = G__33000;
continue;
} else {
var temp__4126__auto___33001 = cljs.core.seq(seq__32907_32964);
if(temp__4126__auto___33001){
var seq__32907_33002__$1 = temp__4126__auto___33001;
if(cljs.core.chunked_seq_QMARK_(seq__32907_33002__$1)){
var c__4415__auto___33003 = cljs.core.chunk_first(seq__32907_33002__$1);
var G__33004 = cljs.core.chunk_rest(seq__32907_33002__$1);
var G__33005 = c__4415__auto___33003;
var G__33006 = cljs.core.count(c__4415__auto___33003);
var G__33007 = (0);
seq__32907_32964 = G__33004;
chunk__32908_32965 = G__33005;
count__32909_32966 = G__33006;
i__32910_32967 = G__33007;
continue;
} else {
var vec__32919_33008 = cljs.core.first(seq__32907_33002__$1);
var path_33009__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32919_33008,(0),null);
var cs_33010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32919_33008,(1),null);
var cs_33011__$1 = (function (){var G__32920 = cs_33010;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32920) : cljs.core.deref.call(null,G__32920));
})();
var seq__32921_33012 = cljs.core.seq(cs_33011__$1);
var chunk__32922_33013 = null;
var count__32923_33014 = (0);
var i__32924_33015 = (0);
while(true){
if((i__32924_33015 < count__32923_33014)){
var vec__32925_33016 = chunk__32922_33013.cljs$core$IIndexed$_nth$arity$2(null,i__32924_33015);
var id_33017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925_33016,(0),null);
var c_33018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32925_33016,(1),null);
if(cljs.core.truth_(c_33018.shouldComponentUpdate(c_33018.props,c_33018.state))){
c_33018.forceUpdate();
} else {
}

var G__33019 = seq__32921_33012;
var G__33020 = chunk__32922_33013;
var G__33021 = count__32923_33014;
var G__33022 = (i__32924_33015 + (1));
seq__32921_33012 = G__33019;
chunk__32922_33013 = G__33020;
count__32923_33014 = G__33021;
i__32924_33015 = G__33022;
continue;
} else {
var temp__4126__auto___33023__$1 = cljs.core.seq(seq__32921_33012);
if(temp__4126__auto___33023__$1){
var seq__32921_33024__$1 = temp__4126__auto___33023__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32921_33024__$1)){
var c__4415__auto___33025 = cljs.core.chunk_first(seq__32921_33024__$1);
var G__33026 = cljs.core.chunk_rest(seq__32921_33024__$1);
var G__33027 = c__4415__auto___33025;
var G__33028 = cljs.core.count(c__4415__auto___33025);
var G__33029 = (0);
seq__32921_33012 = G__33026;
chunk__32922_33013 = G__33027;
count__32923_33014 = G__33028;
i__32924_33015 = G__33029;
continue;
} else {
var vec__32926_33030 = cljs.core.first(seq__32921_33024__$1);
var id_33031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926_33030,(0),null);
var c_33032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32926_33030,(1),null);
if(cljs.core.truth_(c_33032.shouldComponentUpdate(c_33032.props,c_33032.state))){
c_33032.forceUpdate();
} else {
}

var G__33033 = cljs.core.next(seq__32921_33024__$1);
var G__33034 = null;
var G__33035 = (0);
var G__33036 = (0);
seq__32921_33012 = G__33033;
chunk__32922_33013 = G__33034;
count__32923_33014 = G__33035;
i__32924_33015 = G__33036;
continue;
}
} else {
}
}
break;
}

var G__33037 = cljs.core.next(seq__32907_33002__$1);
var G__33038 = null;
var G__33039 = (0);
var G__33040 = (0);
seq__32907_32964 = G__33037;
chunk__32908_32965 = G__33038;
count__32909_32966 = G__33039;
i__32910_32967 = G__33040;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$94,true);

var G__32927 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32927) : cljs.core.deref.call(null,G__32927));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$95))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$94,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$95,false);

if(cljs.core.contains_QMARK_((function (){var G__32928 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32928) : cljs.core.deref.call(null,G__32928));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(typeof requestAnimationFrame !== 'undefined'){
var G__32929 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__32929);
} else {
var G__32930 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__32931 = (16);
return setTimeout(G__32930,G__32931);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__32932 = target;
return React.unmountComponentAtNode(G__32932);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32845,map__32845__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__33043 = target;
return goog.dom.isElement(G__33043);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33044 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33044) : cljs.core.deref.call(null,G__33044));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var key = (((function (){var G__33055 = cursor;
if(G__33055){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__33055.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__33055.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__33055);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__33055);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__33056 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33056) : om.core.path.call(null,G__33056));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$95,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__33059 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33059) : f.call(null,G__33059));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__33060 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33060) : f.call(null,G__33060));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__33063 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33063) : f.call(null,G__33063));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__33064 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33064) : f.call(null,G__33064));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
