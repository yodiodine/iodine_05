$(function(){
    $(window).on("scroll",function(){
        
        
        $(".gift-img1").css("top",(-50+window.scrollY*0.7)+"px");
        $(".gift-img2").css("top",(500-window.scrollY*0.7)+"px");
        $(".gift-header h1").css("margin-top",(230+window.scrollY*0.3)+"px")
        $(".gift-header p").css("left",(-300+window.scrollY*1.4)+"px")
        
        
    })
})