const Game = require('./game');

describe('bowling game', () => {
  it('can score gutter game (all zero)', () => {
    checkScore(...new Array(20).fill(0), 0);
  });

  it('can score game of ones', () => {
    checkScore(...new Array(20).fill(1), 20);
  });

  it('can score spare followed by three', () => {
    checkScore(5, 5, 3, ...new Array(17).fill(0), 16);
  });

  it('can score strike followed by three then three', () => {
    checkScore(10, 3, 3, ...new Array(16).fill(0), 22);
  });

  it('can score perfect game', () => {
    checkScore(...new Array(12).fill(10), 300);
  });

  function checkScore(...pins, score) {
    const game = new Game();
    const result = game.roll(...pins);

    expect(result.score()).toBe(score);
  }
});
