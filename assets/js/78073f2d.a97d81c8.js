"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905)),a=(n(2776),n(36514));const r={title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",slug:"next-js-with-typescript",authors:"michael",tags:["nextjs","typescript"],image:"/img/blog/2022-09-12-next-typescript/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/next-js-with-typescript",source:"@site/blog/2022-09-12-next-typescript.md",title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:7.345,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",slug:"next-js-with-typescript",authors:"michael",tags:["nextjs","typescript"],image:"/img/blog/2022-09-12-next-typescript/social.png",hide_table_of_contents:!1},prevItem:{title:"React memo guide with examples",permalink:"/blog/react-memo-guide"},nextItem:{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa"},relatedPosts:[{title:"A Guide to useContext and React Context API",permalink:"/blog/usecontext-and-react-context",formattedDate:"October 23, 2022",authors:[{name:"Chibuzor Otuokwu",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"chibuzor_otuokwu"}],readingTime:12.395,date:"2022-10-23T00:00:00.000Z"},{title:"Next.js environment variables",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.545,date:"2022-09-07T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.615,date:"2022-09-11T00:00:00.000Z"}],authorPosts:[{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:16.75,date:"2022-08-23T00:00:00.000Z"},{title:"Next.js 13 - What are the new features?",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.18,date:"2022-11-12T00:00:00.000Z"},{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:12.62,date:"2022-08-17T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is TypeScript?",id:"what-is-typescript",level:2},{value:"How to add TypeScript to your Next.js app",id:"how-to-add-typescript-to-your-nextjs-app",level:2},{value:"<code>create-next-app</code>",id:"create-next-app",level:4},{value:"Adding TypeScript to an existing project",id:"adding-typescript-to-an-existing-project",level:4},{value:"How to use Typescript with Next.js data fetching methods",id:"how-to-use-typescript-with-nextjs-data-fetching-methods",level:2},{value:"How to use Typescript in Next.js API routes",id:"how-to-use-typescript-in-nextjs-api-routes",level:2},{value:"How to configure absolute imports and module path aliases in tsconfig.json",id:"how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson",level:2},{value:"Disabling Typescript Errors in Production",id:"disabling-typescript-errors-in-production",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Next.js is an open source React framework for building single-page web applications. It comes with numerous out-of-the-box functionalities that make developing web applications faster and more interesting, thereby providing refined and elegant developer and user experiences."),(0,o.kt)("p",null,"Combining ",(0,o.kt)("strong",{parentName:"p"},"Next.js and TypeScript")," gives us superpowers to rapidly create applications with a good developer and user experiences. Every developer hates bugs. Especially pesky ones such as typos or trying to use or access undeclared variables. ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," helps catch these types of bugs early during development, and this is one of the many features that make integrating it with a tool like Next.js fantastic."),(0,o.kt)("p",null,"In this article, we'll look at how you can integrate TypeScript in your Next.js apps. We'll also explore reasons why you should consider using this tool in your Next.js projects and also talk about its benefits. "),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-typescript"},"What is TypeScript?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-add-typescript-to-your-nextjs-app"},"How to add TypeScript to your Next.js app"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-next-app"},(0,o.kt)("inlineCode",{parentName:"a"},"create-next-app"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#adding-typescript-to-an-existing-project"},"Adding TypeScript to an existing project")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-use-typescript-with-nextjs-data-fetching-methods"},"How to use Typescript with Next.js data fetching methods")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-use-typescript-in-nextjs-api-routes"},"How to use Typescript in Next.js API routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson"},"How to configure absolute imports and module path aliases in tsconfig.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#disabling-typescript-errors-in-production"},"Disabling Typescript Errors in Production"))),(0,o.kt)("h2",{id:"what-is-typescript"},"What is TypeScript?"),(0,o.kt)("p",null," It's a strict JavaScript superset used for large enterprise projects and writing programs that scale. In the end, TypeScript transpiles to plain JavaScript and can be used for developing applications on the client-side and server-side."),(0,o.kt)("p",null,"TypeScript is an object-oriented programming language that provides all JavaScript features and extra useful capabilities. These capabilities include static or dynamic type checking, error checking during compilation, type inference, and so on."),(0,o.kt)("h2",{id:"how-to-add-typescript-to-your-nextjs-app"},"How to add TypeScript to your Next.js app"),(0,o.kt)("p",null,"Next.js provides integrated support for TypeScript with built-in types for pages, API routes, the three data fetching methods, etc."),(0,o.kt)("p",null,"Basically, there are two ways in which we can add TypeScript to our project. The first is with ",(0,o.kt)("inlineCode",{parentName:"p"},"create-next-app"),", and the second is by adding TypeSript manually to an existing project."),(0,o.kt)("h4",{id:"create-next-app"},(0,o.kt)("inlineCode",{parentName:"h4"},"create-next-app")),(0,o.kt)("p",null,"We can bootstrap a Next.js application with TypeScript by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"--typescript")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--ts")," flag to the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-next-app")," command like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest --ts\n# or\nnpx create-next-app@latest --typescript\n")),(0,o.kt)("h4",{id:"adding-typescript-to-an-existing-project"},"Adding TypeScript to an existing project"),(0,o.kt)("p",null,"Alternatively, we can also add TypeScript manually to an existing Next.js project. "),(0,o.kt)("p",null,"First, you'll need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in your project root folder. This file specifies the root files and the compiler options required to compile the project and is populated automatically by Next.js with default values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch tsconfig.json\n")),(0,o.kt)("p",null,"Next, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev")," (if you use Yarn) to start the application development server. "),(0,o.kt)("p",null,"Next.js will emit a message in the terminal with the following content and try to install the necessary TypeScript related packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"It looks like you're trying to use TypeScript but do not have the required package(s) installed.\nInstalling dependencies\n\nIf you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).\n\n\nInstalling devDependencies (yarn):\n- typescript\n- @types/react\n- @types/node\n\n[1/4] Resolving packages...\n[2/4] Fetching packages...\n\n")),(0,o.kt)("p",null,"When the installation is complete, open ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and you'll see it populated with values like below: "),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("img",{src:a.Z,alt:"tsconfig"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you noticed, Next.js also created a new file, ",(0,o.kt)("inlineCode",{parentName:"p"},"next-env.d.ts")," in the project root. This file ensures Next.js types are picked up by the compiler and should ",(0,o.kt)("strong",{parentName:"p"},"not")," be edited or deleted. Also, ensure the file is added to ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," to prevent it from being committed by version control like Git."),(0,o.kt)("p",null,"With this, you can now start creating files with ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx")," extensions in your application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\n\ntype ProfileProps = {\n    profile: {\n    firstName: string,\n    lastName: string,\n    age: number,\n    }\n}\n\nconst Profile: React.FunctionComponent<ProfileProps> = ({ profile }): JSX.Element => {\n    return (\n        <>\n          <p>Profile</p>\n          <div>Welcome, {profile.firstName}</div> \n        </>\n    )\n}\n\nexport default Profile;\n")),(0,o.kt)("hr",null),(0,o.kt)(u,{title:"Is your CRUD app overloaded with technical debt?",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-use-typescript-with-nextjs-data-fetching-methods"},"How to use Typescript with Next.js data fetching methods"),(0,o.kt)("p",null,"Next.js comes with built-in types for all its three data fetching methods (",(0,o.kt)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"getStaticPaths"),"). "),(0,o.kt)("p",null,"Here's how to use them in your code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'\n\nexport const getStaticProps: GetStaticProps = async (context) => {}\n\nexport const getStaticPaths: GetStaticPaths = async () => {}\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {}\n")),(0,o.kt)("p",null,"Next.js also provides built-in types to infer the types for props from ",(0,o.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"."),(0,o.kt)("p",null,"If you want to get inferred typings for your props, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"InferGetStaticPropsType<typeof getStaticProps>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"InferGetServerSidePropsType<typeof getServerSideProps>")," in a page component. "),(0,o.kt)("p",null,"Let's say we're expecting some data from an API that we need to pre-render at build time.\nInstead of writing repetitive code like the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"type PostProps= {\n    userId: number,\n    id: number,\n    title: string,\n    body: string\n  }\n  \nexport const getStaticProps = async () => {\n      const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n      const posts: PostProps[] = await response.json();\n  \n    return {\n      props: {\n        posts,\n      },\n    }\n  }\n  \nfunction PostPage({ posts }: { posts: PostProps }) {\n    ...\n  }\n  \nexport default PostPage;\n")),(0,o.kt)("p",null,"We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"InferGetStaticPropsType")," to get inferred typings for the ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," prop. Add and refactor the code with the highlighted like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"//highlight-next-line\nimport { InferGetStaticPropsType } from 'next'\n\n...\n\n //highlight-next-line \nfunction PostPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {}\n  \nexport default PostPage\n")),(0,o.kt)("p",null,"You can also use this same method when using ",(0,o.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,o.kt)("h2",{id:"how-to-use-typescript-in-nextjs-api-routes"},"How to use Typescript in Next.js API routes"),(0,o.kt)("p",null,"Next.js also comes with built-in types for API routes. which we can access like below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\nexport default (req: NextApiRequest, res: NextApiResponse) => {\n  res.status(200).json({ age: '25' })\n}\n")),(0,o.kt)("p",null,"We can also specify custom types for the response data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { NextApiRequest, NextApiResponse } from 'next'\n\ntype Data = {\n  name: string\n}\n\nexport default (req: NextApiRequest, res: NextApiResponse<Data>) => {\n  res.status(200).json({ age: '25' })\n}\n")),(0,o.kt)("h2",{id:"how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson"},"How to configure absolute imports and module path aliases in tsconfig.json"),(0,o.kt)("p",null,"Do you relate with the pain of having to do something like this?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Import { fetchUserProfile } from '../../../../utils'\nImport UserProfile from '../../../UserProfile'\n")),(0,o.kt)("p",null,"How about if you could do something like?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"Import { fetchUserProfile } from '/@utils'\nImport UserProfile from '@components/UserProfile'\n")),(0,o.kt)("p",null,"Well, to achieve this, we can configure path aliases in ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," so we can conveniently import modules across our application. TypeScript path aliases allow us to create aliases or shortcuts for absolute paths in the application, which we can resolve to. Next.js also automatically supports path aliases, so we don't have to do many configurations. "),(0,o.kt)("p",null,"For example, if you have a file in your project importing a module with a path structure like ",(0,o.kt)("inlineCode",{parentName:"p"},"/components/MUIComponents/ButtonGroup/"),", instead of trying to write an ugly code such as this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ButtonGroup from import ButtonGroup from "../../components/MUIComponents/ButtonGroup";\n\nconst User = () => {\n  return (\n    <>\n      <h1>User Page</h1>\n      <div>\n        <ButtonGroup />\n      </div>\n    </>\n  );\n};\n\nexport default User;\n')),(0,o.kt)("p",null,"We can create a path alias for all files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MUIComponents")," folder for easy access using the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseUrl")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," options in ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"baseUrl": ".",\n"paths": {\n    "@/MUIComponents/*": ["components/MUIComponents/*"]\n},\n...\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"baseUrl")," lets us specify a root URL to use for our imports and ",(0,o.kt)("inlineCode",{parentName:"p"},"paths")," lets us configure path aliases. You can read more about module path aliases ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/module-path-aliases"},"here"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," file instead if you're not using TypeScript in your project.")),(0,o.kt)("p",null,"Now we can use the alias in our application like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import ButtonGroup from "@/MUIComponents/ButtonGroup";\n\nconst User = () => {\n  return (\n    <>\n      <h1>User Page</h1>\n      <div>\n        <ButtonGroup />\n      </div>\n    </>\n  );\n};\n\nexport default User;\n')),(0,o.kt)("p",null,"This looks way better and straightforward."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"disabling-typescript-errors-in-production"},"Disabling Typescript Errors in Production"),(0,o.kt)("p",null,"If you happen to have TypeScript errors while running ",(0,o.kt)("inlineCode",{parentName:"p"},"next build"),", Next.js will fail the build but you can disable the type checks if you wish. "),(0,o.kt)("p",null,"To disable the type checking step, enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreBuildErrors")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.js")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="next.config.js"',title:'"next.config.js"'},"module.exports = {\n  typescript: {\n    // !! WARN !!\n    // Dangerously allow production builds to successfully complete even if\n    // your project has type errors.\n    // !! WARN !!\n    ignoreBuildErrors: true,\n  },\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you really know what you're doing before using this option.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We covered how to get started with ",(0,o.kt)("strong",{parentName:"p"},"TypeScript in your Next.js")," applications. We also talked about the importance and benefits associated with combining TypeScript capabilities with Next.js for a faster and easier application development experience. We hope this article helps you consider integrating ",(0,o.kt)("strong",{parentName:"p"},"TypeScript and Next.js")," in your next applications."))}h.isMDXComponent=!0},2776:(e,t,n)=>{n.p},36514:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/tsconfig-7ede6ee349e822143833e30b2daab1ea.png"}}]);