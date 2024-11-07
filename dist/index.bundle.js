(()=>{"use strict";var e={145:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),s=t(314),a=t.n(s)()(o());a.push([e.id,".panel-with-step {\n    margin: 0 10%;\n}\n\n.panel-with-step .header {\n    padding: 10px;\n    background-color: #f5f5f5;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.step-label {\n    display: flex;\n    align-items: center;\n}\n\n.step-number {\n    background-color: green;\n    color: white;\n    border-radius: 50%;\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    font-size: 14px;\n}\n\n.toggle-icon {\n    font-size: 12px;\n    transition: transform 0.3s;\n}\n\n.panel-content {\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-top: none;\n    border-radius: 0 0 5px 5px;\n}\n",""]);const i=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&a[p[0]]||(void 0!==s&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=s),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],p=s[l]||0,d="".concat(l," ").concat(p);s[l]=p+1;var u=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=o(h,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=t(s[a]);n[i].references--}for(var c=r(e,o),l=0;l<s.length;l++){var p=t(s[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}s=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var s=n[r]={id:r,exports:{}};return e[r](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var r=t(72),o=t.n(r),s=t(825),a=t.n(s),i=t(659),c=t.n(i),l=t(56),p=t.n(l),d=t(540),u=t.n(d),h=t(113),f=t.n(h),m=t(145),v={};v.styleTagTransform=f(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;const g=Formio.Components.components.panel;class y extends g{static schema(...e){return g.schema({type:"panelWithStep",label:"Step Panel",key:"stepPanel",stepNumber:1,components:[],allowDrop:!0,...e})}static editForm(){const e=g.editForm();let n=e.components.find((e=>"display"===e.key));return n||(n={key:"display",components:[]},e.components.push(n)),n.components.push({type:"number",label:"Step Number",key:"stepNumber",input:!0,defaultValue:1,validate:{required:!0}}),e}static get builderInfo(){return{title:"Collapsible Panel with Step",icon:"list-alt",group:"layout",documentation:"/userguide/#panel",weight:0,schema:y.schema()}}constructor(e,n,t){super(e,n,t),this.isCollapsed=!0,this.allowDrop=!0,this.noDragDrop=!1,this.component.allowDrop=!0}render(e){const n=`\n            <div class="step-label">\n                <div class="step-number">${this.component.stepNumber||1}</div>\n                <span>${this.component.label||"Step Panel"}</span>\n            </div>\n            <div class="toggle-icon" style="transform: ${this.isCollapsed?"rotate(0deg)":"rotate(180deg)"};">\n                ▼\n            </div>\n        `,t=this.isCollapsed?"none":"block";return super.render(`\n            <div class="panel-with-step builder-component">\n                <div ref="header" class="header">${n}</div>\n                <div ref="panelContent" class="panel-content" style="display: ${t};">\n                    <div ref="childContainer" class="child-components-container">\n                        ${this.renderComponents(this.component.components.map((e=>Formio.Components.create(e))))}\n                    </div>\n                </div>\n            </div>\n        `)}attach(e){this.loadRefs(e,{header:"single",panelContent:"single",childContainer:"single"}),this.refs.header.addEventListener("click",(()=>{this.isCollapsed=!this.isCollapsed,this.refs.panelContent.style.display=this.isCollapsed?"none":"block",this.refs.header.querySelector(".toggle-icon").style.transform=this.isCollapsed?"rotate(0deg)":"rotate(180deg)"}));const n=this.component.components.map((e=>Formio.Components.create(e))),t=super.attach(e);return this.attachComponents(this.refs.childContainer,n),t}addComponent(e,n,t,r,o){return super.addComponent(e,this.refs.childContainer,t,r,o)}detach(){return this.refs.header&&this.refs.header.removeEventListener("click",this.togglePanel),super.detach()}}Formio.use([{components:{panelWithStep:y}}])})();