var nsq = 6;
var colors = gRandomcolor(nsq);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   nsq = 3;
   colors = gRandomcolor(nsq);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

   for(var i=0; i<squares.length; i++){
       if(colors[i]){
          squares[i].style.backgroundColor = colors[i];
       }
       else{
           squares[i].style.display = "none";
       }
   }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
   nsq = 6;
   colors = gRandomcolor(nsq);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;

   for(var i=0; i<squares.length; i++){

        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
   }
});

resetButton.addEventListener("click", function(){
    colors = gRandomcolor(nsq);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";

    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "rgb(13, 112, 199)";
});

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    //intial color
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Congrats! You Won";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else{
            this.style.backgroundColor = "#031C19";
            messageDisplay.textContent = "Try Again!";
        }
    });

}

function changeColors(color){
    //loop
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function gRandomcolor(num){
    var arr = []

    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}