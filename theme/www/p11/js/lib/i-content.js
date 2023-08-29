Util.Objects["sanofiK1"] = new function() {
	this.init = function(e) {
		var i, row;

		var header_datum = u.ge("datum", e);
		var header_kongress = u.ge("kongress", e);
		var header_ort = u.ge("ort", e);
		header_datum.e = header_ort.e = header_kongress.e = e;

		e.list = u.ge("ul", e);
		e.options = document.createElement("ul");
		var rows = u.ges("li", e);
		for(i = 1; row = rows[i]; i++) {
			e.options.appendChild(row.cloneNode(true));
		}

		if(e.className.match(/k1/)) {
			var kal = u.ae(e, "div", "link id:k2");
		}
		else {
			var kal = u.ae(e, "div", "link id:k1");
		}
		u.e.click(kal);
		kal.clicked = function(event) {
			var target = u.ge(u.getIJ(this, "id"));
			u.e.transform(u.ge("presentation"), -(target.offsetLeft), 0);
		}


		e.sortBy = function(column) {
			var i, header, row;
			var direction = column.className.match(/up/g) ? "down" : "up";

			// reset headers
			var headers = u.ges("h3", this);
			for(i = 0; header = headers[i]; i++) {
				u.removeClass(header, "up|down");
			}

			// clean calendar
			var rows = u.ges("li", this);
			for(i = 1; row = rows[i]; i) {
				row.parentNode.removeChild(row);
			}

			// search
			var search_index = new Array();
			var rows = u.ges(column.className.trim(), this.options);
			for(i = 0; row = rows[i]; i++) {
				search_index[i] = row.innerHTML;
			}

			if(direction == "up") {
				search_index.sort(function(a,b) {return Number(a) ? a-b : (a < b ? -1 : 1)});
			}
			else {
				search_index.sort(function(a,b) {return Number(a) ? b-a : (b < a ? -1 : 1)});
			}

			// re-insert content in right order
			for(i = 0; order = search_index[i]; i++) {
				for(o = 0; row = rows[o]; o++) {
					if(row.innerHTML == order) {
						this.list.appendChild(row.parentNode.cloneNode(true));
					}
				}
			}

			// set sort icon
			u.addClass(column, direction);

		}

		u.e.click(header_datum);
		u.e.click(header_kongress);
		u.e.click(header_ort);

		header_datum.clicked = header_kongress.clicked = header_ort.clicked = function(event) {
			this.e.sortBy(this);
		}


	}
}