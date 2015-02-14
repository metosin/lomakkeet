// Compiled by ClojureScript 0.0-2850 {}
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

om.core.IDisplayName = (function (){var obj29850 = {};
return obj29850;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.display_name[(function (){var G__29854 = x__4459__auto__;
return goog.typeOf(G__29854);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.display_name["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj29856 = {};
return obj29856;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.init_state[(function (){var G__29860 = x__4459__auto__;
return goog.typeOf(G__29860);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.init_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj29862 = {};
return obj29862;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.should_update[(function (){var G__29866 = x__4459__auto__;
return goog.typeOf(G__29866);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.should_update["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj29868 = {};
return obj29868;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_mount[(function (){var G__29872 = x__4459__auto__;
return goog.typeOf(G__29872);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_mount["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj29874 = {};
return obj29874;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.did_mount[(function (){var G__29878 = x__4459__auto__;
return goog.typeOf(G__29878);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.did_mount["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj29880 = {};
return obj29880;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_unmount[(function (){var G__29884 = x__4459__auto__;
return goog.typeOf(G__29884);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_unmount["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj29886 = {};
return obj29886;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_update[(function (){var G__29890 = x__4459__auto__;
return goog.typeOf(G__29890);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_update["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj29892 = {};
return obj29892;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.did_update[(function (){var G__29896 = x__4459__auto__;
return goog.typeOf(G__29896);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.did_update["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj29898 = {};
return obj29898;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.will_receive_props[(function (){var G__29902 = x__4459__auto__;
return goog.typeOf(G__29902);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj29904 = {};
return obj29904;
})();

om.core.render = (function render(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.render[(function (){var G__29908 = x__4459__auto__;
return goog.typeOf(G__29908);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.render["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj29910 = {};
return obj29910;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.render_props[(function (){var G__29914 = x__4459__auto__;
return goog.typeOf(G__29914);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.render_props["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj29916 = {};
return obj29916;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core.render_state[(function (){var G__29920 = x__4459__auto__;
return goog.typeOf(G__29920);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core.render_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj29922 = {};
return obj29922;
})();


om.core.IOmSwap = (function (){var obj29924 = {};
return obj29924;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._om_swap_BANG_[(function (){var G__29928 = x__4459__auto__;
return goog.typeOf(G__29928);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj29930 = {};
return obj29930;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_state[(function (){var G__29936 = x__4459__auto__;
return goog.typeOf(G__29936);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_state[(function (){var G__29938 = x__4459__auto__;
return goog.typeOf(G__29938);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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


om.core.IGetRenderState = (function (){var obj29940 = {};
return obj29940;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_render_state[(function (){var G__29946 = x__4459__auto__;
return goog.typeOf(G__29946);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_render_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_render_state[(function (){var G__29948 = x__4459__auto__;
return goog.typeOf(G__29948);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_render_state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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


om.core.ISetState = (function (){var obj29950 = {};
return obj29950;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._set_state_BANG_[(function (){var G__29956 = x__4459__auto__;
return goog.typeOf(G__29956);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._set_state_BANG_[(function (){var G__29958 = x__4459__auto__;
return goog.typeOf(G__29958);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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


om.core.IRenderQueue = (function (){var obj29960 = {};
return obj29960;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_queue[(function (){var G__29964 = x__4459__auto__;
return goog.typeOf(G__29964);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_queue["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._queue_render_BANG_[(function (){var G__29968 = x__4459__auto__;
return goog.typeOf(G__29968);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._empty_queue_BANG_[(function (){var G__29972 = x__4459__auto__;
return goog.typeOf(G__29972);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj29974 = {};
return obj29974;
})();

om.core._value = (function _value(x){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._value[(function (){var G__29978 = x__4459__auto__;
return goog.typeOf(G__29978);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._value["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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

om.core.ICursor = (function (){var obj29980 = {};
return obj29980;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._path[(function (){var G__29984 = x__4459__auto__;
return goog.typeOf(G__29984);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._path["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._state[(function (){var G__29988 = x__4459__auto__;
return goog.typeOf(G__29988);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._state["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj29990 = {};
return obj29990;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3803__auto__ = value;
if(and__3803__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3803__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4459__auto__ = (((value == null))?null:value);
return (function (){var or__3815__auto__ = (om.core._to_cursor[(function (){var G__29996 = x__4459__auto__;
return goog.typeOf(G__29996);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._to_cursor["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3803__auto__ = value;
if(and__3803__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3803__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4459__auto__ = (((value == null))?null:value);
return (function (){var or__3815__auto__ = (om.core._to_cursor[(function (){var G__29998 = x__4459__auto__;
return goog.typeOf(G__29998);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._to_cursor["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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


om.core.ICursorDerive = (function (){var obj30000 = {};
return obj30000;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._derive[(function (){var G__30004 = x__4459__auto__;
return goog.typeOf(G__30004);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._derive["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__30005 = derived;
var G__30006 = state;
var G__30007 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__30005,G__30006,G__30007) : om.core.to_cursor.call(null,G__30005,G__30006,G__30007));
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

om.core.ITransact = (function (){var obj30009 = {};
return obj30009;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._transact_BANG_[(function (){var G__30013 = x__4459__auto__;
return goog.typeOf(G__30013);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj30015 = {};
return obj30015;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._listen_BANG_[(function (){var G__30019 = x__4459__auto__;
return goog.typeOf(G__30019);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._unlisten_BANG_[(function (){var G__30023 = x__4459__auto__;
return goog.typeOf(G__30023);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3803__auto__ = x;
if(and__3803__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4459__auto__ = (((x == null))?null:x);
return (function (){var or__3815__auto__ = (om.core._notify_BANG_[(function (){var G__30027 = x__4459__auto__;
return goog.typeOf(G__30027);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj30029 = {};
return obj30029;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._set_property_BANG_[(function (){var G__30033 = x__4459__auto__;
return goog.typeOf(G__30033);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._remove_property_BANG_[(function (){var G__30037 = x__4459__auto__;
return goog.typeOf(G__30037);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._remove_properties_BANG_[(function (){var G__30041 = x__4459__auto__;
return goog.typeOf(G__30041);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_property[(function (){var G__30045 = x__4459__auto__;
return goog.typeOf(G__30045);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_property["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj30047 = {};
return obj30047;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3803__auto__ = cursor;
if(and__3803__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3803__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4459__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3815__auto__ = (om.core._root_key[(function (){var G__30051 = x__4459__auto__;
return goog.typeOf(G__30051);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._root_key["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj30053 = {};
return obj30053;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._adapt[(function (){var G__30057 = x__4459__auto__;
return goog.typeOf(G__30057);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._adapt["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
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

om.core.IOmRef = (function (){var obj30059 = {};
return obj30059;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._add_dep_BANG_[(function (){var G__30063 = x__4459__auto__;
return goog.typeOf(G__30063);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._remove_dep_BANG_[(function (){var G__30067 = x__4459__auto__;
return goog.typeOf(G__30067);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__30071 = x__4459__auto__;
return goog.typeOf(G__30071);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3803__auto__ = this$;
if(and__3803__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3803__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4459__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3815__auto__ = (om.core._get_deps[(function (){var G__30075 = x__4459__auto__;
return goog.typeOf(G__30075);
})()]);
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (om.core._get_deps["_"]);
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__30085 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30085) : cljs.core.deref.call(null,G__30085));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__30086 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30086) : om.core.path.call(null,G__30086));
})(),korks);
var ret = (((function (){var G__30087 = state;
if(G__30087){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30087.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__30087.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__30087);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__30087);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$20)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$21,path,cljs.core.constant$keyword$22,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$23,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30088 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30088) : cljs.core.deref.call(null,G__30088));
})(),path),cljs.core.constant$keyword$24,old_state,cljs.core.constant$keyword$25,(function (){var G__30089 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30089) : cljs.core.deref.call(null,G__30089));
})()], null);
if(!((tag == null))){
var G__30090 = cursor;
var G__30091 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$26,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__30090,G__30091) : om.core.notify_STAR_.call(null,G__30090,G__30091));
} else {
var G__30092 = cursor;
var G__30093 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__30092,G__30093) : om.core.notify_STAR_.call(null,G__30092,G__30093));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__30095 = x;
if(G__30095){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30095.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__30095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30095);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__30097 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__30097) : c.call(null,G__30097));
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
var G__30099 = (x.props["__om_cursor"]);
var G__30099__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__30099,korks__$1):G__30099);
return G__30099__$1;
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
var G__30104 = state;
(G__30104["__om_prev_state"] = (state["__om_state"]));

(G__30104["__om_state"] = pending_state);

(G__30104["__om_pending_state"] = null);

return G__30104;
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
var props__$1 = (function (){var or__3815__auto__ = props;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3815__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
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
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30109 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30109) : cljs.core.deref.call(null,G__30109));
})(),(function (){var G__30110 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30110) : om.core.path.call(null,G__30110));
})(),cljs.core.constant$keyword$27);
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
var ref_path = (function (){var G__30116 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30116) : om.core.path.call(null,G__30116));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30117 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30117) : cljs.core.deref.call(null,G__30117));
})(),ref_path,cljs.core.constant$keyword$27);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$27)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__30118 = ref_val_SINGLEQUOTE_;
var G__30119 = ref_state;
var G__30120 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__30118,G__30119,G__30120) : om.core.to_cursor.call(null,G__30118,G__30119,G__30120));
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$28,cljs.core.constant$keyword$29,cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36,cljs.core.constant$keyword$37,cljs.core.constant$keyword$38],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30122 = c;
if(G__30122){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30122.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__30122.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30122);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30122);
}
})()){
var state_30147 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3815__auto__ = (state_30147["__om_prev_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (state_30147["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__30123 = c;
if(G__30123){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30123.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__30123.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30123);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30123);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__30124 = cljs.core.seq(refs);
var chunk__30125 = null;
var count__30126 = (0);
var i__30127 = (0);
while(true){
if((i__30127 < count__30126)){
var ref = chunk__30125.cljs$core$IIndexed$_nth$arity$2(null,i__30127);
var G__30128_30148 = this$;
var G__30129_30149 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30128_30148,G__30129_30149) : om.core.unobserve.call(null,G__30128_30148,G__30129_30149));

var G__30150 = seq__30124;
var G__30151 = chunk__30125;
var G__30152 = count__30126;
var G__30153 = (i__30127 + (1));
seq__30124 = G__30150;
chunk__30125 = G__30151;
count__30126 = G__30152;
i__30127 = G__30153;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__30124);
if(temp__4126__auto____$1){
var seq__30124__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30124__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__30124__$1);
var G__30154 = cljs.core.chunk_rest(seq__30124__$1);
var G__30155 = c__4602__auto__;
var G__30156 = cljs.core.count(c__4602__auto__);
var G__30157 = (0);
seq__30124 = G__30154;
chunk__30125 = G__30155;
count__30126 = G__30156;
i__30127 = G__30157;
continue;
} else {
var ref = cljs.core.first(seq__30124__$1);
var G__30130_30158 = this$;
var G__30131_30159 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30130_30158,G__30131_30159) : om.core.unobserve.call(null,G__30130_30158,G__30131_30159));

var G__30160 = cljs.core.next(seq__30124__$1);
var G__30161 = null;
var G__30162 = (0);
var G__30163 = (0);
seq__30124 = G__30160;
chunk__30125 = G__30161;
count__30126 = G__30162;
i__30127 = G__30163;
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
if((function (){var G__30132 = c;
if(G__30132){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30132.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__30132.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__30132);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__30132);
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

if((function (){var G__30133 = c;
if(G__30133){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30133.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__30133.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__30133);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__30133);
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
if(cljs.core.truth_((function (){var and__3803__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__3803__auto__){
return cljs.core.some(((function (and__3803__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__30121_SHARP_){
return om.core.ref_changed_QMARK_(p1__30121_SHARP_);
});})(and__3803__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3803__auto__;
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
var _STAR_parent_STAR_30134 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_30135 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_30136 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_30137 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_30138 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__30139 = c;
if(G__30139){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30139.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__30139.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30139);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30139);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__30140 = c;
if(G__30140){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30140.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__30140.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30140);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30140);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__30141 = c;
if(G__30141){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30141.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__30141.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30141);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30141);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_30138;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_30137;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_30136;

om.core._STAR_state_STAR_ = _STAR_state_STAR_30135;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_30134;
}}),(function (next_props,next_state){
var this$ = this;
var c_30164 = om.core.children(this$);
if((function (){var G__30142 = c_30164;
if(G__30142){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30142.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__30142.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30142);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30142);
}
})()){
var state_30165 = this$.state;
om.core.will_update(c_30164,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3815__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__30143 = c;
if(G__30143){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30143.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__30143.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30143);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30143);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$39)], 0)), "__om_id": (function (){var or__3815__auto__ = id;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
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
if((function (){var G__30144 = c;
if(G__30144){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30144.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__30144.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__30144);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__30144);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30145 = c;
if(G__30145){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30145.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__30145.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__30145);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__30145);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_30166 = om.core.children(this$);
if((function (){var G__30146 = c_30166;
if(G__30146){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30146.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__30146.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30146);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30146);
}
})()){
om.core.will_mount(c_30166);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x30168 = obj;
x30168.om$core$IGetState$ = true;

x30168.om$core$IGetState$_get_state$arity$1 = ((function (x30168){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3815__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return (state["__om_state"]);
}
});})(x30168))
;

x30168.om$core$IGetState$_get_state$arity$2 = ((function (x30168){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30168))
;

x30168.om$core$IGetRenderState$ = true;

x30168.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x30168){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x30168))
;

x30168.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x30168){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30168))
;

x30168.om$core$ISetState$ = true;

x30168.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x30168){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3803__auto__ = !((app_state == null));
if(and__3803__auto__){
return render;
} else {
return and__3803__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x30168))
;

x30168.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x30168){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3803__auto__ = !((app_state == null));
if(and__3803__auto__){
return render;
} else {
return and__3803__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x30168))
;

return x30168;
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
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30170 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30170) : cljs.core.deref.call(null,G__30170));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$42,cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$43,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$41);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$35,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3815__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3815__auto__ = cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$39),(((function (){var G__30171 = c;
if(G__30171){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30171.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__30171.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30171);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30171);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(this$),cljs.core.constant$keyword$43], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$38,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_30185 = om.core.children(this$);
if((function (){var G__30172 = c_30185;
if(G__30172){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30172.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__30172.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30172);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30172);
}
})()){
om.core.will_mount(c_30185);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$30,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30173 = c;
if(G__30173){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30173.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__30173.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30173);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30173);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__30174 = cljs.core.seq(refs);
var chunk__30175 = null;
var count__30176 = (0);
var i__30177 = (0);
while(true){
if((i__30177 < count__30176)){
var ref = chunk__30175.cljs$core$IIndexed$_nth$arity$2(null,i__30177);
var G__30178_30186 = this$;
var G__30179_30187 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30178_30186,G__30179_30187) : om.core.unobserve.call(null,G__30178_30186,G__30179_30187));

var G__30188 = seq__30174;
var G__30189 = chunk__30175;
var G__30190 = count__30176;
var G__30191 = (i__30177 + (1));
seq__30174 = G__30188;
chunk__30175 = G__30189;
count__30176 = G__30190;
i__30177 = G__30191;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__30174);
if(temp__4126__auto____$1){
var seq__30174__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30174__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__30174__$1);
var G__30192 = cljs.core.chunk_rest(seq__30174__$1);
var G__30193 = c__4602__auto__;
var G__30194 = cljs.core.count(c__4602__auto__);
var G__30195 = (0);
seq__30174 = G__30192;
chunk__30175 = G__30193;
count__30176 = G__30194;
i__30177 = G__30195;
continue;
} else {
var ref = cljs.core.first(seq__30174__$1);
var G__30180_30196 = this$;
var G__30181_30197 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30180_30196,G__30181_30197) : om.core.unobserve.call(null,G__30180_30196,G__30181_30197));

var G__30198 = cljs.core.next(seq__30174__$1);
var G__30199 = null;
var G__30200 = (0);
var G__30201 = (0);
seq__30174 = G__30198;
chunk__30175 = G__30199;
count__30176 = G__30200;
i__30177 = G__30201;
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
}),cljs.core.constant$keyword$34,(function (next_props,next_state){
var this$ = this;
var props_30202 = this$.props;
var c_30203 = om.core.children(this$);
if((function (){var G__30182 = c_30203;
if(G__30182){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30182.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__30182.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30182);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30182);
}
})()){
var state_30204 = this$.state;
om.core.will_update(c_30203,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$28,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30183 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30183) : cljs.core.deref.call(null,G__30183));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(this$)], null);
if((function (){var G__30184 = c;
if(G__30184){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30184.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__30184.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30184);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30184);
}
})()){
var state_30205 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3815__auto__ = cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$42], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x30209 = cljs.core.clj__GT_js(methods$);
x30209.om$core$IGetState$ = true;

x30209.om$core$IGetState$_get_state$arity$1 = ((function (x30209){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30210 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30210) : cljs.core.deref.call(null,G__30210));
})(),spath);
var or__3815__auto__ = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x30209))
;

x30209.om$core$IGetState$_get_state$arity$2 = ((function (x30209){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30209))
;

x30209.om$core$IGetRenderState$ = true;

x30209.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x30209){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(this$__$1),cljs.core.constant$keyword$43], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30211 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30211) : cljs.core.deref.call(null,G__30211));
})(),spath);
});})(x30209))
;

x30209.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x30209){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30209))
;

x30209.om$core$ISetState$ = true;

x30209.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x30209){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,om.core.react_id(this$__$1),cljs.core.constant$keyword$41], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3803__auto__ = !((gstate == null));
if(and__3803__auto__){
return render;
} else {
return and__3803__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x30209))
;

x30209.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x30209){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x30209))
;

return x30209;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__30214 = x;
if(G__30214){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30214.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__30214.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30214);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__30215 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30215) : cljs.core.deref.call(null,G__30215));
})(),cljs.core.constant$keyword$44));
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
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$27);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$27))){
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
return (function (p__30217){
var vec__30218 = p__30217;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30218,(1),null);
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
var G__30220 = null;
var G__30220__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__30220__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__30220 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30220__2.call(this,self__,k);
case 3:
return G__30220__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30220.cljs$core$IFn$_invoke$arity$2 = G__30220__2;
G__30220.cljs$core$IFn$_invoke$arity$3 = G__30220__3;
return G__30220;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args30216){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30216)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30219 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30219) : cljs.core.deref.call(null,G__30219));
})(),self__.path,cljs.core.constant$keyword$44);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om.core/MapCursor");
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
var G__30223 = null;
var G__30223__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__30223__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__30223 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30223__2.call(this,self__,k);
case 3:
return G__30223__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30223.cljs$core$IFn$_invoke$arity$2 = G__30223__2;
G__30223.cljs$core$IFn$_invoke$arity$3 = G__30223__3;
return G__30223;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args30221){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30221)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30222 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30222) : cljs.core.deref.call(null,G__30222));
})(),self__.path,cljs.core.constant$keyword$44);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4402__auto__,writer__4403__auto__,opt__4404__auto__){
return cljs.core._write(writer__4403__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x30226 = cljs.core.clone(val);
x30226.cljs$core$IEquiv$ = true;

x30226.cljs$core$IEquiv$_equiv$arity$2 = ((function (x30226){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x30226))
;

x30226.om$core$ITransact$ = true;

x30226.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30226){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x30226))
;

x30226.om$core$ICursor$ = true;

x30226.om$core$ICursor$_path$arity$1 = ((function (x30226){
return (function (_){
var ___$1 = this;
return path;
});})(x30226))
;

x30226.om$core$ICursor$_state$arity$1 = ((function (x30226){
return (function (_){
var ___$1 = this;
return state;
});})(x30226))
;

x30226.cljs$core$IDeref$ = true;

x30226.cljs$core$IDeref$_deref$arity$1 = ((function (x30226){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30227 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30227) : cljs.core.deref.call(null,G__30227));
})(),path,cljs.core.constant$keyword$44);
});})(x30226))
;

return x30226;
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
if((function (){var G__30236 = val;
if(G__30236){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30236.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__30236.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__30236);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__30236);
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
if((function (){var G__30237 = val;
if(G__30237){
var bit__4496__auto__ = (G__30237.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4496__auto__) || (G__30237.cljs$core$ICloneable$)){
return true;
} else {
if((!G__30237.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__30237);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__30237);
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
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__30239 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30239) : cljs.core.deref.call(null,G__30239));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__30242 = atom;
if(G__30242){
var bit__4496__auto__ = (G__30242.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4496__auto__) || (G__30242.cljs$core$IDeref$)){
return true;
} else {
if((!G__30242.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__30242);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__30242);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__30243 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30243) : cljs.core.deref.call(null,G__30243));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__30244 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30244) : cljs.core.atom.call(null,G__30244));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x30253 = cljs.core.clone(x);
x30253.om$core$ITransact$ = true;

x30253.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30253){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__30254_30257 = cursor__$1;
var G__30255_30258 = korks;
var G__30256_30259 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__30254_30257,G__30255_30258,G__30256_30259) : om.core.commit_BANG_.call(null,G__30254_30257,G__30255_30258,G__30256_30259));

return om.core._refresh_deps_BANG_(parent);
});})(x30253))
;

x30253.om$core$ICursorDerive$ = true;

x30253.om$core$ICursorDerive$_derive$arity$4 = ((function (x30253){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x30253))
;

x30253.om$core$IAdapt$ = true;

x30253.om$core$IAdapt$_adapt$arity$2 = ((function (x30253){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x30253))
;

x30253.cljs$core$ICloneable$ = true;

x30253.cljs$core$ICloneable$_clone$arity$1 = ((function (x30253){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x30253))
;

return x30253;
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

if((function (){var G__30275 = cursor;
if(G__30275){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30275.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__30275.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__30275);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__30275);
}
})()){
return cursor;
} else {
var path = (function (){var G__30276 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30276) : om.core.path.call(null,G__30276));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__30277 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30277) : cljs.core.atom.call(null,G__30277));
})())),path);
var x30278 = cljs.core.clone(cursor);
x30278.om$core$ITransact$ = true;

x30278.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30278,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__30279_30290 = cursor__$2;
var G__30280_30291 = korks;
var G__30281_30292 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__30279_30290,G__30280_30291,G__30281_30292) : om.core.commit_BANG_.call(null,G__30279_30290,G__30280_30291,G__30281_30292));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x30278,path,storage))
;

x30278.om$core$IOmRef$ = true;

x30278.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x30278,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__30282 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__30282) : om.core.id.call(null,G__30282));
})(),c);
});})(x30278,path,storage))
;

x30278.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x30278,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__30283 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__30283) : om.core.id.call(null,G__30283));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x30278,path,storage))
;

x30278.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x30278,path,storage){
return (function (_){
var ___$1 = this;
var seq__30284 = cljs.core.seq(cljs.core.vals((function (){var G__30288 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30288) : cljs.core.deref.call(null,G__30288));
})()));
var chunk__30285 = null;
var count__30286 = (0);
var i__30287 = (0);
while(true){
if((i__30287 < count__30286)){
var c = chunk__30285.cljs$core$IIndexed$_nth$arity$2(null,i__30287);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__30293 = seq__30284;
var G__30294 = chunk__30285;
var G__30295 = count__30286;
var G__30296 = (i__30287 + (1));
seq__30284 = G__30293;
chunk__30285 = G__30294;
count__30286 = G__30295;
i__30287 = G__30296;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__30284);
if(temp__4126__auto__){
var seq__30284__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30284__$1)){
var c__4602__auto__ = cljs.core.chunk_first(seq__30284__$1);
var G__30297 = cljs.core.chunk_rest(seq__30284__$1);
var G__30298 = c__4602__auto__;
var G__30299 = cljs.core.count(c__4602__auto__);
var G__30300 = (0);
seq__30284 = G__30297;
chunk__30285 = G__30298;
count__30286 = G__30299;
i__30287 = G__30300;
continue;
} else {
var c = cljs.core.first(seq__30284__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__30301 = cljs.core.next(seq__30284__$1);
var G__30302 = null;
var G__30303 = (0);
var G__30304 = (0);
seq__30284 = G__30301;
chunk__30285 = G__30302;
count__30286 = G__30303;
i__30287 = G__30304;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30278,path,storage))
;

x30278.om$core$IOmRef$_get_deps$arity$1 = ((function (x30278,path,storage){
return (function (_){
var ___$1 = this;
var G__30289 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30289) : cljs.core.deref.call(null,G__30289));
});})(x30278,path,storage))
;

x30278.om$core$ICursorDerive$ = true;

x30278.om$core$ICursorDerive$_derive$arity$4 = ((function (x30278,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x30278,path,storage))
;

return x30278;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3815__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
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
om.core.refresh_set = (function (){var G__30305 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30305) : cljs.core.atom.call(null,G__30305));
})();
om.core.get_renderT = (function get_renderT(state){
var or__3815__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
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

var seq__30312_30317 = cljs.core.seq((function (){var G__30316 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30316) : cljs.core.deref.call(null,G__30316));
})());
var chunk__30313_30318 = null;
var count__30314_30319 = (0);
var i__30315_30320 = (0);
while(true){
if((i__30315_30320 < count__30314_30319)){
var f_30321 = chunk__30313_30318.cljs$core$IIndexed$_nth$arity$2(null,i__30315_30320);
(f_30321.cljs$core$IFn$_invoke$arity$0 ? f_30321.cljs$core$IFn$_invoke$arity$0() : f_30321.call(null));

var G__30322 = seq__30312_30317;
var G__30323 = chunk__30313_30318;
var G__30324 = count__30314_30319;
var G__30325 = (i__30315_30320 + (1));
seq__30312_30317 = G__30322;
chunk__30313_30318 = G__30323;
count__30314_30319 = G__30324;
i__30315_30320 = G__30325;
continue;
} else {
var temp__4126__auto___30326 = cljs.core.seq(seq__30312_30317);
if(temp__4126__auto___30326){
var seq__30312_30327__$1 = temp__4126__auto___30326;
if(cljs.core.chunked_seq_QMARK_(seq__30312_30327__$1)){
var c__4602__auto___30328 = cljs.core.chunk_first(seq__30312_30327__$1);
var G__30329 = cljs.core.chunk_rest(seq__30312_30327__$1);
var G__30330 = c__4602__auto___30328;
var G__30331 = cljs.core.count(c__4602__auto___30328);
var G__30332 = (0);
seq__30312_30317 = G__30329;
chunk__30313_30318 = G__30330;
count__30314_30319 = G__30331;
i__30315_30320 = G__30332;
continue;
} else {
var f_30333 = cljs.core.first(seq__30312_30327__$1);
(f_30333.cljs$core$IFn$_invoke$arity$0 ? f_30333.cljs$core$IFn$_invoke$arity$0() : f_30333.call(null));

var G__30334 = cljs.core.next(seq__30312_30327__$1);
var G__30335 = null;
var G__30336 = (0);
var G__30337 = (0);
seq__30312_30317 = G__30334;
chunk__30313_30318 = G__30335;
count__30314_30319 = G__30336;
i__30315_30320 = G__30337;
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
om.core.roots = (function (){var G__30338 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30338) : cljs.core.atom.call(null,G__30338));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3815__auto__ = (function (){var G__30345 = x;
if(G__30345){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30345.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__30345.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30345);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30345);
}
})();
if(or__3815__auto__){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = (function (){var G__30347 = x;
if(G__30347){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto____$1 = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return G__30347.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__30347.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30347);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30347);
}
})();
if(or__3815__auto____$1){
return or__3815__auto____$1;
} else {
var G__30348 = x;
if(G__30348){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto____$2 = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto____$2)){
return or__3815__auto____$2;
} else {
return G__30348.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__30348.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30348);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30348);
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
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null,cljs.core.constant$keyword$52,null,cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$54,null,cljs.core.constant$keyword$55,null], null), null),cljs.core.keys(m));
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
(f["om$descriptor"] = (function (){var G__30353 = (function (){var G__30354 = (function (){var or__3815__auto__ = descriptor;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
var or__3815__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3815__auto____$1)){
return or__3815__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__30354);
})();
return React.createFactory(G__30353);
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
var G__30372 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__30373 = cursor;
var G__30374 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30373,G__30374) : f.call(null,G__30373,G__30374));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__30372) : ctor.call(null,G__30372));
} else {
var map__30375 = m;
var map__30375__$1 = ((cljs.core.seq_QMARK_(map__30375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30375):map__30375);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,cljs.core.constant$keyword$53);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,cljs.core.constant$keyword$50);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,cljs.core.constant$keyword$51);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,cljs.core.constant$keyword$52);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30375__$1,cljs.core.constant$keyword$49);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$46);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__30376 = cursor;
var G__30377 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__30376,G__30377) : dataf.call(null,G__30376,G__30377));
} else {
var G__30378 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__30378) : dataf.call(null,G__30378));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__30379 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__30379) : key_fn.call(null,G__30379));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$48)
));
var shared = (function (){var or__3815__auto__ = cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(m));
var G__30380 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__30375,map__30375__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__30381 = cursor_SINGLEQUOTE_;
var G__30382 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30381,G__30382) : f.call(null,G__30381,G__30382));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__30375,map__30375__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__30375,map__30375__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__30383 = cursor_SINGLEQUOTE_;
var G__30384 = this$;
var G__30385 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30383,G__30384,G__30385) : f.call(null,G__30383,G__30384,G__30385));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__30375,map__30375__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3815__auto__ = rkey;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__30380) : ctor.call(null,G__30380));

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
var ret = (function (){var G__30392 = f;
var G__30393 = x;
var G__30394 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__30392,G__30393,G__30394) : om.core._STAR_instrument_STAR_.call(null,G__30392,G__30393,G__30394));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$56)){
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
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$54,i));
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
if((function (){var G__30417 = state;
if(G__30417){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30417.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__30417.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__30417);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__30417);
}
})()){
} else {
var properties_30436 = (function (){var G__30418 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30418) : cljs.core.atom.call(null,G__30418));
})();
var listeners_30437 = (function (){var G__30419 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30419) : cljs.core.atom.call(null,G__30419));
})();
var render_queue_30438 = (function (){var G__30420 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30420) : cljs.core.atom.call(null,G__30420));
})();
var x30421_30439 = state;
x30421_30439.om$core$IRenderQueue$ = true;

