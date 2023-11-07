$(document).ready(function(){
    
    $(window).scroll(function(){
        //스크롤 시 이미지 엇갈리는 효과
        var $scrollTop = $(this).scrollTop();
        console.log("$scrollTop===="+$scrollTop);

        var $win_h = $(window).height();

        var $calc_top = $scrollTop % $win_h;

        $("#guide .landscape:eq(0)").css({"transform" : "translate(0, "+$calc_top * 0.2+"px)"});
        $("#guide .landscape:eq(1)").css({"transform" : "translate(0, calc(55% - "+($calc_top * 0.2)+"px)"});

        

         //스크롤 시 이미지 나타나는 효과         
         var $c_boxTop = $("#contact").offset().top;//contact section 상단 Y축 절대 위치

         if($scrollTop>= $c_boxTop-($win_h/2)){
            $("#contact .frame .img").addClass("active");
            $("#contact .img .cloud").addClass("active");
         }else{
            $("#contact .frame .img").removeClass("active");
            $("#contact .img .cloud").removeClass("active");
         }
         
    });

    //guide 이미지 크기 설정
    $(window).resize(function(){
        resize_img();
    });

    function resize_img() {
        var $img_w = $("#guide .guide_con .img").width()/2-15;
        console.log($img_w);
        if($img_w > 300){
            $img_w = 250;
        }
        $("#guide .landscape").css("width", $img_w+"px");
        $("#guide .landscape").css("height", $img_w+"px");
    
    }
    resize_img();

    //핸드폰 화면 내 스크롤 
    $(".inside").scroll(function(){
        var top = $(".inside").scrollTop();
        if(top>230) {
            $(".inside img:eq(0)").addClass("active");
        }else{
           $(".inside img:eq(0)").removeClass("active");
        }
    });
    
});

