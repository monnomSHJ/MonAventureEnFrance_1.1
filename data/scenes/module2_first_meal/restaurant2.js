import { state } from "../../../script.js";
import { getRestaurant3Scene } from "./restaurant3.js";

export function getRestaurant2Scene() {

    return {
        id: "restaurant2",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        lines: [
            { speaker: `👨‍🍳 Serveur`, text: "Bonjour ! Vous êtes combien ?", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak1.wav" },
            { speaker: `👤 ${state.userName}`, text: "Oui, bonjour. Je suis seul(e).", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "D'accord. Une table pour une personne. Suivez-moi, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak2.wav" },
            { speaker: ``, text: "직원 분을 따라 자리를 잡았다.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Voilà, le menu.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/restaurantMenu.png", sound: "assets/sounds/module2/restaurantSpeak3.wav" },
            { speaker: `👨‍🍳 Serveur`, text: "Prenez votre temps pour choisir, ne vous pressez pas.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/restaurantMenu.png", sound: "assets/sounds/module2/restaurantSpeak4.wav" },
            { speaker: `👤 ${state.userName}`, text: "Oui, merci.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "메뉴판을 보고 먹고 싶은 메뉴를 고민해보자.", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "음... 그런데 여기 있는 'salade niçoise'가 뭐지?", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "직원 분께 여쭤보자." },
            { speaker: `👤 ${state.userName}`, text: "그런데 어떻게 불러야 하지?" },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "어떻게 하면 좋을까?",
                    options: [
                        {
                            label: "직원을 조용히 쳐다보기만 하기",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `...` },
                                { speaker: ``, text: `필사적으로 직원 분과 눈을 마주치기 위해 노력했다.` },
                                { speaker: ``, text: `나와 눈이 마주친 직원 분이 나에게로 다가왔다.` },
                                { speaker: `👨‍🍳 Serveur`, text: "Avez-vous choisi votre plat ?", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak5.wav" },
                            ],
                        },
                        {
                            label: `작게 "S'il vous plaît"라고 말하기`,
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `S'il vous plaît !` },
                                { speaker: ``, text: `나의 목소리를 들은 직원 분이 나에게로 다가왔다.` },
                                { speaker: `👨‍🍳 Serveur`, text: "Avez-vous choisi votre plat ?", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak5.wav" },
                            ],
                        },
                        {
                            label: "직원을 큰 목소리로 부르기",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Excusez-moi !` },
                                { speaker: `👨‍🍳 Serveur`, text: "...", personImg: "assets/images/restaurantPerson1.png" },
                                { speaker: `👨‍🍳 Serveur`, text: "......", personImg: "assets/images/restaurantPerson1.png" },
                                { speaker: ``, text: `... 싸늘하다.`, personImg: "assets/images/restaurantPerson1.png" },
                                { speaker: `👨‍🍳 Serveur`, text: "... Avez-vous choisi votre plat ?", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak5.wav" },
                            ],
                        }
                    ]
                }
            },
            { speaker: `👤 ${state.userName}`, text: "Oui, mais j'ai une question.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "Une salade niçoise, qu'est-ce que c'est ?", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "La salade niçoise, c'est une salade traditionnelle du sud de la France.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/salade-nicoise.jpg", sound: "assets/sounds/module2/restaurantSpeak6.wav" },
            { speaker: `👨‍🍳 Serveur`, text: "Elle contient généralement des tomates, un œuf dur, du thon, des olives, des haricots verts et des pommes de terre.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/salade-nicoise.jpg", sound: "assets/sounds/module2/restaurantSpeak7.wav" },
            { speaker: `👨‍🍳 Serveur`, text: "C'est une salade fraîche et très complète.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/salade-nicoise.jpg", sound: "assets/sounds/module2/restaurantSpeak8.wav" },
            { speaker: `👤 ${state.userName}`, text: "Merci beaucoup !", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Alors ? Que souhaitez-vous commander ?", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak9.wav" },
            { speaker: `👤 ${state.userName}`, text: "Je vais prendre ...", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "뭘 먹어볼까?",
                    options: [
                        {
                            label: "Des pâtes - 8,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Je vais prendre une assiette de pâtes, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "des pâtes",
                                    price: 8,
                                    image: "assets/images/pates.jpg",
                                    sound: "assets/sounds/module2/restaurantSpeak13(pates).wav",
                                    sound2: "assets/sounds/module2/restaurantSpeak15(8euros).wav"
                                };
                            }
                        },
                        {
                            label: "Un steak-frites - 12,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Je vais prendre un steak-frites, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "un steak-frites",
                                    price: 12,
                                    image: "assets/images/steak-frites.jpg",
                                    sound: "assets/sounds/module2/restaurantSpeak13(steak).wav",
                                    sound2: "assets/sounds/module2/restaurantSpeak15(12euros).wav"
                                };
                            }
                        },
                        {
                            label: "Une salade niçoise - 7,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Je vais prendre une salade niçoise, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "une salade niçoise",
                                    price: 7,
                                    image: "assets/images/salade-nicoise.jpg",
                                    sound: "assets/sounds/module2/restaurantSpeak13(salade).wav",
                                    sound2: "assets/sounds/module2/restaurantSpeak15(7euros).wav"
                                };
                            } 
                        },
                        {
                            label: "Une pizza - 9,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Je vais prendre une pizza, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "une pizza",
                                    price: 9,
                                    image: "assets/images/pizza.jpg",
                                    sound: "assets/sounds/module2/restaurantSpeak13(pizza).wav",
                                    sound2: "assets/sounds/module2/restaurantSpeak15(9euros).wav"
                                };
                            }
                        },
                    ]
                }
            },
            { speaker: `👨‍🍳 Serveur`, text: "Très bien. Ce sera tout ?", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak10.wav" },
            { speaker: `👤 ${state.userName}`, text: "Oui, c'est tout. Merci.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "D'accord. C'est noté.", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak11.wav" },
            { speaker: `👨‍🍳 Serveur`, text: "Je vous apporte un peu de pain en plus.", personImg: "assets/images/restaurantPerson1.png", sound: "assets/sounds/module2/restaurantSpeak12.wav" },
        ],

        nextScene: () => {
            return getRestaurant3Scene();
        }
    }
}