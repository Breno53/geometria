// Círculo
function calcularCirculo() {
  let r = parseFloat(document.getElementById("raio").value);
  if (isNaN(r)) return;
  let area = Math.PI * r * r;
  let perimetro = 2 * Math.PI * r;
  document.getElementById("resultadoCirculo").innerText =
    `Área: ${area.toFixed(2)} | Perímetro: ${perimetro.toFixed(2)}`;
}

// Quadrado
function calcularQuadrado() {
  let lado = parseFloat(document.getElementById("ladoQuadrado").value);
  if (isNaN(lado)) return;
  let area = lado * lado;
  let perimetro = 4 * lado;
  document.getElementById("resultadoQuadrado").innerText =
    `Área: ${area} | Perímetro: ${perimetro}`;
}

// Retângulo
function calcularRetangulo() {
  let base = parseFloat(document.getElementById("baseRet").value);
  let altura = parseFloat(document.getElementById("alturaRet").value);
  if (isNaN(base) || isNaN(altura)) return;
  let area = base * altura;
  let perimetro = 2 * (base + altura);
  document.getElementById("resultadoRetangulo").innerText =
    `Área: ${area} | Perímetro: ${perimetro}`;
}

// Losango
function calcularLosango() {
  let D = parseFloat(document.getElementById("diagMaior").value);
  let d = parseFloat(document.getElementById("diagMenor").value);
  let lado = parseFloat(document.getElementById("ladoLos").value);
  if (isNaN(D) || isNaN(d) || isNaN(lado)) return;
  let area = (D * d) / 2;
  let perimetro = 4 * lado;
  document.getElementById("resultadoLosango").innerText =
    `Área: ${area} | Perímetro: ${perimetro}`;
}

// Triângulo
function calcularTriangulo() {
  let base = parseFloat(document.getElementById("baseTri").value);
  let altura = parseFloat(document.getElementById("alturaTri").value);
  let l1 = parseFloat(document.getElementById("lado1").value);
  let l2 = parseFloat(document.getElementById("lado2").value);
  let l3 = parseFloat(document.getElementById("lado3").value);
  if (isNaN(base) || isNaN(altura) || isNaN(l1) || isNaN(l2) || isNaN(l3)) return;
  let area = (base * altura) / 2;
  let perimetro = l1 + l2 + l3;
  document.getElementById("resultadoTriangulo").innerText =
    `Área: ${area} | Perímetro: ${perimetro}`;
}
