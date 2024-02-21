/// <reference path="Prototype.d.ts" />

import {Ajax} from "./Ajax";
function test () {
	if(Prototype.Browser.IE) {
		alert("IE");
	} else if(Prototype.Browser.Gecko) {
		alert("Firefox (or another browser using the Gecko engine)");
	} else if(Prototype.Browser.Opera) {
		alert("Opera");
	} else if(Prototype.Browser.WebKit) {
		alert("Chrome or Safari");
	} else if(Prototype.Browser.MobileSafari) {
		alert("iOS Browser");
	} else {
		alert("I cannot detect what kind of browser you are using");
	}
}

class TestJDTS {

	ajax() {
		Ajax.Updater('me');
	}

}
