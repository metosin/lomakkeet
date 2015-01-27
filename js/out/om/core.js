// Compiled by ClojureScript 0.0-2727 {}
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

om.core.IDisplayName = (function (){var obj34940 = {};
return obj34940;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.display_name[(function (){var G__34944 = x__4402__auto__;
return goog.typeOf(G__34944);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.display_name["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj34946 = {};
return obj34946;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.init_state[(function (){var G__34950 = x__4402__auto__;
return goog.typeOf(G__34950);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.init_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj34952 = {};
return obj34952;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.should_update[(function (){var G__34956 = x__4402__auto__;
return goog.typeOf(G__34956);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.should_update["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj34958 = {};
return obj34958;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_mount[(function (){var G__34962 = x__4402__auto__;
return goog.typeOf(G__34962);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_mount["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj34964 = {};
return obj34964;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.did_mount[(function (){var G__34968 = x__4402__auto__;
return goog.typeOf(G__34968);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.did_mount["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj34970 = {};
return obj34970;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_unmount[(function (){var G__34974 = x__4402__auto__;
return goog.typeOf(G__34974);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_unmount["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj34976 = {};
return obj34976;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_update[(function (){var G__34980 = x__4402__auto__;
return goog.typeOf(G__34980);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_update["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj34982 = {};
return obj34982;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.did_update[(function (){var G__34986 = x__4402__auto__;
return goog.typeOf(G__34986);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.did_update["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj34988 = {};
return obj34988;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.will_receive_props[(function (){var G__34992 = x__4402__auto__;
return goog.typeOf(G__34992);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj34994 = {};
return obj34994;
})();

om.core.render = (function render(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.render[(function (){var G__34998 = x__4402__auto__;
return goog.typeOf(G__34998);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.render["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj35000 = {};
return obj35000;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.render_props[(function (){var G__35004 = x__4402__auto__;
return goog.typeOf(G__35004);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.render_props["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj35006 = {};
return obj35006;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core.render_state[(function (){var G__35010 = x__4402__auto__;
return goog.typeOf(G__35010);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core.render_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj35012 = {};
return obj35012;
})();


om.core.IOmSwap = (function (){var obj35014 = {};
return obj35014;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._om_swap_BANG_[(function (){var G__35018 = x__4402__auto__;
return goog.typeOf(G__35018);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj35020 = {};
return obj35020;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_state[(function (){var G__35026 = x__4402__auto__;
return goog.typeOf(G__35026);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_state[(function (){var G__35028 = x__4402__auto__;
return goog.typeOf(G__35028);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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


om.core.IGetRenderState = (function (){var obj35030 = {};
return obj35030;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_render_state[(function (){var G__35036 = x__4402__auto__;
return goog.typeOf(G__35036);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_render_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_render_state[(function (){var G__35038 = x__4402__auto__;
return goog.typeOf(G__35038);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_render_state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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


om.core.ISetState = (function (){var obj35040 = {};
return obj35040;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._set_state_BANG_[(function (){var G__35046 = x__4402__auto__;
return goog.typeOf(G__35046);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._set_state_BANG_[(function (){var G__35048 = x__4402__auto__;
return goog.typeOf(G__35048);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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


om.core.IRenderQueue = (function (){var obj35050 = {};
return obj35050;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_queue[(function (){var G__35054 = x__4402__auto__;
return goog.typeOf(G__35054);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_queue["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._queue_render_BANG_[(function (){var G__35058 = x__4402__auto__;
return goog.typeOf(G__35058);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._empty_queue_BANG_[(function (){var G__35062 = x__4402__auto__;
return goog.typeOf(G__35062);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj35064 = {};
return obj35064;
})();

om.core._value = (function _value(x){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._value[(function (){var G__35068 = x__4402__auto__;
return goog.typeOf(G__35068);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._value["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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

om.core.ICursor = (function (){var obj35070 = {};
return obj35070;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._path[(function (){var G__35074 = x__4402__auto__;
return goog.typeOf(G__35074);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._path["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._state[(function (){var G__35078 = x__4402__auto__;
return goog.typeOf(G__35078);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._state["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj35080 = {};
return obj35080;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3746__auto__ = value;
if(and__3746__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3746__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4402__auto__ = (((value == null))?null:value);
return (function (){var or__3758__auto__ = (om.core._to_cursor[(function (){var G__35086 = x__4402__auto__;
return goog.typeOf(G__35086);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._to_cursor["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3746__auto__ = value;
if(and__3746__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3746__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4402__auto__ = (((value == null))?null:value);
return (function (){var or__3758__auto__ = (om.core._to_cursor[(function (){var G__35088 = x__4402__auto__;
return goog.typeOf(G__35088);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._to_cursor["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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


om.core.ICursorDerive = (function (){var obj35090 = {};
return obj35090;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._derive[(function (){var G__35094 = x__4402__auto__;
return goog.typeOf(G__35094);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._derive["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__35095 = derived;
var G__35096 = state;
var G__35097 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__35095,G__35096,G__35097) : om.core.to_cursor.call(null,G__35095,G__35096,G__35097));
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

om.core.ITransact = (function (){var obj35099 = {};
return obj35099;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._transact_BANG_[(function (){var G__35103 = x__4402__auto__;
return goog.typeOf(G__35103);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj35105 = {};
return obj35105;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._listen_BANG_[(function (){var G__35109 = x__4402__auto__;
return goog.typeOf(G__35109);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._unlisten_BANG_[(function (){var G__35113 = x__4402__auto__;
return goog.typeOf(G__35113);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3746__auto__ = x;
if(and__3746__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4402__auto__ = (((x == null))?null:x);
return (function (){var or__3758__auto__ = (om.core._notify_BANG_[(function (){var G__35117 = x__4402__auto__;
return goog.typeOf(G__35117);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj35119 = {};
return obj35119;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._set_property_BANG_[(function (){var G__35123 = x__4402__auto__;
return goog.typeOf(G__35123);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._remove_property_BANG_[(function (){var G__35127 = x__4402__auto__;
return goog.typeOf(G__35127);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._remove_properties_BANG_[(function (){var G__35131 = x__4402__auto__;
return goog.typeOf(G__35131);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_property[(function (){var G__35135 = x__4402__auto__;
return goog.typeOf(G__35135);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_property["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj35137 = {};
return obj35137;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3746__auto__ = cursor;
if(and__3746__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3746__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4402__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3758__auto__ = (om.core._root_key[(function (){var G__35141 = x__4402__auto__;
return goog.typeOf(G__35141);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._root_key["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj35143 = {};
return obj35143;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._adapt[(function (){var G__35147 = x__4402__auto__;
return goog.typeOf(G__35147);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._adapt["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
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

om.core.IOmRef = (function (){var obj35149 = {};
return obj35149;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._add_dep_BANG_[(function (){var G__35153 = x__4402__auto__;
return goog.typeOf(G__35153);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._remove_dep_BANG_[(function (){var G__35157 = x__4402__auto__;
return goog.typeOf(G__35157);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__35161 = x__4402__auto__;
return goog.typeOf(G__35161);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3746__auto__ = this$;
if(and__3746__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3746__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4402__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3758__auto__ = (om.core._get_deps[(function (){var G__35165 = x__4402__auto__;
return goog.typeOf(G__35165);
})()]);
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (om.core._get_deps["_"]);
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__35175 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35175) : cljs.core.deref.call(null,G__35175));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__35176 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__35176) : om.core.path.call(null,G__35176));
})(),korks);
var ret = (((function (){var G__35177 = state;
if(G__35177){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35177.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__35177.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__35177);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__35177);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$56)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$57,path,cljs.core.constant$keyword$58,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$59,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35178 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35178) : cljs.core.deref.call(null,G__35178));
})(),path),cljs.core.constant$keyword$60,old_state,cljs.core.constant$keyword$61,(function (){var G__35179 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35179) : cljs.core.deref.call(null,G__35179));
})()], null);
if(!((tag == null))){
var G__35180 = cursor;
var G__35181 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$62,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__35180,G__35181) : om.core.notify_STAR_.call(null,G__35180,G__35181));
} else {
var G__35182 = cursor;
var G__35183 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__35182,G__35183) : om.core.notify_STAR_.call(null,G__35182,G__35183));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__35185 = x;
if(G__35185){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35185.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__35185.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__35185);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__35185);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__35187 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__35187) : c.call(null,G__35187));
})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__35189 = (x.props["__om_cursor"]);
var G__35189__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__35189,korks__$1):G__35189);
return G__35189__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
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
var G__35194 = state;
(G__35194["__om_prev_state"] = (state["__om_state"]));

(G__35194["__om_state"] = pending_state);

(G__35194["__om_pending_state"] = null);

return G__35194;
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
var props__$1 = (function (){var or__3758__auto__ = props;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3758__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
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
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__35199 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35199) : cljs.core.deref.call(null,G__35199));
})(),(function (){var G__35200 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__35200) : om.core.path.call(null,G__35200));
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
var ref_path = (function (){var G__35206 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__35206) : om.core.path.call(null,G__35206));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__35207 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35207) : cljs.core.deref.call(null,G__35207));
})(),ref_path,cljs.core.constant$keyword$63);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$63)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__35208 = ref_val_SINGLEQUOTE_;
var G__35209 = ref_state;
var G__35210 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__35208,G__35209,G__35210) : om.core.to_cursor.call(null,G__35208,G__35209,G__35210));
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
if((function (){var G__35212 = c;
if(G__35212){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35212.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__35212.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__35212);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__35212);
}
})()){
var state_35237 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3758__auto__ = (state_35237["__om_prev_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (state_35237["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__35213 = c;
if(G__35213){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35213.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__35213.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__35213);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__35213);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__35214 = cljs.core.seq(refs);
var chunk__35215 = null;
var count__35216 = (0);
var i__35217 = (0);
while(true){
if((i__35217 < count__35216)){
var ref = chunk__35215.cljs$core$IIndexed$_nth$arity$2(null,i__35217);
var G__35218_35238 = this$;
var G__35219_35239 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__35218_35238,G__35219_35239) : om.core.unobserve.call(null,G__35218_35238,G__35219_35239));

var G__35240 = seq__35214;
var G__35241 = chunk__35215;
var G__35242 = count__35216;
var G__35243 = (i__35217 + (1));
seq__35214 = G__35240;
chunk__35215 = G__35241;
count__35216 = G__35242;
i__35217 = G__35243;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__35214);
if(temp__4126__auto____$1){
var seq__35214__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35214__$1)){
var c__4545__auto__ = cljs.core.chunk_first(seq__35214__$1);
var G__35244 = cljs.core.chunk_rest(seq__35214__$1);
var G__35245 = c__4545__auto__;
var G__35246 = cljs.core.count(c__4545__auto__);
var G__35247 = (0);
seq__35214 = G__35244;
chunk__35215 = G__35245;
count__35216 = G__35246;
i__35217 = G__35247;
continue;
} else {
var ref = cljs.core.first(seq__35214__$1);
var G__35220_35248 = this$;
var G__35221_35249 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__35220_35248,G__35221_35249) : om.core.unobserve.call(null,G__35220_35248,G__35221_35249));

var G__35250 = cljs.core.next(seq__35214__$1);
var G__35251 = null;
var G__35252 = (0);
var G__35253 = (0);
seq__35214 = G__35250;
chunk__35215 = G__35251;
count__35216 = G__35252;
i__35217 = G__35253;
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
if((function (){var G__35222 = c;
if(G__35222){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35222.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__35222.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__35222);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__35222);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__35223 = c;
if(G__35223){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35223.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__35223.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__35223);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__35223);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
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
if(cljs.core.truth_((function (){var and__3746__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__3746__auto__){
return cljs.core.some(((function (and__3746__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__35211_SHARP_){
return om.core.ref_changed_QMARK_(p1__35211_SHARP_);
});})(and__3746__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3746__auto__;
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
var _STAR_parent_STAR_35224 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_35225 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_35226 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_35227 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_35228 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__35229 = c;
if(G__35229){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35229.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__35229.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__35229);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__35229);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__35230 = c;
if(G__35230){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35230.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__35230.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__35230);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__35230);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__35231 = c;
if(G__35231){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35231.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__35231.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__35231);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__35231);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_35228;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_35227;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_35226;

om.core._STAR_state_STAR_ = _STAR_state_STAR_35225;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_35224;
}}),(function (next_props,next_state){
var this$ = this;
var c_35254 = om.core.children(this$);
if((function (){var G__35232 = c_35254;
if(G__35232){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35232.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__35232.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__35232);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__35232);
}
})()){
var state_35255 = this$.state;
om.core.will_update(c_35254,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3758__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__35233 = c;
if(G__35233){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35233.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__35233.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__35233);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__35233);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$75)], 0)), "__om_id": (function (){var or__3758__auto__ = id;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
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
if((function (){var G__35234 = c;
if(G__35234){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35234.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__35234.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__35234);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__35234);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__35235 = c;
if(G__35235){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35235.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__35235.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__35235);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__35235);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_35256 = om.core.children(this$);
if((function (){var G__35236 = c_35256;
if(G__35236){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35236.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__35236.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__35236);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__35236);
}
})()){
om.core.will_mount(c_35256);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x35258 = obj;
x35258.om$core$IGetState$ = true;

x35258.om$core$IGetState$_get_state$arity$1 = ((function (x35258){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3758__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return (state["__om_state"]);
}
});})(x35258))
;

x35258.om$core$IGetState$_get_state$arity$2 = ((function (x35258){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x35258))
;

x35258.om$core$IGetRenderState$ = true;

x35258.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x35258){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x35258))
;

x35258.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x35258){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x35258))
;

x35258.om$core$ISetState$ = true;

x35258.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x35258){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3746__auto__ = !((app_state == null));
if(and__3746__auto__){
return render;
} else {
return and__3746__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x35258))
;

x35258.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x35258){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3746__auto__ = !((app_state == null));
if(and__3746__auto__){
return render;
} else {
return and__3746__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x35258))
;

return x35258;
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
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35260 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35260) : cljs.core.deref.call(null,G__35260));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$78,cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$79,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$77);
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
var istate = (function (){var or__3758__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3758__auto__ = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$75),(((function (){var G__35261 = c;
if(G__35261){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35261.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__35261.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__35261);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__35261);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$),cljs.core.constant$keyword$79], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$74,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_35275 = om.core.children(this$);
if((function (){var G__35262 = c_35275;
if(G__35262){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35262.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__35262.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__35262);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__35262);
}
})()){
om.core.will_mount(c_35275);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$66,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__35263 = c;
if(G__35263){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35263.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__35263.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__35263);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__35263);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__35264 = cljs.core.seq(refs);
var chunk__35265 = null;
var count__35266 = (0);
var i__35267 = (0);
while(true){
if((i__35267 < count__35266)){
var ref = chunk__35265.cljs$core$IIndexed$_nth$arity$2(null,i__35267);
var G__35268_35276 = this$;
var G__35269_35277 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__35268_35276,G__35269_35277) : om.core.unobserve.call(null,G__35268_35276,G__35269_35277));

var G__35278 = seq__35264;
var G__35279 = chunk__35265;
var G__35280 = count__35266;
var G__35281 = (i__35267 + (1));
seq__35264 = G__35278;
chunk__35265 = G__35279;
count__35266 = G__35280;
i__35267 = G__35281;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__35264);
if(temp__4126__auto____$1){
var seq__35264__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35264__$1)){
var c__4545__auto__ = cljs.core.chunk_first(seq__35264__$1);
var G__35282 = cljs.core.chunk_rest(seq__35264__$1);
var G__35283 = c__4545__auto__;
var G__35284 = cljs.core.count(c__4545__auto__);
var G__35285 = (0);
seq__35264 = G__35282;
chunk__35265 = G__35283;
count__35266 = G__35284;
i__35267 = G__35285;
continue;
} else {
var ref = cljs.core.first(seq__35264__$1);
var G__35270_35286 = this$;
var G__35271_35287 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__35270_35286,G__35271_35287) : om.core.unobserve.call(null,G__35270_35286,G__35271_35287));

var G__35288 = cljs.core.next(seq__35264__$1);
var G__35289 = null;
var G__35290 = (0);
var G__35291 = (0);
seq__35264 = G__35288;
chunk__35265 = G__35289;
count__35266 = G__35290;
i__35267 = G__35291;
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
var props_35292 = this$.props;
var c_35293 = om.core.children(this$);
if((function (){var G__35272 = c_35293;
if(G__35272){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35272.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__35272.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__35272);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__35272);
}
})()){
var state_35294 = this$.state;
om.core.will_update(c_35293,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$64,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35273 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35273) : cljs.core.deref.call(null,G__35273));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$)], null);
if((function (){var G__35274 = c;
if(G__35274){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35274.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__35274.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__35274);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__35274);
}
})()){
var state_35295 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3758__auto__ = cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$78.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$78], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x35299 = cljs.core.clj__GT_js(methods$);
x35299.om$core$IGetState$ = true;

x35299.om$core$IGetState$_get_state$arity$1 = ((function (x35299){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35300 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35300) : cljs.core.deref.call(null,G__35300));
})(),spath);
var or__3758__auto__ = cljs.core.constant$keyword$77.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x35299))
;

x35299.om$core$IGetState$_get_state$arity$2 = ((function (x35299){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x35299))
;

x35299.om$core$IGetRenderState$ = true;

x35299.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x35299){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1),cljs.core.constant$keyword$79], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35301 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35301) : cljs.core.deref.call(null,G__35301));
})(),spath);
});})(x35299))
;

x35299.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x35299){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x35299))
;

x35299.om$core$ISetState$ = true;

x35299.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x35299){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,om.core.react_id(this$__$1),cljs.core.constant$keyword$77], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3746__auto__ = !((gstate == null));
if(and__3746__auto__){
return render;
} else {
return and__3746__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x35299))
;

x35299.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x35299){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x35299))
;

return x35299;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__35304 = x;
if(G__35304){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35304.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__35304.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__35304);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__35304);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__35305 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35305) : cljs.core.deref.call(null,G__35305));
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
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
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

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
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
return (function (p__35307){
var vec__35308 = p__35307;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(1),null);
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
var G__35310 = null;
var G__35310__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__35310__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__35310 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__35310__2.call(this,self__,k);
case 3:
return G__35310__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35310.cljs$core$IFn$_invoke$arity$2 = G__35310__2;
G__35310.cljs$core$IFn$_invoke$arity$3 = G__35310__3;
return G__35310;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args35306){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35306)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__35309 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35309) : cljs.core.deref.call(null,G__35309));
})(),self__.path,cljs.core.constant$keyword$80);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"om.core/MapCursor");
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
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
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

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
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
var G__35313 = null;
var G__35313__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__35313__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__35313 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__35313__2.call(this,self__,k);
case 3:
return G__35313__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35313.cljs$core$IFn$_invoke$arity$2 = G__35313__2;
G__35313.cljs$core$IFn$_invoke$arity$3 = G__35313__3;
return G__35313;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args35311){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35311)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__35312 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35312) : cljs.core.deref.call(null,G__35312));
})(),self__.path,cljs.core.constant$keyword$80);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4345__auto__,writer__4346__auto__,opt__4347__auto__){
return cljs.core._write(writer__4346__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x35316 = cljs.core.clone(val);
x35316.cljs$core$IEquiv$ = true;

x35316.cljs$core$IEquiv$_equiv$arity$2 = ((function (x35316){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x35316))
;

x35316.om$core$ITransact$ = true;

x35316.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x35316){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x35316))
;

x35316.om$core$ICursor$ = true;

x35316.om$core$ICursor$_path$arity$1 = ((function (x35316){
return (function (_){
var ___$1 = this;
return path;
});})(x35316))
;

x35316.om$core$ICursor$_state$arity$1 = ((function (x35316){
return (function (_){
var ___$1 = this;
return state;
});})(x35316))
;

x35316.cljs$core$IDeref$ = true;

x35316.cljs$core$IDeref$_deref$arity$1 = ((function (x35316){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__35317 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35317) : cljs.core.deref.call(null,G__35317));
})(),path,cljs.core.constant$keyword$80);
});})(x35316))
;

return x35316;
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
if((function (){var G__35326 = val;
if(G__35326){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35326.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__35326.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__35326);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__35326);
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
if((function (){var G__35327 = val;
if(G__35327){
var bit__4439__auto__ = (G__35327.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4439__auto__) || (G__35327.cljs$core$ICloneable$)){
return true;
} else {
if((!G__35327.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__35327);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__35327);
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
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__35329 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35329) : cljs.core.deref.call(null,G__35329));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__35332 = atom;
if(G__35332){
var bit__4439__auto__ = (G__35332.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4439__auto__) || (G__35332.cljs$core$IDeref$)){
return true;
} else {
if((!G__35332.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__35332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__35332);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__35333 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35333) : cljs.core.deref.call(null,G__35333));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__35334 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35334) : cljs.core.atom.call(null,G__35334));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x35343 = cljs.core.clone(x);
x35343.om$core$ITransact$ = true;

x35343.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x35343){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__35344_35347 = cursor__$1;
var G__35345_35348 = korks;
var G__35346_35349 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__35344_35347,G__35345_35348,G__35346_35349) : om.core.commit_BANG_.call(null,G__35344_35347,G__35345_35348,G__35346_35349));

return om.core._refresh_deps_BANG_(parent);
});})(x35343))
;

x35343.om$core$ICursorDerive$ = true;

x35343.om$core$ICursorDerive$_derive$arity$4 = ((function (x35343){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x35343))
;

x35343.om$core$IAdapt$ = true;

x35343.om$core$IAdapt$_adapt$arity$2 = ((function (x35343){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x35343))
;

x35343.cljs$core$ICloneable$ = true;

x35343.cljs$core$ICloneable$_clone$arity$1 = ((function (x35343){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x35343))
;

return x35343;
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

if((function (){var G__35365 = cursor;
if(G__35365){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35365.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__35365.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__35365);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__35365);
}
})()){
return cursor;
} else {
var path = (function (){var G__35366 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__35366) : om.core.path.call(null,G__35366));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__35367 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35367) : cljs.core.atom.call(null,G__35367));
})())),path);
var x35368 = cljs.core.clone(cursor);
x35368.om$core$ITransact$ = true;

x35368.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x35368,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__35369_35380 = cursor__$2;
var G__35370_35381 = korks;
var G__35371_35382 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__35369_35380,G__35370_35381,G__35371_35382) : om.core.commit_BANG_.call(null,G__35369_35380,G__35370_35381,G__35371_35382));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x35368,path,storage))
;

x35368.om$core$IOmRef$ = true;

x35368.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x35368,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__35372 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__35372) : om.core.id.call(null,G__35372));
})(),c);
});})(x35368,path,storage))
;

x35368.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x35368,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__35373 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__35373) : om.core.id.call(null,G__35373));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x35368,path,storage))
;

x35368.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x35368,path,storage){
return (function (_){
var ___$1 = this;
var seq__35374 = cljs.core.seq(cljs.core.vals((function (){var G__35378 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35378) : cljs.core.deref.call(null,G__35378));
})()));
var chunk__35375 = null;
var count__35376 = (0);
var i__35377 = (0);
while(true){
if((i__35377 < count__35376)){
var c = chunk__35375.cljs$core$IIndexed$_nth$arity$2(null,i__35377);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__35383 = seq__35374;
var G__35384 = chunk__35375;
var G__35385 = count__35376;
var G__35386 = (i__35377 + (1));
seq__35374 = G__35383;
chunk__35375 = G__35384;
count__35376 = G__35385;
i__35377 = G__35386;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__35374);
if(temp__4126__auto__){
var seq__35374__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35374__$1)){
var c__4545__auto__ = cljs.core.chunk_first(seq__35374__$1);
var G__35387 = cljs.core.chunk_rest(seq__35374__$1);
var G__35388 = c__4545__auto__;
var G__35389 = cljs.core.count(c__4545__auto__);
var G__35390 = (0);
seq__35374 = G__35387;
chunk__35375 = G__35388;
count__35376 = G__35389;
i__35377 = G__35390;
continue;
} else {
var c = cljs.core.first(seq__35374__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__35391 = cljs.core.next(seq__35374__$1);
var G__35392 = null;
var G__35393 = (0);
var G__35394 = (0);
seq__35374 = G__35391;
chunk__35375 = G__35392;
count__35376 = G__35393;
i__35377 = G__35394;
continue;
}
} else {
return null;
}
}
break;
}
});})(x35368,path,storage))
;

x35368.om$core$IOmRef$_get_deps$arity$1 = ((function (x35368,path,storage){
return (function (_){
var ___$1 = this;
var G__35379 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35379) : cljs.core.deref.call(null,G__35379));
});})(x35368,path,storage))
;

x35368.om$core$ICursorDerive$ = true;

x35368.om$core$ICursorDerive$_derive$arity$4 = ((function (x35368,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x35368,path,storage))
;

return x35368;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3758__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
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
om.core.refresh_set = (function (){var G__35395 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35395) : cljs.core.atom.call(null,G__35395));
})();
om.core.get_renderT = (function get_renderT(state){
var or__3758__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
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

var seq__35402_35407 = cljs.core.seq((function (){var G__35406 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35406) : cljs.core.deref.call(null,G__35406));
})());
var chunk__35403_35408 = null;
var count__35404_35409 = (0);
var i__35405_35410 = (0);
while(true){
if((i__35405_35410 < count__35404_35409)){
var f_35411 = chunk__35403_35408.cljs$core$IIndexed$_nth$arity$2(null,i__35405_35410);
(f_35411.cljs$core$IFn$_invoke$arity$0 ? f_35411.cljs$core$IFn$_invoke$arity$0() : f_35411.call(null));

var G__35412 = seq__35402_35407;
var G__35413 = chunk__35403_35408;
var G__35414 = count__35404_35409;
var G__35415 = (i__35405_35410 + (1));
seq__35402_35407 = G__35412;
chunk__35403_35408 = G__35413;
count__35404_35409 = G__35414;
i__35405_35410 = G__35415;
continue;
} else {
var temp__4126__auto___35416 = cljs.core.seq(seq__35402_35407);
if(temp__4126__auto___35416){
var seq__35402_35417__$1 = temp__4126__auto___35416;
if(cljs.core.chunked_seq_QMARK_(seq__35402_35417__$1)){
var c__4545__auto___35418 = cljs.core.chunk_first(seq__35402_35417__$1);
var G__35419 = cljs.core.chunk_rest(seq__35402_35417__$1);
var G__35420 = c__4545__auto___35418;
var G__35421 = cljs.core.count(c__4545__auto___35418);
var G__35422 = (0);
seq__35402_35407 = G__35419;
chunk__35403_35408 = G__35420;
count__35404_35409 = G__35421;
i__35405_35410 = G__35422;
continue;
} else {
var f_35423 = cljs.core.first(seq__35402_35417__$1);
(f_35423.cljs$core$IFn$_invoke$arity$0 ? f_35423.cljs$core$IFn$_invoke$arity$0() : f_35423.call(null));

var G__35424 = cljs.core.next(seq__35402_35417__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__35402_35407 = G__35424;
chunk__35403_35408 = G__35425;
count__35404_35409 = G__35426;
i__35405_35410 = G__35427;
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
om.core.roots = (function (){var G__35428 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35428) : cljs.core.atom.call(null,G__35428));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3758__auto__ = (function (){var G__35435 = x;
if(G__35435){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35435.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__35435.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__35435);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__35435);
}
})();
if(or__3758__auto__){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = (function (){var G__35437 = x;
if(G__35437){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto____$1 = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return G__35437.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__35437.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__35437);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__35437);
}
})();
if(or__3758__auto____$1){
return or__3758__auto____$1;
} else {
var G__35438 = x;
if(G__35438){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto____$2 = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto____$2)){
return or__3758__auto____$2;
} else {
return G__35438.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__35438.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__35438);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__35438);
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
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$87,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$89,null,cljs.core.constant$keyword$90,null], null), null),cljs.core.keys(m));
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
(f["om$descriptor"] = (function (){var G__35443 = (function (){var G__35444 = (function (){var or__3758__auto__ = descriptor;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
var or__3758__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3758__auto____$1)){
return or__3758__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__35444);
})();
return React.createFactory(G__35443);
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__35462 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__35463 = cursor;
var G__35464 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35463,G__35464) : f.call(null,G__35463,G__35464));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__35462) : ctor.call(null,G__35462));
} else {
var map__35465 = m;
var map__35465__$1 = ((cljs.core.seq_QMARK_(map__35465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35465):map__35465);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35465__$1,cljs.core.constant$keyword$88);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35465__$1,cljs.core.constant$keyword$85);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35465__$1,cljs.core.constant$keyword$86);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35465__$1,cljs.core.constant$keyword$87);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35465__$1,cljs.core.constant$keyword$49);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$82);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__35466 = cursor;
var G__35467 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__35466,G__35467) : dataf.call(null,G__35466,G__35467));
} else {
var G__35468 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__35468) : dataf.call(null,G__35468));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__35469 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__35469) : key_fn.call(null,G__35469));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$84)
));
var shared = (function (){var or__3758__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$81.cljs$core$IFn$_invoke$arity$1(m));
var G__35470 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__35465,map__35465__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__35471 = cursor_SINGLEQUOTE_;
var G__35472 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__35471,G__35472) : f.call(null,G__35471,G__35472));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__35465,map__35465__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__35465,map__35465__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__35473 = cursor_SINGLEQUOTE_;
var G__35474 = this$;
var G__35475 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__35473,G__35474,G__35475) : f.call(null,G__35473,G__35474,G__35475));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__35465,map__35465__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3758__auto__ = rkey;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__35470) : ctor.call(null,G__35470));

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
var ret = (function (){var G__35482 = f;
var G__35483 = x;
var G__35484 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__35482,G__35483,G__35484) : om.core._STAR_instrument_STAR_.call(null,G__35482,G__35483,G__35484));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$91)){
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
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$89,i));
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
if((function (){var G__35507 = state;
if(G__35507){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35507.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__35507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__35507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__35507);
}
})()){
} else {
var properties_35526 = (function (){var G__35508 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35508) : cljs.core.atom.call(null,G__35508));
})();
var listeners_35527 = (function (){var G__35509 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35509) : cljs.core.atom.call(null,G__35509));
})();
var render_queue_35528 = (function (){var G__35510 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35510) : cljs.core.atom.call(null,G__35510));
})();
var x35511_35529 = state;
x35511_35529.om$core$IRenderQueue$ = true;

