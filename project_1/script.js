/* ===== MODAL ===== */

const modal =
document.getElementById("modal");

const openBtn =
document.getElementById("openModal");

const closeBtn =
document.getElementById("closeModal");

openBtn.onclick = () => {

modal.style.display = "flex";

};

closeBtn.onclick = () => {

modal.style.display = "none";

};

window.onclick = (e) => {

if(e.target === modal){

modal.style.display = "none";

}

};


/* ===== SIGN IN / SIGN UP ===== */

const signupTab =
document.getElementById(
"signupTab"
);

const signinTab =
document.getElementById(
"signinTab"
);

const formTitle =
document.getElementById(
"formTitle"
);

const confirmBox =
document.getElementById(
"confirmBox"
);

const submitBtn =
document.querySelector(
"#authForm button"
);

signupTab.onclick = ()=>{

signupTab.classList.add(
"active"
);

signinTab.classList.remove(
"active"
);

formTitle.innerText =
"Create Account";

submitBtn.innerText =
"Create Account";

confirmBox.style.display =
"block";

};

signinTab.onclick = ()=>{

signinTab.classList.add(
"active"
);

signupTab.classList.remove(
"active"
);

formTitle.innerText =
"Welcome Back";

submitBtn.innerText =
"Sign In";

confirmBox.style.display =
"none";

};


/* ===== PASSWORD SHOW / HIDE ===== */

document.querySelectorAll(
".toggle-pass"
)

.forEach(icon=>{

icon.onclick = ()=>{

const input =
icon.previousElementSibling;

if(
input.type==="password"
){

input.type="text";

icon.classList.remove(
"fa-eye"
);

icon.classList.add(
"fa-eye-slash"
);

}

else{

input.type="password";

icon.classList.remove(
"fa-eye-slash"
);

icon.classList.add(
"fa-eye"
);

}

};

});


/* ===== PASSWORD VALIDATION ===== */

const authForm =
document.getElementById(
"authForm"
);

const password =
document.getElementById(
"password"
);

const confirmPassword =
document.getElementById(
"confirmPassword"
);

authForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const regex =

/^(?=.[A-Z])(?=.\d)(?=.[@$!%?&]).{8,}$/;

if(
!regex.test(
password.value
)
){

alert(
"Password needs 8+ chars, uppercase, number & special character."
);

return;

}

if(

confirmBox.style.display
!=="none"

&&

password.value
!==confirmPassword.value

){

alert(
"Passwords don't match!"
);

return;

}

alert(
"⚡ Success!"
);

modal.style.display =
"none";

authForm.reset();

});


/* ===== MOBILE MENU ===== */

const menuBtn =
document.querySelector(
".menu-btn"
);

const navLinks =
document.querySelector(
".nav-links"
);

menuBtn.onclick = ()=>{

if(
navLinks.style.display
==="flex"
){

navLinks.style.display =
"none";

}

else{

navLinks.style.display =
"flex";

navLinks.style.flexDirection =
"column";

navLinks.style.position =
"absolute";

navLinks.style.top =
"90px";

navLinks.style.right =
"20px";

navLinks.style.padding =
"25px";

navLinks.style.borderRadius =
"20px";

navLinks.style.background =
"rgba(10,15,35,.96)";

}

};


/* ===== NAVBAR SHADOW ===== */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(
window.scrollY>40
){

navbar.style.boxShadow =
"0 0 25px rgba(0,255,255,.18)";

}

else{

navbar.style.boxShadow =
"none";

}

});