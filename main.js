let headerCloud = document.querySelectorAll(".header__cloud")
let headerBoat = document.querySelector(".boat")

// console.log(headerCloud);

window.addEventListener("scroll" ,() => {
    // console.log(this.scrollY);
    headerCloud.forEach(clouds => {
        // console.log(el,i,arr);
        
        let speed = clouds.getAttribute("data-speed")
        
        clouds.style.transform = `translateX(${this.scrollY * speed}px)`
        headerBoat.style.transform = `translateX(${this.scrollY}px)`

        // console.log(this.scrollY);

        
    });
})

let h1= document.querySelector(".header__title")
let text = h1.innerHTML
// console.log(text);
h1.innerHTML = ""


function str (x = 0){
    h1.innerHTML = h1.innerHTML + text[x]
    x++
    if (x < text.length) {
        setTimeout(() => {
            str(x)
        }, 500);
    }else if (x == text.length) {
        h1.style.border = "unset"
    }
}
str()


// parallax starting


let parallax =  document.querySelector('.parallax')
let img = document.querySelectorAll(".parallax__img")



// console.log(img);

parallax.addEventListener("mousemove" , (e) => {
    // console.log(e.pageY);
    // console.log(e.clientY);
    // console.log(window.innerHeight);



    img.forEach(balls => {

        const speed = balls.getAttribute("data-speed")



        const x = (window.innerHeight - e.pageX * speed)/20
        const y = (window.innerHeight - e.pageY * speed)/20


        balls.style.transform = `translate(${x}px , ${y}px)`
        // console.log(x);
    });


})

// parallax end
// time starting

let time = document.querySelector(".time")
let time__num = document.querySelectorAll(".time__num")
let header =document.querySelector(".header")

// console.log(time.offsetTop);
// console.log(time.offsetHeight);
// console.log(window.scrollY);
// console.log(header.offsetTop);
// console.log(header.offsetHeight);

window.addEventListener("scroll", function scrollTime() {
    if (this.scrollY > time.offsetHeight + header.offsetHeight) {
        time.style.background = "red"
        timeStop ()
        this.removeEventListener("scroll" , scrollTime)
    }
})
function timeStop () {
    for (let i = 0; i < time__num.length; i++) {
        let count = +time__num[i].getAttribute("data-num")
        // console.log(count);
        
        function calcNum (k = 0) {
            time__num[i].innerHTML = k
            k++
           
        
            if (k <= count) {
                setTimeout(() => {
                    calcNum(k)  
                }, 50);
            }
        }
        calcNum()
    }
}




let btn = document.querySelectorAll(".time__btn")

console.log(btn);


btn.forEach(timeBtn => {

    timeBtn.addEventListener("mousemove" , function () {
        timeBtn.style.background = "#43087f"
    })
    timeBtn.addEventListener("mouseout" , function () {
        timeBtn.style.background = "#fff"
    })
});




// time end




