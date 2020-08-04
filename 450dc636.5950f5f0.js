(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{68:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(6),o=(r(0),r(97)),c={title:"Angular CLI"},i={unversionedId:"recipes/angular-cli",id:"recipes/angular-cli",isDocsHomePage:!1,title:"Angular CLI",description:"Setup",source:"@site/docs/recipes/angular-cli.md",permalink:"/docs/recipes/angular-cli",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/recipes/angular-cli.md",version:"next",sidebar:"docs",previous:{title:"Meteor",permalink:"/docs/recipes/meteor"},next:{title:"Apollo Angular Boost migration",permalink:"/docs/recipes/boost-migration"}},l=[{value:"Setup",id:"setup",children:[]},{value:"Proxy",id:"proxy",children:[]}],p={rightToc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"To get started with Apollo and Angular run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"ng add apollo-angular\n")),Object(o.b)("h2",{id:"proxy"},"Proxy"),Object(o.b)("p",null,"If your GraphQL endpoint lives under different host with Angular CLI you can easily define proxy configuration."),Object(o.b)("p",null,"Take for example ",Object(o.b)("inlineCode",{parentName:"p"},"api.example.com/graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "/graphql": {\n    "target": "http://api.example.com"\n  }\n}\n')),Object(o.b)("p",null,"Create a json file (",Object(o.b)("inlineCode",{parentName:"p"},"proxy.config.json")," for example) with that configuration."),Object(o.b)("p",null,"To run server use ",Object(o.b)("inlineCode",{parentName:"p"},"--proxy-config")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"ng serve --proxy-config <path to file>\n")),Object(o.b)("p",null,"An example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"ng serve --proxy-config proxy.config.json\n")))}u.isMDXComponent=!0},97:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=t,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(d,i(i({ref:n},p),{},{components:r})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);