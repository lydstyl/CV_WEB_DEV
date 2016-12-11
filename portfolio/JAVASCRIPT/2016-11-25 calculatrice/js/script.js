for(var screen = document.getElementById("screen"), 
	boutons = document.getElementsByTagName("INPUT"), 
	i = 0, il = boutons.length, aAfficher = "", valeurBouton="";	i<il; i++){	
	boutons[i].addEventListener('click', function(e){	
		switch(this.value){
			case "<-" : 			
			case "&lt;-" : 
				aAfficher = aAfficher.substring(0,aAfficher.length - 1); 
				screen.innerHTML = aAfficher; 
				break;
			case "=" : 
				aAfficher = eval(aAfficher);
				screen.innerHTML = aAfficher; 
				break;
			default: 
				aAfficher += this.value; 
				screen.innerHTML = aAfficher; 
		}				
	});
}