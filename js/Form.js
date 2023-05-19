class Form {
  constructor() {
    //Construir o formulário em HTML
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar!");
    this.titleImg = createImg("./assets/title.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    //Definir a posição dos elementos do formulário
    this.titleImg.position(120,160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    //Adicionar estilo aos elementos do formulário (style.css)
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    //Esconder os elementos quando o jogo iniciar
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  
  handleMousePressed() {
    //Função para quando apertar o botão de PLAY
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `Olá ${this.input.value()} </br> espere o outro jogador entrar... `;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }


  display() {
    //Exibir os elementos nas suas posições e estilos
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    //Chamar a função de apertar o botão PLAY

  }
}