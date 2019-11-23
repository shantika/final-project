console.log("cek script");

let buttonNext = document.getElementById("next");
let buttonPrev = document.getElementById("prev");

let slider = document.getElementsByClassName("slider")[0];

let sliderItem = slider.children;
console.log("tes");
var width = 0;
var slide = false;
var index = 0;
// button dikasih event
buttonNext.onclick = function () {
    slide = true;
    for (let i = 0; i <sliderItem.length; i++) {
        let item = sliderItem [i];
        console.log(item);
        if (slide) {
            //alert ("click")
            if (index < 2) {
                width -= item.clientWidth;
                // -= 
                slide = false;
                index++;
            }
        }

        item.style.transform = `translateX(${width}px)`;
    }
}

buttonPrev.addEventListener("click", function() {
    slide = true;
    for (let i = 0; i <sliderItem.length; i++) {
        let item = sliderItem [i];

        if (slide) {
            //alert ("click")
            if (index > 0) {
                width += item.clientWidth;
                slide = false;
                index--;
            }
            
        }

        item.style.transform = `translateX(${width}px)`;
    }
}
)
let arr = [2,4,6,"Apple",false];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// const next = document.getElementById("next");
// const prev = document.getElementById("prev");

// const carouselItem = carousel.children;

// var width = 0;
// var slide = false;

// next.addEventListener("click", function() {
//   slide = true;
//   for (let i = 0; i < carouselItem.length; i++) {
//     const item = carouselItem[i];

//     if (slide) {
//       width -= item.clientWidth;
//       slide = false;
//     }

//     item.style.transform = `translateX(${width}px)`;
//     console.log(width);
//   }
// });

// prev.addEventListener("click", function() {
//   slide = true;
//   for (let i = 0; i < carouselItem.length; i++) {
//     const item = carouselItem[i];

//     if (slide) {
//       width += item.clientWidth;
//       slide = false;
//     }

//     item.style.transform = `translateX(${width}px)`;
//     console.log(width);
//   }
// });

// console.log(carouselItem)
