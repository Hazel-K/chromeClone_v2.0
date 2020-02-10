const weather = document.querySelector(".js-weather");
// 상수 weather는 HTML의 class가 js-weather인 태그이다.

const API_KEY = "f368c5a9a11f1aa2845994eea90ca83c";
// 상수 API_KEY는 해당 text이다.

const COORDS = "coords";
// 상수 COORDS는 coords이다.

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();        
    })
    .then(function(json){
        const tempreture = json.main.temp;
        const place = json.name;
        weather.innerText = `${tempreture} @ ${place}`;
    });
}
// 함수 getWeather의 인자는 lat와 lon이다.
// lat, lon과 API_KEY를 이용하여 네트워크에서 해당 API 정보를 실시간으로 가져온다.
// 그런 후, 함수에서 인자 response의 json의 값을 반환한다.
// 그런 후, 함수에서 인자 json의 상수 tempreture와 상수 place의 값을 내부 텍스트로 출력한다.
// 상수 tempreture는 json의 main의 temp 항목이다.
// 상수 place는 json의 name 항목이다.

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
// 함수 saveCoords는 coordsObj를 인자로 사용한다.
// 로컬 저장소에 Key와 Value를 각각 COORDS, string화 된 coordsObj로 저장한다.

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
// 함수 handleGeoSucces는 position을 인자로 사용한다.
// 상수 latitude는 position의 좌표 중 위도이다.
// 상수 longitude는 position의 좌표 중 경도이다.
// 상수 coordsObj는 상수 latitude와 상수 longitude이다.
// 함수 saveCoords를 coordsObj의 값으로 실행한다.
// 함수 getWeather를 latitude, longitude의 값으로 실행한다.

function handleGeoError() {
    console.log('Cant access geo location');
}
// 함수 handleGeoError를 지정한다.
// F12 콘솔 창에 Cant access geo location 메세지를 출력한다.

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
// 함수 askForCoords를 지정한다.
// 함수 handleGeoSucces, handleGeoError를 기본 위치로 지정하는 위치 정보를 불러온다.

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
// 함수 loadCoords를 지정한다.
// 상수 loadedCords는 로컬 저장소에서 COORDS를 얻은 값이다.
// 상수 loadedCords가 null값이면 함수 askForCoords를 실행한다.
// 그게 아니라면, 상수 parseCoords는 loadedCoords의 값을 object화 시킨 것이다.
// 함수 getWeather를 parseCoords의 latitude, parseCoords의 longitude의 값으로 실행한다.

function init() {
    loadCoords();
}
// 함수 init를 지정한다.
// 함수 loadCoords를 실행힌다.

init();
// 함수 init를 실행한다.