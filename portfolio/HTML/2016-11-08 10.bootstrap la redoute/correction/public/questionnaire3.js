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
			$this.salaire();
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
		salaire: function(){
			$('.tchat').append('<span class="bubble">Quel est votre salaire net mensuel en €?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['salaire'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.prestation();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		prestation: function(){
			$('.tchat').append('<span class="bubble">Bénéficiez-vous de prestation familiale et/ ou d\'aide au logement ?<br />Si non mettre 0</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['prestaion'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.autre();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		autre: function(){
			$('.tchat').append('<span class="bubble">Précisez le montant des autres revenus mensuels que vous percevez ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['autre'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.recap();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap: function(){
			var text  = 'Votre revenu est de : '+$this.data['salaire']+'€';
				text += '<br />Prestation familliale/Aide au logement : '+$this.data['prestaion']+'€';
				text += '<br />Autres revenus : '+$this.data['autre']+'€';

			text += '<br /><br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="oui">Oui</label><label><input name="yn" type="radio" value="non">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'non'){
					$this.salaire();
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