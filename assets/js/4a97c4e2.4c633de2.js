"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6688],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"What is the SAP Cloud SDK CLI?",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article gives an overview of the functions of the SAP Cloud SDK CLI and how to install it.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},s=void 0,c={unversionedId:"js/features/cli/overview",id:"js/features/cli/overview",title:"What is the SAP Cloud SDK CLI?",description:"This article gives an overview of the functions of the SAP Cloud SDK CLI and how to install it.",source:"@site/docs/js/features/cli/overview.mdx",sourceDirName:"js/features/cli",slug:"/js/features/cli/overview",permalink:"/cloud-sdk/docs/js/features/cli/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1643104057,formattedLastUpdatedAt:"1/25/2022",frontMatter:{title:"What is the SAP Cloud SDK CLI?",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article gives an overview of the functions of the SAP Cloud SDK CLI and how to install it.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"SAP Workflow API for Cloud Foundry",permalink:"/cloud-sdk/docs/js/features/openapi/pregenerated-clients/workflow"},next:{title:"Add the SAP Cloud SDK to Your Project",permalink:"/cloud-sdk/docs/js/features/cli/init"}},d=[{value:"Installing the SAP Cloud SDK CLI",id:"installing-the-sap-cloud-sdk-cli",children:[],level:2},{value:"Getting Help",id:"getting-help",children:[],level:2},{value:"Autocomplete for Your Shell",id:"autocomplete-for-your-shell",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CLI is deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The SAP Cloud SDK CLI is deprecated.\nWe'll provide replacement for key value adds of the CLI like project scaffolding, etc."))),(0,r.kt)("p",null,"The SAP Cloud SDK CLI is a command-line interface (CLI) to simplify common tasks you may encounter when working with the SAP Cloud SDK:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/init"},"Adding the SAP Cloud SDK to an existing project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/init"},"Creating a new project using the SAP Cloud SDK and other recommended dependencies")),(0,r.kt)("li",{parentName:"ul"},"Generate an OData client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/package"},"Prepare your project for deployment to SAP Business Technology Platform"))),(0,r.kt)("h2",{id:"installing-the-sap-cloud-sdk-cli"},"Installing the SAP Cloud SDK CLI"),(0,r.kt)("p",null,"The SAP Cloud SDK CLI can be installed with npm.\nWe recommend installing the SAP Cloud SDK CLI globally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @sap-cloud-sdk/cli\n")),(0,r.kt)("p",null,"Once the installation is complete, you can test if you have the newest version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sap-cloud-sdk -v\n\n@sap-cloud-sdk/cli/0.1.12\n")),(0,r.kt)("p",null,"If you encounter any issue or want to look at the source code, look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-cli"},"our GitHub page"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Caret Dependencies below 1.0.0")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The SAP Cloud SDK CLI is currently below version 1.\nDue to the behavior of global dependencies in npm, you need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g @sap-cloud-sdk/cli@latest")," to update to the latest version."))),(0,r.kt)("h2",{id:"getting-help"},"Getting Help"),(0,r.kt)("p",null,"You can display the list of all commands or help for a specific command directly with the SAP Cloud SDK CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Show the list of all commands\n$ sap-cloud-sdk help\n# Show help for the init command\n$ sap-cloud-sdk help init\n")),(0,r.kt)("h2",{id:"autocomplete-for-your-shell"},"Autocomplete for Your Shell"),(0,r.kt)("p",null,"The SAP Cloud SDK CLI can provide autocomplete information to your shell."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Print how to add autocomplete for your shell\n$ sap-cloud-sdk autocomplete\n")))}p.isMDXComponent=!0}}]);