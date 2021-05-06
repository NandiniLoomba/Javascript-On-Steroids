//challenge 1

function AgeInDays(){
    var year=prompt("Which year were you born.....Good friend??");
    var result=(2021-year)*365;
    document.getElementById("res").innerHTML="You are " + result + " days old.";
    
}

function reset(){
    document.getElementById("res").innerHTML="";
}


//challenge 2

function beautiful_Cats(){
    var Catimg=document.createElement("img");
    var box=document.getElementById("cat-img");
    Catimg.src="Images/cat_16x9.jpg";
    Catimg.style="width: 250px; height: 200px;";
    Catimg.id="cat";
    box.appendChild(Catimg);
    
}


//challenge 3

function sps(choice){
   
    var bot=Math.floor(Math.random() * (3) + 1);
    var img=document.createElement("img");
    if(bot==1) {
        img.id="scissor";
        img.src="Images/scissors.jpg";
    }

    else if(bot==2){
        img.id="paper";
        img.src="Images/paper.jpg";
    }  
    else{
        img.id="stone";
        img.src="Images/stone.jpeg";
    } 

    var my_img=document.createElement("img");
    var your_img=document.createElement("img");
    var msg_div=document.createElement("div");

    my_img.src=choice.src; 
    your_img.src=img.src;
    my_img.id="mynewimg";
    your_img.id="yournewimg";

    
    document.getElementById("scissor").remove();
    document.getElementById("stone").remove();
    document.getElementById("paper").remove();
    

    if(choice.id==img.id){
        msg_div.innerHTML="Tie";
    }
    else if((choice.id=="scissor" && img.id=="paper") || (choice.id=="paper" && img.id=="stone") || (choice.id=="stone" && img.id=="scissor")){
        msg_div.innerHTML="Congratulation!!.. You Won..";
    }
    else{
        msg_div.innerHTML="Sorry..You lost!!";
    }

    msg_div.id="msgid";

    document.getElementById("scissor-div").appendChild(my_img);
    document.getElementById("paper-div").appendChild(msg_div);
    document.getElementById("stone-div").appendChild(your_img);
}

//challenge 4

var all_buttons=document.getElementsByClassName("btn");

var copy_buttons=[];
for(let i=0;i<all_buttons.length;i++){
    copy_buttons.push(all_buttons[i].classList[1]);
    
}


function change_colors(option){

   for(let i=0;i<all_buttons.length;i++){
        if(all_buttons[i].classList.length<=2 && all_buttons[i].classList[1]) {
            var to_delete=all_buttons[i].classList[1];
            all_buttons[i].classList.remove(to_delete);
        }
       
   }
   

   if(option.id=="reset"){
       for(let i=0;i<all_buttons.length;i++){
           if(all_buttons[i].classList.length<=2){
              var color_to_add=copy_buttons[i];
              all_buttons[i].classList.add(color_to_add);
           }
           
       }
       
   }
   else if(option.id=="random"){
        var random_colors=["btn-primary","btn-secondary","btn-success","btn-danger","btn-warning","btn-info","btn-light","btn-dark"];
        for(let i=0;i<all_buttons.length;i++){
            if(all_buttons[i].classList.length<=2){
                var index=Math.floor(Math.random() * (7 ) );
                all_buttons[i].classList.add(random_colors[index]);
            }
        }
   }
   else if(option.id=="blue"){
    for(let i=0;i<all_buttons.length;i++){
        if(all_buttons[i].classList.length<=2)
           all_buttons[i].classList.add("btn-info");
    }
   }

   else if(option.id=="yellow"){
    for(let i=0;i<all_buttons.length;i++){
        if(all_buttons[i].classList.length<=2)
          all_buttons[i].classList.add("btn-warning");
    }
   }
   else{
    for(let i=0;i<all_buttons.length;i++){
        if(all_buttons[i].classList.length<=2)
          all_buttons[i].classList.add("btn-success");
    }
   }
}

//challenge 5

var my_score=0,bot_score=0,win=0,loss=0,tie=0,burst_me=0,burst_he=0,my_turn=1,your_turn=1,deal_done=0;

var aww = new Audio("sounds/aww.mp3");
var swish = new Audio("sounds/swish.m4a");
var cash = new Audio("sounds/cash.mp3");

