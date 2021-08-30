let burgerName = document.getElementById("burgerName");

burgerName.innerHTML = prompt()

const baseBurger = 10;

let ingredientPrice = 5;

let ingredients = document.getElementsByClassName("ingredient");

let burgerPlus = 0;

const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function(){

    for (let i = 0; i < ingredients.length; i++){

        if(ingredients[i].checked){
            burgerPlus = baseBurger + ingredientPrice;
        
        }else if(burgerName.length == 0){
            alert("è neccessario indicare un nome");
        }
    }
});


console.log(burgerPlus);