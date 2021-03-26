const clock = document.getElementById('jsClock');
const day = document.getElementById('day');
let now = "morning" 
const link = document.getElementById('link');

const status = document.getElementById('status');

function handleClock(){
    const date = new Date();
    const month = date.getMonth();
    const currentDate = date.getDate();
    let currentDay = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const days = ["일","월","화","수","목","금","토"];
    currentDay = days[currentDay];
    day.innerText = `${month+1}월 ${currentDate}일 ${currentDay}요일`;
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    if(hours >= 7){
        now = "morning";
        status.innerText = '좋은 아침!';
    }
    if(hours == 8 && minutes > 44){
        now = 'greetings';
        status.innerText = '조례 시간!';
    }
    if(hours == 9 && minutes < 45){
        now = "first";
        status.innerText = '1교시 수업 듣자!';
    }
    if(hours == 9 && minutes > 44 && minutes < 55){
        now = "break";
        status.innerText = '쉬는 시간! 다음은 2교시! 미리 준비하자!';
    }
    if(hours == 9 && minutes > 54){
        now = "second";
        status.innerText = '2교시 수업 듣자!';
    }
    if(hours == 10 && minutes < 40){
        now = "second";
        status.innerText = '2교시 수업 듣자!';
    }
    if(hours == 10 && minutes > 39 && minutes < 50){
        now = "break";
        status.innerText = '쉬는 시간! 다음은 3교시! 미리 준비하자!'
    }
    if(hours == 10 && minutes > 49){
        now = "third";
        status.innerText = '3교시 수업 듣자!';
    }
    if(hours == 11 && minutes < 35){
        now = "third";
        status.innerText = '3교시 수업 듣자!';
    }
    if(hours == 11 && minutes > 34 && minutes < 45){
        now = "break";
        status.innerText = '쉬는 시간! 다음은 4교시! 미리 준비하자!';
    }
    if(hours == 11 && minutes > 44){
        now = "forth";
        status.innerText = '4교시 수업 듣자!';
    }
    if(hours == 12 && minutes < 30){
        now ="forth";
        status.innerText = '4교시 수업 듣자!';
    }
    if(hours == 12 && minutes > 29){
        now = 'lunch';
        status.innerText = '점심 맛있게 드세요!! 냠냠쩝쩝🍽';
    }
    if(hours == 13 && minutes < 20){
        now = "lunch";
        status.innerText = '점심 맛있게 드세요!! 냠냠쩝쩝🍽';
    }
    if(hours == 13 && minutes > 19){
        now = 'fifth';
        status.innerText = '5교시 수업 듣자!';
    }
    if(hours == 14 && minutes < 5){
        now = 'fifth';
        status.innerText = '5교시 수업 듣자!';
    }
    if(hours == 14 && minutes > 4 && minutes < 15){
        now = 'break';
        status.innerText = '쉬는 시간! 다음은 6교시! 미리 준비하자!';
    }
    if(hours == 14 && minutes > 14){
        now = 'sixth';
        status.innerText = '6교시 수업 듣자!'
    }
    if(hours == 15 && minutes >= 0 && minutes < 10 && currentDay == "화"){
        now = 'break';
        status.innerText = '쉬는 시간! 다음은 7교시! 미리 준비하자!';
    }
    if(hours == 15 && minutes > 9 && minutes < 55 && currentDay == "화"){
        now = 'seventh';
        status.innerText = '7교시 수업 듣자!';
    }
    if(hours == 15 && minutes > 55){
        now = 'end';
        status.innerText = '좋은 하루 보내세요!!';
    }
    if(hours == 15 && currentDay != "화"){
        now = "end";
        status.innerText = '좋은 하루 보내세요!!';
    }
    if(hours >= 16){
        now = 'end';
        status.innerText = '좋은 하루 보내세요!!';
    }
    if(hours >= 22 || hours <= 6 ){
        now = 'night';
        status.innerText = '🥱하암... 좋은 밤 되세용';
    }
    if(currentDay == "토" || currentDay == "일"){
        now = 'weekend';
        status.innerText = '좋은 주말 보내세요!';
    }

    if(now == "end" || now == "break"){
        link.innerHTML = ''
    }
    if(now == "morning"){
        link.innerHTML = '<a href="https://www.youtube.com/watch?v=zpltA8F2M4Q" target="_blank">일어났을 때 들으면 좋은 곡!</a>'
    }
    if(now == "night"){
        link.innerHTML = '<a href="https://www.youtube.com/watch?v=p2fxv3PAtLU" target="_blank">잘 때 들으면 좋은 노래!</a>'
    }
    if(now == "weekend"){
        link.innerHTML = ''
    }

    if(currentDay == "월"){
        if(now == "break"){
            link.innerHTML = ''
            return;
        }
        if(now == "first"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/3868812541" target="_blank">국어 수업 바로가기</a>'
            return;
        }
        if(now == "second"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/5563815022" target="_blank">사회 수업 바로가기</a>'
            return;
        }
        if(now == "third"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/4224232918" target="_blank">과학 수업 바로가기</a>'
            return;
        }
        if(now == "forth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/8107031918" target="_blank">기술 수업 바로가기</a>'
            return;
        }
        if(now == "fifth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/4391736098" target="_blank">영어 수업 바로가기</a>'
            return;
        }
        if(now == "sixth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/9452660383" target="_blank">수학 수업 바로가기</a>'
            return;
        }
    }
    if(currentDay == "화"){
        if(now == "break"){
            link.innerHTML = ''
            return;
        }
        if(now == "first"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/6323632460" target="_blank">정보 수업 바로가기</a>'
            return;
        }
        if(now == "second"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/3868812541" target="_blank">국어 수업 바로가기</a>'
            return;
        }
        if(now == "third"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/3810868460" target="_blank">가정 수업 바로가기</a>'
            return;
        }
        if(now == "forth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/8810428701" target="_blank">음악 수업 바로가기</a>'
            return;
        }
        if(now == "fifth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/7436891712" target="_blank">진로 수업 바로가기</a>'
            return;
        }
        if(now == "sixth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/2057943242" target="_blank">체육 수업 바로가기</a>'
            return;
        }
        if(now == "seventh"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/9452660383" target="_blank">수학 수업 바로가기</a>'
            return;
        }
    }
    if(currentDay == "수"){
        if(now == "break"){
            link.innerHTML = ''
            return;
        }
        if(now == "first"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/4391736098" target="_blank">영어 수업 바로가기</a>'
            return;
        }
        if(now == "second"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/4224232918" target="_blank">과학 수업 바로가기</a>'
            return;
        }
        if(now == "third"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/7517978872" target="_blank">도덕 수업 바로가기</a>'
            return;
        }
        if(now == "forth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/9452660383" target="_blank">수학 수업 바로가기</a>'
            return;
        }
        if(now == "fifth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/2057943242" target="_blank">체육 수업 바로가기</a>'
            return;
        }
        if(now == "sixth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/5563815022" target="_blank">사회 수업 바로가기</a>'
            return;
        }
    }
    if(currentDay == "목"){
        if(now == "break"){
            link.innerHTML = ''
            return;
        }
        if(now == "first"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/9452660383" target="_blank">수학 수업 바로가기</a>'
            return;
        }
        if(now == "second"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/8810428701" target="_blank">음악 수업 바로가기</a>'
            return;
        }
        if(now == "third"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/4391736098" target="_blank">영어 수업 바로가기</a>'
            return;
        }
        if(now == "forth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/2057943242" target="_blank">체육 수업 바로가기</a>'
            return;
        }
        if(now == "fifth"){
            link.innerHTML = '주제 수업은 알아서 찾아가기!'
        }
        if(now == "sixth"){
            link.innerHTML = '주제 수업은 알아서 찾아가기!'
        }
    }
    if(currentDay == "금"){
        if(now == "break"){
            link.innerHTML = ''
            return;
        }
        if(now == "first"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/7517978872" target="_blank">도덕 수업 바로가기</a>'
        }
        if(now == "second"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/4661706770" target="_blank">스포츠 수업 바로가기</a>'
        }
        if(now == "third"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/3868812541" target="_blank">국어 수업 바로가기</a>'
        }
        if(now == "forth"){
            link.innerHTML = '<a href="https://us02web.zoom.us/j/5563815022" target="_blank">사회 수업 바로가기</a>'
        }
        if(now == "fifth"){
            link.innerHTML = '주제 수업은 알아서 찾아가기!'
        }
        if(now == "sixth"){
            link.innerHTML = '주제 수업은 알아서 찾아가기!'
        }
    }
}
handleClock();
setInterval(handleClock,1000);

