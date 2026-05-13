// ============================================
// EX 03 — MÉDIA ESCOLAR
// ============================================

document.getElementById('btn-media').addEventListener('click', calcularMedia);


function calcularMedia() {
  const nome = document.getElementById('aluno-nome').value.trim();

  // Converte os valores para Number antes de operar
  const n1 = Number(document.getElementById('nota1').value);
  const n2 = Number(document.getElementById('nota2').value);
  const n3 = Number(document.getElementById('nota3').value);

  const result = document.getElementById('media-result');
  const icon   = document.getElementById('media-icon');
  const label  = document.getElementById('media-label');
  const valor  = document.getElementById('media-valor');
  const msg    = document.getElementById('media-msg');

  // Reseta estado anterior
  result.className = 'result';

  // Valida campos
  const campoNotas = [
    document.getElementById('nota1').value,
    document.getElementById('nota2').value,
    document.getElementById('nota3').value,
  ];

  if (!nome || campoNotas.some(v => v === '')) {
    result.classList.add('show', 'error');
    icon.textContent  = '⚠';
    label.textContent = 'Campos incompletos';
    valor.textContent = '';
    msg.textContent   = 'Preencha o nome e as três notas.';
    return;
  }

  // Calcula a média aritmética simples
  const media = (n1 + n2 + n3) / 3;

  // Determina a situação e o estilo com base na média
  if (media >= 7.0) {
    // Aprovado → azul
    result.classList.add('show', 'info');
    icon.textContent  = '🎓';
    label.textContent = `${nome} — APROVADO`;
    valor.textContent = `Média: ${media.toFixed(2)}`;
    msg.textContent   = 'Parabéns! Média suficiente para aprovação.';

  } else if (media >= 4.0) {
    // Exame → verde claro
    const faltam = (10 - media).toFixed(2);
    result.classList.add('show', 'warning');
    icon.textContent  = '📋';
    label.textContent = `${nome} — EXAME FINAL`;
    valor.textContent = `Média: ${media.toFixed(2)}`;
    msg.textContent   = `Faltam ${faltam} pontos para atingir a nota máxima (10).`;

  } else {
    // Reprovado → vermelho
    result.classList.add('show', 'error');
    icon.textContent  = '✗';
    label.textContent = `${nome} — REPROVADO`;
    valor.textContent = `Média: ${media.toFixed(2)}`;
    msg.textContent   = 'Média abaixo de 4,0. Reprovado por nota.';
  }
}
