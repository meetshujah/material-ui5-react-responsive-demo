(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{3795:function(e,t,o){"use strict";o.d(t,{Z:function(){return E}});var n=o(3366),r=o(7462),l=o(7294),a=o(6010),u=o(4780),i=o(8216),c=o(948),s=o(3616),f=o(8791),d=o(3167),p=o(5861),y=o(1588),v=o(4867);function h(e){return(0,v.Z)("MuiLink",e)}let b=(0,y.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var m=o(4844),g=o(1796);let C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=e=>C[e]||e,M=({theme:e,ownerState:t})=>{let o=x(t.color),n=(0,m.DW)(e,`palette.${o}`,!1)||t.color,r=(0,m.DW)(e,`palette.${o}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:(0,g.Fq)(n,.4)};var k=o(5893);let _=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Z=e=>{let{classes:t,component:o,focusVisible:n,underline:r}=e,l={root:["root",`underline${(0,i.Z)(r)}`,"button"===o&&"button",n&&"focusVisible"]};return(0,u.Z)(l,h,t)},j=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[`underline${(0,i.Z)(o.underline)}`],"button"===o.component&&t.button]}})(({theme:e,ownerState:t})=>(0,r.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,r.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:M({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}})),P=l.forwardRef(function(e,t){let o=(0,s.Z)({props:e,name:"MuiLink"}),{className:u,color:i="primary",component:c="a",onBlur:p,onFocus:y,TypographyClasses:v,underline:h="always",variant:b="inherit",sx:m}=o,g=(0,n.Z)(o,_),{isFocusVisibleRef:x,onBlur:M,onFocus:P,ref:E}=(0,f.Z)(),[w,L]=l.useState(!1),O=(0,d.Z)(t,E),S=e=>{M(e),!1===x.current&&L(!1),p&&p(e)},D=e=>{P(e),!0===x.current&&L(!0),y&&y(e)},R=(0,r.Z)({},o,{color:i,component:c,focusVisible:w,underline:h,variant:b}),T=Z(R);return(0,k.jsx)(j,(0,r.Z)({color:i,className:(0,a.Z)(T.root,u),classes:v,component:c,onBlur:S,onFocus:D,ref:O,ownerState:R,variant:b,sx:[...Object.keys(C).includes(i)?[]:[{color:i}],...Array.isArray(m)?m:[m]]},g))});var E=P},3264:function(e,t,o){"use strict";var n=o(182);let r=(0,n.ZP)();t.Z=r},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(2648).Z,r=o(7273).Z,l=n(o(7294)),a=o(1003),u=o(7795),i=o(4465),c=o(2692),s=o(8245),f=o(9246),d=o(227),p=o(3468);let y=new Set;function v(e,t,o,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function h(e){return"string"==typeof e?e:u.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let o,n;let{href:u,as:y,children:b,prefetch:m,passHref:g,replace:C,shallow:x,scroll:M,locale:k,onClick:_,onMouseEnter:Z,onTouchStart:j,legacyBehavior:P=!1}=e,E=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,P&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let w=!1!==m,L=l.default.useContext(c.RouterContext),O=l.default.useContext(s.AppRouterContext),S=null!=L?L:O,D=!L,{href:R,as:T}=l.default.useMemo(()=>{if(!L){let e=h(u);return{href:e,as:y?h(y):e}}let[t,o]=a.resolveHref(L,u,!0);return{href:t,as:y?a.resolveHref(L,y):o||t}},[L,u,y]),A=l.default.useRef(R),I=l.default.useRef(T);P&&(n=l.default.Children.only(o));let N=P?n&&"object"==typeof n&&n.ref:t,[$,B,H]=f.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(I.current!==T||A.current!==R)&&(H(),I.current=T,A.current=R),$(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[T,N,R,H,$]);l.default.useEffect(()=>{S&&B&&w&&v(S,R,T,{locale:k})},[T,R,B,k,w,null==L?void 0:L.locale,S]);let K={ref:F,onClick(e){P||"function"!=typeof _||_(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,o,n,r,u,i,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(o)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:u,locale:c,scroll:i}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!f})};s?l.default.startTransition(y):y()}(e,S,R,T,C,x,M,k,D,w)},onMouseEnter(e){P||"function"!=typeof Z||Z(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(w||!D)&&v(S,R,T,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof j||j(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(w||!D)&&v(S,R,T,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||g||"a"===n.type&&!("href"in n.props)){let U=void 0!==k?k:null==L?void 0:L.locale,W=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(T,U,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);K.href=W||p.addBasePath(i.addLocale(T,U,null==L?void 0:L.defaultLocale))}return P?l.default.cloneElement(n,K):l.default.createElement("a",Object.assign({},E,K),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:i}=e,c=i||!l,[s,f]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(l){if(!c&&!s&&d&&d.tagName){let e=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=a.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},u.push(o),a.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(n);let t=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!s){let n=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(n)}},[d,c,o,t,s]);let y=n.useCallback(()=>{f(!1)},[]);return[p,s,y]};var n=o(7294),r=o(4686);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(1551)},1163:function(e,t,o){e.exports=o(880)}}]);