function new_game(){
    var div1=document.createElement("div");
    div1.id="card-box1";
    div1.style.paddingTop="20px";
    document.getElementById("column1").append(div1);

    var div2=document.createElement("div");
    div2.id="card-box2";
    div2.style.paddingTop="20px";
    document.getElementById("column2").append(div2);
}

new_game();

function add_image(num,side){
     
     var card_img=document.createElement("img");
     if(num==1)  card_img.src="Images/a.gif";
     else if(num==2) card_img.src="Images/two.gif";
     else if(num==3) card_img.src="Images/three.gif";
     else if(num==4) card_img.src="Images/four.png";
     else if(num==5) card_img.src="Images/five.gif";
     else if(num==6) card_img.src="Images/six.gif";
     else if(num==7) card_img.src="Images/seven.png";
     else if(num==8) card_img.src="Images/eight.gif";
     else if(num==9) card_img.src="Images/nine.gif";
     else if(num==10) card_img.src="Images/ten.gif";
     else if(num==11) card_img.src="Images/j.jpg";
     else if(num==12) card_img.src="Images/q.gif";
     else if(num==13) card_img.src="Images/king.gif";
     
     card_img.id="card_img";

     if(side==1) document.getElementById("card-box1").appendChild(card_img);
     else  document.getElementById("card-box2").appendChild(card_img);

}

function card_value(to_add,score){
   
   if(to_add==2 || to_add==3 || to_add==4 || to_add==5 || to_add==6 || to_add==7 || to_add==8 || to_add==9) return to_add;
   
   if(to_add==10 || to_add==11 || to_add==12 || to_add==13) return 10;
   
   if((score+11)>21) return 1;
   
   else return 11;
   
       
}

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function stand()
{
    my_turn=0; 
    if(your_turn==1 && burst_he==0){
    
        while(Math.abs(21-bot_score)>4){
            swish.play();
            var card=Math.floor(Math.random() * (12) + 1);
            var to_add=card_value(card,bot_score);
            
            if((bot_score+to_add)>21){
                document.getElementById("you").innerHTML="Burst!!";
                document.getElementById("you").style.color="red";
                burst_he=1;
                bot_score=-1;
                break;
            }
            else{
    
                add_image(card,2);
                bot_score+=to_add;
            }
            document.getElementById("you").innerHTML=bot_score;
            
            await sleep(1000);
        }
        var temp=bot_score;
        if(temp!=-1) bot_score=temp;
        your_turn=0;
        result();
        
    }
   
     
}


function hit(){ 
     swish.play();
     if(burst_me==0 && my_turn==1){
      var card=Math.floor(Math.random() * (12) + 1);
      var to_add=card_value(card,my_score);

      if((my_score+to_add)>21){
             document.getElementById("me").innerHTML="Burst!!";
             document.getElementById("me").style.color="red";
             burst_me=1;
      }
      else{
          add_image(card,1);
          my_score+=to_add;
          document.getElementById("me").innerHTML=my_score;
      }
    }
}




function result(){
    if((burst_me==1 && burst_he==1) || Math.abs(21-my_score)==Math.abs(21-bot_score)){
        tie+=1;
        document.getElementById("result-declare").innerHTML="Its a tie!!";
        document.getElementById("result-declare").style.color="blue";
        document.getElementById("draw").innerHTML=tie;
    }
    else if(burst_me==1 || Math.abs(21-my_score)>Math.abs(21-bot_score)){
       loss+=1;
       document.getElementById("result-declare").innerHTML="Sorry!! You lost..";
       document.getElementById("result-declare").style.color="red";
       document.getElementById("losses").innerHTML=loss;  
       aww.play();
    }
    else {
       win+=1;
       document.getElementById("result-declare").innerHTML="WOWOOO You won!!";
       document.getElementById("result-declare").style.color="green";
       document.getElementById("wins").innerHTML=win;
       
    }
 
}

function deal(){
    if(my_turn==0 && your_turn==0){
      cash.play();  
      deal_done=1;
     
      document.getElementById("result-declare").innerHTML="Lets play!!";
      document.getElementById("result-declare").style.color="black";
      document.getElementById("me").innerHTML="0";
      document.getElementById("me").style.color="white";
      document.getElementById("you").innerHTML="0";
      document.getElementById("you").style.color="white";

      my_score=0,bot_score=0,burst_he=0,burst_me=0,my_turn=1,your_turn=1;
    
      document.getElementById("card-box1").remove();
      document.getElementById("card-box2").remove();

      new_game();
    }
    
}



