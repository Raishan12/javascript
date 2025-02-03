// q1
// function sumab(a,b){
//     sum=a+b
//     if(sum>100){
//         return "Limit exceeds"
//     }else{
//         return sum
//     }
// }

// console.log(sumab(90,40));


// q2



// q3
// function swap(a,b){
//     a=a+b
//     b=a-b
//     a=a-b

//     return ` a = ${a} \n b = ${b} `
// }

// let a=5
// let b=4
// console.log(swap(a,b))


// q4



// q5
// function postiveornegative(a){
//     a==0? 
//     console.log("Number is Zero") : 
//     a>0? 
//     console.log("The Number is Positive") : 
//     console.log("The number is Negative")
// }

// postiveornegative(0)


// q6
// function bitwiseand(a,b){
//     let c = a & b
//     return c
//     // 8 4 2 1
//     // -------
//     // 0 1 0 1
//     // 0 0 0 1
//     // _______
//     // 0 0 0 1

// }

// console.log(bitwiseand(5,1));


// q7




// q8
// function multiple(a){
//     for(let i=2; i<a; i++){
//         if(a%i==0){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// console.log(multiple(5));


// q9




// q10
// function neg(a){
//     s=a*(-1)
//     return s
// }

// console.log(neg(10));





// q11
// function age(a){
//     if(a<13){
//         return 'The person is child'
//     }else if(a<=19){
//         return "The person is Teenager"
//     }else if(a<=64){
//         return "The person is Adult"
//     }else{
//         return "The person is Senior"
//     }
// }

// console.log(age(65));

// q12
// function leapyear(a){
//     if(a%4==0){
//         return a + " is Leap Year"
//     }else{
//         return a + " is not Leap Year"
//     }
// }

// console.log(leapyear(2024));


// q13
// function largest(a,b,c){
//     if(a>b){
//         if(a>c){
//             return a + " is Larger"
//         }else{
//             return c + " is Larger"
//         }
//     }else{
//         if(b>c){
//             return b + " is Larger"
//         }else{
//             return c + " is Larger"
//         }
//     }
// }

// console.log(largest(11,12,13));


// q14
// function grade(a){
//     if(a>90){
//         return "A Grade"
//     }else if(a>80){
//         return "B Grade"
//     }else if(a>70){
//         return "C Grade"
//     }else if(a>60){
//         return "D Grade"
//     }else if(a>=50){
//         return "E Grade"
//     }else{
//         return "F Grade"
//     }
// }

// console.log(grade(98));


// q15
// function triangle(a,b,c){
//     sum=a+b+c
//     if(sum==180){
//         return "its a Triangle"
//     }else{
//         return "its not a Triangle"
//     }
// }

// console.log(triangle(90,45,45));

// q16



// q17
// function vowels(a){
//     let vow="aeiouAEIOU"
//     for(let i of vow){
//         if(a==i){
//             return "its a Vowel"
//         }
//     }
//         return "its a Consonant"
// }

// console.log(vowels("a"));

// q18
// function days(a){
//     switch (a) {
//         case "january":
//             return "31 Days"
//             break;

//         case "february":
//             return "28 Days \nin Leap Year 29 Days"
//             break;

//         case "march":may
//             return "31 Days"
//             break;
//         case "april":
//             return "30 Days"
//             break;

//         case "may":
//             return "31 Days"
//             break;

//         case "june":
//             return "30 Days"
//             break;

//         case "july":
//             return "31 Days"
//             break;

//         case "august":
//             return "31 Days"
//             break;

//         case "september":
//             return "30 Days"
//             break;
//         case "october":
//             return "31 Days"
//             break;

//         case "november":
//             return "30 Days"
//             break;

//         case "december":
//             return "31 Days"
//             break;
    
//         default:
//             return "Not Valid Month"
//             break;
//     }
// }

// console.log(days("february"));


//q19
// function palindrome(a){
//     flag=0
//     len=a.length
//     left=0
//     right=len-1
//     for(let i=0;i<len;i++){
//         for(let j=right;j<i;j--){
//             if(a[j]!=a[i]){
//                 return "Not Palindrome"
//                 break
//             }
//         }
//         left++
//         right--
//     }
//     if(flag==0){
//         return "Palindrome"
//     }
// }
// console.log(palindrome("malayalam"));


// q20 ERROR
// function password(a){
//     flag=0
//     let char=8
//     let lcase="abcdefghijklmnopqrstuvwxyz"
//     let ucase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let spcl="~`_-+={}[]|\:';<,>.?/!@#$%^&*()1234567890"
//     if(a.length>=char){
//         flag++
//     }else{
//         return "Password is Not Strong"
//     }

//     for(let i of a){
//         for(let j of lcase){
//             if(i==j)
//                 flag++
//         }
//         if(flag==2){
//             break
//         }
//     }

//     for(let i of a){
//         for(let j of ucase){
//             if(i==j)
//                 flag++
//         }
//         if(flag==3){
//             break
//         }
//     }
//     for(let i of a){
//         for(let j of spcl){
//             if(i==j)
//                 flag++
//         }
//         if(flag==4){
//             break
//         }
//     }

//     if(flag==4){
//         return "Password is Strong"
//     }else{
//         return flag
//     }
// }

// console.log(password("Raishan@123"));


// q21
// function fibo(n){
//     a=0
//     b=1
//     console.log(a+"\n"+b);
//     for(let i=3; i<=10; i++){
//         a=b
//         console.log(a);
//         b=a+b
//     }
// }

// fibo(10)



// q22
// function rev(a){
//     let b=""
//     for(let i=a.length-1; i>=0; i--){
//         b=b+a[i]
//     }
//     return b
// }
// console.log(rev("abcd"));

// qpatter1
// for(let i=1; i<=5; i++){
//     str=""
//     for(let j=1; j<=5; j++){
//         if(i==1 || i==5){
//             str=str+"*"
//         }else{
//             if(j==1 || j==5){
//                 str=str+"*"
//             }else{
//                 str=str+" "
//             }
//         }
//     }
//     console.log(str);
// }

// qpatter2
// for(let i=1; i<=5; i++){
//     str=""
//     for(let j=i; j<=4; j++){
//         str=str+" "
//     }
//     for(var k=1; k<i; k++){
//         str=str+k
//     }
//     for(let l=k; l>=1; l--){
//         str=str+l
//     }
//     console.log(str);
// }


// qpattern3
// for(let i=1; i<=5; i++){
//     str=""
//     for(let j=i; j<=4; j++){
//         str=str+" "
//     }
//     for(let k=1; k<i; k++){
        
//     }
// }