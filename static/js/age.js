var secondsInAMinute = 60,
    minutesInAnHour = 60,
    secondsInAnHour = secondsInAMinute * minutesInAnHour,
    hoursInADay = 24,
    secondsInADay = secondsInAnHour * hoursInADay,
    daysInAYear = 365, // 1 common year = 365, 1 leap year = 366
    secondsInAYear = secondsInADay * daysInAYear,
    age = 31,
    ageInASeconds = age * secondsInAYear,

    aboutMe = document.getElementById("about-me"),
    ageElement = document.getElementsByClassName("age")[0];

    ageElement.innerHTML = ageInASeconds + " m.o.";
