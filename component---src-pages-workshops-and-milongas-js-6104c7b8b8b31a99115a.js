(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(163),c=a(161);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"Workshops and Milongas",keywords:["tango","#ArmTangoFest2019","milongas"]}),l.a.createElement("section",{className:"jumbotron text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"jumbotron-heading"},"Workshops and milongas"),l.a.createElement("p",{className:"lead text-muted"},"Choose whatever works for you"),l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Workshops and Milongas"),l.a.createElement("th",{scope:"col"},"Before April 21st"),l.a.createElement("th",{scope:"col"},"Before Mar 21st"),l.a.createElement("th",{scope:"col"},"Late reservation"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Opening milonga"),l.a.createElement("td",null,"€18"),l.a.createElement("td",null,"€20"),l.a.createElement("td",null,"€25")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Weekday milongas"),l.a.createElement("td",null,"€5"),l.a.createElement("td",null,"€7"),l.a.createElement("td",null,"€10")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Weekend milongas"),l.a.createElement("td",null,"€9"),l.a.createElement("td",null,"€12"),l.a.createElement("td",null,"€15")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Gala Milonga"),l.a.createElement("td",null,"€27"),l.a.createElement("td",null,"€30"),l.a.createElement("td",null,"€35")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Yerevan Milonga Package"),l.a.createElement("td",null,"€30"),l.a.createElement("td",null,"€35"),l.a.createElement("td",null,"€40")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Tsakhkadzor Milonga Package"),l.a.createElement("td",null,"€37"),l.a.createElement("td",null,"€45"),l.a.createElement("td",null,"€50")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Yerevan + Tsakhkadzor Milonga Package"),l.a.createElement("td",null,"€55"),l.a.createElement("td",null,"€65"),l.a.createElement("td",null,"€85")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Yerevan milonga + 3 workshops"),l.a.createElement("td",null,"€75"),l.a.createElement("td",null,"€90"),l.a.createElement("td",null,"€120")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Yerevan milonga + 5 workshops"),l.a.createElement("td",null,"€27"),l.a.createElement("td",null,"€30"),l.a.createElement("td",null,"€35")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Tsakhkadzor milonga + 4 workshops"),l.a.createElement("td",null,"€95"),l.a.createElement("td",null,"€115"),l.a.createElement("td",null,"€140")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Tsakhkadzor full package"),l.a.createElement("td",null,"€195"),l.a.createElement("td",null,"€220"),l.a.createElement("td",null,"€270")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Budget full package"),l.a.createElement("td",null,"€685"),l.a.createElement("td",null,"€770"),l.a.createElement("td",null,"€890")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Special full package"),l.a.createElement("td",null,"€875"),l.a.createElement("td",null,"€960"),l.a.createElement("td",null,"€1080")))))))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return i});var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=a(33),m=a.n(o);a.d(t,"a",function(){return m.a});a(155);var s=l.a.createContext({}),i=function(e){return l.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=a(55),m=a(2),s=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,a){"use strict";var n=a(162),l=a(0),r=a.n(l),c=a(4),o=a.n(c),m=a(173),s=a.n(m);function i(e){var t=e.description,a=e.lang,l=e.meta,c=e.keywords,o=e.title,m=n.data.site,i=t||m.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l)})}i.defaultProps={lang:"en",meta:[],keywords:[],description:""},i.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=i},162:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},163:function(e,t,a){"use strict";var n=a(158),l=a(0),r=a.n(l),c=a(4),o=a.n(c),m=a(154),s=a(165),i=a.n(s),u=a(166),d=a.n(u),E=a(167),p=a.n(E),g=a(157),h=a.n(g),k=function(e){var t=e.siteTitle;return r.a.createElement(i.a,{className:"navbar-custom",variant:"dark",expand:"lg"},r.a.createElement(h.a,null,r.a.createElement(i.a.Brand,{as:m.a,to:"/"},t),r.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(p.a,{title:"Festival"},r.a.createElement(p.a.Item,{as:m.a,to:"/about-armenia"},"About Armenia"),r.a.createElement(p.a.Item,{as:m.a,to:"/djs"},"DJs"),r.a.createElement(p.a.Item,{as:m.a,to:"/orchestra"},"Orchestra"),r.a.createElement(p.a.Item,{as:m.a,to:"/maestros"},"Maestros")),r.a.createElement(p.a,{title:"Packages"},r.a.createElement(p.a.Item,{as:m.a,to:"/packages"},"Festival and Tour packages"),r.a.createElement(p.a.Item,{as:m.a,to:"/workshops-and-milongas"},"Workshops and milongas")),r.a.createElement(d.a.Link,{as:m.a,to:"/media"},"Media"),r.a.createElement(d.a.Link,{as:m.a,to:"/contact-us"},"Contact Us")))))};k.propTypes={siteTitle:o.a.string},k.defaultProps={siteTitle:""};var f=k,w=a(168),v=a.n(w),y=a(169),b=a.n(y),T=a(174),M=function(){return r.a.createElement("footer",{className:"bg-black"},r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(b.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),r.a.createElement("p",null,"First international tango festival in armenia.")),r.a.createElement(b.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),r.a.createElement("p",null,r.a.createElement(T.a,null),"  tango.inarmenia@gmail.com"),r.a.createElement("p",null,r.a.createElement(T.c,null)," ",r.a.createElement(T.d,null)," ",r.a.createElement(T.e,null),"  +374 95889933"),r.a.createElement("p",null,r.a.createElement(T.b,null)," ",r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),r.a.createElement("div",null,"Developed by  ",r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur"))))},N=(a(170),a(171),a(172),function(e){var t=e.children;return r.a.createElement(m.b,{query:"755544856",render:function(e){return r.a.createElement(l.Fragment,null,r.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,t),r.a.createElement(M,null))},data:n})});N.propTypes={children:o.a.node.isRequired};t.a=N}}]);
//# sourceMappingURL=component---src-pages-workshops-and-milongas-js-6104c7b8b8b31a99115a.js.map