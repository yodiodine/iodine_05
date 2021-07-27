$(function(){
    let cont1Idx=0,cont2Idx=0,cont3Idx=0;
    let listWidth = $(".menu-list .box").width();
    let startY,endY;

    const listArr=[];
    //각 컨테이너 속 list를 배열에 추가
    for(let i=0;i<$(".menu-list").length;i++){
        listArr.push($(".menu-list").eq(i));
    }
    
    //모바일 터치 이벤트
    $(".box img").on("touchstart",function(e,delta){
        e.preventDefault();
        startY = e.originalEvent.changedTouches[0].screenY;
    })
    $(".box img").on("touchend",function(e,delta){
        endY = e.originalEvent.changedTouches[0].screenY;
        //터치이벤트가 일어났을 경우 startY-endY의 양,음수 비교
        startY-endY<0 ? delta = 1 : delta = -1;
        
        let currentIdx;       
        let tempIdx;
        //어떤 컨테이너의 현 메뉴 인덱스를 넣을 것인지. (초기값은 전부 처음 메뉴에 놓으였으므로 각 0 0 0 )
        if($(this).parents(".menu-list").hasClass("list1")){
            tempIdx=cont1Idx;
            currentIdx=0;
        }else if($(this).parents(".menu-list").hasClass("list2")){
            tempIdx=cont2Idx;
            currentIdx=1;
        }else{
            tempIdx=cont3Idx;
            currentIdx=2;
        }
        
        horizontal($(this).parents(".menu-list"),tempIdx,currentIdx,e,delta);
    })
    
    //마우스흴 이벤트
    $(".box img").on("scroll mousewheel",function(e,delta){
        
        delta = e.originalEvent.wheelDelta;
        let currentIdx;       
        let tempIdx;
        //어떤 컨테이너의 현 메뉴 인덱스를 넣을 것인지. (초기값은 전부 처음 메뉴에 놓으였으므로 각 0 0 0 )
        if($(this).parents(".menu-list").hasClass("list1")){
            tempIdx=cont1Idx;
            currentIdx=0;
        }else if($(this).parents(".menu-list").hasClass("list2")){
            tempIdx=cont2Idx;
            currentIdx=1;
        }else{
            tempIdx=cont3Idx;
            currentIdx=2;
        }
        
        //횡스크롤이벤트
        horizontal($(this).parents(".menu-list"),tempIdx,currentIdx,e,delta);
    })
    
    //창 크기 조절시 초기화
    $(window).resize(()=>{
        
        //임시적으로 첫번째 메뉴로 다시 이동하도록 막았음..
        cont1Idx=0,cont2Idx=0,cont3Idx=0;
        listWidth = $(".menu-list .box").width();
        
        $(".menu-list").css("left","-"+(0)*$(".box").width()+"px")
        
    })
    
    
    //횡스크롤 함수
    function horizontal(menuList,tempIdx,currentIdx,e,delta){
        if(delta<0){
                //마우스 내림
                if(parseInt(menuList.css("left"))<=-menuList.width()+listWidth*1.5){
                    menuList.stop().animate({"left":-menuList.width()+listWidth+"px"},500);
                }else{
                    e.preventDefault();
                    menuList.stop().animate({"left":"-"+(tempIdx+1)*listWidth+"px"},500,()=>{
                        if(currentIdx==0){
                            cont1Idx>=6?cont1Idx=6:cont1Idx++;
                        }else if(currentIdx==1){
                            cont2Idx>=6?cont2Idx=6:cont2Idx++;
                        }else{
                            cont3Idx>=6?cont3Idx=6:cont3Idx++;
                        }
                    });
                }
            }else{
                //마우스 올림
                if(parseInt(menuList.css("left"))>=0){
                    menuList.stop().animate({"left":0},500);
                }else{
                    e.preventDefault();
                    menuList.stop().animate({"left":"-"+(tempIdx-1)*listWidth+"px"},500,()=>{
                        if(currentIdx==0){
                            cont1Idx<=0?cont1Idx=0:cont1Idx--;
                        }else if(currentIdx==1){
                            cont2Idx<=0?cont2Idx=0:cont2Idx--;
                        }else{
                            cont3Idx<=0?cont3Idx=0:cont3Idx--;
                        }
                    });
                }
            }
    }
})