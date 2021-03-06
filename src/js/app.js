import $ from 'jquery'

$(window).on('load', function () {
  var wHeight = $(window).height()
  var wWidth = $(window).width()
  $('.loading').fadeOut('3000')

  $('.slickSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,

    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
  })
})

$(window).on('scroll', function () {
  var wScroll = $(window).scrollTop()

  if (wScroll > 568) {
    $('.main-header').addClass('show')
  } else {
    $('.main-header').removeClass('show')
  }
})
