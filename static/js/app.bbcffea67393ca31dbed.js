webpackJsonp([1],{155:function(e,t,n){function s(e){n(208)}var a=n(3)(n(162),n(220),s,null,null);e.exports=a.exports},156:function(e,t,n){var s=n(3)(n(164),n(221),null,null,null);e.exports=s.exports},157:function(e,t,n){var s=n(3)(n(166),n(216),null,null,null);e.exports=s.exports},158:function(e,t,n){var s=n(3)(n(168),n(217),null,null,null);e.exports=s.exports},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(17),a=n(155),r=n.n(a),o=n(26),i=n(4),c=n(156),u=n.n(c),l=n(157),p=n.n(l),d=n(158),f=n.n(d),h=n(0),j=n.n(h),m=n(16),v=n(8);s.a.component("Login",u.a),s.a.component("Project",p.a),s.a.component("section-item",f.a),s.a.filter("formatDateMonthYear",function(e){if(e)return j()(e).format("MMMM YYYY")}),j.a.locale("nl"),s.a.config.productionTip=!1,o.a.beforeEach(function(e,t,n){console.log("routing to "+e.path),i.a.commit("showHeader",!0),"/"===e.path&&(o.a.push({name:"Home"}),n()),"/render"===e.path&&(null===i.a.state.projectData&&(o.a.push({name:"Home"}),n()),i.a.commit("showHeader",!1)),n()});new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a},mounted:function(){i.a.commit("signedInState",v.a),console.log("checking login..."),n.i(m.a)()}})},16:function(e,t,n){"use strict";function s(){gapi.load("client:auth2",i)}function a(){gapi.auth2.getAuthInstance().signOut()}function r(){gapi.auth2.getAuthInstance().signIn()}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1Kbx--QrhcQvJdr1z1F3pDEAzEy-ezKI1footkHakQTY",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Sheet1!A2:C100";return gapi.client.sheets.spreadsheets.values.get({spreadsheetId:e,range:t})}function i(){gapi.client.init({discoveryDocs:d,clientId:p,scope:f}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(c),c(gapi.auth2.getAuthInstance().isSignedIn.get())})}function c(e){e?(u.a.commit("signedInState",l.b),console.log("yep -signed in")):(console.log("not signed in"),u.a.commit("signedInState",l.c))}n.d(t,"a",function(){return s}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o});var u=n(4),l=n(8),p="788562310771-vagjhi4qmo345iinlofd6anj601l1v71.apps.googleusercontent.com",d=["https://sheets.googleapis.com/$discovery/rest?version=v4"],f="https://www.googleapis.com/auth/spreadsheets.readonly"},160:function(e,t,n){"use strict";var s=n(27),a=n.n(s),r=function e(t){a()(this,e),this.name,this.customerName,this.startDate,this.endDate,this.rating,this.sections=[],this.lessonsLearned=[]};t.a=r},161:function(e,t,n){"use strict";var s=n(27),a=n.n(s),r=function e(t){a()(this,e),this.id,this.name,this.rating,this.pros=[],this.cons=[]};t.a=r},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(4);t.default={name:"app",computed:{msg:function(){return s.a.state.message},showHeader:function(){return s.a.state.showHeader}}}},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your About"}}}},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),a=n(16),r=n(8);t.default={name:"hello",computed:{showSignOut:function(){return s.a.state.signedInState===r.b},showSignIn:function(){return s.a.state.signedInState===r.c},showSpinner:function(){return s.a.state.signedInState===r.a}},methods:{signout:function(e){n.i(a.c)()},signin:function(e){n.i(a.d)()}}}},165:function(e,t,n){"use strict";function s(e){return e.match(/[-\w]{25,}/)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(169),r=n.n(a),o=n(172),i=n.n(o),c=n(171),u=n.n(c),l=n(16),p=n(160),d=n(161),f=n(4),h=n(26),j=n(8),m=function(){var e=u()(i.a.mark(function e(t){var n,s,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=37;break}return n=new p.a,n.name="Wall of RTL",n.startDate=new Date("2016-08-01"),n.endDate=new Date("2016-12-01"),n.customerName="VisionsConnected",n.rating=7,s=new d.a,s.id=1,s.name="Commercieel",s.rating=7,s.pros.push("Goede showcase executie"),s.pros.push("Lage acquisitie kosten"),s.cons.push("Lage marge uren"),s.cons.push("Risico ligt bij Sping"),n.sections.push(s),s=new d.a,s.id=2,s.name="Support",s.rating=7,s.pros.push("Bereid extra inzet te leveren"),s.cons.push("Onduidelijkheid live uitzendingen"),n.sections.push(s),s=new d.a,s.id=3,s.name="Klanttevredenheid",s.rating=7,s.pros.push("RTL is tevreden"),s.pros.push("Lage acquisitie kosten"),s.cons.push("Gedoe met bookmarks in iOS"),s.cons.push("Risico ligt bij Sping"),n.sections.push(s),n.lessonsLearned.push("PO moet geen techie zijn"),n.lessonsLearned.push("Budget krap? Conservatieve tech keuzes!"),e.abrupt("return",n);case 37:return e.next=39,v(t);case 39:return a=e.sent,e.abrupt("return",a);case 41:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=u()(i.a.mark(function e(t){var a,o,c,u,f,h,j,m,v,g,_;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(t),e.next=3,n.i(l.b)(a);case 3:if(o=e.sent,c=new p.a,u=null,f=!1,h=o.result,!(h.values.length>0)){e.next=56;break}j=0;case 10:if(!(j<h.values.length)){e.next=53;break}if(m=h.values[j],void 0!==m[0]){e.next=14;break}return e.abrupt("continue",50);case 14:if(v=m[0],g=m[1],_=m[2],"section"!==v){e.next=23;break}return u&&c.sections.push(u),u=new d.a,u.name=g,u.rating=_,e.abrupt("continue",50);case 23:if(!v.match(/Lessons\s*Learned/i)){e.next=26;break}return f=!0,e.abrupt("continue",50);case 26:if(u||!f){e.next=29;break}return c.lessonsLearned.push(g),e.abrupt("continue",50);case 29:if(!u||"plus"!==v){e.next=32;break}return u.pros.push(g),e.abrupt("continue",50);case 32:if(!u||"min"!==v){e.next=35;break}return u.cons.push(g),e.abrupt("continue",50);case 35:if("project"!==v){e.next=38;break}return c.name=g,e.abrupt("continue",50);case 38:if("customer"!==v){e.next=41;break}return c.customerName=g,e.abrupt("continue",50);case 41:if("start"!==v){e.next=44;break}return c.startDate=g,e.abrupt("continue",50);case 44:if("end"!==v){e.next=47;break}return c.endDate=g,e.abrupt("continue",50);case 47:if("rating"!==v){e.next=50;break}return c.rating=g,e.abrupt("continue",50);case 50:j++,e.next=10;break;case 53:u&&c.sections.push(u),e.next=57;break;case 56:console.log("No data found.");case 57:return console.log(r()(c,null,"\t")),e.abrupt("return",c);case 59:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),g=!1;t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",sheetUrl:null}},computed:{showButton:function(){return f.a.state.signedInState===j.b}},methods:{grabData:function(){var e=this;return u()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f.a.commit("projectData",null),t.next=3,m(e.sheetUrl);case 3:n=t.sent,console.log("DATA is "+n),f.a.commit("projectData",n),console.log("redirecting to render"),h.a.push({name:"Render"});case 8:case"end":return t.stop()}},t,e)}))()}}}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(4);t.default={name:"hello",data:function(){return{msg:"Welcome to Your About"}},computed:{showProject:function(){return null!==s.a.state.projectData},projectData:function(){return s.a.state.projectData}}}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"render"}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"sectionItem",props:["section"]}},207:function(e,t){},208:function(e,t){},209:function(e,t,n){function s(e){return n(a(e))}function a(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":40,"./af.js":40,"./ar":47,"./ar-dz":41,"./ar-dz.js":41,"./ar-kw":42,"./ar-kw.js":42,"./ar-ly":43,"./ar-ly.js":43,"./ar-ma":44,"./ar-ma.js":44,"./ar-sa":45,"./ar-sa.js":45,"./ar-tn":46,"./ar-tn.js":46,"./ar.js":47,"./az":48,"./az.js":48,"./be":49,"./be.js":49,"./bg":50,"./bg.js":50,"./bn":51,"./bn.js":51,"./bo":52,"./bo.js":52,"./br":53,"./br.js":53,"./bs":54,"./bs.js":54,"./ca":55,"./ca.js":55,"./cs":56,"./cs.js":56,"./cv":57,"./cv.js":57,"./cy":58,"./cy.js":58,"./da":59,"./da.js":59,"./de":62,"./de-at":60,"./de-at.js":60,"./de-ch":61,"./de-ch.js":61,"./de.js":62,"./dv":63,"./dv.js":63,"./el":64,"./el.js":64,"./en-au":65,"./en-au.js":65,"./en-ca":66,"./en-ca.js":66,"./en-gb":67,"./en-gb.js":67,"./en-ie":68,"./en-ie.js":68,"./en-nz":69,"./en-nz.js":69,"./eo":70,"./eo.js":70,"./es":72,"./es-do":71,"./es-do.js":71,"./es.js":72,"./et":73,"./et.js":73,"./eu":74,"./eu.js":74,"./fa":75,"./fa.js":75,"./fi":76,"./fi.js":76,"./fo":77,"./fo.js":77,"./fr":80,"./fr-ca":78,"./fr-ca.js":78,"./fr-ch":79,"./fr-ch.js":79,"./fr.js":80,"./fy":81,"./fy.js":81,"./gd":82,"./gd.js":82,"./gl":83,"./gl.js":83,"./gom-latn":84,"./gom-latn.js":84,"./he":85,"./he.js":85,"./hi":86,"./hi.js":86,"./hr":87,"./hr.js":87,"./hu":88,"./hu.js":88,"./hy-am":89,"./hy-am.js":89,"./id":90,"./id.js":90,"./is":91,"./is.js":91,"./it":92,"./it.js":92,"./ja":93,"./ja.js":93,"./jv":94,"./jv.js":94,"./ka":95,"./ka.js":95,"./kk":96,"./kk.js":96,"./km":97,"./km.js":97,"./kn":98,"./kn.js":98,"./ko":99,"./ko.js":99,"./ky":100,"./ky.js":100,"./lb":101,"./lb.js":101,"./lo":102,"./lo.js":102,"./lt":103,"./lt.js":103,"./lv":104,"./lv.js":104,"./me":105,"./me.js":105,"./mi":106,"./mi.js":106,"./mk":107,"./mk.js":107,"./ml":108,"./ml.js":108,"./mr":109,"./mr.js":109,"./ms":111,"./ms-my":110,"./ms-my.js":110,"./ms.js":111,"./my":112,"./my.js":112,"./nb":113,"./nb.js":113,"./ne":114,"./ne.js":114,"./nl":116,"./nl-be":115,"./nl-be.js":115,"./nl.js":116,"./nn":117,"./nn.js":117,"./pa-in":118,"./pa-in.js":118,"./pl":119,"./pl.js":119,"./pt":121,"./pt-br":120,"./pt-br.js":120,"./pt.js":121,"./ro":122,"./ro.js":122,"./ru":123,"./ru.js":123,"./sd":124,"./sd.js":124,"./se":125,"./se.js":125,"./si":126,"./si.js":126,"./sk":127,"./sk.js":127,"./sl":128,"./sl.js":128,"./sq":129,"./sq.js":129,"./sr":131,"./sr-cyrl":130,"./sr-cyrl.js":130,"./sr.js":131,"./ss":132,"./ss.js":132,"./sv":133,"./sv.js":133,"./sw":134,"./sw.js":134,"./ta":135,"./ta.js":135,"./te":136,"./te.js":136,"./tet":137,"./tet.js":137,"./th":138,"./th.js":138,"./tl-ph":139,"./tl-ph.js":139,"./tlh":140,"./tlh.js":140,"./tr":141,"./tr.js":141,"./tzl":142,"./tzl.js":142,"./tzm":144,"./tzm-latn":143,"./tzm-latn.js":143,"./tzm.js":144,"./uk":145,"./uk.js":145,"./ur":146,"./ur.js":146,"./uz":148,"./uz-latn":147,"./uz-latn.js":147,"./uz.js":148,"./vi":149,"./vi.js":149,"./x-pseudo":150,"./x-pseudo.js":150,"./yo":151,"./yo.js":151,"./zh-cn":152,"./zh-cn.js":152,"./zh-hk":153,"./zh-hk.js":153,"./zh-tw":154,"./zh-tw.js":154};s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=209},212:function(e,t,n){function s(e){n(207)}var a=n(3)(n(163),n(219),s,"data-v-769b29ae",null);e.exports=a.exports},213:function(e,t,n){var s=n(3)(n(165),n(215),null,null,null);e.exports=s.exports},214:function(e,t,n){var s=n(3)(n(167),n(218),null,null,null);e.exports=s.exports},215:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e.showButton?n("div",[e._v("\n    Sheet url: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sheetUrl,expression:"sheetUrl"}],attrs:{name:"sheet",type:"text"},domProps:{value:e.sheetUrl},on:{input:function(t){t.target.composing||(e.sheetUrl=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.grabData}},[e._v("Grab data")])]):e._e()])},staticRenderFns:[]}},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showProject?n("div",{staticClass:"container"},[n("div",{staticClass:"titlebar"},[n("div",{staticClass:"left"},[n("p",[e._v("Projectevaluatie")]),e._v(" "),n("p",{staticClass:"project-title"},[e._v(e._s(e.projectData.name))])]),e._v(" "),n("div",{staticClass:"right"},[n("p",[e._v("Klant: "+e._s(e.projectData.customerName))]),e._v(" "),n("p",[e._v("Start: "+e._s(e._f("formatDateMonthYear")(e.projectData.startDate)))]),e._v(" "),n("p",[e._v("Eind: "+e._s(e._f("formatDateMonthYear")(e.projectData.endDate)))])])]),e._v(" "),n("ul",{staticClass:"flex-container"},[e._l(e.projectData.sections,function(e,t){return n("section-item",{key:e.id,tag:"li",attrs:{section:e}})}),e._v(" "),e._l(5-e.projectData.sections.length,function(e){return n("li",{staticClass:"filler"})}),e._v(" "),n("li",{staticClass:"block"},[n("div",{staticClass:"header",attrs:{id:"conclusion"}},[e._m(0),e._v(" "),n("div",{staticClass:"grade"},[e._v(e._s(e.projectData.rating))])]),e._v(" "),n("div",{staticClass:"content"},[n("ul",{attrs:{id:"lessons"}},e._l(e.projectData.lessonsLearned,function(t){return n("li",[e._v("\n             "+e._s(t)+"\n             ")])}))])])],2),e._v(" "),e._m(1)]):e._e()},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[e._v("Leerpunten              "),n("i",[e._v("eindcijfer")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",[e._v("Dit is bedrijfsgevoelige informatie en is strikt voor intern gebruik bedoeld.")]),e._v(" "),n("img",{staticClass:"logo",attrs:{src:"/static/css/images/sping-logo.svg"}})])}]}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"block"},[n("div",{staticClass:"header"},[n("p",{staticClass:"title"},[e._v(e._s(e.section.name))]),e._v(" "),n("div",{staticClass:"grade"},[e._v(e._s(e.section.rating))])]),e._v(" "),n("div",{staticClass:"content"},[n("ul",[e._l(e.section.pros,function(t){return n("li",{staticClass:"pos"},[e._v("\n        "+e._s(t)+"\n         ")])}),e._v(" "),e._l(e.section.cons,function(t){return n("li",{staticClass:"neg"},[e._v("\n        "+e._s(t)+"\n         ")])})],2)])])},staticRenderFns:[]}},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("project")},staticRenderFns:[]}},219:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("About")])])},staticRenderFns:[]}},220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showHeader?n("div",{attrs:{id:"header"}},[n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" "),n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),n("login")],1):e._e(),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},221:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showSignOut?n("button",{on:{click:e.signout}},[e._v("Sign out")]):e._e(),e._v(" "),e.showSpinner?n("div",{staticClass:"loader"}):e._e(),e._v(" "),e.showSignIn?n("button",{on:{click:e.signin}},[e._v("Sign in")]):e._e()])},staticRenderFns:[]}},26:function(e,t,n){"use strict";var s=n(17),a=n(222),r=n(213),o=n.n(r),i=n(212),c=n.n(i),u=n(214),l=n.n(u);s.a.use(a.a),t.a=new a.a({routes:[{path:"/home/",name:"Home",component:o.a},{path:"/about/",name:"About",component:c.a},{path:"/render/",name:"Render",component:l.a}],mode:"history",base:"development"===n.i({NODE_ENV:"production"}).environment?"/":"/project-eval-poc/"})},4:function(e,t,n){"use strict";var s=n(17),a=n(224),r=n(8);s.a.use(a.a),t.a=new a.a.Store({state:{count:0,message:"",signedInState:r.a,projectData:null,showHeader:!0},mutations:{increment:function(e){e.count++},signedInState:function(e,t){e.signedInState=t},projectData:function(e,t){e.projectData=t},showHeader:function(e,t){e.showHeader=t}}})},8:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r});var s="checking",a="signed-in",r="not-signed-in"}},[159]);
//# sourceMappingURL=app.bbcffea67393ca31dbed.js.map