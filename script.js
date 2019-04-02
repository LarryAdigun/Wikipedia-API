// function handleSubmit() {
    
//     const xhttp = new XMLHttpRequest();
    
//     const data =  document.getElementById("wiki").value;
    
//     const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + data + "&format=json&callback=?";
    
//     document.getElementById("results").innerHTML = this.responseText;

    
//     xhttp.open("GET", url, true)
    
//     xhttp.setRequestHeader("Content-type", "application/json")
    
//     xhttp.send()
//     console.log(this.responseText)

// }

function handleSubmit(){
  const xhttp = new XMLHttpRequest();
  const submitValue = document.getElementById("searchField").value;
  const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + submitValue + "&format=json&callback=?";
  
  document.getElementById("results").innerHTML = this.responseText;
  
    xhttp.open("GET", url, true);
    xhttp.send()
    console.log(this.responseText);
}