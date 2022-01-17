var memoElement = document.getElementById("field_table");

init();

function init() {
    var addMemoButton = document.getElementById("add_memo_button");
    addMemoButton.addEventListener("click", onClickAddMemoButton);
}

function onClickAddMemoButton(event) {
    addMemo();
}

function onClick(event) {
    var x = event.target.cellIndex;
    var y = event.target.parentElement.rowIndex;

    if (x==0) {
        editMemo(y);
    } else {
        delelteMemo(y)
    }

    editMemo();
}

// function addCategory() {
// }

// function editCategory() {
// }

// function delelteCategory() {
// }

function addMemo() {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    if(document.addEventListener){
        td1.addEventListener("click" , onClick);
    }else if(document.attachEvent){
        td1.attachEvent("onclick" , onClick);
    }
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    if(document.addEventListener){
        td2.addEventListener("click" , onClick);
    }else if(document.attachEvent){
        td2.attachEvent("onclick" , onClick);
    }
    tr.appendChild(td2);

    memoElement.appendChild(tr);
}

function editMemo(i) {
}

function delelteMemo(i) {
    memoElement.deleteRow(i);
}
