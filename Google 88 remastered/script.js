// Written by oomeravcii on GitHub!

let search_input;

document.getElementById("searchButton").onclick = function(){

    search_input = document.getElementById("searchInput").value

    window.location.replace("https://www.google.com/search?q=" + search_input);

}