var memoElement = document.getElementById("field_table");

init();

function init() {
}

function onClick(event) {
    var x = event.target.cellIndex;
    var y = event.target.parentElement.rowIndex;
}

function addCategory() {
}

function editCategory() {
}

function delelteCategory() {
}

function addMemo() {
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    if(document.addEventListener){
        td.addEventListener("click" , onClick);
    }else if(document.attachEvent){
        td.attachEvent("onclick" , onClick);
    }

    tr.appendChild(td);
    memoElement.appendChild(tr);
}

function editMemo() {
}

function delelteMemo() {
    var tr = document.createElement("tr");
    var td = document.createElement("td");

    if(document.addEventListener){
        td.addEventListener("click" , onClick);
    }else if(document.attachEvent){
        td.attachEvent("onclick" , onClick);
    }

    tr.appendChild(td);
    memoElement.appendChild(tr);
}
