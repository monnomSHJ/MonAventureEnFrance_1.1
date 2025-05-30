import { state } from "../../../script.js";
import { renderQuest } from "../../../statusBar.js";
import { getReservation1Scene } from "./reservation1.js";


export function getIntro2Scene() {
    return {
        id: "intro2",
        background_img: "assets/images/intro2Scene.jpg",
        narration: "",
        lines: [
            { speaker: `📢`, text: "안녕하세요! Mon Aventure en France에 오신 걸 환영합니다. (다음 버튼을 클릭하거나 스페이스바를 입력하세요.)" },
            { speaker: `📢`, text: "여러분 이제 프랑스로 여행을 떠나 주어진 퀘스트들을 수행하며 프랑스어를 익히는 시간을 가지게 될 예정입니다." },
            { speaker: `📢`, text: "기대되시나요?" },
            { speaker: `📢`, text: "그러면... 비행기 표는 제가 이미 예약을 해두었으니, 숙소를 예약하실 차례네요!" },
            { speaker: `📢`, text: "아래 퀘스트 박스에서 예약해야 하는 숙소의 조건을 확인하시고, 적합한 숙소를 예약해주세요.",
                customAction: () => {
                    const questEl = document.querySelector(".quest");
                    if (questEl) {
                        questEl.classList.add("highlighted-quest");
                    }
                }
            },
            { speaker: `📢`, text: "앞으로 주어지는 모든 퀘스트들에 대한 정보는 아래에서 확인하실 수 있습니다.",
                customAction: () => {
                    const questEl = document.querySelector(".quest");
                    if (questEl) {
                        questEl.classList.add("highlighted-quest");
                    }
                }
            },
            { speaker: `📢`, text: "어떤 숙소를 예약해야 하는지 꼭 확인한 후에 예약해주세요! 😀",
                customAction: () => {
                    const questEl = document.querySelector(".quest");
                    if (questEl) {
                        questEl.classList.remove("highlighted-quest");
                    }
                }
            }
        ],
        
        nextScene: () => {
            state.currentQuest = "숙소 선택";
            renderQuest();
            return getReservation1Scene();
        }
    }
};