class Roman2Arabic {
    constructor (romanNumber){
        this._romanNumber = romanNumber
        
        this.values = {
            oneCharRoman: ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
            oneCharArabic: [1, 5, 10, 50, 100, 500, 1000]
        }

        this.total = this.main()
        return this.total
    }

    main = () => {
        if (this._romanNumber == '') return null
        return this.calculate(this._romanNumber)
    }

    calculate = (roman) => {
        let total = 0
        let lastNumber = 0
        let currentNumber = 0
        const myArray = roman.split('').reverse()
        myArray.forEach(item => {
            currentNumber = this.values.oneCharArabic[this.values.oneCharRoman.indexOf(item)]
            if (currentNumber < lastNumber) total -= currentNumber
            else total += currentNumber

            lastNumber = currentNumber
        });
        return total
    }
}
module.exports = Roman2Arabic