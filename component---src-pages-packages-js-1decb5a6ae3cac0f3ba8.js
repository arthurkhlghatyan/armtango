(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(162),o=t(161),c=function(){return getOutboundLink("https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"),!1};a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Packages",keywords:["tango","#ArmTangoFest2019","armenia"]}),r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"jumbotron-heading"},"Packages"),r.a.createElement("p",{className:"lead text-muted"},"Explore packages"),r.a.createElement("div",{className:"card-deck mb-3 text-center"},r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Budget Package")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title pricing-card-title"},"€685"),r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,"Yerevan Tango Festival"),r.a.createElement("li",null,"3 milongas + 5 workshops"),r.a.createElement("li",null,"Tango Tour(5 night/6 day)"),r.a.createElement("li",null,"7 milongas + 5 workshops"),r.a.createElement("li",null,"Tsakhkadzor resort weekend")),r.a.createElement("button",{onClick:c,type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Book now"))),r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Special Package")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title pricing-card-title"},"€875"),r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,"Everything in budget package"),r.a.createElement("li",null,"Luxe rooms"),r.a.createElement("li",null,"Airport pick up and drop off"),r.a.createElement("li",null,"Pick up from hotel to milonga or the studios for workshops")),r.a.createElement("button",{onClick:c,type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Book now"))),r.a.createElement("div",{className:"card mb-4 box-shadow"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"my-0 font-weight-normal"},"Tsakhkadzor Resort Weekend")),r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title pricing-card-title"},"€195"),r.a.createElement("ul",{className:"list-unstyled mt-3 mb-4"},r.a.createElement("li",null,"3 milongas + 4 workshops"),r.a.createElement("li",null,"3 days/ 2 nights in the hotel"),r.a.createElement("li",null,"Gala dinner with Asado bbq"),r.a.createElement("li",null,"3 times meals"),r.a.createElement("li",null,"City tour, Kecharis Monastery")),r.a.createElement("button",{onClick:c,type:"button",className:"btn btn-lg btn-block btn-outline-primary"},"Book now")))))))}},157:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(33),s=t.n(c);t.d(a,"a",function(){return s.a});t(158);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,a,t){var n;e.exports=(n=t(165))&&n.default||n},161:function(e,a,t){"use strict";var n=t(166),r=t(0),l=t.n(r),o=t(4),c=t.n(o),s=t(163),i=t.n(s);function m(e){var a=e.description,t=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,m=a||s.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=m},162:function(e,a,t){"use strict";var n=t(164),r=t(0),l=t.n(r),o=t(4),c=t.n(o),s=t(157),i=t(163),m=t.n(i),u=t(169),d=t.n(u),g=t(170),p=t.n(g),E=t(171),h=t.n(E),b=t(160),w=t.n(b),f=function(e){var a=e.siteTitle;return l.a.createElement(d.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(w.a,null,l.a.createElement(d.a.Brand,{as:s.a,to:"/"},a),l.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(p.a,{className:"ml-auto"},l.a.createElement(p.a.Link,{as:s.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(h.a,{title:"Festival"},l.a.createElement(h.a.Item,{as:s.a,to:"/djs"},"DJs"),l.a.createElement(h.a.Item,{as:s.a,to:"/orchestra"},"Orchestra"),l.a.createElement(h.a.Item,{as:s.a,to:"/maestros"},"Teachers/Dancers"),l.a.createElement(h.a.Item,{as:s.a,to:"/venues-and-locations"},"Venues and Locations")),l.a.createElement(h.a,{title:"Schedule"},l.a.createElement(h.a.Item,{as:s.a,to:"/calendar"},"Calendar"),l.a.createElement(h.a.Item,{as:s.a,to:"/workshop-topics"},"Workshop Topics")),l.a.createElement(h.a,{title:"Booking"},l.a.createElement(h.a.Item,{as:s.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(h.a.Item,{as:s.a,to:"/workshops-and-milongas"},"Workshops and milongas"),l.a.createElement(h.a.Item,{as:s.a,to:"/yerevan-hotels"},"Yerevan Hotels")),l.a.createElement(p.a.Link,{as:s.a,to:"/partners"},"Partners"),l.a.createElement(p.a.Link,{as:s.a,to:"/contact-us"},"Contact Us")))))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var k=f,v=t(172),y=t.n(v),N=t(173),T=t.n(N),F=t(176),C=function(){return window.getOutboundLink("https://www.facebook.com/arthur.khlghatyan.1"),!1},L=function(){return getOutboundLink("https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"),!1},j=function(){return l.a.createElement("footer",null,l.a.createElement(w.a,null,l.a.createElement(y.a,null,l.a.createElement(T.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West.")),l.a.createElement(T.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(F.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(F.c,null)," ",l.a.createElement(F.d,null)," ",l.a.createElement(F.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(F.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/armtangofest"},"@armtangofest"))),l.a.createElement(T.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Useful links"),l.a.createElement("p",null,l.a.createElement("a",{onClick:L,href:"https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"},"Book now")),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/events/279299639637976/"},"Join Event on Facebook")),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"Tango School Facebook page"))))),l.a.createElement("div",{className:"footer-copyright text-center py-4"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{onClick:C,href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},x=(t(174),t(175),function(e){var a=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(m.a,null,l.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}),l.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-138348380-1"}),l.a.createElement("script",null,"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', 'UA-138348380-1');\n\n              var getOutboundLink = function(url) {\n                gtag('event', 'click', {\n                  'event_category': 'outbound',\n                  'event_label': url,\n                  'transport_type': 'beacon',\n                  'event_callback': function() {document.location = url;}\n                });\n              }\n            ")),l.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,a),l.a.createElement(j,null))},data:n})});x.propTypes={children:c.a.node.isRequired};a.a=x},164:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},165:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(55),s=t(2),i=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=i},166:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-packages-js-1decb5a6ae3cac0f3ba8.js.map