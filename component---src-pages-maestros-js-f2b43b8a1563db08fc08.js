(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{145:function(e,a,n){"use strict";n.r(a);var t=n(7),i=n.n(t),r=n(0),o=n.n(r),s=n(161),l=n(162),c=n(203),d=n.n(c),h=n(350),m=n.n(h),u=n(351),p=n.n(u),g=n(352),f=n.n(g),y=n(353),b=n.n(y),v=n(185),w=function(e){function a(){for(var a,n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];return(a=e.call.apply(e,[this].concat(t))||this).state={show:!1,showVideoModal:!1,showGalleryModal:!1,maestroName:"",videoMaestroName:"",galleryMaestroName:""},a.videos={"yuliana-basmajyan":["HDJYm2okrbo","vi1ZDL8aBMI"],"dominic-bridge":["XOHGiT-xaBM","1cdtb-yrZxY","yanTqfvvUsw"],"ronen-&-dorit":["QmWUVDlK1wk","ABsTgrSARJQ"],"tatiana-gordinscaia-&-pavel-lozan":["OytWpIZnYq8"]},a.handleClose=function(){a.setState({show:!1,maestroName:""})},a.handleVideoModalClose=function(){a.setState({showVideoModal:!1})},a.openReadMoreModal=function(e){a.setState({show:!0,maestroName:e})},a.openVideoModal=function(e){a.setState({showVideoModal:!0,videoMaestroName:e})},a}i()(a,e);var n=a.prototype;return n.renderVideos=function(){var e=this.state.videoMaestroName;if(""===e)return null;var a=this.videos[e].map(function(e,a){return o.a.createElement("iframe",{key:a,width:"100%",height:"345",src:"https://www.youtube.com/embed/"+e})});return console.log(a),a},n.render=function(){var e=this.state,a=e.show,n=e.showVideoModal,t=e.maestroName;e.videoMaestroName;return o.a.createElement(s.a,null,o.a.createElement(l.a,{title:"Maestros",keywords:["tango","#ArmTangoFest2019","maestros"]}),o.a.createElement("section",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"jumbotron-heading"},"Maestros"),o.a.createElement("p",{className:"lead text-muted"},"Famous tango maestros are going to share, teach and dance during Festival."))),o.a.createElement("div",{className:"album py-5 bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"card mb-4 box-shadow"},o.a.createElement("img",{className:"card-img-top",alt:"Thumbnail [100%x225]",style:{height:225,width:"100%",display:"block"},"data-holder-rendered":"true",src:m.a}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},o.a.createElement("strong",null,"Yuliana Basmajyan")),o.a.createElement("p",{className:"card-text"},"Born and raised in Armenia, Yuliana Basmajyan immigrated to the US in her early adolescent years. For many years she tested her skills in different dance forms including modern, jazz, flamenco, and extensive training in Salsa. After several years of Latin dancing she discovered her true calling, a dance that truly inspired and challenged her…Tango."),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:this.openReadMoreModal.bind(this,"yuliana-basmajyan")},"Read More"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:this.openVideoModal.bind(this,"yuliana-basmajyan")},"Watch Video"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"See Photos")))))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"card mb-4 box-shadow"},o.a.createElement("img",{className:"card-img-top",alt:"Thumbnail [100%x225]",style:{height:225,width:"100%",display:"block"},"data-holder-rendered":"true",src:f.a}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},o.a.createElement("strong",null,"Dominic Bridge")),o.a.createElement("p",{className:"card-text"},"Dominic has been working in tango full-time since 2007. He has taught and performed in international tango festivals, cultural events, and offered workshops in over a dozen countries around the world, including Buenos Aires."),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{onClick:this.openReadMoreModal.bind(this,"dominic-bridge"),type:"button",className:"btn btn-sm btn-outline-secondary"},"Read More"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:this.openVideoModal.bind(this,"dominic-bridge")},"Watch Video"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"See Photos")))))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"card mb-4 box-shadow"},o.a.createElement("img",{className:"card-img-top",alt:"Thumbnail [100%x225]",style:{height:225,width:"100%",display:"block"},"data-holder-rendered":"true",src:p.a}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},o.a.createElement("strong",null,"Ronen & Dorit")),o.a.createElement("p",{className:"card-text"},"Dance the emotion - one of the main characteristics of Dorit and Ronen's  tango, combined with very high level of technique and precision. A strong emphasis on embrace, deep and real connection and uncompromised passion create their special and unique art of tango. Within this ambient they teach their tango classes with a nice combination of excellent didactic skills and the feeling of the love of the dance and the never ending joy of it."),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{onClick:this.openReadMoreModal.bind(this,"ronen-&-dorit"),type:"button",className:"btn btn-sm btn-outline-secondary"},"Read More"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:this.openVideoModal.bind(this,"ronen-&-dorit")},"Watch Video"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"See Photos")))))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"card mb-4 box-shadow"},o.a.createElement("img",{className:"card-img-top",alt:"Thumbnail [100%x225]",style:{height:225,width:"100%",display:"block"},"data-holder-rendered":"true",src:b.a}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},o.a.createElement("strong",null,"Tatiana Gordinscaia & Pavel Lozan")),o.a.createElement("p",{className:"card-text"},"Tatiana & Pavel dancing together since year 2013. Tatiana founded first school of Argentinean tango in Moldova in 2010, and also organized 3 big festivals and 3 marathons, common known as MADT."),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{onClick:this.openReadMoreModal.bind(this,"tatiana-gordinscaia-&-pavel-lozan"),type:"button",className:"btn btn-sm btn-outline-secondary"},"Read More"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:this.openVideoModal.bind(this,"tatiana-gordinscaia-&-pavel-lozan")},"Watch Video"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},"See Photos"))))))))),o.a.createElement(d.a,{show:a,onHide:this.handleClose},o.a.createElement(d.a.Header,{closeButton:!0},o.a.createElement(d.a.Title,null,"Biography")),o.a.createElement(d.a.Body,{dangerouslySetInnerHTML:{__html:v.a[t]}})),o.a.createElement(d.a,{show:n,onHide:this.handleVideoModalClose},o.a.createElement(d.a.Header,{closeButton:!0},o.a.createElement(d.a.Title,null,"Videos")),o.a.createElement(d.a.Body,null,this.renderVideos())),o.a.createElement(d.a,{show:n,onHide:this.handleVideoModalClose},o.a.createElement(d.a.Header,{closeButton:!0},o.a.createElement(d.a.Title,null,"Videos")),o.a.createElement(d.a.Body,null,this.renderVideos())))},a}(r.Component);a.default=w},154:function(e,a,n){"use strict";n.d(a,"b",function(){return d});var t=n(0),i=n.n(t),r=n(4),o=n.n(r),s=n(33),l=n.n(s);n.d(a,"a",function(){return l.a});n(155);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,a,n){var t;e.exports=(t=n(160))&&t.default||t},159:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019"}}}}},160:function(e,a,n){"use strict";n.r(a);n(35);var t=n(0),i=n.n(t),r=n(4),o=n.n(r),s=n(55),l=n(2),c=function(e){var a=e.location,n=l.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(s.a,Object.assign({location:a,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c},161:function(e,a,n){"use strict";var t=n(159),i=n(0),r=n.n(i),o=n(4),s=n.n(o),l=n(154),c=n(165),d=n.n(c),h=n(166),m=n.n(h),u=n(167),p=n.n(u),g=n(157),f=n.n(g),y=function(e){var a=e.siteTitle;return r.a.createElement(d.a,{className:"navbar-custom",variant:"dark",expand:"lg"},r.a.createElement(f.a,null,r.a.createElement(d.a.Brand,{as:l.a,to:"/"},a),r.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"ml-auto"},r.a.createElement(m.a.Link,{as:l.a,to:"/about-armenia"},"About Armenia"),r.a.createElement(p.a,{title:"Festival"},r.a.createElement(p.a.Item,{as:l.a,to:"/djs"},"DJs"),r.a.createElement(p.a.Item,{as:l.a,to:"/orchestra"},"Orchestra"),r.a.createElement(p.a.Item,{as:l.a,to:"/maestros"},"Teachers/Dancers")),r.a.createElement(p.a,{title:"Booking"},r.a.createElement(p.a.Item,{as:l.a,to:"/packages"},"Festival and Tour packages"),r.a.createElement(p.a.Item,{as:l.a,to:"/workshops-and-milongas"},"Workshops and milongas"),r.a.createElement(p.a.Item,{as:l.a,to:"/workshop-topics"},"Workshop Topics")),r.a.createElement(m.a.Link,{as:l.a,to:"/contact-us"},"Contact Us")))))};y.propTypes={siteTitle:s.a.string},y.defaultProps={siteTitle:""};var b=y,v=n(168),w=n.n(v),E=n(169),A=n.n(E),T=n(173),k=function(){return r.a.createElement("footer",{className:"bg-black"},r.a.createElement(f.a,null,r.a.createElement(w.a,null,r.a.createElement(A.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"#ArmTangoFest2019"),r.a.createElement("p",null,"Maestros, tangueras, tangueros, and DJs from all over the world will join us for this inaugural Tango Festival in Armenia – the ancient land at the crossroads of East and West.")),r.a.createElement(A.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Contact"),r.a.createElement("p",null,r.a.createElement(T.a,null),"  tango.inarmenia@gmail.com"),r.a.createElement("p",null,r.a.createElement(T.c,null)," ",r.a.createElement(T.d,null)," ",r.a.createElement(T.e,null),"  +374 95889933"),r.a.createElement("p",null,r.a.createElement(T.b,null)," ",r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/armtangofest"},"@armtangofest"))),r.a.createElement(A.a,{sm:12,md:4,lg:4,className:"mt-4 mb-1"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mb-4"},"Useful links"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSe8pL_3YiNJZbFwPC1gtCggzjHjid14rbZnDXJRYbFzYsBi_w/viewform"},"Book now")),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/events/279299639637976/"},"Join Event on Facebook")),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/lavida.tango.yerevan"},"Tango School Facebook page"))))),r.a.createElement("div",{className:"footer-copyright text-center py-4"},r.a.createElement("div",null,"© 2019 Copyright: ArmTangoFest2019"),r.a.createElement("div",null,"Developed by  ",r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/arthur.khlghatyan.1"},"Arthur K."))))},M=(n(170),n(171),n(172),function(e){var a=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(i.Fragment,null,r.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("main",null,a),r.a.createElement(k,null))},data:t})});M.propTypes={children:s.a.node.isRequired};a.a=M},162:function(e,a,n){"use strict";var t=n(163),i=n(0),r=n.n(i),o=n(4),s=n.n(o),l=n(174),c=n.n(l);function d(e){var a=e.description,n=e.lang,i=e.meta,o=e.keywords,s=e.title,l=t.data.site,d=a||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)},r.a.createElement("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit"}))}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=d},163:function(e){e.exports={data:{site:{siteMetadata:{title:"#ArmTangoFest2019",description:"1st International Tango Festival in Armenia",author:"@arthurkhlghatyan"}}}}},185:function(e,a,n){"use strict";a.a={"yuliana-basmajyan":"\n  <p>\n    Born and raised in Armenia, Yuliana Basmajyan immigrated to the US in her early adolescent years. For many years she tested her skills in different dance forms, including modern, jazz, flamenco, and extensive training in Salsa.\n    After several years of Latin dancing she discovered her true calling, a dance that truly inspired and challenged her…Tango.\n    Over the span of several years, Yuliana studied and trained in Argentina under world-class dancers such as Natalia Hills, Romina Levin, Andrea Misse, Corina Herrera, and Geraldine Rojas to name a few.\n  </p>\n  <p>\n    Yuliana Basmajyan and her former partner Brian Nguyen are the only couple to win two Tango Salon US Championships (2010 & 2011) and to make the finals at the Mundial World Championship in Buenos Aires 4 years in a row!\n    They are also the only US couple to ever place at the Salon World Championship by taking home the bronze medal in 2011.\n    They have taught and performed in several festivals and milongas in the US and around the world, including events such as El Congreso in Toronto, Tijuana Tango Festival, San Diego Tango Festival, Fire & Ice Festival in Ann Arbor, Tucson Tango Festival in Tucson, Valentango in Portland, Tango Mundo Festival in Palm Springs, Mercury Cafe in Denver and La Nacional, Ukraine, and Nocturne Milongas in NYC as well as famous theaters in LA such as Nokia theatre, Wilshire Ebell theatre, Florentine Gardens and many high-end banquet halls in USA, Canada, and Mexico.\n    Including cities such as Sacramento, San Francisco, Palo Alto, Santa Barbara, they have also taught at several schools and tango clubs such as Oxygen Tango School, Tango Room, Caltech Tango Club, Stanford Tango Club, Arizona State University Tango Club, Latin Dance Pro Salsa School to name a few.\n  </p>\n  <p>\n    Yuli has had the opportunity to perform with famous tango dancers such as world renowned Carlos Copello, world tango salon champion Maximiliano Cristiani, and other well known dancers:\n    Oliver Kolker, Jaimes Friedgen, Mauro Peralta, Danilo Maddalena, Dominic Bridge, Sergio Almiron, Gabriel El Huracan, Ricardo Biggeri, Marcelo El Chino Gutierrez, Varo Boyajyan, and Meng Wang.\n    Most recently in the Fall of 2018, Yuliana had the honor to perform with renowned dancer and choreographer Natalia Hills’ company Tangueros del Sur in their show Romper el Piso in the Arlene Schnitzner Concert Hall in Portland, Oregon and The Soraya Performing Arts Center in Northridge, California.\n  </p>\n  <p>\n    Yuliana’s passion for tango has expressed itself in various ventures over time.\n    From 2009 to 2018, Yuliana hosted one of the most prestigious milongas in Los Angeles, Milonga Querida. She currently devotes her talents to teaching in LA at her new dance studio and show room in Burbank as well as teaching abroad.\n    Yuli is also the exclusive distributor of Regina tango shoes, imported from Italy.\n  </p>\n  <p>\n    One of Yuliana’s grandest visions was the creation of the first international tango competition in the United States.\n    The Southern California Tango Championship and Festival over the last 5 years has become one of the best events in the United States and has attracted competitors from all around the world.\n    To date, it has successfully brought competitors and social dancers together for a grand event that features world renowned instructors and orchestras.\n    Plans are underway for SoCal 2020.\n  </p>\n  <p>\n    In 2019 Yuliana will be teaching in Florida in April, teaching and judging at the Berlin Open Tango Contest in May, as well as teaching and performing in Yerevan at the Armenia Tango Festival in June.\n    She will also be teaching at the Greek Island Tango Retreat in September.\n  </p>\n","dominic-bridge":'\n  <p>\n    Dominic has been working in tango full-time since 2007. He has taught and performed in international tango festivals, cultural events, and offered workshops in over a dozen countries around the world, including Buenos Aires.\n  </p>\n  <p>\n    A passionate dancer and instructor and a pioneer of a unique style and teaching methodology, he draws inspiration and knowledge from a multitude of other dance-forms, yoga, meditation, and martial arts. For him, respect, generosity, and self-awareness are the keys to reaching the deeper realms of tango.\n  </p>\n  <p>\n    Dominic specializes in the social dance of tango, in creative improvisation and musicality. He has trained many tango teachers in and outside the United States, and has studied with and worked alongside today’s top tango artists in the world. He enjoys working with all levels of experience, including first-time dancers.\n  </p>\n  <p class="text-center">\n    <strong>\n      “Learning to dance, and especially tango, is a rich process of growth for the body, mind, and spirit.”\n    </strong>\n  </p>\n  <p class="text-center">\n    <strong>\n      – Dominic Bridge\n    </strong>\n  </p>\n  <p>\n    In 2008, after intensive dance-study while living in Buenos Aires (his first of several trips) and rigorous training from Jaimes Friedgen, his most influential teacher, his career expanded to Europe. Apart from his tours in Europe and North America, Dominic has lived and taught locally in Portland, Florence, Moscow, Paris, and Budapest. He speaks fluent English, Spanish, French, and Italian.\n  </p>\n  <p>\n    From 2012-2013, he partnered with world-class dancer, Sigrid Van Tilbeurgh (France). Together they toured in festivals in Germany, France, Italy, Romania, Hungary, the Ukraine, and Russia, and performed with Solo Tango Orchestra from Moscow on two separate occasions.\n  </p>\n  <p>\n    He taught and performed alongside the likes of: Sebastian Arce and Mariana Montes, Ariadna Naveira and Fernando Sanchez, Carlitos Espinoza and Noelia Hurtado, Rodrigo Palacios and Agustina Berenstein, Diego “El Pájaro” Riemer and María Belen Giachello, Cristian Sosa and María Noel Sciuto (2012 Tango Escenario World Champions), Julio Balmaceda and Corina de la Rosa, Pablo Inza and Eugenia Parilla, Fausto Carpino and Stephanie Fesneau, Mario Consiglieri and Anabella Diaz-Hojman, and Pablo Verón (The Tango Lesson, 1997), among others.\n  </p>\n  <p>\n    In 2013, while residing in Paris, Dominic performed in the live spectacle 52ème Gala de l’Union des Artistes, mis en scène by Isabelle Nanty, with French film star Audrey Fleurot (Intouchables, 2011), televised on France 2 with over 4 million viewers. He was also invited as “tango coach” for actor Hugh Laurie (Dr. House) for a T.V. commercial by L’Oréal.\n  </p>\n  <p>\n    In 2014 he taught and performed with Cecilia Piccinni from Buenos Aires in Tango Cazino 3rd Edition (Romania); Winter Tango Napoli Festival (Italy); live in concert with the Orquesta Típica La Juan D’Arienzo from Buenos Aires in Budapest; and toured in three festivals and nine cities around the United States in Winter 2015.\n  </p>\n  <p>\n    In 2015 he moved back to Portland to share his knowledge and passion with the tango community that originally raised him. During this time he began establishing PDX Tango, which hosted weekly classes, practicas and milongas. After two years of community-building and organizing, he returned to Europe and has been living in Berlin since 2018 while he continues his tours around the continent.\n  </p>\n',"ronen-&-dorit":'\n  <p>\n    Dance the emotion - one of the main characteristics of Dorit and Ronen\'s  tango, combined with very high level of technique and precision. \n    A strong emphasis on embrace, deep and real connection and uncompromised passion create their special and unique art of tango.\n    Within this ambient they teach their tango classes with a nice combination of excellent didactic skills and the feeling of the love of the dance and the never ending joy of it .\n  </p>\n  <p>\n    They have been united since 2015 and established their own Tango School in Tel Aviv, Israel- WeTango❤ Ronen & Dorit.\n    They have performed in all Israel with Tango Orchestras, Classic Orchestras and band like Balkan Beat Box!\n    They have participated in Tango Festivals and events in Spain- "Mar del Tango Festival", Hungary- "Tango Mistico Week" in Budapest and around the world with MSC Cruise ship teaching and performing!\n  </p>\n',"tatiana-gordinscaia-&-pavel-lozan":"\n  <p>\n    Tatiana & Pavel are dancing together since year 2013. Tatiana founded first school of Argentinean tango in Moldova in 2010, and also organized 3 big festivals and 3 marathons, common known as MADT.\n  </p>\n  <p>\n    Tatiana & Pavel was first tango couple originally from Moldova, who teached and performed across the country - in Romania (Bucharest, Iasi), Ukraine (Odessa), Spain (Valencia). They learned from such great maestros as: Javier Rodriguez & Noelia Barsi, Andres Laza Moreno & Luciana Arregui, Virginia Pandolfi & Jonatan Aguero.\n  </p>\n  <p>\n    Tatiana & Pavel are 'obsessed' with the deepest parts of tango - strong connection through physics (embrace and posture) and metaphysics (openminded and accepting mood, joy of share and receive emotions in dance). Besides that, they both don't like just one thing: when a student goes out from their lesson in bad mood.\n  </p>\n","armenian-national-philharmonic-orchestra":"\n  <p>\n    The Armenian National Philharmonic Orchestra (ANPO) was founded in 1925 by Arshak Adamyan and Alexander Spendiaryan. For many years it has been considered as one of the leading orchestras of the former Soviet Union. Today, it is a national center of the professional orchestral music in Armenia.\n  </p>\n  <p>\n    Over the years, conductors Arshak Adamyan, Alexander Spendiaryan, Suren Charekyan, Gevorg Budaghyan, Konstantine Saradjian, Mikayel Maluntsyan, Ohan Durian, Mikayel Terian, Ruben Vartanian, Aram Katanyan, David Khandjian, Valery Gergiev, Vag Papian, Mikayel  Avetisyan and Loris Tjeknavorian have directed the orchestra. In October 2000 Eduard Topchjan was appointed the Artistic Director and Principal Conductor of the ANPO.\n  </p>\n  <p>\n    The Armenia National Philharmonic Orchestra’s home is the Aram Khachaturian Concert Hall, one of the architectural pearls of Yerevan designed by Alexander Tamanian. It hosts an audience of 1300 seats.\n  </p>\n  <p>\n    Being led to the new millennium by Maestro Eduard Topchjan the ANPO is committed to promoting cultural, musical awareness in local audiences, by regular performances of classical and contemporary music in addition to operatic repertoire.\n  </p>\n  <p>\n    Since its foundation, the orchestra has performed most of the classical repertoire. Besides, the ANPO widely presents works of the Armenian composers, including premieres of the new works in the program, which are of much interest for both Armenian and foreign audience.\n  </p>\n  <p>\n    Many of the world’s leading artists, such as David Oistrach, Sviatoslav Richter, Mstislav Rostropovich, Emil Gilels, Renato Bruson, Steven Isserlis, Misha Mayski, Sergei Nakariakov, Boris Berezovsky, Natalia Gutman, Giuseppe Giacomini, Isabelle Faust, Julia Fischer, Pinchas Zukerman, Gidon Kremer, Yuri Bashmet, Placido Domingo and many others, as well as already established and emerging Armenian musicians have appeared with this orchestra.\n    The orchestra’s performances have been led by Alexander Melik-Pashayev, Willy Ferrero, Franz Konwitschny, Kurt Masur, Valery Gergiev and many other celebrated conductors. For five successive years, Maestro Valery Gergiev has been the Artistic Director and Principal Conductor of the ANPO.\n  </p>\n  <p>\n    The renowned composers such as Gia Kancheli, Sofya Gubaidullina, Rodion Shchedrin have closely cooperated with the ANPO. Aram Khachaturian, Dmitry Kabalevsky, Krzysztof Penderecki and other composers have conducted their works with the Armenian National Philharmonic Orchestra.\n  </p>\n  <p>\n    The ANPO tours regularly and serves as a unique Ambassador of Armenian music worldwide. A number of internationally acclaimed Armenian soloists have appeared with the ANPO, among them: Sergey Khachatryan, Kim Kashkashian, Sergei Babayan, Isabel Bayrakdarian, Suren Bagratuni, Alexander Chaushian, Narek Hakhnazaryan and others.\n  </p>\n  <p>\n    Since 1989 the ANPO has toured extensively throughout the USA, Canada, Austria, Germany, France, Switzerland, Luxembourg, Lebanon, Spain, Portugal, the United Kingdom, Greece, Iran, Cyprus, Turkey, Russia, UAE and elsewhere.\n  </p>\n  <p>\n    The orchestra’s tours to Japan (with 15 concerts in 2008); Slovakia and Germany (2010), Italy (2014, 2015, at 4 prestigious festivals in Rimini, Citta di Castello, Merano and Ravello), Germany, Poland, USA, Mexico and Scandinavian countries were a great success.\n  </p>\n  <p>\n    On July 12, 2016 the ANPO appeared at prestigious “Stars of the White Nights” festival  with a concert at St. Petersburg’s Mariinsky Theatre.    \n  </p>\n  <p>\n    On the occasion of its 90th anniversary, the ANPO was awarded with the “Coats of Arms of Yerevan” commemorative medal by the Mayor of Yerevan.\n  </p>\n  <p>\n    Since 2007 the Armenian National Philharmonic Orchestra hosts the annual Yerevan International Music Festival, held in autumn. The internationally acclaimed soloists participate in the festival, appearing in symphony and chamber concerts and giving master-classes to Armenian musicians. Eduard Topchjan and Alexander Chaushian are the Artistic Directors of the festival.\n  </p>\n  <p>\n    More than 40 CDs have been released with the orchestra’s recordings. Among the latest releases are the “Armenian Rhapsody” (2011, BIS Records, Sweden), Mozart Piano Concerti  KV 238,415 and Overtures to Marriage of Figaro and Don Giovanni (2014, Oehms Classics, Germany). The recordings have been highly acclaimed by the international reviewers.\n  </p>\n  <p>\n    In 2017 a special edition CD “Mozart-Komitas-Khachaturian” was released in the United States through the Armenia Fund USA (Eastern Region Affiliate), with 10.000 copies print-run.\n  </p>\n  <p>\n    Music by Aram Khachaturian, Arno Babadjanyan, Edvard Mirzoyan, Alexander Arutiunian, Avet Terteryan and many other prominent Armenian composers is best performed by the Armenian National Philharmonic Orchestra featuring famous Armenian and international soloists.\n  </p>\n  <p>\n    The Armenian National Philharmonic Orchestra continues its versatile artistic activity in line with the requirements of international musical life.\n  </p>\n","hugo-satorre":'\n  <p>\n    Hugo Satorre has performed in some of the most prestigious theatre and concert halls throughout the world. Some worth noting are: the Sydney Opera House (Australia), The Esplanade (Singapore), the Walt Disney Hall (Los Angeles), el Teatro Colón (Buenos Aires), the Shanghai Oriental Art Center (Shanghai). In March 2012 he accompanied tenor Placido Domingo on a stage set up in the widest avenue in Buenos Aires, 9 de Julio Av., in front of 120,000 people.\n  </p>\n  <p>\n    Born in Buenos Aires on the July 15, 1977, he began his education at the Juan José Castro Conservatory and has continued to study with the most remarkable bandoneonists of our times.\n  </p>\n  <p>\n    In 2016 he released his first solo album, an album dedicated solely to the works of the master musical arranger Maximo Mori. He is one of the original members of Orquesta Victoria and of the 2013 Latin Grammy nominee "Duo Ramírez-Satorre" together with Adrián Ramírez. He is also part of numerous musically diverse projects. He was part as well  of Otros Aires, Tanghetto, La tubatango and the tango compañy "tango fire". In 1918 he finished his undergraduate course in Argentine Music at Universidad de San Martín.\n  </p>\n',"fernando-sanchez":"\n  <p>\n    Fernando Sánchez was born in Buenos Aires in 1980 and began his guitar studies with private teachers.  In 2008, he graduated from Conservatorio Superior de Música “Astor Piazzolla” of  Buenos Aires as a Guitar and Music Teacher.\n  </p>\n  <p>\n    During his career as a professional musician he has been a member of a diverse range of instrumental ensembles like: Quinteto Varietal,  Bien Debute Trio, Tanino Dúo, Trio and Quartet, Maurín Sánchez Dúo, Satorre/Sánchez Dúo and also like a soloist.\n  </p>\n  <p>\n    He start touring playing Tango Music since 2009, making 14 international tours and several tours troughout Argentina. He also recorded five cd´s as guitarist and arranger. Nowadays he plays in Tanino Dúo, Trio, Qaurtet, and Satorre/Sánchez Dúo.\n  </p>\n","luca-lamberti":"\n  <p>\n    Luca is a well known tango DJ, teacher, and dancer in the European tango circuit.\n  </p>\n  <p>\n    Luca has been around to Europe, middle East and Asia spreading his unique spiritual approach to tango. Dancing since the year 2000 and studying with key tango world figures.\n  </p>\n  <p>\n    Luca has been the organizer of Tangocamp Italy since 2009 and a key figure in the other 3 tango camp festivals. Organising also Roman holiday tango marathon in Rome.\n  </p>\n","mihran-sigaher":"\n  <p>\n    Improved himself by gathering information about tango and tango music archives from  orchestras since 2006 his start to tango, Mihran began DJing at 2008.\n  </p>\n  <p>\n    From 2008 to the present, he has been playing music in Turkey, Italy, Romania, Bulgaria and Greece milongas. Mihran brings tango dancers and audiences together with various orchestras by blending rhythm and melody in appropriate proportions.\n  </p>\n  <p>\n    In 2019 Season he ll perform in Xanthi/Greece, Yerevan/Armenia, Varna/Bulgaria, Valencia/Spain, Moscow/Russia, Athens- Thessaloniki/Greece, Tel Aviv/İsrail and Austin-Texas (United States Of America).\n  </p>\n  <p>\n    In the milongas he plays the renditions of orchestras such as Juan D'Arienzo, Rodolfo Biagi, Carlos Di Sarli, Anibal Troilo  and sure Osvaldo Pugliese with a pleasure.\n  </p>\n  <p>\n    Currently, Mihran is still acting as a dancer, instructor and DJ . Since the beginning of his lifetime as a DJ, he trained five DJs and contributed to their performances.\n  </p>\n","tatiana-gordinscaya":"\n  <p>\n    Tatiana was started to dance argentinian tango 8 years ago and at the moment she has felt that tango is a dance of her soul she decided to found first argentinian tango school in Moldova.\n  </p>\n  <p>\n    After she visited Buenos Aires, she decided that to put music on milongas is an art, and one part of this art is to create atmosphere of small Buenos Aires at the milonga. So she is tdjing on regular weekly milongas in Chisinau, after that she was tdjing at milongas in Odessa ( Ukraine) and at milongas, festivals and maraton in Romania ( In Iasi,  Bucharest, Brasov) ,also in Greece.\n  </p>\n  <p>\n    Tatiana considers that music which put the tdj its a key of communication between people and tdj, and if there is a connection like in tango, than milonga will be succesfull. She is also organiser of Madtango marathon and Rockit!tango weekend in Chisinau!\n  </p>\n"}},350:function(e,a,n){e.exports=n.p+"static/yuliana-basmajyan-7c1bde748084ca7977e11f6e4494246f.jpg"},351:function(e,a,n){e.exports=n.p+"static/ronen-dorit-0a9a514de7221c215b15b9c3070e2dfb.jpg"},352:function(e,a,n){e.exports=n.p+"static/dominic-bridge-ec650502efe92ddb066273dcc0859216.jpg"},353:function(e,a,n){e.exports=n.p+"static/tatiana-pavel-727b797560bf6a2fd9c9f8fe39ef6be3.jpg"}}]);
//# sourceMappingURL=component---src-pages-maestros-js-f2b43b8a1563db08fc08.js.map