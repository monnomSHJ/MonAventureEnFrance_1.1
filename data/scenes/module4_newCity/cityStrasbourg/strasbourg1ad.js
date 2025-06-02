import { state } from "../../../../script.js";
import { renderQuest } from "../../../../statusBar.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";
import { createTransportQuizOptions } from "../../../sceneHelpers.js";

export function getStrasbourg1adScene() {

    return {
        id: "strasbourg1ad",
        background_img: "assets/images/inTrain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `🚈 Conducteur de train`, text: `Nous vous remercions de votre patience et de votre compréhension.`, sound: "assets/sounds/module4/trainEmissionSpeak1.wav" },
            { speaker: `🚈 Conducteur de train`, text: `Le train partira dans une minute.`, sound: "assets/sounds/module4/trainEmissionSpeak2.wav" },
            { speaker: `🚈 Conducteur de train`, text: `Avant de le départ, n'oubliez surtout pas d'attacher votre ceinture de sécurité.`, sound: "assets/sounds/module4/trainEmissionSpeak3.wav" },
            { speaker: `🚈 Conducteur de train`, text: `Il est interdit de fumer ou de vapoter dans tout le train.`, sound: "assets/sounds/module4/trainEmissionSpeak4.wav" },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 안내 방송에서 설명하는 내용으로 옳지 않은 것은?",
                    options: () => createTransportQuizOptions("기차")
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