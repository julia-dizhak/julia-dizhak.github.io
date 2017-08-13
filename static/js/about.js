// a function to pick random word
var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};

var randomAdjectives = ["young", "professional", "sports", "pretty"],
    adjectiveElement = document.getElementById("adjective"),
    oneRandomAdjective = pickRandomWord(randomAdjectives),

    randomWhatILoves = [
      "dogs",
      "chocolate",
      "coffee",
      "travelling",
      "sea and oceans",
      "summer time",
      "a good dry wine"
    ],
    whatILoveElement = document.getElementById("love"),
    oneRandomWhatILove = pickRandomWord(randomWhatILoves),

    randomPlaces = [
      "Zurich",
      "Kiyv",
      "Kerch",
      "Simferopol",
      "Sevastopol",
      "Crimea",
      "Rivne",
      "Nepal"
    ],
    whereILiveElement = document.getElementById("live"),
    oneRandomWhereILive = pickRandomWord(randomPlaces);

// Output in DOM element
adjectiveElement.innerHTML = oneRandomAdjective;
whatILoveElement.innerHTML = oneRandomWhatILove;
whereILiveElement.innerHTML = oneRandomWhereILive;
