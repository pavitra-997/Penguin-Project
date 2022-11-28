"use strict"


var yetiPos;
var valueClicked;
let rightClick=0;
var highScore;



$(document).ready( function() {

   
 
    yetiPos = Math.floor(Math.random() * 9 + 1);
    console.log(yetiPos);
    let a = $("."+yetiPos).attr("id");

    $("."+yetiPos).attr('id', 'yeti');

   
   
    $("#gameholder > div").click(function() {
        rightClick= rightClick+1;
        console.log(rightClick);
        valueClicked = $(this).attr("class");
        let id=$(this).attr("id");
        
        $('<div id="score"></div>').appendTo('body');
        $("#score").css({"display": "flex", "font-size": "150%","justify-content": "center"});
         console.log(valueClicked);
        // console.log(yetiPos);
         highScore = sessionStorage.getItem('highScore') ? sessionStorage.getItem('highScore') : 0;
        if(valueClicked != yetiPos)
        {
            if(rightClick < 8 )
            {
                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', "images/penguinss.wav");
                audioElement.type="audio/wav";
                audioElement.play();
    
               $("#score").text("Your Score:"+rightClick);
               $("."+valueClicked).css("background-image","url(images/penguin_"+valueClicked+".png");
               $("."+valueClicked).off("click");
            }
             else 
             {
                var audioElement = document.createElement('audio');
                audioElement.setAttribute('src', "images/penguinss.wav");
                audioElement.type="audio/wav";
               audioElement.play();
                $("#score").text("Your Score:"+rightClick);
                $("."+valueClicked).css("background-image","url(images/penguin_"+valueClicked+".png");
                $("."+valueClicked).off("click");
                gameover(1);
             }
        }

        else 
        {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute("src", "images/yetiii.wav");
            audioElement.type="audio/wav";
            audioElement.play();
            rightClick--;
            $("#score").text("Your Score:"+rightClick);
           
            gameover(0); 

        }
  
    });
  

function gameover(score){
  if (rightClick > highScore) {
    highScore = rightClick;
    sessionStorage.setItem('highScore', rightClick);

}
    $('<div id="result"></div>').appendTo('body');
    if(score==1)
    {

        for(let i=1;i<10; i++)
      {    
        $("."+i).css("background-image","url(images/mound_"+i+".png");
        $("."+i).off("click"); 
      }
       $("#result").text("Congratulation, You Win !!!");
       $("#score").text("Start new game. Your Highscore is "+highScore);
    }
     else 
    {
        for(let i=1;i<10; i++)
        {
           if(i!= yetiPos)
           {
             $("."+i).css("background-image","url(images/mound_"+i+".png");
             $("."+i).off("click");
          }
           else{
             $("."+i).css("background-image","url(images/yeti.png");  
             $("."+i).off("click");
           }
         }
      $("#result ").text("Ohh sorryy..Yeti Ate You :(");
      $("#score").text("Start new game.Your Highscore is  "+highScore);
    }
   
}


});

