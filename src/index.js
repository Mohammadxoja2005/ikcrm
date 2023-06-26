import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}

let list2 = document.querySelectorAll('.subDown');
for (let i = 0; i < list2.length; i++) {
  list2[i].onclick = function () {
    let j = 0;
    while (j < list2.length) {
      list2[j++].className = 'subDown';
    }
    list2[i].className = 'subDown activeList';
  }
}

function functionOne() {
  var mashi = document.querySelectorAll("#mashi01");
  var ul = document.querySelectorAll("#mashi");
  mashi.onclick = function () {
    ul.className = 'show'
    console.log('ishladi');
  };
}

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML === this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt === y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var upBlack = document.getElementsByClassName("headerUpClass");
var upWhite = document.getElementsByClassName("headerUpClass2");
var hrefDrop = document.getElementsByClassName("hrefDrop24");
var q;

for (q = 0; q < hrefDrop.length; q++) {
  hrefDrop[q].addEventListener("click", function () {
    this.classList.toggle("active");
    var imgConntent = this.nextElementSibling;
    console.log(imgConntent);
    if (hrefDrop.className === "hrefDrop24") {
      upBlack.style.display = "none";
      upWhite.style.display = "block";
    } else {
      upWhite.style.display = "none";
      upBlack.style.display = "block";
    }
  });
}

// document.querySelector('#dateInput').valueAsDate = new Date();
// document.querySelector('#dateInput2').valueAsDate = new Date();
// document.querySelector('#dateInput3').valueAsDate = new Date();

// const custom = document.querySelector('.rassrochkaProdnoCheckBox7')
// const noneDown = document.querySelector('#noneDownDrop')

// custom.addEventListener("click", function() {
//   console.log(noneDown);
//   noneDown.classList.add('blockDropDown')
// });