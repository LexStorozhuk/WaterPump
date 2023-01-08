let scrl=1;
window.onscroll = function() { 
  document.getElementById("two").classList.add('intro_two');
  if (window.innerWidth < 440){
    let one = document.querySelector(".intro_two");
    one.style.display = "block";
  }
}
function blue() {

}
// window.onload = function () {
//   window.onscroll = function () {
//     if (document.body.scrollTop > 30) {
//       document.getElementById("two").class = "intro_two";
//     }
//   };
// };
let count = 0;
function counting() {
  count++;
  let one = document.querySelector(".wrapper_bottle");
  one.style.display = "block";
  two = document.querySelector(".gradient_break_point");
  three = document.querySelector(".gradient_break_point");
  fourth = document.querySelector(".button_zero_left_inside");
  two.style.height = "590%";
  three.style.width = "420px";
  fourth.style.border ="none"
  if (count > 1) {
    let one = document.querySelector(".wrapper_bottle");
    two = document.querySelector(".gradient_break_point");
    one.style.display = "none";
    two.style.height = "100%";
    count = 0;
  }
}
function fullImg() {
  let one = document.querySelector(".pop_full");
  one.style.display = "block";
}
function close_pop() {
  let one = document.querySelector(".pop_full");
  two = document.querySelector(".button_forward");
  thrid = document.querySelector(".button_back");

  one.style.display = "none";
  two.style.display = "none";
  thrid.style.display = "none";
}
let about = 0;
function openAbout() {
  let one = document.querySelector(".pop_about");
  two = document.querySelector(".button_zero_left_inside_two");
  
  one.style.display = "block";
  two.style.border ="none"

  if (about == 0){
    let one = document.querySelector(".bottle2 img");
    two = document.querySelector(".grid_body");

    two.style.top ="-120px"
    one.style.visibility ="hidden"
  }
}
function closeAbout() {
  ++about;
  if (about == 2) {
    let one = document.querySelector(".pop_about");
    two = document.querySelector(".pop_about");
    three = document.querySelector(".grid_body");
    fourth = document.querySelector(".bottle2 img");

    one.style.display = "none";
    two.style.top ="100px"
    three.style.top ="40px"
    fourth.style.visibility ="visible"
    about = 0;
  }
}
function openContacts() {
  if (window.innerWidth > 440) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");

    one.style.animation = "zero_left 2s forwards";
    two.style.display = "block";

  }
  if (window.innerWidth < 440) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");
    three = document.querySelector(".nav_bar");
    fourth = document.querySelector(".button_zero_left_inside_three");
    fourth.style.border ="none"

    one.style.animation = "none";
    two.style.display = "flex";
    three.style.height ="105px"
  }
}
let contact = 0;
function closeContacts() {
  ++contact;
  if ((contact == 2, window.innerWidth > 440)) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");
    one.style.animation = "zero_left_zero_position 2s forwards";
    two.style.display = "none";
    contact = 0;
  }
  if ((window.innerWidth < 440, contact == 2)) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");
    three = document.querySelector(".nav_bar");
    one.style.animation = "none";
    two.style.display = "none";
    three.style.height ="90px"
    contact = 0;
  }
}
let num = 0,
  numTwo = 0,
  numThree = 0;
function openButton() {
  let one = document.querySelector(".png_inside_button");
 
  one.style.display = "block";
  ++num;
  if (num === 2) {
    one.style.display = "none";
    num = 0;
  }
}
function openButtonTwo() {
  let one = document.querySelector(".png_inside_button_two");
  one.style.display = "block";
  ++numTwo;
  if (numTwo === 2) {
    one.style.display = "none";
    numTwo = 0;
  }
}
function openButtonThree() {
  let one = document.querySelector(".png_inside_button_three");
  two=document.querySelector (".button_zero_left");
  one.style.display = "block";
  two.style.border = "none"
  ++numThree;
  if (numThree === 2) {
    one.style.display = "none";
    // two.style.border = "solid 1px white"
    numThree = 0;
  }
}
function imgId1() {
  document.getElementById("demo").src = "1.png";
  a = 1;
  let two = document.querySelector(".button_forward");
  thrid = document.querySelector(".button_back");

  two.style.display = "block";
  thrid.style.display = "block";
}

function imgId2() {
  document.getElementById("demo").src = "2.jfif";
  a = 2;
  let two = document.querySelector(".button_forward");
  thrid = document.querySelector(".button_back");
  two.style.display = "block";
  thrid.style.display = "block";
}

function imgId3() {
  document.getElementById("demo").src = "3.png";
  a = 3;
  let two = document.querySelector(".button_forward");
  thrid = document.querySelector(".button_back");
  two.style.display = "block";
  thrid.style.display = "block";
}

function imgId4() {
  document.getElementById("demo").src = "4.jfif";
  a = 4;
  let two = document.querySelector(".button_forward");
  thrid = document.querySelector(".button_back");
  two.style.display = "block";
  thrid.style.display = "block";
}
let a = 0;

const arr = ["1.png", "2.jfif", "3.png", "4.jfif"];
function goForward() {
  ++a;
  if (a == 2) {
    document.getElementById("demo").src = arr[1];
  }
  if (a == 3) {
    document.getElementById("demo").src = arr[2];
  }
  if (a == 4) {
    document.getElementById("demo").src = arr[3];
  }
  if (a == 5) {
    document.getElementById("demo").src = arr[0];
    a = 1;
  }
}
function goBack() {
  --a;
  if (a == 1) {
    document.getElementById("demo").src = arr[0];
  }
  if (a == 2) {
    document.getElementById("demo").src = arr[1];
  }
  if (a == 3) {
    document.getElementById("demo").src = arr[2];
  }
  if (a == 0) {
    document.getElementById("demo").src = arr[3];
    a = 4;
  }
}
