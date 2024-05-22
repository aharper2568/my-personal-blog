// access keys for button
const  themeSwitcher = document.querySelector('#mode-toggle')
const container = document.querySelector('main')

let mode = 'dark';
// listen for click
themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  } // if mode is light make dark
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark')
  }
});