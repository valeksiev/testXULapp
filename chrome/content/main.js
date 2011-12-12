function jsdump(str)
{
  Components.classes['@mozilla.org/consoleservice;1']
            .getService(Components.interfaces.nsIConsoleService)
            .logStringMessage(str);
}
function showMore(button) {	
	jsdump(button);
  document.getElementById("more-text").hidden = false;
  button.oncommand = function(){showLess(this)};   
}
function showLess(button){
	document.getElementById("more-text").hidden = true;
	button.oncommand = function(){showMore(this)};
}
