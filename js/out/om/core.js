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

om.core.IDisplayName = (function (){var obj29776 = {};
return obj29776;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.display_name[(function (){var G__29780 = x__4895__auto__;
return goog.typeOf(G__29780);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.display_name["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj29782 = {};
return obj29782;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.init_state[(function (){var G__29786 = x__4895__auto__;
return goog.typeOf(G__29786);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.init_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj29788 = {};
return obj29788;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.should_update[(function (){var G__29792 = x__4895__auto__;
return goog.typeOf(G__29792);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.should_update["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj29794 = {};
return obj29794;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_mount[(function (){var G__29798 = x__4895__auto__;
return goog.typeOf(G__29798);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_mount["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj29800 = {};
return obj29800;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.did_mount[(function (){var G__29804 = x__4895__auto__;
return goog.typeOf(G__29804);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.did_mount["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj29806 = {};
return obj29806;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_unmount[(function (){var G__29810 = x__4895__auto__;
return goog.typeOf(G__29810);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_unmount["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj29812 = {};
return obj29812;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_update[(function (){var G__29816 = x__4895__auto__;
return goog.typeOf(G__29816);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_update["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj29818 = {};
return obj29818;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.did_update[(function (){var G__29822 = x__4895__auto__;
return goog.typeOf(G__29822);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.did_update["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj29824 = {};
return obj29824;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.will_receive_props[(function (){var G__29828 = x__4895__auto__;
return goog.typeOf(G__29828);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj29830 = {};
return obj29830;
})();

om.core.render = (function render(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.render[(function (){var G__29834 = x__4895__auto__;
return goog.typeOf(G__29834);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.render["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj29836 = {};
return obj29836;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.render_props[(function (){var G__29840 = x__4895__auto__;
return goog.typeOf(G__29840);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.render_props["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj29842 = {};
return obj29842;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core.render_state[(function (){var G__29846 = x__4895__auto__;
return goog.typeOf(G__29846);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core.render_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj29848 = {};
return obj29848;
})();


om.core.IOmSwap = (function (){var obj29850 = {};
return obj29850;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._om_swap_BANG_[(function (){var G__29854 = x__4895__auto__;
return goog.typeOf(G__29854);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj29856 = {};
return obj29856;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_state[(function (){var G__29862 = x__4895__auto__;
return goog.typeOf(G__29862);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_state[(function (){var G__29864 = x__4895__auto__;
return goog.typeOf(G__29864);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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


om.core.IGetRenderState = (function (){var obj29866 = {};
return obj29866;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_render_state[(function (){var G__29872 = x__4895__auto__;
return goog.typeOf(G__29872);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_render_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_render_state[(function (){var G__29874 = x__4895__auto__;
return goog.typeOf(G__29874);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_render_state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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


om.core.ISetState = (function (){var obj29876 = {};
return obj29876;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._set_state_BANG_[(function (){var G__29882 = x__4895__auto__;
return goog.typeOf(G__29882);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._set_state_BANG_[(function (){var G__29884 = x__4895__auto__;
return goog.typeOf(G__29884);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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


om.core.IRenderQueue = (function (){var obj29886 = {};
return obj29886;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_queue[(function (){var G__29890 = x__4895__auto__;
return goog.typeOf(G__29890);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_queue["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._queue_render_BANG_[(function (){var G__29894 = x__4895__auto__;
return goog.typeOf(G__29894);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._empty_queue_BANG_[(function (){var G__29898 = x__4895__auto__;
return goog.typeOf(G__29898);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj29900 = {};
return obj29900;
})();

om.core._value = (function _value(x){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._value[(function (){var G__29904 = x__4895__auto__;
return goog.typeOf(G__29904);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._value["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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

om.core.ICursor = (function (){var obj29906 = {};
return obj29906;
})();

om.core._path = (function _path(cursor){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._path[(function (){var G__29910 = x__4895__auto__;
return goog.typeOf(G__29910);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._path["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._state[(function (){var G__29914 = x__4895__auto__;
return goog.typeOf(G__29914);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._state["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj29916 = {};
return obj29916;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__4239__auto__ = value;
if(and__4239__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4239__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4895__auto__ = (((value == null))?null:value);
return (function (){var or__4251__auto__ = (om.core._to_cursor[(function (){var G__29922 = x__4895__auto__;
return goog.typeOf(G__29922);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._to_cursor["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__4239__auto__ = value;
if(and__4239__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4239__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4895__auto__ = (((value == null))?null:value);
return (function (){var or__4251__auto__ = (om.core._to_cursor[(function (){var G__29924 = x__4895__auto__;
return goog.typeOf(G__29924);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._to_cursor["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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


om.core.ICursorDerive = (function (){var obj29926 = {};
return obj29926;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._derive[(function (){var G__29930 = x__4895__auto__;
return goog.typeOf(G__29930);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._derive["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__29931 = derived;
var G__29932 = state;
var G__29933 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__29931,G__29932,G__29933) : om.core.to_cursor.call(null,G__29931,G__29932,G__29933));
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

om.core.ITransact = (function (){var obj29935 = {};
return obj29935;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._transact_BANG_[(function (){var G__29939 = x__4895__auto__;
return goog.typeOf(G__29939);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj29941 = {};
return obj29941;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._listen_BANG_[(function (){var G__29945 = x__4895__auto__;
return goog.typeOf(G__29945);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._unlisten_BANG_[(function (){var G__29949 = x__4895__auto__;
return goog.typeOf(G__29949);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4239__auto__ = x;
if(and__4239__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4895__auto__ = (((x == null))?null:x);
return (function (){var or__4251__auto__ = (om.core._notify_BANG_[(function (){var G__29953 = x__4895__auto__;
return goog.typeOf(G__29953);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj29955 = {};
return obj29955;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._set_property_BANG_[(function (){var G__29959 = x__4895__auto__;
return goog.typeOf(G__29959);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._remove_property_BANG_[(function (){var G__29963 = x__4895__auto__;
return goog.typeOf(G__29963);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._remove_properties_BANG_[(function (){var G__29967 = x__4895__auto__;
return goog.typeOf(G__29967);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_property[(function (){var G__29971 = x__4895__auto__;
return goog.typeOf(G__29971);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_property["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj29973 = {};
return obj29973;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__4239__auto__ = cursor;
if(and__4239__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4239__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4895__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4251__auto__ = (om.core._root_key[(function (){var G__29977 = x__4895__auto__;
return goog.typeOf(G__29977);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._root_key["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj29979 = {};
return obj29979;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._adapt[(function (){var G__29983 = x__4895__auto__;
return goog.typeOf(G__29983);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._adapt["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
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

om.core.IOmRef = (function (){var obj29985 = {};
return obj29985;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._add_dep_BANG_[(function (){var G__29989 = x__4895__auto__;
return goog.typeOf(G__29989);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._remove_dep_BANG_[(function (){var G__29993 = x__4895__auto__;
return goog.typeOf(G__29993);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__29997 = x__4895__auto__;
return goog.typeOf(G__29997);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__4239__auto__ = this$;
if(and__4239__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4239__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4895__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4251__auto__ = (om.core._get_deps[(function (){var G__30001 = x__4895__auto__;
return goog.typeOf(G__30001);
})()]);
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (om.core._get_deps["_"]);
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__30011 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30011) : cljs.core.deref.call(null,G__30011));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__30012 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30012) : om.core.path.call(null,G__30012));
})(),korks);
var ret = (((function (){var G__30013 = state;
if(G__30013){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30013.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__30013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__30013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__30013);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$22)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$23,path,cljs.core.constant$keyword$24,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$25,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30014 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30014) : cljs.core.deref.call(null,G__30014));
})(),path),cljs.core.constant$keyword$26,old_state,cljs.core.constant$keyword$27,(function (){var G__30015 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30015) : cljs.core.deref.call(null,G__30015));
})()], null);
if(!((tag == null))){
var G__30016 = cursor;
var G__30017 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$28,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__30016,G__30017) : om.core.notify_STAR_.call(null,G__30016,G__30017));
} else {
var G__30018 = cursor;
var G__30019 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__30018,G__30019) : om.core.notify_STAR_.call(null,G__30018,G__30019));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__30021 = x;
if(G__30021){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30021.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__30021.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30021);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30021);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__30023 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__30023) : c.call(null,G__30023));
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
var G__30025 = (x.props["__om_cursor"]);
var G__30025__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__30025,korks__$1):G__30025);
return G__30025__$1;
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
var G__30030 = state;
(G__30030["__om_prev_state"] = (state["__om_state"]));

(G__30030["__om_state"] = pending_state);

(G__30030["__om_pending_state"] = null);

return G__30030;
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
var props__$1 = (function (){var or__4251__auto__ = props;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4251__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
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
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30035 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30035) : cljs.core.deref.call(null,G__30035));
})(),(function (){var G__30036 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30036) : om.core.path.call(null,G__30036));
})(),cljs.core.constant$keyword$29);
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
var ref_path = (function (){var G__30042 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30042) : om.core.path.call(null,G__30042));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30043 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30043) : cljs.core.deref.call(null,G__30043));
})(),ref_path,cljs.core.constant$keyword$29);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$29)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__30044 = ref_val_SINGLEQUOTE_;
var G__30045 = ref_state;
var G__30046 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__30044,G__30045,G__30046) : om.core.to_cursor.call(null,G__30044,G__30045,G__30046));
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$30,cljs.core.constant$keyword$31,cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36,cljs.core.constant$keyword$37,cljs.core.constant$keyword$38,cljs.core.constant$keyword$39,cljs.core.constant$keyword$40],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30048 = c;
if(G__30048){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30048.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__30048.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30048);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30048);
}
})()){
var state_30073 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4251__auto__ = (state_30073["__om_prev_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (state_30073["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__30049 = c;
if(G__30049){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30049.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__30049.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30049);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30049);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__30050 = cljs.core.seq(refs);
var chunk__30051 = null;
var count__30052 = (0);
var i__30053 = (0);
while(true){
if((i__30053 < count__30052)){
var ref = chunk__30051.cljs$core$IIndexed$_nth$arity$2(null,i__30053);
var G__30054_30074 = this$;
var G__30055_30075 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30054_30074,G__30055_30075) : om.core.unobserve.call(null,G__30054_30074,G__30055_30075));

var G__30076 = seq__30050;
var G__30077 = chunk__30051;
var G__30078 = count__30052;
var G__30079 = (i__30053 + (1));
seq__30050 = G__30076;
chunk__30051 = G__30077;
count__30052 = G__30078;
i__30053 = G__30079;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__30050);
if(temp__4126__auto____$1){
var seq__30050__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30050__$1)){
var c__5038__auto__ = cljs.core.chunk_first(seq__30050__$1);
var G__30080 = cljs.core.chunk_rest(seq__30050__$1);
var G__30081 = c__5038__auto__;
var G__30082 = cljs.core.count(c__5038__auto__);
var G__30083 = (0);
seq__30050 = G__30080;
chunk__30051 = G__30081;
count__30052 = G__30082;
i__30053 = G__30083;
continue;
} else {
var ref = cljs.core.first(seq__30050__$1);
var G__30056_30084 = this$;
var G__30057_30085 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30056_30084,G__30057_30085) : om.core.unobserve.call(null,G__30056_30084,G__30057_30085));

var G__30086 = cljs.core.next(seq__30050__$1);
var G__30087 = null;
var G__30088 = (0);
var G__30089 = (0);
seq__30050 = G__30086;
chunk__30051 = G__30087;
count__30052 = G__30088;
i__30053 = G__30089;
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
if((function (){var G__30058 = c;
if(G__30058){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30058.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__30058.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__30058);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__30058);
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

if((function (){var G__30059 = c;
if(G__30059){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30059.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__30059.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__30059);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__30059);
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
if(cljs.core.truth_((function (){var and__4239__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__4239__auto__){
return cljs.core.some(((function (and__4239__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__30047_SHARP_){
return om.core.ref_changed_QMARK_(p1__30047_SHARP_);
});})(and__4239__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4239__auto__;
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
var _STAR_parent_STAR_30060 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_30061 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_30062 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_30063 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_30064 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

if((function (){var G__30065 = c;
if(G__30065){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30065.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__30065.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30065);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30065);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__30066 = c;
if(G__30066){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30066.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__30066.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30066);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30066);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__30067 = c;
if(G__30067){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30067.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__30067.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30067);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30067);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_30064;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_30063;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_30062;

om.core._STAR_state_STAR_ = _STAR_state_STAR_30061;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_30060;
}}),(function (next_props,next_state){
var this$ = this;
var c_30090 = om.core.children(this$);
if((function (){var G__30068 = c_30090;
if(G__30068){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30068.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__30068.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30068);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30068);
}
})()){
var state_30091 = this$.state;
om.core.will_update(c_30090,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4251__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__30069 = c;
if(G__30069){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30069.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__30069.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30069);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30069);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$41)], 0)), "__om_id": (function (){var or__4251__auto__ = id;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
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
if((function (){var G__30070 = c;
if(G__30070){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30070.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__30070.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__30070);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__30070);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30071 = c;
if(G__30071){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30071.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__30071.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__30071);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__30071);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_30092 = om.core.children(this$);
if((function (){var G__30072 = c_30092;
if(G__30072){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30072.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__30072.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30072);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30072);
}
})()){
om.core.will_mount(c_30092);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x30094 = obj;
x30094.om$core$IGetState$ = true;

x30094.om$core$IGetState$_get_state$arity$1 = ((function (x30094){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4251__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return (state["__om_state"]);
}
});})(x30094))
;

x30094.om$core$IGetState$_get_state$arity$2 = ((function (x30094){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30094))
;

x30094.om$core$IGetRenderState$ = true;

x30094.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x30094){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x30094))
;

x30094.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x30094){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30094))
;

x30094.om$core$ISetState$ = true;

x30094.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x30094){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4239__auto__ = !((app_state == null));
if(and__4239__auto__){
return render;
} else {
return and__4239__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x30094))
;

x30094.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x30094){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__4239__auto__ = !((app_state == null));
if(and__4239__auto__){
return render;
} else {
return and__4239__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x30094))
;

return x30094;
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
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30096 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30096) : cljs.core.deref.call(null,G__30096));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$44,cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$45,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$43);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$37,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__4251__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4251__auto__ = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$41),(((function (){var G__30097 = c;
if(G__30097){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30097.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__30097.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30097);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__30097);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$),cljs.core.constant$keyword$45], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$40,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_30111 = om.core.children(this$);
if((function (){var G__30098 = c_30111;
if(G__30098){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30098.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__30098.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__30098);
}
})()){
om.core.will_mount(c_30111);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$32,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__30099 = c;
if(G__30099){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30099.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__30099.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30099);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__30099);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__30100 = cljs.core.seq(refs);
var chunk__30101 = null;
var count__30102 = (0);
var i__30103 = (0);
while(true){
if((i__30103 < count__30102)){
var ref = chunk__30101.cljs$core$IIndexed$_nth$arity$2(null,i__30103);
var G__30104_30112 = this$;
var G__30105_30113 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30104_30112,G__30105_30113) : om.core.unobserve.call(null,G__30104_30112,G__30105_30113));

var G__30114 = seq__30100;
var G__30115 = chunk__30101;
var G__30116 = count__30102;
var G__30117 = (i__30103 + (1));
seq__30100 = G__30114;
chunk__30101 = G__30115;
count__30102 = G__30116;
i__30103 = G__30117;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__30100);
if(temp__4126__auto____$1){
var seq__30100__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30100__$1)){
var c__5038__auto__ = cljs.core.chunk_first(seq__30100__$1);
var G__30118 = cljs.core.chunk_rest(seq__30100__$1);
var G__30119 = c__5038__auto__;
var G__30120 = cljs.core.count(c__5038__auto__);
var G__30121 = (0);
seq__30100 = G__30118;
chunk__30101 = G__30119;
count__30102 = G__30120;
i__30103 = G__30121;
continue;
} else {
var ref = cljs.core.first(seq__30100__$1);
var G__30106_30122 = this$;
var G__30107_30123 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__30106_30122,G__30107_30123) : om.core.unobserve.call(null,G__30106_30122,G__30107_30123));

var G__30124 = cljs.core.next(seq__30100__$1);
var G__30125 = null;
var G__30126 = (0);
var G__30127 = (0);
seq__30100 = G__30124;
chunk__30101 = G__30125;
count__30102 = G__30126;
i__30103 = G__30127;
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
}),cljs.core.constant$keyword$36,(function (next_props,next_state){
var this$ = this;
var props_30128 = this$.props;
var c_30129 = om.core.children(this$);
if((function (){var G__30108 = c_30129;
if(G__30108){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30108.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__30108.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30108);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__30108);
}
})()){
var state_30130 = this$.state;
om.core.will_update(c_30129,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$30,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30109 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30109) : cljs.core.deref.call(null,G__30109));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$)], null);
if((function (){var G__30110 = c;
if(G__30110){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30110.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__30110.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30110);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__30110);
}
})()){
var state_30131 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__4251__auto__ = cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$44], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x30135 = cljs.core.clj__GT_js(methods$);
x30135.om$core$IGetState$ = true;

x30135.om$core$IGetState$_get_state$arity$1 = ((function (x30135){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30136 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30136) : cljs.core.deref.call(null,G__30136));
})(),spath);
var or__4251__auto__ = cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x30135))
;

x30135.om$core$IGetState$_get_state$arity$2 = ((function (x30135){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30135))
;

x30135.om$core$IGetRenderState$ = true;

x30135.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x30135){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$__$1),cljs.core.constant$keyword$45], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30137 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30137) : cljs.core.deref.call(null,G__30137));
})(),spath);
});})(x30135))
;

x30135.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x30135){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x30135))
;

x30135.om$core$ISetState$ = true;

x30135.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x30135){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,om.core.react_id(this$__$1),cljs.core.constant$keyword$43], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4239__auto__ = !((gstate == null));
if(and__4239__auto__){
return render;
} else {
return and__4239__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x30135))
;

x30135.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x30135){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x30135))
;

return x30135;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__30140 = x;
if(G__30140){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30140.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__30140.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30140);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__30140);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__30141 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30141) : cljs.core.deref.call(null,G__30141));
})(),cljs.core.constant$keyword$46));
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
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$29);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$29))){
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
return (function (p__30143){
var vec__30144 = p__30143;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(1),null);
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
var G__30146 = null;
var G__30146__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__30146__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__30146 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30146__2.call(this,self__,k);
case 3:
return G__30146__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30146.cljs$core$IFn$_invoke$arity$2 = G__30146__2;
G__30146.cljs$core$IFn$_invoke$arity$3 = G__30146__3;
return G__30146;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args30142){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30142)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30145 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30145) : cljs.core.deref.call(null,G__30145));
})(),self__.path,cljs.core.constant$keyword$46);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"om.core/MapCursor");
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
var G__30149 = null;
var G__30149__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__30149__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__30149 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30149__2.call(this,self__,k);
case 3:
return G__30149__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30149.cljs$core$IFn$_invoke$arity$2 = G__30149__2;
G__30149.cljs$core$IFn$_invoke$arity$3 = G__30149__3;
return G__30149;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args30147){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args30147)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30148 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30148) : cljs.core.deref.call(null,G__30148));
})(),self__.path,cljs.core.constant$keyword$46);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4838__auto__,writer__4839__auto__,opt__4840__auto__){
return cljs.core._write(writer__4839__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x30152 = cljs.core.clone(val);
x30152.cljs$core$IEquiv$ = true;

x30152.cljs$core$IEquiv$_equiv$arity$2 = ((function (x30152){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x30152))
;

x30152.om$core$ITransact$ = true;

x30152.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30152){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x30152))
;

x30152.om$core$ICursor$ = true;

x30152.om$core$ICursor$_path$arity$1 = ((function (x30152){
return (function (_){
var ___$1 = this;
return path;
});})(x30152))
;

x30152.om$core$ICursor$_state$arity$1 = ((function (x30152){
return (function (_){
var ___$1 = this;
return state;
});})(x30152))
;

x30152.cljs$core$IDeref$ = true;

x30152.cljs$core$IDeref$_deref$arity$1 = ((function (x30152){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__30153 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30153) : cljs.core.deref.call(null,G__30153));
})(),path,cljs.core.constant$keyword$46);
});})(x30152))
;

return x30152;
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
if((function (){var G__30162 = val;
if(G__30162){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30162.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__30162.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__30162);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__30162);
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
if((function (){var G__30163 = val;
if(G__30163){
var bit__4932__auto__ = (G__30163.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4932__auto__) || (G__30163.cljs$core$ICloneable$)){
return true;
} else {
if((!G__30163.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__30163);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__30163);
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
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__30165 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30165) : cljs.core.deref.call(null,G__30165));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__30168 = atom;
if(G__30168){
var bit__4932__auto__ = (G__30168.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4932__auto__) || (G__30168.cljs$core$IDeref$)){
return true;
} else {
if((!G__30168.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__30168);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__30168);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__30169 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30169) : cljs.core.deref.call(null,G__30169));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__30170 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30170) : cljs.core.atom.call(null,G__30170));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x30179 = cljs.core.clone(x);
x30179.om$core$ITransact$ = true;

x30179.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30179){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__30180_30183 = cursor__$1;
var G__30181_30184 = korks;
var G__30182_30185 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__30180_30183,G__30181_30184,G__30182_30185) : om.core.commit_BANG_.call(null,G__30180_30183,G__30181_30184,G__30182_30185));

return om.core._refresh_deps_BANG_(parent);
});})(x30179))
;

x30179.om$core$ICursorDerive$ = true;

x30179.om$core$ICursorDerive$_derive$arity$4 = ((function (x30179){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x30179))
;

x30179.om$core$IAdapt$ = true;

x30179.om$core$IAdapt$_adapt$arity$2 = ((function (x30179){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x30179))
;

x30179.cljs$core$ICloneable$ = true;

x30179.cljs$core$ICloneable$_clone$arity$1 = ((function (x30179){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x30179))
;

return x30179;
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

if((function (){var G__30201 = cursor;
if(G__30201){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30201.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__30201.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__30201);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__30201);
}
})()){
return cursor;
} else {
var path = (function (){var G__30202 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30202) : om.core.path.call(null,G__30202));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__30203 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30203) : cljs.core.atom.call(null,G__30203));
})())),path);
var x30204 = cljs.core.clone(cursor);
x30204.om$core$ITransact$ = true;

x30204.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x30204,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__30205_30216 = cursor__$2;
var G__30206_30217 = korks;
var G__30207_30218 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__30205_30216,G__30206_30217,G__30207_30218) : om.core.commit_BANG_.call(null,G__30205_30216,G__30206_30217,G__30207_30218));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x30204,path,storage))
;

x30204.om$core$IOmRef$ = true;

x30204.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x30204,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__30208 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__30208) : om.core.id.call(null,G__30208));
})(),c);
});})(x30204,path,storage))
;

x30204.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x30204,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__30209 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__30209) : om.core.id.call(null,G__30209));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x30204,path,storage))
;

x30204.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x30204,path,storage){
return (function (_){
var ___$1 = this;
var seq__30210 = cljs.core.seq(cljs.core.vals((function (){var G__30214 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30214) : cljs.core.deref.call(null,G__30214));
})()));
var chunk__30211 = null;
var count__30212 = (0);
var i__30213 = (0);
while(true){
if((i__30213 < count__30212)){
var c = chunk__30211.cljs$core$IIndexed$_nth$arity$2(null,i__30213);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__30219 = seq__30210;
var G__30220 = chunk__30211;
var G__30221 = count__30212;
var G__30222 = (i__30213 + (1));
seq__30210 = G__30219;
chunk__30211 = G__30220;
count__30212 = G__30221;
i__30213 = G__30222;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__30210);
if(temp__4126__auto__){
var seq__30210__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30210__$1)){
var c__5038__auto__ = cljs.core.chunk_first(seq__30210__$1);
var G__30223 = cljs.core.chunk_rest(seq__30210__$1);
var G__30224 = c__5038__auto__;
var G__30225 = cljs.core.count(c__5038__auto__);
var G__30226 = (0);
seq__30210 = G__30223;
chunk__30211 = G__30224;
count__30212 = G__30225;
i__30213 = G__30226;
continue;
} else {
var c = cljs.core.first(seq__30210__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__30227 = cljs.core.next(seq__30210__$1);
var G__30228 = null;
var G__30229 = (0);
var G__30230 = (0);
seq__30210 = G__30227;
chunk__30211 = G__30228;
count__30212 = G__30229;
i__30213 = G__30230;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30204,path,storage))
;

x30204.om$core$IOmRef$_get_deps$arity$1 = ((function (x30204,path,storage){
return (function (_){
var ___$1 = this;
var G__30215 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30215) : cljs.core.deref.call(null,G__30215));
});})(x30204,path,storage))
;

x30204.om$core$ICursorDerive$ = true;

x30204.om$core$ICursorDerive$_derive$arity$4 = ((function (x30204,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x30204,path,storage))
;

return x30204;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4251__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
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
om.core.refresh_set = (function (){var G__30231 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30231) : cljs.core.atom.call(null,G__30231));
})();
om.core.get_renderT = (function get_renderT(state){
var or__4251__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
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

var seq__30238_30243 = cljs.core.seq((function (){var G__30242 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30242) : cljs.core.deref.call(null,G__30242));
})());
var chunk__30239_30244 = null;
var count__30240_30245 = (0);
var i__30241_30246 = (0);
while(true){
if((i__30241_30246 < count__30240_30245)){
var f_30247 = chunk__30239_30244.cljs$core$IIndexed$_nth$arity$2(null,i__30241_30246);
(f_30247.cljs$core$IFn$_invoke$arity$0 ? f_30247.cljs$core$IFn$_invoke$arity$0() : f_30247.call(null));

var G__30248 = seq__30238_30243;
var G__30249 = chunk__30239_30244;
var G__30250 = count__30240_30245;
var G__30251 = (i__30241_30246 + (1));
seq__30238_30243 = G__30248;
chunk__30239_30244 = G__30249;
count__30240_30245 = G__30250;
i__30241_30246 = G__30251;
continue;
} else {
var temp__4126__auto___30252 = cljs.core.seq(seq__30238_30243);
if(temp__4126__auto___30252){
var seq__30238_30253__$1 = temp__4126__auto___30252;
if(cljs.core.chunked_seq_QMARK_(seq__30238_30253__$1)){
var c__5038__auto___30254 = cljs.core.chunk_first(seq__30238_30253__$1);
var G__30255 = cljs.core.chunk_rest(seq__30238_30253__$1);
var G__30256 = c__5038__auto___30254;
var G__30257 = cljs.core.count(c__5038__auto___30254);
var G__30258 = (0);
seq__30238_30243 = G__30255;
chunk__30239_30244 = G__30256;
count__30240_30245 = G__30257;
i__30241_30246 = G__30258;
continue;
} else {
var f_30259 = cljs.core.first(seq__30238_30253__$1);
(f_30259.cljs$core$IFn$_invoke$arity$0 ? f_30259.cljs$core$IFn$_invoke$arity$0() : f_30259.call(null));

var G__30260 = cljs.core.next(seq__30238_30253__$1);
var G__30261 = null;
var G__30262 = (0);
var G__30263 = (0);
seq__30238_30243 = G__30260;
chunk__30239_30244 = G__30261;
count__30240_30245 = G__30262;
i__30241_30246 = G__30263;
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
om.core.roots = (function (){var G__30264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30264) : cljs.core.atom.call(null,G__30264));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__4251__auto__ = (function (){var G__30271 = x;
if(G__30271){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30271.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__30271.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30271);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__30271);
}
})();
if(or__4251__auto__){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = (function (){var G__30273 = x;
if(G__30273){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto____$1 = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return G__30273.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__30273.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30273);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__30273);
}
})();
if(or__4251__auto____$1){
return or__4251__auto____$1;
} else {
var G__30274 = x;
if(G__30274){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto____$2 = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto____$2)){
return or__4251__auto____$2;
} else {
return G__30274.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__30274.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30274);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__30274);
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
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null,cljs.core.constant$keyword$51,null,cljs.core.constant$keyword$52,null,cljs.core.constant$keyword$53,null,cljs.core.constant$keyword$54,null,cljs.core.constant$keyword$55,null,cljs.core.constant$keyword$56,null,cljs.core.constant$keyword$57,null], null), null),cljs.core.keys(m));
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
(f["om$descriptor"] = (function (){var G__30279 = (function (){var G__30280 = (function (){var or__4251__auto__ = descriptor;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
var or__4251__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4251__auto____$1)){
return or__4251__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__30280);
})();
return React.createFactory(G__30279);
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
var G__30298 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__30299 = cursor;
var G__30300 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30299,G__30300) : f.call(null,G__30299,G__30300));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__30298) : ctor.call(null,G__30298));
} else {
var map__30301 = m;
var map__30301__$1 = ((cljs.core.seq_QMARK_(map__30301))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30301):map__30301);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,cljs.core.constant$keyword$55);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,cljs.core.constant$keyword$52);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,cljs.core.constant$keyword$53);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,cljs.core.constant$keyword$54);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30301__$1,cljs.core.constant$keyword$51);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$48);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__30302 = cursor;
var G__30303 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__30302,G__30303) : dataf.call(null,G__30302,G__30303));
} else {
var G__30304 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__30304) : dataf.call(null,G__30304));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__30305 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__30305) : key_fn.call(null,G__30305));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$50)
));
var shared = (function (){var or__4251__auto__ = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(m));
var G__30306 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__30301,map__30301__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__30307 = cursor_SINGLEQUOTE_;
var G__30308 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30307,G__30308) : f.call(null,G__30307,G__30308));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__30301,map__30301__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__30301,map__30301__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__30309 = cursor_SINGLEQUOTE_;
var G__30310 = this$;
var G__30311 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30309,G__30310,G__30311) : f.call(null,G__30309,G__30310,G__30311));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__30301,map__30301__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4251__auto__ = rkey;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__30306) : ctor.call(null,G__30306));

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
var ret = (function (){var G__30318 = f;
var G__30319 = x;
var G__30320 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__30318,G__30319,G__30320) : om.core._STAR_instrument_STAR_.call(null,G__30318,G__30319,G__30320));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$58)){
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
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$56,i));
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
if((function (){var G__30343 = state;
if(G__30343){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30343.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__30343.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__30343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__30343);
}
})()){
} else {
var properties_30362 = (function (){var G__30344 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30344) : cljs.core.atom.call(null,G__30344));
})();
var listeners_30363 = (function (){var G__30345 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30345) : cljs.core.atom.call(null,G__30345));
})();
var render_queue_30364 = (function (){var G__30346 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30346) : cljs.core.atom.call(null,G__30346));
})();
var x30347_30365 = state;
x30347_30365.om$core$IRenderQueue$ = true;

