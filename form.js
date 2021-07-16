class Form{
    constructor(){
        this.title = createElement('h2')//h1=h6
        this.button = createButton("PLAY");
        this.resetButton = createButton("reset")
        this.input = createInput("Name");
        this.greeting= createElement('h3');

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){

     
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2-50,0)

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);


       
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.resetButton.position(displayWidth-100,20)
        this.resetButton.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
            database.ref("players").remove();
            database.ref('/').update({CarsAtEnd:0})
            location.reload();


            
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1//playerCount= playerCount+1
            player.index= playerCount
            player.update();
            player.updateCount(playerCount)
            
            
            this.greeting.position(displayWidth/2-70,displayHeight/4);
            this.greeting.html("Hello "+player.name)

        })





    }
}