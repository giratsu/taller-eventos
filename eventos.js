document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button");
    button.addEventListener('click', buttonFunction);

    let buttonDiv = document.getElementById("button-div");
    buttonDiv.addEventListener('click', divFunction);

    function buttonFunction(event)
    {
        alert("Hola!");
        event.stopPropagation();
    }

    function divFunction()
    {
        alert("Hola!, Soy el div");
    }

})