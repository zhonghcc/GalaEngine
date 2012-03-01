/**
 * @author Zhonghcc
 */
function loadScript(url){
	var script = document.createElement("script");
	script.type="text/javascript";
	script.src=url;
	document.body.appendChild(script);
}
function loadScriptString(code){
	var script = document.createElement("script");
	script.type="text/javascript";
	try{
		script.appendChild(document.createTextNode(code));
	} catch(ex){
		script.text=code;
	}
	document.body.appendChild(script);
}
function Init(){
	loadScript("jquery.js");
	loadScript("Libraries.js");
	ConfigInit();
	//GalaStart();
}
function GalaStart(){
//	var node=document.createElement("input");
//	node.type="button";
//	node.value="click!";
//	node.onclick=function(){hello();};
//	document.body.appendChild(node);
var $bt=$("<input>").attr("type","button");
$bt.attr("value","click me");
$bt.click(function (){$("#tst").toggle(500)})
$(document.body).append($bt);
}
function ConfigInit(){
	
}
