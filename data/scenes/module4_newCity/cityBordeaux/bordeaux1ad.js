import { state } from "../../../../script.js";
import { renderQuest } from "../../../../statusBar.js";
import { getBordeaux2Scene } from "./bordeaux2.js";
import { createTransportQuizOptions } from "../../../sceneHelpers.js";

export function getBordeaux1adScene() {

    return {
        id: "bordeaux1ad",
        background_img: "assets/images/inTrain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `🚈 Conducteur de train`, text: `Nous vous remercions de votre patience et de votre compréhension.` },
            { speaker: `🚈 Conducteur de train`, text: `Le train part dans une minute.` },
            { speaker: `🚈 Conducteur de train`, text: `Avant de partir, n'oubliez jamais de mettre votre ceinture.` },
            { speaker: `🚈 Conducteur de train`, text: `Il ne faut fumer ni cigarette ni vapoteuse dans tout le train.` },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 안내 방송에서 설명하는 내용으로 옳지 않은 것은?",
                    options: () => createTransportQuizOptions("기차")
                }
             },
             { speaker: `📢`, text: `문제 푸느라 고생 많으셨습니다. 🥳` },
             { speaker: `📢`, text: `보르도에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "보르도메인",
            renderQuest();
            return getBordeaux2Scene();
        }
    }
}