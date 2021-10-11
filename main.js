var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var imgs = [];

for(var i=1;i<=5;i++){
    imgs.push("img"+i+".jpg");
}

var obj_data = {
    bg:{
        url: "mars.jpg",
        //img: null
    },
    rover:{
        x: 10,
        y: 10,
        width: 80,
        height: 50,
        url: "rover.png",
        //img: null
    }
}

var wait = function(millisecs){
    var date = Date.now();
    var currentdate = Date.now();
    while (currentdate - date < millisecs) {
        currentdate = Date.now();
        console.log("waiting.....");
    }
}

var Load = function(){
    canvas.style.backgroundImage = obj_data.bg.url;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    wait(2);
    
    obj_data.rover.img = new Image();
    obj_data.rover.img.src = obj_data.rover.url;
    obj_data.rover.img.onload = function(){
        ctx.drawImage(obj_data.rover.img, obj_data.rover.x, obj_data.rover.y, obj_data.rover.width, obj_data.rover.height);
        console.log("rover");
    }
}

var my_onload = function(){
    obj_data.bg.url = "url("+imgs[Math.floor(Math.random()*5)]+")";
    
    Load();
    
}

//canvas.addEventListener("onload", my_onload);

var left = function(){
    if(obj_data.rover.x>4){
        obj_data.rover.x-=5;
    }
    Load();
}, right = function(){
    if(obj_data.rover.x<canvas.width-obj_data.rover.width){
        obj_data.rover.x+=5;
    }
    Load();
}, up = function(){
    if(obj_data.rover.y>4){
        obj_data.rover.y-=5;
    }
   Load();
}, down = function(){
    if(obj_data.rover.y<canvas.height-obj_data.rover.height){
        obj_data.rover.y+=5;
    }
    Load();
}, grow = function(){
    obj_data.rover.width += 8;
    obj_data.rover.height += 5;
    Load()
}, shrink  = function(){
    obj_data.rover.width -= 8;
    obj_data.rover.height -= 5;
    Load();
}



var my_keydown = function(e){
    var KC = e.keyCode;
    switch(KC){
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
        case 32:
            grow();
            break;
        case 16:
            shrink();
            break;
        default:
            console.log("other key");
            break;
    }
    console.log("key_down called");
}

window.addEventListener("keydown", my_keydown);