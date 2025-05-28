import { state } from "../../script.js";
import { getBordeaux2aScene } from "./bordeaux2a.js";
import { getBordeaux2bScene } from "./bordeaux2b.js";
import { getBordeaux2cScene } from "./bordeaux2c.js";
import { getEnd1Scene } from "./end1.js";

export function getBordeaux2Scene() {
    if (!state.visitedBordeauxSpots) {
        state.visitedBordeauxSpots = new Set();
    }

    const destinations = {
        "Cathédrale Saint-André de Bordeaux": getBordeaux2aScene,
        "Place de la Bourse": getBordeaux2bScene,
        "La Cité du Vin": getBordeaux2cScene
    };

    function makeOptions() {
        return Object.keys(destinations).map(label => ({
            label,
            insertLines: [
                { speaker: `👤 ${state.userName}`, text: `${label}에 가보자.` }
            ],
            customAction: () => {
                state.visitedBordeauxSpots.add(label);
                state.nextScene = destinations[label]();
            },
            disabled: state.visitedBordeauxSpots.has(label)
        }));
    };

    function insertIntroLineIfAllVisited() {
        if (state.visitedBordeauxSpots?.size === 3) {
            return [
                { speaker: `👤 ${state.userName}`, text: `보르도에서 가보고 싶은 곳을 모두 다녀왔다.` },
                { speaker: `👤 ${state.userName}`, text: `이제 근처에서 저녁 식사라도 해야겠는 걸...` },
                { speaker: `👤 ${state.userName}`, text: `처음 프랑스에 올 때에는 모든 것들이 낯설고 두려울 거라고만 생각했는데,` },
                { speaker: `👤 ${state.userName}`, text: `막상 와서 부딪혀보니 생각보다 할 만하잖아?` },
                { speaker: `👤 ${state.userName}`, text: `열심히 프랑스어를 공부한 보람이 있는 듯. 하하하.` },
                { speaker: `👤 ${state.userName}`, text: `(꼬르륵)` },
                { speaker: `👤 ${state.userName}`, text: `아 진짜 배고프다. 밥 먹으러 가야지.` },
            ];
                
        }
        return [];
    }

    return {
        id: "bordeaux2",
        background_img: "assets/images/bordeauxStreet.jpg",
        narration: "",
        lines:
            state.visitedBordeauxSpots.size === 3
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