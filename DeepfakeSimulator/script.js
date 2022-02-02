"use strict"

window.onload = function () {

    const container = document.getElementById("leftside")
    const rightside = document.getElementById("rightside")

    const einsteintext = document.getElementById("einsteintext")
    const baptistetext = document.getElementById("baptistetext")
    const olivetext = document.getElementById("olivetext")

    const nlButtonBaptiste = document.getElementById("buttonNLBaptiste")
    const frButtonBaptiste = document.getElementById("buttonFRBaptiste")
    const enButtonBaptiste = document.getElementById("buttonENBaptiste")

    baptistetext.addEventListener("click", function (e) {
        e.preventDefault();

        if (document.querySelector('text') !== null) {
            document.querySelector('text').classList.remove('active');
        }
        e.target.className = "active";

        baptistetext.classList.add("active");

        let htmlString = `<video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
        src="./ressources/baptisteStandby.mp4" muted autoplay loop>
    </video>`

        container.innerHTML = htmlString

        let htmlString2 = `<div class="buttons buttonsBaptiste">
        <button id='buttonNLBaptiste' class="button" type="buttonNL">NL</button>
        <button id='buttonFRBaptiste' class="button" type="buttonFR">FR</button>
        <button id='buttonENBaptiste' class="button" type="buttonEN">EN</button>
    </div>`

        rightside.innerHTML = htmlString2

        BaptisteButtonsFinder()
    })

    function BaptisteButtonsFinder() {
        const nlButtonBaptiste = document.getElementById("buttonNLBaptiste")
        const frButtonBaptiste = document.getElementById("buttonFRBaptiste")
        const enButtonBaptiste = document.getElementById("buttonENBaptiste")

        nlButtonBaptiste.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `<video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
            src="./ressources/baptisteNL.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = ` <video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
                        src="./ressources/baptisteStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

    }


    const nlButton = document.getElementById("buttonNL")
    const frButton = document.getElementById("buttonFR")
    const enButton = document.getElementById("buttonEN")


    nlButton.addEventListener("click", function (e) {
        e.preventDefault();

        let htmlString = `<video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
        src="./ressources/einsteinNL.mp4" autoplay>
    </video>`

        container.innerHTML = htmlString
        const video = document.getElementById("deepfake")
        video.volume = 0.5;

        video.onended = function () {

            let htmlString = ` <video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
                    src="./ressources/einsteinStandby.mp4" muted autoplay loop>
                </video>`

            container.innerHTML = htmlString
        }

    })

    frButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert('FR Button is clicked')
        htmlString = `<video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
        src="./ressources/einsteinFR.mp4" autoplay>
    </video>`
        container.innerHTML(htmlString)
    })

    enButton.addEventListener("click", function (e) {
        e.preventDefault();

        let htmlString = `<video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
        src="./ressources/einsteinEN.mp4" autoplay>
    </video>`

        container.innerHTML = htmlString
        const video = document.getElementById("deepfake")
        video.volume = 0.5;

        video.onended = function () {

            let htmlString = ` <video id="deepfake" title="Deepfake" width="436" height="650" type="video/mp4"
                    src="./ressources/einsteinStandby.mp4" muted autoplay loop>
                </video>`

            container.innerHTML = htmlString
        }
    })
}