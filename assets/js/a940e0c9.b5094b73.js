"use strict";(self.webpackChunkshixu=self.webpackChunkshixu||[]).push([[311],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),k=i,m=c["".concat(l,".").concat(k)]||c[k]||u[k]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},121:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return k}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],p={slug:"Go \u7684\u4f9d\u8d56\u6ce8\u5165",title:"Go \u7684\u4f9d\u8d56\u6ce8\u5165",author:"Shixu",author_title:"Translator",author_image_url:"https://avatars.githubusercontent.com/u/25247325",tags:["go","DI"]},l=void 0,s={permalink:"/translation/Go \u7684\u4f9d\u8d56\u6ce8\u5165",source:"@site/translation/go\u4f9d\u8d56\u6ce8\u5165.md",title:"Go \u7684\u4f9d\u8d56\u6ce8\u5165",description:"\u8fc7\u53bb\u51e0\u5e74\u91cc\u6211\u4e00\u76f4\u4f7f\u7528Java\u3002\u6700\u8fd1\uff0c\u7528Go\u5efa\u7acb\u4e86\u4e00\u4e2a\u5c0f\u9879\u76ee\uff0c\u7136\u800c Go \u751f\u6001\u7cfb\u7edf\u4e2d\u4f9d\u8d56\u6ce8\u5165\uff08DI\uff09\u529f\u80fd\u7f3a\u4e4f\u8ba9\u6211\u9707\u60ca\u3002\u4e8e\u662f\u6211\u51b3\u5b9a\u5c1d\u8bd5\u4f7f\u7528 Uber \u7684 dig \u5e93\u6765\u6784\u5efa\u6211\u7684\u9879\u76ee\uff0c\u671f\u95f4\u611f\u89e6\u9887\u6df1\u3002",date:"2022-01-01T09:10:58.872Z",formattedDate:"January 1, 2022",tags:[{label:"go",permalink:"/translation/tags/go"},{label:"DI",permalink:"/translation/tags/di"}],readingTime:13.65,truncated:!1,authors:[{name:"Shixu",title:"Translator",imageURL:"https://avatars.githubusercontent.com/u/25247325"}]},d={authorsImageUrls:[void 0]},u=[{value:"DI \u7684\u7b80\u8981\u6982\u8ff0",id:"di-\u7684\u7b80\u8981\u6982\u8ff0",children:[]},{value:"\u793a\u4f8b\u7a0b\u5e8f",id:"\u793a\u4f8b\u7a0b\u5e8f",children:[]},{value:"\u4f20\u7edf\u7684 main\uff08\uff09",id:"\u4f20\u7edf\u7684-main",children:[]},{value:"\u521b\u5efa\u5bb9\u5668",id:"\u521b\u5efa\u5bb9\u5668",children:[]},{value:"\u8f83\u597d\u7684 main\uff08\uff09\u5199\u6cd5",id:"\u8f83\u597d\u7684-main\u5199\u6cd5",children:[]},{value:"\u4e00\u4e2a\u503c\u5f97\u4f20\u64ad\u7684\u60f3\u6cd5",id:"\u4e00\u4e2a\u503c\u5f97\u4f20\u64ad\u7684\u60f3\u6cd5",children:[]}],c={toc:u};function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8fc7\u53bb\u51e0\u5e74\u91cc\u6211\u4e00\u76f4\u4f7f\u7528Java\u3002\u6700\u8fd1\uff0c\u7528Go\u5efa\u7acb\u4e86\u4e00\u4e2a\u5c0f\u9879\u76ee\uff0c\u7136\u800c Go \u751f\u6001\u7cfb\u7edf\u4e2d\u4f9d\u8d56\u6ce8\u5165\uff08DI\uff09\u529f\u80fd\u7f3a\u4e4f\u8ba9\u6211\u9707\u60ca\u3002\u4e8e\u662f\u6211\u51b3\u5b9a\u5c1d\u8bd5\u4f7f\u7528 Uber \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber-go/dig"},"dig")," \u5e93\u6765\u6784\u5efa\u6211\u7684\u9879\u76ee\uff0c\u671f\u95f4\u611f\u89e6\u9887\u6df1\u3002"),(0,a.kt)("p",null,"\u6211\u53d1\u73b0 DI \u5e2e\u52a9\u6211\u89e3\u51b3\u4e86\u4e4b\u524d\u5728 Go \u5e94\u7528\u7a0b\u5e8f\u4e2d\u9047\u5230\u7684\u5f88\u591a\u95ee\u9898 - \u8fc7\u5ea6\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," \u51fd\u6570\uff0c\u6ee5\u7528\u5168\u5c40\u53d8\u91cf\u548c\u590d\u6742\u7684\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u7b49\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u5c06\u4ecb\u7ecd DI \uff0c\u7136\u540e\u5728\u4f7f\u7528 DI \u6846\u67b6\uff08\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"dig")," \u5e93\uff09\u524d\u540e\u5199\u4e00\u4e9b\u4f8b\u5b50\u505a\u5bf9\u6bd4\u3002"),(0,a.kt)("h2",{id:"di-\u7684\u7b80\u8981\u6982\u8ff0"},"DI \u7684\u7b80\u8981\u6982\u8ff0"),(0,a.kt)("p",null,"\u4f9d\u8d56\u6ce8\u5165\u662f\u6307\u4f60\u7684\u7ec4\u4ef6\uff08\u901a\u5e38\u5728 go \u4e2d\u662f struct \uff09\u5728\u521b\u5efa\u65f6\uff0c\u5c31\u5e94\u8be5\u83b7\u53d6\u5b83\u4eec\u4f9d\u8d56\u5173\u7cfb\u7684\u4e00\u79cd\u601d\u60f3\u3002\u8fd9\u4e0e\u90a3\u4e9b\u7ec4\u4ef6\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\uff0c\u5c31\u5efa\u7acb\u81ea\u8eab\u4f9d\u8d56\u5173\u7cfb\u7684\u53cd\u5173\u8054\u6a21\u5f0f\u4e0d\u540c \u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u4f60\u6784\u9020",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u7ed3\u6784\u4f53\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u5728\u521d\u59cb\u5316\u671f\u95f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Server struct {\n  config *Config\n}\nfunc New() *Server {\n  return &Server{\n    config: buildMyConfigSomehow(),\n  }\n}\n")),(0,a.kt)("p",null,"\u770b\u8d77\u6765\u5f88\u65b9\u4fbf\u3002\u8c03\u7528\u8005\u751a\u81f3\u4e0d\u5fc5\u77e5\u9053 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u9700\u8981\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002\u8fd9\u4e9b\u90fd\u88ab\u6211\u4eec\u7684\u51fd\u6570\u9690\u85cf\u8d77\u6765\u4e86\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u8fd9\u5b58\u5728\u4e00\u4e9b\u7f3a\u70b9\u3002\u9996\u5148\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u6539\u53d8\u6211\u4eec ",(0,a.kt)("inlineCode",{parentName:"p"},"Config"),"  \u7684\u6784\u5efa\u65b9\u5f0f\uff0c\u6211\u4eec\u4e0d\u5f97\u4e0d\u6539\u53d8\u6240\u6709\u8c03\u7528\u6784\u5efa\u4ee3\u7801\u7684\u5730\u65b9\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"buildMyConfigSomehow")," \u51fd\u6570\u73b0\u5728\u9700\u8981\u4e00\u4e2a\u53c2\u6570\u3002\u6bcf\u4e2a\u8c03\u7528\u5904\u90fd\u9700\u8981\u8bbf\u95ee\u8be5\u53c2\u6570\u5e76\u9700\u8981\u5c06\u5176\u4f20\u9012\u7ed9\u6784\u9020\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u8fd9\u4f7f\u5f97\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u51fd\u6570\u53d8\u5f97\u5341\u5206\u9ebb\u70e6\uff0c\u6211\u4eec\u5f97\u4ee5\u67d0\u79cd\u65b9\u6cd5\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," \u51fd\u6570\u7684\u5185\u90e8\uff0c\u5e76\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002"),(0,a.kt)("p",null,"\u8fd9\u662f DI \u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Server struct {\n  config *Config\n}\nfunc New(config *Config) *Server {\n  return &Server{\n    config: config,\n  }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u5206\u79bb  \u3002\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u903b\u8f91\u521b\u9020  ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u7136\u540e\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"New")," \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u8fd9\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u62df\u9014\u5f84 \u3002\u53ea\u8981  ",(0,a.kt)("inlineCode",{parentName:"p"},"New")," \u5b9e\u73b0\u4e86\u6211\u4eec\u7684\u63a5\u53e3\uff0c\u5c31\u53ef\u4ee5\u4f20\u9012\u4efb\u4f55\u6211\u4eec\u60f3\u8981\u7684\u4e1c\u897f\u3002\u8fd9\u4f7f\u5f97\u6d4b\u8bd5\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u63a5\u53e3\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server"),"  \u5f88\u7b80\u5355\u3002"),(0,a.kt)("p",null,"\u4ee4\u4eba\u75db\u82e6\u7684\u662f\u5728\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u4e4b\u524d\u624b\u52a8\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u3002\u6211\u4eec\u5728\u8fd9\u91cc\u521b\u5efa\u4e86\u4e00\u4e2a\u4f9d\u8d56\u5173\u7cfb \u2013  \u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"Config,")," \u6240\u4ee5\u9700\u8981\u9996\u5148\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Config"),"  \u3002\u5728\u771f\u6b63\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u4f1a\u53d8\u5f97\u66f4\u52a0\u590d\u6742\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u5b8c\u6210\u5176\u5de5\u4f5c\u6240\u9700\u7684\u7ec4\u4ef6\u95f4\u7684\u590d\u6742\u903b\u8f91 \u3002"),(0,a.kt)("p",null,"\u8fd9\u662f DI \u6846\u67b6\u53ef\u4ee5\u63d0\u4f9b\u5e2e\u52a9\u7684\u5730\u65b9\u3002 DI \u6846\u67b6\u901a\u5e38\u63d0\u4f9b\u4e24\u4e2a\u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u201c\u63d0\u4f9b\u201d\u65b0\u7ec4\u4ef6\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u8fd9\u544a\u8bc9 DI \u6846\u67b6\u4e00\u65e6\u4f60\u6709\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u8fd8\u9700\u8981\u5176\u4ed6\u4ec0\u4e48\u7ec4\u4ef6\uff08\u4f9d\u8d56\u5173\u7cfb\uff09\u4ee5\u53ca\u5982\u4f55\u53bb\u6784\u5efa\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u201c\u68c0\u7d22\u201d\u6784\u5efa\u7ec4\u4ef6\u3002")),(0,a.kt)("p",null,"DI \u6846\u67b6\u901a\u5e38\u57fa\u4e8e\u60a8\u544a\u8bc9\u5b83\u7684\u201c providers \u201d\u6784\u5efa\u4f9d\u8d56\u56fe\u5e76\u786e\u5b9a\u5982\u4f55\u6784\u5efa\u5bf9\u8c61\u3002\u8fd9\u5728\u6ca1\u6709\u5177\u4f53\u4f8b\u5b50\u7684\u60c5\u51b5\u4e0b\u5f88\u96be\u7406\u89e3\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4e2d\u7b49\u5927\u5c0f\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b\u7a0b\u5e8f"},"\u793a\u4f8b\u7a0b\u5e8f"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u770bhttp\u670d\u52a1\u5668\u7aef\u7684\u4ee3\u7801 \uff1a\u5ba2\u6237\u7aef\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," \u65b9\u5f0f\u8bf7\u6c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"/people")," \u8def\u5f84\u65f6\u5e76\u8fd4\u56de JSON \u3002\u6211\u4eec\u5c06\u4e00\u6b65\u4e00\u6b65\u5448\u73b0\u4ee3\u7801\uff0c\u4e3a\u7b80\u5355\u8d77\u89c1\uff0c\u5b83\u4eec\u90fd\u5b58\u5728\u4e8e\u540c\u4e00\u4e2a\u5305\u4e2d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"\uff09\u3002\u8bf7\u52ff\u5728\u771f\u6b63\u7684 Go \u7a0b\u5e8f\u4e2d\u6267\u884c\u6b64\u64cd\u4f5c\u3002\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/drewolson/go_di_example"},"\u6b64\u5904"),"\u627e\u5230\u6b64\u793a\u4f8b\u7684\u5b8c\u6574\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"  \u3002\u4ec5\u6709\u4e00\u4e9b\u88ab JSON \u6807\u7b7e\u6807\u8bb0\u7684\u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Person struct {\n  Id   int    `json:"id"`\n  Name string `json:"name"`\n  Age  int    `json:"age"`\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Id"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Age")," \u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u770b\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u7c7b\u4f3c\uff0c\u5b83\u6ca1\u6709\u4f9d\u8d56\u5173\u7cfb\u3002\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u4e0d\u540c\u7684\u662f\uff0c\u6211\u4eec\u5c06\u63d0\u4f9b\u6784\u9020\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n  Enabled      bool\n  DatabasePath string\n  Port         string\n}\nfunc NewConfig() *Config {\n  return &Config{\n    Enabled:      true,\n    DatabasePath: "./example.db",\n    Port:         "8000",\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Enabled")," \u8868\u793a\u7a0b\u5e8f\u662f\u5426\u8fd4\u56de\u771f\u5b9e\u6570\u636e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"DatabasePath")," \u8868\u793a\u6570\u636e\u5e93\u7684\u5730\u5740\uff08\u4f7f\u7528 sqlite \uff09\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Port")," \u8868\u793a\u670d\u52a1\u5668\u8fd0\u884c\u7684\u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u4e0b\u65b9\u51fd\u6570\u7528\u6765\u6253\u5f00\u6570\u636e\u5e93\u8fde\u63a5\u3002\u5b83\u4f9d\u8d56\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u5e76\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"*sql.DB")," \u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository"),"\u3002\u6b64\u7ed3\u6784\u8d1f\u8d23\u4ece\u6570\u636e\u5e93\u4e2d\u63d0\u53d6\u6570\u636e\u5e76\u53cd\u5e8f\u5217\u5316\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type PersonRepository struct {\n  database *sql.DB\n}\nfunc (repository *PersonRepository) FindAll() []*Person {\n  rows, _ := repository.database.Query(\n    `SELECT id, name, age FROM people;`\n  )\n  defer rows.Close()\n  people := []*Person{}\n  for rows.Next() {\n    var (\n      id   int\n      name string\n      age  int\n    )\n    rows.Scan(&id, &name, &age)\n    people = append(people, &Person{\n      Id:   id,\n      Name: name,\n      Age:  age,\n    })\n  }\n  return people\n}\nfunc NewPersonRepository(database *sql.DB) *PersonRepository {\n  return &PersonRepository{database: database}\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository"),"\u7684\u6784\u5efa\u9700\u8981\u6570\u636e\u5e93\u8fde\u63a5\u3002\u5b83\u6709\u4e00\u4e2a\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"FindAll"),"\uff0c\u6b64\u51fd\u6570\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u5e76\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u5217\u8868\u3002"),(0,a.kt)("p",null,"\u8981\u5728 HTTP \u670d\u52a1\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository")," \u4e4b\u95f4\u63d0\u4f9b\u4e00\u5c42\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonService")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type PersonService struct {\n  config     *Config\n  repository *PersonRepository\n}\nfunc (service *PersonService) FindAll() []*Person {\n  if service.config.Enabled {\n    return service.repository.FindAll()\n  }\n  return []*Person{}\n}\nfunc NewPersonService(config *Config, repository *PersonRepository)\n*PersonService {\n  return &PersonService{config: config, repository: repository}\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonService")," \u4f9d\u8d56\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository")," \u3002\u5b83\u6709\u4e00\u4e2a\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"FindAll")," \uff0c\u5982\u679c\u542f\u7528\u4e86\u5e94\u7528\u7a0b\u5e8f\uff0c\u5219\u4f1a\u6709\u6761\u4ef6\u5730\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository")," \u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5f97\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u3002\u8d1f\u8d23\u8fd0\u884c HTTP \u670d\u52a1\u5668\u5e76\u5c06\u9002\u5f53\u7684\u8bf7\u6c42\u59d4\u6258\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonService")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Server struct {\n  config        *Config\n  personService *PersonService\n}\nfunc (s *Server) Handler() http.Handler {\n  mux := http.NewServeMux()\n  mux.HandleFunc("/people", s.people)\n  return mux\n}\nfunc (s *Server) Run() {\n  httpServer := &http.Server{\n    Addr:    ":" + s.config.Port,\n    Handler: s.Handler(),\n  }\n  httpServer.ListenAndServe()\n}\nfunc (s *Server) people(w http.ResponseWriter, r *http.Request) {\n  people := s.personService.FindAll()\n  bytes, _ := json.Marshal(people)\n  w.Header().Set("Content-Type", "application/json")\n  w.WriteHeader(http.StatusOK)\n  w.Write(bytes)\n}\nfunc NewServer(config *Config, service *PersonService) *Server {\n  return &Server{\n    config:        config,\n    personService: service,\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u53d6\u51b3\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonService")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002"),(0,a.kt)("p",null,"\u597d\u7684\uff0c\u6211\u4eec\u4e86\u89e3\u4e86\u7cfb\u7edf\u7684\u6240\u6709\u7ec4\u4ef6\u3002\u73b0\u5728\u6211\u4eec\u8be5\u5982\u4f55\u5728\u5b9e\u9645\u4e2d\u521d\u59cb\u5316\u5b83\u4eec\u5e76\u542f\u52a8\u6211\u4eec\u7684\u7cfb\u7edf\uff1f"),(0,a.kt)("h2",{id:"\u4f20\u7edf\u7684-main"},"\u4f20\u7edf\u7684 main\uff08\uff09"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u7528\u4f20\u7edf\u65b9\u5f0f\u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func main() {\n  config := NewConfig()\n  db, err := ConnectDatabase(config)\n  if err != nil {\n    panic(err)\n  }\n  personRepository := NewPersonRepository(db)\n  personService := NewPersonService(config, personRepository)\n  server := NewServer(config, personService)\n  server.Run()\n}\n")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002\u7136\u540e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u521b\u5efa\u6570\u636e\u5e93\u8fde\u63a5\u3002\u4ece\u800c\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"PersonService")," \u3002\u6700\u540e\uff0c\u518d\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u5e76\u8fd0\u884c\u5b83\u3002"),(0,a.kt)("p",null,"\u8fd9\u6709\u4e9b\u590d\u6742\u3002\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u968f\u7740\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u53d8\u5f97\u590d\u6742\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u7684\u590d\u6742\u6027\u4e5f\u5c06\u7ee7\u7eed\u589e\u957f\u3002\u6bcf\u6b21\u6211\u4eec\u5411\u4efb\u4f55\u7ec4\u4ef6\u6dfb\u52a0\u65b0\u7684\u4f9d\u8d56\u65f6\uff0c\u90fd\u5fc5\u987b\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u4e2d\u7684\u6392\u5e8f\u548c\u903b\u8f91\u6765\u53cd\u6620\u8be5\u4f9d\u8d56\uff0c\u4ee5\u6784\u5efa\u8be5\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u80fd\u5df2\u7ecf\u731c\u5230\uff0c\u4f9d\u8d56\u6ce8\u5165\u6846\u67b6\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u4e00\u8d77\u6765\u770b\u770b\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u5bb9\u5668"},"\u521b\u5efa\u5bb9\u5668"),(0,a.kt)("p",null,"\u672f\u8bed\u201c \u5bb9\u5668\uff08container\uff09 \u201d\u901a\u5e38\u7528\u5728 DI \u6846\u67b6\u4e2d\uff0c\u7528\u4e8e\u63cf\u8ff0\u6dfb\u52a0\u201c \u63d0\u4f9b\u8005\uff08providers\uff09 \u201d\u7684\u5185\u5bb9\uff0c\u5e76\u4ece\u4e2d\u8bf7\u6c42\u6784\u5efa\u5bf9\u8c61\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"dig")," \u5e93\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Provide")," \u51fd\u6570\u4e3a\u6211\u4eec\u6dfb\u52a0\u201c providers \u201d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke")," \u51fd\u6570\u7528\u4e8e\u4ece\u5bb9\u5668\u4e2d\u68c0\u7d22\u5168\u90e8\u7684\u6784\u5efa\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u6784\u5efa\u4e00\u4e2a\u65b0\u5bb9\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"container := dig.New()\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u63d0\u4f9b\u8005\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5728\u5bb9\u5668\u4e0a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Provide")," \u51fd\u6570\u3002\u5b83\u53ea\u9700\u8981\u4e00\u4e2a\u53c2\u6570\uff1a\u4e00\u4e2a\u51fd\u6570\u3002\u6b64\u51fd\u6570\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\uff08\u8868\u793a\u8981\u521b\u5efa\u7684\u7ec4\u4ef6\u7684\u4f9d\u8d56\u5173\u7cfb\uff09\u548c\u4e00\u4e2a\u6216\u4e24\u4e2a\u8fd4\u56de\u503c\uff08\u8868\u793a\u51fd\u6570\u63d0\u4f9b\u7684\u7ec4\u4ef6\u4ee5\u53ca\u53ef\u9009\u7684\u9519\u8bef\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"container.Provide(func() *Config {\n  return NewConfig()\n})\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u8bf4\u201c\u6211\u4e3a\u5bb9\u5668\u63d0\u4f9b\u4e86\u4e00\u79cd ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u7c7b\u578b\u3002\u4e3a\u4e86\u6784\u5efa\u5b83\uff0c\u6211\u4e0d\u9700\u8981\u4efb\u4f55\u5176\u4ed6\u4e1c\u897f\u3002\u201c\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u5411\u5bb9\u5668\u5c55\u793a\u4e86\u5982\u4f55\u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u7c7b\u578b\uff0c\u7ee7\u7eed\u4f7f\u7528\u5b83\u6765\u6784\u5efa\u5176\u4ed6\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"container.Provide(func(config *Config) (*sql.DB, error) {\n  return ConnectDatabase(config)\n})\n")),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u8bf4\u201c\u6211\u4e3a\u5bb9\u5668\u63d0\u4f9b\u4e86\u4e00\u79cd ",(0,a.kt)("inlineCode",{parentName:"p"},"*sql.DB")," \u7c7b\u578b\u3002\u4e3a\u4e86\u6784\u5efa\u5b83\uff0c\u6211\u9700\u8981\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002\u53ef\u4ee5\u9009\u62e9\u8fd4\u56de\u9519\u8bef\u3002\u201c"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u6ca1\u5fc5\u8981\u8fd9\u6837\u5199\u3002\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"NewConfig")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectDatabase")," \u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ed6\u4eec\u4f5c\u4e3a\u5bb9\u5668\u7684\u63d0\u4f9b\u8005\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"container.Provide(NewConfig)\ncontainer.Provide(ConnectDatabase)\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece\u4e4b\u524d\u7ed9\u5bb9\u5668\u63d0\u4f9b\u7684\u7c7b\u578b\u4e2d\u521b\u5efa\u7ec4\u4ef6\u3002\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke")," \u51fd\u6570\uff0c\u51fd\u6570\u91c7\u7528\u5355\u4e2a\u53c2\u6570 - \u5177\u6709\u4efb\u610f\u6570\u91cf\u53c2\u6570\u7684\u51fd\u6570\u3002\u51fd\u6570\u7684\u53c2\u6570\u662f\u6211\u4eec\u5e0c\u671b\u5bb9\u5668\u6784\u5efa\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"container.Invoke(func(database *sql.DB) {\n  // sql.DB is ready to use here\n})\n")),(0,a.kt)("p",null,"\u5bb9\u5668\u505a\u4e86\u4e00\u4e9b\u975e\u5e38\u806a\u660e\u7684\u4e1c\u897f\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u8ba4\u8bc6\u5230\u6211\u4eec\u8981\u6c42\u7684\u662f\u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"*sql.DB")),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u786e\u5b9a\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConnectDatabase")," \u63d0\u4f9b\u8be5\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u4e0b\u6765\u5b83\u786e\u5b9a ",(0,a.kt)("inlineCode",{parentName:"li"},"ConnectDatabase")," \u51fd\u6570\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"li"},"Config")),(0,a.kt)("li",{parentName:"ul"},"\u5b83\u627e\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"Config")," \u7684\u63d0\u4f9b\u8005\uff0c\u4e5f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"NewConfig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NewConfig")," \u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56\u5173\u7cfb\uff0c\u6240\u4ee5\u5b83\u88ab\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NewConfig")," \u7684\u7ed3\u679c\u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"Config")," \u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConnectDatabase")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ConnectionDatabase")," \u7684\u7ed3\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"*sql.DB")," \u88ab\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"li"},"Invoke"))),(0,a.kt)("p",null,"\u8fd9\u662f\u5bb9\u5668\u4e3a\u6211\u4eec\u505a\u7684\u5f88\u591a\u5de5\u4f5c\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5b83\u505a\u7684\u66f4\u591a\u3002\u5bb9\u5668\u5f88\u667a\u80fd\uff0c\u53ef\u4ee5\u6784\u5efa\u6bcf\u79cd\u7c7b\u578b\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u5b9e\u4f8b\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u6211\u4eec\u5728\u591a\u4e2a\u5730\u65b9\uff08\u6bd4\u5982\u591a\u4e2a\u5b58\u50a8\u5e93\uff09\u4f7f\u7528\u5b83\uff0c\u6211\u4eec\u6c38\u8fdc\u4e0d\u4f1a\u610f\u5916\u5730\u521b\u5efa\u7b2c\u4e8c\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\u3002"),(0,a.kt)("h2",{id:"\u8f83\u597d\u7684-main\u5199\u6cd5"},"\u8f83\u597d\u7684 main\uff08\uff09\u5199\u6cd5"),(0,a.kt)("p",null,"\u73b0\u5728\u77e5\u9053\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"dig")," \u5bb9\u5668\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u8ba9\u6211\u4eec\u7528\u5b83\u6765\u6784\u5efa\u4e00\u4e2a\u8f83\u597d\u7684main \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func BuildContainer() *dig.Container {\ncontainer := dig.New()\ncontainer.Provide(NewConfig)\ncontainer.Provide(ConnectDatabase)\ncontainer.Provide(NewPersonRepository)\ncontainer.Provide(NewPersonService)\ncontainer.Provide(NewServer)\nreturn container\n}\nfunc main() {\ncontainer := BuildContainer()\nerr := container.Invoke(func(server *Server) {\nserver.Run()\n})\nif err != nil {\npanic(err)\n}\n}\n")),(0,a.kt)("p",null,"\u4e4b\u524d\u552f\u4e00\u6ca1\u89c1\u8fc7\u7684\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke")," \u7684\u8fd4\u56de\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u3002\u5982\u679c\u4efb\u4f55\u63d0\u4f9b\u8005\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke")," \u8fd4\u56de\u9519\u8bef\uff0c\u6211\u4eec\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke")," \u5c06\u505c\u6b62\u5e76\u8fd4\u56de\u8be5\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u867d\u7136\u8fd9\u4e2a\u4f8b\u5b50\u5f88\u5c0f\uff0c\u4f46\u5e94\u8be5\u5f88\u5bb9\u6613\u770b\u51fa\u8fd9\u79cd\u65b9\u6cd5\u7684\u4e00\u4e9b\u597d\u5904\u8d85\u8fc7\u4e86\u201c\u5e38\u89c4\u201c\u7684 main \u3002\u968f\u7740\u5e94\u7528\u7a0b\u5e8f\u53d8\u5f97\u8d8a\u6765\u8d8a\u5927\uff0c\u8fd9\u4e9b\u597d\u5904\u53d8\u5f97\u66f4\u52a0\u660e\u663e\u3002"),(0,a.kt)("p",null,"\u6700\u91cd\u8981\u7684\u597d\u5904\u4e4b\u4e00\u662f\u5c06\u7ec4\u4ef6\u7684\u521b\u5efa\u4e0e\u5176\u4f9d\u8d56\u7684\u521b\u5efa\u5206\u79bb\u3002\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec  ",(0,a.kt)("inlineCode",{parentName:"p"},"PersonRepository")," \u73b0\u5728\u9700\u8981\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u3002\u6211\u4eec\u6240\u8981\u505a\u7684\u5c31\u662f\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"NewPersonRepository")," \u6784\u9020\u51fd\u6570\u4ee5\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," \u4f5c\u4e3a\u53c2\u6570\u3002\u4ee3\u7801\u5176\u4ed6\u4efb\u4f55\u5185\u5bb9\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u3002"),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u597d\u5904\u662f\u6ca1\u6709\u5168\u5c40\u72b6\u6001\uff0c\u6ca1\u6709\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," \uff08\u4f9d\u8d56\u5173\u7cfb\u5728\u9700\u8981\u65f6\u624d\u521b\u5efa\uff0c\u53ea\u521b\u5efa\u4e00\u6b21\uff0c\u4e0d\u9700\u8981\u5bb9\u6613\u51fa\u9519\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," \u8bbe\u7f6e\uff09\uff0c\u5e76\u4e14\u6613\u4e8e\u6d4b\u8bd5\u5355\u4e2a\u7ec4\u4ef6\u3002\u60f3\u8c61\u4e00\u4e0b\uff0c\u5728\u6d4b\u8bd5\u4e2d\u521b\u5efa\u5bb9\u5668\u5e76\u8981\u6c42\u5b8c\u6574\u6784\u5efa\u5bf9\u8c61\u8fdb\u884c\u6d4b\u8bd5\u3002\u6216\u8005\uff0c\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u9700\u8981\u6240\u6709\u7684\u4f9d\u8d56\u3002\u4f7f\u7528 DI \uff0c\u8fd9\u4e9b\u90fd\u66f4\u5bb9\u6613\u3002"),(0,a.kt)("h2",{id:"\u4e00\u4e2a\u503c\u5f97\u4f20\u64ad\u7684\u60f3\u6cd5"},"\u4e00\u4e2a\u503c\u5f97\u4f20\u64ad\u7684\u60f3\u6cd5"),(0,a.kt)("p",null,"\u6211\u76f8\u4fe1\u4f9d\u8d56\u6ce8\u5165\u6709\u52a9\u4e8e\u6784\u5efa\u66f4\u5f3a\u5927\u548c\u53ef\u6d4b\u8bd5\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u968f\u7740\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u4f53\u91cf\u9010\u6e10\u589e\u5927\uff0c\u5c24\u4e3a\u660e\u663e\u3002 Go \u975e\u5e38\u9002\u5408\u6784\u5efa\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e14\u5177\u6709\u5f88\u597d\u7684 DI \u5de5\u5177 ",(0,a.kt)("inlineCode",{parentName:"p"},"dig")," \u3002\u6211\u76f8\u4fe1 Go \u793e\u533a\u5e94\u8be5\u63a5\u53d7 DI \u5e76\u5728\u66f4\u591a\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u539f\u6587\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://blog.drewolson.org/dependency-injection-in-go"},"dependency-injection-in-go"))))}k.isMDXComponent=!0}}]);