let glass = document.getElementsByClassName('szklo')[0];
let red = 1; let green = 1; let blue = 1; let deg = 90;
let color = `rgba(${red},${green},${blue},1)`;
let colorDelta = 1;
let gradient = `linear-gradient(${deg}deg, rgba(0,0,0,1) 0%, ${color} 100%)`;
glass.style.background = color;
glass.style.background = gradient;
let colorSwap = () =>{
    // console.log(red, green, blue);
    if(red < 255 && red > 0){
        red += colorDelta;
    }else if(green < 255 && green > 0){
        green += colorDelta;
    }else if(blue < 255 && blue > 0){
        blue += colorDelta;
    }else{
        colorDelta = -colorDelta;
        red += colorDelta;
        green += colorDelta;
        blue += colorDelta;
    }
    // This make rotations
    if(deg > 360){
        deg = 0;
    }
    // This changes speed of animation
        deg += 0.1;
    // ==================
    color = `rgba(${red},${green},${blue},1)`;
    gradient = `linear-gradient(${deg}deg, rgba(0,0,0,1) 0%, ${color} 100%)`;
}
let timer = 1;
// This changes speed of animation
let rate = 3;
// ===============================
let glassAnimate = () =>{
    requestAnimationFrame(glassAnimate);
    if(timer % rate == 0){
        colorSwap(red,green,blue);
        console.log(color);
        glass.style.background = color;
        glass.style.background = gradient;
        timer = 1;
        
    }
    timer++;
}
glassAnimate();