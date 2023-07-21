
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

const button = document.getElementById('myButton');
 button.addEventListener('click', function(){
   alert("We will contact you shortly.");
 });


 function showLoginPopup() {
   var popup = document.getElementById("loginPopup");
   popup.style.display = "block";
 }

 function submitLoginForm(event) {
   event.preventDefault();
   var username = document.getElementsByName("username")[0].value;
   var password = document.getElementsByName("password")[0].value;

   console.log("Username:", username);
   console.log("Password:", password);

   var popup = document.getElementById("loginPopup");
   popup.style.display = "none";
 }
