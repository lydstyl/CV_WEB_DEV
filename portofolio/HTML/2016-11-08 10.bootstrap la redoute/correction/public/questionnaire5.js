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
			$this.loyer();
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
		loyer: function(){
			$('.tchat').append('<span class="bubble">Quel est le montant de votre loyer ou prêt immobilier en euros ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['loyer'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.credit();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		credit: function(){
			$('.tchat').append('<span class="bubble">Montant des autres crédits (hors immobiliers) en cours ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['credit'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.autre();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		autre: function(){
			$('.tchat').append('<span class="bubble">Avez-vous d’autres charges mensuelles ?</span>');
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
			var text  = 'Votre loyer ou prêt immobilier est de : '+$this.data['loyer']+'€';
				text += '<br />Vos autres crédits sont de : '+$this.data['credit']+'€';
				text += '<br />Autres charges : '+$this.data['autre']+'€';
				
			text += '<br /><br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="oui">Oui</label><label><input name="yn" type="radio" value="non">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'non'){
					$this.loyer();
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