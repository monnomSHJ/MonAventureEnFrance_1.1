import { state } from "../../../../script.js";
import { getLyon2aScene } from "./lyon2a.js";
import { getLyon2bScene } from "./lyon2b.js";
import { getLyon2cScene } from "./lyon2c.js";
import { getEnd1Scene } from "../end1.js";
import { createCityExploreSceneFunctions } from "../../../sceneHelpers.js";

export function getLyon2Scene() {
    if (!state.visitedLyonSpots) {
        state.visitedLyonSpots = new Set();
    }

    const destinations = {
        "Musée Cinéma et Miniature": getLyon2aScene,
        "Basilique Notre-dame de Fourvière": getLyon2bScene,
        "Parc de la Tête d'Or": getLyon2cScene
    };

    const { makeOptions, insertIntroLineIfAllVisited } = createCityExploreSceneFunctions(
        destinations, "visitedLyonSpots", getEnd1Scene
    )

    return {
        id: "lyon2",
        background_img: "assets/images/lyonStreet.jpg",
        narration: "",
        lines:
            state.visitedLyonSpots.size === Object.keys(destinations).length
            ? [ ...insertIntroLineIfAllVisited() ]
            : state.visitedLyonSpots.size > 0
            ? [
                {speaker: ``, text: ``,
                    choices: {
                        prompt: `어디로 가볼까?`,
                        options: () => makeOptions()
                    }
                }
            ]

            : [
            { speaker: `👤 ${state.userName}`, text: `리옹에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 리옹에서 가볼 만한 곳들을 찾아보았는데...` },
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