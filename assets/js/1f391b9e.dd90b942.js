"use strict";(self.webpackChunkdocusaurus_tailwind_boilerplate=self.webpackChunkdocusaurus_tailwind_boilerplate||[]).push([[85],{87529:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(67294),t=n(86010),i=n(92434),s=n(3905),c=n(27440),r=n(51575),m=n(29548),o="mdxPageWrapper_zHyg";var d=function(e){var a=e.content,n=a.metadata,d=n.title,u=n.description,v=n.permalink,f=n.frontMatter,N=f.wrapperClassName,g=f.hide_table_of_contents;return l.createElement(i.Z,{title:d,description:u,permalink:v,wrapperClassName:null!=N?N:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!g&&"col--8")},l.createElement(s.Zo,{components:c.Z},l.createElement(a,null))),!g&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.Z,{toc:a.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},51575:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(87462),t=n(63366),i=n(67294),s=n(86010),c=n(25002),r="tableOfContents_cNA8",m=["className"];var o=function(e){var a=e.className,n=(0,t.Z)(e,m);return i.createElement("div",{className:(0,s.Z)(r,"thin-scrollbar",a)},i.createElement(c.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,a,n){n.d(a,{Z:function(){return m}});var l=n(87462),t=n(63366),i=n(67294),s=n(29548),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,t.Z)(e,c),_=(0,s.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,p=null!=N?N:_.tableOfContents.maxHeadingLevel,C=(0,s.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:p}),h=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:p}}),[d,v,k,p]);return(0,s.Si)(h),i.createElement(r,(0,l.Z)({toc:C,className:m,linkClassName:d},g))}}}]);