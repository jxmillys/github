function adicionarLembrete() {
    var medicamento = document.getElementById("medicamento").value;
    var dosagem = document.getElementById("dosagem").value;
    var frequencia = document.getElementById("frequencia").value;
    var horario = document.getElementById("horario").value;
  
    var novoLembrete = document.createElement("div");
    novoLembrete.className = "lembrete";
    var lembreteHTML = `
      <h3>${medicamento}</h3>
      <p>Dosagem: ${dosagem}</p>
      <p>Frequência: ${frequencia} vezes ao dia</p>
      <p>Horário: ${horario}</p>
      <button onclick="removerLembrete(this)">Remover</button>
    `;
    novoLembrete.innerHTML = lembreteHTML;
  
    document.getElementById("lembretes").appendChild(novoLembrete);
  }
  function removerLembrete(elemento) {
    var lembrete = elemento.parentNode;
    lembrete.parentNode.removeChild(lembrete);
  }