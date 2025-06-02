import { state } from "../../../../script.js";
import { renderQuest } from "../../../../statusBar.js";
import { getLyon2Scene } from "./lyon2.js";
import { createTransportQuizOptions } from "../../../sceneHelpers.js";

export function getLyon1bcScene() {

    return {
        id: "lyon1bc",
        background_img: "assets/images/inBus.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `🚈 Conducteur de bus`, text: `Le bus partira dans une minute.`, sound: "assets/sounds/module4/busEmissionSpeak1.wav" },
            { speaker: `🚈 Conducteur de bus`, text: `Avant de le départ, n'oubliez surtout pas d'attacher votre ceinture de sécurité.`, sound: "assets/sounds/module4/busEmissionSpeak2.wav" },
            { speaker: `🚈 Conducteur de bus`, text: `Il ne faut fumer ni cigarette ni vapoteuse dans le bus.`, sound: "assets/sounds/module4/busEmissionSpeak3.wav" },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 옳지 않은 것은?",
                    options: () => createTransportQuizOptions("버스")
                }
             },
             { speaker: `📢`, text: `문제 푸느라 고생 많으셨습니다. 🥳` },
             { speaker: `📢`, text: `리옹에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "리옹메인",
            renderQuest();
            return getLyon2Scene();
        }
    }
}