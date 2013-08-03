
/*u.js*/
var u, Util = u = new function() {}
u.version = 0.4;

/*u-debug.js*/
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
		var option, options = new Array(new Array(0, "auto", "auto", 0), new Array(0, 0, "auto", "auto"), new Array("auto", 0, 0, "auto"), new Array("auto", "auto", 0, 0));
		if(!message) {
			message = target;
			target = options[0];
		}
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

/*u-dom.js*/
Util.ge = function(id, target) {
	var e, i, regexp, t;
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
	var e, i, regexp, t;
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
Util.gs = function(e, direction) {
	try {
		var node_type = e.nodeType;
		var ready = false;
		var prev_node = false
		for(var i = 0; node = e.parentNode.childNodes[i]; i++) {
			if(node.nodeType == node_type) {
				if(ready) {
					return node;
				}
				if(node == e) {
					if(direction == "next") {
						ready = true;
					}
					else {
						return prev_node;
					}
				}
				else {
					prev_node = node;
				}
			}
		}
		return false;
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.gs, called from: "+arguments.callee.caller);
	}
}
Util.qs = function(query, target) {
	t = target ? target : document;
	return t.querySelector(query);
}
Util.qsa = function(query, target) {
	t = target ? target : document;
	return t.querySelectorAll(query);
}
Util.previousSibling = u.ps = function(e, exclude) {
	var node = e.previousSibling;
	if(exclude) {
		while(node && (node.nodeType == 3 || node.className.match("(^|\\s)" + exclude + "(\\s|$)") || node.nodeName.match(exclude.toUpperCase()))) {
			node = node.previousSibling;
		}
	}
	else {
		while(node && node.nodeType == 3) {
			node = node.previousSibling;
		}
	}
	return node;
}
Util.nextSibling = u.ns = function(e, exclude) {
	var node = e.nextSibling;
	if(exclude) {
		while(node && (node.nodeType == 3 || node.className.match("(^|\\s)" + exclude + "(\\s|$)") || node.nodeName.match(exclude.toUpperCase()))) {
			node = node.nextSibling;
		}
	}
	else {
		while(node && node.nodeType == 3) {
			node = node.nextSibling;
		}
	}
	return node;
}
Util.ae = function(e, node_type, attributes) {
	try {
		var node = e.appendChild(document.createElement(node_type));
		if(attributes) {
			if(typeof(attributes) == "object") {
				for(attribute in attributes) {
					node.setAttribute(attribute, attributes[attribute]);
				}
			}
			else {
				u.addClass(node, attributes)
			}
		}
		node.e = e;
		return node;
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.ae, called from: "+arguments.callee.caller.name);
	}
}
Util.ie = function(e, node_type, attributes) {
	var node = e.insertBefore(document.createElement(node_type), e.firstChild);
	if(attributes) {
		if(typeof(attributes) == "object") {
			for(attribute in attributes) {
				node.setAttribute(attribute, attributes[attribute]);
			}
		}
		else {
			u.addClass(node, attributes)
		}
	}
	node.e = e;
	return node;
}
Util.getIJ = function(e, id) {
	try {
		var regexp = new RegExp(id + ":[?=\\w/\\#~:.?+=?&%@!\\-]*");
		if(e.className.match(regexp)) {
			return e.className.match(regexp)[0].replace(id + ":", "");
		}
		return false;
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.removeClass, called from: "+arguments.callee.caller);
	}
}
Util.setClass = u.sc = function(e, classname) {
	try {
		e.className = classname;
		e.offsetTop;
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.removeClass, called from: "+arguments.callee.caller);
	}
}
Util.addClass = u.ac = function(e, classname) {
	try {
		if(classname) {
			var regexp = new RegExp("(^|\\s)" + classname + "(\\s|$|\:)");
			if(!regexp.test(e.className)) {
				e.className += e.className ? " " + classname : classname;
				e.offsetTop;
			}
		}
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.addClass, called from: "+arguments.callee.caller);
	}
}
Util.removeClass = u.rc = function(e, classname) {
	try {
		if(classname) {
			var regexp = new RegExp(classname + " | " + classname + "|" + classname);
			e.className = e.className.replace(regexp, "");
			e.offsetTop;
		}
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.removeClass, called from: "+arguments.callee.caller);
	}
}
Util.toggleClass = u.tc = function(e, classname, second_classname) {
	try {
		var regexp = new RegExp("(^|\\s)" + classname + "(\\s|$|\:)");
		if(regexp.test(e.className)) {
			Util.removeClass(e, classname);
			if(second_classname) {
				Util.addClass(e, second_classname);
			}
		}
		else {
			Util.addClass(e, classname);
			if(second_classname) {
				Util.removeClass(e, second_classname);
			}
		}
		e.offsetTop;
	}
	catch(exception) {
		u.bug("Exception ("+exception+") in u.removeClass, called from: "+arguments.callee.caller);
	}
}
Util.applyStyle = u.as = function(e, style, value) {
	e.style[style] = value;
	e.offsetHeight;
}
Util.getComputedStyle = u.gcs = function(e, attribute) {
	e.offsetHeight;
	if(document.defaultView && document.defaultView.getComputedStyle) {
		return document.defaultView.getComputedStyle(e, null).getPropertyValue(attribute);
	}
	return false;
}
Util.wrapElement = u.we = function(e, wrap) {
	wrap = e.parentNode.insertBefore(document.createElement(wrap), e);
	wrap.appendChild(e);
	return wrap;
}

/*u-position.js*/
Util.absoluteX = u.absX = function(e) {
	if(e.offsetParent) {
		return e.offsetLeft + u.absX(e.offsetParent);
	}
	return e.offsetLeft;
}
Util.absoluteY = u.absY = function(e) {
	if(e.offsetParent) {
		return e.offsetTop + u.absY(e.offsetParent);
	}
	return e.offsetTop;
}
Util.relativeOffsetX = u.relOffsetX = function(e) {
	if(e.offsetParent && u.gcs(e.offsetParent, "position").match(/relative|absoute/) != null) {
		return u.absX(e.offsetParent); // - e.offsetLeft u.relOffsetX(e.offsetParent);
	}
	return 0; //u.absX(e) - e.offsetLeft;
}
Util.relativeOffsetY = u.relOffsetY = function(e) {
	if(e.offsetParent && u.gcs(e.offsetParent, "position").match(/relative|absoute/) != null) {
		return u.absY(e.offsetParent);
	}
	return 0; // u.absY(e) - e.offsetTop;
}
Util.actualWidth = function(e) {
	return parseInt(u.gcs(e, "width"));
}
Util.actualHeight = function(e) {
	return parseInt(u.gcs(e, "height"));
}
Util.eventX = function(event){
	return (event.targetTouches ? event.targetTouches[0].pageX : event.pageX);
}
Util.eventY = function(event){
	return (event.targetTouches ? event.targetTouches[0].pageY : event.pageY);
}
Util.browserWidth = u.browserW = function() {
	return document.documentElement.clientWidth;
}
Util.browserHeight = u.browserH = function() {
	return document.documentElement.clientHeight;
}
Util.htmlWidth = u.htmlW = function() {
	return document.documentElement.offsetWidth;
}
Util.htmlHeight = u.htmlH = function() {
	return document.documentElement.offsetHeight;
}
Util.pageScrollX = u.scrollX = function() {
	return window.pageXOffset;
}
Util.pageScrollY = u.scrollY = function() {
	return window.pageYOffset;
}

/*u-events.js*/
Util.Events = u.e = new function() {
	this.event_pref = typeof(document.ontouchmove) == "undefined" ? "mouse" : "touch";
	this.kill = function(event) {
		if(event) {
			event.preventDefault();
			event.stopPropagation();
		}
	}
	this.addEvent = function(e, type, action) {
		try {
			e.addEventListener(type, action, false);
		}
		catch(exception) {
			if(document.all) {
				u.bug("exception:" + e + "," + type + ":" + exception);
			}
			else {
				u.bug("exception:" + e + "," + type + ":" + exception);
			}
		}
	}
	this.removeEvent = function(e, type, action) {
		try {
			e.removeEventListener(type, action, false);
		}
		catch(exception) {
		}
	}
	this.onStart = this.onDown = function(e, action) {
		u.e.addEvent(e, (this.event_pref == "touch" ? "touchstart" : "mousedown"), action);
	}
	this.removeOnStart = this.removeOnDown = function(e, action) {
		u.e.addEvent(e, (this.event_pref == "touch" ? "touchstart" : "mousedown"), action);
	}
	this.onMove = function(e, action) {
		u.e.addEvent(e, (this.event_pref == "touch" ? "touchmove" : "mousemove"), action);
	}
	this.onEnd = this.onUp = function(e, action) {
		u.e.addEvent(e, (this.event_pref == "touch" ? "touchend" : "mouseup"), action);
		if(e.snapback && u.e.event_pref == "mouse") {
			u.e.addEvent(e, "mouseout", this._snapback);
		}
		else if(e.drag && u.e.event_pref == "mouse") {
		}
	}
	this.transform = function(e, x, y) {
		if(typeof(e.style.MozTransition) != "undefined" || typeof(e.style.webkitTransition) != "undefined") {
			e.style.MozTransform = "translate("+x+"px, "+y+"px)";
			e.style.webkitTransform = "translate3d("+x+"px, "+y+"px, 0)";
			e.element_x = x;
			e.element_y = y;
		}
		else {
			e.style.position = "absolute";
			u.bug("duration:" + e.duration);
			if(!e.duration) {
				e.style.left = x+"px";
				e.style.top = y+"px";
				e.element_x = x;
				e.element_y = y;
			}
			else {
				e.transitions = 15;
				e.transition_progress = 0;
				e.element_x = e.element_x ? e.element_x : 0;
				e.element_y = e.element_y ? e.element_y : 0;
				e.transitionTo = function() {
						++this.transition_progress;
						this.style.left =  this.end_x-(this.distance_x - (this.interval_x*this.transition_progress))+"px";
						this.style.top =  this.end_y-this.distance_y - this.interval_y*this.transition_progress+"px";
						this.element_x = this.end_x-(this.distance_x - (this.interval_x*this.transition_progress));
						this.element_y = this.end_y-(this.distance_y - (this.interval_y*this.transition_progress));
				}
				e.end_x = x;
				e.end_y = y;
				if(e.end_x > e.element_x) {
					if(e.end_x > 0 && e.element_x >= 0 || e.end_x >= 0 && e.element_x < 0) {
						e.distance_x = e.end_x - e.element_x;
					}
					else {
						e.distance_x = e.element_x - e.end_x;
					}
				}
				else if(e.end_x < e.element_x) {
					if(e.end_x <= 0 && e.element_x > 0 || e.end_x < 0 && e.element_x <= 0) {
						e.distance_x = e.end_x - e.element_x;
					}
					else {
						e.distance_x = e.element_x - e.end_x;
					}
				}
				else {
					e.distance_x = 0;
				}
				if(e.end_y > e.element_y) {
					if(e.end_y > 0 && e.element_y >= 0 || e.end_y >= 0 && e.element_y < 0) {
						e.distance_y = e.end_y - e.element_y;
					}
					else {
						e.distance_y = e.element_y - e.end_y;
					}
				}
				else if(e.end_y < e.element_y) {
					if(e.end_y <= 0 && e.element_y > 0 || e.end_y < 0 && e.element_y <= 0) {
						e.distance_y = e.end_y - e.element_y;
					}
					else {
						e.distance_y = e.element_y - e.end_y;
					}
				}
				else {
					e.distance_y = 0;
				}
				e.interval_x = e.distance_x/e.transitions;
				e.interval_y = e.distance_y/e.transitions;
				for(var i = 0; i < e.transitions; i++) {
					u.t.setTimer(e, e.transitionTo, (e.duration/e.transitions)*i);
				}
				if(typeof(e.transitioned) == "function") {
					u.t.setTimer(e, e.transitioned, e.duration);
				}
			}
		}
	}
	this.transition = function(e, transition) {
		if(typeof(e.style.MozTransition) != "undefined" || typeof(e.style.webkitTransition) != "undefined") {
			e.style.MozTransition = transition;
			e.style.webkitTransition = transition;
			if(typeof(e.transitioned) == "function") {
				this.onTransitionEnd(e, e.transitioned);
			}
		}
		else {
			var duration = transition.match(/[0-9.]+[ms]/g) ? transition.match(/[0-9.]+[ms]/g).toString() : false;
			e.duration = duration ? (duration.match("ms") ? parseFloat(duration) : parseFloat(duration) * 1000) : false;
		}
	}
	this.overlap = function(element, target, strict) {
		if(target.constructor.toString().match("Array")) {
			var target_start_x = Number(target[0]);
			var target_start_y = Number(target[1]);
			var target_end_x = Number(target[2]);
			var target_end_y = Number(target[3]);
		}
		else {
			var target_start_x = target.element_x ? target.element_x : 0;
			var target_start_y = target.element_y ? target.element_y : 0;
			var target_end_x = Number(target_start_x + target.offsetWidth);
			var target_end_y = Number(target_start_y + target.offsetHeight);
		}
		var element_start_x = Number(element.element_x);
		var element_start_y = Number(element.element_y);
		var element_end_x = Number(element_start_x + element.offsetWidth);
		var element_end_y = Number(element_start_y + element.offsetHeight);
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
		u.t.resetTimer(e.t_held);
		u.t.resetTimer(e.t_clicked);
		this.removeEvent(e, "mouseup", this._dblclicked);
		this.removeEvent(e, "touchend", this._dblclicked);
		this.removeEvent(e, "mousemove", this._inputClickMove);
		this.removeEvent(e, "touchmove", this._inputClickMove);
		this.removeEvent(e, "mousemove", this._pick);
		this.removeEvent(e, "touchmove", this._pick);
		this.removeEvent(e, "mousemove", this._drag);
		this.removeEvent(e, "touchmove", this._drag);
		this.removeEvent(e, "mouseup", this._drop);
		this.removeEvent(e, "touchend", this._drop);
		this.removeEvent(e, "mouseout", this._snapback);
		this.removeEvent(e, "mouseout", this._drop);
	}
	this._inputStart = function(event) {
		this.event_var = event;
		this.input_timestamp = new Date().getTime();
		this.current_xps = 0;
		this.current_yps = 0;
		this.swiped = false;
		if(this.e_click || this.e_dblclick || this.e_hold) {
			u.e.onMove(this, u.e._inputClickMove);
			u.e.onEnd(this, u.e._dblclicked);
		}
		if(this.e_hold) {
			this.t_held = u.t.setTimer(this, u.e._held, 750);
		}
		if(this.e_drag || this.e_swipe) {
			u.e.onMove(this, u.e._pick);
			u.e.onEnd(this, u.e._drop);
		}
		if(typeof(this.inputStarted) == "function") {
			this.inputStarted(event);
		}
	}
	this._inputClickMove = function(event) {
		u.e.resetEvents(this);
		if(typeof(this.clickMoved) == "function") {
			this.clickMoved(event);
		}
		if(typeof(this.moved) == "function") {
			this.moved(event);
		}
	}
	this.hold = function(e) {
		e.e_hold = true;
		u.e.onStart(e, this._inputStart);
	}
	this._held = function(event) {
		u.e.resetEvents(this);
		if(typeof(this.held) == "function") {
			this.held(event);
		}
	}
	this.click = this.tap = function(e) {
		e.e_click = true;
		u.e.onStart(e, this._inputStart);
	}
	this._clicked = function(event) {
		u.e.resetEvents(this);
		if(typeof(this.clicked) == "function") {
			this.clicked(event);
		}
	}
	this.dblclick = this.doubletap = function(e) {
		e.e_dblclick = true;
		u.e.onStart(e, this._inputStart);
	}
	this._dblclicked = function(event) {
		if(u.t.valid(this.t_clicked) && event) {
			u.e.resetEvents(this);
			if(typeof(this.dblclicked) == "function") {
				this.dblclicked(event);
			}
			return;
		}
		else if(!this.e_dblclick) {
			this._clicked = u.e._clicked;
			this._clicked(event);
		}
		else if(!event) {
			this._clicked = u.e._clicked;
			this._clicked(this.event_var);
		}
		else {
			u.e.resetEvents(this);
			this.t_clicked = u.t.setTimer(this, u.e._dblclicked, 400);
		}
	}
	this.drag = function(e, target, strict, snapback) {
		e.e_drag = true;
		e.strict = strict ? true : false;
		e.allowed_offset = e.strict ? 0 : 250;
		e.elastica = 2;
		e.snapback = snapback ? true : false;
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
		e.element_x = e.element_x ? e.element_x : 0;
		e.element_y = e.element_y ? e.element_y : 0;
		e.locked = ((e.end_drag_x - e.start_drag_x == e.offsetWidth) && (e.end_drag_y - e.start_drag_y == e.offsetHeight));
		e.vertical = (!e.locked && e.end_drag_x - e.start_drag_x == e.offsetWidth);
		e.horisontal = (!e.locked && e.end_drag_y - e.start_drag_y == e.offsetHeight);
		u.e.onStart(e, this._inputStart);
	}
	this._pick = function(event) {
	    u.e.kill(event);
		this.move_timestamp = new Date().getTime();
		this.current_xps = 0;
		this.current_yps = 0;
		this.start_input_x = u.eventX(event) - this.element_x; // - u.absLeft(this);//(event.targetTouches ? event.targetTouches[0].pageX : event.pageX);
		this.start_input_y = u.eventY(event) - this.element_y; // - u.absTop(this);//.targetTouches ? event.targetTouches[0].pageY : event.pageY);
		u.e.transition(this, "none");
		if(typeof(this.picked) == "function") {
			this.picked(event);
		}
		u.e.resetEvents(this);
		u.e.onMove(this, u.e._drag);
		u.e.onEnd(this, u.e._drop);
	}
	this._drag = function(event) {
			this.new_move_timestamp = new Date().getTime();
				var offset = false;
				this.current_x = u.eventX(event) - this.start_input_x;
				this.current_y = u.eventY(event) - this.start_input_y;
					this.current_xps = Math.round(((this.current_x - this.element_x) / (this.new_move_timestamp - this.move_timestamp)) * 1000);
					this.current_yps = Math.round(((this.current_y - this.element_y) / (this.new_move_timestamp - this.move_timestamp)) * 1000);
				this.move_timestamp = this.new_move_timestamp;
				if(this.vertical) {
					this.element_y = this.current_y;
				}
				else if(this.horisontal) {
					this.element_x = this.current_x;
				}
				else if(!this.locked) {
					this.element_x = this.current_x;
					this.element_y = this.current_y;
				}
				if(!this.locked) {
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
						u.a.translate(this, this.element_x, this.element_y);
					}
					else {
						this.swiped = false;
						this.current_xps = 0;
						this.current_yps = 0;
						if(this.element_x < this.start_drag_x && !this.vertical) {
							offset = this.element_x < this.start_drag_x - this.allowed_offset ? - this.allowed_offset : this.element_x - this.start_drag_x;
							this.element_x = this.start_drag_x;
							this.current_x = this.element_x + offset + (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
						}
						else if(this.element_x + this.offsetWidth > this.end_drag_x && !this.vertical) {
							offset = this.element_x + this.offsetWidth > this.end_drag_x + this.allowed_offset ? this.allowed_offset : this.element_x + this.offsetWidth - this.end_drag_x;
							this.element_x = this.end_drag_x - this.offsetWidth;
							this.current_x = this.element_x + offset - (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
						}
						else {
							this.current_x = this.element_x;
						}
						if(this.element_y < this.start_drag_y && !this.horisontal) {
							offset = this.element_y < this.start_drag_y - this.allowed_offset ? - this.allowed_offset : this.element_y - this.start_drag_y;
							this.element_y = this.start_drag_y;
							this.current_y = this.element_y + offset + (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
						}
						else if(this.element_y + this.offsetHeight > this.end_drag_y && !this.horisontal) {
							offset = (this.element_y + this.offsetHeight > this.end_drag_y + this.allowed_offset) ? this.allowed_offset : (this.element_y + this.offsetHeight - this.end_drag_y);
							this.element_y = this.end_drag_y - this.offsetHeight;
							this.current_y = this.element_y + offset - (Math.round(Math.pow(offset, 2)/this.allowed_offset)/this.elastica);
						}
						else {
							this.current_y = this.element_y;
						}
						if(offset) {
							u.a.translate(this, this.current_x, this.current_y);
						}
					}
				}
			if(typeof(this.moved) == "function") {
				this.moved(event);
			}
	}
	this._drop = function(event) {
		u.e.resetEvents(this);
		if(this.e_swipe && this.swiped) {
			if(this.swiped == "left") {
				if(typeof(this.swipedLeft) == "function") {
					this.swipedLeft(event);
				}
			}
			else if(this.swiped == "right") {
				if(typeof(this.swipedRight) == "function") {
					this.swipedRight(event);
				}
			}
			else if(this.swiped == "down") {
				if(typeof(this.swipedDown) == "function") {
					this.swipedDown(event);
				}
			}
			else if(this.swiped == "up") {
				if(typeof(this.swipedUp) == "function") {
					this.swipedUp(event);
				}
			}
		}
		else if(!this.locked && this.start_input_x && this.start_input_y) {
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
			if(this.current_y < this.start_drag_y) {
				this.current_y = this.start_drag_y;
			}
			else if(this.current_y + this.offsetHeight > this.end_drag_y) {
				this.current_y = this.end_drag_y - this.offsetHeight;
			}
			if(!this.strict && (this.current_xps || this.current_yps)) {
				u.a.transition(this, "all 1s cubic-bezier(0,0,0.25,1)");
			}
			else {
				u.a.transition(this, "all 0.1s cubic-bezier(0,0,0.25,1)");
			}
			u.a.translate(this, this.current_x, this.current_y);
		}
		if(typeof(this.dropped) == "function") {
			this.dropped(event);
		}
	}
	this.swipe = function(e, target, strict) {
		e.e_swipe = true;
		u.e.drag(e, target, strict);
	}
	this._swipe = function(event) {
	}
	this._snapback = function(event) {
	    u.e.kill(event);
		u.bug(2, "snap")
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

/*u-animation.js*/
Util.Animation = u.a = new function() {
	this.variant = function(e) {
		if(this.implementation == undefined) {
			if(document.body.style.webkitTransition != undefined) {
				this.implementation = "webkit";
			}
			else if(document.body.style.MozTransition != undefined) {
				this.implementation = "Moz";
			}
			else if(document.body.style.oTransition != undefined) {
				this.implementation = "o";
			}
			else {
				this.implementation = "";
			}
		}
		return this.implementation;
	}
	this.translate = function(e, x, y) {
		e.style[this.variant() + "Transform"] = "translate("+x+"px, "+y+"px)";
		e.element_x = x;
		e.element_y = y;
		e.transition_timestamp = new Date().getTime();
		e.offsetHeight;
	}
	this.rotate = function(e, deg) {
		e.style[this.variant() + "Transform"] = "rotate("+deg+"deg)";
		e.rotation = deg;
		e.transition_timestamp = new Date().getTime();
		e.offsetHeight;
	}
	this.scale = function(e, scale) {
		e.style[this.variant() + "Transform"] = "scale("+scale+")";
		e.scale = scale;
		e.transition_timestamp = new Date().getTime();
		e.offsetHeight;
	}
	this.rotateTranslate = function(e, deg, x, y) {
		e.style[this.variant() + "Transform"] = "rotate("+deg+"deg) translate("+x+"px, "+y+"px)";
		e.rotation = deg;
		e.element_x = x;
		e.element_y = y;
		e.transition_timestamp = new Date().getTime();
		e.offsetHeight;
	}
	this.translateRotate = function(e, x, y, deg) {
		e.style[this.variant() + "Transform"] = "translate("+x+"px, "+y+"px) rotate("+deg+"deg)";
		e.element_x = x;
		e.element_y = y;
		e.rotation = deg;
		e.transition_timestamp = new Date().getTime();
		e.offsetHeight;
	}
	this.transition = function(e, transition) {
		e.style[this.variant() + "Transition"] = transition;
		u.e.addEvent(e, this.variant() + "TransitionEnd", this._transitioned);
		u.e.addEvent(e, "transitionend", u.a._transitioned);
		var duration = transition.match(/[0-9.]+[ms]/g);
		if(duration) {
			var d = duration[0];
			e.duration = d.match("ms") ? parseFloat(d) : (parseFloat(d) * 1000);
		}
		else {
			e.duration = false;
		}
	}
	this._transitioned = function(event) {
		if(event.target == this && typeof(this.transitioned) == "function") {
			this.transitioned(event);
		}
	}
	this.fadeIn = function(e, duration) {
		duration = duration == undefined ? "0.5s" : duration;
		u.as(e, "opacity", 0);
		if(u.gcs(e, "display") == "none") {
			u.as(e, "display", "block");
		}
		u.a.transition(e, "all "+duration+" ease-in");
		u.as(e, "opacity", 1);
	}
}

/*u-timer.js*/
Util.Timer = u.t = new function() {
	this.actions = new Array();
	this.objects = new Array();
	this.timers = new Array();
	this.setTimer = function(object, action, timeout) {
		var id = this.actions.length;
		this.actions[id] = action;
		this.objects[id] = object;
		this.timers[id] = setTimeout("u.t.execute("+id+")", timeout);
		return id;
	}
	this.resetTimer = function(id) {
		clearTimeout(this.timers[id]);
		this.objects[id] = false;
	}
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

/*u-init.js*/
Util.Objects = u.o = new Array();
Util.init = function() {
	var i, e, elements, ij_value;
	elements = u.ges("i\:([_a-zA-Z0-9])+");
	for(i = 0; e = elements[i]; i++) {
		while((ij_value = u.getIJ(e, "i"))) {
			u.removeClass(e, "i:"+ij_value);
			if(ij_value && typeof(u.o[ij_value]) == "object") {
				u.o[ij_value].init(e);
			}
		}
	}
}
window.onload = u.init;

/*i-presentation.js*/
if(typeof(submitSlideEnter) != "function") {
	submitSlideEnter = submitCustomEvent = function() {}
}
if(typeof(openPDF) != "function") {
	openPDF = function() {alert("PDF viewer not included in this project")}
}
Util.Objects["presentation"] = new function() {
	this.init = function(e) {
		submitSlideEnter(0, "0:"+u.ge("h1", u.ge("slides")[0]).innerHTML, 0, document.title, false);
		e.display = u.ge("display");
		e.slides = u.ges("slide");
		u.e.drag(e.display, e.display, true);
		e.w = (e.slides.length * e.display.offsetWidth);
		e.style.width = e.w + "px";
		e.h = e.display.offsetHeight;
		e.nav = u.ge("navigation")
		e.nav.home_label = u.ge("home", e.nav);
		if(e.nav.home_label) {
			e.nav.home_label.e = e;
			e.nav.home_label.clicked = function() {location.href = "../selector.php";}
			u.e.click(e.nav.home_label);
		}
		e.nav.index_label = u.ge("index", e.nav);
		if(e.nav.index_label) {
			e.nav.index_label.e = e;
			e.nav.index_label.clicked = function() {u.toggleClass(this.e.nav, "index");}
			u.e.click(e.nav.index_label);
		}
		e.nav.reference_label = u.ge("references", e.nav);
		if(e.nav.reference_label) {
			e.nav.reference_label.e = e;
			e.nav.reference_label.clicked = function() {u.toggleClass(document.body, "docs");}
			u.e.click(e.nav.reference_label);
		}
		if(e.nav.index_label) {
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
					submitSlideEnter(Math.abs(current_slide), Math.abs(current_slide)+":"+u.ge("h1", u.ge("slides")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), document.title, false);
				}
				if(slide.offsetHeight > e.h) {
				}
			}
			u.addClass(e.nav, "ready");
		}
		e.swipedLeft = function() {
			current_slide = Math.floor(this.element_x/1024);
			eta = Math.abs(Math.round(((this.element_x - (current_slide * 1024)) / this.current_xps) * 10) / 10);
			eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
			u.e.transition(this, "all "+eta+"s ease-out");
			u.e.transform(this, current_slide*1024, 0);
			submitSlideEnter(Math.abs(current_slide), Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), document.title, false);
		}
		e.swipedRight = function() {
			current_slide = Math.floor(this.element_x/1024)+1;
			eta = Math.abs(Math.round((((current_slide * 1024) - this.element_x) / this.current_xps) * 10) / 10);
			eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
			u.e.transition(this, "all "+eta+"s ease-out");
			u.e.transform(this, current_slide*1024, 0);
			submitSlideEnter(Math.abs(current_slide), Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), document.title, false);
		}
		u.e.swipe(e, new Array(e.display.offsetWidth - e.w, 0, e.w, e.h));
		u.addClass(e, "ready");
	}
}

/*i-docs.js*/
Util.Objects["docs"] = new function() {
	this.init = function(e) {
		e.close = e.appendChild(document.createElement("div"));
		e.close.className = "close";
		e.close.e = e;
		e.close.clicked = function() {
			u.toggleClass(document.body, "docs");
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

/*i-content.js*/
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
			submitCustomEvent("Wann", this.e.id + ":" + u.ge("h1", this.e).innerHTML, this.element_x, "Number", null, null, null);
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
				this.e.canvas.width = 300;
				this.e.canvas.height = 300;
			}
			var ctx = this.e.canvas.getContext("2d");
			var radius = Math.min(this.e.canvas.width, this.e.canvas.height) / 2;
			var center_x = this.e.canvas.width/2;
			var center_y = this.e.canvas.height/2;
			var total = 100;
			var current_value = progress / total;
			e.current_value;
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
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "1:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_b)) {
				u.e.transform(element, element.e.rank_b.element_x+10, element.e.rank_b.element_y+12);
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "2:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_c)) {
				u.e.transform(element, element.e.rank_c.element_x+10, element.e.rank_c.element_y+12);
				submitCustomEvent("rank", u.ge("h1", element.e).innerHTML, "3:"+u.ge("h3", element).innerHTML, "String", null, null, null);
			}
			if(u.e.overlap(element, element.e.rank_d)) {
				u.e.transform(element, element.e.rank_d.element_x+10, element.e.rank_d.element_y+12);
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

/*i-desktop.js*/
Util.Objects["validdevice"] = new function() {
	this.init = function(e) {
		var wrapper = document.createElement("div");
		wrapper.className = "desktop_wrapper";
		var mask = document.createElement("div");
		mask.className = "desktop_mask";
		while(child = e.childNodes[0]) {
			mask.appendChild(child);
		}
		wrapper.appendChild(mask);
		e.appendChild(wrapper);
		var warning_displayed = u.getCookie("warning");
		if(!warning_displayed) {
			var warning = u.ae(e, "div", "warning");
			warning.innerHTML = "<h1>Warning</h1><p>This site is designed for touch interaction - using a pointer such as a mouse or trackpad might have unitented side effects. Move the mouse slowly when dragging to minimize errors.</p><p>Click to continue.</p>"
			u.e.click(warning);
			warning.clicked = function(event) {
				this.parentNode.removeChild(this);
				u.saveCookie("warning", "true");
			}
		}
	}
}

/*u-cookie.js*/
Util.saveCookie = function(name, value) {
	document.cookie = name + "=" + value +";"
}
Util.getCookie = function(name) {
	var matches;
	return (matches = document.cookie.match(name + "=([^;]+)")) ? matches[1] : false;
}
Util.delCookie = function(name) {
	document.cookie = name + "=;expires=Thu, 01-Jan-70 00:00:01 GMT";
}
