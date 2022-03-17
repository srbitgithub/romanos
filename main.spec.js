const {it, expect} = require('@jest/globals')
const Romanos = require('./main')

describe ('Convertir número arábigos a romanos || Unidades', () => {
    const romanos = new Romanos()

    it ('Si el número es null devuelve ``', () => {
        const result = romanos.Main(null)
        expect (result).toBe('')
    })

    it ('Si el número es 0 devuelve ``', () => {
        const result = romanos.Main(0)
        expect (result).toBe('')
    })

    it ('Si el número menor de 1 devuelve ``', () => {
        const result = romanos.Main(-5)
        expect (result).toBe('')
    })

    it ('Si el número es 1 devuelve I', () => {
        const result = romanos.Main(1)
        expect (result).toBe('I')
    })

    it ('Si el número es 2 devuelve II', () => {
        const result = romanos.Main(2)
        expect (result).toBe('II')
    })

    it ('Si el número es 3 devuelve III', () => {
        const result = romanos.Main(3)
        expect (result).toBe('III')
    })

    it ('Si el número es 4 devuelve IV', () => {
        const result = romanos.Main(4)
        expect (result).toBe('IV')
    })

    it ('Si el número es 5 devuelve V', () => {
        const result = romanos.Main(5)
        expect (result).toBe('V')
    })

    it ('Si el número es 6 devuelve VI', () => {
        const result = romanos.Main(6)
        expect (result).toBe('VI')
    })

    it ('Si el número es 7 devuelve VII', () => {
        const result = romanos.Main(7)
        expect (result).toBe('VII')
    })

    it ('Si el número es 8 devuelve VIII', () => {
        const result = romanos.Main(8)
        expect (result).toBe('VIII')
    })

    it ('Si el número es 9 devuelve IX', () => {
        const result = romanos.Main(9)
        expect (result).toBe('IX')
    })
})

describe ('Convertir número arábigos a romanos || del X al XIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 10 devuelve X', () => {
        const result = romanos.Main(10)
        expect (result).toBe('X')
    })

    it ('Si el número es 12 devuelve XII', () => {
        const result = romanos.Main(12)
        expect (result).toBe('XII')
    })

    it ('Si el número es 15 devuelve XV', () => {
        const result = romanos.Main(15)
        expect (result).toBe('XV')
    })

    it ('Si el número es 17 devuelve XVII', () => {
        const result = romanos.Main(17)
        expect (result).toBe('XVII')
    })

    it ('Si el número es 19 devuelve XIX', () => {
        const result = romanos.Main(19)
        expect (result).toBe('XIX')
    })
})

describe ('Convertir número arábigos a romanos || del XX al XXIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 20 devuelve XX', () => {
        const result = romanos.Main(20)
        expect (result).toBe('XX')
    })

    it ('Si el número es 22 devuelve XXII', () => {
        const result = romanos.Main(22)
        expect (result).toBe('XXII')
    })

    it ('Si el número es 25 devuelve XXV', () => {
        const result = romanos.Main(25)
        expect (result).toBe('XXV')
    })

    it ('Si el número es 27 devuelve XXVII', () => {
        const result = romanos.Main(27)
        expect (result).toBe('XXVII')
    })

    it ('Si el número es 29 devuelve XXIX', () => {
        const result = romanos.Main(29)
        expect (result).toBe('XXIX')
    })
})

describe ('Convertir número arábigos a romanos || del XXX al XXXIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 30 devuelve XXX', () => {
        const result = romanos.Main(30)
        expect (result).toBe('XXX')
    })

    it ('Si el número es 32 devuelve XXXII', () => {
        const result = romanos.Main(32)
        expect (result).toBe('XXXII')
    })

    it ('Si el número es 25 devuelve XXXV', () => {
        const result = romanos.Main(35)
        expect (result).toBe('XXXV')
    })

    it ('Si el número es 37 devuelve XXXVII', () => {
        const result = romanos.Main(37)
        expect (result).toBe('XXXVII')
    })

    it ('Si el número es 39 devuelve XXXIX', () => {
        const result = romanos.Main(39)
        expect (result).toBe('XXXIX')
    })
})

describe ('Convertir número arábigos a romanos || del XL al IXL', () => {
    const romanos = new Romanos()

    it ('Si el número es 40 devuelve XL', () => {
        const result = romanos.Main(40)
        expect (result).toBe('XL')
    })

    it ('Si el número es 42 devuelve XLII', () => {
        const result = romanos.Main(42)
        expect (result).toBe('XLII')
    })

    it ('Si el número es 45 devuelve XLV', () => {
        const result = romanos.Main(45)
        expect (result).toBe('XLV')
    })

    it ('Si el número es 47 devuelve XLVII', () => {
        const result = romanos.Main(47)
        expect (result).toBe('XLVII')
    })

    it ('Si el número es 49 devuelve IXL', () => {
        const result = romanos.Main(49)
        expect (result).toBe('IXL')
    })
})

describe ('Convertir número arábigos a romanos || del L al LIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 50 devuelve L', () => {
        const result = romanos.Main(50)
        expect (result).toBe('L')
    })

    it ('Si el número es 52 devuelve LII', () => {
        const result = romanos.Main(52)
        expect (result).toBe('LII')
    })

    it ('Si el número es 55 devuelve LV', () => {
        const result = romanos.Main(55)
        expect (result).toBe('LV')
    })

    it ('Si el número es 57 devuelve LVII', () => {
        const result = romanos.Main(57)
        expect (result).toBe('LVII')
    })

    it ('Si el número es 59 devuelve LIX', () => {
        const result = romanos.Main(59)
        expect (result).toBe('LIX')
    })
})