x30421_30439.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (this$){
var this$__$1 = this;
var G__30422 = render_queue_30438;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30422) : cljs.core.deref.call(null,G__30422));
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__30423 = render_queue_30438;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30423) : cljs.core.deref.call(null,G__30423));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_30438,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_30438,cljs.core.empty);
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$INotify$ = true;

x30421_30439.om$core$INotify$_listen_BANG_$arity$3 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_30437,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_30437,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$INotify$_notify_BANG_$arity$3 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__30424_30440 = cljs.core.seq((function (){var G__30428 = listeners_30437;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30428) : cljs.core.deref.call(null,G__30428));
})());
var chunk__30425_30441 = null;
var count__30426_30442 = (0);
var i__30427_30443 = (0);
while(true){
if((i__30427_30443 < count__30426_30442)){
var vec__30429_30444 = chunk__30425_30441.cljs$core$IIndexed$_nth$arity$2(null,i__30427_30443);
var __30445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30429_30444,(0),null);
var f_30446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30429_30444,(1),null);
var G__30430_30447 = tx_data;
var G__30431_30448 = root_cursor;
(f_30446.cljs$core$IFn$_invoke$arity$2 ? f_30446.cljs$core$IFn$_invoke$arity$2(G__30430_30447,G__30431_30448) : f_30446.call(null,G__30430_30447,G__30431_30448));

