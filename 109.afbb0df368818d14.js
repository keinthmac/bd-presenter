"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[109],{3109:(Xe,k,s)=>{s.r(k),s.d(k,{MeetingModule:()=>Re});var g=s(6895),x=s(2510);function T(i,r,t,n,o,a,d){try{var l=i[a](d),m=l.value}catch(b){return void t(b)}l.done?r(m):Promise.resolve(m).then(n,o)}function _(i){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=i.apply(r,t);function d(m){T(a,n,o,d,l,"next",m)}function l(m){T(a,n,o,d,l,"throw",m)}d(void 0)})}}var F=s(529),u=s(4006),U=s(7771),J=s(5439),p=s.n(J),G=s(8746),Q=s(6805),q=s(930);function P(i,r){const t="object"==typeof r;return new Promise((n,o)=>{const a=new q.Hp({next:d=>{n(d),a.unsubscribe()},error:o,complete:()=>{t?n(r.defaultValue):o(new Q.K)}});i.subscribe(a)})}var e=s(4650),w=s(5412),Y=s(3426),C=s(4859),M=s(7392),I=s(3162),f=s(9549),N=s(4144),D=s(3238),A=s(1572),O=s(2494),c=s(6257),h=s(9602),S=s(4385),v=s(1948);const j=["meetingStepper"];function z(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",50)(1,"div",51)(2,"span",52),e._uU(3,"Congrats "),e.TgZ(4,"span",6),e._uU(5),e.qZA(),e._uU(6,"!"),e.qZA()(),e.TgZ(7,"span",53),e._uU(8,"We have successfully submitted your media upload!"),e.qZA(),e._UZ(9,"mat-icon",54),e.TgZ(10,"span",55),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.backToForms())}),e._uU(11,"Go Back"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(5),e.Oqu(null==t.userData?null:t.userData.nickname),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:badge-check")}}function W(i,r){if(1&i&&(e.TgZ(0,"fuse-alert",56),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",t.alert.type)("@shake","error"===t.alert.type),e.xp6(1),e.hij(" ",t.alert.message," ")}}function B(i,r){1&i&&e._uU(0,"Meeting Information")}function V(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"mat-option",57),e._uU(2),e.qZA(),e.BQk()),2&i){const t=r.$implicit;e.xp6(1),e.Q6J("value",t.weekNum),e.xp6(1),e.hij(" ",t.weekName," ")}}function E(i,r){1&i&&(e.TgZ(0,"span",60),e._uU(1,"Next"),e.qZA())}function L(i,r){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,E,2,0,"span",58),e.TgZ(2,"span",59),e._uU(3,"Next"),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!(""==(t.firstFormGroup.get("weekNumber").value||"")||""==(t.firstFormGroup.get("isMidweek").value||"")))}}function R(i,r){if(1&i&&(e.TgZ(0,"div",26)(1,"div",61)(2,"span",62),e._uU(3),e.qZA(),e._UZ(4,"mat-progress-spinner",63),e.qZA()()),2&i){const t=e.oxw();e.xp6(3),e.Oqu(t.meetingCheckString),e.xp6(1),e.Q6J("diameter",24)("mode","indeterminate")}}function H(i,r){1&i&&e._uU(0,"Public Talk Information")}function K(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",48),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.deletePTEntry())}),e._uU(1,"Delete Entry"),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("color","warn")("disabled",t.isSubmitting)}}function $(i,r){1&i&&(e.TgZ(0,"span",60),e._uU(1,"Next"),e.qZA())}function X(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"mat-step",12)(1,"form",13),e.YNc(2,H,1,0,"ng-template",14),e.TgZ(3,"mat-form-field",64)(4,"mat-label"),e._uU(5,"Talk Date"),e.qZA(),e.TgZ(6,"input",65),e.NdJ("click",function(){e.CHM(t);const o=e.MAs(9);return e.KtG(o.open())}),e.qZA(),e._UZ(7,"mat-datepicker-toggle",66)(8,"mat-datepicker",67,68),e.TgZ(10,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.secondFormGroup.get("talkDate").setValue(null))}),e._UZ(11,"mat-icon",19),e.qZA(),e.TgZ(12,"mat-error"),e._uU(13," Talk date is required. "),e.qZA()(),e.TgZ(14,"mat-form-field",15)(15,"mat-label"),e._uU(16,"Outline No."),e.qZA(),e._UZ(17,"input",69),e.TgZ(18,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.secondFormGroup.get("outlineNo").setValue(""))}),e._UZ(19,"mat-icon",19),e.qZA(),e.TgZ(20,"mat-error"),e._uU(21," Outline number is required. "),e.qZA()(),e.TgZ(22,"mat-form-field",15)(23,"mat-label"),e._uU(24,"PT Song No."),e.qZA(),e._UZ(25,"input",70),e.TgZ(26,"button",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.secondFormGroup.get("songNo").setValue(""))}),e._UZ(27,"mat-icon",19),e.qZA(),e.TgZ(28,"mat-error"),e._uU(29," Song number is required. "),e.qZA()(),e.TgZ(30,"div",71)(31,"div",72),e.YNc(32,K,2,2,"button",73),e.qZA(),e.TgZ(33,"div",25)(34,"button",47),e._uU(35,"Back"),e.qZA(),e.TgZ(36,"button",42)(37,"div"),e.YNc(38,$,2,0,"span",58),e.TgZ(39,"span",59),e._uU(40,"Next"),e.qZA()()()()()()()}if(2&i){const t=e.MAs(9),n=e.oxw();e.Q6J("stepControl",n.secondFormGroup)("completed",n.stepperStatus.publicTalkCompleted)("editable",n.overAllStepperStatus.editable),e.xp6(1),e.Q6J("formGroup",n.secondFormGroup),e.xp6(5),e.Q6J("max",n.maxTalkDate)("min",n.minTalkDate)("matDatepicker",t),e.xp6(1),e.Q6J("for",t),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:x-circle"),e.xp6(8),e.Q6J("svgIcon","heroicons_solid:x-circle"),e.xp6(8),e.Q6J("svgIcon","heroicons_solid:x-circle"),e.xp6(5),e.Q6J("ngIf",n.isPTEdit),e.xp6(2),e.Q6J("color","warn")("disabled",n.isSubmitting),e.xp6(2),e.Q6J("color","primary")("disabled",!n.secondFormGroup.get("outlineNo").valid),e.xp6(2),e.Q6J("ngIf",n.secondFormGroup.get("outlineNo").valid)}}function ee(i,r){1&i&&e._uU(0,"Media Upload")}function te(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",74)(2,"span",75),e._uU(3),e.qZA()()()),2&i){const t=e.oxw();e.xp6(3),e.hij("Files: ",t.selectedImages.length,"")}}const ie=function(i,r){return{"bg-green-400":i,"bg-red-400":r}};function ne(i,r){if(1&i&&(e.TgZ(0,"div",76)(1,"div",77)(2,"span",78),e._uU(3),e.qZA()()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(3,ie,!t.totalFilesLimitReached,t.totalFilesLimitReached)),e.xp6(2),e.AsE("",t.totalFilesSizeString,"/",t.totalFilesLimit," MB")}}function oe(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",79)(2,"div",80),e._UZ(3,"img",81),e.qZA(),e.TgZ(4,"div",82)(5,"div",83)(6,"button",84),e.NdJ("click",function(){const a=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.removeFile(a))}),e._UZ(7,"mat-icon",85),e.qZA()()()(),e.BQk()}if(2&i){const t=r.$implicit;e.xp6(3),e.Q6J("src",t.url,e.LSH),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:trash")}}function re(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",86)(1,"div",26)(2,"span",87),e._uU(3,"Click this "),e.TgZ(4,"span",88),e.NdJ("click",function(){e.CHM(t),e.oxw();const o=e.MAs(46);return e.KtG(o.click())}),e._uU(5,"Add File(s)"),e.qZA(),e._uU(6," button to import your media."),e.qZA(),e.TgZ(7,"span",89),e._uU(8,"Please note: Maximum total size limit per upload is "),e.TgZ(9,"strong",90),e._uU(10),e.qZA(),e._uU(11,"."),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(10),e.hij("",t.totalFilesLimit," MB")}}function se(i,r){1&i&&(e.TgZ(0,"div",91)(1,"span",92),e._uU(2,"You have reached the maximum allowed upload limit. Please remove some of the files to continue."),e.qZA()())}const ae=function(i,r){return{"bg-blue-700 hover:bg-blue-500 hover:shadow-xl":i,"bg-gray-400 text-black":r}};function le(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",86)(1,"button",93),e.NdJ("click",function(){e.CHM(t),e.oxw();const o=e.MAs(46);return e.KtG(o.click())}),e.TgZ(2,"span",94),e._uU(3,"Add more file(s)"),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.totalFilesLimitReached)("ngClass",e.WLB(2,ae,!t.totalFilesLimitReached,t.totalFilesLimitReached))}}function ue(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",95)(1,"div",96),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.removeAllFiles(!0))}),e.TgZ(2,"span",97),e._uU(3,"Remove all files"),e.qZA()()()}}function de(i,r){if(1&i&&(e.TgZ(0,"span",60),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectedImages.length<=0?"Skip":"Next")}}function me(i,r){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,de,2,1,"span",58),e.TgZ(2,"span",59),e._uU(3),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.submitFormGroup.invalid),e.xp6(2),e.Oqu(t.selectedImages.length<=0?"Skip":"Next")}}function pe(i,r){1&i&&(e.TgZ(0,"span",60),e._uU(1,"Next"),e.qZA())}function ce(i,r){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,pe,2,0,"span",58),e.TgZ(2,"span",59),e._uU(3,"Next"),e.qZA()()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.submitFormGroup.invalid&&"true"==t.isMidWeek&&(t.selectedImages.length>0||t.updatedFileProp.length>0))}}function fe(i,r){1&i&&e._uU(0,"Media Arrangement")}function ge(i,r){if(1&i&&(e.TgZ(0,"span",106),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.AsE("You will be selecting the image for order number : ",t.currentOrder+1,"/",t.selectedImages.length,"")}}function he(i,r){1&i&&(e.TgZ(0,"span",106),e._uU(1,"You can modify the order of media by clicking the 'Clear Order' button below."),e.qZA())}function xe(i,r){if(1&i&&(e.TgZ(0,"div",109)(1,"div",20)(2,"span",110),e._uU(3),e.qZA()()()),2&i){const t=e.oxw().$implicit;e.xp6(3),e.Oqu(t.order)}}const _e=function(i){return{"bg-black/[0.4]":i}};function ve(i,r){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",79)(2,"div",80),e._UZ(3,"img",81),e.qZA(),e.TgZ(4,"div",107),e.NdJ("click",function(){const a=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.setFileOrder(a))}),e.YNc(5,xe,4,1,"div",108),e.qZA()(),e.BQk()}if(2&i){const t=r.$implicit;e.xp6(3),e.Q6J("src",t.url,e.LSH),e.xp6(1),e.Q6J("ngClass",e.VKq(3,_e,null!=t.order)),e.xp6(1),e.Q6J("ngIf",null!=t.order)}}function be(i,r){1&i&&(e.TgZ(0,"span",60),e._uU(1,"Next"),e.qZA())}function Ze(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"mat-step",31),e.YNc(1,fe,1,0,"ng-template",14),e.TgZ(2,"div",98)(3,"div",99)(4,"span",100),e._uU(5,"Please click on the image tile base on the order of projection."),e.qZA(),e.YNc(6,ge,2,2,"span",101),e.YNc(7,he,2,0,"span",101),e.TgZ(8,"div",20)(9,"button",102),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.removeOrdering())}),e.TgZ(10,"span",103),e._uU(11,"Clear Order"),e.qZA()()()(),e.TgZ(12,"div",104),e.YNc(13,ve,6,5,"ng-container",17),e.qZA()(),e.TgZ(14,"div",40)(15,"button",41),e._uU(16,"Back"),e.qZA(),e.TgZ(17,"button",105),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.sortBy("order"))}),e.TgZ(18,"div"),e.YNc(19,be,2,0,"span",58),e.TgZ(20,"span",59),e._uU(21,"Next"),e.qZA()()()()()}if(2&i){const t=e.oxw();e.Q6J("stepControl",t.mediaArrangmentFormGroup)("completed",t.stepperStatus.mediaArrangementCompleted)("editable",t.overAllStepperStatus.editable),e.xp6(6),e.Q6J("ngIf",t.currentOrder!=t.selectedImages.length),e.xp6(1),e.Q6J("ngIf",t.currentOrder==t.selectedImages.length),e.xp6(2),e.Q6J("color","warn"),e.xp6(4),e.Q6J("ngForOf",t.selectedImages),e.xp6(2),e.Q6J("color","warn"),e.xp6(2),e.Q6J("color","primary")("disabled",t.currentOrder!=t.selectedImages.length),e.xp6(2),e.Q6J("ngIf",t.currentOrder==t.selectedImages.length)}}function ke(i,r){1&i&&e._uU(0,"Done")}function Te(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"span",111),e._uU(2,"You are all set "),e.TgZ(3,"span",6),e._uU(4),e.qZA(),e._uU(5,"!"),e.qZA(),e.TgZ(6,"span",112),e._uU(7,"You can still review your upload before you submit by clicking the "),e.TgZ(8,"strong",113),e._uU(9,"Back"),e.qZA(),e._uU(10," button, or if you are sure about it, you can hit "),e.TgZ(11,"strong",114),e._uU(12,"Submit"),e.qZA(),e._uU(13,"."),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(null==t.userData?null:t.userData.nickname)}}function Fe(i,r){1&i&&(e.TgZ(0,"span",120),e._uU(1,"We are now saving your files to our server."),e.qZA())}function we(i,r){if(1&i&&e._UZ(0,"mat-progress-bar",121),2&i){const t=e.oxw(2);e.Q6J("value",t.uploadProgress)("mode","determinate")}}function Ce(i,r){1&i&&e._UZ(0,"mat-progress-bar",122),2&i&&e.Q6J("mode","indeterminate")}function Me(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"span",111),e._uU(2,"Hang on there "),e.TgZ(3,"span",6),e._uU(4),e.qZA(),e._uU(5,"."),e.qZA(),e.TgZ(6,"span",112),e._uU(7,"Please wait while we submit your media."),e.qZA(),e.TgZ(8,"span",115)(9,"span",116),e._uU(10,"DO NOT"),e.qZA(),e._uU(11," refresh or close this browser, or even switch to other app until we finish everything."),e.qZA(),e.YNc(12,Fe,2,0,"span",117),e.YNc(13,we,1,2,"mat-progress-bar",118),e.YNc(14,Ce,1,1,"mat-progress-bar",119),e.BQk()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(null==t.userData?null:t.userData.nickname),e.xp6(8),e.Q6J("ngIf",t.savinginProgress),e.xp6(1),e.Q6J("ngIf",!t.savinginProgress),e.xp6(1),e.Q6J("ngIf",t.savinginProgress)}}function Ie(i,r){1&i&&(e.TgZ(0,"div")(1,"span",60),e._uU(2,"Submit"),e.qZA(),e.TgZ(3,"span",59),e._uU(4,"Submit"),e.qZA()())}function Ne(i,r){1&i&&e._UZ(0,"mat-progress-spinner",63),2&i&&e.Q6J("diameter",24)("mode","indeterminate")}const Ae=function(i){return{"disabled:bg-transparent disabled:text-white":i}};let Se=(()=>{class i{constructor(t,n,o,a){this._activatedRoute=t,this._matDialog=n,this._meetingService=o,this._formBuilder=a,this.alert={type:"success",message:""},this.showAlert=!1,this.isLinear=!1,this.isSubmitting=!1,this.showStepper=!0,this.isPTEdit=!1,this.isPTDeleted=!1,this.stepperStatus={meetingInfoCompleted:!1,meetingInfoEditable:!1,publicTalkCompleted:!1,publicTalkEditable:!1,mediaUploadCompleted:!1,mediaUploadEditable:!1,mediaArrangementCompleted:!1,mediaArrangementEditable:!1},this.overAllStepperStatus={editable:!0,completed:!0},this.selectedImages=[],this.currentOrder=0,this.weekSelection=[],this.isMidWeek="",this.isMediaChecking=!1,this.isThumbnailLoading=!1,this.updatedFileProp=[],this.uploadProgress=0,this.savinginProgress=!1,this.totalFilesSize=0,this.totalFilesSizeString="0B",this.totalFilesLimit=100,this.totalFilesLimitReached=!1,this.meetingCheckString="Checking meeting information..."}ngOnInit(){this._activatedRoute.data.subscribe(t=>{this.userData=t?.UserData?.userInfo,this.weekSelection=t?.UserData?.userInfo.weeks}),this.firstFormGroup=this._formBuilder.group({weekNumber:[null,u.kI.compose([u.kI.required])],isMidweek:[null,u.kI.compose([u.kI.required])],valid:[null,u.kI.compose([u.kI.required])]}),this.secondFormGroup=this._formBuilder.group({talkDate:["",u.kI.compose([u.kI.required])],outlineNo:["",u.kI.compose([u.kI.required,u.kI.min(1)])],songNo:["",u.kI.compose([u.kI.required,u.kI.min(1)])]}),this.mediaArrangmentFormGroup=this._formBuilder.group({valid:[null,u.kI.compose([u.kI.required])]}),this.submitFormGroup=this._formBuilder.group({valid:["true",u.kI.compose([u.kI.required])]})}passwordChange(){var t=this.secondFormGroup.get("password").value,n=this.secondFormGroup.get("confirmPassword").value;this.secondFormGroup.controls.confirmPassword.setErrors(t!=n?{invalid:!0}:null)}meetingWeekChanged(){this.firstFormGroup.get("valid").setValue(null)}submitSetup(){this.showAlert=!1,this.isSubmitting=!0,this.firstFormGroup.disable(),this.secondFormGroup.disable(),this.mediaArrangmentFormGroup.disable(),this.submitFormGroup.disable();let t=this.selectedImages.filter(l=>null!=l.name).map(l=>({filename:l.name,orderNo:l.order,remarks:null,isNew:!0}));const n=new FormData;this.selectedImages.forEach(l=>{n.append("files",l.file)});const o=this.weekSelection.find(l=>l.weekNum==this.firstFormGroup.get("weekNumber").value).yearNumber;if(n.append("weekNumber",this.firstFormGroup.get("weekNumber").value),n.append("yearNumber",o),t.length>0&&n.append("fileProperties",JSON.stringify(t)),this.updatedFileProp.length>0&&n.append("updateFileProperties",JSON.stringify(this.updatedFileProp)),n.append("isMidWeek",this.isMidWeek),"true"!==this.isMidWeek){if(this.secondFormGroup.get("talkDate").value){const l=p().utc(this.secondFormGroup.get("talkDate").value).toString();n.append("talkDate",l)}this.secondFormGroup.get("outlineNo").value&&n.append("outlineNo",this.secondFormGroup.get("outlineNo").value),this.secondFormGroup.get("songNo").value&&n.append("songNo",this.secondFormGroup.get("songNo").value)}this.uploadProgress=0,this.savinginProgress=!1,this.overAllStepperStatus.completed=!0,this.overAllStepperStatus.editable=!1;let a=!1;this._meetingService.Upload(n).pipe((0,G.x)(()=>{this.uploadProgress=0,this.savinginProgress=!1,this.isSubmitting=!1,this.showStepper=a})).subscribe(l=>{if(l.type==F.dt.UploadProgress){const m=Math.round(l.loaded/l.total*100);this.uploadProgress=m,m>=100&&(this.savinginProgress=!0)}},l=>{a=!0,this.alert={type:"error",message:l.error.data},this.showAlert=!0,this.isSubmitting=!1,this.overAllStepperStatus.completed=!0,this.overAllStepperStatus.editable=!0})}checkMeetingData(){var t=this;return _(function*(){if(t.meetingCheckString="Checking meeting information...",t.totalFilesSize>0)return t.firstFormGroup.get("valid").setValue(!0),void t._meetingStepper.next();"true"==t.isMidWeek&&t.submitFormGroup.get("valid").setValue(null),t.removeAllFiles();const n=t.weekSelection.find(a=>a.weekNum==t.firstFormGroup.get("weekNumber").value);"true"!==t.isMidWeek&&(t.minTalkDate=p()(p()(n.weekStart).startOf("day")).local().startOf("day"),t.maxTalkDate=p()(p()(n.weekEnd).startOf("day")).local().startOf("day"));let o=[{field:"yearNumber",value:n.yearNumber},{field:"weekNumber",value:t.firstFormGroup.get("weekNumber").value},{field:"isMidWeek",value:t.isMidWeek}];t.isMediaChecking=!0,t._meetingService.GetMedia(o).subscribe(function(){var a=_(function*(d){t.showAlert=!1;const l=d.publicTalk,m=d.medias||[];t.isPTEdit=!!l,t.secondFormGroup.get("outlineNo").setValue(l?.outlineNo),t.secondFormGroup.get("songNo").setValue(l?.songNo),t.secondFormGroup.get("talkDate").setValue(l?.talkDate?p()(l?.talkDate).local():null),m.length>0?(t.isThumbnailLoading=!0,t.meetingCheckString="Fetching meeting media...",yield new Promise(function(){var b=_(function*(y,He){for(let Z of m){const Ke=yield P(t._meetingService.GetThumbnail(Z.thumbnailUrl)),$e=yield t.createImageFromBlob(Ke);t.selectedImages.push({name:null,url:$e,order:Z.orderNo,fileId:Z._id})}y()});return function(y,He){return b.apply(this,arguments)}}()),t.isThumbnailLoading=!1,t.mediaArrangmentFormGroup.get("valid").setValue("true"),t.submitFormGroup.get("valid").setValue("true")):t.submitFormGroup.get("valid").setValue("true"!=t.isMidWeek||null),t.sortBy("order"),t.currentOrder=m.length,t.isMediaChecking=!1,t.firstFormGroup.get("valid").setValue(!0),t._meetingStepper.next()});return function(d){return a.apply(this,arguments)}}(),a=>{t.isMediaChecking=!1,t.firstFormGroup.get("valid").setValue(!0),t._meetingStepper.next()})})()}deletePTEntry(){this._matDialog.open(U.$,{maxWidth:"400px",data:{title:"Cancel",message:"Are you sure you want to delete this entry?"}}).afterClosed().subscribe(n=>{1==n&&(this.secondFormGroup.reset(),this.removeAllFiles(!0),this.submitSetup())})}onImageSelected(t){isNaN(this.totalFilesSize)&&(this.totalFilesSize=0);for(const o of t.target.files){var n=new FileReader;this.totalFilesSize+=o.size,n.readAsDataURL(o),n.onload=a=>{this.currentOrder+=1,this.selectedImages.push({name:o.name,file:o,url:a.target.result,order:this.currentOrder,size:o.size})}}this.mediaArrangmentFormGroup.get("valid").setValue("true"),t.target.value=null,this.calculateFileSize()}calculateFileSize(){isNaN(this.totalFilesSize)&&(this.totalFilesSize=0);let t="KB",n=0,o=this.totalFilesSize/1024;o/1024>1?(n=o/1024,this.totalFilesLimitReached=n>this.totalFilesLimit,this.totalFilesLimitReached?this.submitFormGroup.get("valid").setValue(null):this.submitFormGroup.get("valid").setValue(!0),t="MB"):(this.submitFormGroup.get("valid").setValue(!0),this.totalFilesLimitReached=!1,n=o,t="KB"),this.totalFilesSizeString=`${(n||0).toFixed(2)} ${t}`}setFileOrder(t){if(null!=t){if(null==t.order){if(this.currentOrder+=1,t.order=this.currentOrder,t.fileId){const n=this.updatedFileProp.findIndex(o=>o.filename==t.fileId);n>=0&&this.updatedFileProp.splice(n,1),this.updatedFileProp.push({filename:t.fileId,orderNo:t.order,isNew:!1,remarks:t.remarks})}}else t.order==this.currentOrder&&(this.currentOrder-=1,t.order=null);this.sortBy("order"),this.currentOrder==this.selectedImages.length?this.mediaArrangmentFormGroup.get("valid").setValue("true"):this.mediaArrangmentFormGroup.get("valid").setValue(null)}}removeFile(t){if(t.fileId){const n=this.updatedFileProp.findIndex(o=>o.filename==t.fileId);n>=0&&this.updatedFileProp.splice(n,1),this.updatedFileProp.push({filename:t.fileId,isDeleted:!0})}else this.totalFilesSize-=t.size;this.selectedImages.splice(this.selectedImages.indexOf(t),1),this.removeOrdering(),this.calculateFileSize(),"true"==this.isMidWeek&&this.selectedImages.length<=0&&this.updatedFileProp.length<=0&&this.submitFormGroup.get("valid").setValue(null)}removeAllFiles(t=!1){t&&this.selectedImages.forEach(n=>{if(n.fileId){const o=this.updatedFileProp.findIndex(a=>a.filename==n.fileId);o>=0&&this.updatedFileProp.splice(o,1),this.updatedFileProp.push({filename:n.fileId,isDeleted:!0})}this.totalFilesSize-=n.size}),this.selectedImages.splice(0,this.selectedImages.length),this.currentOrder=0,this.totalFilesSize=0,this.calculateFileSize(),"true"==this.isMidWeek&&this.selectedImages.length<=0&&this.updatedFileProp.length<=0&&this.submitFormGroup.get("valid").setValue(null)}removeOrdering(){this.currentOrder=0,this.selectedImages.forEach(t=>{t.order=null})}sortBy(t){return this.selectedImages.sort((n,o)=>(null!=n[t]?n[t]:1/0)-(null!=o[t]?o[t]:1/0))}GetWeeks(){var t;let n=[];for(t=-1;t<3;t++){const o=p()().add(t,"week").startOf("isoWeek"),a=p()().add(t,"week").endOf("isoWeek"),d=o.format("MM")==a.format("MM"),l=`${o.format("MMM DD")} - ${a.format(d?"DD, YYYY":"MMM DD, YYYY")}`,m=p()().add(t,"week").startOf("isoWeek").week();n.push({weekName:l,weekNum:m,weekStart:o,weekEnd:a})}return n}backToForms(){this.removeAllFiles(),this.selectedImages=[],this.updatedFileProp=[],this.firstFormGroup.reset(),this.secondFormGroup.reset(),this.mediaArrangmentFormGroup.reset(),this.submitFormGroup.reset(),this.firstFormGroup.enable(),this.secondFormGroup.enable(),this.mediaArrangmentFormGroup.enable(),this.submitFormGroup.enable(),this.overAllStepperStatus.completed=!1,this.overAllStepperStatus.editable=!0,this._meetingStepper.reset(),this.showStepper=!0}createImageFromBlob(t){return new Promise((n,o)=>{let a=new FileReader;a.addEventListener("load",()=>{n(a.result)},!1),t&&a.readAsDataURL(t)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(x.gz),e.Y36(w.uw),e.Y36(Y.D),e.Y36(u.QS))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-media"]],viewQuery:function(t,n){if(1&t&&e.Gf(j,5),2&t){let o;e.iGM(o=e.CRH())&&(n._meetingStepper=o.first)}},decls:75,vars:47,consts:[[1,"flex","flex-col","items-center","justify-center","flex-auto","p-4"],[1,"flex","items-center","justify-end","w-full","sm:w-auto","p-2","rounded-2xl","shadow-lg","sm:bg-card","max-w-[1000px]"],[1,"w-full","p-2","sm:mx-0"],["class","w-full h-150 max-h-150 flex flex-col items-center justify-center p-6",4,"ngIf"],[1,"w-full","h-150","max-h-150",3,"hidden"],[1,"flex","flex-row","flex-auto","space-x-1","items-center","justify-center","mt-2","mb-4","text-2xl","font-semibold","tracking-tight","leading-tight"],[1,"font-extrabold"],[1,"flex","flex-col","items-center","justify-center","mt-2","font-medium"],[1,"text-center"],["class","mt-2 mb-2",3,"appearance","showIcon","type",4,"ngIf"],["orientation","vertical",1,"w-full","bg-transparent",3,"linear"],["meetingStepper",""],[3,"stepControl","completed","editable"],[3,"formGroup"],["matStepLabel",""],["appearance","fill",1,"w-full","mt-4"],["matInput","","placeholder","Week number","formControlName","weekNumber","required","",3,"valueChange"],[4,"ngFor","ngForOf"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-row","justify-center"],["required","","formControlName","isMidweek",3,"ngModel","ngModelChange","change"],["value","true",1,"mr-6"],["value","false",1,"mr-6"],[1,"mt-4","flex","flex-col","justify-center"],[1,"flex","flex-row","items-end","justify-end"],[1,"flex","flex-col","justify-center"],["mat-flat-button","",3,"ngClass","color","disabled","click"],[4,"ngIf"],["class","flex flex-col justify-center",4,"ngIf"],[3,"stepControl","completed","editable",4,"ngIf"],[1,"h-full",3,"stepControl","completed","editable"],["hidden","","multiple","","type","file","accept","image/*",3,"change"],["selectFile",""],[1,"flex","flex","justify-between"],["class","relative",4,"ngIf"],[1,"mt-2","grid","md:grid-cols-4","md:gap-4","gap-3","grid-cols-3"],["class","mt-4 flex flex-row justify-center",4,"ngIf"],["class","mt-8 flex flex-row justify-center",4,"ngIf"],["class","mt-2 flex flex-row justify-center",4,"ngIf"],[1,"mt-6","flex","flex-row","items-end","justify-end"],["mat-button","","matStepperPrevious","",3,"color"],["mat-flat-button","","matStepperNext","",3,"color","disabled"],["class","h-full",3,"stepControl","completed","editable",4,"ngIf"],[1,"w-full",3,"stepControl"],[1,"relative","flex","flex-col","left-0","z-49","mt-2"],[1,"flex","flex-row","items-end","justify-end","mt-4"],["mat-button","","matStepperPrevious","",3,"color","disabled"],["mat-flat-button","",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"w-full","h-150","max-h-150","flex","flex-col","items-center","justify-center","p-6"],[1,"flex","flex-row","flex-auto","space-x-1","items-center","justify-center","mt-6","font-semibold","tracking-tight","leading-tight"],[1,"text-[16px]"],[1,"text-[12px]","font-semibold","mt-4","text-center"],[1,"icon-size-16","text-green-500","mt-2",3,"svgIcon"],[1,"text-md","font-semibold","mt-4","text-center","text-blue-600","cursor-pointer",3,"click"],[1,"mt-2","mb-2",3,"appearance","showIcon","type"],[3,"value"],["class","absolute inline-flex animate-ping text-white",4,"ngIf"],[1,"relative","inline-flex","text-white"],[1,"absolute","inline-flex","animate-ping","text-white"],[1,"flex","flex-row","space-x-[5px]"],[1,"text-sm","mt-[5px]"],[3,"diameter","mode"],["appearance","fill",1,"w-full","mt-2"],["matInput","","autocomplete","off","autocomplete","disabled","placeholder","Talk Date","formControlName","talkDate",3,"max","min","matDatepicker","click"],["matSuffix","",3,"for"],["startView","month"],["talkDatePicker",""],["required","","matInput","","placeholder","Outline number","type","number","pattern","[0-9]*","inputmode","numeric","formControlName","outlineNo","required",""],["required","","matInput","","placeholder","Song number","type","number","pattern","[0-9]*","inputmode","numeric","formControlName","songNo","required",""],[1,"flex","justify-between"],[1,"flex","flex-row","items-start","justify-start"],["mat-flat-button","",3,"color","disabled","click",4,"ngIf"],[1,"rounded-lg","p-2","bg-cyan-500"],[1,"text-[14px]","font-semibold","text-white"],[1,"relative"],[1,"rounded-lg","p-2",3,"ngClass"],[1,"text-[14px]","font-bold","text-white"],[1,"flex","flex-col","justify-center","bg-black","relative","border-2","border-cyan-500"],[1,""],[1,"",3,"src"],[1,"absolute","top-0","right-0","w-full","h-full"],[1,"flex","justify-between","bg-black/[0.6]"],[3,"click"],[1,"md:icon-size-6","icon-size-5","text-red-600",3,"svgIcon"],[1,"mt-4","flex","flex-row","justify-center"],[1,"text-[12px]","font-semibold","text-gray-600"],[1,"bg-blue-700","hover:bg-blue-500","hover:shadow-xl","shadow-lg","text-white","rounded-lg","p-2","cursor-pointer",3,"click"],[1,"mt-[8px]","text-[10px]","font-semibold","text-gray-600"],[1,"text-red-400"],[1,"mt-8","flex","flex-row","justify-center"],[1,"text-[12px]","font-semibold","text-red-600"],[1,"flex","flex-col","justify-center","w-[150px]","h-[30px]","rounded-xl","shadow-lg","cursor-pointer",3,"disabled","ngClass","click"],[1,"text-white","text-md","text-center","w-full"],[1,"mt-2","flex","flex-row","justify-center"],[1,"flex","flex-col","justify-center","w-[150px]","h-[30px]","hover:bg-red-500","rounded-xl","bg-red-700","shadow-lg","hover:shadow-xl","cursor-pointer",3,"click"],[1,"text-white","text-md","text-center"],[1,"flex","flex-col","space-y-[10px]"],[1,"flex","flex-col","justify-center","w-full"],[1,"text-[14px]","font-semibold","text-center"],["class","text-[12px] font-medium text-center",4,"ngIf"],["mat-button","",1,"w-[100px]",3,"color","click"],[1,"text-red"],[1,"grid","md:grid-cols-4","md:gap-4","gap-3","grid-cols-3"],["mat-flat-button","","matStepperNext","",3,"color","disabled","click"],[1,"text-[12px]","font-medium","text-center"],[1,"absolute","top-0","right-0","w-full","h-full","hover:bg-black/[0.3]","cursor-pointer",3,"ngClass","click"],["class","flex flex-col justify-center w-full h-full",4,"ngIf"],[1,"flex","flex-col","justify-center","w-full","h-full"],[1,"md:w-10","md:h-10","md:text-4xl","text-xl","w-5","h-5","font-semibold","text-center","text-white"],[1,"text-start","font-semibold","text-lg"],[1,"text-start","font-medium","text-md","mt-2","break-words","whitespace-pre-line"],[1,"text-red-400","text-md"],[1,"text-blue-400","text-md"],[1,"text-start","font-medium","text-md","mt-4","break-words","whitespace-pre-line","text-red-600"],[1,"p-[5px]","text-white","bg-red-500","font-semibold"],["class","mt-2 text-start font-medium text-md break-words whitespace-pre-line text-green-500",4,"ngIf"],["class","mt-2 w-full h-[10px]",3,"value","mode",4,"ngIf"],["class","mt-2 w-full h-[10px]",3,"mode",4,"ngIf"],[1,"mt-2","text-start","font-medium","text-md","break-words","whitespace-pre-line","text-green-500"],[1,"mt-2","w-full","h-[10px]",3,"value","mode"],[1,"mt-2","w-full","h-[10px]",3,"mode"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,z,12,2,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"span"),e._uU(7,"Greetings "),e.TgZ(8,"span",6),e._uU(9),e.qZA(),e._uU(10,"!"),e.qZA()(),e.TgZ(11,"div",7)(12,"div",8),e._uU(13,"Please fill the following meeting information."),e.qZA()(),e.YNc(14,W,2,5,"fuse-alert",9),e.TgZ(15,"mat-stepper",10,11)(17,"mat-step",12)(18,"form",13),e.YNc(19,B,1,0,"ng-template",14),e.TgZ(20,"mat-form-field",15)(21,"mat-label"),e._uU(22,"Meeting Week"),e.qZA(),e.TgZ(23,"mat-select",16),e.NdJ("valueChange",function(){return n.meetingWeekChanged()}),e.YNc(24,V,3,2,"ng-container",17),e.qZA(),e.TgZ(25,"button",18),e.NdJ("click",function(){return n.firstFormGroup.get("weekNumber").setValue("")}),e._UZ(26,"mat-icon",19),e.qZA(),e.TgZ(27,"mat-error"),e._uU(28," Meeting week is required. "),e.qZA()(),e.TgZ(29,"div",20)(30,"mat-radio-group",21),e.NdJ("ngModelChange",function(a){return n.isMidWeek=a})("change",function(){return n.meetingWeekChanged()}),e.TgZ(31,"mat-radio-button",22),e._uU(32,"Midweek"),e.qZA(),e.TgZ(33,"mat-radio-button",23),e._uU(34,"Weekend"),e.qZA()()(),e.TgZ(35,"div",24)(36,"div",25),e._UZ(37,"div",26),e.TgZ(38,"button",27),e.NdJ("click",function(){return n.checkMeetingData()}),e.YNc(39,L,4,1,"div",28),e.YNc(40,R,5,3,"div",29),e.qZA()()()()(),e.YNc(41,X,41,17,"mat-step",30),e.TgZ(42,"mat-step",31),e.YNc(43,ee,1,0,"ng-template",14),e.TgZ(44,"div",26)(45,"input",32,33),e.NdJ("change",function(a){return n.onImageSelected(a)}),e.qZA(),e.TgZ(47,"div",24)(48,"div",34),e.YNc(49,te,4,1,"div",28),e.YNc(50,ne,4,6,"div",35),e.qZA()(),e.TgZ(51,"div",36),e.YNc(52,oe,8,2,"ng-container",17),e.qZA(),e.YNc(53,re,12,1,"div",37),e.YNc(54,se,3,0,"div",38),e.YNc(55,le,4,5,"div",37),e.YNc(56,ue,4,0,"div",39),e.qZA(),e.TgZ(57,"div",40)(58,"button",41),e._uU(59,"Back"),e.qZA(),e.TgZ(60,"button",42),e.YNc(61,me,4,2,"div",28),e.YNc(62,ce,4,1,"div",28),e.qZA()()(),e.YNc(63,Ze,22,11,"mat-step",43),e.TgZ(64,"mat-step",44),e.YNc(65,ke,1,0,"ng-template",14),e.TgZ(66,"div",45),e.YNc(67,Te,14,1,"ng-container",28),e.YNc(68,Me,15,4,"ng-container",28),e.qZA(),e.TgZ(69,"div",46)(70,"button",47),e._uU(71,"Back"),e.qZA(),e.TgZ(72,"button",48),e.NdJ("click",function(){return n.submitSetup()}),e.YNc(73,Ie,5,0,"div",28),e.YNc(74,Ne,1,2,"mat-progress-spinner",49),e.qZA()()()()()()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",!n.showStepper),e.xp6(1),e.Q6J("hidden",!n.showStepper),e.xp6(5),e.Oqu(null==n.userData?null:n.userData.nickname),e.xp6(5),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("linear",!0),e.xp6(2),e.Q6J("stepControl",n.firstFormGroup)("completed",n.stepperStatus.meetingInfoCompleted)("editable",n.overAllStepperStatus.editable),e.xp6(1),e.Q6J("formGroup",n.firstFormGroup),e.xp6(6),e.Q6J("ngForOf",n.weekSelection),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:x-circle"),e.xp6(4),e.Q6J("ngModel",n.isMidWeek),e.xp6(8),e.Q6J("ngClass",e.VKq(45,Ae,n.isMediaChecking))("color","primary")("disabled",""==(n.firstFormGroup.get("weekNumber").value||"")||""==(n.firstFormGroup.get("isMidweek").value||"")||n.isMediaChecking),e.xp6(1),e.Q6J("ngIf",!n.isMediaChecking),e.xp6(1),e.Q6J("ngIf",n.isMediaChecking),e.xp6(1),e.Q6J("ngIf","false"==n.firstFormGroup.get("isMidweek").value),e.xp6(1),e.Q6J("stepControl",n.submitFormGroup)("completed",n.stepperStatus.mediaUploadCompleted)("editable",n.overAllStepperStatus.editable),e.xp6(7),e.Q6J("ngIf",n.selectedImages.length>0),e.xp6(1),e.Q6J("ngIf",n.totalFilesSize>0),e.xp6(2),e.Q6J("ngForOf",n.selectedImages),e.xp6(1),e.Q6J("ngIf",!n.isThumbnailLoading&&n.selectedImages.length<=0),e.xp6(1),e.Q6J("ngIf",n.totalFilesLimitReached),e.xp6(1),e.Q6J("ngIf",n.selectedImages.length>0),e.xp6(1),e.Q6J("ngIf",n.selectedImages.length>0),e.xp6(2),e.Q6J("color","warn"),e.xp6(2),e.Q6J("color","primary")("disabled",n.isSubmitting)("disabled",n.submitFormGroup.invalid||"true"==n.isMidWeek&&n.selectedImages.length<=0&&n.updatedFileProp.length<=0),e.xp6(1),e.Q6J("ngIf","false"==n.isMidWeek),e.xp6(1),e.Q6J("ngIf","true"==n.isMidWeek),e.xp6(1),e.Q6J("ngIf",n.selectedImages.length>0),e.xp6(1),e.Q6J("stepControl",n.submitFormGroup),e.xp6(3),e.Q6J("ngIf",!n.isSubmitting),e.xp6(1),e.Q6J("ngIf",n.isSubmitting),e.xp6(2),e.Q6J("color","warn")("disabled",n.isSubmitting),e.xp6(2),e.Q6J("color","primary")("disabled",n.isSubmitting)("disabled",n.submitFormGroup.invalid),e.xp6(1),e.Q6J("ngIf",!n.isSubmitting),e.xp6(1),e.Q6J("ngIf",n.isSubmitting))},dependencies:[g.mk,g.sg,g.O5,C.lW,M.Hw,I.pW,u._Y,u.Fj,u.wV,u.JJ,u.JL,u.Q7,u.c5,u.sg,u.u,f.TO,f.KE,f.hX,f.R9,N.Nt,D.ey,A.Ou,O.W,c.C0,c.VY,c.Vq,c.Ic,c.fd,h.Mq,h.hl,h.nW,S.gD,v.VQ,v.U0]}),i})();var ye=s(2340),Ue=s(4128),Je=s(4004),Ge=s(8951);const Qe=[{path:"",data:{layout:"empty"},children:[{path:"media",data:{layout:"centered"},resolve:{UserData:(()=>{class i{constructor(t,n){this._httpClient=t,this._authService=n,this.apiHost=ye.N.apiHost}resolve(t,n){return(0,Ue.D)([this._authService.handShake()]).pipe((0,Je.U)(([o])=>({userInfo:o})))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(F.eN),e.LFG(Ge.e))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},component:Se}]}];let qe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[x.Bz.forChild(Qe),x.Bz]}),i})();var Pe=s(8277),Ye=s(7957),De=s(811),Oe=s(7331),je=s(4850),ze=s(782),We=s(8255),Be=s(455),Ve=s(7009),Ee=s(7775),Le=s(4466);let Re=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,qe,C.ot,De.vV,je.t,M.Ps,We.Tx,I.Cv,Le.m,f.lN,w.Is,N.c,Be.rP,Oe.Hi,Ye.Bb,A.Cq,Ve.ZX,Ee.fC,c.T5,h.FA,Pe.Yd,S.LD,v.Fk,ze.N6]}),i})()}}]);