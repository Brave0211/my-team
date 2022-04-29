const elCard = document.querySelector('.director-card')
const elCardBtn = document.querySelectorAll('.director-card__toggler')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.director-card').classList.toggle('director-card--back-visible')
  })
})