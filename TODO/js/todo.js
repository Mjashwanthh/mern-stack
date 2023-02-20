
//show the loader
document.getElementById("loader").style.display = "none";



fetch("/api/todos")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        //Hide the loader
document.getElementById("loader").style.display = "display";
    });

    app.get("/api/todo").fetch("<></>");

var light = true;
function setTheme() {
    if(light) {
        document.documentElement.setAttribute("data-bs-theme","dark");
       document.getElementById("themeButton").innerHTML = '<i class="fas fa-sun fa-lg fa-fw"></i>'
    }
    else {
        document.documentElement.setAttribute("data-bs-theme","light");
        document.getElementById("themeButton").innerHTML = '<i class="fas fa-moon fa-lg fa-fw"></i>'
    }
    light = !light;
}