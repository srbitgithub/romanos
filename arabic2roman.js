function Arabic2Roman() {
    this.Main = function (myNumber){
        if (myNumber == null) return ''
        if (myNumber < 1) return ''
        if (myNumber > 0 && myNumber < 10) return this.Units(myNumber)
        if (myNumber > 9 && myNumber < 40) return this.Ten(myNumber)
        if (myNumber > 39 && myNumber < 50) return this.Fourty(myNumber)
        if (myNumber > 49 && myNumber < 90) return this.Fifty(myNumber)
        if (myNumber > 89 && myNumber < 100) return this.Ninety(myNumber)
        if (myNumber > 99 && myNumber < 400) return this.Hundred(myNumber)
        if (myNumber > 399 && myNumber < 500) return this.FourHundred(myNumber)
        if (myNumber > 499 && myNumber < 900) return this.FiveHundred(myNumber)
        if (myNumber > 899 && myNumber < 1000) return this.NineHundred(myNumber)
        if (myNumber > 999) return this.OneThousand(myNumber)
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

    this.FourHundred = function (number){
        return 'CD' + this.Main(number - 400)
    }

    this.FiveHundred = function (number){
        return 'D' + this.Main(number - 500)
    }

    this.NineHundred = function (number){
        return 'CM' + this.Main(number - 900)
    }
    
    this.OneThousand = function (number){
        return 'M' + this.Main(number - 1000)
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
module.exports = Arabic2Roman