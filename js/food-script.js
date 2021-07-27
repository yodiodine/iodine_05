$(function(){
    let cont1Idx=0,cont2Idx=0,cont3Idx=0;
    let listWidth = $(".menu-list .box").width();
    
    
    
    //컨테이너에 마우스휠을 돌릴 경우 가로로 움직임
    $(".container").on("change scroll touchmove mousewheel",function(e,delta){
        let scrollPoint = Math.round($(window).scrollTop()/$(document).height()*100);
        
        delta = e.originalEvent.wheelDelta;
        let currentIdx = $(this).index();        
        let tempIdx;
        if(currentIdx==0){tempIdx=cont1Idx}else if(currentIdx==1){tempIdx=cont2Idx}else{tempIdx=cont3Idx}
        
        console.log(scrollPoint)
        
        //해당 구역에 들어와서 스크롤링 할 때에만 작동하게
        if((scrollPoint >=3 &&scrollPoint <=7)  || (scrollPoint >=29 &&scrollPoint <=33) || (scrollPoint >=57 &&scrollPoint <=60)){

            if(delta<0){
                //마우스 내림
                if(parseInt($(".menu-list").eq(currentIdx).css("left"))<=-$(".menu-list").eq(currentIdx).width()+listWidth*1.5){
                    $(".menu-list").eq(currentIdx).stop().animate({"left":-$(".menu-list").eq(currentIdx).width()+listWidth+"px"},500);
                }else{
                    e.preventDefault();
                    $(".menu-list").eq(currentIdx).stop().animate({"left":"-"+(tempIdx+1)*listWidth+"px"},500,()=>{
                        if(currentIdx==0){
                            cont1Idx>=6?cont1Idx=6:cont1Idx++;
                        }else if(currentIdx==1){
                            cont2Idx>=6?cont2Idx=6:cont2Idx++;
                        }else{
                            cont3Idx>=6?cont3Idx=6:cont3Idx++;
                        }
                    });
                    $(".container").off("scroll touchmove mousewheel")
                }
            }else{
                //마우스 올림
                if(parseInt($(".menu-list").eq(currentIdx).css("left"))>=0){
                    $(".menu-list").eq(currentIdx).stop().animate({"left":0},500);
                }else{
                    e.preventDefault();
                    $(".menu-list").eq(currentIdx).stop().animate({"left":"-"+(tempIdx-1)*listWidth+"px"},500,()=>{
                        if(currentIdx==0){
                            cont1Idx<=0?cont1Idx=0:cont1Idx--;
                        }else if(currentIdx==1){
                            cont2Idx<=0?cont2Idx=0:cont2Idx--;
                        }else{
                            cont3Idx<=0?cont3Idx=0:cont3Idx--;
                        }
                    });
                    $(".container").off("scroll touchmove mousewheel")
                }
            }
        }
    })
    
    $(window).resize(()=>{
        
        //임시적으로 첫번째 메뉴로 다시 이동하도록 막았음..
        cont1Idx=0,cont2Idx=0,cont3Idx=0;
        listWidth = $(".menu-list .box").width();
        
        $(".menu-list").css("left","-"+(cont1Idx)*$(".box").width()+"px")
        $(".menu-list").css("left","-"+(cont2Idx)*$(".box").width()+"px")
        $(".menu-list").css("left","-"+(cont3Idx)*$(".box").width()+"px")
        
    })
})