"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||n;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","react","pwa","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/featured.png",is_featured:!0,hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/next-js-pwa",source:"@site/blog/2022-09-11-next-refine-pwa.md",title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",date:"2022-09-11T00:00:00.000Z",formattedDate:"September 11, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"react",permalink:"/blog/tags/react"},{label:"pwa",permalink:"/blog/tags/pwa"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:18.495,hasTruncateMarker:!0,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and refine framework, from start to finish!",slug:"next-js-pwa",authors:"david_omotayo",tags:["nextjs","react","pwa","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-11-next-refine-pwa/featured.png",is_featured:!0,hide_table_of_contents:!1},prevItem:{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript"},nextItem:{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide"},relatedPosts:[{title:"How to use Conditional Rendering in React",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.285,date:"2022-12-14T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.365,date:"2022-09-27T00:00:00.000Z"},{title:"Svelte vs React Comparison",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.31,date:"2022-12-08T00:00:00.000Z"}],authorPosts:[{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.365,date:"2022-09-27T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:23.26,date:"2022-11-17T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Building a complex site requires a one-size-fits-all framework that not only simplifies the complexity but also integrates seamlessly with other build tools on a whim."),(0,i.kt)("p",null,"Over the years, frameworks and libraries such as React have been the go-to packages for building complex and large applications, even in the face of their susceptible nature to tiresome caveats. "),(0,i.kt)("p",null,"Fast forward to today, there are several frameworks and libraries in the picture, and they all promise to do a better job than their predecessors. However, many still don't meet the flexibility mark, except for a handful of them.  "),(0,i.kt)("p",null,"In this article, we'll look at what refine is and demonstrate how to use it to build a ",(0,i.kt)("strong",{parentName:"p"},"Next.js PWA")," storefront application."))}m.isMDXComponent=!0}}]);