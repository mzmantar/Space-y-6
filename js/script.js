let fullpage = $("#fullpage");
let header = $("header");
let sections = $(".TOPF");
/*
$("section.section.zero").mouseover(function () {
  $("audio").get(0).play();
})*/
fullpage.scroll(function () {
  let w = Math.floor($("#fullpage").scrollTop());
  let h = $("section.section").outerHeight();

  for (let i = 1; i <= 5; i++) {
    if (w <= h * 1 - 20) {
      $("section.section.zero video").get(0).play();
      header.removeClass("dark");
      header.addClass("light");
    } else if (w <= h * i - 20) {
      $("section.section.zero video").get(0).pause();
      header.removeClass("light");
      header.addClass("dark");
    } else if (w <= h * 6 - 20) {
      $("section.section.zero video").get(0).pause();
      header.removeClass("dark");
      header.addClass("light");
    }
  }
});

let Inzelalbouton = document.getElementById("logo");
function yhbetcitron() {
  location.href = "./index.html";
}
Inzelalbouton.addEventListener("click", yhbetcitron);

let tunisie = document.querySelector(".AudioTn");

document.querySelector(".Timg").addEventListener("click", function () {
  if (tunisie.paused) {
    tunisie.play();
  } else {
    tunisie.pause();
    tunisie.currentTime = 0;
  }
});

/* 
||||||||||
  \\\\\\
  //////
||||||||||
*/
document.querySelectorAll('a[href="#top"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // SMOOTH - INSTANT - AUTO "scroll-behavior"
    });
  });
});
/*
   _________
  / <_> <_> \______
 #___|___|_________\
   U           U
*/
