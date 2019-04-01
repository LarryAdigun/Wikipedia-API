function handleSubmit() {
     const xhttp = new XMLHttpRequest();
    const data = {
        "userName": document.getElementById("wiki").value,
        
    }
    xhttp.open("GET", "", true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(data))

}
