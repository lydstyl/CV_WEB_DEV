var maClass = function(options){ // Définition du nom de la fnc/class
	var $this = prototype = { // Liste des prototypes
		initialize: function(){ // Fnc de construction
			if(typeof(options.color) == 'undefined'){
				options.color = "default";
			}
			return this;
		},
		afficher: function(){
			window.setTimeout(function(){
				alert(options.color);
				$this.console();
			}, 2000);
		},
		console: function(){
			console.log(options.background);
		}
	}
	return $this.initialize(); // Constructeur()
}

var test = new maClass({ // Instanciation de la fonction
	background: 'green',
	color: 'red'
});
test.afficher();