let count = 0;
function counting() {
  count++;
  let one = document.querySelector(".wrapper_bottle");
  one.style.display = "block";
  if (count > 1) {
    let one = document.querySelector(".wrapper_bottle");
    one.style.display = "none";
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
  one.style.display = "block";
}
function closeAbout() {
  ++about;
  if (about == 2) {
    let one = document.querySelector(".pop_about");
    one.style.display = "none";
    about = 0;
  }
}
function openContacts() {
  let one = document.querySelector(".button_zero_left");
  two = document.querySelector (".number");
  one.style.animation = "zero_left 2s forwards";
  two.style.display= "block";
}
let contact = 0;
function closeContacts() {
  ++contact;
  if (contact == 2) {
    let one = document.querySelector(".button_zero_left");
    two = document.querySelector (".number");
    one.style.animation = " zero_left_zero_position 2s forwards";
    two.style.display= "none";
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
  one.style.display = "block";
  ++numThree;
  if (numThree === 2) {
    one.style.display = "none";
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