var G__30449 = seq__30424_30440;
var G__30450 = chunk__30425_30441;
var G__30451 = count__30426_30442;
var G__30452 = (i__30427_30443 + (1));
seq__30424_30440 = G__30449;
chunk__30425_30441 = G__30450;
count__30426_30442 = G__30451;
i__30427_30443 = G__30452;
continue;
} else {
var temp__4126__auto___30453 = cljs.core.seq(seq__30424_30440);
if(temp__4126__auto___30453){
var seq__30424_30454__$1 = temp__4126__auto___30453;
if(cljs.core.chunked_seq_QMARK_(seq__30424_30454__$1)){
var c__4602__auto___30455 = cljs.core.chunk_first(seq__30424_30454__$1);
var G__30456 = cljs.core.chunk_rest(seq__30424_30454__$1);
var G__30457 = c__4602__auto___30455;
var G__30458 = cljs.core.count(c__4602__auto___30455);
var G__30459 = (0);
seq__30424_30440 = G__30456;
chunk__30425_30441 = G__30457;
count__30426_30442 = G__30458;
i__30427_30443 = G__30459;
continue;
} else {
var vec__30432_30460 = cljs.core.first(seq__30424_30454__$1);
var __30461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30432_30460,(0),null);
var f_30462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30432_30460,(1),null);
var G__30433_30463 = tx_data;
var G__30434_30464 = root_cursor;
(f_30462.cljs$core$IFn$_invoke$arity$2 ? f_30462.cljs$core$IFn$_invoke$arity$2(G__30433_30463,G__30434_30464) : f_30462.call(null,G__30433_30463,G__30434_30464));

var G__30465 = cljs.core.next(seq__30424_30454__$1);
var G__30466 = null;
var G__30467 = (0);
var G__30468 = (0);
seq__30424_30440 = G__30465;
chunk__30425_30441 = G__30466;
count__30426_30442 = G__30467;
i__30427_30443 = G__30468;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$IRootProperties$ = true;

x30421_30439.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_30436,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_30436,cljs.core.dissoc,id,k);
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_30436,cljs.core.dissoc,id);
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

