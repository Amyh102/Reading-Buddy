function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    checkTotal();
  }


for(let j = 0; j < 4; j++) {
    for(let i = 0; i < 12; i++){
        var shelfGrid = document.createElement("div");
        shelfGrid.className = "grid-item";
        shelfGrid.setAttribute("id", ((j*12) + i));
        shelfGrid.setAttribute("ondrop", "drop(event)");
        shelfGrid.setAttribute("ondragover", "allowDrop(event)");
    
        document.getElementsByClassName("grid-container")[j].appendChild(shelfGrid);
    }
}

var shelves = new Array("toRead", "joe", "amy", "comrade")

function checkTotal() {
    for(let j = 0; j < 4; j++) {
        var total = 0;
        for(let i = 0; i < 12; i++){
            if (document.getElementById(((j*12) + i)).childNodes.length > 0) { 
                total++;
            }
        }
        document.getElementById(shelves[j]).innerHTML = total;
    }

    if(document.getElementById("joe").innerHTML > document.getElementById("amy").innerHTML){
        document.getElementById("joe").style.color = "green"
        document.getElementById("amy").style.color = "red"
    }
    else if(document.getElementById("joe").innerHTML < document.getElementById("amy").innerHTML){
        document.getElementById("amy").style.color = "green"
        document.getElementById("joe").style.color = "red"
    }
    else{
        document.getElementById("joe").style.color = "orange"
        document.getElementById("amy").style.color = "orange"
    }
}

function newBook() {
    var book = document.createElement("img");
        book.className = "book-cover";
        book.setAttribute("id", document.getElementById("popup-name").value);
        book.setAttribute("src", document.getElementById("popup-img").value) 
        book.setAttribute("draggable", "true") 
        book.setAttribute("ondragstart", "drag(event)") 
}