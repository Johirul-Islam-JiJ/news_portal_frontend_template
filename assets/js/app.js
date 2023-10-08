// search show

const searchBtn = document.getElementById("search_btn")
const searchForm = document.getElementById("search_form")

searchBtn.addEventListener("click", function(){
  searchForm.classList.toggle("showSearch")
})

window.addEventListener("click", function(e){
  let eventTarget = e.target
  if(!eventTarget.closest("#search_btn") && !eventTarget.closest("#search_form")){
    searchForm.classList.remove("showSearch")
  }
})



// socket year
let socketYear = document.getElementById("socket_year")

let PresentYear = (year) =>{
  let date = new Date()
  let PreYear = date.getFullYear()
  year.innerText = PreYear
}

PresentYear(socketYear)

// lifestyle slider

// offer
$(function (e) {
  "use strict";
  e(".lifestyle_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: !1,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".lifestyle_arrow"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 766,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 1,
          }
      }
    ]
  })
});


// object select element
const selectElement = {
  dropdownBtn: document.getElementsByClassName("dropdown_button"),
  subNavItem: document.getElementsByClassName("dropdown_sub"),
}

// element destructure
let {dropdownBtn, subNavItem} = selectElement

;[...dropdownBtn].forEach((innerBtn, index) => {
  let innerNav = subNavItem[index];
  innerBtn.addEventListener("click", function() {
    $(innerNav).slideToggle();
    $(".dropdown_sub").not(innerNav).slideUp();
    $(".dropdown_button").removeClass("active");
    $(innerBtn).toggleClass("active");
  });
});
  
