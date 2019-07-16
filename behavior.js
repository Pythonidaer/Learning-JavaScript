function myFunction() { // defines a function name with 0 parameters
  var x = document.getElementById("list1");// defines a variable which gets a document element by its ID name
  if (x.style.display === "block") { // if/else statement for if the element's display property equals none
    x.style.display = "none"; // if none is true, then make the display block
  } else {
    x.style.display = "block"; // otherwise make the display none
  }
}

function myFunction2() {
  var x = document.getElementById("list2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
