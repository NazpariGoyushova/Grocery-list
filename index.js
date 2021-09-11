var pen=document.getElementById("pen");
var text=document.getElementById("item");
var list=document.getElementById("list");
var foods=document.getElementById("foods");


pen.addEventListener("click",function(){
  var item=text.value;
  if(item===""){
    alert("you should write something");
  }
 else{
   
   var newitem=document.createElement("p");
   foods.insertBefore(newitem,foods.childNodes[0]);
   newitem.textContent="-"+item;
   newitem.addEventListener("click",function(){
     newitem.style.textDecoration="line-through";
   });

 }
});