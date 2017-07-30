var aboutMe = document.getElementById("about-me"),
    nameElement = document.getElementsByClassName("name")[0],
    name = nameElement.innerHTML,

    catEarsElement = document.getElementById("cat-ears")
    catElement = document.getElementById("cat"),
    catEars = " =^.^= ",
    // template literalls
    cat = `  /\_/\
           =( °w° )=
             )   (  //
            (__ __)// `;

// Draw as many fox as you want!
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    catEarsElement.innerHTML = catEars;
    //catElement.innerHTML = cat;
    console.log(i + catEars + "Hello, my name is Julia Dizhak");
  }
}

drawCats(1) // You can put any number here instead of 10.
