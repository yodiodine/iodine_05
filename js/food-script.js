$(function(){
    
    const listWidth = $(".menu-list .box").width();
    
    $(".container").on("scroll touchmove mousewheel",function(e,delta){
        delta = e.originalEvent.wheelDelta;
        let currentIdx = $(this).index();
        //1번째 컨테이너에 스크롤 진입
        if($(window).scrollTop()>=$("#header-wrap").height()){
            //스크롤 막기
            e.preventDefault();
//            e.stopPropagation();
            scrollX(currentIdx,delta);
        }
    })
    
    //옆으로 이동 시, 박스의 크기만큼만 움직이게 (계속 스크롤링 해도 박스크기만큼 움직일때 까지 스크롤 막히게...)
    //창 리사이즈 할 때 마다 ..................................
    //left가 양 끝쪽에 위치할 땐 y스크롤이 먹히게 해야함
    
    //파일 날리기전에 깃해두기 
    
    function scrollX(idx,delta){
        console.log($(this).index())
        if(delta<0){
            if(parseInt($(".menu-list").eq(idx).css("left"))<=-$(".menu-list").eq(idx).width()+listWidth*1.5){
                $(".menu-list").eq(idx).css("left",-$(".menu-list").eq(idx).width()+listWidth+"px");
            }else{
                $(".menu-list").eq(idx).stop().animate({"left":"-="+listWidth+"px"},500); 
            }
        }else{
            if(parseInt($(".menu-list").eq(idx).css("left"))>=0){
                $(".menu-list").eq(idx).css("left",0);
            }else{
                $(".menu-list").eq(idx).stop().animate({"left":"+="+listWidth+"px"},500);
            }
        }
    }
    
    
    //스크롤 이벤트가 발생할 때 마다 ()->{}발동시키기
        //만약 윈도우.스크롤 탑이 헤더의 높이보다 크다면
        //{1번째 컨테이너에 들어온 것이니, 스크롤 막아!!!. 스크롤x를활성화하는게 아니지
    
        //여기서 만약 스크롤이 다운이면, 1번째 컨테이너의 left를 -=100vw씩 한다.
            //그런데 여기서 만약, (이거 먼저 체크하기) 다운을 했는데, left가 컴테이너의 길이에 다다르면(전체길이-한빡스 100vw), 그땐 스크롤 Y가 다시 활성화.}
        //만약.스클로 업이면 1번째 컨테이너의 left를 +=100vw한다. 
            //그런데 만약, 업인데, left가 이미 0이면, 스크롤 Y활성화하고, 위로올라가겠지../
    
    ///////여기까지가
    
    
    
})