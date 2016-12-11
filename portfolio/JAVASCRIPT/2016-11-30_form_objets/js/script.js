var maClass= function(){ //définition du nom de la fnc/class
    var $this = protoype = { //Liste des prototypes
        initialize:function(){ //Fnc de construction
            this.val="Ok";
            return this;
        },
        afficher:function(){
            alert(this.val);
        }
    }
    return $this.initialize(); // Constructeur
}

var test = new maClass(); //Instanciation de la fonction
test.afficher(); 






/*var test = new maClass({ // Instanciation de la fonction
	background: 'green',
	color: 'red'
});
test.afficher();*/



/*var field = document.querySelectorAll('[data-regex]');
function check(elm){
    elm = typeof(elm.target) != "undefined" ? elm.target : elm;
    var res = new RegExp(elm.getAttribute('data-regex')).test(elm.value);
    elm.style.border = "1px solid "+(res ? 'green' : 'red');
    elm.setAttribute('data-ok', res ? 'true' : 'false');
    console.log(elm.getAttribute(res ? 'data-good' : 'data-error'));
    return res;
}	
for(var i=0, il=field.length; i<il; i++) field[i].addEventListener('blur', check);*/