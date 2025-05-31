import { saveResultToLocalStorage } from "../../../saveResult.js";
import { getModuleSelecteScene } from "../common/moduleSelect.js";

export function getEnd1Scene() {

    return {
        id: "end1",
        background_img: "",
        narration: "",
        lines: [
            { speaker: "📢", text: "저희가 준비한 여행 시뮬레이션은 여기까지입니다."},
            { speaker: "📢", text: "Mon aventure en France와 함께 한 프랑스 여행은 어땠나요? ☺️"},
            { speaker: "", text: "",
                choices: {
                    prompt: "어땠나요?",
                    options: [
                        {
                            label: "Très bien !"
                        },
                        {
                            label: "Parfait !"
                        },
                        {
                            label: "Incroyable !"
                        }
                    ]
                }
            },
            { speaker: "📢", text: "하하하! 감사합니다. 뿌듯하네요."},
            { speaker: "📢", text: "이 게임이 여러분에게 좋은 학습 경험이 되었다면 좋겠습니다."},
            { speaker: "📢", text: "모듈 선택 화면으로 돌아가 '결과 확인' 버튼을 눌러 최종 결과를 확인해보세요!"} ,
        ],

        nextScene: () => {
            saveResultToLocalStorage();
            state.currentQuest = "";
            renderQuest();
            return getModuleSelecteScene();
        }
    }
}