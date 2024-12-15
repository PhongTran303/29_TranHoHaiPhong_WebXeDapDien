document.addEventListener("DOMContentLoaded", function () {
  function toggleView() {
    document.querySelector(".login").classList.toggle("is-active");
    document.querySelector(".register").classList.toggle("is-active");
    document.querySelector(".sign-up-toggle").classList.toggle("is-active");
    document.querySelector(".login-toggle").classList.toggle("is-active");
  }

  function slideElements(prop) {
    const showElements = document.querySelectorAll(prop.showEle);
    const hideElements = document.querySelectorAll(prop.hideEle);

    showElements.forEach(function (element) {
      element.classList.remove(prop.removeShowClass);
      element.classList.add(prop.addShowClass);
    });

    hideElements.forEach(function (element) {
      element.classList.remove(prop.removeHideClass);
      element.classList.add(prop.addHideClass);
    });
  }

  document
    .querySelector(".sign-up-toggle a")
    .addEventListener("click", function () {
      toggleView();
      document.querySelector(".login-view-toggle").classList.add("move-top");
      document
        .querySelector(".login-view-toggle")
        .classList.remove("move-bottom");
      slideElements({
        showEle: ".register",
        removeShowClass: "down",
        addShowClass: "pull-up",
        hideEle: ".login",
        addHideClass: "up",
        removeHideClass: "push-down",
      });
    });

  document
    .querySelector(".login-toggle a")
    .addEventListener("click", function () {
      toggleView();
      document.querySelector(".login-view-toggle").classList.add("move-bottom");
      document.querySelector(".login-view-toggle").classList.remove("move-top");
      slideElements({
        showEle: ".login",
        removeShowClass: "up",
        addShowClass: "push-down",
        hideEle: ".register",
        addHideClass: "down",
        removeHideClass: "pull-up",
      });
    });
});

function KiemtraEmail() {
  var txtEmail = $("#email").val();
  var tbEmail = $("#tbEmail");

  var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (txtEmail === "") {
      tbEmail.html("* Email không được để rỗng!");
      return false;
  }
  if (!emailRegex.test(txtEmail)) {
      tbEmail.html("* Email không hợp lệ!");
      return false;
  }
  tbEmail.html("*");
  return true;    
}
$("#email").blur(function() {
  KiemtraEmail();
});