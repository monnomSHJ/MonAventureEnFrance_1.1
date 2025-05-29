import { state } from "../../script.js";
import { getBordeaux1baScene } from "./bordeaux1ba.js";
import { getCityIntroLines } from "../sceneHelpers.js";

export function getBordeaux1bScene() {

    return {
        id: "bordeaux1b",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `버스표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            ...getCityIntroLines("bordeaux")
        ],

        nextScene: () => {
            return getBordeaux1baScene();
        }
    }
}