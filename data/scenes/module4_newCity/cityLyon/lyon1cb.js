import { state } from "../../../../script.js";
import { getLyon1ccScene } from "./lyon1cc.js";
import { createPlatformChoiceOptions } from "../../../sceneHelpers.js";

export function getLyon1cbScene() {

    return {
        id: "lyon1cb",
        background_img: "assets/images/airportMain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `공항에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `어디에서 탑승해야 하는지 직원분께 여쭤봐야겠다.` },
            { speaker: `👤 ${state.userName}`, text: `Bonjour, je voudrais aller à Lyon.` },
            { speaker: `👤 Employée`, text: `D'accord. Vous devez aller à la porte numéro douze.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `Merci beaucoup.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 Employée`, text: `Avec plaisir. Bon voyage !`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `알맞은 탑승구로 가보자.` },
            { speaker: ``, text: ``, 
                choices: {
                    prompt: "어디로 가야 하지?",
                    options: () => createPlatformChoiceOptions("탑승구")
                }
            },
            { speaker: `👤 ${state.userName}`, text: `탑승 시간이 될 때까지 잠시만 기다리자.` },
        ],

        nextScene: () => {
            return getLyon1ccScene();
        }
    }
}