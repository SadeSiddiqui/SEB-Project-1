function init() {
    const grid = document.querySelector(".grid")
    let currentSnake = [35, 34, 33, 32];
    let food = Math.floor(Math.random() * 100);
    const width = 10;
    const cellCount = width * width;
    const cells = [];

    console.log(food);

 // Creating the grid 
    function createGrid() {
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div');
            // cell.innerText = i;
            grid.appendChild(cell);
            cells.push(cell);
        }
    }
    createGrid();


 // Creating the snake 
    function addSnake() {
        for (i = 0; i < currentSnake.length; i++) {
            cells[currentSnake[i]].classList.add("snake")
        }
    }
    addSnake();

 // Creating the food 
    function addFood() {
        cells[food].classList.add('food');
        console.log(cells[food]);
    }
    addFood();

 // Snake interacting with the food
    function eatFood() {
        console.log('function triggered')
        console.log('current snake begin', currentSnake[0])
        console.log('food', food)
        if (currentSnake[0] === food) {
            currentSnake.unshift(food);
            console.log('eaten');
            cells[food].classList.remove("food");
            food = Math.floor(Math.random() * 100)
            console.log(food)
            // cells[food].classList.remove("food");
            addFood();
            console.log('new food');
        }
    }

 // Removing the snake
    function removeSnake() {
        for (i = 0; i < currentSnake.length; i++) {
            cells[currentSnake[i]].classList.remove("snake");
        }
    }

 // Moving the snake 
    function handleKeyDown(event) {
        removeSnake()
        console.log(food);
        if (event.keyCode === 40){
            currentSnake.unshift(currentSnake[0] + width)
            currentSnake.pop()
            console.log(currentSnake)
        } else if (event.keyCode === 39){ 
            currentSnake.unshift(currentSnake[0] + 1)
            currentSnake.pop()
            console.log(currentSnake);
        }else if (event.keyCode === 38) {
            currentSnake.unshift(currentSnake[0] - width)
            currentSnake.pop()
            console.log(currentSnake);
        } else if (event.keyCode === 37){
            currentSnake.unshift(currentSnake[0] - 1)
            currentSnake.pop()
            console.log(currentSnake);
            
        }
        addSnake()
        eatFood()
    } 

    document.addEventListener("keydown", handleKeyDown);
    /* keyCodes

    Down = 40 
    Right = 39 
    Left = 37
    Up = 38 */












}
window.addEventListener('DOMContentLoaded', init) 