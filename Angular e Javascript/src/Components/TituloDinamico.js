class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do componente <h1>Pedro</h1>
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'Pedro';
        
        //estilizar o component (Se comporta como CSS)
        const style = document.createElement("style");
        //Escreve como se fosse no CSS
        style.textContent = ` 
            h1{
            color: red;
            }
        `;

        //envia para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);