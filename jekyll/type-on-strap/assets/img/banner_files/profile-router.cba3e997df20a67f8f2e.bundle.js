webpackJsonp([85,39],{55:function(e,t,r){"use strict";var i=r(13),s=r(2),o=r(3),a=r(1).create("router"),n=/\((.*?)\)/g,u=/(\(\?)?:\w+/g,c=/\*\w+/g,l=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.History.prototype.route=function(e,t,r){this.handlers.unshift({router:r,route:e,callback:t})};var p=s.AppRouter.extend({constructor:function(e){s.AppRouter.apply(this,arguments),o.bindAll(this,"checkState"),o.defer(this.checkState)},checkState:function(){i.History.started?this.checkMyRoutes():(i.history||(i.history=new i.History),i.history.start({pushState:!0}))},getMyRoutes:function(){var e=this,t=o.filter(i.history.handlers,function(t){return t.router===e});return t},checkMyRoutes:function(){var e=i.history.fragment,t=this.getMyRoutes();return o.any(t,function(t){if(t.route.test(e))return t.callback(e),!0})},route:function(e,t,r){o.isRegExp(e)||(e=this._routeToRegExp(e)),o.isFunction(t)&&(r=t,t=""),r||(r=this[t]);var s=this;return i.history.route(e,function(o){var a=s._extractParameters(e,o);s.execute(r,a),s.trigger.apply(s,["route:"+t].concat(a)),s.trigger("route",t,a),i.history.trigger("route",s,t,a)},this),this},_routeToRegExp:function(e){return e=e.replace(l,"\\$&").replace(n,"(?:$1)?").replace(u,function(e,t){return t?e:"([^/?]+)"}).replace(c,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$","i")},_addAppRoute:function(e,t,r){this.options.scope&&(t=this.options.scope+"(/)"+t),s.AppRouter.prototype._addAppRoute.apply(this,[e,t,r])},navigate:function(e,t){t=t||{};var r=i.history.fragment,n=this.options.scope,u={},c=void 0;return!n||(e?(e=n+"/"+e,c=new RegExp(n+"/?$","i"),c.test(r)&&(u.replace=!0)):e=n,c=new RegExp(n,"i"),c.test(r)||t.force)?(c=new RegExp(e,"i"),r.match(c)&&!t.force?this:(c=new RegExp(e+"/?$","i"),r.match(c)&&(u.replace=!0),o.defaults(t,u),s.AppRouter.prototype.navigate.apply(this,[e,t]))):(a.error("Tab URL is out of scope.",n,r),this)},destroy:function(){var e=this;a("destroy router for scope",this.options.scope),i.history.handlers=o.filter(i.history.handlers,function(t){return t.router!==e})}});e.exports=p},614:function(e,t,r){"use strict";function i(e){var t=e.user,r=s(t.get("flags.email_verified"))===s(!0);r&&(t.set("flags.email_verified",!1),o.ajax({type:"GET",url:t.url()+"/send_verification_email",headers:{"Content-Type":"application/json"}}).done(function(e){u("res",e),n.banner("A new email was sent. Click the link in the email to verify your email address.",{status:"confirmation"})}).fail(function(e){var t=void 0;switch(u("err",e),e&&e.type){case"EMAIL_INVALID":t="There is a problem with your email address. Please update it.";break;default:t="There was a problem sending a new email. Please try again later."}n.banner(t,{status:"error"}),a.captureMessage("resend verify email failed",{extra:{err:e}})}))}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(11),a=r(25),n=r(18),u=r(1).create("verify email","resend");e.exports=i},907:function(e,t,r){"use strict";var i=r(2),s=r(55),o=r(1223),a=(r(1).create("profile","router"),i.Object.extend({initialize:function(e){this.user=e.user,this.router=new s({controller:this,scope:this.user.get("user_name"),appRoutes:{"verify(/)(*params)":"handleVerification"}})},handleVerification:function(){var e=this;this.verification=new o({user:this.user}),this.listenTo(this.verification,"destroy",function(){e.router.navigate("",{replace:!0,force:!0})})}}));e.exports=a},1223:function(e,t,r){"use strict";var i=r(11),s=r(2),o=r(55),a=r(12),n=r(25),u=r(614),c=r(18),l=r(1).create("verify email"),p=s.Object.extend({initialize:function(e){this.user=e.user,this.metrics=a.metrics,this.initializeRouter()},appRoutes:{"":"destroy",":hash":"verifyEmail"},initializeRouter:function(){this.router=new o({controller:this,scope:this.user.get("user_name")+"/verify",appRoutes:this.appRoutes})},verifyEmail:function(e){var t=this;return this.user.get("flags.email_verified")?(c.banner("Your email address has already been verified.",{status:"info"}),void this.destroy()):void i.ajax({type:"POST",url:this.user.url()+"/verify_email",data:JSON.stringify({hash:e}),dataType:"json",headers:{"Content-Type":"application/json"}}).done(function(e){l("res",e),c.banner("Your email address has been verified!",{status:"confirmation",duration:1e4}),t.user.set("flags.email_verified",!0),t.metrics.trigger("email:verification:success")}).fail(function(e){var r=void 0;switch(l("err",e),i.body.one("click",".banner .resend-verification-email",function(){u({user:t.user})}),e&&e.type){case"invalid-hash":r="That verification link is invalid or expired.";break;default:r="There was a problem verifying your email address."}r+=' <span class="text link resend-verification-email">Resend email</span>.',c.banner(r,{status:"error"}),n.captureMessage("verify email failed",{extra:{err:e}})}).always(function(){t.destroy()})}});e.exports=p}});
//# sourceMappingURL=profile-router.cba3e997df20a67f8f2e.bundle.js.map