x35511_35529.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (this$){
var this$__$1 = this;
var G__35512 = render_queue_35528;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35512) : cljs.core.deref.call(null,G__35512));
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__35513 = render_queue_35528;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35513) : cljs.core.deref.call(null,G__35513));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_35528,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_35528,cljs.core.empty);
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$INotify$ = true;

x35511_35529.om$core$INotify$_listen_BANG_$arity$3 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_35527,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_35527,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$INotify$_notify_BANG_$arity$3 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__35514_35530 = cljs.core.seq((function (){var G__35518 = listeners_35527;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35518) : cljs.core.deref.call(null,G__35518));
})());
var chunk__35515_35531 = null;
var count__35516_35532 = (0);
var i__35517_35533 = (0);
while(true){
if((i__35517_35533 < count__35516_35532)){
var vec__35519_35534 = chunk__35515_35531.cljs$core$IIndexed$_nth$arity$2(null,i__35517_35533);
var __35535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519_35534,(0),null);
var f_35536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35519_35534,(1),null);
var G__35520_35537 = tx_data;
var G__35521_35538 = root_cursor;
(f_35536.cljs$core$IFn$_invoke$arity$2 ? f_35536.cljs$core$IFn$_invoke$arity$2(G__35520_35537,G__35521_35538) : f_35536.call(null,G__35520_35537,G__35521_35538));

