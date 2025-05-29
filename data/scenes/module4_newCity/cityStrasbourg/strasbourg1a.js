import { state } from "../../../../script.js";
import { getStrasbourg1aaScene } from "./strasbourg1aa.js";
import { getCityIntroLines } from "../../../sceneHelpers.js";

export function getStrasbourg1aScene() {

    return {
        id: "strasbourg1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `기차표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("marseille")
        ],

        nextScene: () => {
            return getStrasbourg1aaScene();
        }
    }
}