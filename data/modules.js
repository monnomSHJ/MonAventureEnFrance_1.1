import { getIntro2Scene } from "./scenes/module1_toParis/intro2.js";
import { getHotel5Scene } from "./scenes/module1_toParis/hotel5.js";

import { getRestaurant1Scene } from "./scenes/module2_first_meal/restaurant1.js";
import { getCafe4Scene } from "./scenes/cafe4.js";

import { getEiffelTower1Scene } from "./scenes/eiffelTower1.js";
import { getToilet3Scene } from "./scenes/module3_promenade/toilet3.js";

import { getToilet4Scene } from "./scenes/module3_promenade/toilet4.js";
import { getEnd1Scene } from "./scenes/module4_newCity/end1.js";

export const allModules = [
    {
        id: "module1_toParis",
        name: "CHAPTER 01: 파리로 떠나자!",
        description: "여행 준비를 마치고, 파리로 떠나봅시다. 공항에서 숙소까지 찾아가고, 호텔에 체크인해봅시다.",
        startScene: getIntro2Scene,
        endScene: getHotel5Scene
    },
    {
        id: "module2_first_meal",
        name: "CHAPTER 02: 파리에서의 첫 끼",
        description: "파리에서의 첫 식사를 하고 카페에 방문합시다. 그리고 예상치 못한 돌발 상황에 대처하는 방법을 익힙니다.",
        startScene: getRestaurant1Scene,
        endScene: getCafe4Scene
    },
    {
        id: "module3_promenade",
        name: "CHAPTER 03: 파리 문화 산책",
        description: "파리의 랜드마크에 방문하고 감상해봅시다.",
        startScene: getEiffelTower1Scene,
        endScene: getToilet3Scene
    },
    {
        id: "module4_newCity",
        name: "CHAPTER 04: 새로운 도시로!",
        description: "파리를 벗어나 프랑스의 다른 도시를 탐방해봅시다.",
        startScene: getToilet4Scene,
        endScene: getEnd1Scene
    },
];

// 씬 객체 ID와 모듈 ID 매핑
export const sceneToModuleMap = new Map();
allModules.forEach(module => {
    sceneToModuleMap.set(module.startScene().id, module.id);
});

allModules.forEach(module => {
    sceneToModuleMap.set(module.endScene().id, module.id + "_end");
});