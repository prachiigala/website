function validate()
{
    var  username = document.getElementById("uname")
    var  password = document.getElementById("pass")

    if(username.valu =="" ||password.value =="")
    {
        alert("No Blank Value Allowed");
        return false;
    }
    else
    {
        true;

    }
}

function setup() {
    createCanvas(400, 400);
    background(220)
  }
  
  function draw() {
    
    noStroke()
    fill("red")
    circle (mouseX, mouseY, 50)
    
  }