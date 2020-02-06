const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
// 상수 toDoForm, toDoInput, toDoList를 지정한다.
// toDoForm은 HTML에 있는 class인 js-toDoForm이다.
// toDoInput은 js-toDoForm 안에 속해 있는 input이다.
// toDoList는 HTML에 있는 class인 js-toDoList이다.

console.log(toDoForm)

const TODOS_LS = "toDos";
// 상수 TODOS_LS는 toDos이다.

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}
// 함수 paintToDo를 지정한다.
// 상수 li는 HTML에 li 태그를 추가한다.
// 상수 delBtn은 HTML에 버튼을 추가한다.
// delBtn에 들어갈 text는 ❌이다.
// 상수 span은 HTML에 span 태그를 추가한다.
// span에 들어갈 text는 인자로 받아오는 text이다.
// li에 종속된 항목으로 span을 넣는다.
// li에 종속된 항목으로 delBtn을 넣는다.
// toDoList에 종속된 항목으로 li를 넣는다.

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
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
// 함수 loadToDos를 지정한다.
// 함수 속 상수 toDos는 localStorage속 TODOS_LS의 값이다.
// toDos의 값이 null이 아니라면,

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
// 함수 init를 설정한다.
// 함수 loadToDos를 실행한다.
// toDoForm에서 submit이 발생하면 handleSubmit 함수를 실행하는 이벤트 추적기를 추가한다.

init();
// 함수 init를 실행한다.