$(function(){
    $(window).on("scroll",function(){
        
        
        $(".gift-img1").css("top",(-50+window.scrollY*0.7)+"px");
        $(".gift-img2").css("top",(450-window.scrollY*0.7)+"px");
        $(".gift-header h1").css("margin-top",(180+window.scrollY*0.1)+"px")
        $(".gift-header p").css("left",(-30+window.scrollY*0.5)+"px")
        
        
    })
})