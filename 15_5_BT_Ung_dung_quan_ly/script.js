let arrayPhone = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus"]

function createOnLoad() {
    let tableCreateTxt = "<table>";
    for (let i = 0; i < arrayPhone.length; i++) {
        tableCreateTxt += "<tr>"
        tableCreateTxt += "<td>" + arrayPhone[i] + "</td>"
        tableCreateTxt += "<td>" + createEditButton(arrayPhone[i]) + "</td>"
        tableCreateTxt += "<td>" + createDeleteButton(arrayPhone[i]) + "</td>"
        tableCreateTxt += "</tr>"
    }
    tableCreateTxt += "</table>"
    document.getElementById("tablePhone").innerHTML = tableCreateTxt;
}


function createEditButton(id){
    var text = "";
    text = '<button type="button" onclick="editPhone(this.id)" id="'+id+'">Edit</button>'
    return text
  };

  function createDeleteButton(id){
    var text = "";
    text = '<button type="button" onclick="removePhone(this.id)" id="'+id+'">Delete</button>'
    return text
  };

  function add() {
    let inputNewProduct = document.getElementById("inputNewProduct").value;
    arrayPhone.push(inputNewProduct);
    createOnLoad();
  }

  function removePhone(value) {
    let index = arrayPhone.indexOf(value);
    arrayPhone.splice(index,1);
    createOnLoad();
  }

  function editPhone(value) {
    let index = arrayPhone.indexOf(value);
    // removePhone(value);
    let valueNew = prompt("Input new data");
    
    // arrayPhone.splice(index,0,valueNew);
    for (let i in arrayPhone) {
        if (arrayPhone[i] == value ) {
            arrayPhone[i] = valueNew;
            
        }
    }
    createOnLoad();
  }