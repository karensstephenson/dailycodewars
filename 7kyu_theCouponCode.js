// Story

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
    cDate = currentDate.replace(',', '').split(' ')
    eDate = expirationDate.replace(',', '').split(' ')
 
    if (enteredCode !== correctCode) {
        return false
        }

    if  (cDate[2] > eDate[2]) {
        return false
    } else if (cDate[2] < eDate[2]) {
        return true
    } else if (months.indexOf(cDate[0]) > months.indexOf(eDate[0])) {
        return false
    } else if (months.indexOf(cDate[0]) < months.indexOf(eDate[0])) {
       return true
    } else if (Number(cDate[1]) <= Number(eDate[1])) {
        return true
    } else {
        return false
    }  
}

console.log(checkCoupon("123", "123a", "July 9, 2015", "July 9, 2015"))
console.log(checkCoupon("123", "123", "July 9, 2013", "July 9, 2014"))
console.log(checkCoupon("123", "123", "August 9, 2015", "July 9, 2015"))
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log(checkCoupon('123','123','March 25, 1998','March 5, 1998'))

// much shorter alternative using Date.parse()
function checkCoupon2(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }
