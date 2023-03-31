import * as components from "./components/card/index";
import MyCard, { Attribute } from "./components/card/index";
import { people } from "./swapi";

class AppContainer extends HTMLElement {
    profiles: MyCard[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        people.forEach((user) => {
            const profileCard = this.ownerDocument.createElement(
                "my-card"
                ) as MyCard;
                profileCard.setAttribute(Attribute.name, user.name);
                profileCard.setAttribute(Attribute.height, user.height);
                profileCard.setAttribute(Attribute.mass, user.mass);
                profileCard.setAttribute(Attribute.hair_color, user.hair_color);
                profileCard.setAttribute(Attribute.skin_color, user.skin_color);
                profileCard.setAttribute(Attribute.eye_color, user.eye_color);
                profileCard.setAttribute(Attribute.birth_year, user.birth_year);
                profileCard.setAttribute(Attribute.gender, user.gender);
                profileCard.setAttribute(Attribute.homeworld, user.homeworld);
                this.profiles.push(profileCard);
            });
        }
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;
                
                this.profiles.forEach((profile) => {
                    this.shadowRoot?.appendChild(profile);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);