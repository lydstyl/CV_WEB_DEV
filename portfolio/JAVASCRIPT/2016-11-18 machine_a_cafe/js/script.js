		screen = document.getElementById('screen'); //définition du main screen
		consoleHTML = document.getElementById('consoleHTML');
		stockScreen = document.getElementById('stockScreen');
		historique = ''; //historique de la console HTML
		numerotation = 0; // pour l'historique
		screen.innerHTML='Bienvenu';
		doseSucreManuelle = 3;
		doseMaxSucre = 6;
		stock = {	poudreCafe: {actuel: 80, min: 10, max: 100}, //[actuel, min, max]
					poudreCappucino: {actuel: 70, min: 10, max: 100},
					poudreThe: {actuel: 60, min: 10, max: 100},
					poudreSoupe: {actuel: 50, min: 10, max: 100},
					eau: {actuel: 35, min: 10, max: 100},
					gobelet: {actuel: 10, min: 10, max: 100},
					sucre: {actuel: 11, min: 10, max: 100},
					argent: {actuel: 20, min: 10, max: 1000},
		};
		stock.pourdreCafe
		actualiserStock();
		//OBJETS
		function Boisson(typePoudre, dosePoudre, doseEau, doseSucre, prix){
			this.typePoudre = typePoudre;
			this.dosePoudre = dosePoudre;
			this.doseEau = doseEau;
			this.doseSucre = doseSucre;
			this.prix = prix;
			Boisson.prototype.payer = function() {
				con('Paiement de la boisson ' + this.typePoudre);
				argentRecu = 0;
				while(argentRecu < this.prix){
					pieceValide = false;
					piecePossible = [10, 20, 50];
					screen.innerHTML='Inserez de l\'argent';
					while(pieceValide == false){
						pieceRecue = Number(prompt('Insérez une piece de 10 20 ou 50 centimes car il manque '+(this.prix - argentRecu)));					
						for (i = 0; i<piecePossible.length; i++){							
							if (pieceRecue == piecePossible[i]){
								pieceValide = true;
								con('Pièce de '+pieceRecue+' centimes accéptée');							
							}											
						}
						if(pieceValide == false){
							con('Pièce invalide');
						}													
					}
					argentRecu += pieceRecue;
					stock.argent.actuel += pieceRecue;
				}
				argentARendre = argentRecu - this.prix;
				if(argentARendre != 0){
					con('Monnaie rendue : '+argentARendre+' centimes')
					stock.argent.actuel -= argentARendre;
				}else{
					con('Pas de monnaie à rendre');
				}
			};
			Boisson.prototype.tomberGobelet = function(){
				con('Gobelet tombé');
				stock.gobelet.actul --;
			};
			Boisson.prototype.verserPoudre = function() {
				if(this.dosePoudre > 0){
					con('Versement poudre');
					poudreVersee = 0;
					while(poudreVersee < this.dosePoudre){
						this.dosePoudre --;
						poudreVersee ++; //compteur
						con(poudreVersee+' poudre versée et déstockée')
						//ici on enlève du stock la poudre en question
						switch(this.typePoudre){
							case "cafe":
								stock.poudreCafe.actuel --;
								break;
							case "cappucino":
								stock.poudreCappucino.actuel --;
								break;
							case "the":
								stock.poudreThe.actuel --;
								break;
							case "soupe":
								stock.poudreSoupe.actuel --;
								break;
							default:
								con('erreur');
						}
					}
				}
			};
			Boisson.prototype.verserEau = function() {
				con('Versement eau');
				eauVersee = 0;
				while(eauVersee < this.doseEau){
					stock.eau.actuel --;
					eauVersee ++;
					con(eauVersee+' eau versée et déstockée');
				}
			};
			Boisson.prototype.doserEtSucrer = function() {
				if((this.doseSucre > 0) && (doseSucreManuelle >= 1)){
					con('Versement sucre');
					sucreVerse = 0;
					while(sucreVerse < doseSucreManuelle){
						stock.sucre.actuel --;
						sucreVerse ++;
						con(sucreVerse+' sucre versé et déstocké');
					}
				}else{
					con('Pas de versement de sucre');
				}
			};
			Boisson.prototype.biper = function() {
				con('Bip boisson '+typePoudre+ ' est prête');
				screen.innerHTML='Votre ' + typePoudre + ' est prêt(e)';
				doseSucreManuelle=3;//réinitialisation de la dose de sucre
			};
		}
		// FONCTIONS
		function modifierDoseSucre(modification){
			if(stock.sucre.actuel > doseMaxSucre){
				if (modification === '+') {
					if (doseSucreManuelle < 6) {
						doseSucreManuelle ++;
					}
				}else{
					if (doseSucreManuelle > 0) {
						doseSucreManuelle --;
					}
				}
				screen.innerHTML='<div>Votre dose de sucre :</div><div style="width:'+doseSucreManuelle/6*100+'%;border:1px solid white"><div>';
			}else{
				screen.innerHTML='Plus de sucre en stock désolé';
			}
		}
		function con(newToBeWrotten){
			//permet d'ecrire dans la console HTML			
			if(newToBeWrotten != '</br>'){
				numerotation ++;
				historique += ' \| ' + numerotation + ' \| ' + newToBeWrotten + '</br>';
			}else{
				historique += newToBeWrotten + '</br>';
			}
			consoleHTML.innerHTML=historique;
		}
		function actualiserStock(){
			//permet d'ecrire le stock sur l'écran concu pour le stock
			con('Actualisation du stock');
			stockAffiche = '';
			sms = 'non';
			for (var elementStock in stock){
				stockAffiche += elementStock+'</br>'+
				' actuel: '+stock[elementStock]['actuel'];
				if((stock[elementStock]['actuel']) < (stock[elementStock]['min'])){
					stockAffiche += ' critique !!! </br></br>';
					sms = 'oui';
					//con('sms:'+sms);
				}else{
					stockAffiche += '</br></br>';
					//con('sms:'+sms);
				}
			}
			if(sms==='oui'){
				sms = 'SMS: "Il faut réapprovisionner ! Quantités optimales à ramener :<br>';
				for (var elementStock in stock){
					if(stock[elementStock]['actuel'] < stock[elementStock]['min']){
						
					}
					sms += elementStock+': '+(stock[elementStock]['max']-stock[elementStock]['actuel'])+
					'<span>, </span>';					
				}
				sms += '"';
				con(sms);
			}				
			stockScreen.innerHTML=stockAffiche;
		}
		function preparerBoisson(typePoudre, dosePoudre, doseEau, doseSucre, prix){
			//afficherStock();
			var boisson = new Boisson(typePoudre, dosePoudre, doseEau, doseSucre, prix);
			con('</br>');
			boisson.payer();
			con('</br>');
			boisson.tomberGobelet();
			con('</br>');
			boisson.verserPoudre();
			con('</br>');
			boisson.verserEau();
			con('</br>');
			boisson.doserEtSucrer();
			con('</br>');
			boisson.biper();
			con('</br>');
			con('</br>');
			actualiserStock();
			con('</br>--------------------------------------------------------');			
		}