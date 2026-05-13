// ============================================
// EX 02 — CONVERSOR DE TEMPERATURA
// Funciona nos dois sentidos em tempo real
// ============================================

const celsiusInput    = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const tempResult      = document.getElementById('temp-result');
const tempValue       = document.getElementById('temp-value');

// Quando digitar em Celsius → atualiza Fahrenheit
celsiusInput.addEventListener('input', function () {
  const c = parseFloat(this.value);

  if (isNaN(c)) {
    fahrenheitInput.value = '';
    tempResult.className  = 'result';
    return;
  }

  // Fórmula: F = (C * 9/5) + 32
  const f = (c * 9 / 5) + 32;
  fahrenheitInput.value = f.toFixed(2);

  exibirResultado(c.toFixed(2), f.toFixed(2));
});

// Quando digitar em Fahrenheit → atualiza Celsius
fahrenheitInput.addEventListener('input', function () {
  const f = parseFloat(this.value);

  if (isNaN(f)) {
    celsiusInput.value   = '';
    tempResult.className = 'result';
    return;
  }

  // Fórmula: C = (F - 32) * 5/9
  const c = (f - 32) * 5 / 9;
  celsiusInput.value = c.toFixed(2);

  exibirResultado(c.toFixed(2), f.toFixed(2));
});


// Exibe a caixa de resultado com os dois valores
function exibirResultado(c, f) {
  tempResult.className  = 'result show warning';
  tempValue.textContent = `${c} °C = ${f} °F`;
}
