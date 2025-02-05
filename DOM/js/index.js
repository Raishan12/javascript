// q1
// a=document.createElement('button')
// a.innerHTML="<b>Fullform of DOM?</b>"
// a.setAttribute("style","background-color:grey; color:white; border: 1px dashed; width:300px")
// document.body.appendChild(a)
// d=document.createElement('span')
// d.innerHTML="Document Object Model"
// d.setAttribute("style","background-color:white; color:grey; border: 1px dashed; width:300px; text-align:center")
// document.body.appendChild(d)
// d.style.display="none"
// a.onclick=()=>{
//     if (d.style.display=="none") {
//         d.style.display="block"
//     }else{
//         d.style.display="none"
//     }
// }




// q2
// a=document.createElement('div')
// a.setAttribute("style","position:fixed; border: 1px solid black;height:30px ;width:30px; border-radius:50%")
// a.setAttribute("id","crsr")
// document.body.appendChild(a)
// cursor=document.getElementById("crsr")
// document.body.style.height="100vh"
// document.body.addEventListener("mousemove", function(e){
//     cursor.style.left = `${e.clientX}px`
//     cursor.style.top = `${e.clientY}px`
// })



// q3
// a=document.createElement('div')
// a.innerHTML="<p>Hover Mehhhh!!!</p>"
// a.classList.add('main')
// document.body.appendChild(a)

// x=document.createElement('span')
// x.innerHTML="Tooltip"
// x.classList.add('tooltip')
// x.setAttribute("style","display: none; background-color: grey; color: white; width:60px; text-align:center; position:relative; top:-18px; border-radius:5px")
// document.body.appendChild(x)

// a.addEventListener("mouseover", ()=>{
//     x = document.querySelector("span")
//     x.style.display = "block"
//  })


// a.addEventListener("mouseout", ()=>{
//     x = document.querySelector("span")
//     x.style.display = "none"
//  })


// q4

// a = document.createElement('h1')
// a.textContent = "DropDown"
// a.setAttribute('style','width:160px; border:1px solid black; text-align:center; background-color:grey; color:white; cursor:pointer')

// x1 = document.createElement('span')
// x1.textContent = "RED"
// x1.style.display = 'none'text
// x1.style.backgroundColor = 'grey'
// x1.style.color = 'white'
// x1.style.width = '160px'
// x1.style.textAlign = 'center'
// x1.style.border = '1px solid black'
// x1.style.position = 'relative'
// x1.style.top = '-22px'

// x2 = document.createElement('span')
// x2.textContent = "BLUE"
// x2.style.display = 'none'
// x2.style.backgroundColor = 'grey'
// x2.style.color = 'white'
// x2.style.width = '160px'
// x2.style.textAlign = 'center'
// x2.style.border = '1px solid black'
// x2.style.position = 'relative'
// x2.style.top = '-22px'


// x3 = document.createElement('span')
// x3.textContent = "GREEN"
// x3.style.display = 'none'
// x3.style.backgroundColor = 'grey'
// x3.style.color = 'white'
// x3.style.width = '160px'
// x3.style.textAlign = 'center'
// x3.style.border = '1px solid black'
// x3.style.position = 'relative'
// x3.style.top = '-22px'


// document.body.appendChild(a)
// document.body.appendChild(x1)
// document.body.appendChild(x2)
// document.body.appendChild(x3)


// function dropdown(x1){
//     if (x1.style.display == "none"){
//         x1.style.display = 'block'
//         x2.style.display = 'block'
//         x3.style.display = 'block'
//     }


//     else{
//         x1.style.display = 'none'
//         x2.style.display = 'none'
//         x3.style.display = 'none'
//     }
// }
// a.addEventListener('click', function(){dropdown(x1)})


// q5
// let a = document.createElement('button');
// a.setAttribute('style', 'width:60px; height:50px;');
// a.textContent = "Click Me";
// document.body.appendChild(a);


// a.addEventListener("mouseenter", function() {
//     a.style.backgroundColor = "grey";
//     a.style.color = "white";
//     a.style.fontSize = "15px";  
//     a.style.transform = "scale(1.2)"; 
// });


// a.addEventListener("mouseleave", function() {
//     a.style.backgroundColor = "white";
//     a.style.color = "black";
//     a.style.fontSize = "13px"
//     a.style.transform = "scale(1)"
// });



// q6
// a=document.getElementById("ss")
// b=document.getElementById("pp")
// x=0
// a.addEventListener('keydown', ()=>{
//     x++
//     b.textContent=x
// })

// q7
// a=document.getElementById("ss")
// document.body.style.height="150vh"
// speed=1
// window.addEventListener("scroll", ()=>{
//     a.style.transform=`translateY(${window.scrollY * speed}px)`
// })

// q8
// a=document.getElementById("ss")
// b=document.getElementById("pp")

// b.addEventListener("click", ()=>{
//     a.style.display="flex"
//     a.style.justifyContent="center"
//     a.style.alignItems="center"
// })

// a.addEventListener("click", ()=>{
//     a.style.display="none"
// })


