var questions = [
    {
        question: "오래 기다려 온 연극을 보러간 당신, 두근두근하며 자리에 앉아 관람을 시작한다. 한창 집중해 보고 있는데 옆자리 관객이 알고 보니 빌런이다. 이때 당신은?",
        answers: [
            { value: "E", text: "조금 조용히 해 달라고 말한다." },
            { value: "I", text: "연극 내내 집중하지 못하지만 옆 사람에게 뭐라 할 용기는 없다." }
        ]
    },
    {
        question: "내가 좋아하는 사람이 내 친구를 좋아할 때 나는,",
        answers: [
            { value: "B", text: "아직 기회는 있어!" },
            { value: "G", text: "행복해라..." }
        ]
    },
     {
        question: "2주 뒤 목, 금, 토, 일 연휴네?",
        answers: [
            { value: "L", text: "숙소는 있는가, 맛집은 어디인가?" },
            { value: "C", text: "2주 뒤가 연휴네?" }
        ]
        },
     {
        question: "주말 아침, 친한 친구가 점심 먹자고 부른다.",
        answers: [
            { value: "E", text: "콜!" },
            { value: "I", text: "나 몸이 좀 안 좋은 듯해...." }
        ]
        },
           {
        question: "기후 위기로 식량과 물이 부족한 근미래, 누군가 옆으로 다가와 굶주린 얼굴로 당신을 바라본다. 쌀의 양은 당신 혼자 먹기에도 역부족이다.",
        answers: [
            { value: "G", text: "함께 나눠 먹는다." },
            { value: "B", text: "혼자 먹기에도 부족한데… 무시한다." }
        ]
        },
     {
        question: "이번 주에 봐야 할 연극이 세 편일 때,",
        answers: [
            { value: "C", text: "예매 사이트에서 하루 전에 카톡으로 알려 주던데?" },
            { value: "L", text: "스케줄 미리미리 확인해야지, 극장 어디 있는지도 찾아보고..." }
        ]
        },
     {
        question: "어릴 때 형제, 자매, 친한 친구와 싸울 때 나는,",
        answers: [
            { value: "B", text: "한 대라도 더 때렸지!" },
            { value: "G", text: "한 대라도 덜 맞으려고..." }
        ]
        },
             {
        question: "출퇴근/등하굣길, 서너 걸음 앞에 적당히 친한 동료, 친구가 가고 있다면,",
        answers: [
            { value: "I", text: "걷는 속도를 늦춰 본다" },
            { value: "E", text: "쫓아가 인사한다." }
        ]
        },
     {
        question: "서점에서 나는,",
        answers: [
            { value: "L", text: "분야별 베스트셀러 코너 먼저." },
            { value: "C", text: "발길 닿는 대로." }
        ]
        },
           {
        question: "집에서 거미를 발견했다.",
        answers: [
            { value: "G", text: "살려준다." },
            { value: "B", text: "벌레는 벌레지. 안녕…" }
        ]
        },
     {
        question: "희곡 읽기 모임에 가서,",
        answers: [
            { value: "E", text: "배역과 상황에 알맞은 톤으로 연기를 살짝 가미해서 읽어 본다." },
            { value: "I", text: "차분히 할당된 부분 틀리지 않고 읽는 데 집중한다." }
        ]
        },
     {
        question: "집에 살충제 포함 벌레 퇴치 아이템이,",
        answers: [
            { value: "B", text: "두 개 이상 있다." },
            { value: "G", text: "둘 미만이다." }
        ]
        },
     {
        question: "희곡 인물이 여러 명이다. 헷갈려!",
        answers: [
            { value: "C", text: "끝까지 읽다 보면 알아서 이해되지 않을까?" },
            { value: "L", text: "인물 정리 후 정독해야지!" }
        ]
        },
     {
        question: "너무 좋은 희곡을 발견했다.",
        answers: [
            { value: "I", text: "조용히 나만 알고 있는다." },
            { value: "E", text: "카톡이나 인스스로 바로 누군가에게 추천한다." }
        ]
        }
    // 나머지 질문들 추가
];

// 질문과 답변을 표시하는 함수
function displayQuestion() {
    var questionContainer = document.getElementById('question-container');
    var buttonsContainer = document.getElementById('buttons-container');
    var question = questions[currentQuestionIndex];

    // 질문 컨테이너의 내용을 설정합니다.
    questionContainer.innerHTML = '<p>' + question.question + '</p>';

    // 이전에 생성된 버튼들을 제거합니다.wl
    buttonsContainer.innerHTML = '';

    // 각 답변에 대한 버튼을 생성하고 표시합니다.
    question.answers.forEach(function(answer, index) {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', function() {
            nextQuestion(answer.value);
        });
        buttonsContainer.appendChild(button);
    });
}

