console.log("Thanks For Visiting My Portfolio !!!")
let arr = [98 , 80 , 89 , 85 , 76 , 70 , 79 , 65];
let bar = document.body.getElementsByClassName("bar1");
// console.log(bar);
let bars = Array.from(bar);
// console.log(bars);
for (let index = 0; index < bars.length; index++) {
    bars[index].style.background = `linear-gradient(to right , #9370db ${arr[index]}% , white ${100-arr[index]}%)`;   
}