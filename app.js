const clock = document.getElementById('jsClock');
const day = document.getElementById('day');
let now = "morning" 
const link = document.getElementById('link');


const timeTable = [
    {
        mon : {
            first : "language",
            second : "social",
            third : "science",
            forth : "tech",
            fifth : "english",
            sixth: "math",
            seventh: "none"
        },
        tue: {
            first : "info",
            second : "language",
            third : "home",
            forth : "music",
            fifth : "career",
            sixth: "pe",
            seventh: "math"
        },
        wed: {
            first : "english",
            second : "science",
            third : "mind",
            forth : "math",
            fifth : "pe",
            sixth: "social",
            seventh: "none"
        },
        thu: {
            first : "math",
            second : "music",
            third : "english",
            forth : "pe",
            fifth : "topic",
            sixth: "topic",
            seventh: "none"
        },
        fri: {
            first : "mind",
            second : "sports",
            third : "language",
            forth : "social",
            fifth : "topic",
            sixth: "topic",
            seventh: "none"
        }
}]
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
    day.innerText = `${month}월 ${currentDate}일 ${currentDay}요일`;
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

    if(now == "end" || now == "break"){
        link.innerHTML = ''
    }
    if(now == "morning"){
        link.innerHTML = '<a href="https://www.youtube.com/watch?v=zpltA8F2M4Q" target="_blank">일어났을 때 들으면 좋은 곡!</a>'
    }
    if(now == "night"){
        link.innerHTML = '<a href="https://www.youtube.com/watch?v=p2fxv3PAtLU" target="_blank">잘 때 들으면 좋은 노래!</a>'
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
