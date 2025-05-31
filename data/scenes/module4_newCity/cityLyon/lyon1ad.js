import { state } from "../../../../script.js";
import { renderQuest } from "../../../../statusBar.js";
import { getLyon2Scene } from "./lyon2.js";
import { createTransportQuizOptions } from "../../../sceneHelpers.js";

export function getLyon1adScene() {

    return {
        id: "lyon1ad",
        background_img: "assets/images/inTrain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `🚈 Conducteur de train`, text: `Nous vous remercions de votre patience et de votre compréhension.` },
            { speaker: `🚈 Conducteur de train`, text: `Le train partira dans une minute.` },
            { speaker: `🚈 Conducteur de train`, text: `Avant de le départ, n'oubliez surtout pas d'attacher votre ceinture de sécurité.` },
            { speaker: `🚈 Conducteur de train`, text: `Il est interdit de fumer ou de vapoter dans tout le train.` },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 안내 방송에서 설명하는 내용으로 옳지 않은 것은?",
                    options: () => createTransportQuizOptions("기차")
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