var randomAdjectives = ["young", "professional", "funny", "pretty"],
    adjectivesLength = randomAdjectives.length,
    adjectiveElement = document.getElementById("adjective"),
    randomAdjective = randomAdjectives[Math.floor(Math.random() * adjectivesLength)],

    randomWhatILoves = [
      "dogs",
      "chocolate",
      "coffee",
      "travelling",
      "sea and oceans",
      "summer time",
      "a good dry wine"
    ],
    whatILovesLength = randomWhatILoves.length,
    whatILoveElement = document.getElementById("love"),
    randomWhatILove = randomWhatILoves[Math.floor(Math.random() * whatILovesLength)]

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
    placesLength = randomPlaces.length,
    whereILiveElement = document.getElementById("live"),
    randomWhereILive = randomPlaces[Math.floor(Math.random() * placesLength)];

// Output in DOM element
adjectiveElement.innerHTML = randomAdjective;
whatILoveElement.innerHTML = randomWhatILove;
whereILiveElement.innerHTML = randomWhereILive;
