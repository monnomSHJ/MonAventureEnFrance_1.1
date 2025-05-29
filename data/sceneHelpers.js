import { state } from "../script.js";
import { renderStatusBar } from "../statusBar.js";



/**
 * 도시 정보 라인 배열을 반환합니다.
 * @param {string} city - 도시 이름 (예: 'bordeaux', 'lyon')
 * @returns {Array<Object>} 해당 도시에 대한 정보 라인 배열
 */

export function getCityIntroLines(city) {
    const cityInformation = {
        lyon: [
            { speaker: `📢`, text: `리옹에 가기 전에, 리옹이 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `리옹은 프랑스 동남부, 론강과 손강 사이에 위치해 있습니다.`, overlayImg: `assets/images/lyonMap.jpg` },
            { speaker: `📢`, text: `프랑스 '미식의 수도'라고 불리는 리옹은,`, overlayImg: `assets/images/lyonMap.jpg` },
            { speaker: `📢`, text: `Bouchon Lyonnais라는 전통 음식점으로 유명합니다.`, overlayImg: `assets/images/lyonDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `Bouchon Lyonnais은 리옹식 음식을 파는 음식점을 뜻합니다.`, overlayImg: `assets/images/lyonDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `리옹 구시가지는 르네상스 문화를 그대로 간직하고 있는 것으로도 유명합니다.`, overlayImg: `assets/images/lyonDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `리옹의 키워드를 정리하자면... '음식', '강 사이에 위치한 도시', '옛 건축물' 정도가 되겠네요!`, overlayImg: `assets/images/lyonDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `리옹에서 맛있는 음식과 르네상스 시대의 풍경을 마음껏 만끽할 수 있길 바랍니다!`, overlayImg: `assets/images/lyonDescriptionOverlay2.jpg` }
        ],

        marseille: [
            { speaker: `📢`, text: `마르세유에 가기 전에, 마르세유가 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `마르세유는 프랑스 남부, 지중해 연안에 위치해 있습니다.`, overlayImg: `assets/images/marseilleMap.jpg` },
            { speaker: `📢`, text: `프랑스 최대의 항구 도시인 마르세유는,`, overlayImg: `assets/images/marseilleDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `지중해 특유의 다문화적인 분위기를 풍깁니다.`, overlayImg: `assets/images/marseilleDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `마르세유는 각종 해산물 요리와, 프랑스 남부 지역의 전통 생선 스튜인 Bouillabaisse(부야베스)로 유명하답니다.`, overlayImg: `assets/images/marseilleDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `마르세유의 키워드를 정리하자면... '지중해', '항구', '다문화' 정도가 되겠네요!`, overlayImg: `assets/images/marseilleDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `마르세유에서 맛있는 해산물 요리와 다문화 분위기를 마음껏 만끽하시길 바랍니다!`, overlayImg: `assets/images/marseilleDescriptionOverlay2.jpg` }
        ],

        starsbourg: [
            { speaker: `📢`, text: `스트라스부르에 가기 전에, 스트라스부르가 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `스트라스부르는 프랑스 동부, 독일 국경 근처에 위치해 있습니다.`, overlayImg: `assets/images/strasbourgMap.jpg` },
            { speaker: `📢`, text: `유럽 의회 본부가 위치한 정치적 중심지인 스트라스부르는,`, overlayImg: `assets/images/strasbourgMap.jpg` },
            { speaker: `📢`, text: `중세풍 목조가옥과 스트라스부르 대성당과 같은 건축물을 관람하기에 좋은 곳입니다.`, overlayImg: `assets/images/strasbourgDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `흥미로운 점은, 스트라스부르가 유럽에서 가장 유명한 크리스마스 마켓 중 하나라고 하네요.`, overlayImg: `assets/images/strasbourgDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `스트라스부르의 키워드를 정리하자면... '유럽의 심장', '독일 문화 융합', '스트라스부르 대성당' 정도가 되겠네요!`, overlayImg: `assets/images/strasbourgDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `스트라스부르에서 독일 문화의 융합과, 중세풍 건축물들의 멋을 한껏 느껴보세요!`, overlayImg: `assets/images/strasbourgDescriptionOverlay2.jpg` }
        ],

        bordeaux: [
            { speaker: `📢`, text: `보르도에 가기 전에, 보르도가 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `보르도는 프랑스 남서부, 대서양 근처에 위치해 있습니다.`, overlayImg: `assets/images/bordeauxMap.jpg` },
            { speaker: `📢`, text: `18세기 고전주의와 신고전주의 건축물과, 도시계획이 통일성·일관성 있게 보존되어 보르도는,`, overlayImg: `assets/images/bordeauxDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `"뛰어난 도시와 건축의 앙상블"로서 유네스코 세계문화유산에도 등재되어 있습니다.`, overlayImg: `assets/images/bordeauxDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `이곳은 세계적으로 유명한 와인 생산지이기도 합니다.`, overlayImg: `assets/images/bordeauxDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `보르도의 키워드를 정리하자면... '와인', '우아한 도시', '강변의 도시' 정도가 되겠네요!`, overlayImg: `assets/images/bordeauxDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `보르도에서 엿볼 수 있는 18세기 프랑스의 모습과 향긋한 와인의 맛을 마음껏 만끽하시길 바랍니다!`, overlayImg: `assets/images/bordeauxDescriptionOverlay2.jpg` }
        ]
    };

    return cityInformation[city] || {};
}



/**
 * 플랫폼/탑승구 선택 옵션을 생성하는 함수.
 * @param {string} type - '플랫폼' 또는 '탑승구'
 * @returns {Array<Object>} 선택 옵션 배열
 */

export function createPlatformChoiceOptions(type = "플랫폼") {
    const wrongChoice = (label) => ({
        label,
        scoreDelta: -1,
        insertLines: [
            { speaker: `📢`, text: "길을 잘못 든 것 같습니다. 다시 처음 위치로 되돌아 와야 했습니다." },
            { speaker: `📢`, text: "1점이 차감되었습니다." },
            { speaker: "", text: " ", showChoiceAgain: true,
                choices: {
                    prompt: "어디로 가야 하지?",
                    options: () => createPlatformChoiceOptions(type)
                }
            }
        ]
    });

    return [
        wrongChoice(`11번 ${type}`),
        {
            label: `12번 ${type}`,
            scoreDelta: 3,
            insertLines: [
                { speaker: `📢`, text: `올바른 ${type}에 찾아왔습니다!` },
                { speaker: `📢`, text: "3점이 추가되었습니다." },
            ]
        },
        wrongChoice(`13번 ${type}`),
        wrongChoice(`20번 ${type}`),
    ];
}



/**
 * 교통수단 관련 퀴즈 옵션을 생성하는 함수.
 * @param {string} transportType - '기차' 또는 '버스'
 * @returns {Array<Object>} 퀴즈 옵션 배열
 */

export function createTransportQuizOptions(transportType) {
    const verb = transportType === '기차' ? 'train' : 'bus';
    return [
        {
            label: `${transportType}는 1분 뒤에 출발한다`,
            scoreDelta: -1,
            insertLines: [
                { speaker: `📢`, text: `아쉽네요! ${transportType}는 1분 뒤에 출발합니다. 1점이 차감되었습니다.` },
                { speaker: `📢`, text: `정답은 "전자담배 흡연은 가능하다"였습니다.` },
                { speaker: `📢`, text: `${transportType} 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다.` },
                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans tout le ${verb}."` },
            ],
        },
        {
            label: `${transportType} 안에서 전자담배 흡연은 가능하다`,
            scoreDelta: 3,
            insertLines: [
                { speaker: `📢`, text: `정답입니다! ${transportType} 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다. 3점이 추가되었습니다.` },
                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans tout le ${verb}."` },
            ],
        },
        {
            label: "안전벨트를 착용해야 한다",
            scoreDelta: -1,
            insertLines: [
                { speaker: `📢`, text: `아쉽네요! ${transportType}는 1분 뒤에 출발합니다. 1점이 차감되었습니다.` },
                { speaker: `📢`, text: `정답은 "전자담배 흡연은 가능하다"였습니다.` },
                { speaker: `📢`, text: `${transportType} 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다.` },
                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans tout le ${verb}."` },
            ],
        },
    ];
}