const lunchMenu = {
    menu:[
        {
            "date":"1",
            "lunch":[
                
            ]
        },
        {
            "date":"2",
            "lunch":[
                "현미밥",
                "북어채미역국",
                "삼색냉채",
                "닭갈비",
                "배추김치",
                "티라미슈케이크"
            ]
        },
        {
            "date":"3",
            "lunch":[
                "계란파국",
                "나박김치",
                "나물비빔밥",
                "핫도그와케찹",
                "요구르트",
                "계란파국"
            ]
        },
        {
            "date":"4",
            "lunch":[
                "해물순두부찌개",
                "옥수수밥",
                "목살찹스테이크",
                "생크림요거트",
                "애호박새송이볶음",
                "깍두기",
                "해물순두부찌개"
            ]
        },
        {
            "date":"5",
            "lunch":[
                "찰보리밥",
                "설렁탕",
                "생선살강정",
                "오이생채",
                "석박지",
                "딸기",
                "오이생채",
                "생선살강정"
            ]
        },
        {
            "date":"6",
            "lunch":[
                
            ]
        },
        {
            "date":"7",
            "lunch":[
                
            ]
        },
        {
            "date":"8",
            "lunch":[
                "애호박전",
                "잡곡밥",
                "맑은콩나물국",
                "매운돼지갈비찜",
                "배추김치",
                "그린샐러드",
                "매운돼지갈비찜"
            ]
        },
        {
            "date":"9",
            "lunch":[
                "현미밥",
                "파닭",
                "깍두기",
                "돈육김치찌개",
                "삼색감자채볶음",
                "짜먹는요거트 ",
                "돈육김치찌개"
            ]
        },
        {
            "date":"10",
            "lunch":[
                "미트소스스파게티",
                "카프레제",
                "마늘빵",
                "오이피클",
                "아침에쥬스",
                "미트소스스파게티"
            ]
        },
        {
            "date":"11",
            "lunch":[
                "잡곡밥",
                "감자탕",
                "임연수유자청구이",
                "야채떡볶이",
                "깍두기",
                "청포도"
            ]
        },
        {
            "date":"12",
            "lunch":[
                "보리밥",
                "건새우아욱국",
                "흑초오리불고기",
                "참나물초무침",
                "김구이",
                "배추김치",
                "카라멜파이",
                "참나물초무침",
                "흑초오리불고기"
            ]
        },
        {
            "date":"13",
            "lunch":[
                
            ]
        },
        {
            "date":"14",
            "lunch":[
                
            ]
        },
        {
            "date":"15",
            "lunch":[
                "잡곡밥",
                "후르츠탕수육",
                "도토리묵무침",
                "동태매운탕",
                "배추김치",
                "생크림요거트",
                "동태매운탕",
                "후르츠탕수육"
            ]
        },
        {
            "date":"16",
            "lunch":[
                "찰보리밥",
                "바지락냉이된장국",
                "쌈장",
                "허브삼겹살구이",
                "무쌈",
                "콩나물부추무침",
                "배추겉절이",
                "요구르트"
            ]
        },
        {
            "date":"17",
            "lunch":[
                "토마토그린샐러드",
                "카레라이스",
                "밀또띠아피자",
                "배추김치",
                "오렌지쥬스",
                "카레라이스"
            ]
        },
        {
            "date":"18",
            "lunch":[
                "현미밥",
                "삼색조랭이떡국",
                "수제떡갈비구이",
                "도라지오이생채",
                "배추김치",
                "배"
            ]
        },
        {
            "date":"19",
            "lunch":[
                
            ]
        },
        {
            "date":"20",
            "lunch":[
                
            ]
        },
        {
            "date":"21",
            "lunch":[
                
            ]
        },
        {
            "date":"22",
            "lunch":[
                "보리밥",
                "육개장",
                "돈육메추리알조림",
                "피망잡채",
                "깍두기",
                "파인애플"
            ]
        },
        {
            "date":"23",
            "lunch":[
                "배추김치",
                "찰흑미밥",
                "꽃게탕",
                "소세지구이허니머스타드 ",
                "야채계란말이",
                "파래자반",
                "바나나우유"
            ]
        },
        {
            "date":"24",
            "lunch":[
                "잔치국수",
                "새우튀김&케찹",
                "배추겉절이",
                "꿀떡",
                "식혜",
                "잔치국수",
                "타르타르소스"
            ]
        },
        {
            "date":"25",
            "lunch":[
                "완두콩밥",
                "김치콩나물국",
                "포크커틀렛",
                "브라운소스",
                "꽃맛살샐러드",
                "오이김치"
            ]
        },
        {
            "date":"26",
            "lunch":[
                "쇠고기곤드레나물밥&양념장",
                "다시마무국",
                "무조미김",
                "닭다리양념구이",
                "열무김치",
                "방울토마토"
            ]
        },
        {
            "date":"27",
            "lunch":[
                
            ]
        },
        {
            "date":"28",
            "lunch":[
                
            ]
        },
        {
            "date":"29",
            "lunch":[
                "현미밥",
                "부대찌개",
                "교촌치킨",
                "깍두기",
                "유채나물된장무침",
                "오렌지"
            ]
        },
        {
            "date":"30",
            "lunch":[
                "보리밥",
                "쇠고기미역국",
                "불낙볶음",
                "탕평채",
                "배추김치",
                "도너츠"
            ]
        },
        {
            "date":"31",
            "lunch":[
                "군만두",
                "멕시칸샐러드",
                "깍두기",
                "마파두부덮밥",
                "사과쥬스"
            ]
        }
    ]
}