// q9
// a=document.getElementById("ss")
// b=document.getElementById("pp")
// a.addEventListener("click", ()=>{
//     b.textContent="This is the page after button clicked"
// })


// q10
// a=document.getElementById("ss")
// b=document.getElementById("pp")
// x=document.getElementById("xx")

// a.addEventListener("click", ()=>{
//     b.style.display="flex"
//     b.style.justifyContent="space-between"
//     x.style.cursor="pointer"
// })

// x.addEventListener("click", ()=>{
//     b.style.display="none"
// })


// eq1


// a=document.getElementById("ss")
// b=document.getElementById("pp")
// x=document.getElementById("xx")

// a.addEventListener("click", ()=>{
//     b.style.display="flex"
//     b.style.justifyContent="space-between"
//     x.style.cursor="pointer"
// })

// x.addEventListener("click", ()=>{
//     b.style.display="none"
// })


// eq2
// a=document.getElementById("ss")
// b=document.getElementById("pp")
// x=document.getElementById("xx")
// b.addEventListener("click", ()=>{
//     for(let i=1; i<=a.value; i++){
//         z=document.createElement("p")
//         c=i
//         if(i%3==0 && i%5==0){
//             c="FizzBuzz"
//         }else if(i%3==0){
//             c="Fizz"
//         }else if(i%5==0){
//             c="Buzz"
//         }
//         z.textContent=`${c}`
//         document.body.appendChild(z)
//     }
//     a.value=""
// })



// eq3
// a=document.getElementById("ss")
// b=document.getElementById("pp")

// a.addEventListener("keydown", ()=>{
//     b.textContent=a.value
// })



// eq4
// a=document.getElementById("ss")
// b=document.getElementById("pp")

// a.addEventListener("keyup", ()=>{
//     emoji=a.value
//     emoji=emoji.replace("love","❤️")
//     emoji=emoji.replace("heart","🫀")
//     emoji=emoji.replace("laugh","😂")
//     emoji=emoji.replace("sad","🙁")
//     emoji=emoji.replace("angry","😡")

//     b.textContent=emoji
// })


// eq5
// a=document.getElementById("ss")
// a.style.position="absolute"
// a.style.left="0px"
// a.style.top="0px"
// left=0
// up=0

// document.addEventListener("keydown", (event)=>{
//     switch (event.key) {
//         case 'ArrowLeft':
//             left -= 50
//             a.style.left = left + 'px'
//             break
//         case 'ArrowRight':
//             left += 50
//             a.style.left = left + 'px'
//             break
//         case 'ArrowUp':
//             up -= 50
//             a.style.top = up + 'px'
//             break
//         case 'ArrowDown':
//             up += 50
//             a.style.top = up + 'px'
//             break
//     }
// })




// eq6
screen=document.getElementById("scrn")
b1=document.getElementById("1")
b2=document.getElementById("2")
b3=document.getElementById("3")
b4=document.getElementById("4")
b5=document.getElementById("5")
b6=document.getElementById("6")
b7=document.getElementById("7")
b8=document.getElementById("8")
b9=document.getElementById("9")
b0=document.getElementById("0")
bdot=document.getElementById("dot")
bplus=document.getElementById("plus")
bminus=document.getElementById("minus")
bmul=document.getElementById("mul")
bdivi=document.getElementById("divi")
beq=document.getElementById("beq")
bc=document.getElementById("C")
bac=document.getElementById("AC")

dis=""
b1.addEventListener("click", ()=>{
    dis=dis+1
    screen.value=dis
})

b2.addEventListener("click", ()=>{
    dis=dis+2
    screen.value=dis
})

b3.addEventListener("click", ()=>{
    dis=dis+3
    screen.value=dis
})

b4.addEventListener("click", ()=>{
    dis=dis+4
    screen.value=dis
})

b5.addEventListener("click", ()=>{
    dis=dis+5
    screen.value=dis
})

b6.addEventListener("click", ()=>{
    dis=dis+6
    screen.value=dis
})

b7.addEventListener("click", ()=>{
    dis=dis+7
    screen.value=dis
})

b8.addEventListener("click", ()=>{
    dis=dis+8
    screen.value=dis
})

b9.addEventListener("click", ()=>{
    dis=dis+9
    screen.value=dis
})

b0.addEventListener("click", ()=>{
    dis=dis+0
    screen.value=dis
})

bdot.addEventListener("click", ()=>{
    dis=dis+"."
    screen.value=dis
})

bplus.addEventListener("click", ()=>{
    dis=dis+'+'
    screen.value=dis
})

bminus.addEventListener("click", ()=>{
    dis=dis+'-'
    screen.value=dis
})

bmul.addEventListener("click", ()=>{
    dis=dis+'*'
    screen.value=dis
})

bdivi.addEventListener("click", ()=>{
    dis=dis+'/'
    screen.value=dis
})

beq.addEventListener("click", ()=>{
    dis=eval(dis)
    screen.value=dis
})

bac.addEventListener("click", ()=>{
    dis=''
    screen.value=dis
})

bc.addEventListener("click", ()=>{
    dis=dis.substring(0, dis.length-1)
    screen.value=dis
})