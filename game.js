class Game{
    constructor(){





    }
   getState(){
       database.ref('gameState').on("value",function(data){gameState=data.val()})
   }
   update(state){
    database.ref('/').update({gameState:state})

   }
  async start(){
       if(gameState===0){
        player=new Player()
        var playerCountRef =await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val()
            player.getCount()
        }
        
        form=new Form()
        form.display()
       }
       car1= createSprite(100,200)
       car1.addImage("car1",car1Img)
       car2= createSprite(300,200)
       car2.addImage("car2",car2Img)
       car3= createSprite(500,200)
       car3.addImage("car3",car3Img)
       car4= createSprite(700,200)
       car4.addImage("car4",car4Img)
       cars=[car1,car2,car3,car4]
   }
   play(){
       form.hide()
       
       Player.getPlayerInfo()//this function is static function so, it is called using class name instead of object name
       player.getCarsAtEnd();
       if(allPlayers !== undefined){
           background(rgb(198,135,103))
           image(trackSuitImg,0,-displayHeight*4,displayWidth,displayHeight*5)
           var index=0;
           var x=100;
           var y;

        
        for(var plr in allPlayers){
            index=index+1
            x=x+200
            y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y

            if(plr=="player"+player.index){
             cars[index-1].shapeColor="red"
             camera.position.x=displayWidth/2
             camera.position.y=cars[index-1].y
             fill("red")
             ellipse(x,y+100,20,20)
            }
            
        }
       }
       if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance +=50;//hello there
            player.update();
       }
       if(player.distance>5150){
        gameState=2
        player.rank+=1
        Player.updateCarsAtEnd(player.rank)
       }
       
       drawSprites();
   }
   end(){
    console.log(player.rank)
    var winner=createElement('h3')
    winner.position(displayWidth/2-200,100)
    winner.html(player.name+ " You are ranked "+player.rank)





   }
}