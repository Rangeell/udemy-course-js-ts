// Interface para elementos que precisamos ter na tela
interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement; // Tag video do HTML
  playButton: HTMLButtonElement; // Tag button do HTML
  stopButton: HTMLButtonElement; // Tag button do HTML
}

// Interface para ações
interface VideoPlayerActions {
  playToggle(): void;
  stop(): void;
  initialEvents: () => void // Chama os Events Listenners
}

export default class VideoPlayer implements VideoPlayerActions {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(private elements: VideoPlayerElements) { // Vamos receber um objeto com todos os elementos
    this.videoPlayer = elements.videoPlayer;
    this.playButton = elements.playButton;
    this.stopButton = elements.stopButton;
  }

  initialEvents(): void {
    /*
    Não podemos deixar de usar arrow function
      - Precisamos manter o contexto do 'this' apontando para a Classe
      - Caso contrário, o 'this' seria o botão em si
    */
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }
}

// Instanciando e passando os atributos do contrato (interface "VideoPlayerElements")
const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.initialEvents();
