<<<<<<< HEAD
menu.onclick = function muFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className == "topnav")  {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
=======
menu.onclick = function muFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav")  {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
>>>>>>> 9401c2d3c42fe340368f50af05a7e7e63914ea9e
}