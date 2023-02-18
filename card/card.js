
let count = 1;
let val = document.getElementById("name").value;
document.getElementById("toggle").onclick = function changeValues() {
    var c = "https://randomuser.me/api";
    var d = "https://randomuser.me/api"
    if(count % 2 == 1) {
        
        document.getElementById("name").innerHTML = "Virat";
        document.getElementById("designation").innerHTML = "Cricketer";
       
        changeimage(d);
    }
    else {
        document.getElementById("name").innerHTML = "Jashwanth";
        document.getElementById("designation").innerHTML = "Student & Developer";
       
        changeimage(c);
    }
   count++;
  
    changeValues();
    
    
}
function changeimage(b) {
    document.getElementById("image").setAttribute("src",b);
}