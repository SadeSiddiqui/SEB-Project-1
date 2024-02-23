Overview of Snake Game

Snake is a grid based game. You control a sequence of blue cells, the snake, and your goal is to eat the food, the one yellow cell, and every time you eat the food the snake increases its length by one cell. 

Link to the game

https://sadesiddiqui.github.io/SEB-Project-1/ 

HTML, CSS and JavaScript 

HTML was used to create the div classes for the grid and wrapper 
CSS was used to design the layout of the grid, the snake and the food 
JavaScript was used to create the snake, food and the grid. In addition, we used if statements to the move the snake in all arrow directions and to create functions to make the food appear in a different location everytime the snake eats at. Also, we created a function to enable to increase by one cell everytime it eats the food.

My approach 

To begin with I created the grid and gave 100 cells

    const grid = document.querySelector(".grid")
    const width = 10;
    const cellCount = width * width;
    const cells = [];
    
Then I created the let variables for the snake and food, The snake has a data type of an array which presents its original location in the grid when the game starts, then with the food varaible I wanted there location to be different everytime the game is started so we gave it the Math.floor(Math(random) * 100) to select a random number and the * 100 since there are 100 cells in the grid.

    let currentSnake = [35, 34, 33, 32];
    let food = Math.floor(Math.random() * 100);


Then I created the addSnake function to create the snake element inside the grid, using a for loop and the currentSnake varaible to display the snake being four cells long in the begining of the game.

    function addSnake() {
        for (i = 0; i < currentSnake.length; i++) {
            cells[currentSnake[i]].classList.add("snake")
        }
    }
    addSnake();

I created the addFood function using the square bracket quotation and the classList. add method to this using with the food variable would display the food element as a random single coloured cell in the grid.

    function addFood() {
        cells[food].classList.add('food');
        console.log(cells[food]);
    }
    addFood();


I created the eatFood function, this represents what happens after the snake head eats the food, in the code it shows that once the value of the snake head is the exact value of the cell that the food is in then it uses the unshift method to add a cell to the begining of the array, which is the snake in this code. After the unshift method the classList.remove and the pop method are used to remove a classlist from a div at the snake length and the pop method remove that div from the array this is used so that the code doesn't leave classList items on divs where they are not needed. Also, in the if statement we use the removeList.remove(food) and then the Math.floor(Math(random) * 100) these two removes the previous value of the food varaible and then gives a new value causing to show up in a different location in the grid after the food is eaten. 

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
            addFood();
            console.log('new food');
        }
    }

I created the removeSnake function to be used in the handleKeyDown if statements so that the snake length only increases when it eats the food and not in any other condition.

    function removeSnake() {
        for (i = 0; i < currentSnake.length; i++) {
            cells[currentSnake[i]].classList.remove("snake");
        }
    }

The handleKeyDown fucntions contains the if statements that allows the user to move the snake within the grid. Within the original location of the snake when the game starts its keyCode are; 40 = down, 39 = right, 38 = up and 37 = left. The if statement shows that if the snake's head keyCode mathces any of the keyCodes that link with the arrow movements then the code block is triggered all the if statments have roughly the same code block except for the currentSnake.unshift(currentSnake[0] ) the endin of this coding depends on the key code if its down the it will be currentSnake.unshift(currentSnake[0] + width) this change the value of the snake head to value in which it lands on after that movement, in the code width = 10 so the snake head value will increase by 10, if its up then it will be currentSnake.unshift(currentSnake[0] - width) meaning instead of the snake value increasing it will decrease 10, with the left arrow the front value will decrease by 1 and with the right arrow the front value will increase by one. 

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



   

