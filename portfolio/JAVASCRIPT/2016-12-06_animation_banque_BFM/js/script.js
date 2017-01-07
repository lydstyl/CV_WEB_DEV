$(function(){
    var speed = 160;
    function writeImg(){
        hideAll();
        $("img").eq(0).show();
        var i = 0, num;
        var myInterval = window.setInterval(function(){
            num = $("img").eq(0).attr("src");
            num = num[6]+num[7];
            i<10? num = $("img").eq(0).attr("src", "./img/0"+i+".png") : num = $("img").eq(0).attr("src", "./img/"+i+".png");
            i++;
            if(i == 29){
                clearInterval(myInterval);
                writeTexte();
            }
        },speed)        
    }
    function writeTexte(){
        var i = 0;
        var myInterval = window.setInterval(function(){
            $("span").eq(i).show();
            i++;
            if(i == 9){
                clearInterval(myInterval);
                writeLogo();
            }
        },speed*5)
    }
    function writeLogo(){
            $("img").eq(1).show();
            setTimeout(function(){
                writeImg();
            },speed*30)
    }
    function hideAll(){
        $("span").hide();
        $("img").eq(0).hide();
        $("img").eq(1).hide();
    }
    writeImg();
})