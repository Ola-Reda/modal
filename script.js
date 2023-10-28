const showBtns = document.querySelectorAll('.show-btn')
const box = document.querySelector('.box')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')


showBtns.forEach(btn => {
    btn.onclick = showModal
})
//openModal function
function showModal () {
    box.classList.add('show')
    overlay.classList.add('show')
}

closeBtn.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)
//closeModal function
function hideModal () {
    box.classList.remove('show')
    overlay.classList.remove('show')
}