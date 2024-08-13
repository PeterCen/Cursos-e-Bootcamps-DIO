type Hero = {
    nome: string;
    vulgo: string;
    telefone: number;
};

function ligarPara(heroi: Hero){ //Primeiro vem nome do objt e depois o tipo
    console.log("Ligando para: ", heroi.telefone);
    //return "Ligando para: " + heroi.telefone;
}

ligarPara({ //Aparece o erro no tempo de desenvolvimento.
    nome: "Felipe",
    vulgo: "Capitão América",
    telefone: 11317133888,
})