x30421_30439.om$core$IRootProperties$_get_property$arity$3 = ((function (x30421_30439,properties_30436,listeners_30437,render_queue_30438){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30435 = properties_30436;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30435) : cljs.core.deref.call(null,G__30435));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x30421_30439,properties_30436,listeners_30437,render_queue_30438))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x30474 = cljs.core.clone(cursor);
x30474.om$core$IRootKey$ = true;

x30474.om$core$IRootKey$_root_key$arity$1 = ((function (x30474){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x30474))
;

x30474.om$core$IAdapt$ = true;

x30474.om$core$IAdapt$_adapt$arity$2 = ((function (x30474){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x30474))
;

x30474.cljs$core$ICloneable$ = true;

x30474.cljs$core$ICloneable$_clone$arity$1 = ((function (x30474){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x30474))
;

return x30474;
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
om.core.root = (function root(f,value,p__30475){
var map__30564 = p__30475;
var map__30564__$1 = ((cljs.core.seq_QMARK_(map__30564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30564):map__30564);
var options = map__30564__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$57);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$58);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$45);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$47);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$21);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$59);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$60);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__30652 = (function (){var G__30565 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30565) : cljs.core.deref.call(null,G__30565));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__30652,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__30652,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__30566 = value;
if(G__30566){
var bit__4496__auto__ = (G__30566.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4496__auto__) || (G__30566.cljs$core$IAtom$)){
return true;
} else {
if((!G__30566.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__30566);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__30566);
}
})())?value:(function (){var G__30567 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30567) : cljs.core.atom.call(null,G__30567));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3815__auto__ = adapt;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$60,cljs.core.array_seq([cljs.core.constant$keyword$59,cljs.core.constant$keyword$21,cljs.core.constant$keyword$58,cljs.core.constant$keyword$57], 0));
var ret = (function (){var G__30568 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30568) : cljs.core.atom.call(null,G__30568));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__30608 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30608) : cljs.core.deref.call(null,G__30608));
})();
var cursor = (function (){var G__30609 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__30609) : adapt__$1.call(null,G__30609));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$61))){
} else {
var c_30653 = om.dom.render((function (){var _STAR_descriptor_STAR_30610 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_30611 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_30612 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_30613 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_30613;

om.core._STAR_state_STAR_ = _STAR_state_STAR_30612;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_30611;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_30610;
}})(),target);
if(((function (){var G__30614 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30614) : cljs.core.deref.call(null,G__30614));
})() == null)){
var G__30615_30654 = ret;
var G__30616_30655 = c_30653;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30615_30654,G__30616_30655) : cljs.core.reset_BANG_.call(null,G__30615_30654,G__30616_30655));
} else {
}
}

