import { state } from "../../../script.js";
import { loadScene, overlay } from "../../../sceneManager.js";
import { renderStatusBar, renderQuest } from "../../../statusBar.js";
import { loadGameState, saveGameState } from "../../../saveLoad.js";
import { getCharacterSelectScene } from "./characterSelect.js";
import { getModuleSelecteScene } from "./moduleSelect.js";

export function getIntro1Scene() {
    return {
        id: "intro1",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: `
        <div id="intro-screen" class="intro-screen">
          <h1 class="main-title">Mon Aventure en France</h1>
          <div class="description">
            이 게임은 프랑스 여행을 통해 언어와 문화를 체험할 수 있는 인터랙티브 학습 도구입니다.<br />
            다양한 상황 속에서 미션을 수행하고, 프랑스어 실력을 키워보세요!<br /><br />
            2025-1 언어교육캡스톤디자인<br />
            기획 및 개발 : 불어교육과 지현선, 불어교육과 신홍준
          </div>
          <div class="start-options">
            <button id="new-game-btn" class="button">새로 시작</button>
            <button id="load-game-btn" class="button" ${state.hasSaveData ? '' : 'disabled'}>불러오기</button>
          </div>
        </div>
      `,
      onMount: setupIntroEvents
    }
};

export function setupIntroEvents() {
  const newGameBtn = document.getElementById("new-game-btn");
  const loadGameBtn = document.getElementById("load-game-btn");
  const popup = document.getElementById("popup");
  const popupHeaderTitle = document.querySelector(".popup-header-title");
  const popupContentText = document.querySelector(".popup-content-text");
  const btn1 = document.getElementById("popup-content-btn1");
  const btn2 = document.getElementById("popup-content-btn2");
  const btn3 = document.getElementById("popup-content-btn3");

  // '불러오기' 버튼의 활성화 상태 업데이트
  if (loadGameBtn) {
    loadGameBtn.disabled = !localStorage.getItem('gameState');
  }

  function closePopup() {
    popup.classList.add("hidden");
    overlay.classList.remove("show");
  }

  // 새로 시작 버튼 클릭
  if (newGameBtn) {
    newGameBtn.addEventListener("click", () => {
      const confirmNewGame = () => {
        state.userName = "-";
        state.balance = 500;
        state.score = 0;
        state.savedVocabList = [];
        state.currentQuest = '';
        state.selectedHotelId = '';
        state.selectedHotelName = '';
        state.selectedDish = 'null';
        state.selectedCafe = 'null';
        state.selectedCity = null;
        state.selectedTransport = null;
        state.viewedArtworks = new Set();
        state.nextScene = 'null';
        state.visitedLyonSpots = new Set();
        state.viewedLyonArtworks = new Set();
        state.viewedMarseilleArtworks = new Set();
        state.viewedStrasbourgArtworks = new Set();
        state.viewedBordeauxArtworks = new Set();
        state.sceneSummaries = [];
        state.hasSaveData = false;
        state.playerCharacter = null;
        state.currentModule = null;
        state.completedModules = new Set();

        localStorage.removeItem('gameState');
        renderStatusBar();
        renderQuest();
        loadScene(getCharacterSelectScene());
      };

      // 기존 저장 데이터가 있으면 확인 팝업 띄우기
      if (localStorage.getItem('gameState')) {
        popupHeaderTitle.textContent = "⚠️ 알림";
        popupContentText.innerHTML = "<p>새로 시작하면 기존 저장 데이터가 사라집니다.<br />계속하시겠습니까?</p>"

        btn1.textContent = "취소";
        btn1.classList.remove('hidden');
        btn2.textContent = "확인";
        btn2.classList.remove('hidden');
        btn3.classList.add('hidden');

        popup.classList.remove('hidden');
        overlay.classList.add('show');

        btn1.onclick = () => {
          popup.classList.add('hidden');
          overlay.classList.remove('show');
        };

        btn2.onclick = () => {
          closePopup();
          confirmNewGame();
        };
      } else {
        confirmNewGame();
      }
    });
  }

  // 불러오기 버튼 클릭
  if (loadGameBtn) {
    loadGameBtn.addEventListener("click", () => {
      const loadedState = loadGameState();

      if (loadedState) {
        popupHeaderTitle.textContent = "게임 불러오기 성공";
        popupContentText.innerHTML = `<p>${loadedState.userName}님의 저장된 게임을 불러왔습니다!</p>`;

        btn1.textContent = "계속하기";
        btn1.classList.remove('hidden');
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');

        popup.classList.remove('hidden');
        overlay.classList.add('show');

        btn1.onclick = () => {
          closePopup();
          loadScene(getModuleSelecteScene());
        };
      } else {
        // 불러오기 실패 메시지
        popupHeaderTitle.textContent = "오류 발생!";
        popupContentText.innerHTML = "<p>저장된 게임이 없습니다.</p>";
        btn1.textContent = "확인";
        btn1.classList.remove('hidden');
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');

        popup.classList.remove('hidden');
        overlay.classList.add('show');

        btn1.onclick = closePopup;
      }
    });
  }
}