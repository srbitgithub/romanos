function Romanos() {
    this.Main = function (myNumber){
        if (myNumber == null) return ''
        if (myNumber < 1) return ''
        if (myNumber > 0 && myNumber < 10) return this.Units(myNumber)
        if (myNumber > 9 && myNumber < 40) return this.Ten(myNumber)
        if (myNumber > 39 && myNumber < 50) return this.Fourty(myNumber)
        if (myNumber > 49 && myNumber < 90) return this.Fifty(myNumber)
        if (myNumber > 89 && myNumber < 100) return this.Ninety(myNumber)
        if (myNumber > 99) return this.Hundred(myNumber)
    }

    this.Units = function (number){
        if (number > 0 && number < 4) return this.UnitsAddByOne(number)
        if (number > 3 && number < 6) return this.nearFive(number)
        if (number > 5 && number < 9) return 'V' + this.UnitsAddByOne(number - 5)
        if (number == 9) return 'IX'
    }

    this.Ten = function (number){
        return 'X' + this.Main(number - 10)
    }

    this.Fourty = function (number){
        if (number < 49) return 'XL' + this.Main(number - 40)
        else return 'IXL'
    }

    this.Fifty = function (number){
        return 'L' + this.Main(number - 50)
    }

    this.Ninety = function (number){
        return 'XC' + this.Main(number - 90)
    }

    this.Hundred = function (number){
        return 'C' + this.Main(number - 100)
    }

    this.nearFive = function (number){
        if (number == 4) return 'IV'
        else return 'V'
    }

    this.UnitsAddByOne = function (numberTimes) {
        let unitsValue = ''
        for (i = 0; i < numberTimes; i++){
            unitsValue = unitsValue + 'I'
        }
        return unitsValue;
    }
}
module.exports = Romanos