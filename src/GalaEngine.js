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
	loadScript("Libraries.js");
	ConfigInit();
	GalaStart();
}
function GalaStart(){
	var node=document.createElement("input");
	node.type="button";
	node.value="click!";
	node.onclick=function(){hello();};
	document.body.appendChild(node);
}
function ConfigInit(){
	
}
