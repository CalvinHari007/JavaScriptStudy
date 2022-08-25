var newItemCounter = 1;
var myList = document.getElementById("my-list");
var myButton = document.getElementById("my-button");
var myHeadline = document.getElementById("my-header");
var listItems = document.getElementById("my-list").getElementsByTagName("li");

//for (var i=0; i<listItems.length; i++) {
//listItems[i].addEventListener("click", activateItem);
//}

myList.addEventListener("click", activateItem);

function activateItem(e) {
   // alert("Clickdetected");
   if(e.target.nodeName == "LI") {
    myHeadline.innerHTML = e.target.innerHTML;
   }
   // this.classList.add("a");
}

myButton.addEventListener("click", createNewItem);

function createNewItem() {
    myList.innerHTML += "<li> New Item " + newItemCounter +" </li>"
    newItemCounter++;
}