var G__35539 = seq__35514_35530;
var G__35540 = chunk__35515_35531;
var G__35541 = count__35516_35532;
var G__35542 = (i__35517_35533 + (1));
seq__35514_35530 = G__35539;
chunk__35515_35531 = G__35540;
count__35516_35532 = G__35541;
i__35517_35533 = G__35542;
continue;
} else {
var temp__4126__auto___35543 = cljs.core.seq(seq__35514_35530);
if(temp__4126__auto___35543){
var seq__35514_35544__$1 = temp__4126__auto___35543;
if(cljs.core.chunked_seq_QMARK_(seq__35514_35544__$1)){
var c__4545__auto___35545 = cljs.core.chunk_first(seq__35514_35544__$1);
var G__35546 = cljs.core.chunk_rest(seq__35514_35544__$1);
var G__35547 = c__4545__auto___35545;
var G__35548 = cljs.core.count(c__4545__auto___35545);
var G__35549 = (0);
seq__35514_35530 = G__35546;
chunk__35515_35531 = G__35547;
count__35516_35532 = G__35548;
i__35517_35533 = G__35549;
continue;
} else {
var vec__35522_35550 = cljs.core.first(seq__35514_35544__$1);
var __35551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35522_35550,(0),null);
var f_35552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35522_35550,(1),null);
var G__35523_35553 = tx_data;
var G__35524_35554 = root_cursor;
(f_35552.cljs$core$IFn$_invoke$arity$2 ? f_35552.cljs$core$IFn$_invoke$arity$2(G__35523_35553,G__35524_35554) : f_35552.call(null,G__35523_35553,G__35524_35554));

var G__35555 = cljs.core.next(seq__35514_35544__$1);
var G__35556 = null;
var G__35557 = (0);
var G__35558 = (0);
seq__35514_35530 = G__35555;
chunk__35515_35531 = G__35556;
count__35516_35532 = G__35557;
i__35517_35533 = G__35558;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$IRootProperties$ = true;

x35511_35529.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_35526,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_35526,cljs.core.dissoc,id,k);
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_35526,cljs.core.dissoc,id);
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

