"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[917],{2917:(P,f,e)=>{e.r(f),e.d(f,{AuthSignInModule:()=>M});var u=e(2510),d=e(4859),I=e(6709),m=e(9549),p=e(7392),c=e(4144),h=e(1572),v=e(6236),A=e(7775),y=e(4466),r=e(4006),Z=e(8288),n=e(4650),x=e(8951),C=e(2494),S=e(6895);const T=["signInNgForm"];function w(t,i){if(1&t&&(n.TgZ(0,"fuse-alert",23),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),n.xp6(1),n.hij(" ",o.alert.message," ")}}function J(t,i){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Username is required "),n.qZA())}function F(t,i){1&t&&n._UZ(0,"mat-icon",24),2&t&&n.Q6J("svgIcon","heroicons_solid:eye")}function U(t,i){1&t&&n._UZ(0,"mat-icon",24),2&t&&n.Q6J("svgIcon","heroicons_solid:eye-off")}function N(t,i){1&t&&(n.TgZ(0,"span"),n._uU(1," Sign in "),n.qZA())}function Q(t,i){1&t&&n._UZ(0,"mat-progress-spinner",25),2&t&&n.Q6J("diameter",24)("mode","indeterminate")}const b=function(){return["/forgot-password"]},Y=[{path:"",component:(()=>{class t{constructor(o,s,a,l){this._activatedRoute=o,this._authService=s,this._formBuilder=a,this._router=l,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({Username:["",[r.kI.required]],Password:["",r.kI.required]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(o=>{this._router.navigate(o.otpRequire?["otp"]:[""])},o=>{this.signInForm.enable(),this.alert={type:"error",message:"Wrong username or password!"},this.showAlert=!0}))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(u.gz),n.Y36(x.e),n.Y36(r.QS),n.Y36(u.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["auth-sign-in"]],viewQuery:function(o,s){if(1&o&&n.Gf(T,5),2&o){let a;n.iGM(a=n.CRH())&&(s.signInNgForm=a.first)}},decls:37,vars:13,consts:[[1,"flex","flex-col","flex-auto","items-center","justify-center"],[1,"flex","items-center","justify-end","w-full","sm:w-auto","py-8","px-4","p-16","rounded-2xl","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-100","p-6","sm:mx-0"],[1,"w-20"],["src","assets/images/logo/logo.png"],[1,"text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","Username","matInput","",3,"formControlName"],[4,"ngIf"],["id","Password","matInput","","type","password",3,"formControlName","keydown.enter"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["type","button","mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","justify-center","mt-6"],[1,"font-medium","text-sm"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,s){if(1&o){const a=n.EpF();n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),n._UZ(4,"img",4),n.qZA(),n.TgZ(5,"div",5),n._uU(6,"BD Presenter"),n.qZA(),n.TgZ(7,"div",6)(8,"div"),n._uU(9,"Welcome to the BD Presenter remote service for PT Coordinator."),n.qZA()(),n.YNc(10,w,2,5,"fuse-alert",7),n.TgZ(11,"form",8,9)(13,"mat-form-field",10)(14,"mat-label"),n._uU(15,"Username"),n.qZA(),n._UZ(16,"input",11),n.YNc(17,J,2,0,"mat-error",12),n.qZA(),n.TgZ(18,"mat-form-field",10)(19,"mat-label"),n._uU(20,"Password"),n.qZA(),n.TgZ(21,"input",13,14),n.NdJ("keydown.enter",function(){return s.signIn()}),n.qZA(),n.TgZ(23,"button",15),n.NdJ("click",function(){n.CHM(a);const g=n.MAs(22);return n.KtG(g.type="password"===g.type?"text":"password")}),n.YNc(24,F,1,1,"mat-icon",16),n.YNc(25,U,1,1,"mat-icon",16),n.qZA(),n.TgZ(26,"mat-error"),n._uU(27," Password is required "),n.qZA()(),n.TgZ(28,"div",17)(29,"a",18),n._uU(30,"Forgot password? "),n.qZA()(),n.TgZ(31,"button",19),n.NdJ("click",function(){return s.signIn()}),n.YNc(32,N,2,0,"span",12),n.YNc(33,Q,1,2,"mat-progress-spinner",20),n.qZA()(),n.TgZ(34,"div",21)(35,"span",22),n._uU(36,"v1.0.0"),n.qZA()()()()()}if(2&o){const a=n.MAs(22);n.xp6(10),n.Q6J("ngIf",s.showAlert),n.xp6(1),n.Q6J("formGroup",s.signInForm),n.xp6(5),n.Q6J("formControlName","Username"),n.xp6(1),n.Q6J("ngIf",s.signInForm.get("Username").hasError("required")),n.xp6(4),n.Q6J("formControlName","Password"),n.xp6(3),n.Q6J("ngIf","password"===a.type),n.xp6(1),n.Q6J("ngIf","text"===a.type),n.xp6(4),n.Q6J("routerLink",n.DdM(12,b)),n.xp6(2),n.Q6J("color","primary")("disabled",s.signInForm.disabled),n.xp6(1),n.Q6J("ngIf",!s.signInForm.disabled),n.xp6(1),n.Q6J("ngIf",s.signInForm.disabled)}},dependencies:[u.yS,d.lW,m.TO,m.KE,m.hX,m.R9,p.Hw,c.Nt,h.Ou,C.W,S.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],encapsulation:2,data:{animation:Z.L}}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.Bz.forChild(Y),d.ot,I.p9,m.lN,p.Ps,c.c,h.Cq,v.J,A.fC,y.m]}),t})()}}]);