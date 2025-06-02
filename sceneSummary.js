import hotelData from "./data/hotelData.js";

export function getSceneSummaries(currentState) {
    const selectedHotelId = currentState.selectedHotelId || '';
    const currentSelectedDish = currentState.selectedDish || { name: "정보 없음", image: "" };
    const currentSelectedCafe = currentState.selectedCafe || { name: "정보 없음", image: "" };
    const selectedCity = currentState.selectedCity || "null";
    const selectedTransport = currentState.selectedTransport || "null";

    const hotel = hotelData.find(h => h.id === selectedHotelId);

    const summaries = [
        {
            sceneTitle: "🏨 숙소 예약",
            description: hotel
                ? `파리에 가기 전, 파리에서 묵을 숙소를 예약했다. 내가 예약한 숙소의 이름은 ${hotel.name}였다.`
                : "숙소 정보 없음",
            goals: ["숙소 정보 읽고 이해하기"],
            sceneImage: hotel ? hotel.image : ""
        },
        {
            sceneTitle: "✈️ 파리행 비행기",
            description: `부푼 마음을 안고 파리행 비행기를 탔다.`,
            goals: ["프랑스의 지리 이해하기"],
            sceneImage: "assets/images/airplane-window.jpg"
        },
        {
            sceneTitle: "✈️ 파리 도착",
            description: `샤를 드 골 공항에 도착해서, 공항 직원 분과의 대화를 통해 택시 승강장의 위치를 찾고 택시를 탔다. 택시에서는 기사님과 간단한 이야기를 나누었다. 기사님의 칭찬에 프랑스어로 말하는 것에 자신감이 생겼다.`,
            dialogues: ["Excusez-moi, où est la station de taxi ?", "Je viens de Corée."],
            goals: ["위치 묻기", "길 찾기 표현 이해하고 목적지 찾아가기", "국적 묻고 답하기", "파리 공항 택시 정찰제 이해하기"],
            sceneImage: "assets/images/taxiMain.jpeg"
        },
        {
            sceneTitle: "🏨 숙소 도착",
            description: `숙소에 도착해서 프론트 직원 분께 숙소에 관한 설명을 듣고, 내 방에 찾아갔다.`,
            dialogues: ["Vous êtes dans la chambre 305, au troisième étage.", "Le petit déjeuner est servi jusqu'à 9 heures.", "Et n'oubliez pas : pas de bruit après 22 heueres."],
            goals: ["층수 표현 이해하기", "시간 표현 이해하기", "프랑스의 층수 개념"],
            sceneImage: "assets/images/hotelLobbyMain.jpg"
        },
        {
            sceneTitle: "🍴 파리에서의 첫 끼",
            description: `숙소 프론트 직원 분께 식당을 추천 받아 파리에서의 첫 끼를 즐겼다. 내가 주문한 것은 ${currentSelectedDish.name}이다. 최고로 맛있는 한 끼였다!`,
            dialogues: ["Connaissez-vous un bon restaurant près d'ici ?", "Vous êtes combien ?", "Alors ? Que souhaitez-vous commander ?", "Je vais prendre ...", "L'addition, s'il vous plaît."],
            goals: ["갈 만한 곳 추천 받기", "길 찾기 표현 이해하고 목적지 찾아가기", "음식 주문하고 결제하기", "프랑스의 식당 예절 이해하기"],
            sceneImage: currentSelectedDish.image
        },
        {
            sceneTitle: "☕ 커피 한 잔의 여유",
            description: `웨이터의 추천으로 식당 주변에 있는 Cafe de Flore에 방문했다. 역사적으로 유명한 인물들이 자주 드나들었던 곳이다. 카페에서 주문한 ${currentSelectedCafe.name}은 정말이지 최고였다.`,
            dialogues: ["Je voudrais ...", "sur place ou à emporter ?"],
            goals: ["역사적 인물에 대한 소개 이해하기", "음식 주문하고 결제하기"],
            sceneImage: currentSelectedCafe.image
        },
        {
            sceneTitle: "⚠️ 가방 분실",
            description: `카페에서의 여유를 즐기고 있었는데... 내 가방이 사라진 걸 뒤늦게 알아채고 말았다. 이럴 수가... 황급히 식당으로 돌아가보았지만 가방은 이미 사라진 뒤였다. 앞으로는 더 조심해야지.`,
            dialogues: ["J'ai mangé ici il y a 30 minutes.", "Je pense avoir oublié quelques chose ici.", "Est-ce que vous l'avez vu ?", "Peut-être que quelqu'un l'a pris."],
            goals: ["돌발 상황에 침착하게 대처하기"],
            sceneImage: `assets/images/restaurantMainBg.png`
        },
        {
            sceneTitle: "📷 에펠탑 에피소드",
            description: `프랑스 파리를 대표하는 랜드마크, 에펠탑을 보러 갔다. 에펠탑 앞에서, 처음 보는 사람과 프랑스어로 간단한 이야기도 나누었다. 인스타에 올릴 사진도 잔뜩 찍었다.`,
            dialogues: ["Il ne fait pas beau aujourd'hui ?", "Si, il fait beau aujourd'hui.", "Pouvez-vous me prendre en photo, s'il vous plaît ?"],
            goals: ["부정 의문문에 답변하기", "공손한 부탁표현 활용하기"],
            sceneImage: `assets/images/eiffel-tower.jpg`
        },
        {
            sceneTitle: "🖼️ 루브르 박물관 관람",
            description: `티켓을 구매하여 루브르 박물관을 관람했다. 인터넷에서만 보던 유명 작품들을 눈으로 직접 보다니! 너무나도 신기하고 재미있는 경험이었다.`,
            dialogues: ["Vous ne pouvez pas entrer sans billet ou billet électronique.", "Il y a assez d'œuvres pour vous occuper toute la journée !", "Bonne visite !", "Par contre, merci de ne pas utiliser le flash.", "Il est interdit de manger dans les salles."],
            goals: ["티켓 설명 이해하고 필요한 티켓 구매하기", "허가와 금지에 대한 표현 이해하기", "루브르 박물관 전시 작품 감상하기"],
            sceneImage: `assets/images/museeDuLouvre.jpg`
        },
        {
            sceneTitle: "🚻 화장실 이용하기",
            description: `프랑스의 공중화장실을 처음으로 이용해보았다. 이전에 인스타그램에서 프랑스의 유료 공중화장실에 대한 게시물을 본 적이 있었는데, 실제로 돈을 내고 공중화장실을 이용하는 것은 정말 색다른 경험이었다.`,
            dialogues: ["Où sont les toilettes, s'il vous plaît ?", "Vous passez devant ce bâtiment là-bas.", "puis vous continuez tout droit."],
            goals: ["프랑스 공중화장실 이용 관련 설명 이해하기"],
            sceneImage: `assets/images/toiletsOverlay.png`
        },
    ];

    const cityScenes = {
        lyon: {
            train: {
                sceneTitle: "✈️ 리옹 제대로 즐기기",
                description: `리옹행 기차를 타고 리옹에 가려는데... 기차 파업으로 인해 기차가 10분 늦게 출발했다. 다행히 큰 문제가 되지는 않았고, 나름? 신선한 경험이었다. 리옹에서는 "영화와 미니어처 박물관", "푸르비에르 대성당", "떼뜨 도흐 공원"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le train a été retardé à cause de la grève.", "Quand est-ce qu'il va arriver ?", "Le train partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "리옹 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 작품 관람하기"],
                sceneImage: `assets/images/lyonStreet.jpg`
            },
            bus: {
                sceneTitle: "✈️ 리옹 제대로 즐기기",
                description: `리옹행 버스를 타고 리옹으로 이동했다. 리옹에서는 "영화와 미니어처 박물관", "푸르비에르 대성당", "떼뜨 도흐 공원"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le bus partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "리옹 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 작품 관람하기"],
                sceneImage: `assets/images/lyonStreet.jpg`
            },
            airport: {
                sceneTitle: "✈️ 리옹 제대로 즐기기",
                description: `리옹행 비행기를 타고 리옹으로 이동했다. 리옹에서는 "영화와 미니어처 박물관", "푸르비에르 대성당", "떼뜨 도흐 공원"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller à la porte numéro douze."],
                goals: ["교통편 정보 읽고 이해하기", "리옹 문화 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 작품 관람하기"],
                sceneImage: `assets/images/lyonStreet.jpg`
            }
        },

        marseille: {
            train: {
                sceneTitle: "✈️ 마르세유 제대로 즐기기",
                description: `마르세유행 기차를 타고 마르세유에 가려는데... 기차 파업으로 인해 기차가 10분 늦게 출발했다. 다행히 큰 문제가 되지는 않았고, 나름? 신선한 경험이었다. 마르세유에서는 "유럽 지중해 박물관", "노트르담 드 라 가르드 대성당", "마르세유 구 항구"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le train a été retardé à cause de la grève.", "Quand est-ce qu'il va arriver ?", "Le train partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "마르세유 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 작품 관람하기"],
                sceneImage: `assets/images/marseilleStreet.jpg`
            },
            bus: {
                sceneTitle: "✈️ 마르세유 제대로 즐기기",
                description: `마르세유행 버스를 타고 마르세유로 이동했다. 마르세유에서는 "유럽 지중해 박물관", "노트르담 드 라 가르드 대성당", "마르세유 구 항구"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le bus partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "마르세유 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 작품 관람하기"],
                sceneImage: `assets/images/marseilleStreet.jpg`
            },
            airport: {
                sceneTitle: "✈️ 마르세유 제대로 즐기기",
                description: `마르세유행 비행기를 타고 마르세유로 이동했다. 마르세유에서는 "유럽 지중해 박물관", "노트르담 드 라 가르드 대성당", "마르세유 구 항구"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller à la porte numéro douze."],
                goals: ["교통편 정보 읽고 이해하기", "마르세유 문화 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 작품 관람하기"],
                sceneImage: `assets/images/marseilleStreet.jpg`
            }
        },

        strasbourg: {
            train: {
                sceneTitle: "✈️ 스트라스부르 제대로 즐기기",
                description: `스트라스부르행 기차를 타고 스트라스부르에 가려는데... 기차 파업으로 인해 기차가 10분 늦게 출발했다. 다행히 큰 문제가 되지는 않았고, 나름? 신선한 경험이었다. 스트라스부르에서는 "클레베르 광장", "스트라스부르 노트르담 대성당", "쁘띠 프랑스"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le train a été retardé à cause de la grève.", "Quand est-ce qu'il va arriver ?", "Le train partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "스트라스부르 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기"],
                sceneImage: `assets/images/strasbourgStreet.jpg`
            },
            bus: {
                sceneTitle: "✈️ 스트라스부르 제대로 즐기기",
                description: `스트라스부르행 버스를 타고 스트라스부르로 이동했다. 스트라스부르에서는 "클레베르 광장", "스트라스부르 노트르담 대성당", "쁘띠 프랑스"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le bus partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "스트라스부르 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기"],
                sceneImage: `assets/images/strasbourgStreet.jpg`
            },
            airport: {
                sceneTitle: "✈️ 스트라스부르 제대로 즐기기",
                description: `스트라스부르행 비행기를 타고 스트라스부르로 이동했다. 스트라스부르에서는 "클레베르 광장", "스트라스부르 노트르담 대성당", "쁘띠 프랑스"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller à la porte numéro douze."],
                goals: ["교통편 정보 읽고 이해하기", "스트라스부르 문화 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기"],
                sceneImage: `assets/images/strasbourgStreet.jpg`
            }
        },

        bordeaux: {
            train: {
                sceneTitle: "✈️ 보르도 제대로 즐기기",
                description: `보르도행 기차를 타고 보르도에 가려는데... 기차 파업으로 인해 기차가 10분 늦게 출발했다. 다행히 큰 문제가 되지는 않았고, 나름? 신선한 경험이었다. 보르도에서는 "보르도 대성당", "부르스 광장", "보르도 와인 체험 박물관"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le train a été retardé à cause de la grève.", "Quand est-ce qu'il va arriver ?", "Le train partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "보르도 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 프로그램 참여하기"],
                sceneImage: `assets/images/bordeauxStreet.jpg`
            },
            bus: {
                sceneTitle: "✈️ 보르도 제대로 즐기기",
                description: `보르도행 버스를 타고 보르도로 이동했다. 보르도에서는 "보르도 대성당", "부르스 광장", "보르도 와인 체험 박물관"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller au quai numéro douze.", "Le bus partira dans une minute.", "Il est interdit de fumer ou de vapoter dans tout le train."],
                goals: ["교통편 정보 읽고 이해하기", "보르도 문화 이해하기", "안내 방송 듣고 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 프로그램 참여하기"],
                sceneImage: `assets/images/bordeauxStreet.jpg`
            },
            airport: {
                sceneTitle: "✈️ 보르도 제대로 즐기기",
                description: `보르도행 비행기를 타고 보르도로 이동했다. 보르도에서는 "보르도 대성당", "부르스 광장", "보르도 와인 체험 박물관"를 둘러보았다. 파리와는 색다른 매력을 가진 아름다운 도시였다.`,
                dialogues: ["Vous devez aller à la porte numéro douze."],
                goals: ["교통편 정보 읽고 이해하기", "보르도 문화 이해하기", "가격 표현 이해하기", "각 장소의 소개글 읽고 이해하기", "박물관 프로그램 참여하기"],
                sceneImage: `assets/images/bordeauxStreet.jpg`
            }
        },
    };

    const city = selectedCity;
    const transport = selectedTransport;
    const extra = cityScenes[city]?.[transport];

    if (extra) {
        summaries.push(extra);
    }

    return summaries;
}