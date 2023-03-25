(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{2734:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}}),t(7294);var n=t(6682),i=t(247);function o(){let e=(0,n.Z)(i.Z);return e}},3405:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/breakpoint",function(){return t(4128)}])},4128:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var n=t(5893),i=t(7294),o=t(3366),a=t(7462),s=t(6010),l=t(5408),u=t(9707),c=t(4780),p=t(948),f=t(3616),d=t(2734);let m=i.createContext();var x=t(1588),g=t(4867);function h(e){return(0,g.Z)("MuiGrid",e)}let w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,x.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...w.map(e=>`grid-xs-${e}`),...w.map(e=>`grid-sm-${e}`),...w.map(e=>`grid-md-${e}`),...w.map(e=>`grid-lg-${e}`),...w.map(e=>`grid-xl-${e}`)]);var $=b;let k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(e){let r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function S({breakpoints:e,values:r}){let t="";Object.keys(r).forEach(e=>{""===t&&0!==r[e]&&(t=e)});let n=Object.keys(e).sort((r,t)=>e[r]-e[t]);return n.slice(0,n.indexOf(t))}let Z=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e,{container:n,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:u}=t,c=[];n&&(c=function(e,r,t={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t[`spacing-xs-${String(e)}`]];let n=[];return r.forEach(r=>{let i=e[r];Number(i)>0&&n.push(t[`spacing-${r}-${String(i)}`])}),n}(a,u,r));let p=[];return u.forEach(e=>{let n=t[e];n&&p.push(r[`grid-${e}-${String(n)}`])}),[r.root,n&&r.container,o&&r.item,l&&r.zeroMinWidth,...c,"row"!==i&&r[`direction-xs-${String(i)}`],"wrap"!==s&&r[`wrap-xs-${String(s)}`],...p]}})(({ownerState:e})=>(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:r}){let t=(0,l.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},t,e=>{let r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${$.item}`]={maxWidth:"none"}),r})},function({theme:e,ownerState:r}){let{container:t,rowSpacing:n}=r,i={};if(t&&0!==n){let o;let a=(0,l.P$)({values:n,breakpoints:e.breakpoints.values});"object"==typeof a&&(o=S({breakpoints:e.breakpoints.values,values:a})),i=(0,l.k9)({theme:e},a,(r,t)=>{let n=e.spacing(r);return"0px"!==n?{marginTop:`-${v(n)}`,[`& > .${$.item}`]:{paddingTop:v(n)}}:null!=o&&o.includes(t)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:r}){let{container:t,columnSpacing:n}=r,i={};if(t&&0!==n){let o;let a=(0,l.P$)({values:n,breakpoints:e.breakpoints.values});"object"==typeof a&&(o=S({breakpoints:e.breakpoints.values,values:a})),i=(0,l.k9)({theme:e},a,(r,t)=>{let n=e.spacing(r);return"0px"!==n?{width:`calc(100% + ${v(n)})`,marginLeft:`-${v(n)}`,[`& > .${$.item}`]:{paddingLeft:v(n)}}:null!=o&&o.includes(t)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:r}){let t;return e.breakpoints.keys.reduce((n,i)=>{let o={};if(r[i]&&(t=r[i]),!t)return n;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let s=(0,l.P$)({values:r.columns,breakpoints:e.breakpoints.values}),u="object"==typeof s?s[i]:s;if(null==u)return n;let c=`${Math.round(t/u*1e8)/1e6}%`,p={};if(r.container&&r.item&&0!==r.columnSpacing){let f=e.spacing(r.columnSpacing);if("0px"!==f){let d=`calc(${c} + ${v(f)})`;p={flexBasis:d,maxWidth:d}}}o=(0,a.Z)({flexBasis:c,flexGrow:0,maxWidth:c},p)}return 0===e.breakpoints.values[i]?Object.assign(n,o):n[e.breakpoints.up(i)]=o,n},{})}),N=e=>{let{classes:r,container:t,direction:n,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=e,u=[];t&&(u=function(e,r){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let t=[];return r.forEach(r=>{let n=e[r];if(Number(n)>0){let i=`spacing-${r}-${String(n)}`;t.push(i)}}),t}(o,l));let p=[];l.forEach(r=>{let t=e[r];t&&p.push(`grid-${r}-${String(t)}`)});let f={root:["root",t&&"container",i&&"item",s&&"zeroMinWidth",...u,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...p]};return(0,c.Z)(f,h,r)},j=i.forwardRef(function(e,r){let t=(0,f.Z)({props:e,name:"MuiGrid"}),{breakpoints:l}=(0,d.Z)(),c=(0,u.Z)(t),{className:p,columns:x,columnSpacing:g,component:h="div",container:w=!1,direction:b="row",item:$=!1,rowSpacing:v,spacing:S=0,wrap:j="wrap",zeroMinWidth:y=!1}=c,W=(0,o.Z)(c,k),_=i.useContext(m),C=w?x||12:_,E={},M=(0,a.Z)({},W);l.keys.forEach(e=>{null!=W[e]&&(E[e]=W[e],delete M[e])});let O=(0,a.Z)({},c,{columns:C,container:w,direction:b,item:$,rowSpacing:v||S,columnSpacing:g||S,wrap:j,zeroMinWidth:y,spacing:S},E,{breakpoints:l.keys}),P=N(O);return(0,n.jsx)(m.Provider,{value:C,children:(0,n.jsx)(Z,(0,a.Z)({ownerState:O,className:(0,s.Z)(P.root,p),as:h,ref:r},M))})});var y=t(3264);t(3821),(0,y.Z)("div")(e=>({height:"400px",backgroundColor:"red",color:e.color,".helloworld":{color:"white"}}));let W=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(j,{container:!0,spacing:2,justifyContent:"center",children:[(0,n.jsx)(j,{item:!0,xs:8,lg:6,sx:{backgroundColor:"red"},children:"xs=8"}),(0,n.jsx)(j,{item:!0,xs:4,lg:6,sx:{backgroundColor:"green"},children:"xs=4"}),(0,n.jsx)(j,{item:!0,xs:4,sx:{backgroundColor:"yellow"},children:"4"}),(0,n.jsx)(j,{item:!0,xs:8,sx:{backgroundColor:"blue"},children:"xs=8"})]})});var _=W},3821:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(5893),i=t(7294),o=t(6010),a=t(1163),s=t(1664),l=t.n(s),u=t(3795),c=t(948);let p=(0,c.ZP)("a")({}),f=(0,i.forwardRef)(function(e,r){let{to:t,linkAs:i,replace:o,scroll:a,shallow:s,prefetch:u,legacyBehavior:c=!0,locale:f,...d}=e;return(0,n.jsx)(l(),{href:t,prefetch:u,as:i,replace:o,scroll:a,shallow:s,passHref:!0,locale:f,legacyBehavior:c,children:(0,n.jsx)(p,{ref:r,...d})})}),d=(0,i.forwardRef)(function(e,r){let{activeClassName:t="active",as:i,className:s,href:l,legacyBehavior:c,linkAs:d,locale:m,noLinkStyle:x,prefetch:g,replace:h,role:w,scroll:b,shallow:$,...k}=e,v=(0,a.useRouter)(),S="string"==typeof l?l:l.pathname,Z=(0,o.Z)(s,{[t]:v.pathname===S&&t}),N="string"==typeof l&&(0===l.indexOf("http")||0===l.indexOf("mailto:"));if(N)return x?(0,n.jsx)(p,{className:Z,href:l,ref:r,...k}):(0,n.jsx)(u.Z,{className:Z,href:l,ref:r,...k});let j={to:l,linkAs:d||i,replace:h,scroll:b,shallow:$,prefetch:g,legacyBehavior:c,locale:m};return x?(0,n.jsx)(f,{className:Z,ref:r,...j,...k}):(0,n.jsx)(u.Z,{component:f,className:Z,ref:r,...j,...k})});r.C=d}},function(e){e.O(0,[573,154,774,888,179],function(){return e(e.s=3405)}),_N_E=e.O()}]);