x35511_35529.om$core$IRootProperties$_get_property$arity$3 = ((function (x35511_35529,properties_35526,listeners_35527,render_queue_35528){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__35525 = properties_35526;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35525) : cljs.core.deref.call(null,G__35525));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x35511_35529,properties_35526,listeners_35527,render_queue_35528))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x35564 = cljs.core.clone(cursor);
x35564.om$core$IRootKey$ = true;

x35564.om$core$IRootKey$_root_key$arity$1 = ((function (x35564){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x35564))
;

x35564.om$core$IAdapt$ = true;

x35564.om$core$IAdapt$_adapt$arity$2 = ((function (x35564){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x35564))
;

x35564.cljs$core$ICloneable$ = true;

x35564.cljs$core$ICloneable$_clone$arity$1 = ((function (x35564){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x35564))
;

return x35564;
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
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__35565){
var map__35654 = p__35565;
var map__35654__$1 = ((cljs.core.seq_QMARK_(map__35654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35654):map__35654);
var options = map__35654__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$92);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$93);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$81);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$83);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$57);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$94);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35654__$1,cljs.core.constant$keyword$95);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__35742 = (function (){var G__35655 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35655) : cljs.core.deref.call(null,G__35655));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__35742,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__35742,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__35656 = value;
if(G__35656){
var bit__4439__auto__ = (G__35656.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4439__auto__) || (G__35656.cljs$core$IAtom$)){
return true;
} else {
if((!G__35656.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__35656);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__35656);
}
})())?value:(function (){var G__35657 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35657) : cljs.core.atom.call(null,G__35657));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3758__auto__ = adapt;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$95,cljs.core.array_seq([cljs.core.constant$keyword$94,cljs.core.constant$keyword$57,cljs.core.constant$keyword$93,cljs.core.constant$keyword$92], 0));
var ret = (function (){var G__35658 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35658) : cljs.core.atom.call(null,G__35658));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__35698 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35698) : cljs.core.deref.call(null,G__35698));
})();
var cursor = (function (){var G__35699 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__35699) : adapt__$1.call(null,G__35699));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$96))){
} else {
var c_35743 = om.dom.render((function (){var _STAR_descriptor_STAR_35700 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_35701 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_35702 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_35703 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_35703;

om.core._STAR_state_STAR_ = _STAR_state_STAR_35702;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_35701;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_35700;
}})(),target);
if(((function (){var G__35704 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35704) : cljs.core.deref.call(null,G__35704));
})() == null)){
var G__35705_35744 = ret;
var G__35706_35745 = c_35743;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35705_35744,G__35706_35745) : cljs.core.reset_BANG_.call(null,G__35705_35744,G__35706_35745));
} else {
}
}

