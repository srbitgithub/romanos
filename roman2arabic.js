function Roman2Arabic() {

    const oneCharRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const oneCharArabic = [1, 5, 10, 50, 100, 500, 1000]

    this.Main = function (romanNumber){
        if (romanNumber == '') return null
        return this.Calculate(romanNumber)
    }

    this.Calculate = function(roman){
        total = 0
        let lastNumber = 0
        let currentNumber = 0
        const myArray = roman.split('').reverse()
        myArray.forEach(item => {
            currentNumber = oneCharArabic[oneCharRoman.indexOf(item)]
            if (currentNumber < lastNumber) total = total - currentNumber
            else total = total + currentNumber
            lastNumber = currentNumber
        });
        return total
    }
}
module.exports = Roman2Arabic