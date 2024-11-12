$(document).ready(function () {
  // << 페이지 이동 함수 선언 >>
  // 1. 메인페이지에서 서브페이지로 이동하는 함수
  function goToSubPage () {
    // 메인화면과 서브페이지 전환
    $('section.main').hide();
    $('section.subpage').show();
    // 스크롤 상단으로 이동
    $('html, body').animate({scrollTop: 0}, 0);
  }
  // 2. 서브페이지에서 메인페이지로 이동하는 함수
  function goToMainPage () {
    // 메인화면과 서브페이지 전환
    $('section.subpage').hide();
    $('section.main').show();
    // 스크롤 상단으로 이동
    $('html, body').animate({scrollTop: 0}, 0);
  }
  // 3. 게시판 페이지 보여주는 함수
  function showBoardPage () {
    $('.subpage .sub-contentsBox .subpage-board').show().siblings().hide();
  }
  // 4. 공지사항 게시글 페이지 보여주는 함수
  function showAnnouncementPage () {
    $('.subpage .sub-contentsBox .subpage-announcement').show().siblings().hide();
  }
  // 5. 갤러리 페이지 보여주는 함수
  function showGalleryPage () {
    $('.subpage .sub-contentsBox .subpage-gallery').show().siblings().hide();
  }


  // << 활성화 함수 선언 >>
  // 1. 좌측 side-nav-bar 갤러리 활성화 함수
  function leftSideGalleryActivation () {
    $('.side-nav-bar .d-2-2 strong').addClass('on');
    $('.side-nav-bar .d-2-2 .depth-3-Box').addClass('open');
    $('.side-nav-bar .d-2-2 .depth-3-Box .d-3-1').addClass('checked');
  }
  // 2. 좌측 side-nav-bar 공지사항 게시판 활성화 함수
  function leftSideBoardActivation () {
    $('.side-nav-bar .d-2-1 strong').addClass('on');
    $('.side-nav-bar .d-2-1 .depth-3-Box').addClass('open');
    $('.side-nav-bar .d-2-1 .depth-3-Box .d-3-1').addClass('checked');
  }
  // 3. 좁은 화면 우측 side-menu 갤러리 활성화 함수
  function rightSideGalleryActivation () {
    $('.side-menu .depth-1-Box-inner li').eq(2).find('a').addClass('active');
    $('.side-menu .depth-2-Box-inner').eq(2).addClass('active');
    $('.side-menu .d-2-2 strong').addClass('on');
    $('.side-menu .d-2-2 strong i').addClass('on');
    $('.side-menu .d-2-2 .depth-3-Box').addClass('open');
    $('.side-menu .d-2-2 .depth-3-Box .d-3-1').addClass('checked');
  }
  // 4. 좁은 화면 우측 side-menu 공지사항 게시판 활성화 함수
  function rightSideBoardActivation () {
    $('.side-menu .depth-1-Box-inner li').eq(2).find('a').addClass('active');
    $('.side-menu .depth-2-Box-inner').eq(2).addClass('active');
    $('.side-menu .d-2-1 strong').addClass('on');
    $('.side-menu .d-2-1 strong i').addClass('on');
    $('.side-menu .d-2-1 .depth-3-Box').addClass('open');
    $('.side-menu .d-2-1 .depth-3-Box .d-3-1').addClass('checked');
  }


  // << 비활성화 함수 선언 >>
  // 1. 좁은 화면 우측 side-menu 선택된 메뉴 비활성화 함수 선언
  function rightSideDeactivation () {
    // 파란 색상 제거
    $('.side-menu .depth-3-Box li').removeClass('checked');
    // 열린 메뉴 닫기
    $('.side-menu .depth-3-Box').removeClass('open');
    // 아이콘 변경
    $('.side-menu .depth-2-title li strong').find('i').removeClass('on')
    // 밑줄 효과 제거
    $('.side-menu .depth-2-title li strong').removeClass('on')
    // .depth-2-Box-inner 의 하단에 보이지 않는 블럭 추가했던거 제거
    $('.depth-2-Box-inner .block').remove()
     // 1뎁스 active 제거
     $('.side-menu .depth-1-Box-inner li').find('a').removeClass('active');
     // 2뎁스 active 제거
    $('.side-menu .depth-2-Box-inner').removeClass('active');
  }
  // 2. 좌측 side-nav-bar 선택된 메뉴 초기화 함수 선언
  function leftSideDeactivation () {
    $('.side-nav-bar strong').removeClass('on');
    $('.side-nav-bar .depth-3-Box').removeClass('open');
    $('.side-nav-bar .depth-3-Box li').removeClass('checked');
    $('.side-nav-bar .depth-2-title strong i').removeClass('on');
  }


  // << 초기화 함수 선언 >>
  // 1. 좁은 화면 우측 side-menu 선택된 메뉴 초기화 함수 선언 
  function rightSideInitialization () {
    // 1뎁스 active 제일 첫 번째로 변경
    $('.side-menu .depth-1-Box-inner li').siblings().find('a').removeClass('active');
    $('.side-menu .depth-1-Box-inner li').eq(0).find('a').addClass('active');
    // 2뎁스 active 제일 첫 번째로 변경
    $('.side-menu .depth-2-Box > div').removeClass('active');
    $('.side-menu .depth-2-Box > div').eq(0).addClass('active');
  }

  // << !!!!!! 최종!!! 활성화 함수와 비활성화 함수를 통합하는 함수 선언 !!!!!! >>
  function galleryMenuActivation () {
    leftSideDeactivation();
    leftSideGalleryActivation();

    rightSideDeactivation();
    rightSideGalleryActivation();
  }
  function boardMenuActivation () {
    leftSideDeactivation();
    leftSideBoardActivation();

    rightSideDeactivation();
    rightSideBoardActivation();
  }


  // << 메인페이지 >>
  // 1. 로고 클릭 시 메인페이지 상단으로 이동
  $('.gnb h1').click(function () {
    goToMainPage();
    // 1-1. 좁은 화면의 side-menu 닫히기
    $('.side-menu').removeClass('on');
      // dimmed-bg2 해제 설정
    $('.dimmed-bg2').removeClass('open');
    // 1-2. 좁은 화면의 side-menu 활성화된 메뉴 초기화
    rightSideInitialization();
  });
  // 2. gnb 메뉴 클릭 시 서브페이지로 이동
  $('.gnb .list3').click(function () {
    goToSubPage();
    let $index = $(this).index();
    let $depth2 = $(this).parent().parent();
    if ($depth2.hasClass('d-2-2')) {
      // 2depth 가 사진자료일 경우에는 홀수 일 떄 갤러리를 보여줌
      if ($index % 2 === 0) {
        showGalleryPage();

        galleryMenuActivation();
      } else {
        showBoardPage();

        boardMenuActivation();
      }
    } else {
      // 홀짝 여부에 따라 페이지 전환
      if ($index % 2 === 0) {
        showBoardPage();

        boardMenuActivation();
      } else {
        showGalleryPage();

        galleryMenuActivation();
      }
    }
    
    // gnb 의 items 높이 0으로
    $('.gnb .items').removeClass('open');
    // dimmed-bg1 해제
    $('.dimmed-bg1').removeClass('open');
  });
  // 3. 좁은 화면의 우측 side-menu 메뉴에서 클릭 시 서브페이지로 이동
  $('.side-menu .depth-3-Box li').click(function () {
    goToSubPage();
    let $index = $(this).index();
    let $depth2 = $(this).parent().parent();
    if ($depth2.hasClass('d-2-2')) {
      // 2depth 가 사진자료일 경우에는 홀수 일 떄 갤러리를 보여줌
      if ($index % 2 === 0) {
        showGalleryPage();

        galleryMenuActivation();
      } else {
        showBoardPage();

        boardMenuActivation();
      }
    } else {
      // 홀짝 여부에 따라 페이지 전환
      if ($index % 2 === 0) {
        showBoardPage();

        boardMenuActivation();
      } else {
        showGalleryPage();

        galleryMenuActivation();
      }
    }





    // 좁은 화면의 side-menu 닫히기
    $('.side-menu').removeClass('on');
      // dimmed-bg2 해제 설정
    $('.dimmed-bg2').removeClass('open');
  });
  // --------------------------------------------------------------------
  // 4. 자주찾는 서비스 클릭 시 서브페이지로 이동
  $('.main .serviceBox li').click(function () {
    goToSubPage();
    // 홀짝 여부에 따라 페이지 전환
    let $index = $(this).index();
    if ($index % 2 === 0) {
      showBoardPage();

      boardMenuActivation();
    } else {
      showGalleryPage();

      galleryMenuActivation();
    }
  });
  // 5. 새로운 소식 글 클릭 시 공지사항 게시글 페이지로 이동
  $('.main .newsBox .txtBox li').click(function () {
    goToSubPage();
    showAnnouncementPage();

    boardMenuActivation();
  });
  // 6. 새로운 소식 (+) 버튼 클릭 시 게시판 페이지로 이동
  $('.main .newsBox .tabMenu li').eq(4).click(function () {
    goToSubPage();
    showBoardPage();

    boardMenuActivation();
  });
  // 7. 홍보 클릭 시 갤러리 페이지로 이동
  $('.main .promoBox img').click(function () {
    goToSubPage();
    showGalleryPage();

    galleryMenuActivation();
  });
  // 8. 웹툰 클릭 시 갤러리 페이지로 이동
  $('.main .webtoonBox').click(function () {
    goToSubPage();
    showGalleryPage();

    galleryMenuActivation();
  });
  // 9. 국립공원사진전 수상작 감상하기 클릭 시 갤러리 페이지로 이동
  $('.main .galleryBox .txtBox').click(function () {
    goToSubPage();
    showGalleryPage();

    galleryMenuActivation();
  });




  // << 서브페이지 공통 >>
  // 1. breadcrumb 홈 버튼 클릭 시 메인페이지로 이동 ()
  $('.subpage .breadcrumb .home').click(function () {
    goToMainPage();
    // 1-2. 좁은 화면의 side-menu 활성화된 메뉴 초기화
    rightSideInitialization();
  });
  // 2. 좌측 side-nav-bar 의 depth-3-Box li 클릭 시 서브페이지로 이동
  $('.side-nav-bar .depth-3-Box li').click(function () {
    goToSubPage();
    let $index = $(this).index();
    let $depth2 = $(this).parent().parent();
    if ($depth2.hasClass('d-2-2')) {
      // 2depth 가 사진자료일 경우에는 홀수 일 떄 갤러리를 보여줌
      if ($index % 2 === 0) {
        showGalleryPage();

        galleryMenuActivation();
      } else {
        showBoardPage();

        boardMenuActivation();
      }
    } else {
      // 홀짝 여부에 따라 페이지 전환
      if ($index % 2 === 0) {
        showBoardPage();

        boardMenuActivation();
      } else {
        showGalleryPage();

        galleryMenuActivation();
      }
    }
  });

 

  // << 게시판 페이지 >>
  // 1. 게시판 페이지에서 게시글 클릭 시 게시글 페이지로 이동
  $('.subpage .subpage-board .contents-each').click(function () {
    goToSubPage();
    showAnnouncementPage();
  });


  // << 게시글 페이지 >>
  // 1. 목록 버튼 클릭 시 게시판 페이지로 이동
  $('.subpage .subpage-announcement .listBtn').click(function () {
    goToSubPage();
    showBoardPage();
  });


  // << 갤러리 페이지 >>

































  // [gnb 메뉴 hover 시, 하위 메뉴 보이기]
  $('nav.gnb ul.depth1 .list1').mouseenter(function () {
    $(this).find('.items').addClass('open');
    // 메뉴 중복 열림 방지
    // gnb 메뉴에서 해당 list1 의 items 를 제외한 형제 list1 들의 items 의 open 클래스 제거
    $(this).siblings().find('.items').removeClass('open');
    // dimmed-bg1 처리 설정
    $('.dimmed-bg1').addClass('open');
  });
  // items 에서 마우스 떠나면 하위 메뉴 숨기기
  $('nav.gnb ul.depth1 .list1 .items').mouseleave(function () {
    $(this).removeClass('open');
    // dimmed-bg1 해제 설정
    $('.dimmed-bg1').removeClass('open');
  });
  // gnb 메뉴에서 마우스 떠나면 하위 메뉴 숨기기
  $('nav.gnb ul.depth1').mouseleave(function () {
    $(this).find('.items').removeClass('open');
    // dimmed-bg1 해제 설정
    $('.dimmed-bg1').removeClass('open');
  });
  
  // [side-menu 등장 토글]
  // 1. menu-btn 클릭 시, side-menu 보이기
  $('.gnb .menu-btn').click(function () {
    $('.side-menu').addClass('on');
    // dimmed-bg2 처리 설정
    $('.dimmed-bg2').addClass('open');
  });
  // 2. menu-btn-close 클릭 시, side-menu 숨기기
  $('.side-menu .menu-btn-close').click(function () {
    $('.side-menu').removeClass('on');
    // dimmed-bg2 해제 설정
    $('.dimmed-bg2').removeClass('open');
  });
  // 3. dimmed-bg2 클릭 시에도 side-menu 숨기기
  $('.dimmed-bg2').click(function () {
    $('.side-menu').removeClass('on');
    // dimmed-bg2 해제 설정
    $(this).removeClass('open');
  });

  // [side-menu 의 depth-1-Box 의 li a 들 토글 설정] & [*서브페이지의 side-nav-bar 도 동일하게 적용*]
  $('.depth-1-Box li a').click(function () {
    // 배경색 변화
    $('.depth-1-Box li').find('a').removeClass('active');
    $(this).addClass('active');
    // 클릭한 1depth 메뉴에 해당하는 2depth 메뉴 보이기
    const index = $(this).parent().index();
    $('.depth-2-Box > div').eq(index).addClass('active').siblings().removeClass('active');
    // 열어놨던 2depth 메뉴 매번 닫혀진 상태로 되돌리기
    $('.depth-3-Box').removeClass('open');
    // 열어놨던 2depth 아이콘도 다시 + 로 변경
    $('.depth-2-title li strong').find('i').removeClass('on')
    // 열어놨던 2depth 밑줄효과도 제거
    $('.depth-2-title li strong').removeClass('on')
  })

  // [side-menu 의 depth-2-title 의 제목 클릭으로 3 depth 메뉴 접히고 펼치기 설정] & [*서브페이지의 side-nav-bar 도 동일하게 적용*]
  $('.depth-2-title li strong').click(function () {
    // 클릭한 요소의 형제 요소를 변수에 저장
    const $depth3Box = $(this).siblings('.depth-3-Box');
    // 열려있을 때, 닫기
    if ($depth3Box.hasClass('open')) {
      $depth3Box.removeClass('open');
      // 아이콘 변경
      $(this).find('i').removeClass('on')
      // 밑줄 효과 제거
      $('.depth-2-title li strong').removeClass('on')

      // .depth-2-Box-inner 의 하단에 보이지 않는 블럭 추가했던거 제거
      $('.depth-2-Box-inner .block').remove()
    } else {
      // 닫혀있을 때, 열기
      // 모든 열려있는 3depth 메뉴 닫기
      $('.depth-3-Box').removeClass('open'); 
      // 해당 메뉴만 열기
      $depth3Box.addClass('open');
      // 아이콘 변경
      $('.depth-2-title > li strong').find('i').removeClass('on')
      $(this).find('i').addClass('on')
      // 밑줄 효과 제거
      $('.depth-2-title li strong').removeClass('on')
      // 밑줄 효과 생성
      $(this).addClass('on')

      // 아래 코드의 .depth-2-Box-inner 의 하단에 보이지 않는 블럭 추가했던거 먼저 제거
      $('.depth-2-Box-inner .block').remove()
      // .depth-2-Box-inner 의 하단에 보이지 않는 블럭을 추가해 하단 정보가 가려지는 것을 방지
      $('.depth-2-Box-inner').append('<div class="block"></div>')
    }
  })

  // [*위 코드에 이어서 서브페이지의 side-nav-bar 맞춤 수정*]
  // 1. 하단 블럭 추가 효과 제거
  // .subpage-inner .depth-2-title li strong 클릭 시, 하단 블럭 제거
  $('.subpage-inner .depth-2-title li strong').click(function () {
    $('.subpage-inner .depth-2-Box-inner .block').remove()
  });


  // [히어로 initialize swiper]
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

  // [홍보이미지 initialize swiper]
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

  // [서브페이지 회차별 정보와 공원별 정보 펼치기 접기]
  $('.subpage .selectBox .btn').click(function () {
    // 변수 선언
    const $roundBtn = $('.subpage .selectBox.round .btn');
    const $parkBtn = $('.subpage .selectBox.park .btn');
    const $roundList = $('.subpage .selectBox.round ul');
    const $parkList = $('.subpage .selectBox.park ul');
    // 함수 선언
    function selectBoxToggle (listName) {
      if (listName.is(':visible')) {
        // 리스트가 열려 있을 경우: 슬라이드 업으로 닫기
        listName.slideUp(500, function() {
          listName.css('display', 'none'); // 애니메이션 완료 후 display: none
        });
      } else {
        // 리스트가 닫혀 있을 경우: display를 flex로 설정 후 슬라이드 다운으로 열기
        listName.css('display', 'flex').hide().slideDown(500);
      }
    }
    // 토글 함수 실행
    if ($(this).is($roundBtn)) {
      selectBoxToggle($roundList);
    } else if ($(this).is($parkBtn)) {
      selectBoxToggle($parkList);
    }
    // 텍스트 변경
    $(this).text($(this).text() === '선택하기' ? '접기' : '선택하기');
    
    // if ($roundList.is(':visible')) {
    //   // 리스트가 열려 있을 경우: 슬라이드 업으로 닫기
    //   $roundList.slideUp(500, function() {
    //       $roundList.css('display', 'none'); // 애니메이션 완료 후 display: none
    //   });
    // } else {
    //   // 리스트가 닫혀 있을 경우: display를 flex로 설정 후 슬라이드 다운으로 열기
    //   $roundList.css('display', 'flex').hide().slideDown(500);
    // }
    // $(this).text($(this).text() === '선택하기' ? '접기' : '선택하기');
  });

  // [서브페이지 회차별 정보와 공원별 정보 li 클릭시 선택되게 하기]
  $('.subpage .selectBox ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
    
  // [서브페이지 하단 의견 수집 input placeholder 길이 조정 위한 텍스트 변경]
  function updatePlaceholder() {
    let input = $('.subpage .opinionBox .bottomBox input');
    if (window.innerWidth <= 520) {
      input.attr('placeholder', '여러분의 소중한 의견을 남겨주세요.');
    } else {
      input.attr('placeholder', '홈페이지 이용에 대한 여러분의 소중한 의견을 남겨주세요.');
    }
  }
  updatePlaceholder();
  window.addEventListener("resize", updatePlaceholder);









    
})