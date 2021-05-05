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
    if(hours == 9 && minutes > 44 && minutes < 50){
        now = "break";
        status.innerText = '쉬는 시간! 다음은 2교시! 미리 준비하자!';
    }
    if(hours == 9 && minutes > 49){
        now = "second";
        status.innerText = '2교시 수업 듣자!';
    }
    if(hours == 10 && minutes < 40){
        now = "second";
        status.innerText = '2교시 수업 듣자!';
    }
    if(hours == 10 && minutes > 39 && minutes < 45){
        now = "break";
        status.innerText = '쉬는 시간! 다음은 3교시! 미리 준비하자!'
    }
    if(hours == 10 && minutes > 44){
        now = "third";
        status.innerText = '3교시 수업 듣자!';
    }
    if(hours == 11 && minutes < 35){
        now = "third";
        status.innerText = '3교시 수업 듣자!';
    }
    if(hours == 11 && minutes > 34 && minutes < 40){
        now = "break";
        status.innerText = '쉬는 시간! 다음은 4교시! 미리 준비하자!';
    }
    if(hours == 11 && minutes > 39){
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
    if(hours == 13 && minutes < 15){
        now = 'lunch';
        status.innerText = '점심 맛있게 드세요!! 냠냠쩝쩝🍽';
    }
    if(hours == 13 && minutes > 14){
        now = 'fifth';
        status.innerText = '5교시 수업 듣자!';
    }
    if(hours == 14 && minutes < 5){
        now = 'fifth';
        status.innerText = '5교시 수업 듣자!';
    }
    if(hours == 14 && minutes > 4 && minutes < 10){
        now = 'break';
        status.innerText = '쉬는 시간! 다음은 6교시! 미리 준비하자!';
    }
    if(hours == 14 && minutes > 9){
        now = 'sixth';
        status.innerText = '6교시 수업 듣자!'
    }
    if(hours == 15 && minutes >= 0 && minutes < 5 && currentDay == "화"){
        now = 'break';
        status.innerText = '쉬는 시간! 다음은 7교시! 미리 준비하자!';
    }
    if(hours == 15 && minutes > 4 && minutes < 55 && currentDay == "화"){
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
    if(now == "greetings"){
        link.innerHTML = '<a href="https://us02web.zoom.us/j/4391736098" target="_blank">담임쌤 수업 바로가기</a>'
    }
    if(now == "lunch"){
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
        date:"1",
        lunch:[
            
        ]
    },
    {
        date:"2",
        lunch:[
            
        ]
    },
    {
        date:"3",
        lunch:[
            "쇠고기애호박국",
            "가자미오븐구이1",
            "배추김치",
            "고추장떡볶이&김말이튀김1",
            "찰기장밥"
        ]
    },
    {
        date:"4",
        lunch:[
            "미트소스스파게티(주식)1",
            "깍두기*",
            "바게뜨 마늘빵",
            "케이준치킨샐러드",
            "찹쌀밥",
            "한라봉퓨레"
        ]
    },
    {
        date:"5",
        lunch:[
            
        ]
    },
    {
        date:"6",
        lunch:[
            
        ]
    },
    {
        date:"7",
        lunch:[
            
        ]
    },
    {
        date:"8",
        lunch:[
            
        ]
    },
    {
        date:"9",
        lunch:[
            
        ]
    },
    {
        date:"10",
        lunch:[
            "해물짬뽕국1",
            "깐쇼새우1",
            "가지굴소스볶음",
            "배추김치*",
            "발아현미밥",
            "발효요구르트"
        ]
    },
    {
        date:"11",
        lunch:[
            "찹쌀밥",
            "삼계탕",
            "쫄면야채무침",
            "빙글소떡말이",
            "열무김치*",
            "매실음료"
        ]
    },
    {
        date:"12",
        lunch:[
            "찹쌀밥",
            "감자크림스프",
            "깍두기*",
            "빠네",
            "목살찹스테이크*",
            "오이지무침"
        ]
    },
    {
        date:"13",
        lunch:[
            "찰보리밥",
            "낙지수제비",
            "돼지갈비찜",
            "도라지오이생채",
            "열무김치*",
            "대추방울토마토",
            "요구르트*"
        ]
    },
    {
        date:"14",
        lunch:[
            "우리밀케이크",
            "현미찹쌀밥",
            "골뱅이초무침",
            "배추김치*",
            "바지락살미역국",
            "소불고기"
        ]
    },
    {
        date:"15",
        lunch:[
            
        ]
    },
    {
        date:"16",
        lunch:[
            
        ]
    },
    {
        date:"17",
        lunch:[
            "현미찹쌀밥",
            "비타민치커리겉절이",
            "수제함박스테이크",
            "웨지감자오븐구이",
            "배추김치",
            "오징어애호박국",
            "요구르트"
        ]
    },
    {
        date:"18",
        lunch:[
            "쇠고기곤드레나물밥&양념장1",
            "다시마무국",
            "무조미김",
            "흑초오리불고기*",
            "배추겉절이",
            "애호박전"
        ]
    },
    {
        date:"19",
        lunch:[
            
        ]
    },
    {
        date:"20",
        lunch:[
            "찹쌀밥",
            "해물볶음우동",
            "치킨커틀렛/카레소스",
            "깍두기",
            "연두부팽이버섯된장국",
            "아이스망고"
        ]
    },
    {
        date:"21",
        lunch:[
            "쇠고기무국",
            "돼지고기김치찜",
            "두부구이&양념장*",
            "잡곡밥",
            "오이생채*",
            "쵸코생크림 찹쌀떡(아이스)"
        ]
    },
    {
        date:"22",
        lunch:[
            
        ]
    },
    {
        date:"23",
        lunch:[
            
        ]
    },
    {
        date:"24",
        lunch:[
            "찰보리밥",
            "간장돼지불고기*",
            "김치콩나물국",
            "열무김치*",
            "양배추쌈&쌈장*",
            "고구마치즈롤&단호박튀김"
        ]
    },
    {
        date:"25",
        lunch:[
            "현미밥",
            "육개장",
            "타코야끼",
            "석박지*",
            "건새우마늘쫑볶음*",
            "아이스크림"
        ]
    },
    {
        date:"26",
        lunch:[
            "하이라이스1",
            "허브치킨샐러드1",
            "배추김치*",
            "생크림와플",
            "블루베리"
        ]
    },
    {
        date:"27",
        lunch:[
            "낙지철판볶음",
            "김구이*",
            "배추김치*",
            "찰기장밥",
            "양상추흑임자샐러드",
            "감자옹심이국",
            "딸기우유*"
        ]
    },
    {
        date:"28",
        lunch:[
            "찰흑미밥",
            "부대찌개(양영)",
            "삼색냉채*",
            "닭봉바베큐구이",
            "열무김치*",
            "캐플쥬스"
        ]
    },
    {
        date:"29",
        lunch:[
            
        ]
    },
    {
        date:"30",
        lunch:[
            
        ]
    },
    {
        date:"31",
        lunch:[
            "찰기장밥",
            "쇠고기버섯샤브샤브",
            "실곤약야채무침",
            "또띠아 치즈핫도그",
            "배추김치",
            "파인애플"
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
const lists = ["숙제는 많은데 시간은 없고,,,","학교 수학 숙제 없애줘ㅓㅓㅓㅓㅓ","온클 지루해...","학교가기 너무 귀찮다다다다다다다다다아아아아아아ㅏ아ㅠㅠ","읔.. 과학 싫어","온라인 수업하기 시러ㅓㅓ","친구 사귀기가 힘드러ㅜㅜㅜ","체육부장사퇴하라!","온라인 수업 싫어......","우리 등교 안할때만 급식이 맛있는거 나와...ㅠㅠ","이승주. 말투가.너무.귀엽다.미치겠다.","친구 사귀기 귀찮아","숙제 시러","좋아하는 애가 있는데 같은 반이 아니야아아아아아 주제선택도 다른거고오오오 어떡해애애애애애애애애애애","숙제가 넘모 많아ㅏㅏㅏ 학원도가기 시렁","아 숙제가 너무 많아아아아","좋아하는 애가 있는데 어떻게 할지 모르겠어요..","승주가 말함미다! <unexpected error : ¹®ÀÚ ±úÁü Å×½ºÆ®> 이런거 보내지 마세욧 안속아욥","우리 회장 일 안한다!", "아 철수 오늘 영희 뒷담깜", "샌즈가 좋아"]

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