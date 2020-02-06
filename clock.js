const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
    //상수로서 clockContainer와 clockTitle을 지정한다.
    //clockContainer는 html 파일 안의 class가 js-clock인 태그이다.
    //clockTitle은 class가 js-clock인 태그 속의 h1 태그이다.

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10  ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}
    //함수로서 getTime을 지정한다.
    //함수의 상수로서 date, minutes, hours, seconds를 지정했고, 각 상수의 기능은 'date.해당시간'으로 한다.
    //맨 위에서 지정한 상수 clockTitle속에 들어갈 텍스트는 함수 getTime에서 지정한 상수1:상수2:상수3으로 표시한다.
    //삼항연산자 표시: 상수1,상수2,상수3의 수가 10보다 작으면 상수1,상수2,상수3에 0을 붙여 출력하고, 그렇지 않으면 상수들을 그대로 출력해라.

function init() {
    getTime();
    setInterval(getTime, 1000);
}
    //함수로서 init을 지정한다.
    //이 함수는 getTime 함수를 실행한다.
    //setInterval 함수는 () 안에 다른 함수, 시간<ms>을 인자로 받는다.

init();
    //init 함수를 실행한다.