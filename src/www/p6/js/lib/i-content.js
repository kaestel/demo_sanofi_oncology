Util.Objects["sanofiF1"] = new function() {
	this.init = function(e) {
		e.time84 = u.ge("time84", e)
		e.time84.e = e;
		e.time84.clicked = function() {
			u.toggleClass(this.e, "yr1984");
		}
		u.e.click(e.time84);

		e.time95 = u.ge("time95", e)
		e.time95.e = e;
		e.time95.clicked = function() {
			u.toggleClass(this.e, "yr1995");
		}
		u.e.click(e.time95);

		e.time96 = u.ge("time96", e)
		e.time96.e = e;
		e.time96.clicked = function() {
			u.toggleClass(this.e, "yr1996");
		}
		u.e.click(e.time96);

		e.time05 = u.ge("time05", e)
		e.time05.e = e;
		e.time05.clicked = function() {
			u.toggleClass(this.e, "yr2005");
		}
		u.e.click(e.time05);

		e.time06 = u.ge("time06", e)
		e.time06.e = e;
		e.time06.clicked = function() {
			u.toggleClass(this.e, "yr2006");
		}
		u.e.click(e.time06);
		
		e.chart_dot = u.ge("chart_dot", e)
		e.chart_dot.e = e;
		e.chart_dot.clicked = function() {
			u.toggleClass(this.e, "chart");
		}
		u.e.click(e.chart_dot);
	}
}