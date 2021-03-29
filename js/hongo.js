; (function ($) {

    var hongo = {
        init: function () {
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.footerFn();
            this.scrollFn();
        },
        scrollFn:function(){
            var $topMenu = $('#wrap .top-menu');
            var $winW = $(window).innerWidth();

            function resizeFn(){
                $winW = $(window).innerWidth();
                if($winW >= 980){
                    $(window).scroll(function(){
                        if( $(window).scrollTop() > 30 ){
                            $topMenu.stop().fadeIn(300);
                        }
                        else{
                            $topMenu.stop().fadeOut(300);
                        }
                    });
        
                    $topMenu.on({
                        click:function(){
                            $('html,body').stop().animate({scrollTop:0}, 1200);
                        }
                    });
                }
                else if($winW < 980){
                    $(window).scroll(function(){
                        if( $(window).scrollTop() > 30 ){
                            $topMenu.stop().hide();
                        }
                        else{
                            $topMenu.stop().hide();
                        }
                    });
                }
            }

            resizeFn();
            setTimeout(resizeFn, 100);

            $(window).resize(function(){
                setTimeout(resizeFn, 100);
            });




        },
        headerFn: function () {
            var $win = $(window);
            var $mainMenu = $('#header .main-menu');
            var $sub = $('#header .sub');
            var $navUlLi = $('#nav > ul > li');
            var $subBtn = $('#header .sub5 .sub-btn');
            var $subSub = $('#header .sub5 .sub-sub');
            var $resizeMenu = $('#header .resize-menu');
            var $resizeSubMenu = $('#header .resize-sub-menu');
            var $menuI = $('#header .resize-text > li > a > i');
            var $mobileBtn = $('#header .mobile-btn')
            var $bar = $('#header .bar');
            var $nav = $('#header #nav');
            var $navUl = $('#header #nav > ul')
            var pc     = 0;
            var mobile = 0;
            var $menuDownBtn = $('#header #nav > ul > li > a > i');
            var scrollOld = 0;
            var scrollNew = 0;
            var result = null;
            var $header = $('#header');
            var btn = 0;

                // 스크롤 이벤트
                function scrollEventFn(){
                    
                    scrollNew = $win.scrollTop();
                    var scroll = function(){
                        result = scrollOld - scrollNew > 0 ? 'UP' : 'DOWN';
                    }
                    
                    scroll();
                        
                    if( $win.scrollTop() == 0 ){
                        $header.removeClass('addHide');
                        $header.removeClass('addBlackMenu');
                        $nav.removeClass('addNavUp');
                        $navUl.removeClass('addUlUp');
                        $header.removeClass('addHide'); /* 헤더가 사라짐 */

                    }
                    else{
                        if(result == 'UP'){  
                            if( btn == 1 ){ //햄버거 버튼이 클릭된 상태
                                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                                $header.addClass('addBlackMenu'); /* 위로 올릴때 header검정메뉴만 올라옴 */
                                $header.removeClass('addHide'); /* 헤더가 사라짐 */
                                $nav.addClass('addNavUp'); /* nav top값 71px */
                                $navUl.addClass('addUlUp'); /* ul padding-bottom값 바뀜 */
                                $nav.stop().slideUp(0); /* 슬라이드 닫힘. */
                                btn = 0; //버튼을 클릭 안상태로 전환
                            }
                            else{
                                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                                $header.addClass('addBlackMenu'); /* 위로 올릴때 header검정메뉴만 올라옴 */
                                $header.removeClass('addHide'); /* 헤더가 사라짐 */
                                $nav.addClass('addNavUp');
                                $navUl.addClass('addUlUp'); /* ul padding-bottom값 바뀜 */
                            }                 
                        }


                        if(result == 'DOWN'){
                            if( btn == 1 ){
                                $header.removeClass('addBlackMenu');
                                $header.addClass('addHide');
                                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                                $nav.removeClass('addNavUp');
                                $navUl.removeClass('addUlUp'); /* ul padding-bottom값 바뀜 */
                                $nav.stop().slideUp(0); /* 슬라이드 닫힘. */
                                btn = 0; //버튼을 클릭 안상태로 전환
                            }
                            else{
                                $header.removeClass('addBlackMenu');
                                $header.addClass('addHide');
                                $bar.removeClass('addMobile'); /* 햄버거 버튼 초기화 */
                                $nav.removeClass('addNavUp');
                                $navUl.removeClass('addUlUp'); /* ul padding-bottom값 바뀜 */
                            }
                        }                       
                    }
                    scrollOld = scrollNew; 
                }

                scrollEventFn();
                $win.scroll(function(){
                    scrollEventFn();
                });     

                    
                //pc이벤트
                function pcFn(){
                    $nav.stop().show();
                    $sub.stop().hide();
                    $subSub.stop().hide();
                    $nav.css({display:'inline-block'});

                    // 메인메뉴를 호버했을때 서브메뉴가 슬라이드다운
                    $mainMenu.on({
                        mouseenter: function () {
                            $sub.stop().slideUp(100);
                            $(this).next().stop().slideDown(500);
                            $(this).children().css({left:-100+'%'}, 300);
                            $(this).children().stop().animate({left:0}, 300);
                        }
                    });
                    //navUlLi 마우스 리브했을때 서브메뉴 슬라이드업
                    $navUlLi.on({
                        mouseleave: function () {
                            $sub.stop().slideUp(100);
                            $subSub.stop().fadeOut(400);
                            $(this).find('span').stop().animate({left:100+'%'}, 300);
                        }
                    });
                    //서브메뉴버튼에 마우스 호버시 서브서브메뉴가 나와라
                    $subBtn.on({
                        mouseenter:function(){
                            $subSub.stop().fadeOut(300);
                            $(this).next().stop().fadeIn(300);
                        }
                    });
                    $subSub.on({
                        mouseleave:function(){
                            $subSub.stop().fadeOut(300);
                        }
                    });
                }

                /* 모바일 */
                function mobileFn(){
                    $sub.stop().hide();
                    $subSub.stop().show();
                    $bar.removeClass('addMobile');
                    $nav.stop().slideUp(0);
                    //이벤트삭제하기
                    $mainMenu.off('mouseenter');
                    $navUlLi.off('mouseleave');
                    $subBtn.off('mouseenter');
                    $subSub.off('mouseleave');
                }

                function pcMobileFn(){
                    if( $win.innerWidth() > 980 ){
                        pc=1;
                        mobile=0;
                        pcFn();
                        btn = 0; //버튼을 클릭 안상태로 전환
                    }
                    else{
                        pc=0;
                        mobile=1;
                        mobileFn();
                    }
                }

                pcMobileFn();
                setTimeout(pcMobileFn, 100);

                $win.resize(function(){
                    setTimeout(pcMobileFn, 100);
                });

                mobileFn();

                $mainMenu.each(function(idx){
                    $(this).on({
                        click:function(e){
                            e.preventDefault();
                            if(mobile==1){
                                if($menuDownBtn.eq(idx).hasClass('addMenuBtn')==false){
                                    $sub.stop().slideUp(300);
                                    $menuDownBtn.removeClass('addMenuBtn');
                                    $(this).next().stop().slideToggle(300);
                                    $(this).children().toggleClass('addMenuBtn');
                                }else{
                                $(this).next().stop().slideToggle(300);
                                $(this).children().toggleClass('addMenuBtn');
                            }
                        }
                    }
                });
            });

            //햄버거메뉴 
            $mobileBtn.bind({
                click:function(){
                    console.log( 'btn' ,  btn );
                    if( btn == 0 ){
                        btn = 1;
                        $nav.stop().slideDown(300);
                        $bar.addClass('addMobile');                        
                    }
                    else{
                        btn = 0;
                        $nav.stop().slideUp(300);
                        $bar.removeClass('addMobile');                        
                    }                    
                }
            });

            $resizeMenu.on({
                click:function(){
                    $menuI.toggleClass('addTran');
                    $resizeSubMenu.stop().slideUp(400);
                    $(this).next().stop().slideToggle(400);
                }
            });   
        

       

        },
        section1Fn: function () {
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide = $('#section1 .slide');
            var cnt = 0;
            var $slideView = $('#section1 .slide-view');
            var $pageBtn = $('#section1 .page-btn');
            var n = $('#section1 .slide').length - 2-1;
            var setId = null;
            var setId2 = null;
            var $window = $(window);
            var $winW = $(window).width();


            function resizeFn(){
                $winW = $(window).innerWidth();


                if( $winW > 1740 ){
                    $slide.css({ width:1740, height:760 });
                    $slideWrap.css({ marginLeft: -1740 });
                    $slideWrap.stop().animate({ left: -1740 * cnt }, 0);
                }
                else if( $winW > 1170 ){
                    $slide.css({ width:$winW, height:760 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0);
                }
                else if( $winW > 980 ){
                    $slide.css({ width:$winW, height:635 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0);
                }
                else if( $winW > 760 ){
                    $slide.css({ width:$winW, height:550 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0);
                }
                else{
                    $slide.css({ width:$winW, height:470 });
                    $slideWrap.css({ marginLeft: -$winW });
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0);
                }

            }
        
            resizeFn();
            setTimeout(resizeFn, 100);

            $window.resize(function(){
                setTimeout(resizeFn, 100);
            });
            



            //메인슬라이드함수호출
            function mainSlideFn(){
                if($winW > 1740){
                    $winW = 1740;
                    $slideWrap.css({ marginLeft: -1740 });
                }
                $slideWrap.stop().animate({ left: -$winW * cnt }, 600, 'easeInOutExpo', function () {
                    if (cnt > n) { cnt = 0 }
                    if (cnt < 0) { cnt = n }
                    $slideWrap.stop().animate({ left: -$winW * cnt }, 0);
                });
                pageBtnColorEventFn();
            }
            //다음슬라이드카운트함수 호출
            function nextSlideCntFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCntFn(){
                cnt--;
                mainSlideFn();
            }
 
            // 스와이프이벤트
            $slideView.swipe({
                swipeLeft: function(){
                    pauseFn();
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCntFn();
                    }
                },
                swipeRight: function(){
                    pauseFn();
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCntFn();
                    }
                }
            });

            //페이지버튼클릭시 다음 슬라이드 보여줌
            function pageBtnColorEventFn() {
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(cnt > n - 1 ? 0 : cnt).addClass('addPage');
            }
            pageBtnColorEventFn();

            $pageBtn.each(function (idx) {
                $(this).on({
                    click: function () {
                        cnt = idx;
                        mainSlideFn();
                    }
                });
            });

            //자동타이머함수
            function autoPlay(){
                setId = setInterval(nextSlideCntFn, 4000);
            }
            autoPlay();


            //이벤트가 발생하면 발생 4초후 다음슬라이드함수 호출
            function pauseFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>=4){
                        t = 0;
                        clearInterval(setId);
                        clearInterval(setId2);
                        autoPlay();
                        nextSlideCntFn();
                    }
                }, 1000);
            }
        },
        section2Fn: function () {
            var t = 0;

          // 페럴럭스 
          $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section2').offset().top-800  ){
              if(t==0){
                  t=1;
                $('#section2 .wrap .gap .container > ul').addClass('addSec2');                

              }                
            }

            if( $(window).scrollTop() == 0 ){
              t=0;
              $('#section2 .wrap .gap .container > ul').removeClass('addSec2');         
            }

          });   
          
          
        },
        section3Fn: function () {
            var t = 0;

          // 페럴럭스 
          $(window).scroll(function(){

            if( $(window).scrollTop() >= $('#section3').offset().top-600  ){
              if(t==0){
                  t=1;
                $('#section3 .wrap .gap .container .section3-content > ul > li').addClass('addSec3');                
               
              }                
            }

            if( $(window).scrollTop() == 0 ){
              t=0;
              $('#section3 .wrap .gap .container .section3-content > ul > li').removeClass('addSec3');                
              
            }

          });   
        },
        section4Fn: function () {
            var $section4UlLi = $('#section4 .section4-content > ul > li'); //ul의 이미지 및 글씨 포함 박스
            var $section4ContentUl1 = $('#section4 .section4-content .ul1'); // 버튼 클릭시 보여질 ul1
            var $section4ContentUl2 = $('#section4 .section4-content .ul2'); // 버튼 클릭시 보여질 ul2
            var $section4ContentUl3 = $('#section4 .section4-content .ul3'); // 버튼 클릭시 보여질 ul3
            var $imgBoxImg1 = $('#section4 .img-box .img1');
            var $imgBoxImg2 = $('#section4 .img-box .img2');
            var $contentTitleGapSpan = $('#section4 .content-title-gap > a > span'); // 버튼 글씨 클릭시 밑줄과 글씨 색깔
            var $titleBtn = $('#section4 .title-btn'); // 버튼 클릭시 이미지가 바뀜

            //title-btn클릭시 해당하는 ul addClass추가
            //타이틀버튼을 클릭하면 section4ContentUl이 보여져라
            $titleBtn.eq(0).on({
                click:function(){
                    $section4ContentUl2.removeClass('addShow');
                    $section4ContentUl3.removeClass('addShow');
                    $section4ContentUl1.removeClass('addShow');
                    $section4ContentUl1.addClass('addShow');
                }
            });
            $titleBtn.eq(1).on({
                click:function(){
                    $section4ContentUl1.removeClass('addShow');
                    $section4ContentUl3.removeClass('addShow');
                    $section4ContentUl2.removeClass('addShow');
                    $section4ContentUl2.addClass('addShow');
                }
            });
            $titleBtn.eq(2).on({
                click:function(){
                    $section4ContentUl1.removeClass('addShow');
                    $section4ContentUl2.removeClass('addShow');
                    $section4ContentUl3.removeClass('addShow');
                    $section4ContentUl3.addClass('addShow');
                }
            });


            //버튼 클릭시 글씨가 진해지면서 글씨밑에 밑줄 추가(addClass)
            $contentTitleGapSpan.each(function(idx){
                $(this).on({
                    click:function(){
                        $contentTitleGapSpan.removeClass('addBorder');
                        $(this).addClass('addBorder');
                    }
                });
            });
            //이미지박스에 호버했을시 백그라운드 검정으로 나오고 배열방에있는 그림이 바뀌면서 나옴
            $section4UlLi.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $imgBoxImg1.removeClass('addFadeOut');
                        $imgBoxImg2.removeClass('addFadeIn');
                        $imgBoxImg1.eq(idx).addClass('addFadeOut');
                        $imgBoxImg2.eq(idx).addClass('addFadeIn');
                    },
                    mouseleave:function(){                        
                        $imgBoxImg1.removeClass('addFadeOut');
                        $imgBoxImg2.removeClass('addFadeIn');
                    }
                });
            });


        },
        section5Fn: function () {
            // 페럴럭스 
            var t = 0;
            $(window).scroll(function(){
  
              if( $(window).scrollTop() >= $('#section5').offset().top-700  ){
                if(t==0){
                    t=1;
                  $('#section5 .wrap .gap .container ul li').addClass('addsec5li');            
            
                }                
              }
  
              if( $(window).scrollTop() == 0 ){
                t=0;
                $('#section5 .wrap .gap .container ul li').removeClass('addsec5li');              
             
              }
  
            });  
        },
        section6Fn: function () {
            var $section6UlLi = $('#section6 .section6-content > ul > li');
            var $imgBoxImg1 = $('#section6 .img-box .img1');
            var $imgBoxImg2 = $('#section6 .img-box .img2');

            var time = 15768000;
            var day  = '';
            var hour = '';
            var min  = '';
            var sec  = '';

            //이미지 박스 호버시 그림들이 fadeIn fadeOut 효과
            $section6UlLi.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $imgBoxImg1.removeClass('addFadeOut');
                        $imgBoxImg2.removeClass('addFadeIn');
                        $imgBoxImg1.eq(idx).addClass('addFadeOut');
                        $imgBoxImg2.eq(idx).addClass('addFadeIn');
                    },
                    mouseleave:function(){                        
                        $imgBoxImg1.removeClass('addFadeOut');
                        $imgBoxImg2.removeClass('addFadeIn');
                    }
                });
            });

            // 타이머 함수
            setInterval(function(){
                day = parseInt(time/43200);
                hour = parseInt(time/3600 % 33);
                min = parseInt(time/60 % 60);
                sec = parseInt(time%60);
                var txt = '';
                 
                txt = day ;
                document.getElementById("day1").innerHTML = txt;
                txt = 'Day';
                document.getElementById("day2").innerHTML = txt;

                txt = hour ;
                document.getElementById("hour1").innerHTML = txt;
                txt = 'Hours';
                document.getElementById("hour2").innerHTML = txt;

                txt = min ;
                document.getElementById("min1").innerHTML = txt;
                txt = 'Min';
                document.getElementById("min2").innerHTML = txt;

                txt = sec ;
                document.getElementById("sec1").innerHTML = txt;
                txt = 'Sec';
                document.getElementById("sec2").innerHTML = txt;
                time--;
            }, 1000);
        },
        section7Fn: function () { 
            var cnt = 0;
            var $winW = $(window).innerWidth();
            var $conW = $('#section7 .slide-container').innerWidth();
            var n = $('#section7 .slide').length;
            var $slideW = $conW;
            var $slideWrap = $('#section7 .slide-wrap');
            var $slide = $('#section7 .slide');
            var $slideView = $('#section7 .slide-view');
            var $slide = $('#section7 .slide');
            var setId = null;
            var setId2 = null;

            // 반응형 슬라이드
            function resizeFn(){
                $winW = $(window).innerWidth();
                $conW = $('#section7 .slide-container').innerWidth();

                if( $winW > 1170 ){
                    n = 8;
                }
                else if( $winW > 780 ){
                    n = 3;
                }
                else {
                    n = 1;
                }
                $slideW = $conW / n;
                $slide.css({ width: $slideW });
                $slideWrap.css({ width: ($slideW*24), marginLeft:-($slideW*8) });

                $slideWrap.stop().animate({ left:-($slideW*cnt) },0);
            }
            resizeFn();
            setTimeout(resizeFn, 100);
            
            $(window).resize(function(){
                setTimeout(resizeFn, 100);
            });

            //메인 슬라이드 함수 호출
            function mainSlideFn(){
                $slideWrap.stop().animate({ left:-($slideW*cnt) },600, function(){
                    if(cnt > 7) {cnt = 0}
                    if(cnt < 0) {cnt = 7}
                    $slideWrap.stop().animate({ left:-($slideW*cnt) },0);
                });
            }

            //다음슬라이드카운트함수 호출
            function nextSlideCntFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCntFn(){
                cnt--;
                mainSlideFn();
            }

            // 스와이프이벤트
            $slideView.swipe({
                swipeLeft: function(){
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCntFn();
                        pauseFn();
                    }
                },
                swipeRight: function(){
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCntFn();
                        pauseFn();
                    }
                }
            });

            // 자동타이머함수
            function autoPlay(){
                setId = setInterval(nextSlideCntFn, 4000);
            }
            autoPlay();

            // 이벤트발생후 4초동안 이벤트가 없으면 자동타이머 실행
            function pauseFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t > 4){
                        t = 0;
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCntFn();
                        autoPlay();
                    }
                }, 1000);
            }

            // 페럴럭스 
            var t = 0;
            $(window).scroll(function(){
  
              if( $(window).scrollTop() >= $('#section7').offset().top-600  ){
                if(t==0){
                    t=1;
                  $('#section7 .wrap .gap .container .slide-container').addClass('addFadeIn');                
  
                }                
              }
  
              if( $(window).scrollTop() == 0 ){
                t=0;
                $('#section7 .wrap .gap .container .slide-container').removeClass('addFadeIn');         
              }
  
            });   

        },
        footerFn: function () {

        }
    };

    hongo.init();

})(jQuery);