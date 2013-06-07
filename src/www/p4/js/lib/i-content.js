Util.Objects["sanofiD1"] = new function() {
	this.init = function(e) {
		e.tax = u.ge("tax", e)
		e.tax.e = e;
		e.tax.clicked = function() {
			u.e.transition(this.e, "all 1s ease-out");
			u.e.transform(this.e, -1024, 0);
		}
		u.e.click(e.tax);

		e.neu = u.ge("neu", e)
		e.neu.e = e;
		e.neu.clicked = function() {
			u.e.transition(this.e, "all 1s ease-out");
			u.e.transform(this.e, -2048, 0);
		}
		u.e.click(e.neu);
		
		e.dia = u.ge("dia", e)
		e.dia.e = e;
		e.dia.clicked = function() {
			u.e.transition(this.e, "all 1s ease-out");
			u.e.transform(this.e, -5120, 0);
		}
		u.e.click(e.dia);

		e.fat = u.ge("fat", e)
		e.fat.e = e;
		e.fat.clicked = function() {
			u.e.transition(this.e, "all 1s ease-out");
			u.e.transform(this.e, -7168, 0);
		}
		u.e.click(e.fat);

		e.leb = u.ge("leb", e)
		e.leb.e = e;
		e.leb.clicked = function() {
			u.e.transition(this.e, "all 1s ease-out");
			u.e.transform(this.e, -8192, 0);
		}
		u.e.click(e.leb);
	}
}
Util.Objects["sanofiDlink"] = new function() {
	this.init = function(e) {
		e.link_front_page = u.ge("link_front_page", e)
		e.link_front_page.e = e;
		e.link_front_page.clicked = function() {
			e = u.ge("presentation");
			u.e.transition(e, "all 1s ease-out");
			u.e.transform(e, 0, 0);
//			location.href = "index.html"
		}
		u.e.click(e.link_front_page);
	}
}
Util.Objects["sanofiD3"] = new function() {
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
	}
}

