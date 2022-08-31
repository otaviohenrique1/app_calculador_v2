"use strict";
const campo_nome = document.getElementById("campo_nome");
const campo_a = document.getElementById("campo_a");
const campo_b = document.getElementById("campo_b");
const campo_c = document.getElementById("campo_c");
const resultado = document.getElementById("resultado");
const btn_calcular = document.getElementById("btn_calcular");
const btn_limpar = document.getElementById("btn_limpar");
const btn_ajuda = document.getElementById("btn_ajuda");
function CalculaMedida(a, b, c) {
    return (b * c) / a;
}
function CalculaMedidaExpressao(r, c, n) {
    return `${n} => ${c} => ${r.toFixed(2)} => ${(Math.round(r).toFixed(2))}`;
}
btn_calcular === null || btn_calcular === void 0 ? void 0 : btn_calcular.addEventListener("click", (event) => {
    let campoNome = campo_nome === null || campo_nome === void 0 ? void 0 : campo_nome.value;
    let campoA = campo_a === null || campo_a === void 0 ? void 0 : campo_a.value;
    let campoB = campo_b === null || campo_b === void 0 ? void 0 : campo_b.value;
    let campoC = campo_c === null || campo_c === void 0 ? void 0 : campo_c.value;
    let resultadoCalculaMedida = CalculaMedida(Number(campoA), Number(campoB), Number(campoC));
    let resultadoCalculaMedidaExpressao = CalculaMedidaExpressao(resultadoCalculaMedida, Number(campoC), String(campoNome));
    if (!resultado)
        return;
    resultado.innerText = resultadoCalculaMedidaExpressao;
    /*
    // @ts-expect-error
    resultado?.innerText = resultadoCalculaMedidaExpressao;
    */
});
btn_limpar === null || btn_limpar === void 0 ? void 0 : btn_limpar.addEventListener("click", (e) => {
    if (!resultado)
        return;
    if (!campo_nome)
        return;
    if (!campo_a)
        return;
    if (!campo_b)
        return;
    if (!campo_c)
        return;
    campo_nome.value = "";
    campo_a.value = "";
    campo_b.value = "";
    campo_c.value = "";
    resultado.innerText = "0,0";
});
btn_ajuda === null || btn_ajuda === void 0 ? void 0 : btn_ajuda.addEventListener("click", (e) => {
    alert(`
    App calculador V2
    a --- c
    b --- x
    x=(b*c)/a
  `);
});
