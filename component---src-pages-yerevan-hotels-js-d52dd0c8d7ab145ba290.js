(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{150:function(e,a,t){"use strict";t.r(a);t(177);var r=t(7),n=t.n(r),l=t(0),o=t.n(l),i=t(178),s=t.n(i),d=t(161),c=t(160),u=t(186),m=t(165),h=t(187),p=t(188),y=t.n(p),f=t(189),g={"ararat-hotel":{title:"Ararat Hotel (★ ★ ★ ★ ☆)",graphAlias:"araratHotel",description:"\n      Ararat Hotel is not just a hotel, it’s a complex providing a wide range of hotel services as well as other attractive ways of rest and relaxation.\n    "},"armenia-tour":{title:"Armenia Tour",graphAlias:"armeniaTour",description:'\n      "Armenia Tour" travel agency was founded in 2015 and spares no effort for developing its business intensively.\n    '}};t.d(a,"query",function(){return v});var w=function(e){function a(){for(var a,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))||this).state={showBio:!1,showGallery:!1,bioItemName:"ararat-hotel",galleryItemName:"ararat-hotel"},a.page={title:"Yerevan Hotels",keywords:["tango","#ArmTangoFest2019","hotels"],description:"\n      Hurry up to register!!! We have special rates and upgraded rooms for Armenia Tango Festival participants.\n    "},a.openReadMore=function(e){a.setState({showBio:!0,bioItemName:e})},a.openGallery=function(e){a.setState({showGallery:!0,galleryItemName:e})},a.handleBioClose=function(){a.setState({showBio:!1})},a.handleGalleryClose=function(){a.setState({showGallery:!1})},a.findThumbnail=function(e){for(var t=a.props.data.thumbnails.edges,r=t.length,n=0;n<r;n+=1)if(t[n].node.name===e)return t[n].node.childImageSharp.fluid;return!1},a}n()(a,e);var t=a.prototype;return t.renderGalleryImages=function(){var e=this.state.galleryItemName,a=g[e].graphAlias;return this.props.data[a+"Slides"].edges.map(function(e,a){return o.a.createElement("div",{key:a,className:"mb-3 pics animation all 2"},o.a.createElement(s.a,{className:"img-fluid",fluid:e.node.childImageSharp.fluid}))})},t.renderGalleryModal=function(){var e=this.state.showGallery;return o.a.createElement(y.a,{show:e,onHide:this.handleGalleryClose},o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,null,"Gallery")),o.a.createElement(y.a.Body,null,o.a.createElement("div",{className:"gallery",id:"gallery"},this.renderGalleryImages())))},t.renderBioModal=function(){var e=this.state,a=e.showBio,t=e.bioItemName;return o.a.createElement(y.a,{show:a,onHide:this.handleBioClose},o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,null,"Biography")),o.a.createElement(y.a.Body,{dangerouslySetInnerHTML:{__html:f.a[t]}}))},t.renderItems=function(){var e=this;return["ararat-hotel","armenia-tour"].map(function(a,t){var r=g[a],n=r.title,l=r.description;return o.a.createElement(u.a,{key:t,slug:a,title:n,description:l,thumbnailFluid:e.findThumbnail(a),onReadMoreClick:e.openReadMore.bind(e,a),onSeePhotosClick:e.openGallery.bind(e,a)})})},t.render=function(){var e=this.page,a=e.title,t=e.description,r=e.keywords;this.props.data;return o.a.createElement(d.a,null,o.a.createElement(c.a,{title:a,keywords:r}),o.a.createElement(m.a,{title:a,description:t}),o.a.createElement(h.a,null,this.renderItems()),this.renderBioModal(),this.renderGalleryModal())},a}(l.Component),v="4276621684";a.default=w}}]);
//# sourceMappingURL=component---src-pages-yerevan-hotels-js-d52dd0c8d7ab145ba290.js.map