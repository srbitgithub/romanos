const {it, expect} = require('@jest/globals')

const Arabic2Roman = require('./arabic2romanClass')
const Roman2Arabic = require('./roman2arabicClass')

const arabic2roman = new Arabic2Roman()

    describe ('Convertir número romanos a arábigos || Unidades', () => {

        it ('Si el número es `` devuelve null', () => {
            const roman2arabic = new Roman2Arabic('')
            const result = roman2arabic.total
            expect (result).toBe(null)
        })

        it ('Si el número es I devuelve 1', () => {
            const roman2arabic = new Roman2Arabic('I')
            const result = roman2arabic.total
            expect (result).toBe(1)
        })

    it ('Si el número es II devuelve 2', () => {
        const roman2arabic = new Roman2Arabic('II')
        const result = roman2arabic.total
        expect (result).toBe(2)
    })

    it ('Si el número es III devuelve 3', () => {
        const roman2arabic = new Roman2Arabic('III')
        const result = roman2arabic.total
        expect (result).toBe(3)
    })

    it ('Si el número es IV devuelve 4', () => {
        const roman2arabic = new Roman2Arabic('IV')
        const result = roman2arabic.total
        expect (result).toBe(4)
    })

    it ('Si el número es V devuelve 5', () => {
        const roman2arabic = new Roman2Arabic('V')
        const result = roman2arabic.total
        expect (result).toBe(5)
    })

    it ('Si el número es VI devuelve 6', () => {
        const roman2arabic = new Roman2Arabic('VI')
        const result = roman2arabic.total
        expect (result).toBe(6)
    })

    it ('Si el número es VII devuelve 7', () => {
        const roman2arabic = new Roman2Arabic('VII')
        const result = roman2arabic.total
        expect (result).toBe(7)
    })

    it ('Si el número es VIII devuelve 8', () => {
        const roman2arabic = new Roman2Arabic('VIII')
        const result = roman2arabic.total
        expect (result).toBe(8)
    })

    it ('Si el número es IX devuelve 9', () => {
        const roman2arabic = new Roman2Arabic('IX')
        const result = roman2arabic.total
        expect (result).toBe(9)
    })

    it ('Si el número es X devuelve 10', () => {
        const roman2arabic = new Roman2Arabic('X')
        const result = roman2arabic.total
        expect (result).toBe(10)
    })

    it ('Si el número es XI devuelve 11', () => {
        const roman2arabic = new Roman2Arabic('XI')
        const result = roman2arabic.total
        expect (result).toBe(11)
    })

    it ('Si el número es XIV devuelve 14', () => {
        const roman2arabic = new Roman2Arabic('XIV')
        const result = roman2arabic.total
        expect (result).toBe(14)
    })

    it ('Si el número es XVII devuelve 17', () => {
        const roman2arabic = new Roman2Arabic('XVII')
        const result = roman2arabic.total
        expect (result).toBe(17)
    })

    it ('Si el número es IXX devuelve 19', () => {
        const roman2arabic = new Roman2Arabic('IXX')
        const result = roman2arabic.total
        expect (result).toBe(19)
    })

    it ('Si el número es XXX devuelve 30', () => {
        const roman2arabic = new Roman2Arabic('XXX')
        const result = roman2arabic.total
        expect (result).toBe(30)
    })

    it ('Si el número es XLV devuelve 45', () => {
        const roman2arabic = new Roman2Arabic('XLV')
        const result = roman2arabic.total
        expect (result).toBe(45)
    })

    it ('Si el número es IL devuelve 49', () => {
        const roman2arabic = new Roman2Arabic('IL')
        const result = roman2arabic.total
        expect (result).toBe(49)
    })

    it ('Si el número es L devuelve 50', () => {
        const roman2arabic = new Roman2Arabic('L')
        const result = roman2arabic.total
        expect (result).toBe(50)
    })

    it ('Si el número es XC devuelve 90', () => {
        const roman2arabic = new Roman2Arabic('XC')
        const result = roman2arabic.total
        expect (result).toBe(90)
    })

    it ('Si el número es C devuelve 100', () => {
        const roman2arabic = new Roman2Arabic('C')
        const result = roman2arabic.total
        expect (result).toBe(100)
    })

    it ('Si el número es CXXVIII devuelve 128', () => {
        const roman2arabic = new Roman2Arabic('CXXVIII')
        const result = roman2arabic.total
        expect (result).toBe(128)
    })

    it ('Si el número es CDXXXIX devuelve 439', () => {
        const roman2arabic = new Roman2Arabic('CDXXXIX')
        const result = roman2arabic.total
        expect (result).toBe(439)
    })

    it ('Si el número es D devuelve 500', () => {
        const roman2arabic = new Roman2Arabic('D')
        const result = roman2arabic.total
        expect (result).toBe(500)
    })

    it ('Si el número es CMXCIII devuelve 993', () => {
        const roman2arabic = new Roman2Arabic('CMXCIII')
        const result = roman2arabic.total
        expect (result).toBe(993)
    })

    it ('Si el número es IM devuelve 999', () => {
        const roman2arabic = new Roman2Arabic('IM')
        const result = roman2arabic.total
        expect (result).toBe(999)
    })

    it ('Si el número es M devuelve 1000', () => {
        const roman2arabic = new Roman2Arabic('M')
        const result = roman2arabic.total
        expect (result).toBe(1000)
    })

    it ('Si el número es MXC devuelve 1090', () => {
        const roman2arabic = new Roman2Arabic('MXC')
        const result = roman2arabic.total
        expect (result).toBe(1090)
    })

    it ('Si el número es MXCV devuelve 1095', () => {
        const roman2arabic = new Roman2Arabic('MXCV')
        const result = roman2arabic.total
        expect (result).toBe(1095)
    })

    it ('Si el número es MCMLXXIII devuelve 1973', () => {
        const roman2arabic = new Roman2Arabic('MCMLXXIII')
        const result = roman2arabic.total
        expect (result).toBe(1973)
    })

    it ('Si el número es MCMLXXVI devuelve 1976', () => {
        const roman2arabic = new Roman2Arabic('MCMLXXVI')
        const result = roman2arabic.total
        expect (result).toBe(1976)
    })

    it ('Si el número es MMV devuelve 2005', () => {
        const roman2arabic = new Roman2Arabic('MMV')
        const result = roman2arabic.total
        expect (result).toBe(2005)
    })
    
    it ('Si el número es MMVIII devuelve 2008', () => {
        const roman2arabic = new Roman2Arabic('MMVIII')
        const result = roman2arabic.total
        expect (result).toBe(2008)
    })

    it ('Si el número es MMXCV devuelve 2095', () => {
        const roman2arabic = new Roman2Arabic('MMXCV')
        const result = roman2arabic.total
        expect (result).toBe(2095)
    })

    it ('Si el número es MMDXXXVII devuelve 2537', () => {
        const roman2arabic = new Roman2Arabic('MMDXXXVII')
        const result = roman2arabic.total
        expect (result).toBe(2537)
    })

    it ('Si el número es MMM devuelve 3000', () => {
        const roman2arabic = new Roman2Arabic('MMM')
        const result = roman2arabic.total
        expect (result).toBe(3000)
    })

    it ('Si el número es MMMCMXCIX devuelve 3999', () => {
        const roman2arabic = new Roman2Arabic('MMMCMXCIX')
        const result = roman2arabic.total
        expect (result).toBe(3999)
    })
})


