// Task 1
document.getElementById("task1").innerText = "Changed using 'innerText'.";

// Task 2
document.getElementById("task2").innerHTML = "<button>Game</button>";

// Task 3
document.body.style = "background-color: rgb(35, 35, 35);";

// Task 4
const items = document.getElementsByClassName("item");
for (let index = 0; index < items.length; index++) {
    items[index].style = "border: solid;";
}

// Task 5
document.getElementById("task5").href = "https://www.springboard.com/";

// Task 6
document.getElementById("task6").value = "DOM Master";