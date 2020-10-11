class Game {
  constructor(rolls = []) {
    this._rolls = rolls;
  }

  roll(...pins) {
    return new Game([...this._rolls, ...pins]);
  }

  score(frame = 1, startIndex = 0) {
    if (frame > 10) {
      return 0;
    }

    const [first, second, third] = 
      this._rolls.slice(startIndex);

    if (first === 10) {
      return 10 + second + third + this.score(
        frame + 1,
        startIndex + 1
      );
    }

    if (first + second === 10) {
      return 10 + third + this.score(
        frame + 1, 
        startIndex + 2
      );
    }

    return first + second + this.score(
      frame + 1,
      startIndex + 2
    );
  }
}

module.exports = Game;
