(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,s){e.exports={textbox:"createreview_textbox__3yLxv",createreview:"createreview_createreview__3aWCt"}},49:function(e,t,s){e.exports={review:"ReviewStyle_review__17uYx"}},58:function(e,t,s){},59:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var n=s(11),c=s.n(n),a=s(48),i=s.n(a),r=(s(58),s(10)),o=(s(59),s(5)),l=function(e){var t=e.searchQuery,s=e.handleFilterTextChange,n=e.hasAC,c=e.handleACCheckBoxChange,a=e.hasSingles,i=e.handleSinglesCheckBoxChange,r=e.hasDoubles,l=e.handleDoublesCheckBoxChange,u=e.hasTriples,d=e.handleTriplesCheckBoxChange,h=e.hasQuads,j=e.handleQuadsCheckBoxChange,b=e.hasSuites,p=e.handleSuitesCheckBoxChange,g=e.hasPods,O=e.handlePodsCheckBoxChange,v=e.hasCorridors,x=e.handleCorridorsCheckBoxChange,f=e.hasElevators,C=e.handleElevatorsCheckBoxChange,m=e.hasDining,k=e.handleDiningCheckBoxChange;return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",placeholder:"Search for a dorm...",value:t,onChange:function(e){return s(e.target.value)}}),Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:n,onChange:c}),"Has AC",Object(o.jsx)("input",{type:"checkbox",checked:a,onChange:i}),"Singles"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:r,onChange:l}),"Doubles",Object(o.jsx)("input",{type:"checkbox",checked:u,onChange:d}),"Triples"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:h,onChange:j}),"Quads",Object(o.jsx)("input",{type:"checkbox",checked:b,onChange:p}),"Suites"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:g,onChange:O}),"Pods",Object(o.jsx)("input",{type:"checkbox",checked:v,onChange:x}),"Corridors"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:f,onChange:C}),"Elevators",Object(o.jsx)("input",{type:"checkbox",checked:m,onChange:k}),"Dining"]})]})},u=s(38),d=s(0),h=s.n(d),j=s(18),b=s(1),p=s(34),g=s.n(p),O=s(49),v=s.n(O),x=function(e){var t=e.cleanliness,s=e.convenience,n=e.lounges,c=e.noise,a=e.quality,i=e.social,r=e.year,l=e.review,u=e.localUserID,d=e.userID,p=e.postID,O=e.dormName,x=e.reviews,f=e.setReviews,C=function(){var e=Object(b.a)(h.a.mark((function e(t){var s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("/deleteReview/".concat(t,"/").concat(p));case 2:s=Object(j.a)(x),n=s.filter((function(e){return e.postID!==p})),console.log(n),f(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=Number(((parseInt(t)+parseInt(s)+parseInt(n)+parseInt(c)+parseInt(a)+parseInt(i))/6).toFixed(1));return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:v.a.review,style:{borderColor:m>=4?"#00ff00":m>=2?"#FEDE00":"#f50c0c"},children:[Object(o.jsxs)("h3",{children:["Overall Quality: ",m,"/5"]}),"Year Stayed: "+r,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Social Life: "+i,Object(o.jsx)("br",{}),"Convenience: "+s,Object(o.jsx)("br",{}),"Cleanliness: "+t,Object(o.jsx)("br",{}),"Quietness: "+c,Object(o.jsx)("br",{}),"Lounges: "+n,Object(o.jsx)("br",{}),"Quality/Appearance: "+a,Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Comments: "}),l,Object(o.jsx)("br",{}),u===d?Object(o.jsx)("input",{type:"button",value:"Delete Review",onClick:function(e){C(O)}}):Object(o.jsx)("p",{})]})})},f=s(21),C=function(e){var t,s,c,a,i,r,l,d,h,j,b,p,g,O,v,C,m=e.reviews,k=e.dormName,S=e.setReview;return Object(n.useEffect)((function(){document.title=k+" - CUDormReviews"})),Object(n.useEffect)((function(){fetch("/getReviews/"+k).then((function(e){return e.json()})).then((function(e){S(e)}))}),[k]),Object(o.jsx)("div",{children:k.length>0?Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:null===(t=L.get(k))||void 0===t?void 0:t.name}),Object(o.jsx)("h4",{children:null===(s=L.get(k))||void 0===s?void 0:s.location}),Object(o.jsx)("img",{src:null===(c=L.get(k))||void 0===c?void 0:c.picLink,alt:null===(a=L.get(k))||void 0===a?void 0:a.name}),Object(o.jsxs)("p",{children:["Number of Residents: ",null===(i=L.get(k))||void 0===i?void 0:i.residents]}),Object(o.jsxs)("p",{children:["Has Singles: ",(null===(r=L.get(k))||void 0===r?void 0:r.singles)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Has Doubles: ",(null===(l=L.get(k))||void 0===l?void 0:l.doubles)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Has Triples: ",(null===(d=L.get(k))||void 0===d?void 0:d.triples)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Has Quads: ",(null===(h=L.get(k))||void 0===h?void 0:h.quads)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Rooms arranged in Suites: ",(null===(j=L.get(k))||void 0===j?void 0:j.suites)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Rooms arranged in Pods: ",(null===(b=L.get(k))||void 0===b?void 0:b.pods)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Rooms arranged along Corridors: ",(null===(p=L.get(k))||void 0===p?void 0:p.corridors)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Has AC: ",(null===(g=L.get(k))||void 0===g?void 0:g.ac)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Has Elevators: ",(null===(O=L.get(k))||void 0===O?void 0:O.elevators)?"Yes":"No"]}),Object(o.jsxs)("p",{children:["Has a Dining Hall: ",(null===(v=L.get(k))||void 0===v?void 0:v.dining)?"Yes":"No"]}),Object(o.jsx)("a",{href:null===(C=L.get(k))||void 0===C?void 0:C.housingWebsite,children:"Read more on the Housing webpage"}),Object(o.jsxs)("p",{children:["Social Life: ",(m.reduce((function(e,t){return e+parseInt(t.social)}),0)/m.length).toFixed(1)]}),Object(o.jsxs)("p",{children:["Convenience: ",(m.reduce((function(e,t){return e+parseInt(t.convenience)}),0)/m.length).toFixed(1)]}),Object(o.jsxs)("p",{children:["Cleanliness: ",(m.reduce((function(e,t){return e+parseInt(t.cleanliness)}),0)/m.length).toFixed(1)]}),Object(o.jsxs)("p",{children:["Quietness: ",(m.reduce((function(e,t){return e+parseInt(t.noise)}),0)/m.length).toFixed(1)]}),Object(o.jsxs)("p",{children:["Lounges: ",(m.reduce((function(e,t){return e+parseInt(t.lounges)}),0)/m.length).toFixed(1)]}),Object(o.jsxs)("p",{children:["Quality/Appearance: ",(m.reduce((function(e,t){return e+parseInt(t.quality)}),0)/m.length).toFixed(1)]}),m.length>0?m.map((function(e,t){return Object(o.jsx)(x,Object(u.a)(Object(u.a)({},e),{},{localUserID:null!==Object(f.b)().currentUser?Object(f.b)().currentUser.uid:"",dormName:k,reviews:m,setReviews:S}),t)})):Object(o.jsxs)("h4",{children:["No Reviews for ",k," :(",Object(o.jsx)("br",{}),"Be the first to add a review"]})]}):Object(o.jsx)("p",{})})},m=function(e){var t=e.searchQuery,s=e.handleClick,n=e.searchFilter;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Y.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())&&(!n.hasAC||e.ac)&&(!n.hasSingles||e.singles)&&(!n.hasDoubles||e.doubles)&&(!n.hasTriples||e.triples)&&(!n.hasQuads||e.quads)&&(!n.hasSuites||e.suites)&&(!n.hasPods||e.pods)&&(!n.hasCorridors||e.corridors)&&(!n.hasElevators||e.elevators)&&(!n.hasDining||e.dining)})).map((function(e){return Object(o.jsx)("input",{type:"button",value:e.name,onClick:function(t){s(e.name)}})}))}),Object(o.jsx)("div",{})]})},k=s(50),S=s(51),w=s.n(S),y=Object(k.a)({apiKey:"AIzaSyApFN9JTuIKz_4JbMOntUKfb6o1HYSqE5I",authDomain:"webdeva2-478bd.firebaseapp.com",projectId:"webdeva2-478bd",storageBucket:"webdeva2-478bd.appspot.com/",messagingSenderId:"544198736831",appId:"1:544198736831:web:3e9c78a50fbda7b61bbf0a"}),D=Object(f.b)(y),I=function(e){var t=e.children,s=e.dormName,c=e.setReview,a=Object(n.useState)(null),i=Object(r.a)(a,2),l=i[0],u=i[1],d={signInFlow:"popup",signInOptions:[f.a.PROVIDER_ID]};return Object(n.useEffect)((function(){Object(f.c)(D,u)}),[]),Object(n.useEffect)((function(){fetch("/getReviews/"+s).then((function(e){return e.json()})).then((function(e){c(e)}))}),[l]),Object(o.jsx)(o.Fragment,{children:l?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h2",{children:["Hi, ",l.displayName,"!"]}),Object(o.jsx)("button",{onClick:function(){Object(f.d)(D)},children:"Sign Out"}),t]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"To add reviews or edit your existing reviews, please log in below!"}),Object(o.jsx)(w.a,{uiConfig:d,firebaseAuth:D})]})})},N=s(39),B=s.n(N),R=function(e){var t=e.dormName,s=e.reviews,c=e.setReviews,a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],u=i[1],d=Object(n.useState)(""),p=Object(r.a)(d,2),O=p[0],v=p[1],x=Object(n.useState)("1"),C=Object(r.a)(x,2),m=C[0],k=C[1],S=Object(n.useState)("1"),w=Object(r.a)(S,2),y=w[0],D=w[1],I=Object(n.useState)("1"),N=Object(r.a)(I,2),R=N[0],_=N[1],H=Object(n.useState)("1"),T=Object(r.a)(H,2),F=T[0],A=T[1],Q=Object(n.useState)("1"),E=Object(r.a)(Q,2),L=E[0],Y=E[1],P=Object(n.useState)("1"),q=Object(r.a)(P,2),M=q[0],U=q[1],W=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,i,r,o,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",a=Object(f.b)(),null!==(i=a.currentUser)&&(n=i.uid),r={cleanliness:R,convenience:y,lounges:L,noise:F,quality:M,social:m,year:O,review:l,userID:n,postID:"null"},e.next=8,g.a.post("/createReview/".concat(t),r);case 8:o=e.sent,o.data,(u=Object(j.a)(s)).push(r),c(u);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t,s,n){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[e,Object(o.jsxs)("select",{value:t,onChange:n,children:[Object(o.jsxs)("option",{value:"1",children:["1 - Least ",s]}),Object(o.jsx)("option",{value:"2",children:"2"}),Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"4",children:"4"}),Object(o.jsxs)("option",{value:"5",children:["5 - Most ",s]})]})]}),Object(o.jsx)("br",{})]})};return Object(o.jsxs)("div",{className:B.a.createreview,children:[Object(o.jsx)("h3",{children:"Leave a Review"}),Object(o.jsx)("textarea",{placeholder:"Enter review here...",value:l,onChange:function(e){var t=e.currentTarget.value;u(t)},className:B.a.textbox}),Object(o.jsx)("br",{}),Object(o.jsxs)("span",{children:["Year Stayed \u2003",Object(o.jsx)("input",{type:"text",value:O,onChange:function(e){var t=e.currentTarget.value;v(t)}})]}),G("Social Life",m,"social",(function(e){var t=e.currentTarget.value;k(t)})),G("Convenience",y,"convenient",(function(e){var t=e.currentTarget.value;D(t)})),G("Cleanliness",R,"clean",(function(e){var t=e.currentTarget.value;_(t)})),G("Quietness",F,"quiet",(function(e){var t=e.currentTarget.value;A(t)})),G("Lounges",L,"lounge space",(function(e){var t=e.currentTarget.value;Y(t)})),G("Quality/Appearance",M,"quality",(function(e){var t=e.currentTarget.value;U(t)})),Object(o.jsx)("button",{onClick:function(){console.log(m),console.log(y),console.log(R),console.log(F),console.log(L),console.log(M),W(t),u(""),v(""),k("1"),D("1"),_("1"),A("1"),Y("1"),U("1")},children:"Submit"})]})},_={hasAC:!1,hasSingles:!1,hasDoubles:!1,hasTriples:!1,hasQuads:!1,hasSuites:!1,hasPods:!1,hasCorridors:!1,hasElevators:!1,hasDining:!1};var H=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),u=i[0],d=i[1],h=Object(n.useState)(""),j=Object(r.a)(h,2),b=(j[0],j[1],Object(n.useState)([])),p=Object(r.a)(b,2),g=p[0],O=p[1],v=Object(n.useState)(!1),x=Object(r.a)(v,2),f=x[0],k=x[1],S=Object(n.useState)(!1),w=Object(r.a)(S,2),y=w[0],D=w[1],N=Object(n.useState)(!1),B=Object(r.a)(N,2),H=B[0],T=B[1],F=Object(n.useState)(!1),A=Object(r.a)(F,2),Q=A[0],E=A[1],L=Object(n.useState)(!1),Y=Object(r.a)(L,2),P=Y[0],q=Y[1],M=Object(n.useState)(!1),U=Object(r.a)(M,2),W=U[0],G=U[1],J=Object(n.useState)(!1),z=Object(r.a)(J,2),K=z[0],V=z[1],X=Object(n.useState)(!1),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),se=Object(r.a)(te,2),ne=se[0],ce=se[1],ae=Object(n.useState)(!1),ie=Object(r.a)(ae,2),re=ie[0],oe=ie[1];return _={hasAC:f,hasSingles:y,hasDoubles:H,hasTriples:Q,hasQuads:P,hasSuites:W,hasPods:K,hasCorridors:$,hasElevators:ne,hasDining:re},Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{children:"CUDormReviews"}),Object(o.jsx)(l,{searchQuery:s,handleFilterTextChange:c,hasAC:f,handleACCheckBoxChange:function(e){return k(e.target.checked)},hasSingles:y,handleSinglesCheckBoxChange:function(e){return D(e.target.checked)},hasDoubles:H,handleDoublesCheckBoxChange:function(e){return T(e.target.checked)},hasTriples:Q,handleTriplesCheckBoxChange:function(e){return E(e.target.checked)},hasQuads:P,handleQuadsCheckBoxChange:function(e){return q(e.target.checked)},hasSuites:W,handleSuitesCheckBoxChange:function(e){return G(e.target.checked)},hasPods:K,handlePodsCheckBoxChange:function(e){return V(e.target.checked)},hasCorridors:$,handleCorridorsCheckBoxChange:function(e){return ee(e.target.checked)},hasElevators:ne,handleElevatorsCheckBoxChange:function(e){return ce(e.target.checked)},hasDining:re,handleDiningCheckBoxChange:function(e){return oe(e.target.checked)}}),Object(o.jsx)(m,{searchQuery:s,handleClick:d,searchFilter:_}),Object(o.jsx)(C,{dormName:u,reviews:g,setReview:O}),Object(o.jsx)(I,{dormName:u,setReview:O,children:void 0}),u.length>0?Object(o.jsx)(R,{dormName:u,reviews:g,setReviews:O}):Object(o.jsx)("h3",{children:"Search for a dorm above!"})]})})},T={singles:!0,doubles:!0,triples:!1,quads:!1,suites:!1,pods:!0,corridors:!1,residents:260,ac:!0,elevators:!0,dining:!1,housingWebsite:"https://scl.cornell.edu/residential-life/housing/campus-housing/first-year-undergraduates/residence-halls/mews-hall",picLink:"https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2019-09/Mews_1.png?h=4380f786&itok=KFIPyz0k",name:"Mews Hall",location:"North Campus"},F={singles:!0,doubles:!0,triples:!1,quads:!1,suites:!0,pods:!1,corridors:!1,residents:520,ac:!0,elevators:!0,dining:!1,housingWebsite:"https://scl.cornell.edu/residential-life/housing/campus-housing/first-year-undergraduates/residence-halls/ganedago-hall",picLink:"https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2020-10/SophSiteRendering.JPG?h=473ee7f7&itok=A__s8kaO",name:"Gan\u0119dag\u01eb: Hall",location:"North Campus"},A={singles:!0,doubles:!0,triples:!1,quads:!0,suites:!1,pods:!1,corridors:!0,residents:450,ac:!1,elevators:!0,dining:!1,housingWebsite:"https://scl.cornell.edu/residential-life/housing/campus-housing/first-year-undergraduates/residence-halls/mary-donlon-hall",picLink:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Mary_Donlon_Hall%2C_Cornell_University.jpg/800px-Mary_Donlon_Hall%2C_Cornell_University.jpg",name:"Mary Donlon Hall",location:"North Campus"},Q={singles:!0,doubles:!0,triples:!1,quads:!1,suites:!0,pods:!1,corridors:!0,residents:350,ac:!0,elevators:!0,dining:!0,housingWebsite:"https://scl.cornell.edu/residential-life/housing/campus-housing/upperlevel-undergraduates/west-campus-house-system/carl-becker-house",picLink:"https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2019-11/Screen%20Shot%202019-11-08%20at%2011.22.01%20AM.png?h=76e9374a&itok=VerXzdGa",name:"Carl Becker House",location:"West Campus"},E={singles:!0,doubles:!0,triples:!1,quads:!1,suites:!1,pods:!1,corridors:!0,residents:366,ac:!1,elevators:!0,dining:!1,housingWebsite:"https://scl.cornell.edu/residential-life/housing/campus-housing/upperlevel-undergraduates/residence-halls/cascadilla-hall",picLink:"https://scl.cornell.edu/sites/scl/files/styles/portrait_image/public/2019-11/Screen%20Shot%202019-11-08%20at%2011.27.56%20AM.png?h=5b16f0df&itok=TklGYZ07",name:"Cascadilla Hall",location:"South Campus"},L=new Map([["Mews Hall",T],["Gan\u0119dag\u01eb: Hall",F],["Mary Donlon Hall",A],["Carl Becker House",Q],["Cascadilla Hall",E]]),Y=[T,F,A,Q,E],P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root")),P()}},[[90,1,2]]]);
//# sourceMappingURL=main.a98b116d.chunk.js.map