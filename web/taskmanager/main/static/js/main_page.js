$(document).ready(function(){

  if($(window).width() <= 767) {
    $("#main__display__web").remove()
    $(".version__display").append(`<img src="static\\img\\current_version\\art.png" alt="" class="version__display__video poster__for__main__page">`)
  }

  // CONSTS

  const header = $(".header")
  const content = $(".content")
  const container = $(".container")


  // FUNCTIONS

  function onPageDownScroll() {

    if($(this).scrollTop() > 0) {
      header.fadeIn();
      content.addClass("main__page__padding")


      if(content.hasClass("main__page__padding") && $(this).scrollTop() == 1) {
        $("#main__display__web").remove()
        $(".version__display").append(`<img src="static\\img\\current_version\\art.png" alt="" class="version__display__video poster__for__main__page">`)
      }


    } else if($(this).scrollTop() <= 0 && $(window).width() > 767) {
      header.fadeOut();
      content.removeClass("main__page__padding")
      $(".poster__for__main__page").remove()
      $(".version__display").append(`<video id="main__display__web" poster="static\\img\\current_version\\art.png" preload="auto" muted loop autoplay class="version__display__video">

                <source src="static\\img\\current_version\\bg.webm" type="video/webm" id="video__source__1">
                <source src="static\\img\\current_version\\bg.mp4" type="video/mp4" id="video__source__2">
              </video>`)
    }

  }

  function scrollToContent() {
    let offset = ($(".version__content").offset().top)
    console.log(offset)

    $("html, body").animate({scrollTop: offset}, 1600)
  }

   // EVENTS
  $(window).scroll(onPageDownScroll)

  $(".button__scroll__down__block").click(scrollToContent)

  $(".button__scroll__down").click(function(event){
    event.preventDefault()
  })

})
