$(document).ready(function(){
    //모바일 사이즈일 경우 버튼 클릭 시 메뉴 보였다 사라짐
    $(".header_con .menu .menu_icon").click(function(){
        var chk = $(".header_con .menu ul").hasClass("active");
        if(chk == false){
            $(".header_con .menu ul").addClass("active");
            $("header .header_con .menu .menu_icon, nav .header_con .menu .menu_icon").addClass("active");
            // $(".dark_bg .header_con .menu ul li:eq(0)").delay(200).fadeIn(300, function(){
            //     $(".dark_bg .header_con .menu ul li:eq(1)").fadeIn(300, function(){ //fade in 쓸 경우 해당 요소가 display:none 시켜야함 
            //         $(".dark_bg .header_con .menu ul li:eq(2)").fadeIn(300, function(){
                       
            //         });
            //     });
            // });
        }else {
            $(".header_con .menu ul").removeClass("active");
            $("header .header_con .menu .menu_icon").removeClass("active");
            // $(".dark_bg .header_con .menu ul li").hide();
        }
       
        return false;
    });
});