Util.Objects["docs"] = new function() {
	this.init = function(e) {

		e.close = e.appendChild(document.createElement("div"));
		e.close.className = "close";
		e.close.e = e;
		e.close.clicked = function() {
			u.toggleClass(document.body, "docs");
//			this.e.style.display = "none";
		}
		u.e.click(e.close);

		e.content = u.ges("ul", e);

		for(var i = 0; nav = u.ges("li", e.content[0])[i]; i++) {
			nav.e = e;
			nav.i = i+1;
			nav.clicked = function() {
				for(var i = 1; ul = this.e.content[i]; i++) {
					if(this.i == i) {
						u.addClass(u.ges("li", this.e.content[0])[i-1], "selected");
						ul.style.display = "block";
					}
					else {
						u.removeClass(u.ges("li", this.e.content[0])[i-1], "selected");
						ul.style.display = "none";
					}

				}
			}
			u.e.click(nav);
			
		}


	}
}
