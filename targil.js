var itemArray = [];

function pushItemToArray(){
  var newItem = document.getElementById("itemInput").value;
  itemArray.push(newItem);
  document.getElementById("itemInput").value = '';
  
  var li = document.createElement("li");
  li.innerHTML = newItem;
  var  ul = document.getElementById("itemList");
  ul.appendChild(li);
}

function showListAsString (){
  var delimiter = document.getElementById("delimiterInput").value;
  var newStr = itemArray.join(delimiter);
  document.getElementById("show").innerHTML = newStr;
}

function delimiterLocalStorage(){
  var delimiter = document.getElementById("delimiterInput").value;
  localStorage.setItem("delimiter", delimiter);
}
