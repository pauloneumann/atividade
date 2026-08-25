const botaoSair = document.querySelector('#sair');

if (botaoSair) {
  botaoSair.addEventListener('click', () => {
    alent('Ação de saída acionada.');
  });
}
