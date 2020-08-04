(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(97)),i={title:"Introduction",description:"What is Apollo Client and what does it do?"},l={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"What is Apollo Client and what does it do?",source:"@site/docs/index.md",permalink:"/docs/index",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/index.md",version:"next",sidebar:"docs",next:{title:"Migration Guide",permalink:"/docs/migration"}},s=[{value:"Write queries, not code",id:"write-queries-not-code",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Compatible tools",id:"compatible-tools",children:[]},{value:"The Angular toolbox",id:"the-angular-toolbox",children:[]},{value:"GraphQL servers",id:"graphql-servers",children:[]},{value:"Other JavaScript + native platforms",id:"other-javascript--native-platforms",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"write-queries-not-code"},"Write queries, not code"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nasa.gov/mission_pages/apollo/missions/index.html"}),"Apollo")," Client is the ultra-flexible, community driven GraphQL client for Angular, JavaScript, and native platforms. It is designed from the ground up to make it easy to build UI components that fetch data with GraphQL. To get the most value out of Apollo Client, you should use it with one of its view layer integrations. To get started with the Angular integration, go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/basics/setup"}),"setup"),"."),Object(o.b)("p",null,"Apollo Client also has view layer integrations for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/client"}),"all the popular frontend frameworks"),". For the best experience, make sure to use the view integration layer for your frontend framework of choice."),Object(o.b)("p",null,"Apollo Client can be used in any JavaScript frontend where you want to describe your data using GraphQL. It's:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Incrementally adoptable"),", so that you can drop it into an existing JavaScript app and start using GraphQL for just part of your UI."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Universally compatible"),", so that Apollo works with any build setup, any GraphQL server, and any GraphQL schema."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Simple to get started with"),", so you can start loading data right away and learn about advanced features later."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Inspectable and understandable"),", so that you can have great developer tools to understand exactly what is happening in your app."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Built for interactive apps"),", so your users can make changes and see them reflected in the UI immediately."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Small and flexible"),", so you don't get stuff you don't need. The core is under 12kb compressed."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Community driven"),", because Apollo is driven by the community and serves a variety of use cases. Everything is planned and developed in the open.")),Object(o.b)("p",null,"These docs will help you to go from getting started with Apollo to becoming an expert!"),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"The docs are divided into three distinct sections to make it easy to find your way around:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Basics"),", which outline the why and how of using Apollo Client to build your application."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Features"),", which showcase some of the advanced capabilities of Apollo Client that your app may need."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Recipes"),", to isolate and explain how to do common patterns.")),Object(o.b)("p",null,"Getting started is as simple as installing a few libraries from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://npmjs.org"}),"npm"),"! The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/basics/setup"}),"setup")," is a good place to start your adventure with Apollo!"),Object(o.b)("h3",{id:"compatible-tools"},"Compatible tools"),Object(o.b)("p",null,"We want you to love working with Apollo Client, so we work extra hard to make sure it works with the client or server tools you're already using! The maintainers and contributors focus on solving the hard problems around GraphQL caching, request management, and UI updating, and we want that to be available to anyone regardless of their technical requirements and preferences for other parts of the app."),Object(o.b)("h3",{id:"the-angular-toolbox"},"The Angular toolbox"),Object(o.b)("p",null,"Apollo is lovingly designed to work nicely with all of the tools used by today's Angular developers. Here are some in particular:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Angular Schematics"),": Apollo Angular supports ",Object(o.b)("inlineCode",{parentName:"li"},"ng-add")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ng-update")," (migrations soon)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NativeScript"),": Apollo works out of the box in NativeScript."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Angular Router"),": Apollo Client is completely router-independent, which means you can use it with any version of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/angular/angular"}),"Angular Router")," or any other routing library for Angular. It's even easy to set up ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/recipes/server-side-rendering"}),"server-side rendering"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Ionic"),": Apollo works great with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://ionicframework.com/"}),"Ionic Framework")," apps written in Angular")),Object(o.b)("p",null,"If you have a favorite Angular tool, and something in Apollo makes it difficult to integrate, please open an issue and let's work together to make it work nicely and add it to the list!"),Object(o.b)("h3",{id:"graphql-servers"},"GraphQL servers"),Object(o.b)("p",null,"We believe that using GraphQL should be easy and fun. One of the ways Apollo is designed for this is that if you can write your query in GraphiQL, it'll work with Apollo Client! Because it doesn't assume anything beyond the official GraphQL specification, Apollo works with every GraphQL server implementation, for ",Object(o.b)("em",{parentName:"p"},"every")," language. It doesn't impose any requirements on your schema either! If you can send a query to a standard GraphQL server, Apollo can handle it. You can find a list of GraphQL server implementations on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphql.org/code/#server-libraries"}),"graphql.org"),"."),Object(o.b)("h3",{id:"other-javascript--native-platforms"},"Other JavaScript + native platforms"),Object(o.b)("p",null,"This documentation site is written with examples using Angular, but Apollo has an implementation for every client platform:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JavaScript",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/react/"}),"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Akryum/vue-apollo"}),"Vue")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/bgentry/ember-apollo-client"}),"Ember")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aruntk/polymer-apollo"}),"Polymer")))),Object(o.b)("li",{parentName:"ul"},"Native mobile",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/ios/"}),"Native iOS with Swift")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apollographql/apollo-android"}),"Native Android with Java"))))))}p.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?n.a.createElement(h,l(l({ref:t},c),{},{components:a})):n.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);