/**
 * 미술품/전시물 선택 및 정보 표시 로직을 생성하는 함수.
 * @param {Object} artworksData - 미술품/전시물 데이터 객체.
 * @param {string} viewedSetKey - state 객체 내에서 방문 여부를 저장할 Set의 키 (예: 'viewedArtworks', 'viewedLyonArtworks').
 * @returns {{makeChoice: Function, makeOptions: Function}} 선택 옵션 및 선택 후 라인을 생성하는 함수들.
 */

export function createArtworkChoiceFunctions(artworksData, viewedSetKey) {
    function makeChoice(label) {
        state[viewedSetKey].add(label);

        const lines = artworksData[label].map(line => ({ ...line }));

        if (state[viewedSetKey].size < Object.keys(artworksData).length) {
            lines.push({
                speaker: "",
                text: "",
                showChoiceAgain: true,
                choices: {
                    prompt: "어떤 작품을 감상해볼까요?",
                    options: () => makeOptions()
                }
            });
        } else {
            lines.push(
                { speaker: `👤 ${state.userName}`, text: "정말 색다르고 재미있는 곳이었다." });
        }

        return lines;
    }

    function makeOptions() {
        return Object.keys(artworksData).map(label => ({
            label,
            scoreDelta: 0,
            insertLines: () => makeChoice(label),
            disabled: state[viewedSetKey].has(label)
        }));
    }

    return { makeChoice, makeOptions };
}



/**
 * 도시 탐험 씬의 선택 옵션 및 완료 로직을 생성하는 함수.
 * @param {Object} destinations - 목적지 객체 (라벨: 씬 반환 함수).
 * @param {string} visitedSetKey - state 객체 내에서 방문 여부를 저장할 Set의 키 (예: 'visitedLyonSpots').
 * @param {Function} endSceneGetter - 모든 장소 방문 후 이동할 다음 씬을 반환하는 함수.
 * @returns {{makeOptions: Function, insertIntroLineIfAllVisited: Function}} 선택 옵션 및 도입 라인 생성 함수들.
 */

export function createCityExploreSceneFunctions(destinations, visitedSetKey, endSceneGetter) {
    function makeOptions() {
        return Object.keys(destinations).map(label => ({
            label,
            insertLines: [
                { speaker: `👤 ${state.userName}`, text: `${label}에 가보자.` }
            ],
            customAction: () => {
                state[visitedSetKey].add(label);
                state.nextScene = destinations[label]();
            },
            disabled: state[visitedSetKey].has(label)
        }));
    }

    function insertIntroLineIfAllVisited() {
        if (state[visitedSetKey]?.size === Object.keys(destinations).length) {
            return [
                { speaker: `👤 ${state.userName}`, text: `가보고 싶은 곳을 모두 다녀왔다.` },
                { speaker: `👤 ${state.userName}`, text: `이제 근처에서 저녁 식사라도 해야겠는 걸...` },
                { speaker: `👤 ${state.userName}`, text: `처음 프랑스에 올 때에는 모든 것들이 낯설고 두려울 거라고만 생각했는데,` },
                { speaker: `👤 ${state.userName}`, text: `막상 와서 부딪혀보니 생각보다 할 만하잖아?` },
                { speaker: `👤 ${state.userName}`, text: `열심히 프랑스어를 공부한 보람이 있는 듯. 하하하.` },
                { speaker: `👤 ${state.userName}`, text: `(꼬르륵)` },
                { speaker: `👤 ${state.userName}`, text: `아 진짜 배고프다. 밥 먹으러 가야지.` }
            ];

        }
        return [];
    }

    return { makeOptions, insertIntroLineIfAllVisited };
}