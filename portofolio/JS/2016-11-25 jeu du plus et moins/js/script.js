var n = Math.random() * 100;
var nbToFind = Math.round(n);
var inputs = document.getElementsByTagName("INPUT");
inputs[0].value = "";
var button = inputs[1];
var divs = document.getElementsByTagName("DIV");
var timer = divs[2];
var reponse = divs[3];
timer.innerHTML = 'Timer : 0'
compteur = divs[1];
var nbCoups = 0;
compteur.innerHTML = "Compteur : " + nbCoups;
var d1 = new Date();
var d2;
var monInterval = window.setInterval(function(){	
	var d2 = new Date(); 
	timer.innerHTML = 'Timer : ' + (Math.round((d2 - d1) / 1000)) + " sec";	
}, 1000);
button.addEventListener("click", function(e){
	nbCoups ++;
	compteur.innerHTML = "Compteur : " + nbCoups + " coup(s)";
	var givenValue = inputs[0].value;
	givenValue = +givenValue;
	if(Number.isInteger(givenValue) && givenValue <= 100 && givenValue >= 0){
		if(givenValue > nbToFind){
			reponse.innerHTML = "inferieur";
		}else if(givenValue < nbToFind){
			reponse.innerHTML = "supérieur";
		}else{
			clearInterval(monInterval);
			alert("correct");
			window.location.reload();
		}
	}else{
		console.log("Un nombre entre 0 et 100 stp");
	}
});