const {it, expect} = require('@jest/globals')

const Arabic2Roman = require('./arabic2roman')
const Roman2Arabic = require('./roman2arabic')

const arabic2roman = new Arabic2Roman()
const roman2arabic = new Roman2Arabic()

describe ('Convertir número romanos a arábigos || Unidades', () => {

    it ('Si el número es `` devuelve null', () => {
        const result = roman2arabic.Main('')
        expect (result).toBe(null)
    })
})


/*describe ('Convertir número arábigos a romanos || Unidades', () => {

    it ('Si el número es null devuelve ``', () => {
        const result = arabic2roman.Main(null)
        expect (result).toBe('')
    })

    it ('Si el número es 0 devuelve ``', () => {
        const result = arabic2roman.Main(0)
        expect (result).toBe('')
    })

    it ('Si el número menor de 1 devuelve ``', () => {
        const result = arabic2roman.Main(-5)
        expect (result).toBe('')
    })

    it ('Si el número es 1 devuelve I', () => {
        const result = arabic2roman.Main(1)
        expect (result).toBe('I')
    })

    it ('Si el número es 2 devuelve II', () => {
        const result = arabic2roman.Main(2)
        expect (result).toBe('II')
    })

    it ('Si el número es 3 devuelve III', () => {
        const result = arabic2roman.Main(3)
        expect (result).toBe('III')
    })

    it ('Si el número es 4 devuelve IV', () => {
        const result = arabic2roman.Main(4)
        expect (result).toBe('IV')
    })

    it ('Si el número es 5 devuelve V', () => {
        const result = arabic2roman.Main(5)
        expect (result).toBe('V')
    })

    it ('Si el número es 6 devuelve VI', () => {
        const result = arabic2roman.Main(6)
        expect (result).toBe('VI')
    })

    it ('Si el número es 7 devuelve VII', () => {
        const result = arabic2roman.Main(7)
        expect (result).toBe('VII')
    })

    it ('Si el número es 8 devuelve VIII', () => {
        const result = arabic2roman.Main(8)
        expect (result).toBe('VIII')
    })

    it ('Si el número es 9 devuelve IX', () => {
        const result = arabic2roman.Main(9)
        expect (result).toBe('IX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del X al XIX', () => {

    it ('Si el número es 10 devuelve X', () => {
        const result = arabic2roman.Main(10)
        expect (result).toBe('X')
    })

    it ('Si el número es 12 devuelve XII', () => {
        const result = arabic2roman.Main(12)
        expect (result).toBe('XII')
    })

    it ('Si el número es 15 devuelve XV', () => {
        const result = arabic2roman.Main(15)
        expect (result).toBe('XV')
    })

    it ('Si el número es 17 devuelve XVII', () => {
        const result = arabic2roman.Main(17)
        expect (result).toBe('XVII')
    })

    it ('Si el número es 19 devuelve XIX', () => {
        const result = arabic2roman.Main(19)
        expect (result).toBe('XIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XX al XXIX', () => {

    it ('Si el número es 20 devuelve XX', () => {
        const result = arabic2roman.Main(20)
        expect (result).toBe('XX')
    })

    it ('Si el número es 22 devuelve XXII', () => {
        const result = arabic2roman.Main(22)
        expect (result).toBe('XXII')
    })

    it ('Si el número es 25 devuelve XXV', () => {
        const result = arabic2roman.Main(25)
        expect (result).toBe('XXV')
    })

    it ('Si el número es 27 devuelve XXVII', () => {
        const result = arabic2roman.Main(27)
        expect (result).toBe('XXVII')
    })

    it ('Si el número es 29 devuelve XXIX', () => {
        const result = arabic2roman.Main(29)
        expect (result).toBe('XXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XXX al XXXIX', () => {

    it ('Si el número es 30 devuelve XXX', () => {
        const result = arabic2roman.Main(30)
        expect (result).toBe('XXX')
    })

    it ('Si el número es 32 devuelve XXXII', () => {
        const result = arabic2roman.Main(32)
        expect (result).toBe('XXXII')
    })

    it ('Si el número es 25 devuelve XXXV', () => {
        const result = arabic2roman.Main(35)
        expect (result).toBe('XXXV')
    })

    it ('Si el número es 37 devuelve XXXVII', () => {
        const result = arabic2roman.Main(37)
        expect (result).toBe('XXXVII')
    })

    it ('Si el número es 39 devuelve XXXIX', () => {
        const result = arabic2roman.Main(39)
        expect (result).toBe('XXXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XL al IXL', () => {

    it ('Si el número es 40 devuelve XL', () => {
        const result = arabic2roman.Main(40)
        expect (result).toBe('XL')
    })

    it ('Si el número es 42 devuelve XLII', () => {
        const result = arabic2roman.Main(42)
        expect (result).toBe('XLII')
    })

    it ('Si el número es 45 devuelve XLV', () => {
        const result = arabic2roman.Main(45)
        expect (result).toBe('XLV')
    })

    it ('Si el número es 47 devuelve XLVII', () => {
        const result = arabic2roman.Main(47)
        expect (result).toBe('XLVII')
    })

    it ('Si el número es 49 devuelve IXL', () => {
        const result = arabic2roman.Main(49)
        expect (result).toBe('IXL')
    })
})

describe ('Convertir número arábigos a arabic2roman || del L al LIX', () => {

    it ('Si el número es 50 devuelve L', () => {
        const result = arabic2roman.Main(50)
        expect (result).toBe('L')
    })

    it ('Si el número es 52 devuelve LII', () => {
        const result = arabic2roman.Main(52)
        expect (result).toBe('LII')
    })

    it ('Si el número es 55 devuelve LV', () => {
        const result = arabic2roman.Main(55)
        expect (result).toBe('LV')
    })

    it ('Si el número es 57 devuelve LVII', () => {
        const result = arabic2roman.Main(57)
        expect (result).toBe('LVII')
    })

    it ('Si el número es 59 devuelve LIX', () => {
        const result = arabic2roman.Main(59)
        expect (result).toBe('LIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del LX al LXIX', () => {

    it ('Si el número es 60 devuelve LX', () => {
        const result = arabic2roman.Main(60)
        expect (result).toBe('LX')
    })

    it ('Si el número es 62 devuelve LXII', () => {
        const result = arabic2roman.Main(62)
        expect (result).toBe('LXII')
    })

    it ('Si el número es 65 devuelve LXV', () => {
        const result = arabic2roman.Main(65)
        expect (result).toBe('LXV')
    })

    it ('Si el número es 67 devuelve LXVII', () => {
        const result = arabic2roman.Main(67)
        expect (result).toBe('LXVII')
    })

    it ('Si el número es 69 devuelve LXIX', () => {
        const result = arabic2roman.Main(69)
        expect (result).toBe('LXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del LXX al LXXIX', () => {

    it ('Si el número es 70 devuelve LXX', () => {
        const result = arabic2roman.Main(70)
        expect (result).toBe('LXX')
    })

    it ('Si el número es 72 devuelve LXXII', () => {
        const result = arabic2roman.Main(72)
        expect (result).toBe('LXXII')
    })

    it ('Si el número es 75 devuelve LXXV', () => {
        const result = arabic2roman.Main(75)
        expect (result).toBe('LXXV')
    })

    it ('Si el número es 77 devuelve LXXVII', () => {
        const result = arabic2roman.Main(77)
        expect (result).toBe('LXXVII')
    })

    it ('Si el número es 79 devuelve LXXIX', () => {
        const result = arabic2roman.Main(79)
        expect (result).toBe('LXXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del LXXX al LXXXIX', () => {

    it ('Si el número es 80 devuelve LXXX', () => {
        const result = arabic2roman.Main(80)
        expect (result).toBe('LXXX')
    })

    it ('Si el número es 82 devuelve LXXXII', () => {
        const result = arabic2roman.Main(82)
        expect (result).toBe('LXXXII')
    })

    it ('Si el número es 85 devuelve LXXXV', () => {
        const result = arabic2roman.Main(85)
        expect (result).toBe('LXXXV')
    })

    it ('Si el número es 87 devuelve LXXXVII', () => {
        const result = arabic2roman.Main(87)
        expect (result).toBe('LXXXVII')
    })

    it ('Si el número es 89 devuelve LXXXIX', () => {
        const result = arabic2roman.Main(89)
        expect (result).toBe('LXXXIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del XC al XCIX', () => {

    it ('Si el número es 90 devuelve XC', () => {
        const result = arabic2roman.Main(90)
        expect (result).toBe('XC')
    })

    it ('Si el número es 92 devuelve XCII', () => {
        const result = arabic2roman.Main(92)
        expect (result).toBe('XCII')
    })

    it ('Si el número es 95 devuelve XCV', () => {
        const result = arabic2roman.Main(95)
        expect (result).toBe('XCV')
    })

    it ('Si el número es 97 devuelve XCVII', () => {
        const result = arabic2roman.Main(97)
        expect (result).toBe('XCVII')
    })

    it ('Si el número es 99 devuelve XCIX', () => {
        const result = arabic2roman.Main(99)
        expect (result).toBe('XCIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del C al CIX', () => {

    it ('Si el número es 100 devuelve C', () => {
        const result = arabic2roman.Main(100)
        expect (result).toBe('C')
    })

    it ('Si el número es 102 devuelve CII', () => {
        const result = arabic2roman.Main(102)
        expect (result).toBe('CII')
    })

    it ('Si el número es 105 devuelve CV', () => {
        const result = arabic2roman.Main(105)
        expect (result).toBe('CV')
    })

    it ('Si el número es 107 devuelve CVII', () => {
        const result = arabic2roman.Main(107)
        expect (result).toBe('CVII')
    })

    it ('Si el número es 109 devuelve CIX', () => {
        const result = arabic2roman.Main(109)
        expect (result).toBe('CIX')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CX al CXCIX', () => {

    it ('Si el número es 119 devuelve CXIX', () => {
        const result = arabic2roman.Main(119)
        expect (result).toBe('CXIX')
    })

    it ('Si el número es 125 devuelve CXXV', () => {
        const result = arabic2roman.Main(125)
        expect (result).toBe('CXXV')
    })

    it ('Si el número es 139 devuelve CXXXIX', () => {
        const result = arabic2roman.Main(139)
        expect (result).toBe('CXXXIX')
    })

    it ('Si el número es 144 devuelve CXLIV', () => {
        const result = arabic2roman.Main(144)
        expect (result).toBe('CXLIV')
    })

    it ('Si el número es 159 devuelve CLIX', () => {
        const result = arabic2roman.Main(159)
        expect (result).toBe('CLIX')
    })

    it ('Si el número es 167 devuelve CLXVII', () => {
        const result = arabic2roman.Main(167)
        expect (result).toBe('CLXVII')
    })

    it ('Si el número es 179 devuelve CLXXIX', () => {
        const result = arabic2roman.Main(179)
        expect (result).toBe('CLXXIX')
    })

    it ('Si el número es 180 devuelve CLXXX', () => {
        const result = arabic2roman.Main(180)
        expect (result).toBe('CLXXX')
    })

    it ('Si el número es 198 devuelve CXCVIII', () => {
        const result = arabic2roman.Main(198)
        expect (result).toBe('CXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CCX al CCXCIX', () => {

    it ('Si el número es 219 devuelve CCXIX', () => {
        const result = arabic2roman.Main(219)
        expect (result).toBe('CCXIX')
    })

    it ('Si el número es 225 devuelve CCXXV', () => {
        const result = arabic2roman.Main(225)
        expect (result).toBe('CCXXV')
    })

    it ('Si el número es 239 devuelve CCXXXIX', () => {
        const result = arabic2roman.Main(239)
        expect (result).toBe('CCXXXIX')
    })

    it ('Si el número es 244 devuelve CCXLIV', () => {
        const result = arabic2roman.Main(244)
        expect (result).toBe('CCXLIV')
    })

    it ('Si el número es 259 devuelve CCLIX', () => {
        const result = arabic2roman.Main(259)
        expect (result).toBe('CCLIX')
    })

    it ('Si el número es 267 devuelve CCLXVII', () => {
        const result = arabic2roman.Main(267)
        expect (result).toBe('CCLXVII')
    })

    it ('Si el número es 279 devuelve CCLXXIX', () => {
        const result = arabic2roman.Main(279)
        expect (result).toBe('CCLXXIX')
    })

    it ('Si el número es 280 devuelve CCLXXX', () => {
        const result = arabic2roman.Main(280)
        expect (result).toBe('CCLXXX')
    })

    it ('Si el número es 298 devuelve CCXCVIII', () => {
        const result = arabic2roman.Main(298)
        expect (result).toBe('CCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CCCX al CCCXCIX', () => {

    it ('Si el número es 319 devuelve CCCXIX', () => {
        const result = arabic2roman.Main(319)
        expect (result).toBe('CCCXIX')
    })

    it ('Si el número es 325 devuelve CCCXXV', () => {
        const result = arabic2roman.Main(325)
        expect (result).toBe('CCCXXV')
    })

    it ('Si el número es 339 devuelve CCCXXXIX', () => {
        const result = arabic2roman.Main(339)
        expect (result).toBe('CCCXXXIX')
    })

    it ('Si el número es 344 devuelve CCCXLIV', () => {
        const result = arabic2roman.Main(344)
        expect (result).toBe('CCCXLIV')
    })

    it ('Si el número es 359 devuelve CCCLIX', () => {
        const result = arabic2roman.Main(359)
        expect (result).toBe('CCCLIX')
    })

    it ('Si el número es 367 devuelve CCCLXVII', () => {
        const result = arabic2roman.Main(367)
        expect (result).toBe('CCCLXVII')
    })

    it ('Si el número es 379 devuelve CCCLXXIX', () => {
        const result = arabic2roman.Main(379)
        expect (result).toBe('CCCLXXIX')
    })

    it ('Si el número es 380 devuelve CCCLXXX', () => {
        const result = arabic2roman.Main(380)
        expect (result).toBe('CCCLXXX')
    })

    it ('Si el número es 398 devuelve CCCXCVIII', () => {
        const result = arabic2roman.Main(398)
        expect (result).toBe('CCCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CDX al CDXCIX', () => {

    it ('Si el número es 419 devuelve CDXIX', () => {
        const result = arabic2roman.Main(419)
        expect (result).toBe('CDXIX')
    })

    it ('Si el número es 425 devuelve CDXXV', () => {
        const result = arabic2roman.Main(425)
        expect (result).toBe('CDXXV')
    })

    it ('Si el número es 439 devuelve CDXXXIX', () => {
        const result = arabic2roman.Main(439)
        expect (result).toBe('CDXXXIX')
    })

    it ('Si el número es 444 devuelve CDXLIV', () => {
        const result = arabic2roman.Main(444)
        expect (result).toBe('CDXLIV')
    })

    it ('Si el número es 459 devuelve CDLIX', () => {
        const result = arabic2roman.Main(459)
        expect (result).toBe('CDLIX')
    })

    it ('Si el número es 467 devuelve CDLXVII', () => {
        const result = arabic2roman.Main(467)
        expect (result).toBe('CDLXVII')
    })

    it ('Si el número es 479 devuelve CDLXXIX', () => {
        const result = arabic2roman.Main(479)
        expect (result).toBe('CDLXXIX')
    })

    it ('Si el número es 480 devuelve CDLXXX', () => {
        const result = arabic2roman.Main(480)
        expect (result).toBe('CDLXXX')
    })

    it ('Si el número es 498 devuelve CDXCVIII', () => {
        const result = arabic2roman.Main(498)
        expect (result).toBe('CDXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DX al DXCIX', () => {

    it ('Si el número es 519 devuelve DXIX', () => {
        const result = arabic2roman.Main(519)
        expect (result).toBe('DXIX')
    })

    it ('Si el número es 525 devuelve DXXV', () => {
        const result = arabic2roman.Main(525)
        expect (result).toBe('DXXV')
    })

    it ('Si el número es 539 devuelve DXXXIX', () => {
        const result = arabic2roman.Main(539)
        expect (result).toBe('DXXXIX')
    })

    it ('Si el número es 544 devuelve DXLIV', () => {
        const result = arabic2roman.Main(544)
        expect (result).toBe('DXLIV')
    })

    it ('Si el número es 559 devuelve DLIX', () => {
        const result = arabic2roman.Main(559)
        expect (result).toBe('DLIX')
    })

    it ('Si el número es 567 devuelve DLXVII', () => {
        const result = arabic2roman.Main(567)
        expect (result).toBe('DLXVII')
    })

    it ('Si el número es 579 devuelve DLXXIX', () => {
        const result = arabic2roman.Main(579)
        expect (result).toBe('DLXXIX')
    })

    it ('Si el número es 580 devuelve DLXXX', () => {
        const result = arabic2roman.Main(580)
        expect (result).toBe('DLXXX')
    })

    it ('Si el número es 598 devuelve DXCVIII', () => {
        const result = arabic2roman.Main(598)
        expect (result).toBe('DXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCX al DCXCIX', () => {

    it ('Si el número es 619 devuelve DCXIX', () => {
        const result = arabic2roman.Main(619)
        expect (result).toBe('DCXIX')
    })

    it ('Si el número es 625 devuelve DcXXV', () => {
        const result = arabic2roman.Main(625)
        expect (result).toBe('DCXXV')
    })

    it ('Si el número es 639 devuelve DCXXXIX', () => {
        const result = arabic2roman.Main(639)
        expect (result).toBe('DCXXXIX')
    })

    it ('Si el número es 644 devuelve DCXLIV', () => {
        const result = arabic2roman.Main(644)
        expect (result).toBe('DCXLIV')
    })

    it ('Si el número es 659 devuelve DCLIX', () => {
        const result = arabic2roman.Main(659)
        expect (result).toBe('DCLIX')
    })

    it ('Si el número es 667 devuelve DCLXVII', () => {
        const result = arabic2roman.Main(667)
        expect (result).toBe('DCLXVII')
    })

    it ('Si el número es 679 devuelve DCLXXIX', () => {
        const result = arabic2roman.Main(679)
        expect (result).toBe('DCLXXIX')
    })

    it ('Si el número es 680 devuelve DCLXXX', () => {
        const result = arabic2roman.Main(680)
        expect (result).toBe('DCLXXX')
    })

    it ('Si el número es 698 devuelve DCXCVIII', () => {
        const result = arabic2roman.Main(698)
        expect (result).toBe('DCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCCX al DCCXCIX', () => {

    it ('Si el número es 719 devuelve DCCXIX', () => {
        const result = arabic2roman.Main(719)
        expect (result).toBe('DCCXIX')
    })

    it ('Si el número es 725 devuelve DCCXXV', () => {
        const result = arabic2roman.Main(725)
        expect (result).toBe('DCCXXV')
    })

    it ('Si el número es 739 devuelve DCCXXXIX', () => {
        const result = arabic2roman.Main(739)
        expect (result).toBe('DCCXXXIX')
    })

    it ('Si el número es 744 devuelve DCCXLIV', () => {
        const result = arabic2roman.Main(744)
        expect (result).toBe('DCCXLIV')
    })

    it ('Si el número es 759 devuelve DCCLIX', () => {
        const result = arabic2roman.Main(759)
        expect (result).toBe('DCCLIX')
    })

    it ('Si el número es 767 devuelve DCCLXVII', () => {
        const result = arabic2roman.Main(767)
        expect (result).toBe('DCCLXVII')
    })

    it ('Si el número es 779 devuelve DCCLXXIX', () => {
        const result = arabic2roman.Main(779)
        expect (result).toBe('DCCLXXIX')
    })

    it ('Si el número es 780 devuelve DCCLXXX', () => {
        const result = arabic2roman.Main(780)
        expect (result).toBe('DCCLXXX')
    })

    it ('Si el número es 798 devuelve DCCXCVIII', () => {
        const result = arabic2roman.Main(798)
        expect (result).toBe('DCCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCCCX al DCCCXCIX', () => {

    it ('Si el número es 819 devuelve DCCCXIX', () => {
        const result = arabic2roman.Main(819)
        expect (result).toBe('DCCCXIX')
    })

    it ('Si el número es 825 devuelve DCCCXXV', () => {
        const result = arabic2roman.Main(825)
        expect (result).toBe('DCCCXXV')
    })

    it ('Si el número es 839 devuelve DCCCXXXIX', () => {
        const result = arabic2roman.Main(839)
        expect (result).toBe('DCCCXXXIX')
    })

    it ('Si el número es 844 devuelve DCCCXLIV', () => {
        const result = arabic2roman.Main(844)
        expect (result).toBe('DCCCXLIV')
    })

    it ('Si el número es 859 devuelve DCCCLIX', () => {
        const result = arabic2roman.Main(859)
        expect (result).toBe('DCCCLIX')
    })

    it ('Si el número es 867 devuelve DCCCLXVII', () => {
        const result = arabic2roman.Main(867)
        expect (result).toBe('DCCCLXVII')
    })

    it ('Si el número es 879 devuelve DCCCLXXIX', () => {
        const result = arabic2roman.Main(879)
        expect (result).toBe('DCCCLXXIX')
    })

    it ('Si el número es 880 devuelve DCCCLXXX', () => {
        const result = arabic2roman.Main(880)
        expect (result).toBe('DCCCLXXX')
    })

    it ('Si el número es 898 devuelve DCCCXCVIII', () => {
        const result = arabic2roman.Main(898)
        expect (result).toBe('DCCCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del DCCX al DCCXCIX', () => {

    it ('Si el número es 719 devuelve DCCXIX', () => {
        const result = arabic2roman.Main(719)
        expect (result).toBe('DCCXIX')
    })

    it ('Si el número es 725 devuelve DCCXXV', () => {
        const result = arabic2roman.Main(725)
        expect (result).toBe('DCCXXV')
    })

    it ('Si el número es 739 devuelve DCCXXXIX', () => {
        const result = arabic2roman.Main(739)
        expect (result).toBe('DCCXXXIX')
    })

    it ('Si el número es 744 devuelve DCCXLIV', () => {
        const result = arabic2roman.Main(744)
        expect (result).toBe('DCCXLIV')
    })

    it ('Si el número es 759 devuelve DCCLIX', () => {
        const result = arabic2roman.Main(759)
        expect (result).toBe('DCCLIX')
    })

    it ('Si el número es 767 devuelve DCCLXVII', () => {
        const result = arabic2roman.Main(767)
        expect (result).toBe('DCCLXVII')
    })

    it ('Si el número es 779 devuelve DCCLXXIX', () => {
        const result = arabic2roman.Main(779)
        expect (result).toBe('DCCLXXIX')
    })

    it ('Si el número es 780 devuelve DCCLXXX', () => {
        const result = arabic2roman.Main(780)
        expect (result).toBe('DCCLXXX')
    })

    it ('Si el número es 798 devuelve DCCXCVIII', () => {
        const result = arabic2roman.Main(798)
        expect (result).toBe('DCCXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del CMX al CMXCIX', () => {

    it ('Si el número es 919 devuelve CMXIX', () => {
        const result = arabic2roman.Main(919)
        expect (result).toBe('CMXIX')
    })

    it ('Si el número es 925 devuelve CMXXV', () => {
        const result = arabic2roman.Main(925)
        expect (result).toBe('CMXXV')
    })

    it ('Si el número es 939 devuelve CMXXXIX', () => {
        const result = arabic2roman.Main(939)
        expect (result).toBe('CMXXXIX')
    })

    it ('Si el número es 944 devuelve CMXLIV', () => {
        const result = arabic2roman.Main(944)
        expect (result).toBe('CMXLIV')
    })

    it ('Si el número es 959 devuelve CMLIX', () => {
        const result = arabic2roman.Main(959)
        expect (result).toBe('CMLIX')
    })

    it ('Si el número es 967 devuelve CMLXVII', () => {
        const result = arabic2roman.Main(967)
        expect (result).toBe('CMLXVII')
    })

    it ('Si el número es 979 devuelve CMLXXIX', () => {
        const result = arabic2roman.Main(979)
        expect (result).toBe('CMLXXIX')
    })

    it ('Si el número es 980 devuelve CMLXXX', () => {
        const result = arabic2roman.Main(980)
        expect (result).toBe('CMLXXX')
    })

    it ('Si el número es 998 devuelve CMXCVIII', () => {
        const result = arabic2roman.Main(998)
        expect (result).toBe('CMXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del MX al MXCIX', () => {

    it ('Si el número es 1019 devuelve MXIX', () => {
        const result = arabic2roman.Main(1019)
        expect (result).toBe('MXIX')
    })

    it ('Si el número es 1025 devuelve MXXV', () => {
        const result = arabic2roman.Main(1025)
        expect (result).toBe('MXXV')
    })

    it ('Si el número es 1039 devuelve MXXXIX', () => {
        const result = arabic2roman.Main(1039)
        expect (result).toBe('MXXXIX')
    })

    it ('Si el número es 1044 devuelve MXLIV', () => {
        const result = arabic2roman.Main(1044)
        expect (result).toBe('MXLIV')
    })

    it ('Si el número es 1059 devuelve MLIX', () => {
        const result = arabic2roman.Main(1059)
        expect (result).toBe('MLIX')
    })

    it ('Si el número es 1067 devuelve MLXVII', () => {
        const result = arabic2roman.Main(1067)
        expect (result).toBe('MLXVII')
    })

    it ('Si el número es 1079 devuelve MLXXIX', () => {
        const result = arabic2roman.Main(1079)
        expect (result).toBe('MLXXIX')
    })

    it ('Si el número es 1080 devuelve MLXXX', () => {
        const result = arabic2roman.Main(1080)
        expect (result).toBe('MLXXX')
    })

    it ('Si el número es 1098 devuelve MXCVIII', () => {
        const result = arabic2roman.Main(1098)
        expect (result).toBe('MXCVIII')
    })
})

describe ('Convertir número arábigos a arabic2roman || del MC al MMM', () => {

    it ('Si el número es 1119 devuelve MCXIX', () => {
        const result = arabic2roman.Main(1119)
        expect (result).toBe('MCXIX')
    })

    it ('Si el número es 1325 devuelve MCCCXXV', () => {
        const result = arabic2roman.Main(1325)
        expect (result).toBe('MCCCXXV')
    })

    it ('Si el número es 1739 devuelve MDCCXXXIX', () => {
        const result = arabic2roman.Main(1739)
        expect (result).toBe('MDCCXXXIX')
    })

    it ('Si el número es 1944 devuelve MCMXLIV', () => {
        const result = arabic2roman.Main(1944)
        expect (result).toBe('MCMXLIV')
    })

    it ('Si el número es 2059 devuelve MMLIX', () => {
        const result = arabic2roman.Main(2059)
        expect (result).toBe('MMLIX')
    })

    it ('Si el número es 2567 devuelve MMDLXVII', () => {
        const result = arabic2roman.Main(2567)
        expect (result).toBe('MMDLXVII')
    })

    it ('Si el número es 2879 devuelve MMDCCCLXXIX', () => {
        const result = arabic2roman.Main(2879)
        expect (result).toBe('MMDCCCLXXIX')
    })

    it ('Si el número es 2980 devuelve MMCMLXXX', () => {
        const result = arabic2roman.Main(2980)
        expect (result).toBe('MMCMLXXX')
    })

    it ('Si el número es 2998 devuelve MMCMXCVIII', () => {
        const result = arabic2roman.Main(2998)
        expect (result).toBe('MMCMXCVIII')
    })

    it ('Si el número es 3000 devuelve MMM', () => {
        const result = arabic2roman.Main(3000)
        expect (result).toBe('MMM')
    })
})*/