import { state } from "../../script.js";
import { getLyon1baScene } from "./lyon1ba.js";
import { getCityIntroLines } from "../sceneHelpers.js";

export function getLyon1bScene() {

    return {
        id: "lyon1b",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `버스표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("bordeaux")
        ],

        nextScene: () => {
            return getLyon1baScene();
        }
    }
}