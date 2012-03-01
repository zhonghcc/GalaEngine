/**
 * @author Zhonghcc
 */
function hello(){
	//document.write("hello");
}
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}
		else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}
		else {
			element["on"+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}
		else if(element.attachEvent){
			element.detachEvent("on"+type,handler);
		}
		else {
			element["on"+type]=null;
		}
	}
}
