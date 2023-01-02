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
  one.style.display = "none";
}
const arr = ["1.png","2.jfif","3.png","4.jfif" ]
let a = 0;
function imgId1() {
  document.getElementById('demo').src="1.png";
}

function imgId2() {
  document.getElementById('demo').src="2.jfif";
}

function imgId3() {
  document.getElementById('demo').src="3.png";
}

function imgId4() {
  document.getElementById('demo').src="4.jfif";
}

function changeImage(a, imgId) {
  document.getElementById(imgId).src = a;
  a++;
}
