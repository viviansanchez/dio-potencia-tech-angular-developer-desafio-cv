const backgroundColor = document.querySelector('body')
const cardsBackgroundColor = document.querySelectorAll('.w3-white')
const headingsTextColor = document.querySelectorAll('.w3-text-grey')
const rightColumnCards = document.querySelectorAll('.w3-twothird div')
const secondaryColor = document.querySelectorAll('.w3-purple')
const secondaryTextColor = document.querySelectorAll('.w3-text-purple')
const btnWrapper = document.getElementById('switch')
const btn = document.querySelector('.btn')

btn.addEventListener('click', toggleMode)

function toggleMode () {
  toggleBodyColor()
  toggleCardsBackgroundColor()
  toggleHeadingsTextColor()
  toggleRightColumnTextColor()
  toggleSecondaryColor()
  toggleSecondaryTextColor()

  btnWrapper.classList.toggle('dark-mode')
}

function toggleBodyColor() {
  backgroundColor.classList.toggle('w3-light-grey')
  backgroundColor.classList.toggle('w3-dark-gray')
}

function toggleCardsBackgroundColor() {
  cardsBackgroundColor.forEach(c => {
    c.classList.toggle('w3-white')
    c.classList.toggle('w3-grey')
  })
}

function toggleHeadingsTextColor() {
  headingsTextColor.forEach(h => {
    h.classList.toggle('w3-text-grey')
    h.classList.toggle('w3-text-white')
  })
}

function toggleRightColumnTextColor() {
  rightColumnCards.forEach(c => {
    c.classList.toggle('w3-text-white')
  })
  
}

function toggleSecondaryColor() {
  secondaryColor.forEach(c => {
    c.classList.toggle('w3-purple')
    c.classList.toggle('w3-red')
  })
}

function toggleSecondaryTextColor() {
  secondaryTextColor.forEach(t => {
    t.classList.toggle('w3-text-purple')
    t.classList.toggle('w3-text-red')
  })
}

