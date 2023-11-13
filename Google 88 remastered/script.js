let search_input;

document.getElementById("searchButton").onclick = function(){

    search_input = document.getElementById("searchInput").value;
    if (search_input == ""){
        window.alert("Input field can't be empty.");
    }
    else{
        window.location.replace("https://www.google.com/search?q=" + search_input);
    }
}
