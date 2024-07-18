const btn=document.getElementsByClassName("btn")[0];
const hexacolor=document.getElementsByClassName("hexacolor")[0];
let body=document.body;

const arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
btn.addEventListener('click',function(){
    let color='#';
    for(let i=0;i<6;i++){
        const random=parseInt(Math.random()*16);
        color+=arr[random];
    }
    hexacolor.innerText=color;
    body.style.backgroundColor=color;
    color="";
   
})
