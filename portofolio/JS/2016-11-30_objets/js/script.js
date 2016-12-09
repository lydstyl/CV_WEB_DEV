/*
var maClass= function(){ //définition du nom de la fnc/class
    var prot = protoype = { //Liste des prototypes
        initialize:function(){ //Fnc de construction
            this.val="Ok";
            return this;
        },
        afficher:function(){
            alert(this.val);
        }
    }
    return prot.initialize(); // Constructeur
}

var test = new maClass(); //Instanciation de la fonction
test.afficher(); 


*/

function maClass(options){ 
    var $this = prototype = { 
        initialize:function(){
            if(typeof(options.color) == 'undefined') options.color = "default";
            return this;
        },
        afficher:function(){
            window.setTimeout(function(){
                alert(options.color);
                $this.console();
            }, 2000);
        },
        console: function(){
            console.log(options.background);
        }
    }
    return $this.initialize(); // Constructeur
}

var test = new maClass({
    background:'green',
    //color:'red'
});

test.afficher();

/*var uneClass = function(){};
alert(uneClass.prototype);*/