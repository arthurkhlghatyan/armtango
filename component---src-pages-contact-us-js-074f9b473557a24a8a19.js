(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);a(270);var n=a(7),r=a.n(n),s=(a(80),a(58),a(39),a(0)),l=a.n(s),o=a(160),c=a(159),i=a(271),m=a.n(i),u=a(275),d=a.n(u),p=a(272),h=m.a.object().keys({fullName:m.a.string().required().label("Full name"),country:m.a.string().required().label("Country"),email:m.a.string().email({minDomainAtoms:2}).label("Email"),phoneNumber:m.a.string().required().label("Phone number"),message:m.a.string().required().label("Message")}),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={form:{fullName:"",country:"",email:"",phoneNumber:"",message:""},captchaVerified:!1,inProgress:!1,error:!1,success:!1},t.verifyCallback=function(e){t.setState({captchaVerified:!0})},t.renderCaptcha=function(){window.grecaptcha.render("g-recaptcha",{sitekey:"6Ldu9J0UAAAAAJ39zvSWlmY6Mj7q-tCH52ipaMzZ",callback:t.verifyCallback})},t.handleChange=function(e,a){return function(a){var n=t.state.form,r=a.target.value;n[e]=r,t.setState({form:n})}},t.handleSubmit=function(){var e=t.state.form,a=t.state,n=a.inProgress,r=a.captchaVerified;!n&&r&&(t.setState({inProgress:!0}),m.a.validate(e,h).then(function(a){p.send("gmail","uplisted",e,"user_vsPR1TroUrLfTA9TiGFcw").then(function(e){t.setState({error:!1,success:!0})},function(e){t.setState({error:!0,success:!1})})}).catch(function(e){t.setState({inProgress:!1,error:!0})}))},t.checkDisabledClass=function(){return t.state.inProgress?"disabled":""},t.onClose=function(){t.setState({error:!1,success:!1})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;void 0!==window.grecaptcha?this.renderCaptcha():setTimeout(function(){e.renderCaptcha()},3e3)},a.render=function(){var e=this.state,t=e.error,a=e.success,n=t?"danger":a?"success":"",r=t?"\n      Oh snap! You got an error!\n      Check the form below and try again.\n    ":a?"Email is successfully sent.":"";return l.a.createElement(o.a,null,l.a.createElement(c.a,{title:"Contact Us",keywords:["tango","#ArmTangoFest2019","festival"]}),l.a.createElement("section",{className:"jumbotron text-center"},l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{show:t||a,dismissible:!0,variant:n,onClose:this.onClose},l.a.createElement("p",null,r)),l.a.createElement("h1",{className:"jumbotron-heading"},"Contact Us"),l.a.createElement("p",{className:"lead text-muted"},"Contact us if you have any questions"),l.a.createElement("form",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Full name",value:this.state.form.fullName,onChange:this.handleChange("fullName")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Country",value:this.state.form.country,onChange:this.handleChange("country")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.form.email,onChange:this.handleChange("email")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone number",value:this.state.form.phoneNumber,onChange:this.handleChange("phoneNumber")})),l.a.createElement("div",null,l.a.createElement("textarea",{placeholder:"Message",className:"form-control mb-3",rows:"4",value:this.state.form.message,onChange:this.handleChange("message")})),l.a.createElement("div",{className:"g-recaptcha",id:"g-recaptcha"}),l.a.createElement("button",{type:"button",className:"mt-3 btn btn-lg btn-block btn-outline-primary "+this.checkDisabledClass(),onClick:this.handleSubmit,"aria-disabled":this.state.inProgress},"Submit"))))))))},t}(s.Component);t.default=g},154:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),s=a(4),l=a.n(s),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(155);var i=r.a.createContext({}),m=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},159:function(e,t,a){"use strict";var n=a(163),r=a(0),s=a.n(r),l=a(4),o=a.n(l),c=a(173),i=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,c=n.data.site,m=t||c.siteMetadata.description;return s.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},s.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},160:function(e,t,a){"use strict";var n=a(161),r=a(0),s=a.n(r),l=a(4),o=a.n(l),c=a(154),i=a(165),m=a.n(i),u=a(166),d=a.n(u),p=a(167),h=a.n(p),g=a(158),f=a.n(g),E=function(e){var t=e.siteTitle;return s.a.createElement(m.a,{className:"navbar-custom",variant:"dark",expand:"lg"},s.a.createElement(f.a,null,s.a.createElement(m.a.Brand,{as:c.a,to:"/"},t),s.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),s.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},s.a.createElement(d.a,{className:"ml-auto"},s.a.createElement(d.a.Link,{as:c.a,to:"/about-armenia"},"About Armenia"),s.a.createElement(h.a,{title:"Festival"},s.a.createElement(h.a.Item,{as:c.a,to:"/djs"},"DJs"),s.a.createElement(h.a.Item,{as:c.a,to:"/orchestra"},"Orchestra"),s.a.createElement(h.a.Item,{as:c.a,to:"/maestros"},"Teachers/Dancers")),s.a.createElement(h.a,{title:"Booking"},s.a.createElement(h.a.Item,{as:c.a,to:"/packages"},"Festival and Tour packages"),s.a.createElement(h.a.Item,{as:c.a,to:"/workshops-and-milongas"},"Workshops and milongas"),s.a.createElement(h.a.Item,{as:c.a,to:"/workshop-topics"},"Workshop Topics")),s.a.createElement(d.a.Link,{as:c.a,to:"/contact-us"},"Contact Us")))))};E.propTypes={siteTitle:o.a.string},E.defaultProps={siteTitle:""};var b=E,v=a(168),y=a.n(v),w=a(169),k=a.n(w),C=a(174),N=function(){return s.a.createElement("footer",{className:"bg-black"},s.a.createElement(f.a,null,s.a.createElement(y.a,null,s.a.createElement(k.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},s.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),s.a.createElement("p",null,"Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West.")),s.a.createElement(k.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},s.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),s.a.createElement("p",null,s.a.createElement(C.a,null),"  tango.inarmenia@gmail.com"),s.a.createElement("p",null,s.a.createElement(C.c,null)," ",s.a.createElement(C.d,null)," ",s.a.createElement(C.e,null),"  +374 95889933"),s.a.createElement("p",null,s.a.createElement(C.b,null)," ",s.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/armtangofest"},"@armtangofest"))),s.a.createElement(k.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},s.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Useful links"),s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"},"Book now")),s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/events/279299639637976/"},"Join Event on Facebook")),s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"Tango School Facebook page"))))),s.a.createElement("div",{className:"footer-copyright text-center py-4"},s.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),s.a.createElement("div",null,"Developed by  ",s.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},T=(a(170),a(171),a(172),function(e){var t=e.children;return s.a.createElement(c.b,{query:"755544856",render:function(e){return s.a.createElement(r.Fragment,null,s.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",null,t),s.a.createElement(N,null))},data:n})});T.propTypes={children:o.a.node.isRequired};t.a=T},161:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},162:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),o=a(55),c=a(2),i=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},163:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-074f9b473557a24a8a19.js.map