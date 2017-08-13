// a function to pick random word
var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};

// a function to check if arrays are the same
var areArraysSame = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }

  return true;
}

var randomAdjectives = ["young", "professional", "sports", "pretty"],
    adjectiveElement = document.getElementById("adjective"),

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

if ( areArraysSame(randomAdjectives, randomWhatILoves) != true  ) {
  var oneRandomAdjective = pickRandomWord(randomAdjectives);
  console.log(oneRandomAdjective);
}

// Output in DOM element
adjectiveElement.innerHTML = oneRandomAdjective;
whatILoveElement.innerHTML = oneRandomWhatILove;
whereILiveElement.innerHTML = oneRandomWhereILive;

debugger;
