class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div"); //A div mais importante, onde as outras divs ficam.
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        //Cria as tags do card left para colocar dentro dele.
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous") //Colocando os atributos dinamicamente

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        //Coloca as tags dentro da DIV
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //Construção do conteúdo da Div da direita
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/imgDefault.jpg"
        newsImage.alt = "Foto da Notícia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);//Sempre um grudado no outro.
        componentRoot.appendChild(cardRight);
        
        return componentRoot;
    }

    styles(){

    }
}

customElements.define("card-news", Cardnews);