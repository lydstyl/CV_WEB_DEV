/*DECLARATIONS*/
var p =[{
		name: "Joueur 1", color: "blue", mark: "X"
	},{
		name: "Joueur 1", color: "blue", mark: "X"
	},{
		name: "Joueur 2", color: "red", mark: "O",
	}
];
var playerBox = document.getElementById("player"); /*Place where is wrietten player 1 or 2*/
var cases = document.getElementsByClassName("case");
function contentPlayerBox(player, color){
	with(playerBox){
		innerHTML = player;
		style.color = color;
	}	
}
function same3Color(case1,case2,case3){
	/*Check if the 3 cases in parameter are the same color*/
	var color1 = cases[case1].style.color;
	var color2 = cases[case2].style.color;
	var color3 = cases[case3].style.color;
	if(color1 != "" && (color1 == color2 && color2 == color3)){
		return true;
	}else{
		return false;
	}
}
function line(){
	/*Check if there is a line horyzontaly, verticaly and diagonaly*/
	if(
		same3Color(0,1,2) || same3Color(3,4,5) || same3Color(6,7,8) ||
		same3Color(0,3,6) || same3Color(1,4,7) || same3Color(2,5,8) ||
		same3Color(0,4,8) || same3Color(2,4,6)
	)
		{return true;
	}else{
		return false;}
}
function emptyCase(){	
	var emptyCase = false;
	for(var i = 0; i<9; i++){
		if(cases[i].style.color == ""){
			emptyCase = true;
		}
	}
	if(emptyCase == false){
		gameOver("Match nul");
	}
}
function gameOver(message){
	alert(message);
	window.location.reload();/*refresh page*/	
}
/*PROCESS*/
contentPlayerBox(p[0].name, p[0].color);
for(var i=0, il=cases.length;i<il;i++){
	cases[i].addEventListener(
		"click",function(){
			if(this.style.color == ""){
				this.innerHTML = p[0].mark;
				this.style.color = p[0].color;
				if(line()){
					gameOver("Le gagnant est "+p[0].name);					
				}else{
					if(playerBox.innerHTML == p[1].name){
						p[0].name = p[2].name;
						p[0].color = p[2].color;
						p[0].mark = p[2].mark;
					}else{
						p[0].name = p[1].name;
						p[0].color = p[1].color;
						p[0].mark = p[1].mark;
					}
				emptyCase();/*in case of a draw*/
				}		
				contentPlayerBox(p[0].name, p[0].color);
			}
		}
	)		
};