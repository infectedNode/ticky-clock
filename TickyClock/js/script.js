var d, h, m, s, clock, bgColor;

function clocky() {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	
	if(h <= 9) {
		h = "0" + h;
	}
	if(m <= 9) {
		m = "0" + m;
	}
	if(s <= 9) {
		s = "0" + s;
	}
	
	clock =  h + ":" + m + ":" + s;
	bgColor = "#" + h + m + s;
	
	document.getElementById("container").innerHTML = clock;
	document.body.style.background = bgColor;
    setTimeout(clocky,1000);
}
clocky();