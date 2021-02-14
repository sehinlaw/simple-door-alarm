input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
// In order to utilize the light sensor for an alarm, a-b have to be pressed together.
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
})
// This function allows me to reset the alarm either the magnetic sensor or light after its been triggered.
input.onButtonPressed(Button.B, function () {
    control.reset()
})
// When the light sensors are triggered by any light it will play this mystery melody and show a sad face.
basic.forever(function () {
    if (input.lightLevel() > 1) {
        basic.showIcon(IconNames.Confused)
    }
})
// I utilized the forever block so the microbit would always detect the magnetic force and alarm when someone opens the door, in oppose to on start. I chose for the alarm to go off when the magnetic force is less than 150 being that I was working with a weaker magnet.
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 150) {
        basic.showIcon(IconNames.Angry)
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
    } else if (input.magneticForce(Dimension.X) > 150) {
        basic.showIcon(IconNames.Heart)
    }
})
