$(function(){
    function changeImage(){
        var t = $("#gallery").css('backgroundImage');
        console.log(t);
        //console.log(t{url});
        var numImg = Number($("#gallery").css('backgroundImage')[99]);

        numImg < 3 ? numImg ++ : numImg = 1;
        $("#gallery").css("backgroundImage","url('img/" + numImg + ".jpg')");
    } 
    setInterval(
        function(){ 
            $("#bar").animate({height:"100%"},1000,function(){changeImage()});
            $("#bar").animate({height:"10%"},1000);
        },4000
    );
});