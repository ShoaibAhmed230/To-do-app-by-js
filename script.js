let addbutton =  document.getElementById("add-data");
let input = document.getElementById("input-data");
let field = document.querySelector(".data-field");   
addbutton.onclick = function buttonclick(){
    let text = document.createTextNode(input);
    let li = document.createElement('li');
    li.appendChild(text);
    if(input.value != ""){
        field.appendChild(li);
        li.innerHTML = input.value;
        input.value = "";
    }else{
        alert("wrong")
    }
}
//Enter key function
input.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        addbutton.click();
    }
});