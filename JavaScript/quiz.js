document.querySelector('.ball').addEventListener('click', function() {
    window.location.href = './html/quiz.html';
});
document.querySelector('.math').addEventListener('click', function() {
    window.location.href = './html/math.html';
});
document.querySelector('.music').addEventListener('click', function() {
    window.location.href = './html/music.html';
});
document.querySelector('.game').addEventListener('click', function() {
    window.location.href = './html/game.html';
});
document.querySelector('.food').addEventListener('click', function() {
    window.location.href = './html/food.html';
});
document.querySelector('.digraphs').addEventListener('click', function() {
    window.location.href = './html/digraphs.html';
});$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><</button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
