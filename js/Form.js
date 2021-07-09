class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.choice = createInput("Enter The Number Of Your Choice");
    this.question = createElement("h4");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.choice.hide();
    this.question.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2 +50);
    this.reset.position(displayWidth-100,20);
    this.question.html("Color Of Your Choice:- 1.Red, 2.Pink, 3.Green, 4.Yellow");
    this.question.position(displayWidth/2 -150,  displayHeight/2 -50);
    this.choice.position(displayWidth/2 -40, displayHeight/2 +10);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.choice.hide();
      this.question.hide();

      player.name = this.input.value();
      player.choice = parseInt(this.choice.value());
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
    });

  }
}
