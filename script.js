
function clicar() {
    document.write('Parabéns, essa foi sua primeira interação com JS!')
  }
  
  window.onload = function() {
    let botao = document.getElementById("button");
  
    botao.onclick = function() {
    clicar();
    };
  }
