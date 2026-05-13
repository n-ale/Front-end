// ============================================
// EX 01 — VALIDADOR DE CPF
// ============================================

// Máscara automática: formata enquanto digita
document.getElementById('cpf-input').addEventListener('input', function () {
  let v = this.value.replace(/\D/g, '').slice(0, 11);

  v = v.replace(/(\d{3})(\d)/, '$1.$2');        // 1º ponto
  v = v.replace(/(\d{3})(\d)/, '$1.$2');        // 2º ponto
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // traço

  this.value = v;
});

// Permite validar com Enter
document.getElementById('cpf-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') validarCPF();
});

// Botão
document.getElementById('btn-cpf').addEventListener('click', validarCPF);


// Calcula um dígito verificador com base nos dígitos e pesos fornecidos
function calcularDigito(digitos, pesos) {
  let soma = 0;
  for (let i = 0; i < pesos.length; i++) {
    soma += digitos[i] * pesos[i];
  }
  const resto = (soma * 10) % 11;
  return resto >= 10 ? 0 : resto;
}


// Formata 11 dígitos no padrão 000.000.000-00
function formatarCPF(raw) {
  return raw
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}


function validarCPF() {
  const raw = document.getElementById('cpf-input').value.replace(/\D/g, '');

  const result    = document.getElementById('cpf-result');
  const icon      = document.getElementById('cpf-icon');
  const label     = document.getElementById('cpf-label');
  const formatted = document.getElementById('cpf-formatted');
  const msg       = document.getElementById('cpf-msg');

  // Reseta estado anterior
  result.className = 'result';

  // Verifica se tem 11 dígitos
  if (raw.length !== 11) {
    result.classList.add('show', 'error');
    icon.textContent      = '✗';
    label.textContent     = 'Entrada inválida';
    formatted.textContent = '';
    msg.textContent       = 'Digite 11 dígitos numéricos.';
    return;
  }

  // Rejeita CPFs com todos os dígitos iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(raw)) {
    result.classList.add('show', 'error');
    icon.textContent      = '✗';
    label.textContent     = 'CPF inválido';
    formatted.textContent = formatarCPF(raw);
    msg.textContent       = 'CPF com todos os dígitos iguais é inválido.';
    return;
  }

  // Converte string em array de números
  const digitos = raw.split('').map(Number);

  // 1º dígito verificador — pesos de 10 a 2
  const pesos1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const d1 = calcularDigito(digitos.slice(0, 9), pesos1);

  // 2º dígito verificador — pesos de 11 a 2
  const pesos2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const d2 = calcularDigito(digitos.slice(0, 10), pesos2);

  // Compara com os dígitos reais do CPF informado
  const valido = d1 === digitos[9] && d2 === digitos[10];

  result.classList.add('show', valido ? 'success' : 'error');
  icon.textContent      = valido ? '✓' : '✗';
  label.textContent     = valido ? 'CPF válido' : 'CPF inválido';
  formatted.textContent = formatarCPF(raw);
  msg.textContent       = valido
    ? `Dígitos verificadores corretos: ${d1} e ${d2}`
    : `Dígitos esperados: ${d1} e ${d2} — encontrados: ${digitos[9]} e ${digitos[10]}`;
}
