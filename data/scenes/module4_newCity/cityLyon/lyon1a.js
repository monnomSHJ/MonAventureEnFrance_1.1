import { state } from "../../../../script.js";
import { getLyon1aaScene } from "./lyon1aa.js";
import { getCityIntroLines } from "../../../sceneHelpers.js";

export function getLyon1aScene() {

    return {
        id: "lyon1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `기차표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("bordeaux")
        ],

        nextScene: () => {
            return getLyon1aaScene();
        }
    }
}