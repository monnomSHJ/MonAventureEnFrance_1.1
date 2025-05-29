import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";
import { createTransportQuizOptions } from "../sceneHelpers.js";

export function getStrasbourg1bcScene() {

    return {
        id: "strasbourg1bc",
        background_img: "assets/images/inBus.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },,
            { speaker: `🚈 Conducteur de bus`, text: `Le bus part dans une minute.` },
            { speaker: `🚈 Conducteur de bus`, text: `Avant de partir, n'oubliez jamais de mettre votre ceinture.` },
            { speaker: `🚈 Conducteur de bus`, text: `Il ne faut fumer ni cigarette ni vapoteuse dans le bus.` },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 옳지 않은 것은?",
                    options: () => createTransportQuizOptions("버스")
                }
             },
             { speaker: `📢`, text: `문제 푸느라 고생 많으셨습니다. 🥳` },
             { speaker: `📢`, text: `스트라스부르에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "스트라스부르메인",
            renderQuest();
            return getStrasbourg2Scene();
        }
    }
}