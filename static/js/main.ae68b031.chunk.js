(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[0],{131:function(e,t,n){e.exports={header:"Header_header__1VCKf"}},134:function(e,t,n){e.exports={item:"Dialog_item__tN3QM"}},135:function(e,t,n){e.exports={item:"Message_item__Vrg2B"}},138:function(e,t,n){e.exports={list:"FriendsList_list__2VB7z"}},139:function(e,t,n){e.exports={ldsDualRing:"Preloader_ldsDualRing__Ds8oF"}},140:function(e,t,n){e.exports={infoBlock:"ProfileInfo_infoBlock__Yi3uO"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",link:"Navbar_link__TNvz9",activeLink:"Navbar_activeLink__3etBE"}},173:function(e,t,n){},174:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(133),s=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"2afa80a1-f257-46b3-bcfc-c61726b5fc0c"}}),a={getUsers:function(e,t){return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return s.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return s.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return s.get("profile/".concat(e)).then((function(e){return e.data}))},getUserStatus:function(e){return s.get("profile/status/".concat(e)).then((function(e){return e.data}))},setUserStatus:function(e){return s.put("profile/status",{status:e}).then((function(e){return e.data}))}},i={authUser:function(){return s.get("auth/me").then((function(e){return e.data}))},loginUser:function(e,t,n,r){return s.post("auth/login",{email:e,password:t,remeberMe:n,captcha:r}).then((function(e){return e.data}))},logoutUser:function(){return s.delete("auth/login").then((function(e){return e.data}))}}},295:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(67),i=n.n(c),u=(n(173),n(22)),o=n(29),l=n(24),j=n(23),d=(n(174),n(3)),b=n(56),f=n(13),p=n(131),O=n.n(p),h=function(e){var t=e.isLogin,n=e.login,s=e.logout;Object(b.a)(e,["isLogin","login","logout"]);return Object(r.jsxs)("header",{className:O.a.header,children:[Object(r.jsx)("img",{src:"https://vsetreningi.ru/avatars/objects/8-1539_1_6.jpg?7a3135fcd5210906b1ab7814f42fa4b7",alt:"logo"}),Object(r.jsx)("div",{children:t?Object(r.jsxs)("div",{children:[n," ",Object(r.jsx)("button",{onClick:s,children:"Logout"})]}):Object(r.jsx)(f.b,{to:"/login",children:"Login"})})]})},g=n(11),x=n(32),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).render=function(){return Object(r.jsx)(h,Object(d.a)({},e.props))},e}return n}(a.a.Component),v=Object(g.b)((function(e){return{userId:e.auth.userId,login:e.auth.login,isLogin:e.auth.isLogin}}),{logout:x.c})(m),C=n(128),w=n(129),A=n(48),I=n(68),k=n(12),U=function(e){return{isLogin:e.auth.isLogin}},P=function(e){return Object(g.b)(U)((function(t){return t.isLogin?Object(r.jsx)(e,Object(d.a)({},t)):Object(r.jsx)(k.a,{to:"/login"})}))},S=n(134),y=n.n(S),B=function(e){var t=e.id,n=e.user,s=e.message;return Object(r.jsx)("div",{className:y.a.item,children:Object(r.jsxs)(f.b,{to:"/messages/"+t,children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)("span",{children:s})]})})},N=n(135),E=n.n(N),R=function(e){var t=e.message;return Object(r.jsx)("div",{className:E.a.item,children:t})},D=n(73),T=n.n(D),L=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(C.a,{placeholder:"Message",name:"message",type:"text",component:I.b,validate:[A.c]}),Object(r.jsx)("button",{type:"submit",children:"Send message"})]})};L=Object(w.a)({form:"message"})(L);var M=P((function(e){var t=e.dialogs.map((function(e){return Object(r.jsx)(B,{id:e.id,user:e.user},e.id)})),n=e.messages.map((function(e){return Object(r.jsx)(R,{message:e.message},e.id)}));return Object(r.jsxs)("div",{className:T.a.content,children:[Object(r.jsx)("div",{className:T.a.dialogs,children:t}),Object(r.jsx)("div",{className:T.a.messages,children:n}),Object(r.jsx)(L,{onSubmit:function(t){e.sendMessage(t.message)}})]})})),z=n(38),F="CREATE-MESSAGE",K="UPDATE-MESSAGE-TEXT",G={dialogs:[{id:1,user:"Vladimir Nikev"},{id:2,user:"Anna Zakharchuk"},{id:3,user:"Ivan Kiskin"},{id:4,user:"Vladislav Gatsenko"},{id:5,user:"Yuriy Ovcharenko"},{id:6,user:"Rustam Abduloev"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"Nice"},{id:4,message:"React - cool"}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n={id:5,message:t.value};return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(z.a)(e.messages),[n])});case K:return Object(d.a)(Object(d.a)({},e),{},{messageText:t.textMessage});default:return e}},H=n(7),W=n(137),_=Object(W.a)((function(e){return e.messagesPage.dialogs}),(function(e){return e.filter((function(e){return e}))})),J=function(e){return e.messagesPage.messages},X=function(e){return e.messagesPage.messageText},Z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(M,Object(d.a)({},this.props))}}]),n}(a.a.Component),Y=Object(H.compose)(Object(g.b)((function(e){return{dialogs:_(e),messages:J(e),messageText:X(e)}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:F,value:e}}(t))},changeMessage:function(t){e(function(e){return{type:K,textMessage:e}}(t))}}})),P)(Z),q=n(15),V=n.n(q),$=n(138),ee=n.n($),te=function(e){var t=e.friends.map((function(e){return Object(r.jsx)("span",{children:e.friend},e.id)}));return Object(r.jsx)("div",{className:ee.a.list,children:t})},ne=function(e){return Object(r.jsxs)("nav",{className:V.a.nav,children:[Object(r.jsxs)("ul",{className:V.a.list,children:[Object(r.jsx)("li",{children:Object(r.jsx)(f.b,{to:"/profile",activeClassName:V.a.activeLink,className:V.a.link,children:"Profile"})}),Object(r.jsx)("li",{children:Object(r.jsx)(f.b,{to:"/messages",activeClassName:V.a.activeLink,className:V.a.link,children:"Messages"})}),Object(r.jsx)("li",{children:Object(r.jsx)(f.b,{to:"/users",activeClassName:V.a.activeLink,className:V.a.link,children:"Users"})}),Object(r.jsx)("li",{children:Object(r.jsx)(f.b,{to:"/news",activeClassName:V.a.activeLink,className:V.a.link,children:"News"})}),Object(r.jsx)("li",{children:Object(r.jsx)(f.b,{to:"/music",activeClassName:V.a.activeLink,className:V.a.link,children:"Music"})}),Object(r.jsx)("li",{children:Object(r.jsx)(f.b,{to:"/settings",activeClassName:V.a.activeLink,className:V.a.link,children:"Settings"})})]}),Object(r.jsx)(te,{friends:e.friends})]})},re=Object(g.b)((function(e){return{friends:e.sidebar.friends}}),null)(ne),se=n(75),ae=n.n(se),ce=function(e){var t=e.text,n=e.likeCounter;return Object(r.jsxs)("div",{className:ae.a.item,children:[Object(r.jsx)("img",{src:"https://www.belta.by/images/storage/news/with_archive/2020/000029_1579851115_377062_big.jpg",alt:"avatar"}),Object(r.jsxs)("div",{className:ae.a.textWrapper,children:[Object(r.jsx)("span",{children:t}),Object(r.jsxs)("span",{className:ae.a.button,children:["Like ",n]})]})]})},ie=n(98),ue=n.n(ie),oe=Object(A.b)(10),le=function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(C.a,{placeholder:"Post",name:"post",type:"text",component:I.b,validate:[A.c,oe]}),Object(r.jsx)("button",{type:"submit",children:"Add post"})]})};le=Object(w.a)({form:"post"})(le);var je=a.a.memo((function(e){var t=e.posts.map((function(e){return Object(r.jsx)(ce,{likeCounter:e.likeCounter,text:e.text},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:ue.a.postsTitle,children:"Posts"}),Object(r.jsx)("div",{className:ue.a.addPostWrapper,children:Object(r.jsx)(le,{onSubmit:function(t){e.createPost(t.post)}})}),Object(r.jsx)("div",{children:t})]})})),de=n(10),be=n.n(de),fe=n(17),pe=n(21),Oe="CREATE-POST",he="CHANGE_USER_DATA",ge="CHANGE_STATUS",xe=function(e){return{type:Oe,post:e}},me=function(e){return{type:ge,status:e}},ve={posts:[{id:0,text:"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u0432\u044b\u0434\u0430\u043b\u0441\u044f \u0434\u0435\u043d\u0435\u043a!",likeCounter:"138"},{id:1,text:"\u041f\u043e\u0431\u0435\u0434\u0430",likeCounter:"83"},{id:2,text:"\u041a\u0435\u043a",likeCounter:"12"},{id:3,text:"\u041b\u043e\u043b",likeCounter:"7"},{id:4,text:"React - \u043f\u0443\u0448\u043a\u0430",likeCounter:"999"}],userData:null,userStatus:""},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:var n={id:5,text:t.post,likeCounter:0};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(z.a)(e.posts),[n])});case he:return Object(d.a)(Object(d.a)({},e),{},{userData:t.userData});case ge:return Object(d.a)(Object(d.a)({},e),{},{userStatus:t.status});default:return e}},we=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(je,Object(d.a)({},this.props))}}]),n}(a.a.Component),Ae=Object(g.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{createPost:function(t){e(xe(t))}}}))(we),Ie=(n(295),n(139)),ke=n.n(Ie),Ue=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:ke.a.ldsDualRing})})},Pe=n(55),Se=function(e){var t=Object(s.useState)(!1),n=Object(Pe.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(e.status),u=Object(Pe.a)(i,2),o=u[0],l=u[1];Object(s.useEffect)((function(){l(e.status)}),[e.status]),Object(s.useEffect)((function(){e.getStatus(e.userId||e.mainId)}),[e.userId,e.mainId]);return Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)("input",{autoFocus:!0,value:o,onChange:function(e){l(e.currentTarget.value)},onBlur:function(){e.setStatus(o),c(!1)},type:"text"}):Object(r.jsx)("span",{onClick:function(){c(!0)},children:e.status||"New status"})})};Object(H.compose)(k.f)(Se);var ye=Se,Be=n(140),Ne=n.n(Be),Ee=function(e){return e.userData?Object(r.jsxs)("div",{className:Ne.a.infoBlock,children:[Object(r.jsx)(ye,{setStatus:e.setStatus,getStatus:e.getStatus,status:e.status,mainId:e.mainId,userId:e.userId}),Object(r.jsx)("img",{alt:"avatar",src:e.userData.photos.large}),Object(r.jsx)("p",{children:e.userData.fullName}),Object(r.jsx)("p",{children:e.userData.aboutMe}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Contacts"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"Facebook: "}),e.userData.contacts.facebook?e.userData.contacts.facebook:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"Website: "}),e.userData.contacts.website?e.userData.contacts.website:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"VK: "}),e.userData.contacts.vk?e.userData.contacts.vk:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"Twitter: "}),e.userData.contacts.twitter?e.userData.contacts.twitter:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"Instagram: "}),e.userData.contacts.instagram?e.userData.contacts.instagram:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"Youtube: "}),e.userData.contacts.youtube?e.userData.contacts.youtube:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"GitHub: "}),e.userData.contacts.github?e.userData.contacts.github:"-"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{children:"Link: "}),e.userData.contacts.mainLink?e.userData.contacts.mainLink:"-"]})]})]}),Object(r.jsx)("p",{children:e.userData.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443":"\u0420\u0430\u0431\u043e\u0442\u0430\u044e"}),Object(r.jsx)("p",{children:e.userData.lookingForAJobDescription}),Object(r.jsx)("p",{children:"description"})]}):Object(r.jsx)(Ue,{})},Re=function(e){return Object(r.jsxs)("main",{children:[Object(r.jsx)(Ee,{setStatus:e.setStatus,getStatus:e.getStatus,status:e.status,userId:e.match.params.userId,mainId:e.mainId,userData:e.userData}),Object(r.jsx)(Ae,{})]})},De=function(e){return e.profilePage.posts},Te=function(e){return e.profilePage.userData},Le=function(e){return e.profilePage.userStatus},Me=function(e){return e.auth.userId},ze=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.mainId),this.props.getProfile(e)}},{key:"render",value:function(){return Object(r.jsx)(Re,Object(d.a)({},this.props))}}]),n}(a.a.Component),Fe=Object(H.compose)(Object(g.b)((function(e){return{posts:De(e),userData:Te(e),status:Le(e),mainId:Me(e)}}),{createPost:xe,setUserAuth:x.d,getProfile:function(e){return function(){var t=Object(fe.a)(be.a.mark((function t(n){var r;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe.b.getProfile(e);case 2:r=t.sent,n({type:he,userData:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(fe.a)(be.a.mark((function t(n){var r;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe.b.getUserStatus(e);case 2:(r=t.sent)&&n(me(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setStatus:function(e){return function(){var t=Object(fe.a)(be.a.mark((function t(n){return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe.b.setUserStatus(e);case 2:0===t.sent.resultCode&&n(me(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),k.f,P)(ze),Ke=function(){return Object(r.jsx)("div",{children:"Music"})},Ge=function(){return Object(r.jsx)("div",{children:"Settings"})},Qe=n(72),He=n.n(Qe),We=function(e){var t=e.user,n=e.followingInProgress,s=e.unfollowUser,a=e.followUser;return Object(r.jsxs)("div",{className:He.a.card,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(f.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",alt:"img"})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("div",{className:He.a.wrapper,children:[Object(r.jsx)("span",{children:t.name}),Object(r.jsx)("span",{children:"u.status"}),Object(r.jsx)("span",{children:"u.place.country"}),Object(r.jsx)("span",{children:"u.place.city"})]})]})},_e=n(58),Je=n.n(_e),Xe=function(e){for(var t=e.itemsCount,n=e.pageSize,a=e.currentPage,c=e.onChanged,i=e.portionSize,u=void 0===i?5:i,o=Math.ceil(t/n),l=[],j=1;j<=o;j++)l.push(j);var d=Math.ceil(o/u),b=Object(s.useState)(1),f=Object(Pe.a)(b,2),p=f[0],O=f[1],h=(p-1)*u,g=p*u;return Object(r.jsxs)("div",{className:Je.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){O(p-1)},children:"Prev"}),l.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(r.jsx)("span",{onClick:function(t){c(e)},className:a===e?Je.a.selected+" "+Je.a.items:Je.a.items,children:e},e)})),p<d&&Object(r.jsx)("button",{onClick:function(){O(p+1)},children:"Next"})]})},Ze=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Xe,{currentPage:e.currentPage,onChanged:e.onChanged,pageSize:e.pageSize,itemsCount:e.usersCount}),e.isFetching?Object(r.jsx)(Ue,{}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Users"}),Object(r.jsx)("div",{children:e.users.map((function(t){return Object(r.jsx)(We,Object(d.a)({user:t},e),t.id)}))})]})]})},Ye="FOLLOW_USER",qe="UNFOLLOW_USER",Ve="SET_USERS",$e="SET_CURRENT_PAGE",et="SET_USERS_COUNT",tt="SET_FETCHING",nt="TOGGLE_BUTTON_CLICK",rt=function(e){return{type:Ye,userId:e}},st=function(e){return{type:qe,userId:e}},at=function(e){return{type:Ve,users:e}},ct=function(e){return{type:$e,currentPage:e}},it=function(e){return{type:tt,isFetching:e}},ut=function(e,t){return{type:nt,userId:e,isFetching:t}},ot=function(){var e=Object(fe.a)(be.a.mark((function e(t,n,r,s){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(ut(r,!0)),e.next=3,t(r);case 3:0===e.sent.resultCode&&s(n(r)),s(ut(r,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),lt={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ve:return Object(d.a)(Object(d.a)({},e),{},{users:Object(z.a)(t.users)});case Ye:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case qe:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case $e:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case et:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.usersCount});case tt:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case nt:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},dt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onChanged=function(t){e.props.setPage(t,e.props.pageSize)},e.onClickFollow=function(t){e.props.followUser(t)},e.onClickUnfollow=function(t){e.props.unfollowUser(t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Ze,{usersCount:this.props.usersCount,pageSize:this.props.pageSize,onChanged:this.onChanged,currentPage:this.props.currentPage,unfollowUser:this.onClickUnfollow,followUser:this.onClickFollow,users:this.props.users,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching})})}}]),n}(a.a.Component),bt=Object(H.compose)(Object(g.b)((function(e){return{users:e.usersPage.users,usersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{followUser:function(e){return function(){var t=Object(fe.a)(be.a.mark((function t(n){var r;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=pe.c.followUser,ot(r,rt,e,n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowUser:function(e){return function(){var t=Object(fe.a)(be.a.mark((function t(n){var r;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=pe.c.unfollowUser,ot(r,st,e,n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setPage:function(e,t){return function(){var n=Object(fe.a)(be.a.mark((function n(r){var s;return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(it(!0)),r(ct(e)),n.next=4,pe.c.getUsers(e,t);case 4:s=n.sent,r(at(s.items)),r(it(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(fe.a)(be.a.mark((function n(r){var s;return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(it(!0)),n.next=3,pe.c.getUsers(e,t);case 3:s=n.sent,r(it(!1)),r(at(s.items)),r((a=s.totalCount,{type:et,usersCount:a}));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()}}),P)(dt),ft="SET_INITIALIZED",pt={initialized:!1},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ft:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},ht=a.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),gt=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),xt=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.isInitialized?Object(r.jsx)(f.a,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(v,{}),Object(r.jsx)(re,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(k.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(Fe,{})}}),Object(r.jsx)(k.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(Fe,{})}}),Object(r.jsx)(k.b,{path:"/messages",render:function(){return Object(r.jsx)(Y,{})}}),Object(r.jsx)(k.b,{path:"/users",render:function(){return Object(r.jsx)(bt,{})}}),Object(r.jsx)(k.b,{path:"/news",render:function(){return Object(r.jsx)(s.Suspense,{fallback:Object(r.jsx)(Ue,{}),children:Object(r.jsx)(ht,{})})}}),Object(r.jsx)(k.b,{path:"/music",render:function(){return Object(r.jsx)(Ke,{})}}),Object(r.jsx)(k.b,{path:"/settings",render:function(){return Object(r.jsx)(Ge,{})}}),Object(r.jsx)(k.b,{path:"/login",render:function(){return Object(r.jsx)(s.Suspense,{fallback:Object(r.jsx)(Ue,{}),children:Object(r.jsx)(gt,{})})}})]})]})}):Object(r.jsx)(Ue,{})}}]),n}(a.a.Component),mt=Object(g.b)((function(e){return{isInitialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(x.d)());Promise.all([t]).then((function(){e({type:ft})}))}}})(xt),vt=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,300)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},Ct={friends:[{id:1,friend:"Vladimir Nikev"},{id:2,friend:"Anna Zakharchuk"},{id:3,friend:"Ivan Kiskin"},{id:4,friend:"Vladislav Gatsenko"},{id:5,friend:"Rustam Abduloev"}]},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=Object(d.a)({},e);return t},At=n(141),It=n(130),kt=n(142),Ut=Object(H.combineReducers)({profilePage:Ce,messagesPage:Q,sidebar:wt,usersPage:jt,auth:x.a,form:It.a,app:Ot}),Pt=Object(H.createStore)(Ut,Object(kt.composeWithDevTools)(Object(H.applyMiddleware)(At.a)));i.a.render(Object(r.jsx)(g.a,{store:Pt,children:Object(r.jsx)(mt,{})}),document.getElementById("root")),vt()},32:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return f}));var r=n(10),s=n.n(r),a=n(17),c=n(3),i=n(44),u=n(21),o="SET_USER_DATA_AUTH",l={userId:null,login:null,email:null,isLogin:!1},j=function(e,t,n,r){return{type:o,data:{userId:e,login:t,email:n,isLogin:r}}},d=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){var n,r,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.authUser();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.login,i=r.email,t(j(a,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var c=Object(a.a)(s.a.mark((function a(c){var o;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.a.loginUser(e,t,n,r);case 2:0===(o=s.sent).resultCode?c(d()):c(Object(i.a)("login",{_error:o.messages[0]}));case 4:case"end":return s.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}()},f=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logoutUser();case 2:0===e.sent.resultCode&&(console.log("LOGOUT"),t(j(null,null,null,!1)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),t.data);default:return e}}},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Error"},s=function(e){return function(t){return t.length>e?"Must be less, then ".concat(e," symbols"):void 0}},a=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0}},57:function(e,t,n){e.exports={customTextarea:"FormsControls_customTextarea__SPgbw",error:"FormsControls_error__9lcue"}},58:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",items:"Paginator_items__bdTXG",selected:"Paginator_selected__2cTTO"}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o}));var r=n(3),s=n(56),a=n(0),c=(n(1),n(57)),i=n.n(c),u=function(e){var t=e.input,n=e.meta,c=Object(s.a)(e,["input","meta"]);return Object(a.jsxs)("div",{className:i.a.customTextarea+" "+(n.error&&n.touched?i.a.error:""),children:[Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),c)),n.error&&n.touched&&Object(a.jsx)("span",{children:n.error})]})},o=function(e){var t=e.input,n=e.meta,c=Object(s.a)(e,["input","meta"]);return Object(a.jsxs)("div",{className:i.a.customTextarea+" "+(n.error&&n.touched?i.a.error:""),children:[Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),c)),n.error&&n.touched&&Object(a.jsx)("span",{children:n.error})]})}},72:function(e,t,n){e.exports={card:"Users_card__1fTSP",wrapper:"Users_wrapper__3zs-t"}},73:function(e,t,n){e.exports={content:"Messages_content__1TCv4"}},75:function(e,t,n){e.exports={item:"Post_item__2EmvQ",textWrapper:"Post_textWrapper__1jnES",button:"Post_button__idT7F"}},98:function(e,t,n){e.exports={postsTitle:"Posts_postsTitle__2z41B",addPostWrapper:"Posts_addPostWrapper__3_Wq-"}}},[[296,1,2]]]);
//# sourceMappingURL=main.ae68b031.chunk.js.map