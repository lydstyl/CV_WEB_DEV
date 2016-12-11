		function moveBlueBox(){
			$this = prototype = {
				initialize:function(){
					blueBox = document.getElementById("blueBox");
                    document.addEventListener('keydown',this.withKeydown);
					return this;
				},
				withKeydown:function(e){
                    switch (e.keyCode) {
                        case 38:
                            var top = blueBox.offsetTop;
                            console.log(top);
                            top <= 0 ? console.log("no no no !") : blueBox.style.top = top - 10+"px";
                            break;
                        case 40:
                            var top = blueBox.offsetTop;
                            console.log(top);
                            top >= 200 ? console.log("no no no !") : blueBox.style.top = top + 10+"px";
                            break;
                        case 37:
                            var left = blueBox.offsetLeft;
                            console.log(left);
                            left <= 0 ? console.log("no no no !") : blueBox.style.left = left - 10+"px";
                            break;
                        case 39:
                            var left = blueBox.offsetLeft;
                            console.log(left);
                            left >= 200 ? console.log("no no no !") : blueBox.style.left = left + 10+"px";
                            break;
                        default:
                            console.log(e.keyCode+" : no coprendo muchacho")
                            break;
                    }
				}
			}
			return $this.initialize();
		}

		o = new moveBlueBox();
