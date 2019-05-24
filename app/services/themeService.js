import Sound from './soundService';

class theme {
  constructor(src, volume) {
    this.src = new Sound(src);
    this.src.setVolume(volume);
  }
  change(src, loop) {
    this.src.pause();
    document.body.removeChild(this.src.sound);
    this.src = new Sound(src, loop);
  }
  pause() {
    this.state = 'stopped';
    this.src.pause();
  }
  play() {
    if (document.querySelector('.settings #sound').checked) {
      this.state = 'playing';
      this.src.play();
    } else {
      console.warn('Could not launch sound due to disabled music settings.');
    }
  }
  setVolume(volume) {
    this.src.setVolume(volume);
  }
}

module.exports = new theme('/sounds/home-theme.mp3', 0.1);
