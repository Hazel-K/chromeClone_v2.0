const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
//상수로서 form과 input과 greeting을 지정한다.
//form은 html 파일 안의 class가 js-form인 태그이다.
//input은 class가 js-form인 태그 속의 input 태그이다.
//greeting은 html 파일 안의 class가 js-greetings인 태그이다.

//localstorage는 유저의 컴퓨터에 정보를 저장하는 기능이다.

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

// 상수 USER_LS와 SHOWING_ON을 지정한다.
// 상수 USER_LS는 currentUser이다.
// 상수 SHOWING_ON은 showing이다.

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
// 함수 savName을 지정한다.
// USER_LS와 텍스트를 localStorage의 데이터로서 세팅한다.

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
// 함수 handleSubmit을 지정한다.
// 인자 event의 이벤트 발생 기본값을 실행시키지 않는다.
// 함수 속 상수 currentValue를 input의 값으로 설정한다.
// 함수 paintGreeting의 currentValue의 값을 가져온다.
// 함수 saveName의 currentValue의 값을 가져온다.

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}
// 함수 askForName을 지정한다.
// 상수 form의 클래스 목록에 SHOWING_ON을 추가한다.
// 상수 form에 submit을 했을 경우 handleSubmit함수를 실행하는 이벤트 응답기를 추가한다.

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}
// 함수 paintGreeting을 지정한다.
// 상수 form의 클래스 목록에서 SHOWING_ON을 삭제한다.
// 상수 greeting의 클래스 목록에 SHOWING_ON을 추가한다.
// 상수 greeting 속에 들어갈 내용을 Hello {text}로 표시한다.

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
//함수 leadName을 지정한다.
//함수 속 상수 currnetUser는 localStorage에서 USER_LS를 가져온다.
//currentUser의 값이 null이라면 askForName 함수를 실행한다.
//currentUser의 값이 null이 아니라면 함수 paintGreeting의 currentUser의 값을 가져온다.

function init() {
    loadName();
}
//함수 init를 지정한다.
//함수 init는 loadName을 실행한다.

init();
//함수 init를 실행한다.