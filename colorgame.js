var numsquares =6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedcolor;
var displaycolor = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var resetbutton = document.querySelector("#reset");
//var easy = document.querySelector("#easy");
//var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var modebutton = document.querySelectorAll(".mode");

init();
function init(){
    setupmodebuttons();
    setupsquares();
    reset();
}
function setupmodebuttons(){
    for(var i=0;i<modebutton.length;i++){
        modebutton[i].addEventListener("click", function(){
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            modebutton[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent ===  "Easy"){
                numsquares=3;
            }
            else if(this.textContent ===  "Hard"){
                numsquares=6;
            }
            else{
                numsquares=9;
            }
            reset();
        });
    
    }
    
}

function setupsquares(){
    var c=0;
    for(var i=0; i<squares.length; i++){
        //squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            c++;
            console.log(c);
            var clickedcolor = this.style.backgroundColor;
            if(clickedcolor === pickedcolor){
                messagedisplay.textContent = "CORRECT!";
                resetbutton.textContent = "Play Again?";
                c=0;
                changecolors(clickedcolor);
                h1.style.backgroundColor = clickedcolor;
            }
            else if(c>=3 && clickedcolor !== pickedcolor){
                //alert("GAME OVER");
                //messagedisplay.textContent = "GAME OVER!";
                reset();
                c=0;
                messagedisplay.textContent = "GAME OVER!";
                resetbutton.textContent = "Play Again?";
                            }
            else{
                this.style.backgroundColor = "#232323"; 
                messagedisplay.textContent = "TRY AGAIN!";
            }
        });
    }

}



function reset(){
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    displaycolor.textContent = pickedcolor;
    resetbutton.textContent = "New Colors";
    messagedisplay.textContent = "";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
    }else{
        squares[i].style.display="none";
    }
}
    h1.style.backgroundColor = "steelblue";

}
//easy.addEventListener("click", function(){
  //  hard.classList.remove("selected");
   // easy.classList.add("selected");
    //colors = generaterandomcolors(3);
    //pickedcolor = pickcolor();
    //displaycolor.textContent = pickedcolor;
    //for(var i=0; i<squares.length; i++){
      //  if(colors[i]){
        //    squares[i].style.backgroundColor = colors[i];
        //}else{
          //  squares[i].style.display = "none";
        //}
    //}
//});
//hard.addEventListener("click", function(){
  //  easy.classList.remove("selected");
    //hard.classList.add("selected");
    //colors = generaterandomcolors(6);
    //pickedcolor = pickcolor();
    //displaycolor.textContent = pickedcolor;
    //for(var i=0; i<squares.length; i++){
      //      squares[i].style.backgroundColor = colors[i];
        //    squares[i].style.display = "block";
        //}    
//});
resetbutton.addEventListener("click", function(){
   reset();
});
//displaycolor.textContent = pickedcolor;

function changecolors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generaterandomcolors(num){
    var arr=[];
    for(i=0;i<num;i++){
        arr.push(randomcolor());

    }
    return arr;
}
function randomcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}