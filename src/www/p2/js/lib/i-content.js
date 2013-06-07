Util.Objects["sanofiA4"] = new function() {
	this.init = function(e) {
		e.canvas = u.ge("canvas", e)
		e.canvas.e = e;

		e.blue_button = u.ge("blue_button", e)
		e.blue_button.e = e;
		e.grey_button = u.ge("grey_button", e)
		e.grey_button.e = e;

		e.grey_button.clicked = function(event) {
			u.toggleClass(this.e, "grey_scale");
			u.e.kill(event);
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

Util.Objects["sanofiB1"] = new function() {
	this.init = function(e) {
		var dvideo_a = u.ge("dvideo_a", e);
		dvideo_a.e = e;
		u.e.click(dvideo_a);
		dvideo_a.clicked = function() {
			if(u.ge("canvas", this.e).className.match(/video_b/i)) {
				var o_video = u.ge("dvideo_b", this.e);
				u.removeClass(u.ge("canvas", this.e), "video_b");
				o_video.removeChild(o_video.firstChild);
			}
			if(u.ge("canvas", this.e).className.match(/video_a/i)) {
				u.removeClass(u.ge("canvas", this.e), "video_a");
				this.removeChild(this.firstChild);
			}
			else {
				var video = document.createElement("video");
				video.controls = true;
				video.src = "video/seq_a.mp4";
				video = this.appendChild(video);
				u.addClass(u.ge("canvas", this.e), "video_a");
				video.load();
				video.play();
			}
		}

		var dvideo_b = u.ge("dvideo_b", e);
		dvideo_b.e = e;
		u.e.click(dvideo_b);
		dvideo_b.clicked = function() {
			if(u.ge("canvas", this.e).className.match(/video_a/i)) {
				var o_video = u.ge("dvideo_a", this.e);
				u.removeClass(u.ge("canvas", this.e), "video_a");
				o_video.removeChild(o_video.firstChild);
			}
			if(u.ge("canvas", this.e).className.match(/video_b/i)) {
				u.removeClass(u.ge("canvas", this.e), "video_b");
				this.removeChild(this.firstChild);
			}
			else {
				var video = document.createElement("video");
				video.controls = true;
				video.src = "video/seq_b.mp4";
				video = u.ge("dvideo_b", this.e).appendChild(video);
				u.addClass(u.ge("canvas", this.e), "video_b");
				video.load();
				video.play();
			}
		}

	}
}
Util.Objects["sanofiB3"] = new function() {
	this.init = function(e) {
		e.canvas = u.ge("canvas", e)
		e.canvas.e = e;
		e.canvas.clicked = function() {
			u.toggleClass(this.e, "graph");
		}
		u.e.click(e.canvas);
	}
}
Util.Objects["sanofiB9"] = new function() {
	this.init = function(e) {
		e.top_pop = u.ge("top_pop", e)
		e.top_pop.e = e;
		e.top_pop.clicked = function() {
			u.toggleClass(this.e, "top_pop");
		}
		u.e.click(e.top_pop);
		
		e.pop_area_top = u.ge("pop_area_top", e)
		e.pop_area_top.e = e;
		e.pop_area_top.clicked = function() {
			u.toggleClass(this.e, "top_pop");
		}
		u.e.click(e.pop_area_top);
		
		e.bottom_pop = u.ge("bottom_pop", e)
		e.bottom_pop.e = e;
		e.bottom_pop.clicked = function() {
			u.toggleClass(this.e, "bottom_pop");
		}
		u.e.click(e.bottom_pop);
		
		e.pop_area_bottom = u.ge("pop_area_bottom", e)
		e.pop_area_bottom.e = e;
		e.pop_area_bottom.clicked = function() {
			u.toggleClass(this.e, "bottom_pop");
		}
		u.e.click(e.pop_area_bottom);

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
		
		e.line8 = u.ge("line8", e)
		e.line8.e = e;
		e.line8.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line8);
	}
}
Util.Objects["sanofiB10"] = new function() {
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
		
		e.line8 = u.ge("line8", e)
		e.line8.e = e;
		e.line8.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line8);

		e.line9 = u.ge("line9", e)
		e.line9.e = e;
		e.line9.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line9);
		
		e.line10 = u.ge("line10", e)
		e.line10.e = e;
		e.line10.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line10);

		e.line11 = u.ge("line11", e)
		e.line11.e = e;
		e.line11.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line11);
		
		e.line12 = u.ge("line12", e)
		e.line12.e = e;
		e.line12.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line12);

		e.line13 = u.ge("line13", e)
		e.line13.e = e;
		e.line13.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line13);
		
		e.line14 = u.ge("line14", e)
		e.line14.e = e;
		e.line14.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line14);
		
		e.line15 = u.ge("line15", e)
		e.line15.e = e;
		e.line15.clicked = function() {
			u.toggleClass(this, "show");
		}
		u.e.click(e.line15);
	}
}