import { state } from "../../../../script.js";
import { getBordeaux1aaScene } from "./bordeaux1aa.js";
import { getCityIntroLines } from "../../../sceneHelpers.js";

export function getBordeaux1aScene() {

    return {
        id: "bordeaux1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `기차표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("bordeaux")
        ],

        nextScene: () => {
            return getBordeaux1aaScene();
        }
    }
}