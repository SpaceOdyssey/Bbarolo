function externalLinks(){if(!document.getElementsByTagName){return}var c=document.getElementsByTagName("a");for(var b=0;b<c.length;b++){var a=c[b];if(a.getAttribute("href")&&a.getAttribute("rel")=="external"){a.target="_blank"}}}window.onload=externalLinks;if(typeof deconcept=="undefined"){var deconcept=new Object()}if(typeof deconcept.util=="undefined"){deconcept.util=new Object()}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object()}deconcept.SWFObject=function(f,d,n,g,j,m,l,o,i,a,e){if(!document.createElement||!document.getElementById){return}this.DETECT_KEY=e?e:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(f){this.setAttribute("swf",f)}if(d){this.setAttribute("id",d)}if(n){this.setAttribute("width",n)}if(g){this.setAttribute("height",g)}if(j){this.setAttribute("version",new deconcept.PlayerVersion(j.toString().split(".")))}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion(this.getAttribute("version"),l);if(m){this.addParam("bgcolor",m)}var b=o?o:"high";this.addParam("quality",b);this.setAttribute("useExpressInstall",l);this.setAttribute("doExpressInstall",false);var k=(i)?i:window.location;this.setAttribute("xiRedirectUrl",k);this.setAttribute("redirectUrl","");if(a){this.setAttribute("redirectUrl",a)}};deconcept.SWFObject.prototype={setAttribute:function(a,b){this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},addParam:function(a,b){this.params[a]=b},getParams:function(){return this.params},addVariable:function(a,b){this.variables[a]=b},getVariable:function(a){return this.variables[a]},getVariables:function(){return this.variables},getVariablePairs:function(){var a=new Array();var b;var c=this.getVariables();for(b in c){a.push(b+"="+c[b])}return a},getSWFHTML:function(){var d="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn")}d='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'"';d+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var c=this.getParams();for(var a in c){d+=[a]+'="'+c[a]+'" '}var b=this.getVariablePairs().join("&");if(b.length>0){d+='flashvars="'+b+'"'}d+="/>"}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX")}d='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'">';d+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var c=this.getParams();for(var a in c){d+='<param name="'+a+'" value="'+c[a]+'" />'}var b=this.getVariablePairs().join("&");if(b.length>0){d+='<param name="flashvars" value="'+b+'" />'}d+="</object>"}return d},write:function(a){if(this.getAttribute("useExpressInstall")){var b=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(b)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title)}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var c=(typeof a=="string")?document.getElementById(a):a;c.innerHTML=this.getSWFHTML();return true}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"))}}return false}};deconcept.SWFObjectUtil.getPlayerVersion=function(h,f){var b=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description){b=new deconcept.PlayerVersion(a.description.replace(/([a-z]|[A-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."))}}else{try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");for(var c=3;d!=null;c++){d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+c);b=new deconcept.PlayerVersion([c,0,0])}}catch(g){}if(h&&b.major>h.major){return b}if(!h||((h.minor!=0||h.rev!=0)&&b.major==h.major)||b.major!=6||f){try{b=new deconcept.PlayerVersion(d.GetVariable("$version").split(" ")[1].split(","))}catch(g){}}}return b};deconcept.PlayerVersion=function(a){this.major=parseInt(a[0])!=null?parseInt(a[0]):0;this.minor=parseInt(a[1])||0;this.rev=parseInt(a[2])||0};deconcept.PlayerVersion.prototype.versionIsValid=function(a){if(this.major<a.major){return false}if(this.major>a.major){return true}if(this.minor<a.minor){return false}if(this.minor>a.minor){return true}if(this.rev<a.rev){return false}return true};deconcept.util={getRequestParameter:function(d){var b=document.location.search||document.location.hash;if(b){var c=b.indexOf(d+"=");var a=(b.indexOf("&",c)>-1)?b.indexOf("&",c):b.length;if(b.length>1&&c>-1){return b.substring(b.indexOf("=",c)+1,a)}}return""}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var c=document.getElementsByTagName("OBJECT");for(var b=0;b<c.length;b++){for(var a in c[b]){if(typeof c[b][a]=="function"){c[b][a]=null}}}};if(typeof window.onunload=="function"){var oldunload=window.onunload;window.onunload=function(){deconcept.SWFObjectUtil.cleanupSWFs();oldunload()}}else{window.onunload=deconcept.SWFObjectUtil.cleanupSWFs}if(Array.prototype.push==null){Array.prototype.push=function(a){this[this.length]=a;return this.length}}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;var gArgCountErr='The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...';var gTagAttrs=null;var gQTGeneratorVersion=1;function AC_QuickTimeVersion(){return gQTGeneratorVersion}function _QTComplain(b,a){a=a.replace("%%",b);alert(a)}function _QTAddAttribute(d,a,b){var c;c=gTagAttrs[d+a];if(null==c){c=gTagAttrs[a]}if(null!=c){if(0==a.indexOf(d)&&(null==b)){b=a.substring(d.length)}if(null==b){b=a}return b+'="'+c+'" '}else{return""}}function _QTAddObjectAttr(a,b){if(0==a.indexOf("emb#")){return""}if(0==a.indexOf("obj#")&&(null==b)){b=a.substring(4)}return _QTAddAttribute("obj#",a,b)}function _QTAddEmbedAttr(a,b){if(0==a.indexOf("obj#")){return""}if(0==a.indexOf("emb#")&&(null==b)){b=a.substring(4)}return _QTAddAttribute("emb#",a,b)}function _QTAddObjectParam(a,d){var e;var c="";var b=(d)?" />":">";if(-1==a.indexOf("emb#")){e=gTagAttrs["obj#"+a];if(null==e){e=gTagAttrs[a]}if(0==a.indexOf("obj#")){a=a.substring(4)}if(null!=e){c='  <param name="'+a+'" value="'+e+'"'+b+"\n"}}return c}function _QTDeleteTagAttrs(){for(var a=0;a<arguments.length;a++){var b=arguments[a];delete gTagAttrs[b];delete gTagAttrs["emb#"+b];delete gTagAttrs["obj#"+b]}}function _QTGenerate(b,c,f){if(f.length<4||(0!=(f.length%2))){_QTComplain(b,gArgCountErr);return""}gTagAttrs=new Array();gTagAttrs.src=f[0];gTagAttrs.width=f[1];gTagAttrs.height=f[2];gTagAttrs.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";gTagAttrs.pluginspage="http://www.apple.com/quicktime/download/";var a=f[3];if((null==a)||(""==a)){a="6,0,2,0"}gTagAttrs.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version="+a;var g,e;for(var i=4;i<f.length;i+=2){g=f[i].toLowerCase();e=f[i+1];if("name"==g||"id"==g){gTagAttrs.name=e}else{gTagAttrs[g]=e}}var h="<object "+_QTAddObjectAttr("classid")+_QTAddObjectAttr("width")+_QTAddObjectAttr("height")+_QTAddObjectAttr("codebase")+_QTAddObjectAttr("name","id")+_QTAddObjectAttr("tabindex")+_QTAddObjectAttr("hspace")+_QTAddObjectAttr("vspace")+_QTAddObjectAttr("border")+_QTAddObjectAttr("align")+_QTAddObjectAttr("class")+_QTAddObjectAttr("title")+_QTAddObjectAttr("accesskey")+_QTAddObjectAttr("noexternaldata")+">\n"+_QTAddObjectParam("src",c);var d="  <embed "+_QTAddEmbedAttr("src")+_QTAddEmbedAttr("width")+_QTAddEmbedAttr("height")+_QTAddEmbedAttr("pluginspage")+_QTAddEmbedAttr("name")+_QTAddEmbedAttr("align")+_QTAddEmbedAttr("tabindex");_QTDeleteTagAttrs("src","width","height","pluginspage","classid","codebase","name","tabindex","hspace","vspace","border","align","noexternaldata","class","title","accesskey");for(var g in gTagAttrs){e=gTagAttrs[g];if(null!=e){d+=_QTAddEmbedAttr(g);h+=_QTAddObjectParam(g,c)}}return h+d+"> </embed>\n</object>"}function QT_GenerateOBJECTText(){return _QTGenerate("QT_GenerateOBJECTText",false,arguments)}function QT_GenerateOBJECTText_XHTML(){return _QTGenerate("QT_GenerateOBJECTText_XHTML",true,arguments)}function QT_WriteOBJECT(){document.writeln(_QTGenerate("QT_WriteOBJECT",false,arguments))}function QT_WriteOBJECT_XHTML(){document.writeln(_QTGenerate("QT_WriteOBJECT_XHTML",true,arguments))};