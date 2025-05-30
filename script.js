console.log("script.js 로드됨");

// 필요한 모듈 불러오기
import { loadDictionary } from "./dictionary.js";
import { renderStatusBar, renderQuest } from './statusBar.js';
import { loadScene, setupDialogueClick, setupDebugMenu } from './sceneManager.js';
import { getIntro1Scene } from "./data/scenes/common/intro1.js";
import { saveGameState, loadGameState } from "./saveLoad.js";

// 상태 관리
export const state = {
  userName: "-",
  balance: 500,
  score: 0,
  savedVocabList: [],
  currentQuest: '',
  selectedHotelId: '',
  selectedHotelName: '',
  selectedDish: 'null',
  selectedCafe: 'null',
  selectedCity: "null",
  selectedTransport: "null",
  viewedArtworks: new Set(),
  nextScene: 'null',
  visitedLyonSpots: new Set(),
  viewedLyonArtworks: new Set(),
  viewedMarseilleArtworks: new Set(),
  viewedStrasbourgArtworks: new Set(),
  viewedBordeauxArtworks: new Set(),
  sceneSummaries: [],
  hasSaveData: false,
  playerCharacter: null,
  playerCharacterImage: null,
  currentModule: null,
  completedModules: new Set()
};

// 단어장 기능
const dictionaryPanel = document.querySelector('.dictionary-panel');
const dictionaryPanelHeader = document.getElementById('dictionary-panel-header');
const dictionaryPanelArrow = document.querySelector('.dictionary-panel-header-arrow');
const dictionaryOverlay = document.querySelector('.dictionary-overlay');


// 초기화
function init() {
  loadGameState();

  // 단어장 이벤트 리스너 설정
  if (dictionaryPanelHeader && dictionaryOverlay) {
    dictionaryPanelHeader.addEventListener('click', () => {
      dictionaryPanel.classList.toggle('open');
      dictionaryOverlay.classList.toggle('show');
      if (dictionaryPanel.classList.contains('open')) {
        dictionaryPanelArrow.textContent = '▼';
      } else {
        dictionaryPanelArrow.textContent = '▲';
      }
    });

    dictionaryOverlay.addEventListener('click', () => {
      dictionaryPanel.classList.remove('open');
      dictionaryOverlay.classList.remove('show');
      dictionaryPanelArrow.textContent = '▲';
    });
  }

  //초기 상태 로드 (저장된 데이터 확인)
  const savedState = localStorage.getItem('gameState');
  if (savedState) {
    state.hasSaveData = true;
  } else {
    state.hasSaveData = false;
  }

  renderStatusBar();
  renderQuest();
  loadDictionary();
  loadScene(getIntro1Scene());
  setupDialogueClick();
  setupDebugMenu();
}


// result.html이 아닐 때만 init() 호출
if (!location.pathname.includes("result")) {
  init();
}


// 안전 저장 방지
window.addEventListener("beforeunload", function (e) {
  // 현재 모듈을 플레이 중이고, 모든 모듈을 완료하지 않았다면 저장되지 않도록 방지
  if (state.currentModule && state.completedModules.size < allModules.length) {
    e.preventDefault();
    e.returnValue = "";
  }
});


// result.html 페이지 로드 시 localStorage에서 데이터 불러오기
if (location.pathname.includes("result")) {
  try {
    const loadedState = JSON.parse(localStorage.getItem('gameState'));
    if (loadedState) {
      Object.assign(state, loadedState);

      // Set 객체는 수동으로 복원
      if (loadedState.viewedArtworks) state.viewedArtworks = new Set(loadedState.viewedArtworks);
      if (loadedState.visitedLyonSpots) state.visitedLyonSpots = new Set(loadedState.visitedLyonSpots);
      if (loadedState.viewedLyonArtworks) state.viewedLyonArtworks = new Set(loadedState.viewedLyonArtworks);
      if (loadedState.viewedMarseilleArtworks) state.viewedMarseilleArtworks = new Set(loadedState.viewedMarseilleArtworks);
      if (loadedState.viewedStrasbourgArtworks) state.viewedStrasbourgArtworks = new Set(loadedState.viewedStrasbourgArtworks);
      if (loadedState.viewedBordeauxArtworks) state.viewedBordeauxArtworks = new Set(loadedState.viewedBordeauxArtworks);
      if (loadedState.completedModules) state.completedModules = new Set(loadedState.completedModules);
      if (loadedState.playerCharacterImage) state.playerCharacterImage = loadedState.playerCharacterImage;

      console.log("Result page: Loaded state from localStorage", state);
    } else {
      console.warn("Result page: No saved game state found in localStorage.");
    }
  } catch (e) {
    console.error("Result page: Failed to parse gameState from localStorage", e);
  }
}

window.state = state;