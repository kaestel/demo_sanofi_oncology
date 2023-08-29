// monitor presence detection
if(typeof(submitSlideEnter) != "function") {
	submitSlideEnter = submitCustomEvent = function() {}
}
if(typeof(openPDF) != "function") {
	openPDF = function() {alert("PDF viewer not included in this project")}
}

// extenders
Util.Objects["presentation"] = new function() {
	this.init = function(e) {
		submitSlideEnter(0, "0:"+u.ge("h1", u.ge("slides")[0]).innerHTML, 0, document.title, false);

		// calculate presentation size
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

//		e.sitemap = e.nav.appendChild(document.createElement("div"));
		// e.nav.sitemap_label = u.ge("sitemap", e.nav);
		// e.nav.sitemap_label.e = e;
		// e.nav.sitemap_label.clicked = function() {u.toggleClass(this.e.nav, "sitemap");}
		// u.e.click(e.nav.sitemap_label);

		if(e.nav.index_label) {
			
			e.nav.ul = e.nav.appendChild(document.createElement("ul"));

			for(var i = 0; slide = e.slides[i]; i++) {

	//			u.bug(1, "appending to:"+e.nav.ul.id);
				li = e.nav.ul.appendChild(document.createElement("li"));
				li.innerHTML = u.ge("h2", slide).innerHTML;

	//			u.bug(1, e.nav.offsetHeight);
				if(e.nav.offsetHeight > 768) {
	//				u.bug(1, "replacing from:"+e.nav.ul.id);
					li = e.nav.ul.removeChild(li, true);
					e.nav.ul = e.nav.appendChild(document.createElement("ul"));
					e.nav.ul.appendChild(li);
				}

	//			e.sitemap.slide = e.sitemap.appendChild(document.createElement("h5"));
	//			e.sitemap.slide.e = e;
	//			e.sitemap.slide.slide = slide;
	//			e.sitemap.slide.innerHTML = u.ge("h1", slide).innerHTML;

	//			u.e.click(e.sitemap.slide);
	//			e.sitemap.slide.clicked = function() {
	//				u.e.transition(this.e, "all 1s ease-out");
	//				u.e.transform(this.e, -this.slide.offsetLeft, 0);
	//				u.toggleClass(this.e.nav, "sitemap");
	//				u.bug(1, u.ge("h1", this.slide).innerHTML + ":" + this.slide.offsetLeft);
	//			}


	//			e.sitemap.slide.style.webkitTransformOrigin = "0 0";
	//			e.sitemap.slide.style.webkitTransform = "scale(0.1)";
	//			e.sitemap.slide.style.width = e.sitemap.slide.offsetWidth/10+"px";

	//			u.bug(1, e.sitemap.slide.offsetWidth)

				li.e = e;
				li.slide = slide;
	//			u.bug(1, u.ge("h2", slide).nodeName);
	//			a = li.appendChild(document.createElement("a"));
	//			a.innerHTML = u.ge("h2", slide).innerHTML;

				u.e.click(li);
				li.clicked = function() {
					u.e.transition(this.e, "all 1s ease-out");
					u.e.transform(this.e, -this.slide.offsetLeft, 0);
					u.toggleClass(this.e.nav, "index");
					current_slide = this.slide.offsetLeft/1024;

					//u.bug(1, "monitor trace nav ("+Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML+")")
					submitSlideEnter(Math.abs(current_slide), Math.abs(current_slide)+":"+u.ge("h1", u.ge("slides")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), document.title, false);
				}

			
			
				// check for popups
				if(slide.offsetHeight > e.h) {

	//				slide.sub_nav = slide.appendChild(document.createElement("div"));
	//				slide.sub_nav.appendChild(slide.cloneNode(true));
	//				slide.sub_nav.webkitTransform = "scale(0.1)";

	//				popups = u.ges("popup", slide);
	//				for(var o = 0; popup = popups[o]; o++) {
	//					e.sitemap.slide = e.sitemap.appendChild(document.createElement("h5"));
	//					e.sitemap.slide.innerHTML = u.ge("h1", popup).innerHTML;
	//				}

					// create subnav

	//				u.e.swipe(e, new Array(e.display.offsetWidth - e.w, 0, e.w, e.h));
	//				u.bug(1, "0,"+ e.display.offsetWidth+","+ e.h +"-"+ slide.offsetHeight+",0")


	//				u.e.swipe(slide, new Array(0, e.h - slide.offsetHeight, e.display.offsetWidth, slide.offsetHeight));
/*
					slide.swipedUp = function() {

						current_popup = Math.floor(this.element_y/768);

						// use speed to calculate better speed?
						eta = Math.abs(Math.round(((this.element_y - (current_popup * 768)) / this.current_yps) * 10) / 10);
						eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
	//					u.bug(2, "up:"+ current_popup + ":" + this.element_y + ":" +  this.current_yps)

						u.e.transition(this, "all "+eta+"s ease-out");
						u.e.transform(this, 0, current_popup*768);

			//			u.bug(1,"left" + eta)
					}
					slide.swipedDown = function() {

						current_popup = Math.floor(this.element_y/768);

						// use speed to calculate better speed?
			//			u.bug(2, "right:" +current_slide + ":" + e.element_x + ":" +  e.current_xps)
						eta = Math.abs(Math.round((((current_popup * 768) - this.element_y) / this.current_yps) * 10) / 10);
						eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;

						u.e.transition(this, "all "+eta+"s ease-out");
			//			u.e.transition(e, "all 0.5s ease-out");
						u.e.transform(this, 0, (current_popup+1)*768);

			//			u.bug(1,"right" + eta)
					}
*/
				}
			}
			u.addClass(e.nav, "ready");
		}
		// enable dragging
//		u.e.drag(e, new Array(e.display.offsetWidth - e.w, 0, e.w, e.h));
		
		e.swipedLeft = function() {

			current_slide = Math.floor(this.element_x/1024);

			// use speed to calculate better speed?
			eta = Math.abs(Math.round(((this.element_x - (current_slide * 1024)) / this.current_xps) * 10) / 10);
			eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;
//			u.bug(2, "left:"+ current_slide + ":" + e.element_x + ":" +  e.current_xps)

			u.e.transition(this, "all "+eta+"s ease-out");
			u.e.transform(this, current_slide*1024, 0);

			//u.bug(1, "monitor trace next ("+Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML+")");
//			submitSlideEnter(slideId, slideName, slideIndex, parentSlideName, parentOfParentSlideName);
			submitSlideEnter(Math.abs(current_slide), Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), document.title, false);
		}
		e.swipedRight = function() {

//			current_slide = Math.floor(this.element_x/1024);
			current_slide = Math.floor(this.element_x/1024)+1;

			// use speed to calculate better speed?
//			u.bug(2, "right:" +current_slide + ":" + e.element_x + ":" +  e.current_xps)
			eta = Math.abs(Math.round((((current_slide * 1024) - this.element_x) / this.current_xps) * 10) / 10);
			eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;

			u.e.transition(this, "all "+eta+"s ease-out");
//			u.e.transition(e, "all 0.5s ease-out");
//			u.e.transform(this, (current_slide+1)*1024, 0);
			u.e.transform(this, current_slide*1024, 0);


			//u.bug(1, "monitor trace prev ("+Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML+")");
//			submitSlideEnter(slideId, slideName, slideIndex, parentSlideName, parentOfParentSlideName);
			submitSlideEnter(Math.abs(current_slide), Math.abs(current_slide)+":"+u.ge("h1", u.ges("slide")[Math.abs(current_slide)]).innerHTML, Math.abs(current_slide), document.title, false);
		}
		/*
				e.swipedRight = function() {

					current_slide = Math.floor(e.element_x/1024);

					// use speed to calculate better speed?
		//			u.bug(2, "right:" +current_slide + ":" + e.element_x + ":" +  e.current_xps)
					eta = Math.abs(Math.round((((current_slide * 1024) - e.element_x) / e.current_xps) * 10) / 10);
					eta = eta > 0.5 ? 0.5 : eta < 0.2 ? 0.2 : eta;

					u.e.transition(e, "all "+eta+"s ease-out");
		//			u.e.transition(e, "all 0.5s ease-out");
					u.e.transform(e, (current_slide+1)*1024, 0);

		//			u.bug(1,"right" + eta)
				}	
		*/
		u.e.swipe(e, new Array(e.display.offsetWidth - e.w, 0, e.w, e.h));
		u.addClass(e, "ready");
	}
}
