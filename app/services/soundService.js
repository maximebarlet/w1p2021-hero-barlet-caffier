/**
 * Create a sound, change its volume and allow user interactions with those sounds.
 * @class Sound
 */
class Sound {
  /**
   *Creates an instance of Sound.
   * @param {*} src The audio file source
   * @param {boolean} [loop=true] false if you don't want to loop sound
   * @memberof Sound
   */
  constructor(src, loop = true) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    // eslint-disable-next-line no-unused-expressions
    loop ? this.sound.setAttribute('loop', '') : '';
    this.sound.setAttribute('volume', 0.5);
    this.sound.setAttribute('muted', 'muted');
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
  }

  /**
   * This function logs the sound
   * @returns HTML element.
   * @memberof Sound
   */
  log() {
    return console.log(this.sound);
  }
  /**
   * Play the sound.
   * @memberof Sound
   */
  play() {
    this.sound.pause();
    setTimeout(() => {
      this.sound.play();
    }, 100);
    this.state = 'play';
  }

  /**
   * Stop playing the sound.
   * @memberof Sound
   */
  pause() {
    this.sound.pause();
    this.state = 'pause ';
  }

  /**
   * Set the volume to the new value.
   * @param {Number} volume A number between `0` and `1`.
   * @memberof Sound
   */
  setVolume(volume) {
    this.sound.volume = volume;
  }
}

module.exports = Sound;
