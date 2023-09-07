// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let userBmi = weight / (height ** 2)
    if (userBmi <= 18.5) {
        return "Underweight"
    } else if (userBmi <= 25.0) {
        return "Normal"
    } else if (userBmi <= 30.0) {
        return "Overweight"
    } else
    return "Obese";
  }

//alternative using a ternary
function bmi(weight, height) {
    var bmi  = weight/(height*height);
    return bmi <= 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    } 