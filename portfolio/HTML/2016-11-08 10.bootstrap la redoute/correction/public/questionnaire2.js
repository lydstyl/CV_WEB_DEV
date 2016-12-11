/* Author : Mathieu Ninrinck
 * Date : 2015-05-01
 * mail : contact@ninrinck.fr
 * ---------------------------------------------------- */
var Qr = function(options){
	var $this = prototype = {
		/* Vars */
		data: [],
		/* Function : Initialise la classe
		 ------------------------------------------------------------------------------------------- */
		initialize: function(){
			$this.habitat();
			return this;
		},
		scroll: function(){
			window.scrollTo(0, 99999);
			// $('body').scrollTop($('body').scrollHeight);
			// $('.chat').animate({
				// scrollTop: $('.chat').scrollHeight
			// }, 2000);
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		habitat: function(){
			$('.tchat').append('<span class="bubble">Quel votre type d’habitat ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Appartement">Appartement</option>';
					html += '<option value="Maison">Maison</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['habitat'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.proprietaire();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		proprietaire: function(){
			$('.tchat').append('<span class="bubble">Etes-vous ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Propriétaire">Propriétaire</option>';
					html += '<option value="Locataire">Locataire</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['proprietaire'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.proprietaireDepuis();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		proprietaireDepuis: function(){
			$('.tchat').append('<span class="bubble">Depuis ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Janvier">Janvier</option>';
					html += '<option value="Février">Février</option>';
					html += '<option value="Mars">Mars</option>';
					html += '<option value="Avril">Avril</option>';
					html += '<option value="Mai">Mai</option>';
					html += '<option value="Juin">Juin</option>';
					html += '<option value="Juillet">Juillet</option>';
					html += '<option value="Aout">Aout</option>';
					html += '<option value="Septembre">Septembre</option>';
					html += '<option value="Octobre">Octobre</option>';
					html += '<option value="Novembre">Novembre</option>';
					html += '<option value="Décembre">Décembre</option>';
					html += '</select>';
				html += '<select>';
				for(var i=2015; i>=1820; i--) html += '<option value="'+i+'">'+i+'</option>';
				html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['proprietaireDepuis'] = $('select:eq(0)', parent).val()+' '+$('select:eq(1)', parent).val();
				parent.html($this.data['proprietaireDepuis']);
				$this.profession();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		profession: function(){
			$('.tchat').append('<span class="bubble">Quelle est votre profession ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
				html += '<option value="Exploitant agricole/Maritime">Exploitant agricole/Maritime</option>';
				html += '<option value="Artisan">Artisan</option>';
				html += '<option value="Commerçant">Commerçant</option>';
				html += '<option value="Gérant de société">Gérant de société</option>';
				html += '<option value="Profession libérale">Profession libérale</option>';
				html += '<option value="Cadre sup (Public/Armées)">Cadre sup (Public/Armées)</option>';
				html += '<option value="Professeur chercheur, Médecin">Professeur chercheur, Médecin</option>';
				html += '<option value="Artiste, Journaliste">Artiste, Journaliste</option>';
				html += '<option value="Cadre supérieur (Privé)">Cadre supérieur (Privé)</option>';
				html += '<option value="Instituteur, Maître auxiliaire">Instituteur, Maître auxiliaire</option>';
				html += '<option value="Cadre moyen (Médico-Social)">Cadre moyen (Médico-Social)</option>';
				html += '<option value="Cadre moyen (Public/Armées)">Cadre moyen (Public/Armées)</option>';
				html += '<option value="Cadre moyen (Privé)">Cadre moyen (Privé)</option>';
				html += '<option value="Technicien">Technicien</option>';
				html += '<option value="Agent de maîtrise">Agent de maîtrise</option>';
				html += '<option value="Agent, Employé (Public/Armées)">Agent, Employé (Public/Armées)</option>';
				html += '<option value="Policier, Militaire, Gendarme">Policier, Militaire, Gendarme</option>';
				html += '<option value="Employé de bureau (Privé)">Employé de bureau (Privé)</option>';
				html += '<option value="Employé de commerce">Employé de commerce</option>';
				html += '<option value="Employé de service (Privé)">Employé de service (Privé)</option>';
				html += '<option value="Ouvrier">Ouvrier</option>';
				html += '<option value="Chauffeur, Conducteur">Chauffeur, Conducteur</option>';
				html += '<option value="Salarié agricole/maritime">Salarié agricole/maritime</option>';
				html += '<option value="Retraité">Retraité</option>';
				html += '<option value="Sans emploi">Sans emploi</option>';
				html += '<option value="Rentier">Rentier</option>';
				html += '<option value="Etudiant">Etudiant</option>';
				html += '<option value="Sans profession">Sans profession</option>';
				html += '<option value="Interimaire">Interimaire</option>';
				html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['profession'] = $('select:eq(0)', parent).val();
				parent.html($this.data['profession']);
				$this.professionDepuis();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		professionDepuis: function(){
			$('.tchat').append('<span class="bubble">Depuis ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Janvier">Janvier</option>';
					html += '<option value="Février">Février</option>';
					html += '<option value="Mars">Mars</option>';
					html += '<option value="Avril">Avril</option>';
					html += '<option value="Mai">Mai</option>';
					html += '<option value="Juin">Juin</option>';
					html += '<option value="Juillet">Juillet</option>';
					html += '<option value="Aout">Aout</option>';
					html += '<option value="Septembre">Septembre</option>';
					html += '<option value="Octobre">Octobre</option>';
					html += '<option value="Novembre">Novembre</option>';
					html += '<option value="Décembre">Décembre</option>';
					html += '</select>';
				html += '<select>';
				for(var i=2015; i>=1820; i--) html += '<option value="'+i+'">'+i+'</option>';
				html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['professionDepuis'] = $('select:eq(0)', parent).val()+' '+$('select:eq(1)', parent).val();
				parent.html($this.data['professionDepuis']);
				$this.banque();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		banque: function(){
			$('.tchat').append('<span class="bubble">Quelles est votre banque ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Autre">Autre</option>';
					html += '<option value="Banque de Crédit">Banque de Crédit</option>';
					html += '<option value="Banque Nationale de Paris">Banque Nationale de Paris</option>';
					html += '<option value="Banque Populaire">Banque Populaire</option>';
					html += '<option value="Crédit Agricole">Crédit Agricole</option>';
					html += '<option value="Crédit Commercial de France">Crédit Commercial de France</option>';
					html += '<option value="Banque Postale">Banque Postale</option>';
					html += '<option value="Crédit du Nord">Crédit du Nord</option>';
					html += '<option value="Caisse d\'Epargne">Caisse d\'Epargne</option>';
					html += '<option value="CIC">CIC</option>';
					html += '<option value="LCL">LCL</option>';
					html += '<option value="Crédit Mutuel">Crédit Mutuel</option>';
					html += '<option value="Société Générale">Société Générale</option>';
					html += '</select>';
				html += '<button>Valider</button>';
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['banque'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.banqueDepuis();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		banqueDepuis: function(){
			$('.tchat').append('<span class="bubble">Depuis ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Janvier">Janvier</option>';
					html += '<option value="Février">Février</option>';
					html += '<option value="Mars">Mars</option>';
					html += '<option value="Avril">Avril</option>';
					html += '<option value="Mai">Mai</option>';
					html += '<option value="Juin">Juin</option>';
					html += '<option value="Juillet">Juillet</option>';
					html += '<option value="Aout">Aout</option>';
					html += '<option value="Septembre">Septembre</option>';
					html += '<option value="Octobre">Octobre</option>';
					html += '<option value="Novembre">Novembre</option>';
					html += '<option value="Décembre">Décembre</option>';
					html += '</select>';
				html += '<select>';
				for(var i=2015; i>=1820; i--) html += '<option value="'+i+'">'+i+'</option>';
				html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['banqueDepuis'] = $('select:eq(0)', parent).val()+' '+$('select:eq(1)', parent).val();
				parent.html($this.data['banqueDepuis']);
				$this.recap();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap: function(){
			var text  = 'Vous êtes : '+$this.data['proprietaire']+' depuis '+$this.data['proprietaireDepuis']+' ('+$this.data['habitat']+')';
				text += '<br />Vous êtes : '+$this.data['profession']+' depuis '+$this.data['professionDepuis'];
				text += '<br />Votre banque est : '+$this.data['banque']+' depuis '+$this.data['banqueDepuis'];

			text += '<br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="oui">Oui</label><label><input name="yn" type="radio" value="non">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'non'){
					$this.habitat();
				}else{
					$('.tchat').append('<span class="bubble">Merci de votre confiance<br /><a href="step3.html">Retourner au formulaire</a></span>');
					$this.scroll();
				}
			});
		},
	}
	return $this.initialize();
}

$(function(){
	new Qr({});
});