"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44669],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(o),g=a,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||n;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<n;m++)i[m]=o[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},64407:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=o(87462),a=(o(67294),o(3905));const n={title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["lighthouse","seo","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/lighthouse-google-chrome",source:"@site/blog/2022-08-31-google-lighthouse.md",title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"lighthouse",permalink:"/blog/tags/lighthouse"},{label:"seo",permalink:"/blog/tags/seo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:15.625,hasTruncateMarker:!0,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["lighthouse","seo","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},prevItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},nextItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},relatedPosts:[{title:"React memo guide with examples",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.01,date:"2022-09-13T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.025,date:"2022-09-16T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.37,date:"2022-09-20T00:00:00.000Z"}],authorPosts:[{title:"How to use the useParams hook in React Router",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.49,date:"2022-09-24T00:00:00.000Z"},{title:"5 Best Free Platforms for Hosting Hobby Web Projects",permalink:"/blog/5-top-free-react-hosting-platforms",formattedDate:"November 23, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.215,date:"2022-11-23T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"November 1, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:16.565,date:"2022-11-01T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"As websites and web applications become more complex, it is necessary to measure and track their overall quality to provide a seamless browsing experience to your clients. Though several other tools exist for this purpose, Google lighthouse is quite popular among web developers mainly because it is part of the Chrome DevTools."),(0,a.kt)("p",null,"If it doesn't meet your needs as part of Chrome DevTools, Google lighthouse is also readily available as a Node package or command line utility. You can use it for auditing a website for performance, best practices, accessibility, progressive web app (PWA), and search engine optimization(SEO)."),(0,a.kt)("p",null,"You will explore the different ways of using Google Lighthouse in this article. You will also learn how to remedy some of the issues highlighted in the performance measurement and use Google lighthouse in continuous integration(CI) workflow."))}u.isMDXComponent=!0}}]);