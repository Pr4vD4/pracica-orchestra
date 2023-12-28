import anime from "../../../public/assets/js/anime";

export class Game {
    constructor(game) {
        this.selectedInstruments = new Set()
        this.success = false
        this.incorrectInstruments = new Set()
        this.countInstruments(game)
        this.audio = new Audio('./assets/audio/orchestra.mp3')
        this.instrumentsSounds()
    }

    countInstruments(game) {
        this.instruments = game.querySelectorAll('[data-correct="1"]').length
    }


    instrumentsSounds = () => {

        function playAudio(audio) {
            let playedPromise = audio.play();
            if (playedPromise) {
                playedPromise.catch((e) => {
                    console.log(e)
                    if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                        console.log(e.name);
                    }
                }).then(() => {
                    console.log("playing sound !!!");
                });
            }
        }


        document.querySelector('.xylophone').addEventListener('touchstart', function () {

            this.audio = new Audio('./assets/audio/xylophone.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.b').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/b.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.maracas').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/maracas.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.spoons').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/spoons.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.triangle').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/triangle.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.synth').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/synth.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.violin').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/violin.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
        document.querySelector('.accordionIns').addEventListener('touchstart', function () {
            this.audio = new Audio('./assets/audio/accordion.mp3')
            this.audio.volume = 0.05
            playAudio(this.audio)

        })
    }

}

export function startSelector(game) {

    const instruments = document.querySelectorAll('.instrument')
    instruments.forEach((item) => {
        item.addEventListener('touchstart', toggleSelect)
    })

    const play = document.querySelector('.play')
    play.addEventListener('touchstart', check)

    function toggleSelect(event) {
        event.target.classList.toggle('selected')

        if (Number(event.target.dataset.correct)) {

            if (game.selectedInstruments.has(event.target)) {
                game.selectedInstruments.delete(event.target)

            } else {
                game.selectedInstruments.add(event.target)
            }

        } else {

            if (game.incorrectInstruments.has(event.target)) {
                game.incorrectInstruments.delete(event.target)
            } else {
                game.incorrectInstruments.add(event.target)
            }
        }
    }

    function check(event) {
        anime({
            targets: event.target,
            // scale: 1.2,
            keyframes: [
                {scale: 1.2},
                {scale: 1}
            ],
            easing: 'easeInBack',
            duration: 200,
        })
        console.log(game)
        if (game.selectedInstruments.size === game.instruments && game.incorrectInstruments.size === 0) {

            console.log(1)
            game.success = true
        }
    }


}