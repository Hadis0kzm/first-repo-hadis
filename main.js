let display = document.querySelector(".display");
let keys = document.querySelectorAll(".show");
let calculate = document.querySelector(".calculate")
let AC = document.querySelector(".Allclear");
let C = document.querySelector(".clear");

//نمایش
keys.forEach(item=>{item.addEventListener("click",showButtons )});

function showButtons (event){
  if(display.innerText==0){
    display.innerText=event.target.innerText;  
  }
  else{
    display.innerText += event.target.innerText;  
  }
}

//عملیات ها
calculate.addEventListener("click",function(){
  let x=display.innerText;
  display.innerText = eval(x);
})

 //دکمه ac
 AC.addEventListener("click",function () {
   display.innerText =0;
 })

 //دکمهc
C.addEventListener("click",clear);
function clear(event){
  let a=display.innerText;
  if(a.length ==1){
    display.innerText=0;
  }else{
  display.innerText= a.substring(0,(a.length)-1)
}
}
