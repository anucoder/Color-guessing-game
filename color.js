var colors = []
var min = 0;
var max = 255;
var red, blue, green, color;
var ran,ranColor;
ran = Math.floor(Math.random() * (+5 - +0)) + +0;

for(var i=0;i<6;i++)
{
  red = Math.floor(Math.random() * (+max - +min)) + +min;
  green = Math.floor(Math.random() * (+max - +min)) + +min;
  blue = Math.floor(Math.random() * (+max - +min)) + +min;
  color = "rgb(" + red + ", " + green + ", " + blue + ")";
 //console.log(color);
  colors.push(color);
  if(i===ran) ranColor = color;
}

function guessedRight()
{
  for(var i=0;i<squares.length;i++)
  {
    color = colors.pop();
    //console.log(color);
    squares[i].style.background = ranColor;
  }
}


var squares = document.querySelectorAll(".square");
var para = document.querySelector("p");
para.textContent = ranColor;

for(var i=0;i<squares.length;i++)
{
  color = colors.pop();
  //console.log(color);
  squares[i].style.background = color;
}

for(var i=0;i<squares.length;i++)
{
  squares[i].addEventListener("click",function()
  {
    console.log(this.style.background+" "+ranColor);
    if(this.style.background===ranColor)
    {
      console.log("Matched");
      guessedRight();
    }
    else {
      {
        this.style.background = "#232323";
      }
    }
  });
}
