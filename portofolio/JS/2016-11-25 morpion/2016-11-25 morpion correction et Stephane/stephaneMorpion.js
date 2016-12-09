<script type="text/javascript">	
		var choixJoueur = document.getElementsByClassName("case");
		for(var i=0,il=choixJoueur.length;i<il;i++){
			choixJoueur[i].addEventListener('click',function(){
					if(this.innerHTML=='') choixPlayer(this);
			});
		}
		var nbreTour=0;	
		function choixPlayer(id){ //fonction qui permet de définir quel est le joueur, et d'appliquer X ou O
			if(nbreTour++ % 2 == 0)
			{
				id.innerHTML="X";
				id.style.color="red";
			}else{
				id.innerHTML="O";
				id.style.color="blue";
			}
			winGame(choixJoueur[0].style.color,choixJoueur[1].style.color,choixJoueur[2].style.color); // gauche a droite r1
			winGame(choixJoueur[3].style.color,choixJoueur[4].style.color,choixJoueur[5].style.color); // gauche a droite r2
			winGame(choixJoueur[6].style.color,choixJoueur[7].style.color,choixJoueur[8].style.color); // gauche a droite r3
			winGame(choixJoueur[0].style.color,choixJoueur[3].style.color,choixJoueur[6].style.color); // haut en bas l1
			winGame(choixJoueur[1].style.color,choixJoueur[4].style.color,choixJoueur[7].style.color);// haut en bas l2
			winGame(choixJoueur[2].style.color,choixJoueur[5].style.color,choixJoueur[8].style.color);	// haut en bas l3
			winGame(choixJoueur[2].style.color,choixJoueur[4].style.color,choixJoueur[6].style.color); //diagonale
			winGame(choixJoueur[0].style.color,choixJoueur[4].style.color,choixJoueur[8].style.color); //diagonale
			nullGame(choixJoueur[0].style.color,choixJoueur[1].style.color,choixJoueur[2].style.color,choixJoueur[3].style.color,choixJoueur[4].style.color,choixJoueur[5].style.color,choixJoueur[6].style.color,choixJoueur[7].style.color,choixJoueur[8].style.color);
		}
		function winGame(color1,color2,color3){
			if((color1 == 'red' || color1 == 'blue') && (color1 == color2 && color1==color3)){
				alert("victory");
				location.reload();
			}
		}
		function nullGame(c1,c2,c3,c4,c5,c6,c7,c8,c9){
			if(c1 !="" && c2 !="" && c3!="" && c4!="" && c5!="" && c6!="" && c7 !="" && c8 !="" && c9!=""){
				alert("game over");
				location.reload();
			}
		}
  </script>