(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,a,n){"use strict";n.r(a),n.d(a,"query",function(){return v});n(178);var t=n(7),i=n.n(t),o=n(0),r=n.n(o),s=n(176),l=n.n(s),d=n(161),c=n(160),h=n(185),m=n(186),u=n(187),y=n(188),g=n.n(y),p=n(189),f=function(e){function a(){for(var a,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return(a=e.call.apply(e,[this].concat(t))||this).state={showBio:!1,showGallery:!1,showVideos:!1,bioItemName:"yuliana-basmajyan",galleryItemName:"yuliana-basmajyan",videoItemName:"yuliana-basmajyan"},a.page={title:"Maestros",keywords:["tango","#ArmTangoFest2019","maestros"],description:"\n      Famous tango maestros are going to share, teach and dance during Festival.\n    "},a.data={"yuliana-basmajyan":{title:"Yuliana Basmajyan",graphAlias:"yulianaBasmajyan",description:"\n        Born and raised in Armenia, Yuliana Basmajyan immigrated to the US in her early adolescent years.\n        For many years she tested her skills in different dance forms including modern, jazz, flamenco, and extensive training in Salsa.\n        After several years of Latin dancing she discovered her true calling, a dance that truly inspired and challenged her…Tango.\n      ",videos:["HDJYm2okrbo","vi1ZDL8aBMI"]},"dominic-bridge":{title:"Dominic Bridge",description:"\n        Dominic has been working in tango full-time since 2007.\n        He has taught and performed in international tango festivals,\n        cultural events, and offered workshops in over a dozen countries around the world,\n        including Buenos Aires.\n      ",graphAlias:"dominicBridge",videos:["XOHGiT-xaBM","1cdtb-yrZxY","yanTqfvvUsw"]},"ronen-dorit":{title:"Ronen & Dorit",description:"\n        Dance the emotion - one of the main characteristics of Dorit and Ronen's tango, combined with very high level of technique and precision.\n        A strong emphasis on embrace, deep and real connection and uncompromised passion create their special and unique art of tango.\n        Within this ambient they teach their tango classes with a nice combination of excellent didactic skills and the feeling of the love of the dance and the never ending joy of it.\n      ",graphAlias:"ronenDorit",videos:["QmWUVDlK1wk","ABsTgrSARJQ"]},"tatiana-pavel":{title:"Tatiana Gordinscaia & Pavel Lozan",description:"\n        Tatiana & Pavel dancing together since year 2013. Tatiana founded first school of Argentinean tango in Moldova in 2010, and also organized 3 big festivals and 3 marathons, common known as MADT.\n      ",graphAlias:"tatianaPavel",videos:["OytWpIZnYq8"]}},a.openReadMore=function(e){a.setState({showBio:!0,bioItemName:e})},a.openGallery=function(e){a.setState({showGallery:!0,galleryItemName:e})},a.openWatchVideos=function(e){a.setState({showVideos:!0,videoItemName:e})},a.handleBioClose=function(){a.setState({showBio:!1})},a.handleVideosClose=function(){a.setState({showVideos:!1})},a.handleGalleryClose=function(){a.setState({showGallery:!1})},a.findThumbnail=function(e){for(var n=a.props.data.thumbnails.edges,t=n.length,i=0;i<t;i+=1)if(n[i].node.name===e)return n[i].node.childImageSharp.fluid;return!1},a}i()(a,e);var n=a.prototype;return n.renderVideos=function(){var e=this.state.videoItemName;return this.data[e].videos.map(function(e,a){return r.a.createElement("iframe",{key:a,width:"100%",height:"345",src:"https://www.youtube.com/embed/"+e})})},n.renderVideoModal=function(){var e=this.state.showVideos;return r.a.createElement(g.a,{show:e,onHide:this.handleVideosClose},r.a.createElement(g.a.Header,{closeButton:!0},r.a.createElement(g.a.Title,null,"Videos")),r.a.createElement(g.a.Body,null,this.renderVideos()))},n.renderGalleryImages=function(){var e=this.state.galleryItemName,a=this.data[e].graphAlias;return this.props.data[a+"Slides"].edges.map(function(e,a){return r.a.createElement(l.a,{className:"mb-3 pics animation all 2",key:a,fluid:e.node.childImageSharp.fluid})})},n.renderGalleryModal=function(){var e=this.state.showGallery;return r.a.createElement(g.a,{show:e,onHide:this.handleGalleryClose},r.a.createElement(g.a.Header,{closeButton:!0},r.a.createElement(g.a.Title,null,"Gallery")),r.a.createElement(g.a.Body,null,r.a.createElement("div",{className:"gallery",id:"gallery"},this.renderGalleryImages())))},n.renderBioModal=function(){var e=this.state,a=e.showBio,n=e.bioItemName;return r.a.createElement(g.a,{show:a,onHide:this.handleBioClose},r.a.createElement(g.a.Header,{closeButton:!0},r.a.createElement(g.a.Title,null,"Biography")),r.a.createElement(g.a.Body,{dangerouslySetInnerHTML:{__html:p.a[n]}}))},n.renderItems=function(){var e=this;return["yuliana-basmajyan","dominic-bridge","ronen-dorit","tatiana-pavel"].map(function(a,n){var t=e.data[a],i=t.title,o=t.description;return r.a.createElement(h.a,{key:n,slug:a,title:i,description:o,hasVideos:!0,thumbnailFluid:e.findThumbnail(a),onReadMoreClick:e.openReadMore.bind(e,a),onSeePhotosClick:e.openGallery.bind(e,a),onWatchVideosClick:e.openWatchVideos.bind(e,a)})})},n.render=function(){var e=this.page,a=e.title,n=e.description,t=e.keywords;this.props.data;return r.a.createElement(d.a,null,r.a.createElement(c.a,{title:a,keywords:t}),r.a.createElement(m.a,{title:a,description:n}),r.a.createElement(u.a,null,this.renderItems()),this.renderBioModal(),this.renderGalleryModal(),this.renderVideoModal())},a}(o.Component),v="3272896041";a.default=f}}]);
//# sourceMappingURL=component---src-pages-maestros-js-dfd2b05f75599830b926.js.map