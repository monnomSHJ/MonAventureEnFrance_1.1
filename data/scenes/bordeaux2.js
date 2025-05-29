import { state } from "../../script.js";
import { getBordeaux2aScene } from "./bordeaux2a.js";
import { getBordeaux2bScene } from "./bordeaux2b.js";
import { getBordeaux2cScene } from "./bordeaux2c.js";
import { getEnd1Scene } from "./end1.js";
import { createCityExploreSceneFunctions } from "../sceneHelpers.js";

export function getBordeaux2Scene() {
    if (!state.visitedBordeauxSpots) {
        state.visitedBordeauxSpots = new Set();
    }

    const destinations = {
        "Cathédrale Saint-André de Bordeaux": getBordeaux2aScene,
        "Place de la Bourse": getBordeaux2bScene,
        "La Cité du Vin": getBordeaux2cScene
    };

    const { makeOptions, insertIntroLineIfAllVisited } = createCityExploreSceneFunctions(
        destinations, "visitedLyonSpots", getEnd1Scene
    );

    return {
        id: "bordeaux2",
        background_img: "assets/images/bordeauxStreet.jpg",
        narration: "",
        lines:
            state.visitedBordeauxSpots.size === Object.keys(destinations).length
            ? [ ...insertIntroLineIfAllVisited() ]
            : state.visitedBordeauxSpots.size > 0
            ? [
                {speaker: ``, text: ``,
                    choices: {
                        prompt: `어디로 가볼까?`,
                        options: () => makeOptions()
                    }
                }
            ]

            : [
            { speaker: `👤 ${state.userName}`, text: `보르도에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 보르도에서 가볼 만한 곳들을 찾아보았는데...` },
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