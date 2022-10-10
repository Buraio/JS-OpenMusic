function activateDarkMode() {
  const html            = document.querySelector('html');
  const body            = document.querySelector('body');
  const lightDarkButton = document.querySelector('.lightDarkMode');
  const lightDarkImg    = lightDarkButton.firstChild;

  const darkModeUserPreference = localStorage.getItem('darkmode');

  if (darkModeUserPreference) {
    html.classList.add('darkMode');
    body.classList.add('text-white');
    lightDarkImg.src = './assets/icons/lightMode.svg';
  }

  lightDarkButton.addEventListener('click', () => {

    html.classList.toggle('darkMode');
    body.classList.toggle('text-white');
    
  if (!darkModeUserPreference) {
    localStorage.setItem('darkmode', 'on');
  }
  if (darkModeUserPreference) {
    localStorage.removeItem('darkmode');
  }

  if (body.classList.contains('text-white')) {
    lightDarkImg.src = './assets/icons/lightMode.svg';
  }
  else {
    lightDarkImg.src = './assets/icons/darkMode.svg';
  }

  })

}

activateDarkMode();