$(function(){
    //뉴스 이미지,타이틀,날짜 배열 생성 후 사이트에 삽입
    const newsImgArr=["news1.jpg",
                    "news2.jpg",
                    "news3.jpg",
                    "news4.jpg",
                    "news5.jpg",
                    "news6.jpg",
                    "news7.jpg",
                    "news8.jpg",
                    "news9.jpg",
                    "news10.jpg",
                    "news11.jpg",
                    "news12.jpg",
                    "news13.jpg",
                    "news14.jpg",
                    "news15.jpg",
                    "news16.jpg"]
    const newsTitleArr=["News Title 1 first News Title 1 first News Title 1 first",
                       "News Title 2 second",
                       "News Title 3",
                       "News Title 4 more longlonglonglong title",
                       "News Title 5",
                       "News Title 6",
                       "News Title 7",
                       "News Title 8 long title",
                       "News Title 9",
                       "News Title 10",
                       "News Title 11",
                       "News Title 12",
                       "News Title 13",
                       "News Title 14",
                       "News Title 15",
                       "News Title 16"];
    const newsDateArr=["2021.05.03",
                       "2021.05.12",
                       "2021.05.14",
                       "2021.06.02",
                       "2021.06.03",
                       "2021.06.07",
                       "2021.06.12",
                       "2021.06.16",
                       "2021.06.30",
                       "2021.07.03",
                       "2021.07.01",
                       "2021.07.06",
                       "2021.07.21",
                       "2021.07.22",
                       "2021.07.29",
                       "2021.07.31"];
    
    for(let i=0;i<newsTitleArr.length;i++){
        $(".news-box").append("<div class='news-card'><img src='img/news/"+newsImgArr[i]+"' alt='뉴스"+(i+1)+"'><h1>"+newsTitleArr[i]+"</h1><span>"+newsDateArr[i]+"</span></div>");
    }
    //뉴스 more버튼 클릭 시 height확장
    $(".moreBtn").on("click",function(){
        if(window.matchMedia("(min-width:769px) and (max-width:1024px)").matches){
            //모바일~태블릿 사이즈에서 클릭 시
            if($(".news-box").height() < 2400){
                $(".news-box").stop().animate({height:"+=400px"});
            }
        }else if(window.matchMedia("(max-width:768px)").matches){
            //~모바일 사이즈에서 클릭 시
            if($(".news-box").height() < 3800){
                $(".news-box").stop().animate({height:"+=400px"});
            }
        }else{
            //태블릿~데스크탑 사이즈에서 클릭 시
            if($(".news-box").height() < 3000){
                $(".news-box").stop().animate({height:"+=400px"});
            }
        }
    })
    
    //마지막으로 받은 뉴스 카드의 높이 값(기기가 달라질 때 마다 뉴스 영역의 높이를 조절하기 위함)
    let lastHeight = $(".news-card").height();
    //사이즈의 변화가 있을 때 마다 이벤트 발생
    $(window).resize(function(){
        if($(".news-card").height() != lastHeight){
            if(window.matchMedia("(max-width:1024px)").matches){
                //모바일~태블릿 사이즈
                lastHeight = $(".news-card").height();
                $(".news-box").css("height","800px");
            }else{
                //태블릿~데스크탑 사이즈
                lastHeight = $(".news-card").height();
                $(".news-box").css("height","1000px");
            }
        }
    })  
})