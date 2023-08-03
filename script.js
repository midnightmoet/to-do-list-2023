const formEl = document.querySelector('form');

const inputEl = document.querySelector('input');

console.log(inputEl.value);

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputEl.value);
    toDoList();
});

function toDoList(){
    let newTask = inputEl.value;
    // console.log(newTask); // test
    const liEl = document.createElement('li');
}