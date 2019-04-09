(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(161),c=a(159);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Orchestra",keywords:["tango","#ArmTangoFest2019","orchestra"]}),r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Orchestra"),r.a.createElement("p",{className:"lead text-muted"},"See orchestra"))),r.a.createElement("div",{className:"album py-5 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("img",{className:"card-img-top",alt:"Thumbnail [100%x225]",style:{height:225,width:"100%",display:"block"},"data-holder-rendered":"true",src:"https://photos.harstatic.com/136263279/hr/img-5.jpeg"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"Info and image"),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"Read More"),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"Watch Video"))))))))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(33),i=a.n(s);a.d(t,"a",function(){return i.a});a(154);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=a(55),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},159:function(e,t,a){"use strict";var n=a(160),r=a(0),l=a.n(r),c=a(4),s=a.n(c),i=a(172),o=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title,i=n.data.site,m=t||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},161:function(e,t,a){"use strict";var n=a(156),r=a(0),l=a.n(r),c=a(4),s=a.n(c),i=a(153),o=a(163),m=a.n(o),u=a(165),d=a.n(u),p=a(166),E=a.n(p),g=a(155),h=a.n(g),b=function(e){var t=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(h.a,null,l.a.createElement(m.a.Brand,{as:i.a,to:"/"},t),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(E.a,{title:"Festival"},l.a.createElement(E.a.Item,{as:i.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(E.a.Item,{as:i.a,to:"/djs"},"DJs"),l.a.createElement(E.a.Item,{as:i.a,to:"/orchestra"},"Orchestra"),l.a.createElement(E.a.Item,{as:i.a,to:"/maestros"},"Maestros")),l.a.createElement(d.a.Link,{as:i.a,to:"/packages"},"Packages"),l.a.createElement(d.a.Link,{as:i.a,to:"/media"},"Media"),l.a.createElement(d.a.Link,{as:i.a,to:"/contact-us"},"Contact Us")))))};b.propTypes={siteTitle:s.a.string},b.defaultProps={siteTitle:""};var f=b,v=a(167),y=a.n(v),w=a(168),N=a.n(w),k=a(173),T=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(h.a,null,l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(N.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(k.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(k.c,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.d,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(k.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur"))))},x=(a(169),a(170),a(171),function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(T,null))},data:n})});x.propTypes={children:s.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-orchestra-js-0d2c824fb9027c8d83ec.js.map