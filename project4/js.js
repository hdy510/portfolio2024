$(document).ready(function () {
    // 히어로 initialize swiper
    var swiper = new Swiper(".heroSwiper", {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // 홍보이미지 initialize swiper
    var swiper = new Swiper(".promoBoxSwiper", {
      loop: true,
      effect: "fade",
      speed: 1000,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
    });
    // swiper-button-stop 클릭 시 autoplay 멈춤
    $('.swiper-button-stop').click(function () {
      // autoplay 가 true 였다면 autoplay 멈춤
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        // 아이콘 변경
        $(this).find('i').css({'background-position': '-32px 0'})
      }
      // autoplay 가 false 였다면 autoplay 시작
      else {
        swiper.autoplay.start();
        // 아이콘 변경
        $(this).find('i').css({'background-position': '0px 0'})
      } 
    });

    // [util 의 날씨 정보 자동 슬라이드]
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
    
    // [새로운 소식 탭 버튼 변경]
    $('.newsBox .tabMenu > li').click(function () {
      // 클릭한 요소의 인덱스 번호를 찾기
      const index = $(this).index();
      // 인덱스 클래스 명명
      const indexClass = 'index' + index;
      // 1. 탭메뉴
      // 6번 li (+ 버튼) 클릭 시, active 클래스 추가하지 않음
      if (index !== 4) {
        // 나머지 클릭한 li 요소에 'active' 클래스 추가
        $(this).addClass('active').siblings().removeClass('active');
      }
      // 2. 컨텐츠
      //  해당 번호의 컨텐츠를 'active'으로, 나머지 컨텐츠를 'active' 해제
      $('.newsBox .txtBox.'+indexClass).addClass('active').siblings().removeClass('active');
    })







    // [자주하는 질문 자동 슬라이드]
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