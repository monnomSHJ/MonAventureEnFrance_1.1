import { state } from "../../script.js";
import { getLyon1caScene } from "./lyon1ca.js";
import { getCityIntroLines } from "../sceneHelpers.js";

export function getLyon1cScene() {

    return {
        id: "lyon1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `비행기표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("bordeaux")
        ],

        nextScene: () => {
            return getLyon1caScene();
        }
    }
}