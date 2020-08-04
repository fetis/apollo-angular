(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(2),a=t(6),o=(t(0),t(97)),i={title:"Queries"},l={unversionedId:"basics/queries",id:"basics/queries",isDocsHomePage:!1,title:"Queries",description:"On this page, you can learn how to use Apollo to attach GraphQL query results to",source:"@site/docs/basics/queries.md",permalink:"/docs/basics/queries",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/basics/queries.md",version:"next",sidebar:"docs",previous:{title:"Setup and options",permalink:"/docs/basics/setup"},next:{title:"Mutations",permalink:"/docs/basics/mutations"}},s=[{value:"Basic Queries",id:"basic-queries",children:[{value:"What is QueryRef",id:"what-is-queryref",children:[]}]},{value:"Providing <code>options</code>",id:"providing-options",children:[]},{value:"Using with AsyncPipe",id:"using-with-asyncpipe",children:[]},{value:"Using with RxJS",id:"using-with-rxjs",children:[]}],p={rightToc:s};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"On this page, you can learn how to use Apollo to attach GraphQL query results to\nyour Angular UI. This guide assumes some familiarity with GraphQL itself. You\ncan read about GraphQL queries themselves in detail at\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://graphql.org/docs/queries/"}),"graphql.org"),"."),Object(o.b)("p",null,"One of our core values is \"it's just GraphQL.\" When using Apollo Client, you\ndon't have to learn anything special about the query syntax, since everything is\njust standard GraphQL. Anything you can type into the GraphQL query IDE, you\ncan also put into your Apollo Client code."),Object(o.b)("h2",{id:"basic-queries"},"Basic Queries"),Object(o.b)("p",null,"When we are using a basic query, we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," method in a\nvery simple way. We simply need to parse our query into a GraphQL document using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-tag")," library."),Object(o.b)("p",null,"For instance, in GitHunt, we want to display the current user (if logged in) in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Component, OnInit, OnDestroy } from '@angular/core';\nimport { Subscription } from 'rxjs';\nimport { Apollo } from 'apollo-angular';\nimport gql from 'graphql-tag';\n\n// We use the gql tag to parse our query string into a query document\nconst CurrentUserForProfile = gql`\n  query CurrentUserForProfile {\n    currentUser {\n      login\n      avatar_url\n    }\n  }\n`;\n\n@Component({ ... })\nclass ProfileComponent implements OnInit, OnDestroy {\n  loading: boolean;\n  currentUser: any;\n\n  private querySubscription: Subscription;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.querySubscription = this.apollo.watchQuery<any>({\n      query: CurrentUserForProfile\n    })\n      .valueChanges\n      .subscribe(({ data, loading }) => {\n        this.loading = loading;\n        this.currentUser = data.currentUser;\n      });\n  }\n\n  ngOnDestroy() {\n    this.querySubscription.unsubscribe();\n  }\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"watchQuery")," method returns a ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRef")," object which has the ",Object(o.b)("inlineCode",{parentName:"p"},"valueChanges"),"\nproperty that is an ",Object(o.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(o.b)("p",null,"We can see that the result object contains ",Object(o.b)("inlineCode",{parentName:"p"},"loading"),', a Boolean indicating if\nthe query is "in-flight." The observable will only emit once when the query is\ncomplete, and ',Object(o.b)("inlineCode",{parentName:"p"},"loading")," will be set to false unless you set the ",Object(o.b)("inlineCode",{parentName:"p"},"watchQuery"),"\nparameters ",Object(o.b)("inlineCode",{parentName:"p"},"notifyOnNetworkStatusChange")," to true. Once\nthe query has completed, it will also contain a ",Object(o.b)("inlineCode",{parentName:"p"},"data")," object with\n",Object(o.b)("inlineCode",{parentName:"p"},"currentUser"),", the field we've picked out in ",Object(o.b)("inlineCode",{parentName:"p"},"CurrentUserForProfile"),"."),Object(o.b)("p",null,"We can expect the ",Object(o.b)("inlineCode",{parentName:"p"},"data.currentUser")," to change as the logged-in-ness of the\nclient and what it knows about the current user changes over time. That\ninformation is stored in Apollo Client's global cache, so if some other query\nfetches new information about the current user, this component will update to\nremain consistent."),Object(o.b)("p",null,"It's also possible to fetch data only once. The ",Object(o.b)("inlineCode",{parentName:"p"},"query")," method of ",Object(o.b)("inlineCode",{parentName:"p"},"Apollo"),"\nservice returns an ",Object(o.b)("inlineCode",{parentName:"p"},"Observable")," that also resolves with the same result as\nabove."),Object(o.b)("h3",{id:"what-is-queryref"},"What is QueryRef"),Object(o.b)("p",null,"As you know, ",Object(o.b)("inlineCode",{parentName:"p"},"Apollo.query")," method returns an Observable that emits a result,\njust once. ",Object(o.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," also does the same, except it can emit multiple\nresults. (The GraphQL query itself is still only sent once, but the ",Object(o.b)("inlineCode",{parentName:"p"},"watchQuery"),"\nobservable can also update if, for example, another query causes the object to\nbe updated within Apollo Client's global cache.)"),Object(o.b)("p",null,"So why doesn't ",Object(o.b)("inlineCode",{parentName:"p"},"Apollo.watchQuery")," expose an Observable?"),Object(o.b)("p",null,"Apollo service and ApolloClient share pretty much the same API. It makes things\neasy to understand and use. No reason to change it."),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloClient.watchQuery")," returns an Observable, but not a standard one, it\ncontains many useful methods (like ",Object(o.b)("inlineCode",{parentName:"p"},"refetch()"),") to manipulate the watched query.\nA normal Observable, has only one method, ",Object(o.b)("inlineCode",{parentName:"p"},"subscribe()"),"."),Object(o.b)("p",null,"To use that Apollo's Observable in RxJS, we would have to drop those methods.\nSince they are necessary to use Apollo to its full potential, we had to come up\nwith a solution."),Object(o.b)("p",null,"This is why we created ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRef"),"."),Object(o.b)("p",null,"The API of ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRef")," is very simple. It has the same methods as the Apollo\nObservable we talked about. To subscribe to query results, you have to access its\n",Object(o.b)("inlineCode",{parentName:"p"},"valueChanges")," property which exposes a clean RxJS Observable."),Object(o.b)("p",null,"It's worth mentioning that ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRef")," accepts two generic types. More about that in\n)."),Object(o.b)("h2",{id:"providing-options"},"Providing ",Object(o.b)("inlineCode",{parentName:"h2"},"options")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"watchQuery")," and ",Object(o.b)("inlineCode",{parentName:"p"},"query")," methods expect one argument, an object with options. If\nyou want to configure the query, you can provide any available option in the\nsame object where the ",Object(o.b)("inlineCode",{parentName:"p"},"query")," key lives."),Object(o.b)("p",null,"If your query takes variables, this is the place to pass them in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// Suppose our profile query took an avatar size\nconst CurrentUserForProfile = gql`\n  query CurrentUserForProfile($avatarSize: Int!) {\n    currentUser {\n      login\n      avatar_url(avatarSize: $avatarSize)\n    }\n  }\n`;\n\n@Component({\n  template: `\n    Login: {{currentUser?.profile}}\n  `,\n})\nclass ProfileComponent implements OnInit, OnDestroy {\n  currentUser: any;\n  private querySubscription: Subscription;\n  ngOnInit() {\n    this.querySubscription = this.apollo\n      .watchQuery({\n        query: CurrentUserForProfile,\n        variables: {\n          avatarSize: 100,\n        },\n      })\n      .valueChanges.subscribe(({data}) => {\n        this.currentUser = data.currentUser;\n      });\n  }\n  ngOnDestroy() {\n    this.querySubscription.unsubscribe();\n  }\n}\n")),Object(o.b)("h2",{id:"using-with-asyncpipe"},"Using with AsyncPipe"),Object(o.b)("p",null,"In Angular, the simplest way of displaying data that comes from Observable is to\nput ",Object(o.b)("inlineCode",{parentName:"p"},"AsyncPipe")," on top of the property inside the UI. You can also achieve this\nwith Apollo."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Using async pipe more than once in your template will trigger the query\nfor each pipe. To avoid this situation, subscribe to the data in the component,\nand display the data from the component's property.")),Object(o.b)("p",null,"An Observable returned by ",Object(o.b)("inlineCode",{parentName:"p"},"watchQuery().valueChanges")," holds the actual result\nunder the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," field, so you can not directly access one of the properties of\nthat object."),Object(o.b)("p",null,"This is why we created ",Object(o.b)("inlineCode",{parentName:"p"},"SelectPipe"),". The only argument it receives is the name\nof the property you want to get from ",Object(o.b)("inlineCode",{parentName:"p"},"data"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import {Component, OnInit} from '@angular/core';\nimport {Apollo} from 'apollo-angular';\nimport {Observable} from 'rxjs';\nimport gql from 'graphql-tag';\n\nconst FeedQuery = gql`\n  query Feed {\n    currentUser {\n      login\n    }\n    feed {\n      createdAt\n      score\n    }\n  }\n`;\n\n@Component({\n  template: `\n    <ul *ngFor=\"let entry of data | async | select: 'feed'\">\n      Score: {{entry.score}}\n    </ul>\n  `,\n})\nclass FeedComponent implements OnInit {\n  data: Observable<any>;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.data = this.apollo.watchQuery({query: FeedQuery}).valueChanges;\n  }\n}\n")),Object(o.b)("p",null,"The result of the query has this structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "currentUser": { ... },\n    "feed": [ ... ]\n  }\n}\n')),Object(o.b)("p",null,"Without using ",Object(o.b)("inlineCode",{parentName:"p"},"SelectPipe"),", you would get the whole object instead of only the\n",Object(o.b)("inlineCode",{parentName:"p"},"data.feed"),"."),Object(o.b)("h2",{id:"using-with-rxjs"},"Using with RxJS"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Apollo")," is compatible with RxJS by using same Observable so it can be used with\noperators."),Object(o.b)("p",null,"What's really interesting is that, because of this, you can avoid using ",Object(o.b)("inlineCode",{parentName:"p"},"SelectPipe"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import {Component, OnInit} from '@angular/core';\nimport {Apollo} from 'apollo-angular';\nimport {Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\nimport gql from 'graphql-tag';\n\nconst FeedQuery = gql`\n  query Feed {\n    currentUser {\n      login\n    }\n    feed {\n      createdAt\n      score\n    }\n  }\n`;\n\n@Component({\n  template: `\n    <ul *ngFor=\"let entry of data | async\">\n      Score: {{entry.score}}\n    </ul>\n  `,\n})\nclass FeedComponent implements OnInit {\n  data: Observable<any>;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    this.data = this.apollo\n      .watchQuery({query: FeedQuery})\n      .valueChanges.pipe(map(({data}) => data.feed));\n  }\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"map")," operator we are using here is provided by the RxJS ",Object(o.b)("inlineCode",{parentName:"p"},"Observable")," which\nserves as the basis for the ",Object(o.b)("inlineCode",{parentName:"p"},"Observable"),"."),Object(o.b)("p",null,"To be able to use the ",Object(o.b)("inlineCode",{parentName:"p"},"map")," operator (and most others like ",Object(o.b)("inlineCode",{parentName:"p"},"switchMap"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"filter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"merge"),", ...) these have to be explicitly imported as done in the\nexample: ",Object(o.b)("inlineCode",{parentName:"p"},"import {map} from 'rxjs/operators'"),"."))}c.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),c=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return t?a.a.createElement(d,l(l({ref:n},p),{},{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);