
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
  displayDrink(data.drinks[0])
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
  displaymeal(data.meals[0]);
});
};

// Display from searches

function displayDrink(drink, isSaved) {
  const drinkName = drink.strDrink;
  // create container
  const result = document.createElement("form");
  result.id = "drinkForm";
  result.className = "w-96 text-2xl rounded-lg border-2 border-black shadow-md justify-center";
  // image
  const drinkImg = document.createElement("img");
  drinkImg.className = "w-32 float-left mr-4 rounded-l-lg"
  drinkImg.src = drink.strDrinkThumb;
  result.appendChild(drinkImg);
  // header
  const heading = document.createElement("h3");
  heading.innerHTML = drinkName;
  result.appendChild(heading);

  if(isSaved){
    const delBtn = document.createElement("button");
    delBtn.id = "delBtn";
    delBtn.className = "float-right bg-white rounded-full";
    delBtn.innerHTML = "❌";
    result.appendChild(delBtn);
    delBtn.addEventListener('click', deleteRecipe.bind(null, drink));
    document.getElementById("savedlist").appendChild(result);
    } else {
    // save button
    const saveBtn = document.createElement("button");
    saveBtn.id = "saveBtnDrink";
    saveBtn.className = "float-right bg-white rounded-full";
    saveBtn.innerHTML = "⭐";
    result.appendChild(saveBtn);
    saveBtn.addEventListener('click', saveLocalDrink.bind(null, drink));

    document.getElementById("drink").appendChild(result);
  }
}   

function displaymeal(food, isSaved) {
  const mealName =food.strMeal;
  // create container
  const result = document.createElement("form");
  result.id = "mealForm";
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
    delBtn.addEventListener('click', deleteRecipe.bind(null, food));
    document.getElementById("savedlist").appendChild(result);
    } else {
    // save button
    const saveBtn = document.createElement("button");
    saveBtn.id = "saveBtnMeal";
    saveBtn.className = "float-right bg-white rounded-full";
    saveBtn.innerHTML = "⭐";
    result.appendChild(saveBtn);
    saveBtn.addEventListener('click', saveLocalMeal.bind(null, food));

    document.getElementById("meal").appendChild(result);
  }
}   

// Save Button code
// const mealSave = document.getElementById("saveBtnMeal");
// const savedList = document.getElementById("savedlist");

if(!localStorage.getItem("savedlist")){
  localStorage.setItem("savedlist", JSON.stringify([]));
}

function saveLocalMeal(food, e){
  e.preventDefault();
  let currentList = JSON.parse(localStorage.getItem("savedlist"));
  currentList.push(food);
  localStorage.setItem("savedlist", JSON.stringify(currentList));
  displaymeal(food, true);
}

function saveLocalDrink(drink, e){
  e.preventDefault();
  let currentList = JSON.parse(localStorage.getItem("savedlist"));
  currentList.push(drink);
  localStorage.setItem("savedlist", JSON.stringify(currentList));
  displayDrink(drink, true);
}

function deleteRecipe(item) {
  let list = JSON. parse(localStorage.getItem("savedlist"));
  for(let i = 0; i < list.length; i++){
    if(list[i] == item){
      list[i].splice(i, 1);
    }

    
  }

  
  
  list = JSON.stringify(list);
  localStorage.setItem("savedlist", list);
  // let btnEl = btn.parentNode;
  // const index = [...btnEl.parentElement.children].indexOf(btnEl);
  // savedStorage.splice(index, 1);
  // localStorage.setItem("savedlist", JSON.stringify(localStorage.getItem("savedlist")));
  // btnEl.remove();
}

// display saved searches first
let storageList = JSON.parse(localStorage.getItem("savedlist"));
for (let j = 0; j < storageList.length; j++){
  if(storageList[j][2] == "Alcoholic" || storageList[j][2] == "Non alcoholic"){
    displayDrink(storageList[j], true);
  } else {
    displaymeal(storageList[j], true);
  }
}