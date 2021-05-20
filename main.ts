input.onButtonPressed(Button.A, function () {
    chiffre_du_jour += chiffre_du_jour - 1
})
input.onButtonPressed(Button.AB, function () {
    if (mois == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (mois == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (mois == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    }
    if (mois == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (mois == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (mois == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (mois == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (mois == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (mois == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (mois == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (mois == 11) {
        basic.showLeds(`
            . # . . #
            # # . # #
            . # . . #
            . # . . #
            # # . # #
            `)
    }
    if (mois == 12) {
        basic.showLeds(`
            . # . # #
            # # . . #
            . # . # #
            . # . # .
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    chiffre_du_jour += chiffre_du_jour + 1
})
let chiffre_du_jour = 0
let mois = 0
let chiffre_du_jour = 0
chiffre_du_jour = 1
mois = 1
if (chiffre_du_jour == 1) {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
}
if (chiffre_du_jour == 2) {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        . # # # .
        `)
}
if (chiffre_du_jour == 3) {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # .
        . . . # .
        . # # # .
        `)
}
if (chiffre_du_jour == 4) {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
}
if (chiffre_du_jour == 5) {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
}
if (chiffre_du_jour == 6) {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
}
if (chiffre_du_jour == 7) {
    basic.showLeds(`
        . # # # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
}
if (chiffre_du_jour == 8) {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
}
if (chiffre_du_jour == 9) {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . # .
        . # # # .
        `)
}
if (chiffre_du_jour == 10) {
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
        `)
}
if (chiffre_du_jour == 11) {
    basic.showLeds(`
        . # . . #
        # # . # #
        . # . . #
        . # . . #
        # # . # #
        `)
}
if (chiffre_du_jour == 12) {
    basic.showLeds(`
        . # . # #
        # # . . #
        . # . # #
        . # . # .
        # # . # #
        `)
}
if (chiffre_du_jour == 13) {
    basic.showLeds(`
        . # . # #
        # # . . #
        . # . # #
        . # . . #
        # # . # #
        `)
}
if (chiffre_du_jour == 14) {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # # #
        # . . . #
        # . . . #
        `)
}
if (chiffre_du_jour == 15) {
    basic.showLeds(`
        . # . # #
        # # . # .
        . # . # #
        . # . . #
        # # . # #
        `)
}
if (chiffre_du_jour == 16) {
    basic.showLeds(`
        # . # # #
        # . # . .
        # . # # #
        # . # . #
        # . # # #
        `)
}
if (chiffre_du_jour == 17) {
    basic.showLeds(`
        . # . # #
        # # . . #
        . # . . #
        . # . . #
        # # . . #
        `)
}
if (chiffre_du_jour == 18) {
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # # #
        # . # . #
        # . # # #
        `)
}
if (chiffre_du_jour == 19) {
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # # #
        # . . . #
        # . # # #
        `)
}
if (chiffre_du_jour == 20) {
    basic.showLeds(`
        # # . # #
        . # . # #
        # # . # #
        # . . # #
        # # . # #
        `)
}
if (chiffre_du_jour == 21) {
    basic.showLeds(`
        # # . . #
        . # . # #
        # # . . #
        # . . . #
        # # . . #
        `)
}
if (chiffre_du_jour == 22) {
    basic.showLeds(`
        # # . # #
        . # . . #
        # # . # #
        # . . # .
        # # . # #
        `)
}
if (chiffre_du_jour == 23) {
    basic.showLeds(`
        # # . # #
        . # . . #
        # # . # #
        # . . . #
        # # . # #
        `)
}
if (chiffre_du_jour == 24) {
    basic.showLeds(`
        # # . # .
        . # . # .
        # # . # #
        # . . . #
        # # . . #
        `)
}
if (chiffre_du_jour == 25) {
    basic.showLeds(`
        # # . # #
        . # . # .
        # # . # #
        # . . . #
        # # . # #
        `)
}
if (chiffre_du_jour == 26) {
    basic.showLeds(`
        # # . # #
        . # . # .
        # # . # #
        # . . # #
        # # . # #
        `)
}
if (chiffre_du_jour == 27) {
    basic.showLeds(`
        # # . # #
        . # . . #
        # # . . #
        # . . . #
        # # . . #
        `)
}
if (chiffre_du_jour == 28) {
    basic.showLeds(`
        # # . # #
        . # . # .
        # # . # #
        # . . # .
        # # . # #
        `)
}
if (chiffre_du_jour == 29) {
    basic.showLeds(`
        # # . # #
        . # . # #
        # # . # #
        # . . . #
        # # . # #
        `)
}
if (chiffre_du_jour == 30) {
    basic.showLeds(`
        # # . # #
        . # . # #
        # # . # #
        . # . # #
        # # . # #
        `)
}
if (chiffre_du_jour == 31) {
    basic.showLeds(`
        # # . . #
        . # . # #
        # # . . #
        . # . . #
        # # . . #
        `)
}
