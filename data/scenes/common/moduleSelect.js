import { state } from "../../../script.js";
import { loadScene, overlay } from "../../../sceneManager.js";
import { renderStatusBar, renderQuest } from "../../../statusBar.js";
import { allModules } from "../../modules.js";
import { saveGameState, clearGameState } from "../../../saveLoad.js";
import { getEnd2Scene } from "./end2.js"

export function getModuleSelecteScene() {
    return {
        id: "moduleSelect",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: generateModuleSelectHTML(),
        onMount: setupModuleSelectEvents
    };
}

function generateModuleSelectHTML() {
    let moduleCardsHTML = ``;

    allModules.forEach((module, index) => {
        const isCompleted = state.completedModules.has(module.id);
        const isPlayable = index === 0 || state.completedModules.has(allModules[index - 1]?.id);
        const isDisabled = isCompleted || !isPlayable;
        const buttonText = isCompleted ? '모듈 완료✅' : (isPlayable ? '시작하기' : '잠겨있음');

        moduleCardsHTML += `
            <div class="module-card" ${isCompleted ? 'completed' : ''}" data-module-id="${module.id}">
                <h3 class="module-title">${module.name}</h3>
                <p class="module-description">${module.description}</p>
                <button class="select-module-btn button" data-module-id="${module.id}" ${isDisabled ? 'disabled' : ''}>
                    ${buttonText}
                </button>
            </div>
        `;
    });

    const isAllModulesCompleted = state.completedModules.size === allModules.length;

    return `
        <div id="module-select-screen" class="module-screen">
            <div class="module-information">각 모듈을 순서대로 플레이한 뒤,<br>결과 확인 버튼을 누르면 최종 결과페이지로 이동합니다.</div>
            <div class="module-cards-container">
                ${moduleCardsHTML}
            </div>
            <button id="finish-game-btn" class="button" ${isAllModulesCompleted ? '' : 'disabled'}>
                결과 확인하기
            </button>
        </div>
    `;
}

function setupModuleSelectEvents() {
    const moduleCardsContainer = document.querySelector('.module-cards-container');
    const finishGameBtn = document.getElementById('finish-game-btn');
    const popup = document.getElementById("popup");
    const popupHeaderTitle = document.querySelector(".popup-header-title");
    const popupContentText = document.querySelector(".popup-content-text");
    const btn1 = document.getElementById("popup-content-btn1");
    const btn2 = document.getElementById("popup-content-btn2");
    const btn3 = document.getElementById("popup-content-btn3");

    // 모든 모듈 완료 버튼 상태 업데이트
    finishGameBtn.disabled = !(state.completedModules.size === allModules.length);

    document.querySelectorAll('.select-module-btn').forEach(button => {
        button.addEventListener('click', () => {
            const moduleId = button.dataset.moduleId;
            const module = allModules.find(m => m.id === moduleId);

            if (!module) {
                console.error("모듈을 찾을 수 없습니다:", moduleId);
                return;
            }

            if (state.completedModules.has(moduleId)) {
                return;
            }

            saveGameState();

            state.currentModule = moduleId;

            if (moduleId === "module3_promenade") {
                state.currentQuest = "에펠탑";
            }
            
            renderQuest();

            loadScene(module.startScene());
        });
    });

    finishGameBtn.addEventListener('click', () => {
        if (state.completedModules.size === allModules.length) {
            loadScene(getEnd2Scene());
            saveGameState();
            clearGameState();
        } else {
            showAlertPopup("알림", "모든 모듈을 완료해야 결과 확인이 가능합니다.");
        }
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