function realtimeClock(){

    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + "   :   " + minutes;
        var t =setTimeout(realtimeClock,500);

}
let c = document.getElementById("can");
let ctx = c.getContext("2d");

let maxWidth = window.innerWidth ;
let maxHeight = 125;
c.width = maxWidth;
c.height = maxHeight;

const borys_width = 200;
const borys_height = 120;
let borys_x = maxWidth - borys_width;
let borys_y = maxHeight - borys_height;
let borys_speed = 5;
let borys = new Image();
borys.onload = () =>{
    ctx.drawImage(borys, borys_x, borys_y, borys_width, borys_height);
};
let borys_move = () =>{
    if(borys_x + borys_width <= 0){
        borys_speed = -borys_speed;
        borys.src = 'borys_scaled_reverse.png';
    }
    if(borys_x >= maxWidth){
        borys_speed = -borys_speed;
        borys.src = 'borys_scaled.png';
    }
    if(borys_y < 0){
        borys_y = maxHeight;
    }
    borys_x -= borys_speed;
    ctx.drawImage(borys, borys_x, borys_y, borys_width, borys_height);
}
borys.src = 'borys_scaled.png';
let animate = () =>{
    ctx.clearRect(0, 0, maxWidth, maxHeight);
    requestAnimationFrame(animate);
    borys_move();
    // console.log(`borysX: ${borys_x}\t\t borysY: ${borys_y}`);
}
animate();

window.addEventListener('resize', () =>{
    maxWidth = window.innerWidth;
    maxHeight = 125;
    c.width = maxWidth;
    c.height = maxHeight;
    borys_y = maxHeight - borys_height;
})
window.addEventListener('maximize', () =>{
    maxWidth = window.innerWidth;
    maxHeight = 125;
    c.width = maxWidth;
    c.height = maxHeight;
    borys_y = maxHeight - borys_height;
    console.log("max");
})