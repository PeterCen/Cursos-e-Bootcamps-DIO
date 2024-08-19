let retorno: void;
let retornoView: any = false;


//Objeto - sem previsibilidade
let produto:object = {
    name:"Felipe",
    cidade:"SP",
    idade: 30,
}

//Objeto com previsibilidade
type produtoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuProduto: produtoLoja = {
    nome: "Tênis",
    preco: 32,
    unidades: 10,
}

//Arrays
let dados:string[] = ["Pedro", "Centurion"];
let dados2: Array<string> = ["Pedro", "Centurion"];


//Arrays com vários tipos
let infos: (string | number)[] = ["Pedro", 10];
let infos2: Array<string | number> = ["Pedro", 10];


//Tuplas (Respeita a ordem e os tipos, diferente dos Arrays)
let boleto:[string, number, number] = ["Agua conta", 199.9, 200];


//Trabalhando com datas.
let aniversario:Date = new Date("2022-12-01 5:00");

//console.log(aniversario.toString());


//Funções
function addNumber(x: number, y:number) :number{
    return x + y;
}

let soma: number = addNumber(4, 7);
console.log(soma);

function addHello(name: string): string{
    return `Hello ${name}`;
}
console.log(addHello("Pedro"));

function callToPhone(phone:number | string): number | string{ //Aceita numero ou string. E retorna tipo number ou string.
    return phone;
}

async function getDataBase(id: number): Promise<string> {
    return "felipe";
}



//Interfaces (type x interface)
type robot = { //Tipar objetos
    id:number,
    name:string,
};

const bot:robot = {
    id:1,
    name: "Megaman",
}

interface robot2 { //Quando for trabalhar com classes 
    id:number,
    name:string,
};