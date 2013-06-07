Util.Objects["sanofiB1"] = new function() {
	this.init = function(e) {
		var dvideo_a = u.ge("dvideo_a", e);
		dvideo_a.e = e;
		u.e.click(dvideo_a);
		dvideo_a.clicked = function() {
			var video = u.ge("video", this.e);
			if(u.ge("canvas", this.e).className.match(/video_a/i)) {
				u.removeClass(u.ge("canvas", this.e), "video_a");
				video.pause();
			}
			else {
				u.addClass(u.ge("canvas", this.e), "video_a");
				video.load();
				video.play();
			}
		}

	}
}