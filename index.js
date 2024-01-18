function starttime() {
    var a = new Date();
    var hour= a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    if(hour<=12){
        hour = hour
    }else{
        hour = hour - 12
    }
    hour = zero(hour)
    min = zero(min)
    sec = zero(sec)
     
    var mode ;
    if(hour <= 12){
        mode = "PM"
    }else{
        mode = "AM" 
    }
    document.getElementById("time").innerHTML = hour +":" + min + ":" + sec + "" + mode;
    setTimeout(starttime, 500)
}
function zero(value){
    if(value < 10){
        value = '0' + value;
    }
    return value;
}

//screen
var screen = document.getElementById('screen');
function press(numvalue) {
    if(screen.value == 0 ){
        screen.value = "";
    }
    screen.value =     screen.value + numvalue;
}

function clearscreen(val){
    screen.value = val;
}
 
function backspace() {
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1);
}

function calculate() {
    if(screen.value != ''){
    try{
        clearscreen(eval(screen.value))
}catch(err){
    clearscreen('bad expression')
}
    }
}

function sin() {
screen.value = Math.sin(screen.value * Math.PI / 100);    
}
function cos() {
    screen.value = Math.cos(screen.value * Math.PI / 100);    
   }
   function tan() {
    screen.value = Math.tan(screen.value * Math.PI / 100);    
}  
function asin() {
    screen.value = Math.asin(screen.value) * (180 / Math.PI);    
 }
 function acos() {
    screen.value = Math.acos(screen.value) * (180 / Math.PI);    
 }
 function atan() {
    screen.value = Math.atan(screen.value) * (180 / Math.PI);    
 }
 function ln() {
    screen.value = Math.log(screen.value)
 }
 function log() {
    screen.value = Math.log10(screen.value)
 }

function perc() {
    screen.value = (screen.value / 100)
}
function square() {
    screen.value = Math.pow(screen.value,2)
}
function cube() {
    screen.value = Math.pow(screen.value,3)
}
function sqrt() {
    screen.value = Math.sqrt(screen.value)
}
 function exp() {
    screen.value = Math.pow(10, screen.value)
 }
    
