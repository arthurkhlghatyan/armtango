(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(159),c=t(158);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Packages",keywords:["tango","#ArmTangoFest2019","armenia"]}),r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Packages"),r.a.createElement("p",{className:"lead text-muted"},"Explore packages"),r.a.createElement("div",{className:"card-deck mb-3 text-center"},r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Budget Package")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title pricing-card-title"},"€685"),r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,"Yerevan Tango Festival"),r.a.createElement("li",null,"3 milongas + 5 workshops"),r.a.createElement("li",null,"Tango Tour(5 night/6 day)"),r.a.createElement("li",null,"7 milongas + 5 workshops"),r.a.createElement("li",null,"Tsakhkadzor resort weekend")),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Book now"))),r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Special Package")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title pricing-card-title"},"€875"),r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,"Everything in budget package"),r.a.createElement("li",null,"Luxe rooms"),r.a.createElement("li",null,"Airport pick up and drop off"),r.a.createElement("li",null,"Pick up from hotel to milonga or the studios for workshops")),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Book now"))),r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Tsakhkadzor Resort Weekend")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title pricing-card-title"},"€195"),r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,"3 milongas + 4 workshops"),r.a.createElement("li",null,"3 days/ 2 nights in the hotel"),r.a.createElement("li",null,"Gala dinner with Asado bbq"),r.a.createElement("li",null,"3 times meals"),r.a.createElement("li",null,"City tour, Kecharis Monastery")),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Book now")))))))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(33),o=t.n(s);t.d(a,"a",function(){return o.a});t(155);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},155:function(e,a,t){var n;e.exports=(n=t(161))&&n.default||n},158:function(e,a,t){"use strict";var n=t(162),r=t(0),l=t.n(r),c=t(4),s=t.n(c),o=t(172),i=t.n(o);function m(e){var a=e.description,t=e.lang,r=e.meta,c=e.keywords,s=e.title,o=n.data.site,m=a||o.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},l.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=m},159:function(e,a,t){"use strict";var n=t(160),r=t(0),l=t.n(r),c=t(4),s=t.n(c),o=t(154),i=t(164),m=t.n(i),u=t(165),d=t.n(u),p=t(166),E=t.n(p),g=t(157),h=t.n(g),b=function(e){var a=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(h.a,null,l.a.createElement(m.a.Brand,{as:o.a,to:"/"},a),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(d.a.Link,{as:o.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(E.a,{title:"Festival"},l.a.createElement(E.a.Item,{as:o.a,to:"/djs"},"DJs"),l.a.createElement(E.a.Item,{as:o.a,to:"/orchestra"},"Orchestra"),l.a.createElement(E.a.Item,{as:o.a,to:"/maestros"},"Teachers/Dancers")),l.a.createElement(E.a,{title:"Packages"},l.a.createElement(E.a.Item,{as:o.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(E.a.Item,{as:o.a,to:"/workshops-and-milongas"},"Workshops and milongas")),l.a.createElement(d.a.Link,{as:o.a,to:"/contact-us"},"Contact Us")))))};b.propTypes={siteTitle:s.a.string},b.defaultProps={siteTitle:""};var y=b,k=t(167),v=t.n(k),f=t(168),w=t.n(f),N=t(173),T=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(h.a,null,l.a.createElement(v.a,null,l.a.createElement(w.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"First international tango festival in armenia.")),l.a.createElement(w.a,{sm:12,md:3,lg:3,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(N.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(N.c,null)," ",l.a.createElement(N.d,null)," ",l.a.createElement(N.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(N.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"@lavida.tango.yerevan"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},x=(t(169),t(170),t(171),function(e){var a=e.children;return l.a.createElement(o.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,a),l.a.createElement(T,null))},data:n})});x.propTypes={children:s.a.node.isRequired};a.a=x},160:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},161:function(e,a,t){"use strict";t.r(a);t(35);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(55),o=t(2),i=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=i},162:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-packages-js-c3ba9d17ecdc01391ab9.js.map