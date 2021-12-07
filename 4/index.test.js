const {cardMarker, cardSum, cardHasWon, game, game2} = require("./index.js");

describe('cardMarker', () => {
  it('Given a card when called is a value in the card, marks it', () => {
    const card = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ];
    const called = 7;
    const expected = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, null],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ];

    const result = cardMarker(card, called);

    expect(result).toEqual(expected);
  });

  it('Given a card when called is not a value in the card, does not mark it', () => {
    const card = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ];
    const called = 500;

    const result = cardMarker(card, called);

    expect(result).toEqual(card);
  });
});

describe('cardSum', () => {
  it('Given a sample card, returns the expected sum', () => {
    const card = [
      [null, null, null, null,  null],
      [10, 16, 15,  null, 19],
      [18,  8, null, 26, 20],
      [22, null, 13,  6,  null],
      [ null,  null, 12,  3,  null]
    ];
    const expected = 188

    const result = cardSum(card);

    expect(result).toEqual(expected);
  });
});

describe('cardHasWon', () => {
  it('Given a card that is not a winner, returns false', () => {
    const card = [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ];

    const result = cardHasWon(card);

    expect(result).toBeFalsy();
  });

  it('Given a card that has won horizontally, returns true', () => {
    const card = [
      [null, null, null, null,  null],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19]
    ];

    const result = cardHasWon(card);

    expect(result).toBeTruthy();
  });

  it('Given a card that has won vertically, returns true', () => {
    const card = [
      [null, 13, 17, 11, 0],
      [null, 2, 23, 4, 24],
      [null, 9, 14, 16, 7],
      [null, 10, 3, 18, 5],
      [null, 12, 20, 15, 19]
    ];

    const result = cardHasWon(card);

    expect(result).toBeTruthy();
  });

  it('Given a card that has won vertically and horizontally, returns true', () => {
    // Case where it fills a corner in that causes 2 win conditions at once
    const card = [
      [null, null, null, null,  null],
      [null, 2, 23, 4, 24],
      [null, 9, 14, 16, 7],
      [null, 10, 3, 18, 5],
      [null, 12, 20, 15, 19]
    ];

    const result = cardHasWon(card);

    expect(result).toBeTruthy();
  });
});

describe('game', () => {
  it('Given the sample input, returns 4512', () => {
    const cardInput = [
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
      ],
      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6]
      ],
      [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7]
      ]
    ];
    const callsInput = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];

    const result = game(cardInput, callsInput);

    expect(result).toEqual(4512)
  })
});

describe('game2', () => {
  it('Given the sample input, returns 1924', () => {
    const cardInput = [
      [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
      ],
      [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6]
      ],
      [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7]
      ]
    ];
    const callsInput = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];

    const result = game2(cardInput, callsInput);

    expect(result).toEqual(1924)
  })
});