describe ('Convertir número arábigos a romanos || del LX al LXIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 60 devuelve LX', () => {
        const result = romanos.Main(60)
        expect (result).toBe('LX')
    })

    it ('Si el número es 62 devuelve LXII', () => {
        const result = romanos.Main(62)
        expect (result).toBe('LXII')
    })

    it ('Si el número es 65 devuelve LXV', () => {
        const result = romanos.Main(65)
        expect (result).toBe('LXV')
    })

    it ('Si el número es 67 devuelve LXVII', () => {
        const result = romanos.Main(67)
        expect (result).toBe('LXVII')
    })

    it ('Si el número es 69 devuelve LXIX', () => {
        const result = romanos.Main(69)
        expect (result).toBe('LXIX')
    })
})

describe ('Convertir número arábigos a romanos || del LXX al LXXIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 70 devuelve LXX', () => {
        const result = romanos.Main(70)
        expect (result).toBe('LXX')
    })

    it ('Si el número es 72 devuelve LXXII', () => {
        const result = romanos.Main(72)
        expect (result).toBe('LXXII')
    })

    it ('Si el número es 75 devuelve LXXV', () => {
        const result = romanos.Main(75)
        expect (result).toBe('LXXV')
    })

    it ('Si el número es 77 devuelve LXXVII', () => {
        const result = romanos.Main(77)
        expect (result).toBe('LXXVII')
    })

    it ('Si el número es 79 devuelve LXXIX', () => {
        const result = romanos.Main(79)
        expect (result).toBe('LXXIX')
    })
})

describe ('Convertir número arábigos a romanos || del LXXX al LXXXIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 80 devuelve LXXX', () => {
        const result = romanos.Main(80)
        expect (result).toBe('LXXX')
    })

    it ('Si el número es 82 devuelve LXXXII', () => {
        const result = romanos.Main(82)
        expect (result).toBe('LXXXII')
    })

    it ('Si el número es 85 devuelve LXXXV', () => {
        const result = romanos.Main(85)
        expect (result).toBe('LXXXV')
    })

    it ('Si el número es 87 devuelve LXXXVII', () => {
        const result = romanos.Main(87)
        expect (result).toBe('LXXXVII')
    })

    it ('Si el número es 89 devuelve LXXXIX', () => {
        const result = romanos.Main(89)
        expect (result).toBe('LXXXIX')
    })
})

describe ('Convertir número arábigos a romanos || del XC al XCIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 90 devuelve XC', () => {
        const result = romanos.Main(90)
        expect (result).toBe('XC')
    })

    it ('Si el número es 92 devuelve XCII', () => {
        const result = romanos.Main(92)
        expect (result).toBe('XCII')
    })

    it ('Si el número es 95 devuelve XCV', () => {
        const result = romanos.Main(95)
        expect (result).toBe('XCV')
    })

    it ('Si el número es 97 devuelve XCVII', () => {
        const result = romanos.Main(97)
        expect (result).toBe('XCVII')
    })

    it ('Si el número es 99 devuelve XCIX', () => {
        const result = romanos.Main(99)
        expect (result).toBe('XCIX')
    })
})

describe ('Convertir número arábigos a romanos || del C al CIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 100 devuelve C', () => {
        const result = romanos.Main(100)
        expect (result).toBe('C')
    })

    it ('Si el número es 102 devuelve CII', () => {
        const result = romanos.Main(102)
        expect (result).toBe('CII')
    })

    it ('Si el número es 105 devuelve CV', () => {
        const result = romanos.Main(105)
        expect (result).toBe('CV')
    })

    it ('Si el número es 107 devuelve CVII', () => {
        const result = romanos.Main(107)
        expect (result).toBe('CVII')
    })

    it ('Si el número es 109 devuelve CIX', () => {
        const result = romanos.Main(109)
        expect (result).toBe('CIX')
    })
})

describe ('Convertir número arábigos a romanos || del CX al CXCIX', () => {
    const romanos = new Romanos()

    it ('Si el número es 119 devuelve CXIX', () => {
        const result = romanos.Main(119)
        expect (result).toBe('CXIX')
    })

    it ('Si el número es 125 devuelve CXXV', () => {
        const result = romanos.Main(125)
        expect (result).toBe('CXXV')
    })

    it ('Si el número es 139 devuelve CXXXIX', () => {
        const result = romanos.Main(139)
        expect (result).toBe('CXXXIX')
    })

    it ('Si el número es 144 devuelve CXLIV', () => {
        const result = romanos.Main(144)
        expect (result).toBe('CXLIV')
    })

    it ('Si el número es 159 devuelve CLIX', () => {
        const result = romanos.Main(159)
        expect (result).toBe('CLIX')
    })

    it ('Si el número es 167 devuelve CLXVII', () => {
        const result = romanos.Main(167)
        expect (result).toBe('CLXVII')
    })

    it ('Si el número es 179 devuelve CLXXIX', () => {
        const result = romanos.Main(179)
        expect (result).toBe('CLXXIX')
    })

    it ('Si el número es 180 devuelve CLXXX', () => {
        const result = romanos.Main(180)
        expect (result).toBe('CLXXX')
    })

    it ('Si el número es 198 devuelve CXCVIII', () => {
        const result = romanos.Main(198)
        expect (result).toBe('CXCVIII')
    })

})
