document.addEventListener("DOMContentLoaded", function () {
  var langueLink = document.querySelector(".langueBg a");
  var langueSubMenu = document.querySelector(".Menu_langueBg");

  function toggleLangueSubMenu() {
    if (langueSubMenu.style.display === "block") {
      langueSubMenu.style.display = "none";
      langueSubMenu.style.padding = "0";
    } else {
      langueSubMenu.style.display = "block";
      langueSubMenu.style.fontSize = "20px";
    }
  }

  langueLink.addEventListener("click", function (event) {
    event.preventDefault();
    toggleLangueSubMenu();
  });
});
