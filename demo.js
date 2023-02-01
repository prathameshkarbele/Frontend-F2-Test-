const img1 = document.getElementById("img1");
const formContainer = document.getElementById("formContainer");
const registerBtn = document.getElementById("registerBtn");
const displayContainer = document.getElementById("displayContainer");
const diceContainer = document.getElementById("diceContainer");
const dice = document.getElementById("dice");
const diceImg = document.getElementById("diceImg");
const couponContainer = document.getElementById("couponContainer");
let img1Clicked = false;
let diceRolls = [];

img1.addEventListener("click", function() {
if (!img1Clicked) {
formContainer.style.display = "block";
img1Clicked = true;
}
});

registerBtn.addEventListener("click", function() {
const name = document.getElementById("name").value;
const username = document.getElementById("username").value;
localStorage.setItem("name", name);
localStorage.setItem("username", username);
formContainer.style.display = "none";
});

const img2 = document.getElementById("img2");
img2.addEventListener("click", function() {
displayContainer.style.display = "block";
formContainer.style.display = "none";
const name = localStorage.getItem("name");
const username = localStorage.getItem("username");
document.getElementById("displayName").innerHTML = "Name: " + name;
document.getElementById("displayUsername").innerHTML = "Username: " + username;
});

const img3 = document.getElementById("img3");
img3.addEventListener("click", function() {
diceContainer.style.display = "block";
displayContainer.style.display = "none";
});

dice.addEventListener("click", function() {
const roll = Math.floor(Math.random() * 6) + 1;
diceRolls.push(roll);
diceImg.src = `dice-png-41772 (1).png`;
if (diceRolls.length === 3) {
const sum = diceRolls.reduce((acc, curr) => acc + curr, 0);
if (sum > 10) {
img4.style.display = "block";
} else {
alert("You need to score more than 10. Try again.");
}
}
});

const img4 = document.getElementById("img4");
img4.addEventListener("click", function() {
couponContainer.style.display = "block";
diceContainer.style.display = "none";
const coupon = Math.random().toString(36).substr(2, 12);
document.getElementById("coupon").innerHTML = "Coupon: " + coupon;
});



// const img1 = document.getElementById("img1");
// const formContainer = document.getElementById("formContainer");
// const registerBtn = document.getElementById("registerBtn");
// const displayContainer = document.getElementById("displayContainer");
// let img1Clicked = false;

// img1.addEventListener("click", function() {
//   if (!img1Clicked) {
//     formContainer.style.display = "block";
//     img1Clicked = true;
//   }
// });

// registerBtn.addEventListener("click", function() {
//   const name = document.getElementById("name").value;
//   const username = document.getElementById("username").value;
//   localStorage.setItem("name", name);
//   localStorage.setItem("username", username);
//   formContainer.style.display = "none";
// });

// const img2 = document.getElementById("img2");
// img2.addEventListener("click", function() {
//   displayContainer.style.display = "block";
//   formContainer.style.display = "none";
//   const name = localStorage.getItem("name");
//   const username = localStorage.getItem("username");
//   document.getElementById("displayName").innerHTML = "Name: " + name;
//   document.getElementById("displayUsername").innerHTML = "Username: " + username;
// });







// const img1 = document.getElementById("img1");
// const formContainer = document.getElementById("formContainer");
// const registerBtn = document.getElementById("registerBtn");
// const displayContainer = document.getElementById("displayContainer");
// let img1Clicked = false;

// img1.addEventListener("click", function() {
//   if (!img1Clicked) {
//     formContainer.style.display = "block";
//     img1Clicked = true;
//   }
// });

// registerBtn.addEventListener("click", function() {
//   const name = document.getElementById("name").value;
//   const username = document.getElementById("username").value;
//   localStorage.setItem("name", name);
//   localStorage.setItem("username", username);
//   formContainer.style.display = "none";
// });

// const img2 = document.getElementById("img2");
// img2.addEventListener("click", function() {
//   displayContainer.style.display = "block";
//   formContainer.style.display = "none";
//   const name = localStorage.getItem("name");
//   const username = localStorage.getItem("username");
//   document.getElementById("displayName").innerHTML = "Name: " + name;
//   document.getElementById("displayUsername").innerHTML = "Username: " + username;
// });




