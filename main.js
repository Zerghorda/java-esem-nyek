let LINKLIST = [
  "kep1.jpg",
  "kep2.jpg",
  "kep3.jpg",
  "kep4.jpg",
  "kep5.jpg",
  "kep6.jpg",
  "kep7.jpg",
  "kep8.jpg",
];
let nagykep = 0;

window.addEventListener("load", function () {
  const ARTICLEELEM = document.querySelectorAll("article");
  const SECTIONELEM = document.querySelectorAll("section");
  let szoveg = "<ul>";
  for (let index = 0; index < LINKLIST.length; index++) {
    szoveg += `<li><img src='${LINKLIST[index]}' alt='' onclick='chageImage(${index})'></li>`;
  }
  szoveg += "</ul>";
  console.log(szoveg);
  ARTICLEELEM[0].innerHTML = szoveg;
  document.getElementById("bal").addEventListener("click", preImg);
  document.getElementById("jobb").addEventListener("click", nextImg);
});

function preImg() {
  const IMAGE = document.querySelectorAll("section div img");
  IMAGE[0].src = LINKLIST[nagykep - 1];
  nagykep = nagykep - 1;
  if (nagykep == 0) {
    nagykep = 7;
  } else {
  }
}

function nextImg() {
  const IMAGE = document.querySelectorAll("section div img");
  IMAGE[0].src = LINKLIST[nagykep + 1];
  nagykep = nagykep + 1;
  if (nagykep == 7) {
    nagykep = 0;
  } else {
  }
}

function chageImage(index) {
  const IMAGE = document.querySelectorAll("section div img");
  IMAGE[0].src = LINKLIST[index];
  nagykep = index;
}
