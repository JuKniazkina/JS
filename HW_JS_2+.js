let age_1 = 10
let age_2 = 18
let age_3 = 60
const checkAge = function(age) {
if (typeof age == "number") {
    if (age_1 = 10) {
    console.log("Bingo!")
    } if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
    } if (age_1 >= age_2 && age_1 < age_3) {
    console.log( "Welcome  !")
    } if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
    } else {
    console.log("Technical work")
    }
} else console.log("Wrong type")
}
checkAge (17)
checkAge (18)
checkAge (61)