var queue_35746 = om.core._get_queue(state__$1);
if(cljs.core.empty_QMARK_(queue_35746)){
} else {
var seq__35707_35747 = cljs.core.seq(queue_35746);
var chunk__35708_35748 = null;
var count__35709_35749 = (0);
var i__35710_35750 = (0);
while(true){
if((i__35710_35750 < count__35709_35749)){
var c_35751 = chunk__35708_35748.cljs$core$IIndexed$_nth$arity$2(null,i__35710_35750);
if(cljs.core.truth_(c_35751.isMounted())){
var temp__4126__auto___35752 = (c_35751.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___35752)){
var next_props_35753 = temp__4126__auto___35752;
(c_35751.props["__om_cursor"] = next_props_35753);

(c_35751.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3758__auto__ = !((function (){var G__35712 = om.core.children(c_35751);
if(G__35712){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35712.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__35712.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__35712);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__35712);
}
})());
if(or__3758__auto__){
return or__3758__auto__;
} else {
return c_35751.shouldComponentUpdate(c_35751.props,c_35751.state);
}
})())){
c_35751.forceUpdate();
} else {
}
} else {
}

var G__35754 = seq__35707_35747;
var G__35755 = chunk__35708_35748;
var G__35756 = count__35709_35749;
var G__35757 = (i__35710_35750 + (1));
seq__35707_35747 = G__35754;
chunk__35708_35748 = G__35755;
count__35709_35749 = G__35756;
i__35710_35750 = G__35757;
continue;
} else {
var temp__4126__auto___35758 = cljs.core.seq(seq__35707_35747);
if(temp__4126__auto___35758){
var seq__35707_35759__$1 = temp__4126__auto___35758;
if(cljs.core.chunked_seq_QMARK_(seq__35707_35759__$1)){
var c__4545__auto___35760 = cljs.core.chunk_first(seq__35707_35759__$1);
var G__35761 = cljs.core.chunk_rest(seq__35707_35759__$1);
var G__35762 = c__4545__auto___35760;
var G__35763 = cljs.core.count(c__4545__auto___35760);
var G__35764 = (0);
seq__35707_35747 = G__35761;
chunk__35708_35748 = G__35762;
count__35709_35749 = G__35763;
i__35710_35750 = G__35764;
continue;
} else {
var c_35765 = cljs.core.first(seq__35707_35759__$1);
if(cljs.core.truth_(c_35765.isMounted())){
var temp__4126__auto___35766__$1 = (c_35765.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___35766__$1)){
var next_props_35767 = temp__4126__auto___35766__$1;
(c_35765.props["__om_cursor"] = next_props_35767);

(c_35765.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3758__auto__ = !((function (){var G__35714 = om.core.children(c_35765);
if(G__35714){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35714.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__35714.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__35714);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__35714);
}
})());
if(or__3758__auto__){
return or__3758__auto__;
} else {
return c_35765.shouldComponentUpdate(c_35765.props,c_35765.state);
}
})())){
c_35765.forceUpdate();
} else {
}
} else {
}

