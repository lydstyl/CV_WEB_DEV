$( function() {
    $("h2").next().hide();
    $("h2:first").next().show();
    $("h2 input").hide();
    $("h2 input").click(function(){
        $(this).parent().next("form").slideDown(500);
    });
    $( "#datepicker" ).datepicker({
        changeYear: true,
        changeMonth: true,
        gotoCurrent: true,
        dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
        dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
        monthNamesShort: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre" ],
        prevText: "Préc",
        nextText: "Suiv",
        yearRange: "1920:2016",
        dateFormat: 'dd-mm-yy',
        /*onClose: $( "#datepicker" ).css({colo:"green"})*/
    });
    $("#datepicker").blur(function(){
        $(this).css("color","green");
    });
    function check2(){
        var ok = true;
        $(this).parent().find("[data-regex]").each(function(i,elm){
            if($(elm).css("color") != "rgb(0, 128, 0)")ok = false;
        });
        if(ok){
            indexBoutonSuivant = $(this).index("[value='suivant']");
            if(indexBoutonSuivant == 2){
                window.open("./pop.html", "fin", "width=300,height=200"); //pop up s'ouvre
            }else{
                $(this).parent().slideUp(500); // ferme l'element ou se trouve le bouton
                $(this).parent().prev().find('input').show();  //fait apparaitre le bouton modifier
                $(this).parent().next().next().slideDown(500); // ouvre l'étape suivante
            }
        }else{
            alert("Merci de corriger votre saisie avant.")
        }
    }
    function check(elm){
        console.log(elm);
        elm = typeof(elm.target) != "undefined" ? elm.target : elm;
        var res = new RegExp(elm.getAttribute('data-regex')).test(elm.value);
        elm.style.color = res ? 'green' : 'red';
        elm.setAttribute('data-ok', res ? 'true' : 'false');
        console.log(elm.getAttribute(res ? 'data-good' : 'data-error'));
        return res;
    }	
    $("[value='suivant']").click(check2); // Ajout du listener sur les boutons "suivant"
    // Ajout du listener blur sur les éléments qui ont une data-regex
    var field = document.querySelectorAll('[data-regex]');
    for(var i=0, il=field.length; i<il; i++){
        field[i].addEventListener('blur', check);
    } 
});