
// q1 skip

// q2
// function oddoreven(a){
//     if(a&1){
//         console.log("Its an odd number")
//     }else{
//         console.log("its an even number")
//     }
// }
// oddoreven(5)


// q3
// function power(a){
//     if(a<=0){
//         return false
//     }
//     return (a & (a-1))===0
// }

// console.log(power(8));



// q4
// a=10
// b=20
// c=30
// a>b?
//     a>c? console.log("a is greater") : console.log("c is greater"):
//     b>c? console.log("b is greater") : console.log("c is greater")
    
    
// q5 skip


// q6
// function leapyear(a){
//     if(a%4==0){
//         console.log("Its a leap year");
//     }else{
//         console.log("Its not a leap year");
//     }
// }

// leapyear(2025)
    


// Q7 skip



// q8
// function celsius(a){
//     if(a<=10){
//         console.log("cold")
//     }else if(a<=30){
//         console.log("warm")
//     }else{
//         console.log("Hot")
//     }
// }

// celsius(33)


// q9
// a=10

// a==0?
//     console.log("The number is zero") :
//     a>0? console.log("The number is Positive") : console.log("The number is Negative")
    


// q10

// function ageverify(age){
//     if(age>=1 && age<=100){
//         return alert("The age is in between 1 and 100")
//     }else{
//         return alert("The age is not in between 1 and 100")
//     }
// }

// age=parseInt(prompt("Enter age"))
// ageverify(age)
    


// q11 error                                                                                 <-ERROR ERROR ERROR
// console.log("2")
// for(let i=3; i<=100; i++){
//     for(let j=2; j<i; j++){
//         if(i%j==0){
//             break
//         }
//         console.log(i);
//     }
// }


// q12
// function reverse(a){
//     str=""
//     for(let i=a.length-1; i>=0; i--){
//         str=str+a[i]
//     }
//     return str
// }

// b=reverse("abcd")
// console.log(b);


// q13
// function sumofdigits(a){
//     sum=0
//     while(a!=0){
//         dig=a%10
//         sum=sum+dig
//         a=Math.floor(a/10)
//     }
//     return sum
// }
// result=sumofdigits(123)
// console.log(result)



// q14
// function factorial(a){
//     fact=1
//     i=1
//     do{
//         fact=fact*i
//         i++
//     }while(i<=a)
//     return fact
// }

// result=factorial(5)
// console.log(result)


// q15 skip


// q16                                                                                          <--ERROR IN PAPER
// a={
//     name:"Raishan",
//     age:22,
//     place:"Aluva"
// }

// for(let i in a){
//     console.log(`${i} : ${a[i]}`)
// }


// q17                                                                                        <-- small error in paper
// n=10
// a=0
// b=1
// function fib(a,b){
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
//     n--
//     if(n>0){
//         fib(a,b)
//     }
// }
// fib(a,b)



// q18 SKIP
// q19 SKIP

// q20
// a=document.createElement('button')
// a.textContent='Click Me'
// document.body.appendChild(a)
// a.addEventListener("click", ()=>{
//     a.textContent='Clicked'
// })

// q21                                                                                          <--Error und sredhikuka
// function abc(z){
//     a=document.createElement("ul")
//     document.body.appendChild(a)
//     for(let i in z){
//         b=document.createElement("li")
//         a.appendChild(b)
//         b.textContent=z[i]
//     }
// }

// x=[1,2,3,4,5]
// abc(x)