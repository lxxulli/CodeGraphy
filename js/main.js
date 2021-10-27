$(document).ready(function () {
    function setBox() {
        var itemLen = $(".thumb li").length;
        var wholeWidth = 0;
        var padLeft = $(".box").css("paddingLeft");//padding left구하기
            padLeft = parseFloat(padLeft);
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        
        for (i = 0; i < itemLen; i++) {
            wholeWidth += ($(".thumb li").eq(i).width());
        }
        $(".box").width(wholeWidth);

        var sliderHeight = (padLeft + wholeWidth + winHeight) - winWidth;
        $(".slider").height(sliderHeight);
    }
    setBox();

    function setFoot() {
        var fHeight = $("footer").innerHeight();
        $("#wrapper").css("paddingBottom",fHeight);
    }

    $(window).on("resize",setFoot)


    $(window).on("scroll", function () {
        var winHeight = $(window).height();
        var scr = $(window).scrollTop();
        var fixStart = $(".slider").offset().top;
        var fixEnd = $(".slider").height() - winHeight;
        if (scr >= fixStart && scr < fixEnd + fixStart) {
            $(".slider .wrap").removeClass("floatUp");
            $(".slider .wrap").removeClass("floatDown");
            $(".slider .wrap").addClass("fix");
            $(".slider .wrap .thumb").css("left", -scr + fixStart);
        } else if(scr >= fixEnd + fixStart){
            $(".slider .wrap").removeClass("fix").addClass("floatUp");
        } else if(scr < fixStart){
            $(".slider .wrap").removeClass("fix").addClass("floatDown");
        }   

        if(scr >= $("html").prop("scrollHeight")  - winHeight - $(".f_logo").innerHeight() / 2){
            $(".f_logo").addClass("active");
        } else {
            $(".f_logo").removeClass("active");
        }

        
    });

    AOS.init();
    setFoot();
});