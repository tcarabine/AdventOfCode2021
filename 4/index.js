const fs = require('fs');
const os = require('os');

const invertNestedArray = (arr) => {
  let flipped = [];
  for (let ix = 0; ix < arr[0].length; ix++) {
    flipped[ix] = arr.map(val => val[ix]);
  }
  return flipped;
}

const cardMarker = (card, called) => {
  return card.map((row) => row.map((val) => val === called ? null : val));
}

const cardSum = (card) => {
  return card.reduce((total, row) => total + row.reduce((sum, val) => val + sum, 0), 0);
}

const cardHasWon = (card) => {
  const horizontal = card.map((row) => row.filter((val) => val === null).length === row.length);
  const vertical = invertNestedArray(card).map((col) => col.filter((val) => val === null).length === col.length);

  const hasWon = ![...horizontal, ...vertical].every((val) => val === false);
  if (hasWon) { console.log(card); }
  return hasWon;
}

const game = (cards, calls) => {
  for (let ix = 0; ix < calls.length; ix++) {
    console.log(`Playing ${calls[ix]}`);

    cards = cards.map((card) => cardMarker(card, calls[ix]))
    let winner = cards.filter(card => cardHasWon(card));
    if (winner.length > 0) {
      console.log(`Winner!`);
      return cardSum(winner[0]) * calls[ix];
    }
  }
}

const game2 = (cards, calls) => {
  for (let ix = 0; ix < calls.length; ix++) {
    console.log(`Playing ${calls[ix]}`);

    cards = cards.map((card) => cardMarker(card, calls[ix]))
    let winner = cards.filter(card => cardHasWon(card));
    if (winner.length > 0) {
      if (winner.length === cards.length) {
        console.log(`Winner!`);
        return cardSum(winner[0]) * calls[ix];
      }
      cards = cards.filter(card => !cardHasWon(card));

    }
  }
}

const parseLine = (line) => {
  return line.split(',').map((val) => parseInt(val)).filter((val) => Number.isInteger(val));
}

const parseCard = (lines) => {
  return lines.split(os.EOL).map(line => parseLine(line.replaceAll(/\s+/ig, ',')));
}

const parseInput = (file) => {
  const calls = parseLine(file.split(os.EOL)[0]);
  const cards = file.split(os.EOL + os.EOL).slice(1).map(card => parseCard(card));
  return [calls, cards]
}

const input = fs.readFileSync('input-1.txt', 'utf8');
const [calls, cards] = parseInput(input);

console.log(game(cards, calls));
console.log(game2(cards, calls));


module.exports = { cardMarker, cardSum, cardHasWon, game, game2 };