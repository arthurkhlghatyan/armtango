(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);a(270);var n=a(7),r=a.n(n),l=(a(80),a(58),a(39),a(0)),o=a.n(l),s=a(160),c=a(159),i=a(271),m=a.n(i),u=a(275),d=a.n(u),p=a(272),g=m.a.object().keys({fullName:m.a.string().required().label("Full name"),country:m.a.string().required().label("Country"),email:m.a.string().email({minDomainAtoms:2}).label("Email"),phoneNumber:m.a.string().required().label("Phone number"),message:m.a.string().required().label("Message")}),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={form:{fullName:"",country:"",email:"",phoneNumber:"",message:""},captchaVerified:!1,inProgress:!1,error:!1,success:!1},t.verifyCallback=function(e){t.setState({captchaVerified:!0})},t.renderCaptcha=function(){window.grecaptcha.render("g-recaptcha",{sitekey:"6Ldu9J0UAAAAAJ39zvSWlmY6Mj7q-tCH52ipaMzZ",callback:t.verifyCallback})},t.handleChange=function(e,a){return function(a){var n=t.state.form,r=a.target.value;n[e]=r,t.setState({form:n})}},t.handleSubmit=function(){var e=t.state.form,a=t.state,n=a.inProgress,r=a.captchaVerified;!n&&r&&(t.setState({inProgress:!0}),m.a.validate(e,g).then(function(a){p.send("gmail","uplisted",e,"user_vsPR1TroUrLfTA9TiGFcw").then(function(e){t.setState({error:!1,success:!0})},function(e){t.setState({error:!0,success:!1})})}).catch(function(e){t.setState({inProgress:!1,error:!0})}))},t.checkDisabledClass=function(){return t.state.inProgress?"disabled":""},t.onClose=function(){t.setState({error:!1,success:!1})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;void 0!==window.grecaptcha?this.renderCaptcha():setTimeout(function(){e.renderCaptcha()},3e3)},a.render=function(){var e=this.state,t=e.error,a=e.success,n=t?"danger":a?"success":"",r=t?"\n      Oh snap! You got an error!\n      Check the form below and try again.\n    ":a?"Email is successfully sent.":"";return o.a.createElement(s.a,null,o.a.createElement(c.a,{title:"Contact Us",keywords:["tango","#ArmTangoFest2019","festival"]}),o.a.createElement("section",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container"},o.a.createElement(d.a,{show:t||a,dismissible:!0,variant:n,onClose:this.onClose},o.a.createElement("p",null,r)),o.a.createElement("h1",{className:"jumbotron-heading"},"Contact Us"),o.a.createElement("p",{className:"lead text-muted"},"Contact us if you have any questions"),o.a.createElement("form",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Full name",value:this.state.form.fullName,onChange:this.handleChange("fullName")})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Country",value:this.state.form.country,onChange:this.handleChange("country")})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.form.email,onChange:this.handleChange("email")})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone number",value:this.state.form.phoneNumber,onChange:this.handleChange("phoneNumber")})),o.a.createElement("div",null,o.a.createElement("textarea",{placeholder:"Message",className:"form-control mb-3",rows:"4",value:this.state.form.message,onChange:this.handleChange("message")})),o.a.createElement("div",{className:"g-recaptcha",id:"g-recaptcha"}),o.a.createElement("button",{type:"button",className:"mt-3 btn btn-lg btn-block btn-outline-primary "+this.checkDisabledClass(),onClick:this.handleSubmit,"aria-disabled":this.state.inProgress},"Submit"))))))))},t}(l.Component);t.default=h},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(155);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},159:function(e,t,a){"use strict";var n=a(163),r=a(0),l=a.n(r),o=a(4),s=a.n(o),c=a(173),i=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,m=t||c.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},l.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}),l.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-138348380-1"}),l.a.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'UA-138348380-1');\n\n          var getOutboundLink = function(url) {\n            gtag('event', 'click', {\n              'event_category': 'outbound',\n              'event_label': url,\n              'transport_type': 'beacon',\n              'event_callback': function(){document.location = url;}\n            });\n          }\n        "))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},160:function(e,t,a){"use strict";var n=a(161),r=a(0),l=a.n(r),o=a(4),s=a.n(o),c=a(154),i=a(165),m=a.n(i),u=a(166),d=a.n(u),p=a(167),g=a.n(p),h=a(158),f=a.n(h),E=function(e){var t=e.siteTitle;return l.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},l.a.createElement(f.a,null,l.a.createElement(m.a.Brand,{as:c.a,to:"/"},t),l.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(d.a,{className:"ml-auto"},l.a.createElement(d.a.Link,{as:c.a,to:"/about-armenia"},"About Armenia"),l.a.createElement(g.a,{title:"Festival"},l.a.createElement(g.a.Item,{as:c.a,to:"/djs"},"DJs"),l.a.createElement(g.a.Item,{as:c.a,to:"/orchestra"},"Orchestra"),l.a.createElement(g.a.Item,{as:c.a,to:"/maestros"},"Teachers/Dancers")),l.a.createElement(g.a,{title:"Booking"},l.a.createElement(g.a.Item,{as:c.a,to:"/packages"},"Festival and Tour packages"),l.a.createElement(g.a.Item,{as:c.a,to:"/workshops-and-milongas"},"Workshops and milongas"),l.a.createElement(g.a.Item,{as:c.a,to:"/workshop-topics"},"Workshop Topics")),l.a.createElement(d.a.Link,{as:c.a,to:"/contact-us"},"Contact Us")))))};E.propTypes={siteTitle:s.a.string},E.defaultProps={siteTitle:""};var b=E,v=a(168),w=a.n(v),y=a(169),k=a.n(y),C=a(174),N=function(){return window.getOutboundLink("https://www.facebook.com/arthur.khlghatyan.1"),!1},T=function(){return l.a.createElement("footer",{className:"bg-black"},l.a.createElement(f.a,null,l.a.createElement(w.a,null,l.a.createElement(k.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),l.a.createElement("p",null,"Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West.")),l.a.createElement(k.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),l.a.createElement("p",null,l.a.createElement(C.a,null),"  tango.inarmenia@gmail.com"),l.a.createElement("p",null,l.a.createElement(C.c,null)," ",l.a.createElement(C.d,null)," ",l.a.createElement(C.e,null),"  +374 95889933"),l.a.createElement("p",null,l.a.createElement(C.b,null)," ",l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/armtangofest"},"@armtangofest"))),l.a.createElement(k.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},l.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Useful links"),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"},"Book now")),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/events/279299639637976/"},"Join Event on Facebook")),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"Tango School Facebook page"))))),l.a.createElement("div",{className:"footer-copyright text-center py-4"},l.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),l.a.createElement("div",null,"Developed by  ",l.a.createElement("a",{onClick:N,href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},A=(a(170),a(171),a(172),function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(T,null))},data:n})});A.propTypes={children:s.a.node.isRequired};t.a=A},161:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},162:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),s=a(55),c=a(2),i=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=i},163:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-20b3c45e0018918548da.js.map