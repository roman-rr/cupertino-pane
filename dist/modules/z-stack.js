/**
 * Cupertino Pane 1.4.0
 * Cupertino Panes is multi-functional modals, cards & panes with touch technologies.
 * https://panejs.com
 *
 * Copyright 2019-2023 Roman Antonov (roman-rr)
 *
 * Released under the MIT License
 *
 * Released on: September 5, 2023
 */

function __awaiter(t,s,e,i){return new(e||(e=Promise))((function(n,a){function r(t){try{o(i.next(t))}catch(t){a(t)}}function c(t){try{o(i.throw(t))}catch(t){a(t)}}function o(t){var s;t.done?n(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(r,c)}o((i=i.apply(t,s||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;class ZStackModule{constructor(t){this.instance=t,this.zStackDefaults={pushElements:null,minPushHeight:null,cardBorderRadius:null,cardYOffset:0,cardZScale:.93,cardContrast:.85,stackZAngle:160},this.breakpoints=this.instance.breakpoints,this.settings=this.instance.settings,this.settings.zStack&&(this.instance.setZstackConfig=t=>__awaiter(this,void 0,void 0,(function*(){return this.setZstackConfig(t)})),this.instance.on("rendered",(()=>{this.setZstackConfig(this.settings.zStack),this.setPushMultiplicators()})),this.instance.on("beforePresentTransition",(t=>{t.animate||this.settings.zStack.pushElements.forEach((t=>this.pushTransition(document.querySelector(t),this.breakpoints.breaks[this.settings.initialBreak],"unset")))})),this.instance.on("onMoveTransitionStart",(()=>{this.settings.zStack.pushElements.forEach((t=>this.pushTransition(document.querySelector(t),this.instance.getPanelTransformY(),"all 0ms linear 0ms")))})),this.instance.on("onTransitionStart",(t=>{this.settings.zStack.pushElements.forEach((s=>this.pushTransition(document.querySelector(s),t.translateY.new,`all ${this.settings.animationDuration}ms ${this.settings.animationType} 0s`)))})))}setZstackConfig(t){this.settings.zStack=t?Object.assign(Object.assign({},this.zStackDefaults),t):null}pushTransition(t,s,e){let i=this.settings.zStack.pushElements;t.style.transition=e,t.style.overflow=this.settings.zStack.cardBorderRadius&&"hidden",s=this.instance.screenHeightOffset-s;const n=this.settings.zStack.minPushHeight?this.settings.zStack.minPushHeight:this.instance.screenHeightOffset-this.breakpoints.bottomer,a=this.instance.screenHeightOffset-this.breakpoints.topper;let r=this.getPushMulitplicator(t),c=Math.pow(this.settings.zStack.cardZScale,r),o=Math.pow(this.settings.zStack.cardZScale,r-1),h=6+this.settings.zStack.cardYOffset,l=h*r*-1,u=l+h,p=Math.pow(this.settings.zStack.cardContrast,r),g=Math.pow(this.settings.zStack.cardContrast,r-1);const d=(e,n,a,r)=>{let c=Math.pow(e,this.settings.zStack.stackZAngle/100);t.style.transform=`translateY(${n*(c/e)}px) scale(${e})`,t.style.borderRadius=`${r}px`,t.style.filter=`contrast(${a})`;let o=document.querySelector(i[i.length-1]);s||t.className!==o.className||this.clearPushMultiplicators()};if(s<=n)return void d(o,u,g,0);const f=(t,e)=>{let i=-1*(a*e-n*t);return i-=(t-e)*s,i/=n-a,i>e&&(i=e),i<t&&(i=t),i};d(f(c,o),f(l,u),f(p,g),-1*f(-1*this.settings.zStack.cardBorderRadius,0))}setPushMultiplicators(){this.settings.zStack.pushElements.forEach((t=>{let s=document.querySelector(t),e=this.getPushMulitplicator(s);e=e?e+1:1,s.style.setProperty("--push-multiplicator",`${e}`)}))}getPushMulitplicator(t){let s=t.style.getPropertyValue("--push-multiplicator");return parseInt(s)}clearPushMultiplicators(){for(let t=0;t<this.settings.zStack.pushElements.length;t++){let s=document.querySelector(this.settings.zStack.pushElements[t]),e=this.getPushMulitplicator(s);e-=1,e?s.style.setProperty("--push-multiplicator",`${e}`):s.style.removeProperty("--push-multiplicator")}}}export{ZStackModule};