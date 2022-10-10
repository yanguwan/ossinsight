(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[7452],{9581:function(e,s,t){"use strict";t.d(s,{Z:function(){return R}});var n=t(63366),r=t(87462),a=t(67294),o=t(86010),i=t(94780),E=t(90948),l=t(71657),c=t(34867),N=t(1588);function p(e){return(0,c.Z)("MuiDialogContent",e)}(0,N.Z)("MuiDialogContent",["root","dividers"]);var T=(0,N.Z)("MuiDialogTitle",["root"]),d=t(85893);const u=["className","dividers"],A=(0,E.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:t}=e;return[s.root,t.dividers&&s.dividers]}})((({theme:e,ownerState:s})=>(0,r.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${T.root} + &`]:{paddingTop:0}})));var R=a.forwardRef((function(e,s){const t=(0,l.Z)({props:e,name:"MuiDialogContent"}),{className:a,dividers:E=!1}=t,c=(0,n.Z)(t,u),N=(0,r.Z)({},t,{dividers:E}),T=(e=>{const{classes:s,dividers:t}=e,n={root:["root",t&&"dividers"]};return(0,i.Z)(n,p,s)})(N);return(0,d.jsx)(A,(0,r.Z)({className:(0,o.Z)(T.root,a),ownerState:N,ref:s},c))}))},76743:function(e,s,t){"use strict";t.d(s,{Z:function(){return N}});var n=t(87462),r=t(63366),a=t(75068);function o(e,s){return e.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=t(67294),E=t(98885),l=function(e,s){return e&&s&&s.split(" ").forEach((function(s){return n=s,void((t=e).classList?t.classList.remove(n):"string"==typeof t.className?t.className=o(t.className,n):t.setAttribute("class",o(t.className&&t.className.baseVal||"",n)));var t,n}))},c=function(e){function s(){for(var s,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(s=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(e,t){var n=s.resolveArguments(e,t),r=n[0],a=n[1];s.removeClasses(r,"exit"),s.addClass(r,a?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(e,t)},s.onEntering=function(e,t){var n=s.resolveArguments(e,t),r=n[0],a=n[1]?"appear":"enter";s.addClass(r,a,"active"),s.props.onEntering&&s.props.onEntering(e,t)},s.onEntered=function(e,t){var n=s.resolveArguments(e,t),r=n[0],a=n[1]?"appear":"enter";s.removeClasses(r,a),s.addClass(r,a,"done"),s.props.onEntered&&s.props.onEntered(e,t)},s.onExit=function(e){var t=s.resolveArguments(e)[0];s.removeClasses(t,"appear"),s.removeClasses(t,"enter"),s.addClass(t,"exit","base"),s.props.onExit&&s.props.onExit(e)},s.onExiting=function(e){var t=s.resolveArguments(e)[0];s.addClass(t,"exit","active"),s.props.onExiting&&s.props.onExiting(e)},s.onExited=function(e){var t=s.resolveArguments(e)[0];s.removeClasses(t,"exit"),s.addClass(t,"exit","done"),s.props.onExited&&s.props.onExited(e)},s.resolveArguments=function(e,t){return s.props.nodeRef?[s.props.nodeRef.current,e]:[e,t]},s.getClassNames=function(e){var t=s.props.classNames,n="string"==typeof t,r=n?""+(n&&t?t+"-":"")+e:t[e];return{baseClassName:r,activeClassName:n?r+"-active":t[e+"Active"],doneClassName:n?r+"-done":t[e+"Done"]}},s}(0,a.Z)(s,e);var t=s.prototype;return t.addClass=function(e,s,t){var n=this.getClassNames(s)[t+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===s&&"done"===t&&r&&(n+=" "+r),"active"===t&&e&&e.scrollTop,n&&(this.appliedClasses[s][t]=n,function(e,s){e&&s&&s.split(" ").forEach((function(s){return n=s,void((t=e).classList?t.classList.add(n):function(e,s){return e.classList?!!s&&e.classList.contains(s):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+s+" ")}(t,n)||("string"==typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)));var t,n}))}(e,n))},t.removeClasses=function(e,s){var t=this.appliedClasses[s],n=t.base,r=t.active,a=t.done;this.appliedClasses[s]={},n&&l(e,n),r&&l(e,r),a&&l(e,a)},t.render=function(){var e=this.props,s=(e.classNames,(0,r.Z)(e,["classNames"]));return i.createElement(E.ZP,(0,n.Z)({},s,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},s}(i.Component);c.defaultProps={classNames:""},c.propTypes={};var N=c},26586:function(e,s,t){"use strict";const n=t(43540),r={html:!1,classPrefix:"sql-hl-",colors:{keyword:"\x1b[35m",function:"\x1b[31m",number:"\x1b[32m",string:"\x1b[32m",special:"\x1b[33m",bracket:"\x1b[33m",clear:"\x1b[0m"}},a="default",o=[{name:"keyword",group:1,regex:new RegExp(`(^|[^a-zA-Z_])(${n.join("|")})(?=[^a-zA-Z_]|$)`,"gi")},{name:"special",regex:/(=|!=|%|\/|\*|-|,|;|:|\+|<|>)/g},{name:"function",regex:/(\w+?)\(/g,trimEnd:1},{name:"number",regex:/((?<![a-zA-z])\d+(?:\.\d+)?)/g},{name:"string",regex:/(['](?:\\'|.)*?[']|["](?:\\"|.)*?["]|[`](?:\\`|.)*?[`])/g},{name:"bracket",regex:/([()])/g}];function i(e){const s=[];for(const a of o){let t;for(;t=a.regex.exec(e);){let e=t[0],n=0;if(a.group){e=t[a.group+1];for(let e=1;e<=a.group;e++)n+=t[e].length}const r=a.trimEnd?e.substring(0,e.length-a.trimEnd):e;s.push({name:a.name,start:t.index+n,length:r.length})}}const t=s.slice().sort(((e,s)=>e.start-s.start)),n=[];let r=0;for(let o=0;o<t.length;o++)t[o].start<r||(t[o].start>r&&n.push({name:a,content:e.substring(r,t[o].start)}),n.push({name:t[o].name,content:e.substring(t[o].start,t[o].start+t[o].length)}),r=t[o].start+t[o].length);return r<e.length-1&&n.push({name:a,content:e.substring(r,r+e.length+1)}),n}e.exports={getSegments:i,highlight:function(e,s){return s=Object.assign({},r,s),i(e).map((({name:e,content:t})=>e===a?t:s.html?`<span class="${s.classPrefix}${e}">${t}</span>`:s.colors[e]+t+s.colors.clear)).join("")}}},43540:function(e){e.exports=["ADD","ADD CONSTRAINT","ALTER","ALTER COLUMN","ALTER TABLE","ALL","AND","ANY","AS","ASC","BACKUP DATABASE","BETWEEN","CASE","CHECK","COLUMN","CONSTRAINT","CREATE","CREATE DATABASE","CREATE INDEX","CREATE OR REPLACE VIEW","CREATE TABLE","CREATE PROCEDURE","CREATE UNIQUE INDEX","CREATE VIEW","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","DROP COLUMN","DROP CONSTRAINT","DROP DATABASE","DROP DEFAULT","DROP INDEX","DROP TABLE","DROP VIEW","EXEC","EXISTS","FOREIGN KEY","FROM","FULL OUTER JOIN","GROUP BY","HAVING","IN","INDEX","INNER JOIN","INSERT INTO","INSERT INTO SELECT","IS NULL","IS NOT NULL","JOIN","LEFT JOIN","LIKE","LIMIT","NOT","NOT NULL","OR","ORDER BY","OUTER JOIN","PRIMARY KEY","PROCEDURE","RIGHT JOIN","ROWNUM","SELECT","SELECT DISTINCT","SELECT INTO","SELECT TOP","SET","TABLE","TOP","TRUNCATE TABLE","UNION","UNION ALL","UNIQUE","UPDATE","VALUES","VIEW","WHERE","PRAGMA","INTEGER","PRIMARY","CHAR","DATETIME","DECIMAL","BINARY","TIMESTAMP","VARCHAR","VARBINARY","TINYBLOB","TINYTEXT","BLOB","LONGTEXT","NULL","REFERENCES","INDEX_LIST","BY","CURRENT_DATE","CURRENT_TIME","EACH","ELSE","ELSEIF","FALSE","FOR","GROUP","IF","IFNULL","INSERT","INTERVAL","INTO","IS","KEY","KEYS","LEFT","MATCH","ON","OPTION","ORDER","OUT","OUTER","REPLACE","TINYINT","RIGHT","LEADING","TRAILING","THEN","TO","TRUE","WHEN","WITH","UNSIGNED","CASCADE","ENGINE","TEXT","AUTO_INCREMENT","SHOW","BEGIN","END","PRINT","OVERLAPS"]}}]);