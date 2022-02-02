"use strict"

window.onload = function () {

    const container = document.getElementById("leftside")
    const replace = document.getElementById("Deepfake")

    const nlButton = document.getElementById("buttonNL")
    const frButton = document.getElementById("buttonFR")
    const enButton = document.getElementById("buttonEN")


    nlButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert('NL Button is clicked')

        let htmlString = `<video id="Deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
        src="./ressources/einsteinNL.mp4" autoplay controls>
    </video>`

        container.innerHTML = htmlString
    })

    frButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert('FR Button is clicked')
        htmlString = `<video id="Deepfake" title="Deepfake" width="218" height="445" src="./ressources/testediting.mp4" muted
        autoplay controls>
    </video>`
        container.innerHTML(htmlString)
    })

    enButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert('EN Button is clicked')
        htmlString = `<video id="Deepfake" title="Deepfake" width="218" height="445" src="./ressources/testediting.mp4" muted
        autoplay controls>
    </video>`
        container.innerHTML(htmlString)
    })
}