export class Game {
    constructor(game) {
        this.selectedInstruments = new Set()
        this.success = false
        this.incorrectInstruments = new Set()
        this.countInstruments(game)
    }

    countInstruments(game) {
        this.instruments = game.querySelectorAll('[data-correct="1"]').length
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
        console.log(game)
        if (game.selectedInstruments.size === game.instruments && game.incorrectInstruments.size === 0) {
            console.log(1)
            game.success = true
        }
    }

}