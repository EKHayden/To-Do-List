// The user can enter an item in the "item" input.
// Need to get value from input when "Add to List" button is hit
//append item to list "todos"

$(document).ready(function(){

$("form").keypress(function(e) {
  //Enter key
  if (e.which == 13) {
    return false;
  }
});

  $(".add").on("click", function(){
    var listItem = $(".item").val();
    $(".toDos").append("<li>" +listItem+ "</li>");
    countItems();
    $(".item").val("");
    });

  //get the number of li's
  //update numLeft

  function countItems(){
  var numberOfTodos = $(".toDos").children().length;
  $(".numLeft").text(numberOfTodos);
}
//clear items from .todos
//reset numberOfTodos to 0

$(".clearList").on("click", function(){
  $(".toDos").children().remove();
  $(".numLeft").text(0);
});

$(".toDos").on("click", "li", function(){
  $(this).addClass("strike");
});
  //clear items with class strike
  $(".complete").on("click", function(){
    $(".strike").remove();
    countItems();
  });

});
