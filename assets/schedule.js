var dataElement = document.querySelector("#jorus");

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var saveData = $(this).siblings(".description").val();
  console.log(saveData);
  var dayID = $(this).parent().attr("id");
  console.log(dayID);
  localStorage.setItem(dayID, saveData);
});

$("#tuesday .description").val(localStorage.getItem("tuesday"));
$("#wednesday .description").val(localStorage.getItem("wednesday"));
$("#thursday .description").val(localStorage.getItem("thursday"));