// 페이지 로드 시 첫 번째 질문을 표시하는 코드를 호출하는 부분이 이미 마지막에 있으므로, 이 부분은 문제가 없습니다.

var currentQuestionIndex = 0; // 현재 질문의 인덱스

// 응답 카운트를 관리하는 객체
var scores = { E: 0, I: 0, G: 0, B: 0, L: 0, C: 0 };

// 카운터를 초기화합니다.
var counter = {
    E: 0,
    I: 0,
    G: 0,
    B: 0,
    L: 0,
    C: 0
};

// 다음 질문으로 넘어가는 함수
function nextQuestion(answerValue) {
    // 선택한 답변의 값을 카운트합니다.
    counter[answerValue]++;
    
    // 다음 질문 인덱스로 이동합니다.
    currentQuestionIndex++;
    
    // 모든 질문을 마쳤으면 결과를 표시합니다.
    if (currentQuestionIndex === questions.length) {
        displayResult(); // 결과 표시 함수를 호출합니다.
    } else {
        // 다음 질문을 표시합니다.
        displayQuestion();
    }
}

// 결과를 표시하는 함수
function displayResult() {
    var resultPageUrl;

    // E와 I 중에서 선택
    var EI = counter['E'] >= 3 ? 'E' : 'I';
    
    // G와 B 중에서 선택
    var GB = counter['G'] >= 3 ? 'G' : 'B';
    
    // L, C, N 중에서 선택
    var LC;
    if (counter['L'] >= 3) LC = 'L';
    else if (counter['C'] >= 3) LC = 'C';
    else if (counter['L'] === 2 && counter['C'] === 2) LC = 'N';
    else LC = counter['L'] > counter['C'] ? 'L' : 'C';

    // 최종 결과 문자열을 결정합니다.
    var result = EI + GB + LC;

    // 결과 문자열에 따라 해당 결과 페이지 URL을 결정합니다.
    switch(result) {
        case 'EGL':
            resultPageUrl = 'results/egl.html';
            break;
        case 'EGN':
            resultPageUrl = 'results/egn.html';
            break;
        case 'EGC':
            resultPageUrl = 'results/egc.html';
            break;
        case 'EBL':
            resultPageUrl = 'results/ebl.html';
            break;
        case 'EBN':
            resultPageUrl = 'results/ebn.html';
            break;
        case 'EBC':
            resultPageUrl = 'results/ebc.html';
            break;
        case 'IGL':
            resultPageUrl = 'results/igl.html';
            break;
        case 'IGN':
            resultPageUrl = 'results/ign.html';
            break;
        case 'IGC':
            resultPageUrl = 'results/igc.html';
            break;
        case 'IBL':
            resultPageUrl = 'results/ibl.html';
            break;
        case 'IBN':
            resultPageUrl = 'results/ibn.html';
            break;
        case 'IBC':
            resultPageUrl = 'results/ibc.html';
            break;
        default:
            resultPageUrl = 'index.html'; // 기본적으로 홈페이지나 결과가 없는 경우를 위한 페이지
    }

    // 사용자를 해당 결과 페이지로 리디렉션합니다.
    window.location.href = resultPageUrl;
}


// 페이지 로드 시 첫 번째 질문을 표시합니다.
// displayQuestion(); // 이 부분은 주석 처리 또는 삭제합니다. 이벤트 리스너 내부에서 호출될 것입니다.

document.addEventListener('DOMContentLoaded', function(event) {
    var startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function() {
        // "시작하기" 버튼을 숨깁니다.
        startButton.style.display = 'none';

        // 질문과 답변 버튼 컨테이너를 보이게 합니다.
        document.getElementById('question-container').style.display = 'block';
        document.getElementById('buttons-container').style.display = 'block';

        // 첫 번째 질문을 표시합니다.
        displayQuestion();
    });
});

// 트위터 공유
document.querySelector('.twitter-share-button').addEventListener('click', function(e) {
  e.preventDefault();
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(document.URL)}&text=${encodeURIComponent(document.title)}`;
  window.open(shareUrl, 'twitterwindow', 'height=300,width=600');
});
