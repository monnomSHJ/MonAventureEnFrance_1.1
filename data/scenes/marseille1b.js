import { state } from "../../script.js";
import { getMarseille1baScene } from "./marseille1ba.js";
import { getCityIntroLines } from "../sceneHelpers.js";


export function getMarseille1bScene() {

    return {
        id: "marseille1b",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `버스표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("marseille")
        ],

        nextScene: () => {
            return getMarseille1baScene();
        }
    }
}