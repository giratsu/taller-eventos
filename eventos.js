document.addEventListener("DOMContentLoaded", () => {
    
    let buttonDiv = document.getElementById("button-div");
    buttonDiv.addEventListener('click', showAlert);

    function showAlert()
    {
        alert("Hola!, Soy el div");
    }

})