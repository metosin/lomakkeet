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

om.core.IDisplayName = (function (){var obj32149 = {};
return obj32149;
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
return (function (){var or__3628__auto__ = (om.core.display_name[(function (){var G__32153 = x__4272__auto__;
return goog.typeOf(G__32153);
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


om.core.IInitState = (function (){var obj32155 = {};
return obj32155;
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
return (function (){var or__3628__auto__ = (om.core.init_state[(function (){var G__32159 = x__4272__auto__;
return goog.typeOf(G__32159);
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


om.core.IShouldUpdate = (function (){var obj32161 = {};
return obj32161;
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
return (function (){var or__3628__auto__ = (om.core.should_update[(function (){var G__32165 = x__4272__auto__;
return goog.typeOf(G__32165);
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


om.core.IWillMount = (function (){var obj32167 = {};
return obj32167;
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
return (function (){var or__3628__auto__ = (om.core.will_mount[(function (){var G__32171 = x__4272__auto__;
return goog.typeOf(G__32171);
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


om.core.IDidMount = (function (){var obj32173 = {};
return obj32173;
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
return (function (){var or__3628__auto__ = (om.core.did_mount[(function (){var G__32177 = x__4272__auto__;
return goog.typeOf(G__32177);
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


om.core.IWillUnmount = (function (){var obj32179 = {};
return obj32179;
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
return (function (){var or__3628__auto__ = (om.core.will_unmount[(function (){var G__32183 = x__4272__auto__;
return goog.typeOf(G__32183);
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


om.core.IWillUpdate = (function (){var obj32185 = {};
return obj32185;
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
return (function (){var or__3628__auto__ = (om.core.will_update[(function (){var G__32189 = x__4272__auto__;
return goog.typeOf(G__32189);
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


om.core.IDidUpdate = (function (){var obj32191 = {};
return obj32191;
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
return (function (){var or__3628__auto__ = (om.core.did_update[(function (){var G__32195 = x__4272__auto__;
return goog.typeOf(G__32195);
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


om.core.IWillReceiveProps = (function (){var obj32197 = {};
return obj32197;
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
return (function (){var or__3628__auto__ = (om.core.will_receive_props[(function (){var G__32201 = x__4272__auto__;
return goog.typeOf(G__32201);
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


om.core.IRender = (function (){var obj32203 = {};
return obj32203;
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
return (function (){var or__3628__auto__ = (om.core.render[(function (){var G__32207 = x__4272__auto__;
return goog.typeOf(G__32207);
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


om.core.IRenderProps = (function (){var obj32209 = {};
return obj32209;
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
return (function (){var or__3628__auto__ = (om.core.render_props[(function (){var G__32213 = x__4272__auto__;
return goog.typeOf(G__32213);
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


om.core.IRenderState = (function (){var obj32215 = {};
return obj32215;
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
return (function (){var or__3628__auto__ = (om.core.render_state[(function (){var G__32219 = x__4272__auto__;
return goog.typeOf(G__32219);
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


om.core.ICheckState = (function (){var obj32221 = {};
return obj32221;
})();


om.core.IOmSwap = (function (){var obj32223 = {};
return obj32223;
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
return (function (){var or__3628__auto__ = (om.core._om_swap_BANG_[(function (){var G__32227 = x__4272__auto__;
return goog.typeOf(G__32227);
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


om.core.IGetState = (function (){var obj32229 = {};
return obj32229;
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
return (function (){var or__3628__auto__ = (om.core._get_state[(function (){var G__32235 = x__4272__auto__;
return goog.typeOf(G__32235);
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
return (function (){var or__3628__auto__ = (om.core._get_state[(function (){var G__32237 = x__4272__auto__;
return goog.typeOf(G__32237);
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


om.core.IGetRenderState = (function (){var obj32239 = {};
return obj32239;
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
return (function (){var or__3628__auto__ = (om.core._get_render_state[(function (){var G__32245 = x__4272__auto__;
return goog.typeOf(G__32245);
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
return (function (){var or__3628__auto__ = (om.core._get_render_state[(function (){var G__32247 = x__4272__auto__;
return goog.typeOf(G__32247);
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


om.core.ISetState = (function (){var obj32249 = {};
return obj32249;
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
return (function (){var or__3628__auto__ = (om.core._set_state_BANG_[(function (){var G__32255 = x__4272__auto__;
return goog.typeOf(G__32255);
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
return (function (){var or__3628__auto__ = (om.core._set_state_BANG_[(function (){var G__32257 = x__4272__auto__;
return goog.typeOf(G__32257);
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


om.core.IRenderQueue = (function (){var obj32259 = {};
return obj32259;
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
return (function (){var or__3628__auto__ = (om.core._get_queue[(function (){var G__32263 = x__4272__auto__;
return goog.typeOf(G__32263);
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
return (function (){var or__3628__auto__ = (om.core._queue_render_BANG_[(function (){var G__32267 = x__4272__auto__;
return goog.typeOf(G__32267);
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
return (function (){var or__3628__auto__ = (om.core._empty_queue_BANG_[(function (){var G__32271 = x__4272__auto__;
return goog.typeOf(G__32271);
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


om.core.IValue = (function (){var obj32273 = {};
return obj32273;
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
return (function (){var or__3628__auto__ = (om.core._value[(function (){var G__32277 = x__4272__auto__;
return goog.typeOf(G__32277);
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

om.core.ICursor = (function (){var obj32279 = {};
return obj32279;
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
return (function (){var or__3628__auto__ = (om.core._path[(function (){var G__32283 = x__4272__auto__;
return goog.typeOf(G__32283);
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
return (function (){var or__3628__auto__ = (om.core._state[(function (){var G__32287 = x__4272__auto__;
return goog.typeOf(G__32287);
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


om.core.IToCursor = (function (){var obj32289 = {};
return obj32289;
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
return (function (){var or__3628__auto__ = (om.core._to_cursor[(function (){var G__32295 = x__4272__auto__;
return goog.typeOf(G__32295);
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
return (function (){var or__3628__auto__ = (om.core._to_cursor[(function (){var G__32297 = x__4272__auto__;
return goog.typeOf(G__32297);
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


om.core.ICursorDerive = (function (){var obj32299 = {};
return obj32299;
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
return (function (){var or__3628__auto__ = (om.core._derive[(function (){var G__32303 = x__4272__auto__;
return goog.typeOf(G__32303);
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
var G__32304 = derived;
var G__32305 = state;
var G__32306 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__32304,G__32305,G__32306) : om.core.to_cursor.call(null,G__32304,G__32305,G__32306));
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

om.core.ITransact = (function (){var obj32308 = {};
return obj32308;
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
return (function (){var or__3628__auto__ = (om.core._transact_BANG_[(function (){var G__32312 = x__4272__auto__;
return goog.typeOf(G__32312);
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


om.core.INotify = (function (){var obj32314 = {};
return obj32314;
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
return (function (){var or__3628__auto__ = (om.core._listen_BANG_[(function (){var G__32318 = x__4272__auto__;
return goog.typeOf(G__32318);
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
return (function (){var or__3628__auto__ = (om.core._unlisten_BANG_[(function (){var G__32322 = x__4272__auto__;
return goog.typeOf(G__32322);
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
return (function (){var or__3628__auto__ = (om.core._notify_BANG_[(function (){var G__32326 = x__4272__auto__;
return goog.typeOf(G__32326);
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


om.core.IRootProperties = (function (){var obj32328 = {};
return obj32328;
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
return (function (){var or__3628__auto__ = (om.core._set_property_BANG_[(function (){var G__32332 = x__4272__auto__;
return goog.typeOf(G__32332);
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
return (function (){var or__3628__auto__ = (om.core._remove_property_BANG_[(function (){var G__32336 = x__4272__auto__;
return goog.typeOf(G__32336);
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
return (function (){var or__3628__auto__ = (om.core._remove_properties_BANG_[(function (){var G__32340 = x__4272__auto__;
return goog.typeOf(G__32340);
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
return (function (){var or__3628__auto__ = (om.core._get_property[(function (){var G__32344 = x__4272__auto__;
return goog.typeOf(G__32344);
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


om.core.IRootKey = (function (){var obj32346 = {};
return obj32346;
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
return (function (){var or__3628__auto__ = (om.core._root_key[(function (){var G__32350 = x__4272__auto__;
return goog.typeOf(G__32350);
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


om.core.IAdapt = (function (){var obj32352 = {};
return obj32352;
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
return (function (){var or__3628__auto__ = (om.core._adapt[(function (){var G__32356 = x__4272__auto__;
return goog.typeOf(G__32356);
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

om.core.IOmRef = (function (){var obj32358 = {};
return obj32358;
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
return (function (){var or__3628__auto__ = (om.core._add_dep_BANG_[(function (){var G__32362 = x__4272__auto__;
return goog.typeOf(G__32362);
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
return (function (){var or__3628__auto__ = (om.core._remove_dep_BANG_[(function (){var G__32366 = x__4272__auto__;
return goog.typeOf(G__32366);
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
return (function (){var or__3628__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__32370 = x__4272__auto__;
return goog.typeOf(G__32370);
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
return (function (){var or__3628__auto__ = (om.core._get_deps[(function (){var G__32374 = x__4272__auto__;
return goog.typeOf(G__32374);
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
var old_state = (function (){var G__32384 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32384) : cljs.core.deref.call(null,G__32384));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__32385 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32385) : om.core.path.call(null,G__32385));
})(),korks);
var ret = (((function (){var G__32386 = state;
if(G__32386){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32386.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__32386.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__32386);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__32386);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$56)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$57,path,cljs.core.constant$keyword$58,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$59,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32387 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32387) : cljs.core.deref.call(null,G__32387));
})(),path),cljs.core.constant$keyword$60,old_state,cljs.core.constant$keyword$61,(function (){var G__32388 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32388) : cljs.core.deref.call(null,G__32388));
})()], null);
if(!((tag == null))){
var G__32389 = cursor;
var G__32390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$62,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__32389,G__32390) : om.core.notify_STAR_.call(null,G__32389,G__32390));
} else {
var G__32391 = cursor;
var G__32392 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__32391,G__32392) : om.core.notify_STAR_.call(null,G__32391,G__32392));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__32394 = x;
if(G__32394){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32394.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__32394.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32394);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32394);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__32396 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__32396) : c.call(null,G__32396));
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
var G__32401 = state;
(G__32401["__om_prev_state"] = (state["__om_state"]));

(G__32401["__om_state"] = pending_state);

(G__32401["__om_pending_state"] = null);

return G__32401;
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
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32406 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32406) : cljs.core.deref.call(null,G__32406));
})(),(function (){var G__32407 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32407) : om.core.path.call(null,G__32407));
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
var ref_path = (function (){var G__32413 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32413) : om.core.path.call(null,G__32413));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32414 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32414) : cljs.core.deref.call(null,G__32414));
})(),ref_path,cljs.core.constant$keyword$63);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$63)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__32415 = ref_val_SINGLEQUOTE_;
var G__32416 = ref_state;
var G__32417 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__32415,G__32416,G__32417) : om.core.to_cursor.call(null,G__32415,G__32416,G__32417));
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
if((function (){var G__32419 = c;
if(G__32419){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32419.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__32419.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32419);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32419);
}
})()){
var state_32444 = this$.state;
om.core.did_update(c,om.core.get_props({"isOmComponent": true, "props": prev_props}),(function (){var or__3628__auto__ = (state_32444["__om_prev_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (state_32444["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__32420 = c;
if(G__32420){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32420.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__32420.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32420);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32420);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__32421 = cljs.core.seq(refs);
var chunk__32422 = null;
var count__32423 = (0);
var i__32424 = (0);
while(true){
if((i__32424 < count__32423)){
var ref = chunk__32422.cljs$core$IIndexed$_nth$arity$2(null,i__32424);
var G__32425_32445 = this$;
var G__32426_32446 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32425_32445,G__32426_32446) : om.core.unobserve.call(null,G__32425_32445,G__32426_32446));

var G__32447 = seq__32421;
var G__32448 = chunk__32422;
var G__32449 = count__32423;
var G__32450 = (i__32424 + (1));
seq__32421 = G__32447;
chunk__32422 = G__32448;
count__32423 = G__32449;
i__32424 = G__32450;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__32421);
if(temp__4126__auto____$1){
var seq__32421__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32421__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__32421__$1);
var G__32451 = cljs.core.chunk_rest(seq__32421__$1);
var G__32452 = c__4415__auto__;
var G__32453 = cljs.core.count(c__4415__auto__);
var G__32454 = (0);
seq__32421 = G__32451;
chunk__32422 = G__32452;
count__32423 = G__32453;
i__32424 = G__32454;
continue;
} else {
var ref = cljs.core.first(seq__32421__$1);
var G__32427_32455 = this$;
var G__32428_32456 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32427_32455,G__32428_32456) : om.core.unobserve.call(null,G__32427_32455,G__32428_32456));

var G__32457 = cljs.core.next(seq__32421__$1);
var G__32458 = null;
var G__32459 = (0);
var G__32460 = (0);
seq__32421 = G__32457;
chunk__32422 = G__32458;
count__32423 = G__32459;
i__32424 = G__32460;
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
if((function (){var G__32429 = c;
if(G__32429){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32429.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__32429.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__32429);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__32429);
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

if((function (){var G__32430 = c;
if(G__32430){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32430.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__32430.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__32430);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__32430);
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
return (function (p1__32418_SHARP_){
return om.core.ref_changed_QMARK_(p1__32418_SHARP_);
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
var _STAR_parent_STAR_32431 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32432 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32433 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32434 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32435 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__32436 = c;
if(G__32436){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32436.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__32436.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32436);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32436);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__32437 = c;
if(G__32437){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32437.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__32437.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32437);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32437);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__32438 = c;
if(G__32438){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32438.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__32438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32438);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32435;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32434;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32433;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32432;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32431;
}}),(function (next_props,next_state){
var this$ = this;
var c_32461 = om.core.children(this$);
if((function (){var G__32439 = c_32461;
if(G__32439){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32439.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__32439.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32439);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32439);
}
})()){
var state_32462 = this$.state;
om.core.will_update(c_32461,om.core.get_props({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
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
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__32440 = c;
if(G__32440){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32440.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__32440.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32440);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32440);
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
if((function (){var G__32441 = c;
if(G__32441){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32441.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__32441.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__32441);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__32441);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__32442 = c;
if(G__32442){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32442.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__32442.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__32442);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__32442);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_32463 = om.core.children(this$);
if((function (){var G__32443 = c_32463;
if(G__32443){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32443.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__32443.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32443);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32443);
}
})()){
om.core.will_mount(c_32463);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x32465 = obj;
x32465.om$core$IGetState$ = true;

x32465.om$core$IGetState$_get_state$arity$1 = ((function (x32465){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3628__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return (state["__om_state"]);
}
});})(x32465))
;

x32465.om$core$IGetState$_get_state$arity$2 = ((function (x32465){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32465))
;

x32465.om$core$IGetRenderState$ = true;

x32465.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32465){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32465))
;

x32465.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32465){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32465))
;

x32465.om$core$ISetState$ = true;

x32465.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32465){
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
});})(x32465))
;

x32465.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32465){
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
});})(x32465))
;

return x32465;
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
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32467 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32467) : cljs.core.deref.call(null,G__32467));
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
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$75),(((function (){var G__32468 = c;
if(G__32468){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32468.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__32468.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32468);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__32468);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$),cljs.core.constant$keyword$78], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$74,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_32482 = om.core.children(this$);
if((function (){var G__32469 = c_32482;
if(G__32469){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32469.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__32469.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32469);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__32469);
}
})()){
om.core.will_mount(c_32482);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$66,(function (){
var this$ = this;
var c = om.core.children(this$);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null);
if((function (){var G__32470 = c;
if(G__32470){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32470.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__32470.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32470);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__32470);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.update_in,spath,cljs.core.dissoc);

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__32471 = cljs.core.seq(refs);
var chunk__32472 = null;
var count__32473 = (0);
var i__32474 = (0);
while(true){
if((i__32474 < count__32473)){
var ref = chunk__32472.cljs$core$IIndexed$_nth$arity$2(null,i__32474);
var G__32475_32483 = this$;
var G__32476_32484 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32475_32483,G__32476_32484) : om.core.unobserve.call(null,G__32475_32483,G__32476_32484));

var G__32485 = seq__32471;
var G__32486 = chunk__32472;
var G__32487 = count__32473;
var G__32488 = (i__32474 + (1));
seq__32471 = G__32485;
chunk__32472 = G__32486;
count__32473 = G__32487;
i__32474 = G__32488;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__32471);
if(temp__4126__auto____$1){
var seq__32471__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32471__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__32471__$1);
var G__32489 = cljs.core.chunk_rest(seq__32471__$1);
var G__32490 = c__4415__auto__;
var G__32491 = cljs.core.count(c__4415__auto__);
var G__32492 = (0);
seq__32471 = G__32489;
chunk__32472 = G__32490;
count__32473 = G__32491;
i__32474 = G__32492;
continue;
} else {
var ref = cljs.core.first(seq__32471__$1);
var G__32477_32493 = this$;
var G__32478_32494 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__32477_32493,G__32478_32494) : om.core.unobserve.call(null,G__32477_32493,G__32478_32494));

var G__32495 = cljs.core.next(seq__32471__$1);
var G__32496 = null;
var G__32497 = (0);
var G__32498 = (0);
seq__32471 = G__32495;
chunk__32472 = G__32496;
count__32473 = G__32497;
i__32474 = G__32498;
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
var props_32499 = this$.props;
var c_32500 = om.core.children(this$);
if((function (){var G__32479 = c_32500;
if(G__32479){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32479.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__32479.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32479);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__32479);
}
})()){
var state_32501 = this$.state;
om.core.will_update(c_32500,om.core.get_props({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$64,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32480 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32480) : cljs.core.deref.call(null,G__32480));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null);
if((function (){var G__32481 = c;
if(G__32481){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32481.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__32481.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32481);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__32481);
}
})()){
var state_32502 = this$.state;
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
var x32506 = cljs.core.clj__GT_js(methods$);
x32506.om$core$IGetState$ = true;

x32506.om$core$IGetState$_get_state$arity$1 = ((function (x32506){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32507 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32507) : cljs.core.deref.call(null,G__32507));
})(),spath);
var or__3628__auto__ = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x32506))
;

x32506.om$core$IGetState$_get_state$arity$2 = ((function (x32506){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32506))
;

x32506.om$core$IGetRenderState$ = true;

x32506.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32506){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1),cljs.core.constant$keyword$78], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32508 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32508) : cljs.core.deref.call(null,G__32508));
})(),spath);
});})(x32506))
;

x32506.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32506){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32506))
;

x32506.om$core$ISetState$ = true;

x32506.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32506){
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
});})(x32506))
;

x32506.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32506){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x32506))
;

return x32506;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__32511 = x;
if(G__32511){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32511.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__32511.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32511);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__32511);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__32512 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32512) : cljs.core.deref.call(null,G__32512));
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
return (function (p__32514){
var vec__32515 = p__32514;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32515,(1),null);
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
var G__32517 = null;
var G__32517__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__32517__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__32517 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32517__2.call(this,self__,k);
case 3:
return G__32517__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32517.cljs$core$IFn$_invoke$arity$2 = G__32517__2;
G__32517.cljs$core$IFn$_invoke$arity$3 = G__32517__3;
return G__32517;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32513){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32513)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32516 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32516) : cljs.core.deref.call(null,G__32516));
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
var G__32520 = null;
var G__32520__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__32520__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__32520 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32520__2.call(this,self__,k);
case 3:
return G__32520__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32520.cljs$core$IFn$_invoke$arity$2 = G__32520__2;
G__32520.cljs$core$IFn$_invoke$arity$3 = G__32520__3;
return G__32520;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32518){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32518)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32519 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32519) : cljs.core.deref.call(null,G__32519));
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
var x32523 = cljs.core.clone(val);
x32523.cljs$core$IEquiv$ = true;

x32523.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32523){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x32523))
;

x32523.om$core$ITransact$ = true;

x32523.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32523){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x32523))
;

x32523.om$core$ICursor$ = true;

x32523.om$core$ICursor$_path$arity$1 = ((function (x32523){
return (function (_){
var ___$1 = this;
return path;
});})(x32523))
;

x32523.om$core$ICursor$_state$arity$1 = ((function (x32523){
return (function (_){
var ___$1 = this;
return state;
});})(x32523))
;

x32523.cljs$core$IDeref$ = true;

x32523.cljs$core$IDeref$_deref$arity$1 = ((function (x32523){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__32524 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32524) : cljs.core.deref.call(null,G__32524));
})(),path,cljs.core.constant$keyword$80);
});})(x32523))
;

return x32523;
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
if((function (){var G__32533 = val;
if(G__32533){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32533.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__32533.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__32533);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__32533);
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
if((function (){var G__32534 = val;
if(G__32534){
var bit__4309__auto__ = (G__32534.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4309__auto__) || (G__32534.cljs$core$ICloneable$)){
return true;
} else {
if((!G__32534.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__32534);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__32534);
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
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__32536 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32536) : cljs.core.deref.call(null,G__32536));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__32539 = atom;
if(G__32539){
var bit__4309__auto__ = (G__32539.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4309__auto__) || (G__32539.cljs$core$IDeref$)){
return true;
} else {
if((!G__32539.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__32539);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__32539);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__32540 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32540) : cljs.core.deref.call(null,G__32540));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__32541 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32541) : cljs.core.atom.call(null,G__32541));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x32550 = cljs.core.clone(x);
x32550.om$core$ITransact$ = true;

x32550.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32550){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__32551_32554 = cursor__$1;
var G__32552_32555 = korks;
var G__32553_32556 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__32551_32554,G__32552_32555,G__32553_32556) : om.core.commit_BANG_.call(null,G__32551_32554,G__32552_32555,G__32553_32556));

return om.core._refresh_deps_BANG_(parent);
});})(x32550))
;

x32550.om$core$ICursorDerive$ = true;

x32550.om$core$ICursorDerive$_derive$arity$4 = ((function (x32550){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32550))
;

x32550.om$core$IAdapt$ = true;

x32550.om$core$IAdapt$_adapt$arity$2 = ((function (x32550){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x32550))
;

x32550.cljs$core$ICloneable$ = true;

x32550.cljs$core$ICloneable$_clone$arity$1 = ((function (x32550){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x32550))
;

return x32550;
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

if((function (){var G__32572 = cursor;
if(G__32572){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32572.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__32572.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__32572);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__32572);
}
})()){
return cursor;
} else {
var path = (function (){var G__32573 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__32573) : om.core.path.call(null,G__32573));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__32574 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32574) : cljs.core.atom.call(null,G__32574));
})())),path);
var x32575 = cljs.core.clone(cursor);
x32575.om$core$ITransact$ = true;

x32575.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32575,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__32576_32587 = cursor__$2;
var G__32577_32588 = korks;
var G__32578_32589 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__32576_32587,G__32577_32588,G__32578_32589) : om.core.commit_BANG_.call(null,G__32576_32587,G__32577_32588,G__32578_32589));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x32575,path,storage))
;

x32575.om$core$IOmRef$ = true;

x32575.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32575,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__32579 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__32579) : om.core.id.call(null,G__32579));
})(),c);
});})(x32575,path,storage))
;

x32575.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32575,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__32580 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__32580) : om.core.id.call(null,G__32580));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32575,path,storage))
;

x32575.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32575,path,storage){
return (function (_){
var ___$1 = this;
var seq__32581 = cljs.core.seq(cljs.core.vals((function (){var G__32585 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32585) : cljs.core.deref.call(null,G__32585));
})()));
var chunk__32582 = null;
var count__32583 = (0);
var i__32584 = (0);
while(true){
if((i__32584 < count__32583)){
var c = chunk__32582.cljs$core$IIndexed$_nth$arity$2(null,i__32584);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__32590 = seq__32581;
var G__32591 = chunk__32582;
var G__32592 = count__32583;
var G__32593 = (i__32584 + (1));
seq__32581 = G__32590;
chunk__32582 = G__32591;
count__32583 = G__32592;
i__32584 = G__32593;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__32581);
if(temp__4126__auto__){
var seq__32581__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32581__$1)){
var c__4415__auto__ = cljs.core.chunk_first(seq__32581__$1);
var G__32594 = cljs.core.chunk_rest(seq__32581__$1);
var G__32595 = c__4415__auto__;
var G__32596 = cljs.core.count(c__4415__auto__);
var G__32597 = (0);
seq__32581 = G__32594;
chunk__32582 = G__32595;
count__32583 = G__32596;
i__32584 = G__32597;
continue;
} else {
var c = cljs.core.first(seq__32581__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__32598 = cljs.core.next(seq__32581__$1);
var G__32599 = null;
var G__32600 = (0);
var G__32601 = (0);
seq__32581 = G__32598;
chunk__32582 = G__32599;
count__32583 = G__32600;
i__32584 = G__32601;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32575,path,storage))
;

x32575.om$core$IOmRef$_get_deps$arity$1 = ((function (x32575,path,storage){
return (function (_){
var ___$1 = this;
var G__32586 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32586) : cljs.core.deref.call(null,G__32586));
});})(x32575,path,storage))
;

x32575.om$core$ICursorDerive$ = true;

x32575.om$core$ICursorDerive$_derive$arity$4 = ((function (x32575,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32575,path,storage))
;

return x32575;
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
om.core.refresh_set = (function (){var G__32602 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32602) : cljs.core.atom.call(null,G__32602));
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

var seq__32609_32614 = cljs.core.seq((function (){var G__32613 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32613) : cljs.core.deref.call(null,G__32613));
})());
var chunk__32610_32615 = null;
var count__32611_32616 = (0);
var i__32612_32617 = (0);
while(true){
if((i__32612_32617 < count__32611_32616)){
var f_32618 = chunk__32610_32615.cljs$core$IIndexed$_nth$arity$2(null,i__32612_32617);
(f_32618.cljs$core$IFn$_invoke$arity$0 ? f_32618.cljs$core$IFn$_invoke$arity$0() : f_32618.call(null));

var G__32619 = seq__32609_32614;
var G__32620 = chunk__32610_32615;
var G__32621 = count__32611_32616;
var G__32622 = (i__32612_32617 + (1));
seq__32609_32614 = G__32619;
chunk__32610_32615 = G__32620;
count__32611_32616 = G__32621;
i__32612_32617 = G__32622;
continue;
} else {
var temp__4126__auto___32623 = cljs.core.seq(seq__32609_32614);
if(temp__4126__auto___32623){
var seq__32609_32624__$1 = temp__4126__auto___32623;
if(cljs.core.chunked_seq_QMARK_(seq__32609_32624__$1)){
var c__4415__auto___32625 = cljs.core.chunk_first(seq__32609_32624__$1);
var G__32626 = cljs.core.chunk_rest(seq__32609_32624__$1);
var G__32627 = c__4415__auto___32625;
var G__32628 = cljs.core.count(c__4415__auto___32625);
var G__32629 = (0);
seq__32609_32614 = G__32626;
chunk__32610_32615 = G__32627;
count__32611_32616 = G__32628;
i__32612_32617 = G__32629;
continue;
} else {
var f_32630 = cljs.core.first(seq__32609_32624__$1);
(f_32630.cljs$core$IFn$_invoke$arity$0 ? f_32630.cljs$core$IFn$_invoke$arity$0() : f_32630.call(null));

var G__32631 = cljs.core.next(seq__32609_32624__$1);
var G__32632 = null;
var G__32633 = (0);
var G__32634 = (0);
seq__32609_32614 = G__32631;
chunk__32610_32615 = G__32632;
count__32611_32616 = G__32633;
i__32612_32617 = G__32634;
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
om.core.roots = (function (){var G__32635 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32635) : cljs.core.atom.call(null,G__32635));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3628__auto__ = (function (){var G__32642 = x;
if(G__32642){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32642.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__32642.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32642);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__32642);
}
})();
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (function (){var G__32644 = x;
if(G__32644){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto____$1 = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto____$1)){
return or__3628__auto____$1;
} else {
return G__32644.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__32644.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32644);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__32644);
}
})();
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
var G__32645 = x;
if(G__32645){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto____$2 = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto____$2)){
return or__3628__auto____$2;
} else {
return G__32645.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__32645.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32645);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__32645);
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
(f["om$descriptor"] = (function (){var G__32649 = (function (){var or__3628__auto__ = descriptor;
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
return React.createClass(G__32649);
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
var G__32666 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__32667 = cursor;
var G__32668 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32667,G__32668) : f.call(null,G__32667,G__32668));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32666) : ctor.call(null,G__32666));
} else {
var map__32669 = m;
var map__32669__$1 = ((cljs.core.seq_QMARK_(map__32669))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32669):map__32669);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,cljs.core.constant$keyword$87);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,cljs.core.constant$keyword$85);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,cljs.core.constant$keyword$86);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32669__$1,cljs.core.constant$keyword$49);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$82);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__32670 = cursor;
var G__32671 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__32670,G__32671) : dataf.call(null,G__32670,G__32671));
} else {
var G__32672 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__32672) : dataf.call(null,G__32672));
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
var G__32673 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32669,map__32669__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__32674 = cursor_SINGLEQUOTE_;
var G__32675 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32674,G__32675) : f.call(null,G__32674,G__32675));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__32669,map__32669__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32669,map__32669__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__32676 = cursor_SINGLEQUOTE_;
var G__32677 = this$;
var G__32678 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32676,G__32677,G__32678) : f.call(null,G__32676,G__32677,G__32678));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__32669,map__32669__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32673) : ctor.call(null,G__32673));

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
var ret = (function (){var G__32685 = f;
var G__32686 = x;
var G__32687 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__32685,G__32686,G__32687) : om.core._STAR_instrument_STAR_.call(null,G__32685,G__32686,G__32687));
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
if((function (){var G__32710 = state;
if(G__32710){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32710.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__32710.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__32710);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__32710);
}
})()){
} else {
var properties_32729 = (function (){var G__32711 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32711) : cljs.core.atom.call(null,G__32711));
})();
var listeners_32730 = (function (){var G__32712 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32712) : cljs.core.atom.call(null,G__32712));
})();
var render_queue_32731 = (function (){var G__32713 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32713) : cljs.core.atom.call(null,G__32713));
})();
var x32714_32732 = state;
x32714_32732.om$core$IRenderQueue$ = true;

x32714_32732.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (this$){
var this$__$1 = this;
var G__32715 = render_queue_32731;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32715) : cljs.core.deref.call(null,G__32715));
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__32716 = render_queue_32731;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32716) : cljs.core.deref.call(null,G__32716));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_32731,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_32731,cljs.core.empty);
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$INotify$ = true;

x32714_32732.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_32730,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_32730,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32717_32733 = cljs.core.seq((function (){var G__32721 = listeners_32730;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32721) : cljs.core.deref.call(null,G__32721));
})());
var chunk__32718_32734 = null;
var count__32719_32735 = (0);
var i__32720_32736 = (0);
while(true){
if((i__32720_32736 < count__32719_32735)){
var vec__32722_32737 = chunk__32718_32734.cljs$core$IIndexed$_nth$arity$2(null,i__32720_32736);
var __32738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722_32737,(0),null);
var f_32739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32722_32737,(1),null);
var G__32723_32740 = tx_data;
var G__32724_32741 = root_cursor;
(f_32739.cljs$core$IFn$_invoke$arity$2 ? f_32739.cljs$core$IFn$_invoke$arity$2(G__32723_32740,G__32724_32741) : f_32739.call(null,G__32723_32740,G__32724_32741));

var G__32742 = seq__32717_32733;
var G__32743 = chunk__32718_32734;
var G__32744 = count__32719_32735;
var G__32745 = (i__32720_32736 + (1));
seq__32717_32733 = G__32742;
chunk__32718_32734 = G__32743;
count__32719_32735 = G__32744;
i__32720_32736 = G__32745;
continue;
} else {
var temp__4126__auto___32746 = cljs.core.seq(seq__32717_32733);
if(temp__4126__auto___32746){
var seq__32717_32747__$1 = temp__4126__auto___32746;
if(cljs.core.chunked_seq_QMARK_(seq__32717_32747__$1)){
var c__4415__auto___32748 = cljs.core.chunk_first(seq__32717_32747__$1);
var G__32749 = cljs.core.chunk_rest(seq__32717_32747__$1);
var G__32750 = c__4415__auto___32748;
var G__32751 = cljs.core.count(c__4415__auto___32748);
var G__32752 = (0);
seq__32717_32733 = G__32749;
chunk__32718_32734 = G__32750;
count__32719_32735 = G__32751;
i__32720_32736 = G__32752;
continue;
} else {
var vec__32725_32753 = cljs.core.first(seq__32717_32747__$1);
var __32754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32725_32753,(0),null);
var f_32755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32725_32753,(1),null);
var G__32726_32756 = tx_data;
var G__32727_32757 = root_cursor;
(f_32755.cljs$core$IFn$_invoke$arity$2 ? f_32755.cljs$core$IFn$_invoke$arity$2(G__32726_32756,G__32727_32757) : f_32755.call(null,G__32726_32756,G__32727_32757));

var G__32758 = cljs.core.next(seq__32717_32747__$1);
var G__32759 = null;
var G__32760 = (0);
var G__32761 = (0);
seq__32717_32733 = G__32758;
chunk__32718_32734 = G__32759;
count__32719_32735 = G__32760;
i__32720_32736 = G__32761;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$IRootProperties$ = true;

x32714_32732.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_32729,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_32729,cljs.core.dissoc,id,k);
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_32729,cljs.core.dissoc,id);
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

x32714_32732.om$core$IRootProperties$_get_property$arity$3 = ((function (x32714_32732,properties_32729,listeners_32730,render_queue_32731){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__32728 = properties_32729;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32728) : cljs.core.deref.call(null,G__32728));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32714_32732,properties_32729,listeners_32730,render_queue_32731))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x32767 = cljs.core.clone(cursor);
x32767.om$core$IRootKey$ = true;

x32767.om$core$IRootKey$_root_key$arity$1 = ((function (x32767){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32767))
;

x32767.om$core$IAdapt$ = true;

x32767.om$core$IAdapt$_adapt$arity$2 = ((function (x32767){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x32767))
;

x32767.cljs$core$ICloneable$ = true;

x32767.cljs$core$ICloneable$_clone$arity$1 = ((function (x32767){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x32767))
;

return x32767;
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
om.core.root = (function root(f,value,p__32768){
var map__32857 = p__32768;
var map__32857__$1 = ((cljs.core.seq_QMARK_(map__32857))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32857):map__32857);
var options = map__32857__$1;
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,cljs.core.constant$keyword$91);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,cljs.core.constant$keyword$81);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,cljs.core.constant$keyword$83);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,cljs.core.constant$keyword$57);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,cljs.core.constant$keyword$92);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32857__$1,cljs.core.constant$keyword$93);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__32945 = (function (){var G__32858 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32858) : cljs.core.deref.call(null,G__32858));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__32945,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__32945,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__32859 = value;
if(G__32859){
var bit__4309__auto__ = (G__32859.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4309__auto__) || (G__32859.cljs$core$IAtom$)){
return true;
} else {
if((!G__32859.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__32859);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__32859);
}
})())?value:(function (){var G__32860 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32860) : cljs.core.atom.call(null,G__32860));
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
var ret = (function (){var G__32861 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32861) : cljs.core.atom.call(null,G__32861));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__32901 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32901) : cljs.core.deref.call(null,G__32901));
})();
var cursor = (function (){var G__32902 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__32902) : adapt__$1.call(null,G__32902));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$94))){
} else {
var c_32946 = om.dom.render((function (){var _STAR_descriptor_STAR_32903 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_32904 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_32905 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_32906 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32906;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32905;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32904;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32903;
}})(),target);
if(((function (){var G__32907 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32907) : cljs.core.deref.call(null,G__32907));
})() == null)){
var G__32908_32947 = ret;
var G__32909_32948 = c_32946;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32908_32947,G__32909_32948) : cljs.core.reset_BANG_.call(null,G__32908_32947,G__32909_32948));
} else {
}
}

var queue_32949 = om.core._get_queue(state__$1);
if(cljs.core.empty_QMARK_(queue_32949)){
} else {
var seq__32910_32950 = cljs.core.seq(queue_32949);
var chunk__32911_32951 = null;
var count__32912_32952 = (0);
var i__32913_32953 = (0);
while(true){
if((i__32913_32953 < count__32912_32952)){
var c_32954 = chunk__32911_32951.cljs$core$IIndexed$_nth$arity$2(null,i__32913_32953);
if(cljs.core.truth_(c_32954.isMounted())){
var temp__4126__auto___32955 = (c_32954.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___32955)){
var next_props_32956 = temp__4126__auto___32955;
(c_32954.props["__om_cursor"] = next_props_32956);

(c_32954.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3628__auto__ = !((function (){var G__32915 = om.core.children(c_32954);
if(G__32915){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32915.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__32915.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32915);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32915);
}
})());
if(or__3628__auto__){
return or__3628__auto__;
} else {
return c_32954.shouldComponentUpdate(c_32954.props,c_32954.state);
}
})())){
c_32954.forceUpdate();
} else {
}
} else {
}

var G__32957 = seq__32910_32950;
var G__32958 = chunk__32911_32951;
var G__32959 = count__32912_32952;
var G__32960 = (i__32913_32953 + (1));
seq__32910_32950 = G__32957;
chunk__32911_32951 = G__32958;
count__32912_32952 = G__32959;
i__32913_32953 = G__32960;
continue;
} else {
var temp__4126__auto___32961 = cljs.core.seq(seq__32910_32950);
if(temp__4126__auto___32961){
var seq__32910_32962__$1 = temp__4126__auto___32961;
if(cljs.core.chunked_seq_QMARK_(seq__32910_32962__$1)){
var c__4415__auto___32963 = cljs.core.chunk_first(seq__32910_32962__$1);
var G__32964 = cljs.core.chunk_rest(seq__32910_32962__$1);
var G__32965 = c__4415__auto___32963;
var G__32966 = cljs.core.count(c__4415__auto___32963);
var G__32967 = (0);
seq__32910_32950 = G__32964;
chunk__32911_32951 = G__32965;
count__32912_32952 = G__32966;
i__32913_32953 = G__32967;
continue;
} else {
var c_32968 = cljs.core.first(seq__32910_32962__$1);
if(cljs.core.truth_(c_32968.isMounted())){
var temp__4126__auto___32969__$1 = (c_32968.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___32969__$1)){
var next_props_32970 = temp__4126__auto___32969__$1;
(c_32968.props["__om_cursor"] = next_props_32970);

(c_32968.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3628__auto__ = !((function (){var G__32917 = om.core.children(c_32968);
if(G__32917){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__32917.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__32917.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32917);
}
})());
if(or__3628__auto__){
return or__3628__auto__;
} else {
return c_32968.shouldComponentUpdate(c_32968.props,c_32968.state);
}
})())){
c_32968.forceUpdate();
} else {
}
} else {
}

var G__32971 = cljs.core.next(seq__32910_32962__$1);
var G__32972 = null;
var G__32973 = (0);
var G__32974 = (0);
seq__32910_32950 = G__32971;
chunk__32911_32951 = G__32972;
count__32912_32952 = G__32973;
i__32913_32953 = G__32974;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_(state__$1);
}

var _refs_32975 = (function (){var G__32918 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32918) : cljs.core.deref.call(null,G__32918));
})();
if(cljs.core.empty_QMARK_(_refs_32975)){
} else {
var seq__32919_32976 = cljs.core.seq(_refs_32975);
var chunk__32920_32977 = null;
var count__32921_32978 = (0);
var i__32922_32979 = (0);
while(true){
if((i__32922_32979 < count__32921_32978)){
var vec__32923_32980 = chunk__32920_32977.cljs$core$IIndexed$_nth$arity$2(null,i__32922_32979);
var path_32981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32923_32980,(0),null);
var cs_32982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32923_32980,(1),null);
var cs_32983__$1 = (function (){var G__32924 = cs_32982;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32924) : cljs.core.deref.call(null,G__32924));
})();
var seq__32925_32984 = cljs.core.seq(cs_32983__$1);
var chunk__32926_32985 = null;
var count__32927_32986 = (0);
var i__32928_32987 = (0);
while(true){
if((i__32928_32987 < count__32927_32986)){
var vec__32929_32988 = chunk__32926_32985.cljs$core$IIndexed$_nth$arity$2(null,i__32928_32987);
var id_32989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32929_32988,(0),null);
var c_32990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32929_32988,(1),null);
if(cljs.core.truth_(c_32990.shouldComponentUpdate(c_32990.props,c_32990.state))){
c_32990.forceUpdate();
} else {
}

var G__32991 = seq__32925_32984;
var G__32992 = chunk__32926_32985;
var G__32993 = count__32927_32986;
var G__32994 = (i__32928_32987 + (1));
seq__32925_32984 = G__32991;
chunk__32926_32985 = G__32992;
count__32927_32986 = G__32993;
i__32928_32987 = G__32994;
continue;
} else {
var temp__4126__auto___32995 = cljs.core.seq(seq__32925_32984);
if(temp__4126__auto___32995){
var seq__32925_32996__$1 = temp__4126__auto___32995;
if(cljs.core.chunked_seq_QMARK_(seq__32925_32996__$1)){
var c__4415__auto___32997 = cljs.core.chunk_first(seq__32925_32996__$1);
var G__32998 = cljs.core.chunk_rest(seq__32925_32996__$1);
var G__32999 = c__4415__auto___32997;
var G__33000 = cljs.core.count(c__4415__auto___32997);
var G__33001 = (0);
seq__32925_32984 = G__32998;
chunk__32926_32985 = G__32999;
count__32927_32986 = G__33000;
i__32928_32987 = G__33001;
continue;
} else {
var vec__32930_33002 = cljs.core.first(seq__32925_32996__$1);
var id_33003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32930_33002,(0),null);
var c_33004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32930_33002,(1),null);
if(cljs.core.truth_(c_33004.shouldComponentUpdate(c_33004.props,c_33004.state))){
c_33004.forceUpdate();
} else {
}

var G__33005 = cljs.core.next(seq__32925_32996__$1);
var G__33006 = null;
var G__33007 = (0);
var G__33008 = (0);
seq__32925_32984 = G__33005;
chunk__32926_32985 = G__33006;
count__32927_32986 = G__33007;
i__32928_32987 = G__33008;
continue;
}
} else {
}
}
break;
}

var G__33009 = seq__32919_32976;
var G__33010 = chunk__32920_32977;
var G__33011 = count__32921_32978;
var G__33012 = (i__32922_32979 + (1));
seq__32919_32976 = G__33009;
chunk__32920_32977 = G__33010;
count__32921_32978 = G__33011;
i__32922_32979 = G__33012;
continue;
} else {
var temp__4126__auto___33013 = cljs.core.seq(seq__32919_32976);
if(temp__4126__auto___33013){
var seq__32919_33014__$1 = temp__4126__auto___33013;
if(cljs.core.chunked_seq_QMARK_(seq__32919_33014__$1)){
var c__4415__auto___33015 = cljs.core.chunk_first(seq__32919_33014__$1);
var G__33016 = cljs.core.chunk_rest(seq__32919_33014__$1);
var G__33017 = c__4415__auto___33015;
var G__33018 = cljs.core.count(c__4415__auto___33015);
var G__33019 = (0);
seq__32919_32976 = G__33016;
chunk__32920_32977 = G__33017;
count__32921_32978 = G__33018;
i__32922_32979 = G__33019;
continue;
} else {
var vec__32931_33020 = cljs.core.first(seq__32919_33014__$1);
var path_33021__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931_33020,(0),null);
var cs_33022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32931_33020,(1),null);
var cs_33023__$1 = (function (){var G__32932 = cs_33022;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32932) : cljs.core.deref.call(null,G__32932));
})();
var seq__32933_33024 = cljs.core.seq(cs_33023__$1);
var chunk__32934_33025 = null;
var count__32935_33026 = (0);
var i__32936_33027 = (0);
while(true){
if((i__32936_33027 < count__32935_33026)){
var vec__32937_33028 = chunk__32934_33025.cljs$core$IIndexed$_nth$arity$2(null,i__32936_33027);
var id_33029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937_33028,(0),null);
var c_33030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937_33028,(1),null);
if(cljs.core.truth_(c_33030.shouldComponentUpdate(c_33030.props,c_33030.state))){
c_33030.forceUpdate();
} else {
}

var G__33031 = seq__32933_33024;
var G__33032 = chunk__32934_33025;
var G__33033 = count__32935_33026;
var G__33034 = (i__32936_33027 + (1));
seq__32933_33024 = G__33031;
chunk__32934_33025 = G__33032;
count__32935_33026 = G__33033;
i__32936_33027 = G__33034;
continue;
} else {
var temp__4126__auto___33035__$1 = cljs.core.seq(seq__32933_33024);
if(temp__4126__auto___33035__$1){
var seq__32933_33036__$1 = temp__4126__auto___33035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32933_33036__$1)){
var c__4415__auto___33037 = cljs.core.chunk_first(seq__32933_33036__$1);
var G__33038 = cljs.core.chunk_rest(seq__32933_33036__$1);
var G__33039 = c__4415__auto___33037;
var G__33040 = cljs.core.count(c__4415__auto___33037);
var G__33041 = (0);
seq__32933_33024 = G__33038;
chunk__32934_33025 = G__33039;
count__32935_33026 = G__33040;
i__32936_33027 = G__33041;
continue;
} else {
var vec__32938_33042 = cljs.core.first(seq__32933_33036__$1);
var id_33043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32938_33042,(0),null);
var c_33044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32938_33042,(1),null);
if(cljs.core.truth_(c_33044.shouldComponentUpdate(c_33044.props,c_33044.state))){
c_33044.forceUpdate();
} else {
}

var G__33045 = cljs.core.next(seq__32933_33036__$1);
var G__33046 = null;
var G__33047 = (0);
var G__33048 = (0);
seq__32933_33024 = G__33045;
chunk__32934_33025 = G__33046;
count__32935_33026 = G__33047;
i__32936_33027 = G__33048;
continue;
}
} else {
}
}
break;
}

var G__33049 = cljs.core.next(seq__32919_33014__$1);
var G__33050 = null;
var G__33051 = (0);
var G__33052 = (0);
seq__32919_32976 = G__33049;
chunk__32920_32977 = G__33050;
count__32921_32978 = G__33051;
i__32922_32979 = G__33052;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$94,true);

var G__32939 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32939) : cljs.core.deref.call(null,G__32939));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$95))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$94,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$95,false);

if(cljs.core.contains_QMARK_((function (){var G__32940 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__32940) : cljs.core.deref.call(null,G__32940));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(typeof requestAnimationFrame !== 'undefined'){
var G__32941 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__32941);
} else {
var G__32942 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__32943 = (16);
return setTimeout(G__32942,G__32943);
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__32944 = target;
return React.unmountComponentAtNode(G__32944);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32857,map__32857__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__33055 = target;
return goog.dom.isElement(G__33055);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33056 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33056) : cljs.core.deref.call(null,G__33056));
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

var key = (((function (){var G__33067 = cursor;
if(G__33067){
var bit__4309__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4309__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__33067.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__33067.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__33067);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__33067);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__33068 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__33068) : om.core.path.call(null,G__33068));
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__33071 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33071) : f.call(null,G__33071));
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__33072 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33072) : f.call(null,G__33072));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__33075 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33075) : f.call(null,G__33075));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__33076 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__33076) : f.call(null,G__33076));
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
