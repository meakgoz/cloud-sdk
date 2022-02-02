"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7517],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=g(t),d=o,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var g=2;g<i;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),o=t(67294),i=t(72389),l=t(79443);var r=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(63616),g=t(86010),p="tabItem_1uMI";function u(e){var n,t,i,l=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=r(),b=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,o.useState)(y),C=T[0],O=T[1],L=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=b[m];null!=I&&I!==C&&v.some((function(e){return e.value===I}))&&O(I)}var E=function(e){var n=e.currentTarget,t=L.indexOf(n),a=v[t].value;a!==C&&(S(n),O(a),null!=m&&N(m,a))},F=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=L.indexOf(e.currentTarget)+1;t=L[a]||L[0];break;case"ArrowLeft":var o=L.indexOf(e.currentTarget)-1;t=L[o]||L[L.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,g.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return L.push(e)},onKeyDown:F,onFocus:E,onClick:E},i,{className:(0,g.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),l?(0,o.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,i.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},18841:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),l=t(26396),r=t(58215),s=["components"],g={id:"logging-overview",title:"Logging",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Logging",description:"This document will give you an overview of the different ways to log information with your application."},p=void 0,u={unversionedId:"java/guides/logging-overview",id:"java/guides/logging-overview",title:"Logging",description:"This document will give you an overview of the different ways to log information with your application.",source:"@site/docs/java/guides/logging-overview.mdx",sourceDirName:"java/guides",slug:"/java/guides/logging-overview",permalink:"/cloud-sdk/docs/java/guides/logging-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/logging-overview.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1643819412,formattedLastUpdatedAt:"2/2/2022",frontMatter:{id:"logging-overview",title:"Logging",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Logging",description:"This document will give you an overview of the different ways to log information with your application."},sidebar:"someSidebar",previous:{title:"Dependency Management",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies"},next:{title:"Tutorials Overview",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"}},c=[{value:"Logging Overview",id:"logging-overview",children:[{value:"Providing a Logging Framework",id:"providing-a-logging-framework",children:[],level:3}],level:2},{value:"Writing Log Messages",id:"writing-log-messages",children:[{value:"Simple SLF4J Usage",id:"simple-slf4j-usage",children:[],level:3},{value:"Advanced SLF4J Usage",id:"advanced-slf4j-usage",children:[],level:3}],level:2},{value:"Logging Configuration",id:"logging-configuration",children:[{value:"Configuring Logback",id:"configuring-logback",children:[{value:"Setting Log Levels",id:"setting-log-levels",children:[],level:4},{value:"On Cloud Foundry",id:"on-cloud-foundry",children:[],level:4},{value:"Recommendation for Spring Boot (e.g. SAP Cloud Application Programming Model)",id:"recommendation-for-spring-boot-eg-sap-cloud-application-programming-model",children:[],level:4}],level:3}],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document aims to give you an overview of how you can write events of your application with the standard logging frameworks and how the SAP Cloud SDK integrates with that.\nThere are three parts to this document:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How the SAP Cloud SDK integrates with logging frameworks"),(0,i.kt)("li",{parentName:"ul"},"How to create log entries"),(0,i.kt)("li",{parentName:"ul"},"How to configure those entries")),(0,i.kt)("p",null,"To better differentiate between different kinds of logging we will call the type of logs that are usually only relevant for developers to understand why the system behaves the way it did (for example during debugging) as ",(0,i.kt)("em",{parentName:"p"},"Application Logging"),".\nOther types of logs might be kept due to legislative requirements (audit trails or audit logging) or be part of the terms and conditions (business logging).\nThis document describes how to write and configure ",(0,i.kt)("em",{parentName:"p"},"Applications Logs"),"."),(0,i.kt)("h2",{id:"logging-overview"},"Logging Overview"),(0,i.kt)("p",null,"For creating log entries the SAP Cloud SDK relies on the popular ",(0,i.kt)("a",{parentName:"p",href:"http://www.slf4j.org/"},"Simple Logging Facade for Java (SLF4J)"),".\nIt serves as an interface to a variety of different logging frameworks (e.g. ",(0,i.kt)("a",{parentName:"p",href:"http://logback.qos.ch/"},"Logback"),", ",(0,i.kt)("a",{parentName:"p",href:"https://logging.apache.org/log4j/2.x/"},"log4j"),")."),(0,i.kt)("p",null,"That means there are two components involved:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("em",{parentName:"p"},"SLF4J API")),(0,i.kt)("p",{parentName:"li"},"The API is used to get a logger instance and create log entries:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Logger logger = LoggerFactory.getLogger(DummyClass.class);\nlogger.debug("message");\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("em",{parentName:"p"},"logging framework")," which provides the implementation of that API"),(0,i.kt)("p",{parentName:"li"},"The framework is then responsible for writing such messages according to a configuration.\nWhich configuration options are available, depends on the framework.\nTypically, one can configure a log level (Error, Warn, Debug, etc.) and the format of messages."))),(0,i.kt)("p",null,"The SAP Cloud SDK itself ",(0,i.kt)("em",{parentName:"p"},"only")," relies upon the SLF4J API, not on any specific logging framework.\nThis is good practice because otherwise all consumers would be forced to use the same logging framework that the SAP Cloud SDK comes with, rendering the SAP Cloud SDK unusable for many use cases."),(0,i.kt)("p",null,"That means that you have to ",(0,i.kt)("em",{parentName:"p"},"provide a logging framework")," in your application.\nOtherwise, you will not see any log entries the SAP Cloud SDK attempts to put out."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case your project is based on one of the SAP Cloud SDK archetypes you will already have Logback set up as the logging provider."))),(0,i.kt)("h3",{id:"providing-a-logging-framework"},"Providing a Logging Framework"),(0,i.kt)("p",null,"To provide a logging framework, you have to add it to the dependency tree.\nWhich artifacts are to be added exactly, depends on the framework."),(0,i.kt)("p",null,"To take ",(0,i.kt)("inlineCode",{parentName:"p"},"Logback")," as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>ch.qos.logback</groupId>\n    <artifactId>logback-classic</artifactId>\n    <version>latest-logback-version</version>\n    <scope>runtime</scope>\n</dependency>\n")),(0,i.kt)("p",null,"Also, you might have to provide some sort of configuration file.\nFor our example of Logback, we need a ",(0,i.kt)("inlineCode",{parentName:"p"},"logback.xml")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"main/resources")," directory of our application."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When running on the SAP BTP, Cloud Foundry environment using the SAP Java build pack the logging implementation is provided at runtime by the container.\nThis means, if you only run the application on Cloud Foundry you don't need to provide any implementation.\nStill, oftentimes logging is also important for local deployment and testing.\nFor that providing, an implementation is required."))),(0,i.kt)("h2",{id:"writing-log-messages"},"Writing Log Messages"),(0,i.kt)("p",null,"To start writing your log entries you also need to specify a dependency to the SLF4J API: ",(0,i.kt)("inlineCode",{parentName:"p"},"org.slf4j:slf4j-api"),".\nDepending on the chosen logging-implementation, you might not ",(0,i.kt)("em",{parentName:"p"},"need")," to specify the SLF4J API, but it's in general best practice to not rely on transitive dependencies and therefore reference the SLF4J API anyway."),(0,i.kt)("h3",{id:"simple-slf4j-usage"},"Simple SLF4J Usage"),(0,i.kt)("p",null,"Having these prerequisites out of the way, you can now start logging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class DummyClass {\n\n  private static final Logger logger = LoggerFactory.getLogger(\n    DummyClass.class\n  );\n\n  public void doSomething() {\n    logger.trace("doSomething was called");\n  }\n}\n\n')),(0,i.kt)("p",null,"What do you see in this example?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the first line inside the class a new logger is created (once per class), with the class object as a reference.\nThis class name will then be logged alongside the message in the logs."),(0,i.kt)("li",{parentName:"ul"},"Inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"doSomething")," method this logger is now used to log the fact that the given method was called.\nThe method you use for that depends on the level at which you want to see the message.\nOther options besides ",(0,i.kt)("inlineCode",{parentName:"li"},"trace")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"debug"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"warn"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"error"),".")),(0,i.kt)("p",null,"As you can see, no reference to the actual logging implementation can be found in the code.\nThis is the benefit of using SLF4J as a logging facade.\nThis allows you to change the logging implementation without any changes to your application code."),(0,i.kt)("h3",{id:"advanced-slf4j-usage"},"Advanced SLF4J Usage"),(0,i.kt)("p",null,"If you are logging more and more information you might find yourself in cases where you concatenate ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"s or log inside a loop.\nThis might cause unnecessary load on your system if the runtime log level is higher than the messages you want to log.\nTo make this more plastic have a look at the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        logger.debug("Processing the following results:")\n        for(String result : someResult) {\n            logger.debug("- " + result);\n        }\n        consumeResults(someResults)\n    }\n}\n')),(0,i.kt)("p",null,"Now assume that ",(0,i.kt)("inlineCode",{parentName:"p"},"someResults")," contains hundreds or thousands of entries and the log level at runtime is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),". This would mean that the loop is run without actually doing anything."),(0,i.kt)("p",null,"To prevent this kind of ",(0,i.kt)("em",{parentName:"p"},"empty")," loops you can use guards like ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.isDebugEnabled()")," in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        if( logger.isDebugEnabled() ) {\n            logger.debug("Processing the following results:")\n            for(String result : someResult) {\n                logger.debug("- " + result);\n            }\n        }\n\n        consumeResults(someResults)\n    }\n}\n')),(0,i.kt)("p",null,"That way the loop is only executed if necessary."),(0,i.kt)("h2",{id:"logging-configuration"},"Logging Configuration"),(0,i.kt)("p",null,"Logging frameworks offer different options to configure the behavior of the implementation.\nWhich options are available and how to configure them highly depends on the framework you are using."),(0,i.kt)("p",null,"Generally, all frameworks offer some way of configuring:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The application ",(0,i.kt)("em",{parentName:"li"},"log level")),(0,i.kt)("li",{parentName:"ul"},"The output format")),(0,i.kt)("p",null,"Please refer to the documentation of the specific logging implementation you are using for detailed information on what is available and how to apply it."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"SDK archetypes")," already come with Logback preconfigured as the logging implementation.\nThe following gives an overview of how to change these configurations and perform essential steps like changing the log level."),(0,i.kt)("h3",{id:"configuring-logback"},"Configuring Logback"),(0,i.kt)("p",null,"General information about configuring Logback can be obtained from ",(0,i.kt)("a",{parentName:"p",href:"http://logback.qos.ch/manual/configuration.html"},"the documentation"),".\nThis section only explains some basics."),(0,i.kt)("p",null,"Logback is configured via the configuration file located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory of your ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," module.\nIt is named ",(0,i.kt)("inlineCode",{parentName:"p"},"logback.xml")," for TomEE and ",(0,i.kt)("inlineCode",{parentName:"p"},"logback-spring.xml")," for Spring-based projects.\nTo understand how Logback detects this file have a look at ",(0,i.kt)("a",{parentName:"p",href:"http://logback.qos.ch/manual/configuration.html#auto_configuration"},"their documentation"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This configuration file is not accounted for when running a TomEE based application on SAP BTP, Cloud Foundry environment!\nTo configure logging on Cloud Foundry refer to the ",(0,i.kt)("a",{parentName:"p",href:"#on-cloud-foundry"},"dedicated section")," below."))),(0,i.kt)("h4",{id:"setting-log-levels"},"Setting Log Levels"),(0,i.kt)("p",null,"In this configuration file you will find a block like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),(0,i.kt)("p",null,"This tells Logback to log all messages with level ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," and higher to an appender with the reference ",(0,i.kt)("inlineCode",{parentName:"p"},"STDOUT"),".\nValid values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," property are: ",(0,i.kt)("inlineCode",{parentName:"p"},"TRACE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WARN"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR"),".\nIf you want to log all packages with level ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),", for example, you could set it the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<root level="DEBUG">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),(0,i.kt)("p",null,"However, you usually want to set the logging level for certain packages (or classes) only.\nFor this you would add the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<logger name="package.to.log" level="INFO" />\n')),(0,i.kt)("p",null,"In the case that you want to log all requests sent and responses received by the Apache HttpClient in your application locally you would have the following configuration block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<logger name="org.apache.http" level="DEBUG" />\n<logger name="org.apache.http.wire" level="ERROR" />\n<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),(0,i.kt)("h4",{id:"on-cloud-foundry"},"On Cloud Foundry"),(0,i.kt)("p",null,"If you want to set the debug levels of your application running on Cloud Foundry (using the SAP Java Buildpack), you have to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL"),".\nThis allows you to also change the log level at runtime, as we will see further down in this section."),(0,i.kt)("p",null,"To set the environment variable with every start of the application, it is advised to set it in the deployment descriptor of your project.\nThis is typically a ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjVv7TknpbsAhUJ36QKHaA_Bp4QFjAAegQIBBAC&url=https%3A%2F%2Fhelp.sap.com%2Fviewer%2F6a4563286d06419cb9927ef448c67432%2FCloud%2Fen-US%2Fe68e33b67c844689b07abf70e7ca5bc8.html&usg=AOvVaw1D_4MogbdbFNLOG1A1xeJy"},"Manifest")," or ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/4505d0bdaf4948449b7f7379d24d0f0d/2.0.03/en-US/33548a721e6548688605049792d55295.html"},"MTA")," file in your project root directory.\nIt usually looks something like this:"),(0,i.kt)(l.Z,{defaultValue:"manifest",values:[{label:"Manifest",value:"manifest"},{label:"MTA",value:"mta"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"manifest",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napplications:\n  - name: <your-application>\n    some-properties: <some-values>\n    env:\n      OTHER_ENVIRONMENT_VARIABLE: 'and their values'\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n"))),(0,i.kt)(r.Z,{value:"mta",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"ID: com.company.project.app\nversion: 1.0.1\nmodules:\n  - name: <your-module>\n    type: java.tomcat\n    properties:\n      SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n")))),(0,i.kt)("p",null,"In the case that you want to log all requests sent and responses received by the Apache HttpClient in your application on Cloud Foundry you would set ",(0,i.kt)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," to the following value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}\n")),(0,i.kt)("p",null,"As mentioned earlier, it's possible to set the environment variable via the Cloud Foundry CLI.\nThe SAP Java Buildpack should then be able to pick up these changes and propagate them to your application."),(0,i.kt)("p",null,"Assuming that you have the initial configuration shown above and you want to start logging the Apache HttpClient, you would now issue the following command on your command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," cf set-env logging-documentation SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}'\n")),(0,i.kt)("p",null,"Don't forget to change the environment variable back to the previous state.\nIn this example case the command would be the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cf set-env logging-documentation SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n")),(0,i.kt)("h4",{id:"recommendation-for-spring-boot-eg-sap-cloud-application-programming-model"},"Recommendation for Spring Boot (e.g. SAP Cloud Application Programming Model)"),(0,i.kt)("p",null,"It's possible to customize the log levels and formatting of your Spring Boot application, e.g. when using the ",(0,i.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"SAP Cloud Application Programming Model (CAP)")," framework.\nFor this we recommend the best practices as they are used in our ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/getting-started#generating-a-project-from-a-maven-archetype"},(0,i.kt)("inlineCode",{parentName:"a"},"scp-cf-spring"))," Maven archetype."),(0,i.kt)("p",null,"If not exist, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/logback-spring.xml")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <springProfile name="!cloud">\n        <include resource="org/springframework/boot/logging/logback/base.xml"/>\n        <root level="INFO"/>\n        <logger name="org.springframework.web" level="INFO"/>\n    </springProfile>\n\n    <springProfile name="cloud">\n        <appender name="STDOUT-JSON" class="ch.qos.logback.core.ConsoleAppender">\n            <encoder class="com.sap.hcp.cf.logback.encoder.JsonEncoder"/>\n        </appender>\n        <root level="INFO">\n            <appender-ref ref="STDOUT-JSON"/>\n        </root>\n        <logger name="com.sap.cloud.sdk" level="INFO"/>\n        <logger name="package.to.log" level="DEBUG"/>\n    </springProfile>\n</configuration>\n')),(0,i.kt)("p",null,"If your application starts with an error message about missing class ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonEncoder"),", then an additional dependency is still required:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.hcp.cf.logging</groupId>\n    <artifactId>cf-java-logging-support-logback</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"Please choose the latest version manually or have the dependency managed by the ",(0,i.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-sdk/docs/java/guides/manage-dependencies#the-sap-cloud-sdk-bill-of-material"},"SAP Cloud SDK BOM"),"."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'How to use SLF4J with "legacy" logging frameworks: ',(0,i.kt)("a",{parentName:"li",href:"http://www.slf4j.org/legacy.html"},"http://www.slf4j.org/legacy.html")),(0,i.kt)("li",{parentName:"ul"},"Debug Logging of the Apache HttpClient: ",(0,i.kt)("a",{parentName:"li",href:"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"},"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"))))}m.isMDXComponent=!0}}]);