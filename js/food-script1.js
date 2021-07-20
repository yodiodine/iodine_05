$(function(){
    const scrollPoint = 300;

    const listArray =[];
    
    
    $(".list-wrap").each((i)=>{
        listArray.push($(".list-wrap").eq(i));
    })
    
    listArray.forEach(function(key,i){
        key.on("mousewheel touchmove",function(e){
            let currentList = $(this).find(".list");
            e.preventDefault();
            if(e.originalEvent.wheelDelta >0){
                //스크롤 업
                //값을 고칠 필요가 있음;
                if(currentList.css("left")<= -currentList.width()+450+"px"){
                    currentList.stop().animate({"left": -currentList.width()+450+"px"},100);
                }else{
                    currentList.stop().animate({"left": parseInt(currentList.css("left"))- scrollPoint +"px"},100)
                }
            }else{
                //스크롤 다운
                
                if(currentList.css("left")>="150px"){
                    currentList.stop().animate({"left": "450px"},100);
                }else{
                    currentList.stop().animate({"left": parseInt(currentList.css("left"))+ scrollPoint +"px"},100)
                }
            }
        })
    })
})
    
    
    
    /*$(".list-wrap").mouseenter(()=>{
        $(".list-wrap").on("mousewheel",(e)=>{
            e.preventDefault();
            
            if(e.target.classList == "list-wrap"){
                currentList = e.target.firstElementChild;
            }else if(e.target.parentElement.classList =="list-wrap"){
                currentList = e.target;
            }else if(e.target.parentElement.parentElement.classList =="list-wrap"){
                currentList = e.target.parentElement;
            }else{
                currentList = e.target.parentElement.parentElement;
            }
            if(e.originalEvent.wheelDelta >0){
                //스크롤 업
                currentList.style.left = parseInt(currentList.style.left) -scrollPoint +"px";
                
            }else{
                //스크롤 다운
                currentList.style.left = parseInt(currentList.style.left) +scrollPoint +"px";
            }
        })
    })*/