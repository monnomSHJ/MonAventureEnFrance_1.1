import { state } from "../../../script.js";
import { getCafe2Scene } from "./cafe2.js";
import { renderStatusBar } from "../../../statusBar.js";

export function getCafe1Scene() {

    return {
        id: "cafe1",
        background_img: "assets/images/cafeMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `우와... 카페 분위기가 정말 좋다. 맛있는 빵 냄새도 난다.` },
            { speaker: `👩‍🍳 Serveuse`, text: `Bonjour et bienvenue au Café de Flore !`, personImg: `assets/images/cafePerson1.png`, sound: "assets/sounds/module2/cafeSpeak1.wav" },
            { speaker: `👩‍🍳 Serveuse`, text: `Dans notre café, nous proposons du café, des croissants, du chocolat chaud, des sandwichs au jambon, et bien plus encore.`, personImg: `assets/images/cafePerson1.png`, overlayImg: `assets/images/cafeMenu.png`, sound: "assets/sounds/module2/cafeSpeak2.wav" },
            { speaker: `👩‍🍳 Serveuse`, text: `Et vous, qu'est-ce que vous voulez ?`, personImg: `assets/images/cafePerson1.png`, overlayImg: `assets/images/cafeMenu.png`, sound: "assets/sounds/module2/cafeSpeak3.wav" },
            { speaker: `👤 ${state.userName}`, text: `Je voudrais ... `, personImg: `assets/images/cafePerson1.png`, overlayImg: `assets/images/cafeMenu.png` },
            { speaker: ``, text: `음... 배부르니까 하나만 먹어야지.`, personImg: `assets/images/cafePerson1.png`, overlayImg: `assets/images/cafeMenu.png` },
            { speaker: ``, text: `뭘 먹어볼까?`, personImg: `assets/images/cafePerson1.png`, overlayImg: `assets/images/cafeMenu.png` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "뭘 먹어볼까?",
                    options: [
                        {
                            label: "Un café - 2,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "je voudrais un café, s'il vous plaît.", personImg: "assets/images/cafePerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedCafe = {
                                    name: "un café",
                                    price: 2,
                                    image: "assets/images/coffee.jpg",
                                    sound: "assets/sounds/module2/cafeSpeak6(2euros).wav",
                                    sound2: "assets/sounds/module2/cafeSpeak7(cafe).wav"
                                };
                            }
                        },
                        {
                            label: "Un croissant - 2,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "je voudrais un croissant, s'il vous plaît.", personImg: "assets/images/cafePerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedCafe = {
                                    name: "un croissant",
                                    price: 2,
                                    image: "assets/images/croissant.jpg",
                                    sound: "assets/sounds/module2/cafeSpeak6(2euros).wav",
                                    sound2: "assets/sounds/module2/cafeSpeak7(croissant).wav"
                                };
                            }
                        },
                        {
                            label: "Un chocolat chaud - 3,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "je voudrais un chocolat chaud, s'il vous plaît.", personImg: "assets/images/cafePerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedCafe = {
                                    name: "un chocolat chaud",
                                    price: 3,
                                    image: "assets/images/hotChoco.jpg",
                                    sound: "assets/sounds/module2/cafeSpeak6(3euros).wav",
                                    sound2: "assets/sounds/module2/cafeSpeak7(chocolat).wav"
                                };
                            }
                        },
                        {
                            label: "Un sandwich jambon-fromage - 4,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "je voudrais un sandwich jambon-fromage, s'il vous plaît.", personImg: "assets/images/cafePerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedCafe = {
                                    name: "un sandwich jambon-fromage",
                                    price: 4,
                                    image: "assets/images/sandwich.jpg",
                                    sound: "assets/sounds/module2/cafeSpeak6(4euros).wav",
                                    sound2: "assets/sounds/module2/cafeSpeak7(sandwich).wav"
                                };
                            }
                        },
                    ]
                }
            },
            { speaker: `👩‍🍳 Serveuse`, text: `Très bien. Sur place ou à emporter ?`, personImg: "assets/images/cafePerson1.png", sound: "assets/sounds/module2/cafeSpeak4.wav" },
            { speaker: `👤 ${state.userName}`, text: `Sur place.`, personImg: `assets/images/cafePerson1.png` },
            { speaker: `👩‍🍳 Serveuse`, text: `D'accrod. Comment payez vous ?`, personImg: "assets/images/cafePerson1.png", sound: "assets/sounds/module2/cafeSpeak5.wav" },
            { speaker: `👤 ${state.userName}`, text: `En espèces, s'il vous plaît.`, personImg: `assets/images/cafePerson1.png` },
            { speaker: `👩‍🍳 Serveuse`, text: () => `Très bien ! Ça fait ${state.selectedCafe?.price ?? "?"} euros.`, personImg: "assets/images/cafePerson1.png", sound: state.selectedCafe.sound },
            { speaker: `👤 ${state.userName}`, text: `D'accord.`, personImg: `assets/images/cafePerson1.png` },
        ],

        nextScene: () => {
            const selected= state.selectedCafe
            const price= Number(selected?.price) || 0;

            state.balance -= price;
            state.score += price;
            renderStatusBar();
            return getCafe2Scene();
        }
    }
}