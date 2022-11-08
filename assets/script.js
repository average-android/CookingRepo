
let drinkSearch = document.querySelector("#drinkrecipeSearch")
let mealSearch = document.querySelector("#mealrecipeSearch")


// drinkButton.addEventListener("click", function(event) {
//   event.preventDefault();
drinkrecipeSearch.addEventListener('key up')
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

;




// mealButton.addEventListener("click", function(event) {
  // event.preventDefault();


fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealSearch)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
// });