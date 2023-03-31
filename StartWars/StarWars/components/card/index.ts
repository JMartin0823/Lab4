export enum Attribute {
    "name" = "name",
    "height" = "height",
    "mass" = "mass",
    "hair_color" = "hair_color",
    "skin_color" = "skin_color",
    "eye_color" = "eye_color",
    "birth_year" = "birth_year",
    "gender" = "gender",
    "homeworld" = "homeworld"
}

class MyCard extends HTMLElement {
    name?: string;
    height?: number;
    mass?: number;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: number;
    gender?: string;
    homeworld?: string;

    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            height: null,
            mass: null,
            hair_color: null,
            skin_color: null,
            eye_color: null,
            birth_year: null,
            gender: null,
            homeworld: null
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attribute.mass:
                this.mass = newValue ? Number(newValue) : undefined;
                break;
                case Attribute.birth_year:
                this.birth_year = newValue ? Number(newValue) : undefined;
                break;
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>
                <h1>${this.name}</h1>
                <h1>${this.height}</h1>
                <h1>${this.mass}</h1>
                <h1>${this.hair_color}</h1>
                <h1>${this.skin_color}</h1>
                <h1>${this.eye_color}</h1>
                <h1>${this.birth_year}</h1>
                <h1>${this.gender}</h1>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-card", MyCard);
export default MyCard;
    