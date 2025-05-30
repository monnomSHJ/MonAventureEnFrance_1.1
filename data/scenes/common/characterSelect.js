import { state } from "../../../script.js";
import { loadScene, overlay } from "../../../sceneManager.js";
import { renderStatusBar } from "../../../statusBar.js";
import { getModuleSelecteScene } from "./moduleSelect.js";

const characters = [
    { id: "ch1", name: "철수", image: "assets/images/character_cheolsoo.png"},
    { id: "ch2", name: "영희", image: "assets/images/character_yeonghee.png"}
];

export function getCharacterSelectScene() {
    return {
        id: "characterSelect",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: `
            <div id="character-select-screen" class="intro-screen">
                <p class="selection-title">캐릭터를 선택하세요</p>
                <div class="character-selection-container">
                    ${characters.map(char => `
                        <div class="character-card" data-character-id="${char.id}">
                            <img src="${char.image}" alt="${char.name}" class="character-image" />
                        </div>
                    `).join('')}
                </div>
                <div class="name-input-box">
                    <label for="userName">이름을 입력해주세요.</label><br />
                    <div class="name-input-box-group">
                        <input type="text" id="userName" placeholder="ex. Hongjun" />
                        <button id="start-game-btn" class="button" disabled>게임 시작!</button>
                    </div>
                </div>
            </div>
        `,
        onMount: setupCharacterSelectEvents
    };
}

let selectedCharacterId = null;

function setupCharacterSelectEvents() {
    const characterCards = document.querySelectorAll('.character-card');
    const userNameInput = document.getElementById('userName');
    const startGameBtn = document.getElementById('start-game-btn');
    const popup = document.getElementById("popup");
    const popupHeaderTitle = document.querySelector(".popup-header-title");
    const popupContentText = document.querySelector(".popup-content-text");
    const btn1 = document.getElementById("popup-content-btn1");
    const btn2 = document.getElementById("popup-content-btn2");
    const btn3 = document.getElementById("popup-content-btn3");

    const checkStartButtonState = () => {
        startGameBtn.disabled = !(selectedCharacterId && userNameInput.value.trim());
    };

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            characterCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedCharacterId = card.dataset.characterId;
            checkStartButtonState();
        });
    });

    userNameInput.addEventListener('input', checkStartButtonState);

    startGameBtn.addEventListener('click', () => {
        const inputName = userNameInput.value.trim();

        if (!selectedCharacterId) {
            showAlertPopup("오류 발생!", "캐릭터를 선택해주세요.");
            return;
        }

        if (!inputName) {
            showAlertPopup("오류 발생!", "이름을 입력해주세요.");
            return;
        }

        state.userName = inputName;
        state.playerCharacter = selectedCharacterId;

        popupHeaderTitle.textContent = "정보 확인";
        popupContentText.innerHTML = `
            <p>✅ 이름: ${state.userName}</p><hr>
            <p>위 정보로 게임을 시작하시겠습니까?</p>
        `;

        btn1.textContent = "아니요";
        btn1.classList.remove('hidden');
        btn2.textContent = "예";
        btn2.classList.remove('hidden');
        btn3.classList.add('hidden');

        popup.classList.remove('hidden');
        overlay.classList.add('show');

        btn1.onclick = () => {
            popup.classList.add("hidden");
            overlay.classList.remove("show");
        };

        btn2.onclick = () => {
            popup.classList.add("hidden");
            overlay.classList.remove("show");
            renderStatusBar();
            loadScene(getModuleSelecteScene());
        };
    });

    function showAlertPopup(title, message) {
        popupHeaderTitle.textContent = title;
        popupContentText.innerHTML = `<p>${message}</p>`;
        btn1.textContent = "확인";
        btn1.classList.remove('hidden');
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');
        popup.classList.remove('hidden');
        overlay.classList.add('show');
        btn1.onclick = () => {
            popup.classList.add('hidden');
            overlay.classList.remove('show');
        };
    }
}