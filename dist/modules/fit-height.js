/**
 * Cupertino Pane 1.3.6
 * Cupertino Panes is multi-functional modals, cards & panes with touch technologies.
 * https://panejs.com
 *
 * Copyright 2019-2023 Roman Antonov (roman-rr)
 *
 * Released under the MIT License
 *
 * Released on: September 5, 2023
 */

function __awaiter(t,e,i,s){return new(i||(i=Promise))((function(n,h){function a(t){try{o(s.next(t))}catch(t){h(t)}}function r(t){try{o(s.throw(t))}catch(t){h(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,r)}o((s=s.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;class FitHeightModule{constructor(t){this.instance=t,this.calcHeightInProcess=!1,this.breakpoints=this.instance.breakpoints,this.settings=this.instance.settings,this.settings.fitHeight&&(this.instance.calcFitHeight=t=>__awaiter(this,void 0,void 0,(function*(){return this.calcFitHeight(t)})),this.instance.setOverflowHeight=()=>{},this.instance.on("DOMElementsReady",(()=>{this.instance.wrapperEl.classList.add("fit-height")})),this.instance.on("onDidPresent",(()=>{this.instance.paneEl.style.height="unset"})),this.instance.on("onTransitionEnd",(()=>{this.instance.paneEl.style.height="unset"})),this.instance.on("onWillPresent",(()=>{this.breakpoints.beforeBuildBreakpoints=()=>this.beforeBuildBreakpoints()})),this.instance.on("beforeBreakHeightApplied",(t=>{var e;this.settings.fitScreenHeight&&((null===(e=this.settings.breaks[t.break])||void 0===e?void 0:e.height)>this.instance.screen_height&&(this.settings.breaks[t.break].height=this.instance.screen_height-this.settings.bottomOffset),this.settings.breaks.top&&this.settings.breaks.middle&&this.settings.breaks.top.height-50<=this.settings.breaks.middle.height&&(this.settings.breaks.middle.enabled=!1,this.settings.initialBreak="top")),"top"===t.break&&(this.settings.breaks.top.height>this.instance.screen_height?(this.settings.breaks.top.height=this.instance.screen_height-2*this.settings.bottomOffset,this.settings.topperOverflow=!0,this.settings.upperThanTop=!1):this.instance.overflowEl&&!this.settings.maxFitHeight&&(this.settings.topperOverflow=!1,this.instance.overflowEl.style.overflowY="hidden"))}),!0))}beforeBuildBreakpoints(){var t,e,i;return __awaiter(this,void 0,void 0,(function*(){this.settings.fitScreenHeight=!1,this.settings.initialBreak="top",this.settings.topperOverflow=!1;let s=yield this.getPaneFitHeight();this.settings.maxFitHeight&&s>this.settings.maxFitHeight&&(s=this.settings.maxFitHeight,this.settings.topperOverflow=!0),this.breakpoints.conf={top:{enabled:!0,height:s},middle:{enabled:!1}},this.breakpoints.conf.top.bounce=null===(e=null===(t=this.settings.breaks)||void 0===t?void 0:t.top)||void 0===e?void 0:e.bounce,this.breakpoints.conf.bottom=(null===(i=this.settings.breaks)||void 0===i?void 0:i.bottom)||{enabled:!0,height:0}}))}calcFitHeight(t=!0){return __awaiter(this,void 0,void 0,(function*(){return this.instance.wrapperEl&&this.instance.el?this.calcHeightInProcess?(console.warn("Cupertino Pane: calcFitHeight() already in process"),null):void(yield this.breakpoints.buildBreakpoints(this.breakpoints.lockedBreakpoints,null,t)):null}))}getPaneFitHeight(){return __awaiter(this,void 0,void 0,(function*(){this.calcHeightInProcess=!0;let t=this.instance.el.querySelectorAll("img");this.instance.el.style.height="unset",this.instance.rendered||(this.instance.el.style.visibility="hidden",this.instance.el.style.pointerEvents="none",this.instance.el.style.display="block",this.instance.wrapperEl.style.visibility="hidden",this.instance.wrapperEl.style.pointerEvents="none",this.instance.wrapperEl.style.display="block");let e=[];t.length&&(e=Array.from(t).map((t=>new Promise((e=>{if(t.height||t.complete&&t.naturalHeight)return e(!0);t.onload=()=>e(!0),t.onerror=()=>e(!0)}))))),yield Promise.all(e),yield new Promise((t=>requestAnimationFrame(t)));let i=Math.floor(this.instance.paneEl.getBoundingClientRect().height);return this.paneElHeight!==i&&(this.instance.paneEl.style.height=`${i<=this.paneElHeight?this.paneElHeight:i}px`),this.instance.rendered||(this.instance.el.style.visibility="unset",this.instance.el.style.pointerEvents="unset",this.instance.el.style.display="none",this.instance.wrapperEl.style.visibility="unset",this.instance.wrapperEl.style.pointerEvents="unset",this.instance.wrapperEl.style.display="none"),this.calcHeightInProcess=!1,this.paneElHeight=i,this.paneElHeight}))}}export{FitHeightModule};