var queue_30656 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_30656)){
} else {
var seq__30617_30657 = cljs.core.seq(queue_30656);
var chunk__30618_30658 = null;
var count__30619_30659 = (0);
var i__30620_30660 = (0);
while(true){
if((i__30620_30660 < count__30619_30659)){
var c_30661 = chunk__30618_30658.cljs$core$IIndexed$_nth$arity$2(null,i__30620_30660);
if(cljs.core.truth_(c_30661.isMounted())){
var temp__4126__auto___30662 = (c_30661.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___30662)){
var next_props_30663 = temp__4126__auto___30662;
(c_30661.props["__om_cursor"] = next_props_30663);

(c_30661.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3815__auto__ = !((function (){var G__30622 = om.core.children(c_30661);
if(G__30622){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30622.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__30622.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30622);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30622);
}
})());
if(or__3815__auto__){
return or__3815__auto__;
} else {
return c_30661.shouldComponentUpdate(c_30661.props,c_30661.state);
}
})())){
c_30661.forceUpdate();
} else {
}
} else {
}

var G__30664 = seq__30617_30657;
var G__30665 = chunk__30618_30658;
var G__30666 = count__30619_30659;
var G__30667 = (i__30620_30660 + (1));
seq__30617_30657 = G__30664;
chunk__30618_30658 = G__30665;
count__30619_30659 = G__30666;
i__30620_30660 = G__30667;
continue;
} else {
var temp__4126__auto___30668 = cljs.core.seq(seq__30617_30657);
if(temp__4126__auto___30668){
var seq__30617_30669__$1 = temp__4126__auto___30668;
if(cljs.core.chunked_seq_QMARK_(seq__30617_30669__$1)){
var c__4602__auto___30670 = cljs.core.chunk_first(seq__30617_30669__$1);
var G__30671 = cljs.core.chunk_rest(seq__30617_30669__$1);
var G__30672 = c__4602__auto___30670;
var G__30673 = cljs.core.count(c__4602__auto___30670);
var G__30674 = (0);
seq__30617_30657 = G__30671;
chunk__30618_30658 = G__30672;
count__30619_30659 = G__30673;
i__30620_30660 = G__30674;
continue;
} else {
var c_30675 = cljs.core.first(seq__30617_30669__$1);
if(cljs.core.truth_(c_30675.isMounted())){
var temp__4126__auto___30676__$1 = (c_30675.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___30676__$1)){
var next_props_30677 = temp__4126__auto___30676__$1;
(c_30675.props["__om_cursor"] = next_props_30677);

(c_30675.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3815__auto__ = !((function (){var G__30624 = om.core.children(c_30675);
if(G__30624){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30624.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__30624.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30624);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30624);
}
})());
if(or__3815__auto__){
return or__3815__auto__;
} else {
return c_30675.shouldComponentUpdate(c_30675.props,c_30675.state);
}
})())){
c_30675.forceUpdate();
} else {
}
} else {
}

