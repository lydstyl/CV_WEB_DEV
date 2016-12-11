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
			$this.bic();
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
		bic: function(){
			$('.tchat').append('<span class="bubble">Quel est le numéro BIC présent sur votre RIB ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['bic'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.iban();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		iban: function(){
			$('.tchat').append('<span class="bubble">Quel est le numéro IBAN présent sur votre RIB ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['iban'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.recap();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap: function(){
			var text  = 'Votre BIC : '+$this.data['bic'];
				text += '<br />Votre IBAN : '+$this.data['iban'];

			text += '<br /><br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="oui">Oui</label><label><input name="yn" type="radio" value="non">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'non'){
					$this.bic();
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