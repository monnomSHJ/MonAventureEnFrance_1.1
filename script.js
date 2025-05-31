console.log("script.js 로드됨");

// 필요한 모듈 불러오기
import { loadDictionary } from "./dictionary.js";
import { renderStatusBar, renderQuest } from './statusBar.js';
import { loadScene, setupDialogueClick, setupDebugMenu } from './sceneManager.js';
import { getIntro1Scene } from "./data/scenes/common/intro1.js";
import { saveGameState, loadGameState } from "./saveLoad.js";

import { allModules } from "./data/modules.js";
import hotelData from "./data/hotelData.js";
import { lyonTransportData, marseilleTransportData, strasbourgTransportData, bordeauxTransportData } from "./data/transportData.js";

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



// 디버깅 용도 함수
/**
 * 게임 상태를 디버깅용으로 설정합니다.
 * @param {Array<string>} completedModuleIds 완료 상태로 설정할 모듈 ID 배열.
 * @param {Object} customState state 객체에 적용할 임의의 사용자 정의 상태.
 */

function setDebugState(completedModuleIds = [], customState = {}) {
  state.userName = customState.userName || "DebugUser";
  state.balance = customState.balance !== undefined ? customState.balance : 1000;
  state.score = customState.score !== undefined ? customState.score : 100;
  state.savedVocabList = customState.savedVocabList || [];
  state.currentQuest = customState.currentQuest || '';
  state.selectedHotelId = customState.selectedHotelId || '';
  state.selectedHotelName = customState.selectedHotelName || '';
  state.selectedDish = customState.selectedDish || null;
  state.selectedCafe = customState.selectedCafe || null;
  state.selectedCity = customState.selectedCity || null;
  state.selectedTransport = customState.selectedTransport || null;
  state.viewedArtworks = customState.viewedArtworks ? new Set(customState.viewedArtworks) : new Set();
  state.nextScene = customState.nextScene || null;
  state.visitedLyonSpots = customState.visitedLyonSpots ? new Set(customState.visitedLyonSpots) : new Set();
  state.viewedLyonArtworks = customState.viewedLyonArtworks ? new Set(customState.viewedLyonArtworks) : new Set();
  state.viewedMarseilleArtworks = customState.viewedMarseilleArtworks ? new Set(customState.viewedMarseilleArtworks) : new Set();
  state.viewedStrasbourgArtworks = customState.viewedStrasbourgArtworks ? new Set(customState.viewedStrasbourgArtworks) : new Set();
  state.viewedBordeauxArtworks = customState.viewedBordeauxArtworks ? new Set(customState.viewedBordeauxArtworks) : new Set();
  state.sceneSummaries = customState.sceneSummaries || []; // 이 부분은 result.html에서만 사용되므로 수동 설정 필요X
  state.hasSaveData = true;
  state.playerCharacter = customState.playerCharacter || "ch1"; // 기본 캐릭터
  state.playerCharacterImage = customState.playerCharacterImage || "assets/images/character_cheolsoo.png"; // 기본 캐릭터 이미지
  state.currentModule = customState.currentModule || null;
  state.completedModules = new Set(completedModuleIds);

  // 선택된 호텔/요리/카페/교통편 정보가 있을 경우, 객체로 설정
  if (state.selectedHotelId) {
    const hotel = hotelData.find(h => h.id === state.selectedHotelId);
    if (hotel) state.selectedHotelName = hotel.name;
  }
  if (typeof state.selectedDish === 'string' && state.selectedDish !== "null") {
    // 실제 요리 데이터를 여기에 추가해야 합니다 (예: dishData 배열)
    // 현재 코드에는 dishData가 없으므로 임의 객체로 설정
    state.selectedDish = { name: state.selectedDish, price: 10, image: "some_dish_image.jpg" };
  }
  if (typeof state.selectedCafe === 'string' && state.selectedCafe !== "null") {
    // 실제 카페 데이터를 여기에 추가해야 합니다 (예: cafeData 배열)
    // 현재 코드에는 cafeData가 없으므로 임의 객체로 설정
    state.selectedCafe = { name: state.selectedCafe, price: 3, image: "some_cafe_image.jpg" };
  }
  if (state.selectedCity && state.selectedTransport) {
    const transportDataMap = {
        lyon: lyonTransportData,
        marseille: marseilleTransportData,
        strasbourg: strasbourgTransportData,
        bordeaux: bordeauxTransportData
    };
    const transportArray = transportDataMap[state.selectedCity];
    const transport = transportArray?.find(t => t.id === state.selectedTransport);
    if (transport) state.selectedTransport = transport.id; // transport.id가 아닌 transport 객체 자체가 필요할 수도 있음.
  }

  saveGameState();
  renderStatusBar();
  console.log("디버그 상태 설정 완료:", state);
}

/**
 * 모든 모듈을 완료 상태로 설정하고 기본 디버그 사용자 정보를 설정합니다.
 */

function setAllModulesCompleted() {
  const allModuleIds = allModules.map(m => m.id);
  setDebugState(["module1_toParis", "module2_first_meal", "module3_promenade", "module4_newCity"], {
    userName: "FinalTester",
    balance: 800,
    score: 150,
    selectedHotelId: "hotel1", // 예시로 설정
    selectedDish: { name: "un steak-frites", price: 12, image: "assets/images/steak-frites.jpg" }, // 예시로 설정
    selectedCafe: { name: "un café", price: 2, image: "assets/images/coffee.jpg" }, // 예시로 설정
    selectedCity: "lyon", // 예시로 설정
    selectedTransport: "train", // 예시로 설정
    viewedArtworks: ["La Joconde", "La Vénus de Milo"], // 예시
    visitedLyonSpots: ["Musée Cinéma et Miniature", "Basilique Notre-dame de Fourvière", "Parc de la Tête d'Or"], // 예시
    viewedLyonArtworks: ["아이언맨 수트"], // 예시
    playerCharacter: "ch1",
    playerCharacterImage: "assets/images/character_cheolsoo.png"
  });
}

window.setDebugState = setDebugState;
window.setAllModulesCompleted = setAllModulesCompleted;



window.state = state;