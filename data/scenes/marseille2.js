import { state } from "../../script.js";
import { getMarseille2aScene } from "./marseille2a.js";
import { getMarseille2bScene } from "./marseille2b.js";
import { getMarseille2cScene } from "./marseille2c.js";
import { getEnd1Scene } from "./end1.js";
import { createCityExploreSceneFunctions } from "../sceneHelpers.js";

export function getMarseille2Scene() {
    if (!state.visitedMarseilleSpots) {
        state.visitedMarseilleSpots = new Set();
    }

    const destinations = {
        "Musée des Civilisations de l'Europe et de la Méditerranée": getMarseille2aScene,
        "Basilique Notre-dame de la Garde": getMarseille2bScene,
        "Le Vieux-Port de Marseille": getMarseille2cScene
    };

    const { makeOptions, insertIntroLineIfAllVisited } = createCityExploreSceneFunctions(
        destinations, "visitedMarseilleSpots", getEnd1Scene
    )

    return {
        id: "marseille2",
        background_img: "assets/images/marseilleStreet.jpg",
        narration: "",
        lines:
            state.visitedMarseilleSpots.size === Object.keys(destinations).length
            ? [ ...insertIntroLineIfAllVisited() ]
            : state.visitedMarseilleSpots.size > 0
            ? [
                {speaker: ``, text: ``,
                    choices: {
                        prompt: `어디로 가볼까?`,
                        options: () => makeOptions()
                    }
                }
            ]

            : [
            { speaker: `👤 ${state.userName}`, text: `마르세유에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 마르세유에서 가볼 만한 곳들을 찾아보았는데...` },
            { speaker: `👤 ${state.userName}`, text: `어디로 가볼까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: `어디로 가볼까?`,
                    options: () => makeOptions()
                }
            }
        ],

        nextScene: () => {
            const next = state.nextScene || getEnd1Scene();
            state.nextScene = null;
            return next;
        }
    };
}