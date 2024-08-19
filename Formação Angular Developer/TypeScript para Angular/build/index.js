"use strict";
let retorno;
let retornoView = false;
//Objeto - sem previsibilidade
let produto = {
    name: "Felipe",
    cidade: "SP",
    idade: 30,
};
let meuProduto = {
    nome: "Tênis",
    preco: 32,
    unidades: 10,
};
//Arrays
let dados = ["Pedro", "Centurion"];
let dados2 = ["Pedro", "Centurion"];
//Arrays com vários tipos
let infos = ["Pedro", 10];
let infos2 = ["Pedro", 10];
//Tuplas (Respeita a ordem e os tipos, diferente dos Arrays)
let boleto = ["Agua conta", 199.9, 200];
//Trabalhando com datas.
let aniversario = new Date("2022-12-01 5:00");
//console.log(aniversario.toString());
//Funções
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addHello(name) {
    return `Hello ${name}`;
}
console.log(addHello("Pedro"));
