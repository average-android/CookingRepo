
let drinkSearch = document.querySelector("#drinkrecipeSearch")
let mealSearch = document.querySelector("#mealrecipeSearch")


drinkButton.addEventListener("click", drinkSubmit) 
function drinkSubmit (event){
  event.preventDefault();
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch.value)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  displayDrink(data)
});
};

function displayDrink(data) {
  const cocktail = data.drinks[0];
  const drinkDiv = document.getElementById("cocktail");
  const drinkName = cocktail.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = drinkName;
// drinkDiv.appendChild(heading);
const drinkImg = document.createElement("img");
drinkImg.src = cocktail.strDrinkThumb;
// drinkDiv.appendChild(drinkImg);

}   



mealButton.addEventListener("click", mealSubmit) 
function mealSubmit (event){
  event.preventDefault();
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealSearch.value)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
};
