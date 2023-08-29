Util.Objects["sanofiA1"] = new function() {
	this.init = function(e) {

		e.canvas = u.ge("canvas", e)
		e.canvas.e = e;

		e.bar_b = u.ge("bar_b", e)
		e.bar_b.e = e;

		e.canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		e.canvas.clicked = function() {
			u.toggleClass(this.e.bar_b, "active");
		}
		u.e.click(e.canvas);

		e.bar_b.dropped = function() {
//			u.bug(1, "a:"+u.ge("h1", this.e).innerHTML + ":" + this.element_x)
//			submitCustomEvent(category, label, value, valueType, categoryId, labelId, valueId);
			submitCustomEvent("Wann", this.e.id + ":" + u.ge("h1", this.e).innerHTML, this.element_x, "Number", null, null, null);
		}
		e.bar_b.moved = function() {
			if(this.element_x > 50 || this.element_x + this.current_xps > 50) {
//			if(this.element_x > 180 || this.element_x + this.current_xps > 180) {
				u.addClass(this.e, "show");
			}
			else {
				u.removeClass(this.e, "show");
			}
		}
		// enable dragging of bar_b (strict)
		u.e.drag(e.bar_b, u.ge("bar_b_scope", e), true, true);
	}
}

Util.Objects["sanofiA2"] = new function() {
	this.init = function(e) {

		var canvas = u.ge("canvas", e)
		canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		u.e.click(canvas);

		e.range = u.ge("range", e);
		e.range.e = e;

		e.knob = u.ge("knob", e);
		e.knob.e = e;

		e.knob.moved = function() {
			var progress = Math.round(this.element_x / (this.end_drag_x - this.start_drag_x - this.offsetWidth)*100);

			this.e.output_on.innerHTML = 100-progress+"%"
			this.e.output_off.innerHTML = progress+"%"

			if(!this.e.canvas) {
				this.e.canvas = u.ge("canvas", u.ge("canvas", e));
				 //document.createElement("canvas");
				this.e.canvas.width = 300;
				this.e.canvas.height = 300;
//				this.e.canvas = u.ge("canvas", e).appendChild(e.canvas);
			}

			var ctx = this.e.canvas.getContext("2d");

			var radius = Math.min(this.e.canvas.width, this.e.canvas.height) / 2;
			var center_x = this.e.canvas.width/2;
			var center_y = this.e.canvas.height/2;

			var total = 100;
			var current_value = progress / total;
			e.current_value;
			// reverse full/empty values 0 = 1 and 1 = 0
			current_value = current_value == 0 ? 1 : current_value == 1 ? 0 : current_value;

			// clear canvas
			ctx.clearRect(0,0,300,300);

			ctx.beginPath();
			ctx.moveTo(center_x, center_y);
			ctx.arc(
				center_x,
				center_y,
				radius,
				Math.PI * (- 0.5 + 2),
				// -0.5 sets set the start to be top
				Math.PI * (- 0.5 + 2 * current_value),
				false
			);
			ctx.lineTo(center_x, center_y);
			// line back to the center
			ctx.closePath();
			ctx.fillStyle = "#00457d";
			ctx.fill();

			this.current_value = current_value;
		}
		e.knob.dropped = function() {
			//u.bug(1, "s:"+u.ge("h1", this.e).innerHTML + ":" + this.current_value);
//			submitCustomEvent(category, label, value, valueType, categoryId, labelId, valueId);
			submitCustomEvent("Pie", u.ge("h1", this.e).innerHTML, (this.current_value*100)+"% erhalten keine Chemotherapie", "String", null, null, null);
			submitCustomEvent("Pie", u.ge("h1", this.e).innerHTML, (100-(this.current_value*100))+"% erhalten eine Chemotherapie", "String", null, null, null);
		}

		u.e.drag(e.knob, new Array (0, 0, 497, 76), true, true);

		e.output_off = u.ge("output_off", e);
		e.output_on = u.ge("output_on", e);
		e.output_off.innerHTML = "0%";
		e.output_on.innerHTML = "100%";
	}
}

