fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});
let = drinkSearch = "martini"
let mealSearch = "cake"

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealSearch)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
});