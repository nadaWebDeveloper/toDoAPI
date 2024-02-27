const list = document.getElementsByClassName("list-task")[0];
const digitalClocks = document.getElementsByClassName("digital-clock")[0];

const fetchTodo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        const task = data[i];
        const listTask = document.createElement("h3");
        listTask.classList.add('list-design');
        listTask.textContent = task.title;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        listTask.appendChild(checkbox);
        task.completed ? checkbox.checked = true:checkbox.checked = false;

        task.completed ? listTask.classList.add('success'):listTask.classList.add('active')
        list.appendChild(listTask);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchTodo();


const digitalClock = () => {
  const date = new Date().toLocaleTimeString();
  digitalClocks.textContent = date;
};

setInterval(digitalClock, 1000);
