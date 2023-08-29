var Util = u = new function() {}
Util.testURL = function(url) {
	return true;
	return url.match(/http\:\/\/mkn\.|http\:\/\/w\.|\.local/i);
}
Util.debug = function(output) {
	if(Util.testURL(location.href)) {
		var element, br;
		if(Util.debugWindow && Util.debugWindow.document) {
			element = Util.debugWindow.document.createTextNode(output);
			br = Util.debugWindow.document.createElement('br');
			Util.debugWindow.document.body.appendChild(element);
			Util.debugWindow.document.body.appendChild(br);
			Util.debugWindow.scrollBy(0,1000);
		}
		else {
			Util.openDebugger();
			if(!Util.debugWindow) {
				alert("Disable popup blocker!");
			}
			else {
				Util.debug(output);
			}
		}
	}
}
Util.debugWindow = false;
Util.openDebugger = function() {
	Util.debugWindow = window.open("", "debugWindow", "width=600, height=400, scrollbars=yes, resizable=yes");
	Util.debugWindow.document.body.style.fontFamily = "Courier";
	var element = Util.debugWindow.document.createTextNode("--- new session ---");
	var br = Util.debugWindow.document.createElement('br');
	Util.debugWindow.document.body.appendChild(br);
	Util.debugWindow.document.body.appendChild(element);
	Util.debugWindow.document.body.appendChild(br.cloneNode(br));
	Util.debugWindow.document.body.appendChild(br.cloneNode(br));
}
Util.tracePointer = function(e) {
	if(Util.testURL(location.href)) {
		var position = document.createElement("div");
		document.body.appendChild(position);
		position.id = "debug_pointer";
		position.style.position = "absolute";
		position.style.backgroundColor = "#ffffff";
		position.style.color = "#000000";
		this.trackMouse = function(event) {
			u.ge("debug_pointer").innerHTML = event.pageX+"x"+event.pageY;
			u.ge("debug_pointer").style.left = 7+event.pageX+"px";
			u.ge("debug_pointer").style.top = 7+event.pageY+"px";
		}
		u.e.addEvent(e, "mousemove", this.trackMouse);
	}
}
Util.bug = function(target, message) {
	if(Util.testURL(location.href)) {
		var options = new Array(new Array(0, "auto", "auto", 0), new Array(0, 0, "auto", "auto"), new Array("auto", 0, 0, "auto"), new Array("auto", "auto", 0, 0));
		if(!u.ge("debug_"+target)) {
			for(var i = 0; option = options[i]; i++) {
				if(!u.ge("debug_id_"+i)) {
					var d_target = document.createElement("div");
					document.body.appendChild(d_target);
					d_target.style.position = "absolute";
					d_target.style.zIndex = 100;
					d_target.style.top = option[0];
					d_target.style.right = option[1];
					d_target.style.bottom = option[2];
					d_target.style.left = option[3];
					d_target.style.backgroundColor = "#ffffff";
					d_target.style.color = "#000000";
					d_target.style.padding = "3px";
					d_target.id = "debug_id_"+i;
					d_target.className = "debug_"+target;
					break;
				}
			}
		}
		u.ge("debug_"+target).innerHTML += message+"<br>";
	}
}
Util.ge = function(id, target) {
	var e, i, regexp;
	t = target ? target : document;
	if(document.getElementById(id)) {
		return document.getElementById(id);
	}
	regexp = new RegExp("(^|\\s)" + id + "(\\s|$|\:)");
	for(i = 0; e = t.getElementsByTagName("*")[i]; i++) {
		if(regexp.test(e.className)) {
			return e;
		}
	}
	return t.getElementsByTagName(id).length ? t.getElementsByTagName(id)[0] : false;
}
Util.ges = function(id, target) {
	var e, i, regexp;
	var elements = new Array();
	t = target ? target : document;
	regexp = new RegExp("(^|\\s)" + id + "(\\s|$|\:)");
	for(i = 0; e = t.getElementsByTagName("*")[i]; i++) {
		if(regexp.test(e.className)) {
			elements.push(e);
		}
	}
	return elements.length ? elements : t.getElementsByTagName(id);
}
Util.getIJ = function(e, id) {
	var regexp = new RegExp(id + ":[?=\\w/\\#~:.?+=?&%@!\\-]*");
	if(e.className.match(regexp)) {
		return e.className.match(regexp)[0].replace(id + ":", "");
	}
	return false;
}
Util.addClass = function(e, classname) {
	if(classname) {
		var regexp = new RegExp("(^|\\s)" + classname + "(\\s|$|\:)");
		if(!regexp.test(e.className)) {
			e.className += e.className ? " " + classname : classname;
		}
	}
}
Util.removeClass = function(e, classname) {
	if(classname) {
		var regexp = new RegExp(classname + " | " + classname + "|" + classname);
		e.className = e.className.replace(regexp, "");
	}
}
Util.toggleClass = function(e, classname) {
	var regexp = new RegExp("(^|\\s)" + classname + "(\\s|$|\:)");
	if(regexp.test(e.className)) {
		Util.removeClass(e, classname);
	}
	else {
		Util.addClass(e, classname);
	}
}
Util.wrapElement = function(e, wrap) {
	wrap = e.parentNode.insertBefore(document.createElement(wrap), e);
	wrap.appendChild(e);
	return wrap;
}
Util.Events = u.e = new function() {
	this.kill = function(event) {
		event.preventDefault();
		event.cancelBubble = true;
	}
	this.addEvent = function(e, type, action) {
		e.addEventListener(type, action, false);
	}
	this.removeEvent = function(e, type, action) {
		e.removeEventListener(type, action, false);
	}
	this.transform = function(e, x, y) {
		e.style.MozTransform = "translate("+x+"px, "+y+"px)";
		e.style.webkitTransform = "translate3d("+x+"px, "+y+"px, 0)";
		e.element_x = x;
		e.element_y = y;
	}
	this.transition = function(e, transition) {
		e.style.MozTransition = transition;
		e.style.webkitTransition = transition;
	}
	this.overlap = function(element, target, strict) {
		if(target.constructor.toString().match("Array")) {
			target_start_x = Number(target[0]);
			target_start_y = Number(target[1]);
			target_end_x = Number(target[2]);
			target_end_y = Number(target[3]);
		}
		else {
			target_start_x = target.element_x ? target.element_x : 0;
			target_start_y = target.element_y ? target.element_y : 0;
			target_end_x = Number(target_start_x + target.offsetWidth);
			target_end_y = Number(target_start_y + target.offsetHeight);
		}
		element_start_x = Number(element.element_x);
		element_start_y = Number(element.element_y);
		element_end_x = Number(element_start_x + element.offsetWidth);
		element_end_y = Number(element_start_y + element.offsetHeight);
		if(strict && element_start_x >= target_start_x && element_start_y >= target_start_y && element_end_x <= target_end_x && element_end_y <= target_end_y) {
			return true;
		}
		else if(strict) {
			return false;
		}
		else if(element_end_x < target_start_x || element_start_x > target_end_x || element_end_y < target_start_y || element_start_y > target_end_y) {
			return false;
		}
		return true;
	}
	this.resetEvents = function(e) {
		this.removeEvent(e, "mouseup", this._dblclicked);
		this.removeEvent(e, "touchend", this._dblclicked);
		this.removeEvent(e, "mousemove", this._pick);
		this.removeEvent(e, "touchmove", this._pick);
		this.removeEvent(e, "mousemove", this._drag);
		this.removeEvent(e, "touchmove", this._drag);
		this.removeEvent(e, "mouseup", this._drop);
		this.removeEvent(e, "touchend", this._drop);
		this.removeEvent(e, "mouseout", this._snapback);
	}
	this._inputStart = function(event) {
		u.e.kill(event);

		this.current_xps = 0;
		this.current_yps = 0;
		this.swiped = false;

		if(this.click || this.dblclick || this.hold) {
			u.e.addEvent(this, "mouseup", u.e._dblclicked);
			u.e.addEvent(this, "touchend", u.e._dblclicked);
		}
		if(this.hold) {
			this.t_held = u.t.setTimer(this, u.e._held, 750);
		}
		if(this.drag || this.swipe) {
			u.e.addEvent(this, "mousemove", u.e._pick);
			u.e.addEvent(this, "touchmove", u.e._pick);
			u.e.addEvent(this, "mouseup", u.e._drop);
			u.e.addEvent(this, "touchend", u.e._drop);
		}
	}
	this.hold = function(e) {
		e.hold = true;
		u.e.addEvent(e, "mousedown", this._inputStart);
		u.e.addEvent(e, "touchstart", this._inputStart);
	}
	this._held = function(event) {
		u.e.resetEvents(this);
		if(typeof(this.held) == "function") {
			this.held();
		}
	}
	this.click = this.tap = function(e) {
		e.click = true;
		u.e.addEvent(e, "mousedown", this._inputStart);
		u.e.addEvent(e, "touchstart", this._inputStart);
	}
	this._clicked = function(event) {
		u.e.resetEvents(this);
		if(typeof(this.clicked) == "function") {
			this.clicked();
		}
	}
	this.dblclick = this.doubletap = function(e) {
		e.dblclick = true;
		u.e.addEvent(e, "mousedown", this._inputStart);
		u.e.addEvent(e, "touchstart", this._inputStart);
	}
	this._dblclicked = function(event) {
		u.t.resetTimer(this.t_held);
		if(u.t.valid(this.t_clicked)) {
			u.t.resetTimer(this.t_clicked);
			u.e.resetEvents(this);
			if(typeof(this.dblclicked) == "function") {
				this.dblclicked();
			}
			return;
		}
		else {
			this.t_clicked = u.t.setTimer(this, u.e._clicked, 400);
		}
	}
	this.drag = function(e, target, strict, snapback, process_time) {
		e.drag = true;
		e.strict = strict ? true : false;
		e.allowed_offset = e.strict ? 0 : 250;
		e.elastica = 2;
		e.snapback = snapback ? true : false;
		e.process_time = process_time ? process_time : 0;
		e.mtm_avg = new Array();
		if(target.constructor.toString().match("Array")) {
			e.start_drag_x = Number(target[0]);
			e.start_drag_y = Number(target[1]);
			e.end_drag_x = Number(target[2]);
			e.end_drag_y = Number(target[3]);
		}
		else {
			e.start_drag_x = target.element_x ? target.element_x : 0;
			e.start_drag_y = target.element_y ? target.element_y : 0;
			e.end_drag_x = Number(e.start_drag_x + target.offsetWidth);
			e.end_drag_y = Number(e.start_drag_y + target.offsetHeight);
		}
		u.e.addEvent(e, "mousedown", this._inputStart);
		u.e.addEvent(e, "touchstart", this._inputStart);
	}
	this._pick = function(event) {
	    u.e.kill(event);
		u.t.resetTimer(this.t_held);
		u.t.resetTimer(this.t_clicked);
		this.move_timestamp = new Date().getTime();
		this.vertical = (this.end_drag_x - this.start_drag_x == this.offsetWidth);
		this.horisontal = (this.end_drag_y - this.start_drag_y == this.offsetHeight);
		this.offset_x = this.element_x = this.element_x ? this.element_x : 0;
		this.offset_y = this.element_y = this.element_y ? this.element_y : 0;
		this.current_xps = 0;
		this.current_yps = 0;
		this.start_input_x = event.targetTouches ? event.targetTouches[0].pageX : event.pageX;
		this.start_input_y = event.targetTouches ? event.targetTouches[0].pageY : event.pageY;
		u.e.transition(this, "none");
		if(typeof(this.picked) == "function") {
			this.picked();
		}
		u.e.resetEvents(this);
		u.e.addEvent(this, "mousemove", u.e._drag);
		u.e.addEvent(this, "touchmove", u.e._drag);
		u.e.addEvent(this, "mouseup", u.e._drop);
		u.e.addEvent(this, "touchend", u.e._drop);
		if(this.snapback) {
			u.e.addEvent(this, "mouseout", u.e._snapback);
		}
	}
	this._drag = function(event) {
	    u.e.kill(event);
		if(this.start_input_x && this.start_input_y) {
			this.new_move_timestamp = new Date().getTime();
			if(this.new_move_timestamp - this.move_timestamp > this.process_time) {
				var offset = false;
				var speed_ex, speed_ey, speed_mtm;
				this.current_x = event.targetTouches ? event.targetTouches[0].pageX : event.pageX;
				this.current_y = event.targetTouches ? event.targetTouches[0].pageY : event.pageY;
				speed_ex = this.element_x;
				speed_ey = this.element_y;
				speed_mtm = this.new_move_timestamp - this.move_timestamp;
				this.mtm_avg[this.mtm_avg.length] = speed_mtm;
				this.move_timestamp = this.new_move_timestamp;
				if(this.vertical) {
					this.element_y = this.current_y - this.start_input_y + this.offset_y;
				}
				else if(this.horisontal) {
					this.element_x = this.current_x - this.start_input_x + this.offset_x;
				}
				else {
					this.element_x = this.current_x - this.start_input_x + this.offset_x;
					this.element_y = this.current_y - this.start_input_y + this.offset_y;
				}
	 			if(!this.strict) {
					this.current_xps = Math.round(((this.element_x - speed_ex) / speed_mtm)*1000);
					this.current_yps = Math.round(((this.element_y - speed_ey) / speed_mtm)*1000);
				}
				if(u.e.overlap(this, new Array(this.start_drag_x, this.start_drag_y, this.end_drag_x, this.end_drag_y), true)) {
					if(this.current_xps && (Math.abs(this.current_xps) > Math.abs(this.current_yps) || this.horisontal)) {
						if(this.current_xps < 0) {
							this.swiped = "left";
						}
						else {
							this.swiped = "right";
						}
					}
					else if(this.current_yps && (Math.abs(this.current_xps) < Math.abs(this.current_yps) || this.vertical)) {
						if(this.current_yps < 0) {
							this.swiped = "up";
						}
						else {
							this.swiped = "down";
						}
					}
					u.e.transform(this, this.element_x, this.element_y);
				}
				else {
					this.swiped = false;
					this.current_xps = 0;
					this.current_yps = 0;
					if(this.element_x < this.start_drag_x) {
						offset = this.element_x < this.start_drag_x - this.allowed_offset ? - this.allowed_offset : this.element_x - this.start_drag_x;
						this.element_x = this.start_drag_x;
						this.current_x = this.element_x + offset + (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
					}
					else if(this.element_x + this.offsetWidth > this.end_drag_x) {
						offset = this.element_x + this.offsetWidth > this.end_drag_x + this.allowed_offset ? this.allowed_offset : this.element_x + this.offsetWidth - this.end_drag_x;
						this.element_x = this.end_drag_x - this.offsetWidth;
						this.current_x = this.element_x + offset - (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
					}
					else {
						this.current_x = this.element_x;
					}
					if(this.element_y < this.start_drag_y) {
						offset = this.element_y < this.start_drag_y - this.allowed_offset ? - this.allowed_offset : this.element_y - this.start_drag_y;
						this.element_y = this.start_drag_y;
						this.current_y = this.element_y + offset + (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
					}
					else if(this.element_y + this.offsetHeight > this.end_drag_y) {
						offset = (this.element_y + this.offsetHeight > this.end_drag_y + this.allowed_offset) ? this.allowed_offset : (this.element_y + this.offsetHeight - this.end_drag_y);
						this.element_y = this.end_drag_y - this.offsetHeight;
						this.current_y = this.element_y + offset - (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
					}
					else {
						this.current_y = this.element_y;
					}
					if(offset) {
						u.e.transform(this, this.current_x, this.current_y);
					}
				}
				if(typeof(this.moved) == "function") {
					this.moved();
				}
			}
		}
	}
	this._drop = function(event) {
	    u.e.kill(event);
		var sum = 0;
		for(var i = 0; i < this.mtm_avg.length; i++) {
			sum += this.mtm_avg[i];
		}
		u.e.resetEvents(this);
		if(this.swipe && this.swiped) {
			if(this.swiped == "left") {
				if(typeof(this.swipedLeft) == "function") {
					this.swipedLeft();
				}
			}
			else if(this.swiped == "right") {
				if(typeof(this.swipedRight) == "function") {
					this.swipedRight();
				}
			}
			else if(this.swiped == "down") {
				if(typeof(this.swipedDown) == "function") {
					this.swipedDown();
				}
			}
			else if(this.swiped == "up") {
				if(typeof(this.swipedUp) == "function") {
					this.swipedUp();
				}
			}
		}
		else if(this.start_input_x && this.start_input_y) {
			this.start_input_x = false;
			this.start_input_y = false;
			this.current_x = this.element_x + (this.current_xps/2);
			this.current_y = this.element_y + (this.current_yps/2);
			if(this.current_x < this.start_drag_x) {
				this.current_x = this.start_drag_x;
			}
			else if(this.current_x + this.offsetWidth > this.end_drag_x) {
				this.current_x = this.end_drag_x - this.offsetWidth;
			}
			if(this.current_y < this.start_drag_x) {
				this.current_y = this.start_drag_x;
			}
			else if(this.current_y + this.offsetHeight > this.end_drag_y) {
				this.current_y = this.end_drag_y - this.offsetHeight;
			}
			if(this.current_xps || this.current_yps) {
				u.e.transition(this, "all 1s ease-out");
				this.element_x = this.current_x;
				this.element_y = this.current_y;
			}
			else {
				u.e.transition(this, "all 0.1s ease-out");
			}
			u.e.transform(this, this.current_x, this.current_y);
			if(typeof(this.dropped) == "function") {
				this.dropped();
			}
		}
	}
	this.swipe = function(e, target, strict) {
		e.swipe = true;
		u.e.drag(e, target, strict);
	}
	this._swipe = function(event) {
	}
	this._snapback = function(event) {
	    u.e.kill(event);
		if(this.start_input_x && this.start_input_y) {
			input_x = event.targetTouches ? event.targetTouches[0].pageX : event.pageX;
			input_y = event.targetTouches ? event.targetTouches[0].pageY : event.pageY;
			offset_x = 0;
			offset_y = 0;
			if(this.vertical) {
				offset_y = input_y - this.current_y;
			}
			else if(this.horisontal) {
				offset_x = input_x - this.current_x;
			}
			else {
				offset_x = input_x - this.current_x;
				offset_y = input_y - this.current_y;
			}
			u.e.transform(this, (this.element_x+offset_x), (this.element_y+offset_y));
		}
	}
}
Util.Timer = u.t = new function() {
	// actions to be preformed on onTimeout
	this.actions = new Array();
	this.objects = new Array();
	this.timers = new Array();
	// Add new timer to object
	this.setTimer = function(object, action, timeout) {
		var id = this.actions.length;
		this.actions[id] = action;
		this.objects[id] = object;
		this.timers[id] = setTimeout("u.t.execute("+id+")", timeout);
		return id;
	}
	// Reset timer
	this.resetTimer = function(id) {
		clearTimeout(this.timers[id]);
		this.objects[id] = false;
	}
	// execute added function on onTimeout
	this.execute = function(id) {
		this.objects[id].exe = this.actions[id];
		this.objects[id].exe();
		this.objects[id].exe = null;
		this.actions[id] = null;
		this.objects[id] = false;
		this.timers[id] = null;
	}
	this.valid = function(id) {
		return this.objects[id] ? true : false;
	}
}
Util.Objects = new Array();
Util.initElements = function() {
	// iphone scroll chrome out of sight
	window.scrollTo(0, 0);
	var i, e, elements, ij_value;
	elements = u.ges("i\:([a-zA-Z0-9])+");
	for(i = 0; e = elements[i]; i++) {
		while(ij_value = u.getIJ(e, "i")) {
			u.removeClass(e, "i:"+ij_value);
			if(ij_value && typeof(u.Objects[ij_value]) == "object") {
				u.Objects[ij_value].init(e);
			}
		}
	}
	// enable mouse tracking
	// u.tracePointer();
}
window.onload = u.initElements;
Util.Objects["presentation"] = new function() {
	this.init = function(e) {
		e.display = u.ge("display");
		e.slides = u.ges("slide");
		e.w = (e.slides.length * e.display.offsetWidth);
		e.style.width = e.w + "px";
		e.h = e.display.offsetHeight;
		e.nav = u.ge("navigation")
		e.nav.index_label = u.ge("index", e.nav);
		e.nav.index_label.e = e;
		e.nav.index_label.clicked = function() {u.toggleClass(this.e.nav, "index");}
		u.e.click(e.nav.index_label);
		e.nav.reference_label = u.ge("references", e.nav);
		e.nav.reference_label.e = e;
		e.nav.reference_label.clicked = function() {u.toggleClass(u.ge("documentation"), "show");}
		u.e.click(e.nav.reference_label);
		e.sitemap = e.nav.appendChild(document.createElement("div"));
		e.nav.ul = e.nav.appendChild(document.createElement("ul"));
		for(var i = 0; slide = e.slides[i]; i++) {
			li = e.nav.ul.appendChild(document.createElement("li"));
			li.innerHTML = u.ge("h2", slide).innerHTML;
			if(e.nav.offsetHeight > 768) {
				li = e.nav.ul.removeChild(li, true);
				e.nav.ul = e.nav.appendChild(document.createElement("ul"));
				e.nav.ul.appendChild(li);
			}
			li.e = e;
			li.slide = slide;
			u.e.click(li);
			li.clicked = function() {
				u.e.transition(this.e, "all 1s ease-out");
				u.e.transform(this.e, -this.slide.offsetLeft, 0);
				u.toggleClass(this.e.nav, "index");
				current_slide = this.slide.offsetLeft/1024;

				submitSlideEnter(Math.abs(current_slide), u.ge("h1", u.ge("slides")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), false, false);
			}
			if(slide.offsetHeight > e.h) {
				slide.swipedUp = function() {
					current_popup = Math.floor(this.element_y/768);
					eta = Math.abs(Math.round(((this.element_y - (current_popup * 768)) / this.current_yps) * 10) / 10);
					eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
					u.e.transition(this, "all "+eta+"s ease-out");
					u.e.transform(this, 0, current_popup*768);
				}
				slide.swipedDown = function() {
					current_popup = Math.floor(this.element_y/768);
					eta = Math.abs(Math.round((((current_popup * 768) - this.element_y) / this.current_yps) * 10) / 10);
					eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
					u.e.transition(this, "all "+eta+"s ease-out");
					u.e.transform(this, 0, (current_popup+1)*768);
				}
			}
		}
		u.addClass(e.nav, "ready");
		e.swipedLeft = function() {
			current_slide = Math.floor(this.element_x/1024);
			eta = Math.abs(Math.round(((this.element_x - (current_slide * 1024)) / this.current_xps) * 10) / 10);
			eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
			u.e.transition(this, "all "+eta+"s ease-out");
			u.e.transform(this, current_slide*1024, 0);

			submitSlideEnter(Math.abs(current_slide), u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), false, false);
		}
		e.swipedRight = function() {
			current_slide = Math.floor(this.element_x/1024)+1;
			eta = Math.abs(Math.round((((current_slide * 1024) - this.element_x) / this.current_xps) * 10) / 10);
			eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
			u.e.transition(this, "all "+eta+"s ease-out");
			u.e.transform(this, current_slide*1024, 0);

			submitSlideEnter(Math.abs(current_slide), u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), false, false);
		}
		u.e.swipe(e, new Array(e.display.offsetWidth - e.w, 0, e.w, e.h));
	}
}
Util.Objects["docs"] = new function() {
	this.init = function(e) {
		e.close = e.appendChild(document.createElement("div"));
		e.close.className = "close";
		e.close.e = e;
		e.close.clicked = function() {
			u.toggleClass(u.ge("documentation"), "show");
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
Util.Objects["sanofiA1"] = new function() {
	this.init = function(e) {
		e.canvas = u.ge("canvas", e)
		e.canvas.e = e;
		e.bar_b = u.ge("bar_b", e)
		e.bar_b.e = e;
		e.canvas.clicked = function() {
			u.toggleClass(this.e.bar_b, "active");
		}
		u.e.click(e.canvas);
		e.bar_b.dropped = function() {
			submitCustomEvent("slider", u.ge("h1", this.e).innerHTML, this.element_x, "Number", null, null, null);
		}
		e.bar_b.moved = function() {
			if(this.element_x > 50 || this.element_x + this.current_xps > 50) {
				u.addClass(this.e, "show");
			}
			else {
				u.removeClass(this.e, "show");
			}
		}
		u.e.drag(e.bar_b, u.ge("bar_b_scope", e), true, true);
	}
}
Util.Objects["sanofiA2"] = new function() {
	this.init = function(e) {
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
				this.e.canvas.width = 300;
				this.e.canvas.height = 300;
			}
			var ctx = this.e.canvas.getContext("2d");
			var radius = Math.min(this.e.canvas.width, this.e.canvas.height) / 2;
			var center_x = this.e.canvas.width/2;
			var center_y = this.e.canvas.height/2;
			var total = 100;
			var current_value = progress / total;
			current_value = current_value == 0 ? 1 : current_value == 1 ? 0 : current_value;
			ctx.clearRect(0,0,300,300);
			ctx.beginPath();
			ctx.moveTo(center_x, center_y);
			ctx.arc(
				center_x,
				center_y,
				radius,
				Math.PI * (- 0.5 + 2),
				 Math.PI * (- 0.5 + 2 * current_value),
				false
			);
			ctx.lineTo(center_x, center_y);
			ctx.closePath();
			ctx.fillStyle = "#00457d";
			ctx.fill();
			this.current_value = current_value;
		}
		e.knob.dropped = function() {
			submitCustomEvent("slider", u.ge("h1", this.e).innerHTML, this.current_value, "Number", null, null, null);
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
		u.e.click(e.canvas);
		u.addClass(e.canvas, "active");
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
		e.overlap = function(element) {
			if(u.e.overlap(element, element.e.rank_a)) {
				u.e.transform(element, element.e.rank_a.element_x+10, element.e.rank_a.element_y+12);
				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"1:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "1:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_b)) {
				u.e.transform(element, element.e.rank_b.element_x+10, element.e.rank_b.element_y+12);
				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"2:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "2:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_c)) {
				u.e.transform(element, element.e.rank_c.element_x+10, element.e.rank_c.element_y+12);
				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"3:"+u.ge("h3", element).innerHTML)
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "3:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_d)) {
				u.e.transform(element, element.e.rank_d.element_x+10, element.e.rank_d.element_y+12);
				u.bug(1, "r:" + u.ge("h1", element.e).innerHTML +":"+"4:"+u.ge("h3", element).innerHTML)
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
		e.grey_button.clicked = function() {
			u.toggleClass(this.e, "grey_scale");
		}
		u.e.click(e.grey_button);
		e.blue_button.clicked = function() {
			u.toggleClass(this.e, "blue_scale");
		}
		u.e.click(e.blue_button);
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
		e.b_column.clicked = function() {
			u.toggleClass(this.e, "b_scale");
		}
		u.e.click(e.b_column);
		e.a_column.clicked = function() {
			u.toggleClass(this.e, "a_scale");
		}
		u.e.click(e.a_column);
		e.c_column.clicked = function() {
			u.toggleClass(this.e, "c_scale");
		}
		u.e.click(e.c_column);
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
