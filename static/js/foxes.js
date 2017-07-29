var aboutMe = document.getElementById("about-me"),
    nameElement = document.getElementsByClassName("name")[0],
    name = nameElement.innerHTML,

    foxElement = document.getElementById("fox"),
    fox = " =^.^= ";

// Draw as many fox as you want!
var drawFoxes = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    foxElement.innerHTML = fox;
    console.log(i + fox + "Hello, my name is Julia Dizhak");
  }
}

drawFoxes(1) // You can put any number here instead of 10.
