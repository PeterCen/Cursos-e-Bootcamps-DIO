class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"}); //Cria uma sombra que pode interagir com outro javascript
        shadow.innerHTML = "<h1>Hello World</h1>"
    }
}

customElements.define('card-news', CardNews)