//add default local storage class on body
document.body.classList.add(localStorage.getItem("pageColor") || 'red' );

var el = document.querySelectorAll('.color-switcher li') ;
var classesList = [] ;

//loop on element

for(var i=0 ; i<el.length ; i++ ) {

//get classes list 
classesList.push(el[i].getAttribute('data-color'));

el[i].addEventListener( "click",
function(){

//remove all old classes
document.body.classList.remove(...classesList);

//add current classes from li data attribute 
document.body.classList.add(this.getAttribute("data-color"));

//add data to local storage
localStorage.setItem("pageColor", this.getAttribute("data-color") ) ;

},
false
);

}

console.log(localStorage.getItem("pageColor"));


//font style

document.getElementById("font1").onclick = function f1 () {
    document.getElementById("test-box").style.fontFamily= "sans-serif "
    console.log("font1") ;
}


document.getElementById("font2").onclick = function f2 () {
    document.getElementById("test-box").style.fontFamily= "monospace "

}

document.getElementById("font3").onclick = function f3() {
    document.getElementById("test-box").style.fontFamily= "cursive "
}



let button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark-mode')
})



//font size

function changefontsize(type) {
    
   let ids = [ "#text" , "#test" , "#test-box"];

   ids.forEach(id => {
    let el1 = document.querySelector(id);

    let fontSize = window.getComputedStyle(el1 , null).getPropertyValue("font-size")

    fontSize = parseFloat(fontSize);

    if(type === "increase") {
    
        el1.style.fontSize = (fontSize + 5) + "px";
    }

    else{

        el1.style.fontSize = (fontSize - 5) + "px";
    }

   })
}


function log() {
    type="text/javascript"
  alert("Log out cusssuccessful");

}