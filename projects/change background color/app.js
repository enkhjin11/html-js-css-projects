// function --> dhij ashiglh blmgte codiin tsugluulga
/*function restart(){
	console.log("game restarted");
}
restart();
function hello(name,age){
	console.log("snu mni nriig "+ name+" gdg");
	console.log("mni nas "+age);
}
hello("Enkhjin",13);
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,150);
function k(g,d){
	if (g>d){
		console.log(g);
	}else{
		console.log(d);
	}
}
k(1273,1020);*/
var body = document.getElementsByTagName('body')[0];
console.log(body);
var colors = ['#e8aeac','#e8e7ac','#bde8ac','#dcace8','#acd5e8','#e8acd4','#fc7e8b'];
var buttn = document.getElementsByTagName('button')[0];
console.log(buttn);
var i=-1;
function color(){
	random = Math.floor(Math.random()*5);
	i++;
	body.style.backgroundColor=colors[random];
	buttn.innerText = colors[random];
	if(i>=colors.length-1){
		i=-1;
	}
}