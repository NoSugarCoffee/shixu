"use strict";(self.webpackChunkshixu=self.webpackChunkshixu||[]).push([[395],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={slug:"Maven Summary",title:"Maven Summary",author:"Shixu",author_title:"Owner",author_image_url:"https://avatars.githubusercontent.com/u/25247325",tags:["maven","java"]},c=void 0,p={permalink:"/Maven Summary",editUrl:"https://github.com/NoSugarCoffee/NoSugarCoffee.github.io/edit/master/blog/MavenSummary.md",source:"@site/blog/MavenSummary.md",title:"Maven Summary",description:"Head Metadata customized title!",date:"2022-01-06T17:30:05.706Z",formattedDate:"January 6, 2022",tags:[{label:"maven",permalink:"/tags/maven"},{label:"java",permalink:"/tags/java"}],readingTime:2.19,truncated:!1,authors:[{name:"Shixu",title:"Owner",imageURL:"https://avatars.githubusercontent.com/u/25247325"}],nextItem:{title:"Mvnd vs Maven \u7684\u4f18\u52bf\u53ca\u4f7f\u7528\u573a\u666f",permalink:"/Mvnd vs Maven \u7684\u4f18\u52bf\u53ca\u4f7f\u7528\u573a\u666f"}},s={authorsImageUrls:[void 0]},u=[{value:"What is Maven",id:"what-is-maven",children:[]},{value:"Lifecycles, phases and (plugin) goals",id:"lifecycles-phases-and-plugin-goals",children:[{value:"Concepts",id:"concepts",children:[]},{value:"Look up phases and goals",id:"look-up-phases-and-goals",children:[]}]},{value:"Direct/Transitive dependency",id:"directtransitive-dependency",children:[]},{value:"Dependency conflict",id:"dependency-conflict",children:[{value:"Dependency mediation",id:"dependency-mediation",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Best practice",id:"best-practice",children:[]},{value:"Commonly used",id:"commonly-used",children:[{value:"Commands",id:"commands",children:[]}]},{value:"Refs",id:"refs",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"Head Metadata customized title!"),(0,l.kt)("meta",{charSet:"utf-8"}),(0,l.kt)("meta",{name:"mvn",content:"summary"})),(0,l.kt)("h1",{id:"maven-summary"},"Maven Summary"),(0,l.kt)("h2",{id:"what-is-maven"},"What is Maven"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/getting-started/index.html#What_is_Maven"},"TL;DR")),(0,l.kt)("h2",{id:"lifecycles-phases-and-plugin-goals"},"Lifecycles, phases and (plugin) goals"),(0,l.kt)("h3",{id:"concepts"},"Concepts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#a-build-lifecycle-is-made-up-of-phases"},"A Build Lifecycle is Made Up of Phases"),". ",(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#a-build-lifecycle-is-made-up-of-phases"},"A Build Phase is Made Up of Plugin Goals"),". A plugin goal represents a specific task")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Similar to gitlab ",(0,l.kt)("inlineCode",{parentName:"p"},"pipelines"),",",(0,l.kt)("inlineCode",{parentName:"p"},"stages")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jobs"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Three built-in build lifecycles: ",(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#default-lifecycle"},"default")," , clean and site")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When we run a phase \u2013 all goals bound to this phase are executed in order. This won't only execute the specified phase but all the preceding phases as well"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"E.g. mvn clean install")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A goal can bound to one or more build phases. A build phase can also have zero or more goals bound to it")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#default-lifecycle-bindings-packaging-ejb-ejb3-jar-par-rar-war"},"default lifecycle bindings"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A goal not bound to any build phase could be executed outside of the build lifecycle by direct invocation")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"E.g. mvn dependency:tree")),(0,l.kt)("h3",{id:"look-up-phases-and-goals"},"Look up phases and goals"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1709625/maven-command-to-list-lifecycle-phases-along-with-bound-goals"},(0,l.kt)("inlineCode",{parentName:"a"},"mvn fr.jcgay.maven.plugins:buildplan-maven-plugin:list"))," to list phases and goals in default lifecycle"),(0,l.kt)("h2",{id:"directtransitive-dependency"},"Direct/Transitive dependency"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A -> B -> C , B, C is A's dependency, B is A's direct dependency, C is A's transitive dependency")),(0,l.kt)("h2",{id:"dependency-conflict"},"Dependency conflict"),(0,l.kt)("p",null,"The different versions of same dependency are all needed by others"),(0,l.kt)("h3",{id:"dependency-mediation"},"Dependency mediation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nearest definition")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A -> B -> C -> D 2.0 and A -> E -> D 1.0  result will be D 1.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First declaration")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// A.xml\n<dependecy>B</dependency>\n<dependecy>C</dependency>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A -> B -> D 2.0 and A -> C -> D 1.0  result will be D 2.0")),(0,l.kt)("h3",{id:"solution"},"Solution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"According dependency mediation if have compatible versions"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-shade-plugin/"},"shade plugin")," if have not uncompatible versions")),(0,l.kt)("h2",{id:"best-practice"},"Best practice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Although transitive dependencies can implicitly include desired dependencies, it is a good practice to explicitly specify the dependencies your source code uses directly. This best practice proves its value especially when the dependencies of your project change their dependencies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use a dependencyManagement section in a parent pom.xml to avoid duplicating dependency information in child projects")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The phases named with hyphenated-words (pre-",(0,l.kt)("em",{parentName:"p"},", post-"),", or process-*) are not usually directly called from the command line. These phases sequence the build, producing intermediate results that are not useful outside the build. In the case of invoking integration-test, the environment may be left in a hanging state"))),(0,l.kt)("h2",{id:"commonly-used"},"Commonly used"),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Help making best practice more achievable: ",(0,l.kt)("inlineCode",{parentName:"p"},"mvn dependency:analyze"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run ut singly: ",(0,l.kt)("inlineCode",{parentName:"p"},"mvn -DfailIfNoTests=false -pl product.profile-service -Dtest=CheckSetHotelValidatorTest -am test"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download artifact: ",(0,l.kt)("inlineCode",{parentName:"p"},"mvn dependency:get -DremoteRepositories=http://repo1.maven.org/maven2/ -DgroupId=com.google.code.gson -DartifactId=gson -Dversion=2.8.8")))),(0,l.kt)("h2",{id:"refs"},"Refs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"https://maven.apache.org/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.baeldung.com/maven-goals-phases"},"https://www.baeldung.com/maven-goals-phases"))))}m.isMDXComponent=!0}}]);