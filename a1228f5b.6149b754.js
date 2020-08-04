(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(97)),i={title:"State management",description:"Managing your local and remote state in a GraphQL world"},l={unversionedId:"guides/state-management",id:"guides/state-management",isDocsHomePage:!1,title:"State management",description:"Managing your local and remote state in a GraphQL world",source:"@site/docs/guides/state-management.md",permalink:"/docs/guides/state-management",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/guides/state-management.md",version:"next",sidebar:"docs",previous:{title:"Static Typing",permalink:"/docs/features/static-typing"},next:{title:"Testing Apollo in Angular",permalink:"/docs/guides/testing"}},s=[{value:"Colocate queries with components",id:"colocate-queries-with-components",children:[]},{value:"Move data transformation to the backend",id:"move-data-transformation-to-the-backend",children:[]},{value:"Combine local and remote data",id:"combine-local-and-remote-data",children:[]}],c={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Not only is state management one of the most important aspects of building the front-end for your application, it's also one of the most challenging. With a REST and NGRX / Redux workflow, you're writing action creators, reducers, and selectors for each network request. For a production-level app, you're also juggling several middleware packages for features like optimistic updates and manually normalizing your data."),Object(r.b)("p",null,"With a GraphQL and Apollo workflow, you just write queries and let Apollo Client take care of the rest. Apollo Client normalizes and caches your data out of the box with zero configuration. It also enables you to execute complicated features such as optimistic UI, polling, and pagination with only a few lines of code."),Object(r.b)("p",null,"If we're using Apollo Client to manage our remote data, then what do we do with local data such as boolean flags and device API information that we'd like to access globally? This is where ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/basics/local-state"}),Object(r.b)("inlineCode",{parentName:"a"},"Apollo Client"))," comes in, our solution for local state management that allows you to use your Apollo cache as the single source of truth for data in your application. We recommend managing all of your local and remote data with Apollo Client so GraphQL becomes a unified interface to all of your application's data."),Object(r.b)("p",null,"The following sections outline some tips to help you make the most of your transition to managing all of your state with Apollo Client."),Object(r.b)("h2",{id:"colocate-queries-with-components"},"Colocate queries with components"),Object(r.b)("p",null,"When you first start using ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service for your GraphQL data, it can be tempting to dump all of your queries in one file similar to how developers using Redux put all of their reducers in a single file. Instead, we recommend that you colocate your GraphQL queries with the components that are using them. One of the greatest strengths of GraphQL is its declarative approach to data fetching, which you lose when you have to switch back to another file in order to determine what the shape of your data prop looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),'const GET_DOG_PHOTO = gql`\n  query dog($breed: String!) {\n    dog(breed: $breed) {\n      id\n      displayImage\n    }\n  }\n`;\n\n@Component({\n  selector: \'dog-photo\',\n  template: `\n    <img *ngIf="data" [src]="data.dog.displayImage" />\n  `,\n})\nclass DogPhotoComponent {\n  @Input()\n  breed: string;\n\n  data: any;\n\n  constructor(apollo: Apollo) {\n    apollo\n      .watchQuery({\n        query: GET_DOG_PHOTO,\n        variables: {breed},\n      })\n      .valueChanges.subscribe(result => {\n        this.data = result.data;\n      });\n  }\n}\n')),Object(r.b)("p",null,"In this example, we place our ",Object(r.b)("inlineCode",{parentName:"p"},"GET_DOG_PHOTO")," query next to our ",Object(r.b)("inlineCode",{parentName:"p"},"DogPhoto")," component and wrap it with the ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," function."),Object(r.b)("h2",{id:"move-data-transformation-to-the-backend"},"Move data transformation to the backend"),Object(r.b)("p",null,"Your GraphQL schema should always reflect how you're consuming the data on the front-end. This is why we recommend that product teams own the design of their GraphQL schema. Shifting to this mentality is a bit of a departure from REST, where front-end developers consume APIs dictated by the backend team and often have to filter and sort the data into the shape their UI components expect."),Object(r.b)("p",null,"If you find yourself sorting or filtering the data you receive back from your GraphQL API, it's probably a sign that you need to move that logic to your resolvers instead. Moving filtering and sorting logic to the backend ensures that you can share it across platforms easily instead of duplicating these efforts for every client."),Object(r.b)("h2",{id:"combine-local-and-remote-data"},"Combine local and remote data"),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"local state"),", you can add virtual fields to your remote data seamlessly and query them from your components by specifying a ",Object(r.b)("inlineCode",{parentName:"p"},"@client")," directive. In this example, we\u2019re querying the client-only field isLiked alongside our server data. Your components are made up of local and remote data, now your queries can be too! This is one of the main advantages for using Apollo Client to manage all of your application's data."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-graphql"}),"const GET_DOG = gql`\n  query getDogByBreed($breed: String!) {\n    dog(breed: $breed) {\n      images {\n        url\n        id\n        isLiked @client\n      }\n    }\n  }\n`;\n")))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);