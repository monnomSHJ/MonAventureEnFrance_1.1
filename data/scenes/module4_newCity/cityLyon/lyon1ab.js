import { state } from "../../../../script.js";
import { getLyon1acScene } from "./lyon1ac.js";
import { createPlatformChoiceOptions } from "../../../sceneHelpers.js";

export function getLyon1abScene() {

    return {
        id: "lyon1ab",
        background_img: "assets/images/parisGareDeLyon.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `역에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `정말 시끌벅적 한데?` },
            { speaker: `👤 ${state.userName}`, text: `어디에서 탑승해야 하는지 직원분께 여쭤봐야겠다.` },
            { speaker: `👤 ${state.userName}`, text: `Bonjour, je voudrais aller à Lyon.` },
            { speaker: `👤 Employée`, text: `D'accord. Vous devez aller au quai numéro douze.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `Merci beaucoup.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 Employée`, text: `Avec plaisir. Bon voyage !`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `알맞은 플랫폼으로 가보자.` },
            { speaker: ``, text: ``, 
                choices: {
                    prompt: "어디로 가야 하지?",
                    options: () => createPlatformChoiceOptions("플랫폼")
                }
            },
            { speaker: `👤 ${state.userName}`, text: `기차가 올 때까지 조금만 기다리자.` },
        ],

        nextScene: () => {
            return getLyon1acScene();
        }
    }
}