const previousLunch = document.getElementById('previousLunch');
const todayLunch = document.getElementById('todayLunch');
const nextLunch = document.getElementById('nextLunch');

function upadateLunch(){
    const date = new Date();
    const currentDate = date.getDate();
    console.log(currentDate);
    const yesterday = lunchMenu.menu[currentDate-2].lunch;
    const today = lunchMenu.menu[currentDate-1].lunch;
    const tommorow = lunchMenu.menu[currentDate].lunch;
    if(yesterday.length == 0){
        yesterday.push("어제는 급식이 없었어요!");
    }
    if(today.length == 0){
        today.push("오늘은 급식이 없어요!");
    }
    if(tommorow == 0){
        tommorow.push("내일은 급식이 없어요!");
    }
    console.log(today,tommorow)
    previousLunch.innerText = yesterday;
    todayLunch.innerText = today;
    nextLunch.innerText = tommorow;
}

upadateLunch()

//고민 목록
const lists = ["승주가 말함미다! <unexpected error : ¹®ÀÚ ±úÁü Å×½ºÆ®> 이런거 보내지 마세욧 안속아욥","우리 회장 일 안한다!", "아 철수 오늘 영희 뒷담깜", "샌즈가 좋아"]

const previousBTN = document.getElementById('previous');
const nextBTN = document.getElementById('next');
const text = document.getElementById('text');
let checker = 0

const setText = ()=>{
    text.innerText = lists[checker];
}

setText()

function goNext(){
   if(checker == lists.length-1){
      checker = 0;
      setText()
      return;
   }
   checker++;
   setText()
   console.log(checker);
}

function goPrevious(){
   if(checker == 0){
      checker = lists.length-1;
      setText()
      return;
   }
   checker--;
   setText()
   console.log(checker);
}

setInterval(goNext, 5000);

(function(){
    emailjs.init("user_PpVc36LLtrPTrw7WlrhXE");
 })();

 const emailForm = document.getElementById('emailForm');


 function sendEmail(event){
   event.preventDefault();
   emailjs.send('service_r4a0nlq', 'template_vbksl5h',{message: document.getElementById('emailInput').value}).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('고민이 정상적으로 전송되었습니다.');
   }, function(error) {
       console.log('FAILED...', error);
       alert('고민 전송에 오류가 생겼습니다. 다시 시도해주십시오.');
   });
};

emailForm.addEventListener('submit', sendEmail);