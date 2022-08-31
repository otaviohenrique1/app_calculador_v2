const campo_nome = document.getElementById("campo_nome") as HTMLInputElement | null;
const campo_a = document.getElementById("campo_a") as HTMLInputElement | null;
const campo_b = document.getElementById("campo_b") as HTMLInputElement | null;
const campo_c = document.getElementById("campo_c") as HTMLInputElement | null;
const resultado = document.getElementById("resultado") as HTMLInputElement | null;
const btn_calcular = document.getElementById("btn_calcular") as HTMLButtonElement | null;
const btn_limpar = document.getElementById("btn_limpar") as HTMLButtonElement | null;
const btn_ajuda = document.getElementById("btn_ajuda") as HTMLButtonElement | null;

function CalculaMedida(a: number, b: number, c: number) {
  return (b * c) / a;
}

function CalculaMedidaExpressao(r: number, c: number, n: string) {
  return `${n} => ${c} => ${r.toFixed(2)} => ${(Math.round(r).toFixed(2))}`
}

btn_calcular?.addEventListener("click", (event: MouseEvent) => {
  let campoNome = campo_nome?.value;
  let campoA = campo_a?.value;
  let campoB = campo_b?.value;
  let campoC = campo_c?.value;
  let resultadoCalculaMedida = CalculaMedida(
    Number(campoA),
    Number(campoB),
    Number(campoC)
  );
  let resultadoCalculaMedidaExpressao = CalculaMedidaExpressao(
    resultadoCalculaMedida,
    Number(campoC),
    String(campoNome)
  );

  if (!resultado) return;
  resultado.innerText = resultadoCalculaMedidaExpressao;
  /*
  // @ts-expect-error
  resultado?.innerText = resultadoCalculaMedidaExpressao;
  */
});

btn_limpar?.addEventListener("click", (e: MouseEvent) => {
  if (!resultado) return;
  if (!campo_nome) return;
  if (!campo_a) return;
  if (!campo_b) return;
  if (!campo_c) return;

  campo_nome.value = "";
  campo_a.value = "";
  campo_b.value = "";
  campo_c.value = "";
  resultado.innerText = "0,0";
});

btn_ajuda?.addEventListener("click", (e: MouseEvent) => {
  alert(`
    App calculador V2
    a --- c
    b --- x
    x=(b*c)/a
  `);
});