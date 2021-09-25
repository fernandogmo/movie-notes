!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("redux")):"function"==typeof define&&define.amd?define(["exports","react","redux"],t):t(e.ReactRedux={},e.React,e.Redux)}(this,function(e,g,r){"use strict";var S="default"in g?g.default:g;function w(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function t(e,t){return e(t={exports:{}},t.exports),t.exports}function n(){}var o=t(function(e){e.exports=function(){function e(e,t,r,n,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r}()}),x=S.createContext(null),i=function(n){function e(e){var t;t=n.call(this,e)||this;var r=e.store;return t.state={storeState:r.getState(),store:r},t}w(e,n);var t=e.prototype;return t.componentDidMount=function(){this._isMounted=!0,this.subscribe()},t.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},t.componentDidUpdate=function(e){this.props.store!==e.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},t.subscribe=function(){var e=this,r=this.props.store;this.unsubscribe=r.subscribe(function(){var t=r.getState();e._isMounted&&e.setState(function(e){return e.storeState===t?null:{storeState:t}})});var t=r.getState();t!==this.state.storeState&&this.setState({storeState:t})},t.render=function(){return S.createElement((this.props.context||x).Provider,{value:this.state},this.props.children)},e}(g.Component);function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])<0&&(o[r]=e[r]);return o}i.propTypes={store:o.shape({subscribe:o.func.isRequired,dispatch:o.func.isRequired,getState:o.func.isRequired}),context:o.object,children:o.any};var a,s=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case i:case s:case a:return e;default:switch(e=e&&e.$$typeof){case c:case d:case p:return e;default:return t}}case o:return t}}}function h(e){return v(e)===f}t.typeOf=v,t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=c,t.ContextProvider=p,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Profiler=s,t.Portal=o,t.StrictMode=a,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===a||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===p||e.$$typeof===c||e.$$typeof===d)},t.isAsyncMode=function(e){return h(e)||v(e)===u},t.isConcurrentMode=h,t.isContextConsumer=function(e){return v(e)===c},t.isContextProvider=function(e){return v(e)===p},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===s},t.isPortal=function(e){return v(e)===o},t.isStrictMode=function(e){return v(e)===a}});(a=s)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default");var p=t(function(e){e.exports=s}),f={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},d={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={};l[p.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var m=Object.defineProperty,y=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,b=Object.prototype;var T=function e(t,r,n){if("string"==typeof r)return t;if(b){var o=P(r);o&&o!==b&&e(t,o,n)}var i=y(r);v&&(i=i.concat(v(r)));for(var a=l[t.$$typeof]||f,s=l[r.$$typeof]||f,p=0;p<i.length;++p){var c=i[p];if(!(d[c]||n&&n[c]||s&&s[c]||a&&a[c])){var u=h(r,c);try{m(t,c,u)}catch(e){}}}return t},M=function(e,t,r,n,o,i,a,s){if(!e){var p;if(void 0===t)p=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,s],u=0;(p=Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw p.framesToPop=1,p}};function c(m,e){void 0===e&&(e={});var t=e.getDisplayName,a=void 0===t?function(e){return"ConnectAdvanced("+e+")"}:t,r=e.methodName,s=void 0===r?"connectAdvanced":r,n=e.renderCountProp,p=void 0===n?void 0:n,o=e.shouldHandleStateChanges,c=void 0===o||o,i=e.storeKey,y=void 0===i?"store":i,u=e.withRef,f=void 0!==u&&u,d=e.forwardRef,v=void 0!==d&&d,l=e.context,h=void 0===l?x:l,P=R(e,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);M(void 0===p,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),M(!f,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var b="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React-Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";M("store"===y,"storeKey has been removed and does not do anything. "+b);var O=h;return function(e){var t=e.displayName||e.name||"Component",o=a(t),f=E({},P,{getDisplayName:a,methodName:s,renderCountProp:p,shouldHandleStateChanges:c,storeKey:y,displayName:o,wrappedComponentName:t,WrappedComponent:e}),d=P.pure,r=g.Component,l=e;d&&(r=g.PureComponent);var n=function(u){function e(e){var t,o,i,a,s,p,r,n,c;return t=u.call(this,e)||this,M(v?!e.wrapperProps[y]:!e[y],"Passing redux store in props has been removed and does not do anything. "+b),t.selectDerivedProps=function(e,t,r){if(d&&o===t&&i===e)return a;r!==s&&(p=m((s=r).dispatch,f));var n=p(i=e,o=t);return a===n?a:a=n},t.selectChildElement=function(e,t){return e===r&&t===n||(c=S.createElement(l,E({},r=e,{ref:n=t}))),c},t.renderWrappedComponent=t.renderWrappedComponent.bind(C(C(t))),t}w(e,u);var t=e.prototype;return t.renderWrappedComponent=function(e){M(e,'Could not find "store" in the context of "'+o+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+o+" in connect options.");var t,r=this.props;v&&(r=this.props.wrapperProps,t=this.props.forwardedRef);var n=this.selectDerivedProps(e.storeState,r,e.store);return this.selectChildElement(n,t)},t.render=function(){return S.createElement((this.props.context||O).Consumer,null,this.renderWrappedComponent)},e}(r);if(n.WrappedComponent=e,n.displayName=o,v){var i=S.forwardRef(function(e,t){return S.createElement(n,{wrapperProps:e,forwardedRef:t})});return i.displayName=o,i.WrappedComponent=e,T(i,e)}return T(n,e)}}var u=Object.prototype.hasOwnProperty;function O(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function j(e,t){if(O(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(var n=0;n<r.length;n++)if(!u.call(t,r[n])||!O(e[r[n]],t[r[n]]))return!1;return!0}function _(o){return function(e,t){var r=o(e,t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function q(e){return null!=e.dependsOnOwnProps?!!e.dependsOnOwnProps:1!==e.length}function $(o,e){return function(e,t){var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(e,t){n.mapToProps=o,n.dependsOnOwnProps=q(o);var r=n(e,t);return"function"==typeof r&&(n.mapToProps=r,n.dependsOnOwnProps=q(r),r=n(e,t)),r},n}}function D(e,t,r){return E({},r,e,t)}function N(r,n,o,i){return function(e,t){return o(r(e,t),n(i,t),t)}}function F(a,s,p,c,e){var u,f,d,l,m,y=e.areStatesEqual,v=e.areOwnPropsEqual,h=e.areStatePropsEqual,r=!1;function n(e,t){var r,n,o=!v(t,f),i=!y(e,u);return u=e,f=t,o&&i?(d=a(u,f),s.dependsOnOwnProps&&(l=s(c,f)),m=p(d,l,f)):o?(a.dependsOnOwnProps&&(d=a(u,f)),s.dependsOnOwnProps&&(l=s(c,f)),m=p(d,l,f)):(i&&(r=a(u,f),n=!h(r,d),d=r,n&&(m=p(d,l,f))),m)}return function(e,t){return r?n(e,t):(d=a(u=e,f=t),l=s(c,f),m=p(d,l,f),r=!0,m)}}function W(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,i=R(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=r(e,i),s=n(e,i),p=o(e,i);return(i.pure?F:N)(a,s,p,e,i)}function k(r,e,n){for(var t=e.length-1;0<=t;t--){var o=e[t](r);if(o)return o}return function(e,t){throw Error("Invalid value of type "+typeof r+" for "+n+" argument when connecting component "+t.wrappedComponentName+".")}}function A(e,t){return e===t}var H,I,K,U,V,L,Y,z,B,G,J,Q,X=(U=void 0===(K=(I=void 0===H?{}:H).connectHOC)?c:K,L=void 0===(V=I.mapStateToPropsFactories)?[function(e){return"function"==typeof e?$(e):void 0},function(e){return e?void 0:_(function(){return{}})}]:V,z=void 0===(Y=I.mapDispatchToPropsFactories)?[function(e){return"function"==typeof e?$(e):void 0},function(e){return e?void 0:_(function(e){return{dispatch:e}})},function(t){return t&&"object"==typeof t?_(function(e){return r.bindActionCreators(t,e)}):void 0}]:Y,G=void 0===(B=I.mergePropsFactories)?[function(e){return"function"==typeof e?(p=e,function(e,t){var o,i=t.pure,a=t.areMergedPropsEqual,s=!1;return function(e,t,r){var n=p(e,t,r);return s?i&&a(n,o)||(o=n):(s=!0,o=n),o}}):void 0;var p},function(e){return e?void 0:function(){return D}}]:B,Q=void 0===(J=I.selectorFactory)?W:J,function(e,t,r,n){void 0===n&&(n={});var o=n.pure,i=void 0===o||o,a=n.areStatesEqual,s=void 0===a?A:a,p=n.areOwnPropsEqual,c=void 0===p?j:p,u=n.areStatePropsEqual,f=void 0===u?j:u,d=n.areMergedPropsEqual,l=void 0===d?j:d,m=R(n,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),y=k(e,L,"mapStateToProps"),v=k(t,z,"mapDispatchToProps"),h=k(r,G,"mergeProps");return U(Q,E({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:!!e,initMapStateToProps:y,initMapDispatchToProps:v,initMergeProps:h,pure:i,areStatesEqual:s,areOwnPropsEqual:c,areStatePropsEqual:f,areMergedPropsEqual:l},m))});e.Provider=i,e.connectAdvanced=c,e.ReactReduxContext=x,e.connect=X,Object.defineProperty(e,"__esModule",{value:!0})});
