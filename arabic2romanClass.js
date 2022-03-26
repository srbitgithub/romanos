class Arabic2Roman {
    constructor (myNumber){
        this._myNumber = myNumber

        this.result = this.main()
        return this.result
    }
    main = (number) => {
        if (number == undefined) number = this._myNumber
        if (number > 999) return this.oneThousand(number)
        if (number > 899) return this.nineHundred(number)
        if (number > 499) return this.fiveHundred(number)
        if (number > 399) return this.fourHundred(number)
        if (number > 99) return this.hundred(number)
        if (number > 89) return this.ninety(number)
        if (number > 49) return this.fifty(number)
        if (number > 39) return this.fourty(number)
        if (number > 9) return this.ten(number)
        if (number > 0) return this.units(number)
        return ''
    }

    lessThanOne = (number) => number < 1 ? '' : null

    units = (number) => {
        if (number < 4) return this.unitsAddByOne(number)
        if (number < 6) return this.nearFive(number)
        if (number < 9) return 'V' + this.unitsAddByOne(number - 5)
        return 'IX'
    }

    ten = (number) => {
        return 'X' + this.main(number - 10)
    }

    fourty = function (number){
        if (number < 49) return 'XL' + this.main(number - 40)
        return 'XLIX'
    }

    fifty = function (number){
        return 'L' + this.main(number - 50)
    }

    ninety = function (number){
        return 'XC' + this.main(number - 90)
    }

    hundred = function (number){
        return 'C' + this.main(number - 100)
    }

    fourHundred = function (number){
        return 'CD' + this.main(number - 400)
    }

    fiveHundred = function (number){
        return 'D' + this.main(number - 500)
    }

    nineHundred = function (number){
        return 'CM' + this.main(number - 900)
    }
    
    oneThousand = function (number){
        return 'M' + this.main(number - 1000)
    }

    nearFive = function (number){
        if (number == 5) return 'V'
        return 'IV'
    }

    unitsAddByOne = function (numberTimes) {
        let unitsValue = ''
        for (let i = 0; i < numberTimes; i++){
            unitsValue = unitsValue + 'I'
        }
        return unitsValue;
    }
}
module.exports = Arabic2Roman