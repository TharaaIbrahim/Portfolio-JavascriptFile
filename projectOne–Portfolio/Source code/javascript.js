const hamburger=document.getElementById('hamburger');
const navbar=document.getElementById('navbar');
hamburger.addEventListener('click',() => {
     navbar.classList.toggle('show');
});
let darkMode=document.getElementById("toggle-btn");
let sections=document.getElementsByTagName("section");
let innerDiv=document.getElementsByClassName("divBlack");
let grayDiv=document.getElementsByClassName("divGray");
let bodyDark=document.body;
darkMode.addEventListener('click',()=>{
      for(let i=0;i<=1;i++){grayDiv[i].classList.toggle('Dark');}
      for(let i=0;i<6;i++){ innerDiv[i].classList.toggle('Dark');}
      btn.classList.toggle('Dark');
      darkMode.classList.toggle('Dark');
      bodyDark.classList.toggle('Dark');
      if(darkMode.innerHTML==="Dark"){
            darkMode.innerHTML="Light";
      }else{ darkMode.innerHTML="Dark";}
      for(let i=1;i<8;i++){
      sections[i].classList.toggle('Dark');}
});
const btn=document.getElementById("showMore");
const card=document.querySelectorAll(".more");
btn.addEventListener('click', () =>{
      if(btn.innerHTML==="Show More"){btn.innerHTML="Show Less";}
      else{btn.innerHTML="Show More";}
      for(let i=0;i<2;i++){card[i].classList.toggle('show');}  
});
//SLIDER    
let images=['project2.png','project1.png','https://www.srmist.edu.in/sites/admissionindia.ac/files/images/coming-soon.png']
let links=["https://tharaaibrahim.github.io/website/","https://tharaaibrahim.github.io/Sports-website/","#"]
let caption=['Cloned Website','Sports Website','Project 3']
let slider=document.getElementById('slider');
let pCaption=document.getElementById('caption');
let previousIcon=document.getElementById("previousIcon");
let nextIcon=document.getElementById("nextIcon");
let websitesLink=document.getElementById("websitesLink");
previousIcon.addEventListener('click',previous);
nextIcon.addEventListener('click',next);
let num=0;
function next(){
num++;
if(num>=images.length){num=0;}
slider.src=images[num]
pCaption.innerHTML=caption[num];
websitesLink.href=links[num];
}
function previous(){
      num--;
      if(num<0){num=images.length-1}
      slider.src=images[num];
      pCaption.innerHTML=caption[num];
      websitesLink.href=links[num];
}
