(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(163),i=a(161);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a page that doesn't exist... the sadness."))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(155);var c=r.a.createContext({}),m=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(173),c=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,s=n.data.site,m=t||s.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},162:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},163:function(e,t,a){"use strict";var n=a(158),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(154),c=a(165),m=a.n(c),u=a(166),d=a.n(u),p=a(167),g=a.n(p),E=a(157),f=a.n(E),h=function(e){var t=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(f.a,null,l.a.createElement(m.a.Brand,{as:s.a,to:"/"},t),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(g.a,{title:"Festival"},l.a.createElement(g.a.Item,{as:s.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(g.a.Item,{as:s.a,to:"/djs"},"DJs"),l.a.createElement(g.a.Item,{as:s.a,to:"/orchestra"},"Orchestra"),l.a.createElement(g.a.Item,{as:s.a,to:"/maestros"},"Maestros")),l.a.createElement(g.a,{title:"Packages"},l.a.createElement(g.a.Item,{as:s.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(g.a.Item,{as:s.a,to:"/workshops-and-milongas"},"Workshops and milongas")),l.a.createElement(d.a.Link,{as:s.a,to:"/media"},"Media"),l.a.createElement(d.a.Link,{as:s.a,to:"/contact-us"},"Contact Us")))))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var v=h,y=a(168),b=a.n(y),w=a(169),k=a.n(w),T=a(174),F=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(k.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(k.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(T.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(T.c,null)," ",l.a.createElement(T.d,null)," ",l.a.createElement(T.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(T.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur"))))},N=(a(170),a(171),a(172),function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(v,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(F,null))},data:n})});N.propTypes={children:o.a.node.isRequired};t.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js-50663ca3d807e03d30f7.js.map