class User{
    nome: string = 'Pedro'
    idade: number = 21

    constructor(nome: string, idade:number){
        this.nome = nome
        this.idade = idade
    }

    showDados(){
        console.log(this.nome)
        console.log(this.idade)
    }
}

const user = new User('Pedro', 32)

user.showDados()