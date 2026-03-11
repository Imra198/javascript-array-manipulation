let array =[]

// Push function
function addElement(){
    let element = document.getElementById("elementInput").value;
    if(element === ""){
        alert("Please enter an element to add.");
        return;
    }   
    array.push(element);
    displayArray();
}
// Pop function
function removeLast(){
    if(array.length === 0){
        alert("Array is empty.");
        return;
    }
    array.pop();
    displayArray();
}
// Shift function
function removeFirst(){
    if(array.length === 0){
        alert("Array is empty.");
        return;
    }
    array.shift();
    displayArray();
}
// Unshift function
function addFirst(){
    let element = document.getElementById("elementInput").value;
    if(element === ""){
        alert("Please enter an element to add.");
        return;
    }   
    array.unshift(element);
    displayArray();
}
// Splice function
function spliceElement(){
    let index = document.getElementById("removeIndex").value;
    if(index === ""){
        alert("Please enter an index to remove.");
        return;
    }
    index = parseInt(index);
    if(isNaN(index) || index < 0 || index >= array.length){
        alert("Invalid index.");
        return;
    }
    array.splice(index, 1);
    displayArray();
}
// Display array
function displayArray(){
    let arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.innerHTML = "";

    array.forEach((element, index) => {
        arrayDisplay.innerHTML += "Element " + index + ": " + element + "<br>";
    });
}


