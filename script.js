console.log("script.js 로드됨");

// 필요한 모듈 불러오기기
import { loadDictionary } from "./dictionary.js";
import { renderStatusBar, renderQuest } from './statusBar.js';
import { loadScene, setupDialogueClick, setupDebugMenu } from './sceneManager.js';
import { getIntro1Scene } from "./data/scenes/intro1.js";

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
  selectedCity: "lyon" | "marseille" | "strasbourg" | "bordeaux",
  selectedTransport: "train" | "bus" | "airplane",
  viewedArtworks: new Set(),
  nextScene: 'null',
  visitedLyonSpots: new Set(),
  viewedLyonArtworks: new Set(),
  viewedMarseilleArtworks: new Set(),
  viewedStrasbourgArtworks: new Set(),
  viewedBordeauxArtworks: new Set(),
  sceneSummaries: []
};

// 단어장 기능
const dictionaryPanel = document.querySelector('.dictionary-panel');
const dictionaryPanelHeader = document.getElementById('dictionary-panel-header');
const dictionaryPanelArrow = document.querySelector('.dictionary-panel-header-arrow');
const dictionaryOverlay = document.querySelector('.dictionary-overlay');


if (!document.getElementById("user-container")) {
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


// 초기화
function init() {
  renderStatusBar();
  renderQuest();
  loadDictionary();
  loadScene(getIntro1Scene());
  setupDialogueClick();
  setupDebugMenu();
}

if (!document.getElementById("user-container")) {
  init();
}

// 안전 저장 방지
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});

if (location.pathname.includes("result")) {
  state.selectedHotelId = localStorage.getItem("selectedHotelId") || "";
  try {
    state.selectedDish = JSON.parse(localStorage.getItem("selectedDish")) || {};
    state.selectedCafe = JSON.parse(localStorage.getItem("selectedCafe")) || {};
    state.selectedCity = localStorage.getItem("selectedCity") || "";
    state.selectedTransport = localStorage.getItem("selectedTransport") || "";
  } catch {
    state.selectedDish = {};
    state.selectedCafe = {};
    state.selectedCity = "lyon";
    state.selectedTransport = "train";
  }
}

window.state = state;