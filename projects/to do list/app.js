//ES6 nemeltuud
//JS ecmascript ES1-ES5
//var --> let, const
var a=5;
var a=6;
let b=10;
const pi = 3.14;
//addEventListener --> browser deer hiigdeh uildeliig todorhoildog onclick
// click,scroll,input.........
const btn = document.getElementsByTagName('button')[0];
console.log(btn);
const ol = document.getElementsByTagName('ol')[0];
const input = document.getElementsByTagName('input')[0];
btn.addEventListener("click", function add(){
if(input.value==""){
alert("Cannot be empty");
}else{
// createElement('p') --> shine tag uusgeh func
let li = document.createElement('li');
console.log('li');
// appendChild() --> uusgesen tag-aa uur tag dotor oruulah func
li.innerText = input.value;
ol.appendChild(li);
input.value="";
const delBtn = document.createElement('button');
delBtn.innerHTML = '<i class="bi bi-trash"></i>';
// className --> tag-d class ner uguh func
delBtn.className = 'delete';
li.appendChild(delBtn);
//<i class="bi bi-check-square"></i>
const checkBtn = document.createElement('button');
checkBtn.innerHTML = '<i class="bi bi-check-square"></i>';
checkBtn.className = 'check';
li.appendChild(checkBtn);
}
});
ol.addEventListener('click',function toDo(e){
console.log(e.target);
let olEl = e.target;
let liEl = olEl.parentElement;
console.log(liEl);
// parentElement --> tag-iin dotorh tag ruu handah
let dltEl = liEl.parentElement;
console.log(dltEl);
// className -> class-iin neriig shalgah
if(olEl.className == 'bi bi-trash'){
dltEl.remove();
}else if(olEl.className == 'bi bi-check-square'){
//alert("done");
// classList , className --> tag deer shineer class uusgej ugdug
// classList --> toggle
let check = liEl.parentElement;
check.classList.toggle('checked');
}
});