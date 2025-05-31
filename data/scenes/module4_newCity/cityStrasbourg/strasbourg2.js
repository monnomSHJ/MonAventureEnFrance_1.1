import { state } from "../../../../script.js";
import { getStrasbourg2aScene } from "./strasbourg2a.js";
import { getStrasbourg2bScene } from "./strasbourg2b.js";
import { getStrasbourg2cScene } from "./strasbourg2c.js";
import { getEnd1Scene } from "../../common/end1.js";
import { createCityExploreSceneFunctions } from "../../../sceneHelpers.js";

export function getStrasbourg2Scene() {
    if (!state.visitedStrasbourgSpots) {
        state.visitedStrasbourgSpots = new Set();
    }

    const destinations = {
        "Place Kléber": getStrasbourg2aScene,
        "Cathédrale Notre-Dame de Strasbourg": getStrasbourg2bScene,
        "La Petite France": getStrasbourg2cScene
    };

    const { makeOptions, insertIntroLineIfAllVisited } = createCityExploreSceneFunctions(
        destinations, "visitedStrasbourgSpots", getEnd1Scene
    )

    return {
        id: "strasbourg2",
        background_img: "assets/images/strasbourgStreet.jpg",
        narration: "",
        lines:
            state.visitedStrasbourgSpots.size === Object.keys(destinations).length
            ? [ ...insertIntroLineIfAllVisited() ]
            : state.visitedStrasbourgSpots.size > 0
            ? [
                {speaker: ``, text: ``,
                    choices: {
                        prompt: `어디로 가볼까?`,
                        options: () => makeOptions()
                    }
                }
            ]

            : [
            { speaker: `👤 ${state.userName}`, text: `스트라스부르에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 스트라스부르에서 가볼 만한 곳들을 찾아보았는데...` },
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