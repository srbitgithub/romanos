const {it, expect} = require('@jest/globals')
const Arabic2Roman = require('./arabic2roman')

describe ('Convertir número arábigos a romanos || Unidades', () => {
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
    const arabic2roman = new Arabic2Roman()

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
