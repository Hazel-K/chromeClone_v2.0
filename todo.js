const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
// 상수 toDoForm, toDoInput, toDoList를 지정한다.
// toDoForm은 HTML에 있는 class인 js-toDoForm이다.
// toDoInput은 js-toDoForm 안에 속해 있는 input이다.
// toDoList는 HTML에 있는 class인 js-toDoList이다.

const TODOS_LS = "toDos";
// 상수 TODOS_LS는 toDos이다.

let toDos = [];
// 변수 toDos 는 비어 있는 array이다.

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos
  saveToDos();
}
// 함수 deleteToDo를 지정한다.
// 상수 btn은 인자 event의 target이다.
// 상수 li는 btn의 부모 id이다.
// 함수 toDoList에서 상수 li에 배속된 child 태그를 삭제한다.
// 상수 cleanToDos는 toDos를 함수 toDo로 filter한 것이다.
// 함수 toDo는 toDo의 id와 li의 id를 숫자화시킨 것이 일치하지 않을 때 반환한다.

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
// 함수 saveToDos를 지정한다.
// 로컬 저장소에 TODOS_LS와 string화 시킨 toDos의 값을 key, value로서 저장한다.

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click",deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
// 함수 paintToDo를 지정한다.
// 상수 li는 HTML에 li 태그를 추가한다.
// 상수 delBtn은 HTML에 버튼을 추가한다.
// 상수 span은 HTML에 span 태그를 추가한다.
// 상수 newId는 toDos 길이의 + 1이다.
// delBtn에 들어갈 text는 ❌이다.
// delBtn을 클릭할 시 함수 deleteToDo를 실행하는 이벤트 응답기를 설정한다.
// span에 들어갈 text는 인자로 받아오는 text이다.
// li에 종속된 항목으로 span을 넣는다.
// li에 종속된 항목으로 delBtn을 넣는다.
// li는 상수 newId를 id로 받는다.
// toDoList에 종속된 항목으로 li를 넣는다.
// 상수 toDoObj는 text를 인자 text의 value로 받는다.
// 상수 toDoObj는 상수 newId를 id로 받는다.
// toDos에 toDoObj를 입력한다.
// 함수 saveToDos를 실행한다.

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
// 함수 handleSubmit을 지정한다.
// 인수 event의 이벤트 기본값을 실행하지 않는다.
// 상수 currentValue는 toDoInput에 입력된 값으로 지정한다.
// 함수 paintToDo의 currentValue값을 가져온다.
// toDoInput의 값을 비운다.

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}
// 함수 loadToDos를 지정한다.
// 함수 속 상수 loadedToDos는 localStorage속 TODOS_LS의 값이다.
// loadedToDos의 값이 null이 아니라면 다음 사항을 따른다.
// 상수 parsedToDos는 loadToDos의 string들을 object로 변환시킨다.
// 변환시킨 object들을 이용하여 함수 toDo를 object마다 각각 실행시킨다.
// 함수 toDo는 함수 paintToDo에서 toDo의 text에 관한 부분을 실행시킨다.

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
// 함수 init를 설정한다.
// 함수 loadToDos를 실행한다.
// toDoForm에서 submit이 발생하면 handleSubmit 함수를 실행하는 이벤트 추적기를 추가한다.

init();
// 함수 init를 실행한다.