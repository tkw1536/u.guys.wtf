(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{3717:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5039:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}(n)))}return e}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},5062:(e,t,n)=>{e.exports=n(9706)()},6269:(e,t,n)=>{"use strict";var r=n(9680),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,s,l,c,i,u,p,f=!1;t||(t={}),s=t.debug||!1;try{if(c=r(),i=document.createRange(),u=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(p),i.selectNodeContents(p),u.addRange(i),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(r){s&&console.error("unable to copy using execCommand: ",r),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(r){s&&console.error("unable to copy using clipboardData: ",r),s&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,a),window.prompt(l,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(i):u.removeAllRanges()),p&&document.body.removeChild(p),c()}return f}},6760:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7305)}])},6852:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(n(4232)),a=l(n(6269)),s=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(c,e);var t,n,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(c);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(p(e=l.call.apply(l,[this].concat(n))),"onClick",function(t){var n=e.props,r=n.text,s=n.onCopy,l=n.children,c=n.options,i=o.default.Children.only(l),u=(0,a.default)(r,c);s&&s(r,u),i&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t)}),e}return n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s),r=o.default.Children.only(t);return o.default.cloneElement(r,i(i({},n),{},{onClick:this.onClick}))}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,n),Object.defineProperty(c,"prototype",{writable:!1}),c}(o.default.PureComponent);t.CopyToClipboard=m,d(m,"defaultProps",{onCopy:void 0,options:void 0})},7305:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>er});var r=n(7876),o=n(4232),a=n(8447),s=n(5039),l=n.n(s);let c=o.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:i,Provider:u}=c;function p(e,t){let{prefixes:n}=(0,o.useContext)(c);return e||n[t]||t}function f(){let{breakpoints:e}=(0,o.useContext)(c);return e}function d(){let{minBreakpoint:e}=(0,o.useContext)(c);return e}let m=o.forwardRef((e,t)=>{let{bsPrefix:n,fluid:o=!1,as:a="div",className:s,...c}=e,i=p(n,"container");return(0,r.jsx)(a,{ref:t,...c,className:l()(s,o?"".concat(i).concat("string"==typeof o?"-".concat(o):"-fluid"):i)})});m.displayName="Container";let w=o.forwardRef((e,t)=>{let{bsPrefix:n,className:o,as:a="div",...s}=e,c=p(n,"row"),i=f(),u=d(),m="".concat(c,"-cols"),w=[];return i.forEach(e=>{let t;let n=s[e];delete s[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n,null!=t&&w.push("".concat(m).concat(e!==u?"-".concat(e):"","-").concat(t))}),(0,r.jsx)(a,{ref:t,...s,className:l()(o,c,...w)})});w.displayName="Row";let y=o.forwardRef((e,t)=>{let[{className:n,...o},{as:a="div",bsPrefix:s,spans:c}]=function(e){let{as:t,bsPrefix:n,className:r,...o}=e;n=p(n,"col");let a=f(),s=d(),c=[],i=[];return a.forEach(e=>{let t,r,a;let l=o[e];delete o[e],"object"==typeof l&&null!=l?{span:t,offset:r,order:a}=l:t=l;let u=e!==s?"-".concat(e):"";t&&c.push(!0===t?"".concat(n).concat(u):"".concat(n).concat(u,"-").concat(t)),null!=a&&i.push("order".concat(u,"-").concat(a)),null!=r&&i.push("offset".concat(u,"-").concat(r))}),[{...o,className:l()(r,...c,...i)},{as:t,bsPrefix:n,spans:c}]}(e);return(0,r.jsx)(a,{...o,ref:t,className:l()(n,!c.length&&s)})});y.displayName="Col";var b=n(5062),h=n.n(b);let x={type:h().string,tooltip:h().bool,as:h().elementType},v=o.forwardRef((e,t)=>{let{as:n="div",className:o,type:a="valid",tooltip:s=!1,...c}=e;return(0,r.jsx)(n,{...c,ref:t,className:l()(o,"".concat(a,"-").concat(s?"tooltip":"feedback"))})});v.displayName="Feedback",v.propTypes=x;let g=o.createContext({}),j=o.forwardRef((e,t)=>{let{id:n,bsPrefix:a,className:s,type:c="checkbox",isValid:i=!1,isInvalid:u=!1,as:f="input",...d}=e,{controlId:m}=(0,o.useContext)(g);return a=p(a,"form-check-input"),(0,r.jsx)(f,{...d,ref:t,type:c,id:n||m,className:l()(s,a,i&&"is-valid",u&&"is-invalid")})});j.displayName="FormCheckInput";let C=o.forwardRef((e,t)=>{let{bsPrefix:n,className:a,htmlFor:s,...c}=e,{controlId:i}=(0,o.useContext)(g);return n=p(n,"form-check-label"),(0,r.jsx)("label",{...c,ref:t,htmlFor:s||i,className:l()(a,n)})});C.displayName="FormCheckLabel";let O=o.forwardRef((e,t)=>{let{id:n,bsPrefix:a,bsSwitchPrefix:s,inline:c=!1,reverse:i=!1,disabled:u=!1,isValid:f=!1,isInvalid:d=!1,feedbackTooltip:m=!1,feedback:w,feedbackType:y,className:b,style:h,title:x="",type:O="checkbox",label:N,children:T,as:R="input",...k}=e;a=p(a,"form-check"),s=p(s,"form-switch");let{controlId:S}=(0,o.useContext)(g),P=(0,o.useMemo)(()=>({controlId:n||S}),[S,n]),_=!T&&null!=N&&!1!==N||o.Children.toArray(T).some(e=>o.isValidElement(e)&&e.type===C),E=(0,r.jsx)(j,{...k,type:"switch"===O?"checkbox":O,ref:t,isValid:f,isInvalid:d,disabled:u,as:R});return(0,r.jsx)(g.Provider,{value:P,children:(0,r.jsx)("div",{style:h,className:l()(b,_&&a,c&&"".concat(a,"-inline"),i&&"".concat(a,"-reverse"),"switch"===O&&s),children:T||(0,r.jsxs)(r.Fragment,{children:[E,_&&(0,r.jsx)(C,{title:x,children:N}),w&&(0,r.jsx)(v,{type:y,tooltip:m,children:w})]})})})});O.displayName="FormCheck";let N=Object.assign(O,{Input:j,Label:C});n(8547);let T=o.forwardRef((e,t)=>{let{bsPrefix:n,type:a,size:s,htmlSize:c,id:i,className:u,isValid:f=!1,isInvalid:d=!1,plaintext:m,readOnly:w,as:y="input",...b}=e,{controlId:h}=(0,o.useContext)(g);return n=p(n,"form-control"),(0,r.jsx)(y,{...b,type:a,size:c,ref:t,readOnly:w,id:i||h,className:l()(u,m?"".concat(n,"-plaintext"):n,s&&"".concat(n,"-").concat(s),"color"===a&&"".concat(n,"-color"),f&&"is-valid",d&&"is-invalid")})});T.displayName="FormControl";let R=Object.assign(T,{Feedback:v}),k=o.forwardRef((e,t)=>{let{className:n,bsPrefix:o,as:a="div",...s}=e;return o=p(o,"form-floating"),(0,r.jsx)(a,{ref:t,className:l()(n,o),...s})});k.displayName="FormFloating";let S=o.forwardRef((e,t)=>{let{controlId:n,as:a="div",...s}=e,l=(0,o.useMemo)(()=>({controlId:n}),[n]);return(0,r.jsx)(g.Provider,{value:l,children:(0,r.jsx)(a,{...s,ref:t})})});S.displayName="FormGroup";let P=o.forwardRef((e,t)=>{let{as:n="label",bsPrefix:a,column:s=!1,visuallyHidden:c=!1,className:i,htmlFor:u,...f}=e,{controlId:d}=(0,o.useContext)(g);a=p(a,"form-label");let m="col-form-label";"string"==typeof s&&(m="".concat(m," ").concat(m,"-").concat(s));let w=l()(i,a,c&&"visually-hidden",s&&m);return(u=u||d,s)?(0,r.jsx)(y,{ref:t,as:"label",className:w,htmlFor:u,...f}):(0,r.jsx)(n,{ref:t,className:w,htmlFor:u,...f})});P.displayName="FormLabel";let _=o.forwardRef((e,t)=>{let{bsPrefix:n,className:a,id:s,...c}=e,{controlId:i}=(0,o.useContext)(g);return n=p(n,"form-range"),(0,r.jsx)("input",{...c,type:"range",ref:t,className:l()(a,n),id:s||i})});_.displayName="FormRange";let E=o.forwardRef((e,t)=>{let{bsPrefix:n,size:a,htmlSize:s,className:c,isValid:i=!1,isInvalid:u=!1,id:f,...d}=e,{controlId:m}=(0,o.useContext)(g);return n=p(n,"form-select"),(0,r.jsx)("select",{...d,size:s,ref:t,className:l()(c,n,a&&"".concat(n,"-").concat(a),i&&"is-valid",u&&"is-invalid"),id:f||m})});E.displayName="FormSelect";let D=o.forwardRef((e,t)=>{let{bsPrefix:n,className:o,as:a="small",muted:s,...c}=e;return n=p(n,"form-text"),(0,r.jsx)(a,{...c,ref:t,className:l()(o,n,s&&"text-muted")})});D.displayName="FormText";let F=o.forwardRef((e,t)=>(0,r.jsx)(N,{...e,ref:t,type:"switch"}));F.displayName="Switch";let I=Object.assign(F,{Input:N.Input,Label:N.Label}),A=o.forwardRef((e,t)=>{let{bsPrefix:n,className:o,children:a,controlId:s,label:c,...i}=e;return n=p(n,"form-floating"),(0,r.jsxs)(S,{ref:t,className:l()(o,n),controlId:s,...i,children:[a,(0,r.jsx)("label",{htmlFor:s,children:c})]})});A.displayName="FloatingLabel";let z={_ref:h().any,validated:h().bool,as:h().elementType},L=o.forwardRef((e,t)=>{let{className:n,validated:o,as:a="form",...s}=e;return(0,r.jsx)(a,{...s,ref:t,className:l()(n,o&&"was-validated")})});L.displayName="Form",L.propTypes=z;let B=Object.assign(L,{Group:S,Control:R,Floating:k,Check:N,Switch:I,Label:P,Text:D,Range:_,Select:E,FloatingLabel:A}),U=["as","disabled"];function M({tagName:e,disabled:t,href:n,target:r,rel:o,role:a,onClick:s,tabIndex:l=0,type:c}){e||(e=null!=n||null!=r||null!=o?"a":"button");let i={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},i];let u=r=>{var o;if((t||"a"===e&&(!(o=n)||"#"===o.trim()))&&r.preventDefault(),t){r.stopPropagation();return}null==s||s(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},i]}o.forwardRef((e,t)=>{let{as:n,disabled:o}=e,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,U),[s,{tagName:l}]=M(Object.assign({tagName:n,disabled:o},a));return(0,r.jsx)(l,Object.assign({},a,s,{ref:t}))}).displayName="Button";let W=o.forwardRef((e,t)=>{let{as:n,bsPrefix:o,variant:a="primary",size:s,active:c=!1,disabled:i=!1,className:u,...f}=e,d=p(o,"btn"),[m,{tagName:w}]=M({tagName:n,disabled:i,...f});return(0,r.jsx)(w,{...m,...f,ref:t,disabled:i,className:l()(u,d,c&&"active",a&&"".concat(d,"-").concat(a),s&&"".concat(d,"-").concat(s),f.href&&i&&"disabled")})});W.displayName="Button";class X{matches(e){return e>=this.startCode&&e<=this.endCode}transform(e,t){t.push(...this.replacementCodes),t[t.length-1]+=e-this.startCode}constructor(e,t,n){this.startCode=e.charCodeAt(0),this.endCode=t.charCodeAt(0),this.replacementCodes=n.split("").map(e=>e.charCodeAt(0))}}class H extends X{constructor(e){super("a","z",e)}}class V extends X{constructor(e){super("A","Z",e)}}class q extends X{constructor(e){super("0","9",e)}}class G extends X{constructor(e,t){super(e,e,t)}}function K(e){return function(t){let n=[];for(let r=0;r<t.length;r++){let o=t.charCodeAt(r),a=e.find(e=>e.matches(o));a?a.transform(o,n):n.push(o)}return String.fromCharCode(...n)}}X.boldenTransforms=[new V("\uD835\uDDD4"),new H("\uD835\uDDEE"),new q("\uD835\uDFEC")],X.italicizeTransform=[new V("\uD835\uDE08"),new H("\uD835\uDE22")],X.boldenAndItalicizeTransform=[new V("\uD835\uDE3C"),new H("\uD835\uDE56"),new q("\uD835\uDFEC")],X.monospaceTransform=[new V("\uD835\uDE70"),new H("\uD835\uDE8A"),new q("\uD835\uDFF6")],X.scriptizeTransform=[new V("\uD835\uDCD0"),new H("\uD835\uDCEA")],X.subscriptTransform=[new q("₀"),new G("a","ₐ"),new G("e","ₑ"),new G("h","ₕ"),new G("i","ᵢ"),new G("j","ⱼ"),new X("k","n","ₖ"),new G("o","ₒ"),new G("p","ₚ"),new G("r","ᵣ"),new X("s","t","ₛ"),new G("u","ᵤ"),new G("v","ᵥ"),new G("x","ₓ")],X.superscriptTransform=[new G("1","\xb9"),new X("2","3","\xb2"),new q("⁰"),new X("(",")","⁽"),new G("+","⁺"),new G("-","⁻"),new G("=","⁼"),new G("n","ⁿ"),new G("i","ⁱ")],X.upsidedownTransform=[new G("a","ɐ"),new G("b","q"),new G("c","ɔ"),new G("d","p"),new G("e","ǝ"),new G("f","ɟ"),new G("g","ƃ"),new G("h","ɥ"),new G("i","ᴉ"),new G("j","ɾ"),new G("k","ʞ"),new G("l","l"),new G("m","ɯ"),new G("n","u"),new G("o","o"),new G("p","d"),new G("q","b"),new G("r","ɹ"),new G("s","s"),new G("t","ʇ"),new G("u","n"),new G("v","ʌ"),new G("w","ʍ"),new G("x","x"),new G("y","ʎ"),new G("z","z"),new G("A","∀"),new G("B","B"),new G("C","Ɔ"),new G("D","D"),new G("E","Ǝ"),new G("F","Ⅎ"),new G("G","פ"),new G("H","H"),new G("I","I"),new G("J","ſ"),new G("K","K"),new G("L","˥"),new G("M","W"),new G("N","N"),new G("O","O"),new G("P","Ԁ"),new G("Q","Q"),new G("R","R"),new G("S","S"),new G("T","┴"),new G("U","∩"),new G("V","Λ"),new G("W","M"),new G("X","X"),new G("Y","⅄"),new G("Z","Z"),new G("0","0"),new G("1","Ɩ"),new G("2","ᄅ"),new G("3","Ɛ"),new G("4","ㄣ"),new G("5","ϛ"),new G("6","9"),new G("7","ㄥ"),new G("8","8"),new G("9","6"),new G(",","'"),new G(".","˙"),new G("?","\xbf"),new G("!","\xa1"),new G('"',",,"),new G("'",","),new G("`",","),new G("(",")"),new G(")","("),new G("[","]"),new G("]","["),new G("{","}"),new G("}","{"),new G("<",">"),new G(">","<"),new G("&","⅋"),new G("_","‾")];let Z=K(X.boldenTransforms),Q=K(X.italicizeTransform),Y=K(X.boldenAndItalicizeTransform),J=K(X.monospaceTransform),$=K(X.scriptizeTransform),ee=K(X.subscriptTransform),et=K(X.superscriptTransform),en=(()=>{let e=K(X.upsidedownTransform);return t=>e(t.split("").reverse().join(""))})();function er(){return(0,r.jsxs)(m,{children:[(0,r.jsx)(w,{children:(0,r.jsx)("h1",{children:"u.guys.wtf"})}),(0,r.jsx)(eo,{text:"Strikethrough",transform:ea}),(0,r.jsx)(eo,{text:"Upside Down",transform:en}),(0,r.jsx)(eo,{text:"Bold",transform:Z}),(0,r.jsx)(eo,{text:"Italic",transform:Q}),(0,r.jsx)(eo,{text:"Bold & Italic",transform:Y}),(0,r.jsx)(eo,{text:"Monospace",transform:J}),(0,r.jsx)(eo,{text:"Scriptize",transform:$}),(0,r.jsx)(w,{children:(0,r.jsx)("h2",{children:"Incomplete"})}),(0,r.jsx)(eo,{text:"Subscript",transform:ee}),(0,r.jsx)(eo,{text:"Superscript",transform:et})]})}class eo extends o.Component{render(){let{text:e,transformed:t,copied:n}=this.state;return(0,r.jsx)(B,{children:(0,r.jsxs)(w,{children:[(0,r.jsxs)(y,{xs:12,md:5,children:[(0,r.jsx)(B.Control,{type:"text",value:e,onChange:this.onChange}),"\xa0"]}),(0,r.jsxs)(y,{xs:12,md:5,children:[(0,r.jsx)(B.Control,{disabled:!0,readOnly:!0,type:"text",value:t,style:{fontFamily:"monospace"}}),"\xa0"]}),(0,r.jsxs)(y,{xs:12,md:2,children:[(0,r.jsx)(a.CopyToClipboard,{text:t,onCopy:this.onCopy,children:(0,r.jsx)(W,{children:n?"Copied!":"Copy to clipboard"})}),"\xa0"]}),(0,r.jsx)(y,{className:"d-block d-md-none",children:(0,r.jsx)("hr",{})})]})})}constructor(e){super(e),this.onChange=e=>this.setState({text:e.target.value,transformed:this.props.transform(e.target.value),copied:!1}),this.onCopy=()=>{this.setState({copied:!0})};let{text:t,transform:n}=e;this.state={text:t,transformed:n(t),copied:!1}}}let ea=e=>Array.from(e).map(e=>e+"̶").join("")},8447:(e,t,n)=>{"use strict";var r=n(6852).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},8547:e=>{"use strict";e.exports=function(){}},9680:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},9706:(e,t,n)=>{"use strict";var r=n(3717);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);