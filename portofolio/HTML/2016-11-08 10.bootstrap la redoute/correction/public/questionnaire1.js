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
			$('.tchat').append('<span class="bubble">Bonjour et bienvenue, nous allons vous accompagner tout au long de votre souscription.</span>');
			$this.civility();
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
		civility: function(){
			$('.tchat').append('<span class="bubble">Quelle est votre civilité ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="civility" type="radio" value="Monsieur">Monsieur</label><label><input name="civility" type="radio" value="Mademoiselle">Mademoiselle</label><label><input name="civility" type="radio" value="Madame">Madame</label></span>');
			$this.scroll();
			$('label input[name="civility"]').on('change', function(){
				var parent = $(this).parent().parent();
				$this.data['civility'] = $(this).val();
				parent.html($(this).val());
				$this.lastname();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		lastname: function(){
			$('.tchat').append('<span class="bubble">'+$this.data['civility']+', quel est votre nom de famille ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['lastname'] = $(this).prev().val();
				parent.html($(this).prev().val());
				if($this.data['civility'] == 'Madame'){
					$this.lastnameBorn();
				}else{
					$this.firstname();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		lastnameBorn: function(){
			$('.tchat').append('<span class="bubble">'+$this.data['civility']+' '+$this.data['lastname']+', quel est votre nom de jeune fille ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['lastnameborn'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.firstname();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		firstname: function(){
			$('.tchat').append('<span class="bubble">'+$this.data['civility']+' '+$this.data['lastname']+', quel est votre prénom ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['firstname'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.dateOfBorn();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		dateOfBorn: function(){
			$('.tchat').append('<span class="bubble">Quelle est votre date de naissance ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
				for(var i=1; i<=31; i++) html += '<option value="'+i+'">'+i+'</option>';
				html += '</select>';
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
				$this.data['dateOfBorn'] = $('select:eq(0)', parent).val()+' '+$('select:eq(1)', parent).val()+' '+$('select:eq(2)', parent).val();
				parent.html($this.data['dateOfBorn']);
				$this.born();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		born: function(){
			$('.tchat').append('<span class="bubble">Quel est votre lieu de naissance ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['born'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.etranger();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		etranger: function(){
			$('.tchat').append('<span class="bubble">Etes-vous né(e) à l’étranger ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="etranger" type="radio" value="Oui">Oui</label><label><input name="etranger" type="radio" value="Non">Non</label></span>');
			$this.scroll();
			$('label input[name="etranger"]').on('change', function(){
				$this.data['etranger'] = $(this).val();
				$('input[value!="'+$this.data['etranger']+'"]').parent('label').remove();
				$('label input').remove();
				if($this.data['etranger'] == 'Oui'){
					$this.etrangerFrom();
				}else{
					$this.nationality();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		etrangerFrom: function(){
			$('.tchat').append('<span class="bubble">Quelle est votre votre pays de naissance ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="BE">Belgique</option>';
					html += '<option value="D">Allemagne</option>';
					html += '<option value="FR">France</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['etrangerFrom'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.nationality();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		nationality: function(){
			$('.tchat').append('<span class="bubble">Quelle est votre votre nationalité ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="BE">Belge</option>';
					html += '<option value="D">Allemande</option>';
					html += '<option value="FR">Française</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['nationality'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.recap();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap: function(){
			var text  = 'Vous êtes : '+$this.data['civility']+' '+$this.data['lastname']+' '+$this.data['firstname'];
			if($this.data['civility'] == 'Madame'){
				text += '<br />Votre nom de jeune fille est : '+$this.data['lastnameborn'];
			}
			text += '<br />Vous êtes né(e) le : '+$this.data['dateOfBorn'];
			text += '<br />Votre lieu de naissance est : '+$this.data['born'];
			if($this.data['etranger'] == 'Oui'){
				text += '<br />Votre pays de naissance est : '+$this.data['etrangerFrom'];
			}
			text += '<br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="y">Oui</label><label><input name="yn" type="radio" value="n">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'n'){
					$this.civility();
					$this.scroll();
				}else{
					$this.cp();
					$this.scroll();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		cp: function(){
			$('.tchat').append('<span class="bubble">Quel est votre code postal ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['cp'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.city();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		city: function(){
			$('.tchat').append('<span class="bubble">Quel est votre ville ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['city'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.address();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		address: function(){
			$('.tchat').append('<span class="bubble">Quel est votre adresse (N°, voie) ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['address'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.address2();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		address2: function(){
			$('.tchat').append('<span class="bubble">Quel est votre complément d\'adresse ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['address2'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.adv();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		adv: function(){
			$('.tchat').append('<span class="bubble">Votre e-mail et votre numéro de téléphone portable sont des informations nécessaires pour la signature de votre contrat. Disposez-vous de ces informations ? ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="y">Oui</label><label><input name="yn" type="radio" value="n">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'n'){
					$('.tchat').append('<span class="bubble">Vous ne pourrez pas signer votre contrat en ligne, vous recevrez un contrat par courrier à l\'adresse indiquée précédemment</span>');
					$this.scroll();				
				}else{
					$this.phone();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		phone: function(){
			$('.tchat').append('<span class="bubble">Quel est votre e-mail ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['phone'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.mail();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		mail: function(){
			$('.tchat').append('<span class="bubble">Quel est votre numéro de portable ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['mail'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.recap2();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap2: function(){
			var text  = 'Votre adresse : ';
				text += '<br />'+$this.data['address'];
				text += '<br />'+$this.data['address2'];
				text += '<br />'+$this.data['cp']+' '+$this.data['city'];
				text += '<br />Votre mail :';
				text += '<br />'+$this.data['mail'];
				text += '<br />Votre téléphone :';
				text += '<br />'+$this.data['phone'];
				text += '<br /><br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="y">Oui</label><label><input name="yn" type="radio" value="n">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'n'){
					$this.cp();
				}else{
					$this.familly();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		familly: function(){
			$('.tchat').append('<span class="bubble">Quelle est votre situation familiale ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="Celibataire">Célibataire</option>';
					html += '<option value="Divorce(e)">Divorcé(e)</option>';
					html += '<option value="Union libre">Union libre</option>';
					html += '<option value="Marie(e)">Marié(e)</option>';
					html += '<option value="Separe(e)">Separé(e)</option>';
					html += '<option value="Veuf(Veuve)">Veuf(Veuve)</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['familly'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				if($this.data['familly'] == 'Union libre' || $this.data['familly'] == 'Marie(e)'){
					$this.civility2();
				}else{
					$this.children();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		civility2: function(){
			$('.tchat').append('<span class="bubble">Quelle est la civilité de votre conjoint ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="civility" type="radio" value="Monsieur">Monsieur</label><label><input name="civility" type="radio" value="Madame">Madame</label></span>');
			$this.scroll();
			$('label input[name="civility"]').on('change', function(){
				var parent = $(this).parent().parent();
				$this.data['civility'] = $(this).val();
				parent.html($(this).val());
				$this.lastname2();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		lastname2: function(){
			$('.tchat').append('<span class="bubble">Quel est le nom de votre conjoint ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['lastname'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.firstname2();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		firstname2: function(){
			$('.tchat').append('<span class="bubble">Quel est le prénom de votre conjoint ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['firstname'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.children();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		children: function(){
			$('.tchat').append('<span class="bubble">Avez-vous des enfants à charge ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="children" type="radio" value="Oui">Oui</label><label><input name="children" type="radio" value="Non">Non</label></span>');
			$this.scroll();
			$('label input[name="children"]').on('change', function(){
				$this.data['children'] = $(this).val();
				$('input[value!="'+$this.data['children']+'"]').parent('label').remove();
				$('label input').remove();
				if($this.data['children'] == 'Oui'){
					$this.childrenNb();
				}else{
					$this.recap3();
				}
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		childrenNb: function(){
			$('.tchat').append('<span class="bubble">Nombre d\'enfant à charge ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="1">1</option>';
					html += '<option value="2)">2</option>';
					html += '<option value="3">3</option>';
					html += '<option value="4">4</option>';
					html += '<option value="5">5</option>';
					html += '<option value="6 et plus">6 et plus</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['childrenNb'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.recap3();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap3: function(){
			var text  = 'Vous êtes : '+$this.data['familly'];
			if($this.data['familly'] == 'Union libre' || $this.data['familly'] == 'Marie(e)'){
				text += '<br />Votre votre conjoint est : '+$this.data['civility']+' '+$this.data['firstname']+' '+$this.data['lastname'];
			}
			if($this.data['children'] == 'Non'){
				text += '<br />Vous n\'avez pas d\'enfant à charge.';
			}else{
				text += '<br />Nombre d\'enfant(s) à charge : '+$this.data['childrenNb'];
			}

			text += '<br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="y">Oui</label><label><input name="yn" type="radio" value="n">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'n'){
					$this.familly();
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