"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1951],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),i=n(72389),s=n(79443);var o=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(63616),l=n(86010),c="tabItem_1uMI";function d(e){var t,n,i,s=e.lazy,d=e.block,p=e.defaultValue,m=e.values,b=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),P=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,a.useState)(g),T=N[0],j=N[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=P[b];null!=C&&C!==T&&h.some((function(e){return e.value===C}))&&j(C)}var A=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==T&&(O(t),j(r),null!=b&&w(b,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:A,onClick:A},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},25013:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return b}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=n(26396),o=n(58215),u=["components"],l={},c=void 0,d={unversionedId:"js/features/odata/common/entity/entity-builder",id:"js/features/odata/common/entity/entity-builder",title:"entity-builder",description:"In version 2.0 of the SAP Cloud SDK, two new changes have been introduced:",source:"@site/docs/js/features/odata/common/entity/entity-builder.mdx",sourceDirName:"js/features/odata/common/entity",slug:"/js/features/odata/common/entity/entity-builder",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/entity-builder",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/entity-builder.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1643104057,formattedLastUpdatedAt:"1/25/2022",frontMatter:{}},p=[],m={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("p",null,"In version 2.0 of the SAP Cloud SDK, two new changes have been introduced:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an API class for each entity (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"BusinessPartnerApi"),"), providing access to its properties via a ",(0,i.kt)("inlineCode",{parentName:"li"},"schema"),", and"),(0,i.kt)("li",{parentName:"ul"},"a common method, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"businessPartnerService"),", with accessors for all the API classes.")),(0,i.kt)("p",null,"To build an entity by assigning its properties, use the entity builders provided by the API class.\nFirst invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},".entityBuilder")," method to access the builder, then you can set the properties and finally call the ",(0,i.kt)("inlineCode",{parentName:"p"},".build")," method to yield the entity.\nTo set navigation properties that link to other entities, you have to create the linked entities using their respective builders.\nNavigation properties that are linked through a one-to-many relation, are set by passing an array (even if that array only contains one entity).\nOne-to-one relations are assigned as objects.\nThe example below shows how you can create the data from above using the entity builder.\nThe relation to the business partner address is a one-to-many relation here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .lastName('Pan')\n  .toBusinessPartnerAddress([\n    businessPartnerAddressApi.entityBuilder().country('Neverland').build()\n  ])\n  .build();\n"))),(0,i.kt)(o.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("p",null,"To build an entity by assigning its properties, you can use the entity builders provided by every entity class.\nUse the static ",(0,i.kt)("inlineCode",{parentName:"p"},".builder")," method to access the builder, set the properties and finally use the ",(0,i.kt)("inlineCode",{parentName:"p"},".build")," method to yield the entity.\nTo set navigation properties, that link to other entities, you have to create the linked entities using their respective builder.\nNavigation properties, that are linked through a one-to-many relation have to be assigned in an array - one-to-one relations are assigned as single objects.\nThe example below shows how you can create the data from above using the entity builder.\nThe relation to the business partner address is a one-to-many relation here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder()\n  .firstName('Peter')\n  .lastName('Pan')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder().country('Neverland').build()\n  ])\n  .build();\n")))),(0,i.kt)("p",null,"You can also add fields, that are unknown according to the specification, if you add them as custom fields.\nTo achieve this, pass an object the ",(0,i.kt)("inlineCode",{parentName:"p"},".withCustomFields")," method, where the keys denote the names of the custom fields, and the values their respective values."),(0,i.kt)(s.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"major",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .entityBuilder()\n  .firstName('Peter')\n  .withCustomFields({\n    myCustomField: 'this is custom'\n  })\n  .build();\n"))),(0,i.kt)(o.Z,{value:"deprecated",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nconst businessPartner = BusinessPartner.builder()\n  .firstName('Peter')\n  .withCustomFields({\n    myCustomField: 'this is custom'\n  })\n  .build();\n")))))}b.isMDXComponent=!0}}]);