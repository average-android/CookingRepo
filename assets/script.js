
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

mealButton.addEventListener("click", mealSubmit) 
function mealSubmit (event){
  event.preventDefault();
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealSearch.value)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  displaymeal(data.meals[0]);
});
};

// Display from searches

function displayDrink(data) {
  const drinkEl = getElementById("drink");
  const cocktail = data.drinks[0];
  const drinkName = cocktail.strDrink;
  // create container
  const result = document.createElement("form");
  result.className = "w-96 text-2xl rounded-lg border-2 border-black shadow-md justify-center";
  drinkEl.appendChild(result);
  // image
  const drinkImg = document.createElement("img");
  drinkImg.className = "w-32 float-left mr-4 rounded-l-lg"
  drinkImg.src = cocktail.strDrinkThumb;
  result.appendChild(drinkImg);
  // header
  const heading = document.createElement("h3");
  heading.innerHTML = drinkName;
  result.appendChild(heading);
  // save button
  const saveBtn = document.createElement("button");
  saveBtn.className = "float-right bg-white rounded-full";
  saveBtn.innerHTML = "⭐"
  result.appendChild(saveBtn);
}   

function displaymeal(food, isSaved) {
  const mealName =food.strMeal;
  // create container
  const result = document.createElement("form");
  result.id = "mealForm"
  result.className = "w-96 text-2xl rounded-lg border-2 border-black shadow-md justify-center";
  // image
  const mealImg = document.createElement("img");
  mealImg.className = "w-32 float-left mr-4 rounded-l-lg"
  mealImg.src = food.strMealThumb;
  result.appendChild(mealImg);
  // heading
  const heading = document.createElement("h3");
  heading.innerHTML = mealName;
  result.appendChild(heading);

  if(isSaved){
    const delBtn = document.createElement("button");
    delBtn.id = "delBtn";
    delBtn.className = "float-right bg-white rounded-full";
    delBtn.innerHTML = "❌";
    result.appendChild(delBtn);
    // TODO: delBtn.addEventListener('click', saveLocal.bind(null, food))
    document.getElementById("savedlist").appendChild(result);
    } else {
    // save button
    const saveBtn = document.createElement("button");
    saveBtn.id = "saveBtnMeal";
    saveBtn.className = "float-right bg-white rounded-full";
    saveBtn.innerHTML = "⭐";
    result.appendChild(saveBtn);
    saveBtn.addEventListener('click', saveLocal.bind(null, food));

    document.getElementById("meal").appendChild(result);
  }
}   

// Save Button code
// const mealSave = document.getElementById("saveBtnMeal");
const savedList = document.getElementById("savedlist");

if(!localStorage.getItem("savedlist")){
  localStorage.setItem("savedlist", JSON.stringify([]));
}

function saveLocal(food, e){
  e.preventDefault();
  let currentList = JSON.parse(localStorage.getItem("savedlist"));
  currentList.push(food);
  localStorage.setItem("savedlist", JSON.stringify(currentList));
  displaymeal(food, true);
}

// const savedBuilder = (form) => {
//   const recipe = document.createElement("li");
//   recipe.innerHTML = form + '<button onclick="deleteNote(this)>❌</button>';
//   savedList.appendChild(recipe);
// };

// const getRecipes = JSON.parse(localStorage.getItem("savedlist"));
// getRecipes.forEach((recipe) => {
//   savedBuilder(recipe);
// });

const deleteRecipe = (btn) => {
  let btnEl = btn.parentNode;
  const index = [...btnEl.parentElement.children].indexOf(btnEl);
  savedStorage.splice(index, 1);
  localStorage.setItem("savedlist", JSON.stringify(localStorage.getItem("savedlist")));
  btnEl.remove();
}

// mealSave.on('click', saveLocal);