var G__35768 = cljs.core.next(seq__35707_35759__$1);
var G__35769 = null;
var G__35770 = (0);
var G__35771 = (0);
seq__35707_35747 = G__35768;
chunk__35708_35748 = G__35769;
count__35709_35749 = G__35770;
i__35710_35750 = G__35771;
continue;
}
} else {
}
}
break;
}

om.core._empty_queue_BANG_(state__$1);
}

var _refs_35772 = (function (){var G__35715 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35715) : cljs.core.deref.call(null,G__35715));
})();
if(cljs.core.empty_QMARK_(_refs_35772)){
} else {
var seq__35716_35773 = cljs.core.seq(_refs_35772);
var chunk__35717_35774 = null;
var count__35718_35775 = (0);
var i__35719_35776 = (0);
while(true){
if((i__35719_35776 < count__35718_35775)){
var vec__35720_35777 = chunk__35717_35774.cljs$core$IIndexed$_nth$arity$2(null,i__35719_35776);
var path_35778__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35720_35777,(0),null);
var cs_35779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35720_35777,(1),null);
var cs_35780__$1 = (function (){var G__35721 = cs_35779;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35721) : cljs.core.deref.call(null,G__35721));
})();
var seq__35722_35781 = cljs.core.seq(cs_35780__$1);
var chunk__35723_35782 = null;
var count__35724_35783 = (0);
var i__35725_35784 = (0);
while(true){
if((i__35725_35784 < count__35724_35783)){
var vec__35726_35785 = chunk__35723_35782.cljs$core$IIndexed$_nth$arity$2(null,i__35725_35784);
var id_35786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35726_35785,(0),null);
var c_35787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35726_35785,(1),null);
if(cljs.core.truth_(c_35787.shouldComponentUpdate(c_35787.props,c_35787.state))){
c_35787.forceUpdate();
} else {
}

