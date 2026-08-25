// Arquivo de apoio, o foco pedagógico deste exercício é a semântia do HTML.
document.querySelectorAll('nav a').forEach((link) => {  
  link.addEventListener('click', () => {
      document.querySelectorAll('nav a[aria-current]').forEach((item) => item.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'location');
    });
  });
  console.info('Exercício 01 carregado.');