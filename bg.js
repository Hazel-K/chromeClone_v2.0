const body = document.querySelector("body");
// 상수 body는 HTML의 body이다.

const IMG_NUMBER = 3;
// 상수 IMG_NUMBER는 3이다.

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
// 함수 paintImage는 인자 imgNumber를 가진다.
// 상수 image는 HTML에 새 이미지 태그를 생성한다.
// 상수 image의 링크 경로는 images 폴더의 imgNumber + 1의 숫자.jpg 파일이다.
// body의 첫번째 child 앞에 상수 image를 삽입한다.
// append의 경우 마지막 child 뒤에

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
// 함수 genRandom을 지정한다.
// 상수 number는 IMG_NUMBER까지의 임의의 숫자가 나오게 하고, 소수점을 버린다. [소수점을 올릴 거라면 Math.ceil]
// 상수 number를 반환한다.

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
// 함수 init를 지정한다.
// 상수 randomNumber은 함수 genRandom이다.
// 함수 paintImage에 randomNumber를 넣어 실행한다.

init();
// 함수 init를 실행한다.