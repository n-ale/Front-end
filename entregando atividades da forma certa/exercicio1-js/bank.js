// ============================================
// EX 04 — INFINITY BANK
// Simulador de vendas parceladas
// ============================================

document.getElementById('btn-bank').addEventListener('click', calcularBank);


function calcularBank() {
  const bandeira = document.getElementById('bandeira').value;
  const valor    = parseFloat(document.getElementById('valor-venda').value);
  const parcelas = parseInt(document.getElementById('parcelas').value);

  const result  = document.getElementById('bank-result');
  const summary = document.getElementById('bank-summary');

  // Reseta estado anterior
  result.className = 'result';

  // Valida campos
  if (!bandeira || isNaN(valor) || valor <= 0 || isNaN(parcelas)) {
    result.classList.add('show', 'error');
    summary.innerHTML = 'Preencha todos os campos corretamente.';
    return;
  }

  // Define a taxa da bandeira com switch
  let taxaBandeira = 0;
  let nomeBandeira = '';

  switch (bandeira) {
    case 'visa':
      taxaBandeira = 0.02;    // 2%
      nomeBandeira = 'Visa';
      break;
    case 'master':
      taxaBandeira = 0.0185;  // 1,85%
      nomeBandeira = 'Mastercard';
      break;
    case 'elo':
      taxaBandeira = 0.03;    // 3%
      nomeBandeira = 'Elo';
      break;
  }

  // Cálculos
  const valorTaxa    = valor * taxaBandeira;                  // Taxa da bandeira
  const juros        = valor * (0.0035 * parcelas);           // Juros simples: 0,35% ao mês
  const mensalidade  = 12.50 * parcelas;                      // R$12,50 por parcela
  const valorTotal   = valor + valorTaxa + juros + mensalidade;
  const valorParcela = valorTotal / parcelas;

  // Formata valores em Real brasileiro
  const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Monta o resumo
  result.classList.add('show', 'neutral');
  summary.innerHTML = `
    <div class="stat-row">
      <span class="stat-label">Bandeira</span>
      <span class="stat-value">${nomeBandeira} (${(taxaBandeira * 100).toFixed(2)}%)</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Valor da venda</span>
      <span class="stat-value">${fmt(valor)}</span>
    </div>

    <hr class="divider-line">

    <div class="stat-row">
      <span class="stat-label">Taxa da bandeira</span>
      <span class="stat-value" style="color:var(--red)">${fmt(valorTaxa)}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Juros (${parcelas}x × 0,35%)</span>
      <span class="stat-value" style="color:var(--red)">${fmt(juros)}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Mensalidade (${parcelas}x R$12,50)</span>
      <span class="stat-value" style="color:var(--red)">${fmt(mensalidade)}</span>
    </div>

    <hr class="divider-line">

    <div class="stat-row">
      <span class="stat-label">Valor total</span>
      <span class="stat-value">${fmt(valorTotal)}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Valor por parcela</span>
      <span class="stat-value" style="color:var(--accent4); font-size:16px">
        ${parcelas}x de ${fmt(valorParcela)}
      </span>
    </div>
  `;
}
