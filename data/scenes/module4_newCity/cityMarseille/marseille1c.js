import { state } from "../../../../script.js";
import { getMarseille1caScene } from "./marseille1ca.js";
import { getCityIntroLines } from "../../../sceneHelpers.js";


export function getMarseille1cScene() {

    return {
        id: "marseille1c",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `비행기표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("marseille")
        ],

        nextScene: () => {
            return getMarseille1caScene();
        }
    }
}