x30347_30365.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (this$){
var this$__$1 = this;
var G__30348 = render_queue_30364;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30348) : cljs.core.deref.call(null,G__30348));
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__30349 = render_queue_30364;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30349) : cljs.core.deref.call(null,G__30349));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_30364,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_30364,cljs.core.empty);
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$INotify$ = true;

x30347_30365.om$core$INotify$_listen_BANG_$arity$3 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_30363,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_30363,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$INotify$_notify_BANG_$arity$3 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__30350_30366 = cljs.core.seq((function (){var G__30354 = listeners_30363;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30354) : cljs.core.deref.call(null,G__30354));
})());
var chunk__30351_30367 = null;
var count__30352_30368 = (0);
var i__30353_30369 = (0);
while(true){
if((i__30353_30369 < count__30352_30368)){
var vec__30355_30370 = chunk__30351_30367.cljs$core$IIndexed$_nth$arity$2(null,i__30353_30369);
var __30371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355_30370,(0),null);
var f_30372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355_30370,(1),null);
var G__30356_30373 = tx_data;
var G__30357_30374 = root_cursor;
(f_30372.cljs$core$IFn$_invoke$arity$2 ? f_30372.cljs$core$IFn$_invoke$arity$2(G__30356_30373,G__30357_30374) : f_30372.call(null,G__30356_30373,G__30357_30374));

