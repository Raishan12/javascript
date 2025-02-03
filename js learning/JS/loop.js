// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// q2
// for(let i=1; i<=20; i++){
//     if (i%2!=0) {
//         console.log(i)   
//     }
// }

// q3
// const colors=["Red","Green","Blue"]
// for(let i of colors){
//     console.log(i)
// }

// q4
// let sum=0
// for(let i=1;i<=50;i++){
//     sum=sum+i
// }
// console.log(sum);


// q5
// let i=10
// do{
//     console.log(i);
//     i--
// }while(i>=1)

// q6
// const numbers=[1,2,3,4,5]
// for(let i=numbers.length-1 ; i>=0; i--){
//     console.log(numbers[i])  
// }

// q7
// const items=[10, 20, 30, 40]
// let sum=0
// for(let i of items){
//     sum=sum+i
// }
// console.log(sum);

// q8
// const nums = [15, 34, 7, 23, 56]
// let large=0
// for(let i of nums){
//     if (i>large) {
//         large=i
//     }
// }
// console.log(large);

// q9
// const person = { name: 'John', age: 25, city: 'New York' }
// for(let i in person){
//     console.log(`${i} : ${person[i]}`);
// }

// q10
// const arr = [12, 7, 19, 28, 33, 40]
// var newarr=[]
// for(let i of arr){
//     if(i%2==0){
//         newarr.push(i)
//     }
// }
// console.log(newarr);

// q11
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=10; j++){
//         console.log(`${i} X ${j} = ${i*j}`)
//     }
// }

// q12 
// const nums = [4, 5, 4, 6, 7, 6, 8]
// let newarr=[]
// for(let i of nums){
//     let flag=0
//     if (newarr.length==0) {
//         newarr.push(i)
//     }else{
//         for(let j of newarr){
//             if (j==i) {
//                 flag=1
//                 break
//             }
//         }
//         if(flag==0){
//             newarr.push(i)
//         }
//     }
// }

// console.log(newarr)


// q13
// const nested = [[1, 2], [3, 4], [5, 6]]
// let arr = []
// for(let i of nested){
//     for(let j of i){
//         arr.push(j)
//     }
// }
// console.log(arr)

// q14 copyright : 12

// q15
// const sales = { January: 100, February: 200, March: 300 }
// let sum=0
// for(let i in sales){
//     sum=sum+sales[i]
// }
// console.log(sum);

// PATTERN PRINTING

// q1
// for(let i=1; i<=5; i++){
//     let a=""
//     for(let j=1; j<=i; j++){
//         a=a+j
//     }
//     console.log(a);   
// }

// q2
// for(let i=5; i>=1; i--){
//     let a=""
//     for(let j=1; j<=i; j++){
//         a=a+j
//     }
//     console.log(a);
// }


// q3
// for(let i=1; i<=5; i++){
//     let a=""
//     for(let j=1; j<=i; j++){
//         a=a+i
//     }
//     console.log(a); 
// }


// q4
// let a=1
// for(let i=1; i<=4; i++){
//     b=""
//     for(let j=1; j<=i; j++){
//         b=b+a
//         a++     
//     }
//     console.log(b);
// }

// q5
// let a=5
// for(let i=1; i<=a; i++){
//     let str=""
//     for(let j=1; j<=a-i; j++){
//         str=str+" "
//     }
//     for(let k=1; k<=i; k++){
//         str=str+"* "
//     }
//     console.log(str);
// }


// q6 ERROR
let a=4
for(let i=1; i<=a; i++){
    let str=""
    for(let j=1; j<=a-i; j++){
        str=str+" "
    }
    for(let k=1; k<=i; k++){
        str=str+"* "
    }
    console.log(str);
}
for(let i=a-1; i<=1; i--){
    let str=""
    for(let j=1; j<=i; j++){
        str=str+" "
    }
    for(let k=1; k<=a-1; k++){
        str=str+"* "
    }
    console.log(str);
}

// q7
// b="ABCDE"
// for(let i=1; i<=5; i++){
//     let a=""
//     for(let j=0; j<i; j++){
//         a=a+b[j]
//     }
//     console.log(a); 
// }

// q8
// b="ABCDEFGHIJ"
// c=0
// for(let i=1; i<=5; i++){
//     let a=""
//     for(let j=0; j<i; j++){
//         a=a+b[c]
//         c++
//     }
//     console.log(a); 
// }


// EXTRA 5 QNS


// q1
// let str="helloooo"
// let count=0
// let vowels="aeiouAEIOU"
// for(let i=0; i<str.length; i++){
//     for(let j=0; j<vowels.length; j++){
//         if(str[i]==vowels[j]){
//             count++
//         }
//     }
// }
// console.log(count);

// q2
// let str="hello"
// let len=str.length-1
// let a=""
// for(let i=len; i>=0; i--){
//     a=a+str[i]
// }
// console.log(a);

// q3
// let n=365
// let sum=0
// while(n!=0){
//     let dig=n%10
//     sum=sum+dig
//     n=Math.floor(n/10)
// }
// console.log(sum);


// q4
// let n=365
// let rev=0
// while(n!=0){
//     let dig=n%10
//     rev=(rev*10)+dig
//     n=Math.floor(n/10)
// }
// console.log(rev);


// q5












// FUNCTIONS


// q1
// function addNumbers(a, b){
//     return a+b
// }

// let res=addNumbers(10, 20)
// console.log(res);


// q2
// function isEven(num){
//     if(num%2==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(5));


// q3
// function celsiusToFahrenheit(celsius){
//     let fah=(celsius*1.8)+32
//     return fah
// }
// let res=celsiusToFahrenheit(33)
// console.log(res);



// q4
// function greet(name){
//     return "Hello "+name
// }
// console.log(greet('Raishan'));


// q5
// function findMax(a, b){
//     if(a>b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(findMax(10, 20));

// q6
// function factorial(n){
//     let fact=1
//     for(let i=1; i<=n; i++){
//         fact=fact*i
//     }
//     return fact
// }

// console.log(factorial(5));

// q7
// function countVowels(str){
//     let count=0
//     let vowels="aeiouAEIOU"
//     for(let i=0; i<str.length; i++){
//         for(let j=0; j<vowels.length; j++){
//             if(str[i]==vowels[j]){
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(countVowels("helloo"));


// q8
// function isPalindrome(str){
//     str=str.replace(/\s/g, '').toLowerCase()
//     left=0
//     right=str.length-1
//     for(let i=0; i<str.length-1; i++){
//         if(str[left]!==str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

// console.log(isPalindrome("Mala Y alam"));



// q9
// function sumArray(arr){
//     let sum=0
//     for(let i of arr){
//         sum=sum+i
//     }
//     return sum
// }

// console.log(sumArray([1,2,3,4,5]));


// q10
// function hasProperty(obj, prop){
//     return prop in obj;
// }

// let object={
//     name:'Raishan',
//     age:22,
//     place:'Aluva'
// }

// console.log(hasProperty(object, 'name'));






// let a=Number(prompt("Enter a number"))
// function fact(a){
//     if(a === 0){
//         return 1;
//     }
//     return a*fact(a-1);
// }
// alert(fact(a))