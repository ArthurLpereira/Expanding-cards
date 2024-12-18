const cards = document.querySelectorAll('.cards')

cards.forEach(card =>{
    card.addEventListener('click', ()=>{
        removeClasses()
        card.classList.add('active')
    })
})

function removeClasses (){
    cards.forEach(card =>{
        card.classList.remove('active')
    })
}