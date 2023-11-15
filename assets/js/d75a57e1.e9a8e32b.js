"use strict";(self.webpackChunkshixu=self.webpackChunkshixu||[]).push([[5395],{9343:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=i(5893),t=i(1151);const l={slug:"Maven Summary",title:"Maven Summary",author:"Shixu",author_title:"Owner",author_image_url:"https://avatars.githubusercontent.com/u/25247325",tags:["maven","java"]},a=void 0,d={permalink:"/Maven Summary",editUrl:"https://github.com/NoSugarCoffee/NoSugarCoffee.github.io/edit/master/blog/MavenSummary.md",source:"@site/blog/MavenSummary.md",title:"Maven Summary",description:"Head Metadata customized title!",date:"2023-11-15T03:56:26.000Z",formattedDate:"November 15, 2023",tags:[{label:"maven",permalink:"/tags/maven"},{label:"java",permalink:"/tags/java"}],readingTime:2.175,hasTruncateMarker:!1,authors:[{name:"Shixu",title:"Owner",imageURL:"https://avatars.githubusercontent.com/u/25247325"}],frontMatter:{slug:"Maven Summary",title:"Maven Summary",author:"Shixu",author_title:"Owner",author_image_url:"https://avatars.githubusercontent.com/u/25247325",tags:["maven","java"]},unlisted:!1,prevItem:{title:"Go \u9519\u8bef\u5904\u7406 - \u6700\u4f73\u5b9e\u8df5",permalink:"/Go error handing"},nextItem:{title:"Mvnd vs Maven",permalink:"/Mvnd vs Maven"}},c={authorsImageUrls:[void 0]},o=[{value:"What is Maven",id:"what-is-maven",level:2},{value:"Lifecycles, phases and (plugin) goals",id:"lifecycles-phases-and-plugin-goals",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Look up phases and goals",id:"look-up-phases-and-goals",level:3},{value:"Direct/Transitive dependency",id:"directtransitive-dependency",level:2},{value:"Dependency conflict",id:"dependency-conflict",level:2},{value:"Dependency mediation",id:"dependency-mediation",level:3},{value:"Solution",id:"solution",level:3},{value:"Best practice",id:"best-practice",level:2},{value:"Commonly used",id:"commonly-used",level:2},{value:"Commands",id:"commands",level:3},{value:"Refs",id:"refs",level:2}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)("title",{children:"Head Metadata customized title!"}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"mvn",content:"summary"})]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-maven",children:"What is Maven"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/getting-started/index.html#What_is_Maven",children:"TL;DR"})}),"\n",(0,s.jsx)(n.h2,{id:"lifecycles-phases-and-plugin-goals",children:"Lifecycles, phases and (plugin) goals"}),"\n",(0,s.jsx)(n.h3,{id:"concepts",children:"Concepts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#a-build-lifecycle-is-made-up-of-phases",children:"A Build Lifecycle is Made Up of Phases"}),". ",(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#a-build-lifecycle-is-made-up-of-phases",children:"A Build Phase is Made Up of Plugin Goals"}),". A plugin goal represents a specific task"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Similar to gitlab ",(0,s.jsx)(n.code,{children:"pipelines"}),",",(0,s.jsx)(n.code,{children:"stages"})," and ",(0,s.jsx)(n.code,{children:"jobs"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Three built-in build lifecycles: ",(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#default-lifecycle",children:"default"})," , clean and site"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When we run a phase \u2013 all goals bound to this phase are executed in order. This won't only execute the specified phase but all the preceding phases as well"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"E.g. mvn clean install"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A goal can bound to one or more build phases. A build phase can also have zero or more goals bound to it"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#default-lifecycle-bindings-packaging-ejb-ejb3-jar-par-rar-war",children:"default lifecycle bindings"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A goal not bound to any build phase could be executed outside of the build lifecycle by direct invocation"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["E.g. mvn dependency",":tree"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"look-up-phases-and-goals",children:"Look up phases and goals"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/1709625/maven-command-to-list-lifecycle-phases-along-with-bound-goals",children:(0,s.jsx)(n.code,{children:"mvn fr.jcgay.maven.plugins:buildplan-maven-plugin:list"})})," to list phases and goals in default lifecycle"]}),"\n",(0,s.jsx)(n.h2,{id:"directtransitive-dependency",children:"Direct/Transitive dependency"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A -> B -> C , B, C is A's dependency, B is A's direct dependency, C is A's transitive dependency"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dependency-conflict",children:"Dependency conflict"}),"\n",(0,s.jsx)(n.p,{children:"The different versions of same dependency are all needed by others"}),"\n",(0,s.jsx)(n.h3,{id:"dependency-mediation",children:"Dependency mediation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Nearest definition"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A -> B -> C -> D 2.0 and A -> E -> D 1.0  result will be D 1.0"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"First declaration"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// A.xml\n<dependecy>B</dependency>\n<dependecy>C</dependency>\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A -> B -> D 2.0 and A -> C -> D 1.0  result will be D 2.0"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"According dependency mediation if have compatible versions"}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.a,{href:"https://maven.apache.org/plugins/maven-shade-plugin/",children:"shade plugin"})," if have not uncompatible versions"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best practice"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Although transitive dependencies can implicitly include desired dependencies, it is a good practice to explicitly specify the dependencies your source code uses directly. This best practice proves its value especially when the dependencies of your project change their dependencies"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use a dependencyManagement section in a parent pom.xml to avoid duplicating dependency information in child projects"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The phases named with hyphenated-words (pre-",(0,s.jsx)(n.em,{children:", post-"}),", or process-*) are not usually directly called from the command line. These phases sequence the build, producing intermediate results that are not useful outside the build. In the case of invoking integration-test, the environment may be left in a hanging state"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"commonly-used",children:"Commonly used"}),"\n",(0,s.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Help making best practice more achievable: ",(0,s.jsx)(n.code,{children:"mvn dependency:analyze"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ut singly: ",(0,s.jsx)(n.code,{children:"mvn -DfailIfNoTests=false -pl product.profile-service -Dtest=CheckSetHotelValidatorTest -am test"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download artifact: ",(0,s.jsx)(n.code,{children:"mvn dependency:get -DremoteRepositories=http://repo1.maven.org/maven2/ -DgroupId=com.google.code.gson -DartifactId=gson -Dversion=2.8.8"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"refs",children:"Refs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://maven.apache.org/",children:"https://maven.apache.org/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.baeldung.com/maven-goals-phases",children:"https://www.baeldung.com/maven-goals-phases"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var s=i(7294);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);