var G__30375 = seq__30350_30366;
var G__30376 = chunk__30351_30367;
var G__30377 = count__30352_30368;
var G__30378 = (i__30353_30369 + (1));
seq__30350_30366 = G__30375;
chunk__30351_30367 = G__30376;
count__30352_30368 = G__30377;
i__30353_30369 = G__30378;
continue;
} else {
var temp__4126__auto___30379 = cljs.core.seq(seq__30350_30366);
if(temp__4126__auto___30379){
var seq__30350_30380__$1 = temp__4126__auto___30379;
if(cljs.core.chunked_seq_QMARK_(seq__30350_30380__$1)){
var c__5038__auto___30381 = cljs.core.chunk_first(seq__30350_30380__$1);
var G__30382 = cljs.core.chunk_rest(seq__30350_30380__$1);
var G__30383 = c__5038__auto___30381;
var G__30384 = cljs.core.count(c__5038__auto___30381);
var G__30385 = (0);
seq__30350_30366 = G__30382;
chunk__30351_30367 = G__30383;
count__30352_30368 = G__30384;
i__30353_30369 = G__30385;
continue;
} else {
var vec__30358_30386 = cljs.core.first(seq__30350_30380__$1);
var __30387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358_30386,(0),null);
var f_30388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358_30386,(1),null);
var G__30359_30389 = tx_data;
var G__30360_30390 = root_cursor;
(f_30388.cljs$core$IFn$_invoke$arity$2 ? f_30388.cljs$core$IFn$_invoke$arity$2(G__30359_30389,G__30360_30390) : f_30388.call(null,G__30359_30389,G__30360_30390));

var G__30391 = cljs.core.next(seq__30350_30380__$1);
var G__30392 = null;
var G__30393 = (0);
var G__30394 = (0);
seq__30350_30366 = G__30391;
chunk__30351_30367 = G__30392;
count__30352_30368 = G__30393;
i__30353_30369 = G__30394;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$IRootProperties$ = true;

x30347_30365.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_30362,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_30362,cljs.core.dissoc,id,k);
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_30362,cljs.core.dissoc,id);
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

