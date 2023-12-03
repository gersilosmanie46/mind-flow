/*****************************
 * File Name: complexCode.js
 *
 * Description: This code demonstrates a complex JavaScript program with multiple functionalities.
 * It includes a custom sorting algorithm, advanced data manipulation, and an interactive user interface.
 * This program is designed for educational purposes to demonstrate complex coding techniques.
 ******************************/

// Custom sorting algorithm - Bubble Sort
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Advanced data manipulation - Object Manipulation
var data = [
  { name: "Alice", age: 25, country: "USA" },
  { name: "Bob", age: 30, country: "Canada" },
  { name: "Claire", age: 26, country: "USA" }
];

var newData = data.map(function (obj) {
  obj.age += 2;
  return obj;
});

// Interactive User Interface
var input = document.createElement("input");
input.setAttribute("type", "text");
var button = document.createElement("button");
button.innerText = "Click";
button.addEventListener("click", function () {
  var name = input.value;
  if (name) {
    alert("Hello, " + name + "!");
  }
});

var container = document.createElement("div");
container.appendChild(input);
container.appendChild(button);

document.body.appendChild(container);

// Other complex code...
// ...
// ...

// Execution starts here
console.log(bubbleSort([5, 3, 8, 2, 1])); // Sorting the array [5, 3, 8, 2, 1] using bubble sort
console.log(newData); // Manipulated objects with increased age
// The user interface is ready to interact with the user