describe ('Convertir número arábigos a romanos || Unidades', () => {

    it ("Si el número es null devuelve ''", () => {
        const arabic2Roman = new Arabic2Roman(null)
        expect (arabic2Roman.result).toBe('')
    })

    it ("Si el número es 0 devuelve ''", () => {
        const arabic2Roman = new Arabic2Roman(0)
        expect (arabic2Roman.result).toBe('')

    })

    it ('Si el número menor de 1 devuelve ``', () => {
        const arabic2Roman = new Arabic2Roman(-5)
        expect (arabic2Roman.result).toBe('')
    })

    it ('Si el número es 1 devuelve I', () => {
        const arabic2Roman = new Arabic2Roman(1)
        expect (arabic2Roman.result).toBe('I')
    })

    it ('Si el número es 2 devuelve II', () => {
        const arabic2Roman = new Arabic2Roman(2)
        expect (arabic2Roman.result).toBe('II')
    })

    it ('Si el número es 3 devuelve III', () => {
        const arabic2Roman = new Arabic2Roman(3)
        expect (arabic2Roman.result).toBe('III')
    })

    it ('Si el número es 4 devuelve IV', () => {
        const arabic2Roman = new Arabic2Roman(4)
        expect (arabic2Roman.result).toBe('IV')
    })

    it ('Si el número es 5 devuelve V', () => {
        const arabic2Roman = new Arabic2Roman(5)
        expect (arabic2Roman.result).toBe('V')
    })

    it ('Si el número es 6 devuelve VI', () => {
        const arabic2Roman = new Arabic2Roman(6)
        expect (arabic2Roman.result).toBe('VI')
    })

    it ('Si el número es 7 devuelve VII', () => {
        const arabic2Roman = new Arabic2Roman(7)
        expect (arabic2Roman.result).toBe('VII')
    })

    it ('Si el número es 8 devuelve VIII', () => {
        const arabic2Roman = new Arabic2Roman(8)
        expect (arabic2Roman.result).toBe('VIII')
    })

    it ('Si el número es 9 devuelve IX', () => {
        const arabic2Roman = new Arabic2Roman(9)
        expect (arabic2Roman.result).toBe('IX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del X al XIX', () => {

    it ('Si el número es 10 devuelve X', () => {
        const arabic2Roman = new Arabic2Roman(10)
        expect (arabic2Roman.result).toBe('X')
    })

    it ('Si el número es 12 devuelve XII', () => {
        const arabic2Roman = new Arabic2Roman(12)
        expect (arabic2Roman.result).toBe('XII')
    })

    it ('Si el número es 15 devuelve XV', () => {
        const arabic2Roman = new Arabic2Roman(15)
        expect (arabic2Roman.result).toBe('XV')
    })

    it ('Si el número es 17 devuelve XVII', () => {
        const arabic2Roman = new Arabic2Roman(17)
        expect (arabic2Roman.result).toBe('XVII')
    })

    it ('Si el número es 19 devuelve XIX', () => {
        const arabic2Roman = new Arabic2Roman(19)
        expect (arabic2Roman.result).toBe('XIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XX al XXIX', () => {

    it ('Si el número es 20 devuelve XX', () => {
        const arabic2Roman = new Arabic2Roman(20)
        expect (arabic2Roman.result).toBe('XX')
    })

    it ('Si el número es 22 devuelve XXII', () => {
        const arabic2Roman = new Arabic2Roman(22)
        expect (arabic2Roman.result).toBe('XXII')
    })

    it ('Si el número es 25 devuelve XXV', () => {
        const arabic2Roman = new Arabic2Roman(25)
        expect (arabic2Roman.result).toBe('XXV')
    })

    it ('Si el número es 27 devuelve XXVII', () => {
        const arabic2Roman = new Arabic2Roman(27)
        expect (arabic2Roman.result).toBe('XXVII')
    })

    it ('Si el número es 29 devuelve XXIX', () => {
        const arabic2Roman = new Arabic2Roman(29)
        expect (arabic2Roman.result).toBe('XXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XXX al XXXIX', () => {

    it ('Si el número es 30 devuelve XXX', () => {
        const arabic2Roman = new Arabic2Roman(30)
        expect (arabic2Roman.result).toBe('XXX')

    })

    it ('Si el número es 32 devuelve XXXII', () => {
        const arabic2Roman = new Arabic2Roman(32)
        expect (arabic2Roman.result).toBe('XXXII')
    })

    it ('Si el número es 25 devuelve XXXV', () => {
        const arabic2Roman = new Arabic2Roman(35)
        expect (arabic2Roman.result).toBe('XXXV')
    })

    it ('Si el número es 37 devuelve XXXVII', () => {
        const arabic2Roman = new Arabic2Roman(37)
        expect (arabic2Roman.result).toBe('XXXVII')
    })

    it ('Si el número es 39 devuelve XXXIX', () => {
        const arabic2Roman = new Arabic2Roman(39)
        expect (arabic2Roman.result).toBe('XXXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XL al IXL', () => {

    it ('Si el número es 40 devuelve XL', () => {
        const arabic2Roman = new Arabic2Roman(40)
        expect (arabic2Roman.result).toBe('XL')
    })

    it ('Si el número es 42 devuelve XLII', () => {
        const arabic2Roman = new Arabic2Roman(42)
        expect (arabic2Roman.result).toBe('XLII')
    })

    it ('Si el número es 45 devuelve XLV', () => {
        const arabic2Roman = new Arabic2Roman(45)
        expect (arabic2Roman.result).toBe('XLV')
    })

    it ('Si el número es 47 devuelve XLVII', () => {
        const arabic2Roman = new Arabic2Roman(47)
        expect (arabic2Roman.result).toBe('XLVII')
    })

    it ('Si el número es 49 devuelve IXL', () => {
        const arabic2Roman = new Arabic2Roman(49)
        expect (arabic2Roman.result).toBe('XLIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del L al LIX', () => {

    it ('Si el número es 50 devuelve L', () => {
        const arabic2Roman = new Arabic2Roman(50)
        expect (arabic2Roman.result).toBe('L')
    })

    it ('Si el número es 52 devuelve LII', () => {
        const arabic2Roman = new Arabic2Roman(52)
        expect (arabic2Roman.result).toBe('LII')
    })

    it ('Si el número es 55 devuelve LV', () => {
        const arabic2Roman = new Arabic2Roman(55)
        expect (arabic2Roman.result).toBe('LV')
    })

    it ('Si el número es 57 devuelve LVII', () => {
        const arabic2Roman = new Arabic2Roman(57)
        expect (arabic2Roman.result).toBe('LVII')
    })

    it ('Si el número es 59 devuelve LIX', () => {
        const arabic2Roman = new Arabic2Roman(59)
        expect (arabic2Roman.result).toBe('LIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del LX al LXIX', () => {

    it ('Si el número es 60 devuelve LX', () => {
        const arabic2Roman = new Arabic2Roman(60)
        expect (arabic2Roman.result).toBe('LX')
    })

    it ('Si el número es 62 devuelve LXII', () => {
        const arabic2Roman = new Arabic2Roman(62)
        expect (arabic2Roman.result).toBe('LXII')
    })

    it ('Si el número es 65 devuelve LXV', () => {
        const arabic2Roman = new Arabic2Roman(65)
        expect (arabic2Roman.result).toBe('LXV')
    })

    it ('Si el número es 67 devuelve LXVII', () => {
        const arabic2Roman = new Arabic2Roman(67)
        expect (arabic2Roman.result).toBe('LXVII')
    })

    it ('Si el número es 69 devuelve LXIX', () => {
        const arabic2Roman = new Arabic2Roman(69)
        expect (arabic2Roman.result).toBe('LXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del LXX al LXXIX', () => {

    it ('Si el número es 70 devuelve LXX', () => {
        const arabic2Roman = new Arabic2Roman(70)
        expect (arabic2Roman.result).toBe('LXX')
    })

    it ('Si el número es 72 devuelve LXXII', () => {
        const arabic2Roman = new Arabic2Roman(72)
        expect (arabic2Roman.result).toBe('LXXII')
    })

    it ('Si el número es 75 devuelve LXXV', () => {
        const arabic2Roman = new Arabic2Roman(75)
        expect (arabic2Roman.result).toBe('LXXV')
    })

    it ('Si el número es 77 devuelve LXXVII', () => {
        const arabic2Roman = new Arabic2Roman(77)
        expect (arabic2Roman.result).toBe('LXXVII')
    })

    it ('Si el número es 79 devuelve LXXIX', () => {
        const arabic2Roman = new Arabic2Roman(79)
        expect (arabic2Roman.result).toBe('LXXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del LXXX al LXXXIX', () => {

    it ('Si el número es 80 devuelve LXXX', () => {
        const arabic2Roman = new Arabic2Roman(80)
        expect (arabic2Roman.result).toBe('LXXX')
    })

    it ('Si el número es 82 devuelve LXXXII', () => {
        const arabic2Roman = new Arabic2Roman(82)
        expect (arabic2Roman.result).toBe('LXXXII')
    })

    it ('Si el número es 85 devuelve LXXXV', () => {
        const arabic2Roman = new Arabic2Roman(85)
        expect (arabic2Roman.result).toBe('LXXXV')
    })

    it ('Si el número es 87 devuelve LXXXVII', () => {
        const arabic2Roman = new Arabic2Roman(87)
        expect (arabic2Roman.result).toBe('LXXXVII')
    })

    it ('Si el número es 89 devuelve LXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(89)
        expect (arabic2Roman.result).toBe('LXXXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XC al XCIX', () => {

    it ('Si el número es 90 devuelve XC', () => {
        const arabic2Roman = new Arabic2Roman(90)
        expect (arabic2Roman.result).toBe('XC')
    })

    it ('Si el número es 92 devuelve XCII', () => {
        const arabic2Roman = new Arabic2Roman(92)
        expect (arabic2Roman.result).toBe('XCII')
    })

    it ('Si el número es 95 devuelve XCV', () => {
        const arabic2Roman = new Arabic2Roman(95)
        expect (arabic2Roman.result).toBe('XCV')
    })

    it ('Si el número es 97 devuelve XCVII', () => {
        const arabic2Roman = new Arabic2Roman(97)
        expect (arabic2Roman.result).toBe('XCVII')
    })

    it ('Si el número es 99 devuelve XCIX', () => {
        const arabic2Roman = new Arabic2Roman(99)
        expect (arabic2Roman.result).toBe('XCIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del C al CIX', () => {

    it ('Si el número es 100 devuelve C', () => {
        const arabic2Roman = new Arabic2Roman(100)
        expect (arabic2Roman.result).toBe('C')
    })

    it ('Si el número es 102 devuelve CII', () => {
        const arabic2Roman = new Arabic2Roman(102)
        expect (arabic2Roman.result).toBe('CII')
    })

    it ('Si el número es 105 devuelve CV', () => {
        const arabic2Roman = new Arabic2Roman(105)
        expect (arabic2Roman.result).toBe('CV')
    })

    it ('Si el número es 107 devuelve CVII', () => {
        const arabic2Roman = new Arabic2Roman(107)
        expect (arabic2Roman.result).toBe('CVII')
    })

    it ('Si el número es 109 devuelve CIX', () => {
        const arabic2Roman = new Arabic2Roman(109)
        expect (arabic2Roman.result).toBe('CIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CX al CXCIX', () => {

    it ('Si el número es 119 devuelve CXIX', () => {
        const arabic2Roman = new Arabic2Roman(119)
        expect (arabic2Roman.result).toBe('CXIX')
    })

    it ('Si el número es 125 devuelve CXXV', () => {
        const arabic2Roman = new Arabic2Roman(125)
        expect (arabic2Roman.result).toBe('CXXV')
    })

    it ('Si el número es 139 devuelve CXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(139)
        expect (arabic2Roman.result).toBe('CXXXIX')
    })

    it ('Si el número es 144 devuelve CXLIV', () => {
        const arabic2Roman = new Arabic2Roman(144)
        expect (arabic2Roman.result).toBe('CXLIV')
    })

    it ('Si el número es 159 devuelve CLIX', () => {
        const arabic2Roman = new Arabic2Roman(159)
        expect (arabic2Roman.result).toBe('CLIX')
    })

    it ('Si el número es 167 devuelve CLXVII', () => {
        const arabic2Roman = new Arabic2Roman(167)
        expect (arabic2Roman.result).toBe('CLXVII')
    })

    it ('Si el número es 179 devuelve CLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(179)
        expect (arabic2Roman.result).toBe('CLXXIX')
    })

    it ('Si el número es 180 devuelve CLXXX', () => {
        const arabic2Roman = new Arabic2Roman(180)
        expect (arabic2Roman.result).toBe('CLXXX')
    })

    it ('Si el número es 198 devuelve CXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(198)
        expect (arabic2Roman.result).toBe('CXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CCX al CCXCIX', () => {

    it ('Si el número es 219 devuelve CCXIX', () => {
        const arabic2Roman = new Arabic2Roman(219)
        expect (arabic2Roman.result).toBe('CCXIX')
    })

    it ('Si el número es 225 devuelve CCXXV', () => {
        const arabic2Roman = new Arabic2Roman(225)
        expect (arabic2Roman.result).toBe('CCXXV')
    })

    it ('Si el número es 239 devuelve CCXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(239)
        expect (arabic2Roman.result).toBe('CCXXXIX')
    })

    it ('Si el número es 244 devuelve CCXLIV', () => {
        const arabic2Roman = new Arabic2Roman(244)
        expect (arabic2Roman.result).toBe('CCXLIV')
    })

    it ('Si el número es 259 devuelve CCLIX', () => {
        const arabic2Roman = new Arabic2Roman(259)
        expect (arabic2Roman.result).toBe('CCLIX')
    })

    it ('Si el número es 267 devuelve CCLXVII', () => {
        const arabic2Roman = new Arabic2Roman(267)
        expect (arabic2Roman.result).toBe('CCLXVII')
    })

    it ('Si el número es 279 devuelve CCLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(279)
        expect (arabic2Roman.result).toBe('CCLXXIX')
    })

    it ('Si el número es 280 devuelve CCLXXX', () => {
        const arabic2Roman = new Arabic2Roman(280)
        expect (arabic2Roman.result).toBe('CCLXXX')
    })

    it ('Si el número es 298 devuelve CCXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(298)
        expect (arabic2Roman.result).toBe('CCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CCCX al CCCXCIX', () => {

    it ('Si el número es 319 devuelve CCCXIX', () => {
        const arabic2Roman = new Arabic2Roman(319)
        expect (arabic2Roman.result).toBe('CCCXIX')
    })

    it ('Si el número es 325 devuelve CCCXXV', () => {
        const arabic2Roman = new Arabic2Roman(325)
        expect (arabic2Roman.result).toBe('CCCXXV')
    })

    it ('Si el número es 339 devuelve CCCXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(339)
        expect (arabic2Roman.result).toBe('CCCXXXIX')
    })

    it ('Si el número es 344 devuelve CCCXLIV', () => {
        const arabic2Roman = new Arabic2Roman(344)
        expect (arabic2Roman.result).toBe('CCCXLIV')
    })

    it ('Si el número es 359 devuelve CCCLIX', () => {
        const arabic2Roman = new Arabic2Roman(359)
        expect (arabic2Roman.result).toBe('CCCLIX')
    })

    it ('Si el número es 367 devuelve CCCLXVII', () => {
        const arabic2Roman = new Arabic2Roman(367)
        expect (arabic2Roman.result).toBe('CCCLXVII')
    })

    it ('Si el número es 379 devuelve CCCLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(379)
        expect (arabic2Roman.result).toBe('CCCLXXIX')
    })

    it ('Si el número es 380 devuelve CCCLXXX', () => {
        const arabic2Roman = new Arabic2Roman(380)
        expect (arabic2Roman.result).toBe('CCCLXXX')
    })

    it ('Si el número es 398 devuelve CCCXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(398)
        expect (arabic2Roman.result).toBe('CCCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CDX al CDXCIX', () => {

    it ('Si el número es 419 devuelve CDXIX', () => {
        const arabic2Roman = new Arabic2Roman(419)
        expect (arabic2Roman.result).toBe('CDXIX')
    })

    it ('Si el número es 425 devuelve CDXXV', () => {
        const arabic2Roman = new Arabic2Roman(425)
        expect (arabic2Roman.result).toBe('CDXXV')
    })

    it ('Si el número es 439 devuelve CDXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(439)
        expect (arabic2Roman.result).toBe('CDXXXIX')
    })

    it ('Si el número es 444 devuelve CDXLIV', () => {
        const arabic2Roman = new Arabic2Roman(444)
        expect (arabic2Roman.result).toBe('CDXLIV')
    })

    it ('Si el número es 459 devuelve CDLIX', () => {
        const arabic2Roman = new Arabic2Roman(459)
        expect (arabic2Roman.result).toBe('CDLIX')
    })

    it ('Si el número es 467 devuelve CDLXVII', () => {
        const arabic2Roman = new Arabic2Roman(467)
        expect (arabic2Roman.result).toBe('CDLXVII')
    })

    it ('Si el número es 479 devuelve CDLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(479)
        expect (arabic2Roman.result).toBe('CDLXXIX')
    })

    it ('Si el número es 480 devuelve CDLXXX', () => {
        const arabic2Roman = new Arabic2Roman(480)
        expect (arabic2Roman.result).toBe('CDLXXX')
    })

    it ('Si el número es 498 devuelve CDXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(498)
        expect (arabic2Roman.result).toBe('CDXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DX al DXCIX', () => {

    it ('Si el número es 519 devuelve DXIX', () => {
        const arabic2Roman = new Arabic2Roman(519)
        expect (arabic2Roman.result).toBe('DXIX')
    })

    it ('Si el número es 525 devuelve DXXV', () => {
        const arabic2Roman = new Arabic2Roman(525)
        expect (arabic2Roman.result).toBe('DXXV')
    })

    it ('Si el número es 539 devuelve DXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(539)
        expect (arabic2Roman.result).toBe('DXXXIX')
    })

    it ('Si el número es 544 devuelve DXLIV', () => {
        const arabic2Roman = new Arabic2Roman(544)
        expect (arabic2Roman.result).toBe('DXLIV')
    })

    it ('Si el número es 559 devuelve DLIX', () => {
        const arabic2Roman = new Arabic2Roman(559)
        expect (arabic2Roman.result).toBe('DLIX')
    })

    it ('Si el número es 567 devuelve DLXVII', () => {
        const arabic2Roman = new Arabic2Roman(567)
        expect (arabic2Roman.result).toBe('DLXVII')
    })

    it ('Si el número es 579 devuelve DLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(579)
        expect (arabic2Roman.result).toBe('DLXXIX')
    })

    it ('Si el número es 580 devuelve DLXXX', () => {
        const arabic2Roman = new Arabic2Roman(580)
        expect (arabic2Roman.result).toBe('DLXXX')
    })

    it ('Si el número es 598 devuelve DXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(598)
        expect (arabic2Roman.result).toBe('DXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCX al DCXCIX', () => {

    it ('Si el número es 619 devuelve DCXIX', () => {
        const arabic2Roman = new Arabic2Roman(619)
        expect (arabic2Roman.result).toBe('DCXIX')
    })

    it ('Si el número es 625 devuelve DCXXV', () => {
        const arabic2Roman = new Arabic2Roman(625)
        expect (arabic2Roman.result).toBe('DCXXV')
    })

    it ('Si el número es 639 devuelve DCXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(639)
        expect (arabic2Roman.result).toBe('DCXXXIX')
    })

    it ('Si el número es 644 devuelve DCXLIV', () => {
        const arabic2Roman = new Arabic2Roman(644)
        expect (arabic2Roman.result).toBe('DCXLIV')
    })

    it ('Si el número es 659 devuelve DCLIX', () => {
        const arabic2Roman = new Arabic2Roman(659)
        expect (arabic2Roman.result).toBe('DCLIX')
    })

    it ('Si el número es 667 devuelve DCLXVII', () => {
        const arabic2Roman = new Arabic2Roman(667)
        expect (arabic2Roman.result).toBe('DCLXVII')
    })

    it ('Si el número es 679 devuelve DCLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(679)
        expect (arabic2Roman.result).toBe('DCLXXIX')
    })

    it ('Si el número es 680 devuelve DCLXXX', () => {
        const arabic2Roman = new Arabic2Roman(680)
        expect (arabic2Roman.result).toBe('DCLXXX')
    })

    it ('Si el número es 698 devuelve DCXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(698)
        expect (arabic2Roman.result).toBe('DCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCCX al DCCXCIX', () => {

    it ('Si el número es 719 devuelve DCCXIX', () => {
        const arabic2Roman = new Arabic2Roman(719)
        expect (arabic2Roman.result).toBe('DCCXIX')
    })

    it ('Si el número es 725 devuelve DCCXXV', () => {
        const arabic2Roman = new Arabic2Roman(725)
        expect (arabic2Roman.result).toBe('DCCXXV')
    })

    it ('Si el número es 739 devuelve DCCXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(739)
        expect (arabic2Roman.result).toBe('DCCXXXIX')
    })

    it ('Si el número es 744 devuelve DCCXLIV', () => {
        const arabic2Roman = new Arabic2Roman(744)
        expect (arabic2Roman.result).toBe('DCCXLIV')
    })

    it ('Si el número es 759 devuelve DCCLIX', () => {
        const arabic2Roman = new Arabic2Roman(759)
        expect (arabic2Roman.result).toBe('DCCLIX')
    })

    it ('Si el número es 767 devuelve DCCLXVII', () => {
        const arabic2Roman = new Arabic2Roman(767)
        expect (arabic2Roman.result).toBe('DCCLXVII')
    })

    it ('Si el número es 779 devuelve DCCLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(779)
        expect (arabic2Roman.result).toBe('DCCLXXIX')
    })

    it ('Si el número es 780 devuelve DCCLXXX', () => {
        const arabic2Roman = new Arabic2Roman(780)
        expect (arabic2Roman.result).toBe('DCCLXXX')
    })

    it ('Si el número es 798 devuelve DCCXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(798)
        expect (arabic2Roman.result).toBe('DCCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCCCX al DCCCXCIX', () => {

    it ('Si el número es 819 devuelve DCCCXIX', () => {
        const arabic2Roman = new Arabic2Roman(819)
        expect (arabic2Roman.result).toBe('DCCCXIX')
    })

    it ('Si el número es 825 devuelve DCCCXXV', () => {
        const arabic2Roman = new Arabic2Roman(825)
        expect (arabic2Roman.result).toBe('DCCCXXV')
    })

    it ('Si el número es 839 devuelve DCCCXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(839)
        expect (arabic2Roman.result).toBe('DCCCXXXIX')
    })

    it ('Si el número es 844 devuelve DCCCXLIV', () => {
        const arabic2Roman = new Arabic2Roman(844)
        expect (arabic2Roman.result).toBe('DCCCXLIV')
    })

    it ('Si el número es 859 devuelve DCCCLIX', () => {
        const arabic2Roman = new Arabic2Roman(859)
        expect (arabic2Roman.result).toBe('DCCCLIX')
    })

    it ('Si el número es 867 devuelve DCCCLXVII', () => {
        const arabic2Roman = new Arabic2Roman(867)
        expect (arabic2Roman.result).toBe('DCCCLXVII')
    })

    it ('Si el número es 879 devuelve DCCCLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(879)
        expect (arabic2Roman.result).toBe('DCCCLXXIX')
    })

    it ('Si el número es 880 devuelve DCCCLXXX', () => {
        const arabic2Roman = new Arabic2Roman(880)
        expect (arabic2Roman.result).toBe('DCCCLXXX')
    })

    it ('Si el número es 898 devuelve DCCCXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(898)
        expect (arabic2Roman.result).toBe('DCCCXCVIII')
    })
})


describe ('Convertir número arábigos a arabic2roman || del CMX al CMXCIX', () => {

    it ('Si el número es 919 devuelve CMXIX', () => {
        const arabic2Roman = new Arabic2Roman(919)
        expect (arabic2Roman.result).toBe('CMXIX')
    })

    it ('Si el número es 925 devuelve CMXXV', () => {
        const arabic2Roman = new Arabic2Roman(925)
        expect (arabic2Roman.result).toBe('CMXXV')
    })

    it ('Si el número es 939 devuelve CMXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(939)
        expect (arabic2Roman.result).toBe('CMXXXIX')
    })

    it ('Si el número es 944 devuelve CMXLIV', () => {
        const arabic2Roman = new Arabic2Roman(944)
        expect (arabic2Roman.result).toBe('CMXLIV')
    })

    it ('Si el número es 959 devuelve CMLIX', () => {
        const arabic2Roman = new Arabic2Roman(959)
        expect (arabic2Roman.result).toBe('CMLIX')
    })

    it ('Si el número es 967 devuelve CMLXVII', () => {
        const arabic2Roman = new Arabic2Roman(967)
        expect (arabic2Roman.result).toBe('CMLXVII')
    })

    it ('Si el número es 979 devuelve CMLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(979)
        expect (arabic2Roman.result).toBe('CMLXXIX')
    })

    it ('Si el número es 980 devuelve CMLXXX', () => {
        const arabic2Roman = new Arabic2Roman(980)
        expect (arabic2Roman.result).toBe('CMLXXX')
    })

    it ('Si el número es 998 devuelve CMXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(998)
        expect (arabic2Roman.result).toBe('CMXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del MX al MXCIX', () => {

    it ('Si el número es 1019 devuelve MXIX', () => {
        const arabic2Roman = new Arabic2Roman(1019)
        expect (arabic2Roman.result).toBe('MXIX')
    })

    it ('Si el número es 1025 devuelve MXXV', () => {
        const arabic2Roman = new Arabic2Roman(1025)
        expect (arabic2Roman.result).toBe('MXXV')
    })

    it ('Si el número es 1039 devuelve MXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(1039)
        expect (arabic2Roman.result).toBe('MXXXIX')
    })

    it ('Si el número es 1044 devuelve MXLIV', () => {
        const arabic2Roman = new Arabic2Roman(1044)
        expect (arabic2Roman.result).toBe('MXLIV')
    })

    it ('Si el número es 1059 devuelve MLIX', () => {
        const arabic2Roman = new Arabic2Roman(1059)
        expect (arabic2Roman.result).toBe('MLIX')
    })

    it ('Si el número es 1067 devuelve MLXVII', () => {
        const arabic2Roman = new Arabic2Roman(1067)
        expect (arabic2Roman.result).toBe('MLXVII')
    })

    it ('Si el número es 1079 devuelve MLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(1079)
        expect (arabic2Roman.result).toBe('MLXXIX')
    })

    it ('Si el número es 1080 devuelve MLXXX', () => {
        const arabic2Roman = new Arabic2Roman(1080)
        expect (arabic2Roman.result).toBe('MLXXX')
    })

    it ('Si el número es 1098 devuelve MXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(1098)
        expect (arabic2Roman.result).toBe('MXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del MC al MMM', () => {

    it ('Si el número es 1119 devuelve MCXIX', () => {
        const arabic2Roman = new Arabic2Roman(1119)
        expect (arabic2Roman.result).toBe('MCXIX')
    })

    it ('Si el número es 1325 devuelve MCCCXXV', () => {
        const arabic2Roman = new Arabic2Roman(1325)
        expect (arabic2Roman.result).toBe('MCCCXXV')
    })

    it ('Si el número es 1739 devuelve MDCCXXXIX', () => {
        const arabic2Roman = new Arabic2Roman(1739)
        expect (arabic2Roman.result).toBe('MDCCXXXIX')
    })

    it ('Si el número es 1944 devuelve MCMXLIV', () => {
        const arabic2Roman = new Arabic2Roman(1944)
        expect (arabic2Roman.result).toBe('MCMXLIV')
    })

    it ('Si el número es 2059 devuelve MMLIX', () => {
        const arabic2Roman = new Arabic2Roman(2059)
        expect (arabic2Roman.result).toBe('MMLIX')
    })

    it ('Si el número es 2567 devuelve MMDLXVII', () => {
        const arabic2Roman = new Arabic2Roman(2567)
        expect (arabic2Roman.result).toBe('MMDLXVII')
    })

    it ('Si el número es 2879 devuelve MMDCCCLXXIX', () => {
        const arabic2Roman = new Arabic2Roman(2879)
        expect (arabic2Roman.result).toBe('MMDCCCLXXIX')
    })

    it ('Si el número es 2980 devuelve MMCMLXXX', () => {
        const arabic2Roman = new Arabic2Roman(2980)
        expect (arabic2Roman.result).toBe('MMCMLXXX')
    })

    it ('Si el número es 2998 devuelve MMCMXCVIII', () => {
        const arabic2Roman = new Arabic2Roman(2998)
        expect (arabic2Roman.result).toBe('MMCMXCVIII')
    })

    it ('Si el número es 3000 devuelve MMM', () => {
        const arabic2Roman = new Arabic2Roman(3000)
        expect (arabic2Roman.result).toBe('MMM')
    })
})