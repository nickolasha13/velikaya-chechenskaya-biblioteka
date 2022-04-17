$(document).ready(function() {

  // Бургер меню для мобильной версии сайта
  $(".header__burger").click(function(event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $('body').toggleClass('lock');
    $(".scrollUp").fadeOut()
  });

  // Изменение темы
  $('.theme__changer').click(function(event) {
    $('body').toggleClass('light__theme');
    const theme__changer_icon = $('.theme__changer i')

    theme__changer_icon.toggleClass('bi-moon');
    theme__changer_icon.toggleClass('bi-brightness-high');
  });

  // FIIIIX THIIIS FUCKING BUUUG
  // Появляющаяся кнопка прокрутки вверх
  function closeSideMenu() {
    let menu__icon = $("#settings__block")

    menu__icon.removeClass("settings__active__icon");
    let icon = $("#settings__block i")
    icon.removeClass("bi-gear-fill")
    icon.addClass("bi-gear")

    $("div#aside__settings.settings__aside").removeClass("menu__active");
  }

  const icon__settings = $("#menu__settings")
  const settings__menu = $("div#aside__settings.settings__aside")
  $(window).scroll(function(){
    const scrollUp = $('.scrollUp')
    if($(this).scrollTop() > 100){
      scrollUp.fadeIn()
      closeSideMenu()
    }
    else {
      scrollUp.fadeOut()
      closeSideMenu()
    }
  });

  // Плавная прокрутка вверх
  $('.scrollUp').click(function(event){
    $("html, body").animate({scrollTop:0})
  });

  // Меню настроек
  const menu__icon = $("#settings__block")
  menu__icon.click(function(event){
    event.preventDefault()
    menu__icon.toggleClass("settings__active__icon");
    const icon = $("#settings__block i")
    icon.toggleClass("bi-gear-fill")
    icon.toggleClass("bi-gear")

    $("div#aside__settings.settings__aside").toggleClass("menu__active");

  });

  // Изменение темы в меню натроек
  const header__hidden__menu__item = $(".header__hidden__menu__item.theme")

  header__hidden__menu__item.click(function(event){
    $(".change__theme").toggleClass("theme__changer__active");
  });

});
