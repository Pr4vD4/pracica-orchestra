export function startSelector() {
    const instruments = document.querySelectorAll('.instrument')
    instruments.forEach((item) => {
        item.addEventListener('touchstart', toggleSelect)
    })

    function toggleSelect(event) {
        event.target.classList.toggle('selected')
    }



}