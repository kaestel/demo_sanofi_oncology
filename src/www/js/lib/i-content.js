Util.Objects["pre"] = new function() {
	this.init = function(e) {
		u.addClass(document.body, "show");

		u.e.drag(u.ge("display"), u.ge("display"), true);

		var links = u.ges("a", e);
		for(var i = 0; link = links[i]; i++) {
			link.url = link.href;
			link.removeAttribute("href");
			link.goto = function() {
				location.href = this.url;
			}
			link.clicked = function() {
				u.removeClass(document.body, "show");
				u.t.setTimer(this, this.goto, 1000);
			}
			u.e.click(link);
		}
	}
}
Util.Objects["splash"] = new function() {
	this.init = function(e) {
		e.removeElement = function() {
			location.href = "selector.php";
//			this.parentNode.removeChild(this);
		}
		e.clicked = function() {
			u.addClass(this, "entered");
			u.t.setTimer(this, this.removeElement, 500);
		}
		u.e.click(e);

	}
}