var G__30678 = cljs.core.next(seq__30617_30669__$1);
var G__30679 = null;
var G__30680 = (0);
var G__30681 = (0);
seq__30617_30657 = G__30678;
chunk__30618_30658 = G__30679;
count__30619_30659 = G__30680;
i__30620_30660 = G__30681;
continue;
}
} else {
}
}
break;
}
}

var _refs_30682 = (function (){var G__30625 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30625) : cljs.core.deref.call(null,G__30625));
})();
if(cljs.core.empty_QMARK_(_refs_30682)){
} else {
var seq__30626_30683 = cljs.core.seq(_refs_30682);
var chunk__30627_30684 = null;
var count__30628_30685 = (0);
var i__30629_30686 = (0);
while(true){
if((i__30629_30686 < count__30628_30685)){
var vec__30630_30687 = chunk__30627_30684.cljs$core$IIndexed$_nth$arity$2(null,i__30629_30686);
var path_30688__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630_30687,(0),null);
var cs_30689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30630_30687,(1),null);
var cs_30690__$1 = (function (){var G__30631 = cs_30689;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30631) : cljs.core.deref.call(null,G__30631));
})();
var seq__30632_30691 = cljs.core.seq(cs_30690__$1);
var chunk__30633_30692 = null;
var count__30634_30693 = (0);
var i__30635_30694 = (0);
while(true){
if((i__30635_30694 < count__30634_30693)){
var vec__30636_30695 = chunk__30633_30692.cljs$core$IIndexed$_nth$arity$2(null,i__30635_30694);
var id_30696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30636_30695,(0),null);
var c_30697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30636_30695,(1),null);
if(cljs.core.truth_(c_30697.shouldComponentUpdate(c_30697.props,c_30697.state))){
c_30697.forceUpdate();
} else {
}

