$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
//user-input
    var inputs =["like1","like2","like3","like4","like5","like6"];

//business-logic
    var groceryList = inputs.map(function(input){
      var inputValue = $("input#" + input).val();
      var inputUpper = inputValue.toUpperCase();
      return inputUpper;

    });
    var groceryListOut = [];
    groceryListOut = groceryList.sort();
    console.log(groceryListOut);

//user-output
     groceryListOut.forEach(function(item){
    $("ul#grocery_output").append("<li>" + item + "</li>");
  });
  $("#form1").fadeOut();

  });
});
