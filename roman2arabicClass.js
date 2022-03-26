class Roman2Arabic {
    constructor (romanNumber){
        this._romanNumber = romanNumber
        this.oneCharRoman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        this.oneCharArabic = [1, 5, 10, 50, 100, 500, 1000]
        this.total = this.main()
        return this.total
    }

    main = () => {
        if (this._romanNumber == '') return null
        return this.Calculate(romanNumber)
    }

    calculate = (roman) => {
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