var G__30698 = seq__30632_30691;
var G__30699 = chunk__30633_30692;
var G__30700 = count__30634_30693;
var G__30701 = (i__30635_30694 + (1));
seq__30632_30691 = G__30698;
chunk__30633_30692 = G__30699;
count__30634_30693 = G__30700;
i__30635_30694 = G__30701;
continue;
} else {
var temp__4126__auto___30702 = cljs.core.seq(seq__30632_30691);
if(temp__4126__auto___30702){
var seq__30632_30703__$1 = temp__4126__auto___30702;
if(cljs.core.chunked_seq_QMARK_(seq__30632_30703__$1)){
var c__4602__auto___30704 = cljs.core.chunk_first(seq__30632_30703__$1);
var G__30705 = cljs.core.chunk_rest(seq__30632_30703__$1);
var G__30706 = c__4602__auto___30704;
var G__30707 = cljs.core.count(c__4602__auto___30704);
var G__30708 = (0);
seq__30632_30691 = G__30705;
chunk__30633_30692 = G__30706;
count__30634_30693 = G__30707;
i__30635_30694 = G__30708;
continue;
} else {
var vec__30637_30709 = cljs.core.first(seq__30632_30703__$1);
var id_30710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637_30709,(0),null);
var c_30711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30637_30709,(1),null);
if(cljs.core.truth_(c_30711.shouldComponentUpdate(c_30711.props,c_30711.state))){
c_30711.forceUpdate();
} else {
}

var G__30712 = cljs.core.next(seq__30632_30703__$1);
var G__30713 = null;
var G__30714 = (0);
var G__30715 = (0);
seq__30632_30691 = G__30712;
chunk__30633_30692 = G__30713;
count__30634_30693 = G__30714;
i__30635_30694 = G__30715;
continue;
}
} else {
}
}
break;
}

var G__30716 = seq__30626_30683;
var G__30717 = chunk__30627_30684;
var G__30718 = count__30628_30685;
var G__30719 = (i__30629_30686 + (1));
seq__30626_30683 = G__30716;
chunk__30627_30684 = G__30717;
count__30628_30685 = G__30718;
i__30629_30686 = G__30719;
continue;
} else {
var temp__4126__auto___30720 = cljs.core.seq(seq__30626_30683);
if(temp__4126__auto___30720){
var seq__30626_30721__$1 = temp__4126__auto___30720;
if(cljs.core.chunked_seq_QMARK_(seq__30626_30721__$1)){
var c__4602__auto___30722 = cljs.core.chunk_first(seq__30626_30721__$1);
var G__30723 = cljs.core.chunk_rest(seq__30626_30721__$1);
var G__30724 = c__4602__auto___30722;
var G__30725 = cljs.core.count(c__4602__auto___30722);
var G__30726 = (0);
seq__30626_30683 = G__30723;
chunk__30627_30684 = G__30724;
count__30628_30685 = G__30725;
i__30629_30686 = G__30726;
continue;
} else {
var vec__30638_30727 = cljs.core.first(seq__30626_30721__$1);
var path_30728__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30638_30727,(0),null);
var cs_30729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30638_30727,(1),null);
var cs_30730__$1 = (function (){var G__30639 = cs_30729;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30639) : cljs.core.deref.call(null,G__30639));
})();
var seq__30640_30731 = cljs.core.seq(cs_30730__$1);
var chunk__30641_30732 = null;
var count__30642_30733 = (0);
var i__30643_30734 = (0);
while(true){
if((i__30643_30734 < count__30642_30733)){
var vec__30644_30735 = chunk__30641_30732.cljs$core$IIndexed$_nth$arity$2(null,i__30643_30734);
var id_30736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30644_30735,(0),null);
var c_30737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30644_30735,(1),null);
if(cljs.core.truth_(c_30737.shouldComponentUpdate(c_30737.props,c_30737.state))){
c_30737.forceUpdate();
} else {
}

var G__30738 = seq__30640_30731;
var G__30739 = chunk__30641_30732;
var G__30740 = count__30642_30733;
var G__30741 = (i__30643_30734 + (1));
seq__30640_30731 = G__30738;
chunk__30641_30732 = G__30739;
count__30642_30733 = G__30740;
i__30643_30734 = G__30741;
continue;
} else {
var temp__4126__auto___30742__$1 = cljs.core.seq(seq__30640_30731);
if(temp__4126__auto___30742__$1){
var seq__30640_30743__$1 = temp__4126__auto___30742__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30640_30743__$1)){
var c__4602__auto___30744 = cljs.core.chunk_first(seq__30640_30743__$1);
var G__30745 = cljs.core.chunk_rest(seq__30640_30743__$1);
var G__30746 = c__4602__auto___30744;
var G__30747 = cljs.core.count(c__4602__auto___30744);
var G__30748 = (0);
seq__30640_30731 = G__30745;
chunk__30641_30732 = G__30746;
count__30642_30733 = G__30747;
i__30643_30734 = G__30748;
continue;
} else {
var vec__30645_30749 = cljs.core.first(seq__30640_30743__$1);
var id_30750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645_30749,(0),null);
var c_30751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645_30749,(1),null);
if(cljs.core.truth_(c_30751.shouldComponentUpdate(c_30751.props,c_30751.state))){
c_30751.forceUpdate();
} else {
}

var G__30752 = cljs.core.next(seq__30640_30743__$1);
var G__30753 = null;
var G__30754 = (0);
var G__30755 = (0);
seq__30640_30731 = G__30752;
chunk__30641_30732 = G__30753;
count__30642_30733 = G__30754;
i__30643_30734 = G__30755;
continue;
}
} else {
}
}
break;
}

var G__30756 = cljs.core.next(seq__30626_30721__$1);
var G__30757 = null;
var G__30758 = (0);
var G__30759 = (0);
seq__30626_30683 = G__30756;
chunk__30627_30684 = G__30757;
count__30628_30685 = G__30758;
i__30629_30686 = G__30759;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$61,true);

var G__30646 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30646) : cljs.core.deref.call(null,G__30646));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$62))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$61,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$62,false);

if(cljs.core.contains_QMARK_((function (){var G__30647 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30647) : cljs.core.deref.call(null,G__30647));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__30648 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__30649 = (16);
return setTimeout(G__30648,G__30649);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__30650 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__30650);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__30651 = target;
return React.unmountComponentAtNode(G__30651);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30564,map__30564__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__30762 = target;
return goog.dom.isElement(G__30762);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30763 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30763) : cljs.core.deref.call(null,G__30763));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__30765 = x;
if(G__30765){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30765.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__30765.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__30765);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__30765);
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

var key = (((function (){var G__30776 = cursor;
if(G__30776){
var bit__4496__auto__ = null;
if(cljs.core.truth_((function (){var or__3815__auto__ = bit__4496__auto__;
if(cljs.core.truth_(or__3815__auto__)){
return or__3815__auto__;
} else {
return G__30776.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__30776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__30776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__30776);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__30777 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30777) : om.core.path.call(null,G__30777));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$62,true);
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__30780 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30780) : f.call(null,G__30780));
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__30781 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30781) : f.call(null,G__30781));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__30784 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30784) : f.call(null,G__30784));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__30785 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30785) : f.call(null,G__30785));
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
