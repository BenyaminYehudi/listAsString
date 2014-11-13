var itemArray = [];

function pushItemToArray(){
  var newItem = document.getElementById("itemInput").value;
  itemArray.push(newItem);
  document.getElementById("itemInput").value = '';
  
  var li = document.createElement("li");
  li.innerHTML = newItem;
  document.getElementById("itemList").appendChild(li);
}
