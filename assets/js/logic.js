// access keys for  light/dark button
const  themeSwitcher = document.querySelector('#mode-toggle')
const container = document.querySelector('main')
const footer = document.querySelector('footer')
const header = document.querySelector('header')

let mode = 'dark';
// listen for click
themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    footer.setAttribute('class', 'light');
    header.setAttribute('class', 'light');
  } // if mode is light make dark
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    footer.setAttribute('class', 'dark');
    header.setAttribute('class', 'dark');
  }
});