x30347_30365.om$core$IRootProperties$_get_property$arity$3 = ((function (x30347_30365,properties_30362,listeners_30363,render_queue_30364){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__30361 = properties_30362;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30361) : cljs.core.deref.call(null,G__30361));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x30347_30365,properties_30362,listeners_30363,render_queue_30364))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x30400 = cljs.core.clone(cursor);
x30400.om$core$IRootKey$ = true;

x30400.om$core$IRootKey$_root_key$arity$1 = ((function (x30400){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x30400))
;

x30400.om$core$IAdapt$ = true;

x30400.om$core$IAdapt$_adapt$arity$2 = ((function (x30400){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x30400))
;

x30400.cljs$core$ICloneable$ = true;

x30400.cljs$core$ICloneable$_clone$arity$1 = ((function (x30400){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x30400))
;

return x30400;
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
om.core.root = (function root(f,value,p__30401){
var map__30490 = p__30401;
var map__30490__$1 = ((cljs.core.seq_QMARK_(map__30490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30490):map__30490);
var options = map__30490__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$59);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$60);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$47);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$49);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$23);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$61);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30490__$1,cljs.core.constant$keyword$62);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__30578 = (function (){var G__30491 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30491) : cljs.core.deref.call(null,G__30491));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__30578,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__30578,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__30492 = value;
if(G__30492){
var bit__4932__auto__ = (G__30492.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4932__auto__) || (G__30492.cljs$core$IAtom$)){
return true;
} else {
if((!G__30492.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__30492);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__30492);
}
})())?value:(function (){var G__30493 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30493) : cljs.core.atom.call(null,G__30493));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4251__auto__ = adapt;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$62,cljs.core.array_seq([cljs.core.constant$keyword$61,cljs.core.constant$keyword$23,cljs.core.constant$keyword$60,cljs.core.constant$keyword$59], 0));
var ret = (function (){var G__30494 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30494) : cljs.core.atom.call(null,G__30494));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__30534 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30534) : cljs.core.deref.call(null,G__30534));
})();
var cursor = (function (){var G__30535 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__30535) : adapt__$1.call(null,G__30535));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$63))){
} else {
var c_30579 = om.dom.render((function (){var _STAR_descriptor_STAR_30536 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_30537 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_30538 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_30539 = om.core._STAR_root_key_STAR_;
try{om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_30539;

om.core._STAR_state_STAR_ = _STAR_state_STAR_30538;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_30537;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_30536;
}})(),target);
if(((function (){var G__30540 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30540) : cljs.core.deref.call(null,G__30540));
})() == null)){
var G__30541_30580 = ret;
var G__30542_30581 = c_30579;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__30541_30580,G__30542_30581) : cljs.core.reset_BANG_.call(null,G__30541_30580,G__30542_30581));
} else {
}
}

