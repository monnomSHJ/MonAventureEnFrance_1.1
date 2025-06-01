import { state } from "../../../script.js";
import { renderStatusBar } from "../../../statusBar.js";
import { getLouvre2Scene } from "./louvre2.js";

export function getLouvre1Scene() {

    return {
        id: "louvre1",
        background_img: "assets/images/museeDuLouvre.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "루브르 박물관 도착!" },
            { speaker: `👤 ${state.userName}`, text: "입장 티켓을 사고 싶은데 누구에게 말해야 하지...?" },
            { speaker: `👤 ${state.userName}`, text: "아! 저 분께 여쭤봐야겠다." },
            { speaker: `👤 ${state.userName}`, text: "Bonjour !", personImg: "assets/images/louvrePerson1.png" },
            { speaker: `👩‍💼 Guichetière`, text: "Bonjour !", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak1.wav" },
            { speaker: `👤 ${state.userName}`, text: "Vous travaillez ici ?", personImg: "assets/images/louvrePerson1.png" },
            { speaker: `👩‍💼 Guichetière`, text: "Oui, je suis guichetière.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak2.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Bienvenue au musée du Louvre !", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak3.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Vous souhaitez acheter un billet ?", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak4.wav" },
            { speaker: `👤 ${state.userName}`, text: "Oui, s'il vous plaît.", personImg: "assets/images/louvrePerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "Quels types de billets avez-vous ?", personImg: "assets/images/louvrePerson1.png" },
            { speaker: `👩‍💼 Guichetière`, text: "Nous avons trois types !", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak5.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Le plein tarif, le tarif étudiant et l'entrée gratuite.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak7.wav" },
            { speaker: ``, text: "Regardez ça.", personImg: "assets/images/louvrePerson1.png", overlayImg: "assets/images/louvreTarif.png", sound: "assets/sounds/module3/louvreSpeak6.wav" },
            { speaker: ``, text: "대학생인 나는 어떤 표를 사는 게 좋을까?", personImg: "assets/images/louvrePerson1.png", overlayImg: "assets/images/louvreTarif.png" },
            { speaker: ``, text: ``, personImg: "assets/images/louvrePerson1.png", overlayImg: "assets/images/louvreTarif.png",
                choices: {
                    prompt: "어떤 표를 고를까?",
                    options: [
                        {
                            label: "Le plein tarif (17 €)",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Je voudrais acheter un billet plein tarif.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `👩‍💼 Guichetière`, text: "D'accord ! Cela fait 17 euros.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak8(2).wav" },
                                { speaker: `👤 ${state.userName}`, text: "Oui, je paie en espèces.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `📢`, text: "표를 구매했습니다. 17 유로가 차감되었고, 3점이 추가되었습니다.", personImg: "assets/images/louvrePerson1.png" },
                            ],
                            customAction: () => {
                                state.balance -= 17;
                                renderStatusBar();
                            }
                        },
                        {
                            label: "Le tarif étudiant (12 €)",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Je voudrais prendre un billet étudiant.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `👩‍💼 Guichetière`, text: "D'accord ! Vous avez une carte d'étudiant ?", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak8(1-1).wav" },
                                { speaker: `👤 ${state.userName}`, text: "Oui, bien sûr. La voici.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `👩‍💼 Guichetière`, text: "Parfait. Cela fait 12 euros.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak8(1-2).wav" },
                                { speaker: `👤 ${state.userName}`, text: "Oui, je paie en espèces.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `📢`, text: "표를 구매했습니다. 12 유로가 차감되었고, 3점이 추가되었습니다.", personImg: "assets/images/louvrePerson1.png" },
                            ],
                            customAction: () => {
                                state.balance -= 12;
                                renderStatusBar();
                            }
                        },
                                                {
                            label: "L'entrée gratuite",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "J'ai moins de 26 ans. Est-ce que je peux entrer gratuitement ?", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `👩‍💼 Guichetière`, text: "Êtes-vous citoyen de l'Union européenne ?", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak8(3-1).wav" },
                                { speaker: `👤 ${state.userName}`, text: "Non, je viens de Corée du Sud.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `👩‍💼 Guichetière`, text: "Désolée, l'entrée gratuite est réservée seulement aux citoyens de l'UE de moins de 26 ans.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak8(3-2).wav" },
                                { speaker: `👩‍💼 Guichetière`, text: "Le plein tarif est de 17 euros.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak8(3-3).wav" },
                                { speaker: `👤 ${state.userName}`, text: "D'accord, je vais prendre ce billet.", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `📢`, text: "표를 구매했습니다. 17 유로가 차감되었습니다.", personImg: "assets/images/louvrePerson1.png" },
                            ],
                            customAction: () => {
                                state.balance -= 17;
                                renderStatusBar();
                            }
                        },
                    ]
                }
            },
            { speaker: `👩‍💼 Guichetière`, text: "Je vais vous donner quelques informations.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak9.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Ce billet est valable seulement aujourd'hui.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak10.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Vous ne pouvez pas entrer sans billet ou billet électronique.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak11.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "C'est-à-dire vous devez montrer votre billet à l'entrée.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak12.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Le musée ferme à 18 heures.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak13.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Après 17 heures, vous ne peuvez plus entrer, seulement sortir.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak14.wav" },
            { speaker: `👩‍💼 Guichetière`, text: "Est-ce que vous avez tout compris ?", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak15.wav" },
            { speaker: ``, text: `한 번 더 설명해달라고 부탁할까?`, personImg: "assets/images/louvrePerson1.png" },
            { speaker: ``, text: ``, personImg: "assets/images/louvrePerson1.png",
                choices: {
                    prompt: "한 번 더 설명해달라고 부탁할까?",
                    options: [
                        {
                            label: "아니오",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Oui, j'ai tout compris.", personImg: "assets/images/louvrePerson1.png" },
                            ]
                        },
                        {
                            label: "예",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Pouvez-vous répéter, s'il vous plaît ?", personImg: "assets/images/louvrePerson1.png" },
                                { speaker: `👩‍💼 Guichetière`, text: "Oui, bien sûr.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak16.wav" },
                                { speaker: `👩‍💼 Guichetière`, text: "Ce billet est valable seulement aujourd'hui.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak10.wav" },
                                { speaker: `👩‍💼 Guichetière`, text: "Vous ne pouvez pas entrer sans billet ou billet électronique.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak11.wav" },
                                { speaker: `👩‍💼 Guichetière`, text: "C'est-à-dire vous devez montrer votre billet à l'entrée.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak12.wav" },
                                { speaker: `👩‍💼 Guichetière`, text: "Le musée ferme à 18 heures.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak13.wav" },
                                { speaker: `👩‍💼 Guichetière`, text: "Après 17 heures, vous ne peuvez plus entrer, seulement sortir.", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak14.wav" },
                            ]
                        }
                    ]
                }
             },
             { speaker: `👩‍💼 Guichetière`, text: "Il y a assez d'œuvres pour vous occuper toute la journée !", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak17.wav" },
             { speaker: `👩‍💼 Guichetière`, text: "Bonne visite !", personImg: "assets/images/louvrePerson1.png", sound: "assets/sounds/module3/louvreSpeak18.wav" },
             { speaker: `👤 ${state.userName}`, text: "Merci ! Bonne journée.", personImg: "assets/images/louvrePerson1.png" },
        ],

        nextScene: () => {
            return getLouvre2Scene();
        }
    }
}