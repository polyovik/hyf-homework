//////////1.1. Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

const shortestWord = danishWords.reduce((firstWord, secondWord) => {
  return firstWord.length <= secondWord.length ? firstWord : secondWord;
});

console.log(shortestWord);

///////////////////////////1.2 Find and count the Danish letters

const danishString = 'Jeg har en blå bil';
const danishString2 = 'Blå grød med røde bær';

const countDanishLetters = (string) => {
  const characters = {};

  string.split('').forEach((letter) => {
    if (letter === 'å' || letter === 'ø' || letter === 'æ') {
      if (characters[letter] === undefined) {
        characters[letter] = 1;
      } else {
        characters[letter] += 1;
      }
    }
  });

    const characterInfo = {
      total: Object.keys(characters).length,
      characters
    };
    return characterInfo;
};

console.log(countDanishLetters(danishString));
console.log(countDanishLetters(danishString2));
