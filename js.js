// let scrl=1;
// window.onscroll = function() {
//   document.getElementById("two").classList.add('intro_two');
//   if (window.innerWidth < 440){
//     let one = document.querySelector(".intro_two");
//     one.style.display = "block";
//   }
// }
// function blue() {

// }
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
  fourth = document.querySelector(".button_zero_left_inside");
  one.style.display = "block";
  fourth.style.border = "none";
  if (count > 1) {
    count = 0;
    let two = document.querySelector(".wrapper_bottle");
    three = document.querySelector(".button_zero_left_inside")
    two.style.display = "none";
    three.style.border = "1px solid white";
  }
  if (window.innerWidth > 440) {
    one = document.querySelector(".button_zero_left_inside");
    one.style.border = "none";
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
  two.style.border = "none";

  if (window.innerWidth < 440) {
    let one = document.querySelector(".bottle2");
    three = document.querySelector(".wrapper_bottle");

    one.style.display = "none";
    three.style.top = "210px";
  }
}
function closeAbout() {
  ++about;
  if (about == 2) {
    let one = document.querySelector(".pop_about");
    fourth = document.querySelector(".bottle2");
    two = document.querySelector(".wrapper_bottle");
    fifth = document.querySelector(".button_zero_left_inside_two");

    one.style.display = "none";
    two.style.top = "90px";
    fourth.style.display = "block";
    fifth.style.border = "1px solid white";
    about = 0;
  }
  if (window.innerWidth > 440) {
    one = document.querySelector(".button_zero_left_inside_two");
    three = document.querySelector(".grid_body");
    one.style.border = " none";
    three.style.top = "90px";
  }
}
function openContacts() {
  if (window.innerWidth > 440) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");

    one.style.animation = "zero_left 2s forwards";
    two.style.display = "flex";
  }
  if (window.innerWidth < 440) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");
    three = document.querySelector(".nav_bar");
    fourth = document.querySelector(".button_zero_left_inside_three");
    
    one.style.animation = "none";
    two.style.display = "flex";
    three.style.height = "105px";
    fourth.style.border = "none";
  }
}
let contact = 0,
contactSize = 0;

function closeContacts() {
  ++contact;

  if (( window.innerWidth > 440)) {
    let one = document.querySelector(".button_zero_left");
    one.style.animation = "zero_left_zero_position 2s forwards";
  }
  if (window.innerWidth < 440) {
    ++contactSize;
  }
  if (( contactSize == 2)) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector(".number");
    three = document.querySelector(".nav_bar");
    fourth = document.querySelector(".button_zero_left_inside_three");
    one.style.animation = "none";
    two.style.display = "none";
    three.style.height = "90px";
    fourth.style.border = "1px solid white";
    contactSize = 0;
  }
  if (window.innerWidth > 440, contact == 2) {
   let one = document.querySelector(".button_zero_left_inside_three");
   two = document.querySelector(".number");
   three = document.querySelector(".button_zero_left");
    one.style.border = "none";
    two.style.display = "none";
    three.style.animation = "none"
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
  two = document.querySelector(".button_zero_left");
  one.style.display = "block";
  two.style.border = "none";
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