Util.Objects["sanofiD4"] = new function() {
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
		
		e.middle_pop = u.ge("middle_pop", e)
		e.middle_pop.e = e;
		e.middle_pop.clicked = function() {
			u.toggleClass(this.e, "middle_pop");
		}
		u.e.click(e.middle_pop);
		
		e.pop_area_middle = u.ge("pop_area_middle", e)
		e.pop_area_middle.e = e;
		e.pop_area_middle.clicked = function() {
			u.toggleClass(this.e, "middle_pop");
		}
		u.e.click(e.pop_area_middle);

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
	}
}
Util.Objects["sanofiD5"] = new function() {
	this.init = function(e) {
		e.ad1 = u.ge("ad1", e)
		e.ad1.e = e;
		e.ad1.clicked = function() {
			u.toggleClass(this.e, "slide1");
		}
		u.e.click(e.ad1);

		e.slide_area_1 = u.ge("slide_area_1", e)
		e.slide_area_1.e = e;
		e.slide_area_1.clicked = function() {
			u.toggleClass(this.e, "slide1");
		}
		u.e.click(e.slide_area_1);

		e.ad2 = u.ge("ad2", e)
		e.ad2.e = e;
		e.ad2.clicked = function() {
			u.toggleClass(this.e, "slide2");
		}
		u.e.click(e.ad2)

		e.slide_area_2 = u.ge("slide_area_2", e)
		e.slide_area_2.e = e;
		e.slide_area_2.clicked = function() {
			u.toggleClass(this.e, "slide2");
		}
		u.e.click(e.slide_area_2);

		e.ad3 = u.ge("ad3", e)
		e.ad3.e = e;
		e.ad3.clicked = function() {
			u.toggleClass(this.e, "slide3");
		}
		u.e.click(e.ad3)

		e.slide_area_3 = u.ge("slide_area_3", e)
		e.slide_area_3.e = e;
		e.slide_area_3.clicked = function() {
			u.toggleClass(this.e, "slide3");
			if(this.e.className.match(/left|right|left right/i)) {
				u.removeClass(this.e, "left");
				u.removeClass(this.e, "right");
			}
		}
		u.e.click(e.slide_area_3);

		e.slide_area_3_left = u.ge("slide_area_3_left", e)
		e.slide_area_3_left.e = e;
		e.slide_area_3_left.clicked = function() {
			u.toggleClass(this.e, "left");
			if(this.e.className.match(/right/i)) {
				u.removeClass(this.e, "right");
			}
		}
		u.e.click(e.slide_area_3_left);
		
		e.slide_area_3_right = u.ge("slide_area_3_right", e)
		e.slide_area_3_right.e = e;
		e.slide_area_3_right.clicked = function() {
			u.toggleClass(this.e, "right");
			if(this.e.className.match(/left/i)) {
				u.removeClass(this.e, "left");
			}
		}
		u.e.click(e.slide_area_3_right);
		
		e.ad4 = u.ge("ad4", e)
		e.ad4.e = e;
		e.ad4.clicked = function() {
			u.toggleClass(this.e, "slide4");
		}
		u.e.click(e.ad4)

		e.slide_area_4_button = u.ge("slide_area_4_button", e)
		e.slide_area_4_button.e = e;
		e.slide_area_4_button.clicked = function() {
			u.toggleClass(this.e, "pop");
		}
		u.e.click(e.slide_area_4_button);

		e.slide_area_4_pop = u.ge("slide_area_4_pop", e)
		e.slide_area_4_pop.e = e;
		e.slide_area_4_pop.clicked = function() {
			u.toggleClass(this.e, "pop");
		}
		u.e.click(e.slide_area_4_pop);

		e.slide_area_4 = u.ge("slide_area_4", e)
		e.slide_area_4.e = e;
		e.slide_area_4.clicked = function() {
			u.toggleClass(this.e, "slide4");
		}
		u.e.click(e.slide_area_4);

		e.ad5 = u.ge("ad5", e)
		e.ad5.e = e;
		e.ad5.clicked = function() {
			u.toggleClass(this.e, "slide5");
		}
		u.e.click(e.ad5)
		
		e.slide_area_5 = u.ge("slide_area_5", e)
		e.slide_area_5.e = e;
		e.slide_area_5.clicked = function() {
			u.toggleClass(this.e, "slide5");
		}
		u.e.click(e.slide_area_5);

		e.small_ad1 = u.ge("small_ad1", e)
		e.small_ad1.e = e;
		e.small_ad1.clicked = function() {
			u.toggleClass(this.e, "slide1");
			if(this.e.className.match(/left|right|slide2|slide3|slide4|slide5/i)) {
				u.removeClass(this.e, "left");
				u.removeClass(this.e, "right");
				u.removeClass(this.e, "slide2");
				u.removeClass(this.e, "slide3");
				u.removeClass(this.e, "slide4");
				u.removeClass(this.e, "slide5");
			}
		}
		u.e.click(e.small_ad1);

		e.small_ad2 = u.ge("small_ad2", e)
		e.small_ad2.e = e;
		e.small_ad2.clicked = function() {
			u.toggleClass(this.e, "slide2");
			if(this.e.className.match(/left|right|slide1|slide3|slide4|slide5/i)) {
				u.removeClass(this.e, "left");
				u.removeClass(this.e, "right");
				u.removeClass(this.e, "slide1");
				u.removeClass(this.e, "slide3");
				u.removeClass(this.e, "slide4");
				u.removeClass(this.e, "slide5");
			}
		}
		u.e.click(e.small_ad2);
		
		e.small_ad3 = u.ge("small_ad3", e)
		e.small_ad3.e = e;
		e.small_ad3.clicked = function() {
			u.toggleClass(this.e, "slide3");
			if(this.e.className.match(/left|right|slide1|slide2|slide4|slide5/i)) {
				u.removeClass(this.e, "left");
				u.removeClass(this.e, "right");
				u.removeClass(this.e, "slide1");
				u.removeClass(this.e, "slide2");
				u.removeClass(this.e, "slide4");
				u.removeClass(this.e, "slide5");
			}
		}
		u.e.click(e.small_ad3);

		e.small_ad4 = u.ge("small_ad4", e)
		e.small_ad4.e = e;
		e.small_ad4.clicked = function() {
			u.toggleClass(this.e, "slide4");
			if(this.e.className.match(/left|right|slide1|slide2|slide3|slide5/i)) {
				u.removeClass(this.e, "left");
				u.removeClass(this.e, "right");
				u.removeClass(this.e, "slide1");
				u.removeClass(this.e, "slide2");
				u.removeClass(this.e, "slide3");
				u.removeClass(this.e, "slide5");
			}
		}
		u.e.click(e.small_ad4);

		e.small_ad5 = u.ge("small_ad5", e)
		e.small_ad5.e = e;
		e.small_ad5.clicked = function() {
			u.toggleClass(this.e, "slide5");
			if(this.e.className.match(/left|right|slide1|slide2|slide3|slide4/i)) {
				u.removeClass(this.e, "left");
				u.removeClass(this.e, "right");
				u.removeClass(this.e, "slide1");
				u.removeClass(this.e, "slide2");
				u.removeClass(this.e, "slide3");
				u.removeClass(this.e, "slide4");
			}
		}
		u.e.click(e.small_ad5);
	}
}
Util.Objects["sanofiD6"] = new function() {
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
	}
}

Util.Objects["sanofiD7"] = new function() {
	this.init = function(e) {
		e.top_pop = u.ge("top_pop", e)
		e.top_pop.e = e;
		e.top_pop.clicked = function() {
			if(this.e.className.match(/middle_pop|bottom_pop|middle_pop bottom_pop/i)) {
				u.removeClass(this.e, "middle_pop");
				u.removeClass(this.e, "bottom_pop");
				u.removeClass(this.e, "middle_pop bottom_pop");
			}else{
				u.toggleClass(this.e, "middle_pop");
			}
		}
		u.e.click(e.top_pop);
		
		e.middle_pop = u.ge("middle_pop", e)
		e.middle_pop.e = e;
		e.middle_pop.clicked = function() {
			if(this.e.className.match(/bottom_pop|middle_pop bottom_pop/i)) {
				u.removeClass(this.e, "bottom_pop");
			}else{
				u.addClass(this.e, "bottom_pop")
			}
		}
		u.e.click(e.middle_pop);
		
		e.bottom_pop = u.ge("bottom_pop", e)
		e.bottom_pop.e = e;
		e.bottom_pop.clicked = function() {
			u.toggleClass(this.e, "bottom_pop");
		}
		u.e.click(e.bottom_pop);
	}
}

Util.Objects["sanofiD8"] = new function() {
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
		
		e.middle_pop = u.ge("middle_pop", e)
		e.middle_pop.e = e;
		e.middle_pop.clicked = function() {
			u.toggleClass(this.e, "middle_pop");
		}
		u.e.click(e.middle_pop);
		
		e.pop_area_middle = u.ge("pop_area_middle", e)
		e.pop_area_middle.e = e;
		e.pop_area_middle.clicked = function() {
			u.toggleClass(this.e, "middle_pop");
		}
		u.e.click(e.pop_area_middle);
			
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
	}
}