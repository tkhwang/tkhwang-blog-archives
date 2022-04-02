webpackJsonp([74,39],{161:function(t,e,i){"use strict";var n=i(2),a=i(3),r=i(16),o=i(137),l=i(118),s=i(591),d=i(590),p=i(611),u=(i(1).create("signature"),{thumb:s,plaintext:d}),g=n.View.extend({attributes:function(){var t={};return this.options.editable&&(t.contenteditable=!0),t},getTemplate:function(){return u[this.options.type]},initialize:function(t){if(!t||!t.type)throw new Error("Signature requires a type.");if(!(t.model instanceof o))throw new Error("Signature requires a user model.");a.defaults(t,{padding_top:20,padding_bottom:20}),this.options=t,delete this.options.model},templateContext:function(){var t=this.options;t.g=r;var e=r.DOMAIN_NAME+"/"+this.model.get("user_name"),i=p(this.model.toJSON());t.schema="https://",t.url=this.model.hasFeature("upgrade")?i&&i.domain||e:e;var n=t.utm_campaign||"edit_panel",a={promo:"email_sig",utm_source:"product",utm_medium:"email_sig",utm_campaign:n,utm_content:t.type};if("thumb"===t.type){var o=void 0;o=this.options.use_imgix?this.model.getImgixUrl():this.options.thumb_url,t.thumb={width:105,height:70,url:o}}return t.query="?"+l.stringify(a),t}});t.exports=g},590:function(t,e,i){var n=i(5);t.exports=function(t){var e,i="";Array.prototype.join;return i+='<table border="0" cellpadding="0" cellspacing="0">\n    <tbody>\n        <tr><td style="width:auto;height:'+(null==(e=t.padding_top)?"":e)+'px;font-size:0px;">&nbsp;</td></tr>\n        <tr><td style="width:auto"><div style="line-height:0">\n            <table border="0" cellpadding="0" cellspacing="0">\n                <tr>\n                    <td align="left" valign="top" style="width:auto;line-height:1;padding:0px;vertical-align:top">\n                        <div style="margin:0;font-size:18px;line-height:1;font-weight:bold;color:#333333;font-family:\'Proxima Nova\', Helvetica, Arial, Sans-Serif">'+(null==(e=t.display_name)?"":n.escape(e))+'</div>\n                    </td>\n                </tr>\n                <tr>\n                    <td align="left" valign="top" style="width:auto;line-height:1;vertical-align:top;padding-top:0px">\n                        <div style="margin:0;margin-top:3px;font-size:12px;color:#2b82ad;font-family:\'Proxima Nova\', Helvetica, Arial, Sans-Serif"><img alt="'+(null==(e=t.schema)?"":e)+'" width="0" height="0" style="display:block;width:0;height:0;overflow:hidden" /><a href="'+(null==(e=t.schema)?"":e)+(null==(e=t.url)?"":n.escape(e))+(null==(e=t.query)?"":e)+'" style="color:#2b82ad;text-decoration:none">'+(null==(e=t.url)?"":n.escape(e))+'</a></div>\n                    </td>\n                </tr>\n            </table>\n            </div></td></tr>\n        <tr><td style="width:auto;height:'+(null==(e=t.padding_bottom)?"":e)+'px;font-size:0px;"><img src="'+(null==(e=t.g.DOMAIN_NAME_URL)?"":e)+"/t/sig?u="+(null==(e=t.user_name)?"":e)+'" width="1" height="1" style="border:0;margin:0;padding:0;width:1;height:1;overflow:hidden" /></td></tr>\n    </tbody>\n</table>\n'}},591:function(t,e,i){var n=i(5);t.exports=function(t){var e,i="";Array.prototype.join;return i+='<table border="0" cellpadding="0" cellspacing="0">\n    <tbody>\n        <tr>\n            <td align="left" valign="bottom" width="'+(null==(e=Number(t.thumb.width)+2)?"":e)+'" style="line-height:0;vertical-align:bottom;padding-right:10px;padding-top:'+(null==(e=t.padding_top)?"":e)+"px;padding-bottom:"+(null==(e=t.padding_bottom)?"":e)+'px;">\n                <a href="'+(null==(e=t.schema)?"":e)+(null==(e=t.url)?"":n.escape(e))+(null==(e=t.query)?"":e)+'" style="text-decoration:none;">\n                    <img src="'+(null==(e=t.thumb.url)?"":e)+'" alt="" width="'+(null==(e=t.thumb.width)?"":e)+'" height="'+(null==(e=t.thumb.height)?"":e)+'" style="margin:0;padding:0;display:block;border:1px solid #eeeeee;" />\n                </a>\n            </td>\n            <td align="left" valign="bottom" style="line-height:1.1;vertical-align:bottom;padding-top:'+(null==(e=t.padding_top)?"":e)+"px;padding-bottom:"+(null==(e=t.padding_bottom)?"":e)+'px;">\n                <img src="'+(null==(e=t.g.DOMAIN_NAME_URL)?"":e)+"/t/sig?u="+(null==(e=t.user_name)?"":e)+'" width="1" height="1" style="border:0;margin:0;padding:0;width:1;height:1;overflow:hidden;" />\n                <div style="font-size:18px;font-weight:bold;color:#333333;font-family:\'Proxima Nova\',Helvetica,Arial,sans-serif !important;">'+(null==(e=t.display_name)?"":n.escape(e))+'</div>\n                <a href="'+(null==(e=t.schema)?"":e)+(null==(e=t.url)?"":n.escape(e))+(null==(e=t.query)?"":e)+'" style="text-decoration:none;font-size:12px;color:#2b82ad;font-family:\'Proxima Nova\',Helvetica,Arial,sans-serif !important;">'+(null==(e=t.url)?"":n.escape(e))+"\n                </a>\n            </td>\n        </tr>\n    </tbody>\n</table>\n"}},1043:function(t,e,i){"use strict";var n=i(2),a=i(2034),r=i(1670),o=i(161),l=n.View.extend({template:a,styles:r,initialize:function(t){this.user=t.user},regions:{signature:".signature-container"},triggers:{"click .get-email-signature":"click:get-email-signature"},onRender:function(){this.showChildView("signature",new o({type:"thumb",model:this.options.user,thumb_url:this.options.thumb_url,padding_top:0,padding_bottom:0}))}});t.exports=l},1423:function(t,e,i){e=t.exports=i(6)(),e.push([t.id,'.signature_card-scope-ltabI .signature-preview{padding:20px;padding-top:0;padding-bottom:15px;background-color:#8fcadb;border-radius:5px;overflow:hidden;margin-bottom:10px}.signature_card-scope-ltabI .signature-preview .email-box{background-color:#fff;border:2px solid #0a82cd;padding:20px;border-radius:10px;margin-top:-30px;position:relative;overflow:hidden}.signature_card-scope-ltabI .signature-preview .email-box:before{display:block;content:"";background-color:hsla(180,7%,97%,.9);position:absolute;right:0;top:40px;width:200%;height:100%;-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:rotate(-20deg);transform:rotate(-20deg)}.signature_card-scope-ltabI .signature-preview .email-box .email-box-content{position:relative;z-index:1}.signature_card-scope-ltabI .signature-preview .email-bar{margin-top:8px;height:6px;background-color:#daeefb;border-radius:2px}.signature_card-scope-ltabI .signature-preview .email-bar:last-child{width:70%}.signature_card-scope-ltabI .signature-preview .signature-container{margin-top:-10px;width:150%;-webkit-transform:scale(.6667);transform:scale(.6667);-webkit-transform-origin:bottom left;transform-origin:bottom left}.signature_card-scope-ltabI .signature-text h1{font-size:20px;line-height:1.2;margin-bottom:15px}.signature_card-scope-ltabI .signature-text ul{margin-top:10px;margin-bottom:20px;border-left:3px solid #0872b4;padding-left:15px;font-size:15px}.signature_card-scope-ltabI .signature-text ul li+li{margin-top:10px}',""]),e.locals={scope:"signature_card-scope-ltabI"}},1670:function(t,e,i){var n=i(1423),a=i(7);"string"==typeof n&&(n=[[t.id,n,""]]),t.exports=n.locals||{},t.exports._getContent=function(){return n},t.exports._getCss=function(){return n.toString()},t.exports._insertCss=function(t){return a(n,t)}},2034:function(t,e,i){i(5);t.exports=function(t){var e="";Array.prototype.join;return e+='<div class="signature-preview">\n    <div class="email-box">\n        <div class="email-box-content">\n            <div class="email-bars">\n                <div class="email-bar"></div>\n                <div class="email-bar"></div>\n                <div class="email-bar"></div>\n            </div>\n            <div class="signature-container"></div>\n        </div>\n    </div>\n</div>\n<div class="signature-text">\n    <h1>Share your page with every email you send</h1>\n    <ul>\n        <li>Get 2X the page visits.</li>\n        <li>Get 20% more responses.</li>\n        <li>Make it easy for people to learn about you.</li>\n    </ul>\n</div>\n<div class="signature-action">\n    <button type="button" class="button xlarge dark primary fullwidth get-email-signature">\n        Get your email signature\n    </button>\n</div>\n'}}});
//# sourceMappingURL=signature-card.b108fe221d547551f5d2.bundle.js.map