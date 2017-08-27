var double = function(number) {
  return number * 2;
}
double(3);

var add = function(a,b) {
  return a + b;
}

var multiply = function(a,b) {
  return a * b;
}

var arithmetic = add(multiply(36325, 9824), 777);
//console.log(arithmetic);

// Animating elements with setInterval
// var leftOffset = 0;
// var moveHeading = function () {
//   $('#heading').offset({ left: leftOffset });
//
//   leftOffset++;
//
//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };
//
// setInterval(moveHeading, 60);

// Animate a heading element in a square
var direction = 'right',
    offset = 0,
    cube = $('#cube'),
    intervalLength = 120,
    clicks = 0;

$('#cube').offset({ left: offset, top: offset });

var moveHeadingInASquare = function () {
  if (direction === 'right') {
    cube.offset({ left: offset });
    offset++;
    if (offset > 100) {
      offset = 0;
      direction = 'down';
    }
  } else if (direction === 'down') {
    cube.offset({ top: offset });
    offset++;
    if (offset > 100) {
      offset = 100;
      direction = 'left';
    }
  } else if (direction === 'left') {
    cube.offset({ left: offset });
    offset--;
    if (offset < 0) {
      offset = 100;
      direction = 'up';
    }
  } else if (direction === 'up') {
    cube.offset({ top: offset });
    offset--;
    if (offset < 0) {
      offset = 0;
      direction = 'right';
    }
  }
};

var intervalId = setInterval(moveHeadingInASquare, 30)
$('#cube').click(function () {
  clearInterval(intervalId);
  // intervalLength /= 5;
  // clicks++;
  //
  // if (clicks > 2) {
  //   $("#heading").text("You Win.");
  // } else {
  //   intervalId = setInterval(moveHeadingInASquare, intervalLength)
  // }
});

// Responding to clicks
//var heading = document.getElementById('heading');
var clickHandler = function(event) {
  console.log('Click! ' + 'x=' + event.pageX + ' ' + 'y=' + event.pageY);

}
$('#heading').click(clickHandler);

// mousemove
// $('body').mousemove(function(event) {
//   $('#heading').offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });

// $("html").click(function (event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });
