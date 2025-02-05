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
// x1.style.display = 'none'
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