// navbar list
let navbar = document.querySelector(".nav-mobile .nav-list");
let bars = document.querySelector(".fa-bars");
let closes = document.querySelector(".nav-mobile .nav-list .fa-xmark");
bars.addEventListener("click", show_nav);
closes.addEventListener("click", hide);
function show_nav() {
  navbar.style.left = "0";
  navbar.style.opacity = "1";
}
function hide() {
  navbar.style.left = "-100%";
  navbar.style.opacity = "0";
}

// drop down nav
let list = document.querySelectorAll(".nav-list ul .drop i");
let uls = document.querySelectorAll(".nav-list ul .drop ul");
list.forEach((add) => {
  add.parentElement.addEventListener("click", function () {
    if (this.lastElementChild.style.maxHeight) {
      this.lastElementChild.style.maxHeight = null;
      this.children[1].className = "fa-solid fa-plus";
      this.lastElementChild.classList.remove("active");
    } else {
      for (let i = 0; i < uls.length; i++) {
        uls[i].classList.remove("active");
        if ((uls[i].style.maxHeight = "150px")) {
          uls[i].style.maxHeight = null;
          let parant = uls[i].parentElement;
          parant.children[1].className = "fa-solid fa-plus";
        }
      }
      this.children[1].className = "fa-solid fa-minus";
      this.lastElementChild.style.maxHeight = "150px";
      this.lastElementChild.classList.add("active");
    }
  });
});
//
let show = document.querySelectorAll(".show .click");
show.forEach((e) => {
  e.addEventListener("click", function () {
    e.parentElement.classList.toggle("active");
  });
});
// slider show
let slider = document.querySelectorAll(".slider");
let num = 0;
function count() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("sliderShow");
  }
  if (num == slider.length) {
    num = 0;
  }
  num++;
  slider[num - 1].classList.add("sliderShow");
}
setInterval(count, 4000);
// CATEGORY
let category = document.querySelectorAll(".category .content");
let category_pro = document.querySelectorAll(".category .content .pro");
let category_pro_icon = document.querySelectorAll(".category .content .pro i");
category_pro.forEach((e) => {
  e.addEventListener("click", function () {
    if (e.parentElement.style.maxHeight) {
      e.parentElement.style.maxHeight = null;
      e.lastElementChild.lastElementChild.className = "fa-solid fa-plus";
    } else {
      e.parentElement.style.maxHeight = "160px";
      e.lastElementChild.lastElementChild.className = "fa-solid fa-minus";
    }
  });
});
// category_list
let category_mobile = document.querySelector(".category_mobile");
let list_category = document.querySelector(".fa-table-cells-large");
let closes_category = document.querySelector(".category_mobile .fa-xmark");
list_category.addEventListener("click", show_category);
closes_category.addEventListener("click", hide_category);
function show_category() {
  category_mobile.style.left = "0";
  category_mobile.style.opacity = "1";
}
function hide_category() {
  category_mobile.style.left = "-100%";
  category_mobile.style.opacity = "0";
}
//Deals of Day
let data_deals = new Date("Dec 31, 2023 23:59:59").getTime();
let countdown = setInterval(() => {
  let dateNew = new Date().getTime();
  let count = data_deals - dateNew;
  let day = Math.floor(count / (1000 * 60 * 60 * 24));
  let hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let min = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  let sec = Math.floor((count % (1000 * 60)) / 1000);
  document.querySelector(".days .day h5").innerHTML =
    day < 10 ? `0${day}` : day;
  document.querySelector(".days .hour h5").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".days .min h5").innerHTML =
    min < 10 ? `0${min}` : min;
  document.querySelector(".days .sec h5").innerHTML =
    sec < 10 ? `0${sec}` : sec;

  if (count < 0) {
    clearInterval(countdown);
    document.querySelector(".days").innerHTML = `<h2>Show is over</h2>`;
  }
}, 1000);
// pop window
let pop = document.querySelector(".pop");
let pop_close = document.querySelector(".pop_window .fa-xmark");
let show_pop = setTimeout(() => {
  pop.style.transform = "scale(1)";
}, 4000);

pop_close.addEventListener("click", function () {
  clearTimeout = show_pop;
  pop.style.transform = "scale(0)";
});
// show advertisement
let advertisement = document.querySelector(".notification-toast");
let advertisement_close = document.querySelector(
  ".notification-toast .toast-detail .fa-xmark"
);
let show_advertisement = setInterval(() => {
  advertisement.style.left = "20px";
}, 3000);
setInterval(() => {
  advertisement.style.left = "-100%";
}, 8000);
advertisement_close.addEventListener("click", function () {
  clearInterval(show_advertisement);
  advertisement.style.left = "-100%";
});
//
let icon_eyes = document.querySelectorAll(".new .tooles .fa-eye");
let close_img = document.querySelector(".showimages i");
let show_img = document.querySelector(".showimages img");
let div_show_img = document.querySelector(".showimages");
let follow = document.querySelectorAll(".fa-heart");
icon_eyes.forEach((e) => {
  e.addEventListener("click", function () {
    let showimages = this.parentElement.parentElement.children[0].children[0];
    show_img.src = showimages.src;
    div_show_img.style.transform = "scale(1)";
  });
});
close_img.onclick = function () {
  div_show_img.style.transform = "scale(0)";
};
follow.forEach((f) => {
  f.addEventListener("click", function () {
    this.classList.toggle("follow")
  })
});
