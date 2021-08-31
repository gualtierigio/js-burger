

let calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function(){

    if(burgerName.value.length == 0){
        alert("è neccessario indicare un nome");
    }else {
        const baseBurger = 10;

        let ingredientPrice = document.getElementsByClassName("ingredient")
    }

    let burgerName = document.getElementById("burgerName");

    let ingredients = document.getElementsByClassName("ingredient");

    let coupons = ["pippo", "gino", "pino"]

    for (let i = 0; i < ingredients.length; i++){

        if(ingredients[i].checked){
            let costoIngredienti = 5;
            baseBurger += costoIngredienti;
        
        }
        
        let coupon = document.getElementById("coupon");

        if (coupon.value.length > 0){
            if (coupons.includes(coupon.value)){
                baseBurger = baseBurger * 0.8;
            }
        }else {
            (console.log("non hai lo sconto"))
        }
        
    }
});


console.log(baseBurger;

burgerPlus.innerHTML