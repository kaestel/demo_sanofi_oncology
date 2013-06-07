Util.Objects["sanofiE1"] = new function() {
	this.init = function(e) {
		e.line1 = u.ge("line1", e)
		e.line1.e = e;
		e.line1.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line1);
		
		e.line2 = u.ge("line2", e)
		e.line2.e = e;
		e.line2.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line2);

		e.line3 = u.ge("line3", e)
		e.line3.e = e;
		e.line3.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line3);
		
		e.line4 = u.ge("line4", e)
		e.line4.e = e;
		e.line4.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line4);
		
		e.line5 = u.ge("line5", e)
		e.line5.e = e;
		e.line5.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line5);
		
		e.line6 = u.ge("line6", e)
		e.line6.e = e;
		e.line6.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line6);

		e.line7 = u.ge("line7", e)
		e.line7.e = e;
		e.line7.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line7);
		
		/*e.line8 = u.ge("line8", e)
		e.line8.e = e;
		e.line8.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line8);*/
	}
}

Util.Objects["sanofiE2"] = new function() {
	this.init = function(e) {
		e.blue_button = u.ge("blue_button", e)
		e.blue_button.e = e;
		e.blue_button.clicked = function() {
			u.toggleClass(this.e, "blue");
		}
		u.e.click(e.blue_button);
		
		e.grey_button = u.ge("grey_button", e)
		e.grey_button.e = e;
		e.grey_button.clicked = function() {
			u.toggleClass(this.e, "grey");
		}
		u.e.click(e.grey_button);
		
		e.all_button = u.ge("all_button", e)
		e.all_button.e = e;
		e.all_button.clicked = function() {
			if(this.e.className.match(/blue|grey/i)) {
				u.removeClass(this.e, "blue");
				u.removeClass(this.e, "grey");
			}
			u.toggleClass(this.e, "blue grey");	
		}
		u.e.click(e.all_button);
	}
}
Util.Objects["sanofiE3"] = new function() {
	this.init = function(e) {
		e.blue_button = u.ge("blue_button", e)
		e.blue_button.e = e;
		e.blue_button.clicked = function() {
			u.toggleClass(this.e, "blue");
		}
		u.e.click(e.blue_button);
		
		e.grey_button = u.ge("grey_button", e)
		e.grey_button.e = e;
		e.grey_button.clicked = function() {
			u.toggleClass(this.e, "grey");
		}
		u.e.click(e.grey_button);

		e.all_button = u.ge("all_button", e)
		e.all_button.e = e;
		e.all_button.clicked = function() {
			if(this.e.className.match(/blue|grey/i)) {
				u.removeClass(this.e, "blue");
				u.removeClass(this.e, "grey");
			}
			u.toggleClass(this.e, "blue grey");	
		}
		u.e.click(e.all_button);
	}
}