var G__35788 = seq__35722_35781;
var G__35789 = chunk__35723_35782;
var G__35790 = count__35724_35783;
var G__35791 = (i__35725_35784 + (1));
seq__35722_35781 = G__35788;
chunk__35723_35782 = G__35789;
count__35724_35783 = G__35790;
i__35725_35784 = G__35791;
continue;
} else {
var temp__4126__auto___35792 = cljs.core.seq(seq__35722_35781);
if(temp__4126__auto___35792){
var seq__35722_35793__$1 = temp__4126__auto___35792;
if(cljs.core.chunked_seq_QMARK_(seq__35722_35793__$1)){
var c__4545__auto___35794 = cljs.core.chunk_first(seq__35722_35793__$1);
var G__35795 = cljs.core.chunk_rest(seq__35722_35793__$1);
var G__35796 = c__4545__auto___35794;
var G__35797 = cljs.core.count(c__4545__auto___35794);
var G__35798 = (0);
seq__35722_35781 = G__35795;
chunk__35723_35782 = G__35796;
count__35724_35783 = G__35797;
i__35725_35784 = G__35798;
continue;
} else {
var vec__35727_35799 = cljs.core.first(seq__35722_35793__$1);
var id_35800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727_35799,(0),null);
var c_35801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727_35799,(1),null);
if(cljs.core.truth_(c_35801.shouldComponentUpdate(c_35801.props,c_35801.state))){
c_35801.forceUpdate();
} else {
}

var G__35802 = cljs.core.next(seq__35722_35793__$1);
var G__35803 = null;
var G__35804 = (0);
var G__35805 = (0);
seq__35722_35781 = G__35802;
chunk__35723_35782 = G__35803;
count__35724_35783 = G__35804;
i__35725_35784 = G__35805;
continue;
}
} else {
}
}
break;
}

