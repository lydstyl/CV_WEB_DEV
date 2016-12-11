$(document).ready(function(){
    var w = $(document).width() - 100, h = $(document).height() - 100, speed = 300;
    function goRight(){
        $("#square").animate({left:"+="+w+"px"},speed);
    }
    function goDown(){
        $("#square").animate({top:"+="+h+"px"},speed);
    }   
    function goLeft(){
        $("#square").animate({left:"-="+w+"px"},speed);
    }
    function goUp(){
        $("#square").animate({top:"-="+h+"px"},speed);
    }
    function goMad(){
        $("#square").animate({left:"+="+w+"px"},speed,function(){
            goDown();
            goLeft();
            goUp();
            goMad();
        })
    }
    goMad();
});