const meall = document.querySelector(".meals");

// meals
async function getRandomMeal(){
    const raspData = await (await fetch("https://www.themealdb.com/api/json/v1/1/random.php")).json()
    const randomMeal = raspData.meals[0]
    addMael(randomMeal,true)
}
getRandomMeal();

function addMael(mealData , random = true){
    const meal = document.createElement("div");
    meal.classList.add('meal');

    meal.innerHTML =
        `<div class="meal-header">
            ${random ? `<span class="random">random recipe</span>` : ''}
            <img src="${mealData.strMealThumb}" alt="${mealData.Meal}">
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn"><i class="far fa-heart" aria-hidden="true"></i></button>
        </div>`;

        meall.appendChild(meal);

        const btn = document.querySelector(".meal-body .fav-btn");
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        });

}




async function getMealeById(id){
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
}




async function getMealsBySearch(term){
    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)
}

