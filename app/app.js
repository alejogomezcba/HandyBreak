
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
const myButton = document.getElementById("myBtn");
 if (document.body.scrollTop > 166 || document.documentElement.scrollTop > 70) {
   myButton.style.display = "block";
 } else {
   myButton.style.display = "none";
 }
}

function topFunction() {
  const bounceArrow = document.getElementById("bounce-arrow");
  window.scrollTo({top: 0, behavior: 'smooth'});
  bounceArrow.style.display="inline-block";
}


const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open-btn');
const menuBurger = document.getElementById('cont-menu-burger');

closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  menuBurger.style.display = "none";
  openBtn.style.display = "block";

});

openBtn.addEventListener("click", () => {
  closeBtn.style.display = "block";
  menuBurger.style.display = "flex";
  openBtn.style.display = "none";
});
