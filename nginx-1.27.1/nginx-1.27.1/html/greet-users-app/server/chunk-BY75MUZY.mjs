import './polyfills.server.mjs';
import{A as F,B as _,C as k,D as f,E as w,F as D,I as P,O as H,a as c,b as h,c as s,d as S,e as l,f as d,g as y,h as I,i as n,j as o,k as p,l as M,m as r,n as E,o as O,p as a,u as U,x as G,z as A}from"./chunk-AJWU3HZW.mjs";var u=class e{constructor(i){this.http=i}apiUrl="/api/users";getUsers(){return this.http.get(this.apiUrl)}static \u0275fac=function(t){return new(t||e)(h(_))};static \u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})};function T(e,i){if(e&1&&(n(0,"li"),r(1),o()),e&2){let t=i.$implicit;l(),O(" ",t," ")}}var v=class e{constructor(i){this.userService=i}users=[];ngOnInit(){this.userService.getUsers().subscribe(i=>{this.users=i})}static \u0275fac=function(t){return new(t||e)(d(u))};static \u0275cmp=s({type:e,selectors:[["app-user-list"]],standalone:!0,features:[a],decls:4,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,m){t&1&&(n(0,"h2"),r(1,"User List"),o(),n(2,"ul"),y(3,T,2,1,"li",0),o()),t&2&&(l(3),I("ngForOf",m.users))},dependencies:[F,A,f],styles:[".user-list[_ngcontent-%COMP%]{margin-top:10px}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;max-width:400px;margin:0 auto;border:1px solid #ddd;border-radius:8px;background-color:#f9f9f9;box-shadow:0 2px 5px #0000001a}li[_ngcontent-%COMP%]{padding:10px 15px;border-bottom:1px solid #ddd;font-size:16px;color:#333;transition:background-color .3s,color .3s}li[_ngcontent-%COMP%]:last-child{border-bottom:none}li[_ngcontent-%COMP%]:hover{background-color:#e0e0e0;color:#000;cursor:pointer}"]})};var b=class e{getGreeting(){return"Hello, World!"}static \u0275fac=function(t){return new(t||e)};static \u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"})};var C=class e{constructor(i){this.greetingService=i}message="";showGreeting(){this.message=this.greetingService.getGreeting()}static \u0275fac=function(t){return new(t||e)(d(b))};static \u0275cmp=s({type:e,selectors:[["app-greet-button"]],standalone:!0,features:[a],decls:5,vars:1,consts:[[1,"greet-button"],[1,"btn","btn-primary",3,"click"]],template:function(t,m){t&1&&(n(0,"div",0)(1,"button",1),M("click",function(){return m.showGreeting()}),r(2,"Greet"),o(),n(3,"span"),r(4),o()()),t&2&&(l(4),E(m.message))},styles:[".greet-button[_ngcontent-%COMP%]{margin-top:10px}"]})};var x=class e{title="greet-users-app";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[a],decls:29,vars:0,consts:[["href",S`https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css`,"rel","stylesheet"],[1,"container"],[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],["href","#",1,"navbar-brand"],[1,"collapse","navbar-collapse"],[1,"form-inline","ml-auto"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","mr-2"],["type","submit",1,"btn","btn-outline-success"],[1,"row"],[1,"col-md-3"],[1,"col-md-6"],[1,"dummy-content"]],template:function(t,m){t&1&&(p(0,"link",0),n(1,"div",1)(2,"nav",2)(3,"a",3),r(4,"My App"),o(),n(5,"div",4)(6,"form",5),p(7,"input",6),n(8,"button",7),r(9,"Search"),o()()()(),n(10,"div",8)(11,"div",9),p(12,"app-greet-button"),o(),n(13,"div",10),p(14,"app-user-list"),o(),p(15,"div",9),o(),n(16,"div",8)(17,"div",9)(18,"div",11),r(19,"User Profile"),o()(),n(20,"div",9)(21,"div",11),r(22,"Notifications"),o()(),n(23,"div",9)(24,"div",11),r(25,"Announcements"),o()(),n(26,"div",9)(27,"div",11),r(28,"Events"),o()()()())},dependencies:[f,v,C]})};var j=[];var L={providers:[U({eventCoalescing:!0}),H(j),D(),k()]};var W={providers:[P()]},R=G(L,W);var Z=()=>w(x,R),xe=Z;export{xe as a};