var G__35806 = seq__35716_35773;
var G__35807 = chunk__35717_35774;
var G__35808 = count__35718_35775;
var G__35809 = (i__35719_35776 + (1));
seq__35716_35773 = G__35806;
chunk__35717_35774 = G__35807;
count__35718_35775 = G__35808;
i__35719_35776 = G__35809;
continue;
} else {
var temp__4126__auto___35810 = cljs.core.seq(seq__35716_35773);
if(temp__4126__auto___35810){
var seq__35716_35811__$1 = temp__4126__auto___35810;
if(cljs.core.chunked_seq_QMARK_(seq__35716_35811__$1)){
var c__4545__auto___35812 = cljs.core.chunk_first(seq__35716_35811__$1);
var G__35813 = cljs.core.chunk_rest(seq__35716_35811__$1);
var G__35814 = c__4545__auto___35812;
var G__35815 = cljs.core.count(c__4545__auto___35812);
var G__35816 = (0);
seq__35716_35773 = G__35813;
chunk__35717_35774 = G__35814;
count__35718_35775 = G__35815;
i__35719_35776 = G__35816;
continue;
} else {
var vec__35728_35817 = cljs.core.first(seq__35716_35811__$1);
var path_35818__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728_35817,(0),null);
var cs_35819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728_35817,(1),null);
var cs_35820__$1 = (function (){var G__35729 = cs_35819;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35729) : cljs.core.deref.call(null,G__35729));
})();
var seq__35730_35821 = cljs.core.seq(cs_35820__$1);
var chunk__35731_35822 = null;
var count__35732_35823 = (0);
var i__35733_35824 = (0);
while(true){
if((i__35733_35824 < count__35732_35823)){
var vec__35734_35825 = chunk__35731_35822.cljs$core$IIndexed$_nth$arity$2(null,i__35733_35824);
var id_35826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35734_35825,(0),null);
var c_35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35734_35825,(1),null);
if(cljs.core.truth_(c_35827.shouldComponentUpdate(c_35827.props,c_35827.state))){
c_35827.forceUpdate();
} else {
}

var G__35828 = seq__35730_35821;
var G__35829 = chunk__35731_35822;
var G__35830 = count__35732_35823;
var G__35831 = (i__35733_35824 + (1));
seq__35730_35821 = G__35828;
chunk__35731_35822 = G__35829;
count__35732_35823 = G__35830;
i__35733_35824 = G__35831;
continue;
} else {
var temp__4126__auto___35832__$1 = cljs.core.seq(seq__35730_35821);
if(temp__4126__auto___35832__$1){
var seq__35730_35833__$1 = temp__4126__auto___35832__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35730_35833__$1)){
var c__4545__auto___35834 = cljs.core.chunk_first(seq__35730_35833__$1);
var G__35835 = cljs.core.chunk_rest(seq__35730_35833__$1);
var G__35836 = c__4545__auto___35834;
var G__35837 = cljs.core.count(c__4545__auto___35834);
var G__35838 = (0);
seq__35730_35821 = G__35835;
chunk__35731_35822 = G__35836;
count__35732_35823 = G__35837;
i__35733_35824 = G__35838;
continue;
} else {
var vec__35735_35839 = cljs.core.first(seq__35730_35833__$1);
var id_35840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35735_35839,(0),null);
var c_35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35735_35839,(1),null);
if(cljs.core.truth_(c_35841.shouldComponentUpdate(c_35841.props,c_35841.state))){
c_35841.forceUpdate();
} else {
}

var G__35842 = cljs.core.next(seq__35730_35833__$1);
var G__35843 = null;
var G__35844 = (0);
var G__35845 = (0);
seq__35730_35821 = G__35842;
chunk__35731_35822 = G__35843;
count__35732_35823 = G__35844;
i__35733_35824 = G__35845;
continue;
}
} else {
}
}
break;
}

var G__35846 = cljs.core.next(seq__35716_35811__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35716_35773 = G__35846;
chunk__35717_35774 = G__35847;
count__35718_35775 = G__35848;
i__35719_35776 = G__35849;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$96,true);

var G__35736 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35736) : cljs.core.deref.call(null,G__35736));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$97))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$96,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$97,false);

if(cljs.core.contains_QMARK_((function (){var G__35737 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35737) : cljs.core.deref.call(null,G__35737));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__35738 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__35739 = (16);
return setTimeout(G__35738,G__35739);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__35740 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__35740);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__35741 = target;
return React.unmountComponentAtNode(G__35741);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__35654,map__35654__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__35852 = target;
return goog.dom.isElement(G__35852);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__35853 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35853) : cljs.core.deref.call(null,G__35853));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__35855 = x;
if(G__35855){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35855.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__35855.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__35855);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__35855);
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
if(om.core.transactable_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
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

var key = (((function (){var G__35866 = cursor;
if(G__35866){
var bit__4439__auto__ = null;
if(cljs.core.truth_((function (){var or__3758__auto__ = bit__4439__auto__;
if(cljs.core.truth_(or__3758__auto__)){
return or__3758__auto__;
} else {
return G__35866.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__35866.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__35866);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__35866);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__35867 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__35867) : om.core.path.call(null,G__35867));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$97,true);
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__35870 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35870) : f.call(null,G__35870));
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__35871 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35871) : f.call(null,G__35871));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__35874 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35874) : f.call(null,G__35874));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__35875 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__35875) : f.call(null,G__35875));
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
