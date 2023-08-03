const formEl = document.querySelector('form');

const inputEl = document.querySelector('input');

const ulEl = document.querySelector('.list');

let list = JSON.parse(localStorage.getItem("list"));
// console.log(list); // test

list.forEach((task) => {
    toDoList(task);
})

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputEl.value);
    toDoList();
});

function toDoList(task){
    let newTask = inputEl.value;
    // console.log(newTask); // test
    if(task){
        newTask = task.name;
    }

    const liEl = document.createElement('li');

    if(task && task.checked){
        liEl.classList.add("checked");
    }
    // List item
    liEl.innerHTML = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    // Check button
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
    <i class="fas fa-check-square"></i>
    `;
    liEl.appendChild(checkBtnEl);

    // Delete button
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = '<i class="fas fa-trash"></i>';
    liEl.appendChild(trashBtnEl);

    // Check button event
    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
    });
    updateLocalStorage();

    // Delete button event
    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    let list = [];
    liEls.forEach((liEl) => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked"),
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
}