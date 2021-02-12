input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Happy)
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 150) {
        basic.showIcon(IconNames.Angry)
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
