(this["webpackJsonpclick-media"]=this["webpackJsonpclick-media"]||[]).push([[0],{117:function(e,t,a){e.exports=a.p+"static/media/img1.85d4ae74.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/img2.e25f3890.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/img3.e8ef586a.png"},120:function(e,t,a){e.exports=a.p+"static/media/img4.c3300b3b.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/img5.f91f288b.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/img6.59c44afb.jpg"},123:function(e,t,a){e.exports=a.p+"static/media/img7.808c1019.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/img8.ea2fedcd.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/img9.62b0c2a1.jpg"},132:function(e,t,a){e.exports=a(226)},137:function(e,t,a){},140:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(137),a(138),a(139),a(140),a(9)),c=a(10),s=a(12),m=a(11),p=a(108),u=a.n(p),d=function(e,t){return function(a){console.log("jkgjhfjfjddgh"+t);var n=e.filter((function(e){return e.id===t}));console.log(n),a({type:"GET_PROFILE",payload:n})}},g=a(18),b=a(36),E=a(253),h=a(254),f=a(73),y={maxWidth:"100%",maxHeight:300,border:"1px solid grey",borderRadius:"30px",margin:"10px 30px 10px 10px"},x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"React"},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.Map,{google:this.props.google,zoom:14,style:y,initialCenter:{lat:this.props.lat,lng:this.props.lng}},l.a.createElement(f.Marker,{onClick:this.onMarkerClick,name:"Your location"})))}}]),a}(n.Component),v=Object(f.GoogleApiWrapper)({apiKey:""})(x),j=a(256),k=a(248),C=a(249),O=a(261),w=a(250),I=a(259),S=a(251),L=a(260),T=a(252),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(){},n.state={show:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.selectedValue,n=t.open,r=t.onClose,o=t.listItem,i=t.profileListItem;return l.a.createElement("div",null,l.a.createElement(j.a,{onClose:function(){r(a)},"aria-labelledby":"simple-dialog-title",open:n,style:{position:"relative",float:"right",margin:"80px 5px 0 0 "}},i.map((function(e){return l.a.createElement(k.a,{id:"simple-dialog-title"},l.a.createElement("img",{src:e.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"100px",width:"100px",marginLeft:"40px"}}),l.a.createElement("div",{style:{textAlign:"center"}},e.name))})),l.a.createElement(C.a,null,o.map((function(t,a){return 0===a||1===a||2===a?l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{button:!0,onClick:function(){var a;e.props.getProfile(e.props.listItem,t.id),a=t.email,r(a)}},l.a.createElement(w.a,null,l.a.createElement(I.a,{style:{backgroundColor:"blue[100]"}},l.a.createElement("img",{src:t.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"40px",width:"40px",marginRight:"10px"}}))),l.a.createElement(S.a,{primary:t.email})),l.a.createElement(T.a,null)):""})),l.a.createElement(O.a,{style:{justifyContent:"center"}},l.a.createElement(L.a,{variant:"danger",style:{borderRadius:"30px",fontSize:"15px"},onClick:this.handleClick},"Sign Out")))))}}]),a}(l.a.Component),z=Object(g.b)((function(e){return{listItem:e.clickMediaItem.list}}),{getProfile:d})(R),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(e){n.setState({open:!1}),n.setState({selectedValue:e})},n.state={open:!1,selectedValue:n.props.profileListItem.map((function(e){return e.email}))},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.props.profileListItem.map((function(t){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("span",{onClick:e.handleClickOpen},l.a.createElement("img",{src:t.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"40px",width:"40px",marginRight:"10px"}}),"\xa0",t.name),l.a.createElement(z,{selectedValue:e.state.selectedValue,open:e.state.open,onClose:e.handleClose,profileListItem:e.props.profileListItem}))})))}}]),a}(n.Component),F=Object(g.b)((function(e){return{profileListItem:e.clickMediaItem.profileList}}))(W),P=a(258),M=a(262),A=a(56),D=a(111),H=a.n(D),G=a(82),N=a.n(G),V=a(112),_=a.n(V),B=a(255),Y=a(110),J=a.n(Y),K=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props.chatListItem),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{width:"100%",overflow:"auto",backgroundColor:"white",height:"200px",padding:"5px",marginRight:"0px"}},l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("p",{style:{backgroundColor:"#ECF0F1",padding:"10px",margin:"5px 120px 5px 0",color:"grey"}}," Hii Vivek ! "),l.a.createElement("p",{style:{backgroundColor:"#ECF0F1",padding:"10px",margin:"5px 120px 5px 0",color:"grey"}},"How are You? ")),l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("p",{style:{backgroundColor:"#ECF0F1",margin:"5px 0 5px 120px",padding:"10px",color:"grey"}}," Hello Sam ! "),l.a.createElement("p",{style:{backgroundColor:"#ECF0F1",margin:"5px 0 5px 120px",padding:"10px",color:"grey"}},"I am fine ;) "),l.a.createElement("p",{style:{backgroundColor:"#ECF0F1",margin:"5px 0 5px 120px",padding:"10px",color:"grey"}},"What about You? "))),l.a.createElement("div",null,l.a.createElement(T.a,null),l.a.createElement(I.a,{style:{backgroundColor:"white",float:"right",color:"blue",fontSize:30}},l.a.createElement(J.a,null))))}}]),a}(n.Component),U=Object(g.b)((function(e){return{chatListItem:e.clickMediaItem.chatListItem}}))(K),Z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChat=function(e){n.props.chatLayout(n.props.listItem,e),console.log(e.target.id),n.setState({show:!0})},n.handleClose=function(){n.setState({show:!1})},n.state={show:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{width:300,float:"right",margin:"400px 20px 5px 0"}},l.a.createElement(P.a,{style:{position:"absolute",bottom:"1px"}},l.a.createElement(M.a,{expandIcon:l.a.createElement(H.a,{style:{color:"white",fontSize:"30px"}}),"aria-controls":"panel1a-content",id:"panel1a-header",style:{backgroundColor:"blue",color:"white"}},l.a.createElement(I.a,{style:{backgroundColor:"blue"}},l.a.createElement(_.a,{style:{color:"white",fontSize:"30px"}})),l.a.createElement(A.a,{style:{fontSize:20}},"Chat")),l.a.createElement(C.a,{style:{position:"relative",overflowY:"auto",maxHeight:300}},this.props.listItem.map((function(t,a){return 0===a||2===a||3===a||7===a||8===a||10===a?l.a.createElement(O.a,{button:!0,onClick:function(){e.props.chatLayout(e.props.listItem,t.id),e.setState({show:!0})}},l.a.createElement(w.a,null,l.a.createElement(I.a,{style:{backgroundColor:"blue[100]"}},l.a.createElement("img",{src:t.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"40px",width:"40px",marginRight:"10px"}}))),l.a.createElement(S.a,{primary:t.name}),l.a.createElement(w.a,null,l.a.createElement(I.a,{style:{backgroundColor:"white"}},l.a.createElement(N.a,{style:{color:"#2ECC71",fontSize:"20px"}})))):l.a.createElement(O.a,{button:!0,onClick:function(){e.props.chatLayout(e.props.listItem,t.id),e.setState({show:!0})}},l.a.createElement(w.a,null,l.a.createElement(I.a,{style:{backgroundColor:"blue[100]"}},l.a.createElement("img",{src:t.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"40px",width:"40px",marginRight:"10px"}}))),l.a.createElement(S.a,{primary:t.name}),l.a.createElement(w.a,null,l.a.createElement(I.a,{style:{backgroundColor:"white"}},l.a.createElement(N.a,{style:{color:"grey",fontSize:"20px"}}))))}))))),l.a.createElement(B.a,{show:this.state.show,onHide:this.handleClose,style:{top:"370px",display:"block",position:"sticky"},size:"sm"},this.props.chatListItem.map((function(e){return l.a.createElement("div",null,l.a.createElement(B.a.Header,{closeButton:!0,style:{backgroundColor:"blue",color:"white",textAlign:"center"}},l.a.createElement("img",{src:e.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"40px",width:"40px",marginRight:"10px"}}),l.a.createElement(B.a.Title,null,e.name)),l.a.createElement(B.a.Body,null,l.a.createElement(U,null)))}))))}}]),a}(l.a.Component),$=Object(g.b)((function(e){return{listItem:e.clickMediaItem.list,chatListItem:e.clickMediaItem.chatListItem}}),{chatLayout:function(e,t){return function(a){a({type:"CHAT_LIST",payload:e.filter((function(e){return e.id===t}))})}}})(Z),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleProfile=function(){n.setState({show:!0})},n.state={show:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props.profileListItem),l.a.createElement("div",{style:{Width:"100%",margin:"",padding:"12px",overflow:"hidden",backgroundColor:"white"}},this.props.profileListItem.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{style:{marginTop:"50px"}},l.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold"}},"Profile"),l.a.createElement("span",null,l.a.createElement("span",{style:{float:"right",marginTop:"-20px"}},l.a.createElement(F,{profile:e.profilepicture,name:e.name})))),l.a.createElement(E.a,{style:{marginTop:"20px",paddingTop:"50px",borderTop:"1px solid grey",display:"flex",flexWrap:"wrap"}},l.a.createElement(h.a,{md:4,style:{borderRight:"1px solid black"}},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{src:e.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"150px",width:"150px"}}),l.a.createElement("h3",null,e.name)),l.a.createElement(E.a,{style:{display:"flex",flexWrap:"nowrap"}},l.a.createElement(h.a,{md:4,align:"justify",style:{color:"grey",fontSize:"15px"}},l.a.createElement("label",null,"User Name"),l.a.createElement("br",null),l.a.createElement("label",null,"E-mail"),l.a.createElement("br",null),l.a.createElement("label",null,"Phone"),l.a.createElement("br",null),l.a.createElement("label",null,"Website"),l.a.createElement("br",null)),l.a.createElement(h.a,{md:8,align:"justify"},l.a.createElement("label",null,e.username),l.a.createElement("br",null),l.a.createElement("label",null,e.email),l.a.createElement("br",null),l.a.createElement("label",null,e.phone),l.a.createElement("br",null),l.a.createElement("label",null,e.website),l.a.createElement("br",null))),l.a.createElement("hr",null),l.a.createElement("p",{style:{textAlign:"center",fontSize:"25px",fontWeight:"bold"}},"Company"),l.a.createElement(E.a,{style:{display:"flex",flexWrap:"nowrap"}},l.a.createElement(h.a,{md:4,align:"justify",style:{color:"grey",fontSize:"15px"}},l.a.createElement("label",null,"Name"),l.a.createElement("br",null),l.a.createElement("label",null,"CatchPhrase"),l.a.createElement("br",null),l.a.createElement("label",null,"Bs")),l.a.createElement(h.a,{md:8,align:"justify"},l.a.createElement("label",null,e.company.name),l.a.createElement("br",null),l.a.createElement("label",null,e.company.catchPhrase),l.a.createElement("br",null),l.a.createElement("label",null,e.company.bs)))),l.a.createElement(h.a,{md:8,style:{marginTop:"20px"}},l.a.createElement("p",{style:{color:"grey",fontSize:"20px"}},"Address"),l.a.createElement(E.a,{style:{display:"flex",flexWrap:"nowrap"}},l.a.createElement(h.a,{md:4,align:"justify",style:{color:"grey",fontSize:"15px"}},l.a.createElement("label",null,"Street"),l.a.createElement("br",null),l.a.createElement("label",null,"Suite"),l.a.createElement("br",null),l.a.createElement("label",null,"City"),l.a.createElement("br",null),l.a.createElement("label",null,"ZipCode")),l.a.createElement(h.a,{md:8,align:"justify"},l.a.createElement("label",null,e.address.street),l.a.createElement("br",null),l.a.createElement("label",null,e.address.suite),l.a.createElement("br",null),l.a.createElement("label",null,e.address.city),l.a.createElement("br",null),l.a.createElement("label",null,e.address.zipcode))),l.a.createElement("div",null,l.a.createElement(v,{lat:e.address.geo.lat,lng:e.address.geo.lng})),l.a.createElement("div",null,l.a.createElement($,null)))))})))}}]),a}(n.Component),Q=Object(g.b)((function(e){return{profileListItem:e.clickMediaItem.profileList}}))(q),X=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container",style:{textAlign:"center",marginTop:"300px"}},l.a.createElement("label",{style:{fontSize:"40px",color:"grey"}},"Comming Soon ..........."))}}]),a}(n.Component),ee=a(117),te=a.n(ee),ae=a(118),ne=a.n(ae),le=a(119),re=a.n(le),oe=a(120),ie=a.n(oe),ce=a(121),se=a.n(ce),me=a(122),pe=a.n(me),ue=a(123),de=a.n(ue),ge=a(124),be=a.n(ge),Ee=a(125),he=a.n(Ee),fe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={images:[te.a,ne.a,re.a,ie.a,se.a,pe.a,de.a,be.a,he.a]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.state.images.map((function(e){return l.a.createElement(b.Card,{style:{border:"2px solid black",borderRadius:"10px",margin:"auto",marginTop:"30px"}},l.a.createElement(b.CardTitle,{style:{color:"black",height:"250px",background:"url(".concat(e,") center/cover")}}))})))}}]),a}(n.Component),ye=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container",style:{textAlign:"center",marginTop:"300px"}},l.a.createElement("label",{style:{fontSize:"40px",color:"grey"}},"Comming Soon ..........."))}}]),a}(n.Component),xe=a(14),ve=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(xe.c,null,l.a.createElement(xe.a,{exact:!0,path:"/",component:Q}),l.a.createElement(xe.a,{path:"/Posts",component:X}),l.a.createElement(xe.a,{path:"/Gallery",component:fe}),l.a.createElement(xe.a,{path:"/ToDo",component:ye}),l.a.createElement(xe.a,{path:"/LandingPage",component:Oe}))}}]),a}(n.Component),je=a(33),ke=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(je.a,null,l.a.createElement("div",null,l.a.createElement(b.Layout,{fixedDrawer:!0},l.a.createElement(b.Drawer,{style:{background:"linear-gradient(to bottom, #000099 30%, #0099cc 70%)"}},l.a.createElement(b.Navigation,{style:{marginTop:"250px"}},l.a.createElement(je.b,{style:{color:"black",fontSize:"18px",fontWeight:"bold",textDecoration:"none"},to:"/"},"Profile"),l.a.createElement(je.b,{style:{color:"black",fontSize:"18px",fontWeight:"bold",textDecoration:"none"},to:"/Posts"},"Posts"),l.a.createElement(je.b,{style:{color:"black",fontSize:"18px",fontWeight:"bold",textDecoration:"none"},to:"/Gallery"},"Gallery"),l.a.createElement(je.b,{style:{color:"black",fontSize:"18px",fontWeight:"bold",textDecoration:"none"},to:"/ToDo"},"ToDo"))),l.a.createElement(b.Content,null,l.a.createElement(ve,null)))))}}]),a}(n.Component),Ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={show:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getList()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,0!==this.props.listItem.length?l.a.createElement("div",null,!0!==this.state.show?l.a.createElement("div",{style:{margin:"100px auto",border:"1px solid white",borderRadius:"15px",maxWidth:720,backgroundColor:"white"},className:"container"},l.a.createElement(A.a,{style:{textAlign:"center",color:"grey",fontSize:"25px",padding:"40px",backgroundColor:"#F4F6F7 ",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}},"Select an account"),l.a.createElement(C.a,{style:{position:"relative",overflow:"auto",maxHeight:400}},this.props.listItem.map((function(t){return l.a.createElement("div",null,l.a.createElement(O.a,{button:!0,onClick:function(){e.props.getProfile(e.props.listItem,t.id),e.setState({show:!0})},style:{backgroundColor:"white"}},l.a.createElement(w.a,null,l.a.createElement(I.a,{style:{backgroundColor:"white"}},l.a.createElement("img",{src:t.profilepicture,alt:"image1",style:{borderRadius:"100%",height:"40px",width:"40px",marginRight:"10px"}}))),l.a.createElement(S.a,{primary:t.name})),l.a.createElement(T.a,null))})))):l.a.createElement(ke,null)):l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"spinner-border text-info",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),a}(n.Component),Oe=Object(g.b)((function(e){return{listItem:e.clickMediaItem.list}}),{getList:function(){return function(e){u.a.get("https://panorbit.in/api/users.json").then((function(t){console.log(t.data.users),e({type:"GET_LIST",payload:t.data.users})}))}},getProfile:d})(Ce);var we=function(){return l.a.createElement(je.a,null,l.a.createElement(Oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(39),Se=a(126),Le=a(42),Te={list:[],profileList:[],chatListItem:[]},Re=Object(Ie.c)({clickMediaItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST":return Object(Le.a)(Object(Le.a)({},e),{},{list:t.payload});case"GET_PROFILE":return Object(Le.a)(Object(Le.a)({},e),{},{profileList:t.payload});case"CHAT_LIST":return Object(Le.a)(Object(Le.a)({},e),{},{chatListItem:t.payload});default:return e}}}),ze=[Se.a],We=Object(Ie.d)(Re,{},Ie.a.apply(void 0,ze));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g.a,{store:We},l.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.aae1323e.chunk.js.map