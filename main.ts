basic.forever(function () {
    let thumb = pins.analogReadPin(AnalogPin.P0)
    let index = pins.analogReadPin(AnalogPin.P1)
    let middle = pins.analogReadPin(AnalogPin.P2)

    if (thumb > 600) {
        speech.speak("Hello")
        basic.pause(1000)
    }
    else if (index > 600) {
        speech.speak("Yes")
        basic.pause(1000)
    }
    else if (middle > 600) {
        speech.speak("No")
        basic.pause(1000)
    }
})
	
