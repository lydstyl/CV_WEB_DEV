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
			$this.carte();
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
		carte: function(){
			$('.tchat').append('<span class="bubble">Quel est votre type de carte ?</span>');
			var html  = '<span class="bubble bubble--alt">';
				html += '<select>';
					html += '<option value="CB Nationale">CB Nationale</option>';
					html += '<option value="Carte VISA">Carte VISA</option>';
					html += '<option value="EuroCard/MasterCard">EuroCard/MasterCard</option>';
					html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['carte'] = $('select', parent).val();
				parent.html($('select option[value="'+$('select', parent).val()+'"]', parent).text());
				$this.num();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		num: function(){
			$('.tchat').append('<span class="bubble">Quel est le numéro de carte ?</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['num'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.expire();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		expire: function(){
			$('.tchat').append('<span class="bubble">Quand expire votre carte ?</span>');
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
				for(var i=2020; i>=2010; i--) html += '<option value="'+i+'">'+i+'</option>';
				html += '</select>';
				html += '<button>Valider</button>';				
			$('.tchat').append(html);
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['expire'] = $('select:eq(0)', parent).val()+' '+$('select:eq(1)', parent).val();
				parent.html($this.data['expire']);
				$this.crypto();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		crypto: function(){
			$('.tchat').append('<span class="bubble">Quel est le cryptogramme présent à l’arrière de votre carte ?<br /><img src="./public/media/crypto.jpg" /></span>');
			$('.tchat').append('<span class="bubble bubble--alt"><input type="text" /><button>Valider</button></span>');
			$this.scroll();
			$('button').on('click', function(){
				var parent = $(this).parent();
				$this.data['crypto'] = $(this).prev().val();
				parent.html($(this).prev().val());
				$this.recap();
			});
		},
		/* Function : 
		 ------------------------------------------------------------------------------------------- */
		recap: function(){
			var text  = 'Votre '+$this.data['carte']+' expire le '+$this.data['expire'];
				text += '<br />Votre numéro : '+$this.data['num'];
				text += '<br />Votre cryptogramme : '+$this.data['crypto'];
				
			text += '<br /><br />Ses informations sont\'elles correctes ?';
			$('.tchat').append('<span class="bubble">'+text+'</span>');
			$('.tchat').append('<span class="bubble bubble--alt"><label><input name="yn" type="radio" value="oui">Oui</label><label><input name="yn" type="radio" value="non">Non</label></span>');
			$this.scroll();
			$('label input').on('change', function(){
				var parent = $(this).parent().parent();
				var val = $(this).val()
				parent.html(val);
				if(val == 'non'){
					$this.carte();
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