var queue_30582 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_30582)){
} else {
var seq__30543_30583 = cljs.core.seq(queue_30582);
var chunk__30544_30584 = null;
var count__30545_30585 = (0);
var i__30546_30586 = (0);
while(true){
if((i__30546_30586 < count__30545_30585)){
var c_30587 = chunk__30544_30584.cljs$core$IIndexed$_nth$arity$2(null,i__30546_30586);
if(cljs.core.truth_(c_30587.isMounted())){
var temp__4126__auto___30588 = (c_30587.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___30588)){
var next_props_30589 = temp__4126__auto___30588;
(c_30587.props["__om_cursor"] = next_props_30589);

(c_30587.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4251__auto__ = !((function (){var G__30548 = om.core.children(c_30587);
if(G__30548){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30548.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__30548.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30548);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30548);
}
})());
if(or__4251__auto__){
return or__4251__auto__;
} else {
return c_30587.shouldComponentUpdate(c_30587.props,c_30587.state);
}
})())){
c_30587.forceUpdate();
} else {
}
} else {
}

var G__30590 = seq__30543_30583;
var G__30591 = chunk__30544_30584;
var G__30592 = count__30545_30585;
var G__30593 = (i__30546_30586 + (1));
seq__30543_30583 = G__30590;
chunk__30544_30584 = G__30591;
count__30545_30585 = G__30592;
i__30546_30586 = G__30593;
continue;
} else {
var temp__4126__auto___30594 = cljs.core.seq(seq__30543_30583);
if(temp__4126__auto___30594){
var seq__30543_30595__$1 = temp__4126__auto___30594;
if(cljs.core.chunked_seq_QMARK_(seq__30543_30595__$1)){
var c__5038__auto___30596 = cljs.core.chunk_first(seq__30543_30595__$1);
var G__30597 = cljs.core.chunk_rest(seq__30543_30595__$1);
var G__30598 = c__5038__auto___30596;
var G__30599 = cljs.core.count(c__5038__auto___30596);
var G__30600 = (0);
seq__30543_30583 = G__30597;
chunk__30544_30584 = G__30598;
count__30545_30585 = G__30599;
i__30546_30586 = G__30600;
continue;
} else {
var c_30601 = cljs.core.first(seq__30543_30595__$1);
if(cljs.core.truth_(c_30601.isMounted())){
var temp__4126__auto___30602__$1 = (c_30601.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___30602__$1)){
var next_props_30603 = temp__4126__auto___30602__$1;
(c_30601.props["__om_cursor"] = next_props_30603);

(c_30601.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4251__auto__ = !((function (){var G__30550 = om.core.children(c_30601);
if(G__30550){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30550.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__30550.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30550);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__30550);
}
})());
if(or__4251__auto__){
return or__4251__auto__;
} else {
return c_30601.shouldComponentUpdate(c_30601.props,c_30601.state);
}
})())){
c_30601.forceUpdate();
} else {
}
} else {
}