Util.Objects["sanofiA3"] = new function() {
	this.init = function(e) {

		e.canvas = u.ge("canvas", e);
		e.canvas.e = e;
		e.canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		u.e.click(e.canvas);


		// change CSS of slide
		u.addClass(e.canvas, "active");

		// activate options
		e.option_a = u.ge("first", e);
		e.option_a.e = e;
		u.e.transform(e.option_a, 45, 450);
		e.option_a.dropped = function() {this.e.overlap(this);}
		u.e.drag(e.option_a, e.canvas, false, true);

		e.option_b = u.ge("second", e);
		e.option_b.e = e;
		u.e.transform(e.option_b, 273, 450);
		e.option_b.dropped = function() {this.e.overlap(this);}
		u.e.drag(e.option_b, e.canvas, false, true);

		e.option_c = u.ge("third", e);
		e.option_c.e = e;
		u.e.transform(e.option_c, 501, 450);
		e.option_c.dropped = function() {this.e.overlap(this);}
		u.e.drag(e.option_c, e.canvas, false, true);

		e.option_d = u.ge("forth", e);
		e.option_d.e = e;
		u.e.transform(e.option_d, 729, 450);
		e.option_d.dropped = function() {this.e.overlap(this);}
		u.e.drag(e.option_d, e.canvas, false, true);

		e.rank_a = document.createElement("div");
		e.rank_a.className = "rank first";
		e.rank_a = u.ge("canvas", e).appendChild(e.rank_a);
		e.rank_a.innerHTML = 1;
		u.e.transform(e.rank_a, 159, 120);

		e.rank_b = document.createElement("div");
		e.rank_b.className = "rank second";
		e.rank_b = u.ge("canvas", e).appendChild(e.rank_b);
		e.rank_b.innerHTML = 2;
		u.e.transform(e.rank_b, 620, 120);

		e.rank_c = document.createElement("div");
		e.rank_c.className = "rank third";
		e.rank_c = u.ge("canvas", e).appendChild(e.rank_c);
		e.rank_c.innerHTML = 3;
		u.e.transform(e.rank_c, 159, 300);

		e.rank_d = document.createElement("div");
		e.rank_d.className = "rank forth";
		e.rank_d = u.ge("canvas", e).appendChild(e.rank_d);
		e.rank_d.innerHTML = 4;
		u.e.transform(e.rank_d, 620, 300);

		// handle overlap for the ranking
		e.overlap = function(element) {
//			submitCustomEvent(category, label, value, valueType, categoryId, labelId, valueId);
			if(u.e.overlap(element, element.e.rank_a)) {
				u.e.transform(element, element.e.rank_a.element_x+10, element.e.rank_a.element_y+12);
//				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"1:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "1:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_b)) {
				u.e.transform(element, element.e.rank_b.element_x+10, element.e.rank_b.element_y+12);
//				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"2:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "2:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_c)) {
				u.e.transform(element, element.e.rank_c.element_x+10, element.e.rank_c.element_y+12);
//				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"3:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "3:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_d)) {
				u.e.transform(element, element.e.rank_d.element_x+10, element.e.rank_d.element_y+12);
//				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"4:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "4:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
		}

	}
}

Util.Objects["sanofiA4"] = new function() {
	this.init = function(e) {

		e.canvas = u.ge("canvas", e)
		e.canvas.e = e;

		e.blue_button = u.ge("blue_button", e)
		e.blue_button.e = e;
		e.grey_button = u.ge("grey_button", e)
		e.grey_button.e = e;

		e.grey_button.clicked = function(event) {
			u.e.kill(event);

			u.toggleClass(this.e, "grey_scale");
		}
		u.e.click(e.grey_button);

		e.blue_button.clicked = function(event) {
			u.toggleClass(this.e, "blue_scale");
			u.e.kill(event);
		}
		u.e.click(e.blue_button);

		e.canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		e.canvas.clicked = function() {

			if(this.e.className.match(/blue_scale|grey_scale/i)) {
				u.removeClass(this.e, "blue_scale");
				u.removeClass(this.e, "grey_scale");
			}
			else {
				u.addClass(this.e, "blue_scale");
				u.addClass(this.e, "grey_scale");
			}
		}
		u.e.click(e.canvas);
	}
}


Util.Objects["sanofiA10"] = new function() {
	this.init = function(e) {
		e.canvas = u.ge("canvas", e)
		e.canvas.e = e;

		e.a_column = u.ge("a_column", e)
		e.a_column.e = e;
		e.b_column = u.ge("b_column", e)
		e.b_column.e = e;
		e.c_column = u.ge("c_column", e)
		e.c_column.e = e;
		
		e.b_column.clicked = function(event) {
			u.toggleClass(this.e, "b_scale");
			u.e.kill(event);
		}
		u.e.click(e.b_column);
		
		e.a_column.clicked = function(event) {
			u.toggleClass(this.e, "a_scale");
			u.e.kill(event);
		}
		u.e.click(e.a_column);

		e.c_column.clicked = function(event) {
			u.toggleClass(this.e, "c_scale");
			u.e.kill(event);
		}
		u.e.click(e.c_column);

		e.canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		e.canvas.clicked = function() {
			if(this.e.className.match(/a_scale|b_scale|c_scale/i)) {
				u.removeClass(this.e, "a_scale");
				u.removeClass(this.e, "b_scale");
				u.removeClass(this.e, "c_scale");
			}
			else {
				u.addClass(this.e, "a_scale");
				u.addClass(this.e, "b_scale");
				u.addClass(this.e, "c_scale");
			}
		}
		u.e.click(e.canvas);
	}
}

Util.Objects["sanofiA11"] = new function() {
	this.init = function(e) {

		var canvas = u.ge("canvas", e)
		canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		u.e.click(canvas);

		e.a_button = u.ge("a_button", e)
		e.a_button.e = e;
		e.a_button.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.a_button);

		e.b_button = u.ge("b_button", e)
		e.b_button.e = e;
		e.b_button.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.b_button);

		e.c_button = u.ge("c_button", e)
		e.c_button.e = e;
		e.c_button.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.c_button);

		e.d_button = u.ge("d_button", e)
		e.d_button.e = e;
		e.d_button.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.d_button);
	}
}
Util.Objects["sanofiA12"] = new function() {
	this.init = function(e) {

		var canvas = u.ge("canvas", e)
		canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		u.e.click(canvas);

		var graph = u.ge("graph", e)
		graph.e = e;
		var blue_button = u.ge("blue_button", e)
		blue_button.e = e;
		var grey_button = u.ge("grey_button", e)
		grey_button.e = e;
		grey_button.clicked = function() {
			u.toggleClass(this.e, "grey_scale");
		}
		u.e.click(grey_button);
		blue_button.clicked = function() {
			u.toggleClass(this.e, "blue_scale");
		}
		u.e.click(blue_button);
		graph.clicked = function() {
			if(this.e.className.match(/blue_scale|grey_scale/i)) {
				u.removeClass(this.e, "blue_scale");
				u.removeClass(this.e, "grey_scale");
			}
			else {
				u.addClass(this.e, "blue_scale");
				u.addClass(this.e, "grey_scale");
			}
		}
		u.e.click(graph);
	}
}
Util.Objects["sanofiA13"] = new function() {
	this.init = function(e) {

		e.canvas = u.ge("canvas", e);
		e.canvas.e = e;
		e.canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		u.e.click(e.canvas);

		e.ages = u.ges("age", e);
		for(var i = 0; age = e.ages[i]; i++) {
			u.addClass(age.parentNode, "inactive");
			age.clicked = function() {
				u.toggleClass(this.parentNode, "inactive");
			}
			u.e.click(age);
		}

		e.fits = u.ges("fit", e);
		for(var i = 0; child = e.fits[i]; i++) {
			child.firstChild.style.width = child.firstChild.firstChild.nodeValue*15+"px";
			child.firstChild.div = document.createElement("div");
			child.firstChild.div.className = "magnify";
			child.firstChild.div = child.firstChild.appendChild(child.firstChild.div);
			child.firstChild.div.innerHTML = Number(child.firstChild.firstChild.nodeValue) + Number(e.ages[i].firstChild.nodeValue);
			child.firstChild.e = e;
			child.firstChild.clicked = function() {
				u.toggleClass(this, "magnified");
				u.e.transform(this.div, 62, -38);
			}
			u.e.click(child.firstChild);
		}
		e.vulnerables = u.ges("vulnerable", e);
		for(var i = 0; child = e.vulnerables[i]; i++) {
			child.firstChild.style.width = child.firstChild.firstChild.nodeValue*15+"px";
			child.firstChild.div = document.createElement("div");
			child.firstChild.div.className = "magnify";
			child.firstChild.div = child.firstChild.appendChild(child.firstChild.div);
			child.firstChild.div.innerHTML = Number(child.firstChild.firstChild.nodeValue) + Number(e.ages[i].firstChild.nodeValue);
			child.firstChild.e = e;
			child.firstChild.clicked = function() {
				u.toggleClass(this, "magnified");
				u.e.transform(this.div, 62, -38);
			}
			u.e.click(child.firstChild);
		}
		e.frails = u.ges("frail", e);
		for(var i = 0; child = e.frails[i]; i++) {
			child.firstChild.style.width = child.firstChild.firstChild.nodeValue*15+"px";
			child.firstChild.div = document.createElement("div");
			child.firstChild.div.className = "magnify";
			child.firstChild.div = child.firstChild.appendChild(child.firstChild.div);
			child.firstChild.div.innerHTML = Number(child.firstChild.firstChild.nodeValue) + Number(e.ages[i].firstChild.nodeValue);
			child.firstChild.e = e;
			child.firstChild.clicked = function() {
				u.toggleClass(this, "magnified");
				u.e.transform(this.div, 62, -38);
			}
			u.e.click(child.firstChild);
		}
	}
}

Util.Objects["sanofiA15"] = new function() {
	this.init = function(e) {

		var canvas = u.ge("canvas", e)
		canvas.clickMoved = function() {
			u.e.resetEvents(u.ge("presentation"));
		}
		u.e.click(canvas);

		e.graphA = u.ge("graphA", e)
		e.graphA.e = e;

		e.graphB = u.ge("graphB", e)
		e.graphB.e = e;

		e.graphA.clicked = function() {
			if(this.e.className.match(/graphA/i)) {
				u.removeClass(this.e, "graphA");
			}
			else {
				u.removeClass(this.e, "graphB");
				u.addClass(this.e, "graphA");
			}
		}
		u.e.click(e.graphA);

		e.graphB.clicked = function() {
			if(this.e.className.match(/graphB/i)) {
				u.removeClass(this.e, "graphB");
			}
			else {
				u.removeClass(this.e, "graphA");
				u.addClass(this.e, "graphB");
			}
		}
		u.e.click(e.graphB);
	}
}
