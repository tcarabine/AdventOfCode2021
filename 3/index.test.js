const { parseIntFromBinary, algorithm1, getMostCommon, algorithm2 } = require('./index.js');

describe('Algorithm 1', () => {
  it('Given the sample data, returns 22 and 9', () => {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010"
    ];

    const [gamma, epsilon] = algorithm1(input);

    expect(gamma).toEqual(22);
    expect(epsilon).toEqual(9);
  });
});

describe('GetMostCommon', () => {
  it('Given 11100 returns 1', () => {
    const input = [1,1,1,0,0];

    const result = getMostCommon(input);

    expect(result).toEqual(1);
  });
  it('Given 11000 returns 0', () => {
    const input = [1,1,0,0,0];

    const result = getMostCommon(input);

    expect(result).toEqual(0);
  });
})

describe('ParseIntFromBinary', () => {
  it('Given 0 returns 0', () => {
    const input = 0;

    const result = parseIntFromBinary(input);

    expect(result).toEqual(0);
  });

  it('Given 1 returns 1', () => {
    const input = 1;

    const result = parseIntFromBinary(input);

    expect(result).toEqual(1);
  });

  it('Given 10 returns 2', () => {
    const input = 10;

    const result = parseIntFromBinary(input);

    expect(result).toEqual(2);
  });

  it('Given 10110 returns 22', () => {
    const input = 10110;

    const result = parseIntFromBinary(input);

    expect(result).toEqual(22);
  });

  it('Given 1001 returns 9', () => {
    const input = 1001;

    const result = parseIntFromBinary(input);

    expect(result).toEqual(9);
  });
})

describe('Algorithm 2', () => {
  it('Given the sample data, returns 23 and 10', () => {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010"
    ];

    const [o2, co2] = algorithm2(input);

    expect(o2).toEqual(23);
    expect(co2).toEqual(10);
  });
});