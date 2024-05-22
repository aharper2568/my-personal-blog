const  themeSwitcher = document.querySelector('#mode-toggle')
const container = document.querySelector('main')

let mode = 'dark';

themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark')
  }
});