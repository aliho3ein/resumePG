//----------------- header image

$(window).scroll(function () {
  let hg = $(window).scrollTop();
  $(".header-img").css("top", hg * 0.6 + "px");
  $(".header-img").css("filter", "blur(" + hg * 0.005 + "px)");
});

//---------------- Menu Burger

$(".menu-nav").fadeOut("fast");
let menu_active = false;

$(".menu-btn").click(function () {
  $(".menu-nav").fadeToggle();
  if (menu_active == false) {
    $(".menu-btn-burger").attr("class", "menu-btn-burger-open");
    $(".menu-nav-item").css("transform", "translateX(0)");
    menu_active = true;
  } else {
    $(".menu-btn-burger-open").attr("class", "menu-btn-burger");
    $(".menu-nav-item").css("transform", "translateX(100vw)");
    menu_active = false;
  }
});

$(".menu-nav-item").click(function () {
  $(".menu-nav-item").removeClass("menu-active");
  $(this).addClass("menu-active");
});