var G__30604 = cljs.core.next(seq__30543_30595__$1);
var G__30605 = null;
var G__30606 = (0);
var G__30607 = (0);
seq__30543_30583 = G__30604;
chunk__30544_30584 = G__30605;
count__30545_30585 = G__30606;
i__30546_30586 = G__30607;
continue;
}
} else {
}
}
break;
}
}

var _refs_30608 = (function (){var G__30551 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30551) : cljs.core.deref.call(null,G__30551));
})();
if(cljs.core.empty_QMARK_(_refs_30608)){
} else {
var seq__30552_30609 = cljs.core.seq(_refs_30608);
var chunk__30553_30610 = null;
var count__30554_30611 = (0);
var i__30555_30612 = (0);
while(true){
if((i__30555_30612 < count__30554_30611)){
var vec__30556_30613 = chunk__30553_30610.cljs$core$IIndexed$_nth$arity$2(null,i__30555_30612);
var path_30614__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30556_30613,(0),null);
var cs_30615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30556_30613,(1),null);
var cs_30616__$1 = (function (){var G__30557 = cs_30615;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30557) : cljs.core.deref.call(null,G__30557));
})();
var seq__30558_30617 = cljs.core.seq(cs_30616__$1);
var chunk__30559_30618 = null;
var count__30560_30619 = (0);
var i__30561_30620 = (0);
while(true){
if((i__30561_30620 < count__30560_30619)){
var vec__30562_30621 = chunk__30559_30618.cljs$core$IIndexed$_nth$arity$2(null,i__30561_30620);
var id_30622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30562_30621,(0),null);
var c_30623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30562_30621,(1),null);
if(cljs.core.truth_(c_30623.shouldComponentUpdate(c_30623.props,c_30623.state))){
c_30623.forceUpdate();
} else {
}

var G__30624 = seq__30558_30617;
var G__30625 = chunk__30559_30618;
var G__30626 = count__30560_30619;
var G__30627 = (i__30561_30620 + (1));
seq__30558_30617 = G__30624;
chunk__30559_30618 = G__30625;
count__30560_30619 = G__30626;
i__30561_30620 = G__30627;
continue;
} else {
var temp__4126__auto___30628 = cljs.core.seq(seq__30558_30617);
if(temp__4126__auto___30628){
var seq__30558_30629__$1 = temp__4126__auto___30628;
if(cljs.core.chunked_seq_QMARK_(seq__30558_30629__$1)){
var c__5038__auto___30630 = cljs.core.chunk_first(seq__30558_30629__$1);
var G__30631 = cljs.core.chunk_rest(seq__30558_30629__$1);
var G__30632 = c__5038__auto___30630;
var G__30633 = cljs.core.count(c__5038__auto___30630);
var G__30634 = (0);
seq__30558_30617 = G__30631;
chunk__30559_30618 = G__30632;
count__30560_30619 = G__30633;
i__30561_30620 = G__30634;
continue;
} else {
var vec__30563_30635 = cljs.core.first(seq__30558_30629__$1);
var id_30636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563_30635,(0),null);
var c_30637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563_30635,(1),null);
if(cljs.core.truth_(c_30637.shouldComponentUpdate(c_30637.props,c_30637.state))){
c_30637.forceUpdate();
} else {
}

var G__30638 = cljs.core.next(seq__30558_30629__$1);
var G__30639 = null;
var G__30640 = (0);
var G__30641 = (0);
seq__30558_30617 = G__30638;
chunk__30559_30618 = G__30639;
count__30560_30619 = G__30640;
i__30561_30620 = G__30641;
continue;
}
} else {
}
}
break;
}

