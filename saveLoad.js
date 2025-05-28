import { state } from "./script.js";

const GAME_STATE_KEY = "gameState";

export function saveGameState() {
    try {
        const stateToSave = { ...state };

        // Set 객체는 직렬화되지 않으므로 배열로 변환
        stateToSave.viewedArtworks = Array.from(state.viewedArtworks);
        stateToSave.visitedLyonSpots = Array.from(state.visitedLyonSpots);
        stateToSave.viewedLyonArtworks = Array.from(state.viewedLyonArtworks);
        stateToSave.viewedMarseilleArtworks = Array.from(state.viewedMarseilleArtworks);
        stateToSave.viewedStrasbourgArtworks = Array.from(state.viewedStrasbourgArtworks);
        stateToSave.viewedBordeauxArtworks = Array.from(state.viewedBordeauxArtworks);
        stateToSave.completedModules = Array.from(state.completedModules);

        localStorage.setItem(GAME_STATE_KEY, JSON.stringify(stateToSave));
        console.log("게임 상태 저장 완료", stateToSave);
        return true;
    } catch (e) {
        console.error("게임 상태 저장 실패:", e);
        return false;
    }
}

export function loadGameState() {
    try {
        const savedState = localStorage.getItem(GAME_STATE_KEY);
        if (savedState) {
            const parsedState = JSON.parse(savedState);

            // Set 객체는 JSON.parse로 복원되지 않으므로 수동으로 복원
            parsedState.viewedArtworks = new Set(parsedState.viewedArtworks || []);
            parsedState.visitedLyonSpots = new Set(parsedState.visitedLyonSpots || []);
            parsedState.viewedLyonArtworks = new Set(parsedState.viewedLyonArtworks || []);
            parsedState.viewedMarseilleArtworks = new Set(parsedState.viewedMarseilleArtworks || []);
            parsedState.viewedStrasbourgArtworks = new Set(parsedState.viewedStrasbourgArtworks || []);
            parsedState.viewedBordeauxArtworks = new Set(parsedState.viewedBordeauxArtworks || []);
            parsedState.completedModules = new Set(parsedState.completedModules || []);

            Object.assign(state,parsedState);
            state.hasSaveData = true;
            console.log("게임 상태 불러오기 완료", state);
            return state;
        }
    } catch (e) {
        console.error("게임 상태 불러오기 실패:", e);
    }
    return null;
}

export function clearGameState() {
    localStorage.removeItem(GAME_STATE_KEY);
    console.log("게임 상태 초기화 완료");
}