"use strict"

window.onload = function () {

    const container = document.getElementById("leftside")
    const rightside = document.getElementById("rightside")

    const einsteintext = document.getElementById("alberttext")
    const baptistetext = document.getElementById("baptistetext")
    const olivetext = document.getElementById("olivetext")

    einsteintext.addEventListener("click", function (e) {
        e.preventDefault();


        let htmlString = ` <img class="mockuplogo" src="./ressources/mockupWebsite.png">
        <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/einsteinStandby.mp4" muted autoplay loop>
        </video>`

        container.innerHTML = htmlString

        let htmlString2 = `<div class="buttons">
        <button id='buttonNL' class="button" type="buttonNL">NL</button>
        <button id='buttonFR' class="button" type="buttonFR">FR</button>
        <button id='buttonEN' class="button" type="buttonEN">EN</button>
    </div>`

        rightside.innerHTML = htmlString2

        EinsteinButtonsFinder()
    })



    function EinsteinButtonsFinder() {
        const nlButton = document.getElementById("buttonNL")
        const frButton = document.getElementById("buttonFR")
        const enButton = document.getElementById("buttonEN")

        nlButton.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `<img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/einsteinNL.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = `
                <img class="mockuplogo" src="./ressources/mockupWebsite.png">
                 <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                        src="./ressources/einsteinStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

        enButton.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `
            <img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/einsteinEN.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = ` 
                <img class="mockuplogo" src="./ressources/mockupWebsite.png">
                <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                        src="./ressources/einsteinStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

        frButton.addEventListener("click", function (e) {
            e.preventDefault();

            alert(`La version française n'est pas encore disponible. Désolé pour le désagrément !`)
        })

    }

    olivetext.addEventListener("click", function (e) {
        e.preventDefault();



        let htmlString = ` <img class="mockuplogo" src="./ressources/mockupWebsite.png">
        <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/oliveStandby.mp4" muted autoplay loop>
        </video>`

        container.innerHTML = htmlString

        let htmlString2 = `<div class="buttons buttonsOlive">
        <button id='buttonNLOlive' class="button" type="buttonNL">NL</button>
        <button id='buttonFROlive' class="button" type="buttonFR">FR</button>
        <button id='buttonENOlive' class="button" type="buttonEN">EN</button>
    </div>`

        rightside.innerHTML = htmlString2

        OliveButtonsFinder()
    })


    baptistetext.addEventListener("click", function (e) {
        e.preventDefault();



        let htmlString = `
        <img class="mockuplogo" src="./ressources/mockupWebsite.png">
        <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
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

    function OliveButtonsFinder() {
        const nlButtonOLive = document.getElementById("buttonNLOlive")
        const frButtonOlive = document.getElementById("buttonFROlive")
        const enButtonOlive = document.getElementById("buttonENOlive")

        nlButtonOLive.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `<img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/oliveNL.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = `
                <img class="mockuplogo" src="./ressources/mockupWebsite.png">
                 <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                        src="./ressources/oliveStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

        enButtonOlive.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `
            <img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/oliveEN.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = ` 
                <img class="mockuplogo" src="./ressources/mockupWebsite.png">
                <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                        src="./ressources/oliveStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

        frButtonOlive.addEventListener("click", function (e) {
            e.preventDefault();

            alert(`La version française n'est pas encore disponible. Désolé pour le désagrément !`)
        })

    }


    function BaptisteButtonsFinder() {
        const nlButtonBaptiste = document.getElementById("buttonNLBaptiste")
        const frButtonBaptiste = document.getElementById("buttonFRBaptiste")
        const enButtonBaptiste = document.getElementById("buttonENBaptiste")

        nlButtonBaptiste.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `
            <img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/baptisteNL.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = `
                <img class="mockuplogo" src="./ressources/mockupWebsite.png">
                <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                        src="./ressources/baptisteStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

        enButtonBaptiste.addEventListener("click", function (e) {
            e.preventDefault();

            let htmlString = `
            <img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
            src="./ressources/baptisteEN.mp4" autoplay>
        </video>`

            container.innerHTML = htmlString
            const video = document.getElementById("deepfake")
            video.volume = 0.5;

            video.onended = function () {

                let htmlString = ` 
                <img class="mockuplogo" src="./ressources/mockupWebsite.png">
                <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                        src="./ressources/baptisteStandby.mp4" muted autoplay loop>
                    </video>`

                container.innerHTML = htmlString
            }
        })

        frButtonBaptiste.addEventListener("click", function (e) {
            e.preventDefault();

            alert(`La version française n'est pas encore disponible. Désolé pour le désagrément !`)
        })

    }


    const nlButton = document.getElementById("buttonNL")
    const frButton = document.getElementById("buttonFR")
    const enButton = document.getElementById("buttonEN")


    nlButton.addEventListener("click", function (e) {
        e.preventDefault();

        let htmlString = `
        <img class="mockuplogo" src="./ressources/mockupWebsite.png">
        <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
        src="./ressources/einsteinNL.mp4" autoplay>
    </video>`

        container.innerHTML = htmlString
        const video = document.getElementById("deepfake")
        video.volume = 0.5;

        video.onended = function () {

            let htmlString = ` 
            <img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                    src="./ressources/einsteinStandby.mp4" muted autoplay loop>
                </video>`

            container.innerHTML = htmlString
        }

    })

    frButton.addEventListener("click", function (e) {
        e.preventDefault();

        alert(`La version française n'est pas encore disponible. Désolé pour le désagrément !`)

    })

    enButton.addEventListener("click", function (e) {
        e.preventDefault();

        let htmlString = `
        <img class="mockuplogo" src="./ressources/mockupWebsite.png">
        <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
        src="./ressources/einsteinEN.mp4" autoplay>
    </video>`

        container.innerHTML = htmlString
        const video = document.getElementById("deepfake")
        video.volume = 0.5;

        video.onended = function () {

            let htmlString = `
            <img class="mockuplogo" src="./ressources/mockupWebsite.png">
            <video id="deepfake" title="Deepfake" width="250" height="650" type="video/mp4"
                    src="./ressources/einsteinStandby.mp4" muted autoplay loop>
                </video>`

            container.innerHTML = htmlString
        }
    })
}