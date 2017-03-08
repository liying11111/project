var imgs = document.querySelectorAll(".food img");
	for(var i=0;i<imgs.length;i++){
		 imgs[i].code=i;
		imgs[i].onmouseover = function(){
			this.src = "main/"+this.code+".png";
		}
		imgs[i].onmouseout = function(){
			this.src = "main/"+this.code+this.code+".png";
		}
	}

var imgWrap = document.querySelector(".div0 img");
var liWrap = document.querySelectorAll(".div0 li");
  var a=0
  var time = setInterval(function(){
  	a++;
  	if(a>2){
  		a=0
  	}
  	imgWrap.src = "rend2/Banner"+a+".jpg";
  	for(var c=0;c<liWrap.length;c++){
  		liWrap[c].style.background = "#eee";
  	}
  	liWrap[a].style.background = "red";
  },3000)


  for(var e=0;e<liWrap.length;e++){
  	liWrap[e].no = e;
  	liWrap[e].onmouseover = function(){
  		//不换路径
  		imgWrap.src="rend2/Banner"+this.no+".jpg";
  		for(var h=0;h<liWrap.length;h++){
  			liWrap[h].style.background = "#eee";
  		}
  		this.style.background = "red";
  	}
  }



    var uls = document.querySelectorAll(".main ul");
	var arrImg = randArr();
	var imgArr = [];
	for(var j=0;j<arrImg.length;j++){
		var img = new Image();
		img.src ="rend2/"+arrImg[j]+".jpg";
		img.className = "picture";
		img.style.width = "330px";
		imgArr.push(img);
    }

	img.onload = function(){
		for(var k=0;k<imgArr.length;k++){
	        var li = document.createElement("li");
	        li.innerHTML='<div class="hui" style="width: 330px"><img src="main/sar.png" class="search"></div>'
	        li.appendChild(imgArr[k]);
	        var ulHeightArr = [];
		        for(var z=0;z<uls.length;z++){
		            ulHeightArr.push(uls[z].offsetHeight);
		            }
			    var minHeight = ulHeightArr[0];
		        var minIndex = 0;
		        for(var a=0;a<ulHeightArr.length;a++){
		            if(minHeight>ulHeightArr[a]){
		            	minHeight=ulHeightArr[a]
		                minIndex=a;
		            }
		        }
	            uls[minIndex].appendChild(li);
			}

			var imgLi = document.querySelectorAll(".main li");
			var picture = document.querySelectorAll(".picture");
			var huis = document.querySelectorAll(".hui");
			var searchs = document.querySelectorAll(".search");
			var fangda = document.querySelector(".fangda");
			var fangdaImg = document.querySelector(".fangdaImg");
			var bigImg = document.querySelector(".fangdaImg img");	
			var h = window.innerHeight;
			var w = window.innerWidth;
			var bol = true;
			for(var b=0;b<imgLi.length;b++){
				imgLi[b].num = b;
			    imgLi[b].onmousemove = function(){
				huis[this.num].style.height = this.offsetHeight + "px";
				huis[this.num].style.width = this.offsetWidth + "px";
				huis[this.num].style.display = "block";
			}
			imgLi[b].onmouseleave = function(){
			    huis[this.num].style.display = "none";
			}
			imgLi[b].onclick = function(){
				var imgH = this.offsetHeight;
				var imgW = this.offsetWidth;
				if(imgH > h/2){
					imgH = h/2-10;
					imgW = imgW * h / imgH / 2;
				}
				if(bol){
					fangda.style.display = "block";
					fangda.style.height = h + "px";
					fangda.style.width = w + "px";
					fangdaImg.style.width = imgW * 2 + "px";
					fangdaImg.style.height = imgH * 2 + "px";
					fangdaImg.style.top = (h - imgH*2)/2+ "px";
					fangdaImg.style.left = (w - imgW*2)/2 + "px";
					bigImg.src = picture[this.num].getAttribute("src");
					bigImg.style.width = imgW * 1.95 + "px";
					bigImg.style.height = imgH * 1.95 + "px";
					bigImg.style.top = (imgH*0.05)/2 + "px";
					bigImg.style.left = (imgW*0.05)/2 + "px";
				}
				fangda.onclick = function(){
					this.style.display = "none";
				}
			}
		}
	}




//一组不重复的数组
function randArr(){
	var arr1 = [];
	while(arr1.length < 76){
		var bol = true;
		var num = randNum(0,75);
		for(var i=0;i<arr1.length;i++){
			if(arr1[i] == num){
				bol=false;
			}
		}
		if(bol == true){
			arr1.push(num);
		}
	}
	return arr1;
}
// console.log(randArr());

function randNum(min,max){
		return parseInt(Math.random() * (max - min+1))+min;
	}
