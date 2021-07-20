window.onload=function(){
    let shake  = document.querySelector(".visual-txt h1:nth-child(1)");
    let shack  = document.querySelector(".visual-txt h1:nth-child(2)");
    
    //메인 화면 SHAKE SHACK 글자의 첫 애니메이션 제거
    shake.addEventListener("animationend", ()=>{
        shake.classList.remove("shake");
        shake.style.transform = " rotateZ(4deg) scale(1)";
    });
    shack.addEventListener("animationend", ()=>{
        shack.classList.remove("shack");
        shack.style.transform = " rotateZ(-4deg) scale(1)";
    });
    
}

$(function(){
        
    //main Slide Show
    slideIndex = 0;
    setInterval(function(){
        slideIndex++;
        if(slideIndex>2){slideIndex =0;}
        $(".story-bg li").fadeOut();
        $(".story-bg li").eq(slideIndex).fadeIn();
    },2000);
    
    //main "hot dog card"글자에 마우스 오버
    $(".story-txt span").mouseenter(()=>{
        $(".story-arrow").show();
        $(".story-cartImg").show();
    });
    $(".story-txt span").mouseleave(()=>{
        $(".story-arrow").hide();
        $(".story-cartImg").hide();
    });
    //main 기프트카드 이미지 마우스 오버
    $(".story-gift").mouseenter(()=>{
        $(".story-gift p").text("PURCHASE A GIFT CARD!");
    });
    $(".story-gift").mouseleave(()=>{
        $(".story-gift p").text("GIVE THE GIFT OF SHACK!"); 
    });
    //main 기프트카드 마우스 따라오기
    $(document).mousemove((e)=>{
        if(e.target == document.querySelector(".story-gift img")){
            let x=window.innerWidth-e.pageX;
            let y;
            //나중에하자.
        }
    })
    //main 좌우 클릭 슬라이드
    let clickIdxArr = [1,2,3,4,5];
    //main 뉴스 제목 배열
    const mainNewsArr=["IT’S THE SUMMER OF SHACK: OUR NEW SUMMER MENU FEATURING HOT HONEY CHICKEN IS HERE",
                      "NOW SERVING IN CHICAGO: SHAKE SHACK X SARAH GRUENEBERG COLLAB",
                      "TOGETHER WE STAND UNSHAKEABLE",
                      "GET VAXXED, GET SHACK",
                      "NYC: GET VAXED, GET SHACK",
                      "SHAKE SHACK X DAVOCADOGUY: SOURCING PERFECT AVOCADOS",
                      "NOW SERVING IN NYC: SHAKE SHACK X JUNGHYUN PARK COLLAB",
                      "NEW GOALS: OUR ONGOING COMMITMENT TO DIVERSITY, EQUITY & INCLUSION",
                      "Happy Earth Week 2021, Shack Fam!"]
    
    
    $(".main-left-arrow").click(()=>{
        clickIdxArr.forEach((v,i,a)=>{
            a[i] = v-1;
            if(a[i]<=0){a[i]=9}
            
            mainNewsTitle(v,i,a);
        })
    });
    $(".main-right-arrow").click(()=>{
        clickIdxArr.forEach((v,i,a)=>{
            a[i] = v+1;
            if(a[i]>9){a[i]=1}
            
            mainNewsTitle(v,i,a);
        })
    });
   
    
    /*
    //header.html에 구현했음
    
    let ismobNavOpen = false;
    //mobile-bar 클릭
    $(".mobile-bar").click(()=>{
        if(!ismobNavOpen){
            //css 조절
            $(".mobile-nav").css("transform","scale(1)").css("border-radius","0");
            $(".mobile-nav-bg").css("transform","scale(10)");

            $(".mobile-bar div").css("background-color","#fff");
            $(".mobile-bar div").eq(0).css("transform","rotate(45deg) translate(3px,-3px)");
            $(".mobile-bar div").eq(1).css("transform","rotateY(90deg)");
            $(".mobile-bar div").eq(2).css("transform","rotate(-45deg) translate(3px,3px)");
            //nav가 열려있는 경우 스크롤 방지
            $("html,body").css("overflow","hidden");
            ismobNavOpen = true;
        }else{
            //css 조절
            $(".mobile-nav").css("transform","scale(0)").css("border-radius","100%");
            $(".mobile-nav-bg").css("transform","scale(0)");

            $(".mobile-bar div").css("background-color","var(--main-color)");
            $(".mobile-bar div").eq(0).css("transform","rotate(0deg) translate(0px,0px)");
            $(".mobile-bar div").eq(1).css("transform","rotateY(0deg)");
            $(".mobile-bar div").eq(2).css("transform","rotate(0deg) translate(0px,0px)");
            
            $("html,body").css("overflow","auto");
            ismobNavOpen = false;
        }
        
    
    */
        
    //스크롤 이벤트
    $(window).scroll(()=>{
        
        let scrollBottom = Math.round(($(window).height()+$(window).scrollTop())/$(document).height() *100);
        
        if(scrollBottom>=40){
            $(".news-box h1").css("left","0");
            $(".news-list li").css("margin-top","0");
        }
    })
    
    //main 뉴스 타이틀+이미지 변경 함수
    function mainNewsTitle(v,i,a){
        $(".news-list li").removeClass();
        $(".news-list li img").eq(i).attr("src","img/news/news"+a[i]+".jpg");
        
        $(".news-list li").eq(i).find("p strong").text(mainNewsArr[a[i]-1]);
        
        //가운데 뉴스 박스 애니메이션 효과 넣기
        setTimeout(()=>{
            $(".news-list li").eq(2).addClass("currentIdx");
        },0);
    }

})





