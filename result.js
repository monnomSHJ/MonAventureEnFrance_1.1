import { getSceneSummaries } from './sceneSummary.js';

window.addEventListener("DOMContentLoaded", () => {
    let loadedState = {};
    const defaultState = { // gameState이 없거나 파싱 실패 시 사용할 기본값
        userName: "-",
        balance: "0",
        score: "0",
        savedVocabList: [],
        selectedHotelId: '',
        selectedDish: { name: "선택 안 함", image: "" },
        selectedCafe: { name: "선택 안 함", image: "" },
        selectedCity: "선택 안 함",
        selectedTransport: "선택 안 함",
        viewedArtworks: new Set(),
        visitedLyonSpots: new Set(),
        viewedLyonArtworks: new Set(),
        viewedMarseilleArtworks: new Set(),
        viewedStrasbourgArtworks: new Set(),
        viewedBordeauxArtworks: new Set(),
        completedModules: new Set()
    };

    try {
        const savedStateString = localStorage.getItem('gameState');
        if (savedStateString) {
            const parsedState = JSON.parse(savedStateString);
            loadedState = { ...defaultState, ...parsedState };

            // Set 객체 및 배열로 변환 (기존 로직 유지 또는 강화)
            loadedState.viewedArtworks = new Set(loadedState.viewedArtworks || []);
            loadedState.visitedLyonSpots = new Set(loadedState.visitedLyonSpots || []);
            loadedState.viewedLyonArtworks = new Set(loadedState.viewedLyonArtworks || []);
            loadedState.viewedMarseilleArtworks = new Set(loadedState.viewedMarseilleArtworks || []);
            loadedState.viewedStrasbourgArtworks = new Set(loadedState.viewedStrasbourgArtworks || []);
            loadedState.viewedBordeauxArtworks = new Set(loadedState.viewedBordeauxArtworks || []);
            loadedState.completedModules = new Set(loadedState.completedModules || []);
            // selectedDish와 selectedCafe가 문자열로 저장되었다면 객체로 변환 (saveLoad.js 저장 방식에 따라 필요 없을 수 있음)
            if (typeof loadedState.selectedDish === 'string' && loadedState.selectedDish !== 'null') {
                 try { loadedState.selectedDish = JSON.parse(loadedState.selectedDish); } catch(e) { loadedState.selectedDish = defaultState.selectedDish; }
            } else if (loadedState.selectedDish === 'null' || !loadedState.selectedDish) {
                 loadedState.selectedDish = defaultState.selectedDish;
            }
            if (typeof loadedState.selectedCafe === 'string' && loadedState.selectedCafe !== 'null') {
                 try { loadedState.selectedCafe = JSON.parse(loadedState.selectedCafe); } catch(e) { loadedState.selectedCafe = defaultState.selectedCafe; }
            } else if (loadedState.selectedCafe === 'null' || !loadedState.selectedCafe) {
                 loadedState.selectedCafe = defaultState.selectedCafe;
            }
            loadedState.savedVocabList = Array.isArray(loadedState.savedVocabList) ? loadedState.savedVocabList : [];

            console.log("Result page: Loaded state from localStorage", loadedState);
        } else {
            console.warn("Result page: No saved game state found in localStorage.");
            loadedState = { ...defaultState };
        }
    } catch (e) {
        console.error("Result page: Failed to parse gameState from localStorage", e);
        loadedState = { ...defaultState };
    }

    const userName = loadedState.userName;
    const balance = loadedState.balance.toString(); // 문자열로 표시될 수 있도록
    const score = loadedState.score.toString();
    const vocabList = loadedState.savedVocabList;

    const finalScore = parseInt(score) + Math.floor(parseInt(balance) / 2);

    document.getElementById("user-name").textContent = userName;
    document.getElementById("user-balance").textContent = balance
    document.getElementById("user-score").textContent = score;
    document.getElementById("total-score").textContent = finalScore;

    const vocabContainer = document.getElementById("vocab-items");
    vocabContainer.innerHTML = '';
    vocabList.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        vocabContainer.appendChild(li);
    });

    const sceneContainer = document.getElementById("scenes");
    sceneContainer.innerHTML = '';

    const sceneSummaries = getSceneSummaries(loadedState);

    sceneSummaries.forEach(scene => {
        const sceneElement = document.createElement("div");
        sceneElement.classList.add("scene");

        const textContainer = document.createElement("div");
        textContainer.classList.add("scene-text");

        const title = document.createElement("h3");
        title.textContent = scene.sceneTitle;
        textContainer.appendChild(title);

        const description = document.createElement("p");
        description.textContent = scene.description;
        textContainer.appendChild(description);

        if (scene.dialogues && scene.dialogues.length > 0) {
            const dialogueList = document.createElement("ul");
            dialogueList.classList.add("dialogueList");
            scene.dialogues.forEach(d => {
                const li = document.createElement("li");
                li.textContent = d;
                dialogueList.appendChild(li);
            });
            textContainer.appendChild(dialogueList);
        }

        if (scene.goals && scene.goals.length > 0) {
            const goalList = document.createElement("ul");
            goalList.classList.add("goalList");
            scene.goals.forEach(g => {
                const li = document.createElement("li");
                li.textContent = g;
                goalList.appendChild(li);
            });
            textContainer.appendChild(goalList);
        }

        sceneElement.appendChild(textContainer);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("scene-image");
        const img = document.createElement("img");
        img.src = scene.sceneImage;
        img.alt = scene.sceneTitle;
        imageContainer.appendChild(img);
        sceneElement.appendChild(imageContainer);

        sceneContainer.appendChild(sceneElement);
    });
});