(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(160),l=a(159);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a page that doesn't exist... the sadness."))}},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(155);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},159:function(e,t,a){"use strict";var n=a(163),r=a(0),o=a.n(r),l=a(4),c=a.n(l),s=a(173),i=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,s=n.data.site,m=t||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},o.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}),o.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-138348380-1"}),o.a.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'UA-138348380-1');\n\n          var getOutboundLink = function(url) {\n            gtag('event', 'click', {\n              'event_category': 'outbound',\n              'event_label': url,\n              'transport_type': 'beacon',\n              'event_callback': function(){document.location = url;}\n            });\n          }\n        "))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},160:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),l=a(4),c=a.n(l),s=a(154),i=a(165),m=a.n(i),u=a(166),d=a.n(u),p=a(167),g=a.n(p),E=a(158),h=a.n(E),f=function(e){var t=e.siteTitle;return o.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},o.a.createElement(h.a,null,o.a.createElement(m.a.Brand,{as:s.a,to:"/"},t),o.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(d.a,{className:"ml-auto"},o.a.createElement(d.a.Link,{as:s.a,to:"/about-armenia"},"About Armenia"),o.a.createElement(g.a,{title:"Festival"},o.a.createElement(g.a.Item,{as:s.a,to:"/djs"},"DJs"),o.a.createElement(g.a.Item,{as:s.a,to:"/orchestra"},"Orchestra"),o.a.createElement(g.a.Item,{as:s.a,to:"/maestros"},"Teachers/Dancers")),o.a.createElement(g.a,{title:"Booking"},o.a.createElement(g.a.Item,{as:s.a,to:"/packages"},"Festival and Tour packages"),o.a.createElement(g.a.Item,{as:s.a,to:"/workshops-and-milongas"},"Workshops and milongas"),o.a.createElement(g.a.Item,{as:s.a,to:"/workshop-topics"},"Workshop Topics")),o.a.createElement(d.a.Link,{as:s.a,to:"/contact-us"},"Contact Us")))))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var w=f,b=a(168),v=a.n(b),k=a(169),y=a.n(k),T=a(174),F=function(){return window.getOutboundLink("https://www.facebook.com/arthur.khlghatyan.1"),!1},N=function(){return o.a.createElement("footer",{className:"bg-black"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(y.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},o.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),o.a.createElement("p",null,"Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West.")),o.a.createElement(y.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},o.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),o.a.createElement("p",null,o.a.createElement(T.a,null),"  tango.inarmenia@gmail.com"),o.a.createElement("p",null,o.a.createElement(T.c,null)," ",o.a.createElement(T.d,null)," ",o.a.createElement(T.e,null),"  +374 95889933"),o.a.createElement("p",null,o.a.createElement(T.b,null)," ",o.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/armtangofest"},"@armtangofest"))),o.a.createElement(y.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},o.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Useful links"),o.a.createElement("p",null,o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"},"Book now")),o.a.createElement("p",null,o.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/events/279299639637976/"},"Join Event on Facebook")),o.a.createElement("p",null,o.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"Tango School Facebook page"))))),o.a.createElement("div",{className:"footer-copyright text-center py-4"},o.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),o.a.createElement("div",null,"Developed by  ",o.a.createElement("a",{onClick:F,href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},j=(a(170),a(171),a(172),function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(w,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(N,null))},data:n})});j.propTypes={children:c.a.node.isRequired};t.a=j},161:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},162:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(55),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},163:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-bccb404097a29dab1ef3.js.map