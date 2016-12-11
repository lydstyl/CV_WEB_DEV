var puissance4 = function(options){
    $this = prototype = {
        playerBox : document.getElementsByTagName("DIV"), 
        playerNb : 1,
        playerMark : "X",
        buttons : document.getElementsByTagName("INPUT"),
        tds : document.getElementsByTagName("TD"),
        marksTab : [['','','',''],['','','',''],['','','',''],['','','','']],
        initialize:function(){     
            this.playerBox[0].innerHTML = "Joueur "+this.playerNb;
            for (var columnNb = 0; columnNb < 4; columnNb++) {
                (function(columnNb){
                    var button = $this.buttons[columnNb];
                    button.addEventListener("click", function(){
                        $this.putMarkInColumn(columnNb);
                    });
                })(columnNb);
            }
            return this;
        },
        putMarkInColumn:function(columnNb){
            var row = "", col = columnNb;
            this.virtualizeMarksTab();
            if(this.marksTab[3][columnNb] == ""){row=3;
            }else if(this.marksTab[2][columnNb] == ""){row=2;
            }else if(this.marksTab[1][columnNb] == ""){row=1;
            }else{
                var markInRow0 = this.tds[0*4+columnNb].innerHTML;
                markInRow0 == ""? row=0 : row="coup impossible !!";
            }
            if(row != "coup impossible !!") { //si coup possible
                this.tds[row*4+col].innerHTML = this.playerMark;
                this.isThereAWinner();
                this.refreshPlayerNb();
            }
        },
        isThereAWinner:function(){            
            this.virtualizeMarksTab(); 
            var t = this.marksTab, string = "", winner = false;
            for(var i = 0; i<4; i++){
                var string = t[i].join("");
                if(string == "XXXX" || string == "OOOO") winner = true;
            }
            for(var n = 0; n<4; n++){
                string = "";
                for(var i = 0; i<4; i++){
                    string += t[i][n];
                    if(string == "XXXX" || string == "OOOO") winner = true;
                }
            }
            var diag1 = t[0][0] + t[1][1] + t[2][2] + t[3][3], diag2 = t[0][3] + t[1][2] + t[2][1] + t[3][0];
            if(diag1 == "XXXX" || diag1 == "OOOO") winner = true;
            if(diag2 == "XXXX" || diag2 == "OOOO") winner = true;

            if(winner){
                alert("Joueur gagnant : "+this.playerNb);
                document.location.reload();
            }
        },
        refreshPlayerNb:function(){
            if(this.playerNb % 2){
                this.playerNb = 2;
                this.playerMark = "O";
            }else{
                this.playerNb = 1;
                this.playerMark = "X";
            }
            this.playerBox[0].innerHTML = "Joueur "+this.playerNb;
        },
        virtualizeMarksTab:function(){
            tds = document.getElementsByTagName("TD");
            for (var row = 0; row < 4; row++) {
                for (var column = 0; column < 4; column++) {
                    this.marksTab[row][column] = tds[row*4+column].innerHTML
                }
            }
        }
    }
    return $this.initialize();
}
new puissance4({
/*    player1Color : "red",
    player2Color: "blue"*/
});