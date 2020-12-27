for(let j = 0; j < 4; j++) {
    for(let i = 0; i < 15; i++){
        var book = document.createElement("div");
        book.className = "grid-item";
        book.innerHTML = i;
    
        document.getElementsByClassName("grid-container")[j].appendChild(book);
    }
}


