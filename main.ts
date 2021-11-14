input.onButtonPressed(Button.A, function () {
    Pausa = 250
})
input.onButtonPressed(Button.B, function () {
    Pausa = 100
})
let Pausa = 0
let pilota = game.createSprite(2, 2)
Pausa = 500
basic.forever(function () {
    pilota.move(1)
    pilota.ifOnEdgeBounce()
    basic.pause(Pausa)
})
