const button = document.querySelector('#button');
const nav = document.querySelector('#nav')
const img = document.querySelector('#icon')

button.addEventListener('click', ( ) => {
  nav.classList.toggle('open')
  if (nav.classList.contains('open')) {
    console.log('ola')
    img.setAttribute('src', './assets/images/icon-menu-close.svg')
    return
  }
  img.setAttribute('src', './assets/images/icon-menu.svg')
})

