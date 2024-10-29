$(document).ready(function () {
    // initialize swiper
    var swiper = new Swiper(".heroSwiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // util 의 날씨 정보 자동 슬라이드
    function weatherSlide() {
      const $items = $('.util .weather .listBox > li');
      // 1. 첫 번째 요소의 'on'을 'off'로, 두 번째 요소를 'on'으로, 세 번째 요소를 'ready'로 변경
      setTimeout(() => {
        $items.eq(0).removeClass('on').addClass('off');
        $items.eq(1).removeClass('ready').addClass('on');
        $items.eq(2).removeClass('off').addClass('ready');
      }, 4000);
      // 2. 4초 후, 첫 번째 요소의 'off'를 'ready'로, 두 번째 요소를 'off'로, 세 번째 요소를 'on'으로 변경
      setTimeout(() => {
        $items.eq(0).removeClass('off').addClass('ready');
        $items.eq(1).removeClass('on').addClass('off');
        $items.eq(2).removeClass('ready').addClass('on');
      }, 8000);
      // 3. 8초 후, 첫 번째 요소의 'ready'를 'on'으로, 두 번째 요소를 'ready'로, 세 번째 요소를 'off'로 변경
      setTimeout(() => {
        $items.eq(0).removeClass('ready').addClass('on');
        $items.eq(1).removeClass('off').addClass('ready');
        $items.eq(2).removeClass('on').addClass('off');
      }, 12000);
    }
    // 처음에 한 번 실행
    weatherSlide();
    // 12초마다 반복
    setInterval(weatherSlide, 12000);
    







    // 자주하는 질문 자동 슬라이드
    function questionSlide() {
      const $items = $('.questionBox .questionContents > li');
      // 1. 첫 번째 요소의 'on'을 'off'로, 두 번째 요소를 'on'으로, 세 번째 요소를 'ready'로 변경
      setTimeout(() => {
        $items.eq(0).removeClass('on').addClass('off');
        $items.eq(1).removeClass('ready').addClass('on');
        $items.eq(2).removeClass('off').addClass('ready');
      }, 4000);
      // 2. 4초 후, 첫 번째 요소의 'off'를 'ready'로, 두 번째 요소를 'off'로, 세 번째 요소를 'on'으로 변경
      setTimeout(() => {
        $items.eq(0).removeClass('off').addClass('ready');
        $items.eq(1).removeClass('on').addClass('off');
        $items.eq(2).removeClass('ready').addClass('on');
      }, 8000);
      // 3. 8초 후, 첫 번째 요소의 'ready'를 'on'으로, 두 번째 요소를 'ready'로, 세 번째 요소를 'off'로 변경
      setTimeout(() => {
        $items.eq(0).removeClass('ready').addClass('on');
        $items.eq(1).removeClass('off').addClass('ready');
        $items.eq(2).removeClass('on').addClass('off');
      }, 12000);
    }
    // 처음에 한 번 실행
    questionSlide();
    // 12초마다 반복
    setInterval(questionSlide, 12000);
    











    
})