var G__30642 = seq__30552_30609;
var G__30643 = chunk__30553_30610;
var G__30644 = count__30554_30611;
var G__30645 = (i__30555_30612 + (1));
seq__30552_30609 = G__30642;
chunk__30553_30610 = G__30643;
count__30554_30611 = G__30644;
i__30555_30612 = G__30645;
continue;
} else {
var temp__4126__auto___30646 = cljs.core.seq(seq__30552_30609);
if(temp__4126__auto___30646){
var seq__30552_30647__$1 = temp__4126__auto___30646;
if(cljs.core.chunked_seq_QMARK_(seq__30552_30647__$1)){
var c__5038__auto___30648 = cljs.core.chunk_first(seq__30552_30647__$1);
var G__30649 = cljs.core.chunk_rest(seq__30552_30647__$1);
var G__30650 = c__5038__auto___30648;
var G__30651 = cljs.core.count(c__5038__auto___30648);
var G__30652 = (0);
seq__30552_30609 = G__30649;
chunk__30553_30610 = G__30650;
count__30554_30611 = G__30651;
i__30555_30612 = G__30652;
continue;
} else {
var vec__30564_30653 = cljs.core.first(seq__30552_30647__$1);
var path_30654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564_30653,(0),null);
var cs_30655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564_30653,(1),null);
var cs_30656__$1 = (function (){var G__30565 = cs_30655;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30565) : cljs.core.deref.call(null,G__30565));
})();
var seq__30566_30657 = cljs.core.seq(cs_30656__$1);
var chunk__30567_30658 = null;
var count__30568_30659 = (0);
var i__30569_30660 = (0);
while(true){
if((i__30569_30660 < count__30568_30659)){
var vec__30570_30661 = chunk__30567_30658.cljs$core$IIndexed$_nth$arity$2(null,i__30569_30660);
var id_30662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570_30661,(0),null);
var c_30663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30570_30661,(1),null);
if(cljs.core.truth_(c_30663.shouldComponentUpdate(c_30663.props,c_30663.state))){
c_30663.forceUpdate();
} else {
}

var G__30664 = seq__30566_30657;
var G__30665 = chunk__30567_30658;
var G__30666 = count__30568_30659;
var G__30667 = (i__30569_30660 + (1));
seq__30566_30657 = G__30664;
chunk__30567_30658 = G__30665;
count__30568_30659 = G__30666;
i__30569_30660 = G__30667;
continue;
} else {
var temp__4126__auto___30668__$1 = cljs.core.seq(seq__30566_30657);
if(temp__4126__auto___30668__$1){
var seq__30566_30669__$1 = temp__4126__auto___30668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30566_30669__$1)){
var c__5038__auto___30670 = cljs.core.chunk_first(seq__30566_30669__$1);
var G__30671 = cljs.core.chunk_rest(seq__30566_30669__$1);
var G__30672 = c__5038__auto___30670;
var G__30673 = cljs.core.count(c__5038__auto___30670);
var G__30674 = (0);
seq__30566_30657 = G__30671;
chunk__30567_30658 = G__30672;
count__30568_30659 = G__30673;
i__30569_30660 = G__30674;
continue;
} else {
var vec__30571_30675 = cljs.core.first(seq__30566_30669__$1);
var id_30676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30571_30675,(0),null);
var c_30677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30571_30675,(1),null);
if(cljs.core.truth_(c_30677.shouldComponentUpdate(c_30677.props,c_30677.state))){
c_30677.forceUpdate();
} else {
}

var G__30678 = cljs.core.next(seq__30566_30669__$1);
var G__30679 = null;
var G__30680 = (0);
var G__30681 = (0);
seq__30566_30657 = G__30678;
chunk__30567_30658 = G__30679;
count__30568_30659 = G__30680;
i__30569_30660 = G__30681;
continue;
}
} else {
}
}
break;
}

var G__30682 = cljs.core.next(seq__30552_30647__$1);
var G__30683 = null;
var G__30684 = (0);
var G__30685 = (0);
seq__30552_30609 = G__30682;
chunk__30553_30610 = G__30683;
count__30554_30611 = G__30684;
i__30555_30612 = G__30685;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$63,true);

var G__30572 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30572) : cljs.core.deref.call(null,G__30572));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$64))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$63,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$64,false);

if(cljs.core.contains_QMARK_((function (){var G__30573 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30573) : cljs.core.deref.call(null,G__30573));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__30574 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__30575 = (16);
return setTimeout(G__30574,G__30575);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__30576 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__30576);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__30577 = target;
return React.unmountComponentAtNode(G__30577);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__30490,map__30490__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__30688 = target;
return goog.dom.isElement(G__30688);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__30689 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__30689) : cljs.core.deref.call(null,G__30689));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__30691 = x;
if(G__30691){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30691.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__30691.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__30691);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__30691);
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

var key = (((function (){var G__30702 = cursor;
if(G__30702){
var bit__4932__auto__ = null;
if(cljs.core.truth_((function (){var or__4251__auto__ = bit__4932__auto__;
if(cljs.core.truth_(or__4251__auto__)){
return or__4251__auto__;
} else {
return G__30702.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__30702.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__30702);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__30702);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__30703 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__30703) : om.core.path.call(null,G__30703));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$64,true);
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__30706 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30706) : f.call(null,G__30706));
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

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__30707 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30707) : f.call(null,G__30707));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__30710 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30710) : f.call(null,G__30710));
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

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__30711 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30711) : f.call(null,G__30711));
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
