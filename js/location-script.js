$(function(){
    const arrowArr = [];
    for(let i=0;i<$(".down-arrow").length;i++){
        arrowArr.push($(".down-arrow").eq(i));
    }
    
    arrowArr.forEach(function(v,idx){
        v.on("click",()=>{

            $(".shop-list>li").eq(idx).hasClass("show") ?
            $(".shop-list>li").removeClass() :
            $(".shop-list>li").removeClass().eq(idx).addClass("show")
            
            $(".down-arrow").css("transform","rotate(180deg)");
            $(".shop-list>li.show .down-arrow").css("transform","rotate(0deg)");
        })
    })
})