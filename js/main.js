// window.addEventListener('DOMContentLoaded', () => {
    
//     const preload = document.querySelector('.preload');
//     preload.classList.add("preload-finish");

// });
//load 이벤트는 문서내의 모든 리소스(이미지, 스크립트)의 다운로드가 끝난 후에 실행된다. 이것을 에플리케이션의 구동이 너무 지연되는 부작용을 초래할 수 있다.
// DOMContentLoaded는 문서에서 스크립트 작업을 할 수 있을 때 실행되기 때문에 이미지 다운로드를 기다릴 필요가 없다.

$(window).on('load',function(){
    $(".preload").addClass("preload-finish");
    // var agent = navigator.userAgent.toLowerCase();
    // if (agent.indexOf("chrome") != -1) {
    //  }else{
    //    $(".preload").addClass("preload-finish");
    // }
    
});
$(document).ready(function(){
    //로딩 시 텍스트 circle 형태
    new CircleType(document.getElementById('loadtxt'));

    //텍스트 밑줄 효과
    setTimeout(function() { 
        $("header .header_txt h3").addClass("active");
    }, 1000);

    //타이핑 효과
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".header_txt p").text(); // 타이핑될 텍스트를 가져온다 
    $(".header_txt p").empty();
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
    function typing(){ 
    setTimeout(function() { 
            if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
                $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++; 
            } else{ 
                clearInterval(tyInt); //끝나면 반복종료 
            } 
        }, 1000);
    }  

    //이미지 -> 영상 변경
    $(".video_frame a").click(function(){
        $(".video_frame").html("<iframe width='650' height='365' src='https://www.youtube.com/embed/Rl2LLJ2wrKs' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
        return false;
    });

    //마우스 휠 이벤트
    function resizeEvt(){
        //가로값
        var width =$(window).width();
        console.log(width);

        if(width < 1200){
            $(".main_section").each(function(){
                $(this).on("mousewheel DOMMousewheel", function(e){
                    //mousewheel : 크롬, 오페라, 익스엣지 적용되는 이벤트(또는 이벤트 핸들러)
                    //DOMMousewheel : 파이어폭스, 익스 9+
                    e.preventDefault();//초기화되는 부분을 방지
                    var delta = 0; //브라우저가 로딩되면서 마우스 휠을 돌리지 않은 상태
                    if(!event) { //마우스 휠을 돌리지 않아서 이벤트가 발생하지 않은 상태
                        event = window.event; //어떠한 이벤트 조차도 발생하지 않았을 경우, 윈도우의 브라우저 로딩 상태를 유지시킴
                    }
                    //event.wheelDelta(크롬, 익스엣지)
                    //휠을 내렸을 경우 -120 / 휠을 올렸을 경우 120
                    //event.wheelDelta(오페라)
                    //휠을 내렸을 경우 120 / 휠을 올렸을 경우 -120
                    //event.detail(파이어폭스)
                    //휠을 내렸을 경우 -4/ 휠을 올렸을 경우 4
                    if(event.wheelDelta){
                        delta = event.wheelDelta;
                        console.log(delta);
                        //휠을 내렸을 경우 -120 / 휠을 올렸을 경우 120
                        if(window.opera){
                            delta = -delta;  //오페라 브라우저의 경우 마우스 휠로 부터 이벤트 적용 시 반대의 값을 받아오기 때문에 역으로 반환
                        }
                    }else if(event.datail){
                        delta= -event.detail;
                    }

                    var moveTo = null; //휠 이벤트에 대한 값을 초기화. 값이 null값(값이 없음을 이야기함)
                    //마우스 휠을 내렸을 경우
                    if(delta<0) {//마우스 휠을 내렸을 때, [음의 정수] 값을 받아오는 경우
                        if($(this).next() != undefined){ //다음으로 이동하려는 섹션이 존재하는 경우
                            moveTo = $(this).next().offset().top;
                        }
                    }else{//마우스 휠을 올렸을 때, [양의 정수] 값을 받아오는 경우
                        if($(this).prev() != undefined){ //이전으로 이동하려는 섹션이 존재하는 경우
                            moveTo = $(this).prev().offset().top;
                        }
                    }

                    //  동적 움직임을 구현
                    $("html, body").stop().animate({scrollTop : moveTo+"px"},{dutation:1000,complete:function(){}});
                    //$("html, body").stop().animated({scrollTop : moveTo+"px"} , 시간; => 각 박스의 상단으로 이동시키는 부분을 적용
                    //{dutation:1000,complete:function(){}} : 소요되는 시간 1초, 도달하기까지의 함수구문으로 대기하라는 의미

                });
            });
        
        }
    }
    resizeEvt();

    $(window).resize(function() {
        resizeEvt();
    });

    //스크롤 시 헤더 높이를 지나면 메뉴 sticky(메인만 적용)
    $(window).scroll(function(){
        var $header_height = $("header").height();
        var $scrollTop = $(window).scrollTop();
        if($scrollTop > $header_height) {
            $("header nav").css("display", "block");
        }else{
            $("header nav").css("display", "none");
        }
    });

});






