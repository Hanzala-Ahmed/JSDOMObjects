// Q no 1 part (i)
// var main = document.getElementById("main-content");
// console.log(main);

// Q no 1 part (ii)
// var childMain = main.children;
// console.log(childMain);

// Q no 1 part (iii)
// var render = document.getElementsByClassName("render");
// for (i = 0; i < render.length; i++) {
//   console.log(render[i].innerHTML);
// }

// Q no 1 part (iv)
// var input = document.getElementById("first-name");
// input.value = "Hello"

// Q no 1 part (v)
// var input2 = document.getElementById("last-name");
// var input1 = document.getElementById("email");
// input1.value = "input2"
// input2.value = "input3"

// Q no 2 part (i)
// The nodeType property returns the node type, as a number, of the specified node.
// var form = document.getElementById("form-content").nodeType;
// console.log(form);

// Q no 2 part (ii)
// var nodeType = document.getElementById("last-name");
// var childNodes = nodeType.childNodes
// console.log(childNodes);

// Q no 2 part (iii)
// var nodeType = document.getElementById("last-name");
// nodeType.value = "Hello"

// Q no 2 part (iii)
// var main1 = document.getElementById("main-content").firstElementChild;
// var main2 = document.getElementById("main-content").lastElementChild;
// console.log(main1);
// console.log(main2);

// Q no 2 part (iv)
// var main1 = document.getElementById("main-content").nextElementSibling;
// var main2 = document.getElementById("main-content").previousElementSibling;
// console.log(main1);
// console.log(main2);

// Q no 2 part (v)
var main = document.getElementById("email");
var main1 = main.nodeType;
var main2 = main.parentNode;
console.log(main1);
console.log(main2);