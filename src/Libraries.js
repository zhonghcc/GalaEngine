/**
 * @author Zhonghcc
 */
/*var EventUtil= {
	addHandler: function(element,type,handler) {
		if(element.addEventListener) {
			element.addEventListener(type,handler,false);
		} else if(element.attachEvent) {
			element.attachEvent("on"+type,handler);
		} else {
			element["on"+type]=handler;
		}
	},
	removeHandler: function(element,type,handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if(element.attachEvent) {
			element.detachEvent("on"+type,handler);
		} else {
			element["on"+type]=null;
		}
	}
}*/
/*
 * region:XML class 
 * function: return xml2JSON data
 */
var tempJSON;
function XML(fileName){
	this.fileName=fileName;
	this.data=null;
    $.ajax({ 
	    url:this.fileName, 
	    dataType:"xml", 
        async:false, 
	    error: function(data){ 
   		    alert('Error loading XML document'+fileName); 
	    }, 
	    success:function(data){
            //tempXML=data;
            tempJSON=$.xml2json(data);
	    }
	    });     
    this.data=tempJSON;
    tempJSON=new Object();
}
XML.prototype.getJSON=function(){
	return this.data;
}
XML.prototype.getFileName=function(){
	return this.fileName;
}
/*******XML class end*****************/
