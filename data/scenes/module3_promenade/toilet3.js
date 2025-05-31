import { state } from "../../../script.js";
import { getToilet4Scene } from "../module4_newCity/toilet4.js";

export function getToilet3Scene() {

    return {
        id: "toilet3",
        background_img: "assets/images/parisMainStreet.jpg",
        narration: "",
        lines: [
            { speaker: `📢`, text: `1 유로가 차감되었습니다.`},
            { speaker: () => `👤 ${state.userName}`, text: `휴... 개운하다.` },
            { speaker: () => `👤 ${state.userName}`, text: `파리에서의 하루를 아주 알차게 보낸 것 같아.` },
            { speaker: () => `👤 ${state.userName}`, text: `이제 숙소로 돌아가서... 내일의 계획을 정리해보자.` },
            { speaker: `📢`, text: `프랑스에서의 첫 날을 무사히 잘 보내셨군요!` },
            { speaker: `📢`, text: `그건 그렇고, 프랑스에서는 정말 공중화장실이 유료일까요?` },
            { speaker: `📢`, text: `프랑스는 공공장소에 공중화장실이 구비되어 있는 경우가 흔하지 않습니다.`, overlayImg: `assets/images/toiletsDescription1.jpeg` },
            { speaker: `📢`, text: `식당이나 바, 카페에 화장실이 있기는 하지만, 손님이 아니면 이용하기 어려운 경우도 많습니다.`, overlayImg: `assets/images/toiletsDescription1.jpeg` },
            { speaker: `📢`, text: `사실 관광객뿐만 아니라 프랑스 자국민 10명 중 8명도 프랑스의 공중화장실 부족에 불편함을 겪고 있다고 하네요.`, overlayImg: `assets/images/toiletsDescription2.jpeg` },
            { speaker: `📢`, text: `만일 프랑스 여행 중 화장실이 급하다면, 우선 길거리나 일부 지하철역 등에 있는 무료 공중화장실을 찾아보세요.`, overlayImg: `assets/images/toiletsDescription2.jpeg` },
            { speaker: `📢`, text: `'toilettespubliques.com'을 참고하면 프랑스 주요 도시의 공중화장실 위치를 알 수 있습니다.`, overlayImg: `assets/images/toiletsDescription3.jpeg` },
            { speaker: `📢`, text: `위생 상태를 보장할 수는 없지만요.`, overlayImg: `assets/images/toiletsDescription3.jpeg` },
            { speaker: `📢`, text: `주요 관광지, 기차역, 백화점, 대형 쇼핑몰 등에는 1~2유로를 지불하면 사용할 수 있는 유료 공중화장실도 있습니다.`, overlayImg: `assets/images/publicToilets.jpg` },
            { speaker: `📢`, text: `무료 화장실보다는 위생 상태가 훨씬 좋은 편입니다.`, overlayImg: `assets/images/publicToilets.jpg` },
            { speaker: `📢`, text: `만약 주변에 공중화장실이 없다면, 주변에 보이는 식당이나 카페에 들어가서 화장실 사용을 문의해보세요.`, overlayImg: `assets/images/publicToilets.jpg` },
            { speaker: `📢`, text: `약간의 금액을 지불하여, 혹시나 운이 좋다면 무료로 화장실을 사용할 수 있을 겁니다.`, overlayImg: `assets/images/publicToilets.jpg` },
            { speaker: `📢`, text: `꼭 기억해두세요...` },
            { speaker: `📢`, text: `모듈 3 완료! 모듈 선택 화면으로 돌아갑니다.`}
        ],
        
        nextScene: () => {
            state.currentQuest = "";
            renderQuest();
            return null;
        }
    }
}