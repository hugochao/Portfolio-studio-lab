// background transparency
$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
 		document.body.className = "night";
	else if (n > 16 && n < 19)
 		document.body.className = "sunset";
	else
 		document.body.className = "day";
});




// digital clock
Number.prototype.pad = function(n) {
	for (var r = this.toString(); r.length < n; r = 0 + r);
	return r;
  };
  
  function updateClock() {
	var now = new Date();
	var milli = now.getMilliseconds(),
	  sec = now.getSeconds(),
	  min = now.getMinutes(),
	  hou = now.getHours(),
	  mo = now.getMonth(),
	  dy = now.getDate(),
	  yr = now.getFullYear();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
	  corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
	for (var i = 0; i < tags.length